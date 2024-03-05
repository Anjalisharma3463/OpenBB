"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[72503],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),f=r,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(35742);function o(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},76333:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(88828);const s={title:"Data and Sources",sidebar_position:4,description:"The page discusses the data sources and functionalities of OpenBB, an aggregator of data from various sources. It guides on troubleshooting, locating data, and requesting features.",keywords:["data aggregator","troubleshooting guide","data sources","ticker symbols","load function","feature request","data providers"]},i=void 0,l={unversionedId:"terminal/faqs/data_sources",id:"terminal/faqs/data_sources",title:"Data and Sources",description:"The page discusses the data sources and functionalities of OpenBB, an aggregator of data from various sources. It guides on troubleshooting, locating data, and requesting features.",source:"@site/content/terminal/faqs/data_sources.md",sourceDirName:"terminal/faqs",slug:"/terminal/faqs/data_sources",permalink:"/terminal/faqs/data_sources",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/faqs/data_sources.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709640028,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:4,frontMatter:{title:"Data and Sources",sidebar_position:4,description:"The page discusses the data sources and functionalities of OpenBB, an aggregator of data from various sources. It guides on troubleshooting, locating data, and requesting features.",keywords:["data aggregator","troubleshooting guide","data sources","ticker symbols","load function","feature request","data providers"]},sidebar:"tutorialSidebar",previous:{title:"General Operation",permalink:"/terminal/faqs/general_operation"},next:{title:"Bugs, Support, and Feedback",permalink:"/terminal/faqs/bugs_support_feedback"}},u={},c=[{value:"Data and Sources",id:"data-and-sources",level:2}],d={toc:c},p="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{title:"Data and Sources - Faqs | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("h2",{id:"data-and-sources"},"Data and Sources"),(0,r.kt)("p",null,"Please note that OpenBB does not provide any data, it is an aggregator which provides users access to data from a variety of sources. OpenBB does not maintain or have any control over the raw data supplied. If there is a specific problem with the output from a data provider, please consider contacting them first."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Is there a list of all data providers?"),(0,r.kt)("p",null,"The complete list is found ",(0,r.kt)("a",{parentName:"p",href:"/terminal/usage/data/api-keys"},"here"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How do I find and load a ticker symbol from India, or any other country?"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/terminal/menus/stocks/introduction#search"},(0,r.kt)("inlineCode",{parentName:"a"},"/stocks/search"))," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"search --country canada --industrygroup banks\n")),(0,r.kt)("p",null,"Ticker symbols listed on exchanges outside of the US will have a suffix attached, for example, Rico Auto Industries Limited:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load ricoauto.ns\n")),(0,r.kt)("p",null,"The precise naming convention will differ by source, reference each source's own documentation for specific details.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Data from today is missing."),(0,r.kt)("p",null,"By default, the load function requests end-of-day daily data and is not included until the EOD summary has been published. The current day's data is considered intraday and is loaded when the ",(0,r.kt)("inlineCode",{parentName:"p"},"interval")," argument is present."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load SPY -i 60\n"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Can I stream live prices and news feeds?"),(0,r.kt)("p",null,"The OpenBB Terminal is not currently capable of streaming live feeds through websocket connections.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,'"Pair BTC/USDT not found in binance"'),(0,r.kt)("p",null,"US-based users are currently unable to access the Binance API. Please try loading the pair from a different source, for example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"load btc --source CCXT --exchange kraken"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"How can I request functionality for a specific data source?"),(0,r.kt)("p",null,"Please ",(0,r.kt)("a",{parentName:"p",href:"https://openbb.co/request-a-feature"},"request a feature")," by submitting a new request.")))}f.isMDXComponent=!0}}]);