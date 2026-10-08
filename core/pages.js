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
//      data: ['teams', 'weekly-scores'],                  // Datendateien (oder league => [...])
//      when: league => !!league.x,                        // optional, Zusatzbedingung
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
    { key: 'draft', label: 'Draft & Picks', icon: '📋' },
    { key: 'trade', label: 'Trade', icon: '⚖️' },
    { key: 'dynasty', label: 'Dynasty', icon: '🏆' },
    { key: 'players', label: 'Spieler', icon: '🧮' },
    { key: 'nfl', label: 'NFL', icon: '🏈' },
    { key: 'nba', label: 'NBA', icon: '🏀' },
    { key: 'league', label: 'Liga', icon: '📜' },
    { key: 'extra', label: 'Extras', icon: '🧰' },
  ];
  const list = [];

  function register(page) {
    if (!page.id || !page.render) throw new Error('Seite braucht id + render');
    list.push(page);
  }

  function applies(page, league) {
    const a = page.applies || {};
    if (page.when && !page.when(league)) return false;   // optionale Zusatzbedingung (z.B. Liga hat ein Saison-Archiv)
    if (league.pages && !league.pages.includes(page.id)) return false; // Liga mit fester Seitenliste (z. B. Fantrax World Cup)
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
    // Sortierung nach Win% (Unentschieden = halber Sieg, wie ESPN/Sleeper),
    // Tiebreak Punkte. Ohne Unentschieden identisch zu "nach Siegen".
    return Object.values(totals).sort((a, b) => ((b.wins + b.ties / 2) - (a.wins + a.ties / 2)) || (b.pf - a.pf));
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

// ============================================================
//  Erklärtexte als Tooltip (ⓘ) — 01.10.2026
// ============================================================
//  Seiten markieren erklärende Texte mit class="explain" (ganzes Element
//  oder <span class="explain"> innerhalb einer Zeile). explainify() nimmt
//  sie aus dem Fluss und hängt ihren Text als Tooltip an die nächste
//  Überschrift: Karten-Überschrift (.card-head h2/h3), sonst der Seitentitel.
//  Direkt nutzbar auch: MFHFB.ui.tip('Label', 'Text') → <span class="info-tip">.
//  Anzeige über einen einzigen schwebenden Kasten (position: fixed), damit
//  Karten mit overflow:hidden nichts abschneiden. Hover am Desktop,
//  Antippen am Handy (Fokus).
// ============================================================
MFHFB.ui.tipText = html => String(html || '').replace(/<[^>]+>/g, '').replace(/[ \t\r\n]+/g, ' ').trim();
MFHFB.ui.tip = (label, text) => `<span class="info-tip" tabindex="0" data-tip="${MFHFB.ui.esc(MFHFB.ui.tipText(text))}">${label}<i class="tip-i no-share" aria-hidden="true">ⓘ</i></span>`;
MFHFB.ui.addTip = function (h, text) {
  if (!h || !text) return;
  const cur = h.getAttribute('data-tip');
  if (cur && cur.split('\n\n').includes(text)) return;
  h.setAttribute('data-tip', cur ? cur + '\n\n' + text : text);
  if (!h.classList.contains('info-tip')) {
    h.classList.add('info-tip');
    if (!h.hasAttribute('tabindex')) h.tabIndex = 0;
    h.insertAdjacentHTML('beforeend', '<i class="tip-i no-share" aria-hidden="true">ⓘ</i>');
  }
};
MFHFB.ui.explainify = function (root) {
  if (!root) return;
  root.querySelectorAll('.explain').forEach(node => {
    // Legenden aus mehreren <span>s: Teile mit „ · “ trennen statt zusammenkleben
    const kids = [...node.childNodes];
    const raw = node.children.length > 1 && kids.every(c => c.nodeType === 1 || !c.textContent.trim())
      ? [...node.children].map(c => c.textContent.trim()).filter(Boolean).join(' · ')
      : node.textContent;
    const text = raw.replace(/[ \t\r\n]+/g, ' ').replace(/^[\s·:–—,]+|[\s·:–—,]+$/g, '').trim();
    const card = node.closest('.card');
    let h = card && card.querySelector('.card-head h2, .card-head h3, .card-head .card-title');
    if (!h) h = root.querySelector('.page-head .page-title, .page-title');
    if (text) MFHFB.ui.addTip(h, text);
    const parent = node.parentNode;
    node.remove();
    // Trenner aufräumen, leere Zeilen entfernen
    if (parent && parent.nodeType === 1 && !parent.classList.contains('explain')) {
      const html = parent.innerHTML;
      const clean = html.replace(/(\s*·\s*){2,}/g, ' · ').replace(/^\s*·\s*/, '').replace(/\s*·\s*$/, '');
      if (clean !== html) parent.innerHTML = clean;
      if (!parent.textContent.trim() && !parent.querySelector('a,button,input,select,img,svg')) parent.remove();
    }
  });
};
(function tipFloater() {
  let box = null, cur = null;
  const hide = () => { if (box) box.hidden = true; cur = null; };
  function show(el) {
    const text = el.getAttribute('data-tip'); if (!text) return;
    if (!box) { box = document.createElement('div'); box.className = 'tip-float'; box.setAttribute('role', 'tooltip'); document.body.appendChild(box); }
    box.textContent = text; box.hidden = false; cur = el;
    const r = el.getBoundingClientRect(), bw = Math.min(420, window.innerWidth - 24);
    box.style.maxWidth = bw + 'px';
    const left = Math.max(12, Math.min(r.left, window.innerWidth - box.offsetWidth - 12));
    let top = r.bottom + 8;
    if (top + box.offsetHeight > window.innerHeight - 8) top = Math.max(8, r.top - box.offsetHeight - 8);
    box.style.left = left + 'px'; box.style.top = top + 'px';
  }
  document.addEventListener('mouseover', e => { const t = e.target.closest && e.target.closest('.info-tip[data-tip]'); if (t && t !== cur) show(t); });
  document.addEventListener('mouseout', e => { const t = e.target.closest && e.target.closest('.info-tip[data-tip]'); if (t && !t.contains(e.relatedTarget) && document.activeElement !== t) hide(); });
  document.addEventListener('focusin', e => { const t = e.target.closest && e.target.closest('.info-tip[data-tip]'); if (t) show(t); });
  document.addEventListener('focusout', e => { if (e.target === cur) hide(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') hide(); });
  window.addEventListener('scroll', hide, true);
  window.addEventListener('resize', hide);
})();
