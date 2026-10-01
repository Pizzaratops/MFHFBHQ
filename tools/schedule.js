// ============================================================
//  Tool (alle Ligen): 📅 Spielplan — NFL + NBA in deutscher Zeit
// ============================================================
//  #/<liga>/schedule[/<YYYY-MM-DD Montag der Woche>]
//
//  Zwei Spalten: NFL | NBA (inkl. Preseason), je Woche Montag–Sonntag,
//  Uhrzeiten in Europe/Berlin. Daten live aus der öffentlichen ESPN-
//  Scoreboard-API, serverseitig geholt (sports/nba/scripts/sync-schedule.js). Ein NBA-Spiel um 19:30 Uhr US-Ostküste ist
//  bei uns 01:30 Uhr am Folgetag — es steht deshalb unter dem deutschen Tag.
// ============================================================

(function () {
  const TZ = 'Europe/Berlin';
  const SPORTS = [
    { key: 'nfl', label: '🏈 NFL', path: 'football/nfl' },
    { key: 'nba', label: '🏀 NBA', path: 'basketball/nba' },
  ];
  const DAY = 864e5;

  // ---------- Datum (immer in Berliner Zeit gedacht) ----------
  const berlinYMD = d => new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
  const fmtTime = d => new Intl.DateTimeFormat('de-DE', { timeZone: TZ, hour: '2-digit', minute: '2-digit' }).format(d);
  const fmtDayHead = ymd => new Intl.DateTimeFormat('de-DE', { timeZone: 'UTC', weekday: 'long', day: '2-digit', month: '2-digit' }).format(new Date(ymd + 'T12:00:00Z'));
  const addDays = (ymd, n) => new Date(Date.parse(ymd + 'T12:00:00Z') + n * DAY).toISOString().slice(0, 10);
  function mondayOf(ymd) {
    const wd = new Date(ymd + 'T12:00:00Z').getUTCDay(); // 0 = So
    return addDays(ymd, -((wd + 6) % 7));
  }
  const compact = ymd => ymd.replace(/-/g, '');

  // ---------- Daten: sports/nba/data/schedule.js (serverseitig von ESPN) ----------
  //  Der Browser darf die ESPN-API nicht direkt lesen (CORS, Proxies blocken),
  //  daher holt sports/nba/scripts/sync-schedule.js den Spielplan bei jedem
  //  NBA-Sync (7 Tage zurück bis 28 Tage voraus). Pfad mit „./“ = immer aus dem Hub.
  let SCH = null;
  function loadAll(ctx) {
    if (!SCH) SCH = MFHFB.data.load({ key: 'hub', dataBase: '', files: {} }, ['./sports/nba/data/schedule']).then(d => d.SCHEDULE).catch(err => { SCH = null; throw err; });
    return SCH;
  }
  function games(S, key) {
    return (S[key] || []).map(g => ({
      id: g.id, date: new Date(g.d), state: g.st, detail: g.det, tbd: g.tbd, tv: g.tv || [],
      pre: g.t === 1, post: g.t === 3, week: g.wk, note: g.note || '', neutral: g.ns, venue: g.city || '',
      away: { abbr: g.away.a, name: g.away.n, logo: g.away.l, score: g.away.s, winner: g.away.w },
      home: { abbr: g.home.a, name: g.home.n, logo: g.home.l, score: g.home.s, winner: g.home.w },
    }));
  }

  // ---------- Darstellung ----------
  function gameRow(g) {
    const e = MFHFB.ui.esc;
    const live = g.state === 'in', done = g.state === 'post';
    const sc = (t, other) => (live || done ? `<b class="sch-sc${done && t.winner ? ' win' : ''}">${e(t.score)}</b>` : '');
    const logo = t => (t.logo ? `<img src="${e(t.logo)}" alt="" loading="lazy" width="20" height="20">` : '');
    const time = g.tbd ? 'TBD' : fmtTime(g.date);
    const tags = [g.pre ? '<span class="sch-tag pre">Preseason</span>' : '', g.post ? '<span class="sch-tag post">Playoffs</span>' : '', g.note && !g.pre ? `<span class="sch-tag">${e(g.note)}</span>` : ''].join('');
    return `<div class="sch-game${live ? ' live' : ''}${done ? ' done' : ''}">
      <div class="sch-time">${live ? `<span class="sch-live">● ${e(g.detail)}</span>` : done ? `<span class="muted">${e(g.detail || 'Final')}</span>` : e(time)}</div>
      <div class="sch-teams">
        <div class="sch-team">${logo(g.away)}<span title="${e(g.away.name)}">${e(g.away.name)}</span>${sc(g.away)}</div>
        <div class="sch-team">${logo(g.home)}<span title="${e(g.home.name)}">@ ${e(g.home.name)}</span>${sc(g.home)}</div>
      </div>
      <div class="sch-meta">${tags}${g.tv.length ? `<span class="sch-tv">📺 ${e(g.tv.join(' · '))}</span>` : ''}${g.neutral && g.venue ? `<span class="sch-tv">📍 ${e(g.venue)}</span>` : ''}</div>
    </div>`;
  }
  function column(sport, monday, games, err, S) {
    const e = MFHFB.ui.esc;
    const head = `<div class="card-head"><h2>${sport.label}</h2><span class="muted small">${games ? games.length + ' Spiel' + (games.length === 1 ? '' : 'e') : ''}</span></div>`;
    if (err) return `<div class="card sch-col">${head}<div class="cs-pad muted">Spielplan nicht ladbar: ${e(err)}</div></div>`;
    if (!games) return `<div class="card sch-col">${head}<div class="cs-pad muted">Lade …</div></div>`;
    const today = berlinYMD(new Date());
    const days = Array.from({ length: 7 }, (_, i) => addDays(monday, i));
    const body = days.map(d => {
      const list = games.filter(g => berlinYMD(g.date) === d).sort((a, b) => a.date - b.date);
      if (!list.length) return '';
      return `<div class="sch-day${d === today ? ' today' : ''}"><div class="sch-dhead">${e(fmtDayHead(d))}${d === today ? ' <span class="sch-tag today">Heute</span>' : ''}</div>${list.map(gameRow).join('')}</div>`;
    }).join('');
    const outOfRange = S && (addDays(monday, 6) < S.from || monday > S.to);
    return `<div class="card sch-col">${head}${body || `<div class="cs-pad muted">${outOfRange ? `Für diese Woche liegt noch kein Spielplan vor (Daten vom ${e(S.from)} bis ${e(S.to)}, täglich erweitert).` : 'Keine Spiele in dieser Woche.'}</div>`}</div>`;
  }

  function weekOf(ctx) {
    const p = ctx.params[0];
    return mondayOf(/^\d{4}-\d{2}-\d{2}$/.test(p || '') ? p : berlinYMD(new Date()));
  }

  function render(ctx) {
    const e = ctx.ui.esc;
    const monday = weekOf(ctx), sunday = addDays(monday, 6);
    const thisMon = mondayOf(berlinYMD(new Date()));
    const fmt = ymd => new Intl.DateTimeFormat('de-DE', { timeZone: 'UTC', day: '2-digit', month: '2-digit', year: 'numeric' }).format(new Date(ymd + 'T12:00:00Z'));
    return `
      <div class="page-head"><h1 class="page-title display">📅 Spielplan</h1>
        <div class="page-sub">${e(fmt(monday))} – ${e(fmt(sunday))}<span data-stand></span><span class="explain"> · Alle Uhrzeiten in deutscher Zeit (Europe/Berlin). NBA-Abendspiele aus den USA liegen bei uns in der Nacht und stehen deshalb unter dem Folgetag. Daten von ESPN, bei jedem NBA-Sync (tagsüber alle 30 Minuten) aktualisiert, inklusive Ergebnissen. NBA inklusive Preseason.</span></div></div>
      <div class="controls">
        <div class="seg" role="group" aria-label="Woche">
          <a class="seg-btn" href="${ctx.href('schedule', addDays(monday, -7))}">◀ Vorwoche</a>
          <a class="seg-btn${monday === thisMon ? ' active' : ''}" href="${ctx.href('schedule', thisMon)}">Diese Woche</a>
          <a class="seg-btn" href="${ctx.href('schedule', addDays(monday, 7))}">Nächste ▶</a>
        </div>
      </div>
      <div class="sch-grid">${SPORTS.map(s => `<div data-sport="${s.key}">${column(s, monday, null)}</div>`).join('')}</div>`;
  }

  function mount(root, ctx) {
    const monday = weekOf(ctx);
    loadAll(ctx)
      .then(S => {
        SPORTS.forEach(sp => { const host = root.querySelector(`[data-sport="${sp.key}"]`); if (host && host.isConnected) host.innerHTML = column(sp, monday, games(S, sp.key), null, S); });
        const st = root.querySelector('[data-stand]');
        if (st && S.updatedAt) st.textContent = ' · Stand ' + new Intl.DateTimeFormat('de-DE', { timeZone: TZ, day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date(S.updatedAt)) + ' Uhr';
      })
      .catch(err => SPORTS.forEach(sp => { const host = root.querySelector(`[data-sport="${sp.key}"]`); if (host && host.isConnected) host.innerHTML = column(sp, monday, null, 'Spielplan-Datei fehlt noch (' + err.message + '). Sie entsteht beim nächsten NBA-Sync.'); }));
  }

  MFHFB.pages.register({
    id: 'schedule', section: 'home', label: 'Spielplan', icon: '📅', applies: {},
    // PAUSIERT (01.10.2026): ESPN lieferte über GitHub Actions 0 Spiele. Zum
    // Reaktivieren diese Zeile entfernen und den Aufruf in
    // sports/nba/scripts/build-offseason-rankings.js wieder einschalten.
    when: () => false,
    data: [], title: () => 'Spielplan', render, mount,
  });
})();
