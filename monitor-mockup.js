(function () {
  const ICONS = {
    pulse: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 8h2.5l1.5-4 2.5 8 2-4H15"/></svg>',
    grid: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg>',
    globe: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35"><circle cx="8" cy="8" r="5.5"/><path d="M2.5 8h11M8 2.5c1.8 2 2.8 4.5 2.8 5.5S9.8 11.5 8 13.5M8 2.5C6.2 4.5 5.2 7 5.2 8s1 3.5 2.8 5.5"/></svg>',
    code: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35"><path d="M5 4.5 2.5 8 5 11.5M11 4.5 13.5 8 11 11.5M9 3 7 13"/></svg>',
    db: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35"><ellipse cx="8" cy="4.5" rx="5" ry="2"/><path d="M3 4.5v7c0 1.1 2.2 2 5 2s5-.9 5-2v-7M3 8c0 1.1 2.2 2 5 2s5-.9 5-2"/></svg>',
    check: '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1.5 5 3.8 7.5 8.5 2.5"/></svg>',
    xmark: '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 2 8 8M8 2 2 8"/></svg>',
    shield: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.25"><path d="M6 1.2 9.8 2.8v2.8c0 2.2-1.6 4-3.8 4.6C3.8 9.6 2.2 7.8 2.2 5.6V2.8L6 1.2Z"/><path d="M6 4.2v2.2M6 8.2h.01"/></svg>',
    ext: '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3.5 1.5h5v5M8.5 1.5 1.5 8.5"/></svg>',
    sync: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.25"><path d="M10 3.2V1.2M10 1.2H8M10 1.2 6.8 4.4M2 8.8v2M2 10.8h2M2 10.8l3.2-3.2"/></svg>',
    plus: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2v8M2 6h8"/></svg>',
    plusCircle: '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="7" cy="7" r="5.5"/><path d="M7 4.5v5M4.5 7h5"/></svg>',
    list: '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M2 3.5h10M2 7h10M2 10.5h6"/></svg>',
    trash: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2.5 3.5h7M4.5 3.5V2.5h3v1M3.5 3.5v6h5v-6"/></svg>',
    search: '<svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="6" cy="6" r="3.5"/><path d="M9 9 12.5 12.5"/></svg>',
    headset: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2.5 7V5.5a3.5 3.5 0 0 1 7 0V7M2.5 7.5H1v2h1.5a1 1 0 0 0 1-1v-1M9.5 7.5H11v2h-1.5a1 1 0 0 1-1-1v-1"/></svg>',
    login: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M5 2H9v8H5M7 6H1M3.5 4 1 6l2.5 2"/></svg>',
    edit: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 2.5 9.5 4 4 9.5H2.5V8L8 2.5Z"/></svg>',
    server: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="1.5" y="2" width="9" height="3" rx=".8"/><rect x="1.5" y="7" width="9" height="3" rx=".8"/><path d="M3.5 3.5h.01M3.5 8.5h.01"/></svg>',
    cloud: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M3 8.5h6.5a2 2 0 0 0 .2-4A2.8 2.8 0 0 0 4.2 3.5 2.5 2.5 0 0 0 3 8.5Z"/></svg>',
    users: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="4.5" cy="4" r="1.8"/><path d="M1.5 9.5c0-1.6 1.3-2.7 3-2.7s3 1.1 3 2.7"/><circle cx="8.5" cy="4.2" r="1.4"/><path d="M7 9.5c.2-1.2 1-1.9 2.2-1.9.8 0 1.6.3 1.8 1.9"/></svg>',
  };

  const MOCK_SITES = [
    { url: 'https://site-institucional-01.com.br', slug: 'site-institucional-01' },
    { url: 'https://landing-campanha-02.net', slug: 'landing-campanha-02' },
    { url: 'https://loja-virtual-03.com.br', slug: 'loja-virtual-03' },
    { url: 'https://blog-corporativo-04.com.br', slug: 'blog-corporativo-04' },
    { url: 'https://portal-web-05.io', slug: 'portal-web-05' },
    { url: 'https://catalogo-produtos-06.com.br', slug: 'catalogo-produtos-06' },
    { url: 'https://pagina-evento-07.net', slug: 'pagina-evento-07' },
    { url: 'https://site-manutencao-08.com.br', slug: 'site-manutencao-08' },
  ];

  const NAV = [
    { id: 'dashboard', icon: 'grid', label: 'Dashboard' },
    { id: 'sites', icon: 'globe', label: 'Sites' },
    { id: 'errors', icon: 'code', label: 'Palavras de Erro' },
    { id: 'hosting', icon: 'db', label: 'Hospedagem' },
  ];

  function monNav(active) {
    return `
      <header class="mon-ui__nav">
        <div class="mon-ui__brand">${ICONS.pulse}<span>Monitor de Sites</span></div>
        <nav class="mon-ui__menu">
          ${NAV.map(item => `
            <span class="mon-ui__menu-item${item.id === active ? ' is-active' : ''}">
              ${ICONS[item.icon]}<span>${item.label}</span>
            </span>`).join('')}
        </nav>
      </header>`;
  }

  function screenDashboard() {
    const rows = [
      { ...MOCK_SITES[0], status: 'online', ssl: 'ok', sslLabel: 'Válido (51d)', reason: '—', time: '22:13:32' },
      { ...MOCK_SITES[1], status: 'online', ssl: 'ok', sslLabel: 'Válido (88d)', reason: '—', time: '22:13:33' },
      { ...MOCK_SITES[2], status: 'offline', ssl: 'none', sslLabel: 'Sem dados', reason: 'Could not resolve host: loja-virtual-03.com.br', time: '22:13:34' },
      { ...MOCK_SITES[3], status: 'online', ssl: 'warn', sslLabel: 'Vence em 10d', reason: '—', time: '22:13:35' },
      { ...MOCK_SITES[4], status: 'offline', ssl: 'bad', sslLabel: 'Expirado', reason: 'SSL certificate problem: certificate has expired', time: '22:13:36' },
      { ...MOCK_SITES[5], status: 'online', ssl: 'ok', sslLabel: 'Válido (120d)', reason: '—', time: '22:13:37' },
      { ...MOCK_SITES[6], status: 'online', ssl: 'ok', sslLabel: 'Válido (34d)', reason: '—', time: '22:13:38' },
      { ...MOCK_SITES[7], status: 'offline', ssl: 'none', sslLabel: 'Sem dados', reason: 'Connection timed out after 10001 ms', time: '22:13:39' },
    ];

    return `
      <div class="mon-ui">
        ${monNav('dashboard')}
        <main class="mon-ui__main mon-ui__main--dash">
          <header class="mon-ui__top">
            <div>
              <h3>Dashboard</h3>
              <small>Monitorando 144 sites</small>
            </div>
            <button type="button" class="mon-ui__btn mon-ui__btn--primary" data-mon-live-btn>
              <span class="mon-ui__spin">${ICONS.sync}</span> Verificando…
            </button>
          </header>

          <div class="mon-ui__stats">
            <article class="mon-ui__stat mon-ui__stat--total is-selected">
              <div class="mon-ui__stat-copy">
                <small>Total de Sites</small>
                <strong>144</strong>
              </div>
              <span class="mon-ui__stat-ic mon-ui__stat-ic--purple">${ICONS.globe}</span>
            </article>
            <article class="mon-ui__stat mon-ui__stat--ok">
              <div class="mon-ui__stat-copy">
                <small>Online</small>
                <strong>10</strong>
              </div>
              <span class="mon-ui__stat-ic mon-ui__stat-ic--green">${ICONS.check}</span>
            </article>
            <article class="mon-ui__stat mon-ui__stat--bad">
              <div class="mon-ui__stat-copy">
                <small>Offline</small>
                <strong>5</strong>
              </div>
              <span class="mon-ui__stat-ic mon-ui__stat-ic--red">${ICONS.xmark}</span>
            </article>
            <article class="mon-ui__stat mon-ui__stat--warn">
              <div class="mon-ui__stat-copy">
                <small>SSL em risco</small>
                <strong>1</strong>
              </div>
              <span class="mon-ui__stat-ic mon-ui__stat-ic--yellow">${ICONS.shield}</span>
            </article>
          </div>

          <div class="mon-ui__filter-row">
            <span>Filtro ativo:</span>
            <span class="mon-ui__filter-chip">Todos</span>
          </div>

          <div class="mon-ui__progress" data-mon-batch-progress>
            <span>Verificando sites em lote…</span>
            <div class="mon-ui__progress-track" data-mon-progress-track>
              <i data-mon-progress-fill style="width:10.4%"></i>
            </div>
            <em data-mon-progress-count>15 / 144</em>
          </div>

          <div class="mon-ui__table-wrap">
            <table class="mon-ui__table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>URL</th>
                  <th>Status</th>
                  <th>SSL</th>
                  <th>Motivo</th>
                  <th>Verificado em</th>
                  <th>Ação</th>
                </tr>
              </thead>
              <tbody>
                ${rows.map((r, i) => `
                  <tr>
                    <td class="mon-ui__num">${i + 1}</td>
                    <td class="mon-ui__url">${r.url}<i>${ICONS.ext}</i></td>
                    <td>
                      <span class="mon-ui__badge mon-ui__badge--${r.status}">
                        <i>${r.status === 'online' ? ICONS.check : ICONS.xmark}</i>
                        ${r.status === 'online' ? 'Online' : 'Offline'}
                      </span>
                    </td>
                    <td><span class="mon-ui__badge mon-ui__badge--ssl-${r.ssl}">${r.sslLabel}</span></td>
                    <td class="mon-ui__reason${r.reason === '—' ? ' is-empty' : ''}">${r.reason}</td>
                    <td class="mon-ui__time">${r.time}</td>
                    <td><button type="button" class="mon-ui__btn mon-ui__btn--verify">${ICONS.sync} Verificar</button></td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </main>
      </div>`;
  }

  function screenSites() {
    const sites = MOCK_SITES.map(s => s.url);

    return `
      <div class="mon-ui">
        ${monNav('sites')}
        <main class="mon-ui__main mon-ui__main--sites">
          <header class="mon-ui__top mon-ui__top--simple">
            <div>
              <h3>Gerenciar Sites</h3>
              <small>Adicione ou remova sites da lista de monitoramento</small>
            </div>
          </header>

          <article class="mon-ui__card mon-ui__card--add">
            <header class="mon-ui__card-head">
              <span class="mon-ui__card-ic">${ICONS.plusCircle}</span>
              <strong>Adicionar Site</strong>
            </header>
            <div class="mon-ui__add-grid">
              <label class="mon-ui__field">
                <span>URL do Site</span>
                <input type="text" readonly value="https://site-novo.exemplo.net" tabindex="-1" />
                <em>Use o endereço completo começando com https:// ou http://</em>
              </label>
              <button type="button" class="mon-ui__btn mon-ui__btn--primary mon-ui__btn--add">${ICONS.plus} Adicionar</button>
            </div>
          </article>

          <article class="mon-ui__card mon-ui__card--list">
            <header class="mon-ui__card-head">
              <span class="mon-ui__card-ic mon-ui__card-ic--list">${ICONS.list}</span>
              <strong>Sites Cadastrados</strong>
              <span class="mon-ui__count-badge">144</span>
            </header>
            <ul class="mon-ui__site-list">
              ${sites.map((url, i) => `
                <li>
                  <span class="mon-ui__site-num">${i + 1}</span>
                  <a class="mon-ui__site-link" href="#" tabindex="-1">${url}</a>
                  <i class="mon-ui__site-ext">${ICONS.ext}</i>
                  <button type="button" class="mon-ui__btn mon-ui__btn--remove">${ICONS.trash} Remover</button>
                </li>`).join('')}
            </ul>
          </article>
        </main>
      </div>`;
  }

  function screenHosting() {
    const panels = [
      { name: 'Painel 1', count: 51, icon: 'server', tone: 'blue' },
      { name: 'Painel 2', count: 27, icon: 'cloud', tone: 'green' },
      { name: 'Painel 3', count: 49, icon: 'users', tone: 'yellow' },
      { name: 'Painel 4', count: 7, icon: 'db', tone: 'purple' },
      { name: 'Painel 5', count: 7, icon: 'server', tone: 'orange' },
      { name: 'Painel 6', count: 6, icon: 'cloud', tone: 'cyan' },
    ];

    const rows = [
      { client: MOCK_SITES[0].slug, panel: 'Painel 3', panelTone: 'yellow', server: 'host-01.exemplo.net:2222' },
      { client: MOCK_SITES[1].slug, panel: 'Painel 2', panelTone: 'green', server: 'host-02.exemplo.net:2222' },
      { client: MOCK_SITES[2].slug, panel: 'Painel 4', panelTone: 'purple', server: 'host-03.exemplo.net:2222' },
      { client: MOCK_SITES[3].slug, panel: 'Painel 1', panelTone: 'blue', server: 'host-04.exemplo.net:2222' },
      { client: MOCK_SITES[4].slug, panel: 'Painel 4', panelTone: 'purple', server: 'host-03.exemplo.net:2222' },
      { client: MOCK_SITES[5].slug, panel: 'Painel 5', panelTone: 'orange', server: 'host-05.exemplo.net:2222' },
    ];

    return `
      <div class="mon-ui">
        ${monNav('hosting')}
        <main class="mon-ui__main mon-ui__main--host">
          <header class="mon-ui__top">
            <div>
              <h3>Hospedagem</h3>
              <small>147 clientes cadastrados</small>
            </div>
            <button type="button" class="mon-ui__btn mon-ui__btn--primary">${ICONS.plus} Novo Cliente</button>
          </header>

          <div class="mon-ui__panels">
            ${panels.map(p => `
              <article class="mon-ui__panel-card mon-ui__panel-card--${p.tone}">
                <span class="mon-ui__panel-ic">${ICONS[p.icon]}</span>
                <strong>${p.name}</strong>
                <b>${p.count}</b>
                <small>clientes</small>
              </article>`).join('')}
          </div>

          <div class="mon-ui__search">
            ${ICONS.search}
            <span>Buscar por cliente ou painel…</span>
            <em>14 / resultados</em>
          </div>

          <div class="mon-ui__table-wrap mon-ui__table-wrap--host">
            <table class="mon-ui__table mon-ui__table--host">
              <thead>
                <tr>
                  <th>Cliente / Domínio</th>
                  <th>Painel</th>
                  <th>Servidor</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                ${rows.map(r => `
                  <tr>
                    <td><strong>${r.client}</strong></td>
                    <td><span class="mon-ui__chip mon-ui__chip--${r.panelTone}">${ICONS.db} ${r.panel}</span></td>
                    <td class="mon-ui__mono">${r.server}</td>
                    <td class="mon-ui__actions">
                      <button type="button" class="mon-ui__btn mon-ui__btn--support">${ICONS.headset} Suporte</button>
                      <button type="button" class="mon-ui__btn mon-ui__btn--enter">${ICONS.login} Entrar</button>
                      <button type="button" class="mon-ui__btn mon-ui__btn--icon mon-ui__btn--edit" aria-label="Editar">${ICONS.edit}</button>
                      <button type="button" class="mon-ui__btn mon-ui__btn--icon mon-ui__btn--del" aria-label="Excluir">${ICONS.trash}</button>
                    </td>
                  </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </main>
      </div>`;
  }

  const SCREENS = {
    dashboard: screenDashboard,
    sites: screenSites,
    hosting: screenHosting,
  };

  function startBatchProgress(slideRoot) {
    const track = slideRoot.querySelector('[data-mon-progress-track]');
    const fill = slideRoot.querySelector('[data-mon-progress-fill]');
    const countEl = slideRoot.querySelector('[data-mon-progress-count]');
    const liveBtn = slideRoot.querySelector('[data-mon-live-btn]');
    if (!fill || !countEl) return () => {};

    const total = 144;
    let current = 15;

    track?.classList.add('is-running');
    liveBtn?.classList.add('is-live');

    function apply() {
      fill.style.width = `${(current / total) * 100}%`;
      countEl.textContent = `${current} / ${total}`;
    }

    const timer = setInterval(() => {
      current += 1;
      if (current > total) current = 10;
      apply();
    }, 700);

    apply();

    return () => {
      clearInterval(timer);
      track?.classList.remove('is-running');
      liveBtn?.classList.remove('is-live');
    };
  }

  function init(container) {
    let animCleanup = null;

    function syncActiveSlide() {
      animCleanup?.();
      animCleanup = null;
      const active = container.querySelector('.mon-ui-screen.is-active');
      if (active?.querySelector('[data-mon-batch-progress]')) {
        animCleanup = startBatchProgress(active);
      }
    }

    function cleanup() {
      animCleanup?.();
      animCleanup = null;
    }

    return { syncActiveSlide, cleanup };
  }

  window.MonitorMockup = {
    render(id) {
      return SCREENS[id]?.() || screenDashboard();
    },
    init,
  };
})();
