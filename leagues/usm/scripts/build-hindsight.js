#!/usr/bin/env node
// ============================================================
//  US-Manager — „Perfekter Verlauf“ (Rückblick mit Wissen von heute)
// ============================================================
//  Welcher Kader hätte am Saisonstart gedraftet und welche Trades hätten bis
//  heute gemacht werden müssen, um die meisten Punkte zu holen?
//
//  Regeln wie im Spiel: 63 Mio Budget, 15 Spieler (min. 5 G / 5 F / 2 C),
//  Startgehälter aus usm-base.js. Trades: Helpside Trade ab So 01.11. 22:00,
//  3 Start-Trades ab So 15.11. 22:00, danach 1 Gratis-Trade je Sonntag 22:00
//  (sammeln sich). Gekaufte Trades (1,5 Mio) werden nicht genutzt. Ein Trade an
//  Tag D wirkt ab 22:00 → zählt ab US-Spieltag D. Kauf-/Verkaufspreis = Gehalt
//  der Woche (bis 15.11. Startgehalt, danach Snapshot-Gehälter bzw. Formel).
//
//  Punkte je Spiel: aus den NBA-Tages-CSVs (sports/nba/scripts/data/daily-9cat_nba_*.csv)
//  mit dem US-Manager-Scoring; Fouls stehen dort nicht → je Spieler kalibriert gegen
//  die offiziellen Saison-FP aus dem jüngsten Gehalts-Snapshot (Abweichung je Spiel).
//
//  Suche: Draft per lokaler Suche (max. Punkte über den ganzen Zeitraum, mehrere
//  Startpunkte), dann Beam-Suche über alle Tage für die Trades (ein Trade je Tag).
//  Ergebnis: leagues/usm/data/usm-hindsight.js. Läuft montags in usm-sync.yml.
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '../../..');
const DATA = path.join(ROOT, 'leagues/usm/data');
const CSV_DIR = path.join(ROOT, 'sports/nba/scripts/data');
const BUDGET = 63.0, MIN = { G: 5, F: 5, C: 2 }, ROSTER = 15;
const HELPSIDE_FROM = '2026-11-01', START_TRADES_FROM = '2026-11-15', START_TRADES = 3;
const PF_MIN = { G: 0.061, F: 0.072, C: 0.101 };

// ---------- Namen normalisieren (wie tools/usm.js) ----------
const ctx = { console, MFHFB: {} }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'sports/nba/nba.js'), 'utf8'), ctx);
const key = raw => String(ctx.MFHFB.nba && ctx.MFHFB.nba.key ? ctx.MFHFB.nba.key(raw) : raw).replace(/[^a-z]/g, '');
const flip = n => { const i = n.indexOf(','); return i < 0 ? n.trim() : n.slice(i + 1).trim() + ' ' + n.slice(0, i).trim(); };
const readConst = (file, name) => new Function(fs.readFileSync(file, 'utf8') + `;return ${name};`)();
const addDays = (iso, n) => { const d = new Date(iso + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
const weekday = iso => new Date(iso + 'T12:00:00Z').getUTCDay();
const f = x => Math.max(0.5, -1.024 + 0.3247 * x + 0.001717 * x * x);

// ---------- Spieler (Startgehalt, Position) ----------
const BASE = readConst(path.join(DATA, 'usm-base.js'), 'USM_BASE');
const SNAPS = readConst(path.join(DATA, 'usm-snapshots.js'), 'USM_SNAPSHOTS');
const players = new Map();
for (const p of BASE.players) {
  const k = key(flip(p[0]));
  if (!players.has(k) || players.get(k).team === 'Free Agents') players.set(k, { k, name: flip(p[0]), usm: p[0], team: p[1], pos: p[2], start: p[3], fp: {} });
}
// Spieler, die erst in Snapshots auftauchen
for (const s of SNAPS) for (const r of s.players) {
  const k = key(flip(r[0]));
  if (!players.has(k)) players.set(k, { k, name: flip(r[0]), usm: r[0], team: r[1], pos: r[2], start: r[3], fp: {} });
}

// ---------- Tages-CSVs → FP je Spieler und US-Spieltag ----------
const parseCSV = line => { const out = []; let cur = '', q = false; for (const ch of line) { if (ch === '"') q = !q; else if (ch === ',' && !q) { out.push(cur); cur = ''; } else cur += ch; } out.push(cur); return out; };
const files = fs.readdirSync(CSV_DIR).filter(n => /^daily-9cat_nba_\d{4}-\d{2}-\d{2}\.csv$/.test(n)).sort();
const days = [];
for (const fn of files) {
  const date = fn.match(/(\d{4}-\d{2}-\d{2})/)[1];
  if (date < '2026-10-20') continue;
  days.push(date);
  const lines = fs.readFileSync(path.join(CSV_DIR, fn), 'utf8').split(/\r?\n/).filter(Boolean);
  const h = parseCSV(lines[0]); const ix = n => h.indexOf(n);
  for (const line of lines.slice(1)) {
    const c = parseCSV(line);
    const p = players.get(key(c[ix('Name')]));
    if (!p) continue;
    const g = n => +c[ix(n)] || 0;
    const min = g('MIN');
    if (!(min > 0)) continue;
    const fp = g('PTS') + g('REB') + 1.5 * g('AST') + 2 * g('STL') + 2 * g('BLK') - 2 * g('TO') - 0.5 * (g('FGA') - g('FGM')) - 0.5 * (g('FTA') - g('FTM')) - 0.5 * (PF_MIN[p.pos] || 0.07) * min;
    p.fp[date] = (p.fp[date] || 0) + fp;
  }
}
const lastDay = days[days.length - 1];

// ---------- Kalibrierung gegen offizielle FP (jüngster Snapshot) ----------
const calib = SNAPS[SNAPS.length - 1];
const through = calib.through || addDays(calib.date, -1);
let calN = 0;
for (const r of calib.players) {
  const p = players.get(key(flip(r[0])));
  if (!p) continue;
  const ds = Object.keys(p.fp).filter(d => d <= through);
  if (!ds.length || !(r[5] || r[5] === 0)) continue;
  const est = ds.reduce((s, d) => s + p.fp[d], 0);
  const corr = (r[5] - est) / ds.length;
  if (Math.abs(corr) < 15) { for (const d of Object.keys(p.fp)) p.fp[d] += corr; calN++; }
}

// ---------- Preise je Tag ----------
// Gehaltswoche beginnt So 22:00 → gilt ab US-Spieltag Sonntag. Snapshots: Sonntagabend-Snapshot
// (date = Sonntag) bzw. Montags-Snapshot (date = Montag, gilt ab Sonntag davor).
const priceWeeks = SNAPS.filter(s => s.date >= START_TRADES_FROM).map(s => ({ eff: weekday(s.date) === 1 ? addDays(s.date, -1) : s.date, map: new Map(s.players.map(r => [key(flip(r[0])), r[3]])) })).sort((a, b) => a.eff < b.eff ? -1 : 1);
const sundays = []; for (let d = START_TRADES_FROM; d <= lastDay; d = addDays(d, 7)) sundays.push(d);
const formulaPrice = (p, sun) => { const ds = Object.keys(p.fp).filter(d => d < sun); return ds.length < 6 ? p.start : f(ds.reduce((s, d) => s + p.fp[d], 0) / ds.length); };
const priceCache = new Map();
function price(p, day) {
  if (day < START_TRADES_FROM) return p.start;
  const sun = sundays.filter(s => s <= day).pop();
  const ck = p.k + sun; if (priceCache.has(ck)) return priceCache.get(ck);
  const w = priceWeeks.filter(x => x.eff <= day).pop();
  const v = w && w.eff === sun && w.map.has(p.k) ? w.map.get(p.k) : formulaPrice(p, sun);
  priceCache.set(ck, v); return v;
}

// ---------- Präfixsummen ----------
const P = [...players.values()].filter(p => p.pos && p.start > 0);
const di = new Map(days.map((d, i) => [d, i]));
for (const p of P) { p.cum = new Float64Array(days.length + 1); days.forEach((d, i) => { p.cum[i + 1] = p.cum[i] + (p.fp[d] || 0); }); p.tot = p.cum[days.length]; p.gp = Object.keys(p.fp).length; }
const seg = (p, a, b) => p.cum[b] - p.cum[a];   // Tage [a, b)

// ---------- Draft: lokale Suche (max. Gesamtpunkte, Budget, Positionen) ----------
function validCounts(ros) { const c = { G: 0, F: 0, C: 0 }; ros.forEach(p => c[p.pos]++); return c.G >= MIN.G && c.F >= MIN.F && c.C >= MIN.C; }
function draftSearch(scoreOf, seedOrder) {
  // Startkader: je Position die besten nach Punkten/Mio, auffüllen, dann Swaps
  const cand = P.filter(p => p.tot > 0 || p.start <= 1);
  let ros = [];
  for (const pos of ['G', 'F', 'C']) ros.push(...cand.filter(p => p.pos === pos).sort(seedOrder).slice(0, MIN[pos]));
  for (const p of cand.slice().sort(seedOrder)) { if (ros.length >= ROSTER) break; if (!ros.includes(p)) ros.push(p); }
  const cost = r => r.reduce((s, p) => s + p.start, 0);
  // Budget erzwingen: teuerste mit schlechtem Verhältnis durch billige ersetzen
  let guard = 0;
  while (cost(ros) > BUDGET && guard++ < 500) {
    let best = null;
    for (let i = 0; i < ros.length; i++) for (const n of cand) {
      if (ros.includes(n) || n.start >= ros[i].start) continue;
      const r2 = ros.slice(); r2[i] = n; if (!validCounts(r2)) continue;
      const loss = (scoreOf(ros[i]) - scoreOf(n)) / (ros[i].start - n.start);
      if (!best || loss < best.loss) best = { r2, loss };
    }
    if (!best) break; ros = best.r2;
  }
  // Verbessern: 1er- und 2er-Swaps
  let improved = true, it = 0;
  while (improved && it++ < 200) {
    improved = false;
    const base = ros.reduce((s, p) => s + scoreOf(p), 0), c0 = cost(ros);
    let best = null;
    for (let i = 0; i < ros.length; i++) for (const n of cand) {
      if (ros.includes(n)) continue;
      const r2 = ros.slice(); r2[i] = n;
      if (c0 - ros[i].start + n.start > BUDGET + 1e-9 || !validCounts(r2)) continue;
      const gain = scoreOf(n) - scoreOf(ros[i]);
      if (gain > 1e-6 && (!best || gain > best.gain)) best = { r2, gain };
    }
    if (!best) {
      // 2er-Swap: zwei raus, zwei rein (nur unter den Top-Kandidaten)
      const top = cand.filter(p => !ros.includes(p)).sort((a, b) => scoreOf(b) - scoreOf(a)).slice(0, 60);
      for (let i = 0; i < ros.length; i++) for (let j = i + 1; j < ros.length; j++) for (let a = 0; a < top.length; a++) for (let b = a + 1; b < top.length; b++) {
        const r2 = ros.slice(); r2[i] = top[a]; r2[j] = top[b];
        if (c0 - ros[i].start - ros[j].start + top[a].start + top[b].start > BUDGET + 1e-9 || !validCounts(r2)) continue;
        const gain = scoreOf(top[a]) + scoreOf(top[b]) - scoreOf(ros[i]) - scoreOf(ros[j]);
        if (gain > 1e-6 && (!best || gain > best.gain)) best = { r2, gain };
      }
    }
    if (best) { ros = best.r2; improved = true; }
  }
  return ros;
}

// ---------- Trades: Beam-Suche über alle Tage ----------
function tradeSearch(draft, beamWidth = 60) {
  const startCash = BUDGET - draft.reduce((s, p) => s + p.start, 0);
  const tradeDays = days.filter(d => d >= HELPSIDE_FROM);
  const freeOn = d => (d === START_TRADES_FROM ? START_TRADES : 0) + (d > START_TRADES_FROM && weekday(d) === 0 ? 1 : 0);
  let beam = [{ ros: draft, cash: startCash, fp: 0, from: 0, helpside: 1, trades: 0, log: [] }];
  // Punkte bis zum ersten möglichen Trade-Tag
  const i0 = di.get(tradeDays[0]);
  beam[0].fp = draft.reduce((s, p) => s + seg(p, 0, i0), 0); beam[0].from = i0;
  const pool = P.filter(p => p.tot > 0).sort((a, b) => b.tot - a.tot).slice(0, 260);
  const rest = (s, i) => s.ros.reduce((a, p) => a + seg(p, i, days.length), 0);
  for (const d of tradeDays) {
    const i = di.get(d);
    beam.forEach(s => { s.trades += freeOn(d); });
    const next = [];
    for (const s of beam) {
      next.push(s);
      const avail = (d >= HELPSIDE_FROM ? s.helpside : 0) + s.trades;
      if (!avail) continue;
      const cnt = { G: 0, F: 0, C: 0 }; s.ros.forEach(p => cnt[p.pos]++);
      const have = new Set(s.ros.map(p => p.k));
      for (let r = 0; r < s.ros.length; r++) {
        const o = s.ros[r], po = price(o, d), lostO = seg(o, i, days.length);
        for (const n of pool) {
          if (have.has(n.k)) continue;
          if (n.pos !== o.pos && cnt[o.pos] - 1 < MIN[o.pos]) continue;
          const pn = price(n, d), cash = s.cash + po - pn;
          if (cash < -1e-9) continue;
          const gain = seg(n, i, days.length) - lostO;
          if (gain <= 0) continue;
          const ros = s.ros.slice(); ros[r] = n;
          const useHelp = s.trades === 0;
          next.push({ ros, cash, fp: s.fp, from: i, helpside: useHelp ? 0 : s.helpside, trades: useHelp ? s.trades : s.trades - 1,
            log: s.log.concat({ date: d, out: o.usm, outSal: +po.toFixed(2), in: n.usm, inSal: +pn.toFixed(2), type: useHelp ? 'Helpside Trade' : (d < addDays(START_TRADES_FROM, 7) ? 'Start-Trade' : 'Gratis-Trade'), gain: Math.round(gain) }) });
        }
      }
    }
    // Punkte des Tages verbuchen und beschneiden
    next.forEach(s => { s.fp += s.ros.reduce((a, p) => a + seg(p, i, i + 1), 0); });
    next.sort((a, b) => (b.fp + rest(b, i + 1)) - (a.fp + rest(a, i + 1)));
    const seen = new Set(); beam = [];
    for (const s of next) { const sig = s.ros.map(p => p.k).sort().join('|') + '|' + s.helpside + s.trades; if (seen.has(sig)) continue; seen.add(sig); beam.push(s); if (beam.length >= beamWidth) break; }
  }
  beam.sort((a, b) => b.fp - a.fp);
  return beam[0];
}

// ---------- Mehrere Draft-Startpunkte probieren ----------
const variants = [
  ['Punkte gesamt', p => p.tot, (a, b) => b.tot / Math.max(0.5, b.start) - a.tot / Math.max(0.5, a.start)],
  ['Punkte gesamt (nach Punkten sortiert)', p => p.tot, (a, b) => b.tot - a.tot],
  ['Punkte bis 15.11.', p => seg(p, 0, di.get(START_TRADES_FROM) ?? days.length), (a, b) => b.tot / Math.max(0.5, b.start) - a.tot / Math.max(0.5, a.start)],
  ['Punkte bis 01.11.', p => seg(p, 0, di.get(HELPSIDE_FROM) ?? days.length), (a, b) => b.tot / Math.max(0.5, b.start) - a.tot / Math.max(0.5, a.start)],
];
// zusätzliche zufällige Startpunkte (feste Saat → reproduzierbar)
let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
for (let i = 0; i < 24; i++) { const noise = new Map(P.map(p => [p.k, 0.75 + 0.5 * rnd()])); variants.push([`Zufallsstart ${i + 1}`, p => p.tot, (a, b) => b.tot * noise.get(b.k) / Math.max(0.5, b.start) ** (i % 2 ? 1 : 0.5) - a.tot * noise.get(a.k) / Math.max(0.5, a.start) ** (i % 2 ? 1 : 0.5)]); }
let best = null;
for (const [label, sc, order] of variants) {
  const draft = draftSearch(sc, order);
  const res = tradeSearch(draft);
  if (!/Zufall/.test(label) || !best || res.fp > best.res.fp) console.log(`Variante „${label}“: Draft ${draft.reduce((s, p) => s + p.tot, 0).toFixed(0)} FP ohne Trades → mit Trades ${res.fp.toFixed(0)} FP`);
  if (!best || res.fp > best.res.fp) best = { label, draft, res };
}

// ---------- Ausgabe ----------
const { draft, res } = best;
const noTrades = draft.reduce((s, p) => s + p.tot, 0);
const live = fs.existsSync(path.join(DATA, 'usm-live.js')) ? readConst(path.join(DATA, 'usm-live.js'), 'USM_LIVE') : null;
const ranking = fs.existsSync(path.join(DATA, 'usm-ranking.js')) ? readConst(path.join(DATA, 'usm-ranking.js'), 'USM_RANKING') : null;
const out = {
  updated: new Date().toISOString(), through: lastDay, days: days.length, calibratedOn: calib.date, calibrated: calN,
  rules: 'Draft 63 Mio, 15 Spieler (min. 5 G / 5 F / 2 C), Startgehälter · Helpside Trade ab 01.11. · 3 Start-Trades ab 15.11. · 1 Gratis-Trade je Sonntag ab 22.11. · keine gekauften Trades · ein Trade je Tag, wirksam ab dem Spieltag',
  variant: best.label,
  draft: draft.slice().sort((a, b) => a.pos.localeCompare(b.pos) || b.start - a.start).map(p => ({ name: p.usm, team: p.team, pos: p.pos, sal: p.start, fp: Math.round(p.tot), gp: p.gp, fpg: p.gp ? +(p.tot / p.gp).toFixed(1) : 0 })),
  draftCost: +draft.reduce((s, p) => s + p.start, 0).toFixed(2),
  trades: res.log,
  final: res.ros.slice().sort((a, b) => a.pos.localeCompare(b.pos)).map(p => ({ name: p.usm, team: p.team, pos: p.pos, fp: Math.round(p.tot) })),
  fp: Math.round(res.fp), fpNoTrades: Math.round(noTrades), cash: +res.cash.toFixed(2),
  compare: {
    me: live ? { team: live.me.team, pts: live.me.pts, rank: live.me.rank, date: live.date, gameday: live.gameday } : null,
    top: ranking && ranking.rows[0] ? { team: ranking.rows[0][2], pts: ranking.rows[0][4], gameday: live ? live.gameday : null } : null,
  },
  // Verlauf: kumulierte Punkte je Tag (perfekt)
  curve: (() => { const c = []; let ros = draft.slice(), t = 0, li = 0; const byDay = new Map(); res.log.forEach(x => (byDay.get(x.date) || byDay.set(x.date, []).get(x.date)).push(x));
    days.forEach((d, i) => { (byDay.get(d) || []).forEach(x => { const oi = ros.findIndex(p => p.usm === x.out); const n = P.find(p => p.usm === x.in); if (oi >= 0 && n) ros[oi] = n; }); t += ros.reduce((s, p) => s + (p.fp[d] || 0), 0); c.push([d, Math.round(t)]); }); return c; })(),
};
const src = '// US-Manager — „Perfekter Verlauf“ (Rückblick), erzeugt von leagues/usm/scripts/build-hindsight.js. Nicht von Hand bearbeiten.\n'
  + 'const USM_HINDSIGHT = ' + JSON.stringify(out, null, 1) + ';\n';
if (!process.argv.includes('--dry')) fs.writeFileSync(path.join(DATA, 'usm-hindsight.js'), src);
console.log(`\nBest: „${best.label}“ · ${out.fp} FP bis ${lastDay} (ohne Trades ${out.fpNoTrades}) · Draft ${out.draftCost} Mio · ${res.log.length} Trades · kalibriert ${calN} Spieler auf Snapshot ${calib.date}`);
out.draft.forEach(p => console.log(`  ${p.pos} ${p.name.padEnd(28)} ${p.sal.toFixed(2)}  ${p.fp} FP (${p.gp} Sp)`));
res.log.forEach(x => console.log(`  ${x.date} ${x.type}: ${x.out} (${x.outSal}) → ${x.in} (${x.inSal}) +${x.gain}`));
