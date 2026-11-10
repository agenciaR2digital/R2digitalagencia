/* ===== CONFIGURAÇÃO CENTRAL (edite aqui para cada cliente) ===== */
const CONFIG = {
  name: "Vitta Odontologia",
  slogan: "Seu sorriso merece o melhor cuidado.",
  whatsapp: "",            // DDI+DDD+número, ex.: "5531900000000". Vazio = botões de contato ocultos
  instagram: "",           // URL real. Vazio = oculto
  email: "",               // E-mail real. Vazio = oculto
  address: "Avenida Fleming, região da Pampulha, Belo Horizonte – MG", // ILUSTRATIVO
  mapsUrl: "",             // Link real do Google Maps. Vazio = botões "Como chegar" ocultos
  hours: [["Segunda a sexta", "08h às 18h"], ["Sábado", "08h às 12h"], ["Domingo", "Fechado"]],
  // DADOS DEMONSTRATIVOS (fictícios). Substitua por informações reais.
  stats: [{ n: 10, suf: "+", l: "anos de experiência" }, { n: 5, suf: "", l: "especialidades odontológicas" }, { t: "Todas", l: "as idades atendidas" }, { n: 1, suf: "", l: "compromisso: cuidar do seu sorriso" }],
  // EQUIPE FICTÍCIA. "cro" deve ser preenchido com o registro real; vazio = não exibido
  team: [
    { name: "Dra. Marina Oliveira", role: "Cirurgiã-dentista — Clínica geral e odontologia estética", cro: "" },
    { name: "Dr. Lucas Ferreira", role: "Cirurgião-dentista — Ortodontia", cro: "" },
    { name: "Dra. Camila Rodrigues", role: "Cirurgiã-dentista — Odontopediatria", cro: "" }
  ],
  // DEPOIMENTOS FICTÍCIOS (layout). Troque por depoimentos reais autorizados: name, text, date, rating
  quotes: [
    { name: "Paciente exemplo 1", text: "Texto de exemplo para visualizar o layout do depoimento.", date: "" },
    { name: "Paciente exemplo 2", text: "Texto de exemplo para visualizar o layout do depoimento.", date: "" },
    { name: "Paciente exemplo 3", text: "Texto de exemplo para visualizar o layout do depoimento.", date: "" }
  ]
};

const IC = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 3.5c-2.5 0-4 2-4 4.5 0 3 2 4 2.5 7C6 18 6.500 21 8.500 21c1.500 0 1.500-4 3.500-4s2 4 3.500 4c2 0 2.500-3 3-6 .5-3 2.500-4 2.500-7 0-2.500-1.500-4.500-4-4.500-1.800 0-2.500 1-5.500 1S8.800 3.500 7 3.500z"/></svg>';
const SERVICES = [
  ["Preventiva", [["Limpeza e profilaxia", "Remoção profissional de placa bacteriana e cuidados preventivos para preservar a saúde bucal."], ["Avaliação odontológica", "Exame clínico para avaliar a saúde dos dentes, gengivas e demais estruturas da boca."], ["Aplicação de flúor", "Procedimento preventivo que auxilia na proteção dos dentes contra cáries, conforme indicação profissional."], ["Tratamento de gengiva", "Cuidados voltados à prevenção e ao tratamento de problemas gengivais e periodontais."]]],
  ["Estética", [["Clareamento dental", "Tratamento destinado a melhorar a tonalidade dos dentes, após avaliação individualizada."], ["Facetas dentárias", "Procedimentos estéticos personalizados para modificar características do sorriso, conforme indicação clínica."], ["Lentes de contato dental", "Lâminas ultrafinas utilizadas em casos selecionados para aprimorar a estética do sorriso."], ["Restaurações estéticas", "Recuperação de dentes comprometidos, buscando funcionalidade e aparência natural."]]],
  ["Ortodontia", [["Aparelho convencional", "Tratamento para corrigir o posicionamento dos dentes e melhorar a relação entre as arcadas."], ["Aparelho estético", "Alternativa ortodôntica com componentes de aparência mais discreta."], ["Alinhadores transparentes", "Placas removíveis e transparentes, indicadas conforme avaliação profissional."], ["Acompanhamento ortodôntico", "Consultas periódicas para acompanhar a evolução do tratamento."]]],
  ["Implantes e próteses", [["Implantes dentários", "Reposição de dentes ausentes por meio de implantes, após avaliação clínica."], ["Próteses dentárias", "Soluções para recuperar função mastigatória, conforto e estética."], ["Coroas dentárias", "Restaurações utilizadas para proteger e recuperar dentes comprometidos."]]],
  ["Endodontia", [["Tratamento de canal", "Procedimento para tratar alterações na polpa dentária e preservar o dente sempre que possível."]]],
  ["Odontopediatria", [["Odontologia infantil", "Atendimento voltado à saúde bucal de crianças, com abordagem acolhedora e adequada a cada faixa etária."], ["Prevenção infantil", "Orientações e procedimentos preventivos para estimular bons hábitos desde cedo."]]],
  ["Cirurgia", [["Extrações dentárias", "Procedimentos realizados quando há indicação clínica."], ["Extração de siso", "Avaliação e procedimentos relacionados aos terceiros molares."], ["Pequenas cirurgias", "Procedimentos odontológicos realizados conforme avaliação e indicação profissional."]]],
  ["Harmonização orofacial", [["Tratamentos estéticos orofaciais", "Procedimentos para estética e harmonia facial, realizados por profissional legalmente habilitado e após avaliação individualizada."]]]
];
const PILLARS = [["Cuidado humanizado", "Atendimento atencioso, respeitando as necessidades e particularidades de cada paciente."], ["Excelência profissional", "Tratamentos conduzidos com planejamento, responsabilidade e atenção aos detalhes."], ["Tecnologia", "Recursos modernos para auxiliar no diagnóstico, planejamento e execução dos tratamentos."]];
const DIFFS = [["Atendimento humanizado", "Cada paciente é recebido com atenção, respeito e acolhimento."], ["Equipe multidisciplinar", "Diferentes especialidades reunidas para oferecer uma abordagem completa da saúde bucal."], ["Estrutura moderna", "Ambientes planejados para proporcionar conforto e praticidade."], ["Planejamento individualizado", "Cada tratamento começa com avaliação e planejamento conforme as necessidades do paciente."], ["Tecnologia odontológica", "Recursos modernos que auxiliam nos procedimentos e no planejamento clínico."], ["Facilidade de agendamento", "Atendimento inicial e agendamento simplificados pelo WhatsApp."]];
const GALLERY = ["Recepção moderna", "Sala de atendimento", "Consultório com equipamentos", "Ambiente de espera", "Detalhes da estrutura"];
const AREAS = ["Pampulha", "São Luiz", "Castelo", "Ouro Preto", "Santa Amélia", "Itapoã", "Planalto", "Jaraguá", "Santa Rosa", "Liberdade", "Dona Clara", "Universitário"];
const FAQ = [["Como faço para agendar uma consulta?", "O agendamento pode ser iniciado pelo WhatsApp. Nossa equipe irá orientar sobre disponibilidade e informações necessárias."], ["A clínica atende crianças?", "Sim. A proposta da clínica inclui atendimento odontológico infantil, com abordagem adequada à idade e às necessidades de cada criança."], ["Quais tratamentos são oferecidos?", "Oferecemos diferentes especialidades, incluindo odontologia preventiva, estética, ortodontia, implantodontia, endodontia e odontopediatria."], ["Preciso realizar uma avaliação antes de iniciar o tratamento?", "Sim. A avaliação profissional é importante para compreender as necessidades do paciente e indicar as opções de tratamento adequadas."], ["Onde fica a clínica?", "Na região da Pampulha, em Belo Horizonte – MG. O endereço completo deve ser confirmado pelo WhatsApp até que os dados definitivos sejam configurados."], ["Qual é o horário de funcionamento?", "Segunda a sexta-feira, das 08h às 18h. Sábados, das 08h às 12h."], ["A clínica atende urgências odontológicas?", "Entre em contato pelo WhatsApp para consultar a disponibilidade e receber orientação sobre o atendimento."]];

(() => {
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const hue = i => `linear-gradient(135deg,hsl(${200 + i * 12} 70% 88%),hsl(${170 + i * 10} 55% 90%))`;

  /* WhatsApp: gera link só se o número estiver configurado */
  function waLink(msg) {
    const n = (CONFIG.whatsapp || "").replace(/\D/g, "");
    return n.length >= 12 ? `https://wa.me/${n}?text=${encodeURIComponent(msg)}` : null;
  }
  function applyContacts(root = document) {
    $$("[data-wa]", root).forEach(el => {
      const l = waLink(el.dataset.wa);
      if (l) { el.href = l; el.target = "_blank"; el.rel = "noopener"; el.hidden = false; } else el.hidden = true;
    });
    $$("[data-maps]", root).forEach(el => { if (CONFIG.mapsUrl) { el.href = CONFIG.mapsUrl; el.target = "_blank"; el.rel = "noopener"; } else el.hidden = true; });
    const ig = $("[data-ig]", root), ml = $("[data-mail]", root);
    if (ig) { CONFIG.instagram ? (ig.href = CONFIG.instagram, ig.target = "_blank", ig.rel = "noopener") : ig.hidden = true; }
    if (ml) { CONFIG.email ? ml.href = "mailto:" + CONFIG.email : ml.hidden = true; }
  }

  /* Dados institucionais e conteúdo */
  $$("[data-name]").forEach(e => e.textContent = CONFIG.name);
  $$("[data-slogan]").forEach(e => e.textContent = CONFIG.slogan);
  $$("[data-ic]").forEach(e => e.insertAdjacentHTML("afterbegin", `<span class="ic">${IC}</span>`));
  $("#year").textContent = new Date().getFullYear();
  $("#addr").textContent = CONFIG.address + " (endereço ilustrativo)";
  $("#faddr").textContent = CONFIG.address;
  $("#fhours").textContent = CONFIG.hours.map(h => h.join(": ")).join(" · ");
  $("#hours").innerHTML = CONFIG.hours.map(([d, h]) => `<li><span>${d}</span><b>${h}</b></li>`).join("");
  $("#pillars").innerHTML = PILLARS.map(([t, d]) => `<article class="card rv"><span class="ic">${IC}</span><h3>${t}</h3><p>${d}</p></article>`).join("");
  $("#diffs").innerHTML = DIFFS.map(([t, d], i) => `<article class="card rv"><span class="ic">${IC}</span><h3>${String(i + 1).padStart(2, "0")} — ${t}</h3><p>${d}</p></article>`).join("");
  $("#stats").innerHTML = CONFIG.stats.map(s => `<div class="stat rv"><b>${s.t || `<span data-n="${s.n}">0</span>${s.suf}`}</b><span>${s.l}</span></div>`).join("");
  $("#team").innerHTML = CONFIG.team.map(p => `<article class="card rv"><div class="avatar">${p.name.replace(/^(Dra?\.) /, "").split(" ").map(w => w[0]).join("")}</div><h3>${p.name}</h3><p class="role">${p.role}</p><p>Profissional fictício, exibido apenas para demonstração.</p>${p.cro ? `<p class="sm">${p.cro}</p>` : ""}<span class="badge">Perfil demonstrativo</span><a class="link btn ghost" data-wa="Olá! Gostaria de agendar uma avaliação com ${p.name}.">Agendar</a></article>`).join("");
  $("#quotes").innerHTML = CONFIG.quotes.map(q => `<article class="card quote rv"><span class="badge">Exemplo fictício</span><p>“${q.text}”</p><small>${q.name}${q.date ? " · " + q.date : ""}</small></article>`).join("");
  $("#areas").innerHTML = AREAS.map(a => `<li>${a}</li>`).join("");
  $("#gallery").innerHTML = GALLERY.map((g, i) => `<button class="gitem rv" data-g="${i}" style="background:${hue(i)}">${g}</button>`).join("");
  $("#faq").innerHTML = FAQ.map(([q, a]) => `<div class="q"><button aria-expanded="false">${q}</button><div class="ans"><div>${a}</div></div></div>`).join("");
  $("[name=servico]").innerHTML = `<option value="">Selecione</option>` + SERVICES.flatMap(([, l]) => l.map(s => s[0])).map(n => `<option>${n}</option>`).join("") + `<option>Outro / não sei ainda</option>`;

  /* Serviços: filtros + modal */
  const items = SERVICES.flatMap(([c, l]) => l.map(([n, d]) => ({ c, n, d })));
  $("#services").innerHTML = items.map((s, i) => `<article class="card" data-c="${s.c}"><span class="ic">${IC}</span><h3>${s.n}</h3><p>${s.d}</p><button class="link" data-i="${i}">Saiba mais</button></article>`).join("");
  const fl = $("#filters");
  fl.innerHTML = ["Todos", ...SERVICES.map(s => s[0])].map((c, i) => `<button role="tab" aria-selected="${i === 0}" data-f="${c}">${c}</button>`).join("");
  fl.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    $$("button", fl).forEach(x => x.setAttribute("aria-selected", x === b));
    $$("#services .card").forEach(c => c.hidden = b.dataset.f !== "Todos" && c.dataset.c !== b.dataset.f);
  });
  const modal = $("#modal");
  $("#services").addEventListener("click", e => {
    const b = e.target.closest("[data-i]"); if (!b) return;
    const s = items[b.dataset.i];
    $("#mbody").innerHTML = `<p class="role">${s.c}</p><h3>${s.n}</h3><p>${s.d}</p><p>Cada caso começa com avaliação profissional. A indicação, a duração e os resultados variam de paciente para paciente.</p><a class="btn" data-wa="Olá! Tenho interesse em conhecer melhor o tratamento: ${s.n}.">Falar no WhatsApp</a>`;
    applyContacts($("#mbody")); modal.showModal();
  });

  /* Lightbox */
  const lb = $("#lb"); let gi = 0;
  const showG = i => { gi = (i + GALLERY.length) % GALLERY.length; const el = $("#lbimg"); el.style.background = hue(gi); el.textContent = GALLERY[gi]; el.setAttribute("aria-label", GALLERY[gi]); };
  $("#gallery").addEventListener("click", e => { const b = e.target.closest("[data-g]"); if (b) { showG(+b.dataset.g); lb.showModal(); } });
  $("#prev").onclick = () => showG(gi - 1); $("#next").onclick = () => showG(gi + 1);
  lb.addEventListener("keydown", e => { if (e.key === "ArrowLeft") showG(gi - 1); if (e.key === "ArrowRight") showG(gi + 1); });
  $$("dialog").forEach(d => { d.addEventListener("click", e => { if (e.target === d || e.target.closest("[data-close]")) d.close(); }); }); // ESC fecha nativamente

  /* FAQ: uma aberta por vez */
  $("#faq").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    const q = b.parentElement, open = !q.classList.contains("open");
    $$("#faq .q").forEach(x => { x.classList.remove("open"); $("button", x).setAttribute("aria-expanded", "false"); });
    if (open) { q.classList.add("open"); b.setAttribute("aria-expanded", "true"); }
  });

  /* Header, menu mobile, seção ativa */
  const header = $("#header"), burger = $("#burger"), menu = $("#menu");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 10);
  onScroll(); addEventListener("scroll", onScroll, { passive: true });
  const setMenu = o => { menu.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); };
  burger.onclick = () => setMenu(!menu.classList.contains("open"));
  $$("a", menu).forEach(a => a.addEventListener("click", () => setMenu(false)));
  const links = $$('a[href^="#"]', menu);
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(s => spy.observe(s));
  }

  /* Revelação e contadores */
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  function count(el) {
    const end = +el.dataset.n; if (still) return el.textContent = end;
    const t0 = performance.now();
    (function f(t) { const p = Math.min((t - t0) / 1200, 1); el.textContent = Math.round(end * p); if (p < 1) requestAnimationFrame(f); })(t0);
  }
  const rvs = $$(".rv");
  if ("IntersectionObserver" in window && !still) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); $$("[data-n]", e.target).forEach(count); io.unobserve(e.target); } }), { threshold: .12 });
    rvs.forEach(el => io.observe(el));
  } else { rvs.forEach(el => el.classList.add("in")); $$("[data-n]").forEach(count); }

  /* Formulário -> WhatsApp */
  const form = $("#form"), st = $("#status");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const f = form.elements, digits = f.tel.value.replace(/\D/g, "");
    const rules = [[f.nome, f.nome.value.trim().length >= 3, "Informe seu nome completo."], [f.tel, digits.length === 10 || digits.length === 11, "Informe um telefone com DDD."], [f.servico, !!f.servico.value, "Escolha um serviço de interesse."]];
    let ok = true;
    rules.forEach(([el, valid, msg]) => { el.classList.toggle("bad", !valid); el.parentElement.querySelector(".err").textContent = valid ? "" : msg; ok = ok && valid; });
    if (!ok) { st.textContent = ""; return; }
    const msg = `Olá! Gostaria de agendar uma avaliação na ${CONFIG.name}.\n\nNome: ${f.nome.value.trim()}\nTelefone: ${f.tel.value.trim()}\nServiço de interesse: ${f.servico.value}${f.msg.value.trim() ? "\nMensagem: " + f.msg.value.trim() : ""}`;
    const l = waLink(msg);
    if (l) { st.textContent = "Abrindo o WhatsApp…"; window.open(l, "_blank", "noopener"); }
    else st.textContent = "O WhatsApp da clínica ainda não foi configurado. Defina CONFIG.whatsapp no script.js.";
  });

  applyContacts();
})();
