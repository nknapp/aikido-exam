import{g as d,j as _,r as w,t as h,h as p,b as f,i as y,c as o,F as z,d as P,e as k,s as T,a as m,k as F,u as U,f as M,v as V,l as D,p as H,S as j}from"./web.BNk9p1T7.js";import{S as R,t as L,c as O,a as W}from"./techniqueStore.BIMTmklH.js";import{c as N,d as G,S as I,C as J}from"./index.browser.ByjWbkVB.js";import{p as K,D as Q}from"./playArrayBuffer.BlwDUVtI.js";var X=h('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M8 5v14l11-7z">');const Y=(e={})=>(()=>{var t=d(X);return _(t,e,!0,!0),w(),t})();var Z=h('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M6 6h12v12H6z">');const ee=(e={})=>(()=>{var t=d(Z);return _(t,e,!0,!0),w(),t})();var te=h('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="m6 18 8.5-6L6 6zM16 6v12h2V6z">');const ne=(e={})=>(()=>{var t=d(te);return _(t,e,!0,!0),w(),t})();var ae=h('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z">');const re=(e={})=>(()=>{var t=d(ae);return _(t,e,!0,!0),w(),t})();var ie=h('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M19.03 3.56c-1.67-1.39-3.74-2.3-6.03-2.51v2.01c1.73.19 3.31.88 4.61 1.92zM11 3.06V1.05c-2.29.2-4.36 1.12-6.03 2.51l1.42 1.42A8.93 8.93 0 0 1 11 3.06M4.98 6.39 3.56 4.97C2.17 6.64 1.26 8.71 1.05 11h2.01c.19-1.73.88-3.31 1.92-4.61M20.94 11h2.01c-.21-2.29-1.12-4.36-2.51-6.03l-1.42 1.42A8.93 8.93 0 0 1 20.94 11M7 12l3.44 1.56L12 17l1.56-3.44L17 12l-3.44-1.56L12 7l-1.56 3.44z"></path><path d="M12 21a8.96 8.96 0 0 1-7.46-4H7v-2H1v6h2v-2.7c1.99 2.84 5.27 4.7 9 4.7 4.87 0 9-3.17 10.44-7.56l-1.96-.45C19.25 18.48 15.92 21 12 21">');const le=(e={})=>(()=>{var t=d(ie);return _(t,e,!0,!0),w(),t})();var se=h('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="m20.38 8.57-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z"></path><path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83">');const oe=(e={})=>(()=>{var t=d(se);return _(t,e,!0,!0),w(),t})();var ce=h('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path><path d="M15.97 11.03C14.87 9.79 13.28 9 11.5 9c-2.82 0-5.18 1.95-5.82 4.56l.96.32C7.15 11.66 9.13 10 11.5 10c1.51 0 2.85.68 3.76 1.74L13 14h5V9z">');const ue=(e={})=>(()=>{var t=d(ce);return _(t,e,!0,!0),w(),t})(),de=["execution","attack","defence","direction"];function A(e){return`${e.execution} ${e.attack} ${e.defence} ${e.direction}`.replace(/\W/g,"_")}const he=["execution","attack","defence"];function B(e,t){const a=e.direction===R?he:de;return t==null?a:e.execution!==t.execution?a.slice(0):e.attack!==t.attack?a.slice(1):e.defence!==t.defence?a.slice(2):e.direction!==t.direction?a.slice(3):a}function*ge(e){let t;for(const a of e){const n=B(a,t);yield{id:A(a),execution:{value:a.execution,relevant:n.includes("execution")},attack:{value:a.attack,relevant:n.includes("attack")},defence:{value:a.defence,relevant:n.includes("defence")},direction:{value:a.direction,relevant:n.includes("direction")}},t=a}}var ye=h('<ul><!$><!/><a class="border-info border bg-info-lightest h-32 flex flex-col items-center justify-center gap-4 text-black "><span></span><span>'),ve=h('<div class="absolute flex items-center top-0 right-0 rounded bg-primary-dark font-bold text-white p-1 origin-top-right text-xs"><!$><!/> <!$><!/>'),xe=h("<li>"),fe=h("<div>");const we=e=>{const t=p(()=>Array.from(ge(e.techniques)));return(()=>{var a=d(ye),n=a.firstChild,[i,r]=f(n.nextSibling),c=i.nextSibling,s=c.firstChild,v=s.nextSibling;return y(a,o(z,{get each(){return t()},children:l=>o($e,{entry:l,get isLastTechnique(){return p(()=>e.lastTechnique!=null)()&&l.id==A(e.lastTechnique)},get isNextTechnique(){return p(()=>e.nextTechnique!=null)()&&l.id==A(e.nextTechnique)}})}),i,r),y(s,()=>L("donations.question")),y(v,()=>L("donations.action")),P(l=>{var u=N("overflow-y-scroll grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 shadow-lg m-0 bg-white",e.class),x=O("/donations");return u!==l.e&&k(a,l.e=u),x!==l.t&&T(c,"href",l.t=x),l},{e:void 0,t:void 0}),a})()},$e=e=>{const[t,a]=m();return F(()=>{if(e.isNextTechnique){const n=t();n&&n.scrollIntoView?.({block:"end",inline:"start",behavior:"smooth"})}}),o(be,{ref:a,get id(){return e.entry.id},get class(){return N(e.isLastTechnique&&"bg-primary-lightest outline-primary outline-4 -outline-offset-4")},get ariaCurrent(){return e.isLastTechnique},get children(){return[p(()=>p(()=>!!e.isNextTechnique)()&&(()=>{var n=d(ve),i=n.firstChild,[r,c]=f(i.nextSibling),s=r.nextSibling,v=s.nextSibling,[l,u]=f(v.nextSibling);return y(n,o(ue,{class:"fill-current scale-75"}),r,c),y(n,()=>L("reader.upcoming-technique"),l,u),n})()),o(C,{get field(){return e.entry.execution},class:"text-sm h-6"}),o(C,{get field(){return e.entry.attack},class:"text-sm h-6 z-10"}),o(C,{get field(){return e.entry.defence},class:"text-xl h-8"}),o(C,{get field(){return e.entry.direction},class:"text-sm h-6"})]}})},be=e=>(()=>{var t=d(xe),a=e.ref;return typeof a=="function"?U(a,t):e.ref=t,y(t,()=>e.children),P(n=>{var i=e.id,r=N(e.class,"border-primary-light border p-2 pt-4 rounded snap-mandatory","snap-start","relative","overflow-visible","list-none","h-32"),c=e.ariaCurrent,s=e.noListItem?"presentation":void 0;return i!==n.e&&T(t,"id",n.e=i),r!==n.t&&k(t,n.t=r),c!==n.a&&T(t,"aria-current",n.a=c),s!==n.o&&T(t,"role",n.o=s),n},{e:void 0,t:void 0,a:void 0,o:void 0}),t})(),C=e=>(()=>{var t=d(fe);return y(t,()=>e.field.value!==R&&e.field.value),P(()=>k(t,N(e.field.relevant?"text-black font-bold":"text-secondary",e.class))),t})(),me=console.warn.bind(console);async function pe(e){return _e(e,async t=>{for(let i=0;i<2;i++)try{const r=new URL(t,window.location.href);return await(await fetch(r)).arrayBuffer()}catch(r){me("Retrying after ",r)}const a=new URL(t,window.location.href);return await(await fetch(a)).arrayBuffer()})}async function _e(e,t){const a=Object.entries(e),n=await Promise.all(a.map(async([i,r])=>[i,await t(r)]));return Object.fromEntries(n)}let E=null;async function Pe(e,t){if(E==null)throw new Error("No SpeechPack loaded");await K(E[e],{abortSignal:t})}async function ke(e){E=await pe(e)}function Se(e,t){return B(e,t).map(n=>e[n])}class Ce{constructor(){this.lastTechnique=void 0,this.abortController=new AbortController}async playTechnique(t){await this.playFiles(Se(t,this.lastTechnique)),this.abortController.signal.aborted||(this.lastTechnique=t)}async playFiles(t){this.abortController.abort();const a=new AbortController;this.abortController=a;for(const n of t){if(a.signal.aborted)return;await Pe(n,a.signal)}}async stop(){this.abortController.abort()}}class qe{constructor(t,a={}){this.speechPackPlayer=new Ce,this.techniques=t,this.options=a,this.nextIndex=0,this.lastIndex=-1,this.autoPlayEnabled=!1,this.options.onUpdateNextTechnique?.(this.techniques[this.nextIndex])}async play(){this.options.onStart?.();try{await this._play()}finally{this.options.onStop?.()}}async _play(){await this.playNext(),this.autoPlayEnabled&&this.techniques[this.nextIndex]!=null&&(await this.options.waitSeconds?.(20),await this._play())}async playNext(){this.updateLastFromNext();const t=this.getNextTechnique();t!=null&&(await this.speechPackPlayer.playTechnique(t),await this.skipNext())}updateLastFromNext(){this.lastIndex=this.nextIndex,this.options.onUpdateLastTechnique?.(this.techniques[this.lastIndex])}getNextTechnique(){return this.techniques[this.nextIndex]}async stop(){await this.speechPackPlayer.stop()}setAutoPlay(t){this.autoPlayEnabled=t,this.options.onAutoPlay?.(t)}async skipNext(){this.nextIndex++,this.options.onUpdateNextTechnique?.(this.techniques[this.nextIndex])}async skipPrevious(){this.nextIndex--,this.options.onUpdateNextTechnique?.(this.techniques[this.nextIndex])}destroy(){}}function Te(e,t,a){const[n]=M(async()=>(await ke(e()),!0)),[i,r]=m(!1),[c,s]=m(!1),[v,l]=m(null),[u,x]=m(null),g=p(()=>{const $=new qe(t(),{onStart:()=>s(!0),onStop:()=>s(!1),onAutoPlay:r,onUpdateNextTechnique:b=>x(b),onUpdateLastTechnique:b=>l(b),waitSeconds:a});return V(()=>$.destroy()),$});return{autoPlay:i,setAutoPlay($){g().setAutoPlay($)},playing:c,playerLoaded:n,lastTechnique:v,nextTechnique:u,async play(){await g().play()},async stop(){await g().stop()},async skipPrevious(){await g().skipPrevious()},async skipNext(){await g().skipNext()}}}var Ne=h('<button><!$><!/><div class="grid grid-cols-3 w-24 gap-1 h-6">'),Ie=h("<div>");const q=["slow","normal","fast"],Le=e=>{const{buttonClasses:t,iconClasses:a}=G(()=>e),n=p(()=>q.indexOf(e.value));function i(){const r=(n()+1)%q.length;e.onChange(q[r])}return(()=>{var r=d(Ne),c=r.firstChild,[s,v]=f(c.nextSibling),l=s.nextSibling;return r.$$click=i,y(r,o(oe,{get class(){return a()}}),s,v),y(l,o(z,{each:q,children:(u,x)=>(()=>{var g=d(Ie);return P(()=>k(g,n()<x()?"border-primary border":"bg-primary border-primary-dark border-1")),g})()})),P(u=>{var x=t(),g=e.disabled;return x!==u.e&&k(r,u.e=x),g!==u.t&&H(r,"disabled",u.t=g),u},{e:void 0,t:void 0}),w(),r})()};D(["click"]);var Ae=h('<div class="h-full flex flex-col gap-4">'),Ee=h('<div class="grid grid-cols-4 gap-4"><!$><!/><!$><!/><!$><!/>'),ze=h('<div class="grid grid-cols-2 gap-4"><!$><!/><!$><!/>');const Ve=e=>{const t=W(e.dojoInfo.id),[a]=M(t.load,{initialValue:[]}),[n,i]=m(),{lastTechnique:r,nextTechnique:c,skipNext:s,skipPrevious:v,playerLoaded:l,stop:u,play:x,playing:g,setAutoPlay:$,autoPlay:b}=Te(()=>e.speechPack,a,async S=>{await n()?.animateDelay(S)});return(()=>{var S=d(Ae);return y(S,o(j,{fallback:"Loading",get children(){return[o(Me,{get playing(){return g()},onClickPlay:async()=>{await x()},onClickStop:async()=>{$(!1),await u()},onClickNext:()=>s(),onClickPrevious:()=>v(),get ready(){return l()},onClickAutoPlay:()=>$(!b()),get autoPlayEnabled(){return b()}}),o(Q,{setDelayControl:i,get disabled(){return!b()}}),o(we,{class:"flex-1",get techniques(){return a()},get lastTechnique(){return r()},get nextTechnique(){return c()}})]}})),S})()},Me=e=>{const[t,a]=m("normal");return[(()=>{var n=d(Ee),i=n.firstChild,[r,c]=f(i.nextSibling),s=r.nextSibling,[v,l]=f(s.nextSibling),u=v.nextSibling,[x,g]=f(u.nextSibling);return y(n,o(I,{label:"Previous",hideLabel:!0,size:"large",icon:re,get disabled(){return!e.ready},get onClick(){return e.onClickPrevious}}),r,c),y(n,o(I,{class:"col-span-2",get disabled(){return!e.ready},size:"large",onClick:()=>e.playing?e.onClickStop():e.onClickPlay(),get label(){return e.playing?"Stop":"Play"},hideLabel:!0,get icon(){return e.playing?ee:Y}}),v,l),y(n,o(I,{label:"Next",hideLabel:!0,size:"large",icon:ne,get disabled(){return!e.ready},get onClick(){return e.onClickNext}}),x,g),n})(),(()=>{var n=d(ze),i=n.firstChild,[r,c]=f(i.nextSibling),s=r.nextSibling,[v,l]=f(s.nextSibling);return y(n,o(J,{size:"small",icon:le,label:"Autoplay",get value(){return e.autoPlayEnabled},get onChange(){return e.onClickAutoPlay},get disabled(){return!e.ready}}),r,c),y(n,o(Le,{class:"hidden",size:"small",get disabled(){return!e.autoPlayEnabled&&!e.ready},get value(){return t()},onChange:a}),v,l),n})()]};export{Ve as Reader};
