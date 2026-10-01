// ============================================================
//  Tool (CBB): NIL-Auktion 2026 — Board, Mein Plan, Budgets, Preise 2025
// ============================================================
//  #/cbb/home          Auktions-Board (alle verfügbaren Spieler, gerankt + Wert)
//  #/cbb/auctionplan   Mein Plan (Ziele, Max-Gebote, Budget-Check)
//  #/cbb/auctionteams  Budgets aller Teams (Kaufkraft, Max-Gebot)
//  #/cbb/nil2025       Preise der NIL-Auktion 2025 (Marktkurve)
//  #/cbb/auctionhelp   Regeln + wie die Werte entstehen
//
//  Daten: leagues/cbb/data/nil-auction.js (CBB_POOL, CBB_TEAMS, CBB_TIERS,
//  CBB_NIL_2025, CBB_RULES, CBB_MY_TEAM).
//
//  Live-Tracking: Zuschläge („an Team X für $Y“) und eigene Ziele werden
//  im Browser gespeichert (mfhfb:cbb:auction). Aus den Zuschlägen rechnet
//  die Seite Restbudgets aller Teams und die Inflation: bleibt mehr Geld
//  übrig als Wert auf dem Markt, steigt der Live-Wert aller übrigen Spieler.
// ============================================================

(function () {
  const KEY = 'auction';

  // ---------- Zustand ----------
  function load(ctx) {
    const s = ctx.store.getJSON(KEY, null) || {};
    return { targets: s.targets || {}, sold: s.sold || {} };
  }
  function save(ctx, st) { ctx.store.setJSON(KEY, st); }

  // ---------- Markt-Rechnung ----------
  function market(d, st) {
    const teams = d.CBB_TEAMS.map(t => ({ ...t, won: [], spent: 0 }));
    const tIdx = Object.fromEntries(teams.map(t => [t.name, t]));
    Object.entries(st.sold).forEach(([name, s]) => {
      const t = tIdx[s.team]; if (!t) return;
      t.won.push(name); t.spent += s.price;
    });
    teams.forEach(t => {
      t.left = t.budget - t.spent;
      t.spotsLeft = Math.max(0, t.spots - t.won.length);
      t.maxBid = t.spotsLeft > 0 ? Math.max(0, t.left - (t.spotsLeft - 1)) : 0;
      t.perSpot = t.spotsLeft ? t.left / t.spotsLeft : 0;
    });
    const money = teams.reduce((a, t) => a + t.left, 0);
    const spots = teams.reduce((a, t) => a + t.spotsLeft, 0);
    const unsold = d.CBB_POOL.filter(p => !st.sold[p.name]).sort((a, b) => b.value - a.value);
    const valueLeft = unsold.slice(0, spots).reduce((a, p) => a + (p.value - 1), 0);
    const surplus = Math.max(0, money - spots);
    const factor = Object.keys(st.sold).length && valueLeft > 0 ? surplus / valueLeft : 1;
    const me = tIdx[d.CBB_MY_TEAM] || teams[0];
    return { teams, tIdx, money, spots, factor, me, live: p => Math.max(1, Math.round(1 + (p.value - 1) * factor)) };
  }
  // Schmerzgrenze: was man für einen echten Wunschspieler maximal bieten sollte
  const limit = (v, me) => Math.min(me.maxBid, v <= 2 ? v + 1 : Math.round(v * 1.15));

  // ---------- kleine Bausteine ----------
  const money = x => '$' + Math.round(x);
  function tags(p, e) {
    const t = [];
    if (p.dp) t.push('<span class="cbb-tag dp" title="Fett in Dizzles Liste = NBA-Draft-Prospect">🎓 Draft</span>');
    if (p.up) t.push('<span class="cbb-tag up" title="Kursiv = Up-Transfer (zu einem stärkeren Programm)">⬆ Transfer</span>');
    if (p.down) t.push('<span class="cbb-tag down" title="Unterstrichen = Down-Transfer (zu einem kleineren Programm, oft mehr Spielzeit)">⬇ Transfer</span>');
    (p.flags || []).forEach(f => t.push(`<span class="cbb-tag warn" title="${e(f)}">⚠ ${e(f.replace(/ \(.*\)$/, ''))}</span>`));
    return t.join('');
  }
  function kpis(d, m) {
    const me = m.me;
    return `<div class="stat-row cbb-kpis">
      <div class="stat"><div class="stat-label">Markt</div><div class="stat-value">${money(m.money)}</div><div class="stat-sub">für ${m.spots} offene Plätze · Ø ${money(m.money / Math.max(1, m.spots))}</div></div>
      <div class="stat"><div class="stat-label">${'Dein Budget · ' + MFHFB.ui.esc(me.name)}</div><div class="stat-value">${money(me.left)}</div><div class="stat-sub">${me.spotsLeft} Plätze · Ø ${money(me.perSpot)} pro Platz</div></div>
      <div class="stat"><div class="stat-label">Dein Max-Gebot</div><div class="stat-value">${money(me.maxBid)}</div><div class="stat-sub">Rest muss $1 je übrigem Platz decken</div></div>
      <div class="stat"><div class="stat-label">Inflation</div><div class="stat-value ${m.factor > 1.03 ? 'down' : m.factor < .97 ? 'up' : ''}">${m.factor === 1 ? '±0 %' : MFHFB.ui.signed((m.factor - 1) * 100, 0) + ' %'}</div><div class="stat-sub">${m.factor === 1 ? 'erst nach den ersten Zuschlägen' : 'Live-Wert = Wert × Restgeld/Restwert'}</div></div>
    </div>`;
  }

  // ============================================================
  //  1) Board
  // ============================================================
  function renderBoard(ctx) {
    const { data: d, ui } = ctx, e = ui.esc;
    const st = load(ctx), m = market(d, st);
    const tiers = d.CBB_TIERS;
    const f = ctx.store.getJSON('auctionFilter', {}) || {};
    return `<div class="page-head"><h1 class="page-title display">💰 NIL-Auktion 2026</h1>
        <div class="page-sub">${d.CBB_POOL.length} verfügbare Spieler · ${d.CBB_TEAMS.reduce((a, t) => a + t.spots, 0)} Plätze · ${money(d.CBB_TEAMS.reduce((a, t) => a + t.budget, 0))} NIL in der Liga
          <span class="explain">Reihenfolge = Dizzles Tiers, innerhalb eines Tiers nach Rang der letzten Saison, Draft-Prospect-Status und Transfers. „Wert“ = geschätzter Zuschlagspreis (Mischung aus den echten Preisen 2025 und Dizzles Tier-Spannen, auf das Geld 2026 hochgerechnet). „Limit“ = bis dahin mitgehen, wenn du den Spieler wirklich willst.</span></div></div>
      ${kpis(d, m)}
      <div class="controls cbb-controls">
        <input type="search" class="cbb-input" data-f="q" placeholder="Spieler oder Schule …" value="${e(f.q || '')}" aria-label="Suche">
        <select class="cbb-input" data-f="tier" aria-label="Tier"><option value="">Alle Tiers</option>${tiers.map((t, i) => `<option value="${i}"${String(f.tier) === String(i) ? ' selected' : ''}>${e(t.label)}</option>`).join('')}</select>
        <select class="cbb-input" data-f="pos" aria-label="Position"><option value="">Alle Positionen</option>${['G', 'G/F', 'F/C', 'G/F/C'].map(p => `<option${f.pos === p ? ' selected' : ''}>${p}</option>`).join('')}</select>
        <select class="cbb-input" data-f="cls" aria-label="Jahrgang"><option value="">Alle Jahrgänge</option>${['Fr', 'So', 'Jr', 'Sr', 'Grad'].map(c => `<option${f.cls === c ? ' selected' : ''}>${c}</option>`).join('')}</select>
        <div class="seg" role="group" aria-label="Ansicht">
          ${[['all', 'Alle'], ['open', 'Verfügbar'], ['targets', '★ Ziele'], ['dp', '🎓 Draft'], ['sold', 'Vergeben']].map(([k, l]) => `<button type="button" class="seg-btn${(f.view || 'open') === k ? ' active' : ''}" data-view="${k}">${l}</button>`).join('')}
        </div>
      </div>
      <div class="table-wrap cbb-board" data-share="NIL-Auktion 2026">
        <table class="table compact"><thead><tr>
          <th class="cbb-star" aria-label="Ziel"></th><th class="num hide-sm" data-sort="rank">#</th><th data-sort="name">Spieler</th><th class="hide-sm" data-sort="school">Schule</th>
          <th class="hide-sm" data-sort="cls">Kl.</th><th class="hide-sm" data-sort="pos">Pos</th>
          <th class="num hide-sm" data-sort="last" title="Fantasy-Rang der Saison 2025-26">Rang 25/26</th><th class="num" data-sort="value">Wert</th>
          <th class="num hide-sm" data-sort="limit" title="Bis hierhin mitgehen, wenn du den Spieler willst">Limit</th><th class="num hide-sm" data-sort="nil25" title="Zuschlag in der NIL-Auktion 2025">2025</th><th>Status</th>
        </tr></thead><tbody data-rows></tbody></table>
      </div>
      <p class="muted small cbb-foot">Zuschläge und Ziele werden nur in diesem Browser gespeichert. „Zuschlag“ eintragen, sobald ein Spieler auf Discord vergeben ist — dann rechnen Budgets, Max-Gebote und Live-Werte automatisch mit.</p>`;
  }

  function mountBoard(root, ctx) {
    const d = ctx.data, e = ctx.ui.esc;
    const f = ctx.store.getJSON('auctionFilter', {}) || {};
    let sort = f.sort || 'rank', dir = f.dir || 1;
    const tbody = root.querySelector('[data-rows]');
    const persist = () => ctx.store.setJSON('auctionFilter', { ...f, sort, dir });

    function rows() {
      const st = load(ctx), m = market(d, st);
      const q = (f.q || '').trim().toLowerCase(), view = f.view || 'open';
      let list = d.CBB_POOL.filter(p => {
        if (q && !(p.name.toLowerCase().includes(q) || p.school.toLowerCase().includes(q))) return false;
        if (f.tier !== undefined && f.tier !== '' && String(p.tier) !== String(f.tier)) return false;
        if (f.pos && p.pos !== f.pos) return false;
        if (f.cls && p.cls !== f.cls) return false;
        const sold = !!st.sold[p.name];
        if (view === 'open' && sold) return false;
        if (view === 'sold' && !sold) return false;
        if (view === 'targets' && !(p.name in st.targets)) return false;
        if (view === 'dp' && !p.dp) return false;
        return true;
      });
      const key = p => sort === 'limit' ? limit(m.live(p), m.me) : sort === 'value' ? m.live(p) : sort === 'last' ? (p.last || 9999) : sort === 'nil25' ? (p.nil25 || 0) : p[sort];
      list = list.slice().sort((a, b) => {
        const x = key(a), y = key(b);
        const c = typeof x === 'string' ? x.localeCompare(y) : x - y;
        return (c || a.rank - b.rank) * dir;
      });
      root.querySelectorAll('th[data-sort]').forEach(th => th.classList.toggle('sorted', th.dataset.sort === sort));
      let lastTier = -1;
      const showDividers = sort === 'rank' && dir === 1;
      tbody.innerHTML = list.length ? list.map(p => {
        const s = st.sold[p.name], tgt = p.name in st.targets, live = m.live(p);
        const div = showDividers && p.tier !== lastTier ? `<tr class="cbb-tier-row"><td colspan="11">${e(d.CBB_TIERS[p.tier].label)} <small>· Dizzle: ${d.CBB_TIERS[p.tier].min === d.CBB_TIERS[p.tier].max ? '$' + d.CBB_TIERS[p.tier].min : '$' + d.CBB_TIERS[p.tier].min + '–' + d.CBB_TIERS[p.tier].max}</small></td></tr>` : '';
        lastTier = p.tier;
        return `${div}<tr class="${s ? 'cbb-sold' : ''}${tgt ? ' cbb-target' : ''}${s && s.team === d.CBB_MY_TEAM ? ' cbb-mine' : ''}" data-name="${e(p.name)}">
          <td class="cbb-star"><button type="button" class="cbb-starbtn" data-star aria-pressed="${tgt}" title="${tgt ? 'Ziel entfernen' : 'Als Ziel merken'}">${tgt ? '★' : '☆'}</button></td>
          <td class="num muted hide-sm">${p.rank}</td>
          <td><div class="cbb-name">${e(p.name)}</div><div class="cbb-tags">${tags(p, e)}<span class="show-sm muted">${e(p.school)} · ${e(p.cls)} · ${e(p.pos)}${p.last ? ' · Rang ' + p.last : ''}${s ? '' : ' · Limit ' + money(limit(live, m.me))}</span></div></td>
          <td class="hide-sm">${e(p.school)}</td><td class="hide-sm">${e(p.cls)}</td><td class="hide-sm">${e(p.pos)}</td>
          <td class="num hide-sm">${p.last ? p.last : '<span class="muted">–</span>'}</td>
          <td class="num strong">${money(live)}${m.factor !== 1 && live !== p.value ? `<small class="muted cbb-was"> ${money(p.value)}</small>` : ''}</td>
          <td class="num hide-sm">${s ? '<span class="muted">–</span>' : money(limit(live, m.me))}</td>
          <td class="num hide-sm">${p.nil25 ? `<span title="2025 an ${e(p.nil25team)}">${money(p.nil25)}</span>` : '<span class="muted">–</span>'}</td>
          <td class="cbb-status">${s ? `<span class="cbb-soldtag">${e(s.team)} · ${money(s.price)}</span> <button type="button" class="cbb-linkbtn" data-unsell title="Zuschlag löschen">✕</button>` : `<button type="button" class="cbb-btn" data-sell>Zuschlag</button>`}</td>
        </tr>`;
      }).join('') : `<tr><td colspan="11">${ctx.ui.empty('Keine Spieler', 'Filter anpassen.', '🔍')}</td></tr>`;
    }

    root.addEventListener('input', ev => {
      const k = ev.target.dataset && ev.target.dataset.f; if (!k) return;
      f[k] = ev.target.value; persist(); rows();
    });
    root.addEventListener('click', ev => {
      const v = ev.target.closest('[data-view]');
      if (v) { f.view = v.dataset.view; root.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('active', b === v)); persist(); rows(); return; }
      const th = ev.target.closest('th[data-sort]');
      if (th) { const k = th.dataset.sort; dir = sort === k ? -dir : (['value', 'limit', 'nil25'].includes(k) ? -1 : 1); sort = k; persist(); rows(); return; }
      const tr = ev.target.closest('tr[data-name]'); if (!tr) return;
      const name = tr.dataset.name, st = load(ctx);
      if (ev.target.closest('[data-star]')) {
        if (name in st.targets) delete st.targets[name]; else st.targets[name] = null;
        save(ctx, st); rows(); return;
      }
      if (ev.target.closest('[data-unsell]')) { delete st.sold[name]; save(ctx, st); ctx.refresh(); return; }
      if (ev.target.closest('[data-sell]')) {
        const cell = tr.querySelector('.cbb-status');
        const p = d.CBB_POOL.find(x => x.name === name), m = market(d, st);
        cell.innerHTML = `<form class="cbb-sellform" data-sellform>
          <select class="cbb-input" name="team" aria-label="Team">${m.teams.map(t => `<option${t.name === d.CBB_MY_TEAM ? ' selected' : ''}>${e(t.name)}</option>`).join('')}</select>
          <input class="cbb-input cbb-price" name="price" type="number" min="1" step="1" value="${m.live(p)}" aria-label="Preis in $">
          <button class="cbb-btn" type="submit">OK</button><button class="cbb-linkbtn" type="button" data-cancel>✕</button></form>`;
        cell.querySelector('[name=price]').select();
        return;
      }
      if (ev.target.closest('[data-cancel]')) rows();
    });
    root.addEventListener('submit', ev => {
      const form = ev.target.closest('[data-sellform]'); if (!form) return;
      ev.preventDefault();
      const name = form.closest('tr').dataset.name, st = load(ctx);
      const price = Math.max(1, Math.round(Number(form.price.value) || 1));
      st.sold[name] = { team: form.team.value, price };
      save(ctx, st); ctx.refresh();
    });
    rows();
  }

  // ============================================================
  //  2) Mein Plan
  // ============================================================
  function renderPlan(ctx) {
    const { data: d, ui } = ctx, e = ui.esc;
    const st = load(ctx), m = market(d, st), me = m.me;
    const mine = Object.entries(st.sold).filter(([, s]) => s.team === me.name);
    const targets = d.CBB_POOL.filter(p => p.name in st.targets && !st.sold[p.name]);
    const planned = t => st.targets[t.name] != null ? st.targets[t.name] : limit(m.live(t), me);
    const sum = targets.reduce((a, t) => a + planned(t), 0);
    const restSpots = me.spotsLeft - targets.length, restMoney = me.left - sum;
    const ok = restSpots < 0 ? false : restMoney >= restSpots;
    // Was der Markt im Schnitt pro Tier kostet
    const tierStats = d.CBB_TIERS.map((t, i) => {
      const ps = d.CBB_POOL.filter(p => p.tier === i && !st.sold[p.name]);
      const vals = ps.map(p => m.live(p));
      return { t, n: ps.length, avg: vals.length ? vals.reduce((a, b) => a + b, 0) / vals.length : 0, hi: Math.max(0, ...vals), lo: vals.length ? Math.min(...vals) : 0 };
    });
    // Beispiel-Kader zum Marktwert: so viele Plätze, wie man hat — von oben
    // („Star zuerst“) bzw. gleichmäßig („Breite“) — rein als Orientierung.
    const pool = d.CBB_POOL.filter(p => !st.sold[p.name]).map(p => m.live(p)).sort((a, b) => b - a);
    const share = me.left / Math.max(1, m.money);
    return `<div class="page-head"><h1 class="page-title display">🎯 Mein Plan</h1>
        <div class="page-sub">${e(me.name)} · ${money(me.left)} für ${me.spotsLeft} Plätze${mine.length ? ` · schon ${mine.length} Zuschläge für ${money(me.spent)}` : ''}</div></div>
      ${kpis(d, m)}
      <div class="two-col cbb-plan">
        <section class="card">
          <div class="card-head"><h2>★ Meine Ziele</h2><span class="muted small">${targets.length} Spieler</span></div>
          ${targets.length ? `<div class="table-wrap flat"><table class="table compact"><thead><tr><th>Spieler</th><th class="num">Wert</th><th class="num">Mein Max</th><th></th></tr></thead><tbody>
            ${targets.map(t => `<tr data-name="${e(t.name)}"><td><div class="cbb-name">${e(t.name)}</div><div class="cbb-tags"><span class="muted">${e(t.school)} · ${e(t.cls)} · ${e(t.pos)}</span></div></td>
              <td class="num">${money(m.live(t))}</td>
              <td class="num"><input class="cbb-input cbb-price" type="number" min="1" step="1" value="${planned(t)}" data-plan aria-label="Max-Gebot für ${e(t.name)}"></td>
              <td><button type="button" class="cbb-linkbtn" data-drop title="Ziel entfernen">✕</button></td></tr>`).join('')}
            </tbody></table></div>` : `<div class="empty"><div class="empty-emoji">☆</div><div class="empty-title">Noch keine Ziele</div><div class="empty-text">Auf dem Board mit ☆ markieren — hier siehst du dann, ob das Budget aufgeht.</div></div>`}
        </section>
        <section class="card">
          <div class="card-head"><h2>Budget-Check</h2></div>
          <div class="cbb-check">
            <div class="cbb-line"><span>Budget übrig</span><strong>${money(me.left)}</strong></div>
            <div class="cbb-line"><span>Ziele zum Max (${targets.length})</span><strong>− ${money(sum)}</strong></div>
            <div class="cbb-line total"><span>Bleibt für ${Math.max(0, restSpots)} weitere Plätze</span><strong class="${ok ? 'up' : 'down'}">${money(restMoney)}</strong></div>
            <div class="cbb-meter"><span style="width:${Math.min(100, Math.max(0, sum / Math.max(1, me.left) * 100)).toFixed(1)}%"></span></div>
            <p class="small ${ok ? 'muted' : 'down'}">${restSpots < 0 ? `Mehr Ziele (${targets.length}) als freie Plätze (${me.spotsLeft}).` : ok ? `Ø ${money(restSpots ? restMoney / restSpots : 0)} pro restlichem Platz. ${restSpots && restMoney / restSpots < 2 ? 'Der Rest wird ein $1-Kader — geht, aber dann bitte ohne Fehlgriffe oben.' : ''}` : `Geht nicht auf: Für ${restSpots} Plätze brauchst du mindestens ${money(restSpots)} (je $1).`}</p>
          </div>
          <div class="card-head"><h2>Was kostet was?</h2><span class="muted small">Live-Werte</span></div>
          <div class="table-wrap flat"><table class="table compact"><thead><tr><th>Tier</th><th class="num">frei</th><th class="num">Ø</th><th class="num">Spanne</th></tr></thead><tbody>
            ${tierStats.map(s => `<tr><td>${e(s.t.label)}</td><td class="num">${s.n}</td><td class="num">${money(s.avg)}</td><td class="num muted">${s.n ? (s.lo === s.hi ? money(s.lo) : money(s.lo) + '–' + money(s.hi)) : '–'}</td></tr>`).join('')}
          </tbody></table></div>
          <p class="small muted cbb-pad">Dein Anteil am Geld der Liga: <b>${ui.num(share * 100, 1)} %</b>. Wer genau seinen Anteil ausgibt, bekommt im Schnitt Spieler im Wert von ${money(me.left)} — mehr ist nur über Schnäppchen drin (Spieler, die unter „Wert“ weggehen).</p>
        </section>
      </div>
      <section class="card cbb-tips">
        <div class="card-head"><h2>Faustregeln für dein Budget</h2></div>
        <ul>
          <li><b>Max-Gebot = Restbudget − (offene Plätze − 1).</b> Jeder Platz kostet mindestens $1 — das ist dein hartes Limit (gerade ${money(me.maxBid)}).</li>
          <li><b>2025 gingen 132 von 287 Spielern für $1 weg</b>, die Top 10 kosteten zusammen ${money(d.CBB_NIL_2025.slice(0, 10).reduce((a, x) => a + x.price, 0))} (27 % des Geldes). Geld sammelt sich oben — Breite ist billig.</li>
          <li><b>Ein Franchise Star kostet realistisch ${money(tierStats[0].lo)}–${money(tierStats[0].hi)}.</b> Mit ${money(me.left)} für ${me.spotsLeft} Plätze heißt das: ein Star + sonst fast nur $1–5-Spieler. Zwei Stars gehen sich mit eurem Budget kaum aus.</li>
          <li><b>Startable-Tier ist das Preis-Leistungs-Sweet-Spot:</b> ${tierStats[3].n} Spieler, Ø ${money(tierStats[3].avg)}. Hier entscheiden die meisten Auktionen über den Kader.</li>
          <li><b>Teams mit wenig Budget pro Platz</b> (siehe Budgets) können bei Top-Spielern nicht mitgehen — gegen sie reicht oft ein früher, fairer Bid.</li>
          <li><b>24-Stunden-Regel:</b> Wer zuletzt bietet, gewinnt nach 24h ohne Konter. Nicht in jedem Thread mitbieten — Ziele festlegen und dort bis zum Limit gehen.</li>
        </ul>
      </section>`;
  }
  function mountPlan(root, ctx) {
    root.addEventListener('change', ev => {
      const inp = ev.target.closest('[data-plan]'); if (!inp) return;
      const st = load(ctx); st.targets[inp.closest('tr').dataset.name] = Math.max(1, Math.round(Number(inp.value) || 1));
      save(ctx, st); ctx.refresh();
    });
    root.addEventListener('click', ev => {
      if (!ev.target.closest('[data-drop]')) return;
      const st = load(ctx); delete st.targets[ev.target.closest('tr').dataset.name]; save(ctx, st); ctx.refresh();
    });
  }

  // ============================================================
  //  3) Budgets
  // ============================================================
  function renderTeams(ctx) {
    const { data: d, ui } = ctx, e = ui.esc;
    const st = load(ctx), m = market(d, st);
    const teams = m.teams.slice().sort((a, b) => b.left - a.left || b.perSpot - a.perSpot);
    const maxLeft = Math.max(...teams.map(t => t.left));
    return `<div class="page-head"><h1 class="page-title display">🏦 Budgets</h1>
        <div class="page-sub">${teams.length} Teams · ${money(m.money)} übrig für ${m.spots} Plätze
        <span class="explain">Max-Gebot = Restbudget minus $1 für jeden weiteren offenen Platz — mehr kann ein Team auf einen einzelnen Spieler nicht bieten. $/Platz zeigt, wer sich viele teure Spieler leisten kann.</span></div></div>
      <div class="table-wrap" data-share="Budgets NIL-Auktion"><table class="table compact"><thead><tr>
        <th>Team</th><th class="num">Plätze</th><th class="num">Budget</th><th class="num">Zuschläge</th><th>Rest</th><th class="num">Ø / Platz</th><th class="num">Max-Gebot</th>
      </tr></thead><tbody>
      ${teams.map(t => `<tr class="${t.name === d.CBB_MY_TEAM ? 'cbb-mine' : ''}"><td class="strong">${e(t.name)}${t.name === d.CBB_MY_TEAM ? ' <small class="muted">(du)</small>' : ''}</td>
        <td class="num">${t.spotsLeft}${t.won.length ? `<small class="muted"> / ${t.spots}</small>` : ''}</td>
        <td class="num">${money(t.budget)}</td>
        <td class="num">${t.won.length ? `${t.won.length} · ${money(t.spent)}` : '<span class="muted">–</span>'}</td>
        <td><div class="cbb-barcell"><span class="cbb-bar" style="width:${(t.left / maxLeft * 100).toFixed(1)}%"></span><b>${money(t.left)}</b></div></td>
        <td class="num">${money(t.perSpot)}</td>
        <td class="num strong">${money(t.maxBid)}</td></tr>`).join('')}
      </tbody></table></div>
      ${Object.keys(st.sold).length ? `<section class="card cbb-log"><div class="card-head"><h2>Zuschläge</h2><span class="muted small">${Object.keys(st.sold).length}</span></div>
        <div class="table-wrap flat"><table class="table compact"><thead><tr><th>Spieler</th><th>Team</th><th class="num">Preis</th><th class="num">Wert</th><th class="num">Δ</th></tr></thead><tbody>
        ${Object.entries(st.sold).map(([n, s]) => { const p = d.CBB_POOL.find(x => x.name === n) || { value: s.price }; const dlt = s.price - p.value; return `<tr><td>${e(n)}</td><td>${e(s.team)}</td><td class="num">${money(s.price)}</td><td class="num muted">${money(p.value)}</td><td class="num ${dlt > 0 ? 'down' : dlt < 0 ? 'up' : ''}">${dlt ? (dlt > 0 ? '+' : '') + dlt : '±0'}</td></tr>`; }).join('')}
        </tbody></table></div></section>` : ''}`;
  }

  // ============================================================
  //  4) Preise 2025
  // ============================================================
  function curveSvg(prices) {
    const W = 720, H = 220, L = 36, B = 22, T = 10, R = 8, n = prices.length, max = Math.ceil(Math.max(...prices) / 20) * 20;
    const x = i => L + (i / (n - 1)) * (W - L - R), y = v => T + (1 - v / max) * (H - T - B);
    const grid = [];
    for (let v = 0; v <= max; v += 20) grid.push(`<line class="cbb-grid" x1="${L}" x2="${W - R}" y1="${y(v)}" y2="${y(v)}"/><text class="cbb-ax" x="${L - 6}" y="${y(v) + 4}" text-anchor="end">$${v}</text>`);
    [1, 50, 100, 150, 200, 250].filter(r => r <= n).forEach(r => grid.push(`<text class="cbb-ax" x="${x(r - 1)}" y="${H - 6}" text-anchor="middle">${r}</text>`));
    const path = prices.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('');
    const area = `${path}L${x(n - 1)},${y(0)}L${x(0)},${y(0)}Z`;
    return `<svg class="cbb-curve" viewBox="0 0 ${W} ${H}" role="img" aria-label="Zuschlagspreise 2025, absteigend sortiert" data-curve>
      ${grid.join('')}<path class="cbb-area" d="${area}"/><path class="cbb-line" d="${path}"/>
      <line class="cbb-cross" data-cross y1="${T}" y2="${H - B}" x1="-10" x2="-10"/><circle class="cbb-dot" data-dot r="4" cx="-10" cy="-10"/>
      <rect data-hit x="${L}" y="${T}" width="${W - L - R}" height="${H - T - B}" fill="transparent"/></svg>
      <div class="cbb-tip" data-tip hidden></div>`;
  }
  function renderNil(ctx) {
    const { data: d, ui } = ctx, e = ui.esc, N = d.CBB_NIL_2025;
    const total = N.reduce((a, x) => a + x.price, 0);
    const by = {};
    N.forEach(x => { const t = by[x.team] || (by[x.team] = { team: x.team, n: 0, sum: 0, top: x }); t.n++; t.sum += x.price; if (x.price > t.top.price) t.top = x; });
    const teams = Object.values(by).sort((a, b) => b.sum - a.sum);
    const buckets = [['$100+', 100, 1e9], ['$50–99', 50, 99], ['$30–49', 30, 49], ['$20–29', 20, 29], ['$10–19', 10, 19], ['$2–9', 2, 9], ['$1', 1, 1]]
      .map(([l, a, b]) => { const xs = N.filter(x => x.price >= a && x.price <= b); return { l, n: xs.length, sum: xs.reduce((s, x) => s + x.price, 0) }; });
    return `<div class="page-head"><h1 class="page-title display">📊 NIL-Preise 2025</h1>
        <div class="page-sub">${N.length} Zuschläge · ${money(total)} ausgegeben · ${Object.keys(by).length} Teams
        <span class="explain">So hat die Liga letztes Jahr tatsächlich geboten — die wichtigste Grundlage für die Werte 2026.</span></div></div>
      <section class="card cbb-chartcard" data-share="NIL-Preise 2025">
        <div class="card-head"><h2>Preis nach Zuschlags-Rang</h2><span class="muted small">teuerster links</span></div>
        <div class="cbb-chartwrap">${curveSvg(N.map(x => x.price))}</div>
        <div class="cbb-buckets">${buckets.map(b => `<div><small>${b.l}</small><strong>${b.n}</strong><span>${Math.round(b.sum / total * 100)} % des Geldes</span></div>`).join('')}</div>
      </section>
      <div class="two-col">
        <section class="card"><div class="card-head"><h2>Pro Team</h2></div>
          <div class="table-wrap flat"><table class="table compact"><thead><tr><th>Team</th><th class="num">Spieler</th><th class="num">Summe</th><th>Teuerster</th></tr></thead><tbody>
          ${teams.map(t => `<tr><td class="strong">${e(t.team)}</td><td class="num">${t.n}</td><td class="num">${money(t.sum)}</td><td>${e(t.top.name)} <small class="muted">${money(t.top.price)}</small></td></tr>`).join('')}
          </tbody></table></div></section>
        <section class="card"><div class="card-head"><h2>Alle Zuschläge</h2><input type="search" class="cbb-input" data-nilq placeholder="Suche …" aria-label="Suche"></div>
          <div class="table-wrap flat cbb-scroll"><table class="table compact"><thead><tr><th class="num">#</th><th>Spieler</th><th>Team</th><th class="num">$</th></tr></thead><tbody data-nilrows>
          ${N.map((x, i) => `<tr data-s="${e((x.name + ' ' + x.school + ' ' + x.team).toLowerCase())}"><td class="num muted">${i + 1}</td><td>${e(x.name)} <small class="muted">${e(x.cls)}/${e(x.pos)} · ${e(x.school)}</small></td><td>${e(x.team)}</td><td class="num strong">${x.price}</td></tr>`).join('')}
          </tbody></table></div></section>
      </div>`;
  }
  function mountNil(root, ctx) {
    const N = ctx.data.CBB_NIL_2025;
    const q = root.querySelector('[data-nilq]');
    q.addEventListener('input', () => { const v = q.value.trim().toLowerCase(); root.querySelectorAll('[data-nilrows] tr').forEach(tr => { tr.hidden = !!v && !tr.dataset.s.includes(v); }); });
    const svg = root.querySelector('[data-curve]'), tip = root.querySelector('[data-tip]');
    const hit = svg.querySelector('[data-hit]'), cross = svg.querySelector('[data-cross]'), dot = svg.querySelector('[data-dot]');
    const W = 720, L = 36, R = 8, H = 220, T = 10, B = 22, max = Math.ceil(N[0].price / 20) * 20;
    function move(ev) {
      const r = svg.getBoundingClientRect(), sx = (ev.clientX - r.left) / r.width * W;
      const i = Math.max(0, Math.min(N.length - 1, Math.round((sx - L) / (W - L - R) * (N.length - 1))));
      const cx = L + i / (N.length - 1) * (W - L - R), cy = T + (1 - N[i].price / max) * (H - T - B);
      cross.setAttribute('x1', cx); cross.setAttribute('x2', cx); dot.setAttribute('cx', cx); dot.setAttribute('cy', cy);
      tip.hidden = false;
      tip.innerHTML = `<b>#${i + 1} · $${N[i].price}</b><br>${ctx.ui.esc(N[i].name)}<br><small>${ctx.ui.esc(N[i].team)}</small>`;
      const px = cx / W * r.width;
      tip.style.left = Math.min(r.width - 170, Math.max(0, px + 12)) + 'px';
      tip.style.top = Math.max(0, cy / H * r.height - 20) + 'px';
    }
    hit.addEventListener('pointermove', move);
    hit.addEventListener('pointerdown', move);
    hit.addEventListener('pointerleave', () => { tip.hidden = true; cross.setAttribute('x1', -10); cross.setAttribute('x2', -10); dot.setAttribute('cx', -10); });
  }

  // ============================================================
  //  5) Regeln & Rechnung
  // ============================================================
  function renderHelp(ctx) {
    const { data: d, ui } = ctx, e = ui.esc;
    const spots = d.CBB_TEAMS.reduce((a, t) => a + t.spots, 0), cash = d.CBB_TEAMS.reduce((a, t) => a + t.budget, 0);
    const n25 = d.CBB_NIL_2025.length, c25 = d.CBB_NIL_2025.reduce((a, x) => a + x.price, 0);
    return `<div class="page-head"><h1 class="page-title display">📜 Regeln & Rechnung</h1></div>
      <section class="card cbb-tips"><div class="card-head"><h2>NIL-Regeln</h2></div><ul>${d.CBB_RULES.map(r => `<li>${e(r)}</li>`).join('')}</ul></section>
      <section class="card cbb-tips"><div class="card-head"><h2>So entsteht der „Wert“</h2></div><ol>
        <li><b>Reihenfolge:</b> Dizzles Tiers aus dem Reiter „2026“ (Franchise Star → Bench). Innerhalb eines Tiers: Fantasy-Rang 2025-26 (Reiter „2025-26 Player Rankings“), Bonus für Draft-Prospects (fett), leichter Bonus für Transfers; Freshmen ohne Rang landen je nach Draft-Status in der Mitte. Warnhinweise (verletzt, Spielberechtigung unklar, Wechsel nicht bestätigt) drücken den Wert um 30–60 %.</li>
        <li><b>Marktkurve 2025:</b> Die echten Zuschläge 2025 (${n25} Spieler, ${money(c25)}) nach Preis sortiert. Spieler Nr. 1 im Board 2026 bekommt den Preis von Zuschlag Nr. 1 aus 2025 usw.</li>
        <li><b>Hochrechnung aufs Geld 2026:</b> Es zählt nur Geld über $1 (jeder Platz kostet mindestens $1). 2025: ${money(c25 - n25)} „freies“ Geld, 2026: ${money(cash - spots)} → Faktor ${ui.num((cash - spots) / (c25 - n25), 2)}.</li>
        <li><b>Mischung:</b> Wert = ½ Marktkurve + ½ Position in Dizzles Tier-Spanne, danach so skaliert, dass die besten ${spots} Spieler zusammen genau das Geld der Liga (${money(cash)}) kosten. Alle anderen: $1.</li>
        <li><b>Limit</b> = Wert + 15 % (höchstens dein Max-Gebot). Bis dahin mitgehen, wenn du den Spieler wirklich willst; darüber zahlt man drauf.</li>
        <li><b>Live-Wert:</b> Sobald Zuschläge eingetragen sind, vergleicht die Seite Restgeld und Restwert. Gehen Spieler billig weg, bleibt mehr Geld für den Rest → alle übrigen Werte steigen (und umgekehrt).</li>
      </ol>
      <p class="small muted cbb-pad">Das ist eine Schätzung, kein Orakel: Die Liga hat 2026 mehr Teams (${d.CBB_TEAMS.length}) und neue Manager — die ersten Zuschläge zeigen schnell, ob sie teurer oder billiger bieten. Dafür ist der Live-Wert da.</p></section>
      <section class="card cbb-tips"><div class="card-head"><h2>Legende</h2></div><ul>
        <li><span class="cbb-tag dp">🎓 Draft</span> fett in Dizzles Liste — NBA-Draft-Prospect (Upside, aber evtl. nur ein Jahr am College).</li>
        <li><span class="cbb-tag up">⬆ Transfer</span> kursiv — Wechsel zu einem stärkeren Programm.</li>
        <li><span class="cbb-tag down">⬇ Transfer</span> unterstrichen — Wechsel zu einem kleineren Programm (oft größere Rolle).</li>
        <li><span class="cbb-tag warn">⚠</span> Hinweis aus der Liste (verletzt, Spielberechtigung, Sternchen-Markierung).</li>
      </ul></section>`;
  }

  // Seiten in einen eigenen Wrapper packen: mount() hängt Listener an den
  // Wrapper (wird bei jedem Neuzeichnen ersetzt), nicht an #nativeMain.
  const wrap = r => ctx => `<div class="cbb-page" data-cbb>${r(ctx)}</div>`;
  const inner = mt => (root, ctx) => mt(root.querySelector('[data-cbb]') || root, ctx);
  const base = { applies: { sport: ['cbb'] }, data: ['nil-auction'] };
  MFHFB.pages.register({ ...base, id: 'home', section: 'home', label: 'NIL-Auktion', icon: '💰', title: () => 'NIL-Auktion', render: wrap(renderBoard), mount: inner(mountBoard) });
  MFHFB.pages.register({ ...base, id: 'auctionplan', section: 'home', label: 'Mein Plan', icon: '🎯', title: () => 'Mein Plan', render: wrap(renderPlan), mount: inner(mountPlan) });
  MFHFB.pages.register({ ...base, id: 'auctionteams', section: 'teams', label: 'Budgets', icon: '🏦', title: () => 'Budgets', render: wrap(renderTeams) });
  MFHFB.pages.register({ ...base, id: 'nil2025', section: 'draft', label: 'Preise 2025', icon: '📊', title: () => 'NIL-Preise 2025', render: wrap(renderNil), mount: inner(mountNil) });
  MFHFB.pages.register({ ...base, id: 'auctionhelp', section: 'league', label: 'Regeln & Rechnung', icon: '📜', title: () => 'Regeln & Rechnung', render: wrap(renderHelp) });
})();
