// ============================================================
//  Tool (NBA): Rollen & Matchups — Auswertungen aus dem Play-by-Play
// ============================================================
//  #/<liga>/insights
//
//  Daten: sports/nba/data/pbp-insights.js (PBP_INSIGHTS, täglich von
//  scripts/build-pbp-insights.py). Quelle: Play-by-Play von Ramiro Bentes
//  (github.com/ramirobentes/nba_data) — sein Projekt, nicht unseres.
//
//  Tabs:
//   🩹 Wer profitiert?  Wenn ein Star fehlt: wer bekommt Minuten und Stats
//   📈 Rollen-Radar     Starts, Minuten-Trend, Crunchtime, Garbage Time
//   🏟️ Teams            Pace, Gegner-Faktoren je Kategorie, Blowouts
//   🛌 Back-to-backs     Wer am 2. Abend eher pausiert
//   🟨 Fouls & Würfe     Foul-Risiko, Wurfprofil (nur Info)
//  Backtests und Formeln: sports/nba/README.md → „PbP-Insights“.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const TABS = [['profit', '🩹 Wer profitiert?'], ['roles', '📈 Rollen-Radar'], ['teams', '🏟️ Teams'], ['b2b', '🛌 Back-to-backs'], ['fouls', '🟨 Fouls & Würfe']];
  const CATS = [['pts', 'PTS', 1], ['reb', 'REB', 1], ['ast', 'AST', 1], ['tpm', '3PM', 2], ['stl', 'STL', 2], ['blk', 'BLK', 2], ['tov', 'TO', 2]];
  const defaults = { tab: 'profit', star: null, free: false, q: '', team: '', sort: null, dir: -1 };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('insights', {}) });
  const fmt = (v, d = 1) => (v == null ? '—' : Number(v).toFixed(d).replace('.', ','));
  const sgn = (v, d = 1) => (v == null ? '—' : (v > 0 ? '+' : v < 0 ? '−' : '±') + Math.abs(v).toFixed(d).replace('.', ','));
  const pct = v => (v == null ? '—' : Math.round(v * 100) + ' %');
  const cls = (v, inv) => (v == null || Math.abs(v) < 0.05 ? '' : (v > 0) !== !!inv ? 'up' : 'down');

  // Fantasy-Besitzer + Verletzungsstatus aus den Kadern dieser Liga
  function leagueIndex(ctx) {
    const nba = N(), owner = nba.ownerIndex(ctx.data), inj = new Map();
    nba.leagueTeams(ctx.data, true).forEach(t => nba.roster(ctx.data, t.id).forEach(p => { if (p.inj) inj.set(nba.key(p.name), p.inj); }));
    return { owner: n => owner(n), inj: n => inj.get(nba.key(n)) || null };
  }
  const ownerTag = (ctx, L, name) => {
    const t = L.owner(name), e = ctx.ui.esc;
    return t ? `<span class="pi-own" title="${e(t.name)}">${e(t.abbrev || N().initials(t.name))}</span>` : '<span class="nba-tag fa">frei</span>';
  };

  // ---------- 🩹 Wer profitiert? ----------
  function profit(ctx, st, P, L) {
    const e = ctx.ui.esc, nba = N();
    const stars = Object.entries(P.stars || {}).map(([name, s]) => ({ name, ...s, inj: L.inj(name) }));
    if (!stars.length) return ctx.ui.empty('Noch keine Daten', 'Profiteure entstehen aus Vorsaison + laufender Saison.', '🩹');
    stars.sort((a, b) => (!!b.inj - !!a.inj) || a.team.localeCompare(b.team) || b.min - a.min);
    const sel = stars.find(s => s.name === st.star) || stars.find(s => s.inj) || stars[0];
    const opts = stars.map(s => `<option value="${e(s.name)}"${s.name === sel.name ? ' selected' : ''}>${s.inj ? '🚑 ' : ''}${e(s.team)} · ${e(s.name)}</option>`).join('');
    const injured = stars.filter(s => s.inj === 'OUT' || s.inj === 'SUSP');
    const quick = injured.length ? `<div class="pi-quick"><b>Fällt gerade aus (laut ESPN-Kadern dieser Liga):</b> ${injured.map(s => {
      const best = (s.top || []).find(r => !L.owner(r.y));
      return `<button type="button" class="pi-chip" data-star="${e(s.name)}">${e(s.name)}${best ? ` → <span class="up">${e(best.y)}</span> frei` : ''}</button>`;
    }).join(' ')}</div>` : '';
    const SC = ctx.league.scoring === 'points' && ctx.data.LEAGUE_INFO ? ctx.data.LEAGUE_INFO.scoring : null; // Points-Liga: Wert = Δ Fantasy-Punkte
    if (SC) (sel.top || []).forEach(r => { r.val = CATS.reduce((a, [k]) => a + (r[k] || 0) * (SC[k] || 0), 0); });
    if (SC) (sel.top || []).sort((a, b) => b.val - a.val);
    const rows = (sel.top || []).filter(r => !st.free || !L.owner(r.y)).map(r => `<tr>
      <td class="strong">${e(r.y)}</td><td>${ownerTag(ctx, L, r.y)}</td>
      <td class="num">${fmt(r.min)} → <b>${fmt(r.min + r.dMin)}</b></td><td class="num ${cls(r.dMin)}">${sgn(r.dMin)}</td>
      ${CATS.map(([k, , d]) => `<td class="num ${cls(r[k], k === 'tov')}">${sgn(r[k], d)}</td>`).join('')}
      <td class="num"><span class="pi-val ${r.val >= (SC ? 4 : 2) ? 'hi' : r.val >= (SC ? 2 : 1) ? 'mid' : ''}">${sgn(r.val)}</span></td>
      <td class="num muted small" title="Minuten von ihm ohne ${e(sel.name)} auf dem Feld · ganze Spiele ohne ${e(sel.name)}">${r.minOff} · ${r.gMissed}</td></tr>`).join('');
    return `${quick}
      <div class="controls"><select class="tr-select pi-starsel" data-starsel aria-label="Star">${opts}</select>
        <button type="button" class="seg-btn${st.free ? ' on' : ''}" data-free aria-pressed="${st.free}">${st.free ? '☑' : '☐'} nur freie Spieler</button></div>
      <p class="small muted">Wenn <b>${e(sel.name)}</b> (${e(sel.team)}, ${fmt(sel.min)} Min.) ausfällt: erwartete Änderung pro Spiel. ${SC ? '„Δ FP“ = erwartete Fantasy-Punkte mehr pro Spiel mit eurem Scoring (Wurfquoten-Anteil nicht enthalten).' : '„Wert“ = Summe der Kategorie-Änderungen in Liga-Standardabweichungen (TO zählt negativ).'}</p>
      <div class="table-wrap"><table class="table compact pi-table"><thead><tr><th>Spieler</th><th>Team</th><th class="num">Min. jetzt → neu</th><th class="num">Δ Min</th>
        ${CATS.map(([, l]) => `<th class="num">Δ ${l}</th>`).join('')}<th class="num" title="${SC ? 'Δ Fantasy-Punkte pro Spiel mit eurem Scoring (ohne FGM/FGA/FTM/FTA-Anteil)' : 'Summe in Standardabweichungen'}">${SC ? 'Δ FP' : 'Wert'}</th><th class="num" title="Minuten ohne den Star auf dem Feld · verpasste Spiele des Stars (Stichprobe)">Basis</th></tr></thead>
        <tbody>${rows || `<tr><td colspan="12">${ctx.ui.empty('Keine Treffer', 'Filter „nur freie“ ausschalten.', '🔎')}</td></tr>`}</tbody></table></div>
      <p class="explain small">So gerechnet: Minuten-Zuwachs aus einem Modell, das an 2.121 echten Ausfällen (2023–2026) geeicht ist – Spieler mit wenig Minuten gewinnen am meisten, die On/Off-Verteilung im Team zählt mit, die Summe ist auf die Minuten des Stars gedeckelt. Fehler gegenüber „keine Änderung“ −19 %. Stats aus den Raten ohne den Star auf dem Feld (gedämpft, 600 Min.). Vorsaison zählt nur, wenn beide noch im selben Team spielen.</p>`;
  }

  // ---------- 📈 Rollen-Radar ----------
  function roles(ctx, st, P, L) {
    const e = ctx.ui.esc, q = String(st.q || '').toLowerCase().trim();
    let list = Object.entries(P.players || {}).map(([name, p]) => ({ name, ...p, d: p.trend10 != null && p.minLive != null ? p.trend10 - p.minLive : null,
      newStarter: p.startLast3 >= 2 && p.gp >= 3 && (p.starts - p.startLast3) / Math.max(1, p.gp - Math.min(3, p.gp)) < 0.34 }))
      .filter(p => p.gp >= 1 && (!st.team || p.team === st.team) && (!st.free || !L.owner(p.name)) && (!q || p.name.toLowerCase().includes(q)));
    const key = st.sort || 'd';
    const val = p => ({ d: p.d, min: p.min, trend10: p.trend10, clutchMin: p.clutchMin, clutchShare: p.clutchShare, gtMinShare: p.gtMinShare, starts: p.starts / p.gp, name: p.name }[key]);
    list.sort((a, b) => { const av = val(a), bv = val(b); if (av == null) return 1; if (bv == null) return -1; return typeof av === 'string' ? av.localeCompare(bv) * -st.dir : ((bv - av) * (st.dir === -1 ? 1 : -1) || (b.trend10 || 0) - (a.trend10 || 0)); });
    const th = (k, l, t) => `<th class="num${key === k ? ' sorted' : ''}"${t ? ` title="${t}"` : ''}><button type="button" class="th-sort" data-sort="${k}">${l}${key === k ? (st.dir === -1 ? ' ▼' : ' ▲') : ''}</button></th>`;
    const rows = list.slice(0, 250).map(p => `<tr>
      <td class="strong">${e(p.name)}${p.newStarter ? ' <span class="nba-tag rk" title="Startet seit Kurzem (≥ 2 der letzten 3 Spiele, vorher selten)">NEU S5</span>' : ''}${p.clutchShare >= 0.6 && p.gp >= 3 ? ' <span class="pi-fire" title="Steht in engen Schlussphasen meist auf dem Feld">🔥</span>' : ''}</td>
      <td>${e(p.team)}</td><td>${ownerTag(ctx, L, p.name)}</td>
      <td class="num">${p.gp}</td><td class="num">${p.starts}/${p.gp}</td><td class="num muted">${fmt(p.minPrior)}</td><td class="num">${fmt(p.min)}</td><td class="num">${fmt(p.last3)}</td>
      <td class="num strong">${fmt(p.trend10)}</td><td class="num ${cls(p.d)}">${sgn(p.d)}</td>
      <td class="num">${fmt(p.clutchMin)}</td><td class="num">${pct(p.clutchShare)}</td><td class="num muted">${pct(p.gtMinShare)}</td></tr>`).join('');
    const teams = [...new Set(Object.values(P.players || {}).map(p => p.team))].sort();
    return `<div class="controls"><select class="tr-select" data-team aria-label="NBA-Team"><option value="">Alle NBA-Teams</option>${teams.map(t => `<option${st.team === t ? ' selected' : ''}>${t}</option>`).join('')}</select>
        <input type="search" class="search" placeholder="Spieler …" value="${e(st.q)}" data-q aria-label="Suchen">
        <button type="button" class="seg-btn${st.free ? ' on' : ''}" data-free aria-pressed="${st.free}">${st.free ? '☑' : '☐'} nur freie Spieler</button></div>
      <div class="table-wrap"><table class="table compact pi-table"><thead><tr><th><button type="button" class="th-sort" data-sort="name">Spieler</button></th><th>NBA</th><th>Team</th><th class="num">Sp.</th>${th('starts', 'Starts')}
        <th class="num" title="Minuten pro Spiel in der Vorsaison">Vorj.</th>${th('min', 'Min.')}<th class="num" title="Schnitt der letzten 3 Spiele">Letzte 3</th>
        ${th('trend10', 'Trend 10', 'Erwartete Minuten der nächsten 10 Spiele: Saison (gedämpft Richtung Vorjahr) + 0,3 × Abstand der letzten 3 Spiele')}${th('d', 'Δ', 'Trend minus Saison-Schnitt (gedämpft) — positiv = Rolle wächst')}
        ${th('clutchMin', 'Crunch', 'Minuten pro Spiel in engen Schlussphasen (4. Viertel/OT, ≤ 6 Punkte)')}${th('clutchShare', 'Crunch %', 'Anteil der engen Schlussphasen seines Teams, in denen er spielte')}${th('gtMinShare', 'Garbage', 'Anteil seiner Minuten in Garbage Time (nur Info — der Backtest fand keinen Vorteil, sie abzuwerten)')}
      </tr></thead><tbody>${rows}</tbody></table></div>
      <p class="explain small">Backtest 2023–2026: Die letzten 3 Spiele sagen die Minuten der nächsten 10 besser voraus als der Saisonschnitt allein (Fehler −4 %, β 0,3). Starts und Crunchtime bringen darüber hinaus kaum etwas (&lt; 0,5 %) und stehen hier als Kontext. Die Live Projections nutzen denselben Trend über den Saison-Rest (β 0,2).</p>`;
  }

  // ---------- 🏟️ Teams ----------
  function teams(ctx, st, P) {
    const e = ctx.ui.esc, nba = N();
    const list = Object.entries(P.teams || {}).map(([t, v]) => ({ t, ...v })).sort((a, b) => (b.paceF || 0) - (a.paceF || 0));
    const heat = f => (f == null ? '' : nba.heat((f - 1) * 20));
    const rows = list.map(v => `<tr><td class="strong"><a class="nba-team-link" href="${ctx.href('nbateams', v.t)}">${e(v.t)}</a></td>
      <td class="num">${v.gp}</td><td class="num">${fmt(v.pace)}</td><td class="num ${cls(v.net)}">${sgn(v.net)}</td>
      ${CATS.map(([k]) => { const f = v.allowF ? v.allowF[k] : null; return `<td class="num" style="${heat(f == null ? null : (k === 'tov' ? 2 - f : f))}">${f == null ? '—' : sgn((f - 1) * 100, 0) + ' %'}</td>`; }).join('')}
      <td class="num">${v.blowRate == null || v.gp < 5 ? '<span class="muted" title="ab 5 Spielen">—</span>' : pct(v.blowRate)}</td><td class="num muted">${v.gp < 5 ? '—' : fmt(v.gtMin)}</td></tr>`).join('');
    return `<p class="small muted">Gegner-Faktoren: wie viel mehr (grün) oder weniger (rot) ein Team in der Kategorie zulässt als der Liga-Schnitt, je Possession; dazu die Pace. Am Saisonanfang gedämpft Richtung Vorsaison (halb zurück zur Mitte). Farbe immer aus deiner Sicht: grün = gut für deine Spieler (bei TO also: hier verliert man weniger Bälle). Blowouts und Garbage Time ab 5 Spielen.</p>
      <div class="table-wrap"><table class="table compact pi-table"><thead><tr><th>Team</th><th class="num">Sp.</th><th class="num" title="Possessions pro Spiel (gedämpft)">Pace</th><th class="num" title="Punkte-Differenz pro Spiel (gedämpft)">Netto</th>
        ${CATS.map(([, l]) => `<th class="num" title="zugelassen ggü. Liga">${l}</th>`).join('')}<th class="num" title="Anteil Spiele mit ≥ 20 Punkten Differenz (diese Saison)">Blowouts</th><th class="num" title="Garbage-Time-Minuten pro Spiel">Garbage</th></tr></thead>
        <tbody>${rows}</tbody></table></div>
      <p class="explain small">Backtest 2023–2026 je Spiel: Pace + Gegner-Faktor senken den Fehler nur um 0,2–0,4 % (ein einzelnes Spiel streut stark), aber in jeder Kategorie in dieselbe Richtung – über eine Woche mit 3–4 Spielen ist das ein echter Unterschied. Blowouts (≥ 20): 14 % bei gleich starken Teams, 30 % bei großem Gefälle; Starter mit ≥ 30 Min. spielen dann ~4,8 Min. weniger. Der Matchup-Planer rechnet beides ein.</p>`;
  }

  // ---------- 🛌 Back-to-backs ----------
  function b2b(ctx, st, P, L) {
    const e = ctx.ui.esc, lg = P.meta.b2bLeague || {};
    let list = Object.entries(P.players || {}).filter(([, p]) => p.b2b).map(([name, p]) => ({ name, ...p }))
      .filter(p => (!st.free || !L.owner(p.name)) && (!st.team || p.team === st.team)).sort((a, b) => b.b2b.extra - a.b2b.extra);
    const rows = list.slice(0, 200).map(p => `<tr><td class="strong">${e(p.name)}</td><td>${e(p.team)}</td><td>${ownerTag(ctx, L, p.name)}</td>
      <td class="num">${fmt(p.min)}</td><td class="num strong ${p.b2b.extra >= 0.1 ? 'down' : ''}">${sgn(p.b2b.extra * 100, 0)} %</td><td class="num muted">${p.b2b.miss}/${p.b2b.n}</td></tr>`).join('');
    const teams = [...new Set(list.map(p => p.team))].sort();
    return `<div class="controls"><select class="tr-select" data-team aria-label="NBA-Team"><option value="">Alle NBA-Teams</option>${teams.map(t => `<option${st.team === t ? ' selected' : ''}>${t}</option>`).join('')}</select>
        <button type="button" class="seg-btn${st.free ? ' on' : ''}" data-free aria-pressed="${st.free}">${st.free ? '☑' : '☐'} nur freie Spieler</button></div>
      <p class="small muted">Stammspieler (≥ 24 Min.) fehlen am 2. Abend eines Back-to-backs zu <b>${pct(lg.b2b)}</b>, sonst zu <b>${pct(lg.reg)}</b>. „Extra“ = wie viel häufiger <i>dieser</i> Spieler am 2. Abend fehlt als sonst – aus den letzten zwei Saisons, gedämpft Richtung Liga-Schnitt (25 Abende). Die Neigung hält sich über die Jahre (r 0,31).</p>
      <div class="table-wrap"><table class="table compact pi-table"><thead><tr><th>Spieler</th><th>NBA</th><th>Team</th><th class="num">Min.</th><th class="num" title="Zusätzliche Fehlquote am 2. Abend">Extra</th><th class="num" title="Verpasste 2. Abende / alle 2. Abende (2 Saisons)">Historie</th></tr></thead>
      <tbody>${rows}</tbody></table></div>
      <p class="explain small">Der Matchup-Planer zieht diese Extra-Quote an 2. Abenden von den erwarteten Spielen ab (nur bei gesunden Spielern; Verletzte stehen ohnehin auf OUT).</p>`;
  }

  // ---------- 🟨 Fouls & Würfe ----------
  function fouls(ctx, st, P, L) {
    const e = ctx.ui.esc;
    const list = Object.entries(P.players || {}).map(([name, p]) => ({ name, ...p })).filter(p => p.pf36 != null && p.min >= 12 && (!st.free || !L.owner(p.name)))
      .sort((a, b) => (b.pf36 || 0) - (a.pf36 || 0));
    const rows = list.slice(0, 200).map(p => `<tr><td class="strong">${e(p.name)}</td><td>${e(p.team)}</td><td>${ownerTag(ctx, L, p.name)}</td>
      <td class="num">${fmt(p.min)}</td><td class="num strong ${p.pf36 >= 5 ? 'down' : ''}">${fmt(p.pf36)}</td><td class="num">${p.pf5 || ''}</td><td class="num">${p.fouledOut || ''}</td>
      <td class="num">${pct(p.rimRate)}</td><td class="num">${pct(p.tpaRate)}</td><td class="num">${pct(p.ftRate)}</td><td class="num">${pct(p.uastShare)}</td></tr>`).join('');
    return `<div class="controls"><button type="button" class="seg-btn${st.free ? ' on' : ''}" data-free aria-pressed="${st.free}">${st.free ? '☑' : '☐'} nur freie Spieler</button></div>
      <div class="table-wrap"><table class="table compact pi-table"><thead><tr><th>Spieler</th><th>NBA</th><th>Team</th><th class="num">Min.</th><th class="num" title="Fouls pro 36 Minuten">PF/36</th><th class="num" title="Spiele mit ≥ 5 Fouls">≥5 PF</th><th class="num" title="Ausgefoult">Aus</th>
        <th class="num" title="Anteil der Würfe am Ring (Layup, Dunk, Tip)">Ring</th><th class="num" title="Anteil Dreier an allen Würfen">3PA</th><th class="num" title="Freiwürfe je Feldwurf">FT-Rate</th><th class="num" title="Anteil eigener Treffer ohne Assist">ohne Ast.</th></tr></thead>
      <tbody>${rows}</tbody></table></div>
      <p class="explain small">Fouls: hohe Raten kosten Minuten (und damit Stats), vor allem bei jungen Centern. Wurfprofil nur als Info: Der Backtest 2013–2025 (1.411 junge Spieler) fand darin <b>keinen</b> Vorhersagewert für Dynasty-Ausbrüche über das hinaus, was Wert, Minuten und Alter schon sagen.</p>`;
  }

  function render(ctx) {
    const { data, ui } = ctx, e = ui.esc;
    N().init(data);
    const P = data.PBP_INSIGHTS;
    if (!P) return ui.empty('Noch keine Play-by-Play-Daten', 'pbp-insights.js fehlt – der nba-sync baut sie, sobald die Saison läuft.', '🔬');
    const st = getState(ctx), L = leagueIndex(ctx);
    const body = { profit, roles, teams, b2b, fouls }[st.tab] || profit;
    return `<div class="page-head"><h1 class="page-title display">🔬 Rollen &amp; Matchups</h1>
        <div class="page-sub">Aus dem Play-by-Play · Stand ${e(P.meta.through)} · ${P.meta.games} Spiele dieser Saison + Vorsaison</div></div>
      <div class="seg pi-tabs" role="tablist">${TABS.map(([k, l]) => `<button type="button" class="seg-btn${st.tab === k ? ' active' : ''}" data-tab="${k}" role="tab" aria-selected="${st.tab === k}">${l}</button>`).join('')}</div>
      <div class="pi-body">${body(ctx, st, P, L)}</div>
      <p class="note cp-credits"><strong>Quelle:</strong> Play-by-Play von <strong>Ramiro Bentes</strong> (<a href="https://github.com/ramirobentes/nba_data" target="_blank" rel="noopener">nba_data</a>) – sein Projekt, nicht unseres; wir rechnen nur daraus.
        <button type="button" class="credits-link" data-credits>Alle Quellen &amp; Dank</button></p>`;
  }

  function mount(root, ctx) {
    const save = patch => { ctx.store.setJSON('insights', { ...getState(ctx), ...patch }); ctx.refresh(); };
    root.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => save({ tab: b.dataset.tab, sort: null, team: '' })));
    const s = root.querySelector('[data-starsel]'); if (s) s.addEventListener('change', () => save({ star: s.value }));
    root.querySelectorAll('[data-star]').forEach(b => b.addEventListener('click', () => save({ star: b.dataset.star })));
    root.querySelectorAll('[data-free]').forEach(b => b.addEventListener('click', () => save({ free: !getState(ctx).free })));
    const t = root.querySelector('[data-team]'); if (t) t.addEventListener('change', () => save({ team: t.value }));
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('change', () => save({ q: q.value }));
    root.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => {
      const st = getState(ctx), k = b.dataset.sort;
      save(st.sort === k || (!st.sort && k === 'd') ? { sort: k, dir: -st.dir } : { sort: k, dir: -1 });
    }));
  }

  MFHFB.pages.register({
    id: 'insights', section: 'players', label: 'Rollen & Matchups', icon: '🔬', applies: { sport: ['nba'] },
    data: ['teams', '?rosters-live', '?sport:aliases', '?sport:pbp-insights', '?league-info'],
    title: () => 'Rollen & Matchups', render, mount,
  });
})();
