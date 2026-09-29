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

MFHFB.pages.register({
  id: 'home',
  section: 'home',
  label: 'Übersicht',
  icon: '🏠',
  applies: { scoring: ['points'] },
  data: ['teams', 'weekly-scores', '?draft', '?sport:matchup-advantage'],
  mount(root) {
    const els = [...root.querySelectorAll('[data-cd]')];
    if (!els.length) return;
    const tick = () => {
      if (!els[0].isConnected) { clearInterval(iv); return; }
      els.forEach(el => { el.innerHTML = cdHtml(new Date(Number(el.dataset.cd))); });
    };
    const iv = setInterval(tick, 1000);
  },
  render({ league, data, href, ui }) {
    const e = ui.esc;
    const { season, weeks } = ui.seasonWeeks(data.WEEKLY_SCORES);
    const team = ui.teamIndex(data.LEAGUE_TEAMS);
    const head = `
      <div class="page-head">
        <h1 class="page-title display">${e(league.emoji)} ${e(league.name)}</h1>
        <div class="page-sub">${e(league.platform)} · ${e(league.format)} · ${(data.LEAGUE_TEAMS || []).length} Teams${season ? ' · Saison ' + e(season) : ''}</div>
      </div>` + countdowns(data, e, league);
    if (!weeks.length) return head + ui.empty('Saison noch nicht gestartet', 'Sobald die ersten Ergebnisse da sind, erscheint hier die Übersicht.', '🏈');

    const lastWeek = weeks[weeks.length - 1];
    const top = ui.standings(data.WEEKLY_SCORES, season, lastWeek).slice(0, 5);
    const games = ui.pairs(data.WEEKLY_SCORES[season][lastWeek]);
    const pts = games.flatMap(g => [{ id: g.a, p: g.ap }, { id: g.b, p: g.bp }]).sort((a, b) => b.p - a.p);
    const best = pts[0], worst = pts[pts.length - 1];

    return head + `
      <div class="stat-row">
        <div class="stat"><div class="stat-label">Gespielt</div><div class="stat-value display">W${lastWeek}</div></div>
        <div class="stat"><div class="stat-label">Top-Score W${lastWeek}</div><div class="stat-value display">${ui.num(best.p)}</div><div class="stat-sub">${e(team(best.id).emoji || '')} ${e(team(best.id).name)}</div></div>
        <div class="stat"><div class="stat-label">Low-Score W${lastWeek}</div><div class="stat-value display">${ui.num(worst.p)}</div><div class="stat-sub">${e(team(worst.id).emoji || '')} ${e(team(worst.id).name)}</div></div>
      </div>
      <div class="two-col">
        <section class="card">
          <div class="card-head"><h2>Tabelle</h2><a href="${href('standings')}">Alle →</a></div>
          <table class="table compact"><tbody>
            ${top.map((r, i) => { const t = team(r.teamId); return `<tr>
              <td class="num rank">${i + 1}</td>
              <td><a class="team-cell" href="${href('teams', r.teamId)}"><span class="team-emoji">${e(t.emoji || '')}</span><span class="team-name">${e(t.name)}</span></a></td>
              <td class="num strong">${ui.record(r)}</td><td class="num muted">${ui.num(r.pf)}</td></tr>`; }).join('')}
          </tbody></table>
        </section>
        <section class="card">
          <div class="card-head"><h2>Woche ${lastWeek}</h2><a href="${href('matchups', lastWeek)}">Details →</a></div>
          <div class="mini-games">
            ${games.map(g => { const a = team(g.a), b = team(g.b); return `<div class="mini-game">
              <span class="${g.ap > g.bp ? 'strong' : 'muted'}">${e(a.emoji || '')} ${e(a.name)}</span><span class="num ${g.ap > g.bp ? 'strong' : 'muted'}">${ui.num(g.ap)}</span>
              <span class="${g.bp > g.ap ? 'strong' : 'muted'}">${e(b.emoji || '')} ${e(b.name)}</span><span class="num ${g.bp > g.ap ? 'strong' : 'muted'}">${ui.num(g.bp)}</span>
            </div>`; }).join('')}
          </div>
        </section>
      </div>`;
  },
});
})();
