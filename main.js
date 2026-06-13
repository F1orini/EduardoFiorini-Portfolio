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
    1: `<span class="cm">// TaxResearch</span>\n<span class="kw">const</span> <span class="fn">sendBatch</span> = (leads) =>\n  whatsapp.<span class="fn">dispatch</span>(leads);\n\n<span class="fn">syncCalendar</span>(<span class="str">'workspace'</span>);`,
    2: `<span class="cm">// PrevinityHub</span>\n<span class="kw">if</span> (user.role === <span class="str">'ops'</span>)\n  <span class="kw">return</span> docs.<span class="fn">filtered</span>(role);\n\n<span class="fn">onboard</span>(newHire);`,
    3: `<span class="cm">// Aplicari</span>\n<span class="kw">await</span> <span class="fn">deploy</span>({\n  site: <span class="str">'landing'</span>,\n  dns: <span class="kw">true</span>,\n  ssl: <span class="kw">true</span>\n});`,
    4: `<span class="cm">// Previnity</span>\nclients.<span class="fn">count</span>() <span class="cm">// 4700+</span>\nhub.<span class="fn">docs</span>(role);\n<span class="fn">patch</span>(prod, hotfix);`,
    5: `<span class="cm"># pipeline.py</span>\nrows = <span class="fn">load</span>(<span class="str">'1M+'</span>)\n<span class="fn">clean</span>(rows)\n<span class="fn">export_csv</span>(validated)`,
    6: `<span class="cm"># infra-sp</span>\nvpn.<span class="fn">connect</span>(nas)\nswitch.<span class="fn">configure</span>(vlan)\n<span class="fn">monitor</span>(uptime);`,
  };

  /* ── boot ── */
  function init() {
    renderHeader();
    renderHero();
    renderWork();
    renderAbout();
    renderContact();
    renderFooter();
    renderPanel();
    renderPreview();
    runLoader();
    bindPanel();
    initAnimations();
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
          <h2>Projetos</h2>
          <span class="work-count">${EF.projects.length}</span>
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
    document.getElementById('about').innerHTML = `
      <div class="wrap about-grid">
        <div>
          <h2 class="reveal">Sobre</h2>
          <p class="reveal">${EF.about.text}</p>
          <div class="stack-tags reveal">
            ${EF.about.stacks.map(s => `<span>${s}</span>`).join('')}
          </div>
        </div>
        <div class="skills-grid reveal">
          ${EF.skills.map(g => `
            <div class="skill-card">
              <h4>${g.name}</h4>
              <ul>${g.items.map(it => `<li>${it}</li>`).join('')}</ul>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  function renderContact() {
    const c = EF.contact;
    document.getElementById('contact').innerHTML = `
      <div class="wrap">
        <h2 class="reveal">Contato</h2>
        <p class="reveal">Aberto para conversas sobre web, plataformas, dados ou infra.</p>
        <div class="contact-links reveal">
          <a href="mailto:${c.email}">${c.email}</a>
          <a href="https://${c.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://${c.github}" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>`;
  }

  function renderFooter() {
    document.getElementById('footer').innerHTML = `
      <div class="wrap"><p>designed & coded by Eduardo Fiorini · © ${new Date().getFullYear()}</p></div>`;
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

  function initHubMockup(container) {
    const viewport = container.querySelector('#hub-viewport');
    const brandEl = container.querySelector('#hub-brand');
    const shots = [...container.querySelectorAll('.hub-device__shot')];
    const buttons = [...container.querySelectorAll('.hub-picker__btn')];
    if (!viewport || !shots.length) return;

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

    buttons.forEach(btn => btn.addEventListener('click', () => goTo(+btn.dataset.index)));
    goTo(0, false);

    clearShotTimer();
    if (shots.length > 1) {
      panelShotTimer = setInterval(() => goTo(active + 1), 5000);
    }
  }

  function renderPageVisual(p, page) {
    if (page.mockup === 'previnityhub') return renderHubMockup(page);
    if (isOverviewPage(page)) {
      return `<div class="panel-visual-inner panel-visual--mock">${renderPanelMockup(p)}</div>`;
    }
    const imgs = pageImages(page);
    if (imgs.length) {
      return renderHubMockup({ screens: imgs.map((src, i) => ({ src, label: `Tela ${i + 1}`, brand: page.title })) });
    }
    return `<div class="panel-visual-inner panel-visual--mock">${renderPanelMockup(p, page.label || page.title)}</div>`;
  }

  function renderPageContent(p, page) {
    if (isOverviewPage(page)) {
      return `<p class="panel-tab-text">${p.overview}</p>`;
    }
    return `
      <h3 class="panel-tab-title">${page.headline || page.title}</h3>
      <p class="panel-tab-text">${page.text}</p>`;
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
    if (page.mockup === 'previnityhub') initHubMockup(container);
  }

  function renderPanelVisual(p) {
    if (p.image || p.images?.length) {
      const imgs = p.images?.length ? p.images : [p.image];
      return renderHubMockup({
        screens: imgs.map((src, i) => ({ src, label: `Tela ${i + 1}`, brand: p.title.toUpperCase() })),
      });
    }
    return `<div class="panel-visual-inner panel-visual--mock">${renderPanelMockup(p)}</div>`;
  }

  function switchPanelPage(pageIndex) {
    const p = panelOpenProject;
    const page = getProjectPages(p)[pageIndex];
    if (!page) return;

    document.querySelectorAll('.panel-nav [data-page]').forEach(btn => {
      btn.classList.toggle('is-active', +btn.dataset.page === pageIndex);
    });

    const content = document.getElementById('panel-page-content');
    const visual = document.getElementById('panel-visual');
    content.innerHTML = renderPageContent(p, page);
    visual.innerHTML = renderPageVisual(p, page);
    initPageVisual(visual, p, page);

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
    const panel = document.getElementById('panel');
    const bg = document.getElementById('panel-bg');

    panel.innerHTML = `
      <button type="button" class="panel-close" id="panel-close" aria-label="Fechar">esc</button>
      ${renderPanelNav(p, startPage)}
      <div class="panel-scroll">
        <div class="panel-layout" style="--accent:${p.accent}">
          <div class="panel-info">
            <h2 class="panel-name">${pages[startPage].label || p.title}</h2>
            ${p.showPanelLead !== false ? `<p class="panel-lead">${p.headline}</p>` : ''}

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
      ['<span class="log-fun">compilando projetos reais (TaxComercial, PrevinityHub...)</span>', 280],
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
