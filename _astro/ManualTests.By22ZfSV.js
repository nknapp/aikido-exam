import{c as j,a as X,g as h,b as c,i as r,d as a,e as J,t as b,F as S,m,f as A,s as B,h as M}from"./web._rAx8qX5.js";import{S as k,b as E,a as N,C as L,I as p,c as F,d as Z,F as K}from"./ForEntries.BsKDyXCV.js";const ee="/_astro/playArrayBuffer.fixture.D9jk8p3Y.mp3";function te(){let e=null,t=null;return{promise:new Promise((n,s)=>{e=n,t=s}),resolve:e,reject:t}}function le(e){const t=new ArrayBuffer(e.byteLength);return new Uint8Array(t).set(new Uint8Array(e)),t}const ne=async(e,t={})=>{const l=ie(),{resolve:n,promise:s}=te(),i=l.createBufferSource(),$=le(e);if(i.buffer=await l.decodeAudioData($),i.connect(l.destination),!t.abortSignal?.aborted)return t.abortSignal?.addEventListener("abort",()=>i.stop()),i.start(),i.addEventListener("ended",()=>n()),s};let O=null;function ie(){return O==null&&(O=new AudioContext),O}function re(e){return new Promise(t=>setTimeout(t,e))}var ae=b('<div><!$><!/><div class="grid grid-cols-3 gap-2 items-center py-2 md:w-1/2"><!$><!/><!$><!/><!$><!/><div>'),se=b("<div>Error while loading mp3: <!$><!/>"),oe=b('<ol><li>Press the play button<ul><li>The text "ai hamni katate dori" should be played</li><li>During playback, "playing" should be shownw</li><li>After playback, "playing" should disappear</li></ul></li><li>Press "play" and then "stop"<ul><li>The text "ai hamni katate dori" should be played</li><li>On pressing stop, the playback should be stopped</li></ul></li><li>Press "play" multiple times, before the playback is finished"<ul><li>The text "ai hamni katate dori" should be played</li><li>On pressing "play" again, the previous playback should be stopped');async function ce(){const e=await fetch(ee);return await re(1e3),await e.arrayBuffer()}const de=()=>{let e=new AbortController;const[t,l]=j(0),n=()=>{e.abort(),e=new AbortController},s=async o=>{n(),l(u=>u+1),await ne(o,{abortSignal:e.signal}),l(u=>u-1)},[i,{refetch:$}]=X(ce,{ssrLoadFrom:"initial",onHydrated(){$()}});function _(){const o=i();o!=null&&s(o)}return(()=>{var o=h(ae),u=o.firstChild,[d,f]=c(u.nextSibling),g=d.nextSibling,v=g.firstChild,[x,y]=c(v.nextSibling),P=x.nextSibling,[w,R]=c(P.nextSibling),U=w.nextSibling,[z,W]=c(U.nextSibling),H=z.nextSibling;return r(o,a($e,{}),d,f),r(g,a(k,{get disabled(){return i.loading||i.error},get label(){return i.loading?"Loading...":"Play"},onClick:_}),x,y),r(g,a(k,{get disabled(){return i.loading||i.error},label:"Stop",onClick:()=>n()}),w,R),r(g,(()=>{var V=J(()=>!!i.error);return()=>V()&&(()=>{var T=h(se),Y=T.firstChild,q=Y.nextSibling,[G,Q]=c(q.nextSibling);return r(T,()=>i.error,G,Q),T})()})(),z,W),r(H,()=>t()>0&&"Playing"),o})()},$e=()=>h(oe);var ue=b('<div class="flex flex-col gap-4">'),ge=b('<div data-testid=CheckButton-ShowCase class="flex items-center gap-4"><!$><!/><!$><!/><!$><!/><div>');const he=()=>(()=>{var e=h(ue);return r(e,a(S,{each:E,children:t=>a(S,{each:N,children:l=>[a(I,{size:t,color:l,value:!1}),a(I,{size:t,color:l,value:!0})]})})),e})(),I=e=>{const[t,l]=j(e.value);return(()=>{var n=h(ge),s=n.firstChild,[i,$]=c(s.nextSibling),_=i.nextSibling,[o,u]=c(_.nextSibling),d=o.nextSibling,[f,g]=c(d.nextSibling),v=f.nextSibling;return r(n,a(L,m(e,{label:"5th Kyu",onChange:l,get value(){return t()}})),i,$),r(n,a(L,m(e,{icon:p,label:"5th Kyu",onChange:l,get value(){return t()}})),o,u),r(n,a(L,m(e,{icon:p,label:"5th Kyu",onChange:l,get value(){return t()}})),f,g),r(v,()=>JSON.stringify(e)),n})()};var be=b('<img alt="">');const _e=e=>typeof e.icon=="string"?(()=>{var t=h(be);return A(l=>{var n=e.icon,s=F("h-6",e.class);return n!==l.e&&B(t,"src",l.e=n),s!==l.t&&M(t,l.t=s),l},{e:void 0,t:void 0}),t})():a(e.icon,{get class(){return e.class}});var fe=b("<a><!$><!/><!$><!/>");const C=e=>{const{buttonClasses:t,iconClasses:l}=Z(()=>({...e}));return(()=>{var n=h(fe),s=n.firstChild,[i,$]=c(s.nextSibling),_=i.nextSibling,[o,u]=c(_.nextSibling);return r(n,(()=>{var d=J(()=>!!e.icon);return()=>d()&&a(_e,{get icon(){return e.icon},get class(){return l()}})})(),i,$),r(n,()=>e.label,o,u),A(d=>{var f=e.href,g=t();return f!==d.e&&B(n,"href",d.e=f),g!==d.t&&M(n,d.t=g),d},{e:void 0,t:void 0}),n})()},D="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20144.387%20144.387'%20height='512'%20width='512'%3e%3cg%20transform='translate(-30.238%20-77.774)'%20stroke='%23000'%3e%3ccircle%20r='72.193'%20cy='149.967'%20cx='102.432'%20fill='%23b6cbaa'%20fill-rule='evenodd'%20stroke-width='.5'%20stroke-linejoin='round'/%3e%3cg%20stroke-width='.265'%3e%3cpath%20d='M94.536%2093.697c5.163-2.967%2010.935-4.713%2019.625-.626l6.511%2037.554-29.934%201.87z'%20fill='%23fff'/%3e%3cpath%20d='M51.322%20156.744c.07-4.733-1.504-6.204.417-14.196%201.921-7.991%2010.893-24.9%2015.031-31.732%204.139-6.833%204.266-7.72%207.725-10.23%205.718-4.147%2020.041-6.889%2020.041-6.889l7.307%2035.7%209.812%2036.115-5.845%2026.722-36.743-22.338%204.384-7.098%201.879-7.098c.503-5.08.519-10.132.417-15.24l-.417-9.811s-3.914%208.934-4.681%2013.96c-.767%205.027-1.68%2010.795-1.373%2014.85.168%202.22.208%206.68.208%206.68l-18.162-5.01s-.022-2.924%200-4.385z'%20fill='%23fff'/%3e%3cpath%20d='M84.933%20197.245c-.417-1.67-1.879-17.12-1.879-17.12l6.263-20.667%2013.988-37.16%2010.856-29.227s12.646%201.502%2016.342%203.44c19.493%208.306%2020.044%2047.614%2020.074%2068.767-5.877-.923-11.764-1.125-19.817-2.083%201.23-10.42%201.23-20.125.102-28.371l-3.132%2016.075s.188%203.226.25%205.219c.061%201.929.168%205.219.168%205.219l.626%207.098%204.384%207.307-1.879%204.384-24.008%207.933z'%20fill='%23fff'/%3e%3cpath%20d='M73.45%20162.798l5.429%206.472-9.186%205.01-8.454%209.384%201.253%204.801c9.339-11.99%2016.387-19.195%2032.025-10.954%207.72-.307%2012.095-1.021%2018.182-1.143%2010.887%203.184%2015.943%206.262%2023.173%2015.24l2.923-2.923c-7.516-8.56-12.567-11.724-21.294-14.613l8.56-2.088%202.713-3.549-.626-7.098-7.724%204.593-8.769-.418-14.196.418-7.933-.626-3.967-2.714-6.471-2.714-3.758-4.176z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";var me=b('<div class="flex flex-col gap-4">'),ve=b('<div data-testid=SimpleButton-ShowCase class="flex items-center gap-4"><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><div>');const xe=()=>(()=>{var e=h(me);return r(e,a(S,{each:E,children:t=>a(S,{each:N,children:l=>a(ye,{size:t,color:l})})})),e})(),ye=e=>(()=>{var t=h(ve),l=t.firstChild,[n,s]=c(l.nextSibling),i=n.nextSibling,[$,_]=c(i.nextSibling),o=$.nextSibling,[u,d]=c(o.nextSibling),f=u.nextSibling,[g,v]=c(f.nextSibling),x=g.nextSibling,[y,P]=c(x.nextSibling),w=y.nextSibling;return r(t,a(C,m(e,{label:"Print",href:"#"})),n,s),r(t,a(C,m(e,{label:"Print",icon:p,href:"#"})),$,_),r(t,a(C,m(e,{icon:p,href:"#"})),u,d),r(t,a(C,m(e,{icon:D,href:"#"})),g,v),r(t,a(C,m(e,{icon:D,label:"Aikido",href:"#"})),y,P),r(w,()=>JSON.stringify(e)),t})();var Se=b('<div class="flex flex-col gap-4">'),pe=b('<div data-testid=SimpleButton-ShowCase class="flex items-center gap-4"><div>clicked</div><!$><!/><!$><!/><!$><!/><div>');const Ce=()=>(()=>{var e=h(Se);return r(e,a(S,{each:E,children:t=>a(S,{each:N,children:l=>a(ke,{size:t,color:l})})})),e})(),ke=e=>{const[t,l]=j(!1),n=()=>{l(!0),setTimeout(()=>l(!1),100)};return(()=>{var s=h(pe),i=s.firstChild,$=i.nextSibling,[_,o]=c($.nextSibling),u=_.nextSibling,[d,f]=c(u.nextSibling),g=d.nextSibling,[v,x]=c(g.nextSibling),y=v.nextSibling;return r(s,a(k,m(e,{label:"Print",onClick:n})),_,o),r(s,a(k,m(e,{label:"Print",icon:p,onClick:n})),d,f),r(s,a(k,m(e,{icon:p,onClick:n})),v,x),r(y,()=>JSON.stringify(e)),A(()=>M(i,F("text-black text-xs p-1",t()?"bg-primary":"bg-black duration-1000 transition-colors"))),s})()};var we=b("<table><thead><tr><th>Color</th><th>-darkest</th><th>-dark</th><th></th><th>-light</th><th>-lightest</th></tr><!$><!/></thead><tbody>"),Be=b("<tr><td></td><!$><!/>"),Ae=b("<td class=relative><div>");const Me={primary:["bg-primary-darkest","bg-primary-dark","bg-primary","bg-primary-light","bg-primary-lightest"],secondary:["bg-secondary-darkest","bg-secondary-dark","bg-secondary","bg-secondary-light","bg-secondary-lightest"],info:["bg-info-darkest","bg-info-dark","bg-info","bg-info-light","bg-info-lightest"]},Pe=()=>(()=>{var e=h(we),t=e.firstChild,l=t.firstChild,n=l.nextSibling,[s,i]=c(n.nextSibling);return r(t,a(K,{object:Me,children:($,_)=>(()=>{var o=h(Be),u=o.firstChild,d=u.nextSibling,[f,g]=c(d.nextSibling);return r(u,$),r(o,a(S,{each:_,children:v=>(()=>{var x=h(Ae),y=x.firstChild;return A(()=>M(y,F(v,"w-32 h-8 inset-4"))),x})()}),f,g),o})()}),s,i),e})();var Te=b("<div>"),Le=b("<div><a><h1></h1></a><div>");const Oe=Object.assign({"/src/adapters/playArrayBuffer/playArrayBuffer.manual-test.tsx":de,"/src/components/solid/atoms/CheckButton.manual-test.tsx":he,"/src/components/solid/atoms/LinkButton.manual-test.tsx":xe,"/src/components/solid/atoms/SimpleButton.manual-test.tsx":Ce,"/src/components/solid/colors.manual-test.tsx":Pe}),Ne=()=>(()=>{var e=h(Te);return r(e,a(K,{object:Oe,children:(t,l)=>{const n=t.replace(/\W/g,"_");return(()=>{var s=h(Le),i=s.firstChild,$=i.firstChild,_=i.nextSibling;return B(i,"href",`#${n}`),B($,"id",n),r($,t),r(_,a(l,{})),s})()}})),e})();export{Ne as ManualTests};
