"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31526],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(o),u=n,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return o?r.createElement(h,s(s({ref:t},p),{},{components:o})):r.createElement(h,s({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},88828:(e,t,o)=>{o.d(t,{Z:()=>a});var r=o(67294),n=o(35742);function a(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},37833:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=o(87462),n=(o(67294),o(3905)),a=o(88828);const s={title:"Discord",sidebar_position:1,description:"Learn how to use the OpenBB Discord Bot using slash commands to explore stock market data. Discover the most popular commands like /help, /cd, /c3m, and /flow for daily charts, 3-month charts, and options flow, respectively.",keywords:["OpenBB Discord Bot","slash commands","/help command","stock ticker","daily chart","3-month chart","options flow"]},i=void 0,c={unversionedId:"bot/usage/discord",id:"bot/usage/discord",title:"Discord",description:"Learn how to use the OpenBB Discord Bot using slash commands to explore stock market data. Discover the most popular commands like /help, /cd, /c3m, and /flow for daily charts, 3-month charts, and options flow, respectively.",source:"@site/content/bot/usage/discord.md",sourceDirName:"bot/usage",slug:"/bot/usage/discord",permalink:"/bot/usage/discord",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/bot/usage/discord.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709640028,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:1,frontMatter:{title:"Discord",sidebar_position:1,description:"Learn how to use the OpenBB Discord Bot using slash commands to explore stock market data. Discover the most popular commands like /help, /cd, /c3m, and /flow for daily charts, 3-month charts, and options flow, respectively.",keywords:["OpenBB Discord Bot","slash commands","/help command","stock ticker","daily chart","3-month chart","options flow"]},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/bot/usage/"},next:{title:"Telegram",permalink:"/bot/usage/telegram"}},l={},p=[],d={toc:p},m="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(a.Z,{title:"Discord - Usage | OpenBB Bot Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Now that you have added the bot to your Discord you can get started with running commands."),(0,n.kt)("p",null,"If you're new to OpenBB Discord Bot, here's a quick guide to get you started."),(0,n.kt)("p",null,"To use OpenBB, you need to use slash commands, which are special commands that start with a / symbol. To autoselect commands if you are on Desktop you can hit ",(0,n.kt)("inlineCode",{parentName:"p"},"TAB")),(0,n.kt)("div",{className:"flex justify-center h-full w-[800px] rounded-r-[4px]"},(0,n.kt)("img",{className:"h-full object-cover",alt:"gif describing step",src:"https://openbb-web-assets.s3.amazonaws.com/docusaurus-openbb-bot-walkthrough-gifs/page1.gif"})),(0,n.kt)("p",null,"You can type / in the chat to see a list of available slash commands for OpenBB Bot. One of the most useful slash commands is ",(0,n.kt)("inlineCode",{parentName:"p"},"/help"),", which shows you all the commands and how to use them. Some of the most popular commands are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/cd ticker: AMD")," Shows the daily chart for a given stock ticker."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/c3m ticker: AMD")," Shows the 3-month chart for a given stock ticker."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/flow ticker: AMD")," Shows the recent options flow for the given stock ticker.")),(0,n.kt)("p",null,"That's it! You're ready to explore the market with OpenBB Discord Bot!"),(0,n.kt)("p",null,"Check out the Reference section for more commands or type ",(0,n.kt)("inlineCode",{parentName:"p"},"/help")," in your chat to see what else we can do!"))}u.isMDXComponent=!0}}]);