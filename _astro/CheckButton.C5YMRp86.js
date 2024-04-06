import{e as l,c as B,o as M,l as C,g as x,b,i as y,d as _,f as k,h as S,p as z,r as j,t as w,s as N}from"./web._rAx8qX5.js";function $(...e){return f(e)}function f(e){return Array.isArray(e)?e.map(f).join(" ").trim():typeof e=="object"&&e!=null?f(Object.keys(e).filter(t=>e[t])):typeof e=="boolean"?"":e??""}const J=["primary","secondary"],K=["small","normal","large"],R={normal:"p-4 gap-2",small:"p-2 text-sm gap-1",large:"p-8 text-xl gap-3"},H={primary:"border-primary text-primary-dark outline-primary hover:bg-primary-lightest disabled:hover:bg-white",secondary:"border-secondary text-secondary-dark outline-secondary  hover:bg-secondary-lightest disabled:hover:bg-white"},O="outline outline-4 -outline-offset-4 active:outline-1 active:outline-offset-0",P={primary:"text-primary-dark outline-primary bg-primary-lightest hover:bg-primary-light",secondary:"text-secondary-dark outline-secondary bg-secondary-lightest hover:bg-secondary-light"},q={normal:"",small:"scale-75 origin-center",large:"scale-150 origin-center"},D={primary:"fill-current",secondary:"fill-current"},E=e=>{const t=l(()=>e().color??"primary"),i=l(()=>e().size??"normal"),o=l(()=>e().highlighted??!1);return{buttonClasses:l(()=>$("flex items-center justify-center border rounded whitespace-nowrap truncate print:p-1 transition-all duration-100 hover:no-underline","active:outline","disabled:grayscale disabled:opacity-50",o()&&O,o()?P[t()]:H[t()],R[i()])),iconClasses:l(()=>$(q[i()],D[t()]))}};function A(){const[e,t]=B(!1);return M(()=>{t(!0)}),e}var F=w("<button><!$><!/><!$><!/>");const L=e=>{const t=A(),i=l(()=>!t||e.disabled),{buttonClasses:o,iconClasses:n}=E(()=>e);return(()=>{var s=x(F),u=s.firstChild,[g,h]=b(u.nextSibling),m=g.nextSibling,[v,a]=b(m.nextSibling);return s.$$click=r=>e.onClick?.(r),y(s,(()=>{var r=l(()=>!!e.icon);return()=>r()&&_(e.icon,{get class(){return n()}})})(),g,h),y(s,()=>e.label,v,a),k(r=>{var c=o(),d=i();return c!==r.e&&S(s,r.e=c),d!==r.t&&z(s,"disabled",r.t=d),r},{e:void 0,t:void 0}),j(),s})()};C(["click"]);var G=w("<button><!$><!/><!$><!/>");const Q=e=>{const t=A(),{buttonClasses:i,iconClasses:o}=E(()=>({...e,highlighted:e.value,disabled:e.disabled||!t()}));return(()=>{var n=x(G),s=n.firstChild,[u,g]=b(s.nextSibling),h=u.nextSibling,[m,v]=b(h.nextSibling);return n.$$click=()=>e.onChange(!e.value),y(n,(()=>{var a=l(()=>!!e.icon);return()=>a()&&_(e.icon,{get class(){return o()}})})(),u,g),y(n,()=>e.label??e.text,m,v),k(a=>{var r=i(),c=e.value,d=!t();return r!==a.e&&S(n,a.e=r),c!==a.t&&N(n,"aria-checked",a.t=c),d!==a.a&&z(n,"disabled",a.a=d),a},{e:void 0,t:void 0,a:void 0}),j(),n})()};C(["click"]);export{Q as C,L as S,J as a,K as b,$ as c,E as d};
