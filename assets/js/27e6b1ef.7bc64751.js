"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(35742);function i(e){let{title:t}=e;return r.createElement(a.Z,null,r.createElement("title",null,t))}},20630:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(15569);function i(e){let{youtubeLink:t,videoLegend:n="Tutorial video"}=e;const[i,o]=(0,r.useState)(!0);return r.createElement("div",{style:{textAlign:"center"}},r.createElement("div",{className:"flex flex-col sm:flex-row items-center justify-center"},r.createElement("p",null,n),r.createElement("div",{style:{transform:"scale(0.7)"}},r.createElement(a.Toggle,{isOn:i,handleChange:()=>o(!i)}))),i&&r.createElement("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"}},r.createElement("iframe",{id:t,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})))}},9942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),i=n(88828),o=n(20630);const l={title:"Interactive Tables",sidebar_position:1,description:"Learn how to navigate and utilize OpenBB's interactive tables using our open source PyWry technology. Understand how to sort and filter columns, hide or remove columns, select number of rows per page, freeze index and column headers, and export the data.",keywords:["interactive tables","PyWry technology","sorting columns","filtering columns","hiding columns","rows per page","freeze index","freeze column headers","exporting data","data visualization","customizing tables"]},s=void 0,c={unversionedId:"terminal/usage/outputs/interactive-tables",id:"terminal/usage/outputs/interactive-tables",title:"Interactive Tables",description:"Learn how to navigate and utilize OpenBB's interactive tables using our open source PyWry technology. Understand how to sort and filter columns, hide or remove columns, select number of rows per page, freeze index and column headers, and export the data.",source:"@site/content/terminal/usage/outputs/interactive-tables.md",sourceDirName:"terminal/usage/outputs",slug:"/terminal/usage/outputs/interactive-tables",permalink:"/terminal/usage/outputs/interactive-tables",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/usage/outputs/interactive-tables.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709640028,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:1,frontMatter:{title:"Interactive Tables",sidebar_position:1,description:"Learn how to navigate and utilize OpenBB's interactive tables using our open source PyWry technology. Understand how to sort and filter columns, hide or remove columns, select number of rows per page, freeze index and column headers, and export the data.",keywords:["interactive tables","PyWry technology","sorting columns","filtering columns","hiding columns","rows per page","freeze index","freeze column headers","exporting data","data visualization","customizing tables"]},sidebar:"tutorialSidebar",previous:{title:"Outputs",permalink:"/terminal/usage/outputs/"},next:{title:"Interactive Charts",permalink:"/terminal/usage/outputs/interactive-charts"}},d={},u=[{value:"Sorting",id:"sorting",level:2},{value:"Filtering",id:"filtering",level:2},{value:"Hiding columns",id:"hiding-columns",level:2},{value:"Select rows per page",id:"select-rows-per-page",level:2},{value:"Freeze the Index and Column Headers",id:"freeze-the-index-and-column-headers",level:2},{value:"Exporting Data",id:"exporting-data",level:2}],p={toc:u},m="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"Interactive Tables - Outputs - Usage | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,a.kt)(o.Z,{youtubeLink:"https://www.youtube.com/embed/knIYEvziZXQ?si=_2h8-xcodRm-qU6Y",videoLegend:"Short introduction on interactive tables",mdxType:"TutorialVideo"}),(0,a.kt)("p",null,"A common type of output in OpenBB are interactive tables which open in a separated window (utilizing our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/pywry"},"open source PyWry")," technology). These provide methods for searching, sorting, filtering, exporting and even adapting settings directly on the table."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Table cheat sheet "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234315026-de098953-111b-4b69-9124-31530c01407a.png",alt:"Chart Intro (5)"}))),(0,a.kt)("h2",{id:"sorting"},"Sorting"),(0,a.kt)("p",null,"Columns can be sorted ascending/descending/unsorted, by clicking the controls to the right of each header title.  The status of the filtering is shown as a blue indicator."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248754-20c18390-a7af-490c-9571-876447b1b0ae.png",alt:"Sort Columns"})),(0,a.kt)("h2",{id:"filtering"},"Filtering"),(0,a.kt)("p",null,"The settings button, at the lower-left corner, displays choices for customizing the table. By selecting the ",(0,a.kt)("inlineCode",{parentName:"p"},"Type")," to be ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced"),", columns become filterable."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248876-0d788ff4-974d-4d92-8186-56864469870a.png",alt:"Table Settings"})),(0,a.kt)("p",null,"The columns can be filtered with min/max values or by letters, depending on the content of each column."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248923-45873bf1-de6b-40f8-a4aa-05e7c3d21ab0.png",alt:"Filtered Tables"})),(0,a.kt)("h2",{id:"hiding-columns"},"Hiding columns"),(0,a.kt)("p",null,"The table will scroll to the right as far as there are columns.  Columns can be removed from the table by clicking the icon to the right of the settings button and unchecking it from the list."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233248976-849791a6-c126-437c-bb54-454ba6ea4fa2.png",alt:"Select Columns"})),(0,a.kt)("h2",{id:"select-rows-per-page"},"Select rows per page"),(0,a.kt)("p",null,"The number of rows per page is defined in the drop down selection near the center, at the bottom."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233249018-8269896d-72f7-4e72-a4d4-2715d1f11b96.png",alt:"Rows per Page"})),(0,a.kt)("h2",{id:"freeze-the-index-and-column-headers"},"Freeze the Index and Column Headers"),(0,a.kt)("p",null,"Right-click on the index name to enable/disable freezing when scrolling to the right. Column headers are frozen by default."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234103702-0965dfbd-24ca-4a66-8c76-9fac28abcff8.png",alt:"Index Freeze"})),(0,a.kt)("h2",{id:"exporting-data"},"Exporting Data"),(0,a.kt)("p",null,"At the bottom-right corner of the table window, there is a button for exporting the data.  To the left, the drop down selection for ",(0,a.kt)("inlineCode",{parentName:"p"},"Type")," can be defined as a CSV, XLSX, or PNG file.  Exporting the table as a PNG file will create a screenshot of the table at its current view, and data that is not visible will not be captured."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/233249065-60728dd1-612e-4684-b196-892f3604c0f4.png",alt:"Export Data"})))}h.isMDXComponent=!0},15569:(e,t,n)=>{e.exports=n(42285)},42285:(e,t,n)=>{var r,a=(r=n(67294))&&"object"==typeof r&&"default"in r?r.default:r;!function(e,t){void 0===t&&(t={});var n=t.insertAt;if("undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),t.Toggle=function(e){return a.createElement("label",{"data-testid":"Toggle-label",className:"switch"},a.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),a.createElement("span",{className:"slider round"}))}}}]);