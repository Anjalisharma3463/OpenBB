"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8356],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),d=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(s.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return a?n.createElement(k,i(i({ref:e},p),{},{components:a})):n.createElement(k,i({ref:e},p))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(t,e,a)=>{a.d(e,{Z:()=>l});var n=a(67294),r=a(35742);function l(t){let{title:e}=t;return n.createElement(r.Z,null,n.createElement("title",null,e))}},25137:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),l=a(88828);const i={title:"load",description:"This page provides clear instructions on how to load a stock ticker for performing analysis, with special settings like loading an Indian ticker, defining the timeframe, setting intraday minutes, including pre/after market hours, and more. It also includes usage cases and available parameters.",keywords:["stock ticker","stock analysis","DEAR systems","stock data","data analysis","finance analysis","Indian stock market","trading parameters","Yahoo Finance","custom data file","monthly data","weekly data","prepost market hours","intraday stock"]},o=void 0,s={unversionedId:"terminal/reference/stocks/ins/load",id:"terminal/reference/stocks/ins/load",title:"load",description:"This page provides clear instructions on how to load a stock ticker for performing analysis, with special settings like loading an Indian ticker, defining the timeframe, setting intraday minutes, including pre/after market hours, and more. It also includes usage cases and available parameters.",source:"@site/content/terminal/reference/stocks/ins/load.md",sourceDirName:"terminal/reference/stocks/ins",slug:"/terminal/reference/stocks/ins/load",permalink:"/terminal/reference/stocks/ins/load",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ins/load.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709640028,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{title:"load",description:"This page provides clear instructions on how to load a stock ticker for performing analysis, with special settings like loading an Indian ticker, defining the timeframe, setting intraday minutes, including pre/after market hours, and more. It also includes usage cases and available parameters.",keywords:["stock ticker","stock analysis","DEAR systems","stock data","data analysis","finance analysis","Indian stock market","trading parameters","Yahoo Finance","custom data file","monthly data","weekly data","prepost market hours","intraday stock"]},sidebar:"tutorialSidebar",previous:{title:"lit",permalink:"/terminal/reference/stocks/ins/lit"},next:{title:"lpsb",permalink:"/terminal/reference/stocks/ins/lpsb"}},d={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:p},c="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{title:"stocks /ins/load - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"Load stock ticker to perform analysis on. When the data source is yf, an Indian ticker can be loaded by using '.NS' at the end, e.g. 'SBIN.NS'. See available market in ",(0,r.kt)("a",{parentName:"p",href:"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html"},"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html"),"."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"load [-t TICKER] [-s START] [-e END] [-i {1,5,15,30,60}] [-p] [-f FILEPATH] [-m] [-w] [--performance] [--india]\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ticker"),(0,r.kt)("td",{parentName:"tr",align:null},"-t  --ticker"),(0,r.kt)("td",{parentName:"tr",align:null},"Stock ticker"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start"),(0,r.kt)("td",{parentName:"tr",align:null},"-s  --start"),(0,r.kt)("td",{parentName:"tr",align:null},"The starting date (format YYYY-MM-DD) of the stock"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-03-01"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end"),(0,r.kt)("td",{parentName:"tr",align:null},"-e  --end"),(0,r.kt)("td",{parentName:"tr",align:null},"The ending date (format YYYY-MM-DD) of the stock"),(0,r.kt)("td",{parentName:"tr",align:null},"2024-03-05"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"-i  --interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Intraday stock minutes"),(0,r.kt)("td",{parentName:"tr",align:null},"1440"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"1, 5, 15, 30, 60")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prepost"),(0,r.kt)("td",{parentName:"tr",align:null},"-p  --prepost"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre/After market hours. Only reflected in 'YahooFinance' intraday data."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filepath"),(0,r.kt)("td",{parentName:"tr",align:null},"-f  --file"),(0,r.kt)("td",{parentName:"tr",align:null},"Path to load custom file."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"monthly"),(0,r.kt)("td",{parentName:"tr",align:null},"-m  --monthly"),(0,r.kt)("td",{parentName:"tr",align:null},"Load monthly data"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"weekly"),(0,r.kt)("td",{parentName:"tr",align:null},"-w  --weekly"),(0,r.kt)("td",{parentName:"tr",align:null},"Load weekly data"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"performance"),(0,r.kt)("td",{parentName:"tr",align:null},"--performance"),(0,r.kt)("td",{parentName:"tr",align:null},"Show performance information."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"india"),(0,r.kt)("td",{parentName:"tr",align:null},"--india"),(0,r.kt)("td",{parentName:"tr",align:null},"Only works for yf source, when the ticker has .NS suffix as part of it."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("hr",null))}u.isMDXComponent=!0}}]);