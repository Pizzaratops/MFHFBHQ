// ============================================================
//  MFHFB HQ — Seiten-Registry + gemeinsame UI-Helfer
// ============================================================
//  Jedes Tool registriert sich selbst:
//
//    MFHFB.pages.register({
//      id: 'standings',            // Route: #/<liga>/standings
//      section: 'standings',       // Gruppe in der Navigation (SECTIONS)
//      label: 'Standings', icon: '📈',
//      applies: { sport: ['nfl'], scoring: ['points'] },  // optional
//      data: ['teams', 'weekly-scores'],                  // Datendateien
//      title: ctx => '…',          // optional, dynamischer Seitentitel
//      render(ctx) { return '<html>'; }                   // oder Promise
//    });
//
//  applies filtert gegen die Liga-Config (sport, scoring, format,
//  platform). Fehlt ein Feld, gilt das Tool für alle Werte. So bekommt
//  eine Redraft-Liga keine Dynasty-Tools, eine Kategorien-Liga keine
//  Punkte-Standings usw. — ohne dass ein Tool Liga-Namen kennt.
//
//  ctx = { league, data, params, href(page, ...params), ui }
// ============================================================

window.MFHFB = window.MFHFB || {};

MFHFB.pages = (function () {
  const SECTIONS = [
    { key: 'home', label: 'Übersicht', icon: '🏠' },
    { key: 'standings', label: 'Standings', icon: '📈' },
    { key: 'matchups', label: 'Matchups', icon: '⚔️' },
    { key: 'teams', label: 'Teams', icon: '🧍' },
  ];
  const list = [];

  function register(page) {
    if (!page.id || !page.render) throw new Error('Seite braucht id + render');
    list.push(page);
  }

  function applies(page, league) {
    const a = page.applies || {};
    return Object.keys(a).every(k => !a[k] || a[k].includes(league[k]));
  }

  function forLeague(league) {
    const pages = list.filter(p => applies(p, league));
    return SECTIONS
      .map(s => ({ ...s, pages: pages.filter(p => p.section === s.key) }))
      .filter(s => s.pages.length);
  }

  function find(league, id) {
    return list.find(p => p.id === id && applies(p, league)) || null;
  }

  return { register, forLeague, find, SECTIONS };
})();

MFHFB.ui = {
  esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },
  empty(title, text, emoji) {
    const e = MFHFB.ui.esc;
    return `<div class="empty"><div class="empty-emoji">${emoji || '📭'}</div><div class="empty-title">${e(title)}</div><div class="empty-text">${e(text || '')}</div></div>`;
  },
  num(x, d = 1) { return (Math.round(x * 10 ** d) / 10 ** d).toFixed(d); },
  signed(x, d = 1) { return (x >= 0 ? '+' : '') + MFHFB.ui.num(x, d); },

  // Team-Lookup über LEAGUE_TEAMS; unbekannte IDs bekommen einen Fallback.
  teamIndex(teams) {
    const idx = {};
    (teams || []).forEach(t => { idx[t.id] = t; });
    return id => idx[id] || { id, name: id, emoji: '🏈', owner: '' };
  },

  // Aktuellste Saison + deren gespielte Wochen aus WEEKLY_SCORES.
  seasonWeeks(weekly) {
    const seasons = Object.keys(weekly || {}).sort();
    const season = seasons[seasons.length - 1] || null;
    const weeks = season ? Object.keys(weekly[season] || {}).map(Number).filter(w => (weekly[season][w] || []).length).sort((a, b) => a - b) : [];
    return { season, weeks };
  },

  // Tabelle nach W-L (Punkte als Tiebreak) — identisch zur Logik der
  // bisherigen Seiten (renderStandings in BWP/DOPE js/app.js).
  // Median-Spiel: Ligen mit Sleeper "league_average_match" (DOPE) haben pro
  // Woche zusätzlich ein Ergebnis gegen den Liga-Median (e.medianResult
  // 'W'/'L'/'T'), das in die Bilanz zählt — genau wie in Sleeper. Ligen ohne
  // das Feld (BWP) sind davon nicht betroffen.
  standings(weekly, season, uptoWeek) {
    const totals = {};
    for (let w = 1; w <= uptoWeek; w++) {
      ((weekly[season] || {})[w] || []).forEach(e => {
        const t = totals[e.teamId] || (totals[e.teamId] = { teamId: e.teamId, pf: 0, pa: 0, wins: 0, losses: 0, ties: 0 });
        t.pf += e.points; t.pa += e.opponentPoints;
        if (e.points > e.opponentPoints) t.wins++;
        else if (e.points < e.opponentPoints) t.losses++;
        else t.ties++;
        if (e.medianResult === 'W') t.wins++;
        else if (e.medianResult === 'L') t.losses++;
        else if (e.medianResult === 'T') t.ties++;
      });
    }
    return Object.values(totals).sort((a, b) => (b.wins - a.wins) || (b.pf - a.pf));
  },

  hasMedian(weekly, season) {
    return Object.values((weekly || {})[season] || {}).some(list => (list || []).some(e => e.medianResult));
  },

  record(r) { return `${r.wins}-${r.losses}${r.ties ? '-' + r.ties : ''}`; },

  // Spielpaare einer Woche aus WEEKLY_SCORES (jede Paarung steht dort
  // zweimal, aus Sicht beider Teams) → einmal pro Paarung.
  pairs(entries) {
    const seen = new Set();
    const out = [];
    (entries || []).forEach(e => {
      const k = [e.teamId, e.opponentId].sort().join('|');
      if (seen.has(k)) return;
      seen.add(k);
      out.push({ a: e.teamId, ap: e.points, b: e.opponentId, bp: e.opponentPoints });
    });
    return out;
  },
};
