(()=>{
"use strict";
const C=window.R2_CONFIG,P=Array.isArray(window.R2_PROJECTS)?window.R2_PROJECTS:[];
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const ok=v=>typeof v==="string"&&v.trim()&&!/^\[INSERIR/i.test(v.trim());
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const toast=t=>{const e=$("#toast");e.textContent=t;e.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("show"),4200)};
const digits=()=>ok(C.whatsapp)?C.whatsapp.replace(/\D/g,""):"";
function openWA(text){
  const n=digits();
  if(!n){toast("WhatsApp ainda não configurado. Defina o número em js/config.js.");return}
  window.open(`https://wa.me/${n}?text=${encodeURIComponent(text)}`,"_blank","noopener,noreferrer");
}
$$("[data-wa]").forEach(b=>b.addEventListener("click",()=>openWA(C.messages[b.dataset.wa]||C.messages.float)));

/* Header, progresso, seção ativa */
const header=$("#header"),prog=$("#progress"),tl=$("#timeline");
function onScroll(){
  const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
  header.classList.toggle("scrolled",y>40);
  prog.style.transform=`scaleX(${h>0?y/h:0})`;
  const r=tl.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.7-r.top)/r.height));
  tl.style.setProperty("--p",p);
}
addEventListener("scroll",()=>requestAnimationFrame(onScroll),{passive:true});onScroll();
const links=$$(".nav a");
const secObs=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting)links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id))
}),{rootMargin:"-45% 0px -50% 0px"});
$$("main section[id]").forEach(s=>secObs.observe(s));

/* Menu mobile */
const burger=$("#burger"),nav=$("#nav");
const setMenu=o=>{nav.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);document.body.style.overflow=o?"hidden":""};
burger.addEventListener("click",()=>setMenu(!nav.classList.contains("open")));
links.forEach(a=>a.addEventListener("click",()=>setMenu(false)));
$("#nav .btn").addEventListener("click",()=>setMenu(false));
addEventListener("keydown",e=>e.key==="Escape"&&setMenu(false));

/* Revelação ao rolar */
const rvObs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");rvObs.unobserve(e.target)}}),{threshold:.12});
const reveal=()=>$$(".rv:not(.in)").forEach((el,i)=>{el.style.transitionDelay=(i%3)*90+"ms";rvObs.observe(el)});
reveal();

/* Hero: paralaxe ao mouse + rede de pontos */
const art=$("#art");
if(!reduce){
  art.addEventListener("pointermove",e=>{
    const r=art.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
    $$("[data-d]",art).forEach(el=>{const d=+el.dataset.d;el.style.transform=`translate(${x*d}px,${y*d}px)`});
  });
  art.addEventListener("pointerleave",()=>$$("[data-d]",art).forEach(el=>el.style.transform=""));
}
(function net(){
  const cv=$("#net"),ctx=cv.getContext("2d");let w,h,pts=[],run=true;
  const size=()=>{const d=Math.min(devicePixelRatio||1,2);w=cv.clientWidth;h=cv.clientHeight;cv.width=w*d;cv.height=h*d;ctx.setTransform(d,0,0,d,0,0);
    pts=Array.from({length:w<500?22:38},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3}))};
  size();addEventListener("resize",size);
  new IntersectionObserver(e=>{run=e[0].isIntersecting;if(run&&!reduce)loop()}).observe(cv);
  function draw(){
    ctx.clearRect(0,0,w,h);
    pts.forEach(p=>{if(!reduce){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1}});
    for(let i=0;i<pts.length;i++){
      for(let j=i+1;j<pts.length;j++){const a=pts[i],b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<110){ctx.strokeStyle=`rgba(0,230,118,${.22*(1-d/110)})`;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke()}}
      ctx.fillStyle="#00E676";ctx.beginPath();ctx.arc(pts[i].x,pts[i].y,1.8,0,7);ctx.fill();
    }
  }
  function loop(){if(!run||reduce)return;draw();requestAnimationFrame(loop)}
  draw();loop();
})();

/* Portfólio dinâmico */
const CATS=["Todos","Clínicas","Saúde","Alimentação","Serviços","Outros"];
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function preview(name,cat){
  const hue=[...name].reduce((a,c)=>a+c.charCodeAt(0),0)%40;
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400"><rect width="640" height="400" fill="#101511"/><rect x="40" y="36" width="560" height="328" rx="14" fill="#080B09" stroke="#00E67629"/><circle cx="64" cy="58" r="5" fill="#00E676"/><circle cx="82" cy="58" r="5" fill="#2a332d"/><circle cx="100" cy="58" r="5" fill="#2a332d"/><rect x="40" y="76" width="560" height="1" fill="#00E67629"/><rect x="72" y="110" width="${150+hue*3}" height="14" rx="4" fill="#00E676"/><text x="72" y="170" font-family="Arial" font-weight="800" font-size="38" fill="#F5F7F5">${esc(name)}</text><text x="72" y="202" font-family="Arial" font-size="16" fill="#929A95">${esc(cat)}</text><rect x="72" y="232" width="130" height="36" rx="8" fill="none" stroke="#00E676"/><rect x="380" y="110" width="190" height="130" rx="10" fill="#1a221d"/><rect x="380" y="256" width="90" height="70" rx="10" fill="#1a221d"/><rect x="480" y="256" width="90" height="70" rx="10" fill="#1a221d"/></svg>`;
  return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
}
let active="Todos";
const grid=$("#projects"),empty=$("#empty"),fb=$("#filters");
function renderFilters(){
  fb.innerHTML=CATS.map(c=>`<button type="button" aria-pressed="${c===active}" data-c="${c}">${c}</button>`).join("");
  fb.hidden=!P.length;
}
function renderProjects(){
  const list=P.filter(p=>p&&p.name&&(active==="Todos"||p.category===active));
  grid.innerHTML="";
  list.forEach((p,i)=>{
    const art=document.createElement("article");art.className="proj";art.style.animationDelay=i*70+"ms";
    const link=ok(p.url)&&/^https?:\/\//i.test(p.url);
    const cli=/cliente/i.test(p.type);
    art.innerHTML=`<img loading="lazy" alt="Prévia do site ${esc(p.name)}" width="640" height="400"><div class="pb"><div class="pm"><span>${esc(p.category)}</span><span class="badge${cli?" cli":""}">${cli?"Projeto de cliente":"Projeto demonstrativo"}</span></div><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><a class="btn btn-ghost" ${link?`href="${esc(p.url)}" target="_blank" rel="noopener noreferrer"`:`aria-disabled="true"`}>${link?"Visualizar projeto":"Em breve"}</a></div>`;
    const img=$("img",art),fallback=preview(p.name,p.category);
    img.onerror=()=>{img.onerror=null;img.src=fallback};
    img.src=p.image&&p.image.trim()?p.image:fallback;
    grid.appendChild(art);
  });
  empty.hidden=list.length>0;
}
fb.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;active=b.dataset.c;renderFilters();renderProjects()});
renderFilters();renderProjects();

/* Contato e rodapé: exibe só dados configurados */
const info=[];
if(ok(C.whatsapp))info.push(["WhatsApp","+"+digits(),`https://wa.me/${digits()}`]);
if(ok(C.phone))info.push(["Telefone",C.phone,"tel:"+C.phone.replace(/[^\d+]/g,"")]);
if(ok(C.email))info.push(["E-mail",C.email,"mailto:"+C.email]);
if(ok(C.address))info.push(["Endereço",C.address]);
if(ok(C.hours))info.push(["Horário de atendimento",C.hours]);
const ig=ok(C.instagram)?(/^https?:/i.test(C.instagram)?C.instagram:"https://instagram.com/"+C.instagram.replace(/^@/,"")):"";
if(ig)info.push(["Instagram",C.instagram.replace(/^https?:\/\/(www\.)?instagram\.com\//i,"@").replace(/\/$/,""),ig]);
const ul=$("#info");
info.forEach(([k,v,h])=>{const li=document.createElement("li"),b=document.createElement("b");b.textContent=k;li.append(b);
  if(h){const a=document.createElement("a");a.href=h;a.textContent=v;if(/^http/.test(h)){a.target="_blank";a.rel="noopener noreferrer"}li.append(a)}else li.append(v);ul.append(li)});
if(!info.length)ul.hidden=true;
const soc=$("#social");
[["Instagram",ig],["Facebook",C.social?.facebook],["LinkedIn",C.social?.linkedin]].forEach(([n,u])=>{
  if(ok(u)&&/^https?:\/\//i.test(u)){const a=document.createElement("a");a.href=u;a.textContent=n;a.target="_blank";a.rel="noopener noreferrer";soc.append(a)}});
$("#year").textContent=new Date().getFullYear();

/* Formulário */
const form=$("#form");
const rules={nome:v=>v.trim().length>=2||"Informe seu nome.",empresa:v=>v.trim().length>=2||"Informe o nome da empresa.",
  whats:v=>{const d=v.replace(/\D/g,"");return(d.length>=10&&d.length<=13)||"Informe um WhatsApp válido com DDD."},
  servico:v=>!!v||"Selecione um serviço.",msg:v=>v.trim().length>=5||"Escreva uma breve mensagem."};
form.addEventListener("submit",e=>{
  e.preventDefault();let valid=true;
  Object.keys(rules).forEach(k=>{const f=form.elements[k],r=rules[k](f.value),l=f.closest("label");
    l.classList.toggle("err",r!==true);$("small",l).textContent=r===true?"":r;if(r!==true){if(valid)f.focus();valid=false}});
  if(!valid)return;
  const f=form.elements;
  openWA(`Olá! Meu nome é ${f.nome.value.trim()}, da empresa ${f.empresa.value.trim()}.\nServiço de interesse: ${f.servico.value}.\nMeu WhatsApp: ${f.whats.value.trim()}.\n\n${f.msg.value.trim()}`);
});
})();
