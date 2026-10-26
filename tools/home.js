// ============================================================
//  Tool: Liga-Übersicht (Startseite einer Liga)
//  Kompakt: Countdowns (nur anstehende Termine), Top der Tabelle +
//  Ergebnisse der letzten gespielten Woche.
//  Countdowns (neu gebaut nach renderCountdowns, BWP app.js): Keeper Lock
//  und Draft Day aus der Draft-Datei, dazu der nächste NFL-Kickoff aus
//  dem Matchup-Advantage-Spielplan (nflverse-Zeiten = US-Ostküste,
//  hier in Ortszeit umgerechnet). Vergangene Termine werden ausgeblendet.
// ============================================================

(function () {
// Uhrzeit "YYYY-MM-DD" + "HH:MM" in America/New_York → Date (sommerzeitsicher)
function easternToDate(day, time) {
  const [y, m, d] = day.split('-').map(Number), [hh, mm] = (time || '13:00').split(':').map(Number);
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).formatToParts(new Date(guess));
  const g = t => Number(parts.find(p => p.type === t).value);
  const asNY = Date.UTC(g('year'), g('month') - 1, g('day'), g('hour'), g('minute'));
  return new Date(guess + (guess - asNY));
}

function countdownTargets(data, league) {
  const out = [];
  ((league && league.countdowns) || []).forEach(c => out.push({ label: c.label, at: new Date(c.iso) }));
  const d = MFHFB.draft ? MFHFB.draft.normalize(data) : {};
  if (d.keeperLock) out.push({ label: '🔒 Keeper Lock', at: new Date(d.keeperLock) });
  if (d.date) out.push({ label: `📋 Draft Day${d.season ? ' ' + d.season : ''}`, at: new Date(d.date) });
  const MA = data.MATCHUP_ADVANTAGE;
  if (MA && MA.schedule) {
    const next = Object.keys(MA.schedule).map(Number).sort((a, b) => a - b)
      .flatMap(w => MA.schedule[w].filter(g => g.homeScore == null && g.day).map(g => ({ w, g, at: easternToDate(g.day, g.time) })))
      .filter(x => x.at > new Date()).sort((a, b) => a.at - b.at)[0];
    if (next) out.push({ label: `🏈 Kickoff Woche ${next.w}`, sub: `${next.g.away} @ ${next.g.home}`, at: next.at });
  }
  return out.filter(t => !isNaN(t.at) && t.at > new Date()).sort((a, b) => a.at - b.at);
}

function cdParts(at) {
  const s = Math.max(0, Math.floor((at - Date.now()) / 1000));
  return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
}
const cdHtml = at => { const p = cdParts(at); const seg = (v, l) => `<span class="cd-seg"><b>${v}</b><small>${l}</small></span>`; return seg(p.d, 'Tage') + seg(p.h, 'Std') + seg(p.m, 'Min') + seg(p.s, 'Sek'); };
const fmtAt = at => at.toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: 'long' }) + ', ' + at.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' Uhr';

function countdowns(data, e, league) {
  const ts = countdownTargets(data, league);
  if (!ts.length) return '';
  return `<div class="cd-row">${ts.map((t, i) => `<div class="cd-card"><div class="cd-label">${e(t.label)}${t.sub ? ` <span>${e(t.sub)}</span>` : ''}</div><div class="cd-timer" data-cd="${t.at.getTime()}">${cdHtml(t.at)}</div><div class="cd-date">${fmtAt(t.at)}</div></div>`).join('')}</div>`;
}

// Für andere Sportarten wiederverwendbar (NBA-Übersicht):
//  MFHFB.ui.countdowns([{ label, sub?, at: Date }]) → HTML (nur künftige Termine)
//  MFHFB.ui.mountCountdowns(root) → Sekundentakt starten
MFHFB.ui.countdowns = targets => {
  const ts = targets.filter(t => t.at && !isNaN(t.at) && t.at > new Date()).sort((a, b) => a.at - b.at);
  const e = MFHFB.ui.esc;
  return ts.length ? `<div class="cd-row">${ts.map(t => `<div class="cd-card"><div class="cd-label">${e(t.label)}${t.sub ? ` <span>${e(t.sub)}</span>` : ''}</div><div class="cd-timer" data-cd="${t.at.getTime()}">${cdHtml(t.at)}</div><div class="cd-date">${fmtAt(t.at)}</div></div>`).join('')}</div>` : '';
};
MFHFB.ui.mountCountdowns = root => {
  const els = [...root.querySelectorAll('[data-cd]')];
  if (!els.length) return;
  const iv = setInterval(() => {
    if (!els[0].isConnected) { clearInterval(iv); return; }
    els.forEach(el => { el.innerHTML = cdHtml(new Date(Number(el.dataset.cd))); });
  }, 1000);
};

// ============================================================
//  Schnell-Übersicht (NFL-Ligen, seit 26.10.2026) – wie die NBA-Startseite:
//  Countdowns · ⚔️ Matchups der aktuellen Woche (+ Vorschau nächste Woche) ·
//  👑 Royal Rumble (ein Team gegen die ganze Liga je Woche, mit Positions-
//  Punkten, wo vorhanden) · 📈 Ranking (Tabelle / All-Play / Totals, sortierbar) ·
//  rechts 🏅 beste Spieler (Saison / letzte Woche / letzte 3, alle oder Waiver,
//  nach Position).
//  Daten: WEEKLY_SCORES, SCHEDULE, ROSTERS_LIVE, PLAYER_SEASON_STATS,
//  POSITION_POINTS (nur DOPE).
// ============================================================
const NQ_POS = [['qbPts', 'QB'], ['rbPts', 'RB'], ['wrPts', 'WR'], ['tePts', 'TE'], ['kPts', 'K'], ['defPts', 'DEF']];
const nqKey = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[.'’]/g, '').replace(/\b(jr|sr|ii|iii|iv)\b/g, '').replace(/\s+/g, ' ').trim();
function nqState(ctx) { return { rr: ctx.league.myTeam || null, rrWeek: null, rank: 'table', sort: 'pf', dir: -1, best: 'season', bestOwn: 'all', pos: '', ...ctx.store.getJSON('nflquick', {}) }; }

function nqMatchups(ctx, team, weekly, season, last) {
  const { ui, href, data } = ctx, e = ui.esc;
  const games = ui.pairs((weekly[season] || {})[last]);
  const next = data.SCHEDULE && data.SCHEDULE[season] && data.SCHEDULE[season][last + 1];
  const card = g => { const a = team(g.a), b = team(g.b); return `<a class="qk-m" href="${href('matchups', last)}">
      <span class="qk-mt${g.ap > g.bp ? ' lead' : ''}">${e(a.emoji || '')} ${e(a.name)}</span><span class="qk-ms"><b>${ui.num(g.ap)} – ${ui.num(g.bp)}</b></span><span class="qk-mt r${g.bp > g.ap ? ' lead' : ''}">${e(b.name)} ${e(b.emoji || '')}</span></a>`; };
  return `<section class="qk-sec"><div class="qk-head"><h2>⚔️ Woche ${last}</h2><a class="small" href="${href('matchups', last)}">Details →</a></div><div class="qk-matchups">${games.map(card).join('')}</div>
    ${next && next.length ? `<div class="qk-head" style="margin-top:12px"><h2>🔜 Woche ${last + 1}</h2></div><div class="qk-matchups">${next.map(m => { const a = team(m.away), h = team(m.home); return `<div class="qk-m"><span class="qk-mt">${e(a.emoji || '')} ${e(a.name)}</span><span class="qk-ms muted">@</span><span class="qk-mt r">${e(h.name)} ${e(h.emoji || '')}</span></div>`; }).join('')}</div>` : ''}</section>`;
}

function nqRumble(ctx, team, weekly, season, weeks, st) {
  const { ui, data } = ctx, e = ui.esc;
  const wk = weeks.includes(st.rrWeek) ? st.rrWeek : weeks[weeks.length - 1];
  const list = (weekly[season] || {})[wk] || [];
  const pts = {}; list.forEach(x => { pts[x.teamId] = x.points; });
  const ids = (data.LEAGUE_TEAMS || []).map(t => t.id).filter(id => pts[id] != null);
  if (!ids.length) return '';
  const me = ids.includes(st.rr) ? st.rr : ids[0];
  const PP = data.POSITION_POINTS && data.POSITION_POINTS[season] && data.POSITION_POINTS[season][wk];
  const hasPos = !!(PP && PP[me]);
  // Saison-All-Play des gewählten Teams
  let aw = 0, al = 0;
  weeks.forEach(w => { const L = (weekly[season] || {})[w] || []; const mine = L.find(x => x.teamId === me); if (!mine) return; L.forEach(x => { if (x.teamId === me) return; if (mine.points > x.points) aw++; else if (mine.points < x.points) al++; }); });
  const rows = ids.filter(id => id !== me).sort((a, b) => pts[a] - pts[b]);
  const wins = rows.filter(id => pts[me] > pts[id]).length;
  const cls = (k, v) => { if (!hasPos) return ''; const m = PP[me][k] || 0; return m === v ? 'tie' : m > v ? 'win' : 'loss'; };
  const row = (id, isMe) => { const t = team(id), p = PP && PP[id]; return `<tr class="${isMe ? 'qk-me' : ''}"><td><span class="team-emoji">${e(t.emoji || '')}</span> ${e(t.name)}</td>
    <td class="num strong ${isMe ? '' : pts[me] > pts[id] ? 'up' : pts[me] < pts[id] ? 'down' : ''}">${ui.num(pts[id])}</td><td class="num">${isMe ? '—' : pts[me] > pts[id] ? 'W' : pts[me] < pts[id] ? 'L' : 'T'}</td>
    ${hasPos ? NQ_POS.map(([k]) => `<td class="num qk-c ${isMe ? '' : cls(k, p ? p[k] : 0)}">${p ? ui.num(p[k] || 0) : '—'}</td>`).join('') : ''}</tr>`; };
  return `<section class="qk-sec"><div class="qk-head"><h2>👑 Royal Rumble</h2>
      <select class="tr-select" data-nqrr>${ids.map(id => `<option value="${id}"${id === me ? ' selected' : ''}>${e(team(id).name)}</option>`).join('')}</select>
      <select class="tr-select" data-nqrrweek>${weeks.slice().reverse().map(w => `<option value="${w}"${w === wk ? ' selected' : ''}>Woche ${w}</option>`).join('')}</select></div>
    <p class="small muted">${e(team(me).name)} gegen jedes Team in Woche ${wk}: <b>${wins}-${rows.length - wins}</b> · Saison All-Play <b>${aw}-${al}</b>.${hasPos ? ' Positionen: grün = mehr Punkte als dieses Team auf der Position.' : ''}</p>
    <div class="table-wrap"><table class="table compact qk-rr"><thead><tr><th>Team</th><th class="num">Punkte</th><th class="num">Erg.</th>${hasPos ? NQ_POS.map(([, l]) => `<th class="num">${l}</th>`).join('') : ''}</tr></thead>
    <tbody>${row(me, true)}${rows.map(id => row(id, false)).join('')}</tbody></table></div></section>`;
}

function nqRanking(ctx, team, weekly, season, weeks, st) {
  const { ui, data } = ctx, e = ui.esc;
  const last = weeks[weeks.length - 1];
  const tabs = `<div class="seg" role="group">${[['table', 'Tabelle'], ['allplay', 'All-Play'], ['totals', 'Totals']].map(([k, l]) => `<button type="button" class="seg-btn${st.rank === k ? ' active' : ''}" data-nqrank="${k}">${l}</button>`).join('')}</div>`;
  const stand = ui.standings(weekly, season, last);
  const T = {};
  stand.forEach(r => { T[r.teamId] = { id: r.teamId, rec: ui.record(r), pf: r.pf, pa: r.pa, wins: r.wins, aw: 0, al: 0, hw: 0, g: 0, max: -Infinity, min: Infinity }; });
  weeks.forEach(w => { const L = (weekly[season] || {})[w] || []; L.forEach(x => { const t = T[x.teamId]; if (!t) return; t.g++; t.max = Math.max(t.max, x.points); t.min = Math.min(t.min, x.points); if (x.points > x.opponentPoints) t.hw++; L.forEach(o => { if (o.teamId === x.teamId) return; if (x.points > o.points) t.aw++; else if (x.points < o.points) t.al++; }); }); });
  const PPs = data.POSITION_POINTS && data.POSITION_POINTS[season];
  if (PPs) Object.values(PPs).forEach(wk => Object.entries(wk).forEach(([id, p]) => { const t = T[id]; if (!t) return; NQ_POS.forEach(([k]) => { t[k] = (t[k] || 0) + (p[k] || 0); }); }));
  const list = Object.values(T).map(t => ({ ...t, ppw: t.g ? t.pf / t.g : 0, apPct: (t.aw + t.al) ? t.aw / (t.aw + t.al) : 0, luck: t.hw - ((t.aw + t.al) ? t.aw / (t.aw + t.al) : 0) * t.g }));
  const cell = (t, k) => `<td><span class="team-emoji">${e(team(t.id).emoji || '')}</span> ${e(team(t.id).name)}</td>`;
  if (st.rank === 'table') return `<section class="qk-sec"><div class="qk-head"><h2>📈 Ranking</h2>${tabs}</div><div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th>Team</th><th class="num">Bilanz</th><th class="num">PF</th><th class="num">PA</th></tr></thead><tbody>
    ${stand.map((r, i) => `<tr><td class="num rank">${i + 1}</td>${cell({ id: r.teamId })}<td class="num strong">${ui.record(r)}</td><td class="num">${ui.num(r.pf)}</td><td class="num muted">${ui.num(r.pa)}</td></tr>`).join('')}</tbody></table></div></section>`;
  if (st.rank === 'allplay') { const L = list.slice().sort((a, b) => b.apPct - a.apPct); return `<section class="qk-sec"><div class="qk-head"><h2>📈 Ranking</h2>${tabs}</div><div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th>Team</th><th class="num">All-Play</th><th class="num">Pct</th><th class="num">Bilanz</th><th class="num" title="Echte H2H-Siege minus All-Play-Erwartung">Glück</th></tr></thead><tbody>
    ${L.map((t, i) => `<tr><td class="num rank">${i + 1}</td>${cell(t)}<td class="num strong">${t.aw}-${t.al}</td><td class="num">${t.apPct.toFixed(3).replace(/^0/, '')}</td><td class="num">${t.rec}</td><td class="num ${t.luck > 0.5 ? 'up' : t.luck < -0.5 ? 'down' : ''}">${t.luck >= 0 ? '+' : '−'}${Math.abs(t.luck).toFixed(1).replace('.', ',')}</td></tr>`).join('')}</tbody></table></div>
    <p class="small muted">All-Play: jede Woche gegen alle Teams gerechnet – wie stark ein Team wirklich punktet, unabhängig vom Spielplan.</p></section>`; }
  const cols = [['pf', 'PF'], ['pa', 'PA'], ['ppw', 'PF/W'], ['max', 'Max'], ['min', 'Min']].concat(PPs ? NQ_POS : []);
  const k = cols.some(c => c[0] === st.sort) ? st.sort : 'pf';
  const L = list.slice().sort((a, b) => ((b[k] || 0) - (a[k] || 0)) * (st.dir === -1 ? 1 : -1));
  return `<section class="qk-sec"><div class="qk-head"><h2>📈 Ranking</h2>${tabs}</div><div class="table-wrap"><table class="table compact qk-tot"><thead><tr><th class="num">#</th><th>Team</th>${cols.map(([c, l]) => `<th class="num${k === c ? ' sorted' : ''}"><button type="button" class="th-sort" data-nqsort="${c}">${l}${k === c ? (st.dir === -1 ? ' ▼' : ' ▲') : ''}</button></th>`).join('')}</tr></thead><tbody>
    ${L.map((t, i) => `<tr><td class="num rank">${i + 1}</td>${cell(t)}${cols.map(([c]) => `<td class="num">${ui.num(Number.isFinite(t[c]) ? t[c] : 0)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
    <p class="small muted">Saison-Summen${PPs ? ' inkl. Punkte je Position' : ''}. Spalte antippen = sortieren.</p></section>`;
}

function nqBest(ctx, weeks, st) {
  const { ui, data, href } = ctx, e = ui.esc;
  const S = data.PLAYER_SEASON_STATS;
  const owner = new Map(); Object.entries(data.ROSTERS_LIVE || {}).forEach(([tid, list]) => (list || []).forEach(p => owner.set(nqKey(p.name), tid)));
  const team = ui.teamIndex(data.LEAGUE_TEAMS);
  const ctrl = `<div class="qk-bctl"><div class="seg" role="group">${[['season', 'Saison Ø'], ['last', 'Letzte Woche'], ['last3', 'Letzte 3']].map(([k, l]) => `<button type="button" class="seg-btn${st.best === k ? ' active' : ''}" data-nqbest="${k}">${l}</button>`).join('')}</div>
    <div class="seg" role="group">${[['all', 'Alle'], ['free', 'Waiver']].map(([k, l]) => `<button type="button" class="seg-btn${st.bestOwn === k ? ' active' : ''}" data-nqown="${k}">${l}</button>`).join('')}</div>
    <div class="seg" role="group">${['', 'QB', 'RB', 'WR', 'TE'].map(p => `<button type="button" class="seg-btn${st.pos === p ? ' active' : ''}" data-nqpos="${p}">${p || 'Alle'}</button>`).join('')}</div></div>`;
  if (!S || !S.players || !S.players.length) return `<aside class="qk-best-col"><h2>🏅 Beste Spieler</h2>${ctrl}<div class="card qk-empty">Noch keine Spielerpunkte.</div></aside>`;
  const lastW = Math.max(...S.players.flatMap(p => Object.keys(p.weeklyPoints || {}).map(Number)));
  const val = p => { const wp = p.weeklyPoints || {}; if (st.best === 'last') return wp[lastW] != null ? wp[lastW] : null; if (st.best === 'last3') { const v = [lastW, lastW - 1, lastW - 2].map(w => wp[w]).filter(x => x != null); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null; } return p.avgPoints; };
  const list = S.players.filter(p => (!st.pos || p.pos === st.pos) && (st.bestOwn !== 'free' || !owner.has(nqKey(p.name))) && (st.best !== 'season' || p.gamesPlayed >= 2)).map(p => ({ p, v: val(p) })).filter(x => x.v != null).sort((a, b) => b.v - a.v).slice(0, 60);
  return `<aside class="qk-best-col"><h2>🏅 Beste Spieler</h2>${ctrl}
    <p class="small muted">${st.best === 'last' ? 'Woche ' + lastW : st.best === 'last3' ? 'Ø Wochen ' + (lastW - 2) + '–' + lastW : 'Ø pro Spiel, Saison'} · Punkte mit eurem Scoring</p>
    <ol class="qk-best">${list.map((x, i) => { const tid = owner.get(nqKey(x.p.name)); const t = tid ? team(tid) : null; return `<li><span class="qk-rk">${i + 1}</span><span class="qk-pn"><b>${e(x.p.name)}</b><small>${e(x.p.pos)} · ${e(x.p.team || '')} · ${x.p.gamesPlayed} Sp.</small></span>
      ${t ? `<span class="pi-own" title="${e(t.name)}">${e(t.emoji || '')}</span>` : '<span class="nba-tag fa">frei</span>'}<span class="qk-sc up">${ui.num(x.v)}</span></li>`; }).join('')}</ol>
    <a class="small" href="${href('players')}">Alle Spieler →</a></aside>`;
}

MFHFB.pages.register({
  id: 'home',
  section: 'home',
  label: 'Übersicht',
  icon: '🏠',
  applies: { scoring: ['points'] },
  data: ['teams', 'weekly-scores', '?draft', '?sport:matchup-advantage', '?rosters-live', '?player-stats', '?position-points', '?schedule'],
  mount(root, ctx) {
    const els = [...root.querySelectorAll('[data-cd]')];
    if (els.length) {
      const tick = () => {
        if (!els[0].isConnected) { clearInterval(iv); return; }
        els.forEach(el => { el.innerHTML = cdHtml(new Date(Number(el.dataset.cd))); });
      };
      const iv = setInterval(tick, 1000);
    }
    if (!ctx) return;
    const save = p => { ctx.store.setJSON('nflquick', { ...nqState(ctx), ...p }); ctx.refresh(); };
    const rr = root.querySelector('[data-nqrr]'); if (rr) rr.addEventListener('change', () => save({ rr: rr.value }));
    const rw = root.querySelector('[data-nqrrweek]'); if (rw) rw.addEventListener('change', () => save({ rrWeek: Number(rw.value) }));
    root.querySelectorAll('[data-nqrank]').forEach(b => b.addEventListener('click', () => save({ rank: b.dataset.nqrank })));
    root.querySelectorAll('[data-nqsort]').forEach(b => b.addEventListener('click', () => { const st = nqState(ctx), k = b.dataset.nqsort; save(st.sort === k ? { dir: -st.dir } : { sort: k, dir: k === 'pa' || k === 'min' ? 1 : -1 }); }));
    root.querySelectorAll('[data-nqbest]').forEach(b => b.addEventListener('click', () => save({ best: b.dataset.nqbest })));
    root.querySelectorAll('[data-nqown]').forEach(b => b.addEventListener('click', () => save({ bestOwn: b.dataset.nqown })));
    root.querySelectorAll('[data-nqpos]').forEach(b => b.addEventListener('click', () => save({ pos: b.dataset.nqpos })));
  },
  render(ctx) {
    const { league, data, ui } = ctx;
    const e = ui.esc;
    const { season, weeks } = ui.seasonWeeks(data.WEEKLY_SCORES);
    const team = ui.teamIndex(data.LEAGUE_TEAMS);
    const head = `
      <div class="page-head">
        <h1 class="page-title display">${e(league.emoji)} ${e(league.name)}</h1>
        <div class="page-sub">${e(league.platform)} · ${e(league.format)} · ${(data.LEAGUE_TEAMS || []).length} Teams${season ? ' · Saison ' + e(season) : ''}${weeks.length ? ' · Woche ' + weeks[weeks.length - 1] : ''}</div>
      </div>` + countdowns(data, e, league);
    if (!weeks.length) return head + ui.empty('Saison noch nicht gestartet', 'Sobald die ersten Ergebnisse da sind, erscheint hier die Übersicht.', '🏈');
    const st = nqState(ctx);
    const last = weeks[weeks.length - 1];
    return head + `<div class="qk-grid"><div class="qk-main">
        ${nqMatchups(ctx, team, data.WEEKLY_SCORES, season, last)}
        ${nqRumble(ctx, team, data.WEEKLY_SCORES, season, weeks, st)}
        ${nqRanking(ctx, team, data.WEEKLY_SCORES, season, weeks, st)}
      </div>${nqBest(ctx, weeks, st)}</div>`;
  },
});
})();
