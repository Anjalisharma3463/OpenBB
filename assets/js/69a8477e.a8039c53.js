"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18050],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},2396:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const l={title:"heatmap",description:"Learn how to use the heatmap command to easily view stock market performance. This guide outlines its usage, parameters, and provides examples for both the market and sector filters.",keywords:["heatmap command","stock market performance","market filter","sector filter","usage of heatmap","parameters of heatmap","example of heatmap command","S&P 500","NASDAQ 100","Russell 2000","Russell 1000","Dow Jones 30","Crypto","Basic Materials","Conglomerates","Consumer Goods","Financial","Healthcare","Industrial Goods","Services","Technology","Utilities"]},i=void 0,s={unversionedId:"bot/reference/discord/general/heatmap",id:"bot/reference/discord/general/heatmap",title:"heatmap",description:"Learn how to use the heatmap command to easily view stock market performance. This guide outlines its usage, parameters, and provides examples for both the market and sector filters.",source:"@site/content/bot/reference/discord/general/heatmap.md",sourceDirName:"bot/reference/discord/general",slug:"/bot/reference/discord/general/heatmap",permalink:"/bot/reference/discord/general/heatmap",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/general/heatmap.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"heatmap",description:"Learn how to use the heatmap command to easily view stock market performance. This guide outlines its usage, parameters, and provides examples for both the market and sector filters.",keywords:["heatmap command","stock market performance","market filter","sector filter","usage of heatmap","parameters of heatmap","example of heatmap command","S&P 500","NASDAQ 100","Russell 2000","Russell 1000","Dow Jones 30","Crypto","Basic Materials","Conglomerates","Consumer Goods","Financial","Healthcare","Industrial Goods","Services","Technology","Utilities"]},sidebar:"tutorialSidebar",previous:{title:"heatchart",permalink:"/bot/reference/discord/general/heatchart"},next:{title:"markets",permalink:"/bot/reference/discord/general/markets"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"general: heatmap - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command allows the user to retrieve Daily Heat Maps by Market and Sector. The Daily Heat Maps will allow the user a quick overview of current stock market performance."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/heatmap market [sector]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"market"),(0,n.kt)("td",{parentName:"tr",align:null},"Market to filter by."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"S&P 500 (sp500), NASDAQ 100 (nasdaq100), Russell 2000 (iwm2000), Russell 1000 (iwb1000), Dow Jones 30 (dow30), Crypto (crypto)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sector"),(0,n.kt)("td",{parentName:"tr",align:null},"Sector to filter by. If not specified, all sectors are returned."),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"Basic Materials (1), Conglomerates (2), Consumer Goods (3), Financial (4), Healthcare (5), Industrial Goods (6), Services (7), Technology (8), Utilities (9)")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/heatmap market:S&P 500\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/heatmap market:S&P 500 sector:Services\n")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);