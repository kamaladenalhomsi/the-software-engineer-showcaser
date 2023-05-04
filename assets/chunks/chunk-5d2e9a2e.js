function me(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function D(e,t){let n;{var i=Error.stackTraceLimit;Error.stackTraceLimit=1/0,n=new Error(e),Error.stackTraceLimit=i}return me()&&(n.stack=ve(n.stack,t)),n}function ve(e,t){if(!e)return e;const n=Ee(e);let i=0;return n.filter(o=>o.includes(" (internal/")||o.includes(" (node:internal")?!1:i<t&&ye(o)?(i++,!1):!0).join(`
`)}function ye(e){return e.startsWith("    at ")}function Ee(e){return e.split(/\r?\n/)}function I(e,t){const n=globalThis.__vite_plugin_ssr=globalThis.__vite_plugin_ssr||{};return n[e]=n[e]||t}function F(e){return Array.from(new Set(e))}const E=I("assertPackageInstances.ts",{instances:[]}),ne="Make sure your client-side code doesn't include(/bundle)",ie=`The client runtime of Server Routing and the client runtime of Client Routing are both being loaded. ${ne} both for a given page.`,V=`Two vite-plugin-ssr client runtime instances are being loaded. ${ne} vite-plugin-ssr twice. (In order to reduce the size of your client-side JavaScript bundles.)`;function z(){{const e=F(E.instances);if(e.length>1){const t=`Both \`vite-plugin-ssr@${e[0]}\` and \`vite-plugin-ssr@${e[1]}\` loaded. Only one version should be loaded.`;m(!1,t)}}E.checkSingleInstance&&E.instances.length>1&&$(!1,V,{onlyOnce:!0,showStackTrace:!0})}function xt(e){$(E.isClientRouting!==!0,ie,{onlyOnce:!0,showStackTrace:!0}),$(E.isClientRouting===void 0,V,{onlyOnce:!0,showStackTrace:!0}),E.isClientRouting=!1,e&&(E.checkSingleInstance=!0),z()}function Nt(e){$(E.isClientRouting!==!1,ie,{onlyOnce:!0,showStackTrace:!0}),$(E.isClientRouting===void 0,V,{onlyOnce:!0,showStackTrace:!0}),E.isClientRouting=!0,e&&(E.checkSingleInstance=!0),z()}function Re(e){E.instances.push(e),z()}const be="0.4.122",P={projectName:"vite-plugin-ssr",projectVersion:be,npmPackageName:"vite-plugin-ssr",githubRepository:"https://github.com/brillout/vite-plugin-ssr"};Re(P.projectVersion);const b=I("assert.ts",{alreadyLogged:new Set}),T=`[${P.npmPackageName}@${P.projectVersion}]`,$e=`${T}[Bug]`,_e=`${T}[Wrong Usage]`,we=`${T}[Warning]`,Pe=`${T}[Info]`,B=2;function r(e,t){var n;if(e)return;const i=(()=>{if(!t)return null;const o=typeof t=="string"?t:"`"+JSON.stringify(t)+"`";return`Debug info (this is for the ${P.projectName} maintainers; you can ignore this): ${o}`})(),s=D([`${$e} You stumbled upon a bug in ${P.projectName}'s source code.`,`Go to ${P.githubRepository}/issues/new and copy-paste this error. (The error's stack trace is usually enough to fix the problem).`,"A maintainer will fix the bug (usually under 24 hours).",`Don't hesitate to reach out as it makes ${P.projectName} more robust.`,i].filter(Boolean).join(" "),B);throw(n=b.onBeforeLog)===null||n===void 0||n.call(b),s}function m(e,t){var n;if(e)return;const i=t.startsWith("[")?"":" ",s=`${_e}${i}${t}`,o=D(s,B);throw(n=b.onBeforeLog)===null||n===void 0||n.call(b),o}function Se(e){const t=e.startsWith("[")?"":" ";return D(`${T}${t}${e}`,B)}function $(e,t,{onlyOnce:n,showStackTrace:i}){var s;if(e)return;const o=`${we} ${t}`;if(n){const{alreadyLogged:l}=b,a=n===!0?o:n;if(l.has(a))return;l.add(a)}(s=b.onBeforeLog)===null||s===void 0||s.call(b),console.warn(i?new Error(o):o)}function Dt(e,t,{onlyOnce:n}){var i;if(e)return;const s=`${Pe} ${t}`;if(n){const{alreadyLogged:o}=b,l=s;if(o.has(l))return;o.add(l)}(i=b.onBeforeLog)===null||i===void 0||i.call(b),console.log(s)}function U(){return typeof window<"u"&&typeof window.scrollY=="number"}const O=I("utils/assertRouterType.ts",{});function Vt(){se(Te()),O.isClientRouting=!0}function Te(){return O.isClientRouting!==!1}function zt(){se(O.isClientRouting!==!0),O.isClientRouting=!1}function se(e){m(U(),"`import { something } from 'vite-plugin-ssr/client/router'` is forbidden on the server-side"),$(e,"You shouldn't `import { something } from 'vite-plugin-ssr/client/router'` when using Server Routing. The 'vite-plugin-ssr/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` when using Server Routing as these will unnecessarily bloat your client-side bundle.",{showStackTrace:!1,onlyOnce:!0})}const Ie=["js","ts","cjs","cts","mjs","mts","jsx","tsx","cjsx","ctsx","mjsx","mtsx"],re=["vue","svelte","marko","md","mdx"],je=[...Ie,...re];function oe(e){const t=je.some(n=>e.endsWith("."+n));return r(!Oe(e)||t),t}function Oe(e){return/\.(c|m)?(j|t)sx?$/.test(e)}function ke(e){return re.some(t=>e.endsWith("."+t))}function k(e,t,n){return typeof e=="string"?J(e.split(""),t,n).join(""):J(e,t,n)}function J(e,t,n){const i=[];let s=t>=0?t:e.length+t;r(s>=0&&s<=e.length);let o=n>=0?n:e.length+n;for(r(o>=0&&o<=e.length);!(s===o||(s===e.length&&(s=0),s===o));){const l=e[s];r(l!==void 0),i.push(l),s++}return i}function Fe(e){return e.startsWith("/")||e.startsWith("http")||e.startsWith("tauri://")||e.startsWith(".")||e.startsWith("?")||e.startsWith("#")||e===""}function Le(e,t){r(Fe(e),{url:e}),r(t.startsWith("/"),{url:e,baseServer:t});const[n,...i]=e.split("#");r(n!==void 0);const s=["",...i].join("#")||null;r(s===null||s.startsWith("#"));const o=s===null?"":W(s.slice(1)),[l,...a]=n.split("?");r(l!==void 0);const c=["",...a].join("?")||null;r(c===null||c.startsWith("?"),{url:e,searchOriginal:c});const u={},d={};Array.from(new URLSearchParams(c||"")).forEach(([y,M])=>{u[y]=M,d[y]=[...d[y]||[],M]});const{origin:f,pathnameResolved:p}=Ae(l,t);r(f===null||f===W(f),{origin:f}),r(p.startsWith("/"),{url:e,pathnameResolved:p}),r(f===null||e.startsWith(f),{url:e,origin:f});const h=l.slice((f||"").length);{const y=`${f||""}${h}${c||""}${s||""}`;r(e===y,{url:e,urlRecreated:y})}let{pathname:v,hasBaseServer:_}=xe(p,t);return v=Ce(v),r(v.startsWith("/")),{origin:f,pathname:v,pathnameOriginal:h,hasBaseServer:_,search:u,searchAll:d,searchOriginal:c,hash:o,hashOriginal:s}}function W(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function Ce(e){return e.split("/").map(t=>W(t).split("/").join("%2F")).join("/")}function Ae(e,t){var n;if(e.startsWith("//"))return{origin:null,pathnameResolved:e};let i=!1;const s="tauri://",o="http://";e.startsWith(s)&&(i=!0,e=o+e.slice(s.length));let l,a;try{const c=new URL(e);l=c.origin,a=c.pathname}catch{l=null;let u=typeof window<"u"&&((n=window==null?void 0:window.document)===null||n===void 0?void 0:n.baseURI);u=u||"http://fake.example.org"+t,a=new URL(e,u).pathname}return a||(a="/"),i&&(r(l),r(l.startsWith(o)),l=s+l.slice(o.length)),r(a.startsWith("/"),{urlWithoutSearch:e,pathnameResolved:a}),r(a===a.split("?")[0].split("#")[0]),{origin:l,pathnameResolved:a}}function We(e){r(e.startsWith("/")),r(!e.includes("?")),r(!e.includes("#"))}function xe(e,t){We(e),r(Ne(t));let n=e;if(r(n.startsWith("/")),r(t.startsWith("/")),t==="/")return{pathname:e,hasBaseServer:!0};let i=t;return t.endsWith("/")&&n===k(t,0,-1)&&(i=k(t,0,-1),r(n===i)),n.startsWith(i)?(r(n.startsWith("/")||n.startsWith("http")),r(n.startsWith(i)),n=n.slice(i.length),n.startsWith("/")||(n="/"+n),r(n.startsWith("/")),{pathname:n,hasBaseServer:!0}):{pathname:e,hasBaseServer:!1}}function Ne(e){return e.startsWith("/")}function G(e,t){Object.assign(e,t)}function L(e){return e instanceof Function||typeof e=="function"}function R(e){return typeof e=="object"&&e!==null}function Bt(e){return(t,n)=>{const i=e(t),s=e(n);return i===s?0:i>s?-1:1}}function De(e){return(t,n)=>{const i=e(t),s=e(n);if(r([!0,!1,null].includes(i)),r([!0,!1,null].includes(s)),i===s)return 0;if(i===!0||s===!1)return-1;if(s===!0||i===!1)return 1;r(!1)}}function Ve(e){return De(t=>{const n=e(t);return n===null?null:!n})}function g(e,t,n="unknown"){if(!R(e))return!1;if(!(t in e))return n==="undefined";if(n==="unknown")return!0;const i=e[t];return n==="array"?Array.isArray(i):n==="object"?R(i):n==="string[]"?Array.isArray(i)&&i.every(s=>typeof s=="string"):n==="function"?L(i):Array.isArray(n)?typeof i=="string"&&n.includes(i):n==="null"?i===null:n==="undefined"?i===void 0:n==="true"?i===!0:n==="false"?i===!1:typeof i===n}function ze(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const Be=e=>e!=null,Ue="\\";function le(e){const t=n=>`Not a posix path: ${n}`;r(e!==null,t("null")),r(typeof e=="string",t(`typeof path === '${typeof e}'`)),r(e!=="",t("(empty string)")),r(e),r(!e.includes(Ue),t(e))}const Y=/[^a-zA-Z-_]/;function ae(e){return Ge(e)!==null}function Ge(e){if(e===void 0||e.includes("\\")||e.startsWith("/"))return null;let t=null;if(e.startsWith("@")){if(!e.includes("/"))return null;const[a,...c]=e.split("/");t=a,e=c.join("/"),r(t&&t.startsWith("@"))}if(e==="")return null;const[n,...i]=e.split("/"),s=n,o=i.length===0?null:i.join("/");return r(s),r(o===null||!o.startsWith("/")),Y.test(s)||t&&Y.test(t.slice(1))?null:(r(!s.startsWith("/")),{npmPackageName:t?`${t}/${s}`:s,importPath:o})}const He=["$$registrations","_rerender_only"];function Me(e,t){Je(e,t,!0)}function Je(e,t,n){const s=Object.keys(e).filter(a=>!He.includes(a)),o=s.filter(a=>a!=="default"),l=s.includes("default");if(o.length===0){if(l)return;r(s.length===0),m(!1,`${t} doesn't export any value, but it should have a \`export default\` instead`)}else{const a=o.join(", ");n?$(o.length===0,`${t} should only have a default export: remove \`export { ${a} }\``,{onlyOnce:!0,showStackTrace:!1}):$(o.length===0,`${t} replace \`export { ${a} }\` with \`export default { ${a} }\``,{onlyOnce:!0,showStackTrace:!1})}}function Ye(e){return Object.entries(e)}const qe=["clientRouting"];function Ke(e){qe.forEach(t=>{if(r(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;m(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),m(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const ce=["render","clientRouting","prerender","doNotPrerender"];function Ze(e,t){m(!ce.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function Qe(e,t){const n={},i={},s={};if(e.forEach(a=>{Xe(a).forEach(({exportName:u,exportValue:d,isFromDefaultExport:f})=>{var p;r(u!=="default"),s[u]=(p=s[u])!==null&&p!==void 0?p:[],s[u].push({exportValue:d,exportSource:`${a.filePath} > ${f?`\`export default { ${u} }\``:`\`export { ${u} }\``}`,filePath:a.filePath,_filePath:a.filePath,_fileType:a.fileType,_isFromDefaultExport:f})})}),t){const{configValues:a}=t;Ye(a).forEach(([c,u])=>{var d,f,p;const h=t.configElements[c];r(h);const{configDefinedByFile:v,configDefinedAt:_}=h;r(v),i[c]=(d=i[c])!==null&&d!==void 0?d:u,n[c]=(f=n[c])!==null&&f!==void 0?f:[],n[c].push({configValue:u,configDefinedAt:_,configDefinedByFile:v});const y=c;s[y]=(p=s[y])!==null&&p!==void 0?p:[],s[y].push({exportValue:u,exportSource:_,filePath:v,_filePath:v,_fileType:null,_isFromDefaultExport:null})})}const o=et(),l={};return Object.entries(s).forEach(([a,c])=>{c.forEach(({exportValue:u,_fileType:d,_isFromDefaultExport:f})=>{var p;l[a]=(p=l[a])!==null&&p!==void 0?p:u,d===".page"&&!f&&(a in o||(o[a]=u))})}),r(!("default"in l)),r(!("default"in s)),{config:i,configEntries:n,exports:l,exportsAll:s,pageExports:o}}function Xe(e){const{filePath:t,fileExports:n}=e;r(n),r(oe(t));const i=[];return Object.entries(n).sort(Ve(([s])=>s==="default")).forEach(([s,o])=>{let l=s==="default";if(l)if(ke(t))s="Page";else{m(R(o),`The \`export default\` of ${t} should be an object.`),Object.entries(o).forEach(([a,c])=>{Ze(a,t),i.push({exportName:a,exportValue:c,isFromDefaultExport:l})});return}i.push({exportName:s,exportValue:o,isFromDefaultExport:l})}),i.forEach(({exportName:s,isFromDefaultExport:o})=>{r(!(o&&ce.includes(s)))}),i}function et(){return new Proxy({},{get(...e){return U()||$(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function tt(e){const t=".page.",n=k(e.split(t),0,-1).join(t);return r(!n.includes("\\")),n}function S(e){le(e),r(e.startsWith("/")||ae(e),{filePath:e})}function Ut(e,t){if(t.length>0){const i=t.filter(s=>s.isErrorPage);return i.length===0?null:(m(i.length===1,"Only one error page can be defined"),i[0].pageId)}const n=F(e.map(({pageId:i})=>i).filter(i=>C(i)));if(m(n.length<=1,`Only one _error.page.js is allowed, but found several: ${n.join(" ")}`),n.length>0){const i=n[0];return r(i),i}return null}function C(e,t){return r(!e.includes("\\")),e.includes("/_error")}function nt(e,t){if(t.length>0){const n=t.find(i=>i.pageId===e);return r(n),n.isErrorPage}else return C(e)}const it=[".page",".page.server",".page.route",".page.client",".css"];function st(e){if(le(e),e.endsWith(".css"))return r(ae(e),e),".css";r(oe(e),e);const n=e.split("/").slice(-1)[0].split("."),i=n.slice(-3)[0],s=n.slice(-2)[0];if(s==="page")return".page";if(r(i==="page",e),s==="server")return".page.server";if(s==="client")return".page.client";if(s==="route")return".page.route";r(!1,e)}function ue(e){const t=o=>s.pageId===o||s.isDefaultPageFile&&(q(s.filePath)||rt(o,s.filePath)),n=st(e),s={filePath:e,fileType:n,isEnv:o=>{if(r(n!==".page.route"),o==="CLIENT_ONLY")return n===".page.client"||n===".css";if(o==="SERVER_ONLY")return n===".page.server";if(o==="CLIENT_AND_SERVER")return n===".page";r(!1)},isRelevant:t,isDefaultPageFile:x(e),isRendererPageFile:n!==".css"&&x(e)&&q(e),isErrorPageFile:C(e),pageId:tt(e)};return s}function x(e){return S(e),C(e)?!1:e.includes("/_default")}function q(e){return S(e),e.includes("/renderer/")}function rt(e,t){S(e),S(t),r(!e.endsWith("/")),r(!t.endsWith("/")),r(x(t));const n=k(t.split("/"),0,-1).filter(i=>i!=="_default").join("/");return e.startsWith(n)}function ot(e){r(Array.isArray(e)||e===null),r(e!==null),e.forEach(t=>{r(R(t)),r(g(t,"pageId","string")),r(g(t,"plusConfigFilePathAll","string[]")),r(g(t,"routeFilesystem","string")||g(t,"routeFilesystem","null")),r(g(t,"routeFilesystemDefinedBy","string")),r(g(t,"loadCodeFiles","function")),r(g(t,"isErrorPage","boolean")),r(g(t,"configElements","object")),fe(t.configElements,!1)})}function lt(e){fe(e,!0)}function fe(e,t){r(R(e)),Object.entries(e).forEach(([n,i])=>{if(r(R(i)||i===null),i===null){r(t);return}r(g(i,"configDefinedAt","string")),r(g(i,"plusConfigFilePath","string")||g(i,"plusConfigFilePath","null")),r(g(i,"configEnv","string")),r(g(i,"codeFilePath","string")||g(i,"codeFilePath","null")),r(g(i,"codeFileExport","string")||g(i,"codeFileExport","null")),r(g(i,"configValueSerialized","string")||g(i,"configValueSerialized","undefined")),(t||n==="route")&&r(g(i,"configValue"))})}const at=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],i=t[2];return new RegExp(n,i)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function H(e){const t=JSON.parse(e);return de(t)}function de(e){return typeof e=="string"?ct(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=de(n)}),e)}function ct(e){for(const{match:t,deserialize:n}of at)if(t(e))return n(e,H);return e}function ut(e){e.forEach(t=>{Object.entries(t.configElements).forEach(([n,i])=>{ft(i),n==="route"&&dt(i)})})}function ft(e){const{configValueSerialized:t}=e;t!==void 0&&(e.configValue=H(t))}function dt(e){r(g(e,"configValue"));const{configValue:t}=e,n=typeof t;m(n==="string"||L(t),`${e.configDefinedAt} has an invalid type '${n}': it should be a string or a function instead, see https://vite-plugin-ssr.com/route`)}function gt(e){r(g(e,"isGeneratedFile")),r(e.isGeneratedFile!==!1,"vite-plugin-ssr was re-installed(/re-built). Restart your app."),r(e.isGeneratedFile===!0,`\`isGeneratedFile === ${e.isGeneratedFile}\``),r(g(e,"pageFilesLazy","object")),r(g(e,"pageFilesEager","object")),r(g(e,"pageFilesExportNamesLazy","object")),r(g(e,"pageFilesExportNamesEager","object")),r(g(e.pageFilesLazy,".page")),r(g(e.pageFilesLazy,".page.client")||g(e.pageFilesLazy,".page.server")),r(g(e,"pageFilesList","string[]")),r(g(e,"invalidator","object")||g(e,"invalidator","null")),e.invalidator&&Object.keys(e.invalidator).forEach(o=>{const l=o.split("/").slice(-1)[0];r(l.startsWith("+"))}),r(g(e,"pageConfigs")),r(g(e,"pageConfigGlobal"));const{pageConfigs:t,pageConfigGlobal:n}=e;ot(t),ut(t),lt(n);const i={};j(e.pageFilesLazy).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;K(u),l.loadFile=async()=>{"fileExports"in l||(l.fileExports=await u(),Ke(l))}}),j(e.pageFilesExportNamesLazy).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;K(u),l.loadExportNames=async()=>{if(!("exportNames"in l)){const d=await u();m("exportNames"in d,"You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3"),r(g(d,"exportNames","string[]"),l.filePath),l.exportNames=d.exportNames}}}),j(e.pageFilesEager).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;r(R(u)),l.fileExports=u}),j(e.pageFilesExportNamesEager).forEach(({filePath:o,pageFile:l,globValue:a})=>{var c;l=i[o]=(c=i[o])!==null&&c!==void 0?c:l;const u=a;r(R(u)),r(g(u,"exportNames","string[]"),l.filePath),l.exportNames=u.exportNames}),e.pageFilesList.forEach(o=>{var l;i[o]=(l=i[o])!==null&&l!==void 0?l:ue(o)});const s=Object.values(i);return s.forEach(({filePath:o})=>{r(!o.includes("\\"))}),{pageFiles:s,pageConfigs:t,pageConfigGlobal:n}}function j(e){const t=[];return Object.entries(e).forEach(([n,i])=>{r(it.includes(n)),r(R(i)),Object.entries(i).forEach(([s,o])=>{const l=ue(s);r(l.fileType===n),t.push({filePath:s,pageFile:l,globValue:o})})}),t}function K(e){r(L(e))}const w=I("setPageFiles.ts",{});function Gt(e){const{pageFiles:t,pageConfigs:n,pageConfigGlobal:i}=gt(e);w.pageFilesAll=t,w.pageConfigs=n,w.pageConfigGlobal=i}async function Ht(e,t){e?(r(!w.pageFilesGetter),r(t===void 0)):(r(w.pageFilesGetter),r(typeof t=="boolean"),(!w.pageFilesAll||!t)&&await w.pageFilesGetter());const{pageFilesAll:n,pageConfigs:i,pageConfigGlobal:s}=w;r(n&&i&&s);const o=ht(n,i);return{pageFilesAll:n,allPageIds:o,pageConfigs:i,pageConfigGlobal:s}}function ht(e,t){const n=e.filter(({isDefaultPageFile:o})=>!o).map(({pageId:o})=>o),i=F(n),s=t.map(o=>o.pageId);return[...i,...s]}function pt(e,t){return ge(e,t,!0)}function Mt(e,t){return ge(e,t,!1)}function ge(e,t,n){const i=n?"CLIENT_ONLY":"SERVER_ONLY",s=e.filter(h=>h.isRelevant(t)&&h.fileType!==".page.route").sort(mt(n,t)),o=h=>{const v=s.filter(y=>y.pageId===t&&y.isEnv(h?"CLIENT_AND_SERVER":i));m(v.length<=1,`Merge the following files into a single file: ${v.map(y=>y.filePath).join(" ")}`);const _=v[0];return r(_===void 0||!_.isDefaultPageFile),_},l=o(!1),a=o(!0),c=h=>s.filter(v=>v.isRendererPageFile&&v.isEnv(h?"CLIENT_AND_SERVER":i))[0],u=c(!1),d=c(!0),f=s.filter(h=>h.isDefaultPageFile&&!h.isRendererPageFile&&(h.isEnv(i)||h.isEnv("CLIENT_AND_SERVER")));return[l,a,...f,u,d].filter(Be)}function mt(e,t){const n=e?"CLIENT_ONLY":"SERVER_ONLY",i=-1,s=1,o=0;return(l,a)=>{if(!l.isDefaultPageFile&&a.isDefaultPageFile)return i;if(!a.isDefaultPageFile&&l.isDefaultPageFile)return s;{const c=l.isRendererPageFile,u=a.isRendererPageFile;if(!c&&u)return i;if(!u&&c)return s;r(c===u)}{const c=Z(t,l.filePath),u=Z(t,a.filePath);if(c<u)return i;if(u<c)return s;r(c===u)}{if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return i;if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return s}return o}}function Z(e,t){S(e),S(t);let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const i=e.slice(n),s=t.slice(n),o=i.split("/").length,l=s.split("/").length;return o+l}const vt="modulepreload",yt=function(e){return"/"+e},Q={},Jt=function(t,n,i){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=yt(o),o in Q)return;Q[o]=!0;const l=o.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!i)for(let d=s.length-1;d>=0;d--){const f=s[d];if(f.href===o&&(!l||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":vt,l||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),l)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function X(e){const t=e/1e3;if(t<120){const n=ee(t);return`${n} second${te(n)}`}{const n=t/60,i=ee(n);return`${i} minute${te(i)}`}}function ee(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function te(e){return e==="1"?"":"s"}function Et(e,t,n){const{timeoutErr:i,timeoutWarn:s}=Rt(t);let o,l;const a=new Promise((f,p)=>{o=h=>{c(),f(h)},l=h=>{c(),p(h)}}),c=()=>{clearTimeout(u),clearTimeout(d)},u=setTimeout(()=>{const f=`${T}[Warning] The ${t}() hook defined by ${n} is taking more than ${X(s)}`;console.warn(f)},s),d=setTimeout(()=>{const f=Se(`Hook timeout: the ${t}() hook defined by ${n} didn't finish after ${X(i)}`);l(f)},i);return(async()=>{try{const f=await e();o(f)}catch(f){l(f)}})(),a}function Rt(e){let t=4e4,n=4*1e3;return e==="onBeforeRoute"&&(t=5*1e3,n=1*1e3),e==="onBeforePrerender"&&(t=10*60*1e3,n=30*1e3),{timeoutErr:t,timeoutWarn:n}}function Yt(e){const t=window.location.href,{searchOriginal:n,hashOriginal:i,pathname:s}=Le(t,"/");let o;return e!=null&&e.withoutHash?o=`${s}${n||""}`:o=`${s}${n||""}${i||""}`,r(o.startsWith("/")),o}r(U());function qt(){var e;const t=(e=document.getElementById("vite-plugin-ssr_pageContext"))===null||e===void 0?void 0:e.textContent;r(t);const n=H(t);r(g(n,"pageContext","object"));const{pageContext:i}=n;return r(g(i,"_pageId","string")),G(i,{_pageContextRetrievedFromServer:{...i},_comesDirectlyFromServer:!0}),i}function N(e,t){if(!(t in e.exports))return null;const n=e.exports[t],i=e.exportsAll[t][0];r(i.exportValue===n);const s=i.exportSource;return r(s),r(!t.endsWith(")")),m(L(n),`hook ${t}() defined by ${s} should be a function`),{hook:n,hookSrc:s}}function Kt(e,t){N(e,t)}function bt(e){const t=Object.entries(e);for(const n in e)delete e[n];t.sort(([n],[i])=>ze(n,i)).forEach(([n,i])=>{e[n]=i})}function $t(e){_t(e),wt(e)}function _t(e){nt(e._pageId,e._pageConfigs)&&r(g(e,"is404","boolean"))}function wt(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!R(t)){$(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}const A=I("releasePageContext.ts",{});function Pt(e,t){if(t){const s=e;r([!0,!1].includes(s.isHydration)),r([!0,!1,null].includes(s.isBackwardNavigation))}else{const s=e;r(s.isHydration===!0),r(s.isBackwardNavigation===null)}r("config"in e),r("configEntries"in e),r("exports"in e),r("exportsAll"in e),r("pageExports"in e),r(R(e.pageExports));const n=e.exports.Page;G(e,{Page:n}),Ot(e),bt(e),r([!0,!1].includes(e._comesDirectlyFromServer));const i=e._comesDirectlyFromServer?It(e):e;return $t(e),i}const St=["then","toJSON"],Tt=["_pageId"];function It(e){return new Proxy(e,{get:n});function t(i){return!(i in e||St.includes(i)||typeof i=="symbol"||typeof i!="string"||i.startsWith("__v_"))}function n(i,s){return A.disableAssertPassToClient!==s&&jt(e._pageContextRetrievedFromServer,s,t(s)),A.disableAssertPassToClient=s,window.setTimeout(()=>{A.disableAssertPassToClient=void 0},0),e[s]}}function jt(e,t,n){if(!n||e===null)return;const i=Object.keys(e).filter(s=>!Tt.includes(s));m(!1,[`pageContext.${t} isn't available in the browser`,`('${t}' is missing in the passToClient list [${i.map(s=>`'${s}'`).join(", ")}]).`,`Did you forget to add '${t}' to the passToClient list?`,"See https://vite-plugin-ssr.com/passToClient"].join(" "))}function Ot(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}function kt(e,t){var n;const i=e.filter(o=>o.pageId===t);return r(i.length<=1),(n=i[0])!==null&&n!==void 0?n:null}async function Ft(e,t){const n={};return!t&&"configValues"in e||((await e.loadCodeFiles()).forEach(s=>{const{configName:o,codeFilePath:l}=s;let a;if(s.isPlusFile){const{codeFileExports:c}=s;o!=="client"&&Me(c,l),a=c.default}else a=s.codeFileExportValue;r(!(o in n)),n[o]=a}),Object.entries(e.configElements).map(([s,o])=>{o.codeFilePath||(r(!(s in n)),n[s]=o.configValue)}),G(e,{configValues:n})),e}const he="__whileFetchingAssets";async function Zt(e,t,n){const i=pt(e,n),s=kt(t,n);let o;try{o=(await Promise.all([s&&Ft(s,!1),...i.map(h=>{var v;return(v=h.loadFile)===null||v===void 0?void 0:v.call(h)})]))[0]}catch(p){throw Lt(p)&&Object.assign(p,{[he]:!0}),p}const{config:l,configEntries:a,exports:c,exportsAll:u,pageExports:d}=Qe(i,o);return{config:l,configEntries:a,exports:c,exportsAll:u,pageExports:d,_pageFilesLoaded:i}}function Qt(e){return e?e[he]===!0:!1}function Lt(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}function Xt(e,t,n){const i=e.configElements[t];if(!i||pe(e,t))return null;const{configValue:s,configDefinedAt:o}=i;return m(typeof s===n,`${o} has an invalid type \`${typeof s}\`: is should be a ${n} instead`),s}function en(e,t){const n=e.configElements[t];if(!n||pe(e,t))return null;if(n.codeFilePath!==null)return n.codeFilePath;const{configValue:i,configDefinedAt:s}=n;m(typeof i=="string",`${s} has an invalid type \`${typeof i}\`: it should be a \`string\` instead`),m(!1,`${s} has an invalid value \`${i}\`: it should be a file path instead`)}function pe(e,t){const n=e.configElements[t];if(!n)return!0;const{codeFilePath:i,configValue:s}=n;return i?!1:s==null}function Ct(e,t){const n=t.find(i=>i.pageId===e);return r(t.length>0),r(n),n}async function tn(e,t){const n=Pt(e,t);let i=null,s;i=N(e,"render"),s="render";{const a=N(e,"onRenderClient");a&&(i=a,s="onClientRender")}if(!i){const a=At(e);if(e._pageConfigs.length>0)Wt(e._pageId,e._pageConfigs,a);else{const c=e._pageFilesLoaded.filter(d=>d.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+a:u="One of the following files should export a `render()` hook: "+c.map(d=>d.filePath).join(" "),m(!1,u)}}r(i);const o=i.hook;r(s);const l=await Et(()=>o(n),"render",i.hookSrc);m(l===void 0,`The ${s}() hook defined by ${i.hookSrc} isn't allowed to return a value`)}function At(e){let t;try{t=e.urlOriginal}catch{}return t=t??window.location.href,t}function Wt(e,t,n){var i,s;const o=Ct(e,t);r(!(!((i=o.configElements.onRenderClient)===null||i===void 0)&&i.configValue)),r(((s=o.configElements.clientRouting)===null||s===void 0?void 0:s.configValue)===!0);const l=[];let a=[];t.forEach(d=>{a.push(...d.plusConfigFilePathAll);const f=d.configElements.onRenderClient;f&&f.configValue&&l.push(f.configDefinedAt)}),a=F(a);const c="- ",u=`No onRenderClient() hook found for URL \`${n}\`. (A onRenderClient() hook is required when using Client Routing: the config \`clientRouting\` is \`true\` for the URL \`${n}\`.)`;if(l.length===0)m(!1,[`${u} No onRenderClient() hook is defined by any of your page config files. Your page config files (which none of them defines \`onClientRender()\`):`,...a.map(d=>c+d)].join(`
`));else{const d=l.length>=2;m(!1,[`${u} Note that onRenderClient() is defined at:`,...l.map(f=>`${c}${f}`),`but ${d?"none of them":"it doesn't"} apply to the URL \`${n}\`.`].join(`
`))}}export{H as A,Se as B,Ht as C,Ne as D,pt as E,Xt as F,kt as G,Fe as H,Dt as I,Te as J,Qt as K,Kt as L,tn as M,Nt as N,zt as O,xt as P,Jt as _,r as a,Vt as b,U as c,Yt as d,Mt as e,R as f,I as g,m as h,L as i,$ as j,Bt as k,k as l,C as m,g as n,De as o,Le as p,G as q,qt as r,Gt as s,Zt as t,Ut as u,N as v,Pt as w,Et as x,Ct as y,en as z};
