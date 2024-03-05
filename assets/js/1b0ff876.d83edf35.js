"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[81346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(35742);function i(e){let{title:t}=e;return o.createElement(r.Z,null,o.createElement("title",null,t))}},67846:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),r=(n(67294),n(3905)),i=n(88828);const a={title:"Building Extensions for OpenBB Platform",sidebar_position:4,description:"This guide provides a comprehensive walkthrough on how to create custom extensions for the OpenBB Platform. It covers the process from generating the extension structure to sharing it with the community.",keywords:["OpenBB Platform","Custom extension","Python development","Data integration","Community contribution"]},l=void 0,s={unversionedId:"platform/development/developer-guidelines/build_openbb_extensions",id:"platform/development/developer-guidelines/build_openbb_extensions",title:"Building Extensions for OpenBB Platform",description:"This guide provides a comprehensive walkthrough on how to create custom extensions for the OpenBB Platform. It covers the process from generating the extension structure to sharing it with the community.",source:"@site/content/platform/development/developer-guidelines/build_openbb_extensions.md",sourceDirName:"platform/development/developer-guidelines",slug:"/platform/development/developer-guidelines/build_openbb_extensions",permalink:"/platform/development/developer-guidelines/build_openbb_extensions",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/developer-guidelines/build_openbb_extensions.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709640028,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:4,frontMatter:{title:"Building Extensions for OpenBB Platform",sidebar_position:4,description:"This guide provides a comprehensive walkthrough on how to create custom extensions for the OpenBB Platform. It covers the process from generating the extension structure to sharing it with the community.",keywords:["OpenBB Platform","Custom extension","Python development","Data integration","Community contribution"]},sidebar:"tutorialSidebar",previous:{title:"Integrating Data Sources and Points",permalink:"/platform/development/developer-guidelines/add_data_point"},next:{title:"Validators",permalink:"/platform/development/developer-guidelines/validators"}},p={},d=[{value:"Best Practices",id:"best-practices",level:2},{value:"Walkthrough",id:"walkthrough",level:2},{value:"Generate the extension structure",id:"generate-the-extension-structure",level:3},{value:"Install your dependencies and package",id:"install-your-dependencies-and-package",level:3},{value:"Use your provider extension",id:"use-your-provider-extension",level:3}],u={toc:d},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Build OpenBB Extensions - Developer Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"In order to speed up the process of building an extension, we have provided a ",(0,r.kt)("strong",{parentName:"p"},"Cookiecutter")," template. It serves as a jumpstart for your extension development, so you can focus on the data and not on the boilerplate."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Take into consideration that building an extension requires a good understanding of the OpenBB Platform and that it is limited to a small set of use cases.\nBefore starting, please read the ",(0,r.kt)("a",{parentName:"p",href:"/platform/development/developer-guidelines/add_data_point"},"Integrating Data Sources and Points")," guide to make sure you really need a new extension."),(0,r.kt)("p",{parentName:"admonition"},"Extension use cases might include:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Adding a new data provider"),(0,r.kt)("li",{parentName:"ul"},"Adding a new toolkit"),(0,r.kt)("li",{parentName:"ul"},"Adding a new charting library"),(0,r.kt)("li",{parentName:"ul"},"Adding a new asset class"))),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/openbb-cookiecutter"},"Cookiecutter template")," and follow the instructions there."),(0,r.kt)("p",null,"This document will walk you through the steps of adding a new extension to the OpenBB Platform."),(0,r.kt)("p",null,"The high level steps are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate the extension structure"),(0,r.kt)("li",{parentName:"ul"},"Install your dependencies"),(0,r.kt)("li",{parentName:"ul"},"Install your new package"),(0,r.kt)("li",{parentName:"ul"},"Use your extension (either from Python or the API interface)"),(0,r.kt)("li",{parentName:"ul"},"QA your extension"),(0,r.kt)("li",{parentName:"ul"},"Share your extension with the community")),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Review Platform Dependencies"),": Before adding any dependency, ensure it aligns with the Platform's existing dependencies."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Use Loose Versioning"),": If possible, specify a range to maintain compatibility. E.g., ",(0,r.kt)("inlineCode",{parentName:"li"},">=1.4,<1.5"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Testing"),": Test your extension with the Platform's core to avoid conflicts. Both unit and integration tests are recommended."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Document Dependencies"),": Use ",(0,r.kt)("inlineCode",{parentName:"li"},"pyproject.toml")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"poetry.lock")," for clear, up-to-date records.")),(0,r.kt)("h2",{id:"walkthrough"},"Walkthrough"),(0,r.kt)("p",null,"If you do not wish to use the cookiecutter template, this section will walk through the steps of creating a new provider extension."),(0,r.kt)("h3",{id:"generate-the-extension-structure"},"Generate the extension structure"),(0,r.kt)("p",null,"We first create a new directory for our provider.  This should be located under the ",(0,r.kt)("inlineCode",{parentName:"p"},"openbb_platform/providers")," directory.  If I am adding ",(0,r.kt)("inlineCode",{parentName:"p"},"cooldatasource"),", I would create the following directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},"cooldatasource/\n\u251c\u2500\u2500 openbb_cooldatasource/\n\u2502   \u251c\u2500\u2500 models/\n\u2502   \u2502   \u2514\u2500\u2500 cooldatamodel.py\n\u2502   \u251c\u2500\u2500 utils/\n\u2502   \u2502   \u2514\u2500\u2500 helper_functions.py\n\u2502   \u2514\u2500\u2500 __init__.py\n\u251c\u2500\u2500 pyproject.toml\n\u2514\u2500\u2500 README.md\n")),(0,r.kt)("p",null,"In this structure, the ",(0,r.kt)("inlineCode",{parentName:"p"},"cooldatamodel.py")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"helper_functions.py")," are the folders handling the logic for obtaining data, as described in the next sections.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"__init__.py")," defines the provider, using the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_core.provider.abstract.provider import Provider\ncooldatasource_provider = Provider(\n    name="cooldatasource",\n    website="",\n    description="",\n    credentials=["api_key"],\n    fetcher_dict={\n        "MyModel": MyFetcher,\n    },\n)\n')),(0,r.kt)("p",null,"The pyproject.toml defines the package itself"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-[tool.poetry]"},'name = "openbb-cooldatasource"\nversion = "latest version"\ndescription = "Cool OpenBB Extension"\nauthors = ["You"]\nreadme = "README.md"\npackages = [{ include = "openbb_cooldatasource" }]\n\n[tool.poetry.dependencies]\npython = "^3.9"\nopenbb-core = "latest openbb core version"\n\n[build-system]\nrequires = ["poetry-core"]\nbuild-backend = "poetry.core.masonry.api"\n\n[tool.poetry.plugins."openbb_provider_extension"]\ncooldatasource = "openbb_cooldatasource:cooldatasource_provider"\n')),(0,r.kt)("p",null,"Where the last line (poetry.plugins) maps to the provider defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"__init__.py")," file."),(0,r.kt)("h3",{id:"install-your-dependencies-and-package"},"Install your dependencies and package"),(0,r.kt)("p",null,"The next step is to install the dependencies.  We use poetry for dependency management, so from our new directory, we generate the lock file using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"poetry lock\n")),(0,r.kt)("p",null,"In order to use the extension we will install it using pip.  For development mode, we run the following from our directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"pip install -e .\n")),(0,r.kt)("p",null,"This will install the extension in editable mode, so any changes we make will be reflected in the installed package."),(0,r.kt)("h3",{id:"use-your-provider-extension"},"Use your provider extension"),(0,r.kt)("p",null,"Once this is installed, you can use it directly in the openbb package.  If you wish to add this to the repo, please follow the instructions in the contributing section, which enforces QA guidelines for adding tests and ensuring the package is implemented properly."))}m.isMDXComponent=!0}}]);