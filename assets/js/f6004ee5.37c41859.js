"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23964],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),i=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=i(e.components);return a.createElement(p.Provider,{value:r},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),y=i(t),m=n,d=y["".concat(p,".").concat(m)]||y[m]||u[m]||c;return t?a.createElement(d,o(o({ref:r},s),{},{components:t})):a.createElement(d,o({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[y]="string"==typeof e?e:n,o[1]=l;for(var i=2;i<c;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48558:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var a=t(87462),n=(t(67294),t(3905));const c={title:"search",description:"The documentation page provides information on how to perform a cryptocurrency search, including the search query and provider parameters, as well as the resulting crypto search data such as symbol, name, currency, and exchange information.",keywords:["cryptocurrency search","available cryptocurrency pairs","python obb crypto search","search query parameter","provider parameter","crypto search results","crypto search provider","crypto search warnings","crypto search chart","crypto search metadata","crypto data","symbol","crypto name","crypto currency","crypto exchange","crypto exchange name"]},o=void 0,l={unversionedId:"excel/reference/library/crypto/search",id:"excel/reference/library/crypto/search",title:"search",description:"The documentation page provides information on how to perform a cryptocurrency search, including the search query and provider parameters, as well as the resulting crypto search data such as symbol, name, currency, and exchange information.",source:"@site/content/excel/reference/library/crypto/search.md",sourceDirName:"excel/reference/library/crypto",slug:"/excel/reference/library/crypto/search",permalink:"/excel/reference/library/crypto/search",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/excel/reference/library/crypto/search.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"search",description:"The documentation page provides information on how to perform a cryptocurrency search, including the search query and provider parameters, as well as the resulting crypto search data such as symbol, name, currency, and exchange information.",keywords:["cryptocurrency search","available cryptocurrency pairs","python obb crypto search","search query parameter","provider parameter","crypto search results","crypto search provider","crypto search warnings","crypto search chart","crypto search metadata","crypto data","symbol","crypto name","crypto currency","crypto exchange","crypto exchange name"]},sidebar:"tutorialSidebar",previous:{title:"historical",permalink:"/excel/reference/library/crypto/price/historical"},next:{title:"economy",permalink:"/excel/reference/library/economy/"}},p={},i=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return Data",id:"return-data",level:2}],s={toc:i},y="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(y,(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Cryptocurrency Search. Search available cryptocurrency pairs."),(0,n.kt)("h2",{id:"syntax"},"Syntax"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-excel",metastring:"wordwrap",wordwrap:!0},"=OBB.CRYPTO.SEARCH(required; [optional])\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Options: fmp"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"Text"),(0,n.kt)("td",{parentName:"tr",align:null},"Search query."),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"return-data"},"Return Data"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol representing the entity requested in the data. (Crypto)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the crypto.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"currency"),(0,n.kt)("td",{parentName:"tr",align:null},"The currency the crypto trades for. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange"),(0,n.kt)("td",{parentName:"tr",align:null},"The exchange code the crypto trades on. (provider: fmp)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exchange_name"),(0,n.kt)("td",{parentName:"tr",align:null},"The short name of the exchange the crypto trades on. (provider: fmp)")))))}u.isMDXComponent=!0}}]);