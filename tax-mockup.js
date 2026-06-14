(function () {
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function capabilityId(item) {
    if (item.apiId) return item.apiId;
    const title = typeof item === 'string' ? item : item.title;
    return title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => {
        if (word.length <= 2) return word.toUpperCase();
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join('');
  }

  function getApiMeta(project, page) {
    const api = { ...(project.api || {}), ...(page?.api || {}) };
    return {
      host: api.host || 'api.internal',
      prompt: api.prompt || 'agent',
      org: api.org || project.title,
      role: api.role || 'contributor',
    };
  }

  function getCapabilityItems(project, page) {
    if (page?.scope?.length) return page.scope;
    if (page?.id && page.id !== 'main') {
      return [{
        title: page.title || page.label,
        text: page.text || page.headline || '',
        apiId: page.apiId,
      }];
    }
    return project.scope || [];
  }

  function buildJson(item, meta) {
    const id = capabilityId(item);
    return `{
  "agent": "Eduardo Fiorini",
  "org": "${esc(meta.org)}",
  "role": "${esc(meta.role)}",
  "capability": {
    "id": "${esc(id)}",
    "title": "${esc(item.title)}",
    "status": "active"
  }
}`;
  }

  function buildCurl(item) {
    return `curl -s /v1/agent/capabilities/${capabilityId(item)}`;
  }

  function renderProjectApiMockup(project, page) {
    const items = getCapabilityItems(project, page);
    const meta = getApiMeta(project, page);
    const accent = page?.accent || project.accent || '#3B82F6';
    const first = items[0];

    return `
      <div class="panel-visual-inner panel-visual--tax-api">
        <div class="tax-api" style="--tax-accent: ${accent}" data-project-api>
          <header class="tax-api__bar">
            <i></i><i></i><i></i>
            <span>${esc(meta.host)} · v1</span>
            <span class="tax-api__pill">GET</span>
          </header>
          <div class="tax-api__body">
            <div class="tax-api__req">
              <div class="tax-api__req-line">
                <span class="tax-api__prompt">${esc(meta.prompt)} $</span>
              </div>
              <div class="tax-api__req-line">
                <code class="tax-api__cmd" data-tax-cmd></code>
                <span class="tax-api__cursor" aria-hidden="true"></span>
              </div>
            </div>
            <pre class="tax-api__json is-pending" data-tax-json></pre>
            <div class="tax-api__meta">
              <span class="tax-api__status" data-tax-status>200 OK · 38ms</span>
              <span class="tax-api__tag" data-tax-tag>application/json</span>
            </div>
            <article class="tax-api__card" data-tax-card>
              <small data-tax-kicker>capability.detail</small>
              <strong data-tax-title>${esc(first?.title || '')}</strong>
              <p data-tax-text>${esc(first?.text || '')}</p>
            </article>
            ${items.length > 1 ? `
            <div class="tax-api__nav" data-tax-dots>
              ${items.map((item, i) => `
                <button
                  type="button"
                  class="tax-api__dot${i === 0 ? ' is-active' : ''}"
                  data-index="${i}"
                  aria-label="${esc(item.title)}"
                ></button>`).join('')}
            </div>` : ''}
          </div>
        </div>
      </div>`;
  }

  function initProjectApiMockup(container, project, page) {
    const root = container.querySelector('[data-project-api]');
    if (!root) return;

    const items = getCapabilityItems(project, page);
    const meta = getApiMeta(project, page);
    if (!items.length) return;

    const cmdEl = root.querySelector('[data-tax-cmd]');
    const jsonEl = root.querySelector('[data-tax-json]');
    const titleEl = root.querySelector('[data-tax-title]');
    const textEl = root.querySelector('[data-tax-text]');
    const statusEl = root.querySelector('[data-tax-status]');
    const dots = [...root.querySelectorAll('.tax-api__dot')];
    const cardEl = root.querySelector('[data-tax-card]');

    let active = 0;
    let timer = null;
    let typeTimer = null;
    let typeGen = 0;

    function cancelTyping() {
      typeGen += 1;
      if (typeTimer) clearTimeout(typeTimer);
      typeTimer = null;
    }

    function typeCommand(text, onDone) {
      cancelTyping();
      const gen = typeGen;
      if (!cmdEl) {
        onDone?.();
        return;
      }
      cmdEl.textContent = '';
      root.classList.add('is-typing');
      if (jsonEl) jsonEl.classList.add('is-pending');

      let i = 0;
      const tick = () => {
        if (gen !== typeGen) return;
        if (i >= text.length) {
          root.classList.remove('is-typing');
          onDone?.();
          return;
        }
        cmdEl.textContent += text[i];
        i += 1;
        typeTimer = setTimeout(tick, 12 + Math.random() * 14);
      };
      typeTimer = setTimeout(tick, 35);
    }

    function goTo(i, animate = true) {
      active = (i + items.length) % items.length;
      const item = items[active];
      const curl = buildCurl(item);

      dots.forEach((dot, idx) => dot.classList.toggle('is-active', idx === active));
      if (titleEl) titleEl.textContent = item.title;
      if (textEl) textEl.textContent = item.text;
      if (statusEl) statusEl.textContent = `… · aguardando`;

      typeCommand(curl, () => {
        if (jsonEl) {
          jsonEl.textContent = buildJson(item, meta);
          jsonEl.classList.remove('is-pending');
        }
        if (statusEl) statusEl.textContent = `200 OK · ${32 + active * 7}ms`;
      });

      if (animate && cardEl && typeof gsap !== 'undefined') {
        gsap.fromTo(cardEl, { opacity: 0.55, y: 6 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
      }
    }

    function startTimer() {
      clearInterval(timer);
      if (items.length > 1) {
        timer = setInterval(() => goTo(active + 1), 5200);
      }
    }

    dots.forEach(btn => {
      btn.addEventListener('click', () => {
        goTo(+btn.dataset.index);
        startTimer();
      });
    });

    goTo(0, true);
    startTimer();

    root._projectApiCleanup = () => {
      clearInterval(timer);
      cancelTyping();
    };
  }

  window.ProjectApiMockup = {
    render: renderProjectApiMockup,
    init: initProjectApiMockup,
  };

  window.TaxMockup = window.ProjectApiMockup;
})();
