import sys
from inspect import signature
from typing import (
    Annotated,
    Any,
    Callable,
    Dict,
    List,
    Optional,
    Type,
    get_args,
    get_type_hints,
    overload,
)

import pkg_resources
from fastapi import APIRouter, Depends
from openbb_provider.provider.provider_map import build_provider_mapping
from pydantic import BaseModel
from pydantic.config import BaseConfig
from pydantic.validators import find_validators

from openbb_sdk_core.app.model.command_context import CommandContext
from openbb_sdk_core.app.model.command_output import CommandOutput
from openbb_sdk_core.app.provider_interface import (
    ProviderChoices,
    get_provider_interface,
)

if sys.version_info < (3, 10):
    from typing_extensions import ParamSpec
else:
    from typing import ParamSpec

P = ParamSpec("P")


class CommandValidator:
    @staticmethod
    def is_standard_pydantic_type(value_type: Type) -> bool:
        """Check whether or not a parameter type is a valid Pydantic Standard Type."""

        class ArbitratyTypesAllowed(BaseConfig):
            arbitrary_types_allowed = True

        func = next(find_validators(value_type, config=ArbitratyTypesAllowed))
        valid_type = func.__name__ != "arbitrary_type_validator"

        return valid_type

    @staticmethod
    def is_valid_pydantic_model_type(model_type: Type) -> bool:
        if issubclass(model_type, BaseModel):
            try:
                model_type.schema_json()
                return True
            except ValueError:
                return False
        else:
            return False

    @classmethod
    def is_serializable_value_type(cls, value_type: Type) -> bool:
        return cls.is_standard_pydantic_type(
            value_type=value_type
        ) or cls.is_valid_pydantic_model_type(model_type=value_type)

    @classmethod
    def check_parameters(cls, func: Callable):
        sig = signature(func)
        parameter_map = sig.parameters

        if (
            "cc" in parameter_map
            and not parameter_map["cc"].annotation == CommandContext
        ):
            raise TypeError(
                "The parameter `cc` must be a CommandContext.\n"
                f"module    = {func.__module__}\n"
                f"function  = {func.__name__}\n"
                f"signature = {sig}\n"
            )

        for parameter in parameter_map.values():
            if not cls.is_serializable_value_type(value_type=parameter.annotation):
                raise TypeError(
                    "Invalid parameter type, please provide a serializable type like:"
                    "BaseModel, Pydantic Standard Type or CommandContext.\n"
                    f"module    = {func.__module__}\n"
                    f"function  = {func.__name__}\n"
                    f"signature = {sig}\n"
                    f"parameter = {parameter}\n"
                )

    @classmethod
    def check_return(cls, func: Callable):
        sig = signature(func)
        return_type = sig.return_annotation

        if issubclass(return_type, CommandOutput):
            item_type = get_type_hints(return_type)["item"]
            if isinstance(item_type, type(None)):
                valid_return_type = False
            else:
                generic_type_list = get_args(item_type)
                valid_return_type = cls.is_serializable_value_type(
                    value_type=generic_type_list[0]
                )
        else:
            valid_return_type = False

        if not valid_return_type:
            raise TypeError(
                "\nInvalid function: "
                f"    {func.__module__}.{func.__name__}\n"
                "Invalid return type in signature:"
                f"    {func.__name__}(...) -> {sig.return_annotation}:\n"
                "Allowed return type:"
                f"    {func.__name__}(...) -> CommandOutput[T] :\n"
                "If you need T = None, use an empty model instead.\n"
            )

    @classmethod
    def check(cls, func: Callable):
        cls.check_parameters(func=func)
        cls.check_return(func=func)


class Router:
    @property
    def api_router(self) -> APIRouter:
        return self._api_router

    def __init__(
        self,
        prefix: str = "",
    ) -> None:
        self._api_router = APIRouter(prefix=prefix)

    @overload
    def command(
        self, func: Optional[Callable[P, CommandOutput]]
    ) -> Callable[P, CommandOutput]:
        pass

    @overload
    def command(self, **kwargs) -> Callable:
        pass

    def command(
        self,
        func: Optional[Callable[P, CommandOutput]] = None,
        **kwargs,
    ) -> Callable:
        if func is None:
            return lambda f: self.command(f, **kwargs)

        api_router = self._api_router

        query = kwargs.pop("query", "")
        if query:
            kwargs["response_model_exclude_unset"] = True
            kwargs["openapi_extra"] = {"query": query}

        func = self.bind_signature(func, query)

        CommandValidator.check(func=func)

        kwargs["path"] = kwargs.get("path", f"/{func.__name__}")
        kwargs["endpoint"] = func
        kwargs["methods"] = kwargs.get("methods", ["GET"])
        kwargs["description"] = self.format_docstring(func)

        api_router.add_api_route(**kwargs)

        return func

    def include_router(
        self,
        router: "Router",
        prefix: str = "",
    ):
        tags = [prefix[1:]] if prefix else None
        self._api_router.include_router(
            router=router.api_router, prefix=prefix, tags=tags
        )

    @staticmethod
    def bind_signature(
        func: Callable[P, CommandOutput], query: str
    ) -> Callable[P, CommandOutput]:
        """Bind function signature to a query."""
        provider_interface = get_provider_interface()
        if query:
            if (
                "provider" not in func.__annotations__
                or "standard_params" not in func.__annotations__
            ):  # "extra_params" not in func.__annotations__:
                raise AttributeError(f"Invalid signature: {func.__name__}")

            if query not in provider_interface.mapping:
                raise AttributeError(
                    f"Invalid query: {query}. Check available queries with get_provider_interface().queries"
                )

            # provider
            provider_choices = provider_interface.provider_choices[query]
            func.__annotations__["provider"] = Annotated[provider_choices, Depends()]  # type: ignore

            # standard_params
            standard_params = provider_interface.params[query]["standard"]
            func.__annotations__["standard_params"] = Annotated[standard_params, Depends()]  # type: ignore

            # extra_params
            extra_params = provider_interface.params[query]["extra"]
            func.__annotations__["extra_params"] = Annotated[extra_params, Depends()]  # type: ignore

            # return
            data = provider_interface.merged_data[query]
            func.__annotations__["return"] = CommandOutput[List[data]]  # type: ignore
        elif (
            "provider" in func.__annotations__
            and func.__annotations__["provider"] == ProviderChoices
        ):
            func.__annotations__["provider"] = provider_interface.providers

        return func

    @staticmethod
    def format_docstring(func: Callable) -> str:
        doc = func.__doc__
        if doc:
            sliced = doc.split("    Parameters\n    ----------")[0]
            sliced = sliced.split("    Returns\n    -------")[0]
            sliced = "\n".join([line.strip() for line in sliced.split("\n")])

            return sliced
        return ""


class CommandMap:
    """Matching Routes with Commands."""

    @staticmethod
    def get_command_map(router: Router) -> Dict[str, Callable]:
        api_router = router.api_router
        command_map = {route.path: route.endpoint for route in api_router.routes}  # type: ignore
        return command_map

    @staticmethod
    def get_provider_coverage(router: Router) -> Dict[str, str]:
        api_router = router.api_router

        mapping = build_provider_mapping()

        coverage_map: Dict[Any, Any] = {}
        for route in api_router.routes:
            openapi_extra = getattr(route, "openapi_extra")
            if openapi_extra:
                query = openapi_extra.get("query", None)
                if query:
                    providers = list(mapping[query].keys())
                    if "openbb" in providers:
                        providers.remove("openbb")
                    for provider in providers:
                        if provider not in coverage_map:
                            coverage_map[provider] = []
                        coverage_map[provider].append(route.path)  # type: ignore

        return coverage_map

    @property
    def map(self) -> Dict[str, Callable]:
        return self._map

    @property
    def coverage(self) -> Dict[str, str]:
        return self._coverage

    def __init__(self, router: Optional[Router] = None) -> None:
        self._router = router or RouterLoader.from_plugins()
        self._map = self.get_command_map(router=self._router)
        self._coverage = self.get_provider_coverage(router=self._router)

    def get_command(self, route: str) -> Optional[Callable]:
        return self._map.get(route, None)


class RouterLoader:
    @staticmethod
    def from_plugins() -> Router:
        router = Router()
        for entry_point in pkg_resources.iter_entry_points("openbb_sdk_core_extension"):
            try:
                router.include_router(
                    router=entry_point.load(),
                    prefix=f"/{entry_point.name}",
                )
            except Exception as e:
                raise ModuleNotFoundError(
                    f"Invalid extension {entry_point.name}: {e}"
                ) from e

        return router
