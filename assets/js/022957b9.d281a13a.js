"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),o=r(35742);function a(e){let{title:t}=e;return n.createElement(o.Z,null,n.createElement("title",null,t))}},99477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(88828);const c={title:"contracts",description:"The page provides details on how to retrieve the top 15 Government contracts by amount for all tickers using the /disc contracts command. It gives insights into the total value of Government contracts awarded to various companies, helping users understand their financial health.",keywords:["contracts","Government contracts","tickers","database","financial health","/disc contracts"]},i=void 0,s={unversionedId:"bot/reference/discord/discovery/contracts",id:"bot/reference/discord/discovery/contracts",title:"contracts",description:"The page provides details on how to retrieve the top 15 Government contracts by amount for all tickers using the /disc contracts command. It gives insights into the total value of Government contracts awarded to various companies, helping users understand their financial health.",source:"@site/content/bot/reference/discord/discovery/contracts.md",sourceDirName:"bot/reference/discord/discovery",slug:"/bot/reference/discord/discovery/contracts",permalink:"/bot/reference/discord/discovery/contracts",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/discovery/contracts.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"contracts",description:"The page provides details on how to retrieve the top 15 Government contracts by amount for all tickers using the /disc contracts command. It gives insights into the total value of Government contracts awarded to various companies, helping users understand their financial health.",keywords:["contracts","Government contracts","tickers","database","financial health","/disc contracts"]},sidebar:"tutorialSidebar",previous:{title:"arktrades",permalink:"/bot/reference/discord/discovery/arktrades"},next:{title:"fgindex",permalink:"/bot/reference/discord/discovery/fgindex"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{title:"discovery: contracts - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"This command allows the user to retrieve the Top 15 Government contracts by amount for all tickers. This is a helpful tool for those who want to quickly get an overview of the total value of Government contracts awarded to various companies. The data is retrieved from a database of contracts and can be used to gain valuable insights into the financial health of those companies."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/disc contracts\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This command has no parameters"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/disc contracts\n")),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);