#!/usr/bin/env node
// ============================================================
//  ESPN-Verletzungsliste → data/injuries.js (seit 10.11.2026)
// ============================================================
//  Quelle: site.api.espn.com/apis/site/v2/sports/basketball/nba/injuries
//  (offen, kein Login). Läuft im nba-sync (Job „sport“). Schreibt nur,
//  wenn sich die Liste inhaltlich geändert hat (Zeitstempel zählt nicht).
//
//  Ausgabe:
//    const NBA_INJURIES = { updated: ISO, players: {
//      "Name": [Team, Status, Fantasy, Rückkehr (YYYY-MM-DD|''), Art, saisonAus (0/1), Meldung (YYYY-MM-DD)] } };
//  Status = ESPN-Status („Out“, „Day-To-Day“ …), Fantasy = ESPN-Fantasy-Kürzel
//  („OUT“, „GTD“ …). saisonAus = 1, wenn die Meldung „rest of the season“ o. Ä. nennt.
//
//  Aufruf (in sports/nba):  node scripts/sync-injuries.js [--file=fixture.json]
// ============================================================
'use strict';
const fs = require('fs');
const path = require('path');

const URL = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba/injuries';
const OUT = path.join(__dirname, '..', 'data', 'injuries.js');
const fileArg = (process.argv.find(a => a.startsWith('--file=')) || '').slice(7);
const SEASON_OUT = /(rest of the (regular )?season|remainder of the (regular )?season|for the (rest of the )?season|season-ending|out for the year)/i;

function parse(j) {
  const players = {};
  for (const t of (j && j.injuries) || []) {
    for (const e of t.injuries || []) {
      const a = e.athlete || {}, name = a.displayName;
      if (!name) continue;
      const d = e.details || {};
      players[name] = [
        (a.team && a.team.abbreviation) || '',
        e.status || '',
        (d.fantasyStatus && d.fantasyStatus.abbreviation) || '',
        d.returnDate || '',
        d.type || '',
        SEASON_OUT.test(`${e.longComment || ''} ${e.shortComment || ''}`) ? 1 : 0,
        String(e.date || '').slice(0, 10),
      ];
    }
  }
  return players;
}

function currentPlayers() {
  if (!fs.existsSync(OUT)) return null;
  const m = fs.readFileSync(OUT, 'utf8').match(/"players":\s*(\{[\s\S]*\})\s*\};?\s*$/);
  try { return m ? JSON.parse(m[1]) : null; } catch (e) { return null; }
}

(async () => {
  let j;
  if (fileArg) j = JSON.parse(fs.readFileSync(fileArg, 'utf8'));
  else {
    const r = await fetch(URL, { headers: { 'User-Agent': 'Mozilla/5.0 (MFHFB HQ)' } });
    if (!r.ok) throw new Error(`ESPN antwortet ${r.status}`);
    j = await r.json();
  }
  const players = parse(j), n = Object.keys(players).length;
  if (!n) throw new Error('ESPN-Liste leer – Format geändert?');
  const sorted = Object.fromEntries(Object.entries(players).sort(([a], [b]) => a.localeCompare(b)));
  if (JSON.stringify(currentPlayers()) === JSON.stringify(sorted)) { console.log(`Verletzungen unverändert (${n}).`); return; }
  const body = Object.entries(sorted).map(([k, v]) => `    ${JSON.stringify(k)}: ${JSON.stringify(v)}`).join(',\n');
  fs.writeFileSync(OUT, `// AUTO-GENERIERT von scripts/sync-injuries.js (ESPN-Verletzungsliste). Nicht von Hand editieren.
// [Team, Status, Fantasy, Rückkehr, Art, saisonAus, Meldung]
const NBA_INJURIES = {
  "updated": ${JSON.stringify(new Date().toISOString())},
  "players": {
${body}
  }
};
`);
  console.log(`injuries.js geschrieben: ${n} Spieler.`);
})().catch(e => { console.error(e.message); process.exit(1); });
