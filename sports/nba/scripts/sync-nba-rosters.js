#!/usr/bin/env node
// ============================================================
//  NBA-KADER (ESPN) — alle 30 Teams → sports/nba/data/nba-rosters.js
// ============================================================
//  29.10.2026: Referenz „wer steht gerade bei welchem NBA-Team unter
//  Vertrag“ (inkl. Two-Way), z. B. für den Abgleich mit der TTHQ-Dynasty-
//  Liste (fehlende Spieler, falsche Teams). Quelle: ESPN site API
//    /apis/site/v2/sports/basketball/nba/teams          (Team-Liste)
//    /apis/site/v2/sports/basketball/nba/teams/<id>/roster
//  Aus GitHub Actions erreichbar (wie der Scoreboard-Abruf im Daily-Sync).
//
//  Shape: NBA_ROSTERS = { updated, teams: { "BOS": [ { n, id, pos, age, dob, exp }, … ] } }
//  Kürzel kanonisch wie MFHFB.nba.canonTeam (NOR, PHO, WAS, GSW, SAS, NYK, UTA, BKN).
//  Schutz: weniger als 25 Teams oder 350 Spieler → Abbruch ohne Schreiben.
// ============================================================

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'data', 'nba-rosters.js');
const BASE = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba';
const CANON = { NOP: 'NOR', NO: 'NOR', PHX: 'PHO', WSH: 'WAS', GS: 'GSW', SA: 'SAS', NY: 'NYK', UTAH: 'UTA', BRK: 'BKN' };
const canon = a => CANON[String(a || '').toUpperCase()] || String(a || '').toUpperCase();

async function getJson(url) {
  for (let i = 0; i < 4; i++) {
    try { const r = await fetch(url); if (!r.ok) throw new Error('HTTP ' + r.status); const t = await r.text(); return JSON.parse(t); }
    catch (e) { if (i === 3) throw new Error(`${url}: ${e.message}`); await new Promise(r => setTimeout(r, [2000, 5000, 10000][i])); }
  }
}

(async () => {
  const list = await getJson(`${BASE}/teams`);
  const teams = (((list.sports || [])[0] || {}).leagues || [{}])[0].teams || [];
  const out = {};
  for (const { team } of teams) {
    const r = await getJson(`${BASE}/teams/${team.id}/roster`);
    const athletes = (r.athletes || []).flatMap(a => (a.items ? a.items : [a]));
    out[canon(team.abbreviation)] = athletes.map(a => ({
      n: a.displayName || a.fullName, id: a.id, pos: (a.position && a.position.abbreviation) || '',
      age: a.age || null, dob: a.dateOfBirth ? a.dateOfBirth.slice(0, 10) : null,
      exp: a.experience ? a.experience.years : null,
    }));
  }
  const n = Object.values(out).reduce((a, l) => a + l.length, 0);
  if (Object.keys(out).length < 25 || n < 350) { console.error(`Abbruch: nur ${Object.keys(out).length} Teams / ${n} Spieler.`); process.exit(1); }
  const data = { updated: new Date().toISOString(), teams: out };
  fs.writeFileSync(OUT, `// ============================================================
//  NBA_ROSTERS — aktuelle NBA-Kader laut ESPN (AUTO-GENERIERT von
//  sports/nba/scripts/sync-nba-rosters.js). Stand ${data.updated}
// ============================================================

const NBA_ROSTERS = ${JSON.stringify(data)};
`, 'utf8');
  console.log(`Geschrieben: ${Object.keys(out).length} Teams, ${n} Spieler.`);
})().catch(e => { console.error(e); process.exit(1); });
