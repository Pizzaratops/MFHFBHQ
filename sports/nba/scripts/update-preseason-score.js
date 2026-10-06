#!/usr/bin/env node
// update-preseason-score.js — täglicher Abruf der NBA-Preseason-Boxscores (ESPN) + Score-Berechnung.
// Läuft in GitHub Actions (Node >= 18, keine npm-Abhängigkeiten).
//
// Aufruf:  node scripts/update-preseason-score.js      (im Ordner sports/nba)
//
// MFHFB HQ (06.10.2026): ins Hub übernommen. Rechenlogik (preseason-score.js)
// unverändert. Angepasst: Ausgabe als Hub-Datendatei data/preseason-score.js
// (`const PRESEASON_SCORE = …`, lädt core/data.js), und die Datei wird nur neu
// geschrieben, wenn sich inhaltlich etwas geändert hat (sonst würde allein der
// Zeitstempel "generated" jeden Tag einen Commit erzeugen).
// Env (optional):
//   PRESEASON_SEASON   z.B. "2026-27"   (Default: aus heutigem Datum abgeleitet)
//   PRESEASON_START    z.B. "2026-09-28" (Default: 25. Sept. des Startjahres)
//   BASELINE_FILE      Default: data/preseason-baseline-<Vorsaison>.json
//   DATA_DIR           Default: data
//
// Ausgabe:
//   data/preseason/<Saison>/games/<eventId>.json   (Cache, wird nie neu geladen)
//   data/preseason-score.js                        (Tabelle für die Website, PRESEASON_SCORE)
'use strict';
const fs = require('fs');
const path = require('path');
const PS = require('./preseason-score.js');

const DATA_DIR = process.env.DATA_DIR || 'data';
const now = new Date();
// US-Ostküsten-Datum (ESPN-Spieltage), nicht UTC
const etDate = d => new Date(d.toLocaleString('en-US', { timeZone: 'America/New_York' }));
const today = etDate(now);
const startYear = today.getMonth() >= 6 ? today.getFullYear() : today.getFullYear() - 1;
const SEASON = process.env.PRESEASON_SEASON || `${startYear}-${String(startYear + 1).slice(-2)}`;
const prevSeason = `${startYear - 1}-${String(startYear).slice(-2)}`;
const START = process.env.PRESEASON_START || `${startYear}-09-25`;
const BASELINE_FILE = process.env.BASELINE_FILE || path.join(DATA_DIR, `preseason-baseline-${prevSeason}.json`);
const GAME_DIR = path.join(DATA_DIR, 'preseason', SEASON, 'games');
const OUT_FILE = path.join(DATA_DIR, 'preseason-score.js');

const UA = { 'User-Agent': 'Mozilla/5.0 (MFHFB preseason-score)', Accept: 'application/json' };
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function getJSON(url, tries = 4) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: UA });
      if (res.ok) return await res.json();
      console.warn(`HTTP ${res.status} ${url}`);
    } catch (e) { console.warn(`Fehler ${url}: ${e.message}`); }
    await sleep(1500 * (i + 1));
  }
  return null;
}
const ymd = d => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;

async function main() {
  // Nur im Preseason-Fenster laufen (START bis START + 40 Tage), sonst sofort beenden
  const windowEnd = new Date(`${START}T12:00:00`); windowEnd.setDate(windowEnd.getDate() + 40);
  if (!process.env.FORCE && (today < new Date(`${START}T00:00:00`) || today > windowEnd)) {
    console.log(`Außerhalb des Preseason-Fensters (${START} + 40 Tage) – nichts zu tun.`); return;
  }
  fs.mkdirSync(GAME_DIR, { recursive: true });
  if (!fs.existsSync(BASELINE_FILE)) { console.error(`Baseline fehlt: ${BASELINE_FILE}`); process.exit(1); }
  const baseline = JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf8'));

  // 1) Alle Preseason-Spieltage von START bis heute abfragen
  const cached = new Set(fs.readdirSync(GAME_DIR).filter(f => f.endsWith('.json')).map(f => f.replace('.json', '')));
  const toFetch = [];
  for (let d = new Date(`${START}T12:00:00`); d <= today; d.setDate(d.getDate() + 1)) {
    const sb = await getJSON(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=${ymd(d)}&seasontype=1&limit=100`);
    await sleep(300);
    if (!sb || !Array.isArray(sb.events)) continue;
    for (const ev of sb.events) {
      const type = ev.season && ev.season.type;
      if (type != null && type !== 1) continue;                   // nur Preseason
      const done = ev.status && ev.status.type && ev.status.type.completed;
      if (done && !cached.has(String(ev.id))) toFetch.push(String(ev.id));
    }
  }
  console.log(`Saison ${SEASON}: ${cached.size} Spiele im Cache, ${toFetch.length} neu`);

  // 2) Neue Spiele laden und schlank cachen
  for (const id of toFetch) {
    const s = await getJSON(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/summary?event=${id}`);
    await sleep(400);
    if (!s || !s.boxscore || !Array.isArray(s.boxscore.players) || s.boxscore.players.length !== 2) {
      console.warn(`Kein vollständiger Boxscore für ${id} – wird beim nächsten Lauf erneut versucht`); continue;
    }
    const slim = { header: { id: s.header && s.header.id, competitions: (s.header && s.header.competitions || []).map(c => ({ id: c.id, date: c.date })) },
                   boxscore: { players: s.boxscore.players } };
    fs.writeFileSync(path.join(GAME_DIR, `${id}.json`), JSON.stringify(slim));
  }

  // 3) Alles aus dem Cache neu berechnen
  const files = fs.readdirSync(GAME_DIR).filter(f => f.endsWith('.json'));
  if (!files.length) { console.log('Noch keine Preseason-Spiele – nichts zu tun.'); return; }
  const rows = files.flatMap(f => PS.parseEspnSummary(JSON.parse(fs.readFileSync(path.join(GAME_DIR, f), 'utf8'))));
  const table = PS.buildPreseasonTable(rows, baseline);
  table.season = SEASON;
  // Nur schreiben, wenn sich außer dem Zeitstempel etwas geändert hat
  const strip = t => JSON.stringify(Object.assign({}, t, { generated: null }));
  let prev = null;
  try { prev = JSON.parse(fs.readFileSync(OUT_FILE, 'utf8').replace(/^[\s\S]*?const PRESEASON_SCORE = /, '').replace(/;\s*$/, '')); } catch (e) { /* noch keine Datei */ }
  if (prev && strip(prev) === strip(table)) { console.log('Keine inhaltlichen Änderungen – Datei bleibt unverändert.'); return; }
  fs.writeFileSync(OUT_FILE,
    '// AUTO-GENERIERT von sports/nba/scripts/update-preseason-score.js (Workflow "NBA Preseason Score").\n' +
    '// Nicht von Hand editieren. Logik: sports/nba/scripts/preseason-score.js\n' +
    'const PRESEASON_SCORE = ' + JSON.stringify(table) + ';\n');
  console.log(`geschrieben: ${OUT_FILE} – ${table.games} Spiele, ${table.players.length} Spieler, ${table.players.filter(p => p.ranked).length} mit Rang`);
}
main().catch(e => { console.error(e); process.exit(1); });
