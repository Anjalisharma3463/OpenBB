"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17869],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),d=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},p="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),p=d(a),c=n,f=p["".concat(u,".").concat(c)]||p[c]||s[c]||l;return a?r.createElement(f,o(o({ref:e},m),{},{components:a})):r.createElement(f,o({ref:e},m))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[p]="string"==typeof t?t:n,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(67294),n=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){let{children:e,hidden:a,className:o}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,o),hidden:a},e)}},31792:(t,e,a)=>{a.d(e,{Z:()=>v});var r=a(87462),n=a(67294),l=a(86010),o=a(12466),i=a(16550),u=a(91980),d=a(67392),m=a(50012);function p(t){return function(t){return n.Children.map(t,(t=>{if(!t||(0,n.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:r,default:n}}=t;return{value:e,label:a,attributes:r,default:n}}))}function s(t){const{values:e,children:a}=t;return(0,n.useMemo)((()=>{const t=e??p(a);return function(t){const e=(0,d.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function f(t){let{queryString:e=!1,groupId:a}=t;const r=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(r.location.search);e.set(l,t),r.replace({...r.location,search:e.toString()})}),[l,r])]}function k(t){const{defaultValue:e,queryString:a=!1,groupId:r}=t,l=s(t),[o,i]=(0,n.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const r=a.find((t=>t.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:e,tabValues:l}))),[u,d]=f({queryString:a,groupId:r}),[p,k]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[r,l]=(0,m.Nk)(a);return[r,(0,n.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:r}),g=(()=>{const t=u??p;return c({value:t,tabValues:l})?t:null})();(0,n.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((t=>{if(!c({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),d(t),k(t)}),[d,k,l]),tabValues:l}}var g=a(72389);const N={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};function b(t){let{className:e,block:a,selectedValue:u,selectValue:d,tabValues:m}=t;const p=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),{pathname:c}=(0,i.TH)(),f=t=>{const e=t.currentTarget,a=p.indexOf(e),r=m[a].value;r!==u&&(s(e),d(r))},k=t=>{let e=null;switch(t.key){case"Enter":f(t);break;case"ArrowRight":{const a=p.indexOf(t.currentTarget)+1;e=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(t.currentTarget)-1;e=p[a]??p[p.length-1];break}}e?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none -ml-7 my-6 overflow-auto")},m.map((t=>{let{value:e,label:a,attributes:o}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:t=>p.push(t),onKeyDown:k,onClick:f},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",N.tabItem,o?.className,{"border-b-2 pointer-events-none":u===e,"border-b-2 text-[#669dcb] border-[#669dcb]":u===e&&c.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&c.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&c.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":u===e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":u!==e&&c.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":u!==e&&c.startsWith("/terminal")})}),a??e)})))}function y(t){let{lazy:e,children:a,selectedValue:r}=t;if(a=Array.isArray(a)?a:[a],e){const t=a.find((t=>t.props.value===r));return t?(0,n.cloneElement)(t,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},a.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==r}))))}function h(t){const e=k(t);return n.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},n.createElement(b,(0,r.Z)({},t,e)),n.createElement(y,(0,r.Z)({},t,e)))}function v(t){const e=(0,g.Z)();return n.createElement(h,(0,r.Z)({key:String(e)},t))}},3777:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=a(87462),n=(a(67294),a(3905)),l=a(31792),o=a(85162);const i={title:"Etf Holdings Performance",description:"Get the ETF holdings performance"},u=void 0,d={unversionedId:"platform/data_models/EtfHoldingsPerformance",id:"platform/data_models/EtfHoldingsPerformance",title:"Etf Holdings Performance",description:"Get the ETF holdings performance",source:"@site/content/platform/data_models/EtfHoldingsPerformance.md",sourceDirName:"platform/data_models",slug:"/platform/data_models/EtfHoldingsPerformance",permalink:"/platform/data_models/EtfHoldingsPerformance",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/data_models/EtfHoldingsPerformance.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"Etf Holdings Performance",description:"Get the ETF holdings performance"},sidebar:"tutorialSidebar",previous:{title:"Etf Holdings Date",permalink:"/platform/data_models/EtfHoldingsDate"},next:{title:"Etf Info",permalink:"/platform/data_models/EtfInfo"}},m={},p=[{value:"Implementation details",id:"implementation-details",level:2},{value:"Class names",id:"class-names",level:3},{value:"Import Statement",id:"import-statement",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}],s={toc:p},c="wrapper";function f(t){let{components:e,...a}=t;return(0,n.kt)(c,(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"implementation-details"},"Implementation details"),(0,n.kt)("h3",{id:"class-names"},"Class names"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Model name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameters class"),(0,n.kt)("th",{parentName:"tr",align:null},"Data class"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"EtfHoldingsPerformance")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"EtfHoldingsPerformanceQueryParams")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"EtfHoldingsPerformanceData"))))),(0,n.kt)("h3",{id:"import-statement"},"Import Statement"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_core.provider.standard_models. import (\nEtfHoldingsPerformanceData,\nEtfHoldingsPerformanceQueryParams,\n)\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"Union[str, List","[str]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"Symbol to get data for."),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"provider"),(0,n.kt)("td",{parentName:"tr",align:null},"Literal","['fmp']"),(0,n.kt)("td",{parentName:"tr",align:null},"The provider to use for the query, by default None. If None, the provider specified in defaults is selected or 'fmp' if there is no default."),(0,n.kt)("td",{parentName:"tr",align:null},'"fmp"'),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"standard",label:"Standard",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"one_day"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"One-day return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"wtd"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Week to date return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"one_week"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"One-week return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mtd"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Month to date return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"one_month"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"One-month return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"qtd"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Quarter to date return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"three_month"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Three-month return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"six_month"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Six-month return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ytd"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Year to date return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"one_year"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"One-year return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"three_year"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Three-year return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"five_year"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Five-year return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ten_year"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Ten-year return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"max"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Return from the beginning of the time series."))))),(0,n.kt)(o.Z,{value:"fmp",label:"fmp",mdxType:"TabItem"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"one_day"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"One-day return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"wtd"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Week to date return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"one_week"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"One-week return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mtd"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Month to date return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"one_month"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"One-month return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"qtd"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Quarter to date return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"three_month"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Three-month return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"six_month"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Six-month return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ytd"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Year to date return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"one_year"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"One-year return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"three_year"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Three-year return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"five_year"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Five-year return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ten_year"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Ten-year return.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"max"),(0,n.kt)("td",{parentName:"tr",align:null},"float"),(0,n.kt)("td",{parentName:"tr",align:null},"Return from the beginning of the time series.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"symbol"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"The ticker symbol.")))))))}f.isMDXComponent=!0}}]);