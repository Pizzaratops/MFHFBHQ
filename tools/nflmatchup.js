// ============================================================
//  Tool: Matchup Advantage (NFL) — Unit gegen Unit je NFL-Spiel
// ============================================================
//  #/<liga>/nflmatchup                     → nächste Woche mit offenen Spielen
//  #/<liga>/nflmatchup/<woche>/<AWAY>-<HOME> → Spiel direkt (teilbar)
//
//  Inhalt/Logik: sports/nfl/matchup-advantage.js (Port, unverändert).
//  Sportweite Daten sport:matchup-advantage (für alle NFL-Ligen gleich).
// ============================================================

(function () {
  const MA = () => MFHFB.nfl.ma;

  function resolve(ctx) {
    const D = ctx.data.MATCHUP_ADVANTAGE;
    const week = Number(ctx.params[0]) || (D ? MFHFB.nfl.ma.upcomingWeek(D) : null);
    let game = null;
    if (D && week && ctx.params[1] && D.schedule[week]) {
      const [away, home] = ctx.params[1].split('-');
      const i = D.schedule[week].findIndex(g => g.away === away && g.home === home);
      if (i >= 0) game = i;
    }
    return { week, game };
  }

  MFHFB.pages.register({
    id: 'nflmatchup',
    section: 'nfl',
    label: 'Matchup Advantage',
    icon: '⚔️',
    applies: { sport: ['nfl'] },
    data: ['sport:matchup-advantage'],
    title: ({ params }) => params[1] ? `${params[1].replace('-', ' @ ')} · Matchup Advantage` : 'Matchup Advantage',
    render(ctx) {
      const D = ctx.data.MATCHUP_ADVANTAGE;
      MA().use(D);
      const { week, game } = resolve(ctx);
      return `
        <div class="page-head">
          <h1 class="page-title display">⚔️ Matchup Advantage</h1>
          <div class="page-sub">NFL-Offense gegen gegnerische Defense, in beide Richtungen · Quelle nflverse${D && D.scheme ? ' + FTN-Charting' : ''}</div>
        </div>
        ${MA().pageHtml(week, game)}`;
    },
    mount(root, ctx) {
      const D = ctx.data.MATCHUP_ADVANTAGE;
      if (!D) return;
      const cur = () => {
        const { week } = resolve(ctx);
        return week && D.schedule[week] ? week : D.currentWeek;
      };
      const sel = root.querySelector('[data-maweek]');
      if (sel) sel.addEventListener('change', () => { location.hash = ctx.href('nflmatchup', sel.value); });
      root.addEventListener('click', ev => {
        const g = ev.target.closest('[data-magame]');
        if (g) {
          const w = cur(); const x = (D.schedule[w] || [])[Number(g.dataset.magame)];
          if (x) location.hash = ctx.href('nflmatchup', w, `${x.away}-${x.home}`);
          return;
        }
        const h = ev.target.closest('[data-mahelp]');
        if (h) {
          const focus = h.dataset.mahelp || null;
          MFHFB.ui.modal('maHelp', MA().helpHtml(focus), { focus: focus ? 'maHelp-' + focus : null });
        }
      });
      // Aktives Spiel in der Leiste sichtbar machen
      const act = root.querySelector('.ma-game.active'), bar = root.querySelector('.ma-games');
      if (act && bar) bar.scrollLeft = act.offsetLeft - bar.offsetLeft - bar.clientWidth / 2 + act.clientWidth / 2;
    },
  });
})();
