import{g as N,n as R,r as V,t as z,$ as O,A as M,B as p,C as m,c as B,o as L,p as W,a as q,e as x}from"./web.BBIpouoX.js";import{y as X,s as G}from"./youtube.CdAUXvhk.js";import{t as J,C as Q}from"./index.CTp7u28n.js";import"./preload-helper.dLw7uZYB.js";var U=z('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z">');const Z=(n={})=>(()=>{var e=N(U);return R(e,n,!0,!0),V(),e})();var k=z('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2">');const nn=(n={})=>(()=>{var e=N(k);return R(e,n,!0,!0),V(),e})(),H=Symbol("store-raw"),j=Symbol("store-node"),w=Symbol("store-has"),I=Symbol("store-self");function T(n){let e=n[O];if(!e&&(Object.defineProperty(n,O,{value:e=new Proxy(n,tn)}),!Array.isArray(n))){const i=Object.keys(n),l=Object.getOwnPropertyDescriptors(n);for(let t=0,o=i.length;t<o;t++){const s=i[t];l[s].get&&Object.defineProperty(n,s,{enumerable:l[s].enumerable,get:l[s].get.bind(e)})}}return e}function g(n){let e;return n!=null&&typeof n=="object"&&(n[O]||!(e=Object.getPrototypeOf(n))||e===Object.prototype||Array.isArray(n))}function y(n,e=new Set){let i,l,t,o;if(i=n!=null&&n[H])return i;if(!g(n)||e.has(n))return n;if(Array.isArray(n)){Object.isFrozen(n)?n=n.slice(0):e.add(n);for(let s=0,d=n.length;s<d;s++)t=n[s],(l=y(t,e))!==t&&(n[s]=l)}else{Object.isFrozen(n)?n=Object.assign({},n):e.add(n);const s=Object.keys(n),d=Object.getOwnPropertyDescriptors(n);for(let u=0,f=s.length;u<f;u++)o=s[u],!d[o].get&&(t=n[o],(l=y(t,e))!==t&&(n[o]=l))}return n}function E(n,e){let i=n[e];return i||Object.defineProperty(n,e,{value:i=Object.create(null)}),i}function _(n,e,i){if(n[e])return n[e];const[l,t]=B(i,{equals:!1,internal:!0});return l.$=t,n[e]=l}function en(n,e){const i=Reflect.getOwnPropertyDescriptor(n,e);return!i||i.get||!i.configurable||e===O||e===j||(delete i.value,delete i.writable,i.get=()=>n[O][e]),i}function Y(n){p()&&_(E(n,j),I)()}function on(n){return Y(n),Reflect.ownKeys(n)}const tn={get(n,e,i){if(e===H)return n;if(e===O)return i;if(e===M)return Y(n),i;const l=E(n,j),t=l[e];let o=t?t():n[e];if(e===j||e===w||e==="__proto__")return o;if(!t){const s=Object.getOwnPropertyDescriptor(n,e);p()&&(typeof o!="function"||n.hasOwnProperty(e))&&!(s&&s.get)&&(o=_(l,e,o)())}return g(o)?T(o):o},has(n,e){return e===H||e===O||e===M||e===j||e===w||e==="__proto__"?!0:(p()&&_(E(n,w),e)(),e in n)},set(){return!0},deleteProperty(){return!0},ownKeys:on,getOwnPropertyDescriptor:en};function h(n,e,i,l=!1){if(!l&&n[e]===i)return;const t=n[e],o=n.length;i===void 0?(delete n[e],n[w]&&n[w][e]&&t!==void 0&&n[w][e].$()):(n[e]=i,n[w]&&n[w][e]&&t===void 0&&n[w][e].$());let s=E(n,j),d;if((d=_(s,e,t))&&d.$(()=>i),Array.isArray(n)&&n.length!==o){for(let u=n.length;u<o;u++)(d=s[u])&&d.$();(d=_(s,"length",o))&&d.$(n.length)}(d=s[I])&&d.$()}function F(n,e){const i=Object.keys(e);for(let l=0;l<i.length;l+=1){const t=i[l];h(n,t,e[t])}}function ln(n,e){if(typeof e=="function"&&(e=e(n)),e=y(e),Array.isArray(e)){if(n===e)return;let i=0,l=e.length;for(;i<l;i++){const t=e[i];n[i]!==t&&h(n,i,t)}h(n,"length",l)}else F(n,e)}function v(n,e,i=[]){let l,t=n;if(e.length>1){l=e.shift();const s=typeof l,d=Array.isArray(n);if(Array.isArray(l)){for(let u=0;u<l.length;u++)v(n,[l[u]].concat(e),i);return}else if(d&&s==="function"){for(let u=0;u<n.length;u++)l(n[u],u)&&v(n,[u].concat(e),i);return}else if(d&&s==="object"){const{from:u=0,to:f=n.length-1,by:r=1}=l;for(let c=u;c<=f;c+=r)v(n,[c].concat(e),i);return}else if(e.length>1){v(n[l],e,[l].concat(i));return}t=n[l],i=[l].concat(i)}let o=e[0];typeof o=="function"&&(o=o(t,i),o===t)||l===void 0&&o==null||(o=y(o),l===void 0||g(t)&&g(o)&&!Array.isArray(o)?F(t,o):h(n,l,o))}function rn(...[n,e]){const i=y(n||{}),l=Array.isArray(i),t=T(i);function o(...s){m(()=>{l&&s.length===1?ln(i,s[0]):v(i,s)})}return[t,o]}const K=Symbol("store-root");function S(n,e,i,l,t){const o=e[i];if(n===o)return;const s=Array.isArray(n);if(i!==K&&(!g(n)||!g(o)||s!==Array.isArray(o)||t&&n[t]!==o[t])){h(e,i,n);return}if(s){if(n.length&&o.length&&(!l||t&&n[0]&&n[0][t]!=null)){let f,r,c,a,b,A,D,$;for(c=0,a=Math.min(o.length,n.length);c<a&&(o[c]===n[c]||t&&o[c]&&n[c]&&o[c][t]===n[c][t]);c++)S(n[c],o,c,l,t);const P=new Array(n.length),C=new Map;for(a=o.length-1,b=n.length-1;a>=c&&b>=c&&(o[a]===n[b]||t&&o[c]&&n[c]&&o[a][t]===n[b][t]);a--,b--)P[b]=o[a];if(c>b||c>a){for(r=c;r<=b;r++)h(o,r,n[r]);for(;r<n.length;r++)h(o,r,P[r]),S(n[r],o,r,l,t);o.length>n.length&&h(o,"length",n.length);return}for(D=new Array(b+1),r=b;r>=c;r--)A=n[r],$=t&&A?A[t]:A,f=C.get($),D[r]=f===void 0?-1:f,C.set($,r);for(f=c;f<=a;f++)A=o[f],$=t&&A?A[t]:A,r=C.get($),r!==void 0&&r!==-1&&(P[r]=o[f],r=D[r],C.set($,r));for(r=c;r<n.length;r++)r in P?(h(o,r,P[r]),S(n[r],o,r,l,t)):h(o,r,n[r])}else for(let f=0,r=n.length;f<r;f++)S(n[f],o,f,l,t);o.length>n.length&&h(o,"length",n.length);return}const d=Object.keys(n);for(let f=0,r=d.length;f<r;f++)S(n[d[f]],o,d[f],l,t);const u=Object.keys(o);for(let f=0,r=u.length;f<r;f++)n[u[f]]===void 0&&h(o,u[f],void 0)}function sn(n,e={}){const{merge:i,key:l="id"}=e,t=y(n);return o=>{if(!g(o)||!g(t))return t;const s=S(t,{[K]:o},K,i,l);return s===void 0?o:s}}function fn(n){let e=n.get(),[i,l]=cn(e),t=n.subscribe(l);return L(()=>t()),i}function cn(n){let[e,i]=rn({value:n});return[()=>e.value,l=>{let t=y(e.value);return typeof l=="function"&&(l=l(t)),i("value",sn(l)),e.value}]}function un(n,e){const i=fn(n),[l,t]=B(e);return W(()=>{t(i)}),q(()=>{t(i)}),l}const wn=n=>{const e=un(X,!1);return x(Q,{get class(){return n.class},get icon(){return e()?Z:nn},get value(){return e()},onChange:G,get label(){return J("button.settings.youtube.label")}})};export{wn as YoutubeActivator};