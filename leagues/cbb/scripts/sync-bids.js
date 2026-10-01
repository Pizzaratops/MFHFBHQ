// ============================================================
//  Dizzle CBB — Live-Gebote aus dem Google Sheet holen
// ============================================================
//  Läuft stündlich über .github/workflows/cbb-bids.yml (ohne npm-Pakete).
//  Liest den öffentlichen CSV-Export (gviz) des Liga-Sheets, schneidet
//  „ACTIVE BIDS“ und „SIGNED PLAYERS“ heraus und schreibt
//  leagues/cbb/data/live-bids.js (const CBB_LIVE). Die Seite rechnet daraus
//  Wert-Vergleich und Restzeit selbst (tools/cbb-auction.js).
//  Sheet-ID/gid: aus js/leagues.js (key 'cbb' → sheet), sonst Umgebung
//  CBB_SHEET_ID / CBB_SHEET_GID.
// ============================================================
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..', '..');
const OUT = path.join(__dirname, '..', 'data', 'live-bids.js');

function sheetConfig() {
  const src = fs.readFileSync(path.join(ROOT, 'js', 'leagues.js'), 'utf8');
  const block = src.slice(src.indexOf("key: 'cbb'"));
  const id = (block.match(/sheet:\s*\{[^}]*id:\s*'([^']+)'/) || [])[1];
  const gid = (block.match(/sheet:\s*\{[^}]*gid:\s*(\d+)/) || [])[1];
  return { id: process.env.CBB_SHEET_ID || id, gid: process.env.CBB_SHEET_GID || gid || '0' };
}

function parseCsv(text) {
  const rows = []; let row = [], cur = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (q) { if (ch === '"' && text[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
    else if (ch === '"') q = true;
    else if (ch === ',') { row.push(cur); cur = ''; }
    else if (ch === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
    else if (ch !== '\r') cur += ch;
  }
  if (cur || row.length) { row.push(cur); rows.push(row); }
  return rows;
}
function splitName(raw) {
  const m = String(raw || '').match(/^(.*?)\s*\(([^/)]*)\/?([^)]*)\)\s*$/);
  return m ? { name: m[1].trim(), cls: m[2].trim(), pos: m[3].trim() } : { name: String(raw || '').trim(), cls: '', pos: '' };
}
function parseRows(rows) {
  const out = { bids: [], signed: [], sheetNow: null };
  if (rows[0] && /\d+\/\d+\/\d{4}/.test(rows[0][1] || '')) out.sheetNow = rows[0][1];
  let inBids = false, sCol = -1;
  rows.forEach(r => {
    const c0 = (r[0] || '').trim();
    if (/^ACTIVE BIDS$/i.test(c0)) { inBids = true; return; }
    const sc = r.findIndex(x => /^SIGNED PLAYERS$/i.test((x || '').trim()));
    if (sc >= 0) sCol = sc;
    if (inBids && c0 && !/^name$/i.test(c0) && /^\d+$/.test((r[2] || '').trim()) && (r[3] || '').trim()) {
      out.bids.push({ ...splitName(c0), school: (r[1] || '').trim(), bid: +r[2], manager: (r[3] || '').trim(), time: (r[4] || '').trim() });
    }
    if (sCol >= 0 && sc < 0) {
      const n = (r[sCol] || '').trim(), price = (r[sCol + 2] || '').replace(/[$\s]/g, '');
      if (n && !/^name$/i.test(n) && /^\d+$/.test(price)) out.signed.push({ ...splitName(n), school: (r[sCol + 1] || '').trim(), price: +price, manager: (r[sCol + 3] || '').trim() });
    }
  });
  return out;
}

(async () => {
  let text;
  if (process.env.CBB_CSV_FILE) {
    text = fs.readFileSync(process.env.CBB_CSV_FILE, 'utf8');   // lokaler Test mit gespeichertem CSV
  } else {
    const { id, gid } = sheetConfig();
    if (!id) { console.log('Kein Sheet konfiguriert — nichts zu tun.'); return; }
    const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&gid=${gid}`;
    const res = await fetch(url, { headers: { 'cache-control': 'no-cache' } });
    if (!res.ok) throw new Error(`Sheet nicht ladbar (HTTP ${res.status})`);
    text = await res.text();
  }
  if (/^\s*</.test(text)) throw new Error('Sheet liefert HTML statt CSV — ist es öffentlich lesbar?');
  const data = parseRows(parseCsv(text));
  // Nur schreiben, wenn sich Gebote/Zuschläge geändert haben (sonst ein Commit pro Stunde)
  let prev = null;
  try { prev = JSON.parse((fs.readFileSync(OUT, 'utf8').match(/const CBB_LIVE = (.*);\s*$/s) || [])[1]); } catch (e) { /* neu */ }
  const same = prev && JSON.stringify(prev.bids) === JSON.stringify(data.bids) && JSON.stringify(prev.signed) === JSON.stringify(data.signed);
  if (same) { console.log(`Unverändert (${data.bids.length} Gebote, ${data.signed.length} Zuschläge).`); return; }
  const live = { fetchedAt: process.env.CBB_FETCHED_AT || new Date().toISOString(), sheetNow: data.sheetNow, bids: data.bids, signed: data.signed };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `// Automatisch erzeugt von leagues/cbb/scripts/sync-bids.js — nicht von Hand bearbeiten.\nconst CBB_LIVE = ${JSON.stringify(live)};\n`);
  console.log(`Geschrieben: ${data.bids.length} Gebote, ${data.signed.length} Zuschläge.`);
})().catch(err => { console.error(err.message); process.exit(1); });
