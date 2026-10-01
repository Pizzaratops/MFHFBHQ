// ============================================================
//  Tool (NBA): Cat Web — 9-Cat-Perzentil-Radar + Shape/Historic Match
// ============================================================
//  #/<liga>/catweb[/<spieler>]   (<spieler> = normalisierter Name, nba.key)
//
//  Port von js/player-shape.js (TTHQ + Funkytown). Mathematik UNVERÄNDERT:
//  - Pool je Saison = gerosterte Spieler (Kader mit pos/team/teamId) +
//    alle übrigen Spieler der Saison-Datei (Free Agents, teamId null).
//  - Rang-Perzentil je Kategorie (Ties teilen sich den mittleren Rang),
//    TO invertiert, fehlende Werte = 50.
//  - Per 36 (aus TTHQ): Zählkategorien × 36/MIN, Referenz-Verteilung nur
//    Spieler ab 10 MIN (falls ≥ 30 übrig).
//  - Shape Match = 100 − mittlerer Perzentil-Abstand über 9 Kategorien,
//    Kandidaten ab 15 MIN und (falls > 0) 20 Spielen, Spieler eines
//    ANDEREN Fantasy-Teams bevorzugt. Historic Match = bestes Profil über
//    alle anderen Saisons. Optional nur Positions-Overlap (mit Fallback).
//  Unterschiede TTHQ/Funkytown sind zusammengeführt: Per 36 (TTHQ) und der
//  Saison-Rang nach Score-Modus (Funkytown, Z roh = BBM-Composite) gelten
//  jetzt für beide Ligen. Datenquellen je Liga über data/, nicht Liga-Namen.
//
//  Daten: LIVE_PROJECTIONS (Saison "current", je Liga), BEST_AVAILABLE_BOARD
//  (pos/team/Erfahrung, je Liga), PROJECTIONS_CONSENSUS (Rang wie Seite
//  Projections, je Liga), Kader (teams + rosters-live). Historische Saisons
//  LAST_SEASON_STATS_<saison> werden erst bei Bedarf nachgeladen: 2025-26
//  je Liga (Dateien unterscheiden sich), alle älteren sportweit.
//  Weggelassen: Bild-Export (html2canvas), einklappbares Auswahl-Panel.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const STORE = 'catweb';

  const CATS = [
    { k: 'PTS', label: 'PTS', raw: 'pts', invert: false },
    { k: '3PM', label: '3PM', raw: 'tpm', invert: false },
    { k: 'REB', label: 'REB', raw: 'reb', invert: false },
    { k: 'AST', label: 'AST', raw: 'ast', invert: false },
    { k: 'STL', label: 'STL', raw: 'stl', invert: false },
    { k: 'BLK', label: 'BLK', raw: 'blk', invert: false },
    { k: 'TOC', label: 'TO CTRL', raw: 'tov', invert: true },
    { k: 'FGP', label: 'FG%', raw: 'fgPct', invert: false },
    { k: 'FTP', label: 'FT%', raw: 'ftPct', invert: false },
  ];
  const HIST = ['2025-26', '2024-25', '2023-24', '2022-23', '2021-22', '2020-21', '2019-20', '2018-19',
    // 2017/18 fehlt in den Daten (wie im Original)
    '2016-17', '2015-16', '2014-15', '2013-14', '2012-13', '2011-12', '2010-11', '2009-10', '2008-09',
    '2007-08', '2006-07', '2005-06', '2004-05', '2003-04'];
  const SEASONS = [{ key: 'current', label: '2026/27 (Projection)', short: '26/27 Proj.' }]
    .concat(HIST.map(k => ({ key: k, label: `${k.slice(0, 4)}/${k.slice(5)} (Saison-Ist-Werte)`, short: `${k.slice(2, 4)}/${k.slice(5)}` })));
  // 2025-26 unterscheidet sich zwischen den Ligen (Funkytown mit Alter und
  // anderen Z-Scores) → liga-eigene Datei; ältere Saisons sind identisch.
  const seasonFile = k => (k === '2025-26' ? 'last-season-stats-2025-26' : 'sport:last-season-stats-' + k);
  const seasonConst = k => 'LAST_SEASON_STATS_' + k.replace('-', '_');

  const PER36_MIN_MPG = 10;
  const PER36_COUNT_KEYS = ['pts', 'tpm', 'reb', 'ast', 'stl', 'blk', 'tov'];
  const MATCH_MIN_MPG = 15;
  const MATCH_MIN_GAMES = 20;
  const MODES = [['solo', 'Solo Shape'], ['match', 'Shape Match'], ['compare', 'Vergleich']];
  const BASES = [['pg', 'Per Game', 'Produktion in der aktuellen Rolle'], ['p36', 'Per 36', 'Produktion pro Minute: Zählkategorien auf 36 Minuten hochgerechnet, FG%/FT% unverändert']];
  const EXP = [['all', 'Alle Spieler'], ['rookie', 'Rookies'], ['sophomore', 'Sophomores']];

  const defaults = { key: null, mode: 'solo', basis: 'pg', season: 'current', team: '', exp: 'all', q: '', cmpA: null, cmpB: null, cmpQA: '', cmpQB: '', samePos: false };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON(STORE, {}) });
  const saveState = (ctx, patch) => ctx.store.setJSON(STORE, { ...getState(ctx), ...patch });

  // ---------- Saison-Dateien (lazy) ----------
  const seasonData = new Map();   // "<liga>|<saison>" -> Array | null (nicht vorhanden)
  const seasonLoads = new Map();  // "<liga>|<saison>" -> Promise
  const sKey = (league, k) => league.key + '|' + k;
  const isLoaded = (league, k) => k === 'current' || seasonData.has(sKey(league, k));
  function ensureSeasons(league, keys) {
    return Promise.all(keys.filter(k => !isLoaded(league, k)).map(k => {
      const id = sKey(league, k);
      if (!seasonLoads.has(id)) {
        seasonLoads.set(id, MFHFB.data.load(league, [seasonFile(k)])
          .then(d => { seasonData.set(id, d[seasonConst(k)] || null); })
          .catch(err => { console.warn('Cat Web:', err.message); seasonData.set(id, null); }));
      }
      return seasonLoads.get(id);
    }));
  }

  // ---------- reine Helfer (1:1 aus player-shape.js) ----------
  function posOverlap(posA, posB) {
    if (!posA || !posB) return false;
    const a = String(posA).split(/[/,]+/).map(s => s.trim()).filter(Boolean);
    const b = String(posB).split(/[/,]+/).map(s => s.trim()).filter(Boolean);
    return a.some(x => b.includes(x));
  }
  function suffix(name) {
    const m = String(name || '').trim().match(/\b(Jr\.?|Sr\.?|IV|III|II)\.?$/i);
    return m ? m[1].replace(/\./g, '').toUpperCase() : null;
  }
  function suffixConflict(a, b) { const x = suffix(a), y = suffix(b); return !!(x && y && x !== y); }
  const BLOCKLIST = new Set([['gary payton ii', 'gary payton'].sort().join('|')]);
  const isBlockedPair = (a, b) => BLOCKLIST.has([String(a || '').trim().toLowerCase(), String(b || '').trim().toLowerCase()].sort().join('|'));

  function percentileOf(sortedAsc, v) {
    const n = sortedAsc.length;
    if (n <= 1) return 100;
    let lo = 0, hi = n;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (sortedAsc[mid] < v) lo = mid + 1; else hi = mid; }
    const firstGE = lo;
    lo = 0; hi = n;
    while (lo < hi) { const mid = (lo + hi) >> 1; if (sortedAsc[mid] <= v) lo = mid + 1; else hi = mid; }
    const firstGT = lo;
    return ((firstGE + 0.5 * (firstGT - firstGE)) / n) * 100;
  }
  function fmtRaw(rawKey, v) {
    if (typeof v !== 'number' || isNaN(v)) return '–';
    if (rawKey === 'fgPct' || rawKey === 'ftPct') return v.toFixed(1) + '%';
    if (rawKey === 'stl' || rawKey === 'blk') return v.toFixed(2);
    return v.toFixed(1);
  }
  const fmtCat = (c, raw) => (raw ? fmtRaw(c.raw, raw[c.raw]) : '–');
  const vec = p => CATS.map(c => p.pctl[c.k]);
  function hasEnoughSample(p) {
    if (typeof p.min === 'number' && p.min < MATCH_MIN_MPG) return false;
    if (typeof p.games === 'number' && p.games > 0 && p.games < MATCH_MIN_GAMES) return false;
    return true;
  }
  function bestWorst(p) {
    let best = CATS[0], worst = CATS[0];
    CATS.forEach(c => {
      if (p.pctl[c.k] > p.pctl[best.k]) best = c;
      if (p.pctl[c.k] < p.pctl[worst.k]) worst = c;
    });
    return { best, worst };
  }
  const seasonLabel = k => (SEASONS.find(s => s.key === k) || { label: k }).label;

  // ---------- Umgebung je Seitenaufruf (Kader, Aliase, Caches) ----------
  let envCache = { data: null, env: null };
  function envFor(ctx) {
    if (envCache.data === ctx.data && envCache.league === ctx.league.key) return envCache.env;
    const data = ctx.data, nba = N().init(data);
    // = admin.js _hydrateRostersFromLiveFile: ROSTERS_LIVE ersetzt je Team
    const rosters = {};
    Object.keys(data.ROSTERS || {}).forEach(k => { rosters[k] = data.ROSTERS[k]; });
    Object.keys(data.ROSTERS_LIVE || {}).forEach(k => { if (Array.isArray(data.ROSTERS_LIVE[k])) rosters[parseInt(k, 10)] = data.ROSTERS_LIVE[k]; });
    const teams = nba.leagueTeams(data, true);
    const teamById = {};
    teams.forEach(t => { teamById[t.id] = t; });
    const env = { ctx, data, league: ctx.league, norm: nba.key, aliases: data.NAME_ALIASES || {}, rosters, teams, teamById, idx: new Map(), pools: new Map() };
    envCache = { data: ctx.data, league: ctx.league.key, env };
    return env;
  }
  // Rang-relevante Einstellungen (Score-Modus, Projections-Gewichte) → Cache-Schlüssel
  const rankSig = env => N().getMode() + '|' + (env.ctx.store.get('cproj') || '');

  // Metadaten für "current": pos/team/experience aus BEST_AVAILABLE_BOARD,
  // Rang wie auf der Seite Projections (Fallback: Board-Rang).
  function currentMeta(env) {
    const m = new Map();
    const rankMap = new Map();
    if (env.data.PROJECTIONS_CONSENSUS && MFHFB.nbaProjections) {
      MFHFB.nbaProjections.rows(env.ctx).forEach(r => { if (typeof r.overallRank === 'number') rankMap.set(env.norm(r.name), r.overallRank); });
    }
    (env.data.BEST_AVAILABLE_BOARD || []).forEach(p => {
      const norm = env.norm(p.name);
      const projRank = rankMap.get(norm);
      m.set(norm, { pos: p.pos || null, nbaTeam: p.nbaTeam || null, experience: p.experience || null, rank: typeof projRank === 'number' ? projRank : (typeof p.rank === 'number' ? p.rank : null) });
    });
    return m;
  }

  function seasonRawIndex(env, seasonKey) {
    const ck = seasonKey + '|' + rankSig(env);
    if (env.idx.has(ck)) return env.idx.get(ck);
    const map = new Map();
    if (seasonKey === 'current') {
      const L = env.data.LIVE_PROJECTIONS;
      if (L) {
        const meta = currentMeta(env);
        Object.keys(L).forEach(nm => {
          const s = L[nm];
          const m = meta.get(env.norm(nm));
          map.set(env.norm(nm), { name: nm, pts: s.pts, tpm: s.tpm, reb: s.reb, ast: s.ast, stl: s.stl, blk: s.blk, tov: s.tov, fgPct: s.fgPct, ftPct: s.ftPct, min: s.min, games: s.gamesPlayed, pos: m ? m.pos : null, nbaTeam: m ? m.nbaTeam : null, experience: m ? m.experience : null, rank: m ? m.rank : null });
        });
      }
    } else {
      const arr = seasonData.get(sKey(env.league, seasonKey));
      if (arr) {
        // Rang in DIESER Saison: nach Score-Modus aus den Kategorie-Z-Scores
        // (Funkytown-Stand; "Z roh" = BBM-Composite), sonst Composite.
        const score = new Map();
        if (arr.length && arr.every(s => s.zScores)) {
          const res = N().fromCatZ(arr.map(s => s.zScores), ['pts', 'reb', 'ast', 'stl', 'blk', 'tpm', 'fgImpact', 'ftImpact', 'to']);
          arr.forEach((s, i) => score.set(s, res[i].score));
        } else {
          arr.forEach(s => score.set(s, typeof s.composite === 'number' ? s.composite : -Infinity));
        }
        const rankOf = new Map();
        arr.slice().sort((a, b) => score.get(b) - score.get(a)).forEach((s, i) => rankOf.set(s, i + 1));
        arr.forEach(s => {
          map.set(env.norm(s.name), { name: s.name, pts: s.pts, tpm: s.tpm, reb: s.reb, ast: s.ast, stl: s.stl, blk: s.blk, tov: s.to, fgPct: s.fgPct, ftPct: s.ftPct, min: s.min, games: s.games, pos: s.pos || null, nbaTeam: s.team || null, rank: rankOf.get(s) || null });
        });
      }
    }
    env.idx.set(ck, map);
    return map;
  }

  function buildPool(env, seasonKey, basis) {
    basis = basis === 'p36' ? 'p36' : 'pg';
    const ck = seasonKey + '|' + basis + '|' + rankSig(env);
    if (env.pools.has(ck)) return env.pools.get(ck);
    const pool = { players: [], rosteredCount: 0, matchedCount: 0, freeAgentCount: 0, basis };
    env.pools.set(ck, pool);
    const seasonIdx = seasonRawIndex(env, seasonKey);
    const rows = [];
    const usedNorms = new Set();

    // 1) gerosterte Spieler: pos/team/teamId aus dem Kader
    Object.keys(env.rosters).forEach(tid => {
      (env.rosters[tid] || []).forEach(p => {
        pool.rosteredCount++;
        const norm = env.norm(p.name);
        const canon = env.aliases[norm] || null;
        const s = seasonIdx.get(norm) || (canon ? seasonIdx.get(env.norm(canon)) : null);
        if (!s) return;
        if (suffixConflict(p.name, s.name) || isBlockedPair(p.name, s.name)) return;
        rows.push({
          name: p.name, pos: p.pos, nbaTeam: p.team, teamId: parseInt(tid, 10),
          min: s.min, games: s.games, experience: s.experience || null, rank: s.rank || null,
          raw: { pts: s.pts, tpm: s.tpm, reb: s.reb, ast: s.ast, stl: s.stl, blk: s.blk, tov: s.tov, fgPct: s.fgPct, ftPct: s.ftPct },
        });
        usedNorms.add(norm);
        if (canon) usedNorms.add(env.norm(canon));
        usedNorms.add(env.norm(s.name));
      });
    });
    pool.matchedCount = rows.length;

    // 2) alle übrigen Spieler der Saison (Free Agents, Rookies)
    seasonIdx.forEach((s, norm) => {
      if (usedNorms.has(norm)) return;
      rows.push({
        name: s.name, pos: s.pos || null, nbaTeam: s.nbaTeam || null, teamId: null,
        min: s.min, games: s.games, experience: s.experience || null, rank: s.rank || null,
        raw: { pts: s.pts, tpm: s.tpm, reb: s.reb, ast: s.ast, stl: s.stl, blk: s.blk, tov: s.tov, fgPct: s.fgPct, ftPct: s.ftPct },
      });
      pool.freeAgentCount++;
    });

    // Per 36
    rows.forEach(r => {
      r.per36Ok = true;
      if (basis !== 'p36') return;
      const m = r.min;
      if (!(typeof m === 'number' && m > 0)) { r.per36Ok = false; return; }
      const f = 36 / m;
      PER36_COUNT_KEYS.forEach(k => { if (typeof r.raw[k] === 'number' && !isNaN(r.raw[k])) r.raw[k] = r.raw[k] * f; });
      if (m < PER36_MIN_MPG) r.per36Ok = false;
    });
    let refRows = rows;
    if (basis === 'p36') {
      const ok = rows.filter(r => r.per36Ok);
      if (ok.length >= 30) refRows = ok;
    }
    const sortedByRaw = {};
    CATS.forEach(c => {
      sortedByRaw[c.raw] = refRows.map(r => r.raw[c.raw]).filter(v => typeof v === 'number' && !isNaN(v)).sort((a, b) => a - b);
    });
    rows.forEach(r => {
      r.pctl = {};
      CATS.forEach(c => {
        const v = r.raw[c.raw];
        if (typeof v !== 'number' || isNaN(v)) { r.pctl[c.k] = 50; return; }
        const pctl = percentileOf(sortedByRaw[c.raw], v);
        r.pctl[c.k] = c.invert ? (100 - pctl) : pctl;
      });
      r.key = env.norm(r.name);
    });
    pool.sortedByRaw = sortedByRaw;
    pool.players = rows.sort((a, b) => a.name.localeCompare(b.name));
    return pool;
  }

  function bestMatch(env, player, seasonKey, basis, samePositionOnly) {
    const pool = buildPool(env, seasonKey, basis).players;
    const v1 = vec(player);
    const scoreOf = p2 => { const v2 = vec(p2); let sum = 0; for (let i = 0; i < v1.length; i++) sum += Math.abs(v1[i] - v2[i]); return 100 - (sum / v1.length); };
    let bestOther = null, bestOtherScore = -1, bestAny = null, bestAnyScore = -1, sawPosCandidate = false;
    pool.forEach(p2 => {
      if (p2.name === player.name) return;
      if (!hasEnoughSample(p2)) return;
      if (samePositionOnly) {
        if (!posOverlap(player.pos, p2.pos)) return;
        sawPosCandidate = true;
      }
      const score = scoreOf(p2);
      if (score > bestAnyScore) { bestAnyScore = score; bestAny = p2; }
      if (p2.teamId !== player.teamId && score > bestOtherScore) { bestOtherScore = score; bestOther = p2; }
    });
    if (samePositionOnly && !sawPosCandidate) { const r = bestMatch(env, player, seasonKey, basis, false); r.posFallback = true; return r; }
    return bestOther ? { player: bestOther, score: Math.round(bestOtherScore) } : { player: bestAny, score: Math.round(bestAnyScore) };
  }

  function bestHistoricMatch(env, player, excludeSeasonKey, basis, samePositionOnly) {
    const v1 = vec(player);
    let best = null, bestScore = -1, bestSeasonKey = null, sawPosCandidate = false;
    SEASONS.forEach(s => {
      if (s.key === excludeSeasonKey) return;
      buildPool(env, s.key, basis).players.forEach(p2 => {
        if (env.norm(p2.name) === env.norm(player.name)) return;
        if (!hasEnoughSample(p2)) return;
        if (samePositionOnly) {
          if (!posOverlap(player.pos, p2.pos)) return;
          sawPosCandidate = true;
        }
        const v2 = vec(p2);
        let sum = 0;
        for (let i = 0; i < v1.length; i++) sum += Math.abs(v1[i] - v2[i]);
        const score = 100 - (sum / v1.length);
        if (score > bestScore) { bestScore = score; best = p2; bestSeasonKey = s.key; }
      });
    });
    if (samePositionOnly && !sawPosCandidate) {
      const r = bestHistoricMatch(env, player, excludeSeasonKey, basis, false);
      if (r) r.posFallback = true;
      return r;
    }
    return best ? { player: best, score: Math.round(bestScore), seasonKey: bestSeasonKey } : null;
  }

  // Grobe Rang-Übersetzung über die relative Liga-Position (unverändert)
  function translateRank(env, src, srcSeason, tgtSeason, basis) {
    if (typeof src.rank !== 'number' || src.rank <= 0) return null;
    const nS = buildPool(env, srcSeason, basis).players.length;
    const nT = buildPool(env, tgtSeason, basis).players.length;
    if (!nS || !nT) return null;
    return Math.max(1, Math.round(((src.rank - 1) / nS) * nT) + 1);
  }

  // ---------- Filter / Optionen ----------
  function passesFilters(p, st) {
    if (st.team) {
      if (st.team === 'FA') { if (p.teamId !== null) return false; } else if (p.teamId !== parseInt(st.team, 10)) return false;
    }
    if (st.exp && st.exp !== 'all' && p.experience !== st.exp) return false;
    const q = String(st.q || '').trim().toLowerCase();
    if (q && !`${p.name} ${p.nbaTeam || ''} ${p.pos || ''}`.toLowerCase().includes(q)) return false;
    return true;
  }
  function compareCandidates(pool, mainName, excludeName, query) {
    const q = (query || '').trim().toLowerCase();
    return pool.filter(x => {
      if (x.name === mainName || x.name === excludeName) return false;
      return !q || `${x.name} ${x.nbaTeam || ''} ${x.pos || ''}`.toLowerCase().includes(q);
    });
  }
  function optionsHTML(env, players, selKey) {
    const e = MFHFB.ui.esc;
    const byTeam = new Map();
    players.forEach(p => {
      const t = p.teamId !== null ? env.teamById[p.teamId] : null;
      const tName = t ? t.name : 'Free Agents';
      if (!byTeam.has(tName)) byTeam.set(tName, []);
      byTeam.get(tName).push(p);
    });
    const names = [...byTeam.keys()].sort((a, b) => (a === 'Free Agents' ? 1 : b === 'Free Agents' ? -1 : a.localeCompare(b)));
    return names.map(tn => `<optgroup label="${e(tn)}">${byTeam.get(tn).map(p => `<option value="${e(p.key)}"${p.key === selKey ? ' selected' : ''}>${e(p.name)} (${e(p.nbaTeam || '–')} ${e(p.pos || '–')})</option>`).join('')}</optgroup>`).join('');
  }

  // ---------- Bausteine ----------
  const minText = p => ((typeof p.min === 'number' && p.min > 0) ? p.min.toFixed(1) + ' MIN' : 'MIN –');
  function minTag(p, st) {
    let s = ` · ${minText(p)}`;
    if (st.basis === 'p36' && !p.per36Ok) {
      s += (typeof p.min === 'number' && p.min > 0)
        ? ` <span class="cw-warn" title="Unter ${PER36_MIN_MPG} Min/Spiel: die Per-36-Hochrechnung ist wenig aussagekräftig.">⚠ kleine Stichprobe</span>`
        : ' <span class="cw-warn" title="Keine Minutenangabe vorhanden: Per-Game-Werte angezeigt.">⚠ ohne Minuten</span>';
    }
    return s;
  }
  function rankTag(p, tooltip) {
    if (!(typeof p.rank === 'number' && p.rank > 0)) return '';
    const m = N().MODES.find(x => x.key === N().getMode());
    const t = tooltip || `Gesamtrang nach Bewertung „${m ? m.label : ''}“`;
    return ` ${N().rankBadge(p.rank, MFHFB.ui.esc(t))}`;
  }
  function teamTag(env, teamId) {
    const e = MFHFB.ui.esc;
    if (teamId === null) return '<span class="cw-fa">Free Agent</span>';
    const t = env.teamById[teamId];
    if (!t) return '';
    return `<a class="nba-tlink mp-tc" style="${N().tcStyle(t)}" href="${env.ctx.href('teams', t.id)}"><span class="nba-tdot"></span>${e(t.name)}</a>`;
  }
  const bwLine = (label, cls, c, p) => `<div class="cw-kv"><span>${label}</span><b class="${cls}">${c.label} · ${Math.round(p.pctl[c.k])} PCTL · ${fmtCat(c, p.raw)}</b></div>`;

  function radar(list, solo) {
    const e = MFHFB.ui.esc;
    const main = list[0].p;
    return MFHFB.charts.radar({
      axes: CATS.map((c, i) => ({ label: solo ? `${c.label} ${Math.round(main.pctl[c.k])}` : c.label })),
      series: list.map(({ p, suffix }) => ({
        name: p.name, vals: CATS.map(c => p.pctl[c.k] / 100),
        tips: CATS.map(c => `${p.name}${suffix || ''} · ${c.label}: ${Math.round(p.pctl[c.k])}. PCTL · ${fmtCat(c, p.raw)}`),
      })),
      size: 300, label: 'Perzentil-Radar ' + e(main.name),
    });
  }
  function catTable(list) {
    const e = MFHFB.ui.esc, nba = N();
    const multi = list.length > 1;
    return `<div class="table-wrap cw-tablewrap"><table class="table compact cw-table">
      <thead><tr><th>Kat.</th>${list.map(({ p, suffix }, k) => `<th class="num">${multi ? `<span class="dna-chip ${MFHFB.charts.SEL[k]} cw-dot"><i></i></span>` : ''}${e(p.name.split(' ').slice(-1)[0])}${suffix ? ` <small class="muted">${e(suffix)}</small>` : ''}</th>`).join('')}</tr></thead>
      <tbody>${CATS.map(c => {
        const vals = list.map(({ p }) => p.pctl[c.k]);
        const best = Math.max(...vals);
        return `<tr><td class="strong">${c.label}</td>${list.map(({ p }) => { const v = p.pctl[c.k]; return `<td class="num" style="${nba.heat((v - 50) / 20)}"><b class="${multi && v === best ? 'up' : ''}">${Math.round(v)}</b> <small class="muted">${fmtCat(c, p.raw)}</small></td>`; }).join('')}</tr>`;
      }).join('')}
      <tr class="cw-avg"><td class="strong">Ø</td>${list.map(({ p }) => { const a = vec(p).reduce((s, v) => s + v, 0) / CATS.length; return `<td class="num strong">${Math.round(a)}</td>`; }).join('')}</tr>
      </tbody></table></div>`;
  }
  const openBtn = (p, season) => `<button type="button" class="cw-open" data-open="${MFHFB.ui.esc(p.key)}" data-season="${season}" title="Dieses Profil als Hauptspieler öffnen">Öffnen →</button>`;

  // ---------- Seite ----------
  function render(ctx) {
    const { data, ui, params } = ctx, e = ui.esc;
    const env = envFor(ctx);
    let st = getState(ctx);
    if (!SEASONS.some(s => s.key === st.season)) st.season = 'current';
    if (!data.LIVE_PROJECTIONS && st.season === 'current') st.season = '2025-26';

    // Deep-Link: #/<liga>/catweb/<spieler>
    const routeKey = params[0] ? N().key(params[0]) : null;
    if (routeKey && routeKey !== st.key) {
      st.key = routeKey;
      saveState(ctx, { key: routeKey });
    }

    const needed = st.mode === 'match' ? SEASONS.map(s => s.key) : [st.season];
    const missing = needed.filter(k => !isLoaded(ctx.league, k));
    const head = `<div class="page-head"><h1 class="page-title display">🕸️ Cat Web</h1>
      <div class="page-sub explain">9-Cat-Perzentil-Radar für jeden Spieler · Shape Match im selben Pool und über alle Saisons seit 2003/04</div></div>`;
    const controlsTop = `<div class="controls cw-controls">
      <div class="seg" role="group" aria-label="Ansicht">${MODES.map(([k, l]) => `<button type="button" class="seg-btn${st.mode === k ? ' active' : ''}" data-mode="${k}" aria-pressed="${st.mode === k}">${l}</button>`).join('')}</div>
      <div class="seg" role="group" aria-label="Statistik-Basis">${BASES.map(([k, l, t]) => `<button type="button" class="seg-btn${st.basis === k ? ' active' : ''}" data-basis="${k}" title="${t}" aria-pressed="${st.basis === k}">${l}</button>`).join('')}</div>
      <select class="tr-select cw-season" data-season aria-label="Saison">${SEASONS.map(s => `<option value="${s.key}"${s.key === st.season ? ' selected' : ''}>${s.label}</option>`).join('')}</select>
      <label class="cw-check" title="Gilt für Shape Match & Historic Match. Spieler mit mehreren Positionen zählen bei jeder davon. Findet sich niemand, wird wieder über alle Positionen gesucht."><input type="checkbox" data-samepos${st.samePos ? ' checked' : ''}> Nur gleiche Position</label>
    </div>`;
    if (missing.length) {
      return `${head}${controlsTop}<div class="card cw-card"><div class="native-loading"><div class="spinner"></div>Lade Saison-Stats${st.mode === 'match' ? ' (alle Saisons für Historic Match)' : ''} …</div></div>`;
    }

    const season = st.season, basis = st.basis;
    const pool = buildPool(env, season, basis);
    const filtered = pool.players.filter(p => passesFilters(p, st));
    let p = filtered.find(x => x.key === st.key) || null;
    if (!p && routeKey) {
      // Deep-Link auf einen Spieler, der durch Filter verdeckt ist → Filter lösen
      const hit = pool.players.find(x => x.key === routeKey);
      if (hit) { st = { ...st, team: '', exp: 'all', q: '' }; saveState(ctx, { team: '', exp: 'all', q: '' }); p = hit; }
    }
    if (!p && filtered.length) p = filtered[0];
    if (p && p.key !== st.key) { st.key = p.key; saveState(ctx, { key: p.key }); }

    const teamsSorted = env.teams.slice().sort((a, b) => a.name.localeCompare(b.name));
    const controlsPick = `<div class="controls cw-controls cw-pick">
      <select class="tr-select" data-team aria-label="Fantasy-Team-Filter"><option value="">Alle Teams</option>${teamsSorted.map(t => `<option value="${t.id}"${String(t.id) === String(st.team) ? ' selected' : ''}>${e(t.name)}</option>`).join('')}<option value="FA"${st.team === 'FA' ? ' selected' : ''}>Free Agents</option></select>
      <select class="tr-select" data-exp aria-label="Erfahrung">${EXP.map(([k, l]) => `<option value="${k}"${st.exp === k ? ' selected' : ''}>${l}</option>`).join('')}</select>
      <input type="search" class="search cw-search" data-q placeholder="Name, Team, Position …" value="${e(st.q)}" autocomplete="off" aria-label="Spieler suchen">
      <select class="tr-select cw-player" data-player aria-label="Spieler">${optionsHTML(env, filtered, p ? p.key : null)}</select>
    </div>`;

    const note = `<p class="muted small cw-note explain">${pool.matchedCount} von ${pool.rosteredCount} gerosterten Spielern haben Stats für ${e(seasonLabel(season))}${pool.freeAgentCount ? ` (+ ${pool.freeAgentCount} Free Agents/Rookies)` : ''} · ${basis === 'p36' ? `Basis: Per 36 (Perzentil-Referenz: Spieler ab ${PER36_MIN_MPG} Min/Spiel)` : 'Basis: Per Game'}. Perzentile relativ zu allen Spielern mit Stats dieser Saison (TO CTRL: weniger Ballverluste = höher).</p>`;

    if (!p) {
      return `${head}${controlsTop}${controlsPick}<div class="card cw-card">${ui.empty('Keine Spieler gefunden', 'Für diese Saison/Filter gibt es keine Spieler mit Stats.', '🕸️')}</div>${note}`;
    }

    const modeLabel = MODES.find(m => m[0] === st.mode)[1];
    const top = `<div class="cw-top">
        <div class="cw-id"><div class="cw-tag">${e(p.nbaTeam || '–')} · ${e(p.pos || '–')}${rankTag(p)}${minTag(p, st)} · <b>${modeLabel}</b>${basis === 'p36' ? ' · <b>Per 36</b>' : ''} · ${e(SEASONS.find(s => s.key === season).short)}</div>
          <h2 class="cw-name">${e(p.name)}</h2></div>
        <div class="cw-team">${teamTag(env, p.teamId)}</div>
      </div>`;
    const bw = bestWorst(p);
    let body = '', list;

    if (st.mode === 'solo') {
      list = [{ p }];
      body = `<div class="cw-body">
        <div class="cw-radar">${radar(list, true)}</div>
        <div class="cw-side">
          <div class="cw-label">Shape Read</div>
          <p class="cw-meta">Perzentil-Profil über ${CATS.length} 9-Cat-Kategorien, relativ zu allen Spielern mit Stats für diese Saison.${basis === 'p36' ? ` Basis Per 36: Zählkategorien auf 36 Minuten hochgerechnet (Referenz: Spieler ab ${PER36_MIN_MPG} Min/Spiel), FG%/FT% unverändert.` : ''}</p>
          ${bwLine('Stärkste Kategorie', 'up', bw.best, p)}${bwLine('Schwächste Kategorie', 'down', bw.worst, p)}
          ${catTable(list)}
        </div></div>`;
    } else if (st.mode === 'match') {
      const match = bestMatch(env, p, season, basis, st.samePos);
      const alt = match.player;
      const hist = bestHistoricMatch(env, p, season, basis, st.samePos);
      const halt = hist ? hist.player : null;
      const tRank = (halt && hist.seasonKey !== season) ? translateRank(env, halt, hist.seasonKey, season, basis) : null;
      list = [{ p }].concat(alt ? [{ p: alt }] : []).concat(halt ? [{ p: halt, suffix: ` (${SEASONS.find(s => s.key === hist.seasonKey).short})` }] : []);
      const fb = '<span class="cw-warn" title="Kein Spieler mit Positions-Overlap gefunden — zeigt stattdessen das beste Match über alle Positionen.">(alle Positionen)</span>';
      const selIdx = x => list.findIndex(l => l.p === x);
      body = `<div class="cw-body">
        <div class="cw-radar">${radar(list)}${MFHFB.charts.chips(list.map(l => l.p.name + (l.suffix || '')))}</div>
        <div class="cw-side">
          ${alt ? `<div class="cw-match ${MFHFB.charts.SEL[selIdx(alt)]}">
            <div class="cw-hero"><span class="cw-num">${match.score}%</span><span class="cw-label">Shape Match · ${e(seasonLabel(season))} ${match.posFallback ? fb : ''}</span></div>
            <div class="cw-alt"><strong>${e(alt.name)}</strong>${openBtn(alt, season)}</div>
            <div class="cw-meta">${e(alt.nbaTeam || '–')} · ${e(alt.pos || '–')}${minTag(alt, st)}${rankTag(alt, alt.teamId === p.teamId ? 'Ähnlichstes Profil steht im selben Kader — für Trade-Ideen sonst nicht direkt nutzbar.' : 'Ähnlichstes 9-Cat-Profil im gesamten Liga-Pool, kann auch im selben Kader stehen — als Ausgangspunkt für Trade-Gespräche.')} ${teamTag(env, alt.teamId)}</div>
          </div>` : '<p class="muted cw-match">Kein weiterer Spieler mit Stats für diese Saison im Pool gefunden.</p>'}
          ${halt ? `<div class="cw-match ${MFHFB.charts.SEL[selIdx(halt)]}">
            <div class="cw-hero"><span class="cw-num">${hist.score}%</span><span class="cw-label">Historic Match · ${e(seasonLabel(hist.seasonKey))} ${hist.posFallback ? fb : ''}</span></div>
            <div class="cw-alt"><strong>${e(halt.name)}</strong>${openBtn(halt, hist.seasonKey)}</div>
            <div class="cw-meta">${e(halt.nbaTeam || '–')} · ${e(halt.pos || '–')}${minTag(halt, st)}${rankTag(halt, `Bestes 9-Cat-Profil-Match aus einer anderen Saison (${seasonLabel(hist.seasonKey)}).`)}${typeof tRank === 'number' ? ` · <span class="cw-trank" title="Geschätzter Rang, wenn dieses Profil (perzentil-erhaltend übersetzt) unverändert in ${e(seasonLabel(season))} gespielt hätte.">${e(SEASONS.find(s => s.key === season).short)} Rang ~#${tRank}</span>` : ''} ${teamTag(env, halt.teamId)}</div>
          </div>` : '<p class="muted cw-match">Kein historisches Match in einer anderen Saison gefunden.</p>'}
          ${bwLine('Stärke ' + e(p.name.split(' ')[0]), 'up', bw.best, p)}${bwLine('Schwäche ' + e(p.name.split(' ')[0]), 'down', bw.worst, p)}
        </div></div>${catTable(list)}`;
    } else {
      const byKey = k => (k ? pool.players.find(x => x.key === k) || null : null);
      const pA = byKey(st.cmpA), pB = byKey(st.cmpB);
      list = [{ p }].concat(pA ? [{ p: pA }] : []).concat(pB ? [{ p: pB }] : []);
      const slot = (id, cur, other, q, k) => `<div class="cw-slot ${MFHFB.charts.SEL[k]}">
          <span class="cw-swatch"></span>
          <input type="search" class="search cw-cmpq" data-cmpq="${id}" placeholder="Name, Team, Position …" value="${e(q)}" autocomplete="off" aria-label="Vergleichsspieler ${k} suchen">
          <select class="tr-select" data-cmp="${id}" aria-label="Vergleichsspieler ${k}"><option value="">— Vergleichsspieler wählen —</option>${optionsHTML(env, compareCandidates(pool.players, p.name, other ? other.name : null, q), cur ? cur.key : null)}</select>
        </div>`;
      body = `<div class="cw-slots">${slot('A', pA, pB, st.cmpQA, 1)}${slot('B', pB, pA, st.cmpQB, 2)}</div>
        <div class="cw-body">
        <div class="cw-radar">${radar(list)}${MFHFB.charts.chips(list.map(l => l.p.name))}</div>
        <div class="cw-side">
          <div class="cw-label">Direktvergleich</div>
          <p class="cw-meta">Perzentile aller ausgewählten Spieler relativ zum selben Saison-Pool — direkt vergleichbar, unabhängig vom Fantasy-Team.${basis === 'p36' ? ' Basis Per 36: zeigt Produktion pro Minute, unabhängig von der aktuellen Rolle.' : ''}</p>
          ${list.map(({ p: x }) => { const b = bestWorst(x).best; return bwLine(e(x.name) + ': Stärke', 'up', b, x); }).join('')}
          ${list.length < 2 ? '<p class="muted small">Oben bis zu zwei Spieler zum Vergleich wählen.</p>' : ''}
        </div></div>${catTable(list)}`;
    }
    return `${head}${controlsTop}${controlsPick}<div class="card cw-card">${top}${body}</div>${note}`;
  }

  let refocus = null; // Suchfeld nach Neuzeichnen wieder fokussieren
  function mount(root, ctx) {
    const st = getState(ctx);
    const needed = st.mode === 'match' ? SEASONS.map(s => s.key) : [st.season];
    if (needed.some(k => !isLoaded(ctx.league, k))) {
      ensureSeasons(ctx.league, needed).then(() => { if (root.querySelector('.cw-card')) ctx.refresh(); });
    }
    const save = patch => { saveState(ctx, patch); ctx.refresh(); };
    const setRoute = key => {
      ctx.params = key ? [key] : [];
      try { history.replaceState(null, '', ctx.href('catweb', ...(key ? [key] : []))); } catch (err) { /* egal */ }
    };
    root.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => save({ mode: b.dataset.mode })));
    root.querySelectorAll('[data-basis]').forEach(b => b.addEventListener('click', () => save({ basis: b.dataset.basis })));
    const on = (sel, ev, fn) => { const el = root.querySelector(sel); if (el) el.addEventListener(ev, () => fn(el)); };
    on('[data-season]', 'change', el => save({ season: el.value }));
    on('[data-samepos]', 'change', el => save({ samePos: el.checked }));
    on('[data-team]', 'change', el => save({ team: el.value }));
    on('[data-exp]', 'change', el => save({ exp: el.value }));
    on('[data-player]', 'change', el => { setRoute(el.value); save({ key: el.value }); });
    let t;
    on('[data-q]', 'input', el => {
      clearTimeout(t);
      t = setTimeout(() => { refocus = { sel: '[data-q]', pos: el.selectionStart }; setRoute(null); save({ q: el.value }); }, 250);
    });
    root.querySelectorAll('[data-cmp]').forEach(sel => sel.addEventListener('change', () => save({ ['cmp' + sel.dataset.cmp]: sel.value || null })));
    // Vergleichs-Suche: nur die Optionsliste des betroffenen Selects neu bauen
    root.querySelectorAll('[data-cmpq]').forEach(inp => inp.addEventListener('input', () => {
      const id = inp.dataset.cmpq, cur = getState(ctx);
      saveState(ctx, { ['cmpQ' + id]: inp.value });
      const env = envFor(ctx), pool = buildPool(env, cur.season, cur.basis).players;
      const main = pool.find(x => x.key === cur.key);
      const other = pool.find(x => x.key === (id === 'A' ? cur.cmpB : cur.cmpA));
      const sel = root.querySelector(`[data-cmp="${id}"]`);
      const curKey = id === 'A' ? cur.cmpA : cur.cmpB;
      sel.innerHTML = '<option value="">— Vergleichsspieler wählen —</option>' + optionsHTML(env, compareCandidates(pool, main ? main.name : null, other ? other.name : null, inp.value), curKey);
    }));
    root.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => {
      setRoute(b.dataset.open);
      save({ key: b.dataset.open, season: b.dataset.season, mode: 'solo', team: '', exp: 'all', q: '' });
    }));
    if (refocus) {
      const el = root.querySelector(refocus.sel);
      if (el) { el.focus({ preventScroll: true }); try { el.setSelectionRange(refocus.pos, refocus.pos); } catch (err) { /* egal */ } }
      refocus = null;
    }
  }

  MFHFB.pages.register({
    id: 'catweb', section: 'players', label: 'Cat Web', icon: '🕸️', applies: { sport: ['nba'] },
    data: ['teams', '?rosters-live', '?sport:aliases', '?live-projections', '?best-available-board', '?projections-consensus'],
    title: () => 'Cat Web', render, mount,
  });

})();
