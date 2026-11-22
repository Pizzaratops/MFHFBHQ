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
//   2. Sonst (seit 20.10.2026): 0 – keine Vorjahreswerte, Spieler wird
//      nicht empfohlen (Tag „ohne Proj.“).
//   Minuten pro Spieler überschreibbar (FP/G skaliert pro Minute).
//   Verfügbarkeit = Consensus-Spiele/82 × Anteil verpasster Spiele laut
//   ESPN-Verletzungsliste (sport:injuries, seit 10.11.2026) oder eigener Wert.
//  Gehaltsformel (gelöst am 1. Update, 15.11.2026): Gehalt = max(0,5; −1,024 +
//   0,3247·x + 0,001717·x²), x = FP pro gespieltem Spiel dieser Saison. Jeden
//   Sonntag komplette Neuberechnung (altes Gehalt egal), unter 6 Spielen bleibt
//   das Startgehalt. Ziel = Gehalt beim nächsten Update (echte FP + Projection
//   für die Spiele bis dahin). Repo-Snapshots: leagues/usm/data/usm-snapshots.js.
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
  // Trade-Lock: Kader ab Anmeldeschluss fix bis zum ersten Trade-Update (Trades gelten ab 22:00)
  const LOCK_START = new Date('2026-10-20T20:30:00+02:00'), LOCK_END = new Date('2026-11-15T22:00:00+01:00');
  // Zeitraum, über den Spieler verglichen werden: EV = FP/G × Verfügbarkeit × Spiele im Zeitraum
  const HORIZONS = {
    lock: { label: 'Trade-Lock', short: 'bis 15.11.', unit: 'FP bis 15.11.' },
    week: { label: '7 Tage', short: '7 Tage', unit: 'FP in 7 Tagen' },
    rest: { label: 'Rest-Saison', short: 'Saison', unit: 'FP Rest-Saison' },
    game: { label: 'Pro Spiel', short: 'pro Spiel', unit: 'FP/G' },
  };
  const defaultHorizon = () => (new Date() < LOCK_END ? 'lock' : 'week');
  const horizonOf = st => { const h = st.get('horizon'); return HORIZONS[h] ? h : defaultHorizon(); };
  function horizonWindow(h) {
    const now = new Date();
    if (h === 'lock') return [new Date(Math.max(now, LOCK_START)), LOCK_END];
    if (h === 'week') return [now, new Date(now.getTime() + 7 * 864e5)];
    if (h === 'rest') return [new Date(Math.max(now, SEASON_START)), new Date(SEASON_END.getTime() + 2 * 864e5)];
    return null;
  }
  const schedCache = new WeakMap();
  function teamGames(data) {
    // USM_SCHEDULE.games: "YYYYMMDDHHMM AWAY HOME" (UTC) → { ABBR: [Date, …] }
    if (!data.USM_SCHEDULE) return null;
    if (schedCache.has(data)) return schedCache.get(data);
    const m = {};
    data.USM_SCHEDULE.games.forEach(g => {
      const [t, a, h] = g.split(' ');
      const d = new Date(Date.UTC(+t.slice(0, 4), +t.slice(4, 6) - 1, +t.slice(6, 8), +t.slice(8, 10), +t.slice(10, 12)));
      (m[a] = m[a] || []).push(d); (m[h] = m[h] || []).push(d);
    });
    schedCache.set(data, m);
    return m;
  }
  function gamesIn(data, abbr, h) {
    const w = horizonWindow(h), tg = teamGames(data);
    if (!w || !tg || !tg[abbr]) return null;
    return tg[abbr].filter(d => d >= w[0] && d < w[1]).length;
  }
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
  // Verletzungen kommen seit 10.11.2026 automatisch aus der ESPN-Liste
  // (sport:injuries, nba-sync). Hier nur noch, was ESPN nicht führt:
  // gewaivt / Karriereende / Saison vorbei. [Verfügbarkeit, Label]
  const STATUS = {
    // 20.10.2026: gewaivt / Saison vorbei (basketball.de führt sie evtl. noch beim alten Team)
    // 26.10.2026: Walter Clayton (DAL) und Micah Peavy (OKC) per Two-Way neu unter Vertrag → raus
    // 09.11.2026: Kevin McCullar Jr. (TOR, Two-Way) raus; Riley Minix (CLE), Enrique Freeman (MIN), Dalen Terry (OKC) gewaivt
    'bruce brown': [0, 'gewaivt'], 'kevin porter': [0, 'gewaivt'], 'ak okereke': [0, 'gewaivt'],
    // 15.11.2026: Riley Minix (CLE) per Two-Way zurück → raus
    'enrique freeman': [0, 'gewaivt'], 'dalen terry': [0, 'gewaivt'],
    // 22.11.2026: Trey Alexander (UTA), Keshon Gilbert (ATL) am 16.11., Riley Minix (CLE) am 18.11. gewaivt
    'trey alexander': [0, 'gewaivt'], 'keshon gilbert': [0, 'gewaivt'], 'riley minix': [0, 'gewaivt'],
    'ben simmons': [0, 'Out Saison'], 'kristaps porzingis': [0, 'Karriereende'],
  };
  // Gehaltsformel von basketball.de, gelöst am 1. Update (15.11.2026): Fit über 364 Spieler
  // mit ≥ 6 Spielen, RMSE 0,08 Mio. x = Manager-FP pro gespieltem Spiel dieser Saison.
  // Jede Woche komplette Neuberechnung (λ = 1), unter 6 Spielen bleibt das Startgehalt (Regel).
  const SAL_MIN = 0.5, MIN_GAMES = 6;

  const e = s => MFHFB.ui.esc(s);
  const f1 = (x, d = 1) => (x == null || !isFinite(x)) ? '–' : Number(x).toFixed(d);
  const sum = (a, fn) => a.reduce((s, x) => s + fn(x), 0);
  const fmtDate = d => { const [y, m, dd] = d.split('-'); return `${dd}.${m}.${y}`; };
  const flip = n => { const i = n.indexOf(','); return i < 0 ? n.trim() : n.slice(i + 1).trim() + ' ' + n.slice(0, i).trim(); };
  const nkey = raw => { const k = MFHFB.nba.key(raw); return NAME_FIX[k] || k; };
  const squash = k => String(k).replace(/[^a-z]/g, '');
  const valueStyle = (v, pool) => { const k = pool && pool.scale || 1, t = Math.max(0, Math.min(1, (v / k - 2) / 2.5)); return `color:hsl(${Math.round(t * 140)},62%,48%)`; };

  // ---------------- Speicher (mfhfb:usm:*) ----------------
  const S = {
    snaps: st => { const l = st.getJSON('snapshots', []); return Array.isArray(l) ? l : []; },
    ovr: st => st.getJSON('overrides', {}) || {},
    draft: st => st.getJSON('draft', []) || [],
    team: st => st.getJSON('team', null),
  };
  // Mein Team: Standard ist der echte Kader aus dem täglichen Sync (usm-live.js). Ein im Tool
  // geändertes Team (Trade „Ausführen“, Restbudget) gilt nur, solange es neuer ist als der Sync.
  const liveTeam = data => {
    const L = data && data.USM_LIVE;
    if (!L || !L.players || !L.players.length) return null;
    return { keys: L.players.map(p => squash(nkey(flip(p.name)))), cash: L.team.budget || 0, synced: L.updated, live: true };
  };
  const myTeam = (st, data) => {
    const local = S.team(st), live = liveTeam(data);
    if (live && (!local || !local.ts || new Date(local.ts) <= new Date(live.synced))) return live;
    return local;
  };
  // Trade-Historie: von Hand nachgetragene (leagues/usm/data/usm-trades.js) + vom Sync
  // erkannte Kaderwechsel (USM_HISTORY[].moves), nach Datum, doppelte zusammengeführt.
  function tradeLog(data) {
    const out = [], seen = new Set();
    const add = t => { const k = t.date + '|' + t.out + '|' + t.in; if (seen.has(k)) return; seen.add(k); out.push(t); };
    (data.USM_TRADES || []).forEach(add);
    (data.USM_HISTORY || []).forEach(h => (h.moves || []).forEach(m => add({ date: h.g, auto: true, ...m })));
    // Nachgetragene und erkannte Trades mit gleichem Spielerpaar nur einmal zeigen
    const pair = new Map();
    out.forEach(t => { const k = t.out + '|' + t.in; if (!pair.has(k) || !t.auto) pair.set(k, t); });
    return [...pair.values()].sort((a, b) => b.date.localeCompare(a.date));
  }

  // ---------------- Gehaltsmodell ----------------
  const SAL_FIT = { a: -1.024, b: 0.3247, c: 0.001717 };
  // Grenzwert (Gehalt pro FP/G) bei typischem Spieler (~20 FP/G) für die Marktwert-Gewichtung
  SAL_FIT.slope = SAL_FIT.b + 2 * SAL_FIT.c * 20;
  const targetSal = (fit, fpg) => Math.max(SAL_MIN, fit.a + fit.b * fpg + fit.c * fpg * fpg);
  // Nächstes Gehalts-Update: sonntags 22:00. Es zählen die FP vom täglichen 12:00-Update,
  // also Spiele bis Samstagnacht (US) → Stichzeit Sonntag 11:00 UTC.
  function nextUpdateCutoff(now = new Date()) {
    const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 11));
    d.setUTCDate(d.getUTCDate() + ((7 - d.getUTCDay()) % 7));
    if (d <= now) d.setUTCDate(d.getUTCDate() + 7);
    return d;
  }
  // Echte Spiele seit dem Snapshot aus den täglichen Boxscores (nba-sync, morgens):
  // Der Snapshot enthält die FP bis US-Spieltag snap.through (Repo-Snapshots) bzw. bis zum Vortag
  // des Abrufs (FP-Update täglich 12:00) → spätere Boxscore-Tage zählen dazu.
  // Nur komplett beendete Spieltage. Fouls stehen nicht im Boxscore → PF/Min je Position geschätzt.
  // Rückgabe: { from: Zeitpunkt, ab dem der Spielplan wieder "Zukunft" ist, last, by: key → [FP ohne Fouls, Minuten, Spiele] }
  function boxSince(data, snap) {
    const day = 864e5, at11 = iso => new Date(iso + 'T11:00:00Z');
    const through = snap.through || new Date(at11(snap.date).getTime() - day).toISOString().slice(0, 10);
    const res = { from: new Date(at11(through).getTime() + day), last: null, by: new Map() };
    const nba = data.LIVESCORES_BOXSCORES && data.LIVESCORES_BOXSCORES.nba;
    if (!nba) return res;
    for (const date of Object.keys(nba).sort()) {
      if (date <= through) continue;
      const games = nba[date].games || [];
      if (!games.length || !games.every(g => g.completed && /final/i.test(g.statusText || ''))) break;
      games.forEach(g => [g.away, g.home].forEach(t => (t.players || []).forEach(b => {
        if (!(b.min > 0)) return;
        const fp = b.pts + b.reb + 1.5 * b.ast + 2 * b.stl + 2 * b.blk - 2 * (b.to || 0) - 0.5 * ((b.fga || 0) - (b.fgm || 0)) - 0.5 * ((b.fta || 0) - (b.ftm || 0));
        const k = squash(nkey(b.name)), a = res.by.get(k) || [0, 0, 0];
        a[0] += fp; a[1] += b.min; a[2]++; res.by.set(k, a);
      })));
      res.last = date; res.from = new Date(at11(date).getTime() + day);
    }
    return res;
  }
  // Erwartete Spiele eines Spielers bis zur Stichzeit (Spielplan, ESPN-Verletzung: Out = 0, GTD = halb)
  function gamesToUpdate(data, inj, abbr, upd, from) {
    const tg = teamGames(data), now = new Date();
    const games = tg && tg[abbr] ? tg[abbr].filter(d => d >= from && d < upd) : [];
    if (!inj) return games.length;
    const [, status, fantasy, ret, , seasonOut] = inj;
    if (seasonOut || fantasy === 'OFS') return 0;
    const back = ret ? new Date(ret + 'T12:00:00Z') : new Date(now.getTime() + 14 * 864e5);
    const gtd = /day-to-day|questionable/i.test(status) || fantasy === 'GTD';
    return games.reduce((n, d) => n + (d < back ? (gtd ? 0.5 : 0) : 1), 0);
  }

  // ---------------- Verletzungen (ESPN) ----------------
  // Anteil der Spiele im Zeitraum, die ein Spieler laut ESPN-Liste verpasst.
  function injuryShare(data, inj, abbr, h) {
    if (!inj) return null;
    const [, status, fantasy, ret, , seasonOut] = inj;
    if (seasonOut || fantasy === 'OFS') return { share: 0, label: 'Out Saison' };
    const now = new Date(), w = horizonWindow(h === 'game' ? 'rest' : h) || [now, SEASON_END];
    const back = ret ? new Date(ret + 'T12:00:00Z') : new Date(now.getTime() + 14 * 864e5);
    const gtd = /day-to-day|questionable/i.test(status) || fantasy === 'GTD';
    const tg = teamGames(data), games = tg && tg[abbr] ? tg[abbr].filter(d => d >= w[0] && d < w[1]) : null;
    const before = games ? games.filter(d => d < back).length : null, total = games ? games.length : null;
    const missRate = gtd ? 0.5 : 1;
    const share = total ? 1 - missRate * before / total : (gtd ? 0.9 : 0.6);
    const dd = ret ? `${ret.slice(8, 10)}.${ret.slice(5, 7)}.` : '';
    return { share: Math.max(0, Math.min(1, share)), label: gtd ? 'GTD' : (dd ? `Out bis ${dd}` : 'Out') };
  }

  // ---------------- Pool ----------------
  function allSnapshots(data, st) {
    const base = { date: data.USM_BASE.date, base: true, players: data.USM_BASE.players.map(p => [p[0], p[1], p[2], p[3], p[4], 0, 0]) };
    // Repo-Snapshots (leagues/usm/data/usm-snapshots.js) + eigene aus dem Browser (gleiches Datum: eigener gewinnt)
    const byDate = new Map([[base.date, base]]);
    (data.USM_SNAPSHOTS || []).forEach(s => byDate.set(s.date, { date: s.date, repo: true, through: s.through, players: s.players }));
    S.snaps(st).forEach(s => byDate.set(s.date, s));
    return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
  }

  function buildPool(data, st) {
    MFHFB.nba.init(data);
    const horizon = horizonOf(st);
    const snaps = allSnapshots(data, st);
    const cur = snaps[snaps.length - 1], prev = snaps.length > 1 ? snaps[snaps.length - 2] : null;
    const salMap = s => new Map(s.players.map(p => [squash(nkey(flip(p[0]))), p[3]]));
    const prevSal = prev ? salMap(prev) : new Map(), firstSal = salMap(snaps[0]);
    const base = new Map();
    data.USM_BASE.players.forEach(p => { const k = squash(nkey(flip(p[0]))); if (!base.has(k) || base.get(k)[1] === 'Free Agents') base.set(k, p); });
    const projIdx = obj => { const m = new Map(); Object.entries(obj || {}).forEach(([n, p]) => m.set(squash(nkey(n)), p)); return m; };
    const live = projIdx(data.LIVE_PROJECTIONS), cons = projIdx(data.PROJECTIONS_CONSENSUS);
    const inj = projIdx(data.NBA_INJURIES && data.NBA_INJURIES.players);
    const ovr = S.ovr(st), fit = SAL_FIT, upd = nextUpdateCutoff(), box = boxSince(data, cur);

    const out = new Map();
    for (const row of cur.players) {
      const [name, team, pos, sal, rookie, fpSnap, fpgSnap] = row;
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
        // 20.10.2026 (Beyaz): ohne MFHFB-Projection KEINE Vorjahreswerte mehr –
        // Spieler zählt mit 0 (taucht nicht in Empfehlungen/Optimierer auf).
        fpm = 0; src = 'none'; baseMin = 0;
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
      const abbr = TEAM_ABBR[team] || team;
      const sd = STATUS[MFHFB.nba.key(short)];
      if (sd) { av = Math.min(av, sd[0]); status = sd[1]; }
      else {
        const ij = injuryShare(data, inj.get(k), abbr, horizon);
        if (ij) { av *= ij.share; status = ij.label; }
      }
      if (o.av != null) av = +o.av;

      let fpg = fpm * min, gp = 0, fpAct = fpSnap || 0;
      if (fpgSnap > 0 && fpSnap > 0) gp = Math.round(fpSnap / fpgSnap);
      // Seit dem Snapshot gespielte Spiele (Boxscores) dazurechnen
      const bx = box.by.get(k), gpSnap = gp;
      if (bx) { fpAct += bx[0] - 0.5 * pfm * bx[1]; gp += bx[2]; }
      const fpgAct = gp > 0 ? (bx ? fpAct / gp : fpgSnap) : (fpgSnap || 0);
      // Live-Projections enthalten die echten Spiele schon; nur ohne Projection selbst einblenden
      if (gp && src !== 'proj') fpg = (fpg * PHANTOM_GAMES + fpgAct * gp) / (PHANTOM_GAMES + gp);
      const evg = fpg * av;
      // Gehaltsprognose: Ziel = Formel mit den FP/G, die bis zum nächsten Update zu erwarten sind
      // (echte FP + Projection × erwartete Spiele). Unter 6 Spielen wird nicht neu berechnet.
      const eg = (sd && sd[0] === 0) || av === 0 ? 0 : gamesToUpdate(data, inj.get(k), abbr, upd, box.from);
      const gpN = gp + eg, fpgN = gpN > 0 ? ((fpAct || 0) + (fpg > 0 ? fpg : fpgAct || 0) * eg) / gpN : 0;
      const tgtF = gpN > 0 ? targetSal(fit, fpgN) : null, frozen = gpN < MIN_GAMES - 0.01;
      // Nachfrage-Effekt (Snapshot 22.11. kalibriert, Listen „meist verpflichtet/abgegeben“):
      // offensichtliche Wertsprung-Ziele (Formel ≥ +0,8) werden massenhaft gekauft → +0,15…0,3;
      // frisch verletzte Stammspieler (Out über das nächste Update, gemeldet seit dem letzten Gehalts-Update) werden abgestoßen → −0,3.
      let dem = 0;
      if (tgtF != null && !frozen && gp >= MIN_GAMES - 1) {
        const j = tgtF - sal;
        if (j >= 0.8) dem = Math.min(0.3, 0.08 + 0.09 * j);
        const ij = inj.get(k);
        if (ij && /out/i.test(ij[1] || '') && ij[3] && new Date(ij[3] + 'T12:00:00Z') > upd && ij[6]
          && Date.parse(ij[6] + 'T12:00:00Z') >= Date.parse(cur.date + 'T12:00:00Z') - 864e5 && fpgAct >= 15 && sal >= 4) dem = -0.3;
      }
      const tgt = tgtF == null ? null : Math.max(0.5, tgtF + dem);
      const now = gp > 0 ? (gp < MIN_GAMES ? sal : targetSal(fit, fpgAct)) : null;
      const gap = tgt == null ? 0 : tgt - sal, next = frozen || tgt == null ? sal : tgt;
      const ng = horizon === 'game' ? null : gamesIn(data, abbr, horizon);
      const ev = ng == null ? evg : evg * ng;
      out.set(k, {
        key: k, name, short, team, abbr, pos, sal, c: Math.round(sal * 100), rookie: !!rookie,
        fpm, src, min, minSet: o.min != null, av, avSet: o.av != null, status, fpg, evg, ng, ev, value: sal > 0 ? ev / sal : 0,
        gp, fpgAct: fpgAct || 0, prevSal: prevSal.has(k) ? prevSal.get(k) : null, firstSal: firstSal.has(k) ? firstSal.get(k) : null,
        fp26: s26 && s26[0] ? s26[2] / s26[0] : null,
        tgt, tgtF, dem, gap, frozen, next, eg, fpgN, now, gpSnap,
      });
    }
    const withG = [...out.values()].filter(p => p.ng != null && p.team !== 'Free Agents');
    const scale = horizon === 'game' || !withG.length ? 1 : Math.max(1, sum(withG, p => p.ng) / withG.length);
    return { players: [...out.values()], byKey: out, date: cur.date, snapshots: snaps, horizon, unit: HORIZONS[horizon].unit, scale, fit, upd, boxLast: box.last,
      injDate: data.NBA_INJURIES && data.NBA_INJURIES.updated };
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
      && p.src === 'proj' && !(opts.noRookies && p.rookie));
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
  // Marktwert-Potenzial eines Spielers: Lücke zum Ziel-Gehalt (wer am nächsten Update noch unter 6 Spielen liegt: halb gewichtet)
  const mwOf = p => p.tgt == null ? 0 : (p.frozen ? 0.5 : 1) * p.gap;
  // mwW = FP-Wert von 1 Mio Marktwert im Zeitraum (0 = nur Punkte)
  function findTrades(pool, team, cash, minMin, mwW = 0) {
    const tk = new Set(team.map(p => p.key));
    const cand = pool.filter(p => !tk.has(p.key) && p.team !== 'Free Agents' && p.ev > 0 && p.min >= minMin && p.src === 'proj');
    const mk = (out, inn, cashAfter) => {
      const gain = sum(inn, p => p.ev) - sum(out, p => p.ev), dmw = sum(inn, mwOf) - sum(out, mwOf);
      return { out, in: inn, gain, dmw, score: gain + mwW * dmw, cashAfter };
    };
    const singles = [];
    for (const out of team) {
      const avail = cash + out.sal, rest = team.filter(p => p !== out);
      for (const inn of cand) {
        if (inn.sal > avail + 1e-9) continue;
        const t = mk([out], [inn], avail - inn.sal);
        if (t.score <= 0.05) continue;
        if (inn.pos !== out.pos && !validFull([...rest, inn])) continue;
        singles.push(t);
      }
    }
    singles.sort((a, b) => b.score - a.score);
    const cnt = new Map(), s1 = [];
    for (const t of singles) { const n = cnt.get(t.out[0].key) || 0; if (n < 3) { cnt.set(t.out[0].key, n + 1); s1.push(t); } if (s1.length >= 20) break; }
    const top = cand.slice().sort((a, b) => (b.ev + mwW * mwOf(b)) - (a.ev + mwW * mwOf(a))).slice(0, 160), doubles = [];
    for (let i = 0; i < team.length; i++) for (let j = i + 1; j < team.length; j++) {
      const o1 = team[i], o2 = team[j], avail = cash + o1.sal + o2.sal, rest = team.filter(p => p !== o1 && p !== o2);
      const oScore = o1.ev + o2.ev + mwW * (mwOf(o1) + mwOf(o2));
      let best = null;
      for (let a = 0; a < top.length; a++) {
        const x = top[a]; if (x.sal >= avail) continue;
        for (let b = a + 1; b < top.length; b++) {
          const y = top[b];
          if (x.sal + y.sal > avail + 1e-9) continue;
          const score = x.ev + y.ev + mwW * (mwOf(x) + mwOf(y)) - oScore;
          if (best && score <= best.score) continue;
          if (!validFull([...rest, x, y])) continue;
          best = mk([o1, o2], [x, y], avail - x.sal - y.sal);
        }
      }
      if (best && best.score > 0.05) doubles.push(best);
    }
    doubles.sort((a, b) => b.score - a.score);
    return { singles: s1, doubles: doubles.slice(0, 15) };
  }

  // ---------------- Bausteine ----------------
  function tags(p) {
    let t = '';
    if (p.rookie) t += '<span class="usm-tag r">R</span>';
    if (p.status) t += `<span class="usm-tag ${p.av <= 0.5 ? 'inj' : 'q'}">${e(p.status)}</span>`;
    if (p.src === 'none') t += '<span class="usm-tag est" title="Keine MFHFB-Projection (BBM/Hashtag) – zählt mit 0">ohne Proj.</span>';
    return t;
  }
  const head = (title, sub) => `<div class="page-head"><h1 class="page-title display">${title}</h1><div class="page-sub">${sub}</div></div>`;
  const stat = (label, val, cls) => `<div class="stat"><div class="stat-label">${label}</div><div class="stat-value display usm-sv ${cls || ''}">${val}</div></div>`;
  const srcLabel = { proj: 'MFHFB-Projection', none: 'keine Projection' };
  const remainingGames = () => 82 * Math.max(0, Math.min(1, (SEASON_END - Math.max(new Date(), SEASON_START)) / (SEASON_END - SEASON_START)));
  // Umschalter „Zeitraum“: speichert den Zeitraum und zeichnet die Seite neu
  const horizonSeg = st => `<div class="usm-hz"><span class="muted usm-small">Zeitraum</span><div class="seg" role="group" aria-label="Zeitraum">${Object.entries(HORIZONS)
    .filter(([k]) => k !== 'lock' || new Date() < LOCK_END)
    .map(([k, h]) => `<button type="button" class="seg-btn${horizonOf(st) === k ? ' active' : ''}" data-horizon="${k}">${h.label}</button>`).join('')}</div></div>`;
  const mountHorizon = (root, ctx) => root.querySelectorAll('[data-horizon]').forEach(b => b.addEventListener('click', () => { ctx.store.set('horizon', b.dataset.horizon); ctx.refresh(); }));
  const DATA = ['usm-base', '?usm-snapshots', '?usm-schedule', '?sport:aliases', '?sport:live-projections', '?sport:projections-consensus', '?sport:injuries', '?sport:livescores-boxscores'];

  // ======================= DRAFT & VALUE =======================
  MFHFB.pages.register({
    id: 'usmdraft', section: 'draft', label: 'Draft & Value', icon: '💶', applies: { sport: ['nba'] },
    when: l => l.key === 'usm', data: DATA,
    render({ store }) {
      return head('Draft &amp; Value', 'Value-Board und Kader-Builder: Spieler antippen, „Optimal auffüllen“ rechnet den besten Rest unter Budget und Positionsregeln.')
        + MFHFB.ui.countdowns(DATES.map(d => ({ label: d.label, at: new Date(d.iso) })).filter(d => d.at > new Date()).slice(0, 1))
        + horizonSeg(store)
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
        <p class="muted usm-foot">Projektion = MFHFB-Projection (Live/Consensus) in Manager-Punkten, Fouls je Position geschätzt; ohne Projection: 0 (keine Vorjahreswerte). EV = FP/G × Verfügbarkeit. Minuten und Verfügbarkeit in der Tabelle überschreibbar. Verletzungsstatus Stand 18.10.2026.</p>`;
    },
    mount(root, ctx) {
      MFHFB.ui.mountCountdowns(root);
      mountHorizon(root, ctx);
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
          ${stat('G / F / C', `${s.cnt.G}/${s.cnt.F}/${s.cnt.C}`)}${stat(pool.unit, f1(s.ev))}</div>`;
        $('usmCount').textContent = `${s.ps.length}/15 · ${f1(s.used, 2)} Mio`;

        const grp = { G: 'Guards', F: 'Forwards', C: 'Center' };
        $('usmRoster').innerHTML = s.ps.length ? ['G', 'F', 'C'].map(pos => {
          const l = s.ps.filter(p => p.pos === pos).sort((a, b) => b.sal - a.sal);
          return `<div class="usm-group"><div class="usm-gh"><span>${grp[pos]} ${l.length}/${MINPOS[pos]}</span><span>${f1(sum(l, p => p.sal), 2)} Mio</span></div>
            ${l.map(p => `<div class="usm-r"><span class="usm-n">${e(p.short)}${tags(p)}</span><span class="usm-m">${p.abbr} · ${f1(p.sal, 2)} · ${f1(p.ev)}</span><button class="usm-x" data-del="${e(p.key)}" aria-label="Entfernen">×</button></div>`).join('')}</div>`;
        }).join('') : '<div class="muted usm-small">Noch keine Spieler. In der Tabelle auf ＋ tippen.</div>';

        if (fill) {
          $('usmFillBox').innerHTML = !fill.add ? '<div class="usm-fill"><span class="down">Keine gültige Auffüllung – Budget oder Positionen passen nicht.</span></div>'
            : `<div class="usm-fill"><div class="usm-gh"><span>Vorschlag: +${fill.add.length} · ${f1(fill.cost, 2)} Mio</span><span>Team ≈ ${f1(s.ev + fill.total)} ${pool.unit}</span></div>
              ${fill.add.map(p => `<div class="usm-r"><span class="usm-n">${p.pos} · ${e(p.short)}${tags(p)}</span><span class="usm-m">${p.abbr} · ${f1(p.sal, 2)} · ${Math.round(p.min)}m · ${f1(p.ev)}</span></div>`).join('')}
              <div class="usm-actions"><button class="usm-btn primary" data-fill="apply">Übernehmen</button><button class="usm-btn" data-fill="close">Verwerfen</button></div></div>`;
        } else $('usmFillBox').innerHTML = '';

        const mm = +$('usmMinMin').value || 0;
        $('usmSugg').innerHTML = s.open <= 0 ? '<div class="muted usm-small">Kader komplett.</div>' : ['G', 'F', 'C'].map(pos => {
          const l = pool.players.filter(p => p.pos === pos && !draft.includes(p.key) && p.team !== 'Free Agents' && p.ev > 0 && p.min >= mm && p.src === 'proj' && canAdd(p, s))
            .sort((a, b) => b.value - a.value).slice(0, 6);
          return `<div class="usm-group"><div class="usm-gh"><span>${grp[pos]}${s.need[pos] ? ` · noch ${s.need[pos]} Pflicht` : ' · Flex'}</span><span>FP/Mio</span></div>
            ${l.length ? l.map(p => `<div class="usm-r usm-sug" data-add="${e(p.key)}"><span class="usm-n">${e(p.short)}${tags(p)}</span><span class="usm-m">${p.abbr} · ${f1(p.sal, 2)} · ${Math.round(p.min)}m · ${f1(p.ev)} · <b style="${valueStyle(p.value, pool)}">${f1(p.value)}</b></span></div>`).join('')
              : '<div class="muted usm-small">Kein Spieler passt.</div>'}</div>`;
        }).join('');
        table(s);
      }

      const COLS = [['', 'l', null], ['Spieler', 'l', 'short'], ['Team', 'l', 'abbr'], ['Pos', 'l', 'pos'], ['Gehalt', 'num', 'sal'], ['Min', 'num', 'min'],
        ['FP/G', 'num', 'fpg'], ['Verf.', 'num', 'av'], ...(pool.horizon === 'game' ? [] : [['Sp.', 'num', 'ng']]), [pool.horizon === 'game' ? 'EV' : 'EV ' + HORIZONS[pool.horizon].short, 'num', 'ev'], ['FP/Mio', 'num', 'value'], ['FP/G 25-26', 'num', 'fp26']];
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
              ${pool.horizon === 'game' ? '' : `<td class="num">${p.ng ?? '–'}</td>`}<td class="num">${f1(p.ev)}</td><td class="num strong" style="${valueStyle(p.value, pool)}">${f1(p.value)}</td>
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
        st.setJSON('team', { keys: draft.slice(), cash: +s.rest.toFixed(2), ts: new Date().toISOString() });
        location.hash = ctx.href('usmteam');
      });
      paint();
    },
  });

  // ======================= MEIN TEAM & TRADES =======================
  MFHFB.pages.register({
    id: 'usmteam', section: 'trade', label: 'Mein Team & Trades', icon: '⚖️', applies: { sport: ['nba'] },
    when: l => l.key === 'usm', data: [...DATA, '?usm-live', '?usm-trades'],
    render({ data, store, href }) {
      const pool = buildPool(data, store), team = myTeam(store, data);
      if (!team || !team.keys || !team.keys.length) {
        return head('Mein Team &amp; Trades', 'Teamwert, Gehaltsentwicklung und Trade-Finder.')
          + MFHFB.ui.empty('Noch kein Team gespeichert', 'Unter „Draft & Value“ 15 Spieler wählen und „Als Mein Team speichern“ tippen.', '🧺')
          + `<p style="text-align:center"><a class="usm-btn primary" href="${href('usmdraft')}">Zu Draft &amp; Value →</a></p>`;
      }
      const ps = team.keys.map(k => pool.byKey.get(k)).filter(Boolean), miss = team.keys.length - ps.length;
      const cash = team.cash || 0, salSum = sum(ps, p => p.sal), val = salSum + cash, start = sum(ps, p => p.firstSal ?? p.sal) + cash, dv = val - start;
      const dc = d => d == null ? '–' : `<span class="${d > 0.004 ? 'up' : d < -0.004 ? 'down' : 'muted'}">${d > 0 ? '+' : ''}${f1(d, 2)}</span>`;
      const zc = p => p.tgt == null ? '–' : p.frozen ? `<span class="muted" title="Am nächsten Update noch unter ${MIN_GAMES} Spielen: Gehalt bleibt vorerst">${p.gap > 0 ? '+' : ''}${f1(p.gap, 2)}*</span>` : dc(p.gap);
      const trades = tradeLog(data);
      const srcNote = team.live
        ? `Kader und Restbudget von basketball.de (Sync ${new Date(team.synced).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })})`
        : `Im Tool geändertes Team <button type="button" class="usm-btn" id="usmTeamReset">Zurück zum basketball.de-Kader</button>`;
      const tradeCard = trades.length ? `<section class="card usm-mt"><div class="card-head"><h2>Trades</h2><span class="muted usm-small">${trades.length} bisher</span></div>
          <div class="usm-tbl"><table class="table compact usm-table"><thead><tr><th>wirksam</th><th>Raus</th><th class="num">Gehalt</th><th>Rein</th><th class="num">Gehalt</th><th class="num">Δ Cash</th><th>Notiz</th></tr></thead><tbody>
          ${trades.map(t => `<tr><td>${fmtDate(t.date).slice(0, 6)}</td><td class="strong">${e(t.out)}</td><td class="num">${f1(t.outSal, 2)}</td><td class="strong">${e(t.in)}</td><td class="num">${f1(t.inSal, 2)}</td>
            <td class="num">${t.outSal != null && t.inSal != null ? `<span class="${t.outSal - t.inSal >= 0 ? 'up' : 'down'}">${t.outSal - t.inSal >= 0 ? '+' : ''}${f1(t.outSal - t.inSal, 2)}</span>` : '–'}</td>
            <td class="muted usm-small">${e(t.note || (t.auto ? 'vom Sync erkannt' : ''))}</td></tr>`).join('')}
          </tbody></table></div></section>` : '';
      return head('Mein Team &amp; Trades', `Gehälter vom ${fmtDate(pool.date)} · ${pool.snapshots.length} Snapshot${pool.snapshots.length > 1 ? 's' : ''} · ${srcNote}`)
        + `<div class="stat-row usm-row">${stat('Teamwert', f1(val, 2))}${stat('Δ seit Start', `<span class="${dv >= 0 ? 'up' : 'down'}">${dv >= 0 ? '+' : ''}${f1(dv, 2)}</span>`)}${stat('Gehälter', f1(salSum, 2))}${stat('Restbudget', f1(cash, 2))}${stat(pool.unit, f1(sum(ps, p => p.ev)))}${stat('Δ Ziel (Kader)', dc(sum(ps, p => p.frozen ? 0 : p.gap)))}</div>`
        + horizonSeg(store) + `
        <section class="card" data-share="Mein US-Manager-Team">
          <div class="card-head"><h2>Kader</h2><label class="muted usm-small">Restbudget <input type="number" class="usm-ovr usm-cash" id="usmCash" step="0.01" value="${f1(cash, 2)}"></label></div>
          <div class="usm-tbl"><table class="table compact usm-table"><thead><tr><th>Pos</th><th>Spieler</th><th>Team</th><th class="num">Gehalt</th><th class="num">Δ Woche</th><th class="num">Δ Start</th><th class="num">GP</th><th class="num">FP/G real</th><th class="num" title="Erwartetes Gehalt beim nächsten Update (Formel mit echten FP + Projection bis dahin)">Ziel</th><th class="num">Δ Ziel</th><th class="num">FP/G proj</th>${pool.horizon === 'game' ? '' : '<th class="num">Sp.</th>'}<th class="num">EV</th><th class="num">FP/Mio</th></tr></thead><tbody>
          ${ps.slice().sort((a, b) => a.pos.localeCompare(b.pos) || b.sal - a.sal).map(p => `<tr><td>${p.pos}</td><td class="strong usm-name">${e(p.short)}${tags(p)}</td><td>${p.abbr}</td>
            <td class="num">${f1(p.sal, 2)}</td><td class="num">${dc(p.prevSal != null ? p.sal - p.prevSal : null)}</td><td class="num">${dc(p.firstSal != null ? p.sal - p.firstSal : null)}</td>
            <td class="num">${p.gp || '–'}</td><td class="num">${p.fpgAct ? f1(p.fpgAct) : '–'}</td><td class="num"${p.dem ? ` title="Formel ${f1(p.tgtF, 2)} ${p.dem > 0 ? '+' : ''}${f1(p.dem, 2)} Nachfrage (${p.dem > 0 ? 'Massenkauf erwartet' : 'Massenverkauf erwartet'})"` : ''}>${p.tgt == null ? '–' : f1(p.tgt, 2) + (p.dem ? (p.dem > 0 ? '↑' : '↓') : '')}</td><td class="num">${zc(p)}</td><td class="num">${f1(p.fpg)}</td>${pool.horizon === 'game' ? '' : `<td class="num">${p.ng ?? '–'}</td>`}<td class="num">${f1(p.ev)}</td><td class="num strong" style="${valueStyle(p.value, pool)}">${f1(p.value)}</td></tr>`).join('')}
          ${miss ? `<tr><td colspan="13" class="down">${miss} Spieler fehlen im aktuellen Snapshot.</td></tr>` : ''}</tbody></table></div>
          <p class="muted usm-small usm-pad">Ziel = erwartetes Gehalt beim nächsten Update (Stichzeit ${pool.upd.toLocaleString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}): max(0,5; ${f1(pool.fit.a, 3)} + ${f1(pool.fit.b, 4)}·x + ${f1(pool.fit.c, 6)}·x²), x = FP pro gespieltem Spiel (echte FP + Projection für die Spiele bis dahin). Jede Woche komplette Neuberechnung, das alte Gehalt spielt keine Rolle; Verletzte behalten ihren Wert. * = dann noch unter ${MIN_GAMES} Spielen, Gehalt bleibt vorerst. ${pool.boxLast ? `GP und FP/G real enthalten die Boxscores bis ${fmtDate(pool.boxLast)} (Fouls geschätzt, FP-Korrekturen von basketball.de fehlen) – aktualisiert sich jeden Morgen.` : `GP und FP/G real: Stand Snapshot ${fmtDate(pool.date)}.`} Formel am Update vom 15.11.2026 gelöst (364 Spieler, mittlerer Fehler 0,08 Mio).${pool.injDate ? ` Verletzungen: ESPN, Stand ${new Date(pool.injDate).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}.` : ''}</p>
        </section>
        <section class="card usm-mt">
          <div class="card-head"><h2>Trade-Finder</h2><span class="usm-opts usm-inline"><label>Min. Minuten <input type="number" id="usmTrMin" value="14" min="0" max="40"></label><label class="usm-small"><input type="checkbox" id="usmTrMw" checked> Marktwert einbeziehen</label><button class="usm-btn primary" id="usmTrBtn">Trades suchen</button></span></div>
          <div class="usm-pad"><p class="explain">Δ = Gewinn an erwarteten Punkten im gewählten Zeitraum (${HORIZONS[pool.horizon].label}), inkl. Spielplan und ESPN-Verletzungen. ΔMW = erwarteter Marktwert-Gewinn beim nächsten Update (Ziel-Gehalt rein minus raus; wer dann noch unter 6 Spielen liegt, halb gewichtet). Mit „Marktwert einbeziehen“ zählt 1 Mio ΔMW wie ${f1(0.5 / pool.fit.slope * (pool.horizon === 'game' ? 1 : pool.scale), 1)} ${pool.unit}. Der <b>Helpside Trade</b> ist gratis (1×, verfällt nicht); in der Trade-Phase 3 Start-Trades + 1 gratis pro Sonntag, jeder weitere kostet ${TRADE_COST} Mio. „Ausführen“ trägt den Trade nur hier ein – auf basketball.de musst du ihn selbst bestätigen.</p><div id="usmTrOut" class="muted usm-small">„Trades suchen“ antippen.</div></div>
        </section>` + tradeCard;
    },
    mount(root, ctx) {
      const st = ctx.store, team = myTeam(st, ctx.data);
      if (!team) return;
      const saveLocal = () => st.setJSON('team', { keys: team.keys, cash: team.cash, ts: new Date().toISOString() });
      const reset = root.querySelector('#usmTeamReset');
      if (reset) reset.addEventListener('click', () => { st.setJSON('team', null); ctx.refresh(); });
      const cashEl = root.querySelector('#usmCash');
      cashEl.addEventListener('change', () => { team.cash = +cashEl.value || 0; saveLocal(); ctx.refresh(); });
      mountHorizon(root, ctx);
      let last = [];
      root.querySelector('#usmTrBtn').addEventListener('click', ev => {
        const b = ev.currentTarget; b.disabled = true; b.textContent = 'Suche…';
        setTimeout(() => {
          const pool = buildPool(ctx.data, st), ps = team.keys.map(k => pool.byKey.get(k)).filter(Boolean);
          const mwW = root.querySelector('#usmTrMw').checked ? 0.5 / pool.fit.slope * (pool.horizon === 'game' ? 1 : pool.scale) : 0;
          const r = findTrades(pool.players, ps, team.cash || 0, +root.querySelector('#usmTrMin').value || 0, mwW);
          last = [...r.singles, ...r.doubles];
          const rg = remainingGames();
          const block = (title, l, off) => `<div class="group-title">${title}</div>` + (l.length ? l.map((t, i) => `<div class="usm-trade">
              <div><div class="usm-lbl">Raus</div>${t.out.map(p => `${p.pos} ${e(p.short)} <span class="usm-m">${f1(p.sal, 2)} · ${f1(p.ev)}</span>`).join('<br>')}</div>
              <div><div class="usm-lbl">Rein</div>${t.in.map(p => `${p.pos} ${e(p.short)}${tags(p)} <span class="usm-m">${p.abbr} · ${f1(p.sal, 2)} · ${f1(p.ev)}</span>`).join('<br>')}</div>
              <div class="usm-gain">${t.gain >= 0 ? '+' : ''}${f1(t.gain)} ${pool.unit}<br><span class="usm-m">ΔMW ${t.dmw >= 0 ? '+' : ''}${f1(t.dmw, 2)} · ${pool.horizon === 'game' ? `≈ +${Math.round(t.gain * rg)} Saison · ` : ''}Rest ${f1(t.cashAfter, 2)}</span></div>
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
        saveLocal(); ctx.refresh();
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
          ${pool.snapshots.map(s => `<div class="usm-r"><span class="usm-n">${fmtDate(s.date)}${s.base ? ' <span class="usm-tag est">Basis</span>' : ''}</span><span class="usm-m">${s.players.length} Spieler</span>${s.repo ? ' <span class="usm-tag est">Repo</span>' : ''}${s.base || s.repo ? '' : `<button class="usm-x" data-snapdel="${s.date}" aria-label="Löschen">×</button>`}</div>`).join('')}
          ${pool.snapshots.length < 2 ? '<p class="muted usm-small">Veränderungen gibt es ab dem zweiten Snapshot (Import nach dem Update am 15.11.).</p>' : ''}</div></section>
        <section class="card usm-mt"><div class="usm-pad"><div class="usm-filters">
          <input type="search" class="usm-input" id="usmSalQ" placeholder="Spieler suchen…">
          <label class="usm-small"><input type="checkbox" id="usmSalMine"> nur mein Team</label>
          <select class="usm-input usm-sel" id="usmSalSort"><option value="d1">Δ letzte Woche ↓</option><option value="d1a">Δ letzte Woche ↑</option><option value="d0">Δ seit Start ↓</option><option value="gap">Δ Ziel ↓ (steigt eher)</option><option value="gapa">Δ Ziel ↑ (fällt eher)</option><option value="sal">Gehalt</option></select>
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
        const gz = p => p.tgt == null ? -99 : p.gap, gza = p => p.tgt == null ? 99 : p.gap;
        l.sort((a, b) => s === 'd1' ? d1(b) - d1(a) : s === 'd1a' ? d1(a) - d1(b) : s === 'd0' ? d0(b) - d0(a) : s === 'gap' ? gz(b) - gz(a) : s === 'gapa' ? gza(a) - gza(b) : b.sal - a.sal);
        $('usmSalTbl').innerHTML = `<thead><tr><th>Spieler</th><th>Team</th><th>Pos</th><th class="num">Gehalt</th><th class="num">Vorwoche</th><th class="num">Δ Woche</th><th class="num">Start</th><th class="num">Δ Start</th><th class="num">GP</th><th class="num">FP/G real</th><th class="num">Ziel</th><th class="num">Δ Ziel</th><th class="num">FP/G proj</th></tr></thead><tbody>`
          + l.slice(0, 200).map(p => `<tr><td class="strong usm-name">${e(p.short)}${mine.has(p.key) ? ' <span class="usm-tag r">Team</span>' : ''}</td><td>${p.abbr}</td><td>${p.pos}</td>
            <td class="num">${f1(p.sal, 2)}</td><td class="num">${f1(p.prevSal, 2)}</td><td class="num">${dc(d1(p))}</td><td class="num">${f1(p.firstSal, 2)}</td><td class="num">${dc(d0(p))}</td>
            <td class="num">${p.gp || '–'}</td><td class="num">${p.fpgAct ? f1(p.fpgAct) : '–'}</td><td class="num"${p.dem ? ` title="Formel ${f1(p.tgtF, 2)} ${p.dem > 0 ? '+' : ''}${f1(p.dem, 2)} Nachfrage (${p.dem > 0 ? 'Massenkauf erwartet' : 'Massenverkauf erwartet'})"` : ''}>${p.tgt == null ? '–' : f1(p.tgt, 2) + (p.dem ? (p.dem > 0 ? '↑' : '↓') : '')}</td><td class="num">${p.tgt == null ? '–' : p.frozen ? `<span class="muted" title="Am nächsten Update noch unter ${MIN_GAMES} Spielen: Gehalt bleibt vorerst">${p.gap > 0 ? '+' : ''}${f1(p.gap, 2)}*</span>` : dc(p.gap)}</td><td class="num">${f1(p.fpg)}</td></tr>`).join('') + '</tbody>';
      }
      // Solange es noch kein Gehalts-Update gab (alle Δ = 0), nach Δ Ziel sortieren statt nach einer Spalte voller Nullen
      if (!pool.players.some(p => Math.abs(d1(p)) > 0.004)) $('usmSalSort').value = 'gap';
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

  // ======================= ÜBERSICHT (täglich, aus basketball.de) =======================
  // Daten: leagues/usm/data/usm-live.js + usm-ranking.js, erzeugt von
  // leagues/usm/scripts/sync-usm.js (GitHub Action usm-sync.yml, täglich 12:35 Berlin,
  // kurz nach dem FP-Update von basketball.de um 12:00).
  const de = (x, d = 1) => (x == null || !isFinite(x)) ? '–' : Number(x).toLocaleString('de-DE', { minimumFractionDigits: d, maximumFractionDigits: d });
  const deInt = x => (x == null || !isFinite(x)) ? '–' : Number(x).toLocaleString('de-DE');
  const sgn = (x, d = 1) => (x == null || !isFinite(x)) ? '–' : (x > 0 ? '+' : '') + de(x, d);
  const arrow = d => d > 0 ? `<span class="up">▲ ${d}</span>` : d < 0 ? `<span class="down">▼ ${-d}</span>` : '<span class="muted">±0</span>';

  // Kleine SVG-Diagramme: Tagespunkte (Balken, Ø aller Manager als Linie) und Rang (Linie, oben = besser)
  function liveCharts(hist) {
    if (hist.length < 2) return '<p class="muted usm-small">Der Verlauf füllt sich ab dem zweiten Tag.</p>';
    const W = 640, H = 170, P = { l: 38, r: 10, t: 12, b: 26 };
    const n = hist.length, iw = W - P.l - P.r, ih = H - P.t - P.b;
    const x = i => P.l + (n === 1 ? iw / 2 : i * iw / (n - 1));
    const lbl = h => h.g.slice(8, 10) + '.' + h.g.slice(5, 7) + '.';
    const step = Math.max(1, Math.ceil(n / 10));
    const xAxis = hist.map((h, i) => i % step && i !== n - 1 ? '' : `<text x="${x(i)}" y="${H - 8}" text-anchor="middle" class="usm-ch-t">${lbl(h)}</text>`).join('');
    // Tagespunkte
    const maxD = Math.max(...hist.map(h => Math.max(h.day || 0, h.dayBest || 0, h.avgDay || 0)), 1);
    const yD = v => P.t + ih - (v / maxD) * ih;
    const bw = Math.max(4, Math.min(26, iw / n * 0.6));
    const bars = hist.map((h, i) => `<rect x="${x(i) - bw / 2}" y="${yD(h.day)}" width="${bw}" height="${P.t + ih - yD(h.day)}" rx="2" class="usm-ch-bar"><title>${lbl(h)}: ${de(h.day)} FP (Tagesrang ${deInt(h.dayRank)})</title></rect>`).join('');
    const avg = hist.filter(h => h.avgDay != null).map(h => `${x(hist.indexOf(h))},${yD(h.avgDay)}`).join(' ');
    const gridD = [0, 0.5, 1].map(f => `<line x1="${P.l}" x2="${W - P.r}" y1="${yD(maxD * f)}" y2="${yD(maxD * f)}" class="usm-ch-grid"/><text x="${P.l - 6}" y="${yD(maxD * f) + 4}" text-anchor="end" class="usm-ch-t">${Math.round(maxD * f)}</text>`).join('');
    const c1 = `<svg viewBox="0 0 ${W} ${H}" class="usm-ch" role="img" aria-label="Tagespunkte je Spieltag">${gridD}${bars}<polyline points="${avg}" class="usm-ch-avg"/>${xAxis}</svg>`;
    // Rang
    const ranks = hist.map(h => h.rank), lo = Math.min(...ranks), hi = Math.max(...ranks);
    const pad = Math.max(3, Math.round((hi - lo) * 0.15)), top = Math.max(1, lo - pad), bot = hi + pad;
    const yR = v => P.t + ((v - top) / Math.max(1, bot - top)) * ih;
    const line = hist.map((h, i) => `${x(i)},${yR(h.rank)}`).join(' ');
    const dots = hist.map((h, i) => `<circle cx="${x(i)}" cy="${yR(h.rank)}" r="3.2" class="usm-ch-dot"><title>${lbl(h)}: Rang ${h.rank} von ${deInt(h.n)}</title></circle>`).join('');
    const gridR = [top, Math.round((top + bot) / 2), bot].map(v => `<line x1="${P.l}" x2="${W - P.r}" y1="${yR(v)}" y2="${yR(v)}" class="usm-ch-grid"/><text x="${P.l - 6}" y="${yR(v) + 4}" text-anchor="end" class="usm-ch-t">${v}</text>`).join('');
    const c2 = `<svg viewBox="0 0 ${W} ${H}" class="usm-ch" role="img" aria-label="Gesamtrang je Spieltag">${gridR}<polyline points="${line}" class="usm-ch-line"/>${dots}${xAxis}</svg>`;
    return `<div class="usm-ch-wrap"><div><div class="usm-ch-h">Tagespunkte <span class="muted">· Linie = Ø aller Manager</span></div>${c1}</div><div><div class="usm-ch-h">Gesamtrang <span class="muted">· oben = besser</span></div>${c2}</div></div>`;
  }

  const rankRow = (r, me, watch) => {
    const cls = r.team === me ? ' class="usm-me"' : watch.has(r.team) ? ' class="usm-watch"' : '';
    return `<tr${cls}><td class="num">${r.rank}</td><td class="num">${arrow(r.diff)}</td><td class="strong">${e(r.team)}</td><td class="muted">${e(r.mgr)}</td><td class="num">${de(r.pts)}</td><td class="num">${sgn(r.day)}</td><td class="num">${deInt(r.dayRank)}</td></tr>`;
  };
  const rankHead = '<thead><tr><th class="num">Rang</th><th class="num">+/-</th><th>Team</th><th>Manager</th><th class="num">Punkte</th><th class="num">Spieltag</th><th class="num">Tagesrang</th></tr></thead>';

  MFHFB.pages.register({
    id: 'usmlive', section: 'home', label: 'Übersicht', icon: '🏠', applies: { sport: ['nba'] },
    when: l => l.key === 'usm', data: ['?usm-live', '?usm-ranking'],
    render({ data }) {
      const L = data.USM_LIVE, H = data.USM_HISTORY || [];
      if (!L) {
        return head('Übersicht', 'Tabelle, Tagespunkte und Spielerpunkte – täglich um 12:35 aus basketball.de')
          + `<section class="card"><div class="usm-pad"><p>Noch keine Daten. Die Übersicht füllt sich nach dem ersten Lauf der GitHub Action <b>usm-sync.yml</b>.</p>
            <p class="muted usm-small">Dafür braucht das Repo die Secrets <code>USM_USER</code> und <code>USM_PASS</code> (basketball.de-Login), Repo → Settings → Secrets and variables → Actions.</p></div></section>`;
      }
      const me = L.me, watch = new Set((L.watch || []).map(w => w.team));
      const upd = new Date(L.updated).toLocaleString('de-DE', { timeZone: 'Europe/Berlin', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
      const prev = H.filter(h => h.d < L.date).slice(-1)[0];
      const players = L.players.slice().sort((a, b) => (b.today ?? -1) - (a.today ?? -1) || b.last - a.last);
      const haveToday = players.some(p => p.today != null);
      const sumToday = players.reduce((s, p) => s + (p.today || 0), 0);
      const teamDay = me.day;
      const avgDay = H.length ? H[H.length - 1].avgDay : null;
      const stale = (Date.now() - new Date(L.updated)) > 36 * 3600e3;

      const stats = `<div class="stat-row usm-row">
        ${stat('Gesamtrang', `#${me.rank} <span class="usm-sv-s">${arrow(me.diff)}</span>`)}
        ${stat('Punkte gesamt', de(me.pts))}
        ${stat(`Spieltag ${fmtDate(L.gameday).slice(0, 6)}`, sgn(teamDay), teamDay >= (avgDay || 0) ? 'up' : '')}
        ${stat('Tagesrang', `#${deInt(me.dayRank)}`)}
        ${stat('Cash · Trades', `${de(L.team.budget, 2)} <span class="usm-sv-s">Mio · ${L.team.trades ?? '–'}</span>`)}
      </div>`;

      const pRows = players.map(p => {
        const notPlayed = haveToday && (p.played === 0);
        const today = p.today == null ? `<span class="muted" title="Erster Tag: Punkte des letzten Spiels">${de(p.last)}*</span>` : notPlayed ? '<span class="muted">–</span>' : `<b>${de(p.today)}</b>`;
        return `<tr><td>${p.pos}</td><td class="strong usm-name">${e(p.name)}${p.rookie ? ' <span class="usm-tag r">R</span>' : ''}</td><td class="muted">${e(p.team)}</td>
          <td class="num">${today}</td><td class="num">${de(p.last)}</td><td class="num">${de(p.fpg, 2)}</td><td class="num">${p.gp}</td><td class="num">${de(p.fp)}</td><td class="num">${de(p.sal, 2)}</td></tr>`;
      }).join('');
      const soldRows = (L.sold || []).map(p => `<tr class="muted"><td>–</td><td class="usm-name">${e(p.name)} <span class="usm-tag est">verkauft</span></td><td>${e(p.team)}</td><td class="num">–</td><td class="num">${de(p.last)}</td><td class="num">${de(p.fpg, 2)}</td><td class="num">${p.gp}</td><td class="num">${de(p.fp)}</td><td class="num">${de(p.sal, 2)}</td></tr>`).join('');
      const pFoot = haveToday
        ? `Spieler zusammen ${de(sumToday)} FP, Team am Spieltag ${de(teamDay)} FP${Math.abs(sumToday - teamDay) > 0.6 ? ' (Unterschied: Punkte von Spielern, die am Spieltag noch bzw. nicht mehr im Kader waren, oder nachträgliche Korrekturen)' : ''}.`
        : '* Erster Tag mit Daten: Spalte zeigt die Punkte des letzten Spiels. Ab morgen stehen hier die Punkte des Spieltags.';

      const around = L.around || [];
      const tableTop = (L.top || []).slice(0, 10);
      const showAround = around.length && me.rank > 13;
      const watchRows = (L.watch || []).filter(w => !tableTop.some(t => t.team === w.team) && !around.some(t => t.team === w.team));

      const myDay = { ...me };
      const dayTop = (L.dayTop || []).slice(0, 10);

      return head('Übersicht', `Spieltag ${fmtDate(L.gameday)} (Nacht auf ${fmtDate(L.date)}) · aktualisiert ${upd} · täglich 12:35 nach dem basketball.de-Update`)
        + (stale ? '<div class="usm-warn">Die Daten sind älter als 36 Stunden – die GitHub Action <b>usm-sync.yml</b> ist vermutlich fehlgeschlagen.</div>' : '')
        + stats
        + `<div class="usm-grid usm-live-grid">
          <section class="card usm-main"><div class="card-head"><h2>Spielerpunkte am Spieltag</h2><span class="muted usm-small">${L.team.name}</span></div>
            <div class="usm-tbl"><table class="table compact usm-table"><thead><tr><th>Pos</th><th>Spieler</th><th>NBA-Team</th><th class="num">Spieltag</th><th class="num">letztes Spiel</th><th class="num">FP/G</th><th class="num">GP</th><th class="num">FP ges.</th><th class="num">Wert</th></tr></thead>
            <tbody>${pRows}${soldRows}</tbody></table></div>
            <div class="usm-pad"><p class="muted usm-small">${pFoot}</p></div></section>
          <section class="card"><div class="card-head"><h2>Tagesranking</h2><span class="muted usm-small">${fmtDate(L.gameday)}</span></div>
            <div class="usm-tbl"><table class="table compact usm-table"><thead><tr><th class="num">#</th><th>Team</th><th class="num">Spieltag</th><th class="num">Gesamt</th></tr></thead><tbody>
            ${dayTop.map(r => `<tr${r.team === me.team ? ' class="usm-me"' : watch.has(r.team) ? ' class="usm-watch"' : ''}><td class="num">${r.dayRank}</td><td class="strong">${e(r.team)}</td><td class="num">${sgn(r.day)}</td><td class="num">${r.rank}</td></tr>`).join('')}
            ${dayTop.some(r => r.team === me.team) ? '' : `<tr class="usm-gap"><td colspan="4">…</td></tr><tr class="usm-me"><td class="num">${deInt(myDay.dayRank)}</td><td class="strong">${e(me.team)}</td><td class="num">${sgn(me.day)}</td><td class="num">${me.rank}</td></tr>`}
            ${(L.watch || []).filter(w => !dayTop.some(r => r.team === w.team)).map(w => `<tr class="usm-watch"><td class="num">${deInt(w.dayRank)}</td><td class="strong">${e(w.team)}</td><td class="num">${sgn(w.day)}</td><td class="num">${w.rank}</td></tr>`).join('')}
            </tbody></table></div>
            <div class="usm-pad"><p class="muted usm-small">Ø aller ${deInt(L.managers)} Manager: ${de(avgDay)} FP${prev ? ` · Vortag du: ${sgn(prev.day)} (Tagesrang ${deInt(prev.dayRank)})` : ''}</p></div></section>
        </div>
        <section class="card usm-mt"><div class="card-head"><h2>Verlauf</h2></div><div class="usm-pad">${liveCharts(H)}</div></section>
        <section class="card usm-mt"><div class="card-head"><h2>Tabelle</h2><span class="muted usm-small">${deInt(L.managers)} Manager</span></div>
          <div class="usm-tbl"><table class="table compact usm-table">${rankHead}<tbody>
            ${tableTop.map(r => rankRow(r, me.team, watch)).join('')}
            ${showAround ? '<tr class="usm-gap"><td colspan="7">…</td></tr>' + around.filter(r => r.rank > 10).map(r => rankRow(r, me.team, watch)).join('') : ''}
            ${watchRows.length ? '<tr class="usm-gap"><td colspan="7">…</td></tr>' + watchRows.map(r => rankRow(r, me.team, watch)).join('') : ''}
          </tbody></table></div>
          <div class="usm-pad"><div class="usm-filters"><input type="search" class="usm-input" id="usmRkQ" placeholder="Team oder Manager in der ganzen Rangliste suchen…"></div><div id="usmRkHits"></div>
          <p class="muted usm-small">Hervorgehoben: dein Team und Vergleichs-Teams (leagues/usm/usm-config.json). Spieltag = Punkte des letzten Spieltags, Tagesrang = Platz nach diesen Punkten unter allen Managern.</p></div></section>`;
    },
    mount(root, ctx) {
      const R = ctx.data.USM_RANKING, L = ctx.data.USM_LIVE;
      const q = root.querySelector('#usmRkQ'); if (!q || !R || !L) return;
      const watch = new Set((L.watch || []).map(w => w.team));
      q.addEventListener('input', () => {
        const s = q.value.trim().toLowerCase(), out = root.querySelector('#usmRkHits');
        if (s.length < 2) { out.innerHTML = ''; return; }
        const hits = R.rows.filter(r => (r[2] + ' ' + r[3]).toLowerCase().includes(s)).slice(0, 15)
          .map(r => ({ rank: r[0], diff: r[1], team: r[2], mgr: r[3], pts: r[4], day: r[5], dayRank: r[7] }));
        out.innerHTML = hits.length ? `<div class="usm-tbl"><table class="table compact usm-table">${rankHead}<tbody>${hits.map(r => rankRow(r, L.me.team, watch)).join('')}</tbody></table></div>` : '<p class="muted usm-small">Kein Treffer.</p>';
      });
    },
  });

  // ======================= PLAN (Trade-Pfad) =======================
  // Daten: leagues/usm/data/usm-plan.js (von Claude aus einer Pfad-Suche erzeugt, sonntags neu).
  // Status je Schritt gegen den echten Kader aus usm-live.js: erledigt / nächster / offen.
  MFHFB.pages.register({
    id: 'usmplan', section: 'home', label: 'Plan', icon: '🗺️', applies: { sport: ['nba'] },
    when: l => l.key === 'usm', data: ['?usm-plan', '?usm-live'],
    render({ data }) {
      const P = data.USM_PLAN, L = data.USM_LIVE;
      if (!P) return head('Plan', 'Trade-Plan für die nächsten Wochen') + MFHFB.ui.empty('Noch kein Plan', 'leagues/usm/data/usm-plan.js fehlt.', '🗺️');
      const roster = new Set(((L && L.players) || []).map(p => p.name));
      const status = s => (roster.has(s.in) && !roster.has(s.out)) ? 'done' : 'open';
      let nextMarked = false;
      const steps = P.steps.map(s => { let st = status(s); if (st === 'open' && !nextMarked) { st = 'next'; nextMarked = true; } return { ...s, st }; });
      const stLabel = { done: '<span class="usm-plan-st done">✓ erledigt</span>', next: '<span class="usm-plan-st next">als Nächstes</span>', open: '<span class="usm-plan-st">offen</span>' };
      const stand = new Date(P.stand).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
      const delta = (a, b, d = 0) => { const x = a - b; return `<span class="${x >= 0 ? 'up' : 'down'}">${x >= 0 ? '+' : ''}${de(x, d)}</span>`; };
      const sg = (x, d = 0) => `<span class="${x >= 0 ? 'up' : 'down'}">${x >= 0 ? '+' : ''}${de(x, d)}</span>`;
      const E = P.ergebnis, B = P.basis;

      const stepCards = steps.map((s, i) => `
        <section class="card usm-plan-step ${s.st}">
          <div class="card-head"><h2>${i + 1}. ${e(s.label)}</h2>${stLabel[s.st]}</div>
          <div class="usm-pad">
            <div class="usm-plan-trade">
              <div><div class="usm-lbl">Raus</div><b>${e(flip(s.out))}</b> <span class="usm-m">${de(s.outSal, 2)}</span></div>
              <div class="usm-plan-arrow">→</div>
              <div><div class="usm-lbl">Rein</div><b>${e(flip(s.in))}</b> <span class="usm-m">${de(s.inSal, 2)}</span></div>
              <div><div class="usm-lbl">Cash danach</div><b>${de(s.cashAfter, 2)}</b> <span class="usm-m">${e(s.trade)}</span></div>
            </div>
            <dl class="usm-plan-dl">
              <dt>Wirksam</dt><dd>${e(s.wirksam)}</dd>
              <dt>Spiele</dt><dd>${e(s.spiele)}</dd>
              <dt>Warum</dt><dd>${e(s.warum)}</dd>
              <dt>Alternativen</dt><dd>${e(s.alternativen)}</dd>
              <dt>Risiko</dt><dd>${e(s.risiko)}</dd>
            </dl>
          </div>
        </section>`).join('');

      const R = P.road;
      const roadCard = () => {
        if (!R) return '';
        const lead = L && L.top && L.top[0], meL = L && L.me;
        const gapNow = lead && meL ? lead.pts - meL.pts : R.basis.top - R.basis.me;
        const gdNow = (L && L.gameday) || R.basis.gameday;
        const gNow = lead && meL && lead.avg && meL.avg ? Math.round(lead.pts / lead.avg - meL.pts / meL.avg) : R.basis.topG - R.basis.meG;
        // Soll für heute: linear zwischen den Soll-Punkten
        const T = d => Date.parse(d + 'T12:00:00Z'), t = T(gdNow);
        let soll = R.soll[R.soll.length - 1].gap;
        for (let i = 1; i < R.soll.length; i++) { const a = R.soll[i - 1], b = R.soll[i]; if (t <= T(b.d)) { soll = a.gap + (b.gap - a.gap) * Math.max(0, (t - T(a.d)) / (T(b.d) - T(a.d))); break; } }
        const ok = gapNow <= soll;
        const gapTxt = g => g > 0 ? `${deInt(Math.round(g))} hinten` : g < 0 ? `${deInt(Math.round(-g))} vorn` : 'gleichauf';
        // Verlauf des Rückstands aus USM_HISTORY
        const hist = (data.USM_HISTORY || []).filter(h => h.top).map(h => [h.g, h.top - h.pts]);
        const trend = hist.length > 1 ? hist.slice(-7).map(([d, g]) => `${d.slice(8, 10)}.${d.slice(5, 7)}. ${deInt(Math.round(g))}`).join(' · ') : 'Ab morgen hier: Rückstand Tag für Tag.';
        return `<section class="card usm-mt usm-road"><div class="card-head"><h2>👑 Road to #1</h2><span class="muted usm-small">${lead ? `Platz 1: ${e(lead.team)} (${e(lead.mgr)})` : ''} · Spieltag ${fmtDate(gdNow).slice(0, 6)}</span></div>
          <div class="stat-row usm-row usm-pad">
            ${stat('Rückstand', `${deInt(Math.round(gapNow))} <span class="usm-sv-s">FP</span>`)}
            ${stat('Soll heute', `${gapTxt(soll)}`)}
            ${stat('Status', ok ? '<span class="up">im Soll</span>' : `<span class="down">${deInt(Math.round(gapNow - soll))} über Soll</span>`)}
            ${stat('Spiele-Differenz', `${gNow > 0 ? '−' : '+'}${Math.abs(gNow)} <span class="usm-sv-s">Spiele</span>`)}
            ${stat('FP/G du / er', meL && lead ? `${de(meL.avg)} / ${de(lead.avg)}` : `${de(R.basis.meFpg)} / ${de(R.basis.topFpg)}`)}
          </div>
          <div class="usm-pad">
            <p><b>Kern:</b> ${e(R.kern)}</p>
            <div class="usm-lbl usm-mt">Der Weg</div>
            ${R.weg.map(w => `<div class="usm-pf-tr"><div class="usm-lbl">${e(w.wann)}</div><div><b>${e(w.was)}</b></div><div class="usm-m">${e(w.warum)}</div></div>`).join('')}
            <div class="usm-grid usm-live-grid usm-mt">
              <div><div class="usm-lbl">Soll-Pfad (höchstens so viel Rückstand)</div>
                <table class="table compact usm-table"><tbody>${R.soll.map(s => `<tr${t >= T(s.d) ? ' class="muted"' : ''}><td>${fmtDate(s.d)}</td><td class="num">${gapTxt(s.gap)}</td></tr>`).join('')}</tbody></table>
                <p class="muted usm-small">Rückstand zuletzt: ${e(trend)}</p></div>
              <div><div class="usm-lbl">Was laufen muss</div><ul class="usm-plan-ul">${R.bedingungen.map(x => `<li>${e(x)}</li>`).join('')}</ul></div>
            </div>
            <div class="usm-lbl usm-mt">Szenarien bis Saisonende (11.04.)</div>
            <div class="usm-tbl"><table class="table compact usm-table"><thead><tr><th>Annahme</th><th>Überholen</th><th class="num">du</th><th class="num">Platz 1</th><th class="num">Abstand</th></tr></thead><tbody>
              ${R.szenarien.map(s => `<tr${s.ziel ? ' class="usm-me"' : ''}><td>${e(s.name)}</td><td>${e(s.ueber)}</td><td class="num">${deInt(s.me)}</td><td class="num">${deInt(s.top)}</td><td class="num">${sg(s.me - s.top)}</td></tr>`).join('')}
            </tbody></table></div>
            <p class="muted usm-small">Hervorgehoben = Grundlage des Soll-Pfads. ${e(R.grenzen)}</p>
          </div></section>`;
      };
      const V = P.werte;
      const valTable = `<div class="usm-tbl"><table class="table compact usm-table"><thead><tr><th>Spieler</th><th>Pos</th><th>Team</th><th class="num">FP/G real</th><th class="num">Proj.</th>${V.tage.map(t => `<th class="num">${t}</th>`).join('')}<th class="num">Δ</th><th>Hinweis</th></tr></thead><tbody>
        ${V.spieler.map(p => `<tr><td class="strong">${e(p.name)}</td><td>${p.pos}</td><td>${p.team}</td><td class="num">${p.real == null ? '–' : de(p.real)}</td><td class="num">${de(p.proj)}</td>
          ${p.val.map(v => `<td class="num">${de(v, 2)}</td>`).join('')}<td class="num">${sg(p.val[p.val.length - 1] - p.val[0], 2)}</td><td class="muted usm-small">${e(p.inj)}</td></tr>`).join('')}
        </tbody></table></div>`;

      const scen = `<div class="usm-tbl"><table class="table compact usm-table"><thead><tr><th>Szenario</th><th class="num">FP bis 20.12.</th><th class="num">FP danach</th><th class="num">Teamwert</th><th class="num">Cash</th><th class="num">gekauft</th><th>Trades</th><th>Urteil</th></tr></thead><tbody>
        ${P.szenarien.map(s => `<tr${/Plan/.test(s.name) ? ' class="usm-me"' : ''}><td class="strong">${e(s.name)}</td><td class="num">${sg(s.fp)}</td><td class="num">${sg(s.rest)}</td><td class="num">${sg(s.wert, 2)}</td><td class="num">${de(s.cash, 2)}</td><td class="num">${s.gekauft}</td><td class="usm-small">${e(s.trades)}</td><td class="muted usm-small">${e(s.urteil)}</td></tr>`).join('')}
        </tbody></table></div>`;

      return head('Plan', `Trade-Pfad bis 20.12. · Stand ${stand} · ${e(P.daten)}`)
        + `<div class="stat-row usm-row">
            ${stat('FP bis 20.12.', `${deInt(E.fp)} <span class="usm-sv-s">${delta(E.fp, B.fp)}</span>`)}
            ${stat('FP danach (Rest)', `${deInt(E.rest)} <span class="usm-sv-s">${delta(E.rest, B.rest)}</span>`)}
            ${stat('Teamwert 20.12.', `${de(E.wert, 2)} <span class="usm-sv-s">${delta(E.wert, B.wert, 2)}</span>`)}
            ${stat('Cash 20.12.', de(E.cash, 2))}
            ${stat('Schritte', `${steps.filter(s => s.st === 'done').length}/${steps.length}`)}
          </div>
          <p class="muted usm-small usm-pad">Ziel: ${e(P.ziel)} Vergleich jeweils gegen „keine Trades“ (${deInt(B.fp)} FP bis 20.12., ${deInt(B.rest)} danach, Teamwert ${de(B.wert, 2)}).</p>
          ${stepCards}
          ${roadCard()}
          <section class="card usm-mt"><div class="card-head"><h2>Szenarien</h2><span class="muted usm-small">Δ gegenüber „keine Trades“</span></div>${scen}</section>
          <section class="card usm-mt"><div class="card-head"><h2>Werte-Verlauf</h2><span class="muted usm-small">erwartetes Gehalt ab So 22:00</span></div>${valTable}
            <p class="muted usm-small usm-pad">Spieler unter 6 Spielen bleiben beim Startgehalt, bis sie 6 Spiele haben (Beal, Lively, Niederhauser). Werte nach Formel mit echten FP + Projection; Formel-Ungenauigkeit ±0,1–0,2.</p></section>
          <div class="usm-grid usm-live-grid usm-mt">
            <section class="card"><div class="card-head"><h2>Beobachten</h2></div><div class="usm-pad"><ul class="usm-plan-ul">${P.beobachten.map(x => `<li>${e(x)}</li>`).join('')}</ul></div></section>
            <section class="card"><div class="card-head"><h2>Regeln</h2></div><div class="usm-pad"><ul class="usm-plan-ul">${P.regeln.map(x => `<li>${e(x)}</li>`).join('')}</ul><p class="muted usm-small">${e(P.next)}</p></div></section>
          </div>`;
    },
  });

  // ======================= PERFEKTER VERLAUF (Rückblick) =======================
  // Daten: leagues/usm/data/usm-hindsight.js (leagues/usm/scripts/build-hindsight.js, montags).
  MFHFB.pages.register({
    id: 'usmperfect', section: 'home', label: 'Perfekter Verlauf', icon: '🏆', applies: { sport: ['nba'] },
    when: l => l.key === 'usm', data: ['?usm-hindsight', '?usm-live'],
    render({ data }) {
      const H = data.USM_HINDSIGHT, L = data.USM_LIVE;
      if (!H) return head('Perfekter Verlauf', 'Rückblick mit Wissen von heute') + MFHFB.ui.empty('Noch keine Daten', 'leagues/usm/data/usm-hindsight.js fehlt.', '🏆');
      const mine = new Set(((L && L.players) || []).map(p => p.name));
      const upd = new Date(H.updated).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
      const me = H.compare && H.compare.me, top = H.compare && H.compare.top;
      const pct = (a, b) => b ? Math.round(a / b * 100) + ' %' : '–';
      // Vergleich am selben Spieltag (dein Stand stammt aus dem letzten Sync)
      const gd = (me && me.gameday) || H.through;
      const perfAt = ((H.curve || []).filter(c => c[0] <= gd).pop() || [null, H.fp])[1];
      const soldMap = new Map((H.trades || []).map(t => [t.out, t]));
      const sold = n => { const t = soldMap.get(n); if (!t) return '<span class="muted">behalten</span>'; const d = t.outSal - (H.draft.find(p => p.name === n) || {}).sal; return `${de(t.outSal, 2)} <span class="usm-m">${fmtDate(t.date).slice(0, 6)}${isFinite(d) && Math.abs(d) >= 0.005 ? ` · ${d > 0 ? '+' : ''}${de(d, 2)}` : ''}</span>`; };
      const mark = n => mine.has(n) ? ' <span class="usm-tag r" title="Auch in deinem Kader">dein</span>' : '';
      // Verlauf (kumuliert)
      const C = H.curve || [];
      let chart = '';
      if (C.length > 1) {
        // Vergleichsteams: Platz 1, du, Mücke, Dan – Verlauf aus USM_HISTORY (täglich), aktueller Stand aus USM_LIVE
        const Hist = (data.USM_HISTORY || []).filter(h => h.g);
        const watchNames = { MueckeHGW: 'Mücke', MagicBallers: 'Dan', Hoopies: 'Hoopies', ...((L && L.labels) || {}) };
        ((L && L.watch) || []).forEach(w => { if (!watchNames[w.team]) watchNames[w.team] = w.team; });
        const leader = L && L.top && L.top[0];
        const S = [
          { key: 'top', cls: 'top', label: `👑 ${leader ? (leader.team.length > 11 ? leader.team.slice(0, 10) + '…' : leader.team) : 'Platz 1'}`, tip: leader ? `Platz 1: ${leader.team} (${leader.mgr})` : 'Platz 1', pts: h => h.top, now: leader ? leader.pts : top && top.pts },
          { key: 'me', cls: 'me', label: 'du', tip: `Du (${(L && L.me && L.me.team) || 'Kenora Hoops'}, Rang ${(L && L.me && L.me.rank) || '–'})`, pts: h => h.pts, now: L && L.me ? L.me.pts : me && me.pts },
          ...Object.keys(watchNames).map(t => {
            const w = ((L && L.watch) || []).find(x => x.team === t);
            return { key: t, cls: 'w', label: watchNames[t], tip: `${watchNames[t]} (${t}${w ? ', Rang ' + w.rank : ''})`, pts: h => h.watch && h.watch[t] ? h.watch[t][1] : null, now: w ? w.pts : null };
          }),
        ];
        // Datumsachse = Verlauf des perfekten Wegs + Sync-Spieltage
        const dates = [...new Set([...C.map(c => c[0]), ...Hist.map(h => h.g), ...(L && L.gameday ? [L.gameday] : [])])].sort();
        const di = Object.fromEntries(dates.map((d, i) => [d, i]));
        S.forEach(s => {
          const pts = Hist.map(h => [h.g, s.pts(h)]).filter(p => p[1] != null);
          if (L && L.gameday && s.now != null) { const k = pts.findIndex(p => p[0] === L.gameday); k >= 0 ? (pts[k][1] = s.now) : pts.push([L.gameday, s.now]); }
          s.series = pts.sort((u, v) => u[0] < v[0] ? -1 : 1);
        });
        const W = 640, Hh = 190, Pd = { l: 44, r: 132, t: 12, b: 24 }, iw = W - Pd.l - Pd.r, ih = Hh - Pd.t - Pd.b;
        const max = Math.max(...C.map(c => c[1]), ...S.flatMap(s => s.series.map(p => p[1])));
        const x = d => Pd.l + di[d] * iw / Math.max(1, dates.length - 1), y = v => Pd.t + ih - v / max * ih;
        const line = C.map(c => `${x(c[0])},${y(c[1])}`).join(' ');
        const tr = new Set((H.trades || []).map(t => t.date));
        const dots = C.map(c => `<circle cx="${x(c[0])}" cy="${y(c[1])}" r="${tr.has(c[0]) ? 4 : 7}" class="${tr.has(c[0]) ? 'usm-ch-dot' : 'usm-ch-hit'}"><title>${fmtDate(c[0]).slice(0, 6)}: perfekt ${deInt(Math.round(c[1]))} FP${tr.has(c[0]) ? ' · Trade' : ''}</title></circle>`).join('');
        const step = Math.ceil(dates.length / 8);
        const xl = dates.map((d, i) => i % step && i !== dates.length - 1 ? '' : `<text x="${x(d)}" y="${Hh - 6}" text-anchor="middle" class="usm-ch-t">${d.slice(8, 10)}.${d.slice(5, 7)}.</text>`).join('');
        // Linien + Punkte der Vergleichsteams; Labels rechts, ohne Überlappung
        const perfOn = d => ((C.filter(c => c[0] <= d).pop()) || [null, 0])[1];
        const refs = S.filter(s => s.series.length).map(s => {
          const lp = s.series[s.series.length - 1];
          const pl = s.series.length > 1 ? `<polyline points="${s.series.map(p => `${x(p[0])},${y(p[1])}`).join(' ')}" class="usm-ch-l2 ${s.cls}"/>` : '';
          const pts = s.series.map(p => `<circle cx="${x(p[0])}" cy="${y(p[1])}" r="${s.cls === 'me' ? 5 : 4}" class="usm-ch-ref ${s.cls}"><title>${e(s.tip)} · ${fmtDate(p[0]).slice(0, 6)}: ${deInt(Math.round(p[1]))} FP (${pct(p[1], perfOn(p[0]))} vom Perfekten)</title></circle>`).join('');
          return { s, lp, svg: pl + pts, ly: y(lp[1]) };
        }).sort((u, v) => u.ly - v.ly);
        for (let i = 1; i < refs.length; i++) refs[i].ly = Math.max(refs[i].ly, refs[i - 1].ly + 12);
        const lx = W - Pd.r + 8;
        const labels = refs.map(r => `<line x1="${x(r.lp[0]) + 5}" y1="${y(r.lp[1])}" x2="${lx - 2}" y2="${r.ly}" class="usm-ch-lead"/><text x="${lx}" y="${r.ly + 3.5}" class="usm-ch-t usm-ch-lab ${r.s.cls}"><title>${e(r.s.tip)}</title>${e(r.s.label)} ${deInt(Math.round(r.lp[1]))}</text>`).join('');
        const grid = [0, 0.5, 1].map(fq => `<line x1="${Pd.l}" x2="${W - Pd.r}" y1="${y(max * fq)}" y2="${y(max * fq)}" class="usm-ch-grid"/><text x="${Pd.l - 6}" y="${y(max * fq) + 4}" text-anchor="end" class="usm-ch-t">${deInt(Math.round(max * fq))}</text>`).join('');
        const pl = C[C.length - 1];
        const perfLab = `<text x="${lx}" y="${Math.min(y(pl[1]) + 3.5, (refs[0] ? refs[0].ly : 1e9) - 9)}" class="usm-ch-t usm-ch-lab perf">perfekt ${deInt(Math.round(pl[1]))}</text>`;
        chart = `<svg viewBox="0 0 ${W} ${Hh}" class="usm-ch" role="img" aria-label="Kumulierte Punkte des perfekten Verlaufs im Vergleich">${grid}<polyline points="${line}" class="usm-ch-line"/>${refs.map(r => r.svg).join('')}${dots}${labels}${perfLab}${xl}</svg>`;
      }
      return head('Perfekter Verlauf', `Wen man hätte draften und traden müssen – mit Wissen von heute · bis Spieltag ${fmtDate(H.through)} · aktualisiert ${upd} (montags)`)
        + `<div class="stat-row usm-row">
            ${stat('Perfekt', deInt(H.fp))}
            ${stat('davon durch Trades', `<span class="up">+${deInt(H.fp - H.fpNoTrades)}</span>`)}
            ${stat(`Du (bis ${fmtDate(gd).slice(0, 6)})`, me ? `${deInt(Math.round(me.pts))} <span class="usm-sv-s">${pct(me.pts, perfAt)}</span>` : '–')}
            ${stat('Platz 1', top ? `${deInt(Math.round(top.pts))} <span class="usm-sv-s">${pct(top.pts, perfAt)}</span>` : '–')}
            ${stat('Draft-Kosten', `${de(H.draftCost, 2)} <span class="usm-sv-s">von 63</span>`)}
          </div>
          <section class="card"><div class="card-head"><h2>Verlauf</h2><span class="muted usm-small">kumulierte Punkte · blaue Linie = perfekt, blaue Punkte = Trades · 👑 Platz 1, du, Mücke, Dan, Hoopies · Hover zeigt Werte · % = Anteil am perfekten Wert bis ${fmtDate(gd).slice(0, 6)} (${deInt(perfAt)})</span></div><div class="usm-pad">${chart}</div></section>
          <div class="usm-grid usm-live-grid usm-mt">
            <section class="card usm-main"><div class="card-head"><h2>Perfekter Draft</h2><span class="muted usm-small">Startgehälter · Punkte bis ${fmtDate(H.through).slice(0, 6)}</span></div>
              <div class="usm-tbl"><table class="table compact usm-table"><thead><tr><th>Pos</th><th>Spieler</th><th>Team</th><th class="num">Startgehalt</th><th class="num">Verkauft für</th><th class="num">Spiele</th><th class="num">FP/G</th><th class="num">FP</th></tr></thead><tbody>
              ${H.draft.map(p => `<tr><td>${p.pos}</td><td class="strong">${e(flip(p.name))}${mark(p.name)}</td><td class="muted">${e(p.team)}</td><td class="num">${de(p.sal, 2)}</td><td class="num">${sold(p.name)}</td><td class="num">${p.gp}</td><td class="num">${de(p.fpg)}</td><td class="num">${deInt(p.fp)}</td></tr>`).join('')}
              </tbody></table></div></section>
            <section class="card"><div class="card-head"><h2>Perfekte Trades</h2><span class="muted usm-small">${H.trades.length}</span></div>
              <div class="usm-pad">${H.trades.length ? H.trades.map(t => `<div class="usm-pf-tr"><div class="usm-lbl">${fmtDate(t.date).slice(0, 6)} · ${e(t.type)}</div>
                <div><b>${e(flip(t.out))}</b> <span class="usm-m">${de(t.outSal, 2)}</span> → <b>${e(flip(t.in))}</b> <span class="usm-m">${de(t.inSal, 2)}</span></div>
                <div class="usm-m">+${deInt(t.gain)} FP bis heute</div></div>`).join('') : '<p class="muted">Keine Trades nötig.</p>'}
              <div class="usm-lbl usm-mt">Kader heute</div><p class="usm-small">${H.final.map(p => `${p.pos} ${e(flip(p.name))}${mine.has(p.name) ? ' ✓' : ''}`).join(' · ')}</p>
              <p class="muted usm-small">✓ / „dein“ = auch in deinem Kader.</p></div></section>
          </div>
          <p class="muted usm-small usm-pad">Regeln: ${e(H.rules)}. Punkte je Spiel aus den NBA-Tagesdaten mit dem US-Manager-Scoring, Fouls je Spieler gegen die offiziellen Saison-FP kalibriert (Snapshot ${fmtDate(H.calibratedOn)}, ${H.calibrated} Spieler) – Abweichung meist unter 1 FP pro Spiel. Bestmöglicher gefundener Verlauf (Suche über viele Draft-Startpunkte und alle Trade-Tage), keine mathematische Garantie. Restbudget am Ende: ${de(H.cash, 2)} Mio.</p>`;
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
