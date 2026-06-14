(function () {
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function hasUrl(item) {
    return Boolean(item.url && item.url !== '#');
  }

  function displayHost(url) {
    if (!url) return '';
    try {
      return new URL(url).host.replace(/^www\./, '');
    } catch {
      return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
    }
  }

  function renderListItem(item, index) {
    const tag = item.tag ? `<span class="apl-work-type">${esc(item.tag)}</span>` : '';
    const ready = hasUrl(item);

    return `
      <li class="apl-work-item">
        <button
          type="button"
          class="apl-work-row${ready ? '' : ' is-soon'}"
          data-index="${index}"
          ${ready ? '' : 'disabled'}
          aria-label="${esc(item.name)}${ready ? '' : ' — em breve'}"
        >
          <span class="project-arrow">→</span>
          <div class="project-body">
            <span class="project-headline apl-work-line">
              <span class="apl-work-name">${esc(item.name)}</span>${tag}
            </span>
          </div>
        </button>
        ${ready
          ? `<a class="apl-work-open" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${esc(item.name)}">Visitar ↗</a>`
          : ''}
      </li>`;
  }

  function renderAplicariProjectsContent(project, page) {
    const items = page.projects || [];
    const accent = project.accent || '#0EA5E9';

    return `
      <p class="panel-tab-text">${page.text}</p>
      <div class="apl-work apl-work--panel" style="--accent:${accent}" data-aplicari-list>
        <div class="apl-work-head">
          <h3 class="apl-work-title">Projetos</h3>
        </div>
        ${items.length
          ? `<ul class="apl-work-list">${items.map(renderListItem).join('')}</ul>`
          : '<p class="apl-work-empty">Nenhum projeto listado ainda.</p>'}
      </div>`;
  }

  function renderAplicariProjectsPreview(project) {
    const accent = project.accent || '#0EA5E9';

    return `
      <div class="panel-visual-inner panel-visual--hub panel-visual--apl-browser" data-aplicari-preview style="--accent:${accent}">
        <div class="hub-showcase hub-showcase--apl">
          <div class="hub-showcase__glow"></div>
          <div class="hub-showcase__stage hub-showcase__stage--wide">
            <div class="apl-browser" data-apl-browser>
              <header class="apl-browser__titlebar">
                <div class="apl-browser__dots">
                  <button type="button" class="apl-browser__dot is-close" aria-label="Fechar prévia"></button>
                  <button type="button" class="apl-browser__dot is-minimize" aria-label="Minimizar"></button>
                  <a
                    class="apl-browser__dot is-fullscreen"
                    data-apl-fullscreen
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir site em nova aba"
                    hidden
                  ></a>
                </div>
                <div class="apl-browser__tabs">
                  <div class="apl-browser__tab is-active">
                    <span class="apl-browser__favicon" data-apl-favicon aria-hidden="true"></span>
                    <span class="apl-browser__tab-title" data-apl-tab-title>Selecione um projeto</span>
                  </div>
                </div>
              </header>
              <div class="apl-browser__toolbar">
                <button type="button" class="apl-browser__nav" disabled aria-hidden="true">←</button>
                <button type="button" class="apl-browser__nav" disabled aria-hidden="true">→</button>
                <button type="button" class="apl-browser__reload" data-apl-reload aria-label="Recarregar">↻</button>
                <div class="apl-browser__url" data-apl-url>—</div>
                <a class="apl-browser__visit" data-apl-open href="#" target="_blank" rel="noopener noreferrer" hidden>
                  Ir para o site <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div class="apl-browser__screen">
                <div class="apl-browser__viewport">
                  <div class="apl-browser__empty" data-apl-empty>
                    <span>Passe o mouse ou clique em um projeto</span>
                  </div>
                  <iframe
                    class="apl-browser__frame"
                    data-apl-frame
                    title="Prévia do site"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    hidden
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }

  function firstReadyIndex(items) {
    return items.findIndex(hasUrl);
  }

  function updateBrowser(previewRoot, item) {
    const browser = previewRoot.querySelector('[data-apl-browser]');
    const tabTitle = previewRoot.querySelector('[data-apl-tab-title]');
    const urlEl = previewRoot.querySelector('[data-apl-url]');
    const openLink = previewRoot.querySelector('[data-apl-open]');
    const fullLink = previewRoot.querySelector('[data-apl-fullscreen]');
    const iframe = previewRoot.querySelector('[data-apl-frame]');
    const empty = previewRoot.querySelector('[data-apl-empty]');
    const favicon = previewRoot.querySelector('[data-apl-favicon]');

    if (!item || !hasUrl(item)) {
      tabTitle.textContent = 'Selecione um projeto';
      urlEl.textContent = '—';
      openLink.hidden = true;
      if (fullLink) fullLink.hidden = true;
      iframe.hidden = true;
      iframe.removeAttribute('src');
      empty.hidden = false;
      empty.querySelector('span').textContent = 'Passe o mouse ou clique em um projeto';
      favicon.style.backgroundImage = '';
      browser.classList.remove('is-loading');
      return;
    }

    const host = displayHost(item.url);
    tabTitle.textContent = item.name;
    urlEl.textContent = host;
    openLink.href = item.url;
    openLink.hidden = false;
    if (fullLink) {
      fullLink.href = item.url;
      fullLink.hidden = false;
    }
    empty.hidden = true;
    iframe.hidden = false;
    browser.classList.add('is-loading');
    favicon.style.backgroundImage = `url(https://www.google.com/s2/favicons?domain=${encodeURIComponent(host)}&sz=32)`;

    iframe.onload = () => browser.classList.remove('is-loading');
    iframe.onerror = () => browser.classList.remove('is-loading');
    iframe.src = item.url;
  }

  function initAplicariProjectsMockup(layout, project, page) {
    const list = layout?.querySelector('[data-aplicari-list]');
    const preview = layout?.querySelector('[data-aplicari-preview]');
    if (!list || !preview) return;

    const items = page.projects || [];
    let lockedIndex = null;
    let hoverTimer = null;

    const rows = [...list.querySelectorAll('.apl-work-row[data-index]')];
    const browser = preview.querySelector('[data-apl-browser]');
    const iframe = preview.querySelector('[data-apl-frame]');

    function setActiveRow(index) {
      rows.forEach(row => {
        row.classList.toggle('is-active', +row.dataset.index === index);
      });
    }

    function showProject(index) {
      if (index == null || index < 0 || !hasUrl(items[index])) return;
      setActiveRow(index);
      updateBrowser(preview, items[index]);
    }

    function clearPreview() {
      lockedIndex = null;
      rows.forEach(row => row.classList.remove('is-active'));
      updateBrowser(preview, null);
    }

    rows.forEach(row => {
      const index = +row.dataset.index;
      if (!hasUrl(items[index])) return;

      row.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => showProject(index), 80);
      });

      row.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimer);
      });

      row.addEventListener('click', () => {
        lockedIndex = index;
        showProject(index);
      });

      row.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          lockedIndex = index;
          showProject(index);
        }
      });
    });

    list.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimer);
      if (lockedIndex != null) showProject(lockedIndex);
    });

    preview.querySelector('.is-close')?.addEventListener('click', clearPreview);

    preview.querySelector('.is-minimize')?.addEventListener('click', () => {
      browser?.classList.toggle('is-minimized');
    });

    preview.querySelector('[data-apl-reload]')?.addEventListener('click', () => {
      if (!iframe?.src) return;
      browser?.classList.add('is-loading');
      iframe.src = iframe.src;
    });

    const start = firstReadyIndex(items);
    if (start >= 0) {
      lockedIndex = start;
      showProject(start);
    }

    if (typeof gsap !== 'undefined') {
      gsap.fromTo(
        rows,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, ease: 'power3.out', delay: 0.05 },
      );
      gsap.fromTo(
        browser,
        { opacity: 0, y: 16, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 },
      );
    }

    layout._aplProjectsCleanup = () => {
      clearTimeout(hoverTimer);
      iframe.onload = null;
      iframe.onerror = null;
    };
  }

  window.AplicariMockup = {
    renderContent: renderAplicariProjectsContent,
    render: renderAplicariProjectsPreview,
    init: initAplicariProjectsMockup,
  };
})();
