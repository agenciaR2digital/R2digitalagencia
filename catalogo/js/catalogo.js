(()=>{
"use strict";
const C=window.R2_CONFIG,M=Array.isArray(window.R2_MODELS)?window.R2_MODELS:[];
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ok=v=>typeof v==="string"&&v.trim()&&!/^\[INSERIR/i.test(v.trim());
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const toast=t=>{const e=$("#toast");e.textContent=t;e.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("show"),4200)};
const num=()=>ok(C.whatsapp)?C.whatsapp.replace(/\D/g,""):"";
function wa(text){const n=num();if(!n){toast("WhatsApp ainda não configurado em js/config.js.");return}
  window.open(`https://wa.me/${n}?text=${encodeURIComponent(text)}`,"_blank","noopener,noreferrer")}
const msgs={...C.messages,catalogo:"Olá! Vi o catálogo da R2 Digital e gostaria de um site personalizado para meu negócio."};
$$("[data-wa]").forEach(b=>b.addEventListener("click",()=>wa(msgs[b.dataset.wa]||msgs.float)));

/* header, progresso, menu */
const header=$("#header"),prog=$("#progress");
const sc=()=>{const h=document.documentElement.scrollHeight-innerHeight;header.classList.toggle("scrolled",scrollY>40);prog.style.transform=`scaleX(${h>0?scrollY/h:0})`};
addEventListener("scroll",()=>requestAnimationFrame(sc),{passive:true});sc();
const burger=$("#burger"),nav=$("#nav");
const menu=o=>{nav.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);document.body.style.overflow=o?"hidden":""};
burger.addEventListener("click",()=>menu(!nav.classList.contains("open")));
$$(".nav a").forEach(a=>a.addEventListener("click",()=>menu(false)));
$("#nav .btn").addEventListener("click",()=>menu(false));
addEventListener("keydown",e=>e.key==="Escape"&&menu(false));

/* prévia automática */
function preview(n,c){
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><rect width="640" height="400" fill="#101511"/><rect x="40" y="36" width="560" height="328" rx="14" fill="#080B09" stroke="#00E67629"/><circle cx="64" cy="58" r="5" fill="#00E676"/><circle cx="82" cy="58" r="5" fill="#2a332d"/><circle cx="100" cy="58" r="5" fill="#2a332d"/><rect x="40" y="76" width="560" height="1" fill="#00E67629"/><rect x="72" y="110" width="170" height="14" rx="4" fill="#00E676"/><text x="72" y="170" font-family="Arial" font-weight="800" font-size="34" fill="#F5F7F5">${esc(n)}</text><text x="72" y="202" font-family="Arial" font-size="16" fill="#929A95">${esc(c)}</text><rect x="72" y="232" width="130" height="36" rx="8" fill="none" stroke="#00E676"/><rect x="380" y="110" width="190" height="130" rx="10" fill="#1a221d"/><rect x="380" y="256" width="90" height="70" rx="10" fill="#1a221d"/><rect x="480" y="256" width="90" height="70" rx="10" fill="#1a221d"/></svg>`;
  return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
}

/* filtros e cards */
const sold=m=>/vendid/i.test(m.status);
const cats=["Todos",...new Set(M.filter(m=>m&&m.name).map(m=>m.category).filter(Boolean))];
const stats=["Todos","Disponíveis","Vendidos"];
let cat="Todos",st="Todos";
const grid=$("#models"),empty=$("#empty"),fc=$("#filters"),fs=$("#statusFilters");
const btns=(a,cur)=>a.map(x=>`<button type="button" aria-pressed="${x===cur}" data-v="${esc(x)}">${esc(x)}</button>`).join("");
function render(){
  fc.innerHTML=btns(cats,cat);fs.innerHTML=btns(stats,st);fc.hidden=fs.hidden=!M.length;
  const list=M.filter(m=>m&&m.name&&(cat==="Todos"||m.category===cat)&&(st==="Todos"||(st==="Vendidos")===sold(m)));
  grid.innerHTML="";
  list.forEach((m,i)=>{
    const s=sold(m),link=ok(m.url)&&!/^\s*(javascript|data|vbscript):/i.test(m.url);
    const a=document.createElement("article");a.className="proj"+(s?" sold":"");a.style.animationDelay=i*70+"ms";
    a.innerHTML=`<div class="imgw"><span class="status ${s?"no":"ok"}">${s?"Vendido":"Disponível"}</span><img loading="lazy" alt="Prévia do modelo ${esc(m.name)}" width="640" height="400"></div><div class="pb"><div class="pm"><span>${esc(m.category)}</span></div><h3>${esc(m.name)}</h3><p>${esc(m.description)}</p><div class="pact">${s?`<a class="btn btn-ghost" aria-disabled="true">Modelo vendido</a>`:`<button class="btn" type="button">Quero este modelo</button>`}${link&&!s?`<a class="btn btn-ghost" href="${esc(m.url)}" target="_blank" rel="noopener noreferrer">Ver demonstração</a>`:""}</div></div>`;
    const img=$("img",a),fb=preview(m.name,m.category);img.onerror=()=>{img.onerror=null;img.src=fb};img.src=m.image&&m.image.trim()?m.image:fb;
    const b=$("button.btn",a);if(b)b.addEventListener("click",()=>wa(`Olá! Tenho interesse no modelo "${m.name}" do catálogo da R2 Digital.`));
    grid.appendChild(a);
  });
  empty.hidden=list.length>0;
}
[fc,fs].forEach(f=>f.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;if(f===fc)cat=b.dataset.v;else st=b.dataset.v;render()}));
render();

/* rodapé */
const ig=ok(C.instagram)?(/^https?:/i.test(C.instagram)?C.instagram:"https://instagram.com/"+C.instagram.replace(/^@/,"")):"";
[["Instagram",ig],["Facebook",C.social?.facebook],["LinkedIn",C.social?.linkedin]].forEach(([n,u])=>{
  if(ok(u)&&/^https?:\/\//i.test(u)){const a=document.createElement("a");a.href=u;a.textContent=n;a.target="_blank";a.rel="noopener noreferrer";$("#social").append(a)}});
$("#year").textContent=new Date().getFullYear();
})();
