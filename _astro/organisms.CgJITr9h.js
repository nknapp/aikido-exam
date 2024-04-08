import{g as y,j as ur,r as ye,t as A,b as w,i as g,c as $,F as kr,o as fr,k as vr,l as Jr,a as j,s as Ee,d as Ie,n as Wr,e as Xr,p as Me,q as Vr,f as Yr}from"./web.Br82kJRb.js";import{t as C,S as Zr,c as Qr,a as et}from"./techniqueStore.OpD8ADmx.js";import{F as se,C as me,I as rt}from"./ForEntries.X_BtDSgz.js";import{S as ge}from"./SimpleButton.BAX8mLDH.js";import{c as K,g as dr}from"./_commonjsHelpers.BosuxZz1.js";var tt=A('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M10.59 9.17 5.41 4 4 5.41l5.17 5.17zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4zm.33 9.41-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04z">');const at=(e={})=>(()=>{var r=y(tt);return ur(r,e,!0,!0),ye(),r})();var nt=A('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14">');const it=(e={})=>(()=>{var r=y(nt);return ur(r,e,!0,!0),ye(),r})(),st=["suwari waza","hanmi handachi waza","tachi waza","tanto dori","jo nage","jo dori","tachi dori"];function ot(e){const r={};for(const t of e)ct(r,t);return r}function ct(e,r){const t=oe(e,r.execution,ce),a=oe(t,r.attack,ce),n=oe(a,r.defence,ce);n[r.direction]=r.metadata}function oe(e,r,t){const a=e[r];if(a!=null)return a;const n=t();return e[r]=n,n}function ce(){return{}}var lt=A('<div><!$><!/><div class="mt-8 border-secondary border-t text-sm hidden print:block">'),ut=A('<div><h2 class="border-b border-1 border-secondary break-after-avoid"></h2><div>'),ft=A('<div class="grid grid-cols-3 mt-4 break-inside-avoid"><div></div><div class="col-span-2 md:flex flex-wrap">'),vt=A("<div class=md:me-6><span></span>&nbsp;<!$><!/>"),dt=A('<span class="text-sm text-secondary">( <!$><!/> )'),je=A("<span>");const gt=e=>(()=>{var r=y(lt),t=r.firstChild,[a,n]=w(t.nextSibling),i=a.nextSibling;return g(r,$(se,{get object(){return ot(e.techniques)},children:(s,o)=>(()=>{var c=y(ut),l=c.firstChild,f=l.nextSibling;return g(l,s),g(f,$(se,{object:o,children:(d,u)=>(()=>{var _=y(ft),h=_.firstChild,p=h.nextSibling;return g(h,d),g(p,$(se,{object:u,children:(m,S)=>(()=>{var b=y(vt),E=b.firstChild,x=E.nextSibling,P=x.nextSibling,[ae,ne]=w(P.nextSibling);return g(E,m),g(b,$(ht,{directions:S}),ae,ne),b})()})),_})()})),c})()}),a,n),g(i,()=>C("examChooser.created-by",{url:window.location.origin})),r})(),ht=e=>{const r=Object.keys(e.directions);return r.length===1&&r[0]===Zr?null:(()=>{var t=y(dt),a=t.firstChild,n=a.nextSibling,[i,s]=w(n.nextSibling);return i.nextSibling,g(t,$(kr,{each:r,children:(o,c)=>c()>0?[", ",(()=>{var l=y(je);return g(l,o),l})()]:(()=>{var l=y(je);return g(l,o),l})()}),i,s),t})()},$t=e=>{function r(t,a){const n=new Set(e.value);a?n.add(t):n.delete(t),e.onChange(n)}return e.options.map(({id:t,label:a,wide:n})=>$(me,{class:n?"col-span-2":"",get value(){return e.value.has(t)},label:a,onChange:i=>r(t,i)}))};function le([e,r],{name:t,storage:a,serialize:n=JSON.stringify,deserialize:i=JSON.parse}){const s=a??localStorage,o=s.getItem(t);return setTimeout(()=>{o!=null&&r(i(o))}),fr(()=>{vr(()=>{s.setItem(t,n(e()))})}),[e,r]}var _t=A('<div><header class="text-sm font-bold flex items-center pb-4 rounded gap-4"><div class="border-t border-secondary flex-1"></div><div class=""></div><div class="border-t flex-1 border-secondary"></div></header><div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 mb-4">');const ue=e=>(()=>{var r=y(_t),t=r.firstChild,a=t.firstChild,n=a.nextSibling,i=t.nextSibling;return g(n,()=>e.headerLabel),g(i,()=>e.children),r})(),pt=e=>$(me,{get label(){return C("examChooser.filters.kneeFriendly")},get value(){return e.value.kneeFriendly??!1},onChange:r=>e.onChange({kneeFriendly:r})}),bt="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let yt=(e=21)=>{let r="",t=crypto.getRandomValues(new Uint8Array(e));for(;e--;)r+=bt[t[e]&63];return r};var mt=A("<div><input type=range min=1 max=100><label>");const St=e=>{function r(o,c){e.onChange({...e.value,[o]:c})}const t=yt(),[a,n]=j(!1),[i,s]=j(e.value.includePercent);return vr(()=>s(e.value.includePercent)),fr(()=>{n(!0)}),[$(me,{get label(){return C("examChooser.order.randomize")},get value(){return e.value.randomize},onChange:o=>r("randomize",o)}),$(ge,{color:"secondary",icon:at,get label(){return C("examChooser.order.shuffle")},get disabled(){return!e.value.randomize},get onClick(){return e.onForceRefresh}}),(()=>{var o=y(mt),c=o.firstChild,l=c.nextSibling;return c.addEventListener("change",f=>r("includePercent",Number(f.target.value))),c.$$input=f=>s(Number(f.target.value)),Ee(c,"id",t),Ee(l,"for",t),g(l,()=>C("examChooser.order.includePercent",{percent:i()})),Ie(f=>{var d={"flex flex-col justify-center col-span-2 items-center transition-opacity duration-200":!0,"text-secondary-light":!e.value.randomize,"opacity-0":!a(),"opacity-100":a()},u=`w-2/3 ${a()?"opacity-100":"opacity-0"} accent-primary`,_=!a||!e.value.randomize;return f.e=Wr(o,d,f.e),u!==f.t&&Xr(c,f.t=u),_!==f.a&&Me(c,"disabled",f.a=_),f},{e:void 0,t:void 0,a:void 0}),Ie(()=>Me(c,"value",i())),ye(),o})()]};Jr(["input"]);function At(e){const r=[];for(const t of e)for(const[a,n]of q(t.techniques))for(const[i,s]of q(n))for(const[o,c]of q(s))for(const[l,f]of q(c))r.push({execution:a,attack:i,defence:o,direction:l,metadata:f});return r}const q=Object.entries,Ct={kneeFriendly:{filter:e=>e.execution!=="suwari waza"&&e.execution!=="hanmi handachi waza"}};function Tt(e){return r=>!e.kneeFriendly||Ct.kneeFriendly.filter(r)}function xt(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}var wt=xt,Ot=Math.floor,Pt=Math.random;function Et(e,r){return e+Ot(Pt()*(r-e+1))}var It=Et,Mt=It;function jt(e,r){var t=-1,a=e.length,n=a-1;for(r=r===void 0?a:r;++t<r;){var i=Mt(t,n),s=e[i];e[i]=e[t],e[t]=s}return e.length=r,e}var gr=jt,Ft=wt,Lt=gr;function Dt(e){return Lt(Ft(e))}var Rt=Dt;function Gt(e,r){for(var t=-1,a=e==null?0:e.length,n=Array(a);++t<a;)n[t]=r(e[t],t,e);return n}var hr=Gt,Nt=hr;function zt(e,r){return Nt(r,function(t){return e[t]})}var Bt=zt;function Ht(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}var Kt=Ht,qt=typeof K=="object"&&K&&K.Object===Object&&K,$r=qt,Ut=$r,kt=typeof self=="object"&&self&&self.Object===Object&&self,Jt=Ut||kt||Function("return this")(),O=Jt,Wt=O,Xt=Wt.Symbol,V=Xt,Fe=V,_r=Object.prototype,Vt=_r.hasOwnProperty,Yt=_r.toString,N=Fe?Fe.toStringTag:void 0;function Zt(e){var r=Vt.call(e,N),t=e[N];try{e[N]=void 0;var a=!0}catch{}var n=Yt.call(e);return a&&(r?e[N]=t:delete e[N]),n}var Qt=Zt,ea=Object.prototype,ra=ea.toString;function ta(e){return ra.call(e)}var aa=ta,Le=V,na=Qt,ia=aa,sa="[object Null]",oa="[object Undefined]",De=Le?Le.toStringTag:void 0;function ca(e){return e==null?e===void 0?oa:sa:De&&De in Object(e)?na(e):ia(e)}var z=ca;function la(e){return e!=null&&typeof e=="object"}var B=la,ua=z,fa=B,va="[object Arguments]";function da(e){return fa(e)&&ua(e)==va}var ga=da,Re=ga,ha=B,pr=Object.prototype,$a=pr.hasOwnProperty,_a=pr.propertyIsEnumerable,pa=Re(function(){return arguments}())?Re:function(e){return ha(e)&&$a.call(e,"callee")&&!_a.call(e,"callee")},br=pa,ba=Array.isArray,T=ba,J={exports:{}};function ya(){return!1}var ma=ya;J.exports;(function(e,r){var t=O,a=ma,n=r&&!r.nodeType&&r,i=n&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===n,o=s?t.Buffer:void 0,c=o?o.isBuffer:void 0,l=c||a;e.exports=l})(J,J.exports);var yr=J.exports,Sa=9007199254740991,Aa=/^(?:0|[1-9]\d*)$/;function Ca(e,r){var t=typeof e;return r=r??Sa,!!r&&(t=="number"||t!="symbol"&&Aa.test(e))&&e>-1&&e%1==0&&e<r}var mr=Ca,Ta=9007199254740991;function xa(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ta}var Se=xa,wa=z,Oa=Se,Pa=B,Ea="[object Arguments]",Ia="[object Array]",Ma="[object Boolean]",ja="[object Date]",Fa="[object Error]",La="[object Function]",Da="[object Map]",Ra="[object Number]",Ga="[object Object]",Na="[object RegExp]",za="[object Set]",Ba="[object String]",Ha="[object WeakMap]",Ka="[object ArrayBuffer]",qa="[object DataView]",Ua="[object Float32Array]",ka="[object Float64Array]",Ja="[object Int8Array]",Wa="[object Int16Array]",Xa="[object Int32Array]",Va="[object Uint8Array]",Ya="[object Uint8ClampedArray]",Za="[object Uint16Array]",Qa="[object Uint32Array]",v={};v[Ua]=v[ka]=v[Ja]=v[Wa]=v[Xa]=v[Va]=v[Ya]=v[Za]=v[Qa]=!0;v[Ea]=v[Ia]=v[Ka]=v[Ma]=v[qa]=v[ja]=v[Fa]=v[La]=v[Da]=v[Ra]=v[Ga]=v[Na]=v[za]=v[Ba]=v[Ha]=!1;function en(e){return Pa(e)&&Oa(e.length)&&!!v[wa(e)]}var rn=en;function tn(e){return function(r){return e(r)}}var an=tn,W={exports:{}};W.exports;(function(e,r){var t=$r,a=r&&!r.nodeType&&r,n=a&&!0&&e&&!e.nodeType&&e,i=n&&n.exports===a,s=i&&t.process,o=function(){try{var c=n&&n.require&&n.require("util").types;return c||s&&s.binding&&s.binding("util")}catch{}}();e.exports=o})(W,W.exports);var nn=W.exports,sn=rn,on=an,Ge=nn,Ne=Ge&&Ge.isTypedArray,cn=Ne?on(Ne):sn,Sr=cn,ln=Kt,un=br,fn=T,vn=yr,dn=mr,gn=Sr,hn=Object.prototype,$n=hn.hasOwnProperty;function _n(e,r){var t=fn(e),a=!t&&un(e),n=!t&&!a&&vn(e),i=!t&&!a&&!n&&gn(e),s=t||a||n||i,o=s?ln(e.length,String):[],c=o.length;for(var l in e)(r||$n.call(e,l))&&!(s&&(l=="length"||n&&(l=="offset"||l=="parent")||i&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||dn(l,c)))&&o.push(l);return o}var pn=_n,bn=Object.prototype;function yn(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||bn;return e===t}var mn=yn;function Sn(e,r){return function(t){return e(r(t))}}var An=Sn,Cn=An,Tn=Cn(Object.keys,Object),xn=Tn,wn=mn,On=xn,Pn=Object.prototype,En=Pn.hasOwnProperty;function In(e){if(!wn(e))return On(e);var r=[];for(var t in Object(e))En.call(e,t)&&t!="constructor"&&r.push(t);return r}var Mn=In;function jn(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var Ae=jn,Fn=z,Ln=Ae,Dn="[object AsyncFunction]",Rn="[object Function]",Gn="[object GeneratorFunction]",Nn="[object Proxy]";function zn(e){if(!Ln(e))return!1;var r=Fn(e);return r==Rn||r==Gn||r==Dn||r==Nn}var Ar=zn,Bn=Ar,Hn=Se;function Kn(e){return e!=null&&Hn(e.length)&&!Bn(e)}var Cr=Kn,qn=pn,Un=Mn,kn=Cr;function Jn(e){return kn(e)?qn(e):Un(e)}var Y=Jn,Wn=Bt,Xn=Y;function Vn(e){return e==null?[]:Wn(e,Xn(e))}var Yn=Vn,Zn=gr,Qn=Yn;function ei(e){return Zn(Qn(e))}var ri=ei,ti=Rt,ai=ri,ni=T;function ii(e){var r=ni(e)?ti:ai;return r(e)}var si=ii;const oi=dr(si);function ci(e){return oi(e)}function li(e,{includePercent:r=100}={}){const t=ci(e),a=Math.ceil(r*e.length/100);return t.slice(0,a)}var ui=O,fi=ui["__core-js_shared__"],vi=fi,fe=vi,ze=function(){var e=/[^.]+$/.exec(fe&&fe.keys&&fe.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function di(e){return!!ze&&ze in e}var gi=di,hi=Function.prototype,$i=hi.toString;function _i(e){if(e!=null){try{return $i.call(e)}catch{}try{return e+""}catch{}}return""}var Tr=_i,pi=Ar,bi=gi,yi=Ae,mi=Tr,Si=/[\\^$.*+?()[\]{}|]/g,Ai=/^\[object .+?Constructor\]$/,Ci=Function.prototype,Ti=Object.prototype,xi=Ci.toString,wi=Ti.hasOwnProperty,Oi=RegExp("^"+xi.call(wi).replace(Si,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Pi(e){if(!yi(e)||bi(e))return!1;var r=pi(e)?Oi:Ai;return r.test(mi(e))}var Ei=Pi;function Ii(e,r){return e?.[r]}var Mi=Ii,ji=Ei,Fi=Mi;function Li(e,r){var t=Fi(e,r);return ji(t)?t:void 0}var M=Li,Di=M,Ri=function(){try{var e=Di(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Gi=Ri,Be=Gi;function Ni(e,r,t){r=="__proto__"&&Be?Be(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var zi=Ni;function Bi(e,r,t,a){for(var n=-1,i=e==null?0:e.length;++n<i;){var s=e[n];r(a,s,t(s),e)}return a}var Hi=Bi;function Ki(e){return function(r,t,a){for(var n=-1,i=Object(r),s=a(r),o=s.length;o--;){var c=s[e?o:++n];if(t(i[c],c,i)===!1)break}return r}}var qi=Ki,Ui=qi,ki=Ui(),Ji=ki,Wi=Ji,Xi=Y;function Vi(e,r){return e&&Wi(e,r,Xi)}var Yi=Vi,Zi=Cr;function Qi(e,r){return function(t,a){if(t==null)return t;if(!Zi(t))return e(t,a);for(var n=t.length,i=r?n:-1,s=Object(t);(r?i--:++i<n)&&a(s[i],i,s)!==!1;);return t}}var es=Qi,rs=Yi,ts=es,as=ts(rs),ns=as,is=ns;function ss(e,r,t,a){return is(e,function(n,i,s){r(a,n,t(n),s)}),a}var os=ss;function cs(){this.__data__=[],this.size=0}var ls=cs;function us(e,r){return e===r||e!==e&&r!==r}var xr=us,fs=xr;function vs(e,r){for(var t=e.length;t--;)if(fs(e[t][0],r))return t;return-1}var Z=vs,ds=Z,gs=Array.prototype,hs=gs.splice;function $s(e){var r=this.__data__,t=ds(r,e);if(t<0)return!1;var a=r.length-1;return t==a?r.pop():hs.call(r,t,1),--this.size,!0}var _s=$s,ps=Z;function bs(e){var r=this.__data__,t=ps(r,e);return t<0?void 0:r[t][1]}var ys=bs,ms=Z;function Ss(e){return ms(this.__data__,e)>-1}var As=Ss,Cs=Z;function Ts(e,r){var t=this.__data__,a=Cs(t,e);return a<0?(++this.size,t.push([e,r])):t[a][1]=r,this}var xs=Ts,ws=ls,Os=_s,Ps=ys,Es=As,Is=xs;function F(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}F.prototype.clear=ws;F.prototype.delete=Os;F.prototype.get=Ps;F.prototype.has=Es;F.prototype.set=Is;var Q=F,Ms=Q;function js(){this.__data__=new Ms,this.size=0}var Fs=js;function Ls(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}var Ds=Ls;function Rs(e){return this.__data__.get(e)}var Gs=Rs;function Ns(e){return this.__data__.has(e)}var zs=Ns,Bs=M,Hs=O,Ks=Bs(Hs,"Map"),Ce=Ks,qs=M,Us=qs(Object,"create"),ee=Us,He=ee;function ks(){this.__data__=He?He(null):{},this.size=0}var Js=ks;function Ws(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Xs=Ws,Vs=ee,Ys="__lodash_hash_undefined__",Zs=Object.prototype,Qs=Zs.hasOwnProperty;function eo(e){var r=this.__data__;if(Vs){var t=r[e];return t===Ys?void 0:t}return Qs.call(r,e)?r[e]:void 0}var ro=eo,to=ee,ao=Object.prototype,no=ao.hasOwnProperty;function io(e){var r=this.__data__;return to?r[e]!==void 0:no.call(r,e)}var so=io,oo=ee,co="__lodash_hash_undefined__";function lo(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=oo&&r===void 0?co:r,this}var uo=lo,fo=Js,vo=Xs,go=ro,ho=so,$o=uo;function L(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}L.prototype.clear=fo;L.prototype.delete=vo;L.prototype.get=go;L.prototype.has=ho;L.prototype.set=$o;var _o=L,Ke=_o,po=Q,bo=Ce;function yo(){this.size=0,this.__data__={hash:new Ke,map:new(bo||po),string:new Ke}}var mo=yo;function So(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}var Ao=So,Co=Ao;function To(e,r){var t=e.__data__;return Co(r)?t[typeof r=="string"?"string":"hash"]:t.map}var re=To,xo=re;function wo(e){var r=xo(this,e).delete(e);return this.size-=r?1:0,r}var Oo=wo,Po=re;function Eo(e){return Po(this,e).get(e)}var Io=Eo,Mo=re;function jo(e){return Mo(this,e).has(e)}var Fo=jo,Lo=re;function Do(e,r){var t=Lo(this,e),a=t.size;return t.set(e,r),this.size+=t.size==a?0:1,this}var Ro=Do,Go=mo,No=Oo,zo=Io,Bo=Fo,Ho=Ro;function D(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}D.prototype.clear=Go;D.prototype.delete=No;D.prototype.get=zo;D.prototype.has=Bo;D.prototype.set=Ho;var Te=D,Ko=Q,qo=Ce,Uo=Te,ko=200;function Jo(e,r){var t=this.__data__;if(t instanceof Ko){var a=t.__data__;if(!qo||a.length<ko-1)return a.push([e,r]),this.size=++t.size,this;t=this.__data__=new Uo(a)}return t.set(e,r),this.size=t.size,this}var Wo=Jo,Xo=Q,Vo=Fs,Yo=Ds,Zo=Gs,Qo=zs,ec=Wo;function R(e){var r=this.__data__=new Xo(e);this.size=r.size}R.prototype.clear=Vo;R.prototype.delete=Yo;R.prototype.get=Zo;R.prototype.has=Qo;R.prototype.set=ec;var wr=R,rc="__lodash_hash_undefined__";function tc(e){return this.__data__.set(e,rc),this}var ac=tc;function nc(e){return this.__data__.has(e)}var ic=nc,sc=Te,oc=ac,cc=ic;function X(e){var r=-1,t=e==null?0:e.length;for(this.__data__=new sc;++r<t;)this.add(e[r])}X.prototype.add=X.prototype.push=oc;X.prototype.has=cc;var lc=X;function uc(e,r){for(var t=-1,a=e==null?0:e.length;++t<a;)if(r(e[t],t,e))return!0;return!1}var fc=uc;function vc(e,r){return e.has(r)}var dc=vc,gc=lc,hc=fc,$c=dc,_c=1,pc=2;function bc(e,r,t,a,n,i){var s=t&_c,o=e.length,c=r.length;if(o!=c&&!(s&&c>o))return!1;var l=i.get(e),f=i.get(r);if(l&&f)return l==r&&f==e;var d=-1,u=!0,_=t&pc?new gc:void 0;for(i.set(e,r),i.set(r,e);++d<o;){var h=e[d],p=r[d];if(a)var m=s?a(p,h,d,r,e,i):a(h,p,d,e,r,i);if(m!==void 0){if(m)continue;u=!1;break}if(_){if(!hc(r,function(S,b){if(!$c(_,b)&&(h===S||n(h,S,t,a,i)))return _.push(b)})){u=!1;break}}else if(!(h===p||n(h,p,t,a,i))){u=!1;break}}return i.delete(e),i.delete(r),u}var Or=bc,yc=O,mc=yc.Uint8Array,Sc=mc;function Ac(e){var r=-1,t=Array(e.size);return e.forEach(function(a,n){t[++r]=[n,a]}),t}var Cc=Ac;function Tc(e){var r=-1,t=Array(e.size);return e.forEach(function(a){t[++r]=a}),t}var xc=Tc,qe=V,Ue=Sc,wc=xr,Oc=Or,Pc=Cc,Ec=xc,Ic=1,Mc=2,jc="[object Boolean]",Fc="[object Date]",Lc="[object Error]",Dc="[object Map]",Rc="[object Number]",Gc="[object RegExp]",Nc="[object Set]",zc="[object String]",Bc="[object Symbol]",Hc="[object ArrayBuffer]",Kc="[object DataView]",ke=qe?qe.prototype:void 0,ve=ke?ke.valueOf:void 0;function qc(e,r,t,a,n,i,s){switch(t){case Kc:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Hc:return!(e.byteLength!=r.byteLength||!i(new Ue(e),new Ue(r)));case jc:case Fc:case Rc:return wc(+e,+r);case Lc:return e.name==r.name&&e.message==r.message;case Gc:case zc:return e==r+"";case Dc:var o=Pc;case Nc:var c=a&Ic;if(o||(o=Ec),e.size!=r.size&&!c)return!1;var l=s.get(e);if(l)return l==r;a|=Mc,s.set(e,r);var f=Oc(o(e),o(r),a,n,i,s);return s.delete(e),f;case Bc:if(ve)return ve.call(e)==ve.call(r)}return!1}var Uc=qc;function kc(e,r){for(var t=-1,a=r.length,n=e.length;++t<a;)e[n+t]=r[t];return e}var Jc=kc,Wc=Jc,Xc=T;function Vc(e,r,t){var a=r(e);return Xc(e)?a:Wc(a,t(e))}var Yc=Vc;function Zc(e,r){for(var t=-1,a=e==null?0:e.length,n=0,i=[];++t<a;){var s=e[t];r(s,t,e)&&(i[n++]=s)}return i}var Qc=Zc;function el(){return[]}var rl=el,tl=Qc,al=rl,nl=Object.prototype,il=nl.propertyIsEnumerable,Je=Object.getOwnPropertySymbols,sl=Je?function(e){return e==null?[]:(e=Object(e),tl(Je(e),function(r){return il.call(e,r)}))}:al,ol=sl,cl=Yc,ll=ol,ul=Y;function fl(e){return cl(e,ul,ll)}var vl=fl,We=vl,dl=1,gl=Object.prototype,hl=gl.hasOwnProperty;function $l(e,r,t,a,n,i){var s=t&dl,o=We(e),c=o.length,l=We(r),f=l.length;if(c!=f&&!s)return!1;for(var d=c;d--;){var u=o[d];if(!(s?u in r:hl.call(r,u)))return!1}var _=i.get(e),h=i.get(r);if(_&&h)return _==r&&h==e;var p=!0;i.set(e,r),i.set(r,e);for(var m=s;++d<c;){u=o[d];var S=e[u],b=r[u];if(a)var E=s?a(b,S,u,r,e,i):a(S,b,u,e,r,i);if(!(E===void 0?S===b||n(S,b,t,a,i):E)){p=!1;break}m||(m=u=="constructor")}if(p&&!m){var x=e.constructor,P=r.constructor;x!=P&&"constructor"in e&&"constructor"in r&&!(typeof x=="function"&&x instanceof x&&typeof P=="function"&&P instanceof P)&&(p=!1)}return i.delete(e),i.delete(r),p}var _l=$l,pl=M,bl=O,yl=pl(bl,"DataView"),ml=yl,Sl=M,Al=O,Cl=Sl(Al,"Promise"),Tl=Cl,xl=M,wl=O,Ol=xl(wl,"Set"),Pl=Ol,El=M,Il=O,Ml=El(Il,"WeakMap"),jl=Ml,he=ml,$e=Ce,_e=Tl,pe=Pl,be=jl,Pr=z,G=Tr,Xe="[object Map]",Fl="[object Object]",Ve="[object Promise]",Ye="[object Set]",Ze="[object WeakMap]",Qe="[object DataView]",Ll=G(he),Dl=G($e),Rl=G(_e),Gl=G(pe),Nl=G(be),I=Pr;(he&&I(new he(new ArrayBuffer(1)))!=Qe||$e&&I(new $e)!=Xe||_e&&I(_e.resolve())!=Ve||pe&&I(new pe)!=Ye||be&&I(new be)!=Ze)&&(I=function(e){var r=Pr(e),t=r==Fl?e.constructor:void 0,a=t?G(t):"";if(a)switch(a){case Ll:return Qe;case Dl:return Xe;case Rl:return Ve;case Gl:return Ye;case Nl:return Ze}return r});var zl=I,de=wr,Bl=Or,Hl=Uc,Kl=_l,er=zl,rr=T,tr=yr,ql=Sr,Ul=1,ar="[object Arguments]",nr="[object Array]",U="[object Object]",kl=Object.prototype,ir=kl.hasOwnProperty;function Jl(e,r,t,a,n,i){var s=rr(e),o=rr(r),c=s?nr:er(e),l=o?nr:er(r);c=c==ar?U:c,l=l==ar?U:l;var f=c==U,d=l==U,u=c==l;if(u&&tr(e)){if(!tr(r))return!1;s=!0,f=!1}if(u&&!f)return i||(i=new de),s||ql(e)?Bl(e,r,t,a,n,i):Hl(e,r,c,t,a,n,i);if(!(t&Ul)){var _=f&&ir.call(e,"__wrapped__"),h=d&&ir.call(r,"__wrapped__");if(_||h){var p=_?e.value():e,m=h?r.value():r;return i||(i=new de),n(p,m,t,a,i)}}return u?(i||(i=new de),Kl(e,r,t,a,n,i)):!1}var Wl=Jl,Xl=Wl,sr=B;function Er(e,r,t,a,n){return e===r?!0:e==null||r==null||!sr(e)&&!sr(r)?e!==e&&r!==r:Xl(e,r,t,a,Er,n)}var Ir=Er,Vl=wr,Yl=Ir,Zl=1,Ql=2;function eu(e,r,t,a){var n=t.length,i=n,s=!a;if(e==null)return!i;for(e=Object(e);n--;){var o=t[n];if(s&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++n<i;){o=t[n];var c=o[0],l=e[c],f=o[1];if(s&&o[2]){if(l===void 0&&!(c in e))return!1}else{var d=new Vl;if(a)var u=a(l,f,c,e,r,d);if(!(u===void 0?Yl(f,l,Zl|Ql,a,d):u))return!1}}return!0}var ru=eu,tu=Ae;function au(e){return e===e&&!tu(e)}var Mr=au,nu=Mr,iu=Y;function su(e){for(var r=iu(e),t=r.length;t--;){var a=r[t],n=e[a];r[t]=[a,n,nu(n)]}return r}var ou=su;function cu(e,r){return function(t){return t==null?!1:t[e]===r&&(r!==void 0||e in Object(t))}}var jr=cu,lu=ru,uu=ou,fu=jr;function vu(e){var r=uu(e);return r.length==1&&r[0][2]?fu(r[0][0],r[0][1]):function(t){return t===e||lu(t,e,r)}}var du=vu,gu=z,hu=B,$u="[object Symbol]";function _u(e){return typeof e=="symbol"||hu(e)&&gu(e)==$u}var xe=_u,pu=T,bu=xe,yu=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,mu=/^\w*$/;function Su(e,r){if(pu(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||bu(e)?!0:mu.test(e)||!yu.test(e)||r!=null&&e in Object(r)}var we=Su,Fr=Te,Au="Expected a function";function Oe(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(Au);var t=function(){var a=arguments,n=r?r.apply(this,a):a[0],i=t.cache;if(i.has(n))return i.get(n);var s=e.apply(this,a);return t.cache=i.set(n,s)||i,s};return t.cache=new(Oe.Cache||Fr),t}Oe.Cache=Fr;var Cu=Oe,Tu=Cu,xu=500;function wu(e){var r=Tu(e,function(a){return t.size===xu&&t.clear(),a}),t=r.cache;return r}var Ou=wu,Pu=Ou,Eu=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Iu=/\\(\\)?/g,Mu=Pu(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Eu,function(t,a,n,i){r.push(n?i.replace(Iu,"$1"):a||t)}),r}),ju=Mu,or=V,Fu=hr,Lu=T,Du=xe,Ru=1/0,cr=or?or.prototype:void 0,lr=cr?cr.toString:void 0;function Lr(e){if(typeof e=="string")return e;if(Lu(e))return Fu(e,Lr)+"";if(Du(e))return lr?lr.call(e):"";var r=e+"";return r=="0"&&1/e==-Ru?"-0":r}var Gu=Lr,Nu=Gu;function zu(e){return e==null?"":Nu(e)}var Bu=zu,Hu=T,Ku=we,qu=ju,Uu=Bu;function ku(e,r){return Hu(e)?e:Ku(e,r)?[e]:qu(Uu(e))}var Dr=ku,Ju=xe,Wu=1/0;function Xu(e){if(typeof e=="string"||Ju(e))return e;var r=e+"";return r=="0"&&1/e==-Wu?"-0":r}var te=Xu,Vu=Dr,Yu=te;function Zu(e,r){r=Vu(r,e);for(var t=0,a=r.length;e!=null&&t<a;)e=e[Yu(r[t++])];return t&&t==a?e:void 0}var Rr=Zu,Qu=Rr;function ef(e,r,t){var a=e==null?void 0:Qu(e,r);return a===void 0?t:a}var rf=ef;function tf(e,r){return e!=null&&r in Object(e)}var af=tf,nf=Dr,sf=br,of=T,cf=mr,lf=Se,uf=te;function ff(e,r,t){r=nf(r,e);for(var a=-1,n=r.length,i=!1;++a<n;){var s=uf(r[a]);if(!(i=e!=null&&t(e,s)))break;e=e[s]}return i||++a!=n?i:(n=e==null?0:e.length,!!n&&lf(n)&&cf(s,n)&&(of(e)||sf(e)))}var vf=ff,df=af,gf=vf;function hf(e,r){return e!=null&&gf(e,r,df)}var $f=hf,_f=Ir,pf=rf,bf=$f,yf=we,mf=Mr,Sf=jr,Af=te,Cf=1,Tf=2;function xf(e,r){return yf(e)&&mf(r)?Sf(Af(e),r):function(t){var a=pf(t,e);return a===void 0&&a===r?bf(t,e):_f(r,a,Cf|Tf)}}var wf=xf;function Of(e){return e}var Pf=Of;function Ef(e){return function(r){return r?.[e]}}var If=Ef,Mf=Rr;function jf(e){return function(r){return Mf(r,e)}}var Ff=jf,Lf=If,Df=Ff,Rf=we,Gf=te;function Nf(e){return Rf(e)?Lf(Gf(e)):Df(e)}var zf=Nf,Bf=du,Hf=wf,Kf=Pf,qf=T,Uf=zf;function kf(e){return typeof e=="function"?e:e==null?Kf:typeof e=="object"?qf(e)?Hf(e[0],e[1]):Bf(e):Uf(e)}var Jf=kf,Wf=Hi,Xf=os,Vf=Jf,Yf=T;function Zf(e,r){return function(t,a){var n=Yf(t)?Wf:Xf,i=r?r():{};return n(t,e,Vf(a),i)}}var Qf=Zf,ev=zi,rv=Qf,tv=Object.prototype,av=tv.hasOwnProperty,nv=rv(function(e,r,t){av.call(e,t)?e[t].push(r):ev(e,t,[r])}),iv=nv;const sv=dr(iv);function ov(e,{orderExecutions:r=!1}={}){return k(e,"execution",r?st:null,a=>k(a,"attack",null,n=>k(n,"defence",null,i=>k(i,"direction",null,s=>s))))}function k(e,r,t,a){const n=cv(e,r);return t!=null?t.flatMap(i=>a(n[i]??[])):Object.values(n).flatMap(a)}function cv(e,r){return sv(e,r)}function lv(e,r){const t=r.selectedExams??new Set,a=r.filters??{},n=r.order?.randomize??!1,i=r.order?.includePercent??100,s=r.order?.orderExecutions??!1;let o=At(e.filter(c=>t.has(c.id)));return o=o.filter(Tt(a)),n&&(o=li(o,{includePercent:i})),ov(o,{orderExecutions:s})}var uv=A("<div><!$><!/><!$><!/><!$><!/><div>"),fv=A('<div class=my-10><div class="flex justify-end gap-4"><!$><!/><!$><!/></div><!$><!/>');const pv=e=>{const[r,t]=le(j(new Set),{name:"examSelection:"+e.dojo.info.id,storage:sessionStorage,serialize:u=>JSON.stringify(Array.from(u)),deserialize:u=>new Set(JSON.parse(u))}),[a,n]=le(j({kneeFriendly:!1}),{name:"techniqueFilters:"+e.dojo.info.id,storage:sessionStorage}),[i,s]=le(j({randomize:!0,includePercent:80}),{name:"orderOptions:"+e.dojo.info.id,storage:sessionStorage}),[o,c]=j(!1);function l(){c(u=>!u)}const f=Vr(()=>(o(),lv(e.dojo.details.exams,{order:{...i(),orderExecutions:!0},selectedExams:r(),filters:a()}))),d=async()=>{const{save:u}=Qr(e.dojo.info.id);await u(f()),document.location.href=et(`/${e.dojo.info.id}/reader`)};return(()=>{var u=y(uv),_=u.firstChild,[h,p]=w(_.nextSibling),m=h.nextSibling,[S,b]=w(m.nextSibling),E=S.nextSibling,[x,P]=w(E.nextSibling),ae=x.nextSibling;return g(u,$(ue,{get headerLabel(){return C("examChooser.exams.header")},get children(){return $($t,{get options(){return vv(e.dojo.details.exams)},get value(){return r()},onChange:t})}}),h,p),g(u,$(ue,{get headerLabel(){return C("examChooser.filters.header")},get children(){return $(pt,{get value(){return a()},onChange:n})}}),S,b),g(u,$(ue,{get headerLabel(){return C("examChooser.order.header")},get children(){return $(St,{get value(){return i()},onChange:s,onForceRefresh:l})}}),x,P),g(ae,(()=>{var ne=Yr(()=>r().size>0);return()=>ne()&&(()=>{var ie=y(fv),H=ie.firstChild,Gr=H.firstChild,[Pe,Nr]=w(Gr.nextSibling),zr=Pe.nextSibling,[Br,Hr]=w(zr.nextSibling),Kr=H.nextSibling,[qr,Ur]=w(Kr.nextSibling);return g(H,$(ge,{size:"small",color:"primary",icon:it,get label(){return C("examChooser.read")},onClick:d}),Pe,Nr),g(H,$(ge,{size:"small",color:"secondary",icon:rt,get label(){return C("examChooser.print")},onClick:()=>window.print()}),Br,Hr),g(ie,$(gt,{get techniques(){return f()}}),qr,Ur),ie})()})()),u})()};function vv(e){return e.map(r=>({id:r.id,label:C(r.labelKey)}))}export{pv as TechniqueChooser};
