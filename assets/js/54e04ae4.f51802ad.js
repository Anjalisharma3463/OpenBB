"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27384],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),m=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=m(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=m(t),f=a,u=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(u,c(c({ref:r},l),{},{components:t})):n.createElement(u,c({ref:r},l))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=f;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var m=2;m<i;m++)c[m]=t[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},26515:(e,r,t)=>{t.d(r,{Z:()=>s});var n=t(39960),a=t(86010),i=t(67294),c=t(16550),o=t(48334);function s(e){let{title:r,url:t,description:s,command:m}=e;const{pathname:l}=(0,c.TH)(),d=l.replace(/\/v\d+/,""),p=!d.includes("/reference")&&!d.includes("/widgets-library/")&&!d.includes("/data_models");return i.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":d.startsWith("/terminal")||d.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":d.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":d.startsWith("/sdk")||d.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":d.startsWith("/excel"),header_docs:!(d.startsWith("/terminal")||d.startsWith("/pro")||d.startsWith("/excel")||d.startsWith("/sdk")||d.startsWith("/platform")||d.startsWith("/bot"))}),to:t},i.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),i.createElement("div",{className:"flex items-center"},i.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),p&&i.createElement(o.Z,{className:"ml-auto mr-4"})),s?i.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},s):null)}},50320:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>m,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=t(87462),a=(t(67294),t(3905)),i=t(26515);const c={},o="Comparison Analysis",s={unversionedId:"terminal/reference/stocks/ca/index",id:"terminal/reference/stocks/ca/index",title:"Comparison Analysis",description:"Commands",source:"@site/content/terminal/reference/stocks/ca/index.mdx",sourceDirName:"terminal/reference/stocks/ca",slug:"/terminal/reference/stocks/ca/",permalink:"/terminal/reference/stocks/ca/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/ca/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"warnings",permalink:"/terminal/reference/stocks/fa/warnings"},next:{title:"add",permalink:"/terminal/reference/stocks/ca/add"}},m={},l=[{value:"Commands",id:"commands",level:3}],d={toc:l},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"comparison-analysis"},"Comparison Analysis"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(i.Z,{title:"Add",description:"Add similar tickers to compare with.",url:"/terminal/reference/stocks/ca/add",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Balance",description:"Prints either yearly or quarterly balance statement the company, and compares it against similar companies.",url:"/terminal/reference/stocks/ca/balance",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Cashflow",description:"Prints either yearly or quarterly cashflow statement the company, and compares it against similar companies.",url:"/terminal/reference/stocks/ca/cashflow",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Financial",description:"Prints screener data of similar companies. [Source: Finviz]",url:"/terminal/reference/stocks/ca/financial",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Get",description:"Get similar companies from selected data source (default: Finviz) to compare with.",url:"/terminal/reference/stocks/ca/get",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Hcorr",description:"Correlation heatmap based on historical price comparison between similar companies.",url:"/terminal/reference/stocks/ca/hcorr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Historical",description:"Historical price comparison between similar companies.",url:"/terminal/reference/stocks/ca/historical",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Income",description:"Prints either yearly or quarterly income statement the company, and compares it against similar companies.",url:"/terminal/reference/stocks/ca/income",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Overview",description:"Prints screener data of similar companies. [Source: Finviz]",url:"/terminal/reference/stocks/ca/overview",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Ownership",description:"Prints screener data of similar companies. [Source: Finviz]",url:"/terminal/reference/stocks/ca/ownership",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Performance",description:"Prints screener data of similar companies. [Source: Finviz]",url:"/terminal/reference/stocks/ca/performance",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Rmv",description:"Remove similar tickers to compare with.",url:"/terminal/reference/stocks/ca/rmv",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Scorr",description:"FinBrain's sentiment correlation across similar tickers.",url:"/terminal/reference/stocks/ca/scorr",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Sentiment",description:"FinBrain's sentiment comparison across similar tickers.",url:"/terminal/reference/stocks/ca/sentiment",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Set",description:"Select similar companies to compare with.",url:"/terminal/reference/stocks/ca/set",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Technical",description:"Prints screener data of similar companies. [Source: Finviz]",url:"/terminal/reference/stocks/ca/technical",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Ticker",description:"Set ticker to extract similar from",url:"/terminal/reference/stocks/ca/ticker",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Valuation",description:"Prints screener data of similar companies. [Source: Finviz]",url:"/terminal/reference/stocks/ca/valuation",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(i.Z,{title:"Volume",description:"Historical volume comparison between similar companies.",url:"/terminal/reference/stocks/ca/volume",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);