#!/usr/bin/env node
// ============================================================
//  OPENRAPM SYNC — Impact-Werte (Nathan Walker / @bbstats) für die NBA-Seiten
// ============================================================
//  Quelle: https://github.com/bbstats/openrapm (MIT), Datei
//  docs/data/ratings.json — wird dort täglich neu gebaut (inkl. laufender
//  Saison). Zeile: { s: Saison (Endjahr), n, id (NBA-ID), o: ORAPM,
//  d: DRAPM, t: gesamt, p: Possessions }. Einheit: Punkte pro 100
//  Possessions gegenüber einem Durchschnittsspieler.
//
//  Wir übernehmen nur die laufende und die letzte Saison und rechnen den
//  „Minuten-Pfeil“ vor (Backtest 27.10.2026, 5.925 Spieler-Saisons
//  2004–2024 mit den BBM-Saisondaten des Hubs):
//   - Für den Fantasy-Wert der nächsten Saison bringt RAPM fast nichts
//     zusätzlich (R² 0,634 → 0,638) → fließt NICHT in Ränge ein.
//   - Für die Minuten der nächsten Saison schon, und zwar nur die
//     Offensiv-Komponente: Bei Spielern unter 24 MPG bekommt das oberste
//     ORAPM-Fünftel im Schnitt +1,1 MPG, das unterste −1,1 MPG (bereinigt
//     um MPG und 9-Cat-Wert). Trefferquote „+3 MPG“: 36 % vs. 28 %.
//   → up:   MPG < 24 und ORAPM ≥ ORAPM_UP   (oberes Fünftel der Bankspieler)
//     down: MPG < 24 und ORAPM ≤ ORAPM_DOWN (unteres Fünftel)
//   Basis-Saison: laufende, sobald ≥ 1.000 Possessions, sonst die letzte.
//   MPG der Basis-Saison: laufend aus livescores-season.js (ab 5 Spielen),
//   letzte Saison aus last-season-stats-<Saison>.js (BBM).
//
//  Schreibt sports/nba/data/openrapm.js → OPENRAPM
//  Usage: node sports/nba/scripts/sync-openrapm.js   (RATINGS_JSON=datei für lokalen Test)
// ============================================================

const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data');
const OUT = path.join(DATA, 'openrapm.js');
const URL = 'https://raw.githubusercontent.com/bbstats/openrapm/main/docs/data/ratings.json';
const ORAPM_UP = -0.36, ORAPM_DOWN = -1.97, MPG_MAX = 24, MIN_POSS = 1000, MIN_GAMES = 5;

const normKey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');

function loadConst(file, name) {
  const p = path.join(DATA, file);
  if (!fs.existsSync(p)) return null;
  const src = fs.readFileSync(p, 'utf8');
  try { return new Function(`${src}\n;return typeof ${name} !== 'undefined' ? ${name} : null;`)(); } catch (e) { console.warn(`⚠️ ${file}: ${e.message}`); return null; }
}

// MPG je Spieler für eine Saison (Endjahr)
function mpgFor(season, cur) {
  const m = new Map();
  if (season === cur) {
    const L = loadConst('livescores-season.js', 'LIVESCORES_SEASON');
    const nba = L && L.season && L.season.nba;
    if (nba) {
      const last = nba[Object.keys(nba).sort().pop()];
      (last && last.players || []).forEach(p => { if (p.games >= MIN_GAMES) m.set(normKey(p.name), p.min); });
    }
  } else {
    const tag = `${season - 1}_${String(season).slice(2)}`; // 2026 → 2025_26
    const list = loadConst(`last-season-stats-${season - 1}-${String(season).slice(2)}.js`, `LAST_SEASON_STATS_${tag}`) || [];
    list.forEach(p => m.set(normKey(p.name), p.min));
  }
  return m;
}

(async () => {
  let json;
  if (process.env.RATINGS_JSON) json = fs.readFileSync(process.env.RATINGS_JSON, 'utf8');
  else {
    for (let i = 1; i <= 3; i++) {
      try { const r = await fetch(URL, { headers: { 'cache-control': 'no-cache' } }); if (!r.ok) throw new Error('HTTP ' + r.status); json = await r.text(); JSON.parse(json); break; }
      catch (e) { if (i === 3) throw e; console.warn(`… ${e.message}, neuer Versuch`); await new Promise(r => setTimeout(r, 3000 * i)); }
    }
  }
  const data = JSON.parse(json);
  const rows = data.rows || [];
  const cur = Math.max(...rows.map(r => r.s)), prev = cur - 1;
  if (!rows.length || !isFinite(cur)) throw new Error('ratings.json ohne Zeilen');

  const by = new Map();
  rows.filter(r => r.s === cur || r.s === prev).forEach(r => {
    const k = r.id || normKey(r.n);
    const e = by.get(k) || { n: r.n, id: r.id };
    e[r.s === cur ? 'c' : 'l'] = [r.o, r.d, r.t, r.p];
    by.set(k, e);
  });
  const mpg = { [cur]: mpgFor(cur, cur), [prev]: mpgFor(prev, cur) };
  let up = 0, down = 0;
  const players = [...by.values()].map(e => {
    const useCur = e.c && e.c[3] >= MIN_POSS;
    const base = useCur ? e.c : e.l, bs = useCur ? cur : prev;
    if (base && base[3] >= MIN_POSS) { // wie im Backtest: nur mit ≥ 1.000 Possessions
      const mp = mpg[bs].get(normKey(e.n));
      if (mp != null) {
        e.m = Math.round(mp * 10) / 10; e.b = bs;
        if (mp < MPG_MAX && base[0] >= ORAPM_UP) { e.f = 1; up++; }
        else if (mp < MPG_MAX && base[0] <= ORAPM_DOWN) { e.f = -1; down++; }
      }
    }
    return e;
  }).sort((a, b) => ((b.c || b.l)[2]) - ((a.c || a.l)[2]));

  const meta = { built: data.meta && data.meta.built, cur, prev, up: ORAPM_UP, down: ORAPM_DOWN, mpgMax: MPG_MAX, minPoss: MIN_POSS };
  const out = `// ============================================================
//  OPENRAPM — Impact-Werte (bbstats/openrapm, MIT), AUTO-GENERIERT
//  von sports/nba/scripts/sync-openrapm.js. Stand OpenRAPM: ${meta.built}
//  Zeile: { n, id, c: [ORAPM, DRAPM, gesamt, Poss] laufende Saison ${cur},
//           l: dasselbe Saison ${prev}, m: MPG der Basis-Saison b,
//           f: Minuten-Pfeil (1 = ↑, -1 = ↓, nur Spieler < ${MPG_MAX} MPG) }
// ============================================================

const OPENRAPM_META = ${JSON.stringify(meta)};

const OPENRAPM = ${JSON.stringify(players)};
`;
  fs.writeFileSync(OUT, out, 'utf8');
  console.log(`Geschrieben: ${players.length} Spieler (Saison ${cur} + ${prev}), Pfeile ↑ ${up} / ↓ ${down}, OpenRAPM-Stand ${meta.built}`);
})().catch(e => { console.error(e); process.exit(1); });
