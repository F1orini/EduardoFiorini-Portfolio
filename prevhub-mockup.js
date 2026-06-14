(function () {
  const ICONS = {
    search: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35"><circle cx="7" cy="7" r="4"/><path d="M10 10 13.5 13.5"/></svg>',
    edit: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35"><path d="M11.5 2.5 13.5 4.5 5 13H3V11L11.5 2.5Z"/></svg>',
    users: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35"><circle cx="5.5" cy="5" r="2"/><path d="M1.5 13c0-2 1.8-3.2 4-3.2s4 1.2 4 3.2"/><circle cx="11" cy="5.2" r="1.6"/><path d="M9.2 13c.2-1.2 1-1.8 2.3-1.8.9 0 1.7.3 1.9 1.8"/></svg>',
    trash: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35"><path d="M3 4.5h10M6 4.5V3h4v1.5M4.5 4.5V12h7V4.5"/></svg>',
    power: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35"><path d="M8 2v4M5.2 3.8a5 5 0 1 0 5.6 0"/></svg>',
    close: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 2 10 10M10 2 2 10"/></svg>',
    clip: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.35"><path d="M6.5 9.5 9.5 6.5a2.5 2.5 0 0 1 3.5 3.5L7.5 12a4 4 0 0 1-5.5-5.5L9 1.5"/></svg>',
    send: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M1.5 8 14 2 10 8l4 6-8.5-6Z"/></svg>',
    chat: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5h12v8H5.5L2 14V2.5Z"/></svg>',
    plus: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2v8M2 6h8"/></svg>',
    pencil: '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M8 1.5 10.5 4 4 10.5H1.5V8L8 1.5Z"/></svg>',
    xsm: '<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M2 2 8 8M8 2 2 8"/></svg>',
  };

  const HUB_CARDS = [
    {
      sectors: ['COMERCIAL', 'FINANCEIRO', 'GERAL', 'OPERACIONAL', 'TI'],
      title: 'Captação de imóveis',
      tags: ['#consulta', '#captação', '#imóveis'],
    },
    {
      sectors: ['COMERCIAL', 'FINANCEIRO', 'GERAL', 'OPERACIONAL', 'TI'],
      title: 'Como funciona o saldo',
      tags: ['#consulta', '#saldo', '#financeiro'],
    },
    {
      sectors: ['COMERCIAL', 'FINANCEIRO', 'GERAL', 'OPERACIONAL', 'TI'],
      title: 'Comunicados de instabilidade',
      tags: ['#comunicado', '#status', '#operacional'],
    },
    {
      sectors: ['COMERCIAL', 'FINANCEIRO', 'GERAL', 'OPERACIONAL', 'TI'],
      title: 'Gestão de tokens e acesso',
      tags: ['#tokens', '#acesso', '#segurança'],
    },
  ];

  const SECTORS = ['COMERCIAL', 'FINANCEIRO', 'GERAL', 'OPERACIONAL', 'TESTE', 'TI'];

  const ACTIVE_CARDS = [
    { tags: ['TI'], title: 'Links Jean' },
    { tags: ['GERAL', 'TI'], title: 'HTML Manutenção' },
    { tags: ['COMERCIAL', 'TI'], title: 'Negativar na plataforma' },
    { tags: ['FINANCEIRO'], title: 'Como funciona o saldo' },
  ];

  const AUDIT_ROWS = [
    { time: '16:42:51', date: '03/03/26', action: 'ACESSO HUB', tone: 'ok', detail: 'Dashboard carregado' },
    { time: '16:40:12', date: '03/03/26', action: 'BAIXOU IMAGEM', tone: 'neutral', detail: 'Card: Como funciona o saldo' },
    { time: '16:38:05', date: '03/03/26', action: 'COPIOU TEXTO', tone: 'warn', detail: 'Card: Como funciona o saldo' },
    { time: '16:35:44', date: '03/03/26', action: 'EDITOU CARD', tone: 'neutral', detail: 'Card: Links Jean' },
    { time: '16:31:20', date: '03/03/26', action: 'CRIOU CARD', tone: 'neutral', detail: 'Gestão de tokens e acesso' },
    { time: '16:28:09', date: '03/03/26', action: 'ACESSO HUB', tone: 'ok', detail: 'Dashboard carregado' },
  ];

  const CHAT_USERS = [
    { name: 'admin', tone: 'a' },
    { name: 'fabio', tone: 'f' },
    { name: 'matheus', tone: 'm', active: true },
  ];

  function sectorPills(sectors) {
    const visible = sectors.slice(0, 1);
    const rest = sectors.length - visible.length;
    return visible.map(s => `<span class="ph-card__pill">${s}</span>`).join('')
      + (rest > 0 ? `<span class="ph-card__pill ph-card__pill--more">+${rest}</span>` : '');
  }

  function hubCard(card) {
    return `
      <article class="ph-card">
        <div class="ph-card__pills">${sectorPills(card.sectors)}</div>
        <h4 class="ph-card__title">${card.title}</h4>
        <div class="ph-card__tags">
          ${card.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
      </article>`;
  }

  function screenHub() {
    return `
      <div class="ph-ui ph-ui--hub">
        <header class="ph-top">
          <div class="ph-brand">
            <span class="ph-brand__name">PREVINITY <em>HUB</em></span>
            <span class="ph-brand__badge">admin</span>
          </div>
          <div class="ph-top__actions">
            <label class="ph-search">
              ${ICONS.search}
              <span>Pesquisar…</span>
            </label>
            <span class="ph-icon ph-icon--blue">${ICONS.edit}</span>
            <span class="ph-icon ph-icon--purple">${ICONS.users}</span>
            <span class="ph-icon ph-icon--yellow">${ICONS.trash}</span>
            <span class="ph-icon ph-icon--red">${ICONS.power}</span>
          </div>
        </header>

        <div class="ph-hub-body">
          <div class="ph-grid">
            ${HUB_CARDS.map(hubCard).join('')}
          </div>

          <div class="ph-chat-widget">
            <aside class="ph-chat is-open" aria-hidden="true">
              <div class="ph-chat-contacts">
                <header><span>${ICONS.users}</span> Contatos</header>
                <ul>
                  ${CHAT_USERS.map(u => `
                    <li class="${u.active ? 'is-active' : ''}">
                      <span class="ph-avatar ph-avatar--${u.tone}">${u.name[0]}</span>
                      <span>${u.name}</span>
                    </li>`).join('')}
                </ul>
              </div>
              <div class="ph-chat-panel">
                <header>
                  <span class="ph-avatar ph-avatar--m">m</span>
                  <strong>matheus</strong>
                  <span class="ph-chat__close">${ICONS.close}</span>
                </header>
                <div class="ph-chat__empty">Nenhuma mensagem</div>
                <footer class="ph-chat__composer">
                  <span class="ph-chat__clip">${ICONS.clip}</span>
                  <span class="ph-chat__input">Digite sua mensagem…</span>
                  <span class="ph-chat__send">${ICONS.send}</span>
                </footer>
              </div>
            </aside>
            <span class="ph-fab is-active">${ICONS.chat}</span>
          </div>
        </div>
      </div>`;
  }

  function screenAdmin() {
    return `
      <div class="ph-ui ph-ui--admin">
        <header class="ph-top ph-top--admin">
          <div class="ph-brand ph-brand--admin">
            <span class="ph-brand__name">PREVINITY <em>ADMIN</em></span>
          </div>
          <div class="ph-top__btns">
            <span class="ph-btn ph-btn--ghost ph-btn--orange">VER LOGS</span>
            <span class="ph-btn ph-btn--ghost">VOLTAR AO HUB</span>
          </div>
        </header>

        <div class="ph-admin-grid">
          <section class="ph-admin-col">
            <h3>GESTÃO DE SETORES</h3>
            <div class="ph-sector-add">
              <span>NOVA ÁREA…</span>
              <button type="button">${ICONS.plus}</button>
            </div>
            <ul class="ph-sector-list">
              ${SECTORS.map(s => `
                <li><span>${s}</span><button type="button">${ICONS.xsm}</button></li>`).join('')}
            </ul>
          </section>

          <section class="ph-admin-col ph-admin-col--editor">
            <div class="ph-toast">CARD ATUALIZADO!</div>
            <label class="ph-field ph-field--lg">
              <span>Título do Card</span>
              <input type="text" readonly value="" tabindex="-1" />
            </label>
            <div class="ph-checks">
              <span class="ph-checks__label">VISUALIZAÇÃO PARA:</span>
              <div class="ph-checks__grid">
                ${SECTORS.map(s => `
                  <label><input type="checkbox" checked disabled /> ${s}</label>`).join('')}
              </div>
            </div>
            <div class="ph-field-row">
              <label class="ph-field">
                <span>Tags (ex: vpn, ftp)</span>
                <input type="text" readonly value="" tabindex="-1" />
              </label>
              <label class="ph-field">
                <span>Arquivo</span>
                <span class="ph-browse">Browse…</span>
              </label>
            </div>
            <label class="ph-field ph-field--area">
              <span>Conteúdo do card…</span>
              <textarea readonly tabindex="-1"></textarea>
            </label>
            <button type="button" class="ph-btn ph-btn--primary">PUBLICAR NO HUB</button>
          </section>

          <section class="ph-admin-col ph-admin-col--list">
            <h3>CARDS ATIVOS</h3>
            <ul class="ph-active-cards">
              ${ACTIVE_CARDS.map(card => `
                <li>
                  <div class="ph-active-card__tags">
                    ${card.tags.map(t => `<span>${t}</span>`).join('')}
                  </div>
                  <strong>${card.title}</strong>
                  <div class="ph-active-card__actions">
                    <span class="ph-icon ph-icon--yellow">${ICONS.pencil}</span>
                    <span class="ph-icon ph-icon--red">${ICONS.trash}</span>
                  </div>
                </li>`).join('')}
            </ul>
          </section>
        </div>
      </div>`;
  }

  function screenAudit() {
    return `
      <div class="ph-ui ph-ui--audit">
        <header class="ph-top ph-top--audit">
          <h2>CENTRAL DE <em>AUDITORIA</em></h2>
          <span class="ph-btn ph-btn--ghost">VOLTAR AO HUB</span>
        </header>

        <div class="ph-audit-table-wrap">
          <table class="ph-audit-table">
            <thead>
              <tr>
                <th>HORÁRIO</th>
                <th>USUÁRIO</th>
                <th>AÇÃO</th>
                <th>DETALHES</th>
              </tr>
            </thead>
            <tbody>
              ${AUDIT_ROWS.map(row => `
                <tr>
                  <td class="ph-audit-time">
                    <strong>${row.time}</strong>
                    <span>${row.date}</span>
                  </td>
                  <td class="ph-audit-user">
                    <strong>previnity</strong>
                    <span>ADMIN</span>
                  </td>
                  <td><span class="ph-audit-action ph-audit-action--${row.tone}">${row.action}</span></td>
                  <td class="ph-audit-detail">${row.detail}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  }

  const SCREENS = {
    hub: screenHub,
    admin: screenAdmin,
    audit: screenAudit,
  };

  function init(container) {
    const fab = container.querySelector('.ph-fab');
    if (!fab) return { syncActiveSlide() {}, cleanup() {} };

    let timer = setInterval(() => fab.classList.toggle('is-pulse'), 2200);

    return {
      syncActiveSlide() {},
      cleanup() {
        clearInterval(timer);
        timer = null;
      },
    };
  }

  window.PrevHubMockup = {
    render(id) {
      return SCREENS[id]?.() || screenHub();
    },
    init,
  };
})();
