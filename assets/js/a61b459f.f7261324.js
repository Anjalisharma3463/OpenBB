"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(35742);function i(e){let{title:t}=e;return o.createElement(r.Z,null,o.createElement("title",null,t))}},71360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905)),i=n(88828);const a={title:"Introduction",sidebar_position:1,description:"This introduction to the Contributor Guidelines provides an overview of how to enhance the OpenBB Platform's codebase. It highlights the various ways to contribute, from adding new data points and commands to creating new extensions and improving documentation.",keywords:["OpenBB Contributor Guidelines","Codebase enhancement","OpenBB extensions","Documentation improvement","OpenBB Platform contribution"]},s=void 0,l={unversionedId:"platform/development/contributor-guidelines/index",id:"platform/development/contributor-guidelines/index",title:"Introduction",description:"This introduction to the Contributor Guidelines provides an overview of how to enhance the OpenBB Platform's codebase. It highlights the various ways to contribute, from adding new data points and commands to creating new extensions and improving documentation.",source:"@site/content/platform/development/contributor-guidelines/index.md",sourceDirName:"platform/development/contributor-guidelines",slug:"/platform/development/contributor-guidelines/",permalink:"/platform/development/contributor-guidelines/",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/contributor-guidelines/index.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709640028,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1,description:"This introduction to the Contributor Guidelines provides an overview of how to enhance the OpenBB Platform's codebase. It highlights the various ways to contribute, from adding new data points and commands to creating new extensions and improving documentation.",keywords:["OpenBB Contributor Guidelines","Codebase enhancement","OpenBB extensions","Documentation improvement","OpenBB Platform contribution"]},sidebar:"tutorialSidebar",previous:{title:"OBBject Extensions",permalink:"/platform/development/developer-guidelines/obbject_extensions"},next:{title:"Expectations For Contributors",permalink:"/platform/development/contributor-guidelines/expecations_for_contributors"}},d={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Introduction - Contributor Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The Contributor Guidelines are intended to be a continuation of the ",(0,r.kt)("a",{parentName:"p",href:"/platform/development/developer-guidelines/expecations_for_developers"},"Developer Guidelines"),". They are not a replacement, but rather an expansion, focusing specifically on those who seek to directly enhance the OpenBB Platform's codebase. It's crucial for Contributors to be familiar with both sets of guidelines to ensure a harmonious and productive engagement with the OpenBB Platform."),(0,r.kt)("p",null,"There are many ways to contribute to the OpenBB Platform. You can add a ",(0,r.kt)("a",{parentName:"p",href:"/platform/development/developer-guidelines/add_data_point"},"new data point"),", add a ",(0,r.kt)("a",{parentName:"p",href:"/platform/development/developer-guidelines/add_custom_data_sources#openbb-platform-commands"},"new command"),", add a ",(0,r.kt)("a",{parentName:"p",href:"/platform/extensions/toolkit_extensions#charting"},"new visualization"),", add a ",(0,r.kt)("a",{parentName:"p",href:"/platform/development/developer-guidelines/build_openbb_extensions"},"new extension"),", fix a bug, improve or create documentation, etc."))}m.isMDXComponent=!0}}]);