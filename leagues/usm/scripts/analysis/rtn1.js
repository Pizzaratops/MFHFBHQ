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
const NOW = Date.UTC(2026, 10, 22, 7, 0);
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
    let next = beam.concat(expand(beam, 0, ''));
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
const G = n => byName.get(n) || (()=>{throw n})();
const now0 = U('2026-11-21T21:00');
const sumR = (ros, a, b) => ros.reduce((s, p) => ({ fp: s.fp + p.proj * p.ng(a, b), g: s.g + p.ng(a, b) }), { fp: 0, g: 0 });
// Plan-c Kader je Woche
const swaps = [['Dylan Harper','Luka Doncic',E[0]],['Quentin Grimes','Bradley Beal',E[1]],['Terrence Shannon Jr.','Ausar Thompson',E[2]],['Joan Beringer','Dereck Lively',E[3]]];
function run(sw){ let ros=start.slice(); const cuts=[now0,...sw.map(s=>s[2]),END]; let fp=0,g=0; const seg=[];
  for(let i=0;i<cuts.length-1;i++){ if(i>0){const [o,n]=sw[i-1]; ros=ros.map(p=>p.name===o?G(n):p);} const r=sumR(ros,cuts[i],cuts[i+1]); fp+=r.fp; g+=r.g; }
  return {fp,g,ros}; }
const names=[...byName.keys()];
swaps.forEach(s=>{ if(!byName.has(s[1])) { const m=names.filter(n=>n.includes(s[1].split(' ')[1])); console.log('?',s[1],m); }});
const nos=run([]), pc=run(swaps.filter(s=>byName.has(s[1])));
console.log('ohne Trades', nos.fp.toFixed(0), nos.g.toFixed(0), (nos.fp/nos.g).toFixed(2));
console.log('Plan c', pc.fp.toFixed(0), pc.g.toFixed(0), (pc.fp/pc.g).toFixed(2));
// Monatsweise Plan c
// Team-Spiele restliche Saison im Schnitt
const teams=Object.keys(games); const tg=teams.map(t=>games[t].filter(x=>x>=now0&&x<END).length); console.log('Teams',teams.length,'Spiele Rest Ø',(tg.reduce((a,b)=>a+b,0)/tg.length).toFixed(1));
const played=teams.map(t=>games[t].filter(x=>x<now0).length); console.log('gespielt Ø',(played.reduce((a,b)=>a+b,0)/played.length).toFixed(1));
// Harper-Loch
console.log('Harper ng bis 20.12', G('Dylan Harper').ng(now0,T[4]), 'Doncic', G('Luka Doncic').ng(E[0],T[4]), 'proj', G('Luka Doncic').proj, G('Dylan Harper').proj);
start.forEach(p=>console.log(p.pos,p.name,p.real.toFixed(1),p.proj.toFixed(1),p.ng(now0,END),p.inj));
// Tagesreihen
const all=[]; teams.forEach(t=>games[t].forEach(x=>{ if(x>=now0&&x<END) all.push(x);}));
const dayKey=x=>new Date(x-10*3600e3).toISOString().slice(0,10); // US-Spieltag
const days=[...new Set(all.map(dayKey))].sort();
const perDayTeamGames={}; all.forEach(x=>{const k=dayKey(x); perDayTeamGames[k]=(perDayTeamGames[k]||0)+1;});
function mySeries(sw){ const out={}; days.forEach(k=>out[k]=0); let ros=start.slice(); const cuts=[now0,...sw.map(s=>s[2]),END];
  for(let i=0;i<cuts.length-1;i++){ if(i>0){const [o,n]=sw[i-1]; ros=ros.map(p=>p.name===o?G(n):p);} ros.forEach(p=>{ (games[p.abbr]||[]).forEach(x=>{ if(x>=cuts[i]&&x<cuts[i+1]){ const k=dayKey(x); out[k]+=p.proj*p.ng(x,x+1);} });}); }
  return out; }
const ms=mySeries(swaps), m0=mySeries([]);
function race(H,fpgL,upMe){ let me=4384.5, ld=4705.5, cross=null; const chk={}; days.forEach(k=>{ me+=ms[k]*H*upMe + m0[k]*H*(1-upMe); ld+=fpgL*H*15*perDayTeamGames[k]/30; if(!cross&&me>ld) cross=k; if(['2026-12-20','2027-01-31','2027-02-12','2027-03-15','2027-04-11'].includes(k)) chk[k]=Math.round(ld-me); }); return {cross,me:Math.round(me),ld:Math.round(ld),chk}; }
for (const [lab,fl,up] of [['Basis: L bleibt 19,85, Plan voll',19.85,1],['L steigt auf 21,0',21.0,1],['L 21,5',21.5,1],['L 22,0',22.0,1],['L 21,0, Plan halb',21.0,0.5],['ohne Trades vs L 19,85',19.85,0]]) console.log(lab, JSON.stringify(race(0.93,fl,up)));
// was braucht's: Break-even FP/G des Leaders
for (const fl of [22.2,22.4,22.6]) console.log(fl, JSON.stringify(race(0.93,fl,1)));
function race2(Hm,Hl,fpgL){ let me=4384.5, ld=4705.5, cross=null; days.forEach(k=>{ me+=ms[k]*Hm; ld+=fpgL*Hl*15*perDayTeamGames[k]/30; if(!cross&&me>ld) cross=k;}); return {cross,me:Math.round(me),ld:Math.round(ld)}; }
for (const [hm,hl,f] of [[0.88,0.95,19.85],[0.88,0.95,21],[0.9,0.95,21],[0.85,0.95,21]]) console.log(hm,hl,f,JSON.stringify(race2(hm,hl,f)));
console.log('ms bis 20.12', Object.entries(ms).filter(([k])=>k<='2026-12-20').reduce((a,[,v])=>a+v,0).toFixed(0));
