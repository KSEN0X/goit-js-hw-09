import"./assets/modulepreload-polyfill-ec808ebb.js";const o="feedback-form-state",a=document.querySelector(".feedback-form"),r=a.querySelector("input"),s=a.querySelector("textarea"),c=()=>{const t=r.value.trim(),e=s.value.trim();t||e?localStorage.setItem(o,JSON.stringify({email:t,message:e})):localStorage.removeItem(o)},n=JSON.parse(localStorage.getItem(o))||{};r.value=n.email||"";s.value=n.message||"";a.addEventListener("input",t=>{const e=t.target.nodeName.toLowerCase();(e==="input"||e==="textarea")&&c()});a.addEventListener("submit",t=>{t.preventDefault();const e=r.value.trim(),l=s.value.trim();e&&l&&(console.log({email:e,message:l}),localStorage.removeItem(o),a.reset())});
//# sourceMappingURL=commonHelpers2.js.map
