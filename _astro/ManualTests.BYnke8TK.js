import{g as u,i as t,c as l,F as P,a as D,b as a,m as f,t as h,d as V,e as Y,f as Q,h as U,s as K}from"./web.BNk9p1T7.js";import{b as E,a as J,C as j,S as y,c as q}from"./index.browser.ByjWbkVB.js";import{I as w,L as O,F as G}from"./ForEntries.CUG-2f2P.js";import{D as X,p as Z}from"./playArrayBuffer.BlwDUVtI.js";var ee=h('<div class="flex flex-col gap-4">'),te=h('<div data-testid=CheckButton-ShowCase class="flex items-center gap-4"><!$><!/><!$><!/><!$><!/><div>');const le=()=>(()=>{var e=u(ee);return t(e,l(P,{each:E,children:i=>l(P,{each:J,children:r=>[l(W,{size:i,color:r,value:!1}),l(W,{size:i,color:r,value:!0})]})})),e})(),W=e=>{const[i,r]=D(e.value);return(()=>{var n=u(te),$=n.firstChild,[s,b]=a($.nextSibling),d=s.nextSibling,[c,o]=a(d.nextSibling),p=c.nextSibling,[m,g]=a(p.nextSibling),x=m.nextSibling;return t(n,l(j,f(e,{label:"5th Kyu",onChange:r,get value(){return i()}})),s,b),t(n,l(j,f(e,{icon:w,label:"5th Kyu",onChange:r,get value(){return i()}})),c,o),t(n,l(j,f(e,{icon:w,label:"5th Kyu",hideLabel:!0,onChange:r,get value(){return i()}})),m,g),t(x,()=>JSON.stringify(e)),n})()};var ie=h('<div><!$><!/><!$><!/><div class="flex items-center gap-4 mt-4"><!$><!/><!$><!/><!$><!/>'),ne=h('<div><ul><li>Click the button</li><li>The bar above the button should animate from empty to filled</li><li>While the animation is in progress, the button should be disabled</li><li>While the animation is in progress, the label should change from "Stopped" to "Running"</li><li>Clicking the disabled button should change display to gray');const ae=()=>{const[e,i]=D({animateDelay:async()=>{}}),[r,n]=D(!1),[$,s]=D(!1);async function b(){n(!0),await e().animateDelay(1),n(!1)}return(()=>{var d=u(ie),c=d.firstChild,[o,p]=a(c.nextSibling),m=o.nextSibling,[g,x]=a(m.nextSibling),_=g.nextSibling,S=_.firstChild,[C,k]=a(S.nextSibling),A=C.nextSibling,[v,B]=a(A.nextSibling),M=v.nextSibling,[L,N]=a(M.nextSibling);return t(d,l(re,{}),o,p),t(d,l(X,{setDelayControl:i,get disabled(){return $()}}),g,x),t(_,l(y,{label:"Start animation",onClick:()=>b(),get disabled(){return r()}}),C,k),t(_,()=>r()?"Running":"Stopped",v,B),t(_,l(j,{get value(){return $()},onChange:s,label:"Disabled"}),L,N),d})()},re=()=>u(ne),H="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20144.387%20144.387'%20height='512'%20width='512'%3e%3cg%20transform='translate(-30.238%20-77.774)'%20stroke='%23000'%3e%3ccircle%20r='72.193'%20cy='149.967'%20cx='102.432'%20fill='%23b6cbaa'%20fill-rule='evenodd'%20stroke-width='.5'%20stroke-linejoin='round'/%3e%3cg%20stroke-width='.265'%3e%3cpath%20d='M94.536%2093.697c5.163-2.967%2010.935-4.713%2019.625-.626l6.511%2037.554-29.934%201.87z'%20fill='%23fff'/%3e%3cpath%20d='M51.322%20156.744c.07-4.733-1.504-6.204.417-14.196%201.921-7.991%2010.893-24.9%2015.031-31.732%204.139-6.833%204.266-7.72%207.725-10.23%205.718-4.147%2020.041-6.889%2020.041-6.889l7.307%2035.7%209.812%2036.115-5.845%2026.722-36.743-22.338%204.384-7.098%201.879-7.098c.503-5.08.519-10.132.417-15.24l-.417-9.811s-3.914%208.934-4.681%2013.96c-.767%205.027-1.68%2010.795-1.373%2014.85.168%202.22.208%206.68.208%206.68l-18.162-5.01s-.022-2.924%200-4.385z'%20fill='%23fff'/%3e%3cpath%20d='M84.933%20197.245c-.417-1.67-1.879-17.12-1.879-17.12l6.263-20.667%2013.988-37.16%2010.856-29.227s12.646%201.502%2016.342%203.44c19.493%208.306%2020.044%2047.614%2020.074%2068.767-5.877-.923-11.764-1.125-19.817-2.083%201.23-10.42%201.23-20.125.102-28.371l-3.132%2016.075s.188%203.226.25%205.219c.061%201.929.168%205.219.168%205.219l.626%207.098%204.384%207.307-1.879%204.384-24.008%207.933z'%20fill='%23fff'/%3e%3cpath%20d='M73.45%20162.798l5.429%206.472-9.186%205.01-8.454%209.384%201.253%204.801c9.339-11.99%2016.387-19.195%2032.025-10.954%207.72-.307%2012.095-1.021%2018.182-1.143%2010.887%203.184%2015.943%206.262%2023.173%2015.24l2.923-2.923c-7.516-8.56-12.567-11.724-21.294-14.613l8.56-2.088%202.713-3.549-.626-7.098-7.724%204.593-8.769-.418-14.196.418-7.933-.626-3.967-2.714-6.471-2.714-3.758-4.176z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";var se=h('<div class="flex flex-col gap-4">'),oe=h('<div data-testid=SimpleButton-ShowCase class="flex items-center gap-4"><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><div>');const ce=()=>(()=>{var e=u(se);return t(e,l(P,{each:E,children:i=>l(P,{each:J,children:r=>l(de,{size:i,color:r})})})),e})(),de=e=>(()=>{var i=u(oe),r=i.firstChild,[n,$]=a(r.nextSibling),s=n.nextSibling,[b,d]=a(s.nextSibling),c=b.nextSibling,[o,p]=a(c.nextSibling),m=o.nextSibling,[g,x]=a(m.nextSibling),_=g.nextSibling,[S,C]=a(_.nextSibling),k=S.nextSibling;return t(i,l(O,f(e,{label:"Print",href:"#"})),n,$),t(i,l(O,f(e,{label:"Print",icon:w,href:"#"})),b,d),t(i,l(O,f(e,{label:"Print",hideLabel:!0,icon:w,href:"#"})),o,p),t(i,l(O,f(e,{label:"Aikido",hideLabel:!0,icon:H,href:"#"})),g,x),t(i,l(O,f(e,{icon:H,label:"Aikido",href:"#"})),S,C),t(k,()=>JSON.stringify(e)),i})();var $e=h('<div class="flex flex-col gap-4">'),be=h('<div data-testid=SimpleButton-ShowCase class="flex items-center gap-4 border-b pb-4"><div class=w-full><div class="flex gap-4 pb-4"><div></div><div>clicked</div></div><div class="flex gap-4 items-center mb-4"><!$><!/><!$><!/><!$><!/></div><div class="grid grid-cols-3 gap-4"><!$><!/><!$><!/><!$><!/>');const ge=()=>(()=>{var e=u($e);return t(e,l(P,{each:E,children:i=>l(P,{each:J,children:r=>l(ue,{buttonProps:{size:i,color:r},grid:!1})})})),e})(),ue=e=>{const[i,r]=D(!1),n=()=>{r(!0),setTimeout(()=>r(!1),100)};return(()=>{var $=u(be),s=$.firstChild,b=s.firstChild,d=b.firstChild,c=d.nextSibling,o=b.nextSibling,p=o.firstChild,[m,g]=a(p.nextSibling),x=m.nextSibling,[_,S]=a(x.nextSibling),C=_.nextSibling,[k,A]=a(C.nextSibling),v=o.nextSibling,B=v.firstChild,[M,L]=a(B.nextSibling),N=M.nextSibling,[T,F]=a(N.nextSibling),I=T.nextSibling,[R,z]=a(I.nextSibling);return t(d,()=>JSON.stringify(e.buttonProps)),t(o,l(y,f(()=>e.buttonProps,{label:"Print",onClick:n})),m,g),t(o,l(y,f(()=>e.buttonProps,{label:"Print",icon:w,onClick:n})),_,S),t(o,l(y,f(()=>e.buttonProps,{label:"Print",hideLabel:!0,icon:w,onClick:n})),k,A),t(v,l(y,f(()=>e.buttonProps,{label:"Print",onClick:n})),M,L),t(v,l(y,f(()=>e.buttonProps,{label:"Print",icon:w,onClick:n})),T,F),t(v,l(y,f(()=>e.buttonProps,{label:"Print",hideLabel:!0,icon:w,onClick:n})),R,z),V(()=>Y(c,q("text-black text-xs p-1 w-20 mb-4",i()?"bg-primary":"bg-black duration-1000 transition-colors"))),$})()};var he=h("<table><thead><tr><th>Color</th><th>-darkest</th><th>-dark</th><th></th><th>-light</th><th>-lightest</th></tr><!$><!/></thead><tbody>"),_e=h("<tr><td></td><!$><!/>"),fe=h("<td class=relative><div>");const me={primary:["bg-primary-darkest","bg-primary-dark","bg-primary","bg-primary-light","bg-primary-lightest"],secondary:["bg-secondary-darkest","bg-secondary-dark","bg-secondary","bg-secondary-light","bg-secondary-lightest"],info:["bg-info-darkest","bg-info-dark","bg-info","bg-info-light","bg-info-lightest"]},pe=()=>(()=>{var e=u(he),i=e.firstChild,r=i.firstChild,n=r.nextSibling,[$,s]=a(n.nextSibling);return t(i,l(G,{object:me,children:(b,d)=>(()=>{var c=u(_e),o=c.firstChild,p=o.nextSibling,[m,g]=a(p.nextSibling);return t(o,b),t(c,l(P,{each:d,children:x=>(()=>{var _=u(fe),S=_.firstChild;return V(()=>Y(S,q(x,"w-32 h-8 inset-4"))),_})()}),m,g),c})()}),$,s),e})(),xe="/_astro/playArrayBuffer.fixture.D9jk8p3Y.mp3";function Se(e){return new Promise(i=>setTimeout(i,e))}var ve=h('<div><!$><!/><div class="grid grid-cols-3 gap-2 items-center py-2 md:w-1/2"><!$><!/><!$><!/><!$><!/><div>'),ye=h("<div>Error while loading mp3: <!$><!/>"),Ce=h('<ol><li>Press the play button<ul><li>The text "ai hamni katate dori" should be played</li><li>During playback, "playing" should be shownw</li><li>After playback, "playing" should disappear</li></ul></li><li>Press "play" and then "stop"<ul><li>The text "ai hamni katate dori" should be played</li><li>On pressing stop, the playback should be stopped</li></ul></li><li>Press "play" multiple times, before the playback is finished"<ul><li>The text "ai hamni katate dori" should be played</li><li>On pressing "play" again, the previous playback should be stopped');async function ke(){const e=await fetch(xe);return await Se(1e3),await e.arrayBuffer()}const we=()=>{let e=new AbortController;const[i,r]=D(0),n=()=>{e.abort(),e=new AbortController},$=async c=>{n(),r(o=>o+1),await Z(c,{abortSignal:e.signal}),r(o=>o-1)},[s,{refetch:b}]=Q(ke,{ssrLoadFrom:"initial",onHydrated(){b()}});function d(){const c=s();c!=null&&$(c)}return(()=>{var c=u(ve),o=c.firstChild,[p,m]=a(o.nextSibling),g=p.nextSibling,x=g.firstChild,[_,S]=a(x.nextSibling),C=_.nextSibling,[k,A]=a(C.nextSibling),v=k.nextSibling,[B,M]=a(v.nextSibling),L=B.nextSibling;return t(c,l(Pe,{}),p,m),t(g,l(y,{get disabled(){return s.loading||s.error},get label(){return s.loading?"Loading...":"Play"},onClick:d}),_,S),t(g,l(y,{get disabled(){return s.loading||s.error},label:"Stop",onClick:()=>n()}),k,A),t(g,(()=>{var N=U(()=>!!s.error);return()=>N()&&(()=>{var T=u(ye),F=T.firstChild,I=F.nextSibling,[R,z]=a(I.nextSibling);return t(T,()=>s.error,R,z),T})()})(),B,M),t(L,()=>i()>0&&"Playing"),c})()},Pe=()=>u(Ce);var Be=h("<div>"),Me=h("<div><a><h1></h1></a><div>");const Te=Object.assign({"/src/components/solid/atoms/CheckButton.manual-test.tsx":le,"/src/components/solid/atoms/DelayIndicator.manual-test.tsx":ae,"/src/components/solid/atoms/LinkButton.manual-test.tsx":ce,"/src/components/solid/atoms/SimpleButton.manual-test.tsx":ge,"/src/components/solid/colors.manual-test.tsx":pe,"/src/core/playArrayBuffer/playArrayBuffer.manual-test.tsx":we}),Oe=()=>(()=>{var e=u(Be);return t(e,l(G,{object:Te,children:(i,r)=>{const n=i.replace(/\W/g,"_");return(()=>{var $=u(Me),s=$.firstChild,b=s.firstChild,d=s.nextSibling;return K(s,"href",`#${n}`),K(b,"id",n),t(b,i),t(d,l(r,{})),$})()}})),e})();export{Oe as ManualTests};
