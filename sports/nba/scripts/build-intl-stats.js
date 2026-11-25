#!/usr/bin/env node
// ============================================================
//  build-intl-stats.js — Statlines internationaler Prospects (Konsens-Board ohne College-Datensatz)
// ============================================================
//  Quellen: EuroLeague/EuroCup-Cache (sync-intl-history.js, laufende + Vorsaison) und NBL-Boxscores
//  (nblR-Daten, CSV-Pfad als Argument; im Workflow vorher heruntergeladen).
//  Ausgabe: sports/nba/data/intl-stats.js (INTL_STATS = { asof, players: { <nameKey>: [[saison, liga, team, gp, mpg,
//  pts, reb, ast, stl, blk, tpm, ts%], …] } }) — nur Anzeige, fließt nicht ins Modell (Backtest: kein Gewinn).
//  Aufruf: node build-intl-stats.js [pfad/zu/box_player.csv]
// ============================================================
const fs = require('fs'), path = require('path'), zlib = require('zlib');
const ROOT = path.join(__dirname, '..', '..', '..');
const CACHE = path.join(ROOT, 'sports', 'cbb', 'scripts', 'model', 'cache', 'intl');
const OUT = path.join(ROOT, 'sports', 'nba', 'data', 'intl-stats.js');
const nk0 = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z]/g, '');
const ALIAS = { klarkriethauser: 'klarkreithauser' };
const nk = s => { const k = nk0(s); return ALIAS[k] || k; };
const load = (f, v) => new Function(fs.readFileSync(f, 'utf8') + `;return ${v};`)();

const board = load(path.join(ROOT, 'sports', 'nba', 'data', 'prospect-board-nba.js'), 'PROSPECT_BOARD_NBA');
let college = new Set();
try { college = new Set(load(path.join(ROOT, 'sports', 'cbb', 'data', 'college-prospects.js'), 'COLLEGE_PROSPECTS').p.map(p => nk(p.n))); } catch (e) { /* optional */ }
const want = new Set(board.players.map(p => nk(p.name)).filter(k => !college.has(k)));
const out = {};
const push = (k, row) => { (out[k] = out[k] || []).push(row); };
const r1 = x => Math.round(x * 10) / 10;

// EuroLeague / EuroCup
const now = new Date(), startYear = now.getUTCMonth() >= 7 ? now.getUTCFullYear() : now.getUTCFullYear() - 1;
for (const y of [startYear - 1, startYear]) {
  for (const [c, lg] of [['E', 'EuroLeague'], ['U', 'EuroCup']]) {
    const f = path.join(CACHE, `${c}${y}_trad.json.gz`), fa = path.join(CACHE, `${c}${y}_adv.json.gz`);
    if (!fs.existsSync(f)) continue;
    const J = JSON.parse(zlib.gunzipSync(fs.readFileSync(f)));
    const adv = fs.existsSync(fa) ? JSON.parse(zlib.gunzipSync(fs.readFileSync(fa))).players : [];
    const advBy = new Map(adv.map(p => [p.player.code + p.player.team.code, p]));
    J.players.forEach(p => {
      let nm = p.player.name; if (nm.includes(',')) { const [l, f2] = nm.split(',').map(s => s.trim()); nm = `${f2} ${l}`; }
      const k = nk(nm); if (!want.has(k)) return;
      const gp = p.gamesPlayed || 0; if (!gp) return;
      const a = advBy.get(p.player.code + p.player.team.code) || {};
      const ts = parseFloat(String(a.trueShootingPercentage || '').replace('%', ''));
      push(k, [`${y}/${String(y + 1).slice(2)}`, lg, p.player.team.name, gp, r1(p.minutesPlayed / gp), r1(p.pointsScored / gp), r1(p.totalRebounds / gp), r1(p.assists / gp), r1(p.steals / gp), r1(p.blocks / gp), r1(p.threePointersMade / gp), isNaN(ts) ? null : r1(ts)]);
    });
  }
}
// NBL (CSV mit Boxscores je Spiel)
const csv = process.argv[2];
if (csv && fs.existsSync(csv)) {
  const lines = fs.readFileSync(csv, 'utf8').split(/\r?\n/);
  const head = lines.shift().split(',').map(h => h.replace(/"/g, ''));
  const ix = n => head.indexOf(n);
  const I = { s: ix('season'), t: ix('team_name'), f: ix('first_name'), l: ix('family_name'), m: ix('minutes'), p: ix('points'), r: ix('rebounds_total'), a: ix('assists'), st: ix('steals'), b: ix('blocks'), t3: ix('three_pointers_made'), fga: ix('field_goals_attempted'), fta: ix('free_throws_attempted') };
  const agg = {};
  const split = l => { const o = []; let cur = '', q = false; for (const ch of l) { if (ch === '"') q = !q; else if (ch === ',' && !q) { o.push(cur); cur = ''; } else cur += ch; } o.push(cur); return o; };
  const seasons = [`${startYear - 1}-${startYear}`, `${startYear}-${startYear + 1}`];
  lines.forEach(l => {
    if (!l) return; const c = split(l); if (!seasons.includes(c[I.s])) return;
    const k = nk(c[I.f] + ' ' + c[I.l]); if (!want.has(k)) return;
    const mm = String(c[I.m]).split(':'); const min = mm.length > 1 ? +mm[0] + +mm[1] / 60 : +mm[0] || 0;
    if (!min) return;
    const key = k + '|' + c[I.s], g = agg[key] || (agg[key] = { k, s: c[I.s], t: c[I.t], gp: 0, min: 0, p: 0, r: 0, a: 0, st: 0, b: 0, t3: 0, fga: 0, fta: 0 });
    g.gp++; g.min += min; g.t = c[I.t];
    ['p', 'r', 'a', 'st', 'b', 't3', 'fga', 'fta'].forEach(x => { g[x] += +c[I[x]] || 0; });
  });
  Object.values(agg).forEach(g => {
    const tsa = g.fga + 0.44 * g.fta;
    push(g.k, [`${g.s.slice(0, 4)}/${g.s.slice(7)}`, 'NBL', g.t, g.gp, r1(g.min / g.gp), r1(g.p / g.gp), r1(g.r / g.gp), r1(g.a / g.gp), r1(g.st / g.gp), r1(g.b / g.gp), r1(g.t3 / g.gp), tsa ? r1(100 * g.p / (2 * tsa)) : null]);
  });
}
Object.values(out).forEach(a => a.sort((x, y) => y[0].localeCompare(x[0])));
const data = { asof: new Date().toISOString().slice(0, 10), players: out };
fs.writeFileSync(OUT, `// AUTO-GENERIERT von sports/nba/scripts/build-intl-stats.js (Workflow „NBA Prospect Board“). Nur Anzeige.\nconst INTL_STATS = ${JSON.stringify(data)};\n`);
console.log(`intl-stats.js: ${Object.keys(out).length} von ${want.size} Prospects ohne College-Datensatz mit Statline`);
