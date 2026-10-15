#!/usr/bin/env node
// ============================================================
//  ESPN WOCHEN-MATCHUPS SYNC — TTHQ (seit 16.10.2026, Kopie von Funkytown)
// ============================================================
//  Schritt in tthq-sync.yml: holt die bereits entschiedenen Matchups der
//  laufenden ESPN-Saison und schreibt sie nach data/season-matchups.js
//  (Details siehe scripts/lib/espn-matchups.js) → Seite „Tabellenverlauf“.
//  Vor Saisonstart gibt es noch keine entschiedenen Wochen, dann ändert
//  sich einfach nichts.
//
//  Vorjahre (ESPN-Saisons der letzten 5 Jahre) werden EINMALIG automatisch
//  nachgeholt, sobald sie in der Datei fehlen — kein manueller Workflow nötig.
//
//  Bewusst NICHT fatal (exit 0), damit ein ESPN-Aussetzer den Rest des
//  Workflows nicht stoppt.
//
//  Usage:
//    node scripts/sync-espn-matchups.js            (laufende Saison + fehlende Vorjahre)
//    node scripts/sync-espn-matchups.js --season 2026
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { loadConfig, fetchSeasonMatchups, writeMatchups } = require('./lib/espn-matchups');

const HISTORY_YEARS = 5;
const OUT = path.join(__dirname, '..', 'data', 'season-matchups.js');

function existingYears() {
  if (!fs.existsSync(OUT)) return new Set();
  try {
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync(OUT, 'utf8') + '\nthis.__M__ = SEASON_MATCHUPS;', sandbox);
    return new Set((sandbox.__M__ || []).map(s => s.espnSeason));
  } catch (e) { return new Set(); }
}

async function main() {
  const cfg = loadConfig();
  const i = process.argv.indexOf('--season');
  const years = i > -1 ? [parseInt(process.argv[i + 1], 10)] : [cfg.ESPN_SEASON];
  if (i === -1) {
    const have = existingYears();
    for (let y = cfg.ESPN_SEASON - HISTORY_YEARS; y < cfg.ESPN_SEASON; y++) if (!have.has(y)) years.push(y);
  }
  const out = [];
  for (const season of years) {
    console.log(`Wochen-Matchups für ESPN-Liga ${cfg.ESPN_LEAGUE_ID}, Saison ${season}...`);
    const data = await fetchSeasonMatchups(cfg, season);
    if (!data) { console.warn(`  ${season}: keine Daten von ESPN.`); continue; }
    console.log(`  ${Object.keys(data.weeks).length} entschiedene Woche(n), scoringType ${data.scoringType || 'unbekannt'}.`);
    out.push(data);
  }
  if (out.length) writeMatchups(out);
  else if (!fs.existsSync(OUT)) writeMatchups([]); // leere Datei, damit die Seite „noch keine Wochen“ zeigt
}

main().catch(err => {
  console.error('Matchup-Sync fehlgeschlagen (nicht fatal):', err.message);
});
