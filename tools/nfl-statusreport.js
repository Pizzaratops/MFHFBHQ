// ============================================================
//  Tool: Status Report (NFL, ligaübergreifend)
// ============================================================
//  #/<liga>/statusreport            Personen-Auswahl
//  #/<liga>/statusreport/<person>   eigene Teams dieser Person in ALLEN
//                                   ihren ESPN- & Sleeper-Ligen
//
//  Neu gebaut nach renderStatusReport & Co. (BWP/DOPE js/app.js).
//  Unterschied zur alten Seite: Die Status-Report-Dateien ALLER NFL-Ligen im
//  Hub werden zusammengeführt (leagues/<liga>/data/status-report.js) — die
//  Seite ist also in jeder NFL-Liga gleich und zeigt alle Personen. Aktuell
//  synct nur BWP ("Bear Down"; Felix/TeamBeermode pausiert). Der frühere
//  DOPE-Eintrag "Milchreis" war dieselbe Person mit denselben Ligen und
//  entfällt seit dem DOPE-Cutover (29.09.2026).
//  Neu außerdem: Matchup-Badge der nächsten Woche je Spieler.
//
//  Passwort-Vorhang: rein clientseitig, KEIN echter Schutz (Code ist
//  öffentlich) — nur gegen zufälliges Reinstolpern, wie bisher. Die
//  Schlüssel müssen exakt zu den "label"-Werten in der jeweiligen
//  js/status-report-config.js der Sync-Repos passen. Freischaltung gilt
//  hub-weit (mfhfb:sr-unlock:<person>); alte Freischaltungen aus BWP
//  (bwp-sr-unlock-) und DOPE (dpe-sr-unlock-) werden übernommen.
// ============================================================

(function () {
  const GATE = {
    'Bear Down': { password: '2428', emoji: '🐻' },
    'TeamBeermode': { password: 'Dolpins', emoji: '🍺' },
  };
  const key = owner => 'mfhfb:sr-unlock:' + owner;
  function isUnlocked(owner) {
    try {
      if (localStorage.getItem(key(owner)) === '1') return true;
      if (localStorage.getItem('bwp-sr-unlock-' + owner) === '1' || localStorage.getItem('dpe-sr-unlock-' + owner) === '1') {
        localStorage.setItem(key(owner), '1'); return true;
      }
    } catch (e) { /* Storage blockiert */ }
    return false;
  }
  function unlock(owner) { try { localStorage.setItem(key(owner), '1'); } catch (e) { /* ignore */ } }
  function lock(owner) { try { localStorage.removeItem(key(owner)); localStorage.removeItem('bwp-sr-unlock-' + owner); localStorage.removeItem('dpe-sr-unlock-' + owner); } catch (e) { /* ignore */ } }

  // Status-Report-Dateien aller NFL-Ligen laden und zusammenführen
  async function loadAll(ctx) {
    const leagues = (typeof LEAGUES !== 'undefined' ? LEAGUES : []).filter(l => l.sport === 'nfl' && l.dataBase);
    const parts = await Promise.all(leagues.map(l => MFHFB.data.load(l, ['?status-report']).catch(() => ({}))));
    const seen = new Map();
    let generatedAt = null;
    parts.forEach(p => {
      const D = p.STATUS_REPORT_DATA;
      if (!D) return;
      if (D.generatedAt && (!generatedAt || D.generatedAt > generatedAt)) generatedAt = D.generatedAt;
      (D.leagues || []).forEach(l => {
        const k = `${l.owner}|${l.id}`, prev = seen.get(k);
        // Gleiche Liga derselben Person in zwei Sync-Repos → die frischere Datei gewinnt
        if (!prev || (D.generatedAt || '') > prev._at) seen.set(k, { ...l, _at: D.generatedAt || '' });
      });
    });
    const ma = await MFHFB.data.load(ctx.league, ['?sport:matchup-advantage']).catch(() => ({}));
    return { generatedAt, leagues: [...seen.values()], MA: ma.MATCHUP_ADVANTAGE || null };
  }

  const fmt = v => (v == null ? '–' : v.toFixed(1));
  const sortPlayers = l => (l.players || []).slice().sort((a, b) => (b.flag - a.flag) || (!!b.isStarter - !!a.isStarter) || String(a.name).localeCompare(String(b.name)));

  function ownersView(ctx, D) {
    const e = ctx.ui.esc;
    const owners = [...new Set(D.leagues.map(l => l.owner).filter(Boolean))];
    return `<div class="team-grid">${owners.map(o => {
      const n = D.leagues.filter(l => l.owner === o), fl = n.reduce((s, l) => s + (l.flaggedCount || 0), 0), open = isUnlocked(o);
      return `<a class="team-card" href="${ctx.href('statusreport', o)}">
        <span class="team-card-emoji">${e((GATE[o] || {}).emoji || '🔒')}</span>
        <span class="team-card-body"><span class="team-name">${e(o)}</span><span class="team-owner">${n.length} ${n.length === 1 ? 'Liga' : 'Ligen'}</span></span>
        <span class="team-card-meta">${open ? `<span>🔓 entsperrt</span>${fl ? `<span class="sr-flagpill">⚡ ${fl}</span>` : ''}` : '<span>🔒 Passwort</span>'}</span></a>`;
    }).join('')}</div>`;
  }

  function gateView(ctx, owner) {
    const e = ctx.ui.esc;
    return `<div class="card sr-gate">
      <div class="sr-gate-emoji">${e((GATE[owner] || {}).emoji || '🔒')}</div>
      <div class="sr-gate-title display">${e(owner)}</div>
      <div class="muted">Passwort eingeben</div>
      <form data-gate><input type="password" class="search sr-gate-input" autocomplete="off" aria-label="Passwort" autofocus>
        <div class="sr-gate-err" hidden>Falsches Passwort.</div>
        <div class="sr-gate-actions"><a class="seg-btn" href="${ctx.href('statusreport')}">← Zurück</a><button type="submit" class="seg-btn dna-helpbtn">Entsperren</button></div></form>
    </div>`;
  }

  function ownerView(ctx, D, owner) {
    const e = ctx.ui.esc;
    const leagues = D.leagues.filter(l => l.owner === owner);
    const collapsed = new Set(ctx.store.getJSON('sr-collapsed', []));
    const wk = D.MA ? MFHFB.nfl.ma.upcomingWeek(D.MA) : null;
    const badge = p => (D.MA && p.nfl && ['QB', 'RB', 'WR', 'TE'].includes(p.pos) ? MFHFB.nfl.ma.badgeFor(D.MA, p.pos, p.nfl, wk) : '');
    const flagged = leagues.map(l => ({ l, ps: (l.players || []).filter(p => p.flag) })).filter(x => x.ps.length);
    const total = flagged.reduce((s, x) => s + x.ps.length, 0);
    // Spieler in mehreren Ligen dieser Person
    const cnt = new Map();
    leagues.forEach(l => (l.players || []).forEach(p => { if (!p.name) return; const c = cnt.get(p.name) || { ...p, n: 0, in: [] }; c.n++; c.in.push(l.leagueName); cnt.set(p.name, c); }));
    const most = [...cnt.values()].filter(c => c.n > 1).sort((a, b) => b.n - a.n || a.name.localeCompare(b.name)).slice(0, 12);

    const section = l => {
      const ps = sortPlayers(l), closed = collapsed.has(l.id);
      return `<details class="card sr-league" id="sr-${e(l.id)}" data-lid="${e(l.id)}"${closed ? '' : ' open'}>
        <summary><span class="sr-lemoji">${e(l.emoji || '🏈')}</span><span class="sr-lhead"><b>${e(l.leagueName)}</b><small>${e(l.teamName || '')}${l.record ? ' · ' + e(l.record) : ''}${l.stale ? ' · ⚠️ veraltet' : ''}</small></span>${l.flaggedCount ? `<span class="sr-flagpill">⚡ ${l.flaggedCount}</span>` : ''}</summary>
        ${ps.length ? `<div class="table-wrap sr-tw"><table class="table compact sr-table"><thead><tr><th>Spieler</th><th class="num">Last</th><th class="num">L3</th><th class="num">Proj</th><th>Status</th></tr></thead><tbody>
          ${ps.map(p => `<tr class="${p.flag ? 'sr-flag' : ''}${p.isStarter === false ? ' sr-bench' : ''}">
            <td><span class="strong">${p.flag ? '⚡ ' : ''}${e(p.name)}</span><small class="muted"> ${e(p.pos || '?')} · ${e(p.nfl || 'FA')}</small>${badge(p)}</td>
            <td class="num">${fmt(p.lastGamePoints)}</td><td class="num">${fmt(p.last3AvgPoints)}</td><td class="num strong">${fmt(p.projPoints)}</td>
            <td class="nowrap">${p.isStarter === false ? '<span class="status-tag sr-bn">Bank</span>' : ''}${p.status ? ` <span class="status-tag">${e(p.status)}</span>` : ''}</td></tr>`).join('')}
        </tbody></table></div>` : `<div class="muted cs-pad">Kein Kader gefunden.</div>`}
      </details>`;
    };
    const col = (title, list) => `<div class="sr-col"><h2 class="group-title">${title} <span>${list.length}</span></h2>${list.length ? list.map(section).join('') : '<div class="muted cs-pad">Keine Ligen.</div>'}</div>`;
    return `
      <div class="sr-bar"><a class="back" href="${ctx.href('statusreport')}">← Andere Person</a>
        <div class="seg" role="group"><button type="button" class="seg-btn" data-all="open">⬇️ Alle auf</button><button type="button" class="seg-btn" data-all="close">⬆️ Alle zu</button><button type="button" class="seg-btn" data-lock>🔒 Sperren</button></div></div>
      ${total ? `<div class="sr-action"><b>⚡ ${total} Spieler in ${flagged.length} ${flagged.length === 1 ? 'Liga braucht' : 'Ligen brauchen'} eine Entscheidung</b>
          <div class="sr-chips">${flagged.map(x => `<button type="button" class="pick" data-jump="${e(x.l.id)}" title="${e(x.ps.map(p => p.name + (p.status ? ' (' + p.status + ')' : '')).join(', '))}">${e(x.l.emoji || '🏈')} ${e(x.l.leagueName)} <b>${x.ps.length}</b></button>`).join('')}</div></div>`
        : '<div class="sr-action clear">✅ Aktuell kein Handlungsbedarf — alle Starter sind einsatzbereit.</div>'}
      <div class="sr-cols">
        ${col('📇 ESPN', leagues.filter(l => l.platform === 'espn'))}
        ${col('💤 Sleeper', leagues.filter(l => l.platform === 'sleeper'))}
        <aside class="sr-col"><h2 class="group-title">⭐ Most Owned</h2><div class="card">${most.length ? most.map(p => `<div class="sr-most" title="${e(p.in.join(', '))}"><span><b>${e(p.name)}</b><small class="muted"> ${e(p.pos || '?')} · ${e(p.nfl || 'FA')}</small></span><span class="strong">×${p.n}</span></div>`).join('') : '<div class="muted cs-pad">Kein Spieler steht in mehr als einer Liga.</div>'}</div></aside>
      </div>
      ${wk ? `<div class="page-sub explain" style="margin-top:10px;font-size:12px">⚡ = Starter mit Status (Q/D/O/IR …). Badge = Matchup Woche ${wk} (Details: NFL → Matchup Advantage).</div>` : ''}`;
  }

  MFHFB.pages.register({
    id: 'statusreport',
    section: 'extra',
    label: 'Status Report',
    icon: '📡',
    applies: { sport: ['nfl'] },
    data: [],
    title: ({ params }) => params[0] ? `Status Report · ${params[0]}` : 'Status Report',
    async render(ctx) {
      const { ui } = ctx;
      const D = await loadAll(ctx);
      ctx._sr = D;
      const head = `<div class="page-head"><h1 class="page-title display">📡 Status Report</h1>
        <div class="page-sub"><span class="explain">Eigene Teams in allen ESPN- & Sleeper-Football-Ligen</span>${D.generatedAt ? ` · Letzter Sync: ${new Date(D.generatedAt).toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short' })}` : ''}</div></div>`;
      if (!D.leagues.length) return head + ui.empty('Noch keine Daten', 'Der Status Report wurde noch nicht synchronisiert. Der erste Lauf der GitHub Action füllt diese Seite automatisch.', '📡');
      const owner = ctx.params[0];
      if (!owner || !D.leagues.some(l => l.owner === owner)) return head + ownersView(ctx, D);
      return head + (isUnlocked(owner) ? ownerView(ctx, D, owner) : gateView(ctx, owner));
    },
    mount(root, ctx) {
      const owner = ctx.params[0];
      const form = root.querySelector('[data-gate]');
      if (form) {
        const inp = form.querySelector('input');
        if (inp) inp.focus();
        form.addEventListener('submit', ev => {
          ev.preventDefault();
          const g = GATE[owner];
          if (g && inp.value === g.password) { unlock(owner); ctx.refresh(); }
          else { form.querySelector('.sr-gate-err').hidden = false; inp.value = ''; inp.focus(); }
        });
        return;
      }
      const saveCollapsed = () => ctx.store.setJSON('sr-collapsed', [...root.querySelectorAll('details.sr-league:not([open])')].map(d => d.dataset.lid));
      root.querySelectorAll('details.sr-league').forEach(d => d.addEventListener('toggle', saveCollapsed));
      root.querySelectorAll('[data-all]').forEach(b => b.addEventListener('click', () => {
        root.querySelectorAll('details.sr-league').forEach(d => { d.open = b.dataset.all === 'open'; });
        saveCollapsed();
      }));
      const lk = root.querySelector('[data-lock]');
      if (lk) lk.addEventListener('click', () => { lock(owner); location.hash = ctx.href('statusreport'); });
      root.querySelectorAll('[data-jump]').forEach(b => b.addEventListener('click', () => {
        const d = root.querySelector(`details[data-lid="${CSS.escape(b.dataset.jump)}"]`);
        if (d) { d.open = true; saveCollapsed(); d.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      }));
    },
  });
})();
