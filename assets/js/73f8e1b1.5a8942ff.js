"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},59624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const i={title:"vol",description:"This page provides information on using the 'vol' command in retrieving Options Volume by Strike for a specified ticker. It also includes usage examples and how to add an expiration date for more specific data.",keywords:["Options Volume","Stock Ticker","Expiration Date","Command 'vol'","Retrieve Ticker Data"]},l=void 0,p={unversionedId:"bot/reference/discord/options/vol",id:"bot/reference/discord/options/vol",title:"vol",description:"This page provides information on using the 'vol' command in retrieving Options Volume by Strike for a specified ticker. It also includes usage examples and how to add an expiration date for more specific data.",source:"@site/content/bot/reference/discord/options/vol.md",sourceDirName:"bot/reference/discord/options",slug:"/bot/reference/discord/options/vol",permalink:"/bot/reference/discord/options/vol",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/options/vol.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"vol",description:"This page provides information on using the 'vol' command in retrieving Options Volume by Strike for a specified ticker. It also includes usage examples and how to add an expiration date for more specific data.",keywords:["Options Volume","Stock Ticker","Expiration Date","Command 'vol'","Retrieve Ticker Data"]},sidebar:"tutorialSidebar",previous:{title:"uoastock",permalink:"/bot/reference/discord/options/uoastock"},next:{title:"vsurf",permalink:"/bot/reference/discord/options/vsurf"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"options: vol - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve a chart of Options Volume by Strike for a specified ticker. This data can be broken down further by adding an expiration date for a more detailed breakdown."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/op vol ticker [expiry]\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ticker"),(0,o.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"None")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expiry"),(0,o.kt)("td",{parentName:"tr",align:null},"Expiration Date (optional)"),(0,o.kt)("td",{parentName:"tr",align:null},"True"),(0,o.kt)("td",{parentName:"tr",align:null},"None")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/op vol ticker:AMD\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/op vol ticker:AMD expiry:2022-07-29\n")),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);