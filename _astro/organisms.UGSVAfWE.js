import{g as I,j as nr,r as de,t as M,d as $,o as ir,k as sr,i as b,l as Hr,c as E,s as Te,f as xe,n as Kr,h as qr,p as we,q as Ur,b as P,e as Jr}from"./web._rAx8qX5.js";import{t as m,E as kr,c as Wr,a as Xr}from"./techniqueStore.CXU_b4-N.js";import{C as _e,I as Vr}from"./print.DkceABPe.js";import{S as ce}from"./ForEntries.Dbpf_zwV.js";import{c as K,g as or}from"./_commonjsHelpers.BosuxZz1.js";var Yr=M('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M17.65 6.35A7.96 7.96 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z">');const Zr=(e={})=>(()=>{var r=I(Yr);return nr(r,e,!0,!0),de(),r})();var Qr=M('<svg xmlns=http://www.w3.org/2000/svg width=24 height=24><path d="M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4m-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14">');const et=(e={})=>(()=>{var r=I(Qr);return nr(r,e,!0,!0),de(),r})(),rt=["suwari waza","hanmi handachi waza","tachi waza","tanto dori","jo nage","jo dori","tachi dori"],tt=e=>{function r(t,a){const n=new Set(e.value);a?n.add(t):n.delete(t),e.onChange(n)}return e.options.map(({id:t,label:a,wide:n})=>$(_e,{class:n?"col-span-2":"",get value(){return e.value.has(t)},text:a,onChange:i=>r(t,i)}))};function ne([e,r],{name:t,storage:a,serialize:n=JSON.stringify,deserialize:i=JSON.parse}){const s=a??localStorage,o=s.getItem(t);return setTimeout(()=>{o!=null&&r(i(o))}),ir(()=>{sr(()=>{s.setItem(t,n(e()))})}),[e,r]}var at=M('<div><header class="text-sm font-bold flex items-center pb-4 rounded gap-4"><div class="border-t border-secondary flex-1"></div><div class=""></div><div class="border-t flex-1 border-secondary"></div></header><div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 mb-4">');const ie=e=>(()=>{var r=I(at),t=r.firstChild,a=t.firstChild,n=a.nextSibling,i=t.nextSibling;return b(n,()=>e.headerLabel),b(i,()=>e.children),r})(),nt=e=>$(_e,{get text(){return m("examChooser.filters.kneeFriendly")},get value(){return e.value.kneeFriendly??!1},onChange:r=>e.onChange({kneeFriendly:r})}),it="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let st=(e=21)=>{let r="",t=crypto.getRandomValues(new Uint8Array(e));for(;e--;)r+=it[t[e]&63];return r};var ot=M("<div><input type=range min=1 max=100><label>");const ut=e=>{function r(o,u){e.onChange({...e.value,[o]:u})}const t=st(),[a,n]=E(!1),[i,s]=E(e.value.includePercent);return sr(()=>s(e.value.includePercent)),ir(()=>{n(!0)}),[$(_e,{get text(){return m("examChooser.order.randomize")},get value(){return e.value.randomize},onChange:o=>r("randomize",o)}),$(ce,{color:"secondary",icon:Zr,get label(){return m("examChooser.order.shuffle")},get disabled(){return!e.value.randomize},get onClick(){return e.onForceRefresh}}),(()=>{var o=I(ot),u=o.firstChild,c=u.nextSibling;return u.addEventListener("change",f=>r("includePercent",Number(f.target.value))),u.$$input=f=>s(Number(f.target.value)),Te(u,"id",t),Te(c,"for",t),b(c,()=>m("examChooser.order.includePercent",{percent:i()})),xe(f=>{var h={"flex flex-col justify-center col-span-2 items-center transition-opacity duration-200":!0,"text-secondary-light":!e.value.randomize,"opacity-0":!a(),"opacity-100":a()},l=`w-2/3 ${a()?"opacity-100":"opacity-0"} accent-primary`,d=!a||!e.value.randomize;return f.e=Kr(o,h,f.e),l!==f.t&&qr(u,f.t=l),d!==f.a&&we(u,"disabled",f.a=d),f},{e:void 0,t:void 0,a:void 0}),xe(()=>we(u,"value",i())),de(),o})()]};Hr(["input"]);function ct(e){const r=[];for(const t of e)for(const[a,n]of q(t.techniques))for(const[i,s]of q(n))for(const[o,u]of q(s))for(const[c,f]of q(u))r.push({execution:a,attack:i,defence:o,direction:c,metadata:f});return r}const q=Object.entries,lt={kneeFriendly:{filter:e=>e.execution!=="suwari waza"&&e.execution!=="hanmi handachi waza"}};function ft(e){return r=>!e.kneeFriendly||lt.kneeFriendly.filter(r)}function vt(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}var ht=vt,gt=Math.floor,dt=Math.random;function _t(e,r){return e+gt(dt()*(r-e+1))}var $t=_t,pt=$t;function yt(e,r){var t=-1,a=e.length,n=a-1;for(r=r===void 0?a:r;++t<r;){var i=pt(t,n),s=e[i];e[i]=e[t],e[t]=s}return e.length=r,e}var ur=yt,bt=ht,mt=ur;function At(e){return mt(bt(e))}var St=At;function Ct(e,r){for(var t=-1,a=e==null?0:e.length,n=Array(a);++t<a;)n[t]=r(e[t],t,e);return n}var cr=Ct,Tt=cr;function xt(e,r){return Tt(r,function(t){return e[t]})}var wt=xt;function Ot(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}var Pt=Ot,Et=typeof K=="object"&&K&&K.Object===Object&&K,lr=Et,It=lr,Mt=typeof self=="object"&&self&&self.Object===Object&&self,jt=It||Mt||Function("return this")(),C=jt,Lt=C,Ft=Lt.Symbol,V=Ft,Oe=V,fr=Object.prototype,Dt=fr.hasOwnProperty,Rt=fr.toString,G=Oe?Oe.toStringTag:void 0;function Gt(e){var r=Dt.call(e,G),t=e[G];try{e[G]=void 0;var a=!0}catch{}var n=Rt.call(e);return a&&(r?e[G]=t:delete e[G]),n}var Nt=Gt,zt=Object.prototype,Bt=zt.toString;function Ht(e){return Bt.call(e)}var Kt=Ht,Pe=V,qt=Nt,Ut=Kt,Jt="[object Null]",kt="[object Undefined]",Ee=Pe?Pe.toStringTag:void 0;function Wt(e){return e==null?e===void 0?kt:Jt:Ee&&Ee in Object(e)?qt(e):Ut(e)}var N=Wt;function Xt(e){return e!=null&&typeof e=="object"}var z=Xt,Vt=N,Yt=z,Zt="[object Arguments]";function Qt(e){return Yt(e)&&Vt(e)==Zt}var ea=Qt,Ie=ea,ra=z,vr=Object.prototype,ta=vr.hasOwnProperty,aa=vr.propertyIsEnumerable,na=Ie(function(){return arguments}())?Ie:function(e){return ra(e)&&ta.call(e,"callee")&&!aa.call(e,"callee")},hr=na,ia=Array.isArray,A=ia,k={exports:{}};function sa(){return!1}var oa=sa;k.exports;(function(e,r){var t=C,a=oa,n=r&&!r.nodeType&&r,i=n&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===n,o=s?t.Buffer:void 0,u=o?o.isBuffer:void 0,c=u||a;e.exports=c})(k,k.exports);var gr=k.exports,ua=9007199254740991,ca=/^(?:0|[1-9]\d*)$/;function la(e,r){var t=typeof e;return r=r??ua,!!r&&(t=="number"||t!="symbol"&&ca.test(e))&&e>-1&&e%1==0&&e<r}var dr=la,fa=9007199254740991;function va(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=fa}var $e=va,ha=N,ga=$e,da=z,_a="[object Arguments]",$a="[object Array]",pa="[object Boolean]",ya="[object Date]",ba="[object Error]",ma="[object Function]",Aa="[object Map]",Sa="[object Number]",Ca="[object Object]",Ta="[object RegExp]",xa="[object Set]",wa="[object String]",Oa="[object WeakMap]",Pa="[object ArrayBuffer]",Ea="[object DataView]",Ia="[object Float32Array]",Ma="[object Float64Array]",ja="[object Int8Array]",La="[object Int16Array]",Fa="[object Int32Array]",Da="[object Uint8Array]",Ra="[object Uint8ClampedArray]",Ga="[object Uint16Array]",Na="[object Uint32Array]",v={};v[Ia]=v[Ma]=v[ja]=v[La]=v[Fa]=v[Da]=v[Ra]=v[Ga]=v[Na]=!0;v[_a]=v[$a]=v[Pa]=v[pa]=v[Ea]=v[ya]=v[ba]=v[ma]=v[Aa]=v[Sa]=v[Ca]=v[Ta]=v[xa]=v[wa]=v[Oa]=!1;function za(e){return da(e)&&ga(e.length)&&!!v[ha(e)]}var Ba=za;function Ha(e){return function(r){return e(r)}}var Ka=Ha,W={exports:{}};W.exports;(function(e,r){var t=lr,a=r&&!r.nodeType&&r,n=a&&!0&&e&&!e.nodeType&&e,i=n&&n.exports===a,s=i&&t.process,o=function(){try{var u=n&&n.require&&n.require("util").types;return u||s&&s.binding&&s.binding("util")}catch{}}();e.exports=o})(W,W.exports);var qa=W.exports,Ua=Ba,Ja=Ka,Me=qa,je=Me&&Me.isTypedArray,ka=je?Ja(je):Ua,_r=ka,Wa=Pt,Xa=hr,Va=A,Ya=gr,Za=dr,Qa=_r,en=Object.prototype,rn=en.hasOwnProperty;function tn(e,r){var t=Va(e),a=!t&&Xa(e),n=!t&&!a&&Ya(e),i=!t&&!a&&!n&&Qa(e),s=t||a||n||i,o=s?Wa(e.length,String):[],u=o.length;for(var c in e)(r||rn.call(e,c))&&!(s&&(c=="length"||n&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Za(c,u)))&&o.push(c);return o}var an=tn,nn=Object.prototype;function sn(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||nn;return e===t}var on=sn;function un(e,r){return function(t){return e(r(t))}}var cn=un,ln=cn,fn=ln(Object.keys,Object),vn=fn,hn=on,gn=vn,dn=Object.prototype,_n=dn.hasOwnProperty;function $n(e){if(!hn(e))return gn(e);var r=[];for(var t in Object(e))_n.call(e,t)&&t!="constructor"&&r.push(t);return r}var pn=$n;function yn(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var pe=yn,bn=N,mn=pe,An="[object AsyncFunction]",Sn="[object Function]",Cn="[object GeneratorFunction]",Tn="[object Proxy]";function xn(e){if(!mn(e))return!1;var r=bn(e);return r==Sn||r==Cn||r==An||r==Tn}var $r=xn,wn=$r,On=$e;function Pn(e){return e!=null&&On(e.length)&&!wn(e)}var pr=Pn,En=an,In=pn,Mn=pr;function jn(e){return Mn(e)?En(e):In(e)}var Y=jn,Ln=wt,Fn=Y;function Dn(e){return e==null?[]:Ln(e,Fn(e))}var Rn=Dn,Gn=ur,Nn=Rn;function zn(e){return Gn(Nn(e))}var Bn=zn,Hn=St,Kn=Bn,qn=A;function Un(e){var r=qn(e)?Hn:Kn;return r(e)}var Jn=Un;const kn=or(Jn);function Wn(e){return kn(e)}function Xn(e,{includePercent:r=100}={}){const t=Wn(e),a=Math.ceil(r*e.length/100);return t.slice(0,a)}var Vn=C,Yn=Vn["__core-js_shared__"],Zn=Yn,se=Zn,Le=function(){var e=/[^.]+$/.exec(se&&se.keys&&se.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Qn(e){return!!Le&&Le in e}var ei=Qn,ri=Function.prototype,ti=ri.toString;function ai(e){if(e!=null){try{return ti.call(e)}catch{}try{return e+""}catch{}}return""}var yr=ai,ni=$r,ii=ei,si=pe,oi=yr,ui=/[\\^$.*+?()[\]{}|]/g,ci=/^\[object .+?Constructor\]$/,li=Function.prototype,fi=Object.prototype,vi=li.toString,hi=fi.hasOwnProperty,gi=RegExp("^"+vi.call(hi).replace(ui,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function di(e){if(!si(e)||ii(e))return!1;var r=ni(e)?gi:ci;return r.test(oi(e))}var _i=di;function $i(e,r){return e?.[r]}var pi=$i,yi=_i,bi=pi;function mi(e,r){var t=bi(e,r);return yi(t)?t:void 0}var w=mi,Ai=w,Si=function(){try{var e=Ai(Object,"defineProperty");return e({},"",{}),e}catch{}}(),Ci=Si,Fe=Ci;function Ti(e,r,t){r=="__proto__"&&Fe?Fe(e,r,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[r]=t}var xi=Ti;function wi(e,r,t,a){for(var n=-1,i=e==null?0:e.length;++n<i;){var s=e[n];r(a,s,t(s),e)}return a}var Oi=wi;function Pi(e){return function(r,t,a){for(var n=-1,i=Object(r),s=a(r),o=s.length;o--;){var u=s[e?o:++n];if(t(i[u],u,i)===!1)break}return r}}var Ei=Pi,Ii=Ei,Mi=Ii(),ji=Mi,Li=ji,Fi=Y;function Di(e,r){return e&&Li(e,r,Fi)}var Ri=Di,Gi=pr;function Ni(e,r){return function(t,a){if(t==null)return t;if(!Gi(t))return e(t,a);for(var n=t.length,i=r?n:-1,s=Object(t);(r?i--:++i<n)&&a(s[i],i,s)!==!1;);return t}}var zi=Ni,Bi=Ri,Hi=zi,Ki=Hi(Bi),qi=Ki,Ui=qi;function Ji(e,r,t,a){return Ui(e,function(n,i,s){r(a,n,t(n),s)}),a}var ki=Ji;function Wi(){this.__data__=[],this.size=0}var Xi=Wi;function Vi(e,r){return e===r||e!==e&&r!==r}var br=Vi,Yi=br;function Zi(e,r){for(var t=e.length;t--;)if(Yi(e[t][0],r))return t;return-1}var Z=Zi,Qi=Z,es=Array.prototype,rs=es.splice;function ts(e){var r=this.__data__,t=Qi(r,e);if(t<0)return!1;var a=r.length-1;return t==a?r.pop():rs.call(r,t,1),--this.size,!0}var as=ts,ns=Z;function is(e){var r=this.__data__,t=ns(r,e);return t<0?void 0:r[t][1]}var ss=is,os=Z;function us(e){return os(this.__data__,e)>-1}var cs=us,ls=Z;function fs(e,r){var t=this.__data__,a=ls(t,e);return a<0?(++this.size,t.push([e,r])):t[a][1]=r,this}var vs=fs,hs=Xi,gs=as,ds=ss,_s=cs,$s=vs;function j(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}j.prototype.clear=hs;j.prototype.delete=gs;j.prototype.get=ds;j.prototype.has=_s;j.prototype.set=$s;var Q=j,ps=Q;function ys(){this.__data__=new ps,this.size=0}var bs=ys;function ms(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}var As=ms;function Ss(e){return this.__data__.get(e)}var Cs=Ss;function Ts(e){return this.__data__.has(e)}var xs=Ts,ws=w,Os=C,Ps=ws(Os,"Map"),ye=Ps,Es=w,Is=Es(Object,"create"),ee=Is,De=ee;function Ms(){this.__data__=De?De(null):{},this.size=0}var js=Ms;function Ls(e){var r=this.has(e)&&delete this.__data__[e];return this.size-=r?1:0,r}var Fs=Ls,Ds=ee,Rs="__lodash_hash_undefined__",Gs=Object.prototype,Ns=Gs.hasOwnProperty;function zs(e){var r=this.__data__;if(Ds){var t=r[e];return t===Rs?void 0:t}return Ns.call(r,e)?r[e]:void 0}var Bs=zs,Hs=ee,Ks=Object.prototype,qs=Ks.hasOwnProperty;function Us(e){var r=this.__data__;return Hs?r[e]!==void 0:qs.call(r,e)}var Js=Us,ks=ee,Ws="__lodash_hash_undefined__";function Xs(e,r){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=ks&&r===void 0?Ws:r,this}var Vs=Xs,Ys=js,Zs=Fs,Qs=Bs,eo=Js,ro=Vs;function L(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}L.prototype.clear=Ys;L.prototype.delete=Zs;L.prototype.get=Qs;L.prototype.has=eo;L.prototype.set=ro;var to=L,Re=to,ao=Q,no=ye;function io(){this.size=0,this.__data__={hash:new Re,map:new(no||ao),string:new Re}}var so=io;function oo(e){var r=typeof e;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?e!=="__proto__":e===null}var uo=oo,co=uo;function lo(e,r){var t=e.__data__;return co(r)?t[typeof r=="string"?"string":"hash"]:t.map}var re=lo,fo=re;function vo(e){var r=fo(this,e).delete(e);return this.size-=r?1:0,r}var ho=vo,go=re;function _o(e){return go(this,e).get(e)}var $o=_o,po=re;function yo(e){return po(this,e).has(e)}var bo=yo,mo=re;function Ao(e,r){var t=mo(this,e),a=t.size;return t.set(e,r),this.size+=t.size==a?0:1,this}var So=Ao,Co=so,To=ho,xo=$o,wo=bo,Oo=So;function F(e){var r=-1,t=e==null?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}F.prototype.clear=Co;F.prototype.delete=To;F.prototype.get=xo;F.prototype.has=wo;F.prototype.set=Oo;var be=F,Po=Q,Eo=ye,Io=be,Mo=200;function jo(e,r){var t=this.__data__;if(t instanceof Po){var a=t.__data__;if(!Eo||a.length<Mo-1)return a.push([e,r]),this.size=++t.size,this;t=this.__data__=new Io(a)}return t.set(e,r),this.size=t.size,this}var Lo=jo,Fo=Q,Do=bs,Ro=As,Go=Cs,No=xs,zo=Lo;function D(e){var r=this.__data__=new Fo(e);this.size=r.size}D.prototype.clear=Do;D.prototype.delete=Ro;D.prototype.get=Go;D.prototype.has=No;D.prototype.set=zo;var mr=D,Bo="__lodash_hash_undefined__";function Ho(e){return this.__data__.set(e,Bo),this}var Ko=Ho;function qo(e){return this.__data__.has(e)}var Uo=qo,Jo=be,ko=Ko,Wo=Uo;function X(e){var r=-1,t=e==null?0:e.length;for(this.__data__=new Jo;++r<t;)this.add(e[r])}X.prototype.add=X.prototype.push=ko;X.prototype.has=Wo;var Xo=X;function Vo(e,r){for(var t=-1,a=e==null?0:e.length;++t<a;)if(r(e[t],t,e))return!0;return!1}var Yo=Vo;function Zo(e,r){return e.has(r)}var Qo=Zo,eu=Xo,ru=Yo,tu=Qo,au=1,nu=2;function iu(e,r,t,a,n,i){var s=t&au,o=e.length,u=r.length;if(o!=u&&!(s&&u>o))return!1;var c=i.get(e),f=i.get(r);if(c&&f)return c==r&&f==e;var h=-1,l=!0,d=t&nu?new eu:void 0;for(i.set(e,r),i.set(r,e);++h<o;){var g=e[h],_=r[h];if(a)var p=s?a(_,g,h,r,e,i):a(g,_,h,e,r,i);if(p!==void 0){if(p)continue;l=!1;break}if(d){if(!ru(r,function(y,S){if(!tu(d,S)&&(g===y||n(g,y,t,a,i)))return d.push(S)})){l=!1;break}}else if(!(g===_||n(g,_,t,a,i))){l=!1;break}}return i.delete(e),i.delete(r),l}var Ar=iu,su=C,ou=su.Uint8Array,uu=ou;function cu(e){var r=-1,t=Array(e.size);return e.forEach(function(a,n){t[++r]=[n,a]}),t}var lu=cu;function fu(e){var r=-1,t=Array(e.size);return e.forEach(function(a){t[++r]=a}),t}var vu=fu,Ge=V,Ne=uu,hu=br,gu=Ar,du=lu,_u=vu,$u=1,pu=2,yu="[object Boolean]",bu="[object Date]",mu="[object Error]",Au="[object Map]",Su="[object Number]",Cu="[object RegExp]",Tu="[object Set]",xu="[object String]",wu="[object Symbol]",Ou="[object ArrayBuffer]",Pu="[object DataView]",ze=Ge?Ge.prototype:void 0,oe=ze?ze.valueOf:void 0;function Eu(e,r,t,a,n,i,s){switch(t){case Pu:if(e.byteLength!=r.byteLength||e.byteOffset!=r.byteOffset)return!1;e=e.buffer,r=r.buffer;case Ou:return!(e.byteLength!=r.byteLength||!i(new Ne(e),new Ne(r)));case yu:case bu:case Su:return hu(+e,+r);case mu:return e.name==r.name&&e.message==r.message;case Cu:case xu:return e==r+"";case Au:var o=du;case Tu:var u=a&$u;if(o||(o=_u),e.size!=r.size&&!u)return!1;var c=s.get(e);if(c)return c==r;a|=pu,s.set(e,r);var f=gu(o(e),o(r),a,n,i,s);return s.delete(e),f;case wu:if(oe)return oe.call(e)==oe.call(r)}return!1}var Iu=Eu;function Mu(e,r){for(var t=-1,a=r.length,n=e.length;++t<a;)e[n+t]=r[t];return e}var ju=Mu,Lu=ju,Fu=A;function Du(e,r,t){var a=r(e);return Fu(e)?a:Lu(a,t(e))}var Ru=Du;function Gu(e,r){for(var t=-1,a=e==null?0:e.length,n=0,i=[];++t<a;){var s=e[t];r(s,t,e)&&(i[n++]=s)}return i}var Nu=Gu;function zu(){return[]}var Bu=zu,Hu=Nu,Ku=Bu,qu=Object.prototype,Uu=qu.propertyIsEnumerable,Be=Object.getOwnPropertySymbols,Ju=Be?function(e){return e==null?[]:(e=Object(e),Hu(Be(e),function(r){return Uu.call(e,r)}))}:Ku,ku=Ju,Wu=Ru,Xu=ku,Vu=Y;function Yu(e){return Wu(e,Vu,Xu)}var Zu=Yu,He=Zu,Qu=1,ec=Object.prototype,rc=ec.hasOwnProperty;function tc(e,r,t,a,n,i){var s=t&Qu,o=He(e),u=o.length,c=He(r),f=c.length;if(u!=f&&!s)return!1;for(var h=u;h--;){var l=o[h];if(!(s?l in r:rc.call(r,l)))return!1}var d=i.get(e),g=i.get(r);if(d&&g)return d==r&&g==e;var _=!0;i.set(e,r),i.set(r,e);for(var p=s;++h<u;){l=o[h];var y=e[l],S=r[l];if(a)var B=s?a(S,y,l,r,e,i):a(y,S,l,e,r,i);if(!(B===void 0?y===S||n(y,S,t,a,i):B)){_=!1;break}p||(p=l=="constructor")}if(_&&!p){var T=e.constructor,O=r.constructor;T!=O&&"constructor"in e&&"constructor"in r&&!(typeof T=="function"&&T instanceof T&&typeof O=="function"&&O instanceof O)&&(_=!1)}return i.delete(e),i.delete(r),_}var ac=tc,nc=w,ic=C,sc=nc(ic,"DataView"),oc=sc,uc=w,cc=C,lc=uc(cc,"Promise"),fc=lc,vc=w,hc=C,gc=vc(hc,"Set"),dc=gc,_c=w,$c=C,pc=_c($c,"WeakMap"),yc=pc,le=oc,fe=ye,ve=fc,he=dc,ge=yc,Sr=N,R=yr,Ke="[object Map]",bc="[object Object]",qe="[object Promise]",Ue="[object Set]",Je="[object WeakMap]",ke="[object DataView]",mc=R(le),Ac=R(fe),Sc=R(ve),Cc=R(he),Tc=R(ge),x=Sr;(le&&x(new le(new ArrayBuffer(1)))!=ke||fe&&x(new fe)!=Ke||ve&&x(ve.resolve())!=qe||he&&x(new he)!=Ue||ge&&x(new ge)!=Je)&&(x=function(e){var r=Sr(e),t=r==bc?e.constructor:void 0,a=t?R(t):"";if(a)switch(a){case mc:return ke;case Ac:return Ke;case Sc:return qe;case Cc:return Ue;case Tc:return Je}return r});var xc=x,ue=mr,wc=Ar,Oc=Iu,Pc=ac,We=xc,Xe=A,Ve=gr,Ec=_r,Ic=1,Ye="[object Arguments]",Ze="[object Array]",U="[object Object]",Mc=Object.prototype,Qe=Mc.hasOwnProperty;function jc(e,r,t,a,n,i){var s=Xe(e),o=Xe(r),u=s?Ze:We(e),c=o?Ze:We(r);u=u==Ye?U:u,c=c==Ye?U:c;var f=u==U,h=c==U,l=u==c;if(l&&Ve(e)){if(!Ve(r))return!1;s=!0,f=!1}if(l&&!f)return i||(i=new ue),s||Ec(e)?wc(e,r,t,a,n,i):Oc(e,r,u,t,a,n,i);if(!(t&Ic)){var d=f&&Qe.call(e,"__wrapped__"),g=h&&Qe.call(r,"__wrapped__");if(d||g){var _=d?e.value():e,p=g?r.value():r;return i||(i=new ue),n(_,p,t,a,i)}}return l?(i||(i=new ue),Pc(e,r,t,a,n,i)):!1}var Lc=jc,Fc=Lc,er=z;function Cr(e,r,t,a,n){return e===r?!0:e==null||r==null||!er(e)&&!er(r)?e!==e&&r!==r:Fc(e,r,t,a,Cr,n)}var Tr=Cr,Dc=mr,Rc=Tr,Gc=1,Nc=2;function zc(e,r,t,a){var n=t.length,i=n,s=!a;if(e==null)return!i;for(e=Object(e);n--;){var o=t[n];if(s&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++n<i;){o=t[n];var u=o[0],c=e[u],f=o[1];if(s&&o[2]){if(c===void 0&&!(u in e))return!1}else{var h=new Dc;if(a)var l=a(c,f,u,e,r,h);if(!(l===void 0?Rc(f,c,Gc|Nc,a,h):l))return!1}}return!0}var Bc=zc,Hc=pe;function Kc(e){return e===e&&!Hc(e)}var xr=Kc,qc=xr,Uc=Y;function Jc(e){for(var r=Uc(e),t=r.length;t--;){var a=r[t],n=e[a];r[t]=[a,n,qc(n)]}return r}var kc=Jc;function Wc(e,r){return function(t){return t==null?!1:t[e]===r&&(r!==void 0||e in Object(t))}}var wr=Wc,Xc=Bc,Vc=kc,Yc=wr;function Zc(e){var r=Vc(e);return r.length==1&&r[0][2]?Yc(r[0][0],r[0][1]):function(t){return t===e||Xc(t,e,r)}}var Qc=Zc,el=N,rl=z,tl="[object Symbol]";function al(e){return typeof e=="symbol"||rl(e)&&el(e)==tl}var me=al,nl=A,il=me,sl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ol=/^\w*$/;function ul(e,r){if(nl(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||il(e)?!0:ol.test(e)||!sl.test(e)||r!=null&&e in Object(r)}var Ae=ul,Or=be,cl="Expected a function";function Se(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(cl);var t=function(){var a=arguments,n=r?r.apply(this,a):a[0],i=t.cache;if(i.has(n))return i.get(n);var s=e.apply(this,a);return t.cache=i.set(n,s)||i,s};return t.cache=new(Se.Cache||Or),t}Se.Cache=Or;var ll=Se,fl=ll,vl=500;function hl(e){var r=fl(e,function(a){return t.size===vl&&t.clear(),a}),t=r.cache;return r}var gl=hl,dl=gl,_l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$l=/\\(\\)?/g,pl=dl(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(_l,function(t,a,n,i){r.push(n?i.replace($l,"$1"):a||t)}),r}),yl=pl,rr=V,bl=cr,ml=A,Al=me,Sl=1/0,tr=rr?rr.prototype:void 0,ar=tr?tr.toString:void 0;function Pr(e){if(typeof e=="string")return e;if(ml(e))return bl(e,Pr)+"";if(Al(e))return ar?ar.call(e):"";var r=e+"";return r=="0"&&1/e==-Sl?"-0":r}var Cl=Pr,Tl=Cl;function xl(e){return e==null?"":Tl(e)}var wl=xl,Ol=A,Pl=Ae,El=yl,Il=wl;function Ml(e,r){return Ol(e)?e:Pl(e,r)?[e]:El(Il(e))}var Er=Ml,jl=me,Ll=1/0;function Fl(e){if(typeof e=="string"||jl(e))return e;var r=e+"";return r=="0"&&1/e==-Ll?"-0":r}var te=Fl,Dl=Er,Rl=te;function Gl(e,r){r=Dl(r,e);for(var t=0,a=r.length;e!=null&&t<a;)e=e[Rl(r[t++])];return t&&t==a?e:void 0}var Ir=Gl,Nl=Ir;function zl(e,r,t){var a=e==null?void 0:Nl(e,r);return a===void 0?t:a}var Bl=zl;function Hl(e,r){return e!=null&&r in Object(e)}var Kl=Hl,ql=Er,Ul=hr,Jl=A,kl=dr,Wl=$e,Xl=te;function Vl(e,r,t){r=ql(r,e);for(var a=-1,n=r.length,i=!1;++a<n;){var s=Xl(r[a]);if(!(i=e!=null&&t(e,s)))break;e=e[s]}return i||++a!=n?i:(n=e==null?0:e.length,!!n&&Wl(n)&&kl(s,n)&&(Jl(e)||Ul(e)))}var Yl=Vl,Zl=Kl,Ql=Yl;function ef(e,r){return e!=null&&Ql(e,r,Zl)}var rf=ef,tf=Tr,af=Bl,nf=rf,sf=Ae,of=xr,uf=wr,cf=te,lf=1,ff=2;function vf(e,r){return sf(e)&&of(r)?uf(cf(e),r):function(t){var a=af(t,e);return a===void 0&&a===r?nf(t,e):tf(r,a,lf|ff)}}var hf=vf;function gf(e){return e}var df=gf;function _f(e){return function(r){return r?.[e]}}var $f=_f,pf=Ir;function yf(e){return function(r){return pf(r,e)}}var bf=yf,mf=$f,Af=bf,Sf=Ae,Cf=te;function Tf(e){return Sf(e)?mf(Cf(e)):Af(e)}var xf=Tf,wf=Qc,Of=hf,Pf=df,Ef=A,If=xf;function Mf(e){return typeof e=="function"?e:e==null?Pf:typeof e=="object"?Ef(e)?Of(e[0],e[1]):wf(e):If(e)}var jf=Mf,Lf=Oi,Ff=ki,Df=jf,Rf=A;function Gf(e,r){return function(t,a){var n=Rf(t)?Lf:Ff,i=r?r():{};return n(t,e,Df(a),i)}}var Nf=Gf,zf=xi,Bf=Nf,Hf=Object.prototype,Kf=Hf.hasOwnProperty,qf=Bf(function(e,r,t){Kf.call(e,t)?e[t].push(r):zf(e,t,[r])}),Uf=qf;const Jf=or(Uf);function kf(e,{orderExecutions:r=!1}={}){return J(e,"execution",r?rt:null,a=>J(a,"attack",null,n=>J(n,"defence",null,i=>J(i,"direction",null,s=>s))))}function J(e,r,t,a){const n=Wf(e,r);return t!=null?t.flatMap(i=>a(n[i]??[])):Object.values(n).flatMap(a)}function Wf(e,r){return Jf(e,r)}function Xf(e,r){const t=r.selectedExams??new Set,a=r.filters??{},n=r.order?.randomize??!1,i=r.order?.includePercent??100,s=r.order?.orderExecutions??!1;let o=ct(e.filter(u=>t.has(u.id)));return o=o.filter(ft(a)),n&&(o=Xn(o,{includePercent:i})),kf(o,{orderExecutions:s})}var Vf=M("<div><!$><!/><!$><!/><!$><!/><div>"),Yf=M('<div class=my-10><div class="flex justify-end gap-4"><!$><!/><!$><!/></div><!$><!/>');const nv=e=>{const[r,t]=ne(E(new Set),{name:"examSelection:"+e.dojo.info.id,storage:sessionStorage,serialize:l=>JSON.stringify(Array.from(l)),deserialize:l=>new Set(JSON.parse(l))}),[a,n]=ne(E({kneeFriendly:!1}),{name:"techniqueFilters:"+e.dojo.info.id,storage:sessionStorage}),[i,s]=ne(E({randomize:!0,includePercent:80}),{name:"orderOptions:"+e.dojo.info.id,storage:sessionStorage}),[o,u]=E(!1);function c(){u(l=>!l)}const f=Ur(()=>(o(),Xf(e.dojo.details.exams,{order:{...i(),orderExecutions:!0},selectedExams:r(),filters:a()}))),h=async()=>{const{save:l}=Wr(e.dojo.info.id);await l(f()),document.location.href=Xr(`/${e.dojo.info.id}/reader`)};return(()=>{var l=I(Vf),d=l.firstChild,[g,_]=P(d.nextSibling),p=g.nextSibling,[y,S]=P(p.nextSibling),B=y.nextSibling,[T,O]=P(B.nextSibling),Mr=T.nextSibling;return b(l,$(ie,{get headerLabel(){return m("examChooser.exams.header")},get children(){return $(tt,{get options(){return Zf(e.dojo.details.exams)},get value(){return r()},onChange:t})}}),g,_),b(l,$(ie,{get headerLabel(){return m("examChooser.filters.header")},get children(){return $(nt,{get value(){return a()},onChange:n})}}),y,S),b(l,$(ie,{get headerLabel(){return m("examChooser.order.header")},get children(){return $(ut,{get value(){return i()},onChange:s,onForceRefresh:c})}}),T,O),b(Mr,(()=>{var jr=Jr(()=>r().size>0);return()=>jr()&&(()=>{var ae=I(Yf),H=ae.firstChild,Lr=H.firstChild,[Ce,Fr]=P(Lr.nextSibling),Dr=Ce.nextSibling,[Rr,Gr]=P(Dr.nextSibling),Nr=H.nextSibling,[zr,Br]=P(Nr.nextSibling);return b(H,$(ce,{size:"small",color:"primary",icon:et,get label(){return m("examChooser.read")},onClick:h}),Ce,Fr),b(H,$(ce,{size:"small",color:"secondary",icon:Vr,get label(){return m("examChooser.print")},onClick:()=>window.print()}),Rr,Gr),b(ae,$(kr,{get techniques(){return f()}}),zr,Br),ae})()})()),l})()};function Zf(e){return e.map(r=>({id:r.id,label:m(r.labelKey)}))}export{nv as TechniqueChooser};
