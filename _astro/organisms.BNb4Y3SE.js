import{g as A,k as $r,j as me,t as C,b as x,i as g,c as v,a as he,M as je,n as Qr,F as et,A as rt,o as _r,z as pr,d as tt,m as j,l as Le,e as Fe,B as at,f as nt,s as De,C as it}from"./web.DjMvNhE5.js";import{t as y,u as st,y as ot,c as Re,a as ct}from"./usePersistentStore.ilyrE2dp.js";import{S as Ge,Y as ut,c as lt}from"./techniqueStore.CNWq4NAF.js";import{F as J,I as ft,L as vt}from"./ForEntries.DhPGie-1.js";import{C as Se}from"./CheckButton.D93g18Ws.js";import{n as dt,S as ge}from"./index.browser.zlpC9tFZ.js";import{c as K,a as br}from"./_commonjsHelpers.C4iS2aBk.js";var ht=C('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M10.59 9.17 5.41 4 4 5.41l5.17 5.17zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04z">');const gt=(e={})=>(()=>{var r=A(ht);return $r(r,e,!0,!0),me(),r})();var $t=C('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14">');const _t=(e={})=>(()=>{var r=A($t);return $r(r,e,!0,!0),me(),r})(),pt=["suwari waza","hanmi handachi waza","tachi waza","tanto dori","jo nage","jo dori","tachi dori"];function bt(e){const r={};for(const t of e)yt(r,t);return r}function yt(e,r){const t=oe(e,r.execution,ce),a=oe(t,r.attack,ce),n=oe(a,r.defence,ce);n[r.direction]=r.metadata}function oe(e,r,t){const a=e[r];if(a!=null)return a;const n=t();return e[r]=n,n}function ce(){return{}}var mt=C('<div><!$><!/><div class="mt-8 border-secondary border-t text-sm hidden print:block">'),St=C('<div><h2 class="border-b border-1 border-secondary break-after-avoid"></h2><div>'),At=C('<div class="grid grid-cols-3 mt-4 break-inside-avoid"><div></div><div class="col-span-2 md:flex flex-wrap">'),Ct=C("<div class=md:me-6><span></span>&nbsp;<!$><!/>"),xt=C("<span><!$><!/><!$><!/>"),Tt=C("<span class=print:hidden>");const wt=e=>(()=>{var r=A(mt),t=r.firstChild,[a,n]=x(t.nextSibling),i=a.nextSibling;return g(r,v(J,{get object(){return bt(e.techniques)},children:(s,o)=>(()=>{var c=A(St),u=c.firstChild,f=u.nextSibling;return g(u,s),g(f,v(J,{object:o,children:(h,l)=>(()=>{var _=A(At),$=_.firstChild,p=$.nextSibling;return g($,h),g(p,v(J,{object:l,children:(m,S)=>(()=>{var b=A(Ct),E=b.firstChild,w=E.nextSibling,P=w.nextSibling,[ne,ie]=x(P.nextSibling);return g(E,m),g(b,v(Ot,{directions:S}),ne,ie),b})()})),_})()})),c})()}),a,n),g(i,()=>y("examChooser.created-by",{url:window.location.origin})),r})(),Ot=e=>{const r=he(()=>Object.keys(e.directions)),t=he(()=>r().length===1&&r()[0]===Ge);return v(Qr,{get children(){return[v(je,{get when(){return t()},get children(){return v(Ne,{get metadata(){return e.directions[Ge]}})}}),v(je,{get when(){return!t()},get children(){return v(J,{get object(){return e.directions},separator:",",children:(a,n)=>(()=>{var i=A(xt),s=i.firstChild,[o,c]=x(s.nextSibling),u=o.nextSibling,[f,h]=x(u.nextSibling);return g(i,a,o,c),g(i,v(Ne,{metadata:n}),f,h),i})()})}})]}})},Ne=e=>{const r=st(ot,!1),t=e.metadata.youtube==null?[]:Array.isArray(e.metadata.youtube)?e.metadata.youtube:[e.metadata.youtube];return v(rt,{get when(){return r()},get children(){var a=A(Tt);return g(a,v(et,{each:t,children:n=>v(ut,{type:"icon",class:"inline mx-2",link:n})})),a}})},Pt=e=>{function r(t,a){const n=new Set(e.value);a?n.add(t):n.delete(t),e.onChange(n)}return e.options.map(({id:t,label:a,wide:n})=>v(Se,{class:n?"col-span-2":"",get value(){return e.value.has(t)},label:a,onChange:i=>r(t,i)}))};function ue([e,r],{name:t,storage:a,serialize:n=JSON.stringify,deserialize:i=JSON.parse}){const s=a??localStorage,o=s.getItem(t);return setTimeout(()=>{o!=null&&r(i(o))}),_r(()=>{pr(()=>{s.setItem(t,n(e()))})}),[e,r]}var Et=C('<div><header class="text-sm font-bold flex items-center pb-4 rounded gap-4"><div class="border-t border-secondary flex-1"></div><div class=""></div><div class="border-t flex-1 border-secondary"></div></header><div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 mb-4">');const le=e=>(()=>{var r=A(Et),t=r.firstChild,a=t.firstChild,n=a.nextSibling,i=t.nextSibling;return g(n,()=>e.headerLabel),g(i,()=>e.children),r})(),It=e=>v(Se,{get label(){return y("examChooser.filters.kneeFriendly")},get value(){return e.value.kneeFriendly??!1},onChange:r=>e.onChange({kneeFriendly:r})});var Mt=C("<div><input type=range min=1 max=100><label>");const jt=e=>{function r(o,c){e.onChange({...e.value,[o]:c})}const t=dt(),[a,n]=j(!1),[i,s]=j(e.value.includePercent);return pr(()=>s(e.value.includePercent)),_r(()=>{n(!0)}),[v(Se,{get label(){return y("examChooser.order.randomize")},get value(){return e.value.randomize},onChange:o=>r("randomize",o)}),v(ge,{color:"secondary",icon:gt,get label(){return y("examChooser.order.shuffle")},get disabled(){return!e.value.randomize},get onClick(){return e.onForceRefresh}}),(()=>{var o=A(Mt),c=o.firstChild,u=c.nextSibling;return c.addEventListener("change",f=>r("includePercent",Number(f.target.value))),c.$$input=f=>s(Number(f.target.value)),Le(c,"id",t),Le(u,"for",t),g(u,()=>y("examChooser.order.includePercent",{percent:i()})),Fe(f=>{var h={"flex flex-col justify-center col-span-2 items-center transition-opacity duration-200":!0,"text-secondary-light":!e.value.randomize,"opacity-0":!a(),"opacity-100":a()},l=`w-2/3 ${a()?"opacity-100":"opacity-0"} accent-primary`,_=!a||!e.value.randomize;return f.e=at(o,h,f.e),l!==f.t&&nt(c,f.t=l),_!==f.a&&De(c,"disabled",f.a=_),f},{e:void 0,t:void 0,a:void 0}),Fe(()=>De(c,"value",i())),me(),o})()]};tt(["input"]);function Lt(e){const r=[];for(const t of e)for(const[a,n]of k(t.techniques))for(const[i,s]of k(n))for(const[o,c]of k(s))for(const[u,f]of k(c))r.push({execution:a,attack:i,defence:o,direction:u,metadata:f});return r}const k=Object.entries,Ft={kneeFriendly:{filter:e=>e.execution!=="suwari waza"&&e.execution!=="hanmi handachi waza"}};function Dt(e){return r=>!e.kneeFriendly||Ft.kneeFriendly.filter(r)}function Rt(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}var Gt=Rt,Nt=Math.floor,zt=Math.random;function Bt(e,r){return e+Nt(zt()*(r-e+1))}var Ht=Bt,Kt=Ht;function kt(e,r){var t=-1,a=e.length,n=a-1;for(r=r===void 0?a:r;++t<r;){var i=Kt(t,n),s=e[i];e[i]=e[t],e[t]=s}return e.length=r,e}var yr=kt,qt=Gt,Ut=yr;function Jt(e){return Ut(qt(e))}var Yt=Jt;function Wt(e,r){for(var t=-1,a=e==null?0:e.length,n=Array(a);++t<a;)n[t]=r(e[t],t,e);return n}var mr=Wt,Xt=mr;function Zt(e,r){return Xt(r,function(t){return e[t]})}var Vt=Zt;function Qt(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}var ea=Qt,ra=typeof K=="object"&&K&&K.Object===Object&&K,Sr=ra,ta=Sr,aa=typeof self=="object"&&self&&self.Object===Object&&self,na=ta||aa||Function("return this")(),O=na,ia=O,sa=ia.Symbol,Z=sa,ze=Z,Ar=Object.prototype,oa=Ar.hasOwnProperty,ca=Ar.toString,N=ze?ze.toStringTag:void 0;function ua(e){var r=oa.call(e,N),t=e[N];try{e[N]=void 0;var a=!0}catch{}var n=ca.call(e);return a&&(r?e[N]=t:delete e[N]),n}var la=ua,fa=Object.prototype,va=fa.toString;function da(e){return va.call(e)}var ha=da,Be=Z,ga=la,$a=ha,_a="[object Null]",pa="[object Undefined]",He=Be?Be.toStringTag:void 0;function ba(e){return e==null?e===void 0?pa:_a:He&&He in Object(e)?ga(e):$a(e)}var z=ba;function ya(e){return e!=null&&typeof e=="object"}var B=ya,ma=z,Sa=B,Aa="[object Arguments]";function Ca(e){return Sa(e)&&ma(e)==Aa}var xa=Ca,Ke=xa,Ta=B,Cr=Object.prototype,wa=Cr.hasOwnProperty,Oa=Cr.propertyIsEnumerable,Pa=Ke(function(){return arguments}())?Ke:function(e){return Ta(e)&&wa.call(e,"callee")&&!Oa.call(e,"callee")},xr=Pa,Ea=Array.isArray,T=Ea,Y={exports:{}};function Ia(){return!1}var Ma=Ia;Y.exports;(function(e,r){var t=O,a=Ma,n=r&&!r.nodeType&&r,i=n&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===n,o=s?t.Buffer:void 0,c=o?o.isBuffer:void 0,u=c||a;e.exports=u})(Y,Y.exports);var Tr=Y.exports,ja=9007199254740991,La=/^(?:0|[1-9]\d*)$/;function Fa(e,r){var t=typeof e;return r=r??ja,!!r&&(t=="number"||t!="symbol"&&La.test(e))&&e>-1&&e%1==0&&e<r}var wr=Fa,Da=9007199254740991;function Ra(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Da}var Ae=Ra,Ga=z,Na=Ae,za=B,Ba="[object Arguments]",Ha="[object Array]",Ka="[object Boolean]",ka="[object Date]",qa="[object Error]",Ua="[object Function]",Ja="[object Map]",Ya="[object Number]",Wa="[object Object]",Xa="[object RegExp]",Za="[object Set]",Va="[object String]",Qa="[object WeakMap]",en="[object ArrayBuffer]",rn="[object DataView]",tn="[object Float32Array]",an="[object Float64Array]",nn="[object Int8Array]",sn="[object Int16Array]",on="[object Int32Array]",cn="[object Uint8Array]",un="[object Uint8ClampedArray]",ln="[object Uint16Array]",fn="[object Uint32Array]",d={};d[tn]=d[an]=d[nn]=d[sn]=d[on]=d[cn]=d[un]=d[ln]=d[fn]=!0;d[Ba]=d[Ha]=d[en]=d[Ka]=d[rn]=d[ka]=d[qa]=d[Ua]=d[Ja]=d[Ya]=d[Wa]=d[Xa]=d[Za]=d[Va]=d[Qa]=!1;function vn(e){return za(e)&&Na(e.length)&&!!d[Ga(e)]}var dn=vn;function hn(e){return function(r){return e(r)}}var gn=hn,W={exports:{}};W.exports;(function(e,r){var t=Sr,a=r&&!r.nodeType&&r,n=a&&!0&&e&&!e.nodeType&&e,i=n&&n.exports===a,s=i&&t.process,o=function(){try{var c=n&&n.require&&n.require("util").types;return c||s&&s.binding&&s.binding("util")}catch{}}();e.exports=o})(W,W.exports);var $n=W.exports,_n=dn,pn=gn,ke=$n,qe=ke&&ke.isTypedArray,bn=qe?pn(qe):_n,Or=bn,yn=ea,mn=xr,Sn=T,An=Tr,Cn=wr,xn=Or,Tn=Object.prototype,wn=Tn.hasOwnProperty;function On(e,r){var t=Sn(e),a=!t&&mn(e),n=!t&&!a&&An(e),i=!t&&!a&&!n&&xn(e),s=t||a||n||i,o=s?yn(e.length,String):[],c=o.length;for(var u in e)(r||wn.call(e,u))&&!(s&&(u=="length"||n&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Cn(u,c)))&&o.push(u);return o}var Pn=On,En=Object.prototype;function In(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||En;return e===t}var Mn=In;function jn(e,r){return function(t){return e(r(t))}}var Ln=jn,Fn=Ln,Dn=Fn(Object.keys,Object),Rn=Dn,Gn=Mn,Nn=Rn,zn=Object.prototype,Bn=zn.hasOwnProperty;function Hn(e){if(!Gn(e))return Nn(e);var r=[];for(var t in Object(e))Bn.call(e,t)&&t!="constructor"&&r.push(t);return r}var Kn=Hn;function kn(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var Ce=kn,qn=z,Un=Ce,Jn="[object AsyncFunction]",Yn="[object Function]",Wn="[object GeneratorFunction]",Xn="[object Proxy]";function Zn(e){if(!Un(e))return!1;var r=qn(e);return r==Yn||r==Wn||r==Jn||r==Xn}var Pr=Zn,Vn=Pr,Qn=Ae;function ei(e){return e!=null&&Qn(e.length)&&!Vn(e)}var Er=ei,ri=Pn,ti=Kn,ai=Er;function ni(e){return ai(e)?ri(e):ti(e)}var V=ni,ii=Vt,si=V;function oi(e){return e==null?[]:ii(e,si(e))}var ci=oi,ui=yr,li=ci;function fi(e){return ui(li(e))}var vi=fi,di=Yt,hi=vi,gi=T;function $i(e){var r=gi(e)?di:hi;return r(e)}var _i=$i;const pi=br(_i);function bi(e){return pi(e)}function yi(e,{includePercent:r=100}={}){const t=bi(e),a=Math.ceil(r*e.length/100);return t.slice(0,a)}var mi=O,Si=mi["__core-js_shared__"],Ai=Si,fe=Ai,Ue=function(){var e=/[^.]+$/.exec(fe&&fe.keys&&fe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ci(e){return!!Ue&&Ue in e}var xi=Ci,Ti=Function.prototype,wi=Ti.toString;function Oi(e){if(e!=null){try{return wi.call(e)}catch{}try{return e+""}catch{}}return""}var Ir=Oi,Pi=Pr,Ei=xi,Ii=Ce,Mi=Ir,ji=/[\\^$.*+?()[\]{}|]/g,Li=/^\[object .+?Constructor\]$/,Fi=Function.prototype,Di=Object.prototype,Ri=Fi.toString,Gi=Di.hasOwnProperty,Ni=RegExp("^"+Ri.call(Gi).replace(ji,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function zi(e){if(!Ii(e)||Ei(e))return!1;var r=Pi(e)?Ni:Li;return r.test(Mi(e))}var Bi=zi;function Hi(e,r){return e?.[r]}var Ki=Hi,ki=Bi,qi=Ki;function Ui(e,r){var t=qi(e,r);return ki(t)?t:void 0}var M=Ui,Ji=M,Yi=function(){try{var e=Ji(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Wi=Yi,Je=Wi;function Xi(e,r,t){r=="__proto__"&&Je?Je(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var Zi=Xi;function Vi(e,r,t,a){for(var n=-1,i=e==null?0:e.length;++n<i;){var s=e[n];r(a,s,t(s),e)}return a}var Qi=Vi;function es(e){return function(r,t,a){for(var n=-1,i=Object(r),s=a(r),o=s.length;o--;){var c=s[e?o:++n];if(t(i[c],c,i)===!1)break}return r}}var rs=es,ts=rs,as=ts(),ns=as,is=ns,ss=V;function os(e,r){return e&&is(e,r,ss)}var cs=os,us=Er;function ls(e,r){return function(t,a){if(t==null)return t;if(!us(t))return e(t,a);for(var n=t.length,i=r?n:-1,s=Object(t);(r?i--:++i<n)&&a(s[i],i,s)!==!1;);return t}}var fs=ls,vs=cs,ds=fs,hs=ds(vs),gs=hs,$s=gs;function _s(e,r,t,a){return $s(e,function(n,i,s){r(a,n,t(n),s)}),a}var ps=_s;function bs(){this.__data__=[],this.size=0}var ys=bs;function ms(e,r){return e===r||e!==e&&r!==r}var Mr=ms,Ss=Mr;function As(e,r){for(var t=e.length;t--;)if(Ss(e[t][0],r))return t;return-1}var Q=As,Cs=Q,xs=Array.prototype,Ts=xs.splice;function ws(e){var r=this.__data__,t=Cs(r,e);if(t<0)return!1;var a=r.length-1;return t==a?r.pop():Ts.call(r,t,1),--this.size,!0}var Os=ws,Ps=Q;function Es(e){var r=this.__data__,t=Ps(r,e);return t<0?void 0:r[t][1]}var Is=Es,Ms=Q;function js(e){return Ms(this.__data__,e)>-1}var Ls=js,Fs=Q;function Ds(e,r){var t=this.__data__,a=Fs(t,e);return a<0?(++this.size,t.push([e,r])):t[a][1]=r,this}var Rs=Ds,Gs=ys,Ns=Os,zs=Is,Bs=Ls,Hs=Rs;function L(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}L.prototype.clear=Gs;L.prototype.delete=Ns;L.prototype.get=zs;L.prototype.has=Bs;L.prototype.set=Hs;var ee=L,Ks=ee;function ks(){this.__data__=new Ks,this.size=0}var qs=ks;function Us(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}var Js=Us;function Ys(e){return this.__data__.get(e)}var Ws=Ys;function Xs(e){return this.__data__.has(e)}var Zs=Xs,Vs=M,Qs=O,eo=Vs(Qs,"Map"),xe=eo,ro=M,to=ro(Object,"create"),re=to,Ye=re;function ao(){this.__data__=Ye?Ye(null):{},this.size=0}var no=ao;function io(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var so=io,oo=re,co="__lodash_hash_undefined__",uo=Object.prototype,lo=uo.hasOwnProperty;function fo(e){var r=this.__data__;if(oo){var t=r[e];return t===co?void 0:t}return lo.call(r,e)?r[e]:void 0}var vo=fo,ho=re,go=Object.prototype,$o=go.hasOwnProperty;function _o(e){var r=this.__data__;return ho?r[e]!==void 0:$o.call(r,e)}var po=_o,bo=re,yo="__lodash_hash_undefined__";function mo(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=bo&&r===void 0?yo:r,this}var So=mo,Ao=no,Co=so,xo=vo,To=po,wo=So;function F(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}F.prototype.clear=Ao;F.prototype.delete=Co;F.prototype.get=xo;F.prototype.has=To;F.prototype.set=wo;var Oo=F,We=Oo,Po=ee,Eo=xe;function Io(){this.size=0,this.__data__={hash:new We,map:new(Eo||Po),string:new We}}var Mo=Io;function jo(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}var Lo=jo,Fo=Lo;function Do(e,r){var t=e.__data__;return Fo(r)?t[typeof r=="string"?"string":"hash"]:t.map}var te=Do,Ro=te;function Go(e){var r=Ro(this,e).delete(e);return this.size-=r?1:0,r}var No=Go,zo=te;function Bo(e){return zo(this,e).get(e)}var Ho=Bo,Ko=te;function ko(e){return Ko(this,e).has(e)}var qo=ko,Uo=te;function Jo(e,r){var t=Uo(this,e),a=t.size;return t.set(e,r),this.size+=t.size==a?0:1,this}var Yo=Jo,Wo=Mo,Xo=No,Zo=Ho,Vo=qo,Qo=Yo;function D(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}D.prototype.clear=Wo;D.prototype.delete=Xo;D.prototype.get=Zo;D.prototype.has=Vo;D.prototype.set=Qo;var Te=D,ec=ee,rc=xe,tc=Te,ac=200;function nc(e,r){var t=this.__data__;if(t instanceof ec){var a=t.__data__;if(!rc||a.length<ac-1)return a.push([e,r]),this.size=++t.size,this;t=this.__data__=new tc(a)}return t.set(e,r),this.size=t.size,this}var ic=nc,sc=ee,oc=qs,cc=Js,uc=Ws,lc=Zs,fc=ic;function R(e){var r=this.__data__=new sc(e);this.size=r.size}R.prototype.clear=oc;R.prototype.delete=cc;R.prototype.get=uc;R.prototype.has=lc;R.prototype.set=fc;var jr=R,vc="__lodash_hash_undefined__";function dc(e){return this.__data__.set(e,vc),this}var hc=dc;function gc(e){return this.__data__.has(e)}var $c=gc,_c=Te,pc=hc,bc=$c;function X(e){var r=-1,t=e==null?0:e.length;for(this.__data__=new _c;++r<t;)this.add(e[r])}X.prototype.add=X.prototype.push=pc;X.prototype.has=bc;var yc=X;function mc(e,r){for(var t=-1,a=e==null?0:e.length;++t<a;)if(r(e[t],t,e))return!0;return!1}var Sc=mc;function Ac(e,r){return e.has(r)}var Cc=Ac,xc=yc,Tc=Sc,wc=Cc,Oc=1,Pc=2;function Ec(e,r,t,a,n,i){var s=t&Oc,o=e.length,c=r.length;if(o!=c&&!(s&&c>o))return!1;var u=i.get(e),f=i.get(r);if(u&&f)return u==r&&f==e;var h=-1,l=!0,_=t&Pc?new xc:void 0;for(i.set(e,r),i.set(r,e);++h<o;){var $=e[h],p=r[h];if(a)var m=s?a(p,$,h,r,e,i):a($,p,h,e,r,i);if(m!==void 0){if(m)continue;l=!1;break}if(_){if(!Tc(r,function(S,b){if(!wc(_,b)&&($===S||n($,S,t,a,i)))return _.push(b)})){l=!1;break}}else if(!($===p||n($,p,t,a,i))){l=!1;break}}return i.delete(e),i.delete(r),l}var Lr=Ec,Ic=O,Mc=Ic.Uint8Array,jc=Mc;function Lc(e){var r=-1,t=Array(e.size);return e.forEach(function(a,n){t[++r]=[n,a]}),t}var Fc=Lc;function Dc(e){var r=-1,t=Array(e.size);return e.forEach(function(a){t[++r]=a}),t}var Rc=Dc,Xe=Z,Ze=jc,Gc=Mr,Nc=Lr,zc=Fc,Bc=Rc,Hc=1,Kc=2,kc="[object Boolean]",qc="[object Date]",Uc="[object Error]",Jc="[object Map]",Yc="[object Number]",Wc="[object RegExp]",Xc="[object Set]",Zc="[object String]",Vc="[object Symbol]",Qc="[object ArrayBuffer]",eu="[object DataView]",Ve=Xe?Xe.prototype:void 0,ve=Ve?Ve.valueOf:void 0;function ru(e,r,t,a,n,i,s){switch(t){case eu:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Qc:return!(e.byteLength!=r.byteLength||!i(new Ze(e),new Ze(r)));case kc:case qc:case Yc:return Gc(+e,+r);case Uc:return e.name==r.name&&e.message==r.message;case Wc:case Zc:return e==r+"";case Jc:var o=zc;case Xc:var c=a&Hc;if(o||(o=Bc),e.size!=r.size&&!c)return!1;var u=s.get(e);if(u)return u==r;a|=Kc,s.set(e,r);var f=Nc(o(e),o(r),a,n,i,s);return s.delete(e),f;case Vc:if(ve)return ve.call(e)==ve.call(r)}return!1}var tu=ru;function au(e,r){for(var t=-1,a=r.length,n=e.length;++t<a;)e[n+t]=r[t];return e}var nu=au,iu=nu,su=T;function ou(e,r,t){var a=r(e);return su(e)?a:iu(a,t(e))}var cu=ou;function uu(e,r){for(var t=-1,a=e==null?0:e.length,n=0,i=[];++t<a;){var s=e[t];r(s,t,e)&&(i[n++]=s)}return i}var lu=uu;function fu(){return[]}var vu=fu,du=lu,hu=vu,gu=Object.prototype,$u=gu.propertyIsEnumerable,Qe=Object.getOwnPropertySymbols,_u=Qe?function(e){return e==null?[]:(e=Object(e),du(Qe(e),function(r){return $u.call(e,r)}))}:hu,pu=_u,bu=cu,yu=pu,mu=V;function Su(e){return bu(e,mu,yu)}var Au=Su,er=Au,Cu=1,xu=Object.prototype,Tu=xu.hasOwnProperty;function wu(e,r,t,a,n,i){var s=t&Cu,o=er(e),c=o.length,u=er(r),f=u.length;if(c!=f&&!s)return!1;for(var h=c;h--;){var l=o[h];if(!(s?l in r:Tu.call(r,l)))return!1}var _=i.get(e),$=i.get(r);if(_&&$)return _==r&&$==e;var p=!0;i.set(e,r),i.set(r,e);for(var m=s;++h<c;){l=o[h];var S=e[l],b=r[l];if(a)var E=s?a(b,S,l,r,e,i):a(S,b,l,e,r,i);if(!(E===void 0?S===b||n(S,b,t,a,i):E)){p=!1;break}m||(m=l=="constructor")}if(p&&!m){var w=e.constructor,P=r.constructor;w!=P&&"constructor"in e&&"constructor"in r&&!(typeof w=="function"&&w instanceof w&&typeof P=="function"&&P instanceof P)&&(p=!1)}return i.delete(e),i.delete(r),p}var Ou=wu,Pu=M,Eu=O,Iu=Pu(Eu,"DataView"),Mu=Iu,ju=M,Lu=O,Fu=ju(Lu,"Promise"),Du=Fu,Ru=M,Gu=O,Nu=Ru(Gu,"Set"),zu=Nu,Bu=M,Hu=O,Ku=Bu(Hu,"WeakMap"),ku=Ku,$e=Mu,_e=xe,pe=Du,be=zu,ye=ku,Fr=z,G=Ir,rr="[object Map]",qu="[object Object]",tr="[object Promise]",ar="[object Set]",nr="[object WeakMap]",ir="[object DataView]",Uu=G($e),Ju=G(_e),Yu=G(pe),Wu=G(be),Xu=G(ye),I=Fr;($e&&I(new $e(new ArrayBuffer(1)))!=ir||_e&&I(new _e)!=rr||pe&&I(pe.resolve())!=tr||be&&I(new be)!=ar||ye&&I(new ye)!=nr)&&(I=function(e){var r=Fr(e),t=r==qu?e.constructor:void 0,a=t?G(t):"";if(a)switch(a){case Uu:return ir;case Ju:return rr;case Yu:return tr;case Wu:return ar;case Xu:return nr}return r});var Zu=I,de=jr,Vu=Lr,Qu=tu,el=Ou,sr=Zu,or=T,cr=Tr,rl=Or,tl=1,ur="[object Arguments]",lr="[object Array]",q="[object Object]",al=Object.prototype,fr=al.hasOwnProperty;function nl(e,r,t,a,n,i){var s=or(e),o=or(r),c=s?lr:sr(e),u=o?lr:sr(r);c=c==ur?q:c,u=u==ur?q:u;var f=c==q,h=u==q,l=c==u;if(l&&cr(e)){if(!cr(r))return!1;s=!0,f=!1}if(l&&!f)return i||(i=new de),s||rl(e)?Vu(e,r,t,a,n,i):Qu(e,r,c,t,a,n,i);if(!(t&tl)){var _=f&&fr.call(e,"__wrapped__"),$=h&&fr.call(r,"__wrapped__");if(_||$){var p=_?e.value():e,m=$?r.value():r;return i||(i=new de),n(p,m,t,a,i)}}return l?(i||(i=new de),el(e,r,t,a,n,i)):!1}var il=nl,sl=il,vr=B;function Dr(e,r,t,a,n){return e===r?!0:e==null||r==null||!vr(e)&&!vr(r)?e!==e&&r!==r:sl(e,r,t,a,Dr,n)}var Rr=Dr,ol=jr,cl=Rr,ul=1,ll=2;function fl(e,r,t,a){var n=t.length,i=n,s=!a;if(e==null)return!i;for(e=Object(e);n--;){var o=t[n];if(s&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++n<i;){o=t[n];var c=o[0],u=e[c],f=o[1];if(s&&o[2]){if(u===void 0&&!(c in e))return!1}else{var h=new ol;if(a)var l=a(u,f,c,e,r,h);if(!(l===void 0?cl(f,u,ul|ll,a,h):l))return!1}}return!0}var vl=fl,dl=Ce;function hl(e){return e===e&&!dl(e)}var Gr=hl,gl=Gr,$l=V;function _l(e){for(var r=$l(e),t=r.length;t--;){var a=r[t],n=e[a];r[t]=[a,n,gl(n)]}return r}var pl=_l;function bl(e,r){return function(t){return t==null?!1:t[e]===r&&(r!==void 0||e in Object(t))}}var Nr=bl,yl=vl,ml=pl,Sl=Nr;function Al(e){var r=ml(e);return r.length==1&&r[0][2]?Sl(r[0][0],r[0][1]):function(t){return t===e||yl(t,e,r)}}var Cl=Al,xl=z,Tl=B,wl="[object Symbol]";function Ol(e){return typeof e=="symbol"||Tl(e)&&xl(e)==wl}var we=Ol,Pl=T,El=we,Il=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ml=/^\w*$/;function jl(e,r){if(Pl(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||El(e)?!0:Ml.test(e)||!Il.test(e)||r!=null&&e in Object(r)}var Oe=jl,zr=Te,Ll="Expected a function";function Pe(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(Ll);var t=function(){var a=arguments,n=r?r.apply(this,a):a[0],i=t.cache;if(i.has(n))return i.get(n);var s=e.apply(this,a);return t.cache=i.set(n,s)||i,s};return t.cache=new(Pe.Cache||zr),t}Pe.Cache=zr;var Fl=Pe,Dl=Fl,Rl=500;function Gl(e){var r=Dl(e,function(a){return t.size===Rl&&t.clear(),a}),t=r.cache;return r}var Nl=Gl,zl=Nl,Bl=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Hl=/\\(\\)?/g,Kl=zl(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Bl,function(t,a,n,i){r.push(n?i.replace(Hl,"$1"):a||t)}),r}),kl=Kl,dr=Z,ql=mr,Ul=T,Jl=we,Yl=1/0,hr=dr?dr.prototype:void 0,gr=hr?hr.toString:void 0;function Br(e){if(typeof e=="string")return e;if(Ul(e))return ql(e,Br)+"";if(Jl(e))return gr?gr.call(e):"";var r=e+"";return r=="0"&&1/e==-Yl?"-0":r}var Wl=Br,Xl=Wl;function Zl(e){return e==null?"":Xl(e)}var Vl=Zl,Ql=T,ef=Oe,rf=kl,tf=Vl;function af(e,r){return Ql(e)?e:ef(e,r)?[e]:rf(tf(e))}var Hr=af,nf=we,sf=1/0;function of(e){if(typeof e=="string"||nf(e))return e;var r=e+"";return r=="0"&&1/e==-sf?"-0":r}var ae=of,cf=Hr,uf=ae;function lf(e,r){r=cf(r,e);for(var t=0,a=r.length;e!=null&&t<a;)e=e[uf(r[t++])];return t&&t==a?e:void 0}var Kr=lf,ff=Kr;function vf(e,r,t){var a=e==null?void 0:ff(e,r);return a===void 0?t:a}var df=vf;function hf(e,r){return e!=null&&r in Object(e)}var gf=hf,$f=Hr,_f=xr,pf=T,bf=wr,yf=Ae,mf=ae;function Sf(e,r,t){r=$f(r,e);for(var a=-1,n=r.length,i=!1;++a<n;){var s=mf(r[a]);if(!(i=e!=null&&t(e,s)))break;e=e[s]}return i||++a!=n?i:(n=e==null?0:e.length,!!n&&yf(n)&&bf(s,n)&&(pf(e)||_f(e)))}var Af=Sf,Cf=gf,xf=Af;function Tf(e,r){return e!=null&&xf(e,r,Cf)}var wf=Tf,Of=Rr,Pf=df,Ef=wf,If=Oe,Mf=Gr,jf=Nr,Lf=ae,Ff=1,Df=2;function Rf(e,r){return If(e)&&Mf(r)?jf(Lf(e),r):function(t){var a=Pf(t,e);return a===void 0&&a===r?Ef(t,e):Of(r,a,Ff|Df)}}var Gf=Rf;function Nf(e){return e}var zf=Nf;function Bf(e){return function(r){return r?.[e]}}var Hf=Bf,Kf=Kr;function kf(e){return function(r){return Kf(r,e)}}var qf=kf,Uf=Hf,Jf=qf,Yf=Oe,Wf=ae;function Xf(e){return Yf(e)?Uf(Wf(e)):Jf(e)}var Zf=Xf,Vf=Cl,Qf=Gf,ev=zf,rv=T,tv=Zf;function av(e){return typeof e=="function"?e:e==null?ev:typeof e=="object"?rv(e)?Qf(e[0],e[1]):Vf(e):tv(e)}var nv=av,iv=Qi,sv=ps,ov=nv,cv=T;function uv(e,r){return function(t,a){var n=cv(t)?iv:sv,i=r?r():{};return n(t,e,ov(a),i)}}var lv=uv,fv=Zi,vv=lv,dv=Object.prototype,hv=dv.hasOwnProperty,gv=vv(function(e,r,t){hv.call(e,t)?e[t].push(r):fv(e,t,[r])}),$v=gv;const _v=br($v);function pv(e,{orderExecutions:r=!1}={}){return U(e,"execution",r?pt:null,a=>U(a,"attack",null,n=>U(n,"defence",null,i=>U(i,"direction",null,s=>s))))}function U(e,r,t,a){const n=bv(e,r);return t!=null?t.flatMap(i=>a(n[i]??[])):Object.values(n).flatMap(a)}function bv(e,r){return _v(e,r)}function yv(e,r){const t=r.selectedExams??new Set,a=r.filters??{},n=r.order?.randomize??!1,i=r.order?.includePercent??100,s=r.order?.orderExecutions??!1;let o=Lt(e.filter(c=>t.has(c.id)));return o=o.filter(Dt(a)),n&&(o=yi(o,{includePercent:i})),pv(o,{orderExecutions:s})}var mv=C("<div><!$><!/><!$><!/><!$><!/><div>"),Sv=C('<div class=my-10><div class="flex justify-end gap-4 sticky top-0 py-2 bg-white"><!$><!/><!$><!/></div><!$><!/><div class="flex items-center justify-end mt-16 gap-4"><span></span><span>');const jv=e=>{const[r,t]=ue(j(new Set),{name:"examSelection:"+e.dojo.info.id,storage:sessionStorage,serialize:l=>JSON.stringify(Array.from(l)),deserialize:l=>new Set(JSON.parse(l))}),[a,n]=ue(j({kneeFriendly:!1}),{name:"techniqueFilters:"+e.dojo.info.id,storage:sessionStorage}),[i,s]=ue(j({randomize:!0,includePercent:80}),{name:"orderOptions:"+e.dojo.info.id,storage:sessionStorage}),[o,c]=j(!1);function u(){c(l=>!l)}const f=it(()=>(o(),yv(e.dojo.details.exams,{order:{...i(),orderExecutions:!0},selectedExams:r(),filters:a()}))),h=async()=>{const{save:l}=lt(e.dojo.info.id);await l(f()),document.location.href=Re(`/${e.dojo.info.id}/reader`)};return(()=>{var l=A(mv),_=l.firstChild,[$,p]=x(_.nextSibling),m=$.nextSibling,[S,b]=x(m.nextSibling),E=S.nextSibling,[w,P]=x(E.nextSibling),ne=w.nextSibling;return g(l,v(le,{get headerLabel(){return y("examChooser.exams.header")},get children(){return v(Pt,{get options(){return Av(e.dojo.details.exams)},get value(){return r()},onChange:t})}}),$,p),g(l,v(le,{get headerLabel(){return y("examChooser.filters.header")},get children(){return v(It,{get value(){return a()},onChange:n})}}),S,b),g(l,v(le,{get headerLabel(){return y("examChooser.order.header")},get children(){return v(jt,{get value(){return i()},onChange:s,onForceRefresh:u})}}),w,P),g(ne,(()=>{var ie=he(()=>r().size>0);return()=>ie()&&(()=>{var se=A(Sv),H=se.firstChild,kr=H.firstChild,[Ee,qr]=x(kr.nextSibling),Ur=Ee.nextSibling,[Jr,Yr]=x(Ur.nextSibling),Wr=H.nextSibling,[Ie,Xr]=x(Wr.nextSibling),Zr=Ie.nextSibling,Me=Zr.firstChild,Vr=Me.nextSibling;return g(H,v(ge,{size:"small",color:"primary",icon:_t,get label(){return y("examChooser.read")},onClick:h}),Ee,qr),g(H,v(ge,{size:"small",color:"secondary",icon:ft,get label(){return y("examChooser.print")},onClick:()=>window.print()}),Jr,Yr),g(se,v(wt,{get techniques(){return f()}}),Ie,Xr),g(Me,()=>y("donations.question")),g(Vr,v(vt,{size:"small",get label(){return y("donations.action")},get href(){return Re("/donations")}})),se})()})()),l})()};function Av(e){return e.map(r=>({id:r.id,label:xv(r.label)}))}const Cv={kyu5:"chooser.button.kyu5",kyu4:"chooser.button.kyu4",kyu3:"chooser.button.kyu3",kyu2:"chooser.button.kyu2",kyu1:"chooser.button.kyu1",dan1:"chooser.button.dan1",dan2:"chooser.button.dan2",dan3:"chooser.button.dan3",dan4:"chooser.button.dan4"};function xv(e){switch(e.type){case"wellknown":return y(Cv[e.key]);case"free":return ct(e.text)}}export{jv as TechniqueChooser};
