"use strict";(self.webpackChunkve_docs=self.webpackChunkve_docs||[]).push([[921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=p(n),f=a,d=k["".concat(s,".").concat(f)]||k[f]||m[f]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[k]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9077:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={title:"Craft stairs to blocks"},i=void 0,o={unversionedId:"modules/recipes/craft_stairs_to_blocks",id:"modules/recipes/craft_stairs_to_blocks",title:"Craft stairs to blocks",description:"Allows players to craft stairs to blocks.",source:"@site/docs/modules/recipes/craft_stairs_to_blocks.md",sourceDirName:"modules/recipes",slug:"/modules/recipes/craft_stairs_to_blocks",permalink:"/VE-Docs/docs/modules/recipes/craft_stairs_to_blocks",draft:!1,editUrl:"https://github.com/sehrschlechtYT/VE-Docs/tree/master/docs/modules/recipes/craft_stairs_to_blocks.md",tags:[],version:"current",frontMatter:{title:"Craft stairs to blocks"},sidebar:"tutorialSidebar",previous:{title:"Craft slabs to blocks",permalink:"/VE-Docs/docs/modules/recipes/craft_slabs_to_blocks"},next:{title:"Dye sand",permalink:"/VE-Docs/docs/modules/recipes/dye_sand"}},s={},p=[{value:"Recipe:",id:"recipe",level:2},{value:"Config options",id:"config-options",level:2}],c={toc:p};function k(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Allows players to craft stairs to blocks."),(0,a.kt)("h2",{id:"recipe"},"Recipe:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The Recipe",src:n(1802).Z,width:"243",height:"138"})),(0,a.kt)("h2",{id:"config-options"},"Config options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Option key"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default value"),(0,a.kt)("th",{parentName:"tr",align:null},"Possible values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"craft_stairs_to_blocks.enabled")),(0,a.kt)("td",{parentName:"tr",align:null},"Controls if the recipes will be registered"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true/false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"craft_stairs_to_blocks.excludedStairs")),(0,a.kt)("td",{parentName:"tr",align:null},"Exclude recipes for stairs from being registered"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"List")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"[]")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html"},"List of materials"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"craft_stairs_to_blocks.requiredStairsAmount")),(0,a.kt)("td",{parentName:"tr",align:null},"The required amount of stairs to craft the blocks"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Integer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"4")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"9"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"craft_stairs_to_blocks.blockAmount")),(0,a.kt)("td",{parentName:"tr",align:null},"The amount of blocks that players will receive"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Integer")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"3")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"1"),"-",(0,a.kt)("inlineCode",{parentName:"td"},"64"))))))}k.isMDXComponent=!0},1802:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);