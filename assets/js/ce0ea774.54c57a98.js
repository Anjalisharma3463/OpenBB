"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29965],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(35742);function i(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},20630:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(15569);function i(e){let{youtubeLink:t,videoLegend:a="Tutorial video"}=e;const[i,o]=(0,n.useState)(!0);return n.createElement("div",{style:{textAlign:"center"}},n.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},n.createElement("p",null,a),n.createElement("div",{style:{transform:"scale(0.7)"}},n.createElement(r.Toggle,{isOn:i,handleChange:()=>o(!i)}))),i&&n.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},n.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},11656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(88828),o=a(20630);const s={title:"Chart from raw data",sidebar_position:1,description:"Learn how to transform raw data into informative charts using OpenBB Terminal Pro. This tool simplifies data visualization, aiding quants and analysts in their investment research.",keywords:["investment research","data visualization","charting tool","quants","analysts"]},l=void 0,d={unversionedId:"pro/widgets/tabular-data/chart-from-raw-data",id:"pro/widgets/tabular-data/chart-from-raw-data",title:"Chart from raw data",description:"Learn how to transform raw data into informative charts using OpenBB Terminal Pro. This tool simplifies data visualization, aiding quants and analysts in their investment research.",source:"@site/content/pro/widgets/tabular-data/chart-from-raw-data.md",sourceDirName:"pro/widgets/tabular-data",slug:"/pro/widgets/tabular-data/chart-from-raw-data",permalink:"/pro/widgets/tabular-data/chart-from-raw-data",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/pro/widgets/tabular-data/chart-from-raw-data.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",sidebarPosition:1,frontMatter:{title:"Chart from raw data",sidebar_position:1,description:"Learn how to transform raw data into informative charts using OpenBB Terminal Pro. This tool simplifies data visualization, aiding quants and analysts in their investment research.",keywords:["investment research","data visualization","charting tool","quants","analysts"]},sidebar:"tutorialSidebar",previous:{title:"Tabular data",permalink:"/pro/widgets/tabular-data/"},next:{title:"Chat with widgets",permalink:"/pro/widgets/chat-with-widget"}},c={},p=[],u={toc:p},m="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Chart from raw data | OpenBB Terminal Pro Docs",mdxType:"HeadTitle"}),(0,r.kt)(o.Z,{youtubeLink:"https://www.youtube.com/embed/4jV_FUb5tVU?si=Ic4VNdm8rsbketD1",videoLegend:"Short introduction to chart from raw data",mdxType:"TutorialVideo"}),(0,r.kt)("p",null,"In the world of investment research, data is king. But raw, tabular data can be overwhelming and difficult to interpret. That's where charts come in. They transform complex data sets into visual narratives, making it easier to spot trends, compare variables, and make informed decisions."),(0,r.kt)("p",null,"With OpenBB Terminal Pro, you can create charts directly from your tabular data. Simply select the data you want to visualize, choose your preferred charting style, and let the software do the rest. It's a powerful tool for quants and analysts alike."),(0,r.kt)("p",null,"Here are a few examples to get you started:"),(0,r.kt)("img",{className:"pro-border-gradient",width:"800",alt:"example",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/1f521b0e-28c1-4126-bd13-658262745fc8"}),(0,r.kt)("img",{className:"pro-border-gradient",width:"800",alt:"example",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/4829a4a0-5186-40f9-bcee-86e1a373d3c8"}),(0,r.kt)("img",{className:"pro-border-gradient",width:"800",alt:"example",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/5f02d6e8-6344-4dc2-8950-b925b5eba04f"}))}f.isMDXComponent=!0},15569:(e,t,a)=>{e.exports=a(42285)},42285:(e,t,a)=>{var n,r=(n=a(67294))&&"object"==typeof n&&"default"in n?n.default:n;!function(e,t){void 0===t&&(t={});var a=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===a&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return r.createElement("label",{"data-testid":"Toggle-label",className:"switch"},r.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),r.createElement("span",{className:"slider round"}))}}}]);