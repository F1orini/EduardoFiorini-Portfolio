(function () {
  const EF = window.EF;
  let previewEl = null;

  function allWorkItems() {
    return EF.projects;
  }

  function findWork(id) {
    return allWorkItems().find(p => p.id === id);
  }

  const FEAT_ICONS = [
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 16l4-6 4 3 5-8"/></svg>',
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  ];

  const CODE_SNIPPETS = {
    1: `<span class="cm"># TaxResearch API</span>\n<span class="fn">curl</span> -s /v1/agent/capabilities\n<span class="cm"># → suporte, dev, sistemas…</span>`,
    2: `<span class="cm"># Aplicari API</span>\n<span class="fn">curl</span> -s /v1/agent/capabilities/SitesELandings\n<span class="cm"># → deploy, e-commerce…</span>`,
    3: `<span class="cm"># Aplicari API</span>\n<span class="fn">curl</span> -s /v1/agent/capabilities/SitesELandings\n<span class="cm"># → deploy, monitor…</span>`,
    4: `<span class="cm"># Previnity API</span>\n<span class="fn">curl</span> -s /v1/agent/capabilities/PainelDeConsultas\n<span class="cm"># → hub, pipeline, 4700+ clientes</span>`,
    6: `<span class="cm"># Infra API</span>\n<span class="fn">curl</span> -s /v1/agent/capabilities/RedeEstruturada\n<span class="cm"># → VPN, NAS, biometria</span>`,
  };

  /* ── boot ── */
  const DEV_KEY = 'ef-dev-mode';

  function isDevMode() {
    return localStorage.getItem(DEV_KEY) === '1';
  }

  function init() {
    renderHeader();
    renderHero();
    renderWork();
    renderAbout();
    renderContact();
    renderFooter();
    renderPanel();
    renderPreview();
    renderDevToggle();
    runLoader();
    bindPanel();
    initAnimations();
  }

  function renderDevToggle() {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'dev-toggle' + (isDevMode() ? ' is-on' : '');
    btn.setAttribute('aria-pressed', String(isDevMode()));
    btn.setAttribute('aria-label', 'Modo desenvolvimento');
    btn.innerHTML = `
      <span class="dev-toggle__label">dev</span>
      <span class="dev-toggle__track" aria-hidden="true">
        <span class="dev-toggle__thumb"></span>
      </span>`;
    btn.title = isDevMode()
      ? 'Dev ligado — sem tela de build. Clique para reativar.'
      : 'Dev desligado — clique para pular a tela de build.';

    btn.addEventListener('click', () => {
      localStorage.setItem(DEV_KEY, isDevMode() ? '0' : '1');
      location.reload();
    });

    document.body.appendChild(btn);
  }

  function renderHeader() {
    document.getElementById('header').innerHTML = `
      <div class="wrap header-inner">
        <a href="#" class="logo">${EF.meta.name.split(' ')[0]} <b>${EF.meta.name.split(' ').slice(1).join(' ')}</b></a>
        <nav class="nav">
          <a href="#work">Projetos</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>`;
  }

  function renderHero() {
    document.getElementById('hero').innerHTML = `
      <div class="wrap">
        <p class="hero-role" id="hero-role"></p>
        <h1 class="hero-greeting" id="hero-greeting"></h1>
        <p class="hero-pitch" id="hero-pitch"></p>
        <p class="hero-current" id="hero-current"></p>
      </div>`;
  }

  function renderWork() {
    document.getElementById('work').innerHTML = `
      <div class="wrap">
        <div class="work-head reveal">
          <h2>Projetos / Experiências</h2>
          
        </div>
        <div class="project-list" id="project-list">
          ${EF.projects.map(p => projectRow(p)).join('')}
        </div>
      </div>`;

    bindProjectRows();
  }

  function projectRow(p) {
    return `
      <article class="project-row reveal" tabindex="0" data-id="${p.id}" style="--accent:${p.accent}">
        <span class="project-arrow">→</span>
        <div class="project-body">
          <h3 class="project-headline">${p.title}</h3>
          <div class="project-meta">
            <span class="project-status">${p.status}</span>
            <span>${p.headline}</span>
          </div>
        </div>
        <span class="project-year">${p.year}</span>
      </article>`;
  }

  function bindProjectRows() {
    document.querySelectorAll('.project-row').forEach(row => {
      row.addEventListener('click', () => openPanel(+row.dataset.id));
      row.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPanel(+row.dataset.id); }
      });

      if (window.matchMedia('(min-width:900px)').matches) {
        row.addEventListener('mouseenter', e => showPreview(+row.dataset.id, e));
        row.addEventListener('mousemove', e => movePreview(e));
        row.addEventListener('mouseleave', hidePreview);
      }
    });
  }

  function renderPreview() {
    previewEl = document.createElement('div');
    previewEl.className = 'project-preview';
    previewEl.innerHTML = `
      <div class="preview-inner">
        <div class="preview-bar"><i></i><i></i><i></i></div>
        <div class="preview-title"></div>
        <div class="preview-img" hidden></div>
        <div class="preview-code"></div>
      </div>`;
    document.body.appendChild(previewEl);
  }

  function showPreview(id, e) {
    const p = findWork(id);
    if (!p || !previewEl) return;

    const titleEl = previewEl.querySelector('.preview-title');
    const codeEl = previewEl.querySelector('.preview-code');
    const imgWrap = previewEl.querySelector('.preview-img');
    const previewSrc = getPreviewImage(p);

    titleEl.textContent = p.title;
    previewEl.style.borderColor = p.accent + '44';

    if (previewSrc) {
      imgWrap.innerHTML = `<img src="${previewSrc}" alt="${p.title}">`;
      imgWrap.hidden = false;
      codeEl.hidden = true;
    } else {
      imgWrap.hidden = true;
      codeEl.hidden = false;
      codeEl.innerHTML = CODE_SNIPPETS[id] || '';
    }

    previewEl.classList.add('visible');
    movePreview(e);
  }

  function movePreview(e) {
    if (!previewEl) return;
    const x = e.clientX + 24;
    const y = e.clientY - 80;
    previewEl.style.left = `${Math.min(x, window.innerWidth - 300)}px`;
    previewEl.style.top = `${Math.max(80, y)}px`;
  }

  function hidePreview() {
    previewEl?.classList.remove('visible');
  }

  function renderAbout() {
    const a = EF.about;
    document.getElementById('about').innerHTML = `
      <div class="wrap about-inner">
        <div class="about-intro reveal">
          <span class="about-eyebrow">Sobre</span>
          <h2 class="about-title">${a.headline}</h2>
        </div>
        <div class="about-prose reveal">
          <blockquote class="about-pull">${a.pull}</blockquote>
          ${a.paragraphs.map(p => `<p>${p}</p>`).join('')}
          <p class="about-signoff">${a.signoff}</p>
        </div>
      </div>`;
  }

  function renderContact() {
    const c = EF.contact;
    const channelHref = {
      email: `mailto:${c.email}`,
      linkedin: `https://${c.linkedin}`,
      github: `https://${c.github}`,
    };

    document.getElementById('contact').innerHTML = `
      <div class="wrap contact-grid">
        <div class="contact-info">
          <div class="contact-head reveal">
            <h2>Contato</h2>
            <p class="contact-lead">${c.headline}</p>
            <p class="contact-copy">${c.text}</p>
          </div>
          <div class="contact-channels">
            ${c.channels.map(ch => `
              <a
                class="contact-channel reveal"
                href="${channelHref[ch.id]}"
                ${ch.id === 'email' ? '' : 'target="_blank" rel="noopener noreferrer"'}
              >
                <span class="contact-channel__arrow">→</span>
                <div class="contact-channel__body">
                  <span class="contact-channel__label">${ch.label}</span>
                  <strong class="contact-channel__value">${ch.value}</strong>
                  <span class="contact-channel__note">${ch.note}</span>
                </div>
                <span class="contact-channel__ext" aria-hidden="true">↗</span>
              </a>`).join('')}
          </div>
        </div>

        <div class="contact-form-wrap reveal">
          <form class="contact-form" id="contact-form" novalidate>
            <div class="contact-form__head">
              <h3>${c.form.title}</h3>
              <p class="contact-form__hint">${c.form.hint}</p>
            </div>
            <div class="contact-form__grid">
              <label class="contact-field">
                <span class="contact-field__key">name</span>
                <input type="text" name="name" autocomplete="name" placeholder="Como posso te chamar?" required />
              </label>
              <label class="contact-field">
                <span class="contact-field__key">email</span>
                <input type="email" name="email" autocomplete="email" placeholder="voce@email.com" required />
              </label>
            </div>
            <label class="contact-field">
              <span class="contact-field__key">subject</span>
              <input type="text" name="subject" placeholder="Projeto, vaga, parceria…" />
            </label>
            <label class="contact-field">
              <span class="contact-field__key">message</span>
              <textarea name="message" rows="5" placeholder="Conta um pouco do que você precisa." required></textarea>
            </label>
            <button type="submit" class="contact-form__submit">
              <span class="contact-form__submit-label">Enviar mensagem</span>
              <span class="contact-form__submit-arrow" aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </div>`;

    bindContactForm();
    initContactForm();
  }

  function bindContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const from = String(data.get('email') || '').trim();
      const subject = String(data.get('subject') || '').trim() || 'Contato pelo portfólio';
      const message = String(data.get('message') || '').trim();
      const submitBtn = form.querySelector('.contact-form__submit');
      const label = form.querySelector('.contact-form__submit-label');

      if (!name || !from || !message) {
        form.reportValidity();
        form.classList.add('is-invalid');
        setTimeout(() => form.classList.remove('is-invalid'), 500);
        return;
      }

      const body = `Nome: ${name}\nE-mail: ${from}\n\n${message}`;
      const prevLabel = label?.textContent;

      form.classList.add('is-sending');
      submitBtn?.setAttribute('disabled', 'true');
      if (label) label.textContent = 'Abrindo e-mail…';

      setTimeout(() => {
        window.location.href = `mailto:${EF.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        form.classList.remove('is-sending');
        form.classList.add('is-sent');
        if (label) label.textContent = 'Pronto — confira seu app de e-mail';
        submitBtn?.removeAttribute('disabled');
        setTimeout(() => {
          form.classList.remove('is-sent');
          if (label && prevLabel) label.textContent = prevLabel;
        }, 3200);
      }, 380);
    });
  }

  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    gsap.fromTo(form.querySelectorAll('.contact-field'), {
      opacity: 0,
      y: 10,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: form,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    });
  }

  function renderFooter() {
    document.getElementById('footer').innerHTML = `
      <div class="wrap">
        <div class="footer-row">
          <p class="footer-credit">designed & coded by Eduardo Fiorini · © ${new Date().getFullYear()}</p>
          <div class="footer-mates">
            <span class="footer-mates__label">…with apolo e frajola</span>
            <div class="footer-pets" aria-label="Apolo e Frajola">
              <span class="footer-pet footer-pet--apolo" title="Apolo">
                <img src="img/apolo-64.png" alt="Apolo" width="64" height="64" loading="lazy" decoding="async">
              </span>
              <span class="footer-pet footer-pet--frajola" title="Frajola">
                <img src="img/frajola-64.png" alt="Frajola" width="64" height="64" loading="lazy" decoding="async">
              </span>
            </div>
          </div>
        </div>
      </div>`;
  }

  function renderPanel() {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="panel-bg" id="panel-bg" aria-hidden="true">
        <aside class="panel" id="panel" role="dialog" aria-modal="true"></aside>
      </div>`);
  }

  let panelShotTimer = null;
  let panelOpenProject = null;

  function clearShotTimer() {
    if (panelShotTimer) {
      clearInterval(panelShotTimer);
      panelShotTimer = null;
    }
  }

  function schedulePanelAutoAdvance(onTick, count, ms = 5000) {
    clearShotTimer();
    if (count > 1) {
      panelShotTimer = setInterval(onTick, ms);
    }
  }

  function cleanupPageVisual(container) {
    clearShotTimer();
    container?.querySelector('[data-project-api]')?._projectApiCleanup?.();
    container?.querySelector('[data-tax-api]')?._taxApiCleanup?.();
    const layout = container?.closest('.panel-layout');
    if (layout?._aplProjectsCleanup) {
      layout._aplProjectsCleanup();
      layout._aplProjectsCleanup = null;
    }
    container?._monMockupCleanup?.();
    container._monMockupCleanup = null;
    container?._phMockupCleanup?.();
    container._phMockupCleanup = null;
    container?._plMockupCleanup?.();
    container._plMockupCleanup = null;
  }

  function getProjectPages(p) {
    if (p.pages?.length) return p.pages;
    return [{ id: 'main', label: p.title }];
  }

  function isOverviewPage(page) {
    return page.id === 'main' || page.isOverview;
  }

  function pageImages(page) {
    if (page.screens?.length) return page.screens.map(s => s.src);
    if (page.images?.length) return page.images;
    if (page.image) return [page.image];
    return [];
  }

  function getPreviewImage(p) {
    if (p.image) return p.image;
    const hub = p.pages?.find(pg => pg.mockup === 'previnityhub');
    if (hub?.screens?.[0]) return hub.screens[0].src;
    return null;
  }

  function parseHighlight(str) {
    const m = str.match(/^([+−]?\d[\d.,k%+]*)\s*(.*)$/i);
    if (m && m[2]) return { value: m[1], label: m[2] };
    return { value: '●', label: str };
  }

  function panelFeatureItems(p) {
    if (p.scope?.length) return p.scope.slice(0, 4);
    return p.howItWorks.slice(0, 4);
  }

  const SPECIAL_MOCKUPS = new Set(['taxcomercial', 'aplicari-projects', 'monitor-web', 'previnityhub', 'pipeline']);

  function usesProjectApi(page) {
    if (!page || SPECIAL_MOCKUPS.has(page.mockup)) return false;
    return page.mockup === 'projectapi' || page.mockup === 'taxapi' || !page.mockup;
  }

  function renderProjectApi(p, page) {
    return window.ProjectApiMockup?.render(p, page) || '';
  }

  function initProjectApi(container, p, page) {
    window.ProjectApiMockup?.init(container, p, page);
  }

  function renderPanelFeatures(p) {
    return panelFeatureItems(p).map((item, i) => `
      <li class="panel-feat">
        <span class="panel-feat-icon">${FEAT_ICONS[i % FEAT_ICONS.length]}</span>
        <div>
          <strong>${item.title}</strong>
          <p>${item.text}</p>
        </div>
      </li>`).join('');
  }

  function renderPanelMockup(p, subtitle) {
    const kpis = p.highlights.slice(0, 4).map(parseHighlight);
    const pts = [28, 48, 36, 62, 44, 74, 52, 68];
    const widths = [88, 72, 94, 58];
    const label = subtitle || p.title;

    return `
      <div class="case-mock" style="--accent:${p.accent}">
        <div class="case-mock-bar">
          <i></i><i></i><i></i>
          <span>${label}</span>
        </div>
        <div class="case-mock-body">
          <div class="case-mock-kpis">
            ${kpis.map(k => `
              <div class="case-mock-kpi">
                <small>${k.label}</small>
                <b>${k.value}</b>
              </div>`).join('')}
          </div>
          <div class="case-mock-chart">
            <svg viewBox="0 0 300 64" preserveAspectRatio="none">
              <line x1="0" y1="48" x2="300" y2="48" stroke="rgba(255,255,255,.06)" stroke-dasharray="4"/>
              <polyline points="${pts.map((h, i) => `${i * 38 + 8},${64 - h}`).join(' ')}" fill="none" stroke="${p.accent}" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="case-mock-rows">
            ${widths.map((w, i) => `
              <div class="case-mock-row">
                <span>${kpis[i]?.label?.slice(0, 14) || '—'}</span>
                <div class="case-mock-row-bar"><div style="width:${w}%"></div></div>
              </div>`).join('')}
          </div>
        </div>
      </div>`;
  }

  function initDeviceMockup(container, dotSelector = '.hub-picker__btn') {
    const brandEl = container.querySelector('[id$="-brand"]');
    const shots = [...container.querySelectorAll('.hub-device__shot')];
    const buttons = [...container.querySelectorAll(dotSelector)];
    if (!shots.length) return;

    let active = 0;

    function goTo(i, animate = true) {
      active = (i + shots.length) % shots.length;
      shots.forEach((shot, idx) => shot.classList.toggle('is-active', idx === active));
      buttons.forEach((btn, idx) => btn.classList.toggle('is-active', idx === active));
      if (brandEl && shots[active]) brandEl.textContent = shots[active].dataset.brand;

      if (animate) {
        gsap.fromTo(shots[active], { opacity: 0.4, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out' });
      }
    }

    buttons.forEach(btn => btn.addEventListener('click', () => {
      goTo(+btn.dataset.index);
      schedulePanelAutoAdvance(() => goTo(active + 1), shots.length);
    }));
    goTo(0, false);

    schedulePanelAutoAdvance(() => goTo(active + 1), shots.length);
  }

  function renderHubMockup(page) {
    const screens = page.screens || [];
    return `
      <div class="panel-visual-inner panel-visual--hub">
        <div class="hub-showcase">
          <div class="hub-showcase__glow"></div>
          <div class="hub-showcase__stage">
            <div class="hub-device">
              <header class="hub-device__top">
                <div class="hub-device__brand">
                  <span class="hub-device__logo" id="hub-brand">${screens[0]?.brand || 'PREVINITY HUB'}</span>
                  <span class="hub-device__badge">admin</span>
                </div>
                <span class="hub-device__url">hub.previnity.internal</span>
              </header>
              <div class="hub-device__screen">
                <div class="hub-device__viewport" id="hub-viewport">
                  ${screens.map((s, i) => `
                    <img
                      src="${s.src}"
                      alt="${s.label}"
                      class="hub-device__shot${i === 0 ? ' is-active' : ''}"
                      data-index="${i}"
                      data-brand="${s.brand}"
                      loading="lazy"
                    >`).join('')}
                </div>
              </div>
            </div>
            <nav class="hub-picker" id="hub-picker" aria-label="Telas do PrevinityHub">
              ${screens.map((s, i) => `
                <button type="button" class="hub-picker__btn${i === 0 ? ' is-active' : ''}" data-index="${i}">
                  <span class="hub-picker__thumb"><img src="${s.src}" alt="" loading="lazy"></span>
                  <span class="hub-picker__label">${s.label}</span>
                </button>`).join('')}
            </nav>
          </div>
        </div>
      </div>`;
  }

  function renderTaxComercialMockup(p, page) {
    const views = page.views || [];
    const url = page.url || 'TaxResearch.Technologies';
    return `
      <div class="panel-visual-inner panel-visual--hub panel-visual--crm">
        <div class="hub-showcase hub-showcase--crm">
          <div class="hub-showcase__glow"></div>
          <div class="hub-showcase__stage hub-showcase__stage--wide">
            <div class="hub-device hub-device--crm">
              <header class="hub-device__top">
                <div class="hub-device__brand">
                  <span class="hub-device__logo" id="crm-brand">${views[0]?.brand || 'CRM COMERCIAL'}</span>
                </div>
                <span class="hub-device__url">${url}</span>
              </header>
              <div class="hub-device__screen hub-device__screen--crm">
                <div class="hub-device__viewport hub-device__viewport--crm" id="crm-viewport">
                  ${views.map((v, i) => `
                    <div
                      class="crm-ui-screen${i === 0 ? ' is-active' : ''}"
                      data-index="${i}"
                      data-brand="${v.brand}"
                    >${window.CrmMockup?.render(v.id) || ''}</div>`).join('')}
                  <nav class="crm-dots" id="crm-dots" aria-label="Telas do CRM Comercial">
                    ${views.map((v, i) => `
                      <button
                        type="button"
                        class="crm-dots__btn${i === 0 ? ' is-active' : ''}"
                        data-index="${i}"
                        aria-label="${v.label}"
                      ></button>`).join('')}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function renderPrevinityHubMockup(p, page) {
    const views = page.views || [];
    const url = page.url || 'hub.previnity.internal';
    return `
      <div class="panel-visual-inner panel-visual--hub panel-visual--ph">
        <div class="hub-showcase hub-showcase--ph">
          <div class="hub-showcase__glow"></div>
          <div class="hub-showcase__stage hub-showcase__stage--wide">
            <div class="hub-device hub-device--ph">
              <header class="hub-device__top">
                <div class="hub-device__brand">
                  <span class="hub-device__logo" id="ph-brand">${views[0]?.brand || 'PREVINITY · HUB'}</span>
                </div>
                <span class="hub-device__url">${url}</span>
              </header>
              <div class="hub-device__screen hub-device__screen--ph">
                <div class="hub-device__viewport hub-device__viewport--ph" id="ph-viewport">
                  ${views.map((v, i) => `
                    <div
                      class="ph-ui-screen${i === 0 ? ' is-active' : ''}"
                      data-index="${i}"
                      data-brand="${v.brand}"
                    >${window.PrevHubMockup?.render(v.id) || ''}</div>`).join('')}
                  <nav class="ph-dots" id="ph-dots" aria-label="Telas do PrevinityHub">
                    ${views.map((v, i) => `
                      <button
                        type="button"
                        class="ph-dots__btn${i === 0 ? ' is-active' : ''}"
                        data-index="${i}"
                        aria-label="${v.label}"
                      ></button>`).join('')}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function initPrevinityHubMockup(container) {
    const brandEl = container.querySelector('#ph-brand');
    const slides = [...container.querySelectorAll('.ph-ui-screen')];
    const buttons = [...container.querySelectorAll('.ph-dots__btn')];
    if (!slides.length) return;

    const phAnim = window.PrevHubMockup?.init(container);
    container._phMockupCleanup = phAnim?.cleanup;

    let active = 0;

    function goTo(i, animate = true) {
      active = (i + slides.length) % slides.length;
      slides.forEach((slide, idx) => slide.classList.toggle('is-active', idx === active));
      buttons.forEach((btn, idx) => btn.classList.toggle('is-active', idx === active));
      if (brandEl && slides[active]) brandEl.textContent = slides[active].dataset.brand;

      if (animate) {
        gsap.fromTo(slides[active], { opacity: 0.45, scale: 0.985 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' });
      }

      phAnim?.syncActiveSlide();
    }

    buttons.forEach(btn => btn.addEventListener('click', () => {
      goTo(+btn.dataset.index);
      schedulePanelAutoAdvance(() => goTo(active + 1), slides.length);
    }));
    goTo(0, false);

    schedulePanelAutoAdvance(() => goTo(active + 1), slides.length);
  }

  function renderPipelineMockup(p, page) {
    const views = page.views || [];
    const url = page.url || 'pipeline.previnity.internal';
    return `
      <div class="panel-visual-inner panel-visual--hub panel-visual--pl">
        <div class="hub-showcase hub-showcase--pl">
          <div class="hub-showcase__glow"></div>
          <div class="hub-showcase__stage hub-showcase__stage--wide">
            <div class="hub-device hub-device--pl">
              <header class="hub-device__top">
                <div class="hub-device__brand">
                  <span class="hub-device__logo" id="pl-brand">${views[0]?.brand || 'PIPELINE · CSV'}</span>
                </div>
                <span class="hub-device__url">${url}</span>
              </header>
              <div class="hub-device__screen hub-device__screen--pl">
                <div class="hub-device__viewport hub-device__viewport--pl" id="pl-viewport">
                  ${views.map((v, i) => `
                    <div
                      class="pl-ui-screen${i === 0 ? ' is-active' : ''}"
                      data-index="${i}"
                      data-brand="${v.brand}"
                    >${window.PipelineMockup?.render(v.id) || ''}</div>`).join('')}
                  <nav class="pl-dots" id="pl-dots" aria-label="Telas do Pipeline">
                    ${views.map((v, i) => `
                      <button
                        type="button"
                        class="pl-dots__btn${i === 0 ? ' is-active' : ''}"
                        data-index="${i}"
                        aria-label="${v.label}"
                      ></button>`).join('')}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function initPipelineMockup(container) {
    const brandEl = container.querySelector('#pl-brand');
    const slides = [...container.querySelectorAll('.pl-ui-screen')];
    const buttons = [...container.querySelectorAll('.pl-dots__btn')];
    if (!slides.length) return;

    const plAnim = window.PipelineMockup?.init(container);
    container._plMockupCleanup = plAnim?.cleanup;

    let active = 0;

    function goTo(i, animate = true) {
      active = (i + slides.length) % slides.length;
      slides.forEach((slide, idx) => slide.classList.toggle('is-active', idx === active));
      buttons.forEach((btn, idx) => btn.classList.toggle('is-active', idx === active));
      if (brandEl && slides[active]) brandEl.textContent = slides[active].dataset.brand;

      if (animate) {
        gsap.fromTo(slides[active], { opacity: 0.45, scale: 0.985 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' });
      }

      plAnim?.syncActiveSlide();
    }

    buttons.forEach(btn => btn.addEventListener('click', () => {
      goTo(+btn.dataset.index);
      schedulePanelAutoAdvance(() => goTo(active + 1), slides.length);
    }));
    goTo(0, false);

    schedulePanelAutoAdvance(() => goTo(active + 1), slides.length);
  }

  function initHubMockup(container) {
    initDeviceMockup(container);
  }

  function initTaxComercialMockup(container) {
    const brandEl = container.querySelector('#crm-brand');
    const slides = [...container.querySelectorAll('.crm-ui-screen')];
    const buttons = [...container.querySelectorAll('.crm-dots__btn')];
    if (!slides.length) return;

    let active = 0;

    function goTo(i, animate = true) {
      active = (i + slides.length) % slides.length;
      slides.forEach((slide, idx) => slide.classList.toggle('is-active', idx === active));
      buttons.forEach((btn, idx) => btn.classList.toggle('is-active', idx === active));
      if (brandEl && slides[active]) brandEl.textContent = slides[active].dataset.brand;

      if (animate) {
        gsap.fromTo(slides[active], { opacity: 0.45, scale: 0.985 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' });
      }
    }

    buttons.forEach(btn => btn.addEventListener('click', () => {
      goTo(+btn.dataset.index);
      schedulePanelAutoAdvance(() => goTo(active + 1), slides.length);
    }));
    goTo(0, false);

    schedulePanelAutoAdvance(() => goTo(active + 1), slides.length);
  }

  function renderMonitorWebMockup(p, page) {
    const views = page.views || [];
    const url = page.url || 'monitor.web';
    return `
      <div class="panel-visual-inner panel-visual--hub panel-visual--mon">
        <div class="hub-showcase hub-showcase--mon">
          <div class="hub-showcase__glow"></div>
          <div class="hub-showcase__stage hub-showcase__stage--wide">
            <div class="hub-device hub-device--mon">
              <header class="hub-device__top">
                <div class="hub-device__brand">
                  <span class="hub-device__logo" id="mon-brand">${views[0]?.brand || 'MONITOR-WEB'}</span>
                </div>
                <span class="hub-device__url">${url}</span>
              </header>
              <div class="hub-device__screen hub-device__screen--mon">
                <div class="hub-device__viewport hub-device__viewport--mon" id="mon-viewport">
                  ${views.map((v, i) => `
                    <div
                      class="mon-ui-screen${i === 0 ? ' is-active' : ''}"
                      data-index="${i}"
                      data-brand="${v.brand}"
                    >${window.MonitorMockup?.render(v.id) || ''}</div>`).join('')}
                  <nav class="mon-dots" id="mon-dots" aria-label="Telas do Monitor-Web">
                    ${views.map((v, i) => `
                      <button
                        type="button"
                        class="mon-dots__btn${i === 0 ? ' is-active' : ''}"
                        data-index="${i}"
                        aria-label="${v.label}"
                      ></button>`).join('')}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function initMonitorWebMockup(container) {
    const brandEl = container.querySelector('#mon-brand');
    const slides = [...container.querySelectorAll('.mon-ui-screen')];
    const buttons = [...container.querySelectorAll('.mon-dots__btn')];
    if (!slides.length) return;

    const monAnim = window.MonitorMockup?.init(container);
    container._monMockupCleanup = monAnim?.cleanup;

    let active = 0;

    function goTo(i, animate = true) {
      active = (i + slides.length) % slides.length;
      slides.forEach((slide, idx) => slide.classList.toggle('is-active', idx === active));
      buttons.forEach((btn, idx) => btn.classList.toggle('is-active', idx === active));
      if (brandEl && slides[active]) brandEl.textContent = slides[active].dataset.brand;

      if (animate) {
        gsap.fromTo(slides[active], { opacity: 0.45, scale: 0.985 }, { opacity: 1, scale: 1, duration: 0.4, ease: 'power3.out' });
      }

      monAnim?.syncActiveSlide();
    }

    buttons.forEach(btn => btn.addEventListener('click', () => {
      goTo(+btn.dataset.index);
      schedulePanelAutoAdvance(() => goTo(active + 1), slides.length);
    }));
    goTo(0, false);

    schedulePanelAutoAdvance(() => goTo(active + 1), slides.length);
  }

  function renderPageVisual(p, page) {
    if (page.mockup === 'taxcomercial') return renderTaxComercialMockup(p, page);
    if (page.mockup === 'monitor-web') return renderMonitorWebMockup(p, page);
    if (page.mockup === 'previnityhub') return renderPrevinityHubMockup(p, page);
    if (page.mockup === 'pipeline') return renderPipelineMockup(p, page);
    if (page.mockup === 'aplicari-projects' && window.AplicariMockup) {
      return AplicariMockup.render(p, page);
    }
    if (usesProjectApi(page)) return renderProjectApi(p, page);
    const imgs = pageImages(page);
    if (imgs.length) {
      return renderHubMockup({ screens: imgs.map((src, i) => ({ src, label: `Tela ${i + 1}`, brand: page.title })) });
    }
    return renderProjectApi(p, page);
  }

  function renderPageScope(page) {
    if (!page.scope?.length) return '';
    return `
      <ul class="panel-scope">
        ${page.scope.map(item => `
          <li>
            <strong>${item.title}</strong>
            <p>${item.text}</p>
          </li>`).join('')}
      </ul>`;
  }

  function getPageHeader(p, page) {
    if (isOverviewPage(page)) {
      return {
        name: page.label || p.title,
        lead: p.showPanelLead !== false ? p.headline : null,
      };
    }
    return {
      name: page.title || page.label,
      lead: page.headline || null,
    };
  }

  function renderPageContent(p, page) {
    if (isOverviewPage(page)) {
      return `<p class="panel-tab-text">${p.overview}</p>`;
    }
    if (page.mockup === 'aplicari-projects' && window.AplicariMockup) {
      return AplicariMockup.renderContent(p, page);
    }
    return `
      <p class="panel-tab-text">${page.text}</p>
      ${renderPageScope(page)}`;
  }

  function getMainNavLabel(p, page) {
    return page.label || p.title;
  }

  function renderPanelNav(p, active = 0) {
    const pages = getProjectPages(p);
    const mainPage = pages.find(pg => pg.id === 'main') || pages[0];
    const mainIndex = pages.indexOf(mainPage);
    const subPages = pages.filter(pg => pg.id !== 'main');
    const mainNavLabel = getMainNavLabel(p, mainPage);

    if (!subPages.length) {
      return `
        <nav class="panel-nav panel-nav--solo" aria-label="Navegação do projeto">
          <span class="panel-nav-title">${mainNavLabel}</span>
        </nav>`;
    }

    return `
      <nav class="panel-nav" aria-label="Navegação do projeto">
        <div class="panel-nav-brand">
          <button type="button" class="panel-nav-title${active === mainIndex ? ' is-active' : ''}" data-page="${mainIndex}">
            ${mainNavLabel}
          </button>
        </div>
        <div class="panel-nav-divider" aria-hidden="true"></div>
        <div class="panel-nav-tabs">
          ${subPages.map(pg => {
            const i = pages.indexOf(pg);
            return `
            <button type="button" class="panel-nav-tab${i === active ? ' is-active' : ''}" data-page="${i}">
              ${pg.label}
            </button>`;
          }).join('')}
        </div>
      </nav>`;
  }

  function initPageVisual(container, p, page) {
    if (page.mockup === 'taxcomercial') initTaxComercialMockup(container);
    else if (page.mockup === 'monitor-web') initMonitorWebMockup(container);
    else if (page.mockup === 'aplicari-projects') {
      window.AplicariMockup?.init(container.closest('.panel-layout') || container, p, page);
    }
    else if (usesProjectApi(page)) initProjectApi(container, p, page);
    else if (page.mockup === 'previnityhub') initPrevinityHubMockup(container);
    else if (page.mockup === 'pipeline') initPipelineMockup(container);
  }

  function renderPanelVisual(p) {
    if (p.image || p.images?.length) {
      const imgs = p.images?.length ? p.images : [p.image];
      return renderHubMockup({
        screens: imgs.map((src, i) => ({ src, label: `Tela ${i + 1}`, brand: p.title.toUpperCase() })),
      });
    }
    const startPage = pages.find(pg => pg.id === 'main') || pages[0];
    return renderProjectApi(p, startPage);
  }

  function updatePanelHeader(p, page) {
    const header = getPageHeader(p, page);
    const nameEl = document.querySelector('#panel .panel-name');
    const leadEl = document.querySelector('#panel .panel-lead');

    if (nameEl) nameEl.textContent = header.name;

    if (leadEl) {
      if (header.lead) {
        leadEl.textContent = header.lead;
        leadEl.hidden = false;
      } else {
        leadEl.hidden = true;
      }
    } else if (header.lead) {
      nameEl?.insertAdjacentHTML('afterend', `<p class="panel-lead" id="panel-lead">${header.lead}</p>`);
    }
  }

  function panelLayoutClass(page) {
    if (page?.mockup === 'taxcomercial') return ' panel-layout--crm';
    if (page?.mockup === 'monitor-web') return ' panel-layout--crm';
    if (page?.mockup === 'previnityhub') return ' panel-layout--crm';
    if (page?.mockup === 'pipeline') return ' panel-layout--crm';
    if (page?.mockup === 'aplicari-projects') return ' panel-layout--apl-browser';
    return '';
  }

  function syncPanelLayout(page) {
    const panel = document.getElementById('panel');
    const layout = panel?.querySelector('.panel-layout');
    const isCrm = page?.mockup === 'taxcomercial';
    const isMonWeb = page?.mockup === 'monitor-web';
    const isPrevHub = page?.mockup === 'previnityhub';
    const isPipeline = page?.mockup === 'pipeline';
    const isAplBrowser = page?.mockup === 'aplicari-projects';
    panel?.classList.toggle('panel--crm', isCrm);
    panel?.classList.toggle('panel--mon-web', isMonWeb || isPrevHub || isPipeline);
    panel?.classList.toggle('panel--apl-browser', isAplBrowser);
    layout?.classList.toggle('panel-layout--crm', isCrm || isMonWeb || isPrevHub || isPipeline);
    layout?.classList.toggle('panel-layout--apl-browser', isAplBrowser);
  }

  function switchPanelPage(pageIndex) {
    const p = panelOpenProject;
    const page = getProjectPages(p)[pageIndex];
    if (!page) return;

    document.querySelectorAll('.panel-nav [data-page]').forEach(btn => {
      btn.classList.toggle('is-active', +btn.dataset.page === pageIndex);
    });

    updatePanelHeader(p, page);

    const content = document.getElementById('panel-page-content');
    const visual = document.getElementById('panel-visual');
    content.innerHTML = renderPageContent(p, page);
    cleanupPageVisual(visual);
    visual.innerHTML = renderPageVisual(p, page);
    initPageVisual(visual, p, page);
    syncPanelLayout(page);

    const flow = document.getElementById('panel-flow');
    if (flow) flow.outerHTML = renderPanelFlow(p, page);
    else if (isOverviewPage(page)) {
      content.insertAdjacentHTML('afterend', renderPanelFlow(p, page));
    }

    const scroll = document.querySelector('#panel .panel-scroll');
    if (scroll) scroll.scrollTop = 0;

    gsap.from(content, { opacity: 0, y: 10, duration: 0.35, ease: 'power2.out' });
    gsap.from(visual, { opacity: 0, x: 12, duration: 0.4, ease: 'power2.out' });
  }

  function renderPanelFlow(p, page) {
    if (!isOverviewPage(page) || !p.howItWorks?.length) return '';
    return `
      <div class="panel-flow" id="panel-flow">
        <span class="panel-flow-label">Fluxo</span>
        <ol>${p.howItWorks.map(s => `<li><strong>${s.title}</strong> — ${s.text}</li>`).join('')}</ol>
      </div>`;
  }

  function openPanel(id) {
    const p = findWork(id);
    if (!p) return;

    panelOpenProject = p;
    const pages = getProjectPages(p);
    const startPage = 0;
    const startHeader = getPageHeader(p, pages[startPage]);
    const panel = document.getElementById('panel');
    const bg = document.getElementById('panel-bg');

    panel.innerHTML = `
      <button type="button" class="panel-close" id="panel-close" aria-label="Fechar">esc</button>
      ${renderPanelNav(p, startPage)}
      <div class="panel-scroll">
        <div class="panel-layout${panelLayoutClass(pages[startPage])}" style="--accent:${p.accent}">
          <div class="panel-info">
            <h2 class="panel-name">${startHeader.name}</h2>
            ${startHeader.lead ? `<p class="panel-lead" id="panel-lead">${startHeader.lead}</p>` : ''}

            <div class="panel-page-content" id="panel-page-content">
              ${renderPageContent(p, pages[startPage])}
            </div>

            ${renderPanelFlow(p, pages[startPage])}
          </div>
          <div class="panel-visual" id="panel-visual">
            ${renderPageVisual(p, pages[startPage])}
          </div>
        </div>
      </div>`;

    panel.querySelectorAll('.panel-nav [data-page]').forEach(btn => {
      btn.addEventListener('click', () => switchPanelPage(+btn.dataset.page));
    });
    initPageVisual(document.getElementById('panel-visual'), p, pages[startPage]);
    syncPanelLayout(pages[startPage]);
    panel.classList.toggle('panel--crm', pages[startPage].mockup === 'taxcomercial');
    panel.classList.toggle('panel--mon-web', pages[startPage].mockup === 'monitor-web');
    panel.classList.toggle('panel--apl-browser', pages[startPage].mockup === 'aplicari-projects');

    bg.classList.add('open');
    bg.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.getElementById('panel-close').focus();
    panel.querySelector('.panel-scroll')?.scrollTo(0, 0);

    gsap.from(panel.querySelectorAll('.panel-nav-title, .panel-nav-tab, .panel-name, .panel-lead, .panel-page-content, .panel-flow, .panel-visual-inner'), {
      opacity: 0,
      y: 16,
      stagger: 0.04,
      duration: 0.5,
      ease: 'power3.out',
      delay: 0.06,
    });
  }

  function closePanel() {
    clearShotTimer();
    panelOpenProject = null;
    const bg = document.getElementById('panel-bg');
    bg.classList.remove('open');
    bg.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function bindPanel() {
    document.addEventListener('click', e => {
      if (e.target.id === 'panel-bg') closePanel();
      if (e.target.id === 'panel-close') closePanel();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closePanel();
    });
  }

  /* ── boot ── */
  const BUILD_CMD = 'npm run build';
  const BOOT_HINTS = [
    'Enter ↵ — bora buildar isso',
    'clique aqui, prometo que não explode',
    'spoilers: vai ficar legal',
    '3… 2… 1… (mentira, precisa do Enter)',
  ];
  let bootReady = false;
  let bootRunning = false;
  let hintTimer = null;

  function runLoader() {
    if (isDevMode()) {
      finishBoot();
      return;
    }

    document.body.classList.add('loading');
    const cmdEl = document.getElementById('boot-cmd');
    const cursor = document.getElementById('boot-cursor');
    const hint = document.getElementById('boot-hint');

    cycleBootHints(hint);

    typeBootCommand(cmdEl, BUILD_CMD, () => {
      bootReady = true;
      hint.textContent = 'Enter ↵ — pode soltar o build 🚀';
    });

    const startBuild = () => {
      if (!bootReady || bootRunning) return;
      bootRunning = true;
      clearInterval(hintTimer);
      hint.classList.add('hidden');
      cursor.classList.add('off');
      document.querySelector('.boot-terminal').classList.add('is-building');
      runBuildLogs();
    };

    hint.addEventListener('click', startBuild);
    document.addEventListener('keydown', e => {
      if (e.key === 'Enter' && document.body.classList.contains('loading')) {
        e.preventDefault();
        startBuild();
      }
    });
  }

  function cycleBootHints(el) {
    let i = 0;
    hintTimer = setInterval(() => {
      if (bootRunning) return;
      i = (i + 1) % BOOT_HINTS.length;
      el.textContent = BOOT_HINTS[i];
    }, 2200);
  }

  function typeBootCommand(el, text, onDone) {
    let i = 0;
    const tick = () => {
      if (i >= text.length) {
        onDone?.();
        return;
      }
      el.textContent += text[i];
      i += 1;
      setTimeout(tick, 42 + Math.random() * 30);
    };
    setTimeout(tick, 400);
  }

  function appendLog(html) {
    const log = document.getElementById('boot-log');
    const line = document.createElement('div');
    line.innerHTML = html;
    log.appendChild(line);
    line.scrollIntoView({ block: 'nearest' });
  }

  function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
  }

  async function runBuildLogs() {
    const inputLine = document.querySelector('.boot-input-line');
    appendLog(`<span class="log-dim">${BUILD_CMD}</span>`);
    inputLine.style.display = 'none';

    const steps = [
      ['<span class="log-dim">&gt; portfolio@1.0.0 build</span>', 90],
      ['<span class="log-dim">&gt; vite build</span>', 160],
      ['', 140],
      ['<span class="log-fun">[init] verificando se o café fez efeito...</span>', 320],
      ['<span class="log-ok">✓ caffeine level: estável</span>', 100],
      ['', 80],
      ['<span class="log-info">vite v5.4.11 building for production...</span>', 120],
      ['<span class="log-fun">tree-shaking bad vibes...</span>', 260],
      ['<span class="log-ok">✓ 0 bad vibes restantes</span>', 90],
      ['transforming modules (12)...', 240],
      ['<span class="log-joke">  → removendo textos genéricos de IA... nenhum encontrado 👀</span>', 280],
      ['<span class="log-ok">✓ 12 modules transformed.</span>', 100],
      ['<span class="log-fun">injetando personalidade do Eduardo...</span>', 300],
      ['<span class="log-fun">compilando projetos reais (... , ...)</span>', 280],
      ['rendering chunks...', 200],
      ['<span class="log-joke">  → otimizando animações pra impressionar no LinkedIn</span>', 220],
      ['computing gzip size...', 160],
      ['<span class="log-fun">gzip: -70% de formalidade</span>', 140],
      ['', 90],
      ['<span class="log-dim">dist/index.html</span>                   14.2 kB │ gzip: 4.8 kB', 55],
      ['<span class="log-dim">dist/assets/ego.min.js</span>              2.1 kB │ gzip: 0.4 kB', 50],
      ['<span class="log-dim">dist/assets/projetos.js</span>            92.4 kB │ gzip: 29.1 kB', 50],
      ['', 110],
      ['<span class="log-ok">✓ built in 1.38s</span>', 180],
      ['<span class="log-joke">  (tempo real: você leu tudo isso? respeito.)</span>', 320],
      ['', 200],
      ['<span class="log-dim">&gt; npm run preview</span>', 90],
      ['<span class="log-dim">&gt; vite preview --port 5173</span>', 150],
      ['', 100],
      ['<span class="log-ok">  ➜  Local:   http://localhost:5173/</span>', 90],
      ['<span class="log-fun">  ➜  abrindo portfólio... segura aí</span>', 280],
      ['<span class="log-warn">  ➜  WARN: site pode causar vontade de contratar</span>', 350],
      ['<span class="log-ok">  ➜  ready. bem-vindo. ✓</span>', 450],
    ];

    for (const [html, delay] of steps) {
      if (html) appendLog(html);
      await wait(delay);
    }

    document.querySelector('.boot-terminal').classList.add('is-done');
    await wait(400);
    finishBoot();
  }

  function finishBoot() {
    const boot = document.getElementById('boot');
    boot.classList.add('done');
    boot.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('loading');
    runHeroTypewriter();
    animateProjectRows();
    initScrollTrigger();
  }

  /* ── animations ── */
  function initAnimations() {
    window.addEventListener('scroll', () => {
      document.getElementById('header').classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  function typeText(el, text, speed) {
    document.querySelectorAll('.terminal-cursor').forEach(c => c.remove());

    return new Promise(resolve => {
      const cursor = document.createElement('span');
      cursor.className = 'terminal-cursor';
      cursor.setAttribute('aria-hidden', 'true');
      el.appendChild(cursor);
      let i = 0;

      const tick = () => {
        if (i >= text.length) {
          cursor.classList.add('done');
          resolve();
          return;
        }
        cursor.before(document.createTextNode(text[i]));
        i += 1;
        setTimeout(tick, speed + Math.random() * 18);
      };
      tick();
    });
  }

  function runHeroTypewriter() {
    const h = EF.hero;
    const role = document.getElementById('hero-role');
    const greeting = document.getElementById('hero-greeting');
    const pitch = document.getElementById('hero-pitch');
    const current = document.getElementById('hero-current');

    (async () => {
      await typeText(role, EF.meta.role, 28);
      await new Promise(r => setTimeout(r, 280));
      await typeText(greeting, h.greeting, 38);
      await new Promise(r => setTimeout(r, 350));
      await typeText(pitch, h.pitch, 14);
      await new Promise(r => setTimeout(r, 300));
      await typeText(current, 'Atualmente na ', 22);
      document.querySelectorAll('.terminal-cursor').forEach(c => c.remove());
      const em = document.createElement('em');
      current.appendChild(em);
      await typeText(em, `${EF.meta.org}.`, 26);
    })();
  }

  function animateProjectRows() {
    gsap.fromTo('#project-list .project-row.reveal', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.07,
      ease: 'power3.out',
    });
  }

  function initScrollTrigger() {
    gsap.utils.toArray('.about .reveal, .contact .reveal, .work-head.reveal').forEach(el => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
