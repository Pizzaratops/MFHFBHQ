#!/usr/bin/env node
// ============================================================
//  PROSPECT_RECRUIT — Recruiting-Daten je College-Scouting-Spieler
// ============================================================
//  Ordnet jedem Spieler aus college-scouting.js (rawId = CFBD-athleteId)
//  seinen Recruiting-Eintrag aus college-recruiting.js zu und schreibt eine
//  kleine Datei fürs Frontend + das Modell-Training (offline, kein Key).
//
//  Zuordnung (Abdeckung 17.11.2026: ~86 %):
//   1. athleteId direkt
//   2. sonst Name + College (eines seiner Teams), Jahrgang 0–6 Jahre vor
//      der ersten erfassten Saison
//   3. sonst Name allein, wenn im Zeitfenster eindeutig
//  hs = Jahr des High-School-Abschlusses (JUCO: Jahrgang − 2).
//  Draft-berechtigt ab Draft hs + 3 (NFL-Regel).
//
//  Ausgabe: PROSPECT_RECRUIT = { rawId: [hs, rating, stars] }
//  Ohne Treffer kein Eintrag (Frontend fällt auf die FBS-Untergrenze zurück).
// ============================================================

const fs = require('fs');
const path = require('path');
const D = path.join(__dirname, '..', 'data');

function load(file, name) {
  return new Function(fs.readFileSync(path.join(D, file), 'utf8') + `;return ${name}`)();
}
const nk = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');
const tn = s => String(s || '').toLowerCase().replace(/[^a-z]/g, '');

function build() {
  const C = load('college-scouting.js', 'COLLEGE_SCOUTING');
  const RC = load('college-recruiting.js', 'COLLEGE_RECRUITING');
  const P = {};
  Object.keys(C.seasons).forEach(y => Object.values(C.seasons[y]).forEach(list => list.forEach(r => {
    const k = String(r.rawId);
    const p = P[k] || (P[k] = { id: k, name: r.name, first: +y, teams: new Set() });
    p.first = Math.min(p.first, +y); p.teams.add(tn(r.team));
  })));
  const byName = {};
  [...Object.values(RC.byId), ...RC.noId].forEach(r => { (byName[nk(r.n)] = byName[nk(r.n)] || []).push(r); });
  const out = {}; const how = { id: 0, nameTeam: 0, name: 0, none: 0 };
  Object.values(P).forEach(p => {
    let r = RC.byId[p.id], h = 'id';
    if (!r) {
      const c = (byName[nk(p.name)] || []).filter(x => x.y <= p.first && x.y >= p.first - 6);
      const t = c.filter(x => p.teams.has(tn(x.c)));
      if (t.length === 1) { r = t[0]; h = 'nameTeam'; } else if (c.length === 1) { r = c[0]; h = 'name'; }
    }
    if (!r) { how.none++; return; }
    how[h]++;
    out[p.id] = [r.t === 'JUCO' ? r.y - 2 : r.y, r.r, r.s];
  });
  return { out, how, n: Object.keys(P).length };
}

if (require.main === module) {
  const { out, how, n } = build();
  fs.writeFileSync(path.join(D, 'prospect-recruit.js'), `// ============================================================
//  PROSPECT_RECRUIT — HS-Jahrgang + Recruiting-Rating je Spieler
// ============================================================
//  GENERIERT von sports/nfl/scripts/build-prospect-recruit-map.js aus
//  college-scouting.js + college-recruiting.js. Nicht von Hand editieren.
//  rawId -> [hs (Jahr HS-Abschluss), rating (0–1, 247 Composite), stars]
//  Zuordnung: ${JSON.stringify(how)} von ${n} Spielern
// ============================================================

const PROSPECT_RECRUIT = ${JSON.stringify(out)};
`);
  console.log('prospect-recruit.js', how, 'von', n);
}
module.exports = { build };
