// ============================================================
//  Tool: Matchups (Punkte-Ligen, NFL)
// ============================================================
//  #/<liga>/matchups                     → aktuelle Woche
//  #/<liga>/matchups/<woche>             → Woche wählen
//  #/<liga>/matchups/<woche>/<heim>/<gast> → Slot-für-Slot-Vergleich
//
//  - Gespielte Wochen: Ergebnisse (+ Median-Ergebnis bei Ligen mit
//    Median-Spiel). Noch offene Wochen: Win% aus der Matchup-Engine
//    (sports/nfl/matchup-engine.js) mit Lineup- und Datenmodus-Umschalter.
//  - Snapshots: Vorab-Projektion je Team und Woche, damit nach dem Spiel
//    "Proj. vs. Ist" verglichen werden kann. Priorität wie bisher:
//    manuell gesichert > Server (MATCHUP_SNAPSHOTS, GitHub Action) >
//    automatisch lokal. Lokale Snapshots der bisherigen Seiten
//    (league.legacyStoragePrefix) werden weiter gelesen.
//  - Verbesserung gegenüber der alten Seite: bei gespielten Wochen zeigt
//    der Slot-Vergleich das Lineup AUS DEM SNAPSHOT (so wie es damals
//    aufgestellt war), nicht das heutige.
// ============================================================

(function () {
  const MODES = [['proj', 'Projektionen'], ['hist', 'Historisch'], ['mix', 'Mix']];
  const LINEUPS = [['current', 'Aktuelles Lineup'], ['optimal', 'Optimal-Lineup']];
  const MODE_LONG = { proj: 'reine Projektionen', hist: 'historische Wochenwerte', mix: 'Mix (lernt über die Saison dazu)' };
  const engines = new WeakMap();

  function engineFor(ctx) {
    if (!engines.has(ctx.data)) {
      const d = ctx.data;
      engines.set(ctx.data, MFHFB.nflMatchupEngine.create({
        projections: d.PLAYER_PROJECTIONS,
        stats: d.PLAYER_SEASON_STATS,
        rosters: d.ROSTERS_LIVE,
        slots: ctx.league.lineupSlots || (d.LEAGUE_INFO && d.LEAGUE_INFO.rosterPositions) || null,
      }));
    }
    return engines.get(ctx.data);
  }

  const settings = ctx => ({ lineup: 'current', mode: 'mix', ...ctx.store.getJSON('matchups', {}) });

  // ---------- Snapshots ----------
  function snapshots(ctx, season) {
    const legacy = ctx.league.legacyStoragePrefix;
    const readLocal = (week, teamId) => {
      const keys = [ctx.store.get(`snap:${season}:${week}:${teamId}`)];
      if (legacy) { try { keys.push(localStorage.getItem(`${legacy}:snap:${season}:${week}:${teamId}`)); } catch (e) { /* blockiert */ } }
      const parsed = keys.filter(Boolean).map(r => { try { return JSON.parse(r); } catch (e) { return null; } }).filter(Boolean);
      return parsed.find(s => s.manual) || parsed[0] || null;
    };
    const server = (week, teamId) => {
      const s = ((((ctx.data.MATCHUP_SNAPSHOTS || {})[season] || {})[week] || {})[teamId]);
      return s ? { ...s, source: 'server' } : null;
    };
    const load = (week, teamId) => {
      const local = readLocal(week, teamId);
      if (local && local.manual) return local;
      return server(week, teamId) || local;
    };
    const save = (week, teamId, proj, lineup, mode, force) => {
      if (!force && (readLocal(week, teamId) || server(week, teamId))) return false;
      const eng = engineFor(ctx);
      ctx.store.setJSON(`snap:${season}:${week}:${teamId}`, {
        capturedAt: new Date().toISOString(), lineup, mode,
        teamMean: proj.mean,
        starters: eng.assignSlots(proj.starters).map(s => ({
          slot: s.slot, name: s.player ? s.player.name : null, pos: s.player ? s.player.pos : null,
          mean: s.player ? Math.round(s.player.ms.mean * 10) / 10 : null,
        })),
        source: 'local', manual: !!force,
      });
      return true;
    };
    return { load, save };
  }

  function sourceLabel(s) {
    return s.manual ? 'manuell gesichert' : s.source === 'server' ? 'automatisch (Server)' : 'lokal, vorläufig';
  }
  const fmtDate = iso => new Date(iso).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });

  // Trefferquote aller Snapshots von bereits gespielten Wochen
  function accuracy(ctx, season, snaps) {
    const eng = engineFor(ctx);
    const sched = (ctx.data.SCHEDULE || {})[season] || {};
    let errs = [], calls = 0, hits = 0;
    Object.keys(sched).forEach(week => {
      const scores = {};
      (((ctx.data.WEEKLY_SCORES || {})[season] || {})[week] || []).forEach(e => { scores[e.teamId] = e.points; });
      if (!Object.keys(scores).length) return;
      sched[week].forEach(m => {
        const hs = snaps.load(week, m.home), as = snaps.load(week, m.away);
        [hs, as].forEach(s => (s ? s.starters : []).forEach(p => {
          if (!p.name || p.mean == null) return;
          const act = eng.actualWeekPoints(p.name, week);
          if (act != null) errs.push(Math.abs(act - p.mean));
        }));
        if (hs && as && scores[m.home] != null && scores[m.away] != null) {
          calls++;
          if ((hs.teamMean >= as.teamMean) === (scores[m.home] > scores[m.away])) hits++;
        }
      });
    });
    if (!calls && !errs.length) return null;
    return { calls, hits, pct: calls ? Math.round(hits / calls * 100) : null, err: errs.length ? errs.reduce((a, b) => a + b, 0) / errs.length : null, players: errs.length };
  }

  function seasonInfo(ctx) {
    const sched = ctx.data.SCHEDULE || {};
    const season = Object.keys(sched).sort().pop() || ctx.ui.seasonWeeks(ctx.data.WEEKLY_SCORES).season;
    const weeks = season ? Object.keys(sched[season] || {}).map(Number).sort((a, b) => a - b) : [];
    const scoredWeeks = weeks.filter(w => ((((ctx.data.WEEKLY_SCORES || {})[season]) || {})[w] || []).length);
    const current = weeks.find(w => !scoredWeeks.includes(w)) || weeks[weeks.length - 1];
    return { season, weeks, scoredWeeks, current };
  }

  function toggles(set) {
    const group = (key, opts) => `<div class="seg" role="group">${opts.map(([v, label]) =>
      `<button type="button" class="seg-btn${set[key] === v ? ' active' : ''}" data-set="${key}" data-val="${v}" aria-pressed="${set[key] === v}">${label}</button>`).join('')}</div>`;
    return `<div class="controls">${group('lineup', LINEUPS)}${group('mode', MODES)}</div>`;
  }

  // ---------- Wochenübersicht ----------
  function weekView(ctx) {
    const { data, params, href, ui, league } = ctx;
    const e = ui.esc;
    const { season, weeks, scoredWeeks, current } = seasonInfo(ctx);
    if (!weeks.length) return ui.empty('Spielplan noch nicht geladen', 'Der Spielplan kommt über denselben Sync wie die Weekly Scores.', '⚔️');

    const week = weeks.includes(Number(params[0])) ? Number(params[0]) : current;
    const entries = ((data.WEEKLY_SCORES || {})[season] || {})[week] || [];
    const played = entries.length > 0;
    const scores = {}, median = {};
    entries.forEach(x => { scores[x.teamId] = x.points; if (x.medianResult) median[x.teamId] = x.medianResult; });
    const team = ui.teamIndex(data.LEAGUE_TEAMS);
    const eng = engineFor(ctx);
    const set = settings(ctx);
    const project = !played && eng.canProject;
    const snaps = snapshots(ctx, season);
    const acc = project ? accuracy(ctx, season, snaps) : null;

    const side = (id, score, win) => {
      const t = team(id);
      return `<div class="mu-side${win ? ' win' : ''}">
        <span class="team-emoji">${e(t.emoji || '')}</span>
        <span class="game-team"><span class="team-name">${e(t.name)}</span>${t.owner ? `<span class="team-owner">${e(t.owner)}</span>` : ''}</span>
        ${median[id] ? `<span class="median-tag median-${median[id]}" title="Ergebnis gegen den Liga-Median">Median ${median[id]}</span>` : ''}
        <span class="game-pts">${score == null ? '' : ui.num(score, 2)}</span>
      </div>`;
    };

    const cards = ((data.SCHEDULE[season] || {})[week] || []).map(m => {
      const hs = scores[m.home], as = scores[m.away];
      let proj = '';
      if (project) {
        const wp = eng.matchupWinPct(team(m.home), team(m.away), set.mode, set.lineup);
        const hp = Math.round(wp.winA * 100), ap = 100 - hp;
        proj = `<div class="mu-bar" role="img" aria-label="Siegchance ${hp} zu ${ap} Prozent"><span style="width:${hp}%"></span></div>
          <div class="mu-pcts"><b class="${hp >= ap ? 'lead' : ''}">${hp}%</b><span>${ui.num(wp.a.mean)} vs ${ui.num(wp.b.mean)} proj.</span><b class="${ap > hp ? 'lead' : ''}">${ap}%</b></div>`;
      }
      return `<a class="mu-card" href="${href('matchups', week, m.home, m.away)}">
        ${side(m.home, played ? hs : null, played && hs > as)}
        ${side(m.away, played ? as : null, played && as > hs)}
        ${proj}
        ${eng.canProject ? '<span class="mu-hint">Slot-Vergleich →</span>' : ''}
      </a>`;
    });

    const banner = played
      ? `Ergebnisse für Woche ${week}.`
      : project
        ? `Woche ${week} noch nicht gespielt — Win% aus der Projektion der ${eng.starterCount} Starter (${set.lineup === 'optimal' ? 'Optimal-Lineup' : 'aktuelles Lineup'}, Datenmodus: ${MODE_LONG[set.mode]}).`
        : `Woche ${week} noch nicht gespielt — Projektionsdaten fehlen, daher nur Paarungen.`;

    return `
      <div class="page-head">
        <h1 class="page-title display">⚔️ Matchups</h1>
        <div class="page-sub">Saison ${e(season)} · Woche ${week}${week === current && !played ? ' (aktuell)' : ''}</div>
      </div>
      <div class="week-picker" role="tablist" aria-label="Woche">
        ${weeks.map(w => `<a role="tab" class="week-btn${w === week ? ' active' : ''}${scoredWeeks.includes(w) ? ' done' : ''}" aria-selected="${w === week}" href="${href('matchups', w)}">W${w}</a>`).join('')}
      </div>
      ${project ? toggles(set) : ''}
      ${acc ? `<div class="note">📊 Bisherige Prognose-Genauigkeit: <b>${acc.pct}%</b> Sieg-Trefferquote (${acc.calls} Matchup${acc.calls === 1 ? '' : 's'})${acc.err != null ? ` · Ø <b>${ui.num(acc.err)}</b> Punkte Abweichung pro Spieler (${acc.players})` : ''}</div>` : ''}
      <div class="page-sub" style="margin-bottom:12px">${banner}</div>
      <div class="games" data-share="Matchups Woche ${week}">${cards.join('')}</div>`;
  }

  // ---------- Unit-Vergleich (sports/nfl/fantasy-units.js) ----------
  function unitCompare(ctx, season, week, home, away, hp, ap, played) {
    const { data } = ctx;
    if (!MFHFB.nfl.fu || !(data.POSITION_POINTS || data.FANTASY_POWER_SCORE)) return '';
    MFHFB.nfl.fu.use({ POSITION_POINTS: data.POSITION_POINTS, FANTASY_POWER_SCORE: data.FANTASY_POWER_SCORE });
    return MFHFB.nfl.fu.compareHtml({ season, week, homeId: home.id, awayId: away.id, homeName: home.name, awayName: away.name, homeStarters: hp.starters, awayStarters: ap.starters, played });
  }

  // ---------- Slot-für-Slot-Vergleich ----------
  function detailView(ctx) {
    const { data, params, href, ui } = ctx;
    const e = ui.esc;
    const { season } = seasonInfo(ctx);
    const week = Number(params[0]);
    const [homeId, awayId] = [params[1], params[2]];
    const team = ui.teamIndex(data.LEAGUE_TEAMS);
    const home = team(homeId), away = team(awayId);
    const eng = engineFor(ctx);
    const set = settings(ctx);
    const snaps = snapshots(ctx, season);
    const back = `<a class="back" href="${href('matchups', week)}">← Woche ${week}</a>`;
    if (!eng.canProject) return back + ui.empty('Keine Projektionsdaten', 'Für den Slot-Vergleich werden Projektionen benötigt.', '📉');

    const scores = {};
    (((data.WEEKLY_SCORES || {})[season] || {})[week] || []).forEach(x => { scores[x.teamId] = x.points; });
    const played = Object.keys(scores).length > 0;

    const hp = eng.teamWeekProjection(home, set.mode, set.lineup);
    const ap = eng.teamWeekProjection(away, set.mode, set.lineup);
    let captured = false;
    if (!played) {
      captured = snaps.save(week, homeId, hp, set.lineup, set.mode, false) | snaps.save(week, awayId, ap, set.lineup, set.mode, false);
    }
    const hSnap = snaps.load(week, homeId), aSnap = snaps.load(week, awayId);

    // Zeilen: offen → aktuelle Projektion; gespielt → Lineup aus dem Snapshot (falls vorhanden)
    const rowsFor = (proj, snap) => {
      if (played && snap && snap.starters && snap.starters.length) {
        return snap.starters.map(s => ({ slot: s.slot, player: s.name ? { name: s.name, pos: s.pos, snapMean: s.mean } : null }));
      }
      return eng.assignSlots(proj.starters).map(s => ({ slot: s.slot, player: s.player ? { name: s.player.name, pos: s.player.pos, nfl: s.player.nfl, mean: s.player.ms.mean, snapMean: null } : null }));
    };
    const hRows = rowsFor(hp, hSnap), aRows = rowsFor(ap, aSnap);
    const snapMean = {};
    [hSnap, aSnap].forEach(s => (s ? s.starters : []).forEach(p => { if (p.name) snapMean[p.name] = p.mean; }));

    const nflOf = {};
    Object.values(data.ROSTERS_LIVE || {}).forEach(r => r.forEach(x => { if (x.nfl) nflOf[x.name] = x.nfl; }));

    const value = p => {
      if (!p) return -1;
      if (!played) return p.mean;
      const a = eng.actualWeekPoints(p.name, week);
      return a == null ? -1 : a;
    };

    const cell = (p, align) => {
      if (!p) return `<div class="mdt-cell ${align} muted">—</div>`;
      const nfl = p.nfl || nflOf[p.name];
      const meta = `${e(p.pos || '')}${nfl ? ' · ' + e(nfl) : ''}${nfl && data.MATCHUP_ADVANTAGE ? MFHFB.nfl.ma.badgeFor(data.MATCHUP_ADVANTAGE, p.pos, nfl, week) : ''}`;
      let val;
      if (!played) {
        val = `<div class="mdt-val">${ui.num(p.mean)} <small>proj.</small></div>`;
      } else {
        const act = eng.actualWeekPoints(p.name, week);
        const pm = p.snapMean != null ? p.snapMean : snapMean[p.name];
        if (act == null) val = `<div class="mdt-val">— <small>kein Wert</small></div>`;
        else if (pm == null) val = `<div class="mdt-val">${ui.num(act)} <small>Punkte</small></div>`;
        else {
          const d = act - pm;
          val = `<div class="mdt-val2"><small>Proj.</small> ${ui.num(pm)} · <small>Ist</small> <b>${ui.num(act)}</b> <span class="${d >= 0 ? 'up' : 'down'}">${ui.signed(d)}</span></div>`;
        }
      }
      return `<div class="mdt-cell ${align}"><div class="mdt-name">${e(p.name)}</div><div class="mdt-meta">${meta}</div>${val}</div>`;
    };

    const n = Math.max(hRows.length, aRows.length);
    const rows = [];
    for (let i = 0; i < n; i++) {
      const h = hRows[i], a = aRows[i];
      const hv = value(h && h.player), av = value(a && a.player);
      rows.push(`<div class="mdt-row">${cell(h && h.player, 'r')}<div class="mdt-slot ${hv > av ? 'edge-l' : av > hv ? 'edge-r' : ''}">${e((h || a).slot)}</div>${cell(a && a.player, 'l')}</div>`);
    }

    const wp = played ? null : eng.matchupWinPct(home, away, set.mode, set.lineup);
    const hTot = played ? scores[homeId] : hp.mean, aTot = played ? scores[awayId] : ap.mean;
    const ref = hSnap || aSnap;
    const sub = played
      ? (ref ? `Proj. = Snapshot vom ${fmtDate(ref.capturedAt)} (${sourceLabel(ref)}) · Ist = tatsächliche Punkte. Lineup wie zum Snapshot-Zeitpunkt.` : 'Kein Vorab-Snapshot vorhanden — nur tatsächliche Punkte, Lineup von heute.')
      : `Projektion je Slot · Lineup: <b>${set.lineup === 'optimal' ? 'Optimal' : 'Aktuell'}</b> · Datenmodus: <b>${MODES.find(m => m[0] === set.mode)[1]}</b>${captured ? ' · 📸 Snapshot gerade lokal gesichert' : hSnap ? ` · Snapshot vom ${fmtDate(hSnap.capturedAt)} (${sourceLabel(hSnap)})` : ''}`;

    return `${back}
      <div data-share="Matchup Woche ${week}: ${e(home.name)} vs ${e(away.name)}">
      <div class="mdt-head">
        <div class="mdt-team${played && hTot > aTot ? ' win' : ''}"><div class="mdt-team-name">${e(home.emoji || '')} ${e(home.name)}</div><div class="mdt-total display">${ui.num(hTot)}</div>${wp ? `<div class="mdt-pct">${Math.round(wp.winA * 100)}%</div>` : ''}</div>
        <div class="mdt-mid"><div class="mdt-week">Woche ${week}</div><div class="mdt-vs">vs</div></div>
        <div class="mdt-team${played && aTot > hTot ? ' win' : ''}"><div class="mdt-team-name">${e(away.emoji || '')} ${e(away.name)}</div><div class="mdt-total display">${ui.num(aTot)}</div>${wp ? `<div class="mdt-pct">${Math.round(wp.winB * 100)}%</div>` : ''}</div>
      </div>
      <div class="page-sub mdt-sub">${sub}</div>
      ${!played ? '<div class="no-share">' + toggles(set) + `<div class="mdt-actions"><button type="button" class="seg-btn" data-snapshot>📸 Eigenen Snapshot sichern (überschreibt den Server-Wert)</button></div></div>` : ''}
      ${unitCompare(ctx, season, week, home, away, hp, ap, played)}
      <div class="mdt-rows">${rows.join('')}</div>
      </div>`;
  }

  MFHFB.pages.register({
    id: 'matchups',
    section: 'matchups',
    label: 'Matchups',
    icon: '⚔️',
    applies: { sport: ['nfl'], scoring: ['points'] },
    data: ['teams', 'weekly-scores', 'schedule', 'rosters-live', '?projections', '?player-stats', '?matchup-snapshots', '?league-info', '?position-points', '?fantasy-power-score', '?sport:matchup-advantage'],
    title: ({ params, data, ui }) => {
      if (params[2]) { const t = ui.teamIndex(data.LEAGUE_TEAMS); return `${t(params[1]).name} vs ${t(params[2]).name}`; }
      return params[0] ? `Matchups Woche ${params[0]}` : 'Matchups';
    },
    render(ctx) { return ctx.params[2] ? detailView(ctx) : weekView(ctx); },
    mount(root, ctx) {
      root.querySelectorAll('[data-set]').forEach(btn => btn.addEventListener('click', () => {
        ctx.store.setJSON('matchups', { ...settings(ctx), [btn.dataset.set]: btn.dataset.val });
        ctx.refresh();
      }));
      const snapBtn = root.querySelector('[data-snapshot]');
      if (snapBtn) snapBtn.addEventListener('click', () => {
        const { season } = seasonInfo(ctx);
        const [week, homeId, awayId] = [Number(ctx.params[0]), ctx.params[1], ctx.params[2]];
        const eng = engineFor(ctx), set = settings(ctx), team = ctx.ui.teamIndex(ctx.data.LEAGUE_TEAMS);
        const snaps = snapshots(ctx, season);
        snaps.save(week, homeId, eng.teamWeekProjection(team(homeId), set.mode, set.lineup), set.lineup, set.mode, true);
        snaps.save(week, awayId, eng.teamWeekProjection(team(awayId), set.mode, set.lineup), set.lineup, set.mode, true);
        ctx.refresh();
      });
    },
  });
})();
