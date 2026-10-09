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
  // Vor dem Draft? (Redraft: ESPN-Kader leer bis zum Draft). Quelle:
  // LEAGUE_DRAFT_INFO aus rosters-live.js, sonst „alle Kader leer“.
  function preDraft(data) {
    const D = data.LEAGUE_DRAFT_INFO;
    if (D && typeof D.drafted === 'boolean') return !D.drafted;
    if (!data.ROSTERS_LIVE) return false;
    const ts = leagueTeams(data, true);
    return ts.length > 0 && ts.every(t => roster(data, t.id).length === 0);
  }
  // ---------- Unicorns (nach Rotoballer, „Fantasy Basketball Unicorns“ Part 1, 09.10.2026) ----------
  //  Spieler, die in zwei normalerweise NEGATIV korrelierten Kategorien
  //  gleichzeitig klar positiv sind (Z > 0,5 in beiden; der Artikel nimmt > 0,
  //  das markiert in unseren Top 150 aber jeden zweiten — mit 0,5 bleiben ~30; TO-z ist umgedreht,
  //  positiv = wenige Ballverluste). Kombinationen aus dem Artikel:
  //  Passer-Unicorns AST+TO, AST+FG%, AST+BLK · Two-Way FG%+STL, STL+TO, BLK+TO.
  //  Nur Spieler mit ≥ 20 Minuten (sonst sind Bankspieler „gratis“ TO-positiv).
  const UNICORN_COMBOS = [
    ['ast', 'tov', 'AST+TO'], ['ast', 'fgImpact', 'AST+FG%'], ['ast', 'blk', 'AST+BLK'],
    ['fgImpact', 'stl', 'FG%+STL'], ['stl', 'tov', 'STL+TO'], ['blk', 'tov', 'BLK+TO'],
  ];
  // Rotoballers Schlussliste (League-Winner außerhalb der 1. Runde, Part 1)
  const UNICORN_PICKS = ['Scottie Barnes', 'Jamal Murray', 'OG Anunoby', 'Ausar Thompson', 'Jaden McDaniels', 'Andrew Wiggins', 'Cason Wallace'];
  function unicorn(row) {
    const z = (row && row.rawCats) || {};
    if (!row || (row.min || 0) < 20) return { combos: [], pick: false };
    const combos = UNICORN_COMBOS.filter(([a, b]) => (z[a] || 0) > 0.5 && (z[b] || 0) > 0.5).map(c => c[2]);
    const pick = UNICORN_PICKS.some(n => key(n) === key(row.name));
    return { combos, pick };
  }
  function unicornBadge(row) {
    const u = unicorn(row);
    if (!u.combos.length && !u.pick) return '';
    const tip = (u.combos.length ? `Unicorn: klar positiv (z > 0,5) in ${u.combos.join(', ')}` : '') + (u.pick ? `${u.combos.length ? ' · ' : ''}Rotoballer-League-Winner-Liste` : '');
    return ` <span class="nba-uni${u.pick ? ' pick' : ''}" title="${tip}">🦄${u.combos.length > 1 ? u.combos.length : ''}</span>`;
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
  // 06.10.2026: Reihenfolge Rose-Metric (Standard) · Z-Score · Perzentil.
  // „Z roh“ entfällt: rankte praktisch identisch zu „Z ±3“ (Ø 0,6 Ränge
  // Unterschied in den Top 150) → nur noch „Z-Score“ (= gekappte Fassung).
  const MODES = [
    { key: 'durant', label: 'Rose-Metric', title: 'Rose-Metric (Standard, nach Josh Lloyds DURANT H2H)\n\n1. Je Kategorie den Z-Score bilden: (Wert − Pool-Schnitt) ÷ Standardabweichung. FG% und FT% als Impact (Abweichung vom Pool-Schnitt × Versuche).\n2. Jede Kategorie per Yeo-Johnson-Transformation annähernd normalverteilen. Blocks und Steals sind sonst stark schief: wenige Spezialisten bekommen riesige Werte.\n3. Feste H2H-Gewichte: PTS 1 · REB 0,94 · AST 0,75 · STL, BLK, 3PM, FG%, FT% je 0,6 · TO zählt nicht.\n4. Summe bilden und die schlechteste gewichtete Kategorie abziehen (Minus 1, wie beim Punten).\n\nGewicht 0 = Punt: dann fällt diese Kategorie weg statt der schlechtesten.' },
    { key: 'zcap', label: 'Z-Score', title: 'Klassischer Z-Score\n\n1. Je Kategorie (Wert − Pool-Schnitt) ÷ Standardabweichung. FG% und FT% als Impact (Abweichung × Versuche), TO umgedreht.\n2. Jeden Kategorie-Wert auf ±3 kappen, damit einzelne Ausreißer (v. a. Blocks) nicht alles dominieren.\n3. Mit den eingestellten Gewichten summieren (Standard: PTS 0,9 · REB/AST/FG% 1 · STL/BLK 0,75 · 3PM 0,8 · FT% 0,9 · TO 0,25).\n\nGrundlage der ESPN- und Yahoo-Player-Rater.' },
    { key: 'pctl', label: 'Perzentil', title: 'Perzentil\n\n1. Je Kategorie den Rang im Pool als Perzentil (0–100): 80 = besser als 80 % der Spieler.\n2. Mit den eingestellten Gewichten mitteln.\n\nAbstände zählen nicht mehr, nur die Reihenfolge. Völlig unempfindlich gegen Ausreißer, bestraft dafür Spezialisten am stärksten (z. B. Shotblocker mit schwachen Quoten).' },
  ];
  // Rose-Metric (06.10.2026, = Josh Lloyds DURANT H2H): feste Gewichte, TO zählt nicht.
  // Schlüssel beider Benennungen (Live Scores/Rankings: tpm/to, Projections: tpm/tov).
  const DURANT_W = { pts: 1, reb: 0.94, ast: 0.75, stl: 0.6, blk: 0.6, tpm: 0.6, fgImpact: 0.6, ftImpact: 0.6, to: 0, tov: 0 };
  // Gilt hub-weit für alle NBA-Ligen (wie früher seitenübergreifend)
  // v2 seit 06.10.2026: neuer Standard DURANT H2H für alle (alte Auswahl wird nicht übernommen)
  const MODE_KEY = 'mfhfb:nba:scoremode:v2';
  function getMode() {
    try { let m = localStorage.getItem(MODE_KEY); if (m === 'z') m = 'zcap'; if (MODES.some(x => x.key === m)) return m; } catch (e) { /* ignore */ }
    return 'durant';
  }
  function setMode(m) { try { localStorage.setItem(MODE_KEY, m); } catch (e) { /* ignore */ } }
  function modeControl() {
    const cur = getMode();
    const esc = t => String(t).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    return `<div class="seg" role="group" aria-label="Bewertung">${MODES.map(m => `<button type="button" class="seg-btn info-tip score-mode-btn${m.key === cur ? ' active' : ''}" data-scoremode="${m.key}" data-tip="${esc(m.title)}" aria-label="${esc(m.label)}" aria-pressed="${m.key === cur}">${m.label}</button>`).join('')}</div>`;
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
    if (mode === 'durant') return durant(catZs, keys, weights, poolIdx);
    const cap = mode === 'zcap' ? Z_CAP : Infinity;
    return catZs.map(z => { const cats = {}; let s = 0; keys.forEach(k => { const v = Math.max(-cap, Math.min(cap, z[k] || 0)); cats[k] = v; s += v * w(k); }); return { score: s, cats }; });
  }
  // ---------- DURANT H2H ----------
  //  Yeo-Johnson je Kategorie (λ per Maximum Likelihood über den Pool, wie
  //  scipy.stats.yeojohnson), danach neu standardisiert. Angewendet auf die
  //  Kategorie-Z-Werte der Seite: Ranking gegen den Nachbau auf Rohwerten
  //  geprüft (Spearman 0,999, Josh-Projections 06.10.2026).
  function yj(x, l) {
    if (x >= 0) return Math.abs(l) < 1e-9 ? Math.log1p(x) : (Math.pow(x + 1, l) - 1) / l;
    return Math.abs(l - 2) < 1e-9 ? -Math.log1p(-x) : -(Math.pow(1 - x, 2 - l) - 1) / (2 - l);
  }
  function yjLambda(xs) {
    const n = xs.length; if (n < 3) return 1;
    const logTerm = xs.reduce((a, x) => a + Math.sign(x) * Math.log1p(Math.abs(x)), 0);
    const ll = l => {
      let m = 0; const t = xs.map(x => { const v = yj(x, l); m += v; return v; }); m /= n;
      const v = t.reduce((a, y) => a + (y - m) ** 2, 0) / n;
      return v > 0 ? -n / 2 * Math.log(v) + (l - 1) * logTerm : -Infinity;
    };
    let lo = -3, hi = 5; const g = (Math.sqrt(5) - 1) / 2;
    let a = hi - g * (hi - lo), b = lo + g * (hi - lo), fa = ll(a), fb = ll(b);
    for (let i = 0; i < 60; i++) {
      if (fa < fb) { lo = a; a = b; fa = fb; b = lo + g * (hi - lo); fb = ll(b); }
      else { hi = b; b = a; fb = fa; a = hi - g * (hi - lo); fa = ll(a); }
    }
    return (lo + hi) / 2;
  }
  function durant(catZs, keys, weights, poolIdx) {
    const idx = poolIdx && poolIdx.length ? poolIdx : catZs.map((_, i) => i);
    // Punt: Seiten-Gewicht 0 → Kategorie fällt raus, dann kein zusätzliches Minus 1
    const punted = keys.filter(k => DURANT_W[k] > 0 && weights && weights[k] === 0);
    const use = keys.filter(k => DURANT_W[k] > 0 && !punted.includes(k));
    const tf = {};
    use.forEach(k => {
      const xs = idx.map(i => catZs[i][k] || 0);
      const l = yjLambda(xs);
      const t = xs.map(x => yj(x, l)), m = t.reduce((a, b) => a + b, 0) / t.length;
      const sd = Math.sqrt(t.reduce((a, b) => a + (b - m) ** 2, 0) / t.length) || 1;
      tf[k] = { l, m, sd };
    });
    return catZs.map(z => {
      const cats = {}; let s = 0, worst = Infinity;
      keys.forEach(k => {
        if (!tf[k]) { cats[k] = z[k] || 0; return; }
        const v = (yj(z[k] || 0, tf[k].l) - tf[k].m) / tf[k].sd;
        cats[k] = v; const wv = v * DURANT_W[k]; s += wv; if (wv < worst) worst = wv;
      });
      if (!punted.length && use.length > 1) s -= worst;
      return { score: s, cats };
    });
  }

  function fmtScore(score, mode) {
    mode = mode || getMode();
    if (!Number.isFinite(score)) return '–';
    return mode === 'pctl' ? score.toFixed(1) : (score >= 0 ? '+' : '') + score.toFixed(2);
  }
  const scorePositive = (score, mode) => ((mode || getMode()) === 'pctl' ? score >= 50 : score >= 0);
  const scoreLabel = mode => { const m = mode || getMode(); return m === 'pctl' ? 'Ø Pctl' : m === 'zcap' ? 'Z-Score' : m === 'durant' ? 'Rose' : 'Z-Score'; };

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
    ESPN_PRO, canonTeam, NBA_ABBRS, CATS, Z_KEYS, MP_WEIGHTS, init, key, teamName, TEAM_NAMES, leagueTeams, roster, ownerIndex, preDraft, unicorn, unicornBadge, record, initials, teamColor, injury,
    tcStyle, picks, projRanks, dynastyIndex, dobIndex, age, rankTier, rankBadge,
    MODES, getMode, setMode, modeControl, bindModeControl, fromCatZ, fmtScore, scorePositive, scoreLabel, percentileOf, heat,
  };
  return api;
})();
