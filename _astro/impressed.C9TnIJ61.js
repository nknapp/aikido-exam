const e=14.399999999999999,r=`
.- ☎01📧23456789ABCDEFGHIJKLMOPQRSTUVWXYZÄÖÜßabcdefghijklmnopqrstuvwxyzäöü`,i="zzzNDA3zb8L669HDH4üzzzßL4DLäYH\uD83DH8DJEäUHFzwwüzzzprtnmziL4932LI2üzyzxwop/ttxtrswtüvuz869@B8L66Dö74F";function z(t){new c(i,t)}class c{constructor(n,o){this.canvas=o;const s=this.canvas.getContext("2d");if(s==null)throw new Error("Canvas context is null");this.ctx=s,this.ctx.font="12px monospace",this.drawText(x(n))}drawText(n){let o=0;for(const s of n.split(`
`))this.ctx.fillText(s,0,o+=e);return this}}function x(t){return t.split("").map(a).join("")}function a(t){const n=r.indexOf(t);return n>=0?r[r.length-n-1]:t}export{z as c};
