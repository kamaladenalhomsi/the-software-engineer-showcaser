import{j as V,_ as E,s as dt,k as C,m as l,n as A,p as z,q as I,g as $,r as Oe,d as v,t as G,b as u,u as F,v as H,w as h,x as gt,o as g,y as T,z as ht,A as Ce,B as ne,C as re,D as ge,a as pt,l as B,E as Fe,F as Ee,G as mt,H as yt,c as _t,I as Ae,J as xe,K as bt,L as vt,M as Rt,N as oe,i as M,h as St,O as Pt}from"../chunks/chunk-9b1c70a0.js";function O(e){return typeof e!="object"||e===null?!1:Object.getPrototypeOf(e)===null?!0:e.constructor.name==="Object"}function he(e){return"["+e.map(t=>"'"+t+"'").join(", ")+"]"}function q(e,t){const n=Object.getOwnPropertyDescriptor(e,t);return!!n&&!("value"in n)&&!!n.get}function wt(e){return typeof e=="object"&&e!==null&&"then"in e&&V(e.then)}const Ot=["Page"],Ct=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ot},Symbol.toStringTag,{value:"Module"})),Ft=["Page","Layout","OutOfLayout","Footer","documentProps"],Et=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Ft},Symbol.toStringTag,{value:"Module"})),At=["Page"],xt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:At},Symbol.toStringTag,{value:"Module"})),Tt=["onBeforeRender","passToClient"],kt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Tt},Symbol.toStringTag,{value:"Module"})),It=["render","passToClient"],$t=Object.freeze(Object.defineProperty({__proto__:null,exportNames:It},Symbol.toStringTag,{value:"Module"})),Nt=["render"],jt=Object.freeze(Object.defineProperty({__proto__:null,exportNames:Nt},Symbol.toStringTag,{value:"Module"})),ie={},Te={},Ht={},K={},Lt=[],ke={},Bt=!0,Wt=[],Dt={onBeforeRoute:null},Ut=Object.assign({"/pages/index/index.page.tsx":()=>E(()=>import("./pages_index_index.page.248bd857.js"),["assets/entries/pages_index_index.page.248bd857.js","assets/chunks/chunk-0cbd44a4.js"]),"/pages/resume/index.page.tsx":()=>E(()=>import("./pages_resume_index.page.a714afb9.js"),["assets/entries/pages_resume_index.page.a714afb9.js","assets/chunks/chunk-0cbd44a4.js"]),"/renderer/_error.page.tsx":()=>E(()=>import("./renderer_error.page.262aa31a.js"),["assets/entries/renderer_error.page.262aa31a.js","assets/chunks/chunk-0cbd44a4.js"])}),Vt={...Ut};ie[".page"]=Vt;const zt=Object.assign({"/pages/index/index.page.tsx":Ct,"/pages/resume/index.page.tsx":Et,"/renderer/_error.page.tsx":xt}),Gt={...zt};K[".page"]=Gt;const Kt=Object.assign({"/pages/resume/index.page.server.tsx":kt,"/renderer/_default.page.server.tsx":$t}),Yt={...Kt};K[".page.server"]=Yt;const Mt=Object.assign({}),qt={...Mt};Te[".page.route"]=qt;const Jt=Object.assign({"/renderer/_default.page.client.tsx":()=>E(()=>import("./renderer_default.page.client.46786d00.js"),["assets/entries/renderer_default.page.client.46786d00.js","assets/chunks/chunk-0cbd44a4.js","assets/entries/renderer_default.page.server.extractAssets.776f6f99.js","assets/static/default.page.server.a8726935.css"])}),Xt={...Jt};ie[".page.client"]=Xt;const Qt=Object.assign({"/renderer/_default.page.client.tsx":jt}),Zt={...Qt};K[".page.client"]=Zt;const en=Object.assign({"/pages/resume/index.page.server.tsx":()=>E(()=>import("./pages_resume_index.page.server.extractAssets.4ed993c7.js"),[]),"/renderer/_default.page.server.tsx":()=>E(()=>import("./renderer_default.page.server.extractAssets.776f6f99.js"),["assets/entries/renderer_default.page.server.extractAssets.776f6f99.js","assets/static/default.page.server.a8726935.css"])}),tn={...en};ke[".page.server"]=tn;const nn=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:Bt,neverLoaded:ke,pageConfigGlobal:Dt,pageConfigs:Wt,pageFilesEager:Te,pageFilesExportNamesEager:K,pageFilesExportNamesLazy:Ht,pageFilesLazy:ie,pageFilesList:Lt},Symbol.toStringTag,{value:"Module"}));dt(nn);function rn(){var e,t,n,r;const o=!!(!((t=(e=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||e===void 0?void 0:e.renderers)===null||t===void 0)&&t.size),i=!!(!((r=(n=window.__REACT_DEVTOOLS_GLOBAL_HOOK__)===null||n===void 0?void 0:n.rendererInterfaces)===null||r===void 0)&&r.size),s=!!window.__vite_plugin_react_preamble_installed__;return o||i||s}function Ie(e,t){const n=Object.keys,r=typeof e;return e&&t&&r==="object"&&r===typeof t?n(e).length===n(t).length&&n(e).every(i=>Ie(e[i],t[i])):e===t}function on(e,t){return C(e)&&C(t)&&e.constructor===t.constructor&&Ie({...e,stack:null},{...t,stack:null})&&t.message===t.message}function W(e){window.location.href=e}function sn(e){return new Promise(t=>setTimeout(t,e))}function an(e,t){let n=!1;return()=>{n||(n=!0,setTimeout(()=>{n=!1,e()},t))}}l(z());A();const pe=I("navigationState.ts",{}),ln=$(),$e={markNavigationChange(){pe.navigationChanged=!0},get noNavigationChangeYet(){return!pe.navigationChanged&&this.isFirstUrl($())},isFirstUrl(e){return e===ln}};async function un(e,t){const r=Oe(e,t).filter(i=>i.fileType===".page.server");return await Promise.all(r.map(async i=>{i.exportNames||(l(i.loadExportNames,t),await i.loadExportNames())})),{hasOnBeforeRenderServerSideOnlyHook:r.some(({exportNames:i})=>(l(i),i.includes("onBeforeRender")))}}function cn(e,t){if(!O(e))return!1;for(const n of Object.keys(e))if(!t.includes(n))return!1;return!0}function fn(e){return typeof e=="object"&&e!==null&&Object.values(e).every(t=>typeof t=="string")}z()&&A();function Ne(e,t=!0){l(e.urlOriginal),"urlPathname"in e&&l(q(e,"urlPathname")),Object.defineProperty(e,"urlPathname",{get:He,enumerable:t,configurable:!0}),"url"in e&&l(q(e,"url")),Object.defineProperty(e,"url",{get:dn,enumerable:!1,configurable:!0}),"urlParsed"in e&&l(q(e,"urlParsed")),Object.defineProperty(e,"urlParsed",{get:gn,enumerable:t,configurable:!0})}function je(e){var t;let n=e._urlHandler;n||(n=s=>s);const r=(t=e._urlRewrite)!==null&&t!==void 0?t:e.urlOriginal;l(r&&typeof r=="string");const o=n(r),i=e._baseServer;return l(i.startsWith("/")),G(o,i)}function He(){const{pathname:e}=je(this),t=e;return l(t.startsWith("/")),t}function dn(){return v(!1,"`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)",{onlyOnce:!0,showStackTrace:!0}),He.call(this)}function gn(){const e=je(this),{origin:t,pathname:n,pathnameOriginal:r,search:o,searchAll:i,searchOriginal:s,hash:a,hashOriginal:c}=e,f=p=>{v(z(),`pageContext.urlParsed.${p} isn't available on the server-side (HTTP requests don't include the URL hash by design)`,{onlyOnce:!0,showStackTrace:!0})},d={origin:t,pathname:n,pathnameOriginal:r,search:o,searchAll:i,searchOriginal:s,get hash(){return f("hash"),a},get hashOriginal(){return f("hashOriginal"),c},get hashString(){return v(!1,"pageContext.urlParsed.hashString has been renamed to pageContext.urlParsed.hashOriginal",{onlyOnce:!0,showStackTrace:!0}),f("hashString"),c},get searchString(){return v(!1,"pageContext.urlParsed.searchString has been renamed to pageContext.urlParsed.searchOriginal",{onlyOnce:!0,showStackTrace:!0}),s}};return me(d,"hashString"),me(d,"searchString"),d}function me(e,t){const n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(e,t,{...n,enumerable:!1})}function hn(e){l(typeof e.urlOriginal=="string"),l(typeof e.urlPathname=="string"),l(O(e.urlParsed)),l(e.urlPathname===e.urlParsed.pathname)}const Le="@",Z=":";function pn(e,t){u(e.startsWith("/")||e==="*",(()=>{t?t=t+" invalid":t="Invalid";const n=[`'${e}'`,e!==""?null:"(empty string)"].filter(Boolean).join(" ");return`${t} Route String ${n}: Route Strings should start with a leading slash '/' (or be '*')`})())}function ee(e,t){pn(e),l(t.startsWith("/"));const n=e.split("/"),r=t.split("/"),o={};mn(e),e==="*"&&(e="/*");for(let i=0;i<Math.max(n.length,r.length);i++){const s=n[i],a=r[i];if(s==="*")return o["*"]=r.slice(Math.max(1,i)).join("/"),{routeParams:o};if(s&&L(s)){if(v(!s.startsWith(Z),`Outdated Route String \`${e}\`, use \`${e.split(Z).join(Le)}\` instead.`,{onlyOnce:!0}),!a)return null;o[s.slice(1)]=a}else if((s||"")!==(a||""))return null}return{routeParams:o}}function mn(e){const t=e.split("*").length-1;u(t<=1,`Invalid Route String '${e}': Route Strings are not allowed to contain more than one glob character '*'`),u(t===0||t===1&&e.endsWith("*"),`Invalid Route String '${e}': make sure your Route String ends with the glob character '*'`)}function x(e){const t=e.split("/").filter(s=>s!==""&&s!=="*");let n=0;for(const s of t){if(L(s))break;n++}const r=t.filter(s=>!L(s)).length,o=t.filter(s=>L(s)).length,i=e.endsWith("*");return{numberOfParameterSegments:o,numberOfStaticSegmentsBeginning:n,numberOfStaticSegements:r,isCatchAll:i}}function L(e){return e.startsWith(Le)||e.startsWith(Z)}function ye(e){const n=ee(e,e);return l(n),Object.keys(n.routeParams).length===0}function yn(e){e.sort(_n).sort(F(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence<0)).sort(F(t=>t.routeType==="STRING"&&ye(t.routeString)===!1)).sort(F(t=>t.routeType==="FUNCTION"&&!t.precedence)).sort(F(t=>t.routeType==="STRING"&&ye(t.routeString)===!0)).sort(F(t=>t.routeType==="FILESYSTEM")).sort(F(t=>t.routeType==="FUNCTION"&&!!t.precedence&&t.precedence>0))}function _n(e,t){var n,r;{const o=(n=e.precedence)!==null&&n!==void 0?n:0,i=(r=t.precedence)!==null&&r!==void 0?r:0;if(o!==i)return o>i?-1:1}if(!t.routeString||!e.routeString)return 0;{const i=H(s=>x(s).numberOfStaticSegmentsBeginning)(e.routeString,t.routeString);if(i!==0)return i}{const i=H(s=>x(s).numberOfStaticSegements)(e.routeString,t.routeString);if(i!==0)return i}{const i=H(s=>x(s).numberOfParameterSegments)(e.routeString,t.routeString);if(i!==0)return i}{if(x(t.routeString).isCatchAll)return-1;if(x(e.routeString).isCatchAll)return 1}return 0}async function bn(e,t,n){hn(t);let r=e(t);if(Be(r,`The Route Function ${n}`),r=await r,r===!1)return null;if(r===!0&&(r={}),u(O(r),`The Route Function ${n} should return a boolean or a plain JavaScript object, instead it returns \`${h(r,"constructor")?r.constructor:r}\`.`),"match"in r){const{match:s}=r;if(u(typeof s=="boolean",`The \`match\` value returned by the Route Function ${n} should be a boolean.`),!s)return null}let o=null;"precedence"in r&&(o=r.precedence,u(typeof o=="number",`The \`precedence\` value returned by the Route Function ${n} should be a number.`)),We(r,`The \`routeParams\` object returned by the Route Function ${n} should`);const i=r.routeParams||{};return u(!("pageContext"in r),"Providing `pageContext` in Route Functions is prohibited, see https://vite-plugin-ssr.com/route-function#cannot-provide-pagecontext"),l(O(i)),Object.keys(r).forEach(s=>{u(s==="match"||s==="routeParams"||s==="precedence",`The Route Function ${n} returned an object with an unknown key \`{ ${s} }\`. Allowed keys: ['match', 'routeParams', 'precedence'].`)}),{precedence:o,routeParams:i}}function Be(e,t){v(!wt(e),`${t} returned a promise, but asynchronous routing is deprecated and will be removed in the next major release, see https://vite-plugin-ssr.com/route-function#async`,{onlyOnce:!0})}function We(e,t){l(t.endsWith(" should")),h(e,"routeParams")&&(l(t.endsWith(" should")),u(O(e.routeParams),`${t} be a plain JavaScript object.`),u(fn(e.routeParams),`${t} only hold string values.`))}function De(e,{hookName:t,hookFilePath:n}){if(e==null)return;l(!t.endsWith(")"));const r=`The \`pageContext\` object provided by the ${t}() hook defined by ${n}`;u(C(e),`${r} should be an object instead of \`${typeof e}\``),u(!("_objectCreatedByVitePluginSsr"in e),`${r} shouldn't be the whole \`pageContext\` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext`),v(!("_pageId"in e),`${r} sets \`pageContext._pageId\` which means that vite-plugin-ssr's routing is overriden. This is an experimental feature: make sure to contact a vite-plugin-ssr maintainer before using this.`,{onlyOnce:!0}),u(!("is404"in e),`${r} sets \`pageContext.is404\` which is forbidden, use \`throw render()\` instead, see https://vite-plugin-ssr.com/render`)}async function vn(e,t){let n=e.onBeforeRoute(t);Be(n,`The onBeforeRoute() hook ${e.hookFilePath}`),n=await n;const r=`The onBeforeRoute() hook defined by ${e.hookFilePath}`;if(u(n==null||cn(n,["pageContext"])&&h(n,"pageContext"),`${r} should return \`null\`, \`undefined\`, or a plain JavaScript object \`{ pageContext: { /* ... */ } }\`.`),n==null)return null;if(u(h(n,"pageContext","object"),`${r} returned \`{ pageContext }\` but pageContext should be a plain JavaScript object.`),h(n.pageContext,"_pageId")&&!h(n.pageContext,"_pageId","null")){const i=`${r} returned \`{ pageContext: { _pageId } }\` but _pageId should be`;u(h(n.pageContext,"_pageId","string"),`${i} a string or null`),u(t._allPageIds.includes(n.pageContext._pageId),`${i} one of following values: \`[${t._allPageIds.map(s=>`'${s}'`).join(", ")}]\`.`)}h(n.pageContext,"routeParams")&&We(n.pageContext,`${r} returned \`{ pageContext: { routeParams } }\` but routeParams should`);const o={};return h(n.pageContext,"url")&&(v(!1,`${r} returned \`{ pageContext: { url } }\` but \`pageContext.url\` has been renamed to \`pageContext.urlOriginal\`. Return \`{ pageContext: { urlOriginal } }\` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)`,{onlyOnce:!0}),n.pageContext.urlOriginal=n.pageContext.url,delete n.pageContext.url),h(n.pageContext,"urlOriginal")&&(gt(n.pageContext.urlOriginal,`${r} returned \`{ pageContext: { urlOriginal } }\` but urlOriginal`),g(o,{_urlOriginalPristine:t.urlOriginal})),De(n.pageContext,{hookFilePath:e.hookFilePath,hookName:"onBeforeRoute"}),g(o,n.pageContext),o}var j;function _e(...e){var t,n;j||(j=(n=(t=globalThis).__brillout_debug_createDebugger)===null||n===void 0?void 0:n.call(t,"vps:routing")),j&&j(...e)}z()&&A();async function Ue(e){Ne(e),_e("Pages routes:",e._pageRoutes);const t={};if(e._onBeforeRouteHook){const s=await vn(e._onBeforeRouteHook,e);if(s){if(g(t,s),h(t,"_pageId","string")||h(t,"_pageId","null"))return h(t,"routeParams")?l(h(t,"routeParams","object")):g(t,{routeParams:{}}),g(t,{_routingProvidedByOnBeforeRouteHook:!0,_routeMatches:"CUSTOM_ROUTE"}),{pageContextAddendum:t};g(e,t)}}g(t,{_routingProvidedByOnBeforeRouteHook:!1});const n=e._allPageIds;l(n.length>=0),u(e._pageFilesAll.length>0||e._pageConfigs.length>0,"No *.page.js file found. You must create at least one *.page.js file."),u(n.length>0,"You must create at least one *.page.js file that isn't _default.page.*");const{urlPathname:r}=e;l(r.startsWith("/"));const o=[];await Promise.all(e._pageRoutes.map(async s=>{const{pageId:a,routeType:c}=s;if(s.routeType==="FILESYSTEM"){const{routeString:f}=s,d=ee(f,r);if(d){const{routeParams:p}=d;o.push({pageId:a,routeParams:p,routeString:f,routeType:c})}return}if(s.routeType==="STRING"){const{routeString:f}=s,d=ee(f,r);if(d){const{routeParams:p}=d;l(c==="STRING"),o.push({pageId:a,routeString:f,routeParams:p,routeType:c})}return}if(s.routeType==="FUNCTION"){const{routeFunction:f,routeDefinedAt:d}=s,p=await bn(f,e,d);if(p){const{routeParams:R,precedence:P}=p;o.push({pageId:a,precedence:P,routeParams:R,routeType:c})}return}l(!1)})),yn(o);const i=o[0];if(_e(`Route matches for URL \`${r}\` (in precedence order):`,o),g(t,{_routeMatches:o}),!i)return g(t,{_pageId:null,routeParams:{}}),{pageContextAddendum:t};{const{routeParams:s}=i;l(O(s)),g(t,{_pageId:i.pageId,routeParams:i.routeParams})}return{pageContextAddendum:t}}const be=["urlPathname","urlParsed"],Rn=["Page","pageExports","exports"];function Ve(e){[...Rn,...be].forEach(n=>{n in e&&(be.includes(n)?(l(n.startsWith("url")),v(!1,`\`pageContext.${n}\` is already available in the browser when using Client Routing; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0})):v(!1,`\`pageContext.${n}\` is a built-in that cannot be overriden; including \`${n}\` in \`passToClient\` has no effect.`,{onlyOnce:!0}),delete e[n])})}const Sn="/";function Pn(e,t,n){const{pathnameOriginal:r,searchOriginal:o,hashOriginal:i}=G(e,Sn);e.startsWith("/")&&l(e===`${r}${o||""}${i||""}`,{url:e});const s=r.endsWith("/");let a;return n&&r!=="/"?(s?a=T(r,0,-1):a=r,l(!a.endsWith("/"),{url:e}),l(a!=="")):a=r+(s?"":"/")+"index",l(a),a=a+t,`${a}${o||""}${i||""}`}const wn=".pageContext.json",On=!1;function Cn(e){return Pn(e,wn,On)}function D(e,t,n){const r=e.configElements[t];if(!r||Fn(e,t))return null;const{configValue:o,configDefinedAt:i}=r;return n&&u(typeof o===n,`${i} has an invalid type \`${typeof o}\`: is should be a ${n} instead`),o}function Fn(e,t){const n=e.configElements[t];if(!n)return!0;const{codeFilePath:r,configValue:o}=n;return r?!1:o==null}function ze(e,t){const n=t.find(r=>r.pageId===e);return l(t.length>0),l(n),n}function En(e,t,n){l(!n.endsWith(" "));const r=[],o=Object.keys(e);for(const i of o)t.includes(i)||r.push(i);u(r.length===0,[n,"returned an object with following unknown keys:",he(r)+".","Only following keys are allowed:",he(t)+"."].join(" "))}function An(e,t){if(e==null)return;const n=`The onBeforeRender() hook defined by ${t}`;u(O(e),`${n} should return a plain JavaScript object or \`undefined\`/\`null\``),En(e,["pageContext"],n),e.pageContext&&De(e.pageContext,{hookName:"onBeforeRender",hookFilePath:t})}function xn(e,t){const r=t.filter(({filesystemRoot:i})=>e.startsWith(i)).sort(H(({filesystemRoot:i})=>i.length))[0];let o;if(r){const{filesystemRoot:i,urlRoot:s}=r,a={pageId:e,filesystemRoot:i,urlRoot:s};l(s.startsWith("/")&&e.startsWith("/")&&i.startsWith("/"),a),l(e.startsWith(i),a),i!=="/"?(l(!i.endsWith("/"),a),o=T(e,i.length,0)):o=e,l(o.startsWith("/"),a),o=s+(s.endsWith("/")?"":"/")+T(o,1,0)}else o=e;return l(o.startsWith("/")),o=o.split("/").filter(i=>i!=="pages"&&i!=="src"&&i!=="index").join("/"),l(!o.includes(".page.")),l(!o.endsWith(".")),o.endsWith("/index")&&(o=T(o,0,-6)),o===""&&(o="/"),l(o.startsWith("/")),l(!o.endsWith("/")||o==="/"),o}async function Tn(e,t,n,r){await Promise.all(e.filter(a=>a.fileType===".page.route").map(a=>{var c;return(c=a.loadFile)===null||c===void 0?void 0:c.call(a)}));const{onBeforeRouteHook:o,filesystemRoots:i}=In(e,t,n);return{pageRoutes:kn(i,e,t,r),onBeforeRouteHook:o}}function kn(e,t,n,r){const o=[];let i=[...r];if(n.length>0){l(e===null);const s=!0;n.filter(a=>!a.isErrorPage).forEach(a=>{const c=a.pageId;i=jn(i,c);let f=null;{const d=a.configElements.route;if(d){l("configValue"in d);const p=d.configValue,R=d.configDefinedAt;if(l(R),typeof p=="string")f={pageId:c,comesFromV1PageConfig:s,routeString:p,routeDefinedAt:R,routeType:"STRING"};else{l(V(p));{const P=a.configElements.iKnowThePerformanceRisksOfAsyncRouteFunctions;if(P){const w=P.configValue;l(typeof w=="boolean",`${P.configDefinedAt} should be a boolean`)}}f={pageId:c,comesFromV1PageConfig:s,routeFunction:p,routeDefinedAt:R,routeType:"FUNCTION"}}}}if(!f){const{routeFilesystem:d,routeFilesystemDefinedBy:p}=a;l(d),l(d.startsWith("/")),l(p),f={pageId:c,routeFilesystemDefinedBy:p,comesFromV1PageConfig:s,routeString:d,routeDefinedAt:null,routeType:"FILESYSTEM"}}l(f),o.push(f)})}if(n.length===0){l(e);const s=!1;i.filter(a=>!ht(a)).forEach(a=>{const c=Ge(a,t);if(!c||!("default"in c.fileExports)){const f=xn(a,e);l(f.startsWith("/")),l(!f.endsWith("/")||f==="/"),o.push({pageId:a,comesFromV1PageConfig:s,routeString:f,routeDefinedAt:null,routeFilesystemDefinedBy:`${a}.page.*`,routeType:"FILESYSTEM"})}else{const{filePath:f,fileExports:d}=c;if(l(d.default),h(d,"default","string")){const p=d.default;u(p.startsWith("/"),`A Route String should start with a leading slash '/' but ${f} has \`export default '${p}'\`. Make sure to \`export default '/${p}'\` instead.`),o.push({pageId:a,comesFromV1PageConfig:s,routeString:p,routeDefinedAt:f,routeType:"STRING"});return}if(h(d,"default","function")){const p=d.default;{const R="iKnowThePerformanceRisksOfAsyncRouteFunctions";R in d&&u(h(d,R,"boolean"),`The export \`${R}\` of ${f} should be a boolean.`)}o.push({pageId:a,comesFromV1PageConfig:s,routeFunction:p,routeDefinedAt:f,routeType:"FUNCTION"});return}u(!1,`The default export of ${f} should be a string or a function.`)}})}return o}function In(e,t,n){if(t.length>0){if(n.onBeforeRoute){const i=n.onBeforeRoute.configValue;if(i){const s=n.onBeforeRoute.codeFilePath;return l(s),u(V(i),`The hook onBeforeRoute() defined by ${s} should be a function.`),{onBeforeRouteHook:{hookFilePath:s,onBeforeRoute:i},filesystemRoots:null}}}return{onBeforeRouteHook:null,filesystemRoots:null}}let r=null;const o=[];return e.filter(i=>i.fileType===".page.route"&&i.isDefaultPageFile).forEach(({filePath:i,fileExports:s})=>{if(l(s),"onBeforeRoute"in s){u(h(s,"onBeforeRoute","function"),`\`export { onBeforeRoute }\` of ${i} should be a function.`);const{onBeforeRoute:a}=s;r={hookFilePath:`${i} > \`export { onBeforeRoute }\``,onBeforeRoute:a}}"filesystemRoutingRoot"in s&&(u(h(s,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${i} should be a string.`),u(h(s,"filesystemRoutingRoot","string"),`\`export { filesystemRoutingRoot }\` of ${i} is \`'${s.filesystemRoutingRoot}'\` but it should start with a leading slash \`/\`.`),o.push({filesystemRoot:Nn(i),urlRoot:s.filesystemRoutingRoot}))}),{onBeforeRouteHook:r,filesystemRoots:o}}function Ge(e,t){return t.find(n=>n.pageId===e&&n.fileType===".page.route")}function $n(e,t){const n=Ge(e,t);if(!n)return null;const{filePath:r,fileExports:o}=n;l(o);const i=o.guard;if(!i)return null;const s=r;return u(V(i),`guard() defined by ${s} should be a function`),{hookFn:i,hookFilePath:s}}function Nn(e){l(e.startsWith("/")),l(!e.endsWith("/"));const t=e.split("/"),n=T(t,0,-1).join("/")||"/";return l(n.startsWith("/")),l(!n.endsWith("/")||n==="/"),n}function jn(e,t){const{length:n}=e;return e=e.filter(r=>r!==t),l(e.length===n-1),e}async function Hn(e,t){let n;if(e._pageFilesAll.length>0?(l(e._pageConfigs.length===0),n=$n(e._pageId,e._pageFilesAll)):n=Ce(e,"guard"),!n)return;const r=n.hookFn;let o=e;const i=t(e);i&&(o=i);const s=await ne(()=>r(o),"guard",n.hookFilePath);u(s===void 0,`The guard() hook of ${n.hookFilePath} returns a value, but guard() doesn't accept any return value`)}function Ln(e){const t=new Error("AbortRender");return g(t,{_pageContextAbort:e,[Ke]:!0}),t}const Ke="_isAbortError";function J(e){return typeof e=="object"&&e!==null&&Ke in e}function Bn(e){return e._urlRewrite||e._urlRedirect||e._abortStatusCode?(l(h(e,"_abortCall","string")),l(h(e,"_abortCaller","string")),!0):!1}function Wn(e,t,n){var r;if(t)return;const o=(r=n._urlRewrite)!==null&&r!==void 0?r:n.urlOriginal;l(o);const i=e._pageContextAbort._abortCall;re(!1,`${ge.cyan(i)} intercepted while rendering URL ${ge.bold(o)}`,{onlyOnce:!1})}function Dn(e){Un(e);const t={_urlRewrite:null};return e.forEach(n=>{Object.assign(t,n)}),t}function Un(e){const t=[];e.forEach(n=>{const r=n._urlRewrite;{const o=t.indexOf(r);if(o!==-1){const i=[...t.slice(o),r].map(s=>`render('${s}')`).join(" => ");u(!1,`Infinite loop of render() calls: ${i}`)}}t.push(r)})}const Ye=I("router/getPageContext.ts",{});async function Vn(e){if(e._isFirstRenderAttempt&&$e.isFirstUrl(e.urlOriginal)){l(h(e,"_isFirstRenderAttempt","true"));const t=await zn(e);return ve(t),t}else{l(h(e,"_isFirstRenderAttempt","false"));const t=await Kn(e);return ve(t),t}}async function zn(e){const t=pt();Ve(t),g(t,{isHydration:!0,_hasPageContextFromClient:!1}),g(t,await B(e._pageFilesAll,e._pageConfigs,t._pageId));{const n={...e,...t};if(await qn(n)){const r=await qe(n);g(t,r)}}return t}async function Gn(e){const t=Fe(e._pageFilesAll,e._pageConfigs);if(!t)throw new Error("No error page defined.");const n={isHydration:!1,_pageId:t};return g(n,await Me({...e,...n},!0)),n}async function Kn(e){const t={isHydration:!1};return g(t,await Jn(e)),g(t,await Me({...e,...t},!1)),t}async function Me(e,t){let n={};if(g(n,await B(e._pageFilesAll,e._pageConfigs,e._pageId)),!t&&await Yn({...e,...n})){const r=await Zn(e);if(!r._isError)g(n,r);else{const o=Fe(e._pageFilesAll,e._pageConfigs);l(o),n={},g(n,{isHydration:!1,_pageId:o}),g(n,await B(e._pageFilesAll,e._pageConfigs,n._pageId)),l(h(r,"is404","boolean")),l(h(r,"pageProps","object")),l(h(r.pageProps,"is404","boolean")),l(!("serverSideError"in r)),g(n,r)}}else g(n,{_hasPageContextFromServer:!1}),t||await Hn({_hasPageContextFromClient:!1,...e,...n},r=>Ee(r,!0));{const r=await qe({...e,...n});g(n,r)}return n}async function qe(e){const t=Ce(e,"onBeforeRender");if(!t)return{_hasPageContextFromClient:!1};const n=t.hookFn,r={_hasPageContextFromClient:!0},o=Ee({...e,...r},!0),i=await ne(()=>n(o),"onBeforeRender",t.hookFilePath);An(i,t.hookFilePath);const s=i==null?void 0:i.pageContext;return g(r,s),r}async function Yn(e){return!!Ye.pageContextInitHasClientData||await Mn(e)}function ve(e){e._pageContextInitHasClientData&&(Ye.pageContextInitHasClientData=!0)}async function Mn(e){if(e._pageConfigs.length>0){const t=ze(e._pageId,e._pageConfigs);return D(t,"onBeforeRenderEnv")==="server-only"}else{const{hasOnBeforeRenderServerSideOnlyHook:t}=await un(e._pageFilesAll,e._pageId);return t}}async function qn(e){if(e._pageConfigs.length>0){const t=ze(e._pageId,e._pageConfigs);return D(t,"onBeforeRenderEnv")==="client-only"}else return!1}async function Jn(e){const n=(await Ue(e)).pageContextAddendum;if(!n._pageId){const r=new Error("No routing match");throw Xn(r),r}return l(h(n,"_pageId","string")),n}function Xn(e){g(e,{_is404:!0})}function Qn(e){return C(e)&&e._is404===!0}async function Zn(e){var t,n;const r=(n=(t=e._urlRewrite)!==null&&t!==void 0?t:e._urlOriginalPristine)!==null&&n!==void 0?n:e.urlOriginal,o=Cn(r),i=await fetch(o);{const c=i.headers.get("content-type"),f="application/json",d=c&&c.includes(f);if(!d&&i.status===404)throw W(e.urlOriginal),tr();u(d,`Wrong Content-Type for ${o}: it should be ${f} but it's ${c} instead. Make sure to properly use pageContext.httpResponse.headers, see https://vite-plugin-ssr.com/renderPage`)}const s=await i.text(),a=mt(s);if(l(C(a)),"serverSideError"in a)throw yt("`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.");if(Bn(a))throw Ln(a);return l(h(a,"_pageId","string")),Ve(a),g(a,{_hasPageContextFromServer:!0}),a}function er(e){return C(e)&&!!e._alreadyServerSideRouted}function tr(){const e=new Error("Page doesn't exist");return Object.assign(e,{_alreadyServerSideRouted:!0}),e}function Je(){const e="/";return l(nr(e)),e}function nr(e){return e.startsWith("/")}const X=I("createPageContext.ts",{});async function Xe(e){X.pageFilesData||(X.pageFilesData=await _t(!0));const{pageFilesAll:t,allPageIds:n,pageConfigs:r,pageConfigGlobal:o}=X.pageFilesData,{pageRoutes:i,onBeforeRouteHook:s}=await Tn(t,r,o,n),a=Je();l(Ae(a));const c={_objectCreatedByVitePluginSsr:!0,_urlHandler:null,_urlRewrite:null,_baseServer:a,_isProduction:!0,_pageFilesAll:t,_pageConfigs:r,_pageConfigGlobal:o,_allPageIds:n,_pageRoutes:i,_onBeforeRouteHook:s};return g(c,e),Ne(c),c}async function Qe(e){const t=await Xe({urlOriginal:e}),n=await Ue(t),r=t._pageFilesAll,o=t._pageConfigs;if(!("pageContextAddendum"in n))return{pageId:null,pageFilesAll:r,pageConfigs:o};const i=n.pageContextAddendum._pageId;return i?{pageId:i,pageFilesAll:r,pageConfigs:o}:{pageId:null,pageFilesAll:r,pageConfigs:o}}function k(e){return e.fileType===".css"?[]:e.exportNames?e.exportNames:(l(e.fileExports,e.filePath),Object.keys(e.fileExports))}function rr({pageFilesClientSide:e,pageFilesServerSide:t,pageId:n}){return{isHtmlOnly:r(),isClientRouting:i()};function r(){return t.some(a=>a.pageId===n&&a.fileType===".page")?(o(),!1):!(!t.some(a=>a.pageId===n&&a.fileType===".page.server")||e.some(a=>a.pageId===n&&a.fileType===".page.client"&&k(a).includes("render")))}function o(){const s=e.some(a=>k(a).includes("render"));u(s,["No client-side `render()` hook found.","See https://vite-plugin-ssr.com/render-modes for more information.",["Loaded client-side page files (none of them `export { render }`):",...e.map((a,c)=>` (${c+1}): ${a.filePath}`)].join(`
`)].join(" "))}function i(){return e.some(a=>k(a).includes("clientRouting"))}}function or({pageFilesClientSide:e,pageFilesServerSide:t,isHtmlOnly:n,isClientRouting:r}){let o=[];const i=t.filter(a=>!e.includes(a)),s=[];if(s.push(...e.map(a=>({id:a.filePath,onlyAssets:!1,eagerlyImported:!1}))),s.push(...i.map(a=>({id:a.filePath,onlyAssets:!0,eagerlyImported:!1}))),n)o=e.map(a=>a.filePath);else{const a=ir(r);s.push({id:a,onlyAssets:!1,eagerlyImported:!1}),o=[a]}return{clientEntries:o,clientDependencies:s}}function ir(e){return e?"@@vite-plugin-ssr/dist/esm/client/router/entry.js":"@@vite-plugin-ssr/dist/esm/client/entry.js"}function sr(e,t){let n=xe(e,t);const r=Oe(e,t),{isHtmlOnly:o,isClientRouting:i}=rr({pageFilesClientSide:n,pageFilesServerSide:r,pageId:t});o&&(n=n.filter(c=>c.isEnv("CLIENT_ONLY")&&!k(c).includes("render")),n=lr(n));const{clientEntries:s,clientDependencies:a}=or({pageFilesClientSide:n,pageFilesServerSide:r,isHtmlOnly:o,isClientRouting:i});return{isHtmlOnly:o,isClientRouting:i,clientEntries:s,clientDependencies:a,pageFilesClientSide:n,pageFilesServerSide:r}}async function ar(e,t,{sharedPageFilesAlreadyLoaded:n}){const r=xe(e,t);await Promise.all(r.map(async o=>{var i;l(o.isEnv("CLIENT_ONLY")||o.isEnv("CLIENT_AND_SERVER")),!(n&&o.isEnv("CLIENT_AND_SERVER"))&&await((i=o.loadExportNames)===null||i===void 0?void 0:i.call(o))}))}function lr(e){const t=[];for(const n of e)if(t.push(n),k(n).includes("overrideDefaultPages"))break;return t}function ur(e,t,n){var r,o;if(e){const i=(r=D(e,"clientRouting","boolean"))!==null&&r!==void 0?r:!1;return{isClientSideRenderable:(o=D(e,"isClientSideRenderable","boolean"))!==null&&o!==void 0?o:!1,isClientRouting:i}}else{const{isHtmlOnly:i,isClientRouting:s}=sr(t,n);return{isClientSideRenderable:!i,isClientRouting:s}}}async function Ze(e){const{pageId:t,pageFilesAll:n,pageConfigs:r}=await Qe(e);if(!t)return!1;await ar(n,t,{sharedPageFilesAlreadyLoaded:!1});const o=bt(r,t),{isClientSideRenderable:i,isClientRouting:s}=ur(o,n,t);return i&&s}function et(e){return!e.startsWith("/")&&!e.startsWith(".")&&!e.startsWith("?")&&e!==""}function tt(e){const t=e.getAttribute("href");return!!(t===null||t===""||et(t)||fr(e)||dr(t)||!gr(t)||!vt(t)||!cr(e))}function cr(e){if(kr()){const n=e.getAttribute("data-vike-link");return n!==null&&n!=="false"}else return!0}function fr(e){const t=e.getAttribute("target"),n=e.getAttribute("rel");return t==="_blank"||t==="_external"||n==="external"||e.hasAttribute("download")}function dr(e){if(e.startsWith("#"))return!0;const t=n=>n.split("#")[0];return!!(e.includes("#")&&t(e)===t(window.location.href))}function gr(e){const t=Je();l(Ae(t));const{hasBaseServer:n}=G(e,t);return n}function hr(e,t){let n=pr(e,t);return n==="viewport"&&!e._isProduction&&(re(!1,"Viewport prefetching is disabled in development",{onlyOnce:!0}),n="hover"),{prefetchStaticAssets:n}}function pr(e,t){{const n=mr(t);if(n!==null)return n}if("prefetchLinks"in e.exports&&u(!1,"`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead."),"prefetchStaticAssets"in e.exports){const{prefetchStaticAssets:n}=e.exports;if(n===!1)return!1;if(n==="hover")return"hover";if(n==="viewport")return"viewport";const r="prefetchStaticAssets value should be false, 'hover', or 'viewport'";u(O(n),r);const o=Object.keys(n);u(o.length===1&&o[0]==="when",r);const{when:i}=n;if(i==="HOVER"||i==="VIEWPORT"){const s=i.toLowerCase();return v(!1,`prefetchStaticAssets value \`{ when: '${i}' }\` is outdated: set prefetchStaticAssets to '${s}' instead`,{onlyOnce:!0}),s}u(!1,r)}return"hover"}function mr(e){const t=e.getAttribute("data-prefetch-static-assets"),n=e.getAttribute("data-prefetch");if(t===null&&n===null)return null;const r="The attribute data-prefetch is outdated, use data-prefetch-static-assets instead.";if(t){if(u(n===null,r),t==="hover"||t==="viewport")return t;if(t==="false")return!1;u(!1,`data-prefetch-static-assets has value "${t}" but it should instead be "false", "hover", or "viewport"`)}if(n){if(l(!t),v(!1,r,{onlyOnce:!0}),n==="true")return"viewport";if(n==="false")return"hover";u(!1,`data-prefetch has value "${n}" but it should instead be "true" or "false"`)}l(!1)}const nt=new Map;function rt(e){const t=it(e);return nt.has(t)}function ot(e){const t=it(e);nt.set(t,!0)}function it(e){return G(e,"/").pathname}A();const Re=new Map;async function Q(e){if(u(Rt(),"prefetch() only works with Client Routing, see https://vite-plugin-ssr.com/prefetch",{showStackTrace:!0}),u(!et(e),`You are trying to prefetch the URL ${e} of another domain which cannot be prefetched`,{showStackTrace:!0}),rt(e))return;ot(e);const{pageId:t,pageFilesAll:n,pageConfigs:r}=await Qe(e);if(t)try{await B(n,r,t)}catch(o){if(oe(o))te(o,!0);else throw o}}function yr(e){ot(e.urlPathname),[...document.getElementsByTagName("A")].forEach(async n=>{if(Re.has(n))return;Re.set(n,!0);const r=n.getAttribute("href");if(tt(n))return;l(r);try{if(!await Ze(r))return}catch{return}if(rt(r))return;const{prefetchStaticAssets:o}=hr(e,n);if(o){if(o==="hover")n.addEventListener("mouseover",()=>Q(r)),n.addEventListener("touchstart",()=>Q(r),{passive:!0});else if(o==="viewport"){const i=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(Q(r),i.disconnect())})});i.observe(n)}}else return})}function st(){let e=window.history.state;e||(e={});let t=!1;"timestamp"in e||(t=!0,e.timestamp=lt()),"scrollPosition"in e||(t=!0,e.scrollPosition=at()),ut(e),t&&ae(e)}function se(){const e=window.history.state||{};return ut(e),e}function at(){return{x:window.scrollX,y:window.scrollY}}function lt(){return new Date().getTime()}function Se(){const e=at(),t=se();ae({...t,scrollPosition:e})}function _r(e,t){if(t)ae(se(),e);else{const n=lt();br({timestamp:n,scrollPosition:null},e)}}function ut(e){if(l(C(e)),"timestamp"in e){const{timestamp:t}=e;l(typeof t=="number")}if("scrollPosition"in e){const{scrollPosition:t}=e;t!==null&&l(h(t,"x","number")&&h(t,"y","number"))}}function ae(e,t){window.history.replaceState(e,"",t??null)}function br(e,t){window.history.pushState(e,"",t)}A();const vr=I("navigate.ts",{});function Rr(e){vr.navigate=e}const b=I("useClientRouter.ts",{previousState:U()});Ar();st();function te(e,t){l(oe(e)),b.clientRoutingIsDisabled=!0,t&&console.log(e),re(!1,["Failed to fetch static asset.","This usually happens when a new frontend is deployed.","Falling back to Server Routing.","(The next page navigation will use Server Routing instead of Client Routing.)"].filter(Boolean).join(" "),{onlyOnce:!0})}function Sr(){Fr(),Pr((o,{keepScrollPosition:i})=>{r({scrollTarget:i?"preserve-scroll":"scroll-to-top-or-hash",urlOriginal:o,isBackwardNavigation:!1,checkClientSideRenderable:!0})}),wr((o,i)=>{r({scrollTarget:o,isBackwardNavigation:i})}),Rr(async(o,{keepScrollPosition:i=!1,overwriteLastHistoryEntry:s=!1}={})=>{await r({scrollTarget:i?"preserve-scroll":"scroll-to-top-or-hash",urlOriginal:o,overwriteLastHistoryEntry:s,isBackwardNavigation:!1,checkClientSideRenderable:!0})});let e=0,t,n=!1;r({scrollTarget:"preserve-scroll",isBackwardNavigation:null});return;async function r({scrollTarget:o,urlOriginal:i=$(),overwriteLastHistoryEntry:s=!1,isBackwardNavigation:a,checkClientSideRenderable:c,pageContextsFromRewrite:f=[]}){var d,p;if(b.clientRoutingIsDisabled){W(i);return}const R=Dn(f);if(c){const y=(d=R._urlRewrite)!==null&&d!==void 0?d:i;let _;try{_=await Ze(y)}catch(de){if(J(de))_=!0;else throw de}if(!_){W(i);return}}const P={urlOriginal:i,isBackwardNavigation:a,...R},w=++e;l(w>=1),w>1&&n===!1&&((p=b.onPageTransitionStart)===null||p===void 0||p.call(b,P),n=!0);let ue=!1;const Y=()=>w===1&&ue===!1?!1:w!==e,m=await Xe(P);if(Y())return;const ce=w===1;g(m,{_isFirstRenderAttempt:ce});let N,S,fe=!1;try{N=await Vn(m)}catch(y){fe=!0,S=y}if(fe){if(J(S)||console.error(S),we(S,m))return;if(J(S)){const y=S;Wn(S,m._isProduction,m);const _=y._pageContextAbort;if(_._urlRewrite){await r({scrollTarget:o,urlOriginal:i,overwriteLastHistoryEntry:s,isBackwardNavigation:a,pageContextsFromRewrite:[...f,_]});return}if(_._urlRedirect){await r({scrollTarget:"scroll-to-top-or-hash",urlOriginal:_._urlRedirect.url,overwriteLastHistoryEntry:!1,isBackwardNavigation:!1,checkClientSideRenderable:!0});return}l(_._abortStatusCode),g(m,_)}else g(m,{is404:Qn(S)});try{N=await Gn(m)}catch(y){if(we(y,m)||(ce||setTimeout(()=>{window.location.pathname=i},0),on(S,y)))return;throw y}}if(l(N),g(m,N),M(m,"onPageTransitionStart"),b.onPageTransitionStart=m.exports.onPageTransitionStart,m.exports.hydrationCanBeAborted?ue=!0:v(!rn(),"You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting",{onlyOnce:!0}),!Y()&&(t&&await t,!Y())){if(Or(i,s),$e.markNavigationChange(),l(t===void 0),t=(async()=>{await St(m,!0),yr(m)})(),await t,t=void 0,m._isFirstRenderAttempt){M(m,"onHydrationEnd");const{onHydrationEnd:y}=m.exports;if(y){const _=m.exportsAll.onHydrationEnd[0].exportSource;l(_),await ne(()=>y(m),"onHydrationEnd",_)}}else w===e&&(m.exports.onPageTransitionEnd&&(M(m,"onPageTransitionEnd"),m.exports.onPageTransitionEnd(m)),n=!1);ct(o),le(),b.initialRenderIsDone=!0}}}function Pr(e){document.addEventListener("click",t);return;function t(o){if(!n(o))return;const i=r(o.target);if(!i)return;const s=i.getAttribute("href");if(tt(i))return;l(s),o.preventDefault();const a=![null,"false"].includes(i.getAttribute("keep-scroll-position"));e(s,{keepScrollPosition:a})}function n(o){return o.button===0&&!o.ctrlKey&&!o.shiftKey&&!o.altKey&&!o.metaKey}function r(o){for(;o.tagName!=="A";){const{parentNode:i}=o;if(!i)return null;o=i}return o}}function wr(e){window.addEventListener("popstate",()=>{const t=U(),n=t.historyState.scrollPosition||"scroll-to-top-or-hash",r=t.urlWithoutHash===b.previousState.urlWithoutHash,o=!t.historyState.timestamp||!b.previousState.historyState.timestamp?null:t.historyState.timestamp<b.previousState.historyState.timestamp;b.previousState=t,r?window.history.state===null?(st(),b.previousState=U()):ct(n):e(n,o)})}function Or(e,t){$()!==e&&(le(),_r(e,t),b.previousState=U())}function U(){return{urlWithoutHash:$({withoutHash:!0}),historyState:se()}}function ct(e){if(e==="preserve-scroll")return;let t;if(e==="scroll-to-top-or-hash"){const n=Er();if(n&&n!=="top"){const r=document.getElementById(n)||document.getElementsByName(n)[0];if(r){r.scrollIntoView();return}}t={x:0,y:0}}else l("x"in e&&"y"in e),t=e;Cr(t)}function Cr(e){const t=()=>window.scrollTo(e.x,e.y),n=()=>window.scrollX===e.x&&window.scrollY===e.y;n()||(t(),!n()&&requestAnimationFrame(()=>{t(),!n()&&setTimeout(async()=>{if(t(),n())return;const r=new Date().getTime();for(;;)if(await sn(10),t(),n()||new Date().getTime()-r>100)return},0)}))}function Fr(){window.addEventListener("scroll",an(Se,Math.ceil(1e3/3)),{passive:!0}),ft(Se)}function Er(){let{hash:e}=window.location;return e===""?null:(l(e.startsWith("#")),e=e.slice(1),e)}function Ar(){Pe(),ft(Pe),xr(()=>b.initialRenderIsDone&&le())}function le(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual")}function Pe(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto")}function ft(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&e()})}function xr(e){window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&e()})}function we(e,t){return!!(er(e)||Tr(e,t))}function Tr(e,t){if(!oe(e))return!1;if(t._isFirstRenderAttempt)throw te(e,!1),e;return te(e,!0),W(t.urlOriginal),!0}function kr(){return!!window._disableAutomaticLinkInterception}A();Pt(!0);Sr();
