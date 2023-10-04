"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={title:"v2.0.0",version:"2.0.0",date:new Date("2022-11-29T00:00:00.000Z"),description:"v2.0.0",sidebar_position:107},l=void 0,o={unversionedId:"terminal/changelog/version2_0_0",id:"terminal/changelog/version2_0_0",title:"v2.0.0",description:"v2.0.0",source:"@site/content/terminal/changelog/version2_0_0.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version2_0_0",permalink:"/terminal/changelog/version2_0_0",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/changelog/version2_0_0.mdx",tags:[],version:"current",sidebarPosition:107,frontMatter:{title:"v2.0.0",version:"2.0.0",date:"2022-11-29T00:00:00.000Z",description:"v2.0.0",sidebar_position:107},sidebar:"tutorialSidebar",previous:{title:"v2.1.0",permalink:"/terminal/changelog/version2_1_0"},next:{title:"OpenBB SDK",permalink:"/sdk/"}},p={},u=[{value:"Major Release Notes",id:"major-release-notes",level:2},{value:"Minor Release Notes",id:"minor-release-notes",level:2}],s={toc:u},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"major-release-notes"},"Major Release Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OpenBB SDK",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"OpenBB Terminal available through ",(0,a.kt)("inlineCode",{parentName:"li"},"pip install openbb")),(0,a.kt)("li",{parentName:"ul"},"Full dependency chains for toolkits can be obtained through",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pip install openbb[optimization]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pip install openbb[forecast]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pip install openbb[all]")))),(0,a.kt)("li",{parentName:"ul"},"OpenBB Forecasting Menu",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Load terminal data or bring in your own data.  Integration with u8 darts library"),(0,a.kt)("li",{parentName:"ul"},"Custom tuning of models in the terminal"))),(0,a.kt)("li",{parentName:"ul"},"Automated Reports",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Can now run automated reports installer versions")))))),(0,a.kt)("h2",{id:"minor-release-notes"},"Minor Release Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"General bug fixing",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"DCF for US equities"),(0,a.kt)("li",{parentName:"ul"},"Updated events calendar"))),(0,a.kt)("li",{parentName:"ul"},"General UI/UX enhancements",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Multiple auto complete options"),(0,a.kt)("li",{parentName:"ul"},"API Keys saved between installer updates"),(0,a.kt)("li",{parentName:"ul"},"Data source menu for selecting default sources"),(0,a.kt)("li",{parentName:"ul"},"Short how-to intro on initial launch"))),(0,a.kt)("li",{parentName:"ul"},"Due to ",(0,a.kt)("a",{parentName:"li",href:"http://investing.com/"},"investing.com")," api changes, we have deprecated the funds menu for mutual fund data for the time being"),(0,a.kt)("li",{parentName:"ul"},"Updated Portfolio Allocation function"),(0,a.kt)("li",{parentName:"ul"},"Futures menu utilizing yahoo finance"),(0,a.kt)("li",{parentName:"ul"},"Automated Docker Build",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Can build docker image locally with 2 commands"))),(0,a.kt)("li",{parentName:"ul"},"Internationalization",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Add a translation into your native language")))))}c.isMDXComponent=!0}}]);