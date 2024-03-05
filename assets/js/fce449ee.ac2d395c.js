"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78463],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,f=s["".concat(d,".").concat(u)]||s[u]||m[u]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(35742);function o(e){let{title:t}=e;return a.createElement(n.Z,null,a.createElement("title",null,t))}},20043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=r(87462),n=(r(67294),r(3905)),o=r(88828);const l={title:"day",description:"This documentation page provides detailed instructions on how to use the 'day' command to retrieve the most recent flow for a stock with a specified ticker symbol. It includes a description of optional and mandatory parameters and provides real-world usage examples.",keywords:["stock market","day command","flow data","ticker symbol","expiry date","strike price","option type","stock trading","commands","parameter","examples"]},i=void 0,d={unversionedId:"bot/reference/discord/flow/day",id:"bot/reference/discord/flow/day",title:"day",description:"This documentation page provides detailed instructions on how to use the 'day' command to retrieve the most recent flow for a stock with a specified ticker symbol. It includes a description of optional and mandatory parameters and provides real-world usage examples.",source:"@site/content/bot/reference/discord/flow/day.md",sourceDirName:"bot/reference/discord/flow",slug:"/bot/reference/discord/flow/day",permalink:"/bot/reference/discord/flow/day",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/discord/flow/day.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709640028,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{title:"day",description:"This documentation page provides detailed instructions on how to use the 'day' command to retrieve the most recent flow for a stock with a specified ticker symbol. It includes a description of optional and mandatory parameters and provides real-world usage examples.",keywords:["stock market","day command","flow data","ticker symbol","expiry date","strike price","option type","stock trading","commands","parameter","examples"]},sidebar:"tutorialSidebar",previous:{title:"bigflow",permalink:"/bot/reference/discord/flow/bigflow"},next:{title:"opening",permalink:"/bot/reference/discord/flow/opening"}},p={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"flow: day - Discord Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"This command retrieves the most recent flow for a stock with the specified ticker symbol. The command will return the most up-to-date flow data for that stock over $25,000."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/flow day ticker [expiry] [strike] [opt_type]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"Stock Ticker"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"expiry"),(0,n.kt)("td",{parentName:"tr",align:null},"Expiry Date (YYYY-MM-DD) (Optional)"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"strike"),(0,n.kt)("td",{parentName:"tr",align:null},"Strike Price (Optional)"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"opt_type"),(0,n.kt)("td",{parentName:"tr",align:null},"Option Type (Calls or Puts) (Optional)"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"Calls (C), Puts (P)")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/flow day ticker:AMD\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/flow day ticker:AMD expiry:2022-07-29 strike:60 opt_type:Puts\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/flow day ticker:AMD expiry:2022-07-29 strike:60\n")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);