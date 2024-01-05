"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85304],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(r),y=a,s=m["".concat(u,".").concat(y)]||m[y]||c[y]||l;return r?n.createElement(s,o(o({ref:t},d),{},{components:r})):n.createElement(s,o({ref:t},d))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},42207:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={title:"performance",description:"Learn how to calculate the price performance return for a symbol over different time periods using the OBB.equity.price.performance function. Retrieve data such as one-day return, week to date return, one-week return, month to date return, and more. Understand the parameters, returns, and data structure of the function.",keywords:["price performance","return","symbol","data","provider","chart","metadata","one-day return","week to date return","one-week return","month to date return","one-month return","quarter to date return","three-month return","six-month return","year to date return","one-year return","three-year return","five-year return","ten-year return","max return","time series","ticker symbol"]},o=void 0,i={unversionedId:"excel/reference/library/equity/price/performance",id:"excel/reference/library/equity/price/performance",title:"performance",description:"Learn how to calculate the price performance return for a symbol over different time periods using the OBB.equity.price.performance function. Retrieve data such as one-day return, week to date return, one-week return, month to date return, and more. Understand the parameters, returns, and data structure of the function.",source:"@site/content/excel/reference/library/equity/price/performance.md",sourceDirName:"excel/reference/library/equity/price",slug:"/excel/reference/library/equity/price/performance",permalink:"/excel/reference/library/equity/price/performance",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/equity/price/performance.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"performance",description:"Learn how to calculate the price performance return for a symbol over different time periods using the OBB.equity.price.performance function. Retrieve data such as one-day return, week to date return, one-week return, month to date return, and more. Understand the parameters, returns, and data structure of the function.",keywords:["price performance","return","symbol","data","provider","chart","metadata","one-day return","week to date return","one-week return","month to date return","one-month return","quarter to date return","three-month return","six-month return","year to date return","one-year return","three-year return","five-year return","ten-year return","max return","time series","ticker symbol"]},sidebar:"tutorialSidebar",previous:{title:"nbbo",permalink:"/excel/reference/library/equity/price/nbbo"},next:{title:"quote",permalink:"/excel/reference/library/equity/price/quote"}},u={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Price performance as a return, over different periods."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.EQUITY.PRICE.PERFORMANCE(required; [optional])\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider"),(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"Options: fmp"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"return-data"},"Return Data"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_day"),(0,a.kt)("td",{parentName:"tr",align:null},"One-day return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"wtd"),(0,a.kt)("td",{parentName:"tr",align:null},"Week to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_week"),(0,a.kt)("td",{parentName:"tr",align:null},"One-week return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mtd"),(0,a.kt)("td",{parentName:"tr",align:null},"Month to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_month"),(0,a.kt)("td",{parentName:"tr",align:null},"One-month return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"qtd"),(0,a.kt)("td",{parentName:"tr",align:null},"Quarter to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"three_month"),(0,a.kt)("td",{parentName:"tr",align:null},"Three-month return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"six_month"),(0,a.kt)("td",{parentName:"tr",align:null},"Six-month return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ytd"),(0,a.kt)("td",{parentName:"tr",align:null},"Year to date return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"one_year"),(0,a.kt)("td",{parentName:"tr",align:null},"One-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"three_year"),(0,a.kt)("td",{parentName:"tr",align:null},"Three-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"five_year"),(0,a.kt)("td",{parentName:"tr",align:null},"Five-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ten_year"),(0,a.kt)("td",{parentName:"tr",align:null},"Ten-year return.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max"),(0,a.kt)("td",{parentName:"tr",align:null},"Return from the beginning of the time series.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"The ticker symbol. (provider: fmp)")))))}c.isMDXComponent=!0}}]);