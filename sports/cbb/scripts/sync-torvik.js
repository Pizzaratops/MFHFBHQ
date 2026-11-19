#!/usr/bin/env node
// ============================================================
//  Barttorvik-Spielersaisons (College Basketball, D-I) → Cache
// ============================================================
//  Quelle: https://barttorvik.com/getadvstats.php?year=<Jahr>&csv=1
//  (Jahr = Frühjahr der Saison, 2027 = Saison 2026/27). Öffentlich, keine Secrets.
//  Liefert je Spieler-Saison u. a. Geburtsdatum, Recruiting-Rang (Perzentil 0–100),
//  Größe, Rolle, BPM, Wurfzonen und — falls gedraftet — den späteren NBA-Pick
//  (steht an JEDER Saison des Spielers, nicht nur an der letzten).
//
//  Aufruf:  node sports/cbb/scripts/sync-torvik.js 2027
//           node sports/cbb/scripts/sync-torvik.js 2008-2027
//  Schreibt sports/cbb/scripts/model/cache/torvik/torvik_<Jahr>.csv.gz
//  (nur benötigte Spalten, mit Kopfzeile). Grundlage für
//  sports/cbb/scripts/model/train-prospect-model.py (lokal, jährlich) und
//  sports/cbb/scripts/build-college-prospects.js (täglich im CBB-Sync).
//  Keine npm-Abhängigkeiten.
// ============================================================
'use strict';
const fs = require('fs');
const path = require('path');
const https = require('https');
const zlib = require('zlib');

// TORVIK_DIR: anderes Ziel (CBB Sync legt die laufende Saison in ein Temp-Verzeichnis, damit das
// Repo nicht täglich eine neue Rohdatei bekommt — committet wird nur college-prospects.js).
const OUT = process.env.TORVIK_DIR || path.join(__dirname, 'model', 'cache', 'torvik');
// Spaltenindex der Barttorvik-CSV (ohne Kopfzeile, Stand 11/2026) → eigener Name
const COLS = [
  [0, 'name'], [1, 'team'], [2, 'conf'], [3, 'gp'], [4, 'minPct'], [5, 'ortg'], [6, 'usg'],
  [7, 'efg'], [8, 'ts'], [9, 'orbPct'], [10, 'drbPct'], [11, 'astPct'], [12, 'toPct'],
  [13, 'ftm'], [14, 'fta'], [16, 'twoPm'], [17, 'twoPa'], [19, 'tpm'], [20, 'tpa'],
  [22, 'blkPct'], [23, 'stlPct'], [24, 'ftr'], [25, 'cls'], [26, 'ht'], [31, 'year'],
  [32, 'pid'], [34, 'rec'], [36, 'rimM'], [37, 'rimA'], [38, 'midM'], [39, 'midA'],
  [42, 'dunkM'], [43, 'dunkA'], [45, 'pick'], [46, 'drtg'], [50, 'bpm'], [51, 'obpm'],
  [52, 'dbpm'], [54, 'mpg'], [57, 'oreb'], [58, 'dreb'], [60, 'ast'], [61, 'stl'],
  [62, 'blk'], [63, 'pts'], [64, 'role'], [66, 'dob'],
];

function get(url, tries = 4) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36', 'Accept': 'text/csv,text/plain,*/*' }, timeout: 90000 }, res => {
      if (res.statusCode !== 200) { res.resume(); return reject(new Error(`HTTP ${res.statusCode}`)); }
      const chunks = []; res.on('data', c => chunks.push(c)); res.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
    req.on('timeout', () => req.destroy(new Error('Timeout')));
    req.on('error', reject);
  }).catch(async e => {
    if (tries <= 1) throw e;
    await new Promise(r => setTimeout(r, 4000));
    return get(url, tries - 1);
  });
}

// Minimaler CSV-Parser (Anführungszeichen, Kommas in Feldern)
function parseCsv(text) {
  const rows = []; let row = [], f = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"') { if (text[i + 1] === '"') { f += '"'; i++; } else q = false; } else f += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(f); f = ''; }
    else if (c === '\n') { row.push(f); rows.push(row); row = []; f = ''; }
    else if (c !== '\r') f += c;
  }
  if (f.length || row.length) { row.push(f); rows.push(row); }
  return rows.filter(r => r.length > 40);
}
const esc = v => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);

async function year(y) {
  const text = await get(`https://barttorvik.com/getadvstats.php?year=${y}&csv=1`);
  const rows = parseCsv(text);
  if (rows.length < 500) throw new Error(`${y}: nur ${rows.length} Zeilen — Format geändert oder gesperrt?`);
  // Plausibilität: Spalte 31 muss das Jahr sein, Spalte 66 ein Datum oder leer
  const bad = rows.slice(0, 50).filter(r => String(r[31]) !== String(y)).length;
  if (bad > 5) throw new Error(`${y}: Spaltenlayout passt nicht (Jahr-Spalte) — COLS prüfen.`);
  const lines = [COLS.map(c => c[1]).join(',')];
  rows.forEach(r => lines.push(COLS.map(([i]) => esc(String(r[i] ?? '').trim())).join(',')));
  fs.mkdirSync(OUT, { recursive: true });
  const file = path.join(OUT, `torvik_${y}.csv.gz`);
  fs.writeFileSync(file, zlib.gzipSync(lines.join('\n') + '\n', { level: 9 }));
  const picks = rows.filter(r => String(r[45] || '').trim()).length;
  console.log(`${y}: ${rows.length} Spieler-Saisons, ${picks} mit NBA-Pick → ${path.relative(process.cwd(), file)} (${Math.round(fs.statSync(file).size / 1024)} KB)`);
}

(async () => {
  const arg = process.argv.slice(2).find(a => !a.startsWith('--')) || String(new Date().getUTCMonth() >= 6 ? new Date().getUTCFullYear() + 1 : new Date().getUTCFullYear());
  const [a, b] = arg.split('-').map(Number);
  const years = []; for (let y = a; y <= (b || a); y++) years.push(y);
  let failed = 0;
  for (const y of years) {
    try { await year(y); } catch (e) { failed++; console.error(`Barttorvik ${y} fehlgeschlagen: ${e.message}`); }
    // Lange Pause: 20 Abrufe im 1,5-s-Takt (19.11.2026) lösten eine CloudFront-Sperre aus (HTTP 403 „Request blocked“)
    if (years.length > 1) await new Promise(r => setTimeout(r, 12000));
  }
  // --soft (CBB Sync): Fehlschlag nur als Warnung — build-college-prospects.js nimmt dann den letzten
  // Stand aus dem Repo-Cache. Ohne --soft (Historie) bleibt es ein Fehler.
  if (failed === years.length) {
    if (process.argv.includes('--soft')) console.log('::warning title=Barttorvik::Abruf fehlgeschlagen — College Scouting nutzt den letzten Stand aus dem Cache.');
    else process.exit(1);
  }
})();
