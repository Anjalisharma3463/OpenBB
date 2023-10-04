"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55516],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=o,u=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return t?n.createElement(u,i(i({ref:r},d),{},{components:t})):n.createElement(u,i({ref:r},d))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>c});var n=t(39960),o=t(67294),a=t(86010),i=t(16550);function c(e){let{title:r,url:t,description:c,command:l}=e;const{pathname:s}=(0,i.TH)();return o.createElement(n.Z,{className:(0,a.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:s.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":s.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":s.startsWith("/bot"),header_docs:!s.startsWith("/terminal")&&!s.startsWith("/sdk")&&!s.startsWith("/bot")}),to:t},o.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),o.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),c?o.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},c):null)}},54809:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(87462),o=(t(67294),t(3905)),a=t(62872);const i={},c="OpenBB Terminal Features",l={unversionedId:"terminal/reference/index",id:"terminal/reference/index",title:"OpenBB Terminal Features",description:"<ReferenceCard",source:"@site/content/terminal/reference/index.mdx",sourceDirName:"terminal/reference",slug:"/terminal/reference/",permalink:"/terminal/reference/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Developer Issues",permalink:"/terminal/faqs/developer_issues"},next:{title:"Account",permalink:"/terminal/reference/account/"}},s={},d=[],p={toc:d},m="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openbb-terminal-features"},"OpenBB Terminal Features"),(0,o.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,o.kt)(a.Z,{title:"alt",description:"hn, hold, askobb, tr, rs, sh, rossidx, hold, askobb, slopes, country, cases, ov, rates, hold, askobb, deaths,...",url:"/terminal/reference/alt",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"funds",description:"exclusion, sector, carbon, country, plot, infoswe, hold, holdings, search, alswe, askobb, load",url:"/terminal/reference/funds",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"forex",description:"fwd, quote, candle, hold, askobb, load, pending, calendar, closetrade, order, list, cancel, to, summary, from,...",url:"/terminal/reference/forex",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"reports",description:"exe, hold, askobb, run",url:"/terminal/reference/reports",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"econometrics",description:"dwat, lag, root, bpag, export, eval, desc, ret, remove, compare, panel, corr, norm, clean, type, index_cmd, add,...",url:"/terminal/reference/econometrics",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"futures",description:"hold, search, historical, askobb, curve",url:"/terminal/reference/futures",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"etf",description:"holding_perf, ca, weights, news, compare, candle, hold, holdings, search, askobb, load, overview, decliners,...",url:"/terminal/reference/etf",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"forecast",description:"timegpt, export, rsi, mom, mstl, nbeats, autoselect, anom, roc, desc, ema, rwd, rnn, seasonalnaive, signal, plot,...",url:"/terminal/reference/forecast",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"crypto",description:"find, candle, prt, hold, headlines, askobb, load, price, baas, lt, th, btcblockdata, whales, prices, dvcp,...",url:"/terminal/reference/crypto",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"portfolio",description:"mret, holdp, perf, rsort, metric, rsharpe, om, rvol, attrib, alloc, summary, holdv, var, es, hold, dret, bench,...",url:"/terminal/reference/portfolio",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"fixedincome",description:"icespread, ameribor, icebofa, tmc, iorb, tbffr, usrates, treasury, projection, fed, spot, ecbycrv, ecb, ffrmc,...",url:"/terminal/reference/fixedincome",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"dashboards",description:"hold, askobb",url:"/terminal/reference/dashboards",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"economy",description:"gdp, rgdp, revenue, bigmac, usdli, eval, ccpi, valuation, trust, debt, edebt, map, futures, macro, performance,...",url:"/terminal/reference/economy",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"account",description:"login, upload, revoke, list, generate, logout, hold, download, askobb, delete, show",url:"/terminal/reference/account",mdxType:"ReferenceCard"}),(0,o.kt)(a.Z,{title:"stocks",description:"quote, tob, news, candle, hold, search, askobb, load, exp, chains, oi, calc, grhist, plot, eodchain, info, vsurf,...",url:"/terminal/reference/stocks",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);