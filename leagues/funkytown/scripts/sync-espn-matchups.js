#!/usr/bin/env node
// ============================================================
//  ESPN WOCHEN-MATCHUPS SYNC (TTHQ + Funkytown, identische Dateien)
// ============================================================
//  Schritt in tthq-sync.yml: holt die bereits entschiedenen Matchups der
//  laufenden ESPN-Saison und schreibt sie nach data/season-matchups.js
//  (Details siehe scripts/lib/espn-matchups.js) → Seite „Tabellenverlauf“.
//  Vor Saisonstart gibt es noch keine entschiedenen Wochen, dann ändert
//  sich einfach nichts.
//
//  Vorjahre werden EINMALIG automatisch nachgeholt, sobald sie in der Datei
//  fehlen (seit 16.10.2026) — kein manueller Workflow nötig. Welche Jahre:
//  die aus data/season-history.js (Funkytown), sonst die letzten 5 ESPN-Saisons.
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

function historyYears(cfg) {
  const p = path.join(__dirname, '..', 'data', 'season-history.js');
  if (fs.existsSync(p)) {
    try {
      const sandbox = {};
      vm.createContext(sandbox);
      vm.runInContext(fs.readFileSync(p, 'utf8') + '\nthis.__H__ = SEASON_HISTORY;', sandbox);
      const ys = (sandbox.__H__ || []).map(s => s.espnSeason).filter(y => y && y < cfg.ESPN_SEASON);
      if (ys.length) return ys;
    } catch (e) { /* Fallback unten */ }
  }
  const out = [];
  for (let y = cfg.ESPN_SEASON - HISTORY_YEARS; y < cfg.ESPN_SEASON; y++) out.push(y);
  return out;
}

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
    historyYears(cfg).forEach(y => { if (!have.has(y)) years.push(y); });
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
