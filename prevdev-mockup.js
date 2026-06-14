(function () {
  const CANDIDATES = [
    {
      initial: '1',
      name: 'Candidato 1',
      email: 'email@candidato.com',
      phone: '(00) 00000-0000',
      links: ['linkedin'],
      status: 'Em análise',
      time: '00/00/0000 00:00',
    },
    {
      initial: '2',
      name: 'Candidato 2',
      email: 'email@candidato.com',
      phone: '(00) 00000-0000',
      links: ['github', 'linkedin'],
      status: 'Em análise',
      time: '00/00/0000 00:00',
    },
    {
      initial: '3',
      name: 'Candidato 3',
      email: 'email@candidato.com',
      phone: '(00) 00000-0000',
      links: ['github', 'linkedin'],
      status: 'Em análise',
      time: '00/00/0000 00:00',
    },
  ];

  const EVAL_CANDIDATE = {
    name: 'Candidato',
    email: 'email@candidato.com',
    evalTime: '00/00/0000 00:00',
    score: '5/10',
  };

  const CODES = [
    { code: 'BAS-X7K2', level: 'Básica', levelTone: 'basic', tag: 'usado', date: '20/01/2026', actions: ['copy', 'delete'] },
    { code: 'BAS-01', level: 'Básica', levelTone: 'basic', tag: 'padrão', actions: ['copy'] },
    { code: 'MED-01', level: 'Média', levelTone: 'medium', tag: 'padrão', actions: ['copy'] },
    { code: 'AVN-01', level: 'Avançada', levelTone: 'advanced', tag: 'padrão', actions: ['copy'] },
  ];

  const LEVELS = [
    { name: 'Nível Básica', tone: 'basic', count: '15 perguntas' },
    { name: 'Nível Média', tone: 'medium', count: '14 perguntas' },
    { name: 'Nível Avançada', tone: 'advanced', count: '14 perguntas' },
  ];

  function logoMark() {
    return `
      <span class="pd-logo">
        <span class="pd-logo__prev">prev</span>
        <span class="pd-logo__dev">.dev</span>
      </span>`;
  }

  function internalTop() {
    return `
      <header class="pd-internal-top">
        <div class="pd-internal-top__left">
          ${logoMark()}
          <span class="pd-badge-internal">INTERNO · RECRUTAMENTO</span>
        </div>
        <span class="pd-btn-outline pd-btn-outline--sm">Sair</span>
      </header>`;
  }

  function internalTabs(active) {
    const tabs = [
      { id: 'avaliacoes', label: 'Avaliações', count: 1 },
      { id: 'candidaturas', label: 'Candidaturas', count: 3 },
      { id: 'codigos', label: 'Códigos & Provas' },
    ];
    return `
      <nav class="pd-tabs" aria-label="Áreas do Prev .dev">
        ${tabs.map(tab => `
          <span class="pd-tab${tab.id === active ? ' is-active' : ''}">
            ${tab.label}${tab.count != null ? `<i>${tab.count}</i>` : ''}
          </span>`).join('')}
      </nav>`;
  }

  function candidateLinks(links) {
    if (!links.length) return '';
    return `
      <span class="pd-cand-links">
        ${links.map(l => `<span class="pd-cand-link pd-cand-link--${l}">${l === 'github' ? 'GitHub' : 'LinkedIn'}</span>`).join('')}
      </span>`;
  }

  function screenCandidaturas() {
    return `
      <div class="pd-ui pd-ui--internal">
        ${internalTop()}
        ${internalTabs('candidaturas')}
        <div class="pd-internal-main">
          <h2 class="pd-page-title">Candidaturas</h2>
          <p class="pd-page-sub">// 3 candidaturas recebidas</p>
          <div class="pd-cand-list">
            ${CANDIDATES.map(c => `
              <article class="pd-cand-row">
                <span class="pd-cand-avatar">${c.initial}</span>
                <div class="pd-cand-main">
                  <strong>${c.name}</strong>
                  <span>${c.email} · ${c.phone}</span>
                  ${candidateLinks(c.links)}
                </div>
                <div class="pd-cand-meta">
                  <span class="pd-status pd-status--analysis">${c.status}</span>
                  <time>${c.time}</time>
                </div>
                <span class="pd-cand-chevron" aria-hidden="true">⌄</span>
              </article>`).join('')}
          </div>
        </div>
      </div>`;
  }

  function screenAvaliacoes() {
    return `
      <div class="pd-ui pd-ui--internal">
        <header class="pd-internal-top pd-internal-top--tools">
          <div class="pd-internal-top__left">
            ${logoMark()}
            <span class="pd-badge-internal">INTERNO · RECRUTAMENTO</span>
          </div>
          <div class="pd-internal-top__right">
            <span class="pd-btn-outline pd-btn-outline--sm">↓ CSV</span>
            <span class="pd-btn-outline pd-btn-outline--sm pd-btn-outline--warn">Limpar tudo</span>
            <span class="pd-btn-outline pd-btn-outline--sm">Sair</span>
          </div>
        </header>
        ${internalTabs('avaliacoes')}
        <div class="pd-internal-main">
          <div class="pd-eval-summary">
            <span>1 candidato</span>
            <span class="pd-eval-pill">1 Em desenvolvimento</span>
            <span>média 28:54</span>
          </div>
          <div class="pd-eval-filters">
            <span class="pd-eval-search">Buscar por nome ou e-mail…</span>
            <span class="pd-eval-select">Todas classificações</span>
            <span class="pd-eval-select">Todos os status</span>
            <span class="pd-eval-select">Mais recentes</span>
          </div>
          <article class="pd-eval-row">
            <div class="pd-eval-row__body">
              <strong>${EVAL_CANDIDATE.name}</strong>
              <span>${EVAL_CANDIDATE.email} · ${EVAL_CANDIDATE.evalTime}</span>
            </div>
            <span class="pd-status pd-status--dev">Em desenvolvimento</span>
            <span class="pd-eval-score">${EVAL_CANDIDATE.score} ›</span>
            <span class="pd-eval-remove" aria-hidden="true">×</span>
          </article>
        </div>
      </div>`;
  }

  function screenCodigos() {
    return `
      <div class="pd-ui pd-ui--internal pd-ui--scroll">
        ${internalTop()}
        ${internalTabs('codigos')}
        <div class="pd-internal-main pd-internal-main--stack">
          <section class="pd-panel-card">
            <h3>CÓDIGOS DE ACESSO DOS CANDIDATOS</h3>
            <p>Crie um código, escolha o nível da prova e envie ao candidato junto com o link. O código define qual prova ele faz.</p>
            <div class="pd-code-gen">
              <label><small>Nível da prova:</small><span>Nível Básica ▾</span></label>
              <label class="pd-code-gen__custom"><small>CÓDIGO PERSONALIZADO (OPCIONAL)</small><span></span></label>
              <label><span>1 código ▾</span></label>
              <span class="pd-btn-primary">+ Gerar</span>
            </div>
            <div class="pd-code-list">
              ${CODES.map(row => `
                <div class="pd-code-row">
                  <strong>${row.code}</strong>
                  <span class="pd-level pd-level--${row.levelTone}">${row.level}</span>
                  <span class="pd-code-tag pd-code-tag--${row.tag === 'usado' ? 'used' : 'default'}">${row.tag}</span>
                  ${row.date ? `<time>${row.date}</time>` : '<time></time>'}
                  <div class="pd-code-actions">
                    <span>Copiar</span>
                    ${row.actions.includes('delete') ? '<span class="is-danger">Excluir</span>' : ''}
                  </div>
                </div>`).join('')}
            </div>
          </section>
          <section class="pd-panel-card">
            <h3>PROVAS · PERGUNTAS E PRÉVIA</h3>
            <p>Veja a prova como o candidato vê (com o gabarito) ou edite as perguntas de cada nível manualmente.</p>
            <div class="pd-custom-note">
              <span>• perguntas personalizadas ativas</span>
              <span>Restaurar padrão</span>
            </div>
            <div class="pd-level-list">
              ${LEVELS.map(lv => `
                <div class="pd-level-row">
                  <div>
                    <strong class="pd-level-name pd-level-name--${lv.tone}">${lv.name}</strong>
                    <small>${lv.count}</small>
                  </div>
                  <div class="pd-level-actions">
                    <span>Ver prévia</span>
                    <span class="pd-btn-primary pd-btn-primary--sm">Editar</span>
                  </div>
                </div>`).join('')}
            </div>
          </section>
        </div>
      </div>`;
  }

  function screenCandidatura() {
    return `
      <div class="pd-ui pd-ui--public pd-ui--scroll">
        <header class="pd-public-top">
          ${logoMark()}
          <nav class="pd-public-nav">
            <span>Sobre a empresa</span>
            <span>Processo seletivo</span>
          </nav>
        </header>
        <div class="pd-public-main">
          <span class="pd-vaga-pill">● VAGA ABERTA · SUPORTE TÉCNICO &amp; DEV JÚNIOR</span>
          <h2 class="pd-public-title">Mande sua candidatura.</h2>
          <p class="pd-public-lead">Preencha os dados abaixo. Se seu perfil fizer sentido, a gente entra em contato pelo WhatsApp ou e-mail pra uma conversa inicial.</p>
          <span class="pd-public-link">→ Leia sobre a empresa antes de se candidatar</span>

          <p class="pd-code-comment">// A VAGA</p>
          <div class="pd-vaga-grid">
            <div class="pd-vaga-card">
              <small>CARGO</small>
              <strong>Suporte Técnico &amp; Dev Júnior</strong>
              <span>Previnity</span>
            </div>
            <div class="pd-vaga-card">
              <small>MODELO</small>
              <strong>Presencial</strong>
              <span>CLT · Período integral</span>
            </div>
            <div class="pd-vaga-card pd-vaga-card--wide">
              <small>O QUE VOCÊ VAI FAZER</small>
              <ul>
                <li>Atender e resolver chamados técnicos de clientes</li>
                <li>Apoiar integrações via API com sistemas dos clientes</li>
                <li>Diagnosticar falhas e acompanhar resoluções</li>
                <li>Contribuir com melhorias nos produtos</li>
                <li>Documentar processos e soluções recorrentes</li>
              </ul>
            </div>
            <div class="pd-vaga-card pd-vaga-card--wide">
              <small>O QUE BUSCAMOS</small>
              <ul>
                <li>Vontade real de aprender e crescer</li>
                <li>Lógica de programação e noções de API/REST</li>
                <li>Comunicação clara, escrita e verbal</li>
                <li>Perfil resolutivo, gosta de entender o problema</li>
                <li>Experiência em suporte ou desenvolvimento é diferencial</li>
              </ul>
            </div>
          </div>

          <div class="pd-form-shell">
            <header class="pd-form-shell__bar">
              <span class="pd-form-shell__dots"><i></i><i></i><i></i></span>
              <span class="pd-form-shell__file">candidatura.php</span>
              <span class="pd-form-shell__method">POST /candidatura</span>
            </header>
            <div class="pd-form-body">
              <p class="pd-code-comment">// DADOS PESSOAIS</p>
              <label class="pd-field"><span class="pd-var pd-var--green">$nome // obrigatório</span><i>Seu nome completo</i></label>
              <div class="pd-field-row">
                <label class="pd-field"><span class="pd-var pd-var--green">$email // obrigatório</span><i>seu@email.com</i></label>
                <label class="pd-field"><span class="pd-var pd-var--green">$telefone // obrigatório</span><i>(11) 99999-9999</i></label>
              </div>
              <p class="pd-code-comment">// LINKS · OPCIONAL</p>
              <div class="pd-field-row">
                <label class="pd-field"><span class="pd-var pd-var--purple">$github // opcional</span><i>github.com/usuario</i></label>
                <label class="pd-field"><span class="pd-var pd-var--purple">$linkedin // opcional</span><i>linkedin.com/in/usuario</i></label>
              </div>
              <p class="pd-code-comment">// APRESENTAÇÃO</p>
              <label class="pd-field pd-field--area">
                <span class="pd-var pd-var--orange">$sobre // conte um pouco sobre você</span>
                <i>De onde você veio, o que já fez, o que te interessa. Pode ser informal, queremos entender quem você é antes de qualquer entrevista.</i>
                <small>0 / 1200</small>
              </label>
              <p class="pd-code-comment">// CURRÍCULO</p>
              <div class="pd-upload">
                <span class="pd-upload__icon">↑</span>
                <strong>Arraste seu currículo aqui ou clique para selecionar</strong>
                <span>PDF, DOC ou DOCX · máx. 5 MB</span>
              </div>
              <span class="pd-submit">Enviar candidatura →</span>
            </div>
          </div>
        </div>
      </div>`;
  }

  const SCREENS = {
    candidaturas: screenCandidaturas,
    avaliacoes: screenAvaliacoes,
    codigos: screenCodigos,
    candidatura: screenCandidatura,
  };

  window.PrevDevMockup = {
    render(id) {
      return SCREENS[id]?.() || screenCandidaturas();
    },
    init() {
      return { syncActiveSlide() {}, cleanup() {} };
    },
  };
})();
