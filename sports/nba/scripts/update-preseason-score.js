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
//   data/preseason-games.js                        (PRESEASON_GAMES: kompakte Spielerzeilen je Spiel
//                                                   für die Sticky-Ansicht der Best-of-Karten in Live Scores, 15.10.2026)
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
const GAMES_FILE = path.join(DATA_DIR, 'preseason-games.js');

// Kompakte Spielerzeilen je Spiel (US-Ostküsten-Datum) inkl. Team-Nenner der %-Stats,
// gleiche Formeln wie PS.aggregate(). Der Browser summiert je Zeitraum und rechnet die Raten.
const GAME_COLS = ['d', 'id', 'n', 't', 'p', 'mp', 'pts', 'orb', 'drb', 'ast', 'stl', 'blk', 'tov', 'fga', 'fta', 'fg3a', 'dStl', 'dBlk', 'dOrb', 'dDrb', 'dAst', 'dUsg', 'plays'];
function writeGames(rows, baseline) {
  const r2 = x => Math.round(x * 100) / 100;
  const etDay = iso => new Date(iso).toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
  const seen = new Set();
  const out = rows.filter(r => r.tm && r.tm.mp >= 200).filter(r => { const k = r.gameId + ':' + r.athleteId; if (seen.has(k)) return false; seen.add(k); return true; }).map(r => {
    const tm = r.tm, op = r.op, f = r.mp / (tm.mp / 5);
    return [etDay(r.date), r.athleteId, r.name, r.teamAbbr, PS.posGroup(r.pos || (baseline.players[r.athleteId] || {}).pos), r2(r.mp), r.pts, r.orb, r.drb, r.ast, r.stl, r.blk, r.tov, r.fga, r.fta, r.fg3a,
      r2(f * (op.fga + 0.44 * op.fta - op.orb + op.tov)), r2(f * (op.fga - op.fg3a)), r2(f * (tm.orb + op.drb)), r2(f * (tm.drb + op.orb)),
      r2(Math.max(0, f * tm.fgm - r.fgm)), r2(f * (tm.fga + 0.44 * tm.fta + tm.tov)), r2(r.fga + 0.44 * r.fta + r.tov)];
  }).sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
  const body = { season: SEASON, cols: GAME_COLS, bias: PS.CONFIG.bias, tiers: PS.CONFIG.tiers, weights: PS.CONFIG.weights, inverted: PS.CONFIG.inverted, ref: baseline.position_reference, rows: out };
  const txt = '// AUTO-GENERIERT von sports/nba/scripts/update-preseason-score.js (Workflow "NBA Preseason Score").\n' +
    '// Kompakte Preseason-Spielerzeilen je Spiel für die Sticky-Best-of-Karten (tools/nba-livescores.js). Nicht von Hand editieren.\n' +
    'const PRESEASON_GAMES = ' + JSON.stringify(body) + ';\n';
  let old = ''; try { old = fs.readFileSync(GAMES_FILE, 'utf8'); } catch (e) { /* neu */ }
  if (old !== txt) { fs.writeFileSync(GAMES_FILE, txt); console.log(`geschrieben: ${GAMES_FILE} – ${out.length} Spielerzeilen`); }
}

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

  // 1) Preseason-Spieltage abfragen
  const cached = new Set(fs.readdirSync(GAME_DIR).filter(f => f.endsWith('.json')).map(f => f.replace('.json', '')));
  // MFHFB HQ (17.10.2026): Ende der Preseason automatisch erkennen. Letzter gecachter
  // Spieltag (US-Ostküste); liegt er >= 3 Tage zurück, ist die Preseason vorbei
  // (sie hat keine solchen Lücken) → sofort beenden, Daten bleiben als Endstand.
  // Außerdem nur ab dem Tag vor dem letzten Spieltag scannen statt ab START.
  let lastDay = '';
  cached.forEach(id => {
    try {
      const g = JSON.parse(fs.readFileSync(path.join(GAME_DIR, `${id}.json`), 'utf8'));
      const iso = g.header && g.header.competitions && g.header.competitions[0] && g.header.competitions[0].date;
      if (iso) { const k = ymd(etDate(new Date(iso))); if (k > lastDay) lastDay = k; }
    } catch (e) { /* ignorieren */ }
  });
  if (lastDay && !process.env.FORCE) {
    const last = new Date(`${lastDay.slice(0, 4)}-${lastDay.slice(4, 6)}-${lastDay.slice(6)}T12:00:00`);
    if ((today - last) / 86400000 >= 3) { console.log(`Preseason vorbei (letzter Spieltag ${lastDay}) – nichts zu tun.`); return; }
  }
  let scanFrom = new Date(`${START}T12:00:00`);
  if (lastDay) {
    const l = new Date(`${lastDay.slice(0, 4)}-${lastDay.slice(4, 6)}-${lastDay.slice(6)}T12:00:00`); l.setDate(l.getDate() - 1);
    if (l > scanFrom) scanFrom = l;
  }
  const toFetch = [];
  for (let d = scanFrom; d <= today; d.setDate(d.getDate() + 1)) {
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
  writeGames(rows, baseline);
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
if (process.env.GAMES_ONLY) {
  // Nur PRESEASON_GAMES aus dem Cache neu schreiben (ohne ESPN-Abruf)
  const baseline = JSON.parse(fs.readFileSync(BASELINE_FILE, 'utf8'));
  writeGames(fs.readdirSync(GAME_DIR).filter(f => f.endsWith('.json')).flatMap(f => PS.parseEspnSummary(JSON.parse(fs.readFileSync(path.join(GAME_DIR, f), 'utf8')))), baseline);
} else main().catch(e => { console.error(e); process.exit(1); });
