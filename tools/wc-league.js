// ============================================================
//  Tools (NBA, Fantrax World Cup — Division Seattle): Tabelle + Spielplan (seit 08.11.2026)
// ============================================================
//  #/worldcup/wctable               Tabelle der Division (Kategorien W-L-T, wie Fantrax
//                                   wertet) + Rang in der ganzen Conference West
//  #/worldcup/wcschedule[/<id>]     Spielplan: 14 Perioden, Division-Matchups
//  #/worldcup/wcdraftonly            Beyaz' Platz in seinen FBI-Draft-Only-Ligen (seit 23.11.2026,
//                                   Daten: draft-only.js aus scripts/sync-draft-only.js)
//
//  Daten (leagues/worldcup/data, aus Fantrax: leagues/worldcup/scripts/sync-fantrax.js):
//   TEAMS, ROSTERS_LIVE, TEAM_RECORDS_LIVE (records, standings mit confRank), WC_SCHEDULE
//  Übersicht, Kader, Waiver, Spieler, Projections, Live Scores usw. kommen aus den
//  allgemeinen NBA-Tools (gleiches Datenformat wie TTHQ/Funkytown).
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const A = { sport: ['nba'] };
  const WHEN = l => l.key === 'worldcup';
  const fmtD = s => (s ? s.slice(8, 10) + '.' + s.slice(5, 7) + '.' : '');
  // Anzeige-Ende einer Periode: beginnt am Endtag schon die nächste Woche, ist der Vortag der letzte Tag
  const lastDay = (p, P) => ((P || []).some(q => q.start === p.end) ? new Date(new Date(p.end + 'T12:00:00Z') - 864e5).toISOString().slice(0, 10) : p.end);
  const today = () => new Date().toISOString().slice(0, 10);
  const teamById = data => { const m = {}; (data.TEAMS || []).forEach(t => { m[t.id] = t; }); return m; };
  function currentPeriod(data) {
    const P = (data.WC_SCHEDULE && data.WC_SCHEDULE.periods) || [];
    const t = today();
    // Fantrax liefert als Ende den Starttag der Folgewoche (Montag) → Ende zählt nur mit,
    // wenn dort keine neue Woche beginnt (sonst stand montags noch die Vorwoche als aktuell da).
    return P.find((p, i) => p.start <= t && (t < p.end || (t === p.end && !(P[i + 1] && P[i + 1].start === p.end)))) || P.find(p => p.start > t) || P[P.length - 1] || null;
  }
  const tLink = (ctx, t, strong) => {
    const e = ctx.ui.esc, nba = N();
    return t ? `<a class="nba-tlink mp-tc${strong ? ' strong' : ''}" style="${nba.tcStyle(t)}" href="${ctx.href('teams', t.id)}"><span class="nba-tdot"></span>${e(t.name)}</a>` : '?';
  };
  const syncInfo = data => {
    const s = data.FANTRAX_SYNC || {};
    return s.at ? `Fantrax-Stand ${new Date(s.at).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}` : '';
  };

  function table(ctx) {
    const { data, ui, league } = ctx, e = ui.esc;
    N().init(data);
    const R = data.TEAM_RECORDS_LIVE || {}, S = R.standings || [];
    if (!S.length) return ui.empty('Noch keine Tabelle', 'Der Fantrax-Sync ist noch nicht gelaufen.', '🏆');
    const byId = teamById(data), cur = currentPeriod(data), sch = data.WC_SCHEDULE || {};
    const opp = id => { const m = cur && cur.matchups.find(x => x.includes(id)); return m ? byId[m[0] === id ? m[1] : m[0]] : null; };
    const me = league.myTeam, po = sch.playoffTeams || 0; // Playoff-Linie: Top 8 der Division (Beyaz, 15.11.2026)
    return `<div class="page-head"><h1 class="page-title display">🏆 Tabelle</h1>
        <div class="page-sub">${e((data.FANTRAX_SYNC || {}).leagueName || 'FBI World Cup')} · Division ${e((data.FANTRAX_SYNC || {}).division || '')} · 9-Cat H2H: jede Kategorie zählt als Sieg${sch.lastRegular ? ` · Hauptrunde bis Woche ${sch.lastRegular}` : ''} · ${syncInfo(data)}</div></div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th>Team</th><th class="num" title="Kategorien gewonnen-verloren-unentschieden">Kategorien</th><th class="num">Quote</th><th class="num" title="Rückstand auf Platz 1 (in Kategorien)">GB</th>
        <th class="num" title="Rang unter allen ${R.confTeams || 144} Teams der Conference West">Conference</th><th>Diese Woche gegen</th></tr></thead>
      <tbody>${S.map(s => { const t = byId[s.id]; return `<tr class="${s.id === me ? 'mine' : ''}${po && s.rank === po ? ' po-cut' : ''}"><td class="num rank">${s.rank}</td><td>${tLink(ctx, t, s.id === me)}</td>
        <td class="num strong">${s.w}-${s.l}${s.t ? '-' + s.t : ''}</td><td class="num">${s.pct.toFixed(3).replace(/^0/, '')}</td><td class="num">${s.gb ? s.gb.toFixed(1).replace('.0', '') : '–'}</td>
        <td class="num">${s.confRank}.</td><td>${opp(s.id) ? tLink(ctx, opp(s.id)) : '<span class="muted">—</span>'}</td></tr>`; }).join('')}</tbody></table></div>
      ${po ? `<p class="muted small explain">Gestrichelte Linie = Playoff-Grenze: die besten ${po} Teams der Division kommen weiter, Playoffs ab Woche ${(sch.lastRegular || 0) + 1}. Bei Gleichstand: direkter Vergleich, dann meiste Siege, dann Divisionsbilanz.</p>` : ''}`;
  }

  function schedule(ctx) {
    const { data, href, ui, params, league } = ctx, e = ui.esc;
    N().init(data);
    const P = (data.WC_SCHEDULE && data.WC_SCHEDULE.periods) || [];
    if (!P.length) return ui.empty('Kein Spielplan', 'Fantrax-Sync noch nicht gelaufen.', '📅');
    const byId = teamById(data), me = league.myTeam, focus = Number(params[0]) || null, cur = currentPeriod(data);
    const teams = N().leagueTeams(data, true);
    const card = p => {
      const ms = focus ? p.matchups.filter(m => m.includes(focus)) : p.matchups;
      return `<div class="card cbb-week${cur && p.n === cur.n ? ' now' : ''}"><div class="card-head"><h2>Woche ${p.n}${p.playoff ? ' · 🏆 Playoffs' : ''}</h2><span class="muted small">${fmtD(p.start)}–${fmtD(lastDay(p, P))}</span></div>
        <div class="cbb-mgrid">${ms.map(m => `<div class="cbb-m${m.includes(me) ? ' mine' : ''}">${tLink(ctx, byId[m[0]], focus === m[0])}<span class="muted">@</span>${tLink(ctx, byId[m[1]], focus === m[1])}</div>`).join('') || '<span class="muted small">Playoff-Paarungen stehen noch nicht fest</span>'}</div></div>`;
    };
    return `<div class="page-head"><h1 class="page-title display">📅 Spielplan</h1>
        <div class="page-sub">${P.length} Wochen · ein Matchup pro Woche innerhalb der Division${data.WC_SCHEDULE.lastRegular ? ` · Hauptrunde bis Woche ${data.WC_SCHEDULE.lastRegular}` : ''}</div></div>
      <div class="chip-row"><a class="chip-link${!focus ? ' active' : ''}" href="${href('wcschedule')}">Alle</a>${teams.map(t => `<a class="chip-link${focus === t.id ? ' active' : ''}" href="${href('wcschedule', t.id)}" title="${e(t.name)}" style="${N().tcStyle(t)}"><span class="nba-chipav">${e(N().initials(t.name))}</span></a>`).join('')}</div>
      <div class="cbb-weeks">${P.map(card).join('')}</div>`;
  }


  // ---------- Draft-Only-Ligen: eine Zeile je Liga mit Beyaz' Platz ----------
  function draftOnly(ctx) {
    const { data, ui } = ctx, e = ui.esc;
    const D = data.WC_DRAFT_ONLY;
    if (!D || !(D.leagues || []).length) return ui.empty('Noch keine Daten', 'Der Draft-Only-Sync ist noch nicht gelaufen.', '📋');
    const de = (x, d = 1) => (x == null ? '' : Number(x).toFixed(d).replace('.', ','));
    const L = D.leagues, ok = L.filter(l => l.rank);
    const po = ok.filter(l => l.type === 'h2h' && l.playoffTeams);
    const inPo = po.filter(l => l.rank <= l.playoffTeams).length;
    const avg = ok.length ? ok.reduce((a, l) => a + l.rank, 0) / ok.length : 0;
    const stat = (v, label, tip) => `<div class="stat" title="${e(tip)}"><div class="stat-label">${label}</div><div class="stat-value display">${v}</div></div>`;
    const when = D.updated ? new Date(D.updated).toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) : '';
    const row = l => {
      const url = `https://www.fantrax.com/fantasy/league/${encodeURIComponent(l.id)}/standings`;
      const liga = `<a href="${url}" target="_blank" rel="noopener" title="${e(l.name)} auf Fantrax öffnen">${e(l.short || l.name)}</a>${l.stale ? ' <span class="muted small" title="Letzter Abruf fehlgeschlagen, Stand vom vorherigen Sync">⚠</span>' : ''}`;
      if (!l.rank) {
        const why = l.error ? `Fehler: ${l.error}` : `Kein Team mit Hawkward/Pizzaratops/Steakosaurus/MFHFB gefunden. Teams: ${(l.teamsSeen || []).join(', ')}`;
        return `<tr><td>${liga}</td><td colspan="6" class="muted" title="${e(why)}">${l.error ? 'Abruf fehlgeschlagen' : 'eigenes Team nicht gefunden'}</td></tr>`;
      }
      const top = l.rank <= 3;
      const rankCell = `<td class="num${top ? ' strong' : ''}" data-sort-value="${l.rank}" title="${l.tied ? 'Platz geteilt · ' : ''}${l.teams} Teams">${l.rank === 1 ? '🥇 ' : l.rank === 2 ? '🥈 ' : l.rank === 3 ? '🥉 ' : ''}${l.tied ? 'T-' : ''}${l.rank}.<span class="muted small">/${l.teams}</span></td>`;
      const score = l.type === 'h2h'
        ? `<td class="num" data-sort-value="${l.pct}" title="Kategorien gewonnen-verloren-unentschieden · Quote ${de(l.pct, 3)}">${e(l.record)}</td>`
        : `<td class="num" data-sort-value="${l.points}" title="${l.toNext != null ? `${de(l.toNext)} Pkt. bis zum Platz darüber` : 'Spitze'}${l.overNext != null ? ` · ${de(l.overNext)} Pkt. vor dem Platz darunter` : ''}">${de(l.points)} Pkt.</td>`;
      const behind = l.behind ? `<td class="num" data-sort-value="${l.behind}">${de(l.behind)}</td>` : '<td class="num" data-sort-value="0">–</td>';
      let poCell = '<td class="num muted" data-sort-value="">—</td>';
      if (l.type === 'h2h' && l.playoffTeams && l.poGap != null) {
        const inside = l.rank <= l.playoffTeams;
        poCell = `<td class="num" data-sort-value="${inside ? l.poGap : -l.poGap}" title="Top ${l.playoffTeams} kommen in die Playoffs · ${inside ? 'Vorsprung auf den ersten Platz außerhalb' : 'Rückstand auf den letzten Playoff-Platz'} (in Kategorien-Siegen)">${inside ? `✅ +${de(l.poGap)}` : `<span class="muted">−${de(l.poGap)}</span>`}</td>`;
      }
      return `<tr><td>${liga}</td><td>${e(l.team)}</td>${rankCell}${score}${behind}${poCell}<td class="muted">${l.leader ? e(l.leader) : '<span class="strong">— du</span>'}</td></tr>`;
    };
    const sorted = [...L].sort((a, b) => (a.rank || 99) / (a.teams || 12) - (b.rank || 99) / (b.teams || 12) || String(a.short).localeCompare(String(b.short), 'de', { numeric: true }));
    return `<div class="page-head"><h1 class="page-title display">📋 Draft Only</h1>
        <div class="page-sub">${L.length} Draft-Only-Ligen auf Fantrax · nur draften, danach keine Moves · Stand ${when} · Liga anklicken öffnet die Fantrax-Tabelle</div></div>
      <div class="stat-row" style="grid-template-columns:repeat(auto-fit,minmax(130px,1fr))">
        ${stat(ok.length, 'Ligen mit Team', 'Ligen, in denen eines deiner Teams (Hawkward, Pizzaratops, Steakosaurus, MFHFB) gefunden wurde')}
        ${stat(de(avg), 'Ø Platz', 'Durchschnittlicher Tabellenplatz über alle Ligen')}
        ${stat(ok.filter(l => l.rank === 1).length, 'auf Platz 1', 'Ligen, die du gerade anführst')}
        ${stat(ok.filter(l => l.rank <= 3).length, 'in den Top 3', 'Ligen mit Platz 1 bis 3')}
        ${po.length ? stat(`${inPo}/${po.length}`, 'auf Playoff-Kurs', 'H2H-Ligen, in denen du aktuell einen Playoff-Platz hast (nur Ligen, für die Fantrax die Playoff-Größe liefert)') : ''}
      </div>
      <div class="table-wrap"><table class="table compact"><thead><tr>
        <th title="Liga (H2H = Head-to-Head nach Kategorien, Roto = Punkte je Kategorie-Rang)">Liga</th><th>Team</th>
        <th class="num" title="Aktueller Tabellenplatz / Anzahl Teams (T- = geteilt)">Platz</th>
        <th class="num" title="H2H: Kategorien gewonnen-verloren-unentschieden · Roto: Gesamtpunkte">Bilanz / Punkte</th>
        <th class="num" title="Rückstand auf Platz 1 · H2H in Kategorien-Siegen (Games Back), Roto in Punkten">Rückstand</th>
        <th class="num" title="Nur H2H: Vorsprung auf den ersten Nicht-Playoff-Platz (✅) bzw. Rückstand auf den letzten Playoff-Platz">Playoffs</th>
        <th title="Wer die Liga gerade anführt">Spitzenreiter</th></tr></thead>
      <tbody>${sorted.map(row).join('')}</tbody></table></div>
      <p class="muted small explain">Daten: Fantrax (öffentliche Schnittstelle), viermal täglich aktualisiert. Sortierung ab Werk nach relativem Platz (Platz ÷ Teams); jede Spalte per Klick sortierbar.</p>`;
  }

  const D = ['teams', '?rosters-live', '?fantasy-schedule'];
  MFHFB.pages.register({ id: 'wctable', section: 'standings', label: 'Tabelle', icon: '🏆', applies: A, when: WHEN, data: D, render: table });
  MFHFB.pages.register({ id: 'wcschedule', section: 'matchups', label: 'Spielplan', icon: '📅', applies: A, when: WHEN, data: D, render: schedule });
  MFHFB.pages.register({ id: 'wcdraftonly', section: 'standings', label: 'Draft Only', icon: '📋', applies: A, when: WHEN, data: ['?draft-only'], render: draftOnly });
})();
