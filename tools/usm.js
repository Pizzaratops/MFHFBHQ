// ============================================================
//  basketball.de US-Manager (Liga 'usm') — Draft/Value, Trades,
//  Gehälter, Import. 19.10.2026
// ============================================================
//  Salary-Cap-Spiel: 15 Spieler (min. 5 G / 5 F / 2 C), 63 Mio Budget,
//  alle 15 punkten. Punkte-Formel des Managers:
//    PTS + REB + 1,5·AST + 2·STL + 2·BLK − 2·TOV − 0,5·(FGA−FGM) − 0,5·(FTA−FTM) − 0,5·PF
//
//  Projektion (FP/G) pro Spieler:
//   1. Spieler mit MFHFB-Projection (sport:live-projections, sonst
//      sport:projections-consensus): Formel direkt auf die Pro-Spiel-Werte.
//      Fouls fehlen in den Projections → PF/Min je Position, kalibriert an
//      den echten Manager-FP 2025-26 (G 0,061 · F 0,072 · C 0,101).
//      Live-Projections blenden ab Saisonstart die echten Stats ein.
//   2. Sonst: echte Manager-FP/Min aus den basketball.de-Profilen
//      (25-26 voll, 24-25 halb, 150 Phantom-Minuten Richtung 0,55).
//   Minuten pro Spieler überschreibbar (FP/G skaliert pro Minute).
//   Verfügbarkeit = Consensus-Spiele/82, Verletzungs-Seed (Stand 18.10.)
//   oder eigener Wert.
//
//  Daten: leagues/usm/data/usm-base.js (Gehälter + Manager-FP, Stand
//  18.10.2026). Wöchentliche Gehälter per Bookmarklet (Seite „Import“),
//  gespeichert im Browser unter mfhfb:usm:*.
// ============================================================
(function () {
  const BUDGET = 63.0, ROSTER = 15, MINPOS = { G: 5, F: 5, C: 2 }, TRADE_COST = 1.5;
  const PF_PER_MIN = { G: 0.061, F: 0.072, C: 0.101 };
  const PRIOR_FPM = 0.55, PRIOR_MIN = 150, PHANTOM_GAMES = 15;
  const SEASON_START = new Date('2026-10-20'), SEASON_END = new Date('2027-04-11');
  const DATES = [
    { label: '📋 Anmeldeschluss', iso: '2026-10-20T20:30:00+02:00' },
    { label: '🆘 Helpside Trade', iso: '2026-11-01T22:00:00+01:00' },
    { label: '🔁 Trade-Phase + 1. Gehalts-Update', iso: '2026-11-15T22:00:00+01:00' },
  ];
  const TEAM_ABBR = {
    'Atlanta Hawks': 'ATL', 'Boston Celtics': 'BOS', 'Brooklyn Nets': 'BKN', 'Charlotte Hornets': 'CHA', 'Chicago Bulls': 'CHI',
    'Cleveland Cavaliers': 'CLE', 'Dallas Mavericks': 'DAL', 'Denver Nuggets': 'DEN', 'Detroit Pistons': 'DET', 'Golden State Warriors': 'GSW',
    'Houston Rockets': 'HOU', 'Indiana Pacers': 'IND', 'Los Angeles Clippers': 'LAC', 'Los Angeles Lakers': 'LAL', 'Memphis Grizzlies': 'MEM',
    'Miami Heat': 'MIA', 'Milwaukee Bucks': 'MIL', 'Minnesota Timberwolves': 'MIN', 'New Orleans Pelicans': 'NOP', 'New York Knicks': 'NYK',
    'Oklahoma City Thunder': 'OKC', 'Orlando Magic': 'ORL', 'Philadelphia 76ers': 'PHI', 'Phoenix Suns': 'PHX', 'Portland Trail Blazers': 'POR',
    'Sacramento Kings': 'SAC', 'San Antonio Spurs': 'SAS', 'Toronto Raptors': 'TOR', 'Utah Jazz': 'UTA', 'Washington Wizards': 'WAS', 'Free Agents': 'FA',
  };
  // basketball.de-Name → Projections-Name, wo die Normalisierung nicht reicht
  const NAME_FIX = { 'gregory jackson': 'gg jackson', 'elijah harkless': 'ej harkless', 'nahshon hyland': 'bones hyland', 'maleek thomas': 'meleek thomas' };
  // Verletzungs-Seed (Stand 18.10.2026): [Verfügbarkeit im Trade-Lock bis 15.11., Label]
  const STATUS = {
    'moses moody': [0, 'Out'], 'jimmy butler': [0, 'Out'], 'kristaps porzingis': [0, 'Out'], 'shaedon sharpe': [0, 'Out'],
    'mark williams': [0, 'Out'], 'max strus': [0, 'Out'], 'bradley beal': [0, 'Out'], 'brandon ingram': [0, 'Out'],
    'donte divincenzo': [0, 'Out'], 'santi aldama': [0, 'Out'], 'dereck lively': [0, 'Out'], 'johnny furphy': [0, 'Out'],
    'julian strawther': [0, 'Out'], 'noah penda': [0, 'Out'], 'jordan miller': [0, 'Out'], 'mouhamed gueye': [0, 'Out'],
    'henri veesaar': [0, 'Out'], 'ariel hukporti': [0, 'Out'], 'jamir watkins': [0, 'Out'], 'otega oweh': [0, 'Out'],
    'tristan vukcevic': [0, 'Out'], 'jusuf nurkic': [0.3, 'Out ~4 Wo.'], 'dominick barlow': [0.3, 'Out'],
    'isaiah stewart': [0.5, 'Out ~2 Wo.'], 'dru smith': [0.5, 'Out ~2 Wo.'], 'tacko fall': [0.5, 'Out ~2 Wo.'],
    'spencer jones': [0.5, 'fraglich'], 'nicolas claxton': [0.55, 'Hamstring'], 'maxime raynaud': [0.6, 'Out 5-6 Sp.'],
    'dylan cardwell': [0.6, 'Out 5-6 Sp.'], 'grant williams': [0.6, 'Hamstring'], 'kyrie irving': [0.7, 'Comeback'],
    'damian lillard': [0.75, 'Comeback'], 'coby white': [0.75, 'Wade'], 'dejounte murray': [0.8, 'Zeh'],
    'kon knueppel': [0.85, 'Hamstring'], 'aj dybantsa': [0.85, 'Knöchel'], 'tobias harris': [0.85, 'Wade'],
    'adem bona': [0.85, 'Fuß'], 'tyrese haliburton': [0.85, 'Comeback'], 'franz wagner': [0.9, 'Schulter'], 'anthony black': [0.9, 'Knöchel'],
  };

  const e = s => MFHFB.ui.esc(s);
  const f1 = (x, d = 1) => (x == null || !isFinite(x)) ? '–' : Number(x).toFixed(d);
  const sum = (a, fn) => a.reduce((s, x) => s + fn(x), 0);
  const fmtDate = d => { const [y, m, dd] = d.split('-'); return `${dd}.${m}.${y}`; };
  const flip = n => { const i = n.indexOf(','); return i < 0 ? n.trim() : n.slice(i + 1).trim() + ' ' + n.slice(0, i).trim(); };
  const nkey = raw => { const k = MFHFB.nba.key(raw); return NAME_FIX[k] || k; };
  const squash = k => String(k).replace(/[^a-z]/g, '');
  const valueStyle = v => { const t = Math.max(0, Math.min(1, (v - 2) / 2.5)); return `color:hsl(${Math.round(t * 140)},62%,48%)`; };

  // ---------------- Speicher (mfhfb:usm:*) ----------------
  const S = {
    snaps: st => { const l = st.getJSON('snapshots', []); return Array.isArray(l) ? l : []; },
    ovr: st => st.getJSON('overrides', {}) || {},
    draft: st => st.getJSON('draft', []) || [],
    team: st => st.getJSON('team', null),
  };

  // ---------------- Pool ----------------
  function allSnapshots(data, st) {
    const base = { date: data.USM_BASE.date, base: true, players: data.USM_BASE.players.map(p => [p[0], p[1], p[2], p[3], p[4], 0, 0]) };
    const own = S.snaps(st);
    const all = own.some(s => s.date === base.date) ? own.slice() : [base, ...own];
    return all.sort((a, b) => a.date.localeCompare(b.date));
  }

  function buildPool(data, st) {
    MFHFB.nba.init(data);
    const snaps = allSnapshots(data, st);
    const cur = snaps[snaps.length - 1], prev = snaps.length > 1 ? snaps[snaps.length - 2] : null;
    const salMap = s => new Map(s.players.map(p => [squash(nkey(flip(p[0]))), p[3]]));
    const prevSal = prev ? salMap(prev) : new Map(), firstSal = salMap(snaps[0]);
    const base = new Map();
    data.USM_BASE.players.forEach(p => { const k = squash(nkey(flip(p[0]))); if (!base.has(k) || base.get(k)[1] === 'Free Agents') base.set(k, p); });
    const projIdx = obj => { const m = new Map(); Object.entries(obj || {}).forEach(([n, p]) => m.set(squash(nkey(n)), p)); return m; };
    const live = projIdx(data.LIVE_PROJECTIONS), cons = projIdx(data.PROJECTIONS_CONSENSUS);
    const ovr = S.ovr(st);

    const out = new Map();
    for (const row of cur.players) {
      const [name, team, pos, sal, rookie, fpAct, fpgAct] = row;
      const short = flip(name), k = squash(nkey(short));
      if (out.has(k) && team === 'Free Agents') continue;
      const b = base.get(k), s25 = b && b[5], s26 = b && b[6];
      const P = live.get(k) || cons.get(k), C = cons.get(k);
      const o = ovr[k] || {};
      const pfm = PF_PER_MIN[pos] || 0.07;

      let fpm = null, src = '', baseMin = 0;
      if (P && P.min > 0) {
        const fp = P.pts + P.reb + 1.5 * P.ast + 2 * P.stl + 2 * P.blk - 2 * (P.tov || 0)
          - 0.5 * ((P.fga || 0) - (P.fgm || 0)) - 0.5 * ((P.fta || 0) - (P.ftm || 0)) - 0.5 * pfm * P.min;
        fpm = fp / P.min; baseMin = P.min; src = 'proj';
      } else {
        const MN = (s26 ? s26[1] : 0) + 0.5 * (s25 ? s25[1] : 0);
        if (MN > 0) {
          const FP = (s26 ? s26[2] : 0) + 0.5 * (s25 ? s25[2] : 0);
          fpm = (FP + PRIOR_FPM * PRIOR_MIN) / (MN + PRIOR_MIN); src = 'hist';
          // Steht der Spieler mit 0 Minuten in den Projections, gilt das (bewusst nicht eingeplant)
          baseMin = P ? 0 : (s26 && s26[0] > 0 ? 0.9 * s26[1] / s26[0] : 0);
        } else { fpm = 0.45; src = 'est'; }
      }
      const min = (o.min != null) ? +o.min : baseMin;

      // Verfügbarkeit
      let av = 0.9, status = '';
      if (C && C.g) av = Math.max(0.55, Math.min(0.97, C.g / 82));
      else {
        const rot = [s26, s25].filter(s => s && s[0] > 0 && s[1] / s[0] >= 24);
        if (rot.length) av = Math.max(0.6, Math.min(0.95, sum(rot, s => s[0]) / (rot.length * 80)));
        if (rookie) av = Math.min(av, 0.88);
      }
      const sd = STATUS[MFHFB.nba.key(short)];
      if (sd) { av = Math.min(av, sd[0]); status = sd[1]; }
      if (o.av != null) av = +o.av;

      let fpg = fpm * min, gp = 0;
      if (fpgAct > 0 && fpAct > 0) gp = Math.round(fpAct / fpgAct);
      // Live-Projections enthalten die echten Spiele schon; nur ohne Projection selbst einblenden
      if (gp && src !== 'proj') fpg = (fpg * PHANTOM_GAMES + fpgAct * gp) / (PHANTOM_GAMES + gp);
      const ev = fpg * av;
      out.set(k, {
        key: k, name, short, team, abbr: TEAM_ABBR[team] || team, pos, sal, c: Math.round(sal * 100), rookie: !!rookie,
        fpm, src, min, minSet: o.min != null, av, avSet: o.av != null, status, fpg, ev, value: sal > 0 ? ev / sal : 0,
        gp, fpgAct: fpgAct || 0, prevSal: prevSal.has(k) ? prevSal.get(k) : null, firstSal: firstSal.has(k) ? firstSal.get(k) : null,
        fp26: s26 && s26[0] ? s26[2] / s26[0] : null,
      });
    }
    return { players: [...out.values()], byKey: out, date: cur.date, snapshots: snaps };
  }

  // ---------------- Optimierer (exakter Knapsack je Position) ----------------
  function prune(list, K) {
    const sorted = list.slice().sort((a, b) => a.c - b.c || b.ev - a.ev), keep = [];
    for (const p of sorted) {
      let d = 0;
      for (const q of keep) if (q.c <= p.c && q.ev >= p.ev && ++d >= K) break;
      if (d < K) keep.push(p);
    }
    return keep;
  }
  function knap(list, K, B) {
    const best = [];
    for (let k = 0; k <= K; k++) best.push(new Float64Array(B + 1).fill(-1e9));
    best[0][0] = 0;
    const take = [];
    for (const it of list) {
      const c = it.c, v = it.ev, t = new Uint8Array((K + 1) * (B + 1));
      for (let k = K; k >= 1; k--) {
        const cur = best[k], prv = best[k - 1];
        for (let b = B; b >= c; b--) { const nv = prv[b - c] + v; if (nv > cur[b]) { cur[b] = nv; t[k * (B + 1) + b] = 1; } }
      }
      take.push(t);
    }
    return { best, take, list, B };
  }
  function recon(D, k, b) {
    const r = [];
    for (let i = D.list.length - 1; i >= 0 && k > 0; i--) if (D.take[i][k * (D.B + 1) + b]) { r.push(D.list[i]); b -= D.list[i].c; k--; }
    return r;
  }
  function pmax(arr) {
    const v = new Float64Array(arr.length), ix = new Int32Array(arr.length);
    let m = -1e9, mi = -1;
    for (let b = 0; b < arr.length; b++) { if (arr[b] > m) { m = arr[b]; mi = b; } v[b] = m; ix[b] = mi; }
    return { v, ix };
  }
  function optimizeFill(pool, locked, opts) {
    const keys = new Set(locked.map(p => p.key));
    const B = Math.round(BUDGET * 100) - sum(locked, p => p.c), open = ROSTER - locked.length;
    if (open <= 0) return { add: [], total: 0, cost: 0 };
    if (B < 0) return null;
    const have = { G: 0, F: 0, C: 0 }; locked.forEach(p => have[p.pos]++);
    const need = { G: Math.max(0, MINPOS.G - have.G), F: Math.max(0, MINPOS.F - have.F), C: Math.max(0, MINPOS.C - have.C) };
    if (need.G + need.F + need.C > open) return null;
    const cand = pool.filter(p => !keys.has(p.key) && p.team !== 'Free Agents' && p.ev > 0 && p.min >= opts.minMin
      && p.src !== 'est' && !(opts.noRookies && p.rookie));
    const D = {};
    ['G', 'F', 'C'].forEach(pos => { D[pos] = knap(prune(cand.filter(p => p.pos === pos), open), open, B); });
    let bt = -1e9, bs = null;
    for (let g = need.G; g <= open; g++) for (let f = need.F; f <= open - g; f++) {
      const c = open - g - f; if (c < need.C) continue;
      const G = pmax(D.G.best[g]), F = pmax(D.F.best[f]), Cc = pmax(D.C.best[c]);
      for (let bc = 0; bc <= B; bc++) {
        if (Cc.v[bc] < -1e8 || (bc > 0 && Cc.v[bc] === Cc.v[bc - 1])) continue;
        const rem = B - bc;
        for (let bg = 0; bg <= rem; bg++) {
          if (G.v[bg] < -1e8 || (bg > 0 && G.v[bg] === G.v[bg - 1])) continue;
          const fv = F.v[rem - bg]; if (fv < -1e8) continue;
          const t = Cc.v[bc] + G.v[bg] + fv;
          if (t > bt) { bt = t; bs = { g, f, c, bg: G.ix[bg], bf: F.ix[rem - bg], bc: Cc.ix[bc] }; }
        }
      }
    }
    if (!bs) return null;
    const add = [...recon(D.G, bs.g, bs.bg), ...recon(D.F, bs.f, bs.bf), ...recon(D.C, bs.c, bs.bc)].sort((a, b) => b.sal - a.sal);
    return { add, total: bt, cost: sum(add, p => p.c) / 100 };
  }
  function feasible(ps) {
    const h = { G: 0, F: 0, C: 0 }; ps.forEach(p => h[p.pos]++);
    const open = ROSTER - ps.length;
    return open >= 0 && Math.max(0, 5 - h.G) + Math.max(0, 5 - h.F) + Math.max(0, 2 - h.C) <= open;
  }
  function validFull(ps) { const h = { G: 0, F: 0, C: 0 }; ps.forEach(p => h[p.pos]++); return h.G >= 5 && h.F >= 5 && h.C >= 2; }

  // ---------------- Trade-Finder ----------------
  function findTrades(pool, team, cash, minMin) {
    const tk = new Set(team.map(p => p.key));
    const cand = pool.filter(p => !tk.has(p.key) && p.team !== 'Free Agents' && p.ev > 0 && p.min >= minMin && p.src !== 'est');
    const singles = [];
    for (const out of team) {
      const avail = cash + out.sal, rest = team.filter(p => p !== out);
      for (const inn of cand) {
        if (inn.sal > avail + 1e-9) continue;
        const gain = inn.ev - out.ev;
        if (gain <= 0.05) continue;
        if (inn.pos !== out.pos && !validFull([...rest, inn])) continue;
        singles.push({ out: [out], in: [inn], gain, cashAfter: avail - inn.sal });
      }
    }
    singles.sort((a, b) => b.gain - a.gain);
    const cnt = new Map(), s1 = [];
    for (const t of singles) { const n = cnt.get(t.out[0].key) || 0; if (n < 3) { cnt.set(t.out[0].key, n + 1); s1.push(t); } if (s1.length >= 20) break; }
    const top = cand.slice().sort((a, b) => b.ev - a.ev).slice(0, 160), doubles = [];
    for (let i = 0; i < team.length; i++) for (let j = i + 1; j < team.length; j++) {
      const o1 = team[i], o2 = team[j], avail = cash + o1.sal + o2.sal, rest = team.filter(p => p !== o1 && p !== o2), oev = o1.ev + o2.ev;
      let best = null;
      for (let a = 0; a < top.length; a++) {
        const x = top[a]; if (x.sal >= avail) continue;
        for (let b = a + 1; b < top.length; b++) {
          const y = top[b];
          if (x.sal + y.sal > avail + 1e-9) continue;
          const gain = x.ev + y.ev - oev;
          if (best && gain <= best.gain) continue;
          if (!validFull([...rest, x, y])) continue;
          best = { out: [o1, o2], in: [x, y], gain, cashAfter: avail - x.sal - y.sal };
        }
      }
      if (best && best.gain > 0.05) doubles.push(best);
    }
    doubles.sort((a, b) => b.gain - a.gain);
    return { singles: s1, doubles: doubles.slice(0, 15) };
  }

  // ---------------- Bausteine ----------------
  function tags(p) {
    let t = '';
    if (p.rookie) t += '<span class="usm-tag r">R</span>';
    if (p.status) t += `<span class="usm-tag ${p.av <= 0.5 ? 'inj' : 'q'}">${e(p.status)}</span>`;
    if (p.src === 'est') t += '<span class="usm-tag est">geschätzt</span>';
    else if (p.src === 'hist') t += '<span class="usm-tag est" title="Keine MFHFB-Projection – Werte aus den basketball.de-FP der Vorjahre">ohne Proj.</span>';
    return t;
  }
  const head = (title, sub) => `<div class="page-head"><h1 class="page-title display">${title}</h1><div class="page-sub">${sub}</div></div>`;
  const stat = (label, val, cls) => `<div class="stat"><div class="stat-label">${label}</div><div class="stat-value display usm-sv ${cls || ''}">${val}</div></div>`;
  const srcLabel = { proj: 'MFHFB-Projection', hist: 'basketball.de-FP Vorjahre', est: 'geschätzt' };
  const remainingGames = () => 82 * Math.max(0, Math.min(1, (SEASON_END - Math.max(new Date(), SEASON_START)) / (SEASON_END - SEASON_START)));
  const DATA = ['usm-base', '?sport:aliases', '?sport:live-projections', '?sport:projections-consensus'];

  // ======================= DRAFT & VALUE =======================
  MFHFB.pages.register({
    id: 'usmdraft', section: 'draft', label: 'Draft & Value', icon: '💶', applies: { sport: ['nba'] },
    when: l => l.key === 'usm', data: DATA,
    render() {
      return head('Draft &amp; Value', 'Value-Board und Kader-Builder: Spieler antippen, „Optimal auffüllen“ rechnet den besten Rest unter Budget und Positionsregeln.')
        + MFHFB.ui.countdowns(DATES.map(d => ({ label: d.label, at: new Date(d.iso) })).filter(d => d.at > new Date()).slice(0, 1))
        + `<div class="usm-stats" id="usmStats"></div>
        <div class="usm-grid">
          <div class="usm-side">
            <section class="card">
              <div class="card-head"><h2>Mein Draft-Kader</h2><span class="muted usm-small" id="usmCount"></span></div>
              <div class="usm-pad">
                <div id="usmRoster"></div>
                <div class="usm-actions">
                  <button class="usm-btn primary" id="usmFill">Optimal auffüllen</button>
                  <button class="usm-btn" id="usmClear">Leeren</button>
                  <button class="usm-btn" id="usmToTeam">Als „Mein Team“ speichern</button>
                </div>
                <div class="usm-opts">
                  <label>Min. Minuten <input type="number" id="usmMinMin" value="14" min="0" max="40"></label>
                  <label><input type="checkbox" id="usmNoRk"> ohne weitere Rookies</label>
                </div>
                <div class="usm-actions">
                  <button class="usm-btn" id="usmExp">Kader-Code kopieren</button>
                  <button class="usm-btn" id="usmImpCode">Code einfügen</button>
                </div>
                <div id="usmXfer"></div>
                <div id="usmFillBox"></div>
              </div>
            </section>
            <section class="card">
              <div class="card-head"><h2>Best Value für offene Slots</h2></div>
              <div class="usm-pad"><p class="explain">Nur Spieler, die ins Restbudget passen (0,5 Mio Minimum je weiterem Slot) und die Positionsregeln erfüllbar lassen. Sortiert nach FP pro Mio. Antippen = hinzufügen.</p><div id="usmSugg"></div></div>
            </section>
          </div>
          <section class="card usm-main">
            <div class="usm-pad">
              <div class="usm-filters">
                <input type="search" class="usm-input" id="usmSearch" placeholder="Spieler oder Team suchen…">
                <div class="seg" id="usmPos"><button class="seg-btn active" data-pos="ALL">Alle</button><button class="seg-btn" data-pos="G">G</button><button class="seg-btn" data-pos="F">F</button><button class="seg-btn" data-pos="C">C</button></div>
              </div>
              <div class="usm-opts">
                <label><input type="checkbox" id="usmAff"> nur leistbar</label>
                <label><input type="checkbox" id="usmFA" checked> ohne Free Agents</label>
                <label><input type="checkbox" id="usmRk"> nur Rookies</label>
                <label>ab <input type="number" id="usmMinF" value="14" min="0" max="40"> Min.</label>
              </div>
            </div>
            <div class="usm-tbl"><table class="table compact usm-table" id="usmTable"></table></div>
            <div class="usm-more" id="usmMore"></div>
          </section>
        </div>
        <p class="muted usm-foot">Projektion = MFHFB-Projection (Live/Consensus) in Manager-Punkten, Fouls je Position geschätzt; ohne Projection: echte basketball.de-FP pro Minute der Vorjahre. EV = FP/G × Verfügbarkeit. Minuten und Verfügbarkeit in der Tabelle überschreibbar. Verletzungsstatus Stand 18.10.2026.</p>`;
    },
    mount(root, ctx) {
      MFHFB.ui.mountCountdowns(root);
      const st = ctx.store, $ = id => root.querySelector('#' + id);
      let pool = buildPool(ctx.data, st), draft = S.draft(st).filter(k => pool.byKey.has(k)), fill = null;
      const view = { pos: 'ALL', sort: 'value', dir: -1, limit: 150 };
      const save = () => st.setJSON('draft', draft);

      const state = () => {
        const ps = draft.map(k => pool.byKey.get(k)).filter(Boolean);
        const used = sum(ps, p => p.sal), cnt = { G: 0, F: 0, C: 0 }; ps.forEach(p => cnt[p.pos]++);
        return { ps, used, rest: BUDGET - used, cnt, open: ROSTER - ps.length, ev: sum(ps, p => p.ev),
          need: { G: Math.max(0, 5 - cnt.G), F: Math.max(0, 5 - cnt.F), C: Math.max(0, 2 - cnt.C) } };
      };
      const canAdd = (p, s) => s.open > 0 && feasible([...s.ps, p]) && p.sal <= s.rest - 0.5 * (s.open - 1) + 1e-9;
      const toggle = k => {
        const i = draft.indexOf(k);
        if (i >= 0) draft.splice(i, 1);
        else { if (draft.length >= ROSTER) return alert('Kader ist voll (15).'); draft.push(k); }
        fill = null; save(); paint();
      };

      function paint() {
        const s = state();
        const restCls = s.rest < -1e-9 ? 'down' : (s.open > 0 && s.rest < 0.5 * s.open ? 'warn' : 'up');
        $('usmStats').innerHTML = `<div class="stat-row usm-row">
          ${stat('Rest', `<span class="${restCls}">${f1(s.rest, 2)}</span>`)}${stat('Verplant', f1(s.used, 2))}${stat('Kader', s.ps.length + '/15')}
          ${stat('G / F / C', `${s.cnt.G}/${s.cnt.F}/${s.cnt.C}`)}${stat('FP/G (EV)', f1(s.ev))}</div>`;
        $('usmCount').textContent = `${s.ps.length}/15 · ${f1(s.used, 2)} Mio`;

        const grp = { G: 'Guards', F: 'Forwards', C: 'Center' };
        $('usmRoster').innerHTML = s.ps.length ? ['G', 'F', 'C'].map(pos => {
          const l = s.ps.filter(p => p.pos === pos).sort((a, b) => b.sal - a.sal);
          return `<div class="usm-group"><div class="usm-gh"><span>${grp[pos]} ${l.length}/${MINPOS[pos]}</span><span>${f1(sum(l, p => p.sal), 2)} Mio</span></div>
            ${l.map(p => `<div class="usm-r"><span class="usm-n">${e(p.short)}${tags(p)}</span><span class="usm-m">${p.abbr} · ${f1(p.sal, 2)} · ${f1(p.ev)}</span><button class="usm-x" data-del="${e(p.key)}" aria-label="Entfernen">×</button></div>`).join('')}</div>`;
        }).join('') : '<div class="muted usm-small">Noch keine Spieler. In der Tabelle auf ＋ tippen.</div>';

        if (fill) {
          $('usmFillBox').innerHTML = !fill.add ? '<div class="usm-fill"><span class="down">Keine gültige Auffüllung – Budget oder Positionen passen nicht.</span></div>'
            : `<div class="usm-fill"><div class="usm-gh"><span>Vorschlag: +${fill.add.length} · ${f1(fill.cost, 2)} Mio</span><span>Team ≈ ${f1(s.ev + fill.total)} FP/G</span></div>
              ${fill.add.map(p => `<div class="usm-r"><span class="usm-n">${p.pos} · ${e(p.short)}${tags(p)}</span><span class="usm-m">${p.abbr} · ${f1(p.sal, 2)} · ${Math.round(p.min)}m · ${f1(p.ev)}</span></div>`).join('')}
              <div class="usm-actions"><button class="usm-btn primary" data-fill="apply">Übernehmen</button><button class="usm-btn" data-fill="close">Verwerfen</button></div></div>`;
        } else $('usmFillBox').innerHTML = '';

        const mm = +$('usmMinMin').value || 0;
        $('usmSugg').innerHTML = s.open <= 0 ? '<div class="muted usm-small">Kader komplett.</div>' : ['G', 'F', 'C'].map(pos => {
          const l = pool.players.filter(p => p.pos === pos && !draft.includes(p.key) && p.team !== 'Free Agents' && p.ev > 0 && p.min >= mm && p.src !== 'est' && canAdd(p, s))
            .sort((a, b) => b.value - a.value).slice(0, 6);
          return `<div class="usm-group"><div class="usm-gh"><span>${grp[pos]}${s.need[pos] ? ` · noch ${s.need[pos]} Pflicht` : ' · Flex'}</span><span>FP/Mio</span></div>
            ${l.length ? l.map(p => `<div class="usm-r usm-sug" data-add="${e(p.key)}"><span class="usm-n">${e(p.short)}${tags(p)}</span><span class="usm-m">${p.abbr} · ${f1(p.sal, 2)} · ${Math.round(p.min)}m · ${f1(p.ev)} · <b style="${valueStyle(p.value)}">${f1(p.value)}</b></span></div>`).join('')
              : '<div class="muted usm-small">Kein Spieler passt.</div>'}</div>`;
        }).join('');
        table(s);
      }

      const COLS = [['', 'l', null], ['Spieler', 'l', 'short'], ['Team', 'l', 'abbr'], ['Pos', 'l', 'pos'], ['Gehalt', 'num', 'sal'], ['Min', 'num', 'min'],
        ['FP/G', 'num', 'fpg'], ['Verf.', 'num', 'av'], ['EV', 'num', 'ev'], ['FP/Mio', 'num', 'value'], ['FP/G 25-26', 'num', 'fp26']];
      function table(s) {
        const q = $('usmSearch').value.trim().toLowerCase(), minF = +$('usmMinF').value || 0;
        let l = pool.players.filter(p => (view.pos === 'ALL' || p.pos === view.pos) && (!$('usmFA').checked || p.team !== 'Free Agents')
          && (!$('usmRk').checked || p.rookie) && (p.min >= minF || draft.includes(p.key))
          && (!q || p.short.toLowerCase().includes(q) || p.team.toLowerCase().includes(q) || p.abbr.toLowerCase() === q));
        if ($('usmAff').checked) l = l.filter(p => draft.includes(p.key) || canAdd(p, s));
        const k = view.sort;
        l.sort((a, b) => typeof a[k] === 'string' ? view.dir * a[k].localeCompare(b[k]) : view.dir * ((a[k] ?? -1) - (b[k] ?? -1)));
        const total = l.length; l = l.slice(0, view.limit);
        $('usmTable').innerHTML = `<thead><tr>${COLS.map(([t, c, key]) => `<th class="${c === 'num' ? 'num' : ''}${key ? ' th-sort' : ''}${view.sort === key ? ' usm-sorted' : ''}" ${key ? `data-sort="${key}"` : ''}>${t}${view.sort === key ? (view.dir < 0 ? ' ↓' : ' ↑') : ''}</th>`).join('')}</tr></thead><tbody>`
          + l.map(p => {
            const on = draft.includes(p.key), aff = on || canAdd(p, s);
            return `<tr class="${on ? 'usm-on' : ''}${aff ? '' : ' usm-unaff'}">
              <td><button class="usm-pick${on ? ' on' : ''}" data-toggle="${e(p.key)}" aria-label="${on ? 'Entfernen' : 'Hinzufügen'}">${on ? '✓' : '＋'}</button></td>
              <td class="strong usm-name">${e(p.short)}${tags(p)}</td><td>${p.abbr}</td><td>${p.pos}</td>
              <td class="num">${f1(p.sal, 2)}</td>
              <td class="num"><input class="usm-ovr${p.minSet ? ' set' : ''}" type="number" min="0" max="48" step="1" value="${Math.round(p.min)}" data-ovr="min" data-key="${e(p.key)}" title="Quelle: ${srcLabel[p.src]}"></td>
              <td class="num">${f1(p.fpg)}</td>
              <td class="num"><input class="usm-ovr${p.avSet ? ' set' : ''}" type="number" min="0" max="100" step="5" value="${Math.round(p.av * 100)}" data-ovr="av" data-key="${e(p.key)}" title="Verfügbarkeit in %"></td>
              <td class="num">${f1(p.ev)}</td><td class="num strong" style="${valueStyle(p.value)}">${f1(p.value)}</td>
              <td class="num muted">${f1(p.fp26)}</td></tr>`;
          }).join('') + '</tbody>';
        $('usmMore').innerHTML = total > view.limit ? `<button class="usm-btn" data-more>Mehr anzeigen (${total - view.limit} weitere)</button>` : `<span class="muted usm-small">${total} Spieler</span>`;
      }

      root.addEventListener('click', ev => {
        const t = ev.target.closest('[data-toggle],[data-del],[data-add],[data-sort],[data-pos],[data-more],[data-fill]');
        if (!t) return;
        if (t.dataset.toggle) return toggle(t.dataset.toggle);
        if (t.dataset.del) return toggle(t.dataset.del);
        if (t.dataset.add) return toggle(t.dataset.add);
        if (t.dataset.sort) { if (view.sort === t.dataset.sort) view.dir *= -1; else { view.sort = t.dataset.sort; view.dir = ['short', 'abbr', 'pos'].includes(view.sort) ? 1 : -1; } return table(state()); }
        if (t.dataset.pos) { view.pos = t.dataset.pos; root.querySelectorAll('#usmPos .seg-btn').forEach(b => b.classList.toggle('active', b === t)); view.limit = 150; return table(state()); }
        if (t.hasAttribute('data-more')) { view.limit += 150; return table(state()); }
        if (t.dataset.fill === 'apply' && fill && fill.add) { draft.push(...fill.add.map(p => p.key)); save(); }
        if (t.dataset.fill) { fill = null; paint(); }
      });
      root.addEventListener('change', ev => {
        const t = ev.target;
        if (t.dataset && t.dataset.ovr) {
          const o = S.ovr(st), cur = o[t.dataset.key] || {}, v = t.value === '' ? null : +t.value;
          if (t.dataset.ovr === 'min') { if (v == null) delete cur.min; else cur.min = v; }
          else { if (v == null) delete cur.av; else cur.av = Math.max(0, Math.min(100, v)) / 100; }
          if (Object.keys(cur).length) o[t.dataset.key] = cur; else delete o[t.dataset.key];
          st.setJSON('overrides', o); pool = buildPool(ctx.data, st); fill = null; paint();
        } else if (['usmAff', 'usmFA', 'usmRk'].includes(t.id)) { view.limit = 150; table(state()); }
        else if (t.id === 'usmMinMin') { fill = null; paint(); }
      });
      ['usmSearch', 'usmMinF'].forEach(id => $(id).addEventListener('input', () => { view.limit = 150; table(state()); }));
      // Kader + eigene Werte zwischen Geräten übertragen (gleiches Format wie die Claude-Seite: "USM1.<base64>")
      const xfer = h => { $('usmXfer').innerHTML = h ? `<div class="usm-xfer">${h}</div>` : ''; };
      $('usmExp').addEventListener('click', () => {
        const code = 'USM1.' + btoa(unescape(encodeURIComponent(JSON.stringify({ d: draft.map(k => pool.byKey.get(k).short), o: Object.fromEntries(Object.entries(S.ovr(st)).map(([k, v]) => [(pool.byKey.get(k) || {}).short || k, v])) }))));
        const show = () => { xfer(`<span>Code markiert – kopieren und auf dem anderen Gerät einfügen:</span><textarea class="usm-input usm-ta" id="usmXCode" readonly>${e(code)}</textarea>`); $('usmXCode').select(); };
        if (navigator.clipboard) navigator.clipboard.writeText(code).then(() => xfer(`<span class="up">Kopiert ✓ (${draft.length} Spieler). Auf dem anderen Gerät „Code einfügen“.</span>`)).catch(show); else show();
      });
      $('usmImpCode').addEventListener('click', () => {
        xfer('<textarea class="usm-input usm-ta" id="usmXIn" placeholder="USM1.…"></textarea><div class="usm-actions"><button class="usm-btn primary" id="usmXApply">Übernehmen</button><button class="usm-btn" id="usmXCancel">Abbrechen</button></div><span class="muted">Ersetzt Draft-Kader und eigene Minuten/Verfügbarkeiten auf diesem Gerät.</span>');
        $('usmXCancel').addEventListener('click', () => xfer(''));
        $('usmXApply').addEventListener('click', () => {
          try {
            const o = JSON.parse(decodeURIComponent(escape(atob($('usmXIn').value.trim().replace(/^USM1\./, '')))));
            if (!o || !Array.isArray(o.d)) throw new Error();
            const byShort = new Map(pool.players.map(p => [p.short, p.key]));
            const keys = o.d.map(n => byShort.get(n)).filter(Boolean).slice(0, ROSTER);
            const ov = {}; Object.entries(o.o || {}).forEach(([n, v]) => { const k = byShort.get(n); if (k) ov[k] = v; });
            draft = keys; save(); st.setJSON('overrides', ov); pool = buildPool(ctx.data, st); fill = null; paint();
            xfer(`<span class="up">Übernommen ✓ ${keys.length} Spieler${o.d.length > keys.length ? ` (${o.d.length - keys.length} unbekannt)` : ''}.</span>`);
          } catch (err) { xfer('<span class="down">Code nicht lesbar – bitte komplett kopieren (beginnt mit USM1.).</span>'); }
        });
      });
      $('usmClear').addEventListener('click', () => { if (draft.length && !confirm('Draft-Kader leeren?')) return; draft = []; fill = null; save(); paint(); });
      $('usmFill').addEventListener('click', () => {
        const s = state(); if (s.open <= 0) return alert('Kader ist schon voll.');
        const b = $('usmFill'); b.disabled = true; b.textContent = 'Rechne…';
        setTimeout(() => {
          fill = optimizeFill(pool.players, s.ps, { minMin: +$('usmMinMin').value || 0, noRookies: $('usmNoRk').checked }) || { add: null };
          b.disabled = false; b.textContent = 'Optimal auffüllen'; paint();
        }, 20);
      });
      $('usmToTeam').addEventListener('click', () => {
        const s = state();
        if (s.ps.length !== ROSTER) return alert(`Kader hat ${s.ps.length}/15 Spieler.`);
        if (!validFull(s.ps)) return alert('Positionsregeln nicht erfüllt (5 G / 5 F / 2 C).');
        if (s.rest < -1e-9) return alert('Budget überschritten.');
        if (S.team(st) && !confirm('Bestehendes „Mein Team“ überschreiben?')) return;
        st.setJSON('team', { keys: draft.slice(), cash: +s.rest.toFixed(2) });
        location.hash = ctx.href('usmteam');
      });
      paint();
    },
  });

  // ======================= MEIN TEAM & TRADES =======================
  MFHFB.pages.register({
    id: 'usmteam', section: 'trade', label: 'Mein Team & Trades', icon: '⚖️', applies: { sport: ['nba'] },
    when: l => l.key === 'usm', data: DATA,
    render({ data, store, href }) {
      const pool = buildPool(data, store), team = S.team(store);
      if (!team || !team.keys || !team.keys.length) {
        return head('Mein Team &amp; Trades', 'Teamwert, Gehaltsentwicklung und Trade-Finder.')
          + MFHFB.ui.empty('Noch kein Team gespeichert', 'Unter „Draft & Value“ 15 Spieler wählen und „Als Mein Team speichern“ tippen.', '🧺')
          + `<p style="text-align:center"><a class="usm-btn primary" href="${href('usmdraft')}">Zu Draft &amp; Value →</a></p>`;
      }
      const ps = team.keys.map(k => pool.byKey.get(k)).filter(Boolean), miss = team.keys.length - ps.length;
      const cash = team.cash || 0, salSum = sum(ps, p => p.sal), val = salSum + cash, start = sum(ps, p => p.firstSal ?? p.sal) + cash, dv = val - start;
      const dc = d => d == null ? '–' : `<span class="${d > 0.004 ? 'up' : d < -0.004 ? 'down' : 'muted'}">${d > 0 ? '+' : ''}${f1(d, 2)}</span>`;
      return head('Mein Team &amp; Trades', `Gehälter vom ${fmtDate(pool.date)} · ${pool.snapshots.length} Snapshot${pool.snapshots.length > 1 ? 's' : ''}`)
        + `<div class="stat-row usm-row">${stat('Teamwert', f1(val, 2))}${stat('Δ seit Start', `<span class="${dv >= 0 ? 'up' : 'down'}">${dv >= 0 ? '+' : ''}${f1(dv, 2)}</span>`)}${stat('Gehälter', f1(salSum, 2))}${stat('Restbudget', f1(cash, 2))}${stat('FP/G (EV)', f1(sum(ps, p => p.ev)))}</div>
        <section class="card" data-share="Mein US-Manager-Team">
          <div class="card-head"><h2>Kader</h2><label class="muted usm-small">Restbudget <input type="number" class="usm-ovr usm-cash" id="usmCash" step="0.01" value="${f1(cash, 2)}"></label></div>
          <div class="usm-tbl"><table class="table compact usm-table"><thead><tr><th>Pos</th><th>Spieler</th><th>Team</th><th class="num">Gehalt</th><th class="num">Δ Woche</th><th class="num">Δ Start</th><th class="num">GP</th><th class="num">FP/G real</th><th class="num">FP/G proj</th><th class="num">EV</th><th class="num">FP/Mio</th></tr></thead><tbody>
          ${ps.slice().sort((a, b) => a.pos.localeCompare(b.pos) || b.sal - a.sal).map(p => `<tr><td>${p.pos}</td><td class="strong usm-name">${e(p.short)}${tags(p)}</td><td>${p.abbr}</td>
            <td class="num">${f1(p.sal, 2)}</td><td class="num">${dc(p.prevSal != null ? p.sal - p.prevSal : null)}</td><td class="num">${dc(p.firstSal != null ? p.sal - p.firstSal : null)}</td>
            <td class="num">${p.gp || '–'}</td><td class="num">${p.fpgAct ? f1(p.fpgAct) : '–'}</td><td class="num">${f1(p.fpg)}</td><td class="num">${f1(p.ev)}</td><td class="num strong" style="${valueStyle(p.value)}">${f1(p.value)}</td></tr>`).join('')}
          ${miss ? `<tr><td colspan="11" class="down">${miss} Spieler fehlen im aktuellen Snapshot.</td></tr>` : ''}</tbody></table></div>
        </section>
        <section class="card usm-mt">
          <div class="card-head"><h2>Trade-Finder</h2><span class="usm-opts usm-inline"><label>Min. Minuten <input type="number" id="usmTrMin" value="14" min="0" max="40"></label><button class="usm-btn primary" id="usmTrBtn">Trades suchen</button></span></div>
          <div class="usm-pad"><p class="explain">Δ = Gewinn an erwarteten FP pro Spiel, hochgerechnet auf ca. ${Math.round(remainingGames())} Rest-Spiele. Ein Zusatz-Trade kostet ${TRADE_COST} Mio Budget. „Ausführen“ trägt den Trade nur hier ein – auf basketball.de musst du ihn selbst bestätigen.</p><div id="usmTrOut" class="muted usm-small">„Trades suchen“ antippen.</div></div>
        </section>`;
    },
    mount(root, ctx) {
      const st = ctx.store, team = S.team(st);
      if (!team) return;
      const cashEl = root.querySelector('#usmCash');
      cashEl.addEventListener('change', () => { team.cash = +cashEl.value || 0; st.setJSON('team', team); ctx.refresh(); });
      let last = [];
      root.querySelector('#usmTrBtn').addEventListener('click', ev => {
        const b = ev.currentTarget; b.disabled = true; b.textContent = 'Suche…';
        setTimeout(() => {
          const pool = buildPool(ctx.data, st), ps = team.keys.map(k => pool.byKey.get(k)).filter(Boolean);
          const r = findTrades(pool.players, ps, team.cash || 0, +root.querySelector('#usmTrMin').value || 0);
          last = [...r.singles, ...r.doubles];
          const rg = remainingGames();
          const block = (title, l, off) => `<div class="group-title">${title}</div>` + (l.length ? l.map((t, i) => `<div class="usm-trade">
              <div><div class="usm-lbl">Raus</div>${t.out.map(p => `${p.pos} ${e(p.short)} <span class="usm-m">${f1(p.sal, 2)} · ${f1(p.ev)}</span>`).join('<br>')}</div>
              <div><div class="usm-lbl">Rein</div>${t.in.map(p => `${p.pos} ${e(p.short)}${tags(p)} <span class="usm-m">${p.abbr} · ${f1(p.sal, 2)} · ${f1(p.ev)}</span>`).join('<br>')}</div>
              <div class="usm-gain">+${f1(t.gain)} FP/G<br><span class="usm-m">≈ +${Math.round(t.gain * rg)} Saison · Rest ${f1(t.cashAfter, 2)}</span></div>
              <div><button class="usm-btn" data-apply="${off + i}">Ausführen</button></div></div>`).join('') : '<div class="muted usm-small">Keine Verbesserung gefunden.</div>');
          root.querySelector('#usmTrOut').className = '';
          root.querySelector('#usmTrOut').innerHTML = block('1-für-1', r.singles, 0) + block('2-für-2 (2 Trades)', r.doubles, r.singles.length);
          b.disabled = false; b.textContent = 'Trades suchen';
        }, 20);
      });
      root.addEventListener('click', ev => {
        const t = ev.target.closest('[data-apply]'); if (!t) return;
        const tr = last[+t.dataset.apply]; if (!tr) return;
        if (!confirm(`Trade eintragen?\nRaus: ${tr.out.map(p => p.short).join(', ')}\nRein: ${tr.in.map(p => p.short).join(', ')}\n\nNur hier im Tool – auf basketball.de selbst bestätigen.`)) return;
        const out = new Set(tr.out.map(p => p.key));
        team.keys = team.keys.filter(k => !out.has(k)).concat(tr.in.map(p => p.key));
        team.cash = +tr.cashAfter.toFixed(2);
        st.setJSON('team', team); ctx.refresh();
      });
    },
  });

  // ======================= GEHÄLTER =======================
  MFHFB.pages.register({
    id: 'usmsalary', section: 'players', label: 'Gehälter', icon: '📈', applies: { sport: ['nba'] },
    when: l => l.key === 'usm', data: DATA,
    render({ data, store }) {
      const pool = buildPool(data, store);
      return head('Gehälter', `Aktuell: ${fmtDate(pool.date)} · Gehalts-Updates jeden Sonntag 22:00, erstes am 15.11.2026`)
        + `<section class="card"><div class="card-head"><h2>Snapshots</h2></div><div class="usm-pad">
          ${pool.snapshots.map(s => `<div class="usm-r"><span class="usm-n">${fmtDate(s.date)}${s.base ? ' <span class="usm-tag est">Basis</span>' : ''}</span><span class="usm-m">${s.players.length} Spieler</span>${s.base ? '' : `<button class="usm-x" data-snapdel="${s.date}" aria-label="Löschen">×</button>`}</div>`).join('')}
          ${pool.snapshots.length < 2 ? '<p class="muted usm-small">Veränderungen gibt es ab dem zweiten Snapshot (Import nach dem Update am 15.11.).</p>' : ''}</div></section>
        <section class="card usm-mt"><div class="usm-pad"><div class="usm-filters">
          <input type="search" class="usm-input" id="usmSalQ" placeholder="Spieler suchen…">
          <label class="usm-small"><input type="checkbox" id="usmSalMine"> nur mein Team</label>
          <select class="usm-input usm-sel" id="usmSalSort"><option value="d1">Δ letzte Woche ↓</option><option value="d1a">Δ letzte Woche ↑</option><option value="d0">Δ seit Start ↓</option><option value="sal">Gehalt</option></select>
        </div></div><div class="usm-tbl"><table class="table compact usm-table" id="usmSalTbl"></table></div></section>`;
    },
    mount(root, ctx) {
      const st = ctx.store, pool = buildPool(ctx.data, st), team = S.team(st), mine = new Set(team ? team.keys : []);
      const d1 = p => p.prevSal != null ? p.sal - p.prevSal : 0, d0 = p => p.firstSal != null ? p.sal - p.firstSal : 0;
      const dc = d => `<span class="${d > 0.004 ? 'up' : d < -0.004 ? 'down' : 'muted'}">${d > 0 ? '+' : ''}${f1(d, 2)}</span>`;
      const $ = id => root.querySelector('#' + id);
      function tbl() {
        const q = $('usmSalQ').value.trim().toLowerCase(), s = $('usmSalSort').value;
        let l = pool.players.filter(p => p.team !== 'Free Agents' && (!$('usmSalMine').checked || mine.has(p.key)) && (!q || p.short.toLowerCase().includes(q)));
        l.sort((a, b) => s === 'd1' ? d1(b) - d1(a) : s === 'd1a' ? d1(a) - d1(b) : s === 'd0' ? d0(b) - d0(a) : b.sal - a.sal);
        $('usmSalTbl').innerHTML = `<thead><tr><th>Spieler</th><th>Team</th><th>Pos</th><th class="num">Gehalt</th><th class="num">Vorwoche</th><th class="num">Δ Woche</th><th class="num">Start</th><th class="num">Δ Start</th><th class="num">GP</th><th class="num">FP/G real</th><th class="num">FP/G proj</th></tr></thead><tbody>`
          + l.slice(0, 200).map(p => `<tr><td class="strong usm-name">${e(p.short)}${mine.has(p.key) ? ' <span class="usm-tag r">Team</span>' : ''}</td><td>${p.abbr}</td><td>${p.pos}</td>
            <td class="num">${f1(p.sal, 2)}</td><td class="num">${f1(p.prevSal, 2)}</td><td class="num">${dc(d1(p))}</td><td class="num">${f1(p.firstSal, 2)}</td><td class="num">${dc(d0(p))}</td>
            <td class="num">${p.gp || '–'}</td><td class="num">${p.fpgAct ? f1(p.fpgAct) : '–'}</td><td class="num">${f1(p.fpg)}</td></tr>`).join('') + '</tbody>';
      }
      $('usmSalQ').addEventListener('input', tbl);
      ['usmSalMine', 'usmSalSort'].forEach(id => $(id).addEventListener('change', tbl));
      root.addEventListener('click', ev => {
        const t = ev.target.closest('[data-snapdel]'); if (!t) return;
        if (!confirm('Snapshot vom ' + fmtDate(t.dataset.snapdel) + ' löschen?')) return;
        st.setJSON('snapshots', S.snaps(st).filter(s => s.date !== t.dataset.snapdel)); ctx.refresh();
      });
      tbl();
    },
  });

  // ======================= IMPORT =======================
  const BOOKMARKLET = `(async()=>{try{
if(!/basketball\\.de$/.test(location.hostname)){alert('Bitte auf basketball.de (eingeloggt) ausführen.');return;}
const B='/app/usmanager/top-spieler/?p=';const P=h=>new DOMParser().parseFromString(h,'text/html');
const g=async p=>P(await (await fetch(B+p,{credentials:'include'})).text());
const box=document.createElement('div');box.style.cssText='position:fixed;z-index:2147483647;inset:10px;background:#0b1422;color:#eef1f8;font:14px sans-serif;padding:14px;border-radius:12px;display:flex;flex-direction:column;gap:10px;box-shadow:0 10px 40px #000a';
box.innerHTML='<b>MFHFB HQ · US-Manager Export</b><div id=mfst>Lade Seite 1…</div>';document.body.appendChild(box);const st=box.querySelector('#mfst');
const f=await g(1);let L=1;f.querySelectorAll('a[href*="p="]').forEach(a=>{const m=a.href.match(/[?&]p=(\\d+)/);if(m)L=Math.max(L,+m[1]);});
const out=[];const n=t=>parseFloat(String(t).replace(/,/g,''))||0;
const grab=d=>{const t=d.querySelector('table');if(!t)return 0;let k=0;[...t.rows].slice(1).forEach(r=>{const c=[...r.cells];if(c.length<7)return;out.push([c[0].textContent.trim(),c[1].textContent.trim(),c[3].textContent.trim(),n(c[4].textContent),c[2].innerHTML.trim()?1:0,n(c[5].textContent),n(c[6].textContent)]);k++;});return k;};
if(!grab(f)){st.textContent='Keine Tabelle gefunden – bist du eingeloggt?';return;}
for(let p=2;p<=L;p++){st.textContent='Lade Seite '+p+'/'+L+'…';grab(await g(p));}
const d=new Date();const ds=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const json=JSON.stringify({v:1,date:ds,players:out});
st.textContent=out.length+' Spieler geladen ('+ds+'). Kopieren und im MFHFB HQ unter US-Manager → Import einfügen.';
const ta=document.createElement('textarea');ta.value=json;ta.style.cssText='flex:1;width:100%;background:#111e33;color:#eef1f8;border:1px solid #243759;border-radius:8px;font:11px monospace';box.appendChild(ta);
const row=document.createElement('div');row.style.cssText='display:flex;gap:8px;flex-wrap:wrap';
const btn=(t,fn)=>{const b=document.createElement('button');b.textContent=t;b.style.cssText='background:#e84a0c;color:#fff;border:0;border-radius:8px;padding:10px 14px;font-weight:700';b.onclick=fn;row.appendChild(b);};
btn('Kopieren',async()=>{try{await navigator.clipboard.writeText(json);st.textContent='Kopiert ✓ – jetzt im HQ einfügen.';}catch(e){ta.select();document.execCommand('copy');st.textContent='Kopiert (Fallback) ✓';}});
btn('Download',()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([json],{type:'application/json'}));a.download='usm-'+ds+'.json';a.click();});
btn('Schließen',()=>box.remove());box.appendChild(row);
}catch(e){alert('Export fehlgeschlagen: '+e.message);}})();`;
  const bookmarkletHref = () => 'javascript:' + encodeURIComponent(BOOKMARKLET.replace(/\n/g, ''));

  MFHFB.pages.register({
    id: 'usmimport', section: 'extra', label: 'Import', icon: '⬇️', applies: { sport: ['nba'] },
    when: l => l.key === 'usm', data: ['usm-base'],
    render({ store }) {
      const n = S.snaps(store).length;
      return head('Import', `Gehälter + FP/G jede Woche von basketball.de holen · ${n} eigene${n === 1 ? 'r' : ''} Snapshot${n === 1 ? '' : 's'} in diesem Browser`)
        + `<section class="card"><div class="card-head"><h2>1 · Bookmarklet</h2></div><div class="usm-pad">
          <p class="usm-small">Zieht auf basketball.de (eingeloggt) alle Seiten der Spielerliste: Gehalt, Saison-FP und FP/G. Am besten jeden Sonntag nach 22:00 (Gehalts-Update).</p>
          <p><a class="usm-btn primary" id="usmBm" href="#">⇩ USM-Export</a> <button class="usm-btn" id="usmBmCopy">Code kopieren</button></p>
          <ol class="usm-steps">
            <li><b>Desktop:</b> den Button in die Lesezeichenleiste ziehen.</li>
            <li><b>Handy (Chrome):</b> irgendeine Seite als Lesezeichen speichern → bearbeiten → Name „USM“, als URL den kopierten Code. Auf basketball.de „USM“ in die Adressleiste tippen und den Lesezeichen-Vorschlag antippen.</li>
            <li>Auf <code>basketball.de/app/usmanager/top-spieler</code> ausführen → „Kopieren“.</li>
          </ol></div></section>
        <section class="card usm-mt"><div class="card-head"><h2>2 · Einfügen</h2></div><div class="usm-pad">
          <textarea class="usm-input usm-ta" id="usmImp" placeholder='{"v":1,"date":"2026-11-15","players":[…]}'></textarea>
          <div class="usm-actions">
            <button class="usm-btn primary" id="usmImpBtn">Snapshot importieren</button>
            <label class="usm-btn">JSON-Datei<input type="file" id="usmImpFile" accept=".json,application/json" hidden></label>
            <button class="usm-btn" id="usmExport">Backup exportieren</button>
          </div>
          <div class="usm-small" id="usmImpMsg"></div>
          <p class="muted usm-small">Snapshots, Draft-Kader und „Mein Team“ liegen nur in diesem Browser (Handy und PC getrennt). Backup exportieren, wenn du sie fest ins Repo übernehmen willst.</p>
        </div></section>`;
    },
    mount(root, ctx) {
      const st = ctx.store, $ = id => root.querySelector('#' + id), msg = $('usmImpMsg');
      $('usmBm').href = bookmarkletHref();
      $('usmBm').addEventListener('click', ev => { ev.preventDefault(); alert('Nicht hier anklicken – als Lesezeichen speichern und auf basketball.de ausführen.'); });
      $('usmBmCopy').addEventListener('click', async ev => {
        try { await navigator.clipboard.writeText(bookmarkletHref()); ev.target.textContent = 'Kopiert ✓'; } catch (err) { prompt('Code kopieren:', bookmarkletHref()); }
      });
      const doImport = text => {
        try {
          const o = JSON.parse(String(text).trim());
          if (!o || !Array.isArray(o.players) || !o.players.length) throw new Error('keine Spieler gefunden');
          if (!/^\d{4}-\d{2}-\d{2}$/.test(o.date || '')) throw new Error('Datum fehlt');
          const bad = o.players.find(p => !Array.isArray(p) || p.length < 5 || typeof p[3] !== 'number');
          if (bad) throw new Error('unerwartetes Format: ' + JSON.stringify(bad).slice(0, 80));
          if (o.players.length < 300 && !confirm(`Nur ${o.players.length} Spieler im Import (normal ~770). Trotzdem übernehmen? Alle Seiten rechnen dann nur mit diesen Spielern.`)) return;
          const list = S.snaps(st);
          if (list.some(s => s.date === o.date) && !confirm(`Für ${fmtDate(o.date)} gibt es schon einen Snapshot. Ersetzen?`)) return;
          st.setJSON('snapshots', [...list.filter(s => s.date !== o.date), { date: o.date, players: o.players }].sort((a, b) => a.date.localeCompare(b.date)));
          msg.className = 'usm-small up'; msg.textContent = `✓ ${o.players.length} Spieler vom ${fmtDate(o.date)} importiert. Alle US-Manager-Seiten rechnen jetzt damit.`;
          $('usmImp').value = '';
        } catch (err) {
          msg.className = 'usm-small down';
          msg.textContent = /quota/i.test(err.message) ? 'Speicher voll – alte Snapshots unter „Gehälter“ löschen.' : 'Import fehlgeschlagen: ' + err.message;
        }
      };
      $('usmImpBtn').addEventListener('click', () => doImport($('usmImp').value));
      $('usmImpFile').addEventListener('change', ev => { const f = ev.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => doImport(r.result); r.readAsText(f); ev.target.value = ''; });
      $('usmExport').addEventListener('click', () => {
        const data = JSON.stringify({ exported: new Date().toISOString(), snapshots: S.snaps(st), team: S.team(st), draft: S.draft(st), overrides: S.ovr(st) });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
        a.download = 'usm-backup-' + new Date().toISOString().slice(0, 10) + '.json'; a.click();
      });
    },
  });

  // Für Tests
  MFHFB.usm = { buildPool, optimizeFill, findTrades };
})();
