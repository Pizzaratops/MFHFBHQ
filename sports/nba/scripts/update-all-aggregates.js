#!/usr/bin/env node
// ============================================================
//  Aktualisiert Weekly + Monthly (+ Season, eigene Datei) für ALLE Ligen, für die es
//  Tages-CSVs in scripts/data gibt — in einem einzigen Lese-/
//  Schreibvorgang von data/livescores-aggregate.js.
// ============================================================
//  Kein Hardcoding der Liga-Slugs: wird aus den vorhandenen
//  daily-9cat_<league>_<datum>.csv-Dateien abgeleitet. Ligen, die
//  (wie California/Utah) nicht mehr aktiv laufen, aber noch CSVs
//  im Repo haben, bekommen so trotzdem ein aktuelles Week/Month-
//  Ranking bis zu ihrem letzten Spieltag.
//
//  Usage:
//    node scripts/update-all-aggregates.js
//      → Fenster enden jeweils heute, Default-Keep (90 Stichtage)
//    node scripts/update-all-aggregates.js --end=2026-07-14 --keep=180
//    node scripts/update-all-aggregates.js --dir=scripts/data --out=data/livescores-aggregate.js
// ============================================================

const fs = require('fs');
const path = require('path');
const {
  buildEntry, loadExisting, mergeEntry, trimSmart, writeOut,
  DEFAULT_OUT, DEFAULT_DIR, DEFAULT_KEEP,
} = require('./convert-aggregate-to-livescores');

const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const found = args.find(a => a.startsWith(`--${name}=`));
  return found ? found.split('=').slice(1).join('=') : fallback;
};

const dir = arg('dir', DEFAULT_DIR);
const out = arg('out', DEFAULT_OUT);
const endDate = arg('end', new Date().toISOString().slice(0, 10));
const keep = parseInt(arg('keep', String(DEFAULT_KEEP)), 10);

// ------------------------------------------------------------
// 1) Ligen aus den vorhandenen Tages-CSVs ableiten
// ------------------------------------------------------------
const filePattern = /^daily-9cat_(.+)_\d{4}-\d{2}-\d{2}\.csv$/;
const leagues = [...new Set(
  fs.readdirSync(dir)
    .map(f => {
      const m = f.match(filePattern);
      return m ? m[1] : null;
    })
    .filter(Boolean)
)].sort();

if (!leagues.length) {
  console.log(`Keine Tages-CSVs in ${dir} gefunden — nichts zu aggregieren.`);
  process.exit(0);
}

console.log(`Gefundene Ligen: ${leagues.join(', ')}`);

// ------------------------------------------------------------
// 1b) Letztes verfügbares Datum pro Liga ermitteln. Für Ligen,
//     deren letzter Spieltag vor --end liegt (z.B. California/
//     Utah nach Saisonende), verankern wir das Fenster dort statt
//     bei --end — sonst würde deren Week/Month für immer leer
//     bleiben, sobald --end (heute) weiter als 7/30 Tage entfernt ist.
// ------------------------------------------------------------
const latestDateByLeague = {};
for (const league of leagues) {
  const dates = fs.readdirSync(dir)
    .map(f => {
      const m = f.match(new RegExp(`^daily-9cat_${league}_(\\d{4}-\\d{2}-\\d{2})\\.csv$`));
      return m ? m[1] : null;
    })
    .filter(Boolean)
    .sort();
  latestDateByLeague[league] = dates[dates.length - 1];
}

// ------------------------------------------------------------
// 2) Für jede Liga × Periode aktualisieren
// ------------------------------------------------------------
const existing = loadExisting(out);
// Saison bis heute (period "season") in eigener Datei, damit livescores-aggregate.js
// klein bleibt; Seiten, die die Saison brauchen, laden sie zusätzlich.
const seasonOut = arg('season-out', path.join(path.dirname(out), 'livescores-season.js'));
const existingSeason = loadExisting(seasonOut, 'LIVESCORES_SEASON');
let updated = 0;
let skipped = 0;

for (const league of leagues) {
  const latest = latestDateByLeague[league];
  const effectiveEnd = latest && latest < endDate ? latest : endDate;
  const anchorNote = effectiveEnd !== endDate ? ` (Liga beendet, Fenster verankert auf letzten Spieltag ${effectiveEnd})` : '';

  for (const period of ['week', 'month', 'season']) {
    const entry = buildEntry({ period, league, endDate: effectiveEnd, dir, minMpg: parseFloat(arg('min-mpg', '0')) || 0 });
    if (!entry) {
      console.log(`  – ${period}/${league}: keine ausreichenden Daten bis ${effectiveEnd}, übersprungen.`);
      skipped++;
      continue;
    }
    mergeEntry(period === 'season' ? existingSeason : existing, period, league, effectiveEnd, entry);
    console.log(`  ✓ ${period}/${league}: ${entry.players.length} Spieler, Fenster ${entry.windowStart}–${entry.windowEnd} (${entry.daysInWindow} Tag(e))${anchorNote}.`);
    updated++;
  }
}

if (!updated) {
  console.log('Keine Änderungen — livescores-aggregate.js bleibt unverändert.');
  process.exit(0);
}

// --keep bleibt als Parameter erhalten (Kompatibilität), ausgedünnt wird nach trimSmart
void keep;
// --recent-days: wie viele Tage komplett behalten werden (NBA 8, College 4 — viel mehr Spieler)
const recentDays = parseInt(arg('recent-days', '8'), 10);
// --week-history=false: ältere Wochen nicht als Sonntags-Stände aufheben (College, Dateigröße)
const weekHistory = arg('week-history', 'true') !== 'false';
trimSmart(existing, recentDays, weekHistory);
trimSmart(existingSeason, recentDays, weekHistory);
writeOut(existing, out, 'LIVESCORES_AGGREGATE');
writeOut(existingSeason, seasonOut, 'LIVESCORES_SEASON');
console.log(`\n${out} geschrieben: ${updated} Eintrag/Einträge aktualisiert, ${skipped} übersprungen.`);
