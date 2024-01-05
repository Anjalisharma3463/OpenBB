"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),d=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(r),s=n,y=p["".concat(o,".").concat(s)]||p[s]||m[s]||l;return r?a.createElement(y,c(c({ref:t},u),{},{components:r})):a.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:n,c[1]=i;for(var d=2;d<l;d++)c[d]=r[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8955:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={title:"search",description:"Learn how to search for available currency pairs using the `obb.currency.search` function, and retrieve a list of results, including provider name, warnings, chart, and metadata. Explore the various parameters such as provider, symbol, date, search terms, active tickers, order data, sort field, and limit. Dive into the details of the returned data, including name, symbol, currency, stock exchange, exchange short name, code, base currency, quote currency, market, locale, currency symbol, currency name, base currency symbol, base currency name, last updated timestamp in UTC, and delisted timestamp in UTC.",keywords:["currency search","available currency pairs","obb.currency.search","provider","symbol","date","search terms","active tickers","order data","sort field","limit","results","warnings","chart","metadata","name","symbol","currency","stock exchange","exchange short name","code","base currency","quote currency","market","locale","currency symbol","currency name","base currency symbol","base currency name","last updated utc","delisted utc"]},c=void 0,i={unversionedId:"excel/reference/library/currency/search",id:"excel/reference/library/currency/search",title:"search",description:"Learn how to search for available currency pairs using the `obb.currency.search` function, and retrieve a list of results, including provider name, warnings, chart, and metadata. Explore the various parameters such as provider, symbol, date, search terms, active tickers, order data, sort field, and limit. Dive into the details of the returned data, including name, symbol, currency, stock exchange, exchange short name, code, base currency, quote currency, market, locale, currency symbol, currency name, base currency symbol, base currency name, last updated timestamp in UTC, and delisted timestamp in UTC.",source:"@site/content/excel/reference/library/currency/search.md",sourceDirName:"excel/reference/library/currency",slug:"/excel/reference/library/currency/search",permalink:"/excel/reference/library/currency/search",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/currency/search.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"search",description:"Learn how to search for available currency pairs using the `obb.currency.search` function, and retrieve a list of results, including provider name, warnings, chart, and metadata. Explore the various parameters such as provider, symbol, date, search terms, active tickers, order data, sort field, and limit. Dive into the details of the returned data, including name, symbol, currency, stock exchange, exchange short name, code, base currency, quote currency, market, locale, currency symbol, currency name, base currency symbol, base currency name, last updated timestamp in UTC, and delisted timestamp in UTC.",keywords:["currency search","available currency pairs","obb.currency.search","provider","symbol","date","search terms","active tickers","order data","sort field","limit","results","warnings","chart","metadata","name","symbol","currency","stock exchange","exchange short name","code","base currency","quote currency","market","locale","currency symbol","currency name","base currency symbol","base currency name","last updated utc","delisted utc"]},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/excel/reference/library/currency/price/historical"},next:{title:"regulators",permalink:"/excel/reference/library/regulators/"}},o={},d=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Currency Search. Search available currency pairs."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.CURRENCY.SEARCH(required; [optional])\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp, intrinio, polygon"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol of the pair to search. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"A specific date to get data for. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"search"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Search for terms within the ticker and/or company name. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"active"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify if the tickers returned should be actively traded on the queried date. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"order"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Order data by ascending or descending. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sort"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Sort field used for ordering. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"Number"),(0,n.kt)("td",{parentName:"tr",align:null},"The number of data entries to return. (provider: polygon)"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the currency pair.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol of the currency pair. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency"),(0,n.kt)("td",{parentName:"tr",align:null},"Base currency of the currency pair. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"stock_exchange"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock exchange of the currency pair. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange_short_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Short name of the stock exchange of the currency pair. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"code"),(0,n.kt)("td",{parentName:"tr",align:null},"Code of the currency pair. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"base_currency"),(0,n.kt)("td",{parentName:"tr",align:null},"ISO 4217 currency code of the base currency. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"quote_currency"),(0,n.kt)("td",{parentName:"tr",align:null},"ISO 4217 currency code of the quote currency. (provider: intrinio)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"market"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the trading market. Always 'fx'. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"locale"),(0,n.kt)("td",{parentName:"tr",align:null},"Locale of the currency pair. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency_symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"The symbol of the quote currency. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the quote currency. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"base_currency_symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"The symbol of the base currency. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"base_currency_name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the base currency. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"last_updated_utc"),(0,n.kt)("td",{parentName:"tr",align:null},"The last updated timestamp in UTC. (provider: polygon)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"delisted_utc"),(0,n.kt)("td",{parentName:"tr",align:null},"The delisted timestamp in UTC. (provider: polygon)")))))}m.isMDXComponent=!0}}]);