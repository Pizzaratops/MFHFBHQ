// ============================================================
//  Tool: Pick'em-Helfer (NFL) — Siegchancen, erwartete Scores, Confidence
// ============================================================
//  #/<liga>/pickem            → aktuelle Woche
//  #/<liga>/pickem/<woche>    → bestimmte Woche (bis Woche 18)
//
//  Datenquelle: hike2vec (Michael W. Kearney, github.com/mkearney/hike2vec).
//  Die Prognosen werden LIVE im Browser von deren öffentlich
//  veröffentlichten Daten geladen (raw.githubusercontent.com, Branch
//  site-data; Fallback GitHub Pages), NICHT in unser Repo kopiert oder
//  gespeichert. Quelle wird auf der Seite genannt und verlinkt. Das Repo
//  hat keine Lizenzdatei (Stand 28.11.2026): sollte der Autor eine
//  Nutzung untersagen oder die Daten verschieben, Seite entfernen bzw.
//  URL anpassen.
//
//  Backtest der Quelle (README): Saisons 2012–2025 log loss 0,619 vs.
//  Closing Line 0,617 (Unterschied im Rauschen), 65 % richtige Sieger.
//  Gegen den Spread kein Vorteil → wir zeigen keinen ATS-Tipp, nur
//  Siegchance, erwarteten Score und Abweichungen zur Line als Hinweis.
//
//  Confidence-Punkte: Spiele der Woche nach Sicherheit des Favoriten
//  sortiert, sicherstes Spiel = meiste Punkte (N … 1).
// ============================================================

(function () {
  const SRC = [
    'https://raw.githubusercontent.com/mkearney/hike2vec/site-data/docs/nfl/data/games.json',
    'https://mkearney.github.io/hike2vec/nfl/data/games.json'
  ];
  const HOME = 'https://mkearney.github.io/hike2vec/';
  let cache = null; // { at, data } — 10 Minuten im Speicher

  async function load() {
    if (cache && Date.now() - cache.at < 10 * 60 * 1000) return cache.data;
    let err;
    for (const url of SRC) {
      try {
        const r = await fetch(url, { cache: 'no-cache' });
        if (!r.ok) throw new Error('HTTP ' + r.status);
        const d = await r.json();
        if (!d || !Array.isArray(d.upcoming)) throw new Error('Unerwartetes Format');
        cache = { at: Date.now(), data: d };
        return d;
      } catch (e) { err = e; }
    }
    throw err || new Error('Keine Daten');
  }

  const pct = p => Math.round(p * 100) + ' %';
  const sgn = (v, d = 1) => (v > 0 ? '+' : v < 0 ? '−' : '±') + Math.abs(v).toFixed(d).replace('.', ',');
  const dec = (v, d = 1) => v.toFixed(d).replace('.', ',');
  const when = iso => {
    try {
      return new Date(iso).toLocaleString('de-DE', { weekday: 'short', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' });
    } catch (e) { return ''; }
  };

  function weekGames(D, wk) {
    const all = [...(D.results || []), ...(D.upcoming || [])].filter(g => g.wk === wk && g.stype === 2);
    const seen = new Set();
    return all.filter(g => (seen.has(g.id) ? false : seen.add(g.id))).map(g => {
      const homeFav = g.p_home >= 0.5;
      const pick = homeFav ? g.home : g.away;
      const pPick = homeFav ? g.p_home : 1 - g.p_home;
      // line = Spread aus Heimsicht (negativ = Heim favorisiert) → Vegas-Heimmarge = −line
      const edge = g.line != null ? g.margin + g.line : null; // > 0: Modell sieht Heimteam stärker als Vegas
      const played = g.home_pts != null && g.away_pts != null;
      const winner = played ? (g.home_pts > g.away_pts ? g.home : g.away_pts > g.home_pts ? g.away : null) : null;
      return { ...g, pick, pPick, edge, played, winner, hit: played && winner ? winner === pick : null };
    });
  }

  function confidence(games) {
    const order = games.slice().sort((a, b) => b.pPick - a.pPick);
    const n = order.length;
    order.forEach((g, i) => { g.conf = n - i; });
    return order;
  }

  function weeks(D) {
    const s = new Set();
    [...(D.results || []), ...(D.upcoming || [])].forEach(g => { if (g.stype === 2) s.add(g.wk); });
    return [...s].sort((a, b) => a - b);
  }

  function body(ctx, D) {
    const e = ctx.ui.esc;
    const all = weeks(D);
    const wkParam = Number(ctx.params[0]);
    const wk = all.includes(wkParam) ? wkParam : (D.wk_now && all.includes(D.wk_now) ? D.wk_now : all[all.length - 1]);
    const list = confidence(weekGames(D, wk));
    if (!list.length) return ctx.ui.empty('Keine Spiele', `Für Woche ${wk} gibt es keine Prognosen.`, '🎯');

    const done = list.filter(g => g.hit != null);
    const hits = done.filter(g => g.hit).length;
    const S = D.summary || {};
    const last = list.slice().sort((a, b) => new Date(b.date) - new Date(a.date))[0];

    const rows = list.map(g => {
      const homeFav = g.pick === g.home;
      const ps = homeFav ? g.pts_home : g.pts_away, po = homeFav ? g.pts_away : g.pts_home;
      const notes = [];
      if (g.edge != null && Math.abs(g.edge) >= 3) {
        const team = g.edge > 0 ? g.home : g.away;
        notes.push(`<span class="pk-flag pk-edge" title="Erwartete Marge Modell ${sgn(g.margin)} (Heim) vs. Vegas ${sgn(-g.line)}">⚡ Modell sieht ${e(team)} ${dec(Math.abs(g.edge))} Pkt stärker als Vegas</span>`);
      }
      [['home', g.qb_home, g.qb_home_delta], ['away', g.qb_away, g.qb_away_delta]].forEach(([side, qb, d]) => {
        if (qb && d != null && d <= -0.03) notes.push(`<span class="pk-flag pk-qb" title="QB-Wert ${dec(d, 3)} EPA/Dropback unter dem üblichen Starter">🩹 ${e(g[side])}: ${e(qb)} startet</span>`);
      });
      if (g.neutral) notes.push('<span class="pk-flag">🌍 neutraler Platz</span>');
      const res = g.played
        ? `<span class="pk-res ${g.hit ? 'up' : g.hit === false ? 'down' : 'muted'}">${g.hit ? '✓' : g.hit === false ? '✗' : '='} ${g.winner ? e(g.winner) + ' ' : ''}${Math.max(g.home_pts, g.away_pts)}:${Math.min(g.home_pts, g.away_pts)}</span>`
        : `<span class="muted">${e(when(g.date))}</span>`;
      return `<tr class="${g.played ? 'pk-played' : ''}">
        <td class="num strong pk-conf">${g.conf}</td>
        <td class="pk-c-pick"><div class="pk-pick"><b>${e(g.pick)}</b> <span class="pk-p">${pct(g.pPick)}</span></div>
            <div class="pk-bar"><span style="width:${Math.round(g.pPick * 100)}%"></span></div></td>
        <td class="pk-c-game"><div>${e(g.away)} @ ${e(g.home)}</div>${notes.length ? `<div class="pk-notes">${notes.join('')}</div>` : ''}</td>
        <td class="num pk-c-score">${dec(ps)} : ${dec(po)}<div class="muted small">Total ${dec(g.total)}${g.total_line != null ? ` · Vegas ${dec(g.total_line)}` : ''}</div></td>
        <td class="num pk-c-line">${g.line != null ? `${e(g.line < 0 ? g.home : g.away)} ${sgn(-Math.abs(g.line))}` : '–'}</td>
        <td class="num pk-c-ko">${res}</td>
      </tr>`;
    }).join('');

    const sel = `<select class="input" data-pkweek aria-label="Woche">${all.map(w => `<option value="${w}"${w === wk ? ' selected' : ''}>Woche ${w}</option>`).join('')}</select>`;

    return `
      <div class="controls">${sel}</div>
      <div class="pk-summary">
        ${done.length ? `<span>Diese Woche: <b>${hits}/${done.length}</b> richtig</span>` : ''}
        ${S.n ? `<span>Saison ${e(D.season)}: <b>${pct(S.accuracy)}</b> richtige Sieger in ${S.n} Spielen</span>` : ''}
        ${last ? `<span>Tiebreaker (letztes Spiel, ${e(last.away)} @ ${e(last.home)}): <b>${Math.round(last.total)}</b> Punkte gesamt</span>` : ''}
      </div>
      <div class="table-wrap">
        <table class="table pk-table">
          <thead><tr>
            <th class="num" title="Confidence-Punkte: sicherstes Spiel = meiste Punkte">Conf.</th>
            <th>Tipp</th><th>Spiel</th>
            <th class="num" title="Erwarteter Score Favorit : Außenseiter">Erw. Score</th>
            <th class="num" title="Vegas-Spread (DraftKings über ESPN)">Line</th>
            <th class="num">Kickoff / Ergebnis</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="explain">⚡ = erwartete Marge weicht um mindestens 3 Punkte von der Vegas-Line ab (nur ein Hinweis: gegen den Spread hat das Modell im Backtest keinen Vorteil). 🩹 = Backup- oder schwächerer QB als der übliche Starter, ist in der Prognose schon eingerechnet.</div>`;
  }

  MFHFB.pages.register({
    id: 'pickem',
    section: 'nfl',
    label: "Pick'em-Helfer",
    icon: '🎯',
    applies: { sport: ['nfl'] },
    data: [],
    title: ({ params }) => params[0] ? `Woche ${params[0]} · Pick'em-Helfer` : "Pick'em-Helfer",
    render(ctx) {
      return `
      <div class="page-head">
        <h1 class="page-title display">🎯 Pick'em-Helfer</h1>
        <div class="page-sub">Siegchance, erwarteter Score und Confidence-Reihenfolge für jedes NFL-Spiel der Woche</div>
      </div>
      <div data-pkbody><div class="note">Lade Prognosen …</div></div>
      <div class="pk-src explain">Prognosen: <a href="${HOME}" target="_blank" rel="noopener">hike2vec</a> von Michael W. Kearney (frei veröffentlichte Daten, live abgerufen, nicht bei uns gespeichert). Modell aus EPA-Ratings, Starting-QB, Rest und Reise; im Backtest 2012–2025 etwa so treffsicher wie die Vegas-Closing-Line.</div>`;
    },
    mount(root, ctx) {
      const box = root.querySelector('[data-pkbody]');
      if (!box) return;
      load().then(D => {
        box.innerHTML = body(ctx, D);
        const s = box.querySelector('[data-pkweek]');
        if (s) s.addEventListener('change', () => { location.hash = ctx.href('pickem', s.value); });
      }).catch(err => {
        box.innerHTML = `<div class="note">Die Prognosen konnten gerade nicht geladen werden (${ctx.ui.esc(err.message || String(err))}). Direkt ansehen: <a href="${HOME}" target="_blank" rel="noopener">hike2vec</a>.</div>`;
      });
    }
  });
})();
