"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},20543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(88828);const o={title:"indexpc",description:"The page provides an understanding for the /indexpc command and how it can be used to retrieve the Index Put/Call Ratio from market-harmonics.com. The relevance of this ratio in identifying the market sentiment for making tactical trading decisions is also explained.",keywords:["indexpc command","market sentiment","Index Put/Call Ratio","trading decisions","market-harmonics.com","bearish market conditions","bullish market conditions"]},c=void 0,l={unversionedId:"bot/reference/telegram/options/indexpc",id:"bot/reference/telegram/options/indexpc",title:"indexpc",description:"The page provides an understanding for the /indexpc command and how it can be used to retrieve the Index Put/Call Ratio from market-harmonics.com. The relevance of this ratio in identifying the market sentiment for making tactical trading decisions is also explained.",source:"@site/content/bot/reference/telegram/options/indexpc.md",sourceDirName:"bot/reference/telegram/options",slug:"/bot/reference/telegram/options/indexpc",permalink:"/bot/reference/telegram/options/indexpc",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/reference/telegram/options/indexpc.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"indexpc",description:"The page provides an understanding for the /indexpc command and how it can be used to retrieve the Index Put/Call Ratio from market-harmonics.com. The relevance of this ratio in identifying the market sentiment for making tactical trading decisions is also explained.",keywords:["indexpc command","market sentiment","Index Put/Call Ratio","trading decisions","market-harmonics.com","bearish market conditions","bullish market conditions"]},sidebar:"tutorialSidebar",previous:{title:"hist",permalink:"/bot/reference/telegram/options/hist"},next:{title:"itm",permalink:"/bot/reference/telegram/options/itm"}},s={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],m={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"options: indexpc - Telegram Reference | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"This command allows the user to retrieve the Index Put/Call Ratio for the market from market-harmonics.com. This ratio is an indication of the market sentiment and can be used to help traders identify bearish and bullish market conditions. The command returns the ratio and can be used to inform trading decisions."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"/indexpc\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This command has no parameters"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/indexpc\n")),(0,a.kt)("hr",null))}u.isMDXComponent=!0}}]);