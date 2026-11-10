(() => {
  const $ = s => document.querySelector(s);
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('solid', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  const burger = $('#burger');
  burger.addEventListener('click', () => {
    const o = nav.classList.toggle('open');
    burger.setAttribute('aria-expanded', o);
  });
  $('#menu').addEventListener('click', e => {
    if (e.target.closest('a')) { nav.classList.remove('open'); burger.setAttribute('aria-expanded', false); }
  });

  // Luz que varre a pintura
  const stage = $('#stage');
  const move = (x, y) => {
    const r = stage.getBoundingClientRect();
    stage.style.setProperty('--x', ((x - r.left) / r.width * 100) + '%');
    stage.style.setProperty('--y', ((y - r.top) / r.height * 100) + '%');
  };
  $('#hero').addEventListener('pointermove', e => move(e.clientX, e.clientY));
  let t = 0;
  const idle = () => { t += .012; stage.style.setProperty('--x', (50 + Math.sin(t) * 35) + '%'); stage.style.setProperty('--y', '38%'); };
  let timer = setInterval(idle, 16);
  $('#hero').addEventListener('pointerenter', () => clearInterval(timer));
  $('#hero').addEventListener('pointerleave', () => { clearInterval(timer); timer = setInterval(idle, 16); });

  // Acordeão de serviços
  const btns = [...document.querySelectorAll('.open')];
  btns.forEach(b => b.addEventListener('click', () => {
    const was = b.getAttribute('aria-expanded') === 'true';
    btns.forEach(x => x.setAttribute('aria-expanded', 'false'));
    b.setAttribute('aria-expanded', String(!was));
  }));

  // Antes e depois
  const ba = $('#ba');
  $('#range').addEventListener('input', e => ba.style.setProperty('--p', e.target.value + '%'));

  // Formulário
  const form = $('#form'), msg = $('#msg');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll('[required]').forEach(i => {
      const bad = !i.value.trim() || (i.type === 'tel' && i.value.replace(/\D/g, '').length < 10);
      i.classList.toggle('err', bad); if (bad) ok = false;
    });
    if (!ok) { msg.textContent = 'Preencha nome, telefone com DDD e veículo.'; return; }
    msg.textContent = 'Solicitação enviada. Entraremos em contato em até um dia útil.';
    form.reset();
  });
})();
