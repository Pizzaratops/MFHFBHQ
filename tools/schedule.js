// ============================================================
//  Tool (alle Ligen): 📅 Spielplan — NFL + NBA in deutscher Zeit
// ============================================================
//  #/<liga>/schedule[/<YYYY-MM-DD Montag der Woche>]
//
//  Zwei Spalten: NFL | NBA (inkl. Preseason), je Woche Montag–Sonntag,
//  Uhrzeiten in Europe/Berlin. Daten live aus der öffentlichen ESPN-
//  Scoreboard-API (site.api.espn.com), erst direkt, sonst über den
//  ESPN-Proxy (core/espn.js). Ein NBA-Spiel um 19:30 Uhr US-Ostküste ist
//  bei uns 01:30 Uhr am Folgetag — es steht deshalb unter dem deutschen Tag.
// ============================================================

(function () {
  const TZ = 'Europe/Berlin';
  const SPORTS = [
    { key: 'nfl', label: '🏈 NFL', path: 'football/nfl' },
    { key: 'nba', label: '🏀 NBA', path: 'basketball/nba' },
  ];
  const DAY = 864e5;
  const cache = new Map(); // "<sport>|<range>" -> Promise<events[]>

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

  // ---------- ESPN ----------
  async function getJson(url) {
    try {
      const r = await fetch(url, { credentials: 'omit' });
      if (r.ok) return await r.json();
    } catch (e) { /* CORS o.ä. → Proxy */ }
    return MFHFB.espn.fetchViaProxy(url);
  }
  function load(sport, monday) {
    // US-Datum = Berliner Datum − 1 bis Berliner Sonntag (späte US-Spiele landen bei uns am Folgetag)
    const from = addDays(monday, -1), to = addDays(monday, 6);
    const key = sport.key + '|' + from;
    if (!cache.has(key)) {
      const url = `https://site.api.espn.com/apis/site/v2/sports/${sport.path}/scoreboard?dates=${compact(from)}-${compact(to)}&limit=400`;
      cache.set(key, getJson(url).then(d => (d.events || []).map(ev => parse(sport, ev))).catch(err => { cache.delete(key); throw err; }));
    }
    return cache.get(key);
  }
  function parse(sport, ev) {
    const c = (ev.competitions || [])[0] || {};
    const side = ha => (c.competitors || []).find(x => x.homeAway === ha) || {};
    const team = x => ({ abbr: (x.team || {}).abbreviation || '?', name: (x.team || {}).shortDisplayName || (x.team || {}).displayName || '?', logo: (x.team || {}).logo || null, score: x.score, winner: !!x.winner });
    const st = (ev.status || c.status || {}).type || {};
    const tv = [...new Set((c.broadcasts || []).flatMap(b => b.names || []))].slice(0, 2);
    const seasonType = (ev.season || {}).type;
    return {
      id: ev.id, date: new Date(ev.date), away: team(side('away')), home: team(side('home')),
      state: st.state || 'pre', detail: st.shortDetail || '', tbd: !!(ev.timeValid === false || st.name === 'STATUS_TBD'),
      tv, pre: seasonType === 1, post: seasonType === 3, week: (ev.week || {}).number || null,
      note: ((c.notes || [])[0] || {}).headline || '', neutral: !!c.neutralSite, venue: ((c.venue || {}).address || {}).city || '',
    };
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
  function column(sport, monday, games, err) {
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
    return `<div class="card sch-col">${head}${body || '<div class="cs-pad muted">Keine Spiele in dieser Woche.</div>'}</div>`;
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
        <div class="page-sub">${e(fmt(monday))} – ${e(fmt(sunday))}<span class="explain"> · Alle Uhrzeiten in deutscher Zeit (Europe/Berlin). NBA-Abendspiele aus den USA liegen bei uns in der Nacht und stehen deshalb unter dem Folgetag. Daten live von ESPN, Ergebnisse und Live-Stand inklusive. NBA inklusive Preseason.</span></div></div>
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
    SPORTS.forEach(s => {
      load(s, monday)
        .then(games => column(s, monday, games))
        .catch(err => column(s, monday, null, err.message))
        .then(html => { const host = root.querySelector(`[data-sport="${s.key}"]`); if (host && host.isConnected) host.innerHTML = html; });
    });
  }

  MFHFB.pages.register({
    id: 'schedule', section: 'home', label: 'Spielplan', icon: '📅', applies: {},
    data: [], title: () => 'Spielplan', render, mount,
  });
})();
