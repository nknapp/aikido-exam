const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/index.DEBGxbvl.js","_astro/_commonjsHelpers.C4iS2aBk.js"])))=>i.map(i=>d[i]);
import{g as l,k as h,j as d,t as c,r as S,c as s,m as E,b as V,i as g,u as C,e as z,f as I,d as x,M as v,n as k}from"./web.DjMvNhE5.js";import{S as f}from"./index.browser.zlpC9tFZ.js";import{t as b,y as H,_ as N}from"./usePersistentStore.ilyrE2dp.js";import{a as R}from"./CheckButton.D93g18Ws.js";var M=c('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M6 6h12v12H6z">');const L=(e={})=>(()=>{var t=l(M);return h(t,e,!0,!0),d(),t})();var O=c('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zM12 5.5v9l6-4.5z">');const w=(e={})=>(()=>{var t=l(O);return h(t,e,!0,!0),d(),t})(),Q="single-direction";var T=c('<div><!$><!/><div class="absolute inset-0 z-0">');async function B(){const e=document.createElement("div");document.body.append(e);const t=Promise.withResolvers();return S(()=>s(D,{get setPlayer(){return t.resolve}}),e),await t.promise}class q extends EventTarget{constructor(t,n){super(),this.htmlElement=t,this.setVisible=n}}const D=e=>{let t=null;const[n,o]=E(!1);function i(a){t=new q(a,o),e.setPlayer(t)}function r(){t?.dispatchEvent(new Event("stop"))}return(()=>{var a=l(T),$=a.firstChild,[p,P]=V($.nextSibling),y=p.nextSibling;g(a,s(f,{class:"absolute top-1 right-1 z-10",size:"small",get label(){return b("video.stop")},icon:L,onClick:r}),p,P);var m=i;return typeof m=="function"?C(m,y):i=y,z(()=>I(a,R("fixed inset-0 bg-primary-dark",n()?"visible":"hidden"))),a})()};async function F(e){const t=await _();await t.loadVideo(e.videoId),await t.play(),await t.waitForStop(),await t.stop()}let u=null;function _(){return u=u??J(),u}H.subscribe(e=>{e&&_()});async function J(){const e=await B(),{default:t}=await N(async()=>{const{default:r}=await import("./index.DEBGxbvl.js").then(a=>a.i);return{default:r}},__vite__mapDeps([0,1])),n=t(e.htmlElement,{host:"https://www.youtube-nocookie.com",playerVars:{rel:0,autoplay:0,modestbranding:1}});function o(){n?.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",o),o();const i={loadVideo(r){return n.loadVideoById({videoId:r})},async play(){await n.playVideo(),e.setVisible(!0)},async stop(){await n.stopVideo(),e.setVisible(!1)},async waitForStop(){return new Promise(r=>{n.on("stateChange",a=>{a.data===0&&r()})})}};return e.addEventListener("stop",()=>{i.stop()}),i}var Y=c("<button>");const U=e=>{async function t(){await F(e.link)}return s(k,{get children(){return[s(v,{get when(){return e.type==="icon"},get children(){var n=l(Y);return n.$$click=t,g(n,s(w,{get class(){return e.class}})),d(),n}}),s(v,{get when(){return e.type==="button"},get children(){return s(f,{get class(){return e.class},size:"small",icon:w,get label(){return b("button.play-video.label")},onClick:t})}})]}})};x(["click"]);function j(e,t){return{async save(n){localStorage.setItem(e,JSON.stringify(n))},async load(){const n=localStorage.getItem(e);return n==null?t:Promise.resolve(JSON.parse(n))}}}function X(e){return j(`currentTechniques:${e}`,[])}export{L as I,Q as S,U as Y,X as c};
