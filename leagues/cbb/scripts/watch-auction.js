// ============================================================
//  Dizzle CBB — Auktions-Wächter
// ============================================================
//  Liest den aktuellen Sheet-Stand (CSV-Export) bzw. als Fallback
//  leagues/cbb/data/live-bids.js, bewertet alle laufenden Gebote mit den
//  Werten der Seite (nil-auction.js + nil-extra.js, gleiche Logik wie
//  tools/cbb-auction.js) und gibt eine kurze Markdown-Meldung aus:
//    ⏰ läuft in < 3 h ab und ist unter Wert (du führst nicht)
//    💎 Schnäppchen: Wert ≥ $10, Gebot ≤ $3
//    ✅ du führst und es läuft in < 3 h ab
//  Ohne Treffer: eine Zeile „NICHTS_NEUES“.
//
//  Aufruf (im Repo-Root):  node leagues/cbb/scripts/watch-auction.js [sheet.csv]
//  Wird von der geplanten Aufgabe „CBB Auktions-Wächter“ genutzt.
// ============================================================
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..', '..', '..');
const ME = 'MFHFB';
const SOON_H = 3;

global.window = {};
global.MFHFB = { pages: { register() {} } };
window.MFHFB = global.MFHFB;
// eslint-disable-next-line no-eval
eval(fs.readFileSync(path.join(ROOT, 'tools', 'cbb-auction.js'), 'utf8'));
const C = global.MFHFB.cbb;

function consts(file) {
  const src = fs.readFileSync(file, 'utf8');
  const names = [...src.matchAll(/^\s*const\s+([A-Z_][A-Z0-9_]*)\s*=/gm)].map(m => m[1]);
  return new Function(`${src}\n;return {${names.join(',')}};`)();
}
const D = path.join(ROOT, 'leagues', 'cbb', 'data');
const d = Object.assign(consts(path.join(D, 'nil-auction.js')), fs.existsSync(path.join(D, 'nil-extra.js')) ? consts(path.join(D, 'nil-extra.js')) : {});

let live, stand;
const csvFile = process.argv[2];
if (csvFile && fs.existsSync(csvFile) && fs.statSync(csvFile).size > 100) {
  const parsed = C.parseRows(C.parseCsv(fs.readFileSync(csvFile, 'utf8')));
  live = { ...parsed, fetchedAt: new Date().toISOString() };
  stand = `Sheet live (Sheet-Zeit ${parsed.sheetNow || '?'} UTC)`;
} else {
  live = consts(path.join(D, 'live-bids.js')).CBB_LIVE;
  stand = `Zwischenspeicher live-bids.js (letzte Änderung ${live.fetchedAt})`;
}

const m = C.market(d, live);
const me = m.tIdx[ME];
const now = Date.now();
const fmt = ms => { const min = Math.max(0, Math.floor(ms / 60000)); const h = Math.floor(min / 60); return h ? `${h}h ${String(min % 60).padStart(2, '0')}m` : `${min}m`; };
const rows = m.bids.map(b => {
  const p = b.p, val = p ? m.live(p) : 1;
  const left = b.ends != null ? b.ends - now : null;
  const can = m.teams.filter(t => t.name !== b.team && t.freeBid >= b.bid + 1);
  return { b, p, val, left, can, mine: b.team === ME, lim: p ? C.limit(val, me, p) : 2, risk: C.risk(p).l };
}).filter(r => r.left == null || r.left > 0);

const line = r => `- **${r.p ? r.p.name : r.b.name}** (${r.b.school}) — Gebot $${r.b.bid} von ${r.b.team}, Wert $${r.val}, dein Limit $${r.lim} · noch ${r.left != null ? fmt(r.left) : '?'} · Risiko ${r.risk} · ${r.can.length ? r.can.length + ' Teams können kontern' : 'keiner kann kontern'}${r.mine ? '' : r.can.some(t => t.name === ME) ? '' : ' · **du kannst nicht mehr mitbieten**'}`;

const soon = rows.filter(r => !r.mine && r.left != null && r.left < SOON_H * 3600000 && r.val - r.b.bid >= 3 && r.b.bid < r.lim).sort((a, b) => a.left - b.left);
const steal = rows.filter(r => !r.mine && r.val >= 10 && r.b.bid <= 3 && !soon.includes(r)).sort((a, b) => b.val - a.val);
const mine = rows.filter(r => r.mine && r.left != null && r.left < SOON_H * 3600000).sort((a, b) => a.left - b.left);

if (!soon.length && !steal.length && !mine.length) {
  console.log(`NICHTS_NEUES — ${rows.length} laufende Gebote geprüft, nichts Dringendes. Stand: ${stand}.`);
  process.exit(0);
}
const out = [`# 🏀 CBB-Auktion — ${soon.length + steal.length} Chancen${mine.length ? `, ${mine.length} eigene Gebote kurz vor Zuschlag` : ''}`,
  `Stand: ${stand} · dein freies Geld: $${me.freeBid} (Max-Gebot $${me.maxBid})`];
if (soon.length) out.push('', `## ⏰ Läuft in < ${SOON_H} h ab und ist unter Wert`, ...soon.slice(0, 12).map(line));
if (steal.length) out.push('', '## 💎 Schnäppchen (Wert ≥ $10, Gebot ≤ $3)', ...steal.slice(0, 12).map(line));
if (mine.length) out.push('', `## ✅ Du führst — Zuschlag in < ${SOON_H} h`, ...mine.map(r => `- ${r.p ? r.p.name : r.b.name}: $${r.b.bid}, noch ${fmt(r.left)} · ${r.can.length ? r.can.length + ' Teams könnten noch kontern' : 'keiner kann mehr kontern'}`));
out.push('', 'Bieten: https://docs.google.com/spreadsheets/d/18Mv6nb029xyrk9W5tM8e0tYCbVqfMNANIUDnY1xyT-A/edit#gid=0 · Übersicht: https://pizzaratops.github.io/MFHFBHQ/#/cbb/bids');
console.log(out.join('\n'));
