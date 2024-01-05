"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82891],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),p=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,c=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=p(r),d=a,f=s["".concat(o,".").concat(d)]||s[d]||m[d]||c;return r?n.createElement(f,l(l({ref:e},u),{},{components:r})):n.createElement(f,l({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=r.length,l=new Array(c);l[0]=d;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[s]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<c;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88828:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(67294),a=r(35742);function c(t){let{title:e}=t;return n.createElement(a.Z,null,n.createElement("title",null,e))}},29771:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),c=r(88828);const l={title:"btccp",description:"btccp displays the Bitcoin (BTC) circulating supply with ranging parameters. It uses data sourced from blockchain's API while offering a customizable date range.",keywords:["Bitcoin","BTC","circulating supply","blockchain API","cryptocurrency","data visualization","btccp","data extraction","date parameters"]},i=void 0,o={unversionedId:"terminal/reference/crypto/onchain/btccp",id:"terminal/reference/crypto/onchain/btccp",title:"btccp",description:"btccp displays the Bitcoin (BTC) circulating supply with ranging parameters. It uses data sourced from blockchain's API while offering a customizable date range.",source:"@site/content/terminal/reference/crypto/onchain/btccp.md",sourceDirName:"terminal/reference/crypto/onchain",slug:"/terminal/reference/crypto/onchain/btccp",permalink:"/terminal/reference/crypto/onchain/btccp",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/onchain/btccp.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"btccp",description:"btccp displays the Bitcoin (BTC) circulating supply with ranging parameters. It uses data sourced from blockchain's API while offering a customizable date range.",keywords:["Bitcoin","BTC","circulating supply","blockchain API","cryptocurrency","data visualization","btccp","data extraction","date parameters"]},sidebar:"tutorialSidebar",previous:{title:"btcblockdata",permalink:"/terminal/reference/crypto/onchain/btcblockdata"},next:{title:"btcct",permalink:"/terminal/reference/crypto/onchain/btcct"}},p={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],s={toc:u},m="wrapper";function d(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(c.Z,{title:"crypto /onchain/btccp - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"Display BTC circulating supply ","[Source: https://api.blockchain.info/]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"btccp [-s SINCE] [-u UNTIL]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"since"),(0,a.kt)("td",{parentName:"tr",align:null},"-s  --since"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial date. Default: 2010-01-01"),(0,a.kt)("td",{parentName:"tr",align:null},"2010-01-01"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"until"),(0,a.kt)("td",{parentName:"tr",align:null},"-u  --until"),(0,a.kt)("td",{parentName:"tr",align:null},"Final date. Default: 2021-01-01"),(0,a.kt)("td",{parentName:"tr",align:null},"2024-01-05"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154067527-0916ab9d-4690-4077-9037-a2665f9fc593.png",alt:"btccp"})),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);