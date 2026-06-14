(function () {
  const ICONS = {
    grid: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2" y="2" width="5" height="5" rx="1"/><rect x="9" y="2" width="5" height="5" rx="1"/><rect x="2" y="9" width="5" height="5" rx="1"/><rect x="9" y="9" width="5" height="5" rx="1"/></svg>',
    users: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="6" cy="5.5" r="2.2"/><path d="M2 13c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5"/><circle cx="11.5" cy="5" r="1.6"/><path d="M10 13c.3-1.4 1.4-2.2 2.8-2.2 1 0 2 .4 2.2 2.2"/></svg>',
    user: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="5.5" r="2.5"/><path d="M3.5 13.5c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4"/></svg>',
    search: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="7" cy="7" r="4"/><path d="M10.5 10.5 14 14"/></svg>',
    cal: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2.5" y="3.5" width="11" height="10" rx="1.5"/><path d="M2.5 7h11M5.5 2v2.5M10.5 2v2.5"/></svg>',
    chart: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 12V4M6 12V7M10 12V5M14 12V2"/></svg>',
    wa: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 1.5a6.2 6.2 0 0 0-5.3 9.4L2 14.5l3.8-1A6.2 6.2 0 1 0 8 1.5Zm3.1 8.8c-.1.3-.7.5-1 .5-.3 0-.6.1-2.8-.9-2.3-1.1-3.8-3.7-3.9-3.9-.1-.2-.8-1.1-.8-2.1 0-1 .5-1.5.7-1.7.2-.2.4-.3.6-.3h.4c.1 0 .3 0 .4.3.1.3.5 1.3.5 1.4 0 .1 0 .2-.1.3l-.2.4c-.1.1-.1.2 0 .4.1.2.5.8 1.2 1.3.8.6 1.5.8 1.7.9.2.1.3.1.5 0 .1-.1.6-.7.8-1 .2-.2.3-.2.6-.1l1.5.7c.2.1.4.2.4.3Z"/></svg>',
    video: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2" y="4" width="8" height="8" rx="1.5"/><path d="M10 7l4-2v6l-4-2"/></svg>',
    link: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6.5 9.5 9.5 6.5M7 5.5l3.5-1.5a2 2 0 0 1 2.6 2.6L9.5 8M9 10.5 5.5 14a2 2 0 0 1-2.6-2.6L6 9"/></svg>',
    refresh: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M13 3v3.5H9.5M3 13V9.5H6.5"/><path d="M3.8 6.2A5 5 0 0 1 12.2 4.5M12.2 9.8A5 5 0 0 1 3.8 11.5"/></svg>',
  };

  const NAV = [
    { id: 'painel', icon: 'grid', label: 'Visão Geral' },
    { id: 'leads-pub', icon: 'users', label: 'Leads públicos' },
    { id: 'leads', icon: 'user', label: 'Leads particulares' },
    { id: 'consultas', icon: 'search', label: 'Consultas' },
    { id: 'agenda', icon: 'cal', label: 'Agenda' },
    { id: 'gestao', icon: 'chart', label: 'Painel Coordenador' },
  ];

  function crmSidebar(active) {
    return `
      <aside class="crm-ui__sidebar">
        <div class="crm-ui__logo">
          <span class="crm-ui__logo-mark" aria-hidden="true">TR</span>
          <div>
            <strong>TAXRESEARCH</strong>
            <span>do Brasil</span>
          </div>
        </div>
        <span class="crm-ui__section">Operação</span>
        <nav class="crm-ui__nav">
          ${NAV.map(item => `
            <span class="crm-ui__nav-item${item.id === active ? ' is-active' : ''}">
              <span class="crm-ui__nav-ic">${ICONS[item.icon]}</span>
              ${item.label}
            </span>`).join('')}
        </nav>
        <div class="crm-ui__sidebar-foot">
          <span class="crm-ui__status"><i></i> Aguardando QR</span>
          <div class="crm-ui__user">
            <span class="crm-ui__avatar">A</span>
            <div><strong>admin</strong><small>Comercial</small></div>
          </div>
        </div>
      </aside>`;
  }

  const QR_MATRIX = [
    '000000000000000000000000000000000',
    '000000000000000000000000000000000',
    '000000110111001100110010011000000',
    '000101011101001101010110010001000',
    '000001111101011101110011000000000',
    '000110111101101111001111111011000',
    '001010100111000010010111110111100',
    '001101010101010110001011111011000',
    '001011011110111110101111111111100',
    '000100100000000011000111100101000',
    '000100001110110110110001110101000',
    '001110111010011100010010110101100',
    '000100000101011000111111101100000',
    '001010111011111010010111111110100',
    '000011111111110011001110101000100',
    '001101111100111101010110011000100',
    '001101011111111111111111011000000',
    '001111110001011111110110110111100',
    '000101001000111101000110110110100',
    '001111110111110111110100111111100',
    '001110100110101000010010001101000',
    '000101001101101101010110001010100',
    '000001101001001010110011100110100',
    '000110100101111101100110001110100',
    '001001111111110111001110111110100',
    '000011101110011110010110101000100',
    '001100010111100111111000111110100',
    '000001000100111101010110110001000',
    '000101000001111111111111010111000',
    '000101111101011110110110110111000',
    '001111110101010000101110101000100',
    '000000000000000000000000000000000',
    '000000000000000000000000000000000',
  ];

  function crmQrSvg() {
    const n = QR_MATRIX.length;
    const rects = [];
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        if (QR_MATRIX[y][x] === '1') rects.push(`<rect x="${x}" y="${y}" width="1" height="1"/>`);
      }
    }
    return `
      <svg class="crm-ui__qr" viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges" aria-hidden="true">
        <rect width="${n}" height="${n}" fill="#fff"/>
        <g fill="#0a0a0a">${rects.join('')}</g>
      </svg>`;
  }

  function crmChart() {
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
    const values = [0, 0, 0, 0, 21, 6];
    const chartTop = 28;
    const chartBottom = 150;
    const chartLeft = 12;
    const chartRight = 452;
    const chartH = chartBottom - chartTop;
    const maxVal = 30;

    const yAt = (v) => chartBottom - (v / maxVal) * chartH;
    const xs = months.map((_, i) => chartLeft + (i / (months.length - 1)) * (chartRight - chartLeft));
    const pts = values.map((v, i) => ({ x: xs[i], y: yAt(v) }));

    const linePath = [
      `M ${pts[0].x} ${pts[0].y}`,
      `L ${pts[3].x} ${pts[3].y}`,
      `C ${pts[3].x + 32} ${pts[3].y}, ${pts[4].x - 40} ${pts[4].y}, ${pts[4].x} ${pts[4].y}`,
      `C ${pts[4].x + 32} ${pts[4].y}, ${pts[5].x - 28} ${pts[5].y}, ${pts[5].x} ${pts[5].y}`,
    ].join(' ');

    const areaPath = `${linePath} L ${pts[5].x} ${chartBottom} L ${pts[0].x} ${chartBottom} Z`;

    const yTicks = [0, 10, 20, 30];
    const gridLines = yTicks.map((tick) => {
      const y = yAt(tick);
      return `<line class="crm-ui__chart-grid" x1="${chartLeft}" y1="${y}" x2="${chartRight}" y2="${y}"/>`;
    }).join('');

    const yLabels = yTicks.map((tick) => {
      const y = yAt(tick);
      return `<text class="crm-ui__chart-y" x="468" y="${y + 4}">${tick}</text>`;
    }).join('');

    const xLabels = months.map((month, i) => {
      return `<text class="crm-ui__chart-x" x="${xs[i]}" y="182">${month}</text>`;
    }).join('');

    const dots = pts.map((p) => `<circle class="crm-ui__chart-dot" cx="${p.x}" cy="${p.y}" r="4"/>`).join('');

    return `
      <svg class="crm-ui__chart" viewBox="0 0 480 190" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <linearGradient id="crmAreaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgba(201,169,98,.45)"/>
            <stop offset="100%" stop-color="rgba(201,169,98,0)"/>
          </linearGradient>
          <filter id="crmLineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.4" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        ${gridLines}
        ${yLabels}
        <path class="crm-ui__chart-area" d="${areaPath}"/>
        <path class="crm-ui__chart-line" d="${linePath}" filter="url(#crmLineGlow)"/>
        ${dots}
        ${xLabels}
      </svg>`;
  }

  function crmScreenPainel() {
    return `
      <div class="crm-ui">
        ${crmSidebar('painel')}
        <main class="crm-ui__main">
          <header class="crm-ui__top">
            <div>
              <small>Visão Geral</small>
              <h3>Meu Painel</h3>
            </div>
            <span class="crm-ui__pill"><i></i> Aguardando QR</span>
          </header>
          <div class="crm-ui__banner">
            <span class="crm-ui__banner-ic">✓</span>
            Conexão iniciada — aguarde o QR Code
          </div>
          <div class="crm-ui__grid crm-ui__grid--dash">
            <article class="crm-ui__card crm-ui__card--welcome">
              <div class="crm-ui__card-glow"></div>
              <small>Sábado, 15 de junho de 2024</small>
              <h4>Boa noite, Admin!</h4>
              <p>Você já enviou <strong>21</strong> mensagens no total</p>
            </article>
            <article class="crm-ui__card crm-ui__card--wa">
              <header>
                <span class="crm-ui__wa-label">${ICONS.wa} WhatsApp</span>
                <small class="crm-ui__wa-status"><i></i> Aguardando QR</small>
              </header>
              <p class="crm-ui__wa-hint">Leia o QR Code</p>
              <div class="crm-ui__qr-wrap">
                ${crmQrSvg()}
              </div>
              <div class="crm-ui__wa-actions">
                <button type="button" class="crm-ui__btn crm-ui__btn--outline crm-ui__btn--connect">${ICONS.link} Conectar</button>
                <button type="button" class="crm-ui__btn crm-ui__btn--icon" aria-label="Atualizar QR">${ICONS.refresh}</button>
              </div>
              <small class="crm-ui__wa-foot">O QR atualiza a cada 10s</small>
            </article>
            <div class="crm-ui__kpis">
              <div class="crm-ui__kpi">
                <span class="crm-ui__kpi-ic crm-ui__kpi-ic--blue">${ICONS.cal}</span>
                <b>—</b><span>Agenda</span>
              </div>
              <div class="crm-ui__kpi">
                <span class="crm-ui__kpi-ic crm-ui__kpi-ic--teal">${ICONS.users}</span>
                <b>189</b><span>Contatos</span>
              </div>
              <div class="crm-ui__kpi">
                <span class="crm-ui__kpi-ic crm-ui__kpi-ic--green">${ICONS.wa}</span>
                <b>21</b><span>Enviados</span>
              </div>
              <div class="crm-ui__kpi">
                <span class="crm-ui__kpi-ic crm-ui__kpi-ic--red">${ICONS.chart}</span>
                <b>0</b><span>Falhas</span>
              </div>
            </div>
            <article class="crm-ui__card crm-ui__card--chart">
              <header>
                <div>
                  <small>Tendência</small>
                  <strong>Mensagens Enviadas</strong>
                  <span class="crm-ui__chart-sub">Últimos 6 meses · pico em Mai (21 env.)</span>
                </div>
                <span class="crm-ui__chart-legend"><i></i> Mensagens enviadas</span>
              </header>
              ${crmChart()}
            </article>
          </div>
        </main>
      </div>`;
  }

  function crmScreenAgenda() {
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const cells = Array.from({ length: 35 }, (_, i) => {
      const n = i - 2;
      const show = n > 0 && n <= 30;
      const today = n === 13;
      const dot = [3, 7, 12, 15, 19, 22].includes(n);
      return `<span class="crm-ui__cal-cell${today ? ' is-today' : ''}${dot ? ' has-event' : ''}">${show ? n : ''}</span>`;
    }).join('');

    return `
      <div class="crm-ui">
        ${crmSidebar('agenda')}
        <main class="crm-ui__main">
          <header class="crm-ui__top crm-ui__top--row">
            <div><h3>Agenda</h3></div>
            <button type="button" class="crm-ui__btn crm-ui__btn--outline">+ Nova reunião</button>
          </header>
          <p class="crm-ui__hint">Convites via <em>ti@taxresearch.com.br</em> · Google Meet integrado</p>
          <div class="crm-ui__grid crm-ui__grid--agenda">
            <article class="crm-ui__card crm-ui__card--cal">
              <header>
                <div>
                  <strong>Calendário de reuniões</strong>
                  <small>junho 2026</small>
                </div>
                <span class="crm-ui__badge">9</span>
              </header>
              <div class="crm-ui__cal-toolbar">
                <span class="crm-ui__cal-nav">‹ Hoje ›</span>
                <div class="crm-ui__cal-views">
                  <span class="is-on">Mês</span><span>Semana</span><span>Dia</span>
                </div>
              </div>
              <div class="crm-ui__cal-week">${days.map(d => `<span>${d}</span>`).join('')}</div>
              <div class="crm-ui__cal-grid">${cells}</div>
            </article>
            <div class="crm-ui__meetings">
              <header><span>Lista</span><small>Próximas reuniões</small></header>
              <article class="crm-ui__meet">
                <div class="crm-ui__meet-time"><b>07:00</b><span>15 jun</span></div>
                <div class="crm-ui__meet-body">
                  <strong>TAX RESEARCH — CONTABIL</strong>
                  <span>${ICONS.video} Google Meet · 1h</span>
                  <div class="crm-ui__meet-foot">
                    <span class="crm-ui__tag">Aguardando</span>
                    <button type="button" class="crm-ui__btn crm-ui__btn--blue">Entrar</button>
                  </div>
                </div>
              </article>
              <article class="crm-ui__meet">
                <div class="crm-ui__meet-time"><b>14:30</b><span>16 jun</span></div>
                <div class="crm-ui__meet-body">
                  <strong>Follow-up comercial</strong>
                  <span>Presencial · Equipe SP</span>
                  <div class="crm-ui__meet-foot">
                    <span class="crm-ui__tag">Aguardando</span>
                    <button type="button" class="crm-ui__btn crm-ui__btn--blue">Entrar</button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </main>
      </div>`;
  }

  function crmScreenLeads() {
    return `
      <div class="crm-ui">
        ${crmSidebar('leads')}
        <main class="crm-ui__main crm-ui__main--split">
          <header class="crm-ui__top">
            <div>
              <h3>Leads particulares</h3>
              <div class="crm-ui__tabs">
                <span>Leads públicos</span>
                <span class="is-active">Leads particulares</span>
                <span>Campanhas</span>
              </div>
            </div>
            <div class="crm-ui__search">${ICONS.search}<span>Buscar lead, empresa…</span></div>
          </header>
          <div class="crm-ui__form-row">
            <label><small>CNPJ</small><span>00.000.000/0000-00</span></label>
            <label><small>Telefone</small><span>000 + número</span></label>
            <button type="button" class="crm-ui__btn crm-ui__btn--gold">+ Adicionar</button>
          </div>
          <div class="crm-ui__table-wrap">
            <table class="crm-ui__table">
              <thead>
                <tr><th></th><th>Contato</th><th>Empresa</th><th>Origem</th><th>Ação</th></tr>
              </thead>
              <tbody>
                <tr class="is-selected">
                  <td><span class="crm-ui__check is-on"></span></td>
                  <td><strong>Tiago Rodrigues</strong></td>
                  <td>Previnity Soluções</td>
                  <td><span class="crm-ui__chip">Manual</span></td>
                  <td><span class="crm-ui__link">Envio pontual</span></td>
                </tr>
                <tr>
                  <td><span class="crm-ui__check"></span></td>
                  <td>Marina Costa</td>
                  <td>Grupo Horizonte</td>
                  <td><span class="crm-ui__chip">Import</span></td>
                  <td><span class="crm-ui__link">Envio pontual</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <aside class="crm-ui__detail">
            <header>
              <strong>Previnity Soluções Inteligentes</strong>
              <span class="crm-ui__tag crm-ui__tag--green">Empresa de Pequeno Porte</span>
              <div class="crm-ui__detail-meta">
                <span>CNPJ 00.000.000/0001-00</span>
                <span>Serra Negra — SP</span>
              </div>
            </header>
            <section>
              <h5>Perfil tributário</h5>
              <ul>
                <li>Ativa desde 2005</li>
                <li>Porte EPP</li>
                <li>CNAE: Tratamento de dados</li>
              </ul>
            </section>
            <section>
              <h5>Dados cadastrais</h5>
              <dl>
                <div><dt>Razão social</dt><dd>Previnity Soluções…</dd></div>
                <div><dt>Capital social</dt><dd>R$ 160.000</dd></div>
                <div><dt>Regime</dt><dd>Lucro Presumido</dd></div>
              </dl>
            </section>
          </aside>
        </main>
      </div>`;
  }

  window.CrmMockup = {
    render(id) {
      const screens = { painel: crmScreenPainel, agenda: crmScreenAgenda, leads: crmScreenLeads };
      return (screens[id] || screens.painel)();
    },
  };
})();
