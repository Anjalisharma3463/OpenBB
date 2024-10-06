"""EIA Short Term Energy Outlook Model."""

# pylint: disable=unused-argument

from typing import Any, Literal, Optional

from openbb_core.app.model.abstract.error import OpenBBError
from openbb_core.provider.abstract.fetcher import Fetcher
from openbb_core.provider.standard_models.short_term_energy_outlook import (
    ShortTermEnergyOutlookData,
    ShortTermEnergyOutlookQueryParams,
)
from openbb_core.provider.utils.errors import EmptyDataError
from pydantic import Field

from openbb_eia.utils.constants import (
    SteoTableMap,
    SteoTableNames,
    SteoTableType,
)


class EiaShortTermEnergyOutlookQueryParams(ShortTermEnergyOutlookQueryParams):
    """EIA Short Term Energy Outlook Query Parameters.

    Monthly short term (18 month) projections using STEO model

    Source: www.eia.gov/steo/
    """

    __json_schema_extra__ = {
        "table": {
            "multiple_items_allowed": False,
            "choices": list(SteoTableNames),
        },
        "frequency": {
            "multiple_items_allowed": False,
            "choices": ["month", "quarter", "annual"],
        },
    }
    table: SteoTableType = Field(
        default="01",
        description="""The specific table within the STEO dataset. Default is '01'.
        \n    01: US Energy Markets Summary
        \n    02: Nominal Energy Prices
        \n    03a: World Petroleum and Other Liquid Fuels Production, Consumption, and Inventories
        \n    03b: Non-OPEC Petroleum and Other Liquid Fuels Production
        \n    03c: World Petroleum and Other Liquid Fuels Production
        \n    03d: World Crude Oil Production
        \n    03e: World Petroleum and Other Liquid Fuels Consumption
        \n    04a: US Petroleum and Other Liquid Fuels Supply, Consumption, and Inventories
        \n    04b: US Hydrocarbon Gas Liquids (HGL) and Petroleum Refinery Balances
        \n    04c: US Regional Motor Gasoline Prices and Inventories
        \n    04d: US Biofuel Supply, Consumption, and Inventories
        \n    05a: US Natural Gas Supply, Consumption, and Inventories
        \n    05b: US Regional Natural Gas Prices
        \n    06: US Coal Supply, Consumption, and Inventories
        \n    07a: US Electricity Industry Overview
        \n    07b: US Regional Electricity Retail Sales
        \n    07c: US Regional Electricity Prices
        \n    07d1: US Regional Electricity Generation, Electric Power Sector
        \n    07d2: US Regional Electricity Generation, Electric Power Sector, continued
        \n    07e: US Electricity Generating Capacity
        \n    08: US Renewable Energy Consumption
        \n    09a: US Macroeconomic Indicators and CO2 Emissions
        \n    09b: US Regional Macroeconomic Data
        \n    09c: US Regional Weather Data
        \n    10a: Drilling Productivity Metrics
        \n    10b: Crude Oil and Natural Gas Production from Shale and Tight Formations
        """,
    )
    frequency: Literal["month", "quarter", "annual"] = Field(
        default="month",
        description="The frequency of the data. Default is 'month'.",
    )


class EiaShortTermEnergyOutlookData(ShortTermEnergyOutlookData):
    """EIA Short Term Energy Outlook Data Model."""

    __alias_dict__ = {
        "date": "period",
        "symbol": "seriesId",
        "title": "seriesDescription",
    }


class EiaShortTermEnergyOutlookFetcher(
    Fetcher[EiaShortTermEnergyOutlookQueryParams, list[EiaShortTermEnergyOutlookData]]
):
    """EIA Short Term Energy Outlook Fetcher."""

    @staticmethod
    def transform_query(params: dict[str, Any]) -> EiaShortTermEnergyOutlookQueryParams:
        """Transform the query parameters."""
        return EiaShortTermEnergyOutlookQueryParams(**params)

    @staticmethod
    async def aextract_data(
        query: EiaShortTermEnergyOutlookQueryParams,
        credentials: Optional[dict[str, Any]],
        **kwargs: Any,
    ) -> list[dict]:
        """Extract the data from the EIA API."""
        # pylint: disable=import-outside-toplevel
        import asyncio  # noqa
        from warnings import warn
        from openbb_core.provider.utils.helpers import amake_request

        api_key = credentials.get("eia_api_key") if credentials else ""
        frequency_dict = {
            "month": "monthly",
            "quarter": "quarterly",
            "annual": "annual",
        }
        frequency = frequency_dict[query.frequency]
        base_url = f"https://api.eia.gov/v2/steo/data/?api_key={api_key}&frequency={frequency}&data[0]=value"
        urls: list[str] = []
        symbols = SteoTableMap[query.table]
        start_date = query.start_date if query.start_date else ""
        end_date = query.end_date if query.end_date else ""

        # Format the dates based on the frequency.
        def resample_to_quarter(dt):
            """Resample a date to a string formatted as 'YYYY-QX'."""
            year = dt.year
            quarter = (dt.month - 1) // 3 + 1
            return f"{year}-Q{quarter}"

        if start_date and frequency == "monthly":
            start_date = f"&start={start_date.strftime('%Y-%m')}"
        elif start_date and frequency == "quarterly":
            start_date = f"&start={resample_to_quarter(start_date)}"
        elif start_date and frequency == "annual":
            start_date = f"&start={start_date.strftime('%Y')}"

        if end_date and frequency == "monthly":
            end_date = f"&end={end_date.strftime('%Y-%m')}"
        elif end_date and frequency == "quarterly":
            end_date = f"&end={resample_to_quarter(end_date)}"
        elif end_date and frequency == "annual":
            end_date = f"&end={end_date.strftime('%Y')}"

        # We chunk the request to avoid pagination and make the query execution faster.
        def encode_symbols(symbols_chunk):
            """Encodes a chunk of symbols to be used in a URL"""
            prefix = "&facets[seriesId][]="
            return prefix + prefix.join(symbols_chunk)

        for i in range(0, len(symbols), 10):
            symbols_chunk = symbols[i : i + 10]
            url_symbols = encode_symbols(symbols_chunk)
            url = f"{base_url}{url_symbols}{start_date}{end_date}&offset=0&length=5000"
            urls.append(url)

        results: list[dict] = []
        messages: list[str] = []

        async def get_one(url):
            """Callback to process the response"""
            res = await amake_request(url)
            data = res.get("response", {}).get("data", [])
            if not data:
                masked_url = url.replace(api_key, "API_KEY")
                messages.append(f"No data returned for {masked_url}")
            if data:
                results.extend(data)

        try:
            await asyncio.gather(*[get_one(url) for url in urls])
        except Exception as e:
            raise OpenBBError(f"Error fetching data from the EIA API -> {e}") from e

        if not results and not messages:
            raise EmptyDataError(
                "The request was returned empty with no error messages."
            )
        elif not results and messages:
            raise EmptyDataError("\n".join(messages))
        elif results and messages:
            warn("\n".join(messages))

        return results

    @staticmethod
    def transform_data(
        query: EiaShortTermEnergyOutlookQueryParams,
        data: list[dict],
        **kwargs: Any,
    ) -> list[EiaShortTermEnergyOutlookData]:
        """Transform the data."""
        # pylint: disable=import-outside-toplevel
        from pandas import Categorical, DataFrame, to_datetime

        symbols = SteoTableMap[query.table]
        table = query.table
        df = DataFrame(data)
        df.period = to_datetime(df.period).dt.date
        df.seriesId = Categorical(df.seriesId, categories=symbols, ordered=True)
        df = df.sort_values(["period", "seriesId"])
        df = df.reset_index(drop=True)
        df["order"] = df.groupby("period").cumcount() + 1
        df["table"] = (
            f"STEO - {table.replace('0', '') if table[0] == '0' else table}: {SteoTableNames[table]}"
        )
        records = df.to_dict(orient="records")

        return [EiaShortTermEnergyOutlookData.model_validate(d) for d in records]
