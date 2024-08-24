import{f as a,c as p,p as v}from"./web.BBIpouoX.js";function h(...e){return m(e)}function m(e){return Array.isArray(e)?e.map(m).join(" ").trim():typeof e=="object"&&e!=null?m(Object.keys(e).filter(t=>e[t])):typeof e=="boolean"?"":e??""}const A=["primary","secondary"],B=["small","normal","large"],x={small:"h-8 text-sm gap-1 px-2",normal:"h-16 gap-2 px-4",large:"h-48 text-xl gap-12 px-6"},C={primary:"border-primary text-primary-dark outline-primary mouse:hover:bg-primary-lightest disabled:hover:bg-white",secondary:"border-secondary text-secondary-dark outline-secondary mouse:hover:bg-secondary-lightest disabled:hover:bg-white"},k="outline outline-4 -outline-offset-4 active:outline-1 active:outline-offset-0",w={primary:"text-primary-dark outline-primary bg-primary-lightest mouse:hover:bg-primary-light",secondary:"text-secondary-dark outline-secondary bg-secondary-lightest mouse:hover:bg-secondary-light"},E={normal:"",small:"scale-75 origin-center",large:"scale-[3] origin-center"},S={primary:"fill-current",secondary:"fill-current"},_=e=>{const t=a(()=>e().color??"primary"),n=a(()=>e().size??"normal"),u=a(()=>e().highlighted??!1);return{buttonClasses:a(()=>h(e().class,"flex items-center justify-center border rounded whitespace-nowrap print:p-1 transition-all duration-100 hover:no-underline","active:outline","disabled:grayscale disabled:opacity-50","bg-white","truncate",u()&&k,u()?w[t()]:C[t()],x[n()])),iconClasses:a(()=>h(E[n()],S[t()],"flex-shrink-0")),labelClasses:a(()=>h("flex-shrink","truncate"))}};function L(){const[e,t]=p(!1);return v(()=>{t(!0)}),e}const R="modulepreload",z=function(e){return"/"+e},g={},M=function(t,n,u){let y=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),f=o?.nonce||o?.getAttribute("nonce");y=Promise.all(n.map(r=>{if(r=z(r),r in g)return;g[r]=!0;const l=r.endsWith(".css"),b=l?'[rel="stylesheet"]':"";if(!!u)for(let c=i.length-1;c>=0;c--){const d=i[c];if(d.href===r&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${b}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":R,l||(s.as="script",s.crossOrigin=""),s.href=r,f&&s.setAttribute("nonce",f),document.head.appendChild(s),l)return new Promise((c,d)=>{s.addEventListener("load",c),s.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})}))}return y.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};export{M as _,_ as a,B as b,h as c,A as d,L as i};