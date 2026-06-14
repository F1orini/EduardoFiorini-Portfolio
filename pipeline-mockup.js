(function () {
  const CSV_HEADERS = [
    { key: 'idx', label: '#', w: '28px' },
    { key: 'doc', label: 'documento', w: '92px' },
    { key: 'nome', label: 'nome_ref', w: '1fr' },
    { key: 'telefone', label: 'telefone', w: '88px' },
    { key: 'email', label: 'email', w: '1.1fr' },
    { key: 'score', label: 'score', w: '44px' },
    { key: 'status', label: 'status', w: '56px' },
  ];

  const CSV_GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const CSV_TOTAL = 72;

  function pad3(n) {
    return String(n).padStart(3, '0');
  }

  function csvStatus(n) {
    if (n % 19 === 0) return 'err';
    if (n % 7 === 0) return 'warn';
    return 'ok';
  }

  function csvScore(status, n) {
    if (status === 'err') return String(8 + (n % 12));
    if (status === 'warn') return String(52 + (n % 28));
    return String(82 + (n % 17));
  }

  function buildCsvRows(count) {
    const rows = [];
    for (let i = 1; i <= count; i += 1) {
      const group = CSV_GROUPS[(i - 1) % CSV_GROUPS.length];
      const seq = pad3(i);
      const status = csvStatus(i);
      const nome = status === 'err'
        ? `LINHA REJEITADA DEMO-${seq}`
        : `REGISTRO MOCK ${group}-${seq}`;
      const doc = status === 'err' ? `INVALIDO-${seq}` : `XXX000${seq}XX`;
      const telefone = status === 'err'
        ? '(XX) 00000-0000'
        : (i % 11 === 0 ? '—' : `(XX) 90000-${pad3(i % 1000)}`);
      const email = status === 'err'
        ? 'invalido@demo'
        : (i % 13 === 0 ? '—' : `mock.${group.toLowerCase()}${seq}@exemplo.local`);

      rows.push({
        idx: i,
        doc,
        nome,
        telefone,
        email,
        score: csvScore(status, i),
        status,
      });
    }
    return rows;
  }

  const CSV_ROWS = buildCsvRows(CSV_TOTAL);

  const PY_LINES = [
    { t: 'cmd', s: '$ python higienizar_base.py --input lote_raw_demo.csv --output export_enriquecido.csv' },
    { t: 'out', s: '' },
    { t: 'info', s: '[14:02:11] Carregando lote_raw_demo.csv …' },
    { t: 'info', s: '[14:02:18] 1.024.000 linhas · 14 colunas detectadas' },
    { t: 'info', s: '[14:02:24] Normalizando documentos e removendo máscaras …' },
    { t: 'ok', s: '[14:03:02] ✓ 1.023.200 registros válidos' },
    { t: 'warn', s: '[14:03:02] ⚠ 800 linhas inválidas → quarentena/rejeitados.csv' },
    { t: 'info', s: '[14:03:15] Enriquecimento: telefone, e-mail, score …' },
    { t: 'info', s: '[14:05:48] Deduplicação por documento (keep=last) …' },
    { t: 'ok', s: '[14:06:01] ✓ Exportado → export_enriquecido_demo.csv' },
    { t: 'dim', s: '[14:06:01] Tempo: 3m 50s · taxa de erro: 0,08%' },
    { t: 'cmd', s: '$ _' },
  ];

  function csvRow(row) {
    return `
      <tr class="pl-row pl-row--${row.status}">
        <td class="pl-cell pl-cell--idx">${row.idx}</td>
        <td class="pl-cell pl-cell--mono">${row.doc}</td>
        <td class="pl-cell">${row.nome}</td>
        <td class="pl-cell pl-cell--mono">${row.telefone}</td>
        <td class="pl-cell pl-cell--mono pl-cell--email">${row.email}</td>
        <td class="pl-cell pl-cell--score">${row.score}</td>
        <td class="pl-cell"><span class="pl-badge pl-badge--${row.status}">${row.status}</span></td>
      </tr>`;
  }

  function screenCsv() {
    return `
      <div class="pl-ui pl-ui--csv">
        <header class="pl-csv-top">
          <div class="pl-csv-file">
            <span class="pl-csv-file__icon">CSV</span>
            <div>
              <strong>export_enriquecido_demo.csv</strong>
              <span>1.023.200 linhas · 7 colunas · UTF-8 · dados fictícios</span>
            </div>
          </div>
          <div class="pl-csv-stats">
            <span class="pl-stat pl-stat--ok">960.000 válidos</span>
            <span class="pl-stat pl-stat--warn">62.400 parciais</span>
            <span class="pl-stat pl-stat--err">800 inválidos</span>
          </div>
        </header>
        <div class="pl-csv-table-wrap">
          <table class="pl-csv-table">
            <thead>
              <tr>
                ${CSV_HEADERS.map(h => `<th style="width:${h.w}">${h.label}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${CSV_ROWS.map(csvRow).join('')}
            </tbody>
          </table>
        </div>
        <footer class="pl-csv-foot">
          <span>Exibindo ${CSV_TOTAL} de 1.023.200 · amostra ilustrativa</span>
          <span>Delimitador: <em>,</em> · Quote: <em>"</em></span>
        </footer>
      </div>`;
  }

  function pyLine(line) {
    const cls = line.t ? ` pl-term__line--${line.t}` : '';
    return `<div class="pl-term__line${cls}">${line.s || '&nbsp;'}</div>`;
  }

  function screenPython() {
    return `
      <div class="pl-ui pl-ui--term">
        <header class="pl-term-bar">
          <i></i><i></i><i></i>
          <span>zsh — higienizar_base.py</span>
        </header>
        <div class="pl-term-body">
          ${PY_LINES.map(pyLine).join('')}
        </div>
      </div>`;
  }

  const SCREENS = {
    csv: screenCsv,
    python: screenPython,
  };

  function init() {
    return {
      syncActiveSlide() {},
      cleanup() {},
    };
  }

  window.PipelineMockup = {
    render(id) {
      return SCREENS[id]?.() || screenCsv();
    },
    init,
  };
})();
