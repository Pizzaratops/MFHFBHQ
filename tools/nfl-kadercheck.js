// ============================================================
//  Tool (NFL, Dynasty): 🩺 Kader-Check — wo steht jedes Team, was fehlt?
// ============================================================
//  #/<liga>/kadercheck
//
//  Idee wie die Power Rankings von Dynasty Daddy: je Team Ränge für
//  Overall, Starter, QB/RB/WR/TE und (Dynasty) Draft, dazu ein Tier-Label
//  und „Team Needs“. Zeile anklicken → Kader je Position mit Werten.
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
//  Tier (immer aus BEIDEN Modi, damit es nicht mit dem Schalter springt):
//   Last Dance  = Starter (Saison) obere Hälfte, Dynasty unteres Drittel
//   Contender   = Starter (Saison) oberes Drittel
//   Fraud       = Bilanz ≥ 50 %, aber Starter (Saison) untere Hälfte
//   Trust the Process = Bilanz < 50 %, aber Dynasty/Draft stark
//   Rebuild     = Starter (Saison) untere Hälfte, sonst
//   Bubble      = Rest (Mittelfeld)
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

    const third = Math.ceil(N / 3), half = N / 2;
    rows.forEach(x => {
      const sR = R.season.starter.get(x.id), dR = R.dynasty.overall.get(x.id), drR = R.dynasty.draft.get(x.id);
      let tier;
      if (sR <= half && dR > N - third) tier = 'lastdance';
      else if (sR <= third) tier = 'contender';
      else if (x.pct != null && x.pct >= 0.5 && sR > half) tier = 'fraud';
      else if ((x.pct == null || x.pct < 0.5) && (dR <= half || drR <= third)) tier = 'process';
      else if (sR > half) tier = 'rebuild';
      else tier = 'bubble';
      x.tier = tier;
    });
    return { rows, R, N, slots, hasProj: V.season.size > 0, hasDyn: V.dyn.size > 0 };
  }

  const TIERS = {
    contender: ['Contender', 'Starter-Aufstellung im oberen Drittel der Liga (Saisonprojektion).'],
    lastdance: ['Last Dance', 'Jetzt noch gut, aber der Dynasty-Wert gehört zum unteren Drittel — das Fenster schließt sich.'],
    fraud: ['Fraud', 'Bilanz von 50 % oder besser, aber die Starter gehören zur unteren Hälfte — die Bilanz ist besser als der Kader.'],
    process: ['Trust the Process', 'Bilanz unter 50 %, aber Dynasty-Wert oder Picks sind stark — die Zukunft passt.'],
    rebuild: ['Rebuild', 'Starter in der unteren Hälfte, ohne starke Zukunftswerte.'],
    bubble: ['Bubble', 'Mittelfeld: weder klarer Contender noch Rebuild.'],
  };

  // Farbe je Rang: grün (1) → gelb → rot (N)
  const rankStyle = (r, N) => {
    const t = N > 1 ? (r - 1) / (N - 1) : 0;
    return `background:hsla(${Math.round(120 * (1 - t))},62%,42%,.22);color:hsl(${Math.round(120 * (1 - t))},70%,${t > .5 ? 58 : 46}%)`;
  };

  function render(ctx) {
    const { data, ui, href } = ctx;
    const e = ui.esc;
    if (!data.LEAGUE_TEAMS || !data.ROSTERS_LIVE) return ui.empty('Keine Kaderdaten', 'Teams oder Kader fehlen für diese Liga.', '🩺');
    const M = model(ctx);
    let mode = ctx.store.getJSON('kc-mode', 'season');
    if (mode === 'season' && !M.hasProj) mode = 'dynasty';
    if (mode === 'dynasty' && !M.hasDyn) mode = 'season';
    const dyn = mode === 'dynasty';
    const R = M.R[mode], N = M.N;
    const sortKey = ctx.store.getJSON('kc-sort', 'overall');
    const cols = [['overall', 'Overall'], ['starter', 'Starter'], ...POS.map(P => [P, P]), ...(dyn ? [['draft', 'Draft']] : [])];
    const validSort = cols.some(c => c[0] === sortKey) ? sortKey : 'overall';
    const rows = M.rows.slice().sort((a, b) => R[validSort].get(a.id) - R[validSort].get(b.id));
    const fmt = v => Math.round(v).toLocaleString('de-DE');
    const needs = x => POS.filter(P => R[P].get(x.id) > N - Math.ceil(N / 3)).sort((a, b) => R[b].get(x.id) - R[a].get(x.id));
    const cell = r => `<span class="kc-rk" style="${rankStyle(r, N)}">${r}</span>`;

    const detail = x => {
      const S = dyn ? x.D : x.S;
      const col = P => {
        const list = S.players.filter(p => p.pos === P);
        return `<div class="kc-pos"><div class="kc-pos-h">${P} <span>Rang ${R[P].get(x.id)}</span></div>
          ${list.length ? list.map(p => `<div class="kc-pl${S.starters.has(p.name) ? ' st' : ''}" title="${S.starters.has(p.name) ? 'in der optimalen Aufstellung' : 'Bank/Tiefe'}"><span>${S.starters.has(p.name) ? '★ ' : ''}${e(p.name)}</span><b>${p.v ? fmt(p.v) : '–'}</b></div>`).join('') : '<div class="muted small">—</div>'}
        </div>`;
      };
      const picks = dyn ? `<div class="kc-pos"><div class="kc-pos-h">Picks <span>Rang ${R.draft.get(x.id)}</span></div>
          ${x.picks.length ? x.picks.map(p => `<div class="kc-pl"><span>${p.year} ${p.round}${p.own ? '' : ` <small>via ${e(p.origin)}</small>`}</span><b>${fmt(p.v)}</b></div>`).join('') : '<div class="muted small">keine</div>'}
        </div>` : '';
      const nd = needs(x);
      return `<div class="kc-detail">
        <div class="kc-side">
          <div><small>Overall</small><b>${R.overall.get(x.id)}</b> <span class="muted">(${fmt(dyn ? x.dynOverall : x.S.total)})</span></div>
          <div><small>Starter</small><b>${R.starter.get(x.id)}</b> <span class="muted">(${fmt(S.starter)}${dyn ? '' : ' Pkt.'})</span></div>
          ${dyn && x.age ? `<div><small>Ø Alter</small><b>${x.age.toFixed(1).replace('.', ',')}</b></div>` : ''}
          <div><small>Team Needs</small><b>${nd.length ? nd.join(', ') : '—'}</b></div>
          <a class="seg-btn" href="${href('trade')}">⚖️ Trade Analyzer</a>
          <a class="seg-btn" href="${href('teams', x.id)}">👥 Kader</a>
        </div>
        <div class="kc-cols">${POS.map(col).join('')}${picks}</div>
      </div>`;
    };

    const head = cols.map(([k, l]) => `<th class="num kc-sort${k === validSort ? ' on' : ''}" data-sort="${k}" title="Nach ${l} sortieren">${l}${k === validSort ? ' ↑' : ''}</th>`).join('');
    const span = 4 + cols.length + (dyn ? 1 : 0);
    return `
      <div class="page-head">
        <h1 class="page-title display">🩺 Kader-Check</h1>
        <div class="page-sub">Wo steht jedes Team — und welche Positionen fehlen?<span class="explain"> ${dyn ? 'Dynasty: Trade-Werte (KTC + Dynasty Daddy); Overall = alle Spieler + Picks zur Hälfte.' : 'Saison: Projektion mit dem Liga-Scoring.'} Starter = beste Aufstellung mit den Lineup-Slots der Liga (${M.slots.join(', ')}); bei den Positionen zählen Starter voll, FLEX-Kandidaten halb, die Tiefe wenig. K/DST zählen nicht. Zeile antippen für den Kader.</span></div>
      </div>
      <div class="controls">
        <div class="seg" role="group" aria-label="Bewertung">
          <button type="button" class="seg-btn${dyn ? '' : ' active'}" data-mode="season"${M.hasProj ? '' : ' disabled'}>📅 Current Season</button>
          <button type="button" class="seg-btn${dyn ? ' active' : ''}" data-mode="dynasty"${M.hasDyn ? '' : ' disabled'}>💎 Dynasty Values</button>
        </div>
      </div>
      <div class="card kc-card" data-share="Kader-Check · ${dyn ? 'Dynasty' : 'Saison'}">
      <div class="table-wrap">
        <table class="table kc-table">
          <thead><tr><th>Team</th><th class="num">Bilanz</th><th>Tier</th>${head}${dyn ? '<th class="num">Ø Alter</th>' : ''}<th>Needs</th></tr></thead>
          <tbody>${rows.map(x => {
            const t = x.team, nd = needs(x), [tl, tt] = TIERS[x.tier];
            return `<tr class="kc-row" data-kc="${e(x.id)}" tabindex="0">
              <td><span class="team-cell"><span class="team-emoji">${e(t.emoji || '')}</span><span><span class="team-name">${e(t.name)}</span>${t.owner ? `<span class="team-owner">${e(t.owner)}</span>` : ''}</span></span></td>
              <td class="num strong">${x.pct == null ? '–' : ui.record(x.rec)}</td>
              <td><span class="kc-tier kc-${x.tier}" title="${e(tt)}">${tl}</span></td>
              ${cols.map(([k]) => `<td class="num">${cell(R[k].get(x.id))}</td>`).join('')}
              ${dyn ? `<td class="num">${x.age ? x.age.toFixed(1).replace('.', ',') : '–'}</td>` : ''}
              <td class="kc-needs">${nd.length ? nd.map(P => `<span class="pos pos-${P}">${P}</span>`).join(' ') : '<span class="muted">—</span>'}</td>
            </tr>
            <tr class="kc-drow" data-kcd="${e(x.id)}" hidden><td colspan="${span}">${detail(x)}</td></tr>`;
          }).join('')}</tbody>
        </table>
      </div>
      </div>
      <div class="kc-legend">${Object.entries(TIERS).map(([k, [l, t]]) => `<div><span class="kc-tier kc-${k}">${l}</span> <span class="muted">${e(t)}</span></div>`).join('')}</div>`;
  }

  function mount(root, ctx) {
    root.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => { ctx.store.setJSON('kc-mode', b.dataset.mode); ctx.refresh(); }));
    root.querySelectorAll('[data-sort]').forEach(th => th.addEventListener('click', () => { ctx.store.setJSON('kc-sort', th.dataset.sort); ctx.refresh(); }));
    const toggle = tr => { const d = root.querySelector(`[data-kcd="${CSS.escape(tr.dataset.kc)}"]`); if (d) { d.hidden = !d.hidden; tr.classList.toggle('open', !d.hidden); } };
    root.querySelectorAll('.kc-row').forEach(tr => {
      tr.addEventListener('click', ev => { if (!ev.target.closest('a')) toggle(tr); });
      tr.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); toggle(tr); } });
    });
  }

  MFHFB.pages.register({
    id: 'kadercheck', section: 'standings', label: 'Kader-Check', icon: '🩺',
    applies: { sport: ['nfl'], format: ['Dynasty'] },
    data: ['teams', 'rosters-live', 'weekly-scores', 'sport:trade-values', '?projections', 'draft', 'trades', '?league-info'], // trades.js enthält FUTURE_PICKS
    title: () => 'Kader-Check', render, mount,
  });
  MFHFB.kaderCheck = { model, scoreTeam };
})();
