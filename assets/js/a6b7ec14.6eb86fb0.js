"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89126],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=l,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294),l=r(35742);function a(e){let{title:t}=e;return n.createElement(l.Z,null,n.createElement("title",null,t))}},84030:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(87462),l=(r(67294),r(3905)),a=r(88828);const o={title:"rvol",description:"Rvol page shows the rolling volatility portfolio versus benchmark. It is primarily used to analyse the market's volatility over different periods.",keywords:["rvol","rolling volatility","portfolio","benchmark","market analysis","volatility analysis","time period"]},i=void 0,p={unversionedId:"terminal/reference/portfolio/rvol",id:"terminal/reference/portfolio/rvol",title:"rvol",description:"Rvol page shows the rolling volatility portfolio versus benchmark. It is primarily used to analyse the market's volatility over different periods.",source:"@site/content/terminal/reference/portfolio/rvol.md",sourceDirName:"terminal/reference/portfolio",slug:"/terminal/reference/portfolio/rvol",permalink:"/terminal/reference/portfolio/rvol",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/rvol.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709640028,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{title:"rvol",description:"Rvol page shows the rolling volatility portfolio versus benchmark. It is primarily used to analyse the market's volatility over different periods.",keywords:["rvol","rolling volatility","portfolio","benchmark","market analysis","volatility analysis","time period"]},sidebar:"tutorialSidebar",previous:{title:"rsort",permalink:"/terminal/reference/portfolio/rsort"},next:{title:"show",permalink:"/terminal/reference/portfolio/show"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(a.Z,{title:"portfolio /rvol - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,l.kt)("p",null,"Show rolling volatility portfolio vs benchmark"),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"rvol [-p PERIOD]\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"),(0,l.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"period"),(0,l.kt)("td",{parentName:"tr",align:null},"-p  --period"),(0,l.kt)("td",{parentName:"tr",align:null},"Period to apply rolling window"),(0,l.kt)("td",{parentName:"tr",align:null},"1y"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"mtd, qtd, ytd, 3m, 6m, 1y, 3y, 5y, 10y, all")))),(0,l.kt)("hr",null))}d.isMDXComponent=!0}}]);