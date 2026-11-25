#!/usr/bin/env node
// ============================================================
//  College Scouting (Basketball): aktuelle Prospects bewerten
// ============================================================
//  Liest  sports/cbb/scripts/model/prospect-model.json   (train-prospect-model.py, lokal/jährlich)
//         sports/cbb/scripts/model/cache/torvik/torvik_<Saison>.csv.gz (+ Vorjahr)
//  Schreibt sports/cbb/data/college-prospects.js → COLLEGE_PROSPECTS
//  Läuft täglich im CBB Sync nach sync-torvik.js. Keine npm-Abhängigkeiten.
//
//  Je Prospect:
//   📈 Draft Range — P(gedraftet, „wenn er nach dieser Saison ginge“) + erwarteter NBA-Pick
//      mit Spanne (Ridge auf ln(Pick) + Residuen-Quantile aus dem Training). Zwei Modelle:
//      Produktion (laufende Saison) und Vorsaison (Recruiting, Alter, Größe, Vorjahr), überblendet
//      nach Saison-Minuten (Produktionsmodell voll ab model.pre.blendMin Minuten).
//   🎓 College Production Comp — „Produziert wie …“: Mahalanobis-Distanz auf reinen
//      Produktions-Raten, nur innerhalb der Rollen-Gruppe (Guard/Wing/Big), Pool = Saisons
//      späterer Draftees und Top-College-Spieler 2010–heute. KEINE Erfolgsprognose.
//  Profil = Minuten-Mix aktuelle Saison (Gewicht 1) + Vorsaison (0,5) + 150 Pseudo-Minuten
//  Pool-Schnitt — identisch zu profiles() in train-prospect-model.py.
// ============================================================
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.join(__dirname, '..', '..', '..');
const MODEL = path.join(__dirname, 'model', 'prospect-model.json');
const CACHE = path.join(__dirname, 'model', 'cache', 'torvik');
const OUT = path.join(ROOT, 'sports', 'cbb', 'data', 'college-prospects.js');
const CLS = { Fr: 1, So: 2, Jr: 3, Sr: 4 };
const ZERO0 = ['gp', 'minPct', 'mpg', 'tpa', 'tpm', 'fta', 'ftm', 'rimM', 'rimA', 'midA', 'dunkM', 'twoPa', 'pts'];

// TTHQ: NBA-Pick → typischer Slot im TTHQ-Draft (Gesamtdraft mit Veteranen, ohne Keeper). Basis: das
// echte Live-Draft-Board 2026 (#/tthq/livedraft; gedraftet wird über die Webseite, ESPN-Offline-
// Reihenfolge ist NICHT die echte). 31 Rookies, Quantil-Zuordnung: k-bester Rookie nach NBA-Pick ↔
// k-ter Rookie-Slot. Korrigiert 22.11.2026 (vorher ESPN-Reihenfolge + falsche Keeper-Annahme).
// Neu befüllen nach dem nächsten TTHQ-Draft.
const TTHQ_CURVE = {
  source: 'Live-Draft-Board TTHQ 2026 (31 Rookies im echten Draft)', teams: 12,
  nba: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 34, 35, 37, 52],
  slot: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 18, 19, 23, 24, 25, 26, 29, 30, 31, 33, 35, 38, 39, 40, 45, 47],
};

function parseCsv(text) {
  const rows = []; let row = [], f = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; }
    else if (c !== '\r') f += c;
  }
  if (f.length || row.length) { row.push(f); rows.push(row); }
  const head = rows.shift();
  return rows.filter(r => r.length === head.length).map(r => Object.fromEntries(head.map((h, i) => [h, r[i]])));
}
const num = v => (v === '' || v == null || isNaN(+v) ? NaN : +v);

// TORVIK_DIR (vom CBB Sync, frischer Abruf der laufenden Saison) hat Vorrang vor dem Repo-Cache
function loadYear(y, M) {
  const tmp = process.env.TORVIK_DIR && path.join(process.env.TORVIK_DIR, `torvik_${y}.csv.gz`);
  const f = tmp && fs.existsSync(tmp) ? tmp : path.join(CACHE, `torvik_${y}.csv.gz`);
  if (!fs.existsSync(f)) return [];
  return parseCsv(zlib.gunzipSync(fs.readFileSync(f)).toString('utf8')).filter(r => CLS[r.cls]).map(r => derive(r, y, M));
}

// = load() in train-prospect-model.py
function derive(r, y, M) {
  const o = { raw: r, pid: r.pid, name: r.name, team: r.team, conf: r.conf, cls: r.cls, role: r.role, year: y };
  for (const k of Object.keys(r)) if (!['name', 'team', 'conf', 'cls', 'ht', 'role', 'dob', 'pid'].includes(k)) o[k] = num(r[k]);
  ZERO0.forEach(k => { if (isNaN(o[k])) o[k] = 0; });
  o.min = o.mpg * o.gp;
  const m = Math.max(o.min, 1);
  o.tpa40 = 40 * o.tpa / m;
  o.tpPct = (o.tpm + 0.33 * 40) / (o.tpa + 40);
  o.ftPct = (o.ftm + 0.70 * 25) / (o.fta + 25);
  o.rimPct = (o.rimM + 0.58 * 30) / (o.rimA + 30);
  o.rimRate = (o.rimA + 0.30 * 20) / (o.twoPa + o.tpa + 20);
  o.dunk40 = 40 * o.dunkM / m;
  o.pts40 = 40 * o.pts * o.gp / m;
  ['oreb', 'dreb', 'ast', 'stl', 'blk'].forEach(k => { if (isNaN(o[k])) o[k] = 0; });
  o.reb40 = 40 * (o.oreb + o.dreb) * o.gp / m;
  o.ast40 = 40 * o.ast * o.gp / m;
  o.stl40 = 40 * o.stl * o.gp / m;
  o.blk40 = 40 * o.blk * o.gp / m;
  o.tpm40 = 40 * o.tpm / m;
  o.fta40 = 40 * o.fta / m;
  if (y < 2010) { o.rimPct = NaN; o.rimRate = NaN; o.dunk40 = NaN; }
  const h = /(\d+)-(\d+)/.exec(r.ht || '');
  o.htIn = h ? +h[1] * 12 + +h[2] : NaN;
  o.clsN = CLS[r.cls];
  o.power = M.power.includes(r.conf) ? 1 : 0;
  o.bucket = M.bucket[r.role] || 'W';
  o.realDob = !!r.dob && !r.dob.endsWith('-10-15');
  const dob = Date.parse(r.dob + 'T00:00:00Z');
  o.dob = r.dob;
  o.ageReal = isNaN(dob) ? NaN : Math.floor((Date.parse(`${y}-06-25T00:00:00Z`) - dob) / 86400000) / 365.25;
  return o;
}

// = profiles() in train-prospect-model.py
function profile(r, p, M) {
  const w1 = Math.max(r.min, 0), w0 = p ? 0.5 * Math.max(p.min, 0) : 0, k = M.priorMin, v = {};
  M.rates.forEach(c => {
    const mu = M.means[c];
    const a = isNaN(r[c]) ? mu : r[c];
    const b = p ? (isNaN(p[c]) ? mu : p[c]) : 0;
    v[c] = (w1 * a + w0 * b + k * mu) / (w1 + w0 + k);
  });
  const has = !!p && p.min >= 100;
  v.hasPrev = has ? 1 : 0;
  [['bpm', 'prevBpm'], ['obpm', 'prevObpm'], ['mpg', 'prevMpg'], ['usg', 'prevUsg']].forEach(([c, k]) => { v[k] = has && !isNaN(p[c]) ? p[c] : M.means[c]; });
  v.bpmJump = p && !isNaN(p.bpm) && !isNaN(r.bpm) ? r.bpm - p.bpm : 0;
  v.age = r.realDob && r.ageReal > 17 && r.ageReal < 28 ? r.ageReal : M.classAge[r.cls];
  v.cls = r.clsN;
  v.rec = isNaN(r.rec) ? 0 : r.rec;
  v.unrec = isNaN(r.rec) ? 1 : 0;
  v.recTop = -Math.log(100.5 - (isNaN(r.rec) ? 0 : r.rec));
  v.htIn = isNaN(r.htIn) ? M.means.htIn : r.htIn;
  v.power = r.power;
  v.confStr = isNaN(r.confStr) ? 0 : r.confStr;
  return v;
}

// Ein Modell (Produktion = M, Vorsaison = M.pre) auswerten
function evalModel(v, m) {
  const z = m.feats.map((f, i) => (v[f] - m.scaler.mean[i]) / m.scaler.scale[i]);
  const lg = m.logit.icpt + z.reduce((s, x, i) => s + x * m.logit.coef[i], 0);
  const ln = m.ridge.icpt + z.reduce((s, x, i) => s + x * m.ridge.coef[i], 0);
  return { p: 1 / (1 + Math.exp(-lg)), ln, resQ: m.ridge.resQ };
}
// Überblendung: Gewicht des Produktionsmodells = min(1, Saison-Minuten / blendMin)
function draft(v, M, minNow) {
  const a = evalModel(v, M), b = evalModel(v, M.pre);
  const w = Math.min(1, Math.max(0, minNow / M.pre.blendMin));
  const p = w * a.p + (1 - w) * b.p, ln = w * a.ln + (1 - w) * b.ln;
  const pk = q => Math.min(60, Math.max(1, Math.exp(ln + w * a.resQ[q] + (1 - w) * b.resQ[q])));
  return { p, ln, w, pProd: a.p, pPre: b.p, q: ['0.1', '0.25', '0.5', '0.75', '0.9'].map(q => +pk(q).toFixed(1)) };
}

// 🧬 NBA-DNA (Barttorvik-Version aus train-prospect-model.py → build_dna): rot/fan überblendet wie der
// Draft (Vorsaison ↔ Produktion nach Minuten), Kategorie-Profil nz nur aus dem Produktionsprofil.
const lin = (v, feats, m) => m.icpt + feats.reduce((s, f, i) => s + ((v[f] - m.mean[i]) / m.scale[i]) * m.coef[i], 0);
const sig = x => 1 / (1 + Math.exp(-x));
// Treiber-Texte mit Richtung: [hoch, niedrig] — je nachdem, ob der Spieler über/unter dem Schnitt liegt
const FLABEL = {
  age: ['älter', 'jünger'], cls: ['späteres College-Jahr', 'frühes College-Jahr'], htIn: ['groß', 'klein'],
  power: ['Power-Conference', 'kleinere Conference'], confStr: ['starke Conference', 'schwache Conference'], bpm: ['hohe BPM', 'niedrige BPM'], obpm: ['hohe Off. BPM', 'niedrige Off. BPM'],
  dbpm: ['hohe Def. BPM', 'niedrige Def. BPM'], usg: ['hohe Usage', 'niedrige Usage'], ts: ['effizient (TS%)', 'ineffizient (TS%)'],
  orbPct: ['viele Off.-Rebounds', 'wenige Off.-Rebounds'], drbPct: ['viele Def.-Rebounds', 'wenige Def.-Rebounds'],
  astPct: ['hohe Assist-Quote', 'niedrige Assist-Quote'], toPct: ['viele Ballverluste', 'wenige Ballverluste'],
  blkPct: ['viele Blocks', 'wenige Blocks'], stlPct: ['viele Steals', 'wenige Steals'], ftr: ['zieht viele Fouls', 'zieht wenige Fouls'],
  tpa40: ['viele Dreier-Versuche', 'wenige Dreier-Versuche'], tpPct: ['hohe Dreier-Quote', 'niedrige Dreier-Quote'],
  ftPct: ['hohe FW-Quote', 'niedrige FW-Quote'], rimPct: ['trifft am Ring', 'schwach am Ring'], dunk40: ['viele Dunks', 'wenige Dunks'],
  mpg: ['viele Minuten', 'wenige Minuten'], minPct: ['hoher Minuten-Anteil', 'niedriger Minuten-Anteil'],
  bpmJump: ['großer Sprung zum Vorjahr', 'Rückschritt zum Vorjahr'], pts40: ['viele Punkte/40', 'wenige Punkte/40'],
  reb40: ['viele Rebounds/40', 'wenige Rebounds/40'], ast40: ['viele Assists/40', 'wenige Assists/40'], stl40: ['viele Steals/40', 'wenige Steals/40'],
  blk40: ['viele Blocks/40', 'wenige Blocks/40'], tpm40: ['viele Dreier/40', 'wenige Dreier/40'], fta40: ['viele Freiwürfe/40', 'wenige Freiwürfe/40'],
  rimRate: ['viele Würfe am Ring', 'wenige Würfe am Ring'], astTo: ['gutes Assist/TO-Verhältnis', 'schwaches Assist/TO-Verhältnis'],
};
const REC_GROUP = ['rec', 'recTop', 'unrec']; // gemeinsam ein Treiber „Recruiting“ (sonst gegenläufige Teilgewichte)
function dnaOf(v, M, minNow) {
  const G = M.dna, w = Math.min(1, Math.max(0, minNow / M.pre.blendMin));
  // Überblenden, dann Platt-Nachkalibrierung aus dem Backtest (rohe Chancen waren zu optimistisch)
  const pr = t => {
    const p = w * sig(lin(v, M.feats, G.models[t + '_prod'])) + (1 - w) * sig(lin(v, M.pre.feats, G.models[t + '_pre']));
    const c = (G.calib || {})[t]; if (!c) return p;
    const q = Math.min(1 - 1e-6, Math.max(1e-6, p));
    return sig(c.a * Math.log(q / (1 - q)) + c.b);
  };
  const nz = {}; Object.entries(G.cat).forEach(([c, m]) => { nz[c] = +lin(v, G.catFeats, m).toFixed(2); });
  const out = { rot: +pr('rot').toFixed(3), fan: +pr('fan').toFixed(3), imp: +pr('impact').toFixed(3), nz };
  if (G.typ) {
    const vv = { ...v, astTo: v.astPct / Math.max(v.toPct, 1) };
    const T = G.typ.typ, F = G.typFeats;
    const zz = F.map((f, i) => (vv[f] - T.mean[i]) / T.scale[i]);
    const contrib = [];
    let recC = 0;
    F.forEach((f, i) => {
      const c = zz[i] * T.coef[i];
      if (REC_GROUP.includes(f)) { recC += c; return; }
      if (f === 'rimPct') return; // Artefakt (gegenläufig zu Würfe am Ring) — zählt im Modell, nicht als Treiber angezeigt
      const l = FLABEL[f]; contrib.push([l ? l[zz[i] >= 0 ? 0 : 1] : f, c]);
    });
    contrib.push([vv.unrec ? 'ohne Recruiting-Rang' : vv.rec >= 98 ? 'Top-Recruit' : vv.rec >= 90 ? 'guter Recruiting-Rang' : 'wenig Recruiting-Hype', recC]);
    const srt = contrib.slice().sort((a, b) => b[1] - a[1]);
    out.typ = {
      v: +lin(vv, F, T).toFixed(2),                         // BPM-Punkte mehr (+) / weniger (−) als sein Fantasy-Wert erwarten lässt
      sd: T.sd,
      plus: srt.filter(x => x[1] > 0.05).slice(0, 3).map(x => [x[0], +x[1].toFixed(2)]),
      minus: srt.filter(x => x[1] < -0.05).slice(-3).reverse().map(x => [x[0], +x[1].toFixed(2)]),
    };
    out.bpm = +lin(vv, F, G.typ.bpmW).toFixed(1);       // erwartete NBA-BPM (minutengewichtet, falls 1000+ Min.)
  }
  return out;
}

const nkey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z]/g, '');

function main() {
  const M = JSON.parse(fs.readFileSync(MODEL, 'utf8'));
  const files = fs.existsSync(CACHE) ? fs.readdirSync(CACHE).filter(f => /^torvik_\d{4}\.csv\.gz$/.test(f)).sort() : [];
  if (!files.length) { console.error('Kein Barttorvik-Cache — erst sync-torvik.js laufen lassen.'); process.exit(1); }
  const tmpFiles = process.env.TORVIK_DIR && fs.existsSync(process.env.TORVIK_DIR) ? fs.readdirSync(process.env.TORVIK_DIR).filter(f => /^torvik_\d{4}\.csv\.gz$/.test(f)) : [];
  const CUR = +process.env.CBB_SEASON || Math.max(...files.concat(tmpFiles).map(f => +f.slice(7, 11)));
  const cur = loadYear(CUR, M), prev = loadYear(CUR - 1, M);
  // Konferenz-Stärke (= train-prospect-model.py: minutengewichteter Ø-BPM je Konferenz und Saison).
  // Laufende Saison: früh noch dünn → Vorsaison mit halbem Gewicht dazu (Konferenzen sind stabil).
  const confAgg = (rows, wf) => rows.reduce((m, r) => { const w = Math.max(r.min, 0) * wf, b = isNaN(r.bpm) ? 0 : r.bpm; const a = m[r.conf] || (m[r.conf] = { b: 0, w: 0 }); a.b += b * w; a.w += w; return m; }, {});
  const cA = confAgg(cur, 1), pA = confAgg(prev, 0.5);
  const confStr = c => { const a = cA[c] || { b: 0, w: 0 }, q = pA[c] || { b: 0, w: 0 }; const w = a.w + q.w; return w > 0 ? (a.b + q.b) / w : 0; };
  const pOnly = confAgg(prev, 1), confPrev = c => { const a = pOnly[c]; return a && a.w > 0 ? a.b / a.w : 0; };
  cur.forEach(r => { r.confStr = confStr(r.conf); });
  prev.forEach(r => { r.confStr = confPrev(r.conf); });
  const prevBy = new Map(); prev.forEach(r => { if (!prevBy.has(r.pid)) prevBy.set(r.pid, r); });
  console.log(`Saison ${CUR}: ${cur.length} Spieler-Saisons, Vorjahr ${prev.length}.`);

  // Comp-Pool je Rollen-Gruppe vorbereiten (+ sortierte Werte für Perzentile)
  const C = M.comp, F = C.feats;
  const pools = {};
  ['G', 'W', 'B'].forEach(b => {
    const cv = C.cov[b];
    const items = C.pool.filter(p => p[4] === b).map(p => ({ p, z: p[6].map((x, i) => (x - cv.mu[i]) / cv.sd[i]) }));
    const sorted = F.map((_, i) => items.map(it => it.p[6][i]).sort((a, c) => a - c));
    pools[b] = { cv, items, sorted };
  });
  const dnaPools = {};
  ['G', 'W', 'B'].forEach(b => { const cv = C.cov[b]; dnaPools[b] = M.dna.pool.filter(p => p[2] === b).map(p => ({ p, z: p[5].map((x, i) => (x - cv.mu[i]) / cv.sd[i]) })); });
  const pctl = (sorted, x) => { let lo = 0, hi = sorted.length; while (lo < hi) { const m = (lo + hi) >> 1; if (sorted[m] < x) lo = m + 1; else hi = m; } return Math.round(100 * lo / sorted.length); };
  const maha = (a, b, inv) => { const d = a.map((x, i) => x - b[i]); let s = 0; for (let i = 0; i < d.length; i++) { let t = 0; for (let j = 0; j < d.length; j++) t += inv[i][j] * d[j]; s += d[i] * t; } return Math.sqrt(Math.max(s, 0)); };

  const out = [];
  cur.forEach(r => {
    if (r.gp < 1) return;
    const p = prevBy.get(r.pid) || null;
    const v = profile(r, p, M);
    const minNow = Math.round(r.min), minPrev = p ? Math.round(p.min) : 0;
    const d = draft(v, M, r.min);
    // Aufnahme: realistische Draft-Chance ODER Top-Recruit — mit echter Rolle
    if (!(d.p >= 0.05 || (v.rec >= 90 && r.minPct >= 5))) return;
    const P = pools[r.bucket];
    const me = F.map(f => v[f]);
    const mz = me.map((x, i) => (x - P.cv.mu[i]) / P.cv.sd[i]);
    const mk = nkey(r.name);
    const comps = P.items.filter(it => nkey(it.p[0]) !== mk)
      .map(it => ({ it, d: maha(mz, it.z, P.cv.inv) })).sort((a, b) => a.d - b.d).slice(0, 5)
      .map(({ it, d: dd }) => [it.p[0], it.p[1], it.p[2], it.p[3], Math.round(100 * Math.exp(-dd * dd / (2 * F.length))), F.map((_, i) => pctl(P.sorted[i], it.p[6][i]))]);
    const dn = dnaOf(v, M, r.min);
    dn.comps = dnaPools[r.bucket].filter(it => nkey(it.p[0]) !== mk).map(it => ({ it, d: maha(mz, it.z, P.cv.inv) })).sort((a, b) => a.d - b.d).slice(0, 4)
      .map(({ it, d: dd }) => [it.p[0], it.p[1], Math.round(100 * Math.exp(-dd * dd / (2 * F.length))), it.p[3], it.p[4], it.p[6] || null]); // [6]: NBA-9-Cat-z (Ø ersten 4 Jahre)
    const line = x => x && [Math.round(x.gp), +x.mpg.toFixed(1), +x.pts.toFixed(1), +((x.oreb || 0) + (x.dreb || 0)).toFixed(1), +(x.ast || 0).toFixed(1), +(x.stl || 0).toFixed(1), +(x.blk || 0).toFixed(1), +(x.gp ? x.tpm / x.gp : 0).toFixed(1), isNaN(x.ts) ? null : +x.ts.toFixed(1), isNaN(x.bpm) ? null : +x.bpm.toFixed(1), isNaN(x.usg) ? null : +x.usg.toFixed(1)];
    out.push({
      id: r.pid, n: r.name, t: r.team, c: r.conf, cl: r.cls, ht: r.raw.ht || null, role: r.role, b: r.bucket,
      age: r.realDob && r.ageReal > 17 && r.ageReal < 28 ? +r.ageReal.toFixed(1) : null, ageEst: +v.age.toFixed(1),
      rec: isNaN(r.rec) ? null : r.rec, min: [minNow, minPrev],
      s: line(r), sp: line(p),
      // Board-Score: Draft-Chance × Pick-Wert (ln-Skala, Pick 1 = 1, Pick 60 = 0) — Sortierung „Draft Range“
      sc: +(d.p * Math.log(61 / d.q[2]) / Math.log(61)).toFixed(4),
      dr: { p: +d.p.toFixed(4), q: d.q, w: +d.w.toFixed(2), pp: +d.pProd.toFixed(3), pv: +d.pPre.toFixed(3) },
      pc: F.map((f, i) => pctl(P.sorted[i], me[i])),
      dn,
      comps,
    });
  });
  out.sort((a, b) => b.sc - a.sc);
  out.splice(700); // Top 700 nach Board-Score (Dateigröße)
  out.forEach((x, i) => { x.rk = i + 1; });
  const meta = {
    built: new Date().toISOString(), season: CUR, model: { built: M.built, lastDraft: M.lastDraft, n: M.n, nDrafted: M.nDrafted, backtest: M.backtest, blendMin: M.pre.blendMin },
    compFeats: F, compPool: { G: pools.G.items.length, W: pools.W.items.length, B: pools.B.items.length },
    stat: ['GP', 'MIN', 'PTS', 'REB', 'AST', 'STL', 'BLK', '3PM', 'TS%', 'BPM', 'USG'],
    tthq: TTHQ_CURVE,
    dna: { auc: M.dna.auc, catR: M.dna.catR, base: M.dna.base, n: M.dna.n, nNba: M.dna.nNba, nRot: M.dna.nRot, nFan: M.dna.nFan, nImpact: M.dna.nImpact,
      typCross: M.dna.typCross, typN: M.dna.typN, years: M.dna.years, reliableMin: M.dna.reliableMin },
  };
  const js = `// ============================================================
//  COLLEGE_PROSPECTS — College Scouting Basketball (AUTO-GENERIERT von
//  sports/cbb/scripts/build-college-prospects.js, täglich im CBB Sync). Nicht von Hand editieren.
//  Quelle: Barttorvik (Saison ${CUR - 1}/${String(CUR).slice(2)} + Vorsaison), Modell sports/cbb/scripts/model/prospect-model.json.
//  p[]: rk Board-Rang, sc Board-Score (Chance × Pick-Wert), id, n Name, t Schule, c Conference, cl Klasse, ht, role, b Gruppe (G/W/B), age (echt) / ageEst
//  (Draft-Tag ${CUR}-06-25), rec Recruiting-Perzentil, min [Min. Saison, Min. Vorsaison], s/sp Statline
//  (meta.stat), dr {p Draft-Chance, q Pick-Quantile 10/25/50/75/90 falls gedraftet, w Gewicht Produktions-
//  modell (Rest Vorsaison-Modell), pp/pv Chance je Teilmodell}, pc Perzentile der
//  Comp-Merkmale (meta.compFeats) in der Gruppe, comps [Name, Schule, Saison, Klasse, Ähnlichkeit 0–100, pc],
//  dn NBA-DNA {rot P(Rotation), fan P(Fantasy-Top-150), imp P(Real-Life-Impact: Saison 1000+ Min. & BPM ≥ 0),
//  typ {v BPM-Punkte mehr/weniger Impact als der Fantasy-Wert erwarten lässt, sd, plus/minus Treiber}, bpm erwartete
//  NBA-BPM, nz NBA-z je Kategorie, comps [Name, letzte
//  College-Saison, Ähnlichkeit, NBA-Ergebnis, bester BBM-Wert, NBA-9-Cat-z]} — verlässlich ab meta.dna.reliableMin Min.
//  Stand ${meta.built}
// ============================================================

const COLLEGE_PROSPECTS = ${JSON.stringify({ meta, p: out })};
`;
  fs.writeFileSync(OUT, js, 'utf8');
  console.log(`${path.relative(ROOT, OUT)}: ${out.length} Prospects (${Math.round(js.length / 1024)} KB). Top 15:`);
  out.slice(0, 15).forEach(x => console.log(`  ${x.n} (${x.t}, ${x.cl}) — Draft ${Math.round(100 * x.dr.p)} %, Pick ~${x.dr.q[2]} [${x.dr.q[1]}–${x.dr.q[3]}] · Comp: ${x.comps[0] && x.comps[0][0]} ${x.comps[0] && x.comps[0][2]}`));
}

main();
