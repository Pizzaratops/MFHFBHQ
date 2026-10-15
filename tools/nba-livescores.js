// ============================================================
//  Tool (NBA): Live Scores — Daily / Weekly / Monthly / Box Scores
// ============================================================
//  #/<liga>/livescores[/<periode>/<wettbewerb>/<datum>]
//    periode: daily | week | month | box
//
//  Neu gebaut nach js/livescores.js (TTHQ, in Funkytown identisch).
//  Rechenlogik unverändert: Z-Composite = Σ zScores[k] × Punt-Gewicht
//  (0–2 in 0,25-Schritten, 1 = ungewichtete Originalsumme), Min.-Spiele-
//  Filter nur für Weekly/Monthly, Sortierung je Spalte, CSV-Export.
//
//  Sportweite Daten (für beide NBA-Ligen gleich): sport:livescores-daily,
//  sport:livescores-aggregate, ?sport:livescores-boxscores. Die zweite
//  Zeile der Team-Zelle zeigt den Fantasy-Besitzer DIESER Liga.
//
//  Neu: Punt-Gewichte werden je Liga gemerkt (früher nur für die Sitzung);
//  Zeilen mit Punt-Kategorie = 0 bleiben sichtbar, die Spalte wird gedimmt.
//  15.10.2026: 📸 Best-of-Karte (Night/Week/Preseason bzw. Month) als Bild.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const COMPS = [
    ['nba', '🏆 NBA'], ['nba-preseason', '🏀 NBA Pre-Season'],
    ['nba-summer-california', '☀️ Summer League – California'], ['nba-summer-utah', '🏔️ Summer League – Salt Lake City'],
    ['nba-summer-las-vegas', '🏖️ Summer League – Las Vegas'],
  ];
  const PERIODS = [['daily', 'Daily'], ['week', 'Weekly'], ['month', 'Monthly'], ['box', 'Box Scores']];
  const WCATS = [['pts', 'PTS'], ['reb', 'REB'], ['ast', 'AST'], ['stl', 'STL'], ['blk', 'BLK'], ['to', 'TO'], ['tpm', '3PM'], ['fgImpact', 'FG%'], ['ftImpact', 'FT%']];
  const STAT_COLS = [['min', 'MIN'], ['pts', 'PTS', 'pts'], ['reb', 'REB', 'reb'], ['ast', 'AST', 'ast'], ['stl', 'STL', 'stl'], ['blk', 'BLK', 'blk'], ['to', 'TO', 'to'], ['tpm', '3PM', 'tpm'], ['fgPct', 'FG%', 'fgImpact'], ['ftPct', 'FT%', 'ftImpact']];
  const defaults = { sort: 'composite', asc: false, minGames: 1, weights: {}, heat: false, nc: false, nk: 'top10', ncm: '9cat' };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('livescores', {}) });

  function source(data, period, comp) {
    if (period === 'daily') return ((data.LIVESCORES_DAILY || {})[comp]) || {};
    if (period === 'box') return ((data.LIVESCORES_BOXSCORES || {})[comp]) || {};
    return (((data.LIVESCORES_AGGREGATE || {})[period] || {})[comp]) || {};
  }
  // Wettbewerb mit den jüngsten Daten als Start (NBA in der Saison, sonst Summer League/Preseason)
  function defaultComp(data) {
    let best = null, bestDate = '';
    COMPS.forEach(([c]) => { const ds = Object.keys(source(data, 'daily', c)).sort(); if (ds.length && ds[ds.length - 1] > bestDate) { bestDate = ds[ds.length - 1]; best = c; } });
    return best || 'nba';
  }
  const dObj = s => { const [y, m, d] = s.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d)); };
  const dStr = d => d.toISOString().slice(0, 10);
  const fmtLong = s => dObj(s).toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' });
  const fmtShort = s => dObj(s).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' });

  function resolve(ctx) {
    const data = ctx.data;
    const [pp, pc, pd] = ctx.params;
    const period = PERIODS.some(p => p[0] === pp) ? pp : 'daily';
    const comp = COMPS.some(c => c[0] === pc) ? pc : defaultComp(data);
    const dates = Object.keys(source(data, period, comp)).sort();
    const date = pd && /^\d{4}-\d{2}-\d{2}$/.test(pd) ? pd : dates[dates.length - 1] || null;
    return { period, comp, dates, date };
  }

  const weightOf = (st, k) => (typeof st.weights[k] === 'number' ? st.weights[k] : 1);
  function composite(p, st) {
    if (!p.zScores) return p.composite;
    let s = 0; WCATS.forEach(([k]) => { s += (p.zScores[k] || 0) * weightOf(st, k); });
    return Math.round(s * 100) / 100;
  }

  function rowsFor(ctx, entry, r, st) {
    const src = r.period === 'daily' ? entry.players : entry.players.filter(p => p.games >= st.minGames);
    const rows = src.map(p => ({ ...p, composite: composite(p, st) }));
    const col = st.sort;
    rows.sort((a, b) => { const av = a[col], bv = b[col]; const c = typeof av === 'number' ? av - bv : String(av).localeCompare(String(bv)); return st.asc ? c : -c; });
    return rows;
  }

  function tableHtml(ctx, entry, r, st) {
    const { ui, href } = ctx;
    const e = ui.esc, nba = N();
    const owner = nba.ownerIndex(ctx.data);
    const daily = r.period === 'daily';
    const rows = rowsFor(ctx, entry, r, st);
    const fmt = n => (daily ? n : Number(n).toFixed(1));
    // Z-Score direkt hinter dem Namen (wichtigster Wert, auch mobil ohne Scrollen sichtbar)
    const cols = [['name', 'Spieler'], ['composite', 'Z-Score'], ['team', 'Team']].concat(daily ? [] : [['games', 'GP']]).concat(STAT_COLS.map(c => [c[0], c[1]]));
    const punted = new Set(WCATS.filter(([k]) => weightOf(st, k) === 0).map(([k]) => k));
    const th = cols.map(([k, l]) => { const z = (STAT_COLS.find(c => c[0] === k) || [])[2]; return `<th class="${k === 'name' || k === 'team' ? '' : 'num'}${st.sort === k ? ' sorted' : ''}${z && punted.has(z) ? ' punted' : ''}"><button type="button" class="th-sort" data-sort="${k}">${l}${st.sort === k ? (st.asc ? ' ▲' : ' ▼') : ''}</button></th>`; }).join('');
    const body = rows.map((p, i) => {
      const o = owner(p.name);
      const z = p.zScores || {};
      return `<tr>
        <td class="num rank">${i + 1}</td>
        <td class="strong ls-name">${e(p.name)}</td>
        <td class="num"><span class="ls-comp ${p.composite >= 0 ? 'up' : 'down'}">${(p.composite >= 0 ? '+' : '') + p.composite.toFixed(2)}</span></td>
        <td><span class="ls-team"><b>${e(p.team)}</b>${o ? `<a href="${href('teams', o.id)}" class="ls-owner">${e(o.name)}</a>` : `<small>${e(nba.teamName(p.team))}</small>`}</span></td>
        ${daily ? '' : `<td class="num">${p.games}</td>`}
        ${STAT_COLS.map(([k, , zk]) => {
          const v = k === 'fgPct' || k === 'ftPct' ? Number(p[k]).toFixed(1) + '%' : fmt(p[k]);
          return `<td class="num${zk && punted.has(zk) ? ' punted' : ''}" style="${st.heat && zk ? nba.heat(z[zk]) : ''}">${v}</td>`;
        }).join('')}
      </tr>`;
    }).join('');
    return { rows, html: `<div class="table-wrap"><table class="table compact ls-table"><thead><tr><th class="num">#</th>${th}</tr></thead><tbody>${body}</tbody></table></div>` };
  }

  function boxHtml(ctx, entry) {
    const e = ctx.ui.esc, nba = N();
    const team = t => {
      if (!t) return '';
      return `<div class="ls-boxteam"><div class="ls-boxhead"><b>${e(nba.teamName(t.abbr))}</b><span class="display">${e(t.score)}</span></div>
        <div class="table-wrap"><table class="table compact"><thead><tr><th>Spieler</th>${['MIN', 'PTS', 'REB', 'AST', 'STL', 'BLK', 'TO', '3PM'].map(h => `<th class="num">${h}</th>`).join('')}<th class="num">FG</th><th class="num">FT</th></tr></thead><tbody>
        ${(t.players || []).map(p => { const z = p.zScores || {}; return `<tr><td class="strong">${e(p.name)}</td>${[['min'], ['pts', 'pts'], ['reb', 'reb'], ['ast', 'ast'], ['stl', 'stl'], ['blk', 'blk'], ['to', 'to'], ['tpm', 'tpm']].map(([k, zk]) => `<td class="num" style="${zk ? nba.heat(z[zk]) : ''}">${e(p[k])}</td>`).join('')}
          <td class="num" style="${nba.heat(z.fgImpact)}">${p.fgm}-${p.fga}</td><td class="num" style="${nba.heat(z.ftImpact)}">${p.ftm}-${p.fta}</td></tr>`; }).join('')}
        </tbody></table></div></div>`;
    };
    return (entry.games || []).map(g => g.completed
      ? `<div class="card ls-boxgame"><div class="card-head"><h2>${e(g.line || '')}</h2></div><div class="ls-boxteams">${team(g.away)}${team(g.home)}</div></div>`
      : `<div class="card ls-boxgame upcoming"><div class="card-head"><h2>${e(g.away ? g.away.name : '?')} @ ${e(g.home ? g.home.name : '?')}</h2><span class="muted">🕒 ${e(g.statusText || 'Noch nicht gespielt')}</span></div></div>`).join('');
  }


  // ---------- Night Card „Best … of the Night“ (Screenshot, 15.10.2026) ----------
  //  Daily-Ansicht: Top-Spieler des Tages nach Z-Composite (inkl. Punt-Gewichten).
  //  Links Nr. 1 mit Cat-Web-Radar der Nacht, rechts Plätze 2–5 bzw. 2–10.
  //  Erfahrung: Rookie = Draft 2026 oder ohne NBA-Minuten 2022–26 (Undrafted),
  //  Sophomore = Draft 2025, sonst Vet. Die Zusatzdaten werden erst beim Öffnen geladen.
  const NIGHT_KINDS = {
    top10: { label: 'Best 10 Players', n: 10 },
    rookie: { label: 'Best Rookies', n: 5 },
    sophomore: { label: 'Best Sophomores', n: 5 },
    vet: { label: 'Best Vets', n: 5 },
    fa: { label: 'Best Waiver Wire Players', n: 10 }, // Free Agents DIESER Liga (aktuelle Kader)
  };
  // Zeitraum der Karte: Daily = Nacht, Weekly = Woche, Monthly = Monat bzw. ganze Preseason.
  // Weekly/Monthly sind Pro-Spiel-Schnitte → Mindestspiele, damit Einzelspiel-Ausreißer nicht oben landen.
  function ncScope(r, st) {
    if (r.period === 'week') return { suffix: 'of the Week', minG: Math.max(2, st.minGames) };
    if (r.period === 'month') return r.comp === 'nba-preseason' ? { suffix: 'of the Preseason', minG: Math.max(3, st.minGames) } : { suffix: 'of the Month', minG: Math.max(5, st.minGames) };
    return { suffix: 'of the Night', minG: 0 };
  }
  const RADAR_CATS = [['pts', 'PTS'], ['reb', 'REB'], ['ast', 'AST'], ['stl', 'STL'], ['blk', 'BLK'], ['tpm', '3PM'], ['fgImpact', 'FG%'], ['ftImpact', 'FT%'], ['to', 'TO']];
  const EXP_FILES = ['?preseason-score', '?sport:preseason-games', '?sport:draft-class-2026', '?sport:draft-class-2025', '?sport:last-season-stats-2022-23', '?sport:last-season-stats-2023-24', '?sport:last-season-stats-2024-25'];
  // NBA-Rückkehrer ohne Vorsaison-Minuten, die nicht in den Statistik-Dateien 2022–25 stehen
  const NOT_ROOKIE = ['Mario Hezonja', 'Alpha Diallo', 'Lonnie Walker IV', 'Dane Goodwin', 'Jake Stephens', 'Keenan Evans', 'Jon Elmore', 'Tarik Phillip', 'Tyreke Key', 'Elfrid Payton', 'James Johnson'];
  let EXPD = null; // geladene Zusatzdaten (je Liga gleich, sportweit)
  function expOf(d) {
    const k = N().key, nm = p => k(typeof p === 'string' ? p : p.name);
    const rk = new Set((d.DRAFT_CLASS_2026 || []).map(nm));
    const so = new Set((d.DRAFT_CLASS_2025 || []).map(nm));
    const before = new Set([...NOT_ROOKIE, ...['2022_23', '2023_24', '2024_25'].flatMap(y => d['LAST_SEASON_STATS_' + y] || [])].map(nm));
    const noPrior = new Set(((d.PRESEASON_SCORE || {}).players || []).filter(p => !p.priorMin).map(nm));
    return name => { const n = k(name); return rk.has(n) ? 'rookie' : so.has(n) ? 'sophomore' : (noPrior.has(n) && !before.has(n)) ? 'rookie' : 'vet'; };
  }
  const de0 = v => Number(v).toFixed(0);
  const sgn1 = x => (x == null ? '—' : (x > 0 ? '+' : x < 0 ? '−' : '±') + Math.abs(x).toFixed(1).replace('.', ','));
  function statLine(p, avg) {
    const z = p.zScores || {}, f = v => (avg ? Number(v).toFixed(1).replace('.', ',') : v);
    const it = [['PTS', p.pts], ['REB', p.reb], ['AST', p.ast], ['STL', p.stl], ['BLK', p.blk], ['3PM', p.tpm], ['TO', p.to]].map(([l, v]) => [l, f(v)]);
    if (p.fgPct != null && isFinite(p.fgPct) && (p.fgPct || z.fgImpact)) it.push(['FG', de0(p.fgPct) + '%']);
    if (p.ftPct != null && isFinite(p.ftPct) && (p.ftPct || z.ftImpact)) it.push(['FT', de0(p.ftPct) + '%']); // 0 % ohne Versuch ausblenden
    return it.map(([l, v]) => `<span class="nc-s">${l}: <b>${v}</b></span>`).join(' <i>/</i> ');
  }
  // ---------- Sticky-Modus (nur NBA Pre-Season, Daten: PRESEASON_GAMES) ----------
  //  Raten wie auf der Preseason-Seite (gleiche Formeln/Bias/Positions-Referenz), aber
  //  OHNE Vorsaison und ohne Shrinkage: reine Leistung im Zeitraum. Score = gewichteter
  //  Schnitt der z-Werte (Sticky ×1,5 · Other ×1 · Icky ×0,5), positionsrelativ.
  const ST_AXES = ['ORB%', 'DRB%', 'BLK%', 'AST%', 'PTS/36', 'TRB/36', 'STL%', 'TOV%', 'TS%', 'FTr'];
  const ST_LINE = ['ORB%', 'DRB%', 'BLK%', 'AST%', 'PTS/36', 'TRB/36'];
  const ST_LEAD = [...ST_LINE, 'STL%', 'TS%'];
  const ST_MIN = { daily: 15, week: 40, month: 60 };
  function stickyPool(G, from, to) {
    const c = {}; G.cols.forEach((k, i) => { c[k] = i; });
    const by = new Map();
    G.rows.forEach(r => {
      if (r[c.d] < from || r[c.d] > to) return;
      let a = by.get(r[c.id]);
      if (!a) { a = { name: r[c.n], team: r[c.t], pos: r[c.p], games: 0 }; G.cols.slice(5).forEach(k => { a[k] = 0; }); by.set(r[c.id], a); }
      a.games += 1; a.team = r[c.t];
      G.cols.slice(5).forEach(k => { a[k] += r[c[k]]; });
    });
    const div = (x, y) => (y > 0 ? x / y : null);
    const tierOf = {}; Object.entries(G.tiers).forEach(([tr, l]) => l.forEach(s => { tierOf[s] = tr; }));
    return [...by.values()].map(a => {
      const R = { 'PTS/36': div(a.pts * 36, a.mp), 'TRB/36': div((a.orb + a.drb) * 36, a.mp), 'ORB%': div(a.orb, a.dOrb), 'DRB%': div(a.drb, a.dDrb),
        'BLK%': div(a.blk, a.dBlk), 'STL%': div(a.stl, a.dStl), 'AST%': div(a.ast, a.dAst), 'TOV%': div(a.tov, a.plays), 'FTr': div(a.fta, a.fga), 'TS%': div(a.pts, 2 * (a.fga + 0.44 * a.fta)) };
      const ref = G.ref[a.pos] || G.ref.ALL, z = {};
      let ws = 0, ss = 0;
      ST_AXES.forEach(s => {
        if (R[s] == null || !ref[s]) { z[s] = null; return; }
        let v = (R[s] / (G.bias[s] || 1) - ref[s].mean) / (ref[s].sd || 1);
        if (G.inverted.includes(s)) v = -v;
        z[s] = v;
        const w = G.weights[tierOf[s]] || 0; ws += w; ss += w * v;
      });
      return { ...a, R, z, score: ws ? ss / ws : 0 };
    });
  }
  const fmtRate = (s, v) => (v == null ? '—' : (s.includes('/') ? v : v * 100).toFixed(1).replace('.', ','));
  const stLine = (p, keys) => keys.map(s => `<span class="nc-s">${s}: <b>${fmtRate(s, p.R[s])}</b></span>`).join(' <i>/</i> ');

  function nightCard(ctx, st, entry, r) {
    const e = ctx.ui.esc;
    const kind = NIGHT_KINDS[st.nk] ? st.nk : 'top10', SC = ncScope(r, st), avg = r.period !== 'daily';
    const canSticky = r.comp === 'nba-preseason', sticky = canSticky && st.ncm === 'sticky';
    const K = { n: NIGHT_KINDS[kind].n, label: `${NIGHT_KINDS[kind].label} ${SC.suffix}` };
    const dailyDates = Object.keys(source(ctx.data, 'daily', r.comp)).sort();
    if (avg && dailyDates.length && entry.windowStart < dailyDates[0]) entry = { ...entry, windowStart: dailyDates[0] };
    const compLabel = ((COMPS.find(c => c[0] === r.comp) || [])[1] || r.comp).replace(/^\S+\s/, '');
    const sel = `<select class="tr-select" data-nk aria-label="Kategorie">${Object.entries(NIGHT_KINDS).map(([k, v]) => `<option value="${k}"${k === kind ? ' selected' : ''}>${v.label} ${SC.suffix}</option>`).join('')}</select>
      ${canSticky ? `<div class="seg" role="group" aria-label="Bewertung"><button type="button" class="seg-btn${sticky ? '' : ' active'}" data-ncm="9cat" title="Box Score: Summe der 9-Cat-z-Werte">9-Cat</button><button type="button" class="seg-btn${sticky ? ' active' : ''}" data-ncm="sticky" title="Raten wie auf der Preseason-Seite (ORB%, DRB%, BLK%, AST% …), positionsbereinigt, ohne Vorsaison">Sticky</button></div>` : ''}
      <button type="button" class="seg-btn active nc-shot" data-ncshot>📸 Screenshot</button>`;
    if ((!['top10', 'fa'].includes(kind) || sticky) && !EXPD) return `<div class="controls nc-controls">${sel}</div><div class="card nc-card"><p class="muted">⏳ Lade Daten …</p></div>`;
    const owner = N().ownerIndex(ctx.data);
    const exp = kind === 'top10' ? null : kind === 'fa' ? (name => (owner(name) ? 'x' : 'fa')) : expOf(EXPD);
    const team = p => N().canonTeam(p.team) || p.team;
    const f1 = v => Number(v).toFixed(1).replace('.', ',');
    let items, minNote, label = K.label;
    if (sticky) {
      const G = EXPD.PRESEASON_GAMES;
      if (!G) return `<div class="controls nc-controls">${sel}</div><div class="card nc-card"><p class="muted">Keine Sticky-Daten (preseason-games.js fehlt).</p></div>`;
      const from = avg ? entry.windowStart : r.date, to = avg ? entry.windowEnd : r.date, minM = ST_MIN[r.period] || 15;
      const pool = stickyPool(G, from, to).filter(p => p.mp >= minM).sort((a, b) => b.score - a.score);
      items = (exp ? pool.filter(p => exp(p.name) === kind) : pool).slice(0, K.n).map(p => ({
        name: p.name, team: team(p), meta: avg ? `${p.games} Sp. · ${f1(p.mp / p.games)} Min./Sp.` : `${Math.round(p.mp)} Min.`,
        lead: stLine(p, ST_LEAD), line: stLine(p, ST_LINE),
        axes: ST_AXES, vals: ST_AXES.map(s => (p.z[s] == null ? null : Math.max(0.04, Math.min(1, p.z[s] / 6 + 0.5)))), tips: ST_AXES.map(s => `${s}: ${fmtRate(s, p.R[s])} (z ${sgn1(p.z[s])})`),
      }));
      minNote = `Sticky-Raten, positionsbereinigt · mind. ${minM} Min.`;
      label += ' · Sticky';
    } else {
      const pool = (entry.players || []).filter(p => p.min > 0 && (!avg || p.games >= SC.minG)).map(p => ({ p, c: composite(p, st) })).sort((a, b) => b.c - a.c).map(x => x.p);
      items = (exp ? pool.filter(p => exp(p.name) === kind) : pool).slice(0, K.n).map(p => {
        const z = p.zScores || {};
        return { name: p.name, team: team(p), meta: avg ? `${p.games} Sp. · ${f1(p.min)} Min./Sp.` : `${p.min} Min.`, lead: statLine(p, avg), line: statLine(p, avg),
          axes: RADAR_CATS.map(([, l]) => l), vals: RADAR_CATS.map(([k]) => Math.max(0.04, Math.min(1, (z[k] || 0) / 6 + 0.5))), tips: RADAR_CATS.map(([k, l]) => `${l}: z ${sgn1(z[k])}`) };
      });
      minNote = avg ? `Ø pro Spiel · mind. ${SC.minG} Spiele` : '';
    }
    let body;
    if (!items.length) body = ctx.ui.empty('Niemand gefunden', 'In diesem Zeitraum hat kein Spieler dieser Gruppe die Mindestvorgabe erreicht.', '🌙');
    else {
      const top = items[0];
      const radar = MFHFB.charts.radar({ axes: top.axes.map(l => ({ label: l })), series: [{ name: top.name, vals: top.vals, tips: top.tips }], size: 260, label: `Cat Web ${top.name}` });
      body = `<div class="nc-grid">
        <div class="nc-lead">
          <div class="nc-rank">1.</div>
          <div class="nc-name">${e(top.name)}</div>
          <div class="nc-team">${e(top.team)} · ${top.meta}</div>
          <div class="nc-radar">${radar}</div>
          <div class="nc-line">${top.lead}</div>
        </div>
        <ol class="nc-list">${items.slice(1).map((p, i) => `<li><span class="nc-n">${i + 2}.</span><div><div class="nc-pname">${e(p.name)} <small>${e(p.team)} · ${p.meta}</small></div><div class="nc-line">${p.line}</div></div></li>`).join('')}</ol>
      </div>`;
    }
    const when = avg ? `${e(fmtShort(entry.windowStart))} – ${e(fmtShort(entry.windowEnd))}` : `${e(fmtLong(r.date))} · ${(entry.games || []).length} Spiele`;
    return `<div class="controls nc-controls">${sel}</div>
      <section class="card nc-card${sticky ? ' sticky' : ''}" data-share="${e(label)} · ${e(fmtShort(r.date))}">
        <div class="nc-head"><div class="nc-kicker">${e(compLabel)} · ${when}${kind === 'fa' ? ` · Free Agents ${e(ctx.league.short || ctx.league.name)}` : ''}${minNote ? ' · ' + minNote : ''}</div><h2 class="nc-title display">${e(K.label)}${sticky ? ' <span class="nc-mode">Sticky Stats</span>' : ''}</h2></div>
        ${body}
      </section>`;
  }


  function render(ctx) {
    const { data, ui, href } = ctx;
    const e = ui.esc;
    N().init(data);
    const r = resolve(ctx);
    const st = getState(ctx);
    const src = source(data, r.period, r.comp);
    const entry = r.date ? src[r.date] : null;
    const availableComps = COMPS.filter(([c]) => Object.keys(source(data, 'daily', c)).length || Object.keys(source(data, 'week', c)).length);
    const idx = r.date ? r.dates.indexOf(r.date) : -1;
    const prev = idx > 0 ? r.dates[idx - 1] : (idx === -1 && r.date ? r.dates.filter(d => d < r.date).pop() : null);
    const next = idx >= 0 && idx < r.dates.length - 1 ? r.dates[idx + 1] : (idx === -1 && r.date ? r.dates.find(d => d > r.date) : null);
    const link = (p, c, d) => href('livescores', p, c, ...(d ? [d] : []));
    let info = '', content = '', count = 0;
    const box = r.period === 'box';
    const empty = box ? !(entry && entry.games && entry.games.length) : !(entry && entry.players && entry.players.length);
    if (!r.date) content = ui.empty('Keine Daten', `Für ${e((COMPS.find(c => c[0] === r.comp) || [])[1] || r.comp)} liegen in dieser Ansicht noch keine Daten vor.`, '🏀');
    else if (empty) content = ui.empty('Keine Daten für diesen Zeitraum', 'Entweder wurden keine Spiele ausgetragen, oder die Automatisierung hat das noch nicht erfasst.', '📭');
    else if (box) content = boxHtml(ctx, entry);
    else {
      const avg = entry.leagueAvg ? ` · Liga-Ø FG% ${entry.leagueAvg.fg.toFixed(1)}% · FT% ${entry.leagueAvg.ft.toFixed(1)}%` : '';
      info = r.period === 'daily' ? `${(entry.games || []).map(e).join(' · ')}${avg}`
        : `Fenster ${fmtShort(entry.windowStart)} – ${fmtShort(entry.windowEnd)} · ${entry.daysInWindow} Tag${entry.daysInWindow === 1 ? '' : 'e'} mit Daten${avg}`;
      const t = tableHtml(ctx, entry, r, st);
      count = t.rows.length;
      content = t.html;
    }
    const punted = WCATS.filter(([k]) => weightOf(st, k) !== 1);
    return `
      <div class="page-head"><h1 class="page-title display">🔴 Live Scores</h1>
        <div class="page-sub">${r.date ? (r.period === 'daily' || box ? fmtLong(r.date) : `${r.period === 'week' ? 'Woche' : 'Monat'} bis ${fmtShort(r.date)}`) : ''}${count ? ` · ${count} Spieler` : ''} · Z-Scores je Kategorie, FG%/FT% als Impact (Abweichung × Würfe)</div></div>
      <div class="controls">
        <div class="seg" role="group">${PERIODS.filter(([p]) => p !== 'box' || Object.keys(source(data, 'box', r.comp)).length).map(([p, l]) => `<a class="seg-btn${p === r.period ? ' active' : ''}" href="${link(p, r.comp)}">${l}</a>`).join('')}</div>
        <select class="tr-select" data-comp aria-label="Wettbewerb">${(availableComps.length ? availableComps : COMPS).map(([c, l]) => `<option value="${c}"${c === r.comp ? ' selected' : ''}>${l}</option>`).join('')}</select>
        <div class="seg ls-datenav" role="group">
          ${prev ? `<a class="seg-btn" href="${link(r.period, r.comp, prev)}" aria-label="Vorheriger Tag">◀</a>` : '<span class="seg-btn disabled">◀</span>'}
          <input type="date" class="ls-date" data-date value="${r.date || ''}" ${r.dates.length ? `min="${r.dates[0]}" max="${r.dates[r.dates.length - 1]}"` : ''} aria-label="Datum">
          ${next ? `<a class="seg-btn" href="${link(r.period, r.comp, next)}" aria-label="Nächster Tag">▶</a>` : '<span class="seg-btn disabled">▶</span>'}
        </div>
      </div>
      ${info ? `<div class="ls-info">${info}</div>` : ''}
      ${!box ? `<div class="ls-tools">
        ${r.period !== 'daily' ? `<label class="ls-min">🎚️ Min. Spiele <input type="range" min="1" max="5" step="1" value="${st.minGames}" data-min> <b data-minval>${st.minGames}</b></label>` : ''}
        ${!empty ? `<button type="button" class="seg-btn${st.nc ? ' active' : ''}" data-nc>📸 ${r.period === 'daily' ? 'Night Card' : r.period === 'week' ? 'Week Card' : r.comp === 'nba-preseason' ? 'Preseason Card' : 'Month Card'}</button>` : ''}
        <label class="dna-check"><input type="checkbox" data-heat ${st.heat ? 'checked' : ''}> Heatmap</label>
        <details class="ls-punt"${punted.length ? ' open' : ''}><summary>⚖️ Punt / Gewichtung${punted.length ? ` <span class="ls-puntn">${punted.length} angepasst</span>` : ''}</summary>
          <div class="ls-puntgrid">${WCATS.map(([k, l]) => `<label class="ls-pitem${weightOf(st, k) === 0 ? ' punted' : ''}"><span>${l} <b data-wval="${k}">${weightOf(st, k).toFixed(2)}</b></span><input type="range" min="0" max="2" step="0.25" value="${weightOf(st, k)}" data-w="${k}"></label>`).join('')}</div>
          <div class="ls-puntfoot"><button type="button" class="seg-btn" data-wreset>Zurücksetzen</button><span class="muted">0 = Kategorie gepuntet · 1 = normal · 2 = doppelt</span></div>
        </details>
        ${r.period !== 'daily' && count ? '<button type="button" class="seg-btn" data-csv>⬇️ CSV</button>' : ''}
      </div>` : ''}
      ${!box && !empty && st.nc ? `<div data-nchost>${nightCard(ctx, st, entry, r)}</div>` : ''}
      <div data-content>${content}</div>`;
  }

  function mount(root, ctx) {
    const r = resolve(ctx);
    const save = patch => { ctx.store.setJSON('livescores', { ...getState(ctx), ...patch }); };
    const rerenderTable = () => {
      const st = getState(ctx);
      const entry = r.date ? source(ctx.data, r.period, r.comp)[r.date] : null;
      if (!entry || !entry.players) return;
      root.querySelector('[data-content]').innerHTML = tableHtml(ctx, entry, r, st).html;
      bindSort();
    };
    const bindSort = () => root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => {
      const st = getState(ctx), col = b.dataset.sort;
      save(st.sort === col ? { asc: !st.asc } : { sort: col, asc: col === 'name' || col === 'team' });
      rerenderTable();
    }));
    bindSort();
    const comp = root.querySelector('[data-comp]');
    if (comp) comp.addEventListener('change', () => { location.hash = ctx.href('livescores', r.period, comp.value); });
    const date = root.querySelector('[data-date]');
    if (date) date.addEventListener('change', () => { if (date.value) location.hash = ctx.href('livescores', r.period, r.comp, date.value); });
    const min = root.querySelector('[data-min]');
    if (min) min.addEventListener('input', () => { save({ minGames: Number(min.value) }); root.querySelector('[data-minval]').textContent = min.value; rerenderTable(); });
    const heat = root.querySelector('[data-heat]');
    if (heat) heat.addEventListener('change', () => { save({ heat: heat.checked }); rerenderTable(); });
    root.querySelectorAll('[data-w]').forEach(inp => inp.addEventListener('input', () => {
      const w = { ...getState(ctx).weights, [inp.dataset.w]: Number(inp.value) };
      save({ weights: w });
      root.querySelector(`[data-wval="${inp.dataset.w}"]`).textContent = Number(inp.value).toFixed(2);
      inp.closest('.ls-pitem').classList.toggle('punted', Number(inp.value) === 0);
      rerenderTable();
    }));

    // Night Card
    const ncBtn = root.querySelector('[data-nc]');
    if (ncBtn) ncBtn.addEventListener('click', () => { save({ nc: !getState(ctx).nc }); ctx.refresh(); });
    const nk = root.querySelector('[data-nk]');
    if (nk) nk.addEventListener('change', () => { save({ nk: nk.value }); ctx.refresh(); });
    root.querySelectorAll('[data-ncm]').forEach(b => b.addEventListener('click', () => { save({ ncm: b.dataset.ncm }); ctx.refresh(); }));
    if (root.querySelector('[data-nchost]') && !EXPD) MFHFB.data.load(ctx.league, EXP_FILES).then(d => { EXPD = d || {}; }).catch(() => { EXPD = {}; }).then(() => { if (root.isConnected && (getState(ctx).nk !== 'top10' || getState(ctx).ncm === 'sticky')) ctx.refresh(); });
    const shot = root.querySelector('[data-ncshot]');
    if (shot) shot.addEventListener('click', async () => {
      const card = root.querySelector('.nc-card[data-share]'); if (!card) return;
      shot.disabled = true; const old = shot.textContent; shot.textContent = '⏳ …';
      try { await MFHFB.share.share(card, card.dataset.share, ctx.league); shot.textContent = '✅ Gespeichert'; }
      catch (err) { console.error(err); shot.textContent = '⚠️ Fehler'; }
      setTimeout(() => { shot.textContent = old; shot.disabled = false; }, 1500);
    });
    const reset = root.querySelector('[data-wreset]');
    if (reset) reset.addEventListener('click', () => { save({ weights: {} }); ctx.refresh(); });
    const csv = root.querySelector('[data-csv]');
    if (csv) csv.addEventListener('click', () => {
      const st = getState(ctx);
      const entry = source(ctx.data, r.period, r.comp)[r.date];
      const rows = rowsFor(ctx, entry, r, st);
      const head = ['#', 'Name', 'Team', 'GP', 'MIN', 'PTS', 'REB', 'AST', 'STL', 'BLK', 'TO', '3PM', 'FG%', 'FT%', 'Z-Score'];
      const esc = v => (/[",\n;]/.test(String(v)) ? '"' + String(v).replace(/"/g, '""') + '"' : String(v));
      const lines = rows.map((p, i) => [i + 1, p.name, p.team, p.games, ...['min', 'pts', 'reb', 'ast', 'stl', 'blk', 'to', 'tpm'].map(k => Number(p[k]).toFixed(1)), p.fgPct.toFixed(1) + '%', p.ftPct.toFixed(1) + '%', p.composite.toFixed(2)].map(esc).join(';'));
      const blob = new Blob(['﻿' + [head.join(';'), ...lines].join('\n')], { type: 'text/csv;charset=utf-8;' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `livescores_${r.period === 'week' ? 'Woche' : 'Monat'}_${r.comp}_${r.date}.csv`;
      document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(a.href);
    });
  }

  MFHFB.pages.register({
    id: 'livescores', section: 'players', label: 'Live Scores', icon: '🔴', applies: { sport: ['nba'] },
    data: ['teams', '?rosters-live', '?sport:aliases', 'sport:livescores-daily', 'sport:livescores-aggregate', '?sport:livescores-boxscores'],
    title: () => 'Live Scores', render, mount,
  });
})();
