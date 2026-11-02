// ============================================================
//  Sortierbare Tabellen — überall, automatisch
// ============================================================
//  02.11.2026 auf Wunsch: jede Tabelle (.table) auf jeder Seite/Liga lässt
//  sich per Klick auf den Spaltenkopf sortieren. Ein Klick: sinnvollste
//  Richtung (Zahlen absteigend, Text A–Z), zweiter Klick: umgekehrt,
//  dritter Klick: ursprüngliche Reihenfolge.
//
//  Ausgenommen (haben eigene Sortierung oder Bedienelemente im Kopf):
//  Tabellen mit [data-nosort], Köpfe mit [data-sort], <button>, <a>, <select>,
//  und mehrzeilige Tabellenköpfe.
//  Zeilen mit colspan-Zellen (Zwischensummen, Liga-Ø …) bleiben am Ende.
//
//  Werte-Erkennung je Zelle (Text bzw. data-sort-value):
//    Bilanz „12-3“, „1-0-1“, „15.5-2.5“ → Siegquote (Tiebreak Siege)
//    Zahlen deutsch („1.028,5“) oder englisch („.750“, „2.056“ = Tausender,
//    wenn die ganze Spalte so aussieht), Vorzeichen +/−/±, ▲/▼, #, %, Einheiten
//    „—“/„–“/leer → immer unten
// ============================================================

(function () {
  const EMPTY = /^[\s—–\-·?]*$/;
  const REC = /^(\d+(?:[.,]\d+)?)-(\d+(?:[.,]\d+)?)(?:-(\d+(?:[.,]\d+)?))?$/;
  const n = s => Number(String(s).replace(',', '.'));

  function cellText(td) {
    if (!td) return '';
    if (td.dataset && td.dataset.sortValue != null) return td.dataset.sortValue;
    return (td.textContent || '').replace(/\s+/g, ' ').trim();
  }

  // Spaltenweise: gibt es „1.234“-Tausenderpunkte (und kein Komma, keine „.750“)?
  function thousandsColumn(texts) {
    let dotted = 0;
    for (const t of texts) {
      const c = t.replace(/[^\d.,\-]/g, '');
      if (c.includes(',')) return true;              // deutsches Format → Punkt = Tausender
      if (/^-?\./.test(c)) return false;             // „.750“ → Dezimal
      if (c.includes('.')) { if (!/^-?\d{1,3}(\.\d{3})+$/.test(c)) return false; dotted++; }
    }
    return dotted > 0;
  }

  function parse(t, thousands) {
    if (EMPTY.test(t)) return { empty: true };
    const s = t.replace(/−/g, '-').replace(/^±/, '');
    const r = s.replace(/\s/g, '').match(REC);
    if (r && !/^\d{4}-\d{2}/.test(s)) {
      const w = n(r[1]), l = n(r[2]), ti = r[3] ? n(r[3]) : 0, g = w + l + ti;
      return { num: g ? (w + ti / 2) / g + w * 1e-6 : 0 };
    }
    const tr = s.trim();
    const iso = tr.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (iso) return { num: Number(iso[1] + iso[2] + iso[3]) };
    const de = tr.match(/^(?:[A-Za-z]{2}\.?\s)?(\d{1,2})\.(\d{1,2})\.(\d{2,4})?(?!\d)/);
    if (de && !thousands) return { num: Number(de[3] || 0) * 10000 + Number(de[2]) * 100 + Number(de[1]) };
    const neg = /^[-▼]/.test(tr.replace(/^[#+±$€(\s]+/, '')) || /^-/.test(tr);
    const rest = tr.replace(/^[▲▼#+\-±$€(\s]+/, '');
    const m = rest.match(/^[\d.,]*\d/);
    if (m) {
      const x = thousands ? m[0].replace(/\./g, '').replace(',', '.') : m[0].replace(',', '.');
      const v = Number(x);
      if (Number.isFinite(v)) return { num: neg ? -v : v };
    }
    return { txt: t.toLowerCase() };
  }

  function sortTable(table, th) {
    const headRow = th.parentElement;
    const col = [...headRow.children].reduce((acc, c) => { if (c === th) acc.found = true; if (!acc.found) acc.i += c.colSpan || 1; return acc; }, { i: 0, found: false }).i;
    const tbodies = [...table.tBodies];
    if (!tbodies.length) return;
    // Ursprungsreihenfolge merken
    tbodies.forEach(tb => [...tb.rows].forEach((r, i) => { if (r.dataset.origIdx == null) r.dataset.origIdx = i; }));
    const state = th.dataset.sortDir || '';
    // Werte der Spalte
    const all = tbodies.flatMap(tb => [...tb.rows].filter(r => ![...r.cells].some(c => c.colSpan > 1)).map(r => cellText(r.cells[col])));
    const thousands = thousandsColumn(all);
    const parsed = all.map(t => parse(t, thousands));
    const numeric = parsed.filter(p => p.num != null).length >= parsed.filter(p => p.txt != null).length;
    const first = numeric ? 'desc' : 'asc';
    const next = !state ? first : state === first ? (first === 'asc' ? 'desc' : 'asc') : '';
    headRow.querySelectorAll('th').forEach(h => { delete h.dataset.sortDir; h.classList.remove('ts-asc', 'ts-desc'); h.removeAttribute('aria-sort'); });
    if (next) { th.dataset.sortDir = next; th.classList.add('ts-' + next); th.setAttribute('aria-sort', next === 'asc' ? 'ascending' : 'descending'); }
    tbodies.forEach(tb => {
      const rows = [...tb.rows];
      const fixed = rows.filter(r => [...r.cells].some(c => c.colSpan > 1));
      const sortable = rows.filter(r => !fixed.includes(r));
      const key = r => parse(cellText(r.cells[col]), thousands);
      const dir = next === 'asc' ? 1 : -1;
      sortable.sort((a, b) => {
        if (!next) return a.dataset.origIdx - b.dataset.origIdx;
        const x = key(a), y = key(b);
        if (x.empty || y.empty) return (x.empty ? 1 : 0) - (y.empty ? 1 : 0) || a.dataset.origIdx - b.dataset.origIdx;
        if (x.num != null && y.num != null) return (x.num - y.num) * dir || a.dataset.origIdx - b.dataset.origIdx;
        if (x.num != null) return -1; if (y.num != null) return 1;
        return x.txt.localeCompare(y.txt, 'de') * dir || a.dataset.origIdx - b.dataset.origIdx;
      });
      if (next) [...sortable, ...fixed].forEach(r => tb.appendChild(r));
      else rows.sort((a, b) => a.dataset.origIdx - b.dataset.origIdx).forEach(r => tb.appendChild(r));
    });
  }

  function eligible(th) {
    const table = th.closest('table');
    if (!table || !table.classList.contains('table') || table.hasAttribute('data-nosort')) return null;
    if (!table.tHead || table.tHead.rows.length !== 1 || th.parentElement.parentElement !== table.tHead) return null;
    if (table.tHead.querySelector('[data-sort], button, select, input')) return null;
    if (th.querySelector('a') || !cellText(th)) return null;
    return table;
  }

  document.addEventListener('click', ev => {
    const th = ev.target.closest('th');
    if (!th || ev.target.closest('a, button, select, input')) return;
    const table = eligible(th);
    if (table) sortTable(table, th);
  });
  // Hinweis-Cursor nur auf sortierbaren Köpfen
  document.addEventListener('mouseover', ev => {
    const th = ev.target.closest && ev.target.closest('th');
    if (th && !th.dataset.tsChecked) { th.dataset.tsChecked = '1'; if (eligible(th)) th.classList.add('ts-able'); }
  });

  window.MFHFB = window.MFHFB || {};
  MFHFB.tableSort = { sortTable, parse };
})();
