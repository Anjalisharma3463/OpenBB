"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(f,l(l({ref:t},s),{},{components:a})):r.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},88828:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(35742);function o(e){let{title:t}=e;return r.createElement(n.Z,null,r.createElement("title",null,t))}},68435:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=a(87462),n=(a(67294),a(3905)),o=a(88828);const l={title:"funot",description:"This page covers the 'funot' function, which displays fundamental metrics such as market cap, revenue, and TVL (Total Value Locked) for a wide array of digital asset projects, as sourced from Token Terminal.",keywords:["funot","Token Terminal","digital asset metrics","cryptocurrency analysis","cryptocurrency projects","market cap","revenue","TVL","python function","Total Value Locked","cryptocurrency metrics","fundamental metrics","SEO for docusaurus"]},i=void 0,c={unversionedId:"terminal/reference/crypto/dd/funot",id:"terminal/reference/crypto/dd/funot",title:"funot",description:"This page covers the 'funot' function, which displays fundamental metrics such as market cap, revenue, and TVL (Total Value Locked) for a wide array of digital asset projects, as sourced from Token Terminal.",source:"@site/content/terminal/reference/crypto/dd/funot.md",sourceDirName:"terminal/reference/crypto/dd",slug:"/terminal/reference/crypto/dd/funot",permalink:"/terminal/reference/crypto/dd/funot",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/dd/funot.md",tags:[],version:"current",lastUpdatedBy:"Danglewood",lastUpdatedAt:1704496662,formattedLastUpdatedAt:"Jan 5, 2024",frontMatter:{title:"funot",description:"This page covers the 'funot' function, which displays fundamental metrics such as market cap, revenue, and TVL (Total Value Locked) for a wide array of digital asset projects, as sourced from Token Terminal.",keywords:["funot","Token Terminal","digital asset metrics","cryptocurrency analysis","cryptocurrency projects","market cap","revenue","TVL","python function","Total Value Locked","cryptocurrency metrics","fundamental metrics","SEO for docusaurus"]},sidebar:"tutorialSidebar",previous:{title:"fundrate",permalink:"/terminal/reference/crypto/dd/fundrate"},next:{title:"gh",permalink:"/terminal/reference/crypto/dd/gh"}},p={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o.Z,{title:"crypto /dd/funot - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,n.kt)("p",null,"Display fundamental metric over time ","[Source: Token Terminal]"),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"funot [-m {twitter_followers,gmv_annualized,market_cap,take_rate,revenue,revenue_protocol,tvl,pe,pe_circulating,ps,ps_circulating}] -p {0x,1inch,88mph,aave,abracadabra-money,alchemist,alchemix-finance,algorand,alpha-finance,arweave,autofarm,avalanche,axie-infinity,balancer,bancor,barnbridge,basket-dao,benqi,binance-smart-chain,bitcoin,cap,cardano,centrifuge,clipper,compound,convex-finance,cosmos,cryptex,curve,decentral-games,decred,dforce,dhedge,dodo,dogecoin,dydx,ellipsis-finance,elrond,enzyme-finance,erasure-protocol,ethereum,ethereum-name-service,euler,fantom,fei-protocol,filecoin,futureswap,gmx,goldfinch,harvest-finance,helium,hurricaneswap,idle-finance,index-cooperative,instadapp,integral-protocol,karura,keeperdao,keep-network,kusama,kyber,lido-finance,liquity,litecoin,livepeer,looksrare,loopring,maiar,makerdao,maple-finance,mcdex,metamask,mstable,near-protocol,nexus-mutual,nftx,notional-finance,opensea,optimism,osmosis,pancakeswap,pangolin,perpetual-protocol,piedao,pocket-network,polkadot,polygon,polymarket,pooltogether,powerpool,quickswap,rarible,rari-capital,reflexer,ren,ribbon-finance,rocket-pool,saddle-finance,set-protocol,solana,solend,spookyswap,stake-dao,stellar,sushiswap,synthetix,terra,tezos,the-graph,thorchain,tokemak,tokenlon,tornado-cash,trader-joe,uma,uniswap,unit-protocol,venus,vesper-finance,volmex,wakaswap,yearn-finance,yield-guild-games,yield-yak,zcash,zora}\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"),(0,n.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"metric"),(0,n.kt)("td",{parentName:"tr",align:null},"-m  --metric"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose metric of interest"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True"),(0,n.kt)("td",{parentName:"tr",align:null},"twitter_followers, gmv_annualized, market_cap, take_rate, revenue, revenue_protocol, tvl, pe, pe_circulating, ps, ps_circulating")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"project"),(0,n.kt)("td",{parentName:"tr",align:null},"-p  --project"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose project of interest"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"0x, 1inch, 88mph, aave, abracadabra-money, alchemist, alchemix-finance, algorand, alpha-finance, arweave, autofarm, avalanche, axie-infinity, balancer, bancor, barnbridge, basket-dao, benqi, binance-smart-chain, bitcoin, cap, cardano, centrifuge, clipper, compound, convex-finance, cosmos, cryptex, curve, decentral-games, decred, dforce, dhedge, dodo, dogecoin, dydx, ellipsis-finance, elrond, enzyme-finance, erasure-protocol, ethereum, ethereum-name-service, euler, fantom, fei-protocol, filecoin, futureswap, gmx, goldfinch, harvest-finance, helium, hurricaneswap, idle-finance, index-cooperative, instadapp, integral-protocol, karura, keeperdao, keep-network, kusama, kyber, lido-finance, liquity, litecoin, livepeer, looksrare, loopring, maiar, makerdao, maple-finance, mcdex, metamask, mstable, near-protocol, nexus-mutual, nftx, notional-finance, opensea, optimism, osmosis, pancakeswap, pangolin, perpetual-protocol, piedao, pocket-network, polkadot, polygon, polymarket, pooltogether, powerpool, quickswap, rarible, rari-capital, reflexer, ren, ribbon-finance, rocket-pool, saddle-finance, set-protocol, solana, solend, spookyswap, stake-dao, stellar, sushiswap, synthetix, terra, tezos, the-graph, thorchain, tokemak, tokenlon, tornado-cash, trader-joe, uma, uniswap, unit-protocol, venus, vesper-finance, volmex, wakaswap, yearn-finance, yield-guild-games, yield-yak, zcash, zora")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"2022 Aug 28, 19:08 (\ud83e\udd8b) /crypto/dd/ $ funot -m revenue -p solana\n")),(0,n.kt)("hr",null))}m.isMDXComponent=!0}}]);