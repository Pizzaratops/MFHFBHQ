// Pfad-Suche US-Manager: 4 Sonntage (22.11., 29.11., 06.12., 13.12.), je 1 Gratis-Trade + optional 1 gekaufter (1,5 Mio).
const fs = require('fs'), vm = require('vm'), R = require('path').resolve(__dirname, '../../../..') + '/';
const ctx = { console, MFHFB: { ui: { esc: s => s }, pages: { register() {} } } }; ctx.window = ctx; vm.createContext(ctx);
const load = (f, names) => vm.runInContext(fs.readFileSync(R + f, 'utf8') + (names ? ';Object.assign(globalThis.__d=globalThis.__d||{},{' + names.map(n => n + ':typeof ' + n + '!=="undefined"?' + n + ':undefined').join(',') + '});' : ''), ctx, { filename: f });
load('sports/nba/nba.js');
load('leagues/usm/data/usm-base.js', ['USM_BASE']); load('leagues/usm/data/usm-snapshots.js', ['USM_SNAPSHOTS']); load('leagues/usm/data/usm-schedule.js', ['USM_SCHEDULE']);
load('sports/nba/data/live-projections.js', ['LIVE_PROJECTIONS']); load('sports/nba/data/projections-consensus.js', ['PROJECTIONS_CONSENSUS']); load('sports/nba/data/injuries.js', ['NBA_INJURIES']); load('sports/nba/data/livescores-boxscores.js', ['LIVESCORES_BOXSCORES']);
load('leagues/usm/data/usm-live.js', ['USM_LIVE']);
load('tools/usm.js');
const d = ctx.__d;
const W = ctx.MFHFB.usm.buildPool(d, { get: k => k === 'horizon' ? 'week' : null, getJSON: (k, x) => x });
const f = x => Math.max(0.5, -1.024 + 0.3247 * x + 0.001717 * x * x);

const games = {};
for (const g of d.USM_SCHEDULE.games) { const [ts, a, h] = g.split(' '); const t = Date.UTC(+ts.slice(0, 4), +ts.slice(4, 6) - 1, +ts.slice(6, 8), +ts.slice(8, 10), +ts.slice(10, 12)); (games[a] = games[a] || []).push(t); (games[h] = games[h] || []).push(t); }
const NOW = Date.UTC(2026, 10, 22, 12, 0);
const day = 864e5, U = s => Date.parse(s + 'Z');
const C = ['2026-11-22T11:00', '2026-11-29T11:00', '2026-12-06T11:00', '2026-12-13T11:00', '2026-12-20T11:00'].map(U);   // Stichzeiten Gehalt
const T = ['2026-11-22T21:00', '2026-11-29T21:00', '2026-12-06T21:00', '2026-12-13T21:00', '2026-12-20T21:00'].map(U);   // So 22:00 Berlin
const E = T.map(t => t + day);                                                                                              // Mo 22:00 (Trade wirksam)
const END = U('2027-04-13T00:00');
const INJ = d.NBA_INJURIES.players;
const ij = p => INJ[p.short] || INJ[p.short + ' II'] || INJ[p.short + ' Jr.'];

// Spielerdaten
const P = W.players.filter(p => p.team !== 'Free Agents').map(p => {
  const inj = ij(p);
  let back = null, gtd = false, season = false;
  if (inj) { const [, st, fan, ret, , so] = inj; season = !!so || fan === 'OFS'; back = ret ? Date.parse(ret + 'T12:00:00Z') : NOW + 14 * day; gtd = /day-to-day|questionable/i.test(st) || fan === 'GTD'; }
  const gl = games[p.abbr] || [];
  const ng = (a, b) => season ? 0 : gl.reduce((n, t) => n + (t >= a && t < b ? (back && t < back ? (gtd ? 0.5 : 0) : 1) : 0), 0);
  const proj = p.fpg > 0 ? p.fpg : p.fpgAct;
  const fpTot = p.fpgAct * p.gp;
  const val = C.map(c => { const g = ng(NOW, c), gp = p.gp + g; return gp < 6 ? p.sal : f((fpTot + proj * g) / gp); });
  val[0] = p.sal; // echter Preis ab 22.11. 22:00
  return { key: p.key, name: p.short, pos: p.pos, abbr: p.abbr, sal: p.sal, gp: p.gp, real: p.fpgAct, proj, val, ng, inj: inj ? inj[1] + (inj[3] ? ' bis ' + inj[3].slice(8, 10) + '.' + inj[3].slice(5, 7) + '.' : '') : '' };
});
P.forEach(p => { if (p.name === 'Quentin Grimes') p.proj = 11.5; });
const byName = new Map(P.map(p => [p.name, p]));
// Startkader aus dem Sync
const flip = n => { const i = n.indexOf(','); return i < 0 ? n.trim() : n.slice(i + 1).trim() + ' ' + n.slice(0, i).trim(); };
const start = d.USM_LIVE.players.map(p => { const x = byName.get(flip(p.name)); if (!x) throw new Error('fehlt ' + p.name); return x; });
const CASH0 = d.USM_LIVE.team.budget;
const MIN = { G: 5, F: 5, C: 2 };
const pts = (p, a, b) => p.proj * p.ng(a, b);
const restPts = p => pts(p, T[4], END);
// Kandidaten: alle mit nennenswerter Projection oder Wertsprung
const pool = P.filter(p => p.proj >= 9 || (p.gp < 6 && p.proj >= 7));
console.log('Kandidaten', pool.length, '| Start-Cash', CASH0);

function search(lambda, buffer, maxBuy) {
  // Zustand: {ros: [players], cash, fp, log}
  let beam = [{ ros: start.slice(), cash: CASH0, fp: 0, log: [], bought: 0 }];
  const score = s => s.fp + s.ros.reduce((a, p) => a + pts(p, s.t, T[4]) + restPts(p), 0) + lambda * (s.ros.reduce((a, p) => a + p.val[4], 0) + s.cash);
  for (let w = 0; w < 4; w++) {
    // Punkte So 22:00 → Mo 22:00 gehören noch dem alten Kader
    beam.forEach(s => { s.fp += s.ros.reduce((a, p) => a + pts(p, T[w], E[w]), 0); });
    const expand = (states, cost, label) => {
      const out = [];
      for (const s of states) {
        const cnt = { G: 0, F: 0, C: 0 }; s.ros.forEach(p => cnt[p.pos]++);
        const have = new Set(s.ros.map(p => p.key));
        for (let i = 0; i < s.ros.length; i++) {
          const o = s.ros[i];
          for (const n of pool) {
            if (have.has(n.key)) continue;
            if (w === 0 && FORCE && !cost && !(o.name === FORCE[0] && n.name === FORCE[1])) continue;
            if (w === 0 && FORCE && cost && !FORCE2) continue;
            if (n.pos !== o.pos && cnt[o.pos] - 1 < MIN[o.pos]) continue;
            const cash = s.cash + o.val[w] - n.val[w] - cost;
            if (cash < buffer - 1e-9) continue;
            const ros = s.ros.slice(); ros[i] = n;
            out.push({ ros, cash, fp: s.fp, log: s.log.concat(`${['22.11.', '29.11.', '06.12.', '13.12.'][w]}${label}: ${o.name} (${o.val[w].toFixed(2)}) → ${n.name} (${n.val[w].toFixed(2)})`), bought: s.bought + (cost ? 1 : 0), t: E[w] });
          }
        }
      }
      return out;
    };
    beam.forEach(s => s.t = E[w]);
    let next = (w === 0 && FORCE) ? (FORCE[0] === 'none' ? beam.slice() : expand(beam, 0, '')) : beam.concat(expand(beam, 0, ''));
    const prune = (arr, k) => { arr.forEach(s => s.sc = score(s)); arr.sort((a, b) => b.sc - a.sc); const seen = new Set(), res = []; for (const s of arr) { const sig = s.ros.map(p => p.key).sort().join('|') + '|' + s.cash.toFixed(2); if (seen.has(sig)) continue; seen.add(sig); res.push(s); if (res.length >= k) break; } return res; };
    next = prune(next, 60);
    if (maxBuy > 0) { next = prune(next.concat(expand(next.filter(s => s.bought < maxBuy), 1.5, ' (gekauft)')), 60); }
    // Punkte Mo 22:00 → nächster So 22:00
    next.forEach(s => { s.fp += s.ros.reduce((a, p) => a + pts(p, E[w], T[w + 1]), 0); s.t = T[w + 1]; });
    beam = next;
  }
  beam.forEach(s => { s.rest = s.ros.reduce((a, p) => a + restPts(p), 0); s.value = s.ros.reduce((a, p) => a + p.val[4], 0) + s.cash; s.sc = s.fp + s.rest + lambda * s.value; });
  beam.sort((a, b) => b.sc - a.sc);
  return beam[0];
}
const base = (() => { const s = { ros: start, cash: CASH0 }; let fp = 0; for (let w = 0; w < 4; w++) fp += start.reduce((a, p) => a + pts(p, T[w], T[w + 1]), 0); return { fp, rest: start.reduce((a, p) => a + restPts(p), 0), value: start.reduce((a, p) => a + p.val[4], 0) + CASH0 }; })();
const show = (title, s) => {
  console.log(`\n===== ${title}`);
  s.log.forEach(l => console.log('  ' + l));
  console.log(`  FP 22.11.–20.12.: ${s.fp.toFixed(0)} (ohne Trades ${base.fp.toFixed(0)}, ${(s.fp - base.fp >= 0 ? '+' : '')}${(s.fp - base.fp).toFixed(0)})`);
  console.log(`  FP Rest ab 20.12.: ${s.rest.toFixed(0)} (ohne Trades ${base.rest.toFixed(0)}, ${(s.rest - base.rest >= 0 ? '+' : '')}${(s.rest - base.rest).toFixed(0)})`);
  console.log(`  Teamwert 20.12.: ${s.value.toFixed(2)} (ohne Trades ${base.value.toFixed(2)}, ${(s.value - base.value >= 0 ? '+' : '')}${(s.value - base.value).toFixed(2)}) · Cash ${s.cash.toFixed(2)} · gekauft ${s.bought}`);
  console.log('  Kader:', s.ros.map(p => p.pos + ' ' + p.name).sort().join(', '));
};
const mode = process.argv[2] || 'all';
var FORCE = process.argv[3] ? process.argv[3].split('>') : null, FORCE2 = false;
if (mode === 'all' || mode === 'a') show('a) maximale Fantasy-Punkte (Puffer 0, bis 1 Kauf/Woche)', search(0, 0, 4));
if (mode === 'all' || mode === 'b') show('b) maximaler Teamwert (Puffer 0, bis 1 Kauf/Woche)', search(10000, 0, 4));
if (mode === 'all' || mode === 'c') show('c) Empfehlung: Punkte + 150 FP je Mio, Puffer 1,5, ohne Kauf', search(150, 1.5, 0));
if (mode === 'all' || mode === 'c2') show('c2) wie c, aber Käufe erlaubt', search(150, 1.5, 4));
// Werte-Info
const info = n => { const p = byName.get(n); return p ? `${n}: ${p.val.map(v => v.toFixed(2)).join(' → ')} | real ${p.real.toFixed(1)} proj ${p.proj.toFixed(1)} ${p.inj}` : n + ' ?'; };
console.log('\nWerte (22.11. → 29.11. → 06.12. → 13.12. → 20.12.):');
['Nikola Jokic', 'Dylan Harper', 'Quentin Grimes', 'Yanic Konan Niederhauser', 'Bradley Beal', 'Dereck Lively', 'Karl-Anthony Towns', 'Luka Doncic', 'Victor Wembanyama', 'Egor Demin', 'Joan Beringer'].forEach(n => console.log('  ' + info(n)));
if (mode === 'cand') { // stärkste bezahlbare Ziele für Harper
  const h = byName.get('Dylan Harper'); const lim = CASH0 + h.sal - 1.5;
  P.filter(p => p.sal <= lim && p.proj >= 28).sort((a, b) => b.proj * b.ng(E[0], END) - a.proj * a.ng(E[0], END)).slice(0, 12)
   .forEach(p => console.log(p.name, p.pos, p.sal.toFixed(2), 'proj', p.proj.toFixed(1), 'Spiele bis 20.12.', p.ng(E[0], T[4]), 'Rest', p.ng(E[0], END), p.inj));
}
if (mode === 'force') { const s = search(150, 1.5, 0); console.log('RES', process.argv[3], (s.fp).toFixed(0), s.rest.toFixed(0), s.value.toFixed(2), s.sc.toFixed(0), '|', s.log.join(' | ')); }
if (mode === 'forcea') { const s = search(0, 0, 4); console.log('RESA', process.argv[3], (s.fp).toFixed(0), s.rest.toFixed(0), s.value.toFixed(2), s.cash.toFixed(2), s.bought, '|', s.log.join(' | ')); }
