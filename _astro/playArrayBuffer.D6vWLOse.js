function u(){let t=null,e=null;return{promise:new Promise((o,a)=>{t=o,e=a}),resolve:t,reject:e}}function c(t){const e=new ArrayBuffer(t.byteLength);return new Uint8Array(e).set(new Uint8Array(t)),e}const d=async(t,e={})=>{const n=l(),{resolve:o,promise:a}=u(),r=n.createBufferSource(),i=c(t);if(r.buffer=await n.decodeAudioData(i),r.connect(n.destination),!e.abortSignal?.aborted)return e.abortSignal?.addEventListener("abort",()=>r.stop()),r.start(),r.addEventListener("ended",()=>o()),a};let s=null;function l(){return s==null&&(s=new AudioContext),s}export{d as p};
