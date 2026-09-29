#!/usr/bin/env node
// ============================================================
//  Aufräumen alter Roh-Tagesdateien in scripts/data/
// ============================================================
//  daily-9cat.js schreibt für JEDEN Tag/Liga drei Rohdateien:
//    daily-9cat_<league>_<date>.csv
//    daily-9cat_<league>_<date>.meta.json
//    daily-9cat_<league>_<date>.games.json
//  Im Gegensatz zu den daraus gebauten data/*.js-Dateien (die über
//  --keep-days in convert-to-livescores.js / convert-to-boxscores.js /
//  convert-aggregate-to-livescores.js bereits automatisch alte Tage
//  rauswerfen) wächst scripts/data/ unbegrenzt weiter, weil daily-9cat.js
//  selbst nie aufräumt.
//
//  Dieses Script löscht Rohdateien, deren Datum im Dateinamen älter als
//  --keep-days ist (Default 120, analog zu den bestehenden Aufrufen in
//  der daily-9cat.yml Action).
//
//  Usage:
//    node scripts/prune-raw-data.js
//    node scripts/prune-raw-data.js --keep-days=120
//    node scripts/prune-raw-data.js --dir=scripts/data --today=2026-08-23
//    node scripts/prune-raw-data.js --keep-days=400 --keep-days-games=120
//
//  MFHFB HQ (29.09.2026) -- --keep-days-games (optional, Default = --keep-days,
//  also ohne Angabe exakt das alte Verhalten): eigene Frist nur für die
//  großen *.games.json (Box Scores). Hintergrund (bekannter Bug aus dem
//  TTHQ-Inventar): build-live-projections.js summiert die GANZE Saison aus
//  den Tages-CSVs und build-offseason-rankings.js baut die Off-Season
//  (Summer League Juli + Preseason Oktober) jedes Mal komplett neu aus den
//  CSVs. Mit 120 Tagen fielen ab Ende Oktober die Summer-League-CSVs und ab
//  ~Februar die ersten Saisonwochen heraus. nba-sync.yml ruft deshalb
//  --keep-days=400 --keep-days-games=120 auf; die Saison-Abgrenzung machen
//  die beiden Konsumenten jetzt selbst über das Datum im Dateinamen.
// ============================================================

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const found = args.find(a => a.startsWith(`--${name}=`));
  return found ? found.split('=').slice(1).join('=') : fallback;
};

const DIR = arg('dir', path.join(__dirname, 'data'));
const keepDays = parseInt(arg('keep-days', '120'), 10);
const keepDaysGames = parseInt(arg('keep-days-games', String(keepDays)), 10);
const todayStr = arg('today', new Date().toISOString().slice(0, 10));

const [ty, tm, td] = todayStr.split('-').map(Number);
const cutoff = new Date(Date.UTC(ty, tm - 1, td));
cutoff.setUTCDate(cutoff.getUTCDate() - keepDays);
const cutoffGames = new Date(Date.UTC(ty, tm - 1, td));
cutoffGames.setUTCDate(cutoffGames.getUTCDate() - keepDaysGames);

if (!fs.existsSync(DIR)) {
  console.log(`${DIR} existiert nicht -- nichts zu tun.`);
  process.exit(0);
}

// Erwartet: daily-9cat_<league>_<YYYY-MM-DD>.(csv|meta.json|games.json)
const FILE_RE = /^daily-9cat_.+_(\d{4}-\d{2}-\d{2})\.(csv|meta\.json|games\.json)$/;

const files = fs.readdirSync(DIR);
let removed = 0;
let kept = 0;

for (const file of files) {
  const m = file.match(FILE_RE);
  if (!m) continue; // unbekanntes Dateiformat -- anfassen wir nicht
  const [, dateStr, ext] = m;
  const [dy, dm, dd] = dateStr.split('-').map(Number);
  const fileDate = new Date(Date.UTC(dy, dm - 1, dd));
  if (fileDate < (ext === 'games.json' ? cutoffGames : cutoff)) {
    fs.unlinkSync(path.join(DIR, file));
    removed++;
  } else {
    kept++;
  }
}

console.log(`scripts/data/ aufgeräumt: ${removed} Datei(en) älter als ${keepDays} Tage (games.json: ${keepDaysGames}) gelöscht, ${kept} behalten.`);
