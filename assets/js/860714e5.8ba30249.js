"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(35742);function i(e){let{title:t}=e;return n.createElement(r.Z,null,n.createElement("title",null,t))}},273:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(88828);const o={title:"Options",description:"This is an informative page providing a detailed overview of how to navigate and use the Options Menu to analyze equity options. It discusses the functions, and gives clear examples of how to fetch and analyze options data such as chains, Greeks, expiration dates, and put/call ratios using different financial data sources.",keywords:["equity options","options menu","financial instruments","derivatives","due diligence","YahooFinance","Nasdaq","Tradier","Intrinio","options data","options chains","options functions","ticker symbol","unusual options","fdscanner.com","option chain","put/call ratio","expiration date","volatility smile","second order Greeks","greeks command","puts","calls","surface","spx","ndx"]},l=void 0,s={unversionedId:"terminal/menus/stocks/options",id:"terminal/menus/stocks/options",title:"Options",description:"This is an informative page providing a detailed overview of how to navigate and use the Options Menu to analyze equity options. It discusses the functions, and gives clear examples of how to fetch and analyze options data such as chains, Greeks, expiration dates, and put/call ratios using different financial data sources.",source:"@site/content/terminal/menus/stocks/options.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/options",permalink:"/terminal/menus/stocks/options",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/menus/stocks/options.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"Options",description:"This is an informative page providing a detailed overview of how to navigate and use the Options Menu to analyze equity options. It discusses the functions, and gives clear examples of how to fetch and analyze options data such as chains, Greeks, expiration dates, and put/call ratios using different financial data sources.",keywords:["equity options","options menu","financial instruments","derivatives","due diligence","YahooFinance","Nasdaq","Tradier","Intrinio","options data","options chains","options functions","ticker symbol","unusual options","fdscanner.com","option chain","put/call ratio","expiration date","volatility smile","second order Greeks","greeks command","puts","calls","surface","spx","ndx"]},sidebar:"tutorialSidebar",previous:{title:"Insider Trading",permalink:"/terminal/menus/stocks/ins"},next:{title:"Stock Screener",permalink:"/terminal/menus/stocks/screener"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"UNU",id:"unu",level:3},{value:"Load",id:"load",level:3},{value:"PCR",id:"pcr",level:3},{value:"EXP",id:"exp",level:3},{value:"Plot",id:"plot",level:3},{value:"Greeks",id:"greeks",level:3}],d={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{title:"Options - Stocks - Menus | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,r.kt)("p",null,"The Options menu provides the user with tools for analyzing equity options. Wikipedia is a great resource for definitions and for learning about the mechanics of derivatives, read it ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Option_(finance)"},"here"),". These are complex, leveraged, financial instruments requiring specialized knowledge and a different frame-of-mind than the approach taken by an equities long-only investor. Always conduct thorough due diligence."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Navigate to the menu by typing ",(0,r.kt)("inlineCode",{parentName:"p"},"options"),", from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/stocks")," menu, and then pressing enter. The menu can also be entered by the absolute path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/options\n")),(0,r.kt)("p",null,"The source for the options data can be defined using the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," command, and a default preference is be defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/sources")," menu - or on the ",(0,r.kt)("a",{parentName:"p",href:"https://my.openbb.co"},"OpenBB Hub"),". The chains data returned will vary by source. The following sources are currently available to use:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"YahooFinance"),(0,r.kt)("li",{parentName:"ul"},"Nasdaq"),(0,r.kt)("li",{parentName:"ul"},"Tradier (requires API key)"),(0,r.kt)("li",{parentName:"ul"},"Intrinio (requires API key)")),(0,r.kt)("p",null,"The menu can be entered without a ticker symbol loaded. If one is already loaded from the stocks menu, it will automatically fetch the chains data from the default source. The commands displayed above the currently active Ticker and Expiry do not require any data to be loaded, while the functions below do."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Function Key"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"calc"),(0,r.kt)("td",{parentName:"tr",align:"right"},"A basic payoff diagram for a single call or put.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"chains"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Display options chains and Greeks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"eodchain"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Gets the option chain for a ticker, on a specific date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"exp"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Select a target expiration date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"greeks"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Shows or recalculates the Greeks for an expiration date.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"grhist"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Plot the historical Greeks of an individual contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hedge"),(0,r.kt)("td",{parentName:"tr",align:"right"},"A calculator for weighting a position to neutralize delta.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hist"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Historical prices of an individual contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"info"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Basic stats for the options chain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"load"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Load a new ticker.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"oi"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Plot the open interest.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"plot"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Plot x vs. y as defined by the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"pcr"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Display historical rolling put/call ratios for a ticker over a selectable window.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"screen"),(0,r.kt)("td",{parentName:"tr",align:"right"},"An options screener.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"unu"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Unusual options activity for S&P 500 stocks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"voi"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Plot the volume and open interest together.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"vol"),(0,r.kt)("td",{parentName:"tr",align:"right"},"Plot the volume.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"vsurf"),(0,r.kt)("td",{parentName:"tr",align:"right"},"3-D volatility surface chart.")))),(0,r.kt)("p",null,"The examples here will start by entering the Options menu without a ticker symbol loaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/options\n")),(0,r.kt)("h3",{id:"unu"},"UNU"),(0,r.kt)("p",null,"Unusual options are described as those having a very high volume/open interest ratio. This function is built using the data provided by ",(0,r.kt)("a",{parentName:"p",href:"https://fdscanner.com"},"fdscanner.com"),". By default, the top 20 options with the highest vol/OI ratio are returned as a table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"unu\n")),(0,r.kt)("p",null,"With the new interactive tables, it may be better to remove the limit and utilize the table's built-in filtering."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"unu -l 500\n")),(0,r.kt)("p",null,"This returned over 500 results which can then be filtered, for example, by June/23 expirations. There were thirty-four results."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234757578-da79b032-416b-4e0a-b759-a05f651f28a2.png",alt:"Unusual Options"})),(0,r.kt)("h3",{id:"load"},"Load"),(0,r.kt)("p",null,"Let's take a look at one of these tickers, GM. The default source will be ",(0,r.kt)("inlineCode",{parentName:"p"},"YahooFinance"),". Select a different source by attaching ",(0,r.kt)("inlineCode",{parentName:"p"},"--source")," to the command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"load gm\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"This obtains the data for all the expirations, very long chains - like SPY - may take a few moments to load."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Getting Option Chain \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100% 0:00:00\nLoaded option chain from YahooFinance\n")),(0,r.kt)("h3",{id:"pcr"},"PCR"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pcr")," command plots a rolling put/call ratio (ten years max) over a selectable window of time (default is 30 days)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"pcr -l 90 -s 2010-04-01\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234757627-8250700b-1586-4535-948e-33d6ff18c4a2.png",alt:"GM 90-Day P/C Ratio"})),(0,r.kt)("p",null,"Adding in an overlay from an exported CSV file adds more context to the story."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"/stocks/load GM --start 2013-04-01 --monthly --export gm_monthly.csv\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234757705-0bc63a89-0cb8-4d32-a403-2a8aa7b0337a.png",alt:"GM 90-Day P/C Ratio Against Share Price"})),(0,r.kt)("h3",{id:"exp"},"EXP"),(0,r.kt)("p",null,"After loading, select an expiration date for the chain using the ",(0,r.kt)("inlineCode",{parentName:"p"},"exp")," command. To display the list of available expirations, use the function with no arguments. The date can be selected by entering a number - with ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," being the nearest expiry - or by entering the date, formatted as ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DD"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"exp 2023-06-02\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Expiration set to 2023-06-02\n")),(0,r.kt)("h3",{id:"plot"},"Plot"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"plot")," function to draw the volatility smile for the selected expiration date."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"plot -c smile\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234757758-537ada39-cf47-49e3-a861-b97c4b7a9919.png",alt:"Volatility Smile"})),(0,r.kt)("h3",{id:"greeks"},"Greeks"),(0,r.kt)("p",null,"Calculate the second order Greeks - Rho, Phi, Charm, Vanna, Vomma - with the ",(0,r.kt)("inlineCode",{parentName:"p"},"greeks")," command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"greeks --risk-free 4.8 --all\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234757813-c6a7b04f-3a20-4c7b-841b-1cd3fec7c088.png",alt:"Greeks Command"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/234757864-749ff78e-00c3-465a-b1b1-f4d0d2991c84.png",alt:"Second Order Greeks"})))}m.isMDXComponent=!0}}]);