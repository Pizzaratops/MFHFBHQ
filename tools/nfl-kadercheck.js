// ============================================================
//  Tool (NFL, Dynasty): 🩺 Kader-Check — wo steht jedes Team, was fehlt?
// ============================================================
//  #/<liga>/kadercheck
//
//  Je Team eine Karte: Overall-/Starter-Rang (Dynasty zusätzlich Draft +
//  Ø Alter), vier Positionsbalken QB/RB/WR/TE (Länge = Stärke relativ zum
//  Ligabesten, Farbe = Rang) und die Team Needs. Karte antippen → Fenster
//  mit Kader je Position, Picks und passenden Trade-Partnern (deren
//  Stärke deine Lücke füllt und umgekehrt) samt Sprung in den Trade
//  Analyzer mit beiden Teams vorausgewählt.
//  (27.10.2026: erst Tabelle im Dynasty-Daddy-Stil, dann auf Wunsch
//  Karten-Design, ohne Tier-Labels.)
//
//  Umschalter (pro Liga gemerkt):
//   - Saison:  Wert = Saisonprojektion mit Liga-Scoring (PLAYER_PROJECTIONS,
//              ESPN bzw. Sleeper) — wer ist JETZT stark?
//   - Dynasty: Wert = Trade-Wert (TRADE_VALUES, KTC + Dynasty Daddy,
//              wöchentlich) + Picks (PICK_VALUES) — wer ist langfristig stark?
//
//  Rechnung (beide Modi gleich, K/DST zählen nicht):
//   - Starter = optimale Aufstellung aus den echten Lineup-Slots der Liga
//     (league.lineupSlots bzw. LEAGUE_INFO.rosterPositions), FLEX aus RB/WR/TE.
//   - Positionsstärke = Spieler nach Wert sortiert: die festen Starter-Slots
//     der Position ×1, so viele weitere wie FLEX-Slots ×0,5, Rest ×0,15.
//   - Overall Saison = Summe der Positionsstärken. Overall Dynasty = voller
//     Wert ALLER Spieler + Draft-Wert × 0,5 (KTC/DD bewerten Picks so hoch,
//     dass 15 Picks sonst so viel zählen wie der ganze Kader).
//   - Draft (nur Dynasty) = Summe der gehaltenen Zukunfts-Picks.
//   - Ø Alter (nur Dynasty) = nach Wert gewichtetes Alter.
//  Team Needs = Positionen im unteren Drittel des gewählten Modus.
// ============================================================

(function () {
  const POS = ['QB', 'RB', 'WR', 'TE'];
  const FLEX_OK = { FLEX: ['RB', 'WR', 'TE'], REC_FLEX: ['WR', 'TE'], WRRB_FLEX: ['RB', 'WR'], SUPER_FLEX: ['QB', 'RB', 'WR', 'TE'] };
  const W_FLEX = 0.5, W_DEPTH = 0.15, W_PICKS = 0.5;
  const normKey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');
  const posOf = x => String(x || '').split('/')[0].toUpperCase();

  function slotsOf(ctx) {
    const raw = ctx.league.lineupSlots || (ctx.data.LEAGUE_INFO && ctx.data.LEAGUE_INFO.rosterPositions) || ['QB', 'RB', 'RB', 'WR', 'WR', 'TE', 'FLEX'];
    return raw.map(s => String(s).toUpperCase()).filter(s => POS.includes(s) || FLEX_OK[s]);
  }

  // Werte je Spieler für beide Modi
  function valueMaps(data) {
    const dyn = new Map(), age = new Map(), season = new Map();
    (data.TRADE_VALUES || []).forEach(p => { dyn.set(normKey(p.name), p.avg || 0); if (p.age) age.set(normKey(p.name), p.age); });
    ((data.PLAYER_PROJECTIONS && data.PLAYER_PROJECTIONS.players) || []).forEach(p => season.set(normKey(p.name), p.projectedPoints || 0));
    return { dyn, age, season };
  }

  // Ein Team in einem Modus bewerten
  function scoreTeam(roster, vmap, slots) {
    const players = roster.map(p => ({ name: p.name, pos: posOf(p.pos), nfl: p.nfl || p.team || '', v: vmap.get(normKey(p.name)) || 0 }))
      .filter(p => POS.includes(p.pos)).sort((a, b) => b.v - a.v);
    // optimale Aufstellung: erst feste Slots, dann Flex-Slots (engste zuerst)
    const used = new Set(), starters = [];
    slots.filter(s => POS.includes(s)).forEach(s => {
      const p = players.find(x => x.pos === s && !used.has(x)); if (p) { used.add(p); starters.push(p); }
    });
    slots.filter(s => FLEX_OK[s]).sort((a, b) => FLEX_OK[a].length - FLEX_OK[b].length).forEach(s => {
      const p = players.find(x => FLEX_OK[s].includes(x.pos) && !used.has(x)); if (p) { used.add(p); starters.push(p); }
    });
    const starter = starters.reduce((a, p) => a + p.v, 0);
    const pos = {};
    POS.forEach(P => {
      const fixed = slots.filter(s => s === P).length;
      const flex = slots.filter(s => FLEX_OK[s] && FLEX_OK[s].includes(P)).length;
      const list = players.filter(p => p.pos === P);
      pos[P] = list.reduce((a, p, i) => a + p.v * (i < fixed ? 1 : i < fixed + flex ? W_FLEX : W_DEPTH), 0);
    });
    return { players, starters: new Set(starters.map(p => p.name)), starter, pos, total: POS.reduce((a, P) => a + pos[P], 0), full: players.reduce((a, p) => a + p.v, 0) };
  }

  // Ränge 1 = bester Wert
  function rankBy(rows, get) {
    const sorted = rows.slice().sort((a, b) => get(b) - get(a));
    const r = new Map(); sorted.forEach((x, i) => r.set(x.id, i + 1)); return r;
  }

  function model(ctx) {
    const { data, league, ui } = ctx;
    const teams = data.LEAGUE_TEAMS || [];
    const rosters = data.ROSTERS_LIVE || {};
    const slots = slotsOf(ctx);
    const V = valueMaps(data);
    // Picks (nur Dynasty)
    const d = MFHFB.draft.normalize(data);
    const years = Object.keys(d.future).map(Number).sort((a, b) => a - b);
    const rounds = MFHFB.draft.futureRounds(league, d);
    const val = MFHFB.trade ? MFHFB.trade.valuer(data) : null;
    // Bilanz
    const { season, weeks } = ui.seasonWeeks(data.WEEKLY_SCORES);
    const rec = {};
    if (weeks.length) ui.standings(data.WEEKLY_SCORES, season, weeks[weeks.length - 1]).forEach(r => { rec[r.teamId] = r; });

    const rows = teams.map(t => {
      const roster = rosters[t.id] || [];
      const S = scoreTeam(roster, V.season, slots), D = scoreTeam(roster, V.dyn, slots);
      const picks = years.flatMap(y => MFHFB.draft.picksHeld(d, teams, t.name, y, rounds)
        .map(p => ({ year: y, round: p.round, origin: p.origin, own: p.isOwn, v: val ? val.pickValue(y, p.round) || 0 : 0 })));
      const draft = picks.reduce((a, p) => a + p.v, 0);
      const dynOverall = D.full + W_PICKS * draft;
      let wa = 0, ws = 0;
      D.players.forEach(p => { const a = V.age.get(normKey(p.name)); if (a && p.v) { wa += a * p.v; ws += p.v; } });
      const r = rec[t.id] || { wins: 0, losses: 0, ties: 0 };
      const g = r.wins + r.losses + r.ties;
      return { id: t.id, team: t, S, D, picks, draft, dynOverall, age: ws ? wa / ws : null, rec: r, pct: g ? (r.wins + r.ties / 2) / g : null };
    });
    const N = rows.length;
    const R = {
      season: { overall: rankBy(rows, x => x.S.total), starter: rankBy(rows, x => x.S.starter) },
      dynasty: { overall: rankBy(rows, x => x.dynOverall), starter: rankBy(rows, x => x.D.starter), draft: rankBy(rows, x => x.draft) },
    };
    POS.forEach(P => { R.season[P] = rankBy(rows, x => x.S.pos[P]); R.dynasty[P] = rankBy(rows, x => x.D.pos[P]); });

    return { rows, R, N, slots, hasProj: V.season.size > 0, hasDyn: V.dyn.size > 0 };
  }

  // Farbe je Rang: grün (1) → gelb → rot (N)
  const hueOf = (r, N) => Math.round(120 * (1 - (N > 1 ? (r - 1) / (N - 1) : 0)));
  const fmt = v => Math.round(v).toLocaleString('de-DE');

  // Needs = unteres Drittel; Stärken = obere Hälfte
  const needsOf = (R, N, id) => POS.filter(P => R[P].get(id) > N - Math.ceil(N / 3)).sort((a, b) => R[b].get(id) - R[a].get(id));
  const strongOf = (R, N, id) => POS.filter(P => R[P].get(id) <= N / 2);

  // Trade-Partner: Partner ist stark, wo ich schwach bin — und braucht, was ich habe
  function partners(M, R, x) {
    const N = M.N, myStrong = strongOf(R, N, x.id);
    // ohne klare Lücke: die schwächste(n) Position(en) aus der unteren Hälfte, sonst die schwächste überhaupt
    let mine = needsOf(R, N, x.id);
    if (!mine.length) mine = POS.filter(P => R[P].get(x.id) > N / 2);
    if (!mine.length) mine = [POS.slice().sort((a, b) => R[b].get(x.id) - R[a].get(x.id))[0]];
    return M.rows.filter(y => y.id !== x.id).map(y => {
      const give = mine.filter(P => R[P].get(y.id) <= N / 2);            // er hat, was ich brauche
      const get = needsOf(R, N, y.id).filter(P => myStrong.includes(P));  // ich habe, was er braucht
      const score = give.reduce((a, P) => a + R[P].get(x.id) - R[P].get(y.id), 0)
        + get.reduce((a, P) => a + R[P].get(y.id) - R[P].get(x.id), 0) + (give.length && get.length ? N : 0);
      return { y, give, get, score };
    }).filter(p => p.give.length).sort((a, b) => b.score - a.score).slice(0, 3);
  }

  function bars(R, N, x, S, maxPos) {
    const nd = needsOf(R, N, x.id);
    return POS.map(P => {
      const r = R[P].get(x.id), h = hueOf(r, N), w = maxPos[P] ? Math.max(4, Math.round(S.pos[P] / maxPos[P] * 100)) : 0;
      return `<div class="kc-bar${nd.includes(P) ? ' need' : ''}">
        <span class="kc-bar-l">${P}</span>
        <span class="kc-bar-t"><span style="width:${w}%;background:hsl(${h},58%,46%)"></span></span>
        <span class="kc-bar-r" style="color:hsl(${h},62%,${r > N / 2 ? 58 : 44}%)">${r}.</span>
      </div>`;
    }).join('');
  }

  function render(ctx) {
    const { data, ui, league } = ctx;
    const e = ui.esc;
    if (!data.LEAGUE_TEAMS || !data.ROSTERS_LIVE) return ui.empty('Keine Kaderdaten', 'Teams oder Kader fehlen für diese Liga.', '🩺');
    const M = model(ctx);
    let mode = ctx.store.getJSON('kc-mode', 'season');
    if (mode === 'season' && !M.hasProj) mode = 'dynasty';
    if (mode === 'dynasty' && !M.hasDyn) mode = 'season';
    const dyn = mode === 'dynasty', R = M.R[mode], N = M.N;
    const keys = [['overall', 'Overall'], ['starter', 'Starter'], ...POS.map(P => [P, P]), ...(dyn ? [['draft', 'Draft']] : [])];
    let sortKey = ctx.store.getJSON('kc-sort', 'overall');
    if (!keys.some(k => k[0] === sortKey)) sortKey = 'overall';
    const rows = M.rows.slice().sort((a, b) => R[sortKey].get(a.id) - R[sortKey].get(b.id));
    const S = x => (dyn ? x.D : x.S);
    const maxPos = {}; POS.forEach(P => { maxPos[P] = Math.max(...M.rows.map(x => S(x).pos[P]), 0); });
    const me = league.myTeam;

    const stat = (label, r, sub) => `<div class="kc-stat"><small>${label}</small><b style="color:hsl(${hueOf(r, N)},62%,${r > N / 2 ? 58 : 44}%)">${r}.</b>${sub ? `<i>${sub}</i>` : ''}</div>`;
    const card = x => {
      const t = x.team, nd = needsOf(R, N, x.id), mine = x.id === me;
      return `<button type="button" class="kc-team${mine ? ' mine' : ''}" data-kc="${e(x.id)}" aria-label="${e(t.name)}: Kader und Trade-Partner anzeigen">
        <div class="kc-team-h">
          <span class="kc-emoji">${e(t.emoji || '🏈')}</span>
          <span class="kc-name"><b>${e(t.name)}</b><small>${e(t.owner || '')}${mine ? ' · Dein Team' : ''}</small></span>
          <span class="kc-rec">${x.pct == null ? '' : ui.record(x.rec)}</span>
        </div>
        <div class="kc-stats">
          ${stat('Overall', R.overall.get(x.id))}
          ${stat('Starter', R.starter.get(x.id))}
          ${dyn ? stat('Draft', R.draft.get(x.id)) : ''}
          ${dyn && x.age ? `<div class="kc-stat"><small>Ø Alter</small><b>${x.age.toFixed(1).replace('.', ',')}</b></div>` : ''}
        </div>
        <div class="kc-bars">${bars(R, N, x, S(x), maxPos)}</div>
        <div class="kc-needs">${nd.length ? `<span>Needs</span>${nd.map(P => `<span class="kc-need">${P}</span>`).join('')}` : '<span class="kc-ok">✓ keine klare Lücke</span>'}<span class="kc-more">Details ›</span></div>
      </button>`;
    };

    return `
      <div class="page-head">
        <h1 class="page-title display">🩺 Kader-Check</h1>
        <div class="page-sub">Wo steht jedes Team — und welche Positionen fehlen?<span class="explain"> ${dyn ? 'Dynasty: Trade-Werte (KTC + Dynasty Daddy); Overall = alle Spieler + Picks zur Hälfte.' : 'Saison: Projektion mit dem Liga-Scoring.'} Balken = Positionsstärke im Vergleich zum Ligabesten, Zahl = Rang. Starter voll, FLEX-Kandidaten halb, Tiefe wenig; K/DST zählen nicht. Needs = Position im unteren Drittel.</span></div>
      </div>
      <div class="controls kc-controls">
        <div class="seg" role="group" aria-label="Bewertung">
          <button type="button" class="seg-btn${dyn ? '' : ' active'}" data-mode="season"${M.hasProj ? '' : ' disabled'}>📅 Saison</button>
          <button type="button" class="seg-btn${dyn ? ' active' : ''}" data-mode="dynasty"${M.hasDyn ? '' : ' disabled'}>💎 Dynasty</button>
        </div>
        <div class="seg kc-sortseg" role="group" aria-label="Sortieren nach">
          ${keys.map(([k, l]) => `<button type="button" class="seg-btn${k === sortKey ? ' active' : ''}" data-sort="${k}">${l}</button>`).join('')}
        </div>
      </div>
      <div class="kc-grid" data-share-width="760" data-share="Kader-Check · ${dyn ? 'Dynasty' : 'Saison'}">${rows.map(card).join('')}</div>
      <div class="dna-modal kc-modal" data-kcmodal hidden></div>`;
  }

  function detailHtml(ctx, M, mode, id) {
    const e = ctx.ui.esc, dyn = mode === 'dynasty', R = M.R[mode], N = M.N;
    const x = M.rows.find(r => r.id === id); if (!x) return '';
    const S = dyn ? x.D : x.S, t = x.team;
    const col = P => {
      const list = S.players.filter(p => p.pos === P), r = R[P].get(x.id);
      return `<div class="kc-pos"><div class="kc-pos-h"><span>${P}</span><span style="color:hsl(${hueOf(r, N)},62%,${r > N / 2 ? 58 : 44}%)">Rang ${r}</span></div>
        ${list.length ? list.map(p => `<div class="kc-pl${S.starters.has(p.name) ? ' st' : ''}"><span>${S.starters.has(p.name) ? '★ ' : ''}${e(p.name)}</span><b>${p.v ? fmt(p.v) : '–'}</b></div>`).join('') : '<div class="kc-pl"><span>—</span></div>'}
      </div>`;
    };
    // Picks kompakt: eine Zeile pro Jahr, fremde Picks mit Tooltip „via …“
    const years = [...new Set(x.picks.map(p => p.year))];
    const pk = dyn ? `<div class="kc-picks"><div class="kc-pos-h"><span>Picks</span><span>Rang ${R.draft.get(x.id)} · ${fmt(x.draft)}</span></div>
        ${years.length ? years.map(y => { const l = x.picks.filter(p => p.year === y); return `<div class="kc-pick-row"><b>${y}</b><span>${l.map(p => `<i class="${p.own ? '' : 'via'}" title="${p.own ? 'eigener Pick' : 'via ' + e(p.origin)}">${p.round}</i>`).join('')}</span><small>${fmt(l.reduce((a, p) => a + p.v, 0))}</small></div>`; }).join('') : '<div class="kc-pl"><span>keine</span></div>'}
        <div class="muted small">umrandet = via Trade (antippen/hovern für das Ursprungsteam)</div>
      </div>` : '';
    const ps = partners(M, R, x);
    const partnerHtml = ps.length ? ps.map(p => `<div class="kc-partner">
        <div class="kc-partner-h"><span>${e(p.y.team.emoji || '🏈')} <b>${e(p.y.team.name)}</b></span></div>
        <div class="kc-partner-t">✅ stark bei ${p.give.map(P => `<b>${P}</b> (${R[P].get(p.y.id)}.)`).join(', ')} — füllt die Lücke</div>
        ${p.get.length ? `<div class="kc-partner-t">🔄 braucht ${p.get.map(P => `<b>${P}</b> (${R[P].get(p.y.id)}.)`).join(', ')} — da ist ${e(t.name)} stark</div>` : ''}
        <button type="button" class="seg-btn active kc-go" data-trade="${e(p.y.team.name)}">⚖️ Im Trade Analyzer öffnen</button>
      </div>`).join('') : '<p class="muted small">Keine klare Lücke, die ein anderes Team füllen könnte.</p>';
    return `<div class="dna-modal-box kc-box">
      <div class="dna-modal-head">
        <div><div class="kc-box-t">${e(t.emoji || '🏈')} ${e(t.name)}</div><div class="muted small">${e(t.owner || '')}${x.pct == null ? '' : ' · ' + ctx.ui.record(x.rec)} · ${dyn ? 'Dynasty-Werte' : 'Saisonprojektion'} · ★ = in der besten Aufstellung</div></div>
        <button type="button" class="dna-modal-x" data-kcclose aria-label="Schließen">✕</button>
      </div>
      <h3 class="kc-box-sub first">🤝 Passende Trade-Partner</h3>
      <div class="kc-partners">${partnerHtml}</div>
      <h3 class="kc-box-sub">👥 Kader</h3>
      <div class="kc-box-grid">${POS.map(col).join('')}</div>
      ${pk}
    </div>`;
  }

  function mount(root, ctx) {
    root.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => { ctx.store.setJSON('kc-mode', b.dataset.mode); ctx.refresh(); }));
    root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => { ctx.store.setJSON('kc-sort', b.dataset.sort); ctx.refresh(); }));
    const modal = root.querySelector('[data-kcmodal]'); if (!modal) return;
    const M = model(ctx);
    const mode = root.querySelector('[data-mode="dynasty"].active') ? 'dynasty' : 'season';
    const close = () => { modal.classList.remove('open'); modal.hidden = true; modal.innerHTML = ''; document.removeEventListener('keydown', onKey); };
    const onKey = ev => { if (ev.key === 'Escape') close(); };
    root.querySelectorAll('[data-kc]').forEach(b => b.addEventListener('click', () => {
      modal.innerHTML = detailHtml(ctx, M, mode, b.dataset.kc);
      modal.hidden = false; modal.classList.add('open'); document.addEventListener('keydown', onKey);
      const team = (M.rows.find(r => r.id === b.dataset.kc) || {}).team;
      modal.querySelector('[data-kcclose]').addEventListener('click', close);
      modal.querySelectorAll('[data-trade]').forEach(t => t.addEventListener('click', () => {
        ctx.store.setJSON('trade', { teamA: team.name, teamB: t.dataset.trade, A: [], B: [] }); // Trade Analyzer: beide Teams vorausgewählt
        close(); location.hash = ctx.href('trade');
      }));
    }));
    modal.addEventListener('click', ev => { if (ev.target === modal) close(); });
  }

  MFHFB.pages.register({
    id: 'kadercheck', section: 'standings', label: 'Kader-Check', icon: '🩺',
    applies: { sport: ['nfl'], format: ['Dynasty'] },
    data: ['teams', 'rosters-live', 'weekly-scores', 'sport:trade-values', '?projections', 'draft', 'trades', '?league-info'], // trades.js enthält FUTURE_PICKS
    title: () => 'Kader-Check', render, mount,
  });
  MFHFB.kaderCheck = { model, scoreTeam, partners };
})();
