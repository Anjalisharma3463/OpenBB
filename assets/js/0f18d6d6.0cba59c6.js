"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88828:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),i=n(35742);function a(e){let{title:t}=e;return r.createElement(i.Z,null,r.createElement("title",null,t))}},18002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),a=n(88828);const s={title:"Insider Trading",description:"This documentation page features the insider trading menu which gives stock screener for SEC Form 4 filings and researching individual companies for executive and director transactions",keywords:["SEC form 4 filings","insider","insider trading","insider activity","stock screener","reporting","transactions","trade type","trade date"]},o=void 0,l={unversionedId:"terminal/menus/stocks/ins",id:"terminal/menus/stocks/ins",title:"Insider Trading",description:"This documentation page features the insider trading menu which gives stock screener for SEC Form 4 filings and researching individual companies for executive and director transactions",source:"@site/content/terminal/menus/stocks/ins.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/ins",permalink:"/terminal/menus/stocks/ins",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/ins.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709640028,formattedLastUpdatedAt:"Mar 5, 2024",frontMatter:{title:"Insider Trading",description:"This documentation page features the insider trading menu which gives stock screener for SEC Form 4 filings and researching individual companies for executive and director transactions",keywords:["SEC form 4 filings","insider","insider trading","insider activity","stock screener","reporting","transactions","trade type","trade date"]},sidebar:"tutorialSidebar",previous:{title:"Government",permalink:"/terminal/menus/stocks/gov"},next:{title:"Options",permalink:"/terminal/menus/stocks/options"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Screening",id:"screening",level:3},{value:"Set",id:"set",level:4},{value:"Filter",id:"filter",level:4},{value:"Scanning",id:"scanning",level:3},{value:"toppw",id:"toppw",level:4},{value:"Researching",id:"researching",level:3},{value:"stats",id:"stats",level:4}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{title:"Insider Trading - Stocks - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,i.kt)("p",null,"The Insider Trading menu provides screener-like functions for SEC Form 4 filings, or for researching individual companies with executive and director transactions. The features in this menu function only for companies registered with the SEC, that also trade in public markets."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Navigate to the Insider Trading submenu from the ",(0,i.kt)("inlineCode",{parentName:"p"},"stocks")," menu by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"ins")," and pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"enter"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/6e79a43c-f401-4519-a777-415c64581ddd",alt:"Screenshot 2023-11-01 at 12 46 13\u202fPM"})),(0,i.kt)("p",null,"The menu can be entered with its absolute path:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/ins\n")),(0,i.kt)("p",null,"The Insider Trading menu contains three groups of functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Screening: use presets to filter companies."),(0,i.kt)("li",{parentName:"ul"},"Scanning: scan the latest transactions in the market."),(0,i.kt)("li",{parentName:"ul"},"Researching: lookup individual companies.")),(0,i.kt)("h3",{id:"screening"},"Screening"),(0,i.kt)("p",null,"Screening in this sub-menu uses a similar process to the ",(0,i.kt)("a",{parentName:"p",href:"/terminal/menus/stocks/screener"},"Stocks Screener"),".  This ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/blob/develop/openbb_terminal/miscellaneous/stocks/insider/template.ini"},"template")," file is a starting point, and describes how to configurea preset for use.  Follow the formatting instructions in the comments of the template file, then place this file in the OpenBBUserData folder: ",(0,i.kt)("inlineCode",{parentName:"p"},"~/OpenBBUserData/presets/stocks/insider"),".  Files placed in this folder will be recognized by the auto complete choices on next launch.  Changes to the settings (without altering the filename) will be reflected when the preset  is run, restarting the Terminal is not required."),(0,i.kt)("h4",{id:"set"},"Set"),(0,i.kt)("p",null,"Set the preset to use by typing, ",(0,i.kt)("inlineCode",{parentName:"p"},"set -p"),", and then the spacebar will activated the choices from auto complete."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/6eaea63a-bfff-47c3-be79-4a7df490f5c8",alt:"Screenshot 2023-11-01 at 1 17 55\u202fPM"})),(0,i.kt)("h4",{id:"filter"},"Filter"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"filter")," command runs the screen.  Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--limit")," parameter to increase the number of results returned."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"set -p Insurance-Agents\nfilter\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"A: Amended filing\nD: Derivative transaction in filing (usually option exercise)\nM: Multiple transactions in filing; earliest reported transaction date & weighted average transaction price\nP - Purchase: Purchase of securities on an exchange or from another person\nS - Sale: Sale of securities on an exchange or to another person\nS - Sale+OE: Sale of securities on an exchange or to another person (after option exercise)\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/4793ef66-0e4e-46bd-886f-f6615058b4f6",alt:"Screenshot 2023-11-01 at 1 23 29\u202fPM"})),(0,i.kt)("h3",{id:"scanning"},"Scanning"),(0,i.kt)("p",null,'The commands grouped by both "Last Insiders" and "Top Insiders" filter market-wide by the description printed on the menu.'),(0,i.kt)("h4",{id:"toppw"},"toppw"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"toppw")," returns the top officer purchases during the past week."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/ins/toppw\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/2caf277e-75e3-4f6a-90a5-0f92b449062c",alt:"Screenshot 2023-11-01 at 1 28 32\u202fPM"})),(0,i.kt)("h3",{id:"researching"},"Researching"),(0,i.kt)("p",null,"The three functions grouped at the bottom are activated when the Insider Trading menu is entered with a ticker symbol loaded from the ",(0,i.kt)("inlineCode",{parentName:"p"},"/stocks")," menu."),(0,i.kt)("h4",{id:"stats"},"stats"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"stats")," command shows the insider activity for a ticker."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load rivn/ins/stats\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/6028b97e-bea4-4d4e-85e1-3512c8004675",alt:"Screenshot 2023-11-01 at 1 41 29\u202fPM"})))}m.isMDXComponent=!0}}]);