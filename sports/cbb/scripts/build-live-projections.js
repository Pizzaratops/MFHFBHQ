#!/usr/bin/env node
// ============================================================
//  CBB Live-Projections (Dizzle CBB), seit 16.10.2026
// ============================================================
//  Mischt die Preseason-Projektion (sports/cbb/data/projections-cbb.js, build-projections.py)
//  mit den echten Spielen der Saison (Tages-CSVs von daily-9cat.js unter scripts/data/)
//  und schreibt sports/cbb/data/live-projections-cbb.js (CBB_PROJ_LIVE).
//
//  Formel je Zählstatistik (auch Minuten, FGM/FGA, FTM/FTA):
//    live = (Projektion × w + Σ echte Spiele) / (w + Spiele)
//  w = 1 + 3 × Datensicherheit (conf 0–1): Rückkehrer mit langer Historie ≈ 3–4 virtuelle
//  Spiele, Freshmen/Neue ≈ 1 — deren Projektion weicht schneller den echten Spielen.
//  Die 9-Cat-z werden auf der Preseason-Skala neu berechnet (Pool ab 10 Min.), damit
//  Live- und Preseason-Werte vergleichbar bleiben.
//
//  Aufruf: node sports/cbb/scripts/build-live-projections.js [--since=YYYY-MM-DD]
//  Läuft in cbb-sync.yml nach den Stats.
// ============================================================

const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data');
const CSV_DIR = path.join(__dirname, 'data');
const args = process.argv.slice(2);
const SINCE = (args.find(a => a.startsWith('--since=')) || '').split('=')[1] || (() => {
  const n = new Date(); return `${n.getUTCMonth() >= 7 ? n.getUTCFullYear() : n.getUTCFullYear() - 1}-08-01`;
})();
const load = (file, name) => new Function(`${fs.readFileSync(path.join(DATA, file), 'utf8')}\n;return ${name};`)();
const key = n => String(n || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[.'’`]/g, '').replace(/\b(jr|sr|ii|iii|iv|v)\b/g, '').replace(/[^a-z ]/g, ' ').split(/\s+/).filter(Boolean).join(' ');

const PROJ = load('projections-cbb.js', 'CBB_PROJECTIONS');
const byKT = new Map(), byK = new Map();
PROJ.forEach(p => { byKT.set(key(p.name) + '|' + p.team, p); const k = key(p.name); byK.set(k, byK.has(k) ? null : p); });

// ---------- echte Spiele aufsummieren ----------
function parseCsvLine(line) {
  const out = []; let cur = '', q = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++; } else if (ch === '"') q = false; else cur += ch; }
    else if (ch === '"') q = true; else if (ch === ',') { out.push(cur); cur = ''; } else cur += ch;
  }
  out.push(cur); return out;
}
const STATS = ['min', 'pts', 'reb', 'ast', 'stl', 'blk', 'tpm', 'tov', 'fgm', 'fga', 'ftm', 'fta'];
const COL = { min: 'MIN', pts: 'PTS', reb: 'REB', ast: 'AST', stl: 'STL', blk: 'BLK', tpm: '3PM', tov: 'TO', fgm: 'FGM', fga: 'FGA', ftm: 'FTM', fta: 'FTA' };
const tot = new Map(); let files = 0, last = null;
if (fs.existsSync(CSV_DIR)) {
  fs.readdirSync(CSV_DIR).filter(f => /^daily-9cat_ncaab(-postseason)?_\d{4}-\d{2}-\d{2}\.csv$/.test(f)).forEach(f => {
    const d = f.slice(-14, -4);
    if (d < SINCE) return;
    const lines = fs.readFileSync(path.join(CSV_DIR, f), 'utf8').split('\n').filter(Boolean);
    const h = parseCsvLine(lines[0]).map(x => x.trim()), ix = n => h.indexOf(n);
    if (ix('Name') < 0) return;
    files++; if (!last || d > last) last = d;
    for (let i = 1; i < lines.length; i++) {
      const r = parseCsvLine(lines[i]);
      const name = (r[ix('Name')] || '').trim(), team = (r[ix('Team')] || '').trim();
      if (!name) continue;
      const p = byKT.get(key(name) + '|' + team) || byK.get(key(name)) || null;
      const id = p ? p.name + '|' + p.team : name + '|' + team;
      const t = tot.get(id) || { name: p ? p.name : name, team: p ? p.team : team, p, g: 0 };
      t.g++;
      STATS.forEach(k => { t[k] = (t[k] || 0) + (parseFloat(r[ix(COL[k])]) || 0); });
      tot.set(id, t);
    }
  });
}

// ---------- z-Skala aus der Preseason (Pool ab 10 Min.) ----------
const pool = PROJ.filter(p => p.min >= 10);
const fgp = pool.reduce((s, p) => s + p.fgm, 0) / pool.reduce((s, p) => s + p.fga, 0);
const ftp = pool.reduce((s, p) => s + p.ftm, 0) / pool.reduce((s, p) => s + p.fta, 0);
const CAT = {
  pts: p => p.pts, reb: p => p.reb, ast: p => p.ast, stl: p => p.stl, blk: p => p.blk, tpm: p => p.tpm, to: p => -p.tov,
  fgImpact: p => p.fgm - fgp * p.fga, ftImpact: p => p.ftm - ftp * p.fta,
};
const SC = {};
Object.entries(CAT).forEach(([k, f]) => {
  const v = pool.map(f), m = v.reduce((a, b) => a + b, 0) / v.length;
  SC[k] = { m, s: Math.sqrt(v.reduce((a, b) => a + (b - m) ** 2, 0) / (v.length - 1)) || 1 };
});

// ---------- mischen ----------
const out = {};
tot.forEach((t, id) => {
  if (!t.p && t.min / t.g < 15) return; // ohne Projektion nur echte Rotationsspieler
  const p = t.p, w = p ? 1 + 3 * (p.conf || 0) : 0, den = w + t.g;
  const b = {};
  STATS.forEach(k => { b[k] = ((p ? (p[k] || 0) : 0) * w + t[k]) / den; });
  const zc = {}; let z = 0;
  Object.entries(CAT).forEach(([k, f]) => { const v = (f(b) - SC[k].m) / SC[k].s; zc[k] = +v.toFixed(1); z += v; });
  const r2 = v => +v.toFixed(2);
  out[id] = {
    g: t.g, w: +w.toFixed(1), min: +b.min.toFixed(1), pts: r2(b.pts), reb: r2(b.reb), ast: r2(b.ast), stl: r2(b.stl), blk: r2(b.blk), tpm: r2(b.tpm), tov: r2(b.tov),
    fgm: r2(b.fgm), fga: r2(b.fga), ftm: r2(b.ftm), fta: r2(b.fta),
    fgPct: b.fga ? +(100 * b.fgm / b.fga).toFixed(1) : null, ftPct: b.fta ? +(100 * b.ftm / b.fta).toFixed(1) : null,
    z: +z.toFixed(2), zc, season: { pts: r2(t.pts / t.g), reb: r2(t.reb / t.g), ast: r2(t.ast / t.g), min: +(t.min / t.g).toFixed(1) },
    ...(p ? {} : { name: t.name, team: t.team }),
  };
});
fs.writeFileSync(path.join(DATA, 'live-projections-cbb.js'), `// ============================================================
//  CBB_PROJ_LIVE — Projektion 2026/27 gemischt mit den echten Spielen, AUTO-GENERIERT
//  (sports/cbb/scripts/build-live-projections.js). Schlüssel "Name|Schule" wie CBB_PROJECTIONS.
//  g = Spiele, w = Gewicht der Projektion in virtuellen Spielen, season = reiner Saisonschnitt.
// ============================================================

const CBB_PROJ_LIVE = ${JSON.stringify({ at: new Date().toISOString(), since: SINCE, last, files, players: Object.keys(out).length, p: out })};
`, 'utf8');
console.log(`live-projections-cbb.js: ${files} Tages-CSVs (seit ${SINCE}), ${Object.keys(out).length} Spieler mit Spielen.`);
