"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,h=p["".concat(i,".").concat(m)]||p[m]||u[m]||n;return r?o.createElement(h,l(l({ref:t},d),{},{components:r})):o.createElement(h,l({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<n;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(67294),a=r(35742);function n(e){let{title:t}=e;return o.createElement(a.Z,null,o.createElement("title",null,t))}},46333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=r(87462),a=(r(67294),r(3905)),n=r(88828);const l={title:"shortvol",description:"The page describes the 'shortvol' command used to retrieve 30-day history of short volume vs total volume of a stock ticker. It can be a useful tool to predict future price movements based on trade activity.",keywords:["shortvol command","stock ticker","trade activity","price movements","total volume","short volume","trade data analysis","stock trading"]},s=void 0,i={unversionedId:"bot/reference/discord/short_data/shortvol",id:"bot/reference/discord/short_data/shortvol",title:"shortvol",description:"The page describes the 'shortvol' command used to retrieve 30-day history of short volume vs total volume of a stock ticker. It can be a useful tool to predict future price movements based on trade activity.",source:"@site/content/bot/reference/discord/short_data/shortvol.md",sourceDirName:"bot/reference/discord/short_data",slug:"/bot/reference/discord/short_data/shortvol",permalink:"/bot/reference/discord/short_data/shortvol",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/short_data/shortvol.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"shortvol",description:"The page describes the 'shortvol' command used to retrieve 30-day history of short volume vs total volume of a stock ticker. It can be a useful tool to predict future price movements based on trade activity.",keywords:["shortvol command","stock ticker","trade activity","price movements","total volume","short volume","trade data analysis","stock trading"]},sidebar:"tutorialSidebar",previous:{title:"shortrate",permalink:"/bot/reference/discord/short_data/shortrate"},next:{title:"topshortvol",permalink:"/bot/reference/discord/short_data/topshortvol"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,{title:"short_data: shortvol - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve a graph of the 30 day history of the short volume versus the total volume of the stock ticker. The graph also displays the ratio of the total amount of shares that have been sold short versus the total amount of shares traded over the past 30 days. This data can be used to get a better understanding of the stock's trading activity and potential future price movements."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/sh shortvol ticker\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/sh shortvol ticker:AMD\n")),(0,a.kt)("hr",null))}m.isMDXComponent=!0}}]);