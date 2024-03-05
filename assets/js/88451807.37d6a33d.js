"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49015],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),d=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,y=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return t?o.createElement(y,r(r({ref:n},p),{},{components:t})):o.createElement(y,r({ref:n},p))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=t[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88828:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(67294),a=t(35742);function i(e){let{title:n}=e;return o.createElement(a.Z,null,o.createElement("title",null,n))}},84897:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(87462),a=(t(67294),t(3905)),i=t(88828);const r={title:"Manage Extensions",sidebar_position:3,description:"This guide provides detailed instructions on how to manage extensions in the OpenBB Platform. It covers the installation of extensions hosted on PyPI and locally developed extensions, as well as adding an extension as a dependency.",keywords:["OpenBB extensions","Extension management","PyPI extensions","Local extensions","Extension dependencies"]},s=void 0,l={unversionedId:"platform/development/contributor-guidelines/manage_extensions",id:"platform/development/contributor-guidelines/manage_extensions",title:"Manage Extensions",description:"This guide provides detailed instructions on how to manage extensions in the OpenBB Platform. It covers the installation of extensions hosted on PyPI and locally developed extensions, as well as adding an extension as a dependency.",source:"@site/content/platform/development/contributor-guidelines/manage_extensions.md",sourceDirName:"platform/development/contributor-guidelines",slug:"/platform/development/contributor-guidelines/manage_extensions",permalink:"/platform/development/contributor-guidelines/manage_extensions",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/development/contributor-guidelines/manage_extensions.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1709640028,formattedLastUpdatedAt:"Mar 5, 2024",sidebarPosition:3,frontMatter:{title:"Manage Extensions",sidebar_position:3,description:"This guide provides detailed instructions on how to manage extensions in the OpenBB Platform. It covers the installation of extensions hosted on PyPI and locally developed extensions, as well as adding an extension as a dependency.",keywords:["OpenBB extensions","Extension management","PyPI extensions","Local extensions","Extension dependencies"]},sidebar:"tutorialSidebar",previous:{title:"Quality Assurance",permalink:"/platform/development/contributor-guidelines/quality_assurance"},next:{title:"Sharing Your Extension",permalink:"/platform/development/contributor-guidelines/sharing_extensions"}},d={},p=[{value:"Add an extension as a dependency",id:"add-an-extension-as-a-dependency",level:2}],c={toc:p},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{title:"Manage Extensions - Contributor Guidelines - Development | OpenBB Platform Docs",mdxType:"HeadTitle"}),(0,a.kt)("p",null,"To install an extension hosted on PyPI, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install <extension>")," command."),(0,a.kt)("p",null,"To install an extension that is developed locally, ensure that it contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," file and then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install <extension>")," command."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To install the extension in editable mode using pip, add the ",(0,a.kt)("inlineCode",{parentName:"p"},"-e")," argument.")),(0,a.kt)("p",null,"Alternatively, for local extensions, you can add this line in the ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL_DEPS")," variable in ",(0,a.kt)("inlineCode",{parentName:"p"},"dev_install.py")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'# If this is a community dependency, add this under "Community dependencies",\n# with additional argument optional = true\nopenbb-extension = { path = "<relative-path-to-the-extension>", develop = true }\n')),(0,a.kt)("p",null,"Now you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"python dev_install.py [-e]")," command to install the local extension."),(0,a.kt)("h2",{id:"add-an-extension-as-a-dependency"},"Add an extension as a dependency"),(0,a.kt)("p",null,"To add the ",(0,a.kt)("inlineCode",{parentName:"p"},"openbb-qa")," extension as a dependency, you'll need to add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pyproject.toml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[tool.poetry.dependencies]\nopenbb-qa = "^0.0.0a2"\n')),(0,a.kt)("p",null,"Then you can follow the same process as above to install the extension."))}m.isMDXComponent=!0}}]);