"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[89034],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),d=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},m=function(e){var r=d(e.components);return o.createElement(c.Provider,{value:r},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(t),f=n,u=p["".concat(c,".").concat(f)]||p[f]||s[f]||i;return t?o.createElement(u,a(a({ref:r},m),{},{components:t})):o.createElement(u,a({ref:r},m))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},62872:(e,r,t)=>{t.d(r,{Z:()=>l});var o=t(39960),n=t(67294),i=t(86010),a=t(16550);function l(e){let{title:r,url:t,description:l,command:c}=e;const{pathname:d}=(0,a.TH)();return n.createElement(o.Z,{className:(0,i.Z)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:d.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":d.startsWith("/sdk"),"bg-gradient-to-r from-grey-800 to-purple-800":d.startsWith("/bot"),header_docs:!d.startsWith("/terminal")&&!d.startsWith("/sdk")&&!d.startsWith("/bot")}),to:t},n.createElement("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),n.createElement("p",{className:"py-2 font-bold text-lg my-0"},r,""),l?n.createElement("p",{className:"text-grey-200 text-xs mt-2 mb-0"},l):null)}},86892:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var o=t(87462),n=(t(67294),t(3905)),i=t(62872);const a={},l="Portfolio",c={unversionedId:"terminal/reference/portfolio/index",id:"terminal/reference/portfolio/index",title:"Portfolio",description:"<ReferenceCard",source:"@site/content/terminal/reference/portfolio/index.mdx",sourceDirName:"terminal/reference/portfolio",slug:"/terminal/reference/portfolio/",permalink:"/terminal/reference/portfolio/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/terminal/reference/futures/search"},next:{title:"alloc",permalink:"/terminal/reference/portfolio/alloc"}},d={},m=[],p={toc:m},s="wrapper";function f(e){let{components:r,...t}=e;return(0,n.kt)(s,(0,o.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"portfolio"},"Portfolio"),(0,n.kt)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6"},(0,n.kt)(i.Z,{title:"brokers",description:"hold, askobb, history, hold, holdings, askobb, companynews, login, pending, topnews, paexport, update, lastnews,...",url:"/terminal/reference/portfolio/brokers",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"po",description:"maxret, relriskparity, maxsharpe, herc, nco, maxdecorr, maxdiv, equal, maxutil, rpf, plot, minrisk, riskparity,...",url:"/terminal/reference/portfolio/po",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"alloc",description:"Show your allocation to each asset or sector compared to the benchmark.",url:"/terminal/reference/portfolio/alloc",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"askobb",description:"Accept input as a string and return the most appropriate Terminal command",url:"/terminal/reference/portfolio/askobb",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"attrib",description:"Displays sector attribution of the portfolio compared to the S&P 500",url:"/terminal/reference/portfolio/attrib",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"bench",description:"Load in a benchmark from a selected list or set your own based on the ticker.",url:"/terminal/reference/portfolio/bench",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"distr",description:"Compute distribution of daily returns",url:"/terminal/reference/portfolio/distr",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"dret",description:"Daily returns",url:"/terminal/reference/portfolio/dret",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"es",description:"Provides Expected Shortfall (short: ES) of the selected portfolio.",url:"/terminal/reference/portfolio/es",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"hold",description:"Turn on figure holding. This will stop showing images until hold off is run.",url:"/terminal/reference/portfolio/hold",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"holdp",description:"Display holdings of assets (in percentage)",url:"/terminal/reference/portfolio/holdp",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"holdv",description:"Display holdings of assets (absolute value)",url:"/terminal/reference/portfolio/holdv",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"load",description:"Load your portfolio transactions.",url:"/terminal/reference/portfolio/load",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"maxdd",description:"Show portfolio maximum drawdown",url:"/terminal/reference/portfolio/maxdd",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"metric",description:"Display metric of choice for different periods",url:"/terminal/reference/portfolio/metric",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"mret",description:"Monthly returns",url:"/terminal/reference/portfolio/mret",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"om",description:"Provides omega ratio of the selected portfolio.",url:"/terminal/reference/portfolio/om",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"perf",description:"Shows performance of each trade and total performance of the portfolio versus the benchmark.",url:"/terminal/reference/portfolio/perf",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"rbeta",description:"Show rolling beta portfolio vs benchmark",url:"/terminal/reference/portfolio/rbeta",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"rsharpe",description:"Show rolling sharpe portfolio vs benchmark",url:"/terminal/reference/portfolio/rsharpe",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"rsort",description:"Show rolling sortino portfolio vs benchmark",url:"/terminal/reference/portfolio/rsort",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"rvol",description:"Show rolling volatility portfolio vs benchmark",url:"/terminal/reference/portfolio/rvol",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"show",description:"Show transactions table",url:"/terminal/reference/portfolio/show",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"summary",description:"Display summary of portfolio vs benchmark",url:"/terminal/reference/portfolio/summary",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"var",description:"Provides value at risk (short: VaR) of the selected portfolio.",url:"/terminal/reference/portfolio/var",command:"true",mdxType:"ReferenceCard"}),(0,n.kt)(i.Z,{title:"yret",description:"End of the year returns",url:"/terminal/reference/portfolio/yret",command:"true",mdxType:"ReferenceCard"})))}f.isMDXComponent=!0}}]);