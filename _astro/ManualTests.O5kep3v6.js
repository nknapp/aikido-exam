import{g as b,i as t,c as l,F as M,m as D,b as n,p as f,t as g,e as H,f as V,q as Q,a as U,l as K}from"./web.DjMvNhE5.js";import{S as v}from"./index.browser.zlpC9tFZ.js";import{b as E,d as J,C as R,a as Y}from"./CheckButton.D93g18Ws.js";import{I as w,L as I,F as G}from"./ForEntries.DhPGie-1.js";import{D as X,p as Z}from"./playArrayBuffer.Ck3MweBv.js";var ee=g('<div class="flex flex-col gap-4">'),te=g('<div data-testid=CheckButton-ShowCase class="flex items-center gap-4"><!$><!/><!$><!/><!$><!/><div>');const le=()=>(()=>{var e=b(ee);return t(e,l(M,{each:E,children:i=>l(M,{each:J,children:a=>[l(W,{size:i,color:a,value:!1}),l(W,{size:i,color:a,value:!0})]})})),e})(),W=e=>{const[i,a]=D(e.value);return(()=>{var r=b(te),d=r.firstChild,[s,$]=n(d.nextSibling),h=s.nextSibling,[o,c]=n(h.nextSibling),m=o.nextSibling,[p,u]=n(m.nextSibling),x=p.nextSibling;return t(r,l(R,f(e,{label:"5th Kyu",onChange:a,get value(){return i()}})),s,$),t(r,l(R,f(e,{icon:w,label:"5th Kyu",onChange:a,get value(){return i()}})),o,c),t(r,l(R,f(e,{icon:w,label:"5th Kyu",hideLabel:!0,onChange:a,get value(){return i()}})),p,u),t(x,()=>JSON.stringify(e)),r})()};var ie=g('<div><!$><!/><!$><!/><div class="flex items-center gap-4 mt-4"><!$><!/><!$><!/><!$><!/><!$><!/>'),ne=g('<div><ul><li>Click the button</li><li>The bar above the button should animate from empty to filled</li><li>While the animation is in progress, the button should be disabled</li><li>While the animation is in progress, the label should change from "Stopped" to "Running"</li><li>Clicking the disabled button should change display to gray');const ae=()=>{const[e,i]=D({animateDelay:async()=>{}}),[a,r]=D(!1),[d,s]=D(!1);let $=new AbortController;async function h(){$.abort(),$=new AbortController,r(!0),await e().animateDelay(1,$.signal),r(!1)}return(()=>{var o=b(ie),c=o.firstChild,[m,p]=n(c.nextSibling),u=m.nextSibling,[x,S]=n(u.nextSibling),_=x.nextSibling,P=_.firstChild,[y,L]=n(P.nextSibling),C=y.nextSibling,[B,T]=n(C.nextSibling),N=B.nextSibling,[A,k]=n(N.nextSibling),O=A.nextSibling,[j,F]=n(O.nextSibling);return t(o,l(re,{}),m,p),t(o,l(X,{setDelayControl:i,get disabled(){return d()}}),x,S),t(_,l(v,{label:"Start animation",onClick:()=>h(),get disabled(){return a()}}),y,L),t(_,l(v,{label:"Stop animation",onClick:()=>$.abort(),get disabled(){return!a()}}),B,T),t(_,()=>a()?"Running":"Stopped",A,k),t(_,l(R,{get value(){return d()},onChange:s,label:"Disabled"}),j,F),o})()},re=()=>b(ne),q="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20144.387%20144.387'%20height='512'%20width='512'%3e%3cg%20transform='translate(-30.238%20-77.774)'%20stroke='%23000'%3e%3ccircle%20r='72.193'%20cy='149.967'%20cx='102.432'%20fill='%23b6cbaa'%20fill-rule='evenodd'%20stroke-width='.5'%20stroke-linejoin='round'/%3e%3cg%20stroke-width='.265'%3e%3cpath%20d='M94.536%2093.697c5.163-2.967%2010.935-4.713%2019.625-.626l6.511%2037.554-29.934%201.87z'%20fill='%23fff'/%3e%3cpath%20d='M51.322%20156.744c.07-4.733-1.504-6.204.417-14.196%201.921-7.991%2010.893-24.9%2015.031-31.732%204.139-6.833%204.266-7.72%207.725-10.23%205.718-4.147%2020.041-6.889%2020.041-6.889l7.307%2035.7%209.812%2036.115-5.845%2026.722-36.743-22.338%204.384-7.098%201.879-7.098c.503-5.08.519-10.132.417-15.24l-.417-9.811s-3.914%208.934-4.681%2013.96c-.767%205.027-1.68%2010.795-1.373%2014.85.168%202.22.208%206.68.208%206.68l-18.162-5.01s-.022-2.924%200-4.385z'%20fill='%23fff'/%3e%3cpath%20d='M84.933%20197.245c-.417-1.67-1.879-17.12-1.879-17.12l6.263-20.667%2013.988-37.16%2010.856-29.227s12.646%201.502%2016.342%203.44c19.493%208.306%2020.044%2047.614%2020.074%2068.767-5.877-.923-11.764-1.125-19.817-2.083%201.23-10.42%201.23-20.125.102-28.371l-3.132%2016.075s.188%203.226.25%205.219c.061%201.929.168%205.219.168%205.219l.626%207.098%204.384%207.307-1.879%204.384-24.008%207.933z'%20fill='%23fff'/%3e%3cpath%20d='M73.45%20162.798l5.429%206.472-9.186%205.01-8.454%209.384%201.253%204.801c9.339-11.99%2016.387-19.195%2032.025-10.954%207.72-.307%2012.095-1.021%2018.182-1.143%2010.887%203.184%2015.943%206.262%2023.173%2015.24l2.923-2.923c-7.516-8.56-12.567-11.724-21.294-14.613l8.56-2.088%202.713-3.549-.626-7.098-7.724%204.593-8.769-.418-14.196.418-7.933-.626-3.967-2.714-6.471-2.714-3.758-4.176z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";var oe=g('<div class="flex flex-col gap-4">'),se=g('<div data-testid=SimpleButton-ShowCase class="flex items-center gap-4"><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><div>');const ce=()=>(()=>{var e=b(oe);return t(e,l(M,{each:E,children:i=>l(M,{each:J,children:a=>l($e,{size:i,color:a})})})),e})(),$e=e=>(()=>{var i=b(se),a=i.firstChild,[r,d]=n(a.nextSibling),s=r.nextSibling,[$,h]=n(s.nextSibling),o=$.nextSibling,[c,m]=n(o.nextSibling),p=c.nextSibling,[u,x]=n(p.nextSibling),S=u.nextSibling,[_,P]=n(S.nextSibling),y=_.nextSibling;return t(i,l(I,f(e,{label:"Print",href:"#"})),r,d),t(i,l(I,f(e,{label:"Print",icon:w,href:"#"})),$,h),t(i,l(I,f(e,{label:"Print",hideLabel:!0,icon:w,href:"#"})),c,m),t(i,l(I,f(e,{label:"Aikido",hideLabel:!0,icon:q,href:"#"})),u,x),t(i,l(I,f(e,{icon:q,label:"Aikido",href:"#"})),_,P),t(y,()=>JSON.stringify(e)),i})();var de=g('<div class="flex flex-col gap-4">'),be=g('<div data-testid=SimpleButton-ShowCase class="flex items-center gap-4 border-b pb-4"><div class=w-full><div class="flex gap-4 pb-4"><div></div><div>clicked</div></div><div class="flex gap-4 items-center mb-4"><!$><!/><!$><!/><!$><!/></div><div class="grid grid-cols-3 gap-4"><!$><!/><!$><!/><!$><!/>');const ge=()=>(()=>{var e=b(de);return t(e,l(M,{each:E,children:i=>l(M,{each:J,children:a=>l(ue,{buttonProps:{size:i,color:a},grid:!1})})})),e})(),ue=e=>{const[i,a]=D(!1),r=()=>{a(!0),setTimeout(()=>a(!1),100)};return(()=>{var d=b(be),s=d.firstChild,$=s.firstChild,h=$.firstChild,o=h.nextSibling,c=$.nextSibling,m=c.firstChild,[p,u]=n(m.nextSibling),x=p.nextSibling,[S,_]=n(x.nextSibling),P=S.nextSibling,[y,L]=n(P.nextSibling),C=c.nextSibling,B=C.firstChild,[T,N]=n(B.nextSibling),A=T.nextSibling,[k,O]=n(A.nextSibling),j=k.nextSibling,[F,z]=n(j.nextSibling);return t(h,()=>JSON.stringify(e.buttonProps)),t(c,l(v,f(()=>e.buttonProps,{label:"Print",onClick:r})),p,u),t(c,l(v,f(()=>e.buttonProps,{label:"Print",icon:w,onClick:r})),S,_),t(c,l(v,f(()=>e.buttonProps,{label:"Print",hideLabel:!0,icon:w,onClick:r})),y,L),t(C,l(v,f(()=>e.buttonProps,{label:"Print",onClick:r})),T,N),t(C,l(v,f(()=>e.buttonProps,{label:"Print",icon:w,onClick:r})),k,O),t(C,l(v,f(()=>e.buttonProps,{label:"Print",hideLabel:!0,icon:w,onClick:r})),F,z),H(()=>V(o,Y("text-black text-xs p-1 w-20 mb-4",i()?"bg-primary":"bg-black duration-1000 transition-colors"))),d})()};var he=g("<table><thead><tr><th>Color</th><th>-darkest</th><th>-dark</th><th></th><th>-light</th><th>-lightest</th></tr><!$><!/></thead><tbody>"),_e=g("<tr><td></td><!$><!/>"),fe=g("<td class=relative><div>");const me={primary:["bg-primary-darkest","bg-primary-dark","bg-primary","bg-primary-light","bg-primary-lightest"],secondary:["bg-secondary-darkest","bg-secondary-dark","bg-secondary","bg-secondary-light","bg-secondary-lightest"],info:["bg-info-darkest","bg-info-dark","bg-info","bg-info-light","bg-info-lightest"]},pe=()=>(()=>{var e=b(he),i=e.firstChild,a=i.firstChild,r=a.nextSibling,[d,s]=n(r.nextSibling);return t(i,l(G,{object:me,children:($,h)=>(()=>{var o=b(_e),c=o.firstChild,m=c.nextSibling,[p,u]=n(m.nextSibling);return t(c,$),t(o,l(M,{each:h,children:x=>(()=>{var S=b(fe),_=S.firstChild;return H(()=>V(_,Y(x,"w-32 h-8 inset-4"))),S})()}),p,u),o})()}),d,s),e})(),xe="/_astro/playArrayBuffer.fixture.D9jk8p3Y.mp3";function Se(e){return new Promise(i=>setTimeout(i,e))}var ve=g('<div><!$><!/><div class="grid grid-cols-3 gap-2 items-center py-2 md:w-1/2"><!$><!/><!$><!/><!$><!/><div>'),ye=g("<div>Error while loading mp3: <!$><!/>"),Ce=g('<ol><li>Press the play button<ul><li>The text "ai hamni katate dori" should be played</li><li>During playback, "playing" should be shownw</li><li>After playback, "playing" should disappear</li></ul></li><li>Press "play" and then "stop"<ul><li>The text "ai hamni katate dori" should be played</li><li>On pressing stop, the playback should be stopped</li></ul></li><li>Press "play" multiple times, before the playback is finished"<ul><li>The text "ai hamni katate dori" should be played</li><li>On pressing "play" again, the previous playback should be stopped');async function ke(){const e=await fetch(xe);return await Se(1e3),await e.arrayBuffer()}const we=()=>{let e=new AbortController;const[i,a]=D(0),r=()=>{e.abort(),e=new AbortController},d=async o=>{r(),a(c=>c+1),await Z(o,{abortSignal:e.signal}),a(c=>c-1)},[s,{refetch:$}]=Q(ke,{ssrLoadFrom:"initial",onHydrated(){$()}});function h(){const o=s();o!=null&&d(o)}return(()=>{var o=b(ve),c=o.firstChild,[m,p]=n(c.nextSibling),u=m.nextSibling,x=u.firstChild,[S,_]=n(x.nextSibling),P=S.nextSibling,[y,L]=n(P.nextSibling),C=y.nextSibling,[B,T]=n(C.nextSibling),N=B.nextSibling;return t(o,l(Pe,{}),m,p),t(u,l(v,{get disabled(){return s.loading||s.error},get label(){return s.loading?"Loading...":"Play"},onClick:h}),S,_),t(u,l(v,{get disabled(){return s.loading||s.error},label:"Stop",onClick:()=>r()}),y,L),t(u,(()=>{var A=U(()=>!!s.error);return()=>A()&&(()=>{var k=b(ye),O=k.firstChild,j=O.nextSibling,[F,z]=n(j.nextSibling);return t(k,()=>s.error,F,z),k})()})(),B,T),t(N,()=>i()>0&&"Playing"),o})()},Pe=()=>b(Ce);var Be=g("<div>"),Me=g("<div><a><h1></h1></a><div>");const Te=Object.assign({"/src/components/solid/atoms/CheckButton.manual-test.tsx":le,"/src/components/solid/atoms/DelayIndicator.manual-test.tsx":ae,"/src/components/solid/atoms/LinkButton.manual-test.tsx":ce,"/src/components/solid/atoms/SimpleButton.manual-test.tsx":ge,"/src/components/solid/colors.manual-test.tsx":pe,"/src/core/playArrayBuffer/playArrayBuffer.manual-test.tsx":we}),je=()=>(()=>{var e=b(Be);return t(e,l(G,{object:Te,children:(i,a)=>{const r=i.replace(/\W/g,"_");return(()=>{var d=b(Me),s=d.firstChild,$=s.firstChild,h=s.nextSibling;return K(s,"href",`#${r}`),K($,"id",r),t($,i),t(h,l(a,{})),d})()}})),e})();export{je as ManualTests};