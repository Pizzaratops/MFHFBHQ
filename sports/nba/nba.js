// ============================================================
//  NBA — gemeinsame Bausteine für alle NBA-Ligen (9-Cat H2H)
// ============================================================
//  Portiert aus Taco-Tuesday-HQ / Citizens-of-Funkytown:
//    - Kategorien + Gewichte (matchup-planner.js MP_WEIGHTS / MP_CATS,
//      livescores.js LS_WEIGHT_CATS)
//    - Score-Modi z / zcap / pctl (score-mode.js, UNVERÄNDERT)
//    - Namens-Normalisierung (data/aliases.js normalizeName, UNVERÄNDERT)
//    - NBA-Teamnamen inkl. ESPN-Sondercodes (livescores.js LS_TEAM_NAMES)
//
//  MFHFB.nba.init(data)  einmal pro Seite mit den geladenen Daten aufrufen
//                        (übernimmt NAME_FIRST_ALIASES aus sport:aliases)
// ============================================================

window.MFHFB = window.MFHFB || {};

MFHFB.nba = (function () {
  // Reihenfolge wie in der Live-Scores-Tabelle. z = Schlüssel in player.zScores.
  const CATS = [
    { key: 'pts', label: 'PTS', z: 'pts' },
    { key: 'reb', label: 'REB', z: 'reb' },
    { key: 'ast', label: 'AST', z: 'ast' },
    { key: 'stl', label: 'STL', z: 'stl' },
    { key: 'blk', label: 'BLK', z: 'blk' },
    { key: 'to', label: 'TO', z: 'to', inverted: true },
    { key: 'tpm', label: '3PM', z: 'tpm' },
    { key: 'fgPct', label: 'FG%', z: 'fgImpact', pct: true },
    { key: 'ftPct', label: 'FT%', z: 'ftImpact', pct: true },
  ];
  const Z_KEYS = CATS.map(c => c.z);
  // Feste Gewichte (matchup-planner.js MP_WEIGHTS = build-rolling-archive.js)
  const MP_WEIGHTS = { pts: 0.9, reb: 1, ast: 1, stl: 0.75, blk: 0.75, tpm: 0.75, fgImpact: 1, ftImpact: 0.85, to: 0.25 };

  // ---------- Namen ----------
  let FIRST = {};
  function init(data) {
    if (data && data.NAME_FIRST_ALIASES) FIRST = data.NAME_FIRST_ALIASES;
    return api;
  }
  // = normalizeName() aus data/aliases.js
  function key(raw) {
    if (!raw) return '';
    let s = String(raw).toLowerCase().trim();
    s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
    s = s.replace(/\./g, '');
    s = s.replace(/['’‘`]/g, '');
    s = s.replace(/\b(jr|sr|iii|ii)\b/g, '');
    s = s.replace(/\s+/g, ' ').trim();
    return FIRST[s] || s;
  }

  // ---------- NBA-Teams ----------
  const TEAM_NAMES = {
    ATL: 'Atlanta', BOS: 'Boston', BKN: 'Brooklyn', CHA: 'Charlotte', CHI: 'Chicago', CLE: 'Cleveland', DAL: 'Dallas',
    DEN: 'Denver', DET: 'Detroit', GS: 'Golden State', GSW: 'Golden State', HOU: 'Houston', IND: 'Indiana',
    LAC: 'LA Clippers', LAL: 'LA Lakers', MEM: 'Memphis', MIA: 'Miami', MIL: 'Milwaukee', MIN: 'Minnesota',
    NO: 'New Orleans', NOR: 'New Orleans', NOP: 'New Orleans', NY: 'New York', NYK: 'New York', OKC: 'Oklahoma City',
    ORL: 'Orlando', PHI: 'Philadelphia', PHX: 'Phoenix', PHO: 'Phoenix', POR: 'Portland', SA: 'San Antonio',
    SAS: 'San Antonio', SAC: 'Sacramento', TOR: 'Toronto', UTAH: 'Utah', UTA: 'Utah', WSH: 'Washington',
    WAS: 'Washington', FA: 'Free Agent',
  };
  const teamName = a => TEAM_NAMES[a] || a || '';
  // Kürzel vereinheitlichen (Kader/ESPN: NOR/PHO/WAS, nba_api: NOP/PHX/WSH …)
  const CANON = { NOP: 'NOR', NO: 'NOR', PHX: 'PHO', WSH: 'WAS', GS: 'GSW', SA: 'SAS', NY: 'NYK', UTAH: 'UTA', BRK: 'BKN' };
  const canonTeam = a => { const u = String(a || '').toUpperCase(); return CANON[u] || u; };
  const NBA_ABBRS = ['ATL', 'BOS', 'BKN', 'CHA', 'CHI', 'CLE', 'DAL', 'DEN', 'DET', 'GSW', 'HOU', 'IND', 'LAC', 'LAL', 'MEM', 'MIA', 'MIL', 'MIN', 'NOR', 'NYK', 'OKC', 'ORL', 'PHI', 'PHO', 'POR', 'SAC', 'SAS', 'TOR', 'UTA', 'WAS'];

  // ---------- Fantasy-Teams der Liga ----------
  //  TEAMS: [{id, name, owner, record, color, lightColor, inactive?}]
  //  Kader: ROSTERS_LIVE (täglicher ESPN-Sync) hat Vorrang vor ROSTERS
  //  (manuell) — wie admin.js in TTHQ.
  function leagueTeams(data, withInactive) {
    return (data.TEAMS || []).filter(t => withInactive || !t.inactive);
  }
  function roster(data, tid) {
    const live = data.ROSTERS_LIVE && data.ROSTERS_LIVE[tid];
    return (Array.isArray(live) ? live : (data.ROSTERS || {})[tid]) || [];
  }
  function ownerIndex(data) {
    const m = new Map();
    leagueTeams(data, true).forEach(t => roster(data, t.id).forEach(p => m.set(key(p.name), t)));
    return name => m.get(key(name)) || null;
  }
  function record(data, t) {
    const R = data.TEAM_RECORDS_LIVE;
    if (R && R.records && R.records[t.id]) return R.records[t.id];
    return t.record || '';
  }
  const initials = name => String(name || '').split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const teamColor = t => (t && t.color) || 'var(--league-accent)';

  // ---------- Verletzungs-Badge (navigation.js injuryBadge) ----------
  function injury(inj) {
    if (!inj) return '';
    const cfg = { OUT: ['OUT', 'Fällt aus', 'out'], DTD: ['DTD', 'Day to Day (fraglich)', 'dtd'], SUSP: ['SUSP', 'Gesperrt', 'susp'] }[inj] || [inj, inj, 'out'];
    return `<span class="nba-inj ${cfg[2]}" title="${cfg[1]}">${cfg[0]}</span>`;
  }

  // ============================================================
  //  Score-Modi (score-mode.js, unverändert)
  // ============================================================
  const Z_CAP = 3;
  const MODES = [
    { key: 'z', label: 'Z roh', title: 'Summe der Kategorie-Z-Scores ohne Transformation' },
    { key: 'zcap', label: 'Z ±3', title: `Kategorie-Z-Scores vor dem Summieren auf ±${Z_CAP} gekappt, dämpft Spezialisten-Ausreißer (v.a. Blocks)` },
    { key: 'pctl', label: 'Perzentil', title: 'Je Kategorie der Perzentil-Rang im Pool (0–100), gemittelt. Unempfindlich gegen Ausreißer' },
  ];
  // Gilt hub-weit für alle NBA-Ligen (wie früher seitenübergreifend)
  const MODE_KEY = 'mfhfb:nba:scoremode';
  function getMode() {
    try { const m = localStorage.getItem(MODE_KEY) || localStorage.getItem('tthq_score_mode_v1') || localStorage.getItem('cof_score_mode_v1'); if (MODES.some(x => x.key === m)) return m; } catch (e) { /* ignore */ }
    return 'zcap';
  }
  function setMode(m) { try { localStorage.setItem(MODE_KEY, m); } catch (e) { /* ignore */ } }
  function modeControl() {
    const cur = getMode();
    return `<div class="seg" role="group" aria-label="Bewertung">${MODES.map(m => `<button type="button" class="seg-btn${m.key === cur ? ' active' : ''}" data-scoremode="${m.key}" title="${m.title}" aria-pressed="${m.key === cur}">${m.label}</button>`).join('')}</div>`;
  }
  // Seiten binden das mit ctx.refresh
  function bindModeControl(root, refresh) {
    root.querySelectorAll('[data-scoremode]').forEach(b => b.addEventListener('click', () => { setMode(b.dataset.scoremode); refresh(); }));
  }
  function percentileOf(sortedAsc, v) {
    const n = sortedAsc.length;
    if (n <= 1) return 50;
    let lo = 0, hi = n;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (sortedAsc[mid] < v) lo = mid + 1; else hi = mid; }
    const firstGE = lo; lo = firstGE; hi = n;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (sortedAsc[mid] <= v) lo = mid + 1; else hi = mid; }
    return ((firstGE + 0.5 * (lo - firstGE)) / n) * 100;
  }
  // catZs: [{catKey: z}] (höher = besser, TO schon invertiert), keys, weights, poolIdx, mode
  function fromCatZ(catZs, keys, weights, poolIdx, mode) {
    mode = mode || getMode();
    const w = k => (weights && typeof weights[k] === 'number') ? weights[k] : 1;
    if (mode === 'pctl') {
      const idx = poolIdx && poolIdx.length ? poolIdx : catZs.map((_, i) => i);
      const sorted = {};
      keys.forEach(k => { sorted[k] = idx.map(i => catZs[i][k] || 0).sort((a, b) => a - b); });
      const wSum = keys.reduce((s, k) => s + w(k), 0) || 1;
      return catZs.map(z => { const cats = {}; let s = 0; keys.forEach(k => { cats[k] = percentileOf(sorted[k], z[k] || 0); s += cats[k] * w(k); }); return { score: s / wSum, cats }; });
    }
    const cap = mode === 'zcap' ? Z_CAP : Infinity;
    return catZs.map(z => { const cats = {}; let s = 0; keys.forEach(k => { const v = Math.max(-cap, Math.min(cap, z[k] || 0)); cats[k] = v; s += v * w(k); }); return { score: s, cats }; });
  }
  function fmtScore(score, mode) {
    mode = mode || getMode();
    if (!Number.isFinite(score)) return '–';
    return mode === 'pctl' ? score.toFixed(1) : (score >= 0 ? '+' : '') + score.toFixed(2);
  }
  const scorePositive = (score, mode) => ((mode || getMode()) === 'pctl' ? score >= 50 : score >= 0);
  const scoreLabel = mode => { const m = mode || getMode(); return m === 'pctl' ? 'Ø Pctl' : m === 'zcap' ? 'Z ±3' : 'Z-Score'; };

  // Farbton für einen Z-Wert (Heatmap-Zellen): grün/rot, Intensität nach |z|
  function heat(z) {
    if (!Number.isFinite(z)) return '';
    const a = Math.min(Math.abs(z) / 2.5, 1) * 0.5;
    if (a < 0.06) return '';
    return z > 0 ? `background:rgba(46,157,98,${a.toFixed(2)})` : `background:rgba(217,83,79,${a.toFixed(2)})`;
  }

  // Teamfarbe als CSS-Variablen (dunkles/helles Theme, wie TEAMS.color/lightColor)
  const tcStyle = t => `--tc:${(t && t.color) || 'var(--league-accent)'};--tcl:${(t && (t.lightColor || t.color)) || 'var(--league-accent)'}`;

  // ---------- Picks (TTHQ) ----------
  //  PICKS (data/picks.js, manuell) + PICKS_LIVE.updates (täglicher ESPN-Sync
  //  für das bevorstehende Draft-Jahr) — wie _hydratePicksFromLiveFile in
  //  admin.js: nur currentOwner bekannter Picks wird überschrieben.
  function picks(data) {
    const base = (data.PICKS || []).map(p => ({ ...p }));
    const L = data.PICKS_LIVE;
    if (L && Array.isArray(L.updates)) L.updates.forEach(u => {
      const p = base.find(x => x.year === u.year && x.round === u.round && x.originalOwner === u.originalOwner);
      if (p) p.currentOwner = u.currentOwner;
    });
    return base;
  }

  // ---------- Ränge ----------
  //  Projections-Rang: LIVE_PROJECTIONS nach z (absteigend). Liefert null,
  //  wenn alle z gleich sind (TTHQ-Baseline vom 19.08. hat überall z:0 —
  //  dann wäre die Reihenfolge Zufall).
  function projRanks(data) {
    const L = data.LIVE_PROJECTIONS;
    if (!L) return null;
    const list = Object.entries(L).filter(([, v]) => typeof v.z === 'number');
    if (!list.length || list.every(([, v]) => v.z === list[0][1].z)) return null;
    const m = new Map();
    list.sort((a, b) => b[1].z - a[1].z).forEach(([name], i) => { if (!m.has(key(name))) m.set(key(name), i + 1); });
    return name => m.get(key(name)) || null;
  }
  // Dynasty-Rang (TTHQ): DYNASTY_PLAYERS [rank, name, team, pos, dob]
  function dynastyIndex(data) {
    const m = new Map();
    (data.DYNASTY_PLAYERS || []).forEach(p => { if (!m.has(key(p[1]))) m.set(key(p[1]), { rank: p[0], name: p[1], team: p[2], pos: p[3], dob: p[4] }); });
    return name => m.get(key(name)) || null;
  }
  // Stammdaten mit Geburtsdatum: DYNASTY_PLAYERS (TTHQ) bzw. PLAYER_DB (Funkytown)
  function dobIndex(data) {
    const m = new Map();
    (data.DYNASTY_PLAYERS || []).forEach(p => m.set(key(p[1]), p[4]));
    (data.PLAYER_DB || []).forEach(p => { if (!m.has(key(p[0]))) m.set(key(p[0]), p[3]); });
    return name => m.get(key(name)) || null;
  }
  function age(dob) {
    if (!dob) return null;
    const d = new Date(dob), t = new Date();
    let a = t.getFullYear() - d.getFullYear();
    const mo = t.getMonth() - d.getMonth();
    if (mo < 0 || (mo === 0 && t.getDate() < d.getDate())) a--;
    return a;
  }
  // Rang-Badge-Stufen (dynastyRankColor/Bg aus navigation.js)
  const rankTier = r => (r == null ? '' : r === 1 ? 't1' : r <= 5 ? 't2' : r <= 15 ? 't3' : r <= 30 ? 't4' : r <= 75 ? 't5' : 't6');
  const rankBadge = (r, title) => (r == null ? '<span class="nba-rk none">—</span>' : `<span class="nba-rk ${rankTier(r)}"${title ? ` title="${title}"` : ''}>#${r}</span>`);

  // ESPN Pro-Team-ID → NBA-Kürzel (espn-sync.js ESPN_NBA_MAP, beide Ligen identisch)
  const ESPN_PRO = {
    1: 'ATL', 2: 'BOS', 3: 'NOR', 4: 'CHI', 5: 'CLE', 6: 'DAL', 7: 'DEN', 8: 'DET',
    9: 'GSW', 10: 'HOU', 11: 'IND', 12: 'LAC', 13: 'LAL', 14: 'MIA', 15: 'MIL',
    16: 'MIN', 17: 'BKN', 18: 'NYK', 19: 'ORL', 20: 'PHI', 21: 'PHO', 22: 'POR',
    23: 'SAC', 24: 'SAS', 25: 'OKC', 26: 'UTA', 27: 'WAS', 28: 'TOR', 29: 'MEM',
    33: 'UTA', 38: 'NOR', 40: 'WAS', 41: 'CHA',
  };

  const api = {
    ESPN_PRO, canonTeam, NBA_ABBRS, CATS, Z_KEYS, MP_WEIGHTS, init, key, teamName, TEAM_NAMES, leagueTeams, roster, ownerIndex, record, initials, teamColor, injury,
    tcStyle, picks, projRanks, dynastyIndex, dobIndex, age, rankTier, rankBadge,
    MODES, getMode, setMode, modeControl, bindModeControl, fromCatZ, fmtScore, scorePositive, scoreLabel, percentileOf, heat,
  };
  return api;
})();
