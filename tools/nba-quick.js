// ============================================================
//  Tool (NBA, 9-Cat-Ligen): Schnell-Übersicht = Startseite (seit 26.10.2026)
// ============================================================
//  #/<liga>/home   (vorher: Team-Kacheln – die stehen jetzt unter „Teams & Kader“)
//
//  Links:  ⚔️ Aktuelle Matchups (Kategorie-Stand live, z. B. „Illini 5-4 Seagulls“)
//          👑 Royal Rumble: ein Team gegen die ganze Liga in dieser (oder einer
//             früheren) Woche – wie wäre es gegen jeden Gegner ausgegangen?
//          📈 Ranking: Rolling (Kategorie-Bilanz über alle Wochen) oder Totals
//             (Saison-Summen je Kategorie, nach jeder Spalte sortierbar)
//  Rechts: 🏅 Beste Spieler – Saison / 7 Tage, alle oder nur freie (Waiver),
//          bewertet mit dem gewählten Score-Modus (Standard Rose-Metric).
//
//  Daten: WEEK_STATS (sports/nba/scripts/sync-week-stats.js im Liga-Sync:
//  gezählte Stats der aktiven Aufstellung je Team und Woche, inkl. FGM/FGA),
//  SEASON_MATCHUPS (Wochen-Ergebnisse), LIVESCORES_SEASON / _AGGREGATE (Spieler).
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const CATS = [['fgPct', 'FG%'], ['ftPct', 'FT%'], ['tpm', '3PM'], ['pts', 'PTS'], ['reb', 'REB'], ['ast', 'AST'], ['stl', 'STL'], ['blk', 'BLK'], ['tov', 'TO']];
  const TOT_COLS = [['gp', 'GP'], ['fgm', 'FGM'], ['fga', 'FGA'], ['fgPct', 'FG%'], ['ftm', 'FTM'], ['fta', 'FTA'], ['ftPct', 'FT%'], ['tpm', '3PM'], ['pts', 'PTS'], ['reb', 'REB'], ['ast', 'AST'], ['stl', 'STL'], ['blk', 'BLK'], ['tov', 'TO']];
  const Z_KEYS = ['pts', 'reb', 'ast', 'stl', 'blk', 'tpm', 'fgImpact', 'ftImpact', 'to'];
  const defaults = { rr: null, rrWeek: null, rank: 'rolling', sort: 'pts', dir: -1, best: 'season', bestOwn: 'all' };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('quick', {}) });
  const pct = (m, a) => (a ? m / a : 0);
  const f3 = v => v.toFixed(3).replace(/^0/, '');
  const num = v => (Number.isInteger(v) ? String(v) : v.toFixed(1));

  const withPct = t => ({ ...t, fgPct: pct(t.fgm, t.fga), ftPct: pct(t.ftm, t.fta) });
  // Kategorie-Vergleich a gegen b → [w, l, t] und je Kategorie +1/−1/0 (aus Sicht von a)
  function compare(a, b) {
    let w = 0, l = 0, t = 0; const per = {};
    CATS.forEach(([k]) => {
      let d = (a[k] || 0) - (b[k] || 0);
      if (k === 'tov') d = -d;
      if (Math.abs(d) < 1e-9) { t++; per[k] = 0; } else if (d > 0) { w++; per[k] = 1; } else { l++; per[k] = -1; }
    });
    return { w, l, t, per };
  }

  function model(ctx) {
    const data = ctx.data, nba = N().init(data);
    const W = data.WEEK_STATS || null;
    const teams = nba.leagueTeams(data);
    const tById = new Map(nba.leagueTeams(data, true).map(t => [t.id, t]));
    const weeks = W ? Object.keys(W.periods || {}).map(Number).sort((a, b) => a - b) : [];
    return { data, nba, W, teams, tById, weeks, cur: W ? W.current : null };
  }
  const tName = (M, id, short) => { const t = M.tById.get(Number(id)); return t ? (short && t.abbrev ? t.abbrev : t.name) : 'Team ' + id; };
  const tLink = (ctx, M, id) => { const t = M.tById.get(Number(id)); return t ? `<a class="nba-tlink mp-tc" style="${M.nba.tcStyle(t)}" href="${ctx.href('teams', t.id)}"><span class="nba-tdot"></span>${ctx.ui.esc(t.name)}</a>` : ctx.ui.esc('Team ' + id); };

  // ---------- ⚔️ Matchups ----------
  function matchupsBlock(ctx, M) {
    const e = ctx.ui.esc;
    if (!M.W || !M.cur) return `<div class="card qk-empty">Matchup-Daten kommen mit dem nächsten Liga-Sync.</div>`;
    const per = M.W.periods[M.cur] || {}, pairs = (M.W.matchups || {})[M.cur] || [];
    if (!pairs.length) return `<div class="card qk-empty">Diese Woche keine Matchups.</div>`;
    return `<div class="qk-matchups">${pairs.map(m => {
      const a = per[m.home] ? withPct(per[m.home]) : null, b = per[m.away] ? withPct(per[m.away]) : null;
      const c = a && b ? compare(a, b) : { w: m.hw, l: m.hl, t: m.ht };
      const ta = M.tById.get(m.home), tb = M.tById.get(m.away);
      const lead = c.w > c.l ? 'a' : c.l > c.w ? 'b' : '';
      return `<a class="qk-m" href="${ctx.href('planner')}">
        <span class="qk-mt${lead === 'a' ? ' lead' : ''}" style="${M.nba.tcStyle(ta)}">${e(tName(M, m.home))}</span>
        <span class="qk-ms"><b>${c.w}-${c.l}${c.t ? '-' + c.t : ''}</b></span>
        <span class="qk-mt r${lead === 'b' ? ' lead' : ''}" style="${M.nba.tcStyle(tb)}">${e(tName(M, m.away))}</span></a>`;
    }).join('')}</div>`;
  }

  // ---------- 👑 Royal Rumble ----------
  function rumbleBlock(ctx, M, st) {
    const e = ctx.ui.esc;
    if (!M.W || !M.weeks.length) return '';
    const wk = M.weeks.includes(st.rrWeek) ? st.rrWeek : M.cur;
    const per = M.W.periods[wk] || {};
    const ids = M.teams.map(t => t.id).filter(id => per[id]);
    if (!ids.length) return '';
    const me = ids.includes(st.rr) ? st.rr : (ctx.league.myTeam && ids.includes(ctx.league.myTeam) ? ctx.league.myTeam : ids[0]);
    const mine = withPct(per[me]);
    const rows = ids.filter(id => id !== me).map(id => { const o = withPct(per[id]); return { id, o, c: compare(mine, o) }; })
      .sort((a, b) => (b.c.w - b.c.l) - (a.c.w - a.c.l));
    const tot = rows.reduce((s, r) => ({ w: s.w + (r.c.w > r.c.l ? 1 : 0), l: s.l + (r.c.w < r.c.l ? 1 : 0), t: s.t + (r.c.w === r.c.l ? 1 : 0) }), { w: 0, l: 0, t: 0 });
    const cell = (k, o, c) => {
      const v = k === 'fgPct' ? `${f3(o.fgPct)}<small>${num(o.fgm)}/${num(o.fga)}</small>` : k === 'ftPct' ? `${f3(o.ftPct)}<small>${num(o.ftm)}/${num(o.fta)}</small>` : num(o[k] || 0);
      return `<td class="num qk-c ${c == null ? '' : c.per[k] > 0 ? 'win' : c.per[k] < 0 ? 'loss' : 'tie'}">${v}</td>`;
    };
    return `<section class="qk-sec"><div class="qk-head"><h2>👑 Royal Rumble</h2>
        <select class="tr-select" data-rr aria-label="Team">${ids.map(id => `<option value="${id}"${id === me ? ' selected' : ''}>${e(tName(M, id))}</option>`).join('')}</select>
        <select class="tr-select" data-rrweek aria-label="Woche">${M.weeks.slice().reverse().map(w => `<option value="${w}"${w === wk ? ' selected' : ''}>Woche ${w}${w === M.cur ? ' (läuft)' : ''}</option>`).join('')}</select></div>
      <p class="small muted">${e(tName(M, me))} gegen jedes Team der Liga in Woche ${wk}: <b>${tot.w}-${tot.l}${tot.t ? '-' + tot.t : ''}</b> Matchups. Grün = ${e(tName(M, me))} gewinnt die Kategorie, rot = verliert.</p>
      <div class="table-wrap"><table class="table compact qk-rr"><thead><tr><th>Team</th><th class="num">GP</th><th class="num">Score</th>${CATS.map(([, l]) => `<th class="num">${l}</th>`).join('')}</tr></thead><tbody>
        <tr class="qk-me"><td>${tLink(ctx, M, me)}</td><td class="num">${num(mine.gp)}</td><td class="num muted">—</td>${CATS.map(([k]) => cell(k, mine, null)).join('')}</tr>
        ${rows.map(r => `<tr><td>${tLink(ctx, M, r.id)}</td><td class="num">${num(r.o.gp)}</td><td class="num strong ${r.c.w > r.c.l ? 'up' : r.c.w < r.c.l ? 'down' : ''}">${r.c.w}-${r.c.l}-${r.c.t}</td>${CATS.map(([k]) => cell(k, r.o, r.c)).join('')}</tr>`).join('')}
      </tbody></table></div></section>`;
  }

  // ---------- 📈 Ranking ----------
  function rankingBlock(ctx, M, st) {
    const e = ctx.ui.esc;
    const tabs = `<div class="seg" role="group">${[['rolling', 'Rolling'], ['totals', 'Totals'], ['avg', 'Ø pro Spiel']].map(([k, l]) => `<button type="button" class="seg-btn${st.rank === k ? ' active' : ''}" data-rank="${k}">${l}</button>`).join('')}</div>`;
    if (st.rank === 'rolling') {
      const S = (M.data.SEASON_MATCHUPS || []).find(s => s.current) || null;
      const tot = {};
      // abgeschlossene Wochen (SEASON_MATCHUPS) + laufende Woche live (WEEK_STATS)
      if (S) Object.keys(S.weeks || {}).forEach(w => (S.weeks[w] || []).forEach(x => {
        if (x.playoff) return; const id = (S.teams[x.team] || {}).teamId; if (id == null) return;
        const t = tot[id] = tot[id] || { id, cw: 0, cl: 0, ct: 0, mw: 0, ml: 0, mt: 0, lw: 0, ll: 0, lt: 0 };
        t.cw += x.w; t.cl += x.l; t.ct += x.t; if (x.res === 'W') t.mw++; else if (x.res === 'L') t.ml++; else t.mt++;
      }));
      const doneWeeks = S ? Object.keys(S.weeks || {}).map(Number) : [];
      if (M.W && M.cur && !doneWeeks.includes(M.cur)) {
        const per = M.W.periods[M.cur] || {};
        ((M.W.matchups || {})[M.cur] || []).forEach(m => {
          if (!per[m.home] || !per[m.away] || !(per[m.home].gp > 0 || per[m.away].gp > 0)) return; // Woche ohne Spiele zählt (noch) nicht
          const c = compare(withPct(per[m.home]), withPct(per[m.away]));
          [[m.home, c.w, c.l], [m.away, c.l, c.w]].forEach(([id, w, l]) => { const t = tot[id] = tot[id] || { id, cw: 0, cl: 0, ct: 0, mw: 0, ml: 0, mt: 0, lw: 0, ll: 0, lt: 0 }; t.lw = w; t.ll = l; t.lt = c.t; });
        });
      }
      const p = (w, l, t) => ((w + l + t) ? (w + t / 2) / (w + l + t) : 0);
      const list = Object.values(tot).map(t => ({ ...t, aw: t.cw + t.lw, al: t.cl + t.ll, at: t.ct + t.lt })).map(t => ({ ...t, pct: p(t.aw, t.al, t.at) })).sort((a, b) => b.pct - a.pct || b.aw - a.aw);
      if (!list.length) return `<section class="qk-sec"><div class="qk-head"><h2>📈 Ranking</h2>${tabs}</div><div class="card qk-empty">Noch keine Wochen.</div></section>`;
      return `<section class="qk-sec"><div class="qk-head"><h2>📈 Ranking</h2>${tabs}</div>
        <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th>Team</th><th class="num" title="Kategorien gesamt inkl. laufender Woche (live)">Kategorien</th><th class="num">Pct</th><th class="num" title="Laufende Woche, live">Diese Woche</th><th class="num" title="Abgeschlossene Matchups">Matchups</th></tr></thead><tbody>
        ${list.map((r, i) => `<tr><td class="num rank">${i + 1}</td><td>${tLink(ctx, M, r.id)}</td><td class="num strong">${r.aw}-${r.al}-${r.at}</td><td class="num">${f3(r.pct)}</td><td class="num muted">${r.lw + r.ll + r.lt ? `${r.lw}-${r.ll}-${r.lt}` : '—'}</td><td class="num">${r.mw}-${r.ml}-${r.mt}</td></tr>`).join('')}
        </tbody></table></div><p class="small muted">Rolling = Kategorie-Bilanz über alle Wochen der Saison, die laufende Woche live eingerechnet.</p></section>`;
    }
    // Totals / Ø pro Spiel
    if (!M.W) return `<section class="qk-sec"><div class="qk-head"><h2>📈 Ranking</h2>${tabs}</div><div class="card qk-empty">Kommt mit dem nächsten Liga-Sync.</div></section>`;
    const sum = {};
    M.weeks.forEach(w => { const isPO = ((M.W.matchups || {})[w] || []).some(m => m.playoff); if (isPO) return; Object.entries(M.W.periods[w] || {}).forEach(([id, t]) => { const s = sum[id] = sum[id] || { id: Number(id) }; Object.entries(t).forEach(([k, v]) => { s[k] = (s[k] || 0) + v; }); }); });
    const avg = st.rank === 'avg';
    const list = Object.values(sum).filter(s => M.tById.has(s.id)).map(s => { const o = withPct(s); if (avg && s.gp) ['fgm', 'fga', 'ftm', 'fta', 'tpm', 'pts', 'reb', 'ast', 'stl', 'blk', 'tov'].forEach(k => { o[k] = s[k] / s.gp; }); return o; });
    const k = TOT_COLS.some(c => c[0] === st.sort) ? st.sort : 'pts';
    list.sort((a, b) => (b[k] - a[k]) * (st.dir === -1 ? 1 : -1));
    const fmt = (c, v) => (c === 'fgPct' || c === 'ftPct' ? f3(v) : avg && c !== 'gp' ? v.toFixed(2) : Math.round(v).toLocaleString('de-DE'));
    const best = {}; TOT_COLS.forEach(([c]) => { const vals = list.map(x => x[c]); best[c] = c === 'tov' ? Math.min(...vals) : Math.max(...vals); });
    return `<section class="qk-sec"><div class="qk-head"><h2>📈 Ranking</h2>${tabs}</div>
      <div class="table-wrap"><table class="table compact qk-tot"><thead><tr><th class="num">#</th><th>Team</th>${TOT_COLS.map(([c, l]) => `<th class="num${k === c ? ' sorted' : ''}"><button type="button" class="th-sort" data-tsort="${c}">${l}${k === c ? (st.dir === -1 ? ' ▼' : ' ▲') : ''}</button></th>`).join('')}</tr></thead><tbody>
      ${list.map((r, i) => `<tr><td class="num rank">${i + 1}</td><td>${tLink(ctx, M, r.id)}</td>${TOT_COLS.map(([c]) => `<td class="num${r[c] === best[c] && c !== 'gp' && c !== 'fga' && c !== 'fta' ? ' qk-top' : ''}">${fmt(c, r[c] || 0)}</td>`).join('')}</tr>`).join('')}
      </tbody></table></div><p class="small muted">${avg ? 'Ø pro gespieltem Spiel (GP)' : 'Saison-Summen'} der aktiven Aufstellung, Hauptrunde${M.cur ? ' inkl. laufender Woche' : ''}. Spalte antippen = sortieren; markiert = Liga-Bestwert.</p></section>`;
  }

  // ---------- 🏅 Beste Spieler ----------
  function bestBlock(ctx, M, st) {
    const e = ctx.ui.esc, nba = M.nba, data = M.data;
    const src = st.best === 'week' ? ((data.LIVESCORES_AGGREGATE || {}).week || {}).nba : ((data.LIVESCORES_SEASON || {}).season || {}).nba;
    const dates = src ? Object.keys(src).sort() : [];
    const entry = dates.length ? src[dates[dates.length - 1]] : null;
    const owner = nba.ownerIndex(data);
    const ctrl = `<div class="qk-bctl"><div class="seg" role="group">${[['season', 'Saison'], ['week', '7 Tage']].map(([k, l]) => `<button type="button" class="seg-btn${st.best === k ? ' active' : ''}" data-best="${k}">${l}</button>`).join('')}</div>
      <div class="seg" role="group">${[['all', 'Alle'], ['free', 'Waiver']].map(([k, l]) => `<button type="button" class="seg-btn${st.bestOwn === k ? ' active' : ''}" data-bestown="${k}">${l}</button>`).join('')}</div>${nba.modeControl()}</div>`;
    if (!entry || !entry.players || !entry.players.length) return `<aside class="qk-best-col"><h2>🏅 Beste Spieler</h2>${ctrl}<div class="card qk-empty">Noch keine Spiele.</div></aside>`;
    const list = entry.players.map(p => ({ ...p }));
    if (list.every(r => r.zScores)) { const res = nba.fromCatZ(list.map(r => r.zScores), Z_KEYS); list.forEach((r, i) => { r.score = res[i].score; }); } else list.forEach(r => { r.score = r.composite; });
    list.sort((a, b) => b.score - a.score);
    list.forEach((r, i) => { r.rk = i + 1; });
    const shown = list.filter(p => st.bestOwn !== 'free' || !owner(p.name)).slice(0, 60);
    return `<aside class="qk-best-col"><h2>🏅 Beste Spieler</h2>${ctrl}
      <p class="small muted">${st.best === 'week' ? 'Letzte 7 Tage' : 'Saison'} · ${nba.scoreLabel()} · Stand ${e(dates[dates.length - 1])}${st.bestOwn === 'free' ? ' · nur freie Spieler (Rang = Gesamtrang)' : ''}</p>
      <ol class="qk-best">${shown.map(p => { const t = owner(p.name); return `<li><span class="qk-rk">${p.rk}</span><span class="qk-pn"><b>${e(p.name)}</b><small>${e(p.team || '')} · ${p.games} Sp. · ${num(p.pts)}/${num(p.reb)}/${num(p.ast)}</small></span>
        ${t ? `<span class="pi-own" title="${e(t.name)}">${e(nba.initials(t.name))}</span>` : '<span class="nba-tag fa">frei</span>'}<span class="qk-sc ${nba.scorePositive(p.score) ? 'up' : 'down'}">${nba.fmtScore(p.score)}</span></li>`; }).join('')}</ol>
      <a class="small" href="${ctx.href(st.bestOwn === 'free' ? 'waiver' : 'players')}">${st.bestOwn === 'free' ? 'Ganzer Waiver →' : 'Alle Player Rankings →'}</a></aside>`;
  }

  function render(ctx) {
    const { league, ui } = ctx, e = ui.esc;
    const M = model(ctx), st = getState(ctx);
    const countdowns = (league.countdowns || []).map(c => ({ label: c.label, at: new Date(c.iso) })).filter(c => c.at > new Date());
    return `<div class="page-head"><h1 class="page-title display">${e(league.emoji)} ${e(league.name)}</h1>
        <div class="page-sub">${e(league.platform)} · ${e(league.format)} · 9-Cat H2H · ${M.teams.length} Teams${M.cur ? ` · Woche ${M.cur}` : ''}${M.W && M.W.updated ? ` · Stand ${new Date(M.W.updated).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}` : ''}</div></div>
      ${countdowns.length && MFHFB.ui.countdowns ? MFHFB.ui.countdowns(countdowns) : ''}
      <div class="qk-grid"><div class="qk-main">
        <section class="qk-sec"><div class="qk-head"><h2>⚔️ Woche ${M.cur || ''} – Matchups</h2><a class="small" href="${ctx.href('planner')}">Matchup-Planer →</a></div>${matchupsBlock(ctx, M)}</section>
        ${rumbleBlock(ctx, M, st)}
        ${rankingBlock(ctx, M, st)}
      </div>${bestBlock(ctx, M, st)}</div>`;
  }

  function mount(root, ctx) {
    const save = p => { ctx.store.setJSON('quick', { ...getState(ctx), ...p }); ctx.refresh(); };
    const rr = root.querySelector('[data-rr]'); if (rr) rr.addEventListener('change', () => save({ rr: Number(rr.value) }));
    const rw = root.querySelector('[data-rrweek]'); if (rw) rw.addEventListener('change', () => save({ rrWeek: Number(rw.value) }));
    root.querySelectorAll('[data-rank]').forEach(b => b.addEventListener('click', () => save({ rank: b.dataset.rank })));
    root.querySelectorAll('[data-tsort]').forEach(b => b.addEventListener('click', () => { const st = getState(ctx), k = b.dataset.tsort; save(st.sort === k ? { dir: -st.dir } : { sort: k, dir: k === 'tov' ? 1 : -1 }); }));
    root.querySelectorAll('[data-best]').forEach(b => b.addEventListener('click', () => save({ best: b.dataset.best })));
    root.querySelectorAll('[data-bestown]').forEach(b => b.addEventListener('click', () => save({ bestOwn: b.dataset.bestown })));
    N().bindModeControl(root, ctx.refresh);
    if (MFHFB.ui.mountCountdowns) MFHFB.ui.mountCountdowns(root);
  }

  MFHFB.pages.register({
    id: 'home', section: 'home', label: 'Übersicht', icon: '🏠', applies: { sport: ['nba'], scoring: ['categories'] },
    data: ['teams', '?rosters-live', '?week-stats', '?season-matchups', '?sport:aliases', '?sport:livescores-season', '?sport:livescores-aggregate'],
    render, mount,
  });
})();
