"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,p=m["".concat(d,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(p,i(i({ref:t},c),{},{components:r})):n.createElement(p,i({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26515:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(39960),a=r(86010),o=r(67294),i=r(16550),l=r(48334);function d(e){let{title:t,url:r,description:d,command:s}=e;const{pathname:c}=(0,i.TH)(),m=c.replace(/\/v\d+/,""),u=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/platform"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot"))}),to:r},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),o.createElement("div",{className:"flex items-center"},o.createElement("p",{className:"py-2 font-bold text-lg my-0"},t,""),u&&o.createElement(l.Z,{className:"ml-auto mr-4"})),d?o.createElement("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0"},d):null)}},36689:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),o=r(26515);const i={},l="Mutual Funds",d={unversionedId:"terminal/reference/funds/index",id:"terminal/reference/funds/index",title:"Mutual Funds",description:"Commands",source:"@site/content/terminal/reference/funds/index.mdx",sourceDirName:"terminal/reference/funds",slug:"/terminal/reference/funds/",permalink:"/terminal/reference/funds/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/funds/index.mdx",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenBB Terminal Features",permalink:"/terminal/reference/"},next:{title:"alswe",permalink:"/terminal/reference/funds/alswe"}},s={},c=[{value:"Commands",id:"commands",level:3}],m={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mutual-funds"},"Mutual Funds"),(0,a.kt)("h3",{id:"commands"},"Commands"),(0,a.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,a.kt)(o.Z,{title:"Alswe",description:"Show allocation of a swedish fund. To get a list of available funds, check the file `avanza_fund_ID.csv`.",url:"/terminal/reference/funds/alswe",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Carbon",description:"Show funds carbon metrcis.",url:"/terminal/reference/funds/carbon",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Country",description:"Set a country for funds.",url:"/terminal/reference/funds/country",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Exclusion",description:"Show funds exclsuion policy.",url:"/terminal/reference/funds/exclusion",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Holdings",description:"Show funds holdings.",url:"/terminal/reference/funds/holdings",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Infoswe",description:"Show fund info of a swedish fund. To get a list of available funds, check the file `avanza_fund_ID.csv`.",url:"/terminal/reference/funds/infoswe",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Load",description:"Load the fund to perform analysis on.",url:"/terminal/reference/funds/load",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Plot",description:"Plot historical data.",url:"/terminal/reference/funds/plot",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Search",description:"Search mutual funds in selected country",url:"/terminal/reference/funds/search",command:!0,mdxType:"ReferenceCard"}),(0,a.kt)(o.Z,{title:"Sector",description:"Show funds, index, category sector breakdown.",url:"/terminal/reference/funds/sector",command:!0,mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);