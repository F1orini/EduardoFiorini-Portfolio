(function () {
  function rackUnit(x, y, w, h, label, sub, cls, ports) {
    const hw = w / 2;
    const hh = h / 2;
    let portRow = '';
    for (let i = 0; i < ports; i += 1) {
      const px = -hw + 10 + i * 9;
      const on = i % 3 !== 1 ? '' : ' nd-dev__port--on';
      portRow += `<rect class="nd-dev__port${on}" x="${px - 2}" y="${hh - 9}" width="4" height="3" rx="0.6"/>`;
    }
    return `
      <g class="nd-dev nd-dev--rack ${cls}" transform="translate(${x}, ${y})">
        <rect class="nd-dev__ear" x="${-hw - 4}" y="${-hh + 4}" width="3" height="${h - 8}" rx="1"/>
        <rect class="nd-dev__ear" x="${hw + 1}" y="${-hh + 4}" width="3" height="${h - 8}" rx="1"/>
        <rect class="nd-dev__body" x="${-hw}" y="${-hh}" width="${w}" height="${h}" rx="6"/>
        <rect class="nd-dev__face" x="${-hw + 4}" y="${-hh + 4}" width="${w - 8}" height="${h - 14}" rx="3"/>
        <rect class="nd-dev__lcd" x="${-hw + 8}" y="${-hh + 7}" width="${w - 16}" height="7" rx="2"/>
        ${portRow}
        <text class="nd-dev__label" y="${hh + 13}">${label}</text>
        <text class="nd-dev__sub" y="${hh + 22}">${sub}</text>
      </g>`;
  }

  function modemUnit(x, y, label, cls) {
    return `
      <g class="nd-dev nd-dev--modem ${cls}" transform="translate(${x}, ${y})">
        <rect class="nd-dev__body" x="-38" y="-20" width="76" height="40" rx="8"/>
        <rect class="nd-dev__face" x="-32" y="-14" width="64" height="18" rx="3"/>
        <rect class="nd-dev__wan" x="-4" y="-20" width="8" height="4" rx="1"/>
        <circle class="nd-dev__led nd-led-pwr" cx="-20" cy="12" r="2.8"/>
        <circle class="nd-dev__led nd-led-wan" cx="-4" cy="12" r="2.8"/>
        <circle class="nd-dev__led nd-led-lan" cx="12" cy="12" r="2.8"/>
        <path class="nd-dev__ant" d="M0 -20 L0 -32 M-7 -27 L7 -27"/>
        <text class="nd-dev__label" y="32">${label}</text>
      </g>`;
  }

  function workstation(x, y, label) {
    return `
      <g class="nd-dev nd-dev--ws" transform="translate(${x}, ${y})">
        <rect class="nd-dev__desk" x="-24" y="8" width="48" height="4" rx="1"/>
        <rect class="nd-dev__screen" x="-18" y="-18" width="36" height="24" rx="3"/>
        <rect class="nd-dev__screen-glow" x="-15" y="-15" width="30" height="17" rx="2"/>
        <rect class="nd-dev__kb" x="-14" y="2" width="28" height="5" rx="1"/>
        <text class="nd-edge-label" y="26">${label}</text>
      </g>`;
  }

  function upsUnit(x, y) {
    return `
      <g class="nd-dev nd-dev--ups" transform="translate(${x}, ${y})">
        <rect class="nd-dev__body nd-dev__body--ups" x="-28" y="-36" width="56" height="72" rx="8"/>
        <rect class="nd-dev__ups-display" x="-18" y="-26" width="36" height="11" rx="2"/>
        <rect class="nd-dev__ups-bar" x="-18" y="-10" width="36" height="5" rx="1"/>
        <rect class="nd-dev__ups-bar nd-dev__ups-bar--mid" x="-18" y="0" width="36" height="5" rx="1"/>
        <rect class="nd-dev__ups-bar nd-dev__ups-bar--low" x="-18" y="10" width="36" height="5" rx="1"/>
        <circle class="nd-dev__ups-out" cx="-9" cy="26" r="2.2"/>
        <circle class="nd-dev__ups-out" cx="0" cy="26" r="2.2"/>
        <circle class="nd-dev__ups-out" cx="9" cy="26" r="2.2"/>
        <path class="nd-dev__bolt" d="M4 -30 L-2 -16 H4 L0 2 L10 -18 H4 Z"/>
        <text class="nd-dev__label" y="46">Nobreak</text>
        <text class="nd-dev__sub" y="56">energia</text>
      </g>`;
  }

  function renderDiagram() {
    return `
      <div class="nd-ui nd-ui--illus">
        <svg class="nd-scene" viewBox="0 0 480 340" preserveAspectRatio="xMidYMid meet" aria-label="Topologia de rede ilustrada">
          <defs>
            <linearGradient id="nd-body" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#35302c"/>
              <stop offset="100%" stop-color="#161412"/>
            </linearGradient>
            <linearGradient id="nd-face" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#221f1d"/>
              <stop offset="100%" stop-color="#121010"/>
            </linearGradient>
            <linearGradient id="nd-zone-wan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(14,165,233,0.08)"/>
              <stop offset="100%" stop-color="rgba(14,165,233,0)"/>
            </linearGradient>
            <linearGradient id="nd-zone-lan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="rgba(234,88,12,0.06)"/>
              <stop offset="100%" stop-color="rgba(234,88,12,0)"/>
            </linearGradient>
            <pattern id="nd-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0 L0 0 0 20" fill="none" stroke="rgba(255,255,255,0.025)" stroke-width="0.5"/>
            </pattern>
            <marker id="nd-arrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0 0 L6 3 L0 6 Z" fill="rgba(251,146,60,0.7)"/>
            </marker>
            <filter id="nd-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="b"/>
              <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="nd-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.55"/>
            </filter>
          </defs>

          <rect class="nd-scene__bg" x="4" y="4" width="472" height="332" rx="12"/>
          <rect class="nd-scene__grid" x="4" y="4" width="472" height="332" rx="12" fill="url(#nd-grid)"/>

          <rect class="nd-zone nd-zone--wan" x="16" y="36" width="368" height="88" rx="8" fill="url(#nd-zone-wan)"/>
          <rect class="nd-zone nd-zone--lan" x="16" y="124" width="368" height="196" rx="8" fill="url(#nd-zone-lan)"/>
          <rect class="nd-zone nd-zone--pwr" x="392" y="100" width="76" height="176" rx="8"/>

          <text class="nd-zone__tag" x="24" y="48">WAN</text>
          <text class="nd-zone__tag" x="24" y="136">LAN</text>
          <text class="nd-zone__tag nd-zone__tag--pwr" x="400" y="112">ENERGIA</text>

          <g class="nd-paths" marker-end="url(#nd-arrow)">
            <path class="nd-path nd-path--a" d="M100 92 L100 106 L228 106 L240 106 L240 136"/>
            <path class="nd-path nd-path--b" d="M380 92 L380 106 L252 106 L240 106 L240 136"/>
            <path class="nd-path nd-path--trunk" d="M240 136 L240 147"/>
            <path class="nd-path nd-path--trunk" d="M240 189 L240 200"/>
            <path class="nd-path nd-path--branch" d="M240 189 L240 200 L100 200 L100 210"/>
            <path class="nd-path nd-path--branch" d="M240 189 L240 210"/>
            <path class="nd-path nd-path--branch" d="M240 189 L240 200 L380 200 L380 210"/>
            <path class="nd-path nd-path--edge" d="M100 246 L100 258"/>
            <path class="nd-path nd-path--edge" d="M240 246 L240 258"/>
            <path class="nd-path nd-path--edge" d="M380 246 L380 258"/>
          </g>

          <g class="nd-power-paths">
            <path class="nd-path nd-path--pwr" d="M404 152 L340 152 L340 134"/>
            <path class="nd-path nd-path--pwr" d="M404 152 L404 184 L380 200"/>
            <path class="nd-path nd-path--pwr" d="M404 152 L404 170 L280 170 L280 152 L240 152 L240 134"/>
          </g>

          <circle class="nd-packet nd-packet--a" r="3.5">
            <animateMotion dur="3s" repeatCount="indefinite"
              path="M100 92 L100 106 L228 106 L240 106 L240 136 L240 147 L240 168 L240 189 L240 200 L100 200 L100 210 L100 246 L100 258"/>
          </circle>
          <circle class="nd-packet nd-packet--b" r="3.5">
            <animateMotion dur="3.3s" repeatCount="indefinite"
              path="M380 92 L380 106 L252 106 L240 106 L240 136 L240 147 L240 168 L240 189 L240 200 L380 200 L380 210 L380 246 L380 258"/>
          </circle>

          <g class="nd-cloud" transform="translate(240, 28)">
            <ellipse cx="0" cy="0" rx="36" ry="15" class="nd-cloud__halo"/>
            <path class="nd-cloud__shape" d="M-46 4 C-46 -8 -32 -12 -22 -4 C-18 -14 -4 -16 4 -6 C16 -12 30 -2 30 8 C30 16 20 20 6 20 H-36 C-46 20 -46 12 -46 4Z"/>
            <text class="nd-cloud__txt" y="6">Internet</text>
          </g>
          <path class="nd-path nd-path--cloud" d="M206 42 L100 52"/>
          <path class="nd-path nd-path--cloud" d="M274 42 L380 52"/>

          ${modemUnit(100, 72, 'Link A', 'nd-link-a is-live')}
          ${modemUnit(380, 72, 'Link B', 'nd-link-b')}

          ${rackUnit(240, 118, 78, 36, 'Load balance', '2 WAN / 1 LAN', 'nd-dev--lb', 6)}
          ${rackUnit(240, 168, 96, 42, 'Switch core', 'backbone', 'nd-dev--core', 8)}

          ${rackUnit(100, 228, 72, 36, 'Switch 1', 'operacao', 'nd-dev--sw', 5)}
          ${rackUnit(240, 228, 72, 36, 'Switch 2', 'admin', 'nd-dev--sw', 5)}
          ${rackUnit(380, 228, 72, 36, 'Switch 3', 'Wi-Fi', 'nd-dev--sw', 5)}

          ${workstation(100, 274, 'Postos')}
          ${workstation(240, 274, 'Servidores')}
          ${workstation(380, 274, 'Impressoras')}

          ${upsUnit(404, 172)}

          <g class="nd-legend">
            <line class="nd-legend__line nd-legend__line--data" x1="0" y1="0" x2="18" y2="0"/>
            <text x="22" y="3">Dados</text>
            <line class="nd-legend__line nd-legend__line--trunk" x1="0" y1="14" x2="18" y2="14"/>
            <text x="22" y="17">Backbone</text>
            <line class="nd-legend__line nd-legend__line--pwr" x1="0" y1="28" x2="18" y2="28"/>
            <text x="22" y="31">Energia</text>
          </g>
        </svg>
      </div>`;
  }

  window.NetDistMockup = {
    render() {
      return renderDiagram();
    },
    init(container) {
      const root = container?.querySelector?.('.nd-ui') || container;
      if (!root || !root.querySelector) return { cleanup() {} };

      const linkA = root.querySelector('.nd-link-a');
      const linkB = root.querySelector('.nd-link-b');
      const pathA = root.querySelector('.nd-path--a');
      const pathB = root.querySelector('.nd-path--b');
      const packetA = root.querySelector('.nd-packet--a');
      const packetB = root.querySelector('.nd-packet--b');

      let tick = 0;
      const timer = setInterval(() => {
        tick += 1;
        const aLive = tick % 2 === 0;
        linkA?.classList.toggle('is-live', aLive);
        linkB?.classList.toggle('is-live', !aLive);
        pathA?.classList.toggle('is-live', aLive);
        pathB?.classList.toggle('is-live', !aLive);
        packetA?.style.opacity = aLive ? '1' : '0.25';
        packetB?.style.opacity = !aLive ? '1' : '0.25';
      }, 3000);

      return {
        cleanup() {
          clearInterval(timer);
        },
      };
    },
  };
})();
