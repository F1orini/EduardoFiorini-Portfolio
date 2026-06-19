(function () {
  const POKEBALL = `
    <span class="pk-ball" aria-hidden="true">
      <span class="pk-ball__top"></span>
      <span class="pk-ball__belt"></span>
      <span class="pk-ball__btn"></span>
    </span>`;

  function statusBar() {
    return `
      <div class="pk-status">
        <span class="pk-status__time">11:06</span>
        <span class="pk-status__icons">
          <i class="pk-sig"></i>
          <i class="pk-wifi"></i>
          <i class="pk-batt">80</i>
        </span>
      </div>`;
  }

  function navBar() {
    return `
      <div class="pk-navbar" aria-hidden="true">
        <span class="pk-nav-back"></span>
        <span class="pk-nav-home"></span>
        <span class="pk-nav-recent"></span>
      </div>`;
  }

  // ---- Dados ----
  const IMG = 'assets/pokeapp/';

  const SCAN_RESULTS = [
    { name: 'Mega Latias ex', set: 'Mega Evolution', num: '#163', img: 'me1-163.png' },
    { name: 'Mega Camerupt ex', set: 'Mega Evolution', num: '#22', img: 'me1-22.png' },
    { name: 'Spearow', set: 'Mega Evolution', num: '#151', img: 'me1-151.png' },
    { name: 'Mega Charizard X ex', set: 'Phantasmal Flames', num: '#13', img: 'me2-13.png' },
  ];

  const COLLECTION = [
    { name: 'Mega Latias ex', img: 'me1-163.png' },
    { name: 'Ambipom', img: 'ambipom.png' },
    { name: 'Reshiram', img: 'reshiram.png' },
    { name: 'Vileplume', img: 'vileplume.png' },
    { name: 'Shedinja', img: 'me1-61.png' },
    { name: 'Eternatus', img: 'eternatus.png' },
    { name: 'Brambleghast', img: 'brambleghast.png' },
    { name: 'Centiskorch', img: 'me1-30.png' },
    { name: 'Solrock', img: 'me1-75.png' },
    { name: 'Ninetales', img: 'me1-20.png' },
    { name: 'Latios', img: 'me1-101.png' },
    { name: 'Exeggutor', img: 'me1-5.png' },
    { name: 'Numel', img: 'me1-21.png' },
    { name: 'Helioptile', img: 'me1-52.png' },
    { name: 'Exeggcute', img: 'me1-4.png' },
    { name: 'Spoink', img: 'me1-62.png' },
    { name: 'Vulpix', img: 'me1-19.png' },
    { name: 'Pyroar', img: 'me1-24.png' },
    { name: 'Inteleon', img: 'me1-41.png' },
    { name: 'Gholdengo', img: 'me1-99.png' },
  ];

  const SETS = [
    { name: 'Chaos Rising', have: 0, total: 86, logo: 'sets/me4.png' },
    { name: 'Perfect Order', have: 0, total: 88, logo: 'sets/me3.png' },
    { name: 'Ascended Heroes', have: 0, total: 217, logo: 'sets/me2pt5.png' },
    { name: 'Phantasmal Flames', have: 0, total: 94, logo: 'sets/me2.png' },
    { name: 'Mega Evolution', have: 1, total: 132, active: true, logo: 'sets/me1.png' },
    { name: 'White Flare', have: 0, total: 86, logo: 'sets/rsv10pt5.png' },
    { name: 'Black Bolt', have: 0, total: 86, logo: 'sets/zsv10pt5.png' },
    { name: 'Destined Rivals', have: 0, total: 182, logo: 'sets/sv10.png' },
  ];

  // ---- Telas ----
  function screenScanner() {
    return `
      <div class="pk-ui pk-ui--scanner">
        ${statusBar()}
        <header class="pk-appbar">
          ${POKEBALL}
          <span class="pk-appbar__title">Scanner</span>
          <span class="pk-appbar__action">Adicionar todos</span>
        </header>
        <div class="pk-cam">
          <div class="pk-cam__noise"></div>
          <div class="pk-cam__frame">
            <span class="pk-cam__corner pk-cam__corner--tl"></span>
            <span class="pk-cam__corner pk-cam__corner--tr"></span>
            <span class="pk-cam__corner pk-cam__corner--bl"></span>
            <span class="pk-cam__corner pk-cam__corner--br"></span>
            <span class="pk-cam__scanline"></span>
            <span class="pk-cam__ocr">Número: ex 025/165</span>
          </div>
          <button type="button" class="pk-scan-btn">▶ Iniciar scanner</button>
        </div>
        <div class="pk-scan-list">
          ${SCAN_RESULTS.map(c => `
            <div class="pk-scan-row">
              <img class="pk-thumb" src="${IMG}${c.img}" alt="${c.name}" loading="lazy" />
              <div class="pk-scan-row__info">
                <strong>${c.name}</strong>
                <span>${c.set} &nbsp;·&nbsp; ${c.num}</span>
              </div>
              <span class="pk-scan-row__x">✕</span>
              <span class="pk-scan-row__add">Adicionar</span>
            </div>`).join('')}
        </div>
        ${navBar()}
      </div>`;
  }

  function screenColecao() {
    return `
      <div class="pk-ui pk-ui--colecao">
        ${statusBar()}
        <header class="pk-appbar">
          ${POKEBALL}
          <span class="pk-appbar__title">Coleção (23)</span>
          <span class="pk-appbar__icon">≡</span>
        </header>
        <div class="pk-grid">
          ${COLLECTION.map(c => `
            <span class="pk-cardimg">
              <img src="${IMG}${c.img}" alt="${c.name}" loading="lazy" />
            </span>`).join('')}
        </div>
        ${navBar()}
      </div>`;
  }

  function screenDetalhe() {
    return `
      <div class="pk-ui pk-ui--detalhe">
        ${statusBar()}
        <header class="pk-appbar pk-appbar--detail">
          <span class="pk-appbar__back">←</span>
          <span class="pk-lang">🇬🇧 EN</span>
        </header>
        <div class="pk-detail-scroll">
          <div class="pk-hero">
            <span class="pk-cardimg pk-cardimg--big">
              <img src="${IMG}me2-13_hires.png" alt="Mega Charizard X ex" />
            </span>
          </div>

          <div class="pk-title-row">
            <h3>Mega Charizard X ex</h3>
            <span class="pk-hp-badge">HP 360</span>
          </div>
          <div class="pk-pills">
            <span class="pk-pill">Pokémon</span>
            <span class="pk-pill pk-pill--fire">Fire</span>
            <span class="pk-pill pk-pill--rare">Double Rare</span>
          </div>
          <p class="pk-setline">Phantasmal Flames &nbsp;·&nbsp; #13</p>

          <div class="pk-section">
            <span class="pk-section__mark"></span>
            <h4>Ataques <span class="pk-tradbadge">PT-BR</span></h4>
          </div>
          <div class="pk-attack-box">
            <header>
              <span class="pk-energy pk-energy--fire"></span>
              <span class="pk-energy pk-energy--fire"></span>
              <strong>InfernoX</strong>
              <span class="pk-attack-dmg">90×</span>
            </header>
            <p>Descarte qualquer quantidade de Energia Fogo de seus Pokémon e este ataque causará 90 de dano para cada carta descartada dessa forma.</p>
          </div>

          <div class="pk-section">
            <span class="pk-section__mark"></span>
            <h4>Minha Coleção</h4>
          </div>
          <div class="pk-collection-box">
            <button type="button" class="pk-remove">⊖ Remover da Coleção</button>
            <div class="pk-row-field">
              <span>Quantidade</span>
              <span class="pk-stepper"><i>−</i><b>1</b><i>+</i></span>
            </div>
            <div class="pk-row-field">
              <span>Foil / Holo</span>
              <span class="pk-toggle"></span>
            </div>
            <div class="pk-row-field">
              <span>Nota PSA<small>Sem graduação</small></span>
              <span class="pk-select">Definir ▾</span>
            </div>
          </div>
        </div>
      </div>`;
  }

  function screenSets() {
    return `
      <div class="pk-ui pk-ui--sets">
        ${statusBar()}
        <header class="pk-appbar">
          ${POKEBALL}
          <span class="pk-appbar__title">Sets</span>
        </header>
        <div class="pk-sets-grid">
          ${SETS.map(s => {
            const pct = Math.round((s.have / s.total) * 100);
            return `
            <article class="pk-set${s.active ? ' pk-set--active' : ''}">
              <div class="pk-set__logo">
                <img src="${IMG}${s.logo}" alt="${s.name}" loading="lazy" />
              </div>
              <strong class="pk-set__name">${s.name}</strong>
              ${s.active ? `<span class="pk-set__pct">${pct || 1}%</span>` : ''}
              <span class="pk-set__bar"><i style="width:${pct || (s.active ? 2 : 0)}%"></i></span>
              <span class="pk-set__count">${s.have} / ${s.total}</span>
            </article>`;
          }).join('')}
        </div>
        ${navBar()}
      </div>`;
  }

  const SCREENS = {
    scanner: screenScanner,
    colecao: screenColecao,
    detalhe: screenDetalhe,
    sets: screenSets,
  };

  window.PokeAppMockup = {
    render(id) {
      return SCREENS[id]?.() || screenScanner();
    },
    init() {
      return { syncActiveSlide() {}, cleanup() {} };
    },
  };
})();
