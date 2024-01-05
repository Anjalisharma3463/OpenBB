"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87243],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(35742);function i(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},73846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),i=a(88828);const o={title:"heatmap",description:"This page describes how to use the heatmap tool which provides an interactive treemap of the SP 500 from finviz. It includes usage examples and a detailed description of parameters.",keywords:["heatmap tool","SP 500 heatmap","interactive treemap","finviz","usage examples","tool parameters","timeframe parameter","data visualization"]},l=void 0,p={unversionedId:"terminal/reference/stocks/disc/heatmap",id:"terminal/reference/stocks/disc/heatmap",title:"heatmap",description:"This page describes how to use the heatmap tool which provides an interactive treemap of the SP 500 from finviz. It includes usage examples and a detailed description of parameters.",source:"@site/content/terminal/reference/stocks/disc/heatmap.md",sourceDirName:"terminal/reference/stocks/disc",slug:"/terminal/reference/stocks/disc/heatmap",permalink:"/terminal/reference/stocks/disc/heatmap",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/stocks/disc/heatmap.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"heatmap",description:"This page describes how to use the heatmap tool which provides an interactive treemap of the SP 500 from finviz. It includes usage examples and a detailed description of parameters.",keywords:["heatmap tool","SP 500 heatmap","interactive treemap","finviz","usage examples","tool parameters","timeframe parameter","data visualization"]},sidebar:"tutorialSidebar",previous:{title:"gtech",permalink:"/terminal/reference/stocks/disc/gtech"},next:{title:"hotpenny",permalink:"/terminal/reference/stocks/disc/hotpenny"}},s={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],m={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(i.Z,{title:"stocks /disc/heatmap - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Get the SP 500 heatmap from finviz and display in interactive treemap"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"heatmap [-t {day,week,month,3month,6month,year,ytd}]\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"timeframe"),(0,n.kt)("td",{parentName:"tr",align:null},"-t  --timeframe"),(0,n.kt)("td",{parentName:"tr",align:null},"Timeframe to get heatmap data for"),(0,n.kt)("td",{parentName:"tr",align:null},"day"),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"day, week, month, 3month, 6month, year, ytd")))),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);