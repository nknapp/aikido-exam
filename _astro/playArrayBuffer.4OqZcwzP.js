import{a as l,g as c,u,d,e as f,t as m}from"./web.BNk9p1T7.js";import{c as y}from"./CheckButton.BW--iLX9.js";var g=m('<div><div class="bg-primary h-full w-0">');const A=t=>{const[n,a]=l();async function s(r){const e=n();if(e==null)return;const i=e.animate([{width:"0%"},{width:"100%"}],{fill:"forwards",easing:"linear",duration:r*1e3});await i.finished,i.cancel(),e.style.width="0"}return t.setDelayControl({animateDelay:s}),(()=>{var r=c(g),e=r.firstChild;return u(a,e),d(()=>f(r,y("w-full h-1",t.disabled?"bg-secondary-lightest":"bg-primary-lightest"))),r})()};function p(){let t=null,n=null;return{promise:new Promise((s,r)=>{t=s,n=r}),resolve:t,reject:n}}function w(t){const n=new ArrayBuffer(t.byteLength);return new Uint8Array(n).set(new Uint8Array(t)),n}const C=async(t,n={})=>{const a=h(),{resolve:s,promise:r}=p(),e=a.createBufferSource(),i=w(t);if(e.buffer=await a.decodeAudioData(i),e.connect(a.destination),!n.abortSignal?.aborted)return n.abortSignal?.addEventListener("abort",()=>e.stop()),e.start(),e.addEventListener("ended",()=>s()),r};let o=null;function h(){return o==null&&(o=new AudioContext),o}export{A as D,C as p};