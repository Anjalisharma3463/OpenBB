"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[95645],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return r?a.createElement(f,o(o({ref:t},m),{},{components:r})):a.createElement(f,o({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(39960),n=r(86010),i=r(67294),o=r(16550),l=r(48334);function c(e){let{title:t,url:r,description:c,command:s}=e;const{pathname:m}=(0,o.TH)(),d=m.replace(/\/v\d+/,""),p=!d.includes("/reference")&&!d.includes("/widgets-library/")&&!d.includes("/data_models");return i.createElement(a.Z,{className:(0,n.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":d.startsWith("/terminal")||d.startsWith("/pro")||d.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":d.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":d.startsWith("/sdk")||d.startsWith("/platform"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/pro")||d.startsWith("/excel")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:r},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),p&&i.createElement(l.Z,{className:"ml-auto mr-4"})),c?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},c):null)}},94435:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),i=r(26515);const o={},l="quantitative",c={unversionedId:"platform/reference/quantitative/index",id:"platform/reference/quantitative/index",title:"quantitative",description:"Commands",source:"@site/content/platform/reference/quantitative/index.mdx",sourceDirName:"platform/reference/quantitative",slug:"/platform/reference/quantitative/",permalink:"/platform/reference/quantitative/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/quantitative/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/platform/reference/derivatives/futures/historical"},next:{title:"capm",permalink:"/platform/reference/quantitative/capm"}},s={},m=[{value:"Commands",id:"commands",level:3}],d={toc:m},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quantitative"},"quantitative"),(0,n.kt)("h3",{id:"commands"},"Commands"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"Capm",description:"Get Capital Asset Pricing Model",url:"/platform/reference/quantitative/capm",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Kurtosis",description:"Get the Kurtosis",url:"/platform/reference/quantitative/kurtosis",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Normality",description:"Get Normality Statistics",url:"/platform/reference/quantitative/normality",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Omega Ratio",description:"Calculate the Omega Ratio",url:"/platform/reference/quantitative/omega_ratio",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Quantile",description:"Get Quantile",url:"/platform/reference/quantitative/quantile",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Sharpe Ratio",description:"Get Sharpe Ratio",url:"/platform/reference/quantitative/sharpe_ratio",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Skewness",description:"Get Skewness",url:"/platform/reference/quantitative/skewness",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Sortino Ratio",description:"Get Sortino Ratio",url:"/platform/reference/quantitative/sortino_ratio",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Summary",description:"Get Summary Statistics",url:"/platform/reference/quantitative/summary",command:!0,mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"Unitroot Test",description:"Get Unit Root Test",url:"/platform/reference/quantitative/unitroot_test",command:!0,mdxType:"ReferenceCard"})))}u.isMDXComponent=!0}}]);