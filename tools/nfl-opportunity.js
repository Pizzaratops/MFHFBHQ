// ============================================================
//  Tool (NFL): 🔎 Opportunity Radar — Rolle vor Punkten
// ============================================================
//  #/<liga>/opportunity
//
//  Daten: sport:opportunity (sports/nfl/scripts/build-opportunity.js,
//  nflverse: Target Share, Air Yards Share, Carries, Snap-Anteil, PPR je
//  Woche + Injury Report) und die Kader der Liga (ROSTERS_LIVE).
//
//  Drei Blöcke:
//   1. 🚑 Ausfälle: Spieler mit Rolle, die fehlen (Injury Report, IR-Status
//      im Kader, oder letztes Spiel verpasst). Wohin geht ihr Anteil?
//      Gibt es Spiele ohne ihn (diese/letzte Saison, gleiches Team), zeigen
//      wir den echten Mit/Ohne-Vergleich der Mitspieler, sonst eine
//      Schätzung (frei werdender Anteil anteilig auf die Positionsgruppe).
//   2. 🔎 Ausreißer unter den freien Spielern: Rolle (WOPR bzw. Touch-
//      Anteil) deutlich besser als die Punkte, steigende Rolle, Effizienz.
//   3. 💤 Gerostert, aber wenig Rolle (Trade-/Drop-Kandidaten).
// ============================================================

(function () {
  const POS = ['ALL', 'RB', 'WR', 'TE'];
  const normKey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');
  const state = ctx => ({ pos: 'ALL', all: false, ...ctx.store.getJSON('opp', {}) });
  const pct = v => (v == null ? '—' : Math.round(v * 100) + ' %');
  const avg = a => (a.length ? a.reduce((t, x) => t + x, 0) / a.length : null);
  const wopr = (ts, ay) => 1.5 * ts + 0.7 * ay;
  // Spalten je Woche (build-opportunity.js)
  const W = { wk: 0, team: 1, tgt: 2, ts: 3, ay: 4, car: 5, snap: 6, ppr: 7, recYd: 8, rushYd: 9 };

  // ---------- Modell ----------
  function model(ctx) {
    const O = ctx.data.OPPORTUNITY, S = O.season;
    const TT = (O.teams || {})[S] || {};
    const teamWeeks = t => Object.keys(TT[t] || {}).map(Number).sort((a, b) => a - b);
    const teamsById = {}; (ctx.data.LEAGUE_TEAMS || []).forEach(t => { teamsById[t.id] = t; });
    const owner = new Map(), rstatus = new Map();
    Object.entries(ctx.data.ROSTERS_LIVE || {}).forEach(([id, l]) => (l || []).forEach(p => {
      const k = normKey(p.name);
      owner.set(k, teamsById[id] || { id, name: id });
      if (p.status || p.slot === 'IR') rstatus.set(k, p.status || 'IR');
    }));
    const injById = new Map(), injByName = new Map();
    (O.injuries || []).forEach(i => { injById.set(i.id, i); injByName.set(normKey(i.n) + '|' + i.t, i); });

    const carShareP = r => { const tt = ((O.teams || {})[S - 1] || {})[r[W.team]] || {}; const c = (tt[r[W.wk]] || [0, 0])[1]; return c ? r[W.car] / c : 0; };
    const carShare = (r, s) => { const tt = ((O.teams || {})[s] || {})[r[W.team]] || {}; const c = (tt[r[W.wk]] || [0, 0])[1]; return c ? r[W.car] / c : 0; };
    const players = O.players.map(p => {
      const rows = (p.w[S] || []).filter(r => r[W.team] === p.t);
      const tw = teamWeeks(p.t);
      const recentWeeks = tw.slice(-2), earlierWeeks = tw.slice(0, -2);
      const pick = weeks => rows.filter(r => weeks.includes(r[W.wk]));
      const agg = rs => rs.length ? {
        g: rs.length, ts: avg(rs.map(r => r[W.ts])), ay: avg(rs.map(r => r[W.ay])), cs: avg(rs.map(r => carShare(r, S))),
        snap: avg(rs.map(r => r[W.snap]).filter(v => v != null)), ppr: avg(rs.map(r => r[W.ppr])),
        tgt: rs.reduce((t, r) => t + r[W.tgt], 0), recYd: rs.reduce((t, r) => t + r[W.recYd], 0),
      } : null;
      const season = agg(rows), recent = agg(pick(recentWeeks)), earlier = agg(pick(earlierWeeks));
      // „volle“ Spiele: Verletzungs-Kurzeinsätze (< 25 % Snaps) verzerren die Rolle nicht
      const full = agg(rows.filter(r => r[W.snap] == null || r[W.snap] >= 25));
      const prevRows = (p.w[S - 1] || []).filter(r => r[W.team] === p.t);
      const prev = prevRows.length ? (() => { const a = prevRows; return { g: a.length, ts: avg(a.map(r => r[W.ts])), ay: avg(a.map(r => r[W.ay])), cs: avg(a.map(r => carShareP(r))), snap: avg(a.map(r => r[W.snap]).filter(v => v != null)) }; })() : null;
      const k = normKey(p.n);
      const lastTeamWeek = tw[tw.length - 1];
      const playedLast = rows.some(r => r[W.wk] === lastTeamWeek);
      const inj = injById.get(p.id) || injByName.get(k + '|' + p.t) || null;
      return { ...p, k, rows, season, recent, earlier, prev, full, owner: owner.get(k) || null, rstatus: rstatus.get(k) || null, inj, playedLast, lastTeamWeek };
    }).filter(p => p.season || p.prev);

    // Rolle je Position (WR/TE: WOPR, RB: Touch-Anteil mit Targets doppelt)
    const role = x => (x ? (x.pos === 'RB' ? x.cs + 2 * x.ts : wopr(x.ts, x.ay)) : 0);
    const roleOf = (p, which) => { const a = p[which]; return a ? (p.pos === 'RB' ? a.cs + 2 * a.ts : wopr(a.ts, a.ay)) : 0; };
    ['RB', 'WR', 'TE'].forEach(pos => {
      const list = players.filter(p => p.pos === pos && p.recent);
      const rank = (vals, v) => vals.filter(x => x < v).length / Math.max(1, vals.length - 1);
      const rv = list.map(p => roleOf(p, 'recent')), pv = list.map(p => p.recent.ppr);
      list.forEach(p => { p.roleP = rank(rv, roleOf(p, 'recent')); p.ptsP = rank(pv, p.recent.ppr); p.role = roleOf(p, 'recent'); });
    });
    return { O, S, players, role, roleOf, teamWeeks };
  }

  // ---------- 🚑 Ausfälle ----------
  const OUT_ST = /^(Out|Doubtful|DNP|IR|O|D|SUSP|PUP|NFI)$/i;
  function absences(M) {
    return M.players.filter(p => {
      if (!p.season && !p.inj) return false; // nur Spieler, die diese Saison im Team sind (sonst: gewechselt/Karriereende)
      p.base = baseRole(p);
      const b = p.base;
      const hasRole = b && (b.ts >= 0.12 || b.cs >= 0.30 || (b.snap || 0) >= 55);
      if (!hasRole) return false;
      const st = (p.inj && p.inj.st) || p.rstatus;
      return (st && OUT_ST.test(st)) || !p.playedLast;
    }).sort((a, b) => (b.base.ts + b.base.cs) - (a.base.ts + a.base.cs));
  }
  // Rolle diese Saison; bei ≤ 1 Spiel oder kleiner Rolle (früh verletzt) die Vorsaison im selben Team
  function baseRole(p) {
    const s = p.full || p.season, v = p.prev;
    const size = x => (x ? x.ts + x.cs : 0);
    if (s && s.g >= 2 && size(s) >= size(v) * 0.6) return { ...s, src: 'Saison' };
    if (s && s.g >= 1 && size(s) >= size(v)) return { ...s, src: 'Saison' };
    if (v && v.g >= 4 && size(v) > size(s)) return { ...v, src: 'Vorsaison' };
    return s ? { ...s, src: 'Saison' } : null;
  }

  // Mit/Ohne-Vergleich: Wochen (diese + Vorsaison, gleiches Team), in denen das Team spielte, X aber nicht
  function withWithout(M, X) {
    const out = [];
    [M.S - 1, M.S].forEach(s => {
      if (s !== M.S && !(X.w[s] || []).some(r => r[W.team] === X.t)) return; // damals nicht im Team → kein fairer Vergleich
      const teamW = Object.keys(((M.O.teams || {})[s] || {})[X.t] || {}).map(Number);
      const xw = new Set((X.w[s] || []).filter(r => r[W.team] === X.t).map(r => r[W.wk]));
      teamW.forEach(w => out.push({ s, w, with: xw.has(w) }));
    });
    const without = out.filter(o => !o.with), withW = out.filter(o => o.with);
    return { without, withW };
  }
  function beneficiaries(M, X) {
    const mates = M.players.filter(p => p.t === X.t && p.id !== X.id && p.pos !== undefined);
    const { without, withW } = withWithout(M, X);
    const rowsIn = (p, list) => list.map(o => (p.w[o.s] || []).find(r => r[W.wk] === o.w && r[W.team] === X.t)).filter(Boolean);
    const recvGroup = X.pos === 'RB' ? ['RB'] : ['WR', 'TE', 'RB'];
    const res = mates.filter(p => recvGroup.includes(p.pos)).map(p => {
      const a = rowsIn(p, withW), b = rowsIn(p, without);
      const tsW = avg(a.map(r => r[W.ts])), tsO = avg(b.map(r => r[W.ts]));
      const csW = avg(a.map(r => r[W.car])), csO = avg(b.map(r => r[W.car]));
      return { p, nWith: a.length, nWithout: b.length, tsW, tsO, dTs: tsO != null && tsW != null ? tsO - tsW : null, carW: csW, carO: csO };
    });
    // Nur Mitspieler mit irgendeiner Rolle (keine reinen Blocker/Fullbacks)
    const relevant = r => Math.max(r.tsW || 0, r.tsO || 0) >= 0.04 || Math.max(r.carW || 0, r.carO || 0) >= 2;
    const measured = res.filter(r => r.nWithout >= 1 && r.nWith >= 1 && r.dTs != null && relevant(r));
    if (measured.length >= 2) {
      return { mode: 'gemessen', nWithout: without.length, list: measured.sort((a, b) => (X.pos === 'RB' ? ((b.carO - b.carW) - (a.carO - a.carW)) : (b.dTs - a.dTs))).slice(0, 4) };
    }
    // Schätzung: frei werdender Anteil anteilig zur aktuellen Rolle in der Gruppe
    const pool = res.map(r => ({ ...r, cur: r.p.season ? (X.pos === 'RB' ? r.p.season.cs : r.p.season.ts) : 0 })).filter(r => r.cur > 0.02 && (r.p.playedLast));
    const sum = pool.reduce((t, r) => t + r.cur, 0) || 1;
    const vac = X.pos === 'RB' ? X.base.cs : X.base.ts;
    return { mode: 'geschätzt', list: pool.map(r => ({ ...r, est: vac * r.cur / sum })).sort((a, b) => b.est - a.est).slice(0, 5) };
  }

  function ownerTag(ctx, p) {
    const e = ctx.ui.esc;
    return p.owner ? `<span class="op-own">${e(p.owner.emoji || '')} ${e(p.owner.name)}</span>` : '<span class="op-free">frei</span>';
  }
  function statusTag(p) {
    const st = (p.inj && p.inj.st) || p.rstatus || (!p.playedLast ? 'fehlte' : '');
    if (!st) return '';
    const label = { DNP: 'DNP Training', Limited: 'Limited', fehlte: `fehlte W${p.lastTeamWeek}` }[st] || st;
    return `<span class="op-st ${/out|^o$|ir|dnp|doubt|^d$/i.test(st) ? 'bad' : 'warn'}" title="${MFHFB.ui.esc(p.inj && p.inj.inj ? 'Verletzung: ' + p.inj.inj : '')}">${MFHFB.ui.esc(label)}</span>`;
  }

  function absenceCard(ctx, M, X) {
    const e = ctx.ui.esc;
    const B = beneficiaries(M, X);
    const vacTs = X.base.ts, vacCs = X.base.cs;
    const rows = B.list.map(r => {
      const p = r.p;
      const gain = B.mode === 'gemessen'
        ? (X.pos === 'RB' ? `${r.carW != null ? r.carW.toFixed(1) : '—'} → <b>${r.carO.toFixed(1)}</b> Carries · TS ${pct(r.tsW)} → <b>${pct(r.tsO)}</b>` : `TS ${pct(r.tsW)} → <b>${pct(r.tsO)}</b> <span class="${r.dTs >= 0 ? 'up' : 'down'}">(${r.dTs >= 0 ? '+' : ''}${Math.round(r.dTs * 100)})</span>`)
        : `+${Math.round(r.est * 100)} % ${X.pos === 'RB' ? 'Carry-Anteil' : 'Target Share'} (geschätzt)`;
      return `<li><span class="op-pos">${e(p.pos)}</span> <b>${e(p.n)}</b> ${ownerTag(ctx, p)}<span class="op-gain">${gain}</span></li>`;
    }).join('');
    return `<div class="card op-abs">
      <div class="op-abs-head"><div><span class="op-pos">${e(X.pos)}</span> <b>${e(X.n)}</b> <span class="muted">${e(X.t)}</span> ${statusTag(X)}</div>
        <div class="op-vac">frei: ${X.pos === 'RB' ? `<b>${pct(vacCs)}</b> Carries · ` : ''}<b>${pct(vacTs)}</b> Targets${X.base.src === 'Vorsaison' ? ' <span title="Diese Saison kaum gespielt, daher Anteil aus der Vorsaison">(Vorsaison)</span>' : ''}</div></div>
      ${rows ? `<ol class="op-ben">${rows}</ol>` : '<div class="muted small" style="padding:4px 0 8px">Keine Mitspieler mit Rolle gefunden.</div>'}
      <div class="op-mode">${B.mode === 'gemessen' ? `Gemessen: ${B.nWithout} Spiel(e) ohne ihn (diese/letzte Saison, gleiches Team)` : 'Geschätzt: noch kein Spiel ohne ihn'}</div>
    </div>`;
  }

  // ---------- 🔎 Ausreißer ----------
  function signals(p) {
    const out = [];
    const real = p.recent && (p.recent.ts >= 0.10 || (p.pos === 'RB' && p.recent.cs >= 0.20) || (p.recent.snap || 0) >= 50);
    if (!real) return out;
    if (p.roleP != null && p.roleP - p.ptsP >= 0.25 && p.roleP >= 0.5) out.push(['role', 'Rolle > Punkte']);
    if (p.earlier && p.recent && ((p.recent.ts - p.earlier.ts >= 0.05) || (p.pos === 'RB' && p.recent.cs - p.earlier.cs >= 0.12) || ((p.recent.snap || 0) - (p.earlier.snap || 0) >= 15 && (p.recent.ts >= 0.10 || p.recent.cs >= 0.20)))) out.push(['up', 'Rolle steigt']);
    if (p.recent && p.recent.tgt >= 6 && p.recent.recYd / p.recent.tgt >= 10 && p.recent.ts < 0.16) out.push(['eff', 'Effizient']);
    return out;
  }
  function outlierRows(ctx, M, st) {
    const e = ctx.ui.esc;
    const list = M.players.filter(p => p.recent && (st.pos === 'ALL' || p.pos === st.pos) && (st.all || !p.owner))
      .map(p => ({ p, sig: signals(p) }))
      .filter(x => st.all || x.sig.length || x.p.roleP >= 0.6)
      .sort((a, b) => (b.sig.length - a.sig.length) || (b.p.roleP - a.p.roleP))
      .slice(0, 60);
    if (!list.length) return `<tr><td colspan="9">${ctx.ui.empty('Keine Treffer', 'Filter anpassen.', '🔎')}</td></tr>`;
    return list.map(({ p, sig }) => {
      const r = p.recent, d = p.earlier;
      const delta = (a, b) => (b == null ? '' : ` <small class="${a - b >= 0 ? 'up' : 'down'}">${a - b >= 0 ? '+' : ''}${Math.round((a - b) * 100)}</small>`);
      return `<tr>
        <td><div class="strong">${e(p.n)} ${statusTag(p)}</div><div class="muted small">${e(p.pos)} · ${e(p.t)} · ${ownerTag(ctx, p)}</div></td>
        <td class="num">${r.snap != null ? Math.round(r.snap) + ' %' : '—'}${d && d.snap != null && r.snap != null ? delta(r.snap / 100, d.snap / 100) : ''}</td>
        <td class="num">${pct(r.ts)}${d ? delta(r.ts, d.ts) : ''}</td>
        <td class="num">${pct(r.ay)}</td>
        <td class="num">${p.pos === 'RB' ? pct(r.cs) + (d ? delta(r.cs, d.cs) : '') : (wopr(r.ts, r.ay)).toFixed(2)}</td>
        <td class="num">${r.ppr.toFixed(1)}</td>
        <td class="num"><span class="op-bar"><i style="width:${Math.round(p.roleP * 100)}%"></i></span></td>
        <td>${sig.map(([c, l]) => `<span class="op-sig ${c}">${l}</span>`).join(' ')}</td>
      </tr>`;
    }).join('');
  }

  function lowRole(ctx, M) {
    const e = ctx.ui.esc;
    const list = M.players.filter(p => p.owner && p.recent && p.roleP != null && p.roleP < 0.3 && p.recent.g >= 1 && !(p.inj || p.rstatus))
      .sort((a, b) => a.roleP - b.roleP).slice(0, 25);
    if (!list.length) return '';
    return `<details class="card op-low"><summary class="card-head"><h2>💤 Gerostert, aber wenig Rolle (${list.length})</h2></summary>
      <div class="table-wrap"><table class="table compact"><thead><tr><th>Spieler</th><th class="num">Snaps</th><th class="num">Target Share</th><th class="num">PPR/Sp.</th><th>Kader</th></tr></thead><tbody>
      ${list.map(p => `<tr><td><b>${e(p.n)}</b> <span class="muted small">${e(p.pos)} · ${e(p.t)}</span></td><td class="num">${p.recent.snap != null ? Math.round(p.recent.snap) + ' %' : '—'}</td><td class="num">${pct(p.recent.ts)}</td><td class="num">${p.recent.ppr.toFixed(1)}</td><td>${ownerTag(ctx, p)}</td></tr>`).join('')}
      </tbody></table></div>
      <div class="explain">Rolle der letzten 2 Wochen im unteren Drittel seiner Position, obwohl er auf einem Kader steht und gesund ist. Kandidaten für Trade oder Drop — Talent und Dynasty-Wert sind hier nicht berücksichtigt.</div></details>`;
  }

  function render(ctx) {
    const { ui } = ctx, e = ui.esc;
    const O = ctx.data.OPPORTUNITY;
    if (!O || !O.players) return ui.empty('Noch keine Opportunity-Daten', 'Die Datei entsteht beim nächsten NFL-Sync.', '🔎');
    const st = state(ctx), M = model(ctx);
    ctx._opp = M;
    const abs = absences(M);
    return `
      <div class="page-head"><h1 class="page-title display">🔎 Opportunity Radar</h1>
        <div class="page-sub">Saison ${e(M.S)} · Stats bis Woche ${e(O.lastWeek)} · Injury Report Woche ${e(O.injuryWeek || '—')}<span class="explain"> · Rolle zeigt sich oft Wochen bevor die Punkte kommen. Target Share = Anteil an allen Pässen des Teams, Air Yards Share = Anteil an der Pass-Tiefe, WOPR = 1,5 × Target Share + 0,7 × Air Yards Share, Snaps = Anteil der Offense-Snaps. „Letzte 2“ = die letzten zwei Spiele des Teams, kleine Zahl = Veränderung zu den Wochen davor. Quelle: nflverse (PPR-Punkte), Kader: deine Liga.</span></div></div>
      ${abs.length ? `<div class="card op-abs-wrap"><div class="card-head"><h2>🚑 Ausfälle: wohin geht der Anteil?</h2><span class="muted small">${abs.length} Spieler</span></div>
        <div class="op-abs-grid">${abs.slice(0, 9).map(X => absenceCard(ctx, M, X)).join('')}</div>
        ${abs.length > 9 ? `<details class="op-more"><summary>Weitere ${abs.length - 9} Ausfälle anzeigen</summary><div class="op-abs-grid">${abs.slice(9).map(X => absenceCard(ctx, M, X)).join('')}</div></details>` : ''}
        <div class="explain">Spieler mit Rolle (≥ 12 % Target Share, ≥ 30 % Carries oder ≥ 55 % Snaps), die im Injury Report als Out/Doubtful/DNP stehen, im Kader auf IR/Out sind oder das letzte Spiel verpasst haben. „Gemessen“ = echte Spiele ohne ihn (diese oder letzte Saison, gleiches Team): Target Share der Mitspieler mit → ohne ihn. „Geschätzt“ = sein Anteil anteilig auf die Mitspieler der Positionsgruppe verteilt. Früh in der Woche gibt es nur den Trainingsstatus (DNP/Limited), den Spielstatus erst freitags.</div></div>` : ''}
      <div class="controls">
        <div class="seg" role="group" aria-label="Position">${POS.map(p => `<button type="button" class="seg-btn${st.pos === p ? ' active' : ''}" data-pos="${p}">${p === 'ALL' ? 'Alle' : p}</button>`).join('')}</div>
        <label class="cs-chk"><input type="checkbox" data-all${st.all ? ' checked' : ''}> auch gerosterte Spieler</label>
      </div>
      <div class="card"><div class="card-head"><h2>🔎 Ausreißer${st.all ? '' : ' unter den freien Spielern'}</h2></div>
        <div class="table-wrap"><table class="table compact op-table"><thead><tr><th>Spieler</th><th class="num" title="Offense-Snap-Anteil, letzte 2 Spiele">Snaps</th><th class="num" title="Target Share, letzte 2 Spiele">Target Share</th><th class="num" title="Air Yards Share, letzte 2 Spiele">Air Yds</th><th class="num" title="RB: Carry-Anteil · WR/TE: WOPR">Carries / WOPR</th><th class="num" title="PPR-Punkte pro Spiel, letzte 2 Spiele">PPR/Sp.</th><th class="num" title="Rolle im Vergleich zur Position (Perzentil)">Rolle</th><th>Signal</th></tr></thead>
        <tbody>${outlierRows(ctx, M, st)}</tbody></table></div>
        <div class="explain">Rolle > Punkte = Rolle mindestens 25 Perzentil-Punkte besser als die Punkte (Pickup vor dem Ausschlag). Rolle steigt = letzte 2 Spiele mind. +5 % Target Share, +12 % Carries oder +15 % Snaps gegenüber den Wochen davor. Effizient = ≥ 10 Yards pro Target bei wenig Volumen (spekulativ). Sortiert nach Anzahl Signale, dann Rolle.</div></div>
      ${lowRole(ctx, M)}`;
  }

  function mount(root, ctx) {
    const save = patch => { ctx.store.setJSON('opp', { ...state(ctx), ...patch }); ctx.refresh(); };
    root.querySelectorAll('[data-pos]').forEach(b => b.addEventListener('click', () => save({ pos: b.dataset.pos })));
    const all = root.querySelector('[data-all]');
    if (all) all.addEventListener('change', () => save({ all: all.checked }));
  }

  MFHFB.pages.register({
    id: 'opportunity', section: 'players', label: 'Opportunity Radar', icon: '🔎', applies: { sport: ['nfl'] },
    data: ['teams', 'rosters-live', 'sport:opportunity'],
    title: () => 'Opportunity Radar', render, mount,
  });
})();
