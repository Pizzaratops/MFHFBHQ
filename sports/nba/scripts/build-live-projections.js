#!/usr/bin/env node
// ============================================================
//  BUILD LIVE PROJECTIONS (sportweit, seit 15.10.2026 EINMAL für alle NBA-Ligen)
// ============================================================
//  Mischt die Saison-Projection (data/projections-consensus.js = BBM +
//  Hashtag) mit den echten Boxscore-Stats der laufenden Saison und schreibt
//  data/live-projections.js. Läuft in jedem nba-sync nach daily-9cat.js.
//
//  Quelle für die echten Stats: die Tages-CSVs von daily-9cat.js unter
//  scripts/data/ (daily-9cat_<liga>_<datum>.csv), season-weit aufsummiert.
//
//  GEDÄMPFTES DELTA je Kategorie (seit 21.10.2026, vorher pauschal
//  "Projection zählt wie 2 Spiele"):
//    live = Projection + (Saisonschnitt − Projection) · n / (n + k)
//  n = echte Spiele, k = Spiele, ab denen die Saison zur Hälfte zählt.
//  k je Kategorie EMPIRISCH bestimmt (ESPN-Boxscores 2022–2026, ~900
//  Spieler-Saisons, Prior = Vorjahre, k minimiert den Fehler beim
//  Vorhersagen des Saison-Rests nach 1–30 Spielen):
//    MIN 4 · PTS 6 · AST 7 · REB 10 · 3PM 12 · TO 12 · BLK 23 · STL 25
//    FGA 4 · FTA 12 (Volumen)
//  Quoten über Versuche statt Spiele:
//    FG% = (Proj-FG% · 300 + echte FGM) / (300 + echte FGA)
//    FT% = (Proj-FT% · 120 + echte FTM) / (120 + echte FTA)
//  Gegen die alte Formel (w = 2) sinkt der Vorhersagefehler (RMSE) in jeder
//  Zählkategorie, am stärksten bei STL (~−25 %) und BLK (~−27 %), PTS ~−9 %. Ein einzelnes
//  Spiel bewegt Punkte so um ~14 %, Steals um ~4 % der Abweichung.
//  Die Consensus-Projection ist besser als der Vorjahres-Prior der Messung,
//  die k sind also eher vorsichtig (Saison zählt eher etwas zu früh).
//  --kscale=1.5 o. ä. skaliert alle k gemeinsam.
//
//  Spieler ohne Projection: gleiche Dämpfung Richtung 0 (Liga-Quote bei
//  FG%/FT%) – erst nach einigen Spielen zählen sie wie gesehen. Minuten werden ebenfalls
//  gedämpft gemischt (vorher blieben sie fest auf der Projection).
//
//  Usage:
//    node scripts/build-live-projections.js [--league=nba] [--kscale=1] [--since=YYYY-MM-DD]   (im Ordner sports/nba)
//  Ausgabe: sports/nba/data/live-projections.js
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..'); // = sports/nba
// MFHFB HQ (29.09.2026): sportweite NBA-Dateien (für alle NBA-Ligen gleich,
// z.B. aliases/livescores/offseason/rolling) liegen unter sports/nba/data/,
// liga-eigene weiter unter leagues/<liga>/data/ (= ROOT/data).
const SPORT_DATA = path.join(__dirname, '..', 'data');
const CONSENSUS_PATH = path.join(SPORT_DATA, 'projections-consensus.js');
// MFHFB HQ: die Tages-CSVs schreibt die sportweite Pipeline EINMAL für alle
// NBA-Ligen nach sports/nba/scripts/data/ (vorher scripts/data/ je Repo).
const CSV_DIR = path.join(__dirname, 'data');
const OUT = path.join(SPORT_DATA, 'live-projections.js');

const args = process.argv.slice(2);
const leagueArg = (args.find(a => a.startsWith('--league=')) || '').split('=')[1] || 'nba';
const K_SCALE = parseFloat((args.find(a => a.startsWith('--kscale=')) || '').split('=')[1]) || 1;
// Empirische Dämpfung (siehe Kopfkommentar): Spiele bis Halbe-Halbe je Kategorie
const K_GAMES = { min: 4, pts: 6, reb: 10, ast: 7, stl: 25, blk: 23, tpm: 12, tov: 12, fga: 4, fta: 12 };
const K_ATT = { fgPct: 300, ftPct: 120 }; // Quoten: Versuche bis Halbe-Halbe
// MFHFB HQ (29.09.2026): nur Tages-CSVs der LAUFENDEN Saison summieren (ab
// 1. August des Saison-Startjahres; überschreibbar mit --since=YYYY-MM-DD).
// Vorher begrenzte nur prune-raw-data.js --keep-days=120 das Fenster -- das
// schnitt ab ~Februar den Saisonanfang ab (bekannter Bug). Die Roh-CSVs
// bleiben jetzt länger liegen (nba-sync.yml: --keep-days=400), die
// Saison-Grenze zieht dieses Script selbst. Blend-Formel unverändert.
const SINCE = (args.find(a => a.startsWith('--since=')) || '').split('=')[1] || (() => {
  const now = new Date();
  const y = now.getUTCMonth() >= 7 ? now.getUTCFullYear() : now.getUTCFullYear() - 1; // Monat 7 = August
  return `${y}-08-01`;
})();

function extractBalanced(code, marker, openCh, closeCh) {
  const start = code.indexOf(marker);
  if (start === -1) return null;
  let depth = 0, end = -1;
  for (let i = start + marker.length - 1; i < code.length; i++) {
    if (code[i] === openCh) depth++;
    else if (code[i] === closeCh) { depth--; if (depth === 0) { end = i + 1; break; } }
  }
  if (end === -1) return null;
  return code.slice(start, end) + ';';
}
function loadVmArray(filePath, varName) {
  if (!fs.existsSync(filePath)) return null; // fehlende Liga-Datei darf den Sync nicht abbrechen
  const code = fs.readFileSync(filePath, 'utf8');
  const snippet = extractBalanced(code, `const ${varName} = [`, '[', ']');
  if (!snippet) return null;
  const sandbox = {}; vm.createContext(sandbox);
  vm.runInContext(`${snippet}\nthis.__RESULT__ = ${varName};`, sandbox);
  return sandbox.__RESULT__;
}
function loadVmObject(filePath, varName) {
  if (!fs.existsSync(filePath)) return null;
  const code = fs.readFileSync(filePath, 'utf8');
  const snippet = extractBalanced(code, `const ${varName} = {`, '{', '}');
  if (!snippet) return null;
  const sandbox = {}; vm.createContext(sandbox);
  vm.runInContext(`${snippet}\nthis.__RESULT__ = ${varName};`, sandbox);
  return sandbox.__RESULT__;
}

// ── Projection-Quelle: NUR noch die Consensus (BBM + Hashtag, seit 20.10.2026) ──
//  Beyaz' alte Baseline (projections-baseline.js) fließt nicht mehr ein.
const PROJECTIONS_CONSENSUS = loadVmObject(CONSENSUS_PATH, 'PROJECTIONS_CONSENSUS') || {};
if (!Object.keys(PROJECTIONS_CONSENSUS).length) {
  console.error('FEHLER: data/projections-consensus.js fehlt oder ist leer – Abbruch, live-projections.js bleibt unverändert.');
  process.exit(1);
}
const PROJECTIONS = {};
Object.entries(PROJECTIONS_CONSENSUS).forEach(([name, c]) => {
  PROJECTIONS[name] = {
    min: c.min || 0, pts: c.pts || 0, reb: c.reb || 0, ast: c.ast || 0, stl: c.stl || 0, blk: c.blk || 0,
    tpm: c.tpm || 0, tov: c.tov || 0, fgm: c.fgm || 0, fga: c.fga || 0, ftm: c.ftm || 0, fta: c.fta || 0,
    fgPct: c.fgPct || (c.fga > 0 ? c.fgm / c.fga * 100 : 0), ftPct: c.ftPct || (c.fta > 0 ? c.ftm / c.fta * 100 : 0),
  };
});
console.log(`  Projection-Quelle: ${Object.keys(PROJECTIONS).length} Spieler aus der Consensus.`);
// Namens-Kanonisierung: Schreibweisen aus ALLEN NBA-Ligen — Form [rang, name] wie
// DYNASTY_PLAYERS. Reihenfolge: Funkytown zuerst, TTHQ-Dynasty-Rangliste ZULETZT, weil
// die Maps unten bei gleicher normalisierter Form den letzten Eintrag behalten → TTHQ gewinnt
// (identisch zur früheren TTHQ-Ausgabe).
const LEAGUES_DIR = path.join(__dirname, '..', '..', '..', 'leagues');
const DYNASTY_PLAYERS = [
  ...(loadVmArray(path.join(LEAGUES_DIR, 'funkytown', 'data', 'players.js'), 'PLAYER_DB') || []).map(p => [null, p[0]]),
  ...(loadVmArray(path.join(LEAGUES_DIR, 'tthq', 'data', 'rankings.js'), 'DYNASTY_PLAYERS') || []),
];
const dynastyByName = new Map(DYNASTY_PLAYERS.map(p => [p[1], p]));

// ── Name-Normalisierung wie in den anderen Scripts (fuer CSV-Namen,
//    die evtl. leicht anders geschrieben sind als in der Baseline) ──
const NAME_ALIASES = loadVmObject(path.join(SPORT_DATA, 'aliases.js'), 'NAME_ALIASES') || {};
const NAME_FIRST_ALIASES = {
  'nicolas claxton': 'nic claxton', 'alexandre sarr': 'alex sarr',
  'cameron johnson': 'cam johnson', 'cameron boozer': 'cam boozer',
  'ronald holland ii': 'ron holland', 'ronald holland': 'ron holland',
};
function stripDiacritics(s) { return s.normalize('NFKD').replace(/[\u0300-\u036f]/g, ''); }
function baseNormalize(raw) { return stripDiacritics(raw || '').toLowerCase().trim().replace(/\./g, '').replace(/['\u2019\u2018`]/g, ''); }
function normalizeName(raw) {
  let s = baseNormalize(raw).replace(/\b(jr|sr|iii|ii)\b/g, '').replace(/\s+/g, ' ').trim();
  return NAME_FIRST_ALIASES[s] || s;
}
function aliasCanonical(raw) {
  const base = baseNormalize(raw).replace(/\s+/g, ' ').trim();
  return NAME_ALIASES[base] || null;
}
const dynastyByNorm = new Map(DYNASTY_PLAYERS.map(p => [normalizeName(p[1]), p]));
function canonicalName(rawName) {
  const aliasName = aliasCanonical(rawName);
  if (aliasName) { const m = dynastyByNorm.get(normalizeName(aliasName)); if (m) return m[1]; }
  const m = dynastyByNorm.get(normalizeName(rawName));
  return m ? m[1] : rawName;
}

// ── Alle Tages-CSVs der gewaehlten Liga einlesen und aufsummieren ──
function parseCsvLine(line) {
  // simpler CSV-Parser, reicht für dieses feste Format (ein quoted Feld: Name)
  const out = [];
  let cur = '', inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') inQuotes = !inQuotes;
    else if (c === ',' && !inQuotes) { out.push(cur); cur = ''; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

const totals = new Map(); // canonicalName -> { games, min, pts, reb, ast, stl, blk, tpm, tov, fgm, fga, ftm, fta }
let filesRead = 0;
if (fs.existsSync(CSV_DIR)) {
  const files = fs.readdirSync(CSV_DIR).filter(f => f.startsWith(`daily-9cat_${leagueArg}_`) && f.endsWith('.csv')
    && f.slice(`daily-9cat_${leagueArg}_`.length, -4) >= SINCE); // MFHFB HQ: Saison-Fenster, s.o.
  files.forEach(f => {
    const lines = fs.readFileSync(path.join(CSV_DIR, f), 'utf8').split('\n').filter(Boolean);
    const header = parseCsvLine(lines[0]).map(h => h.trim());
    const col = name => header.indexOf(name);
    const c = {
      name: col('Name'), min: col('MIN'), pts: col('PTS'), reb: col('REB'), ast: col('AST'),
      stl: col('STL'), blk: col('BLK'), to: col('TO'), tpm: col('3PM'),
      fgm: col('FGM'), fga: col('FGA'), ftm: col('FTM'), fta: col('FTA'),
    };
    if (c.name === -1) return;
    filesRead++;
    for (let i = 1; i < lines.length; i++) {
      const r = parseCsvLine(lines[i]);
      if (!r[c.name]) continue;
      const name = canonicalName(r[c.name].trim());
      const t = totals.get(name) || { games: 0, min: 0, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, tpm: 0, tov: 0, fgm: 0, fga: 0, ftm: 0, fta: 0 };
      t.games += 1;
      t.min += c.min !== -1 ? (parseFloat(r[c.min]) || 0) : 0;
      t.pts += parseFloat(r[c.pts]) || 0;
      t.reb += parseFloat(r[c.reb]) || 0;
      t.ast += parseFloat(r[c.ast]) || 0;
      t.stl += parseFloat(r[c.stl]) || 0;
      t.blk += parseFloat(r[c.blk]) || 0;
      t.tpm += parseFloat(r[c.tpm]) || 0;
      t.tov += parseFloat(r[c.to]) || 0;
      t.fgm += parseFloat(r[c.fgm]) || 0;
      t.fga += parseFloat(r[c.fga]) || 0;
      t.ftm += parseFloat(r[c.ftm]) || 0;
      t.fta += parseFloat(r[c.fta]) || 0;
      totals.set(name, t);
    }
  });
}
console.log(`${filesRead} Tages-CSV(s) für Liga "${leagueArg}" eingelesen, ${totals.size} Spieler mit echten Stats.`);

// ── Gedämpftes Delta (siehe Kopfkommentar) ───────────────────
// Echte Stats werden der Projection per normalisiertem Namen zugeordnet
// (CSV-Schreibweise ≠ Consensus-Schreibweise, z. B. Diakritika/Jr.).
const projByNorm = new Map(Object.keys(PROJECTIONS).map(n => [normalizeName(n), n]));
const actualByProj = new Map(); // Projection-Name -> totals
const actualOnly = new Map();   // ohne Projection
totals.forEach((t, name) => {
  const alias = aliasCanonical(name);
  const proj = projByNorm.get(normalizeName(name)) || (alias && projByNorm.get(normalizeName(alias)));
  if (proj) {
    const prev = actualByProj.get(proj);
    if (prev) Object.keys(t).forEach(k => { prev[k] += t[k]; }); else actualByProj.set(proj, { ...t });
  } else actualOnly.set(name, t);
});

const COUNTING_KEYS = ['min', 'pts', 'reb', 'ast', 'stl', 'blk', 'tpm', 'tov', 'fga', 'fta'];
const share = (n, key) => n / (n + K_GAMES[key] * K_SCALE);

// Spieler OHNE Projection (Two-Way, Garbage Time …): gedämpft Richtung „kein Beitrag“
// (0 Minuten/Stats, Liga-Quote), damit 1 Spiel mit 3 Minuten nicht wie ein Stammspieler aussieht.
const poolSum = k => Object.values(PROJECTIONS).reduce((a, p) => a + (p[k] || 0), 0);
const NO_PROJ_PRIOR = {
  min: 0, pts: 0, reb: 0, ast: 0, stl: 0, blk: 0, tpm: 0, tov: 0, fga: 0, fta: 0,
  fgPct: poolSum('fga') ? poolSum('fgm') / poolSum('fga') * 100 : 46,
  ftPct: poolSum('fta') ? poolSum('ftm') / poolSum('fta') * 100 : 78,
};

const live = {};
function buildRow(proj, actual) {
  const base = proj || NO_PROJ_PRIOR;
  const n = actual ? actual.games : 0;
  const row = {};
  COUNTING_KEYS.forEach(k => {
    const avg = n ? actual[k] / n : 0;
    row[k] = !n ? base[k] : base[k] + (avg - base[k]) * share(n, k);
  });
  [['fgm', 'fga', 'fgPct'], ['ftm', 'fta', 'ftPct']].forEach(([mKey, aKey, pctKey]) => {
    const made = actual ? actual[mKey] : 0, att = actual ? actual[aKey] : 0;
    const kA = K_ATT[pctKey] * K_SCALE;
    const pct = (base[pctKey] / 100 * kA + made) / (kA + att) * 100;
    row[pctKey] = pct;
    row[mKey] = row[aKey] * pct / 100;
  });
  row.gamesPlayed = n;
  row.hasBaseline = !!proj;            // Name historisch: true = hat eine Projection
  row.z = 0; row.zFloor = 0; row.zDepth = 0; row.adpVal = 0; // Altfelder, keine Seite liest sie mehr
  return row;
}
Object.keys(PROJECTIONS).forEach(name => { live[name] = buildRow(PROJECTIONS[name], actualByProj.get(name) || null); });
actualOnly.forEach((t, name) => { if (!live[name]) live[name] = buildRow(null, t); });
console.log(`  ${actualByProj.size} Spieler mit Projection + echten Spielen, ${actualOnly.size} nur mit echten Spielen.`);

// ── Z-Score frisch ueber den kompletten Pool berechnen ────────
// Exakt gleiche Mathematik wie scripts/build-offseason-rankings.js /
// scripts/aggregate-core.js: pro Kategorie (mean, stdDev) ueber den
// gesamten Pool, FG%/FT% als "Impact" (Abweichung vom Pool-Schnitt,
// gewichtet mit dem Attempt-Volumen), TOV invertiert (weniger TOV = besser).
//
// WICHTIG: Nur neu berechnen, wenn es ueberhaupt schon echte Saison-Daten
// gibt (filesRead > 0). Vorher haben ALLE Spieler fgm=fga=0 (pctOnly-
// Baseline ohne Spiele, siehe oben) — der FG%/FT%-Einfluss würde dann für
// den kompletten Pool auf 0 fallen und die Original-Baseline-Z-Werte
// (die volle Wurf-Volumen-Daten hatten) verschlechtern statt verbessern.
// Vor Saisonstart bleibt daher einfach der Original-Z aus der Baseline
// unverändert stehen.
// MFHFB HQ (29.09.2026), Fix bekannter Bug "TTHQ LIVE_PROJECTIONS alle z=0":
// Der Baseline-Import vom 19.08. hat für ALLE Spieler z:0 geschrieben (die
// Bewertungsfelder fehlen in der Quelle). Dann gibt es keinen "Original-Z"
// zu bewahren -- also dieselbe Pool-Rechnung wie ab Saisonstart schon vorher
// anwenden (Stats = Consensus/Baseline, Wurfvolumen aus der Consensus).
// Ligen mit echten Baseline-z (Funkytown) sind davon nicht betroffen.
// Sportweit (15.10.2026): die Master-Baseline mischt TTHQ (z = 0) und Funkytown-Veteranen
// (eigene z, andere Skala) → nur wenn ALLE Spieler einen z haben, bleibt der Original-z.
{
  function mean(arr) { return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0; }
  function stdDev(arr, m) {
    if (arr.length < 2) return 0;
    const variance = arr.reduce((s, v) => s + (v - m) * (v - m), 0) / arr.length;
    return Math.sqrt(variance);
  }
  const liveEntries = Object.entries(live);
  // Referenz-Pool für Mittelwert/Streuung: Consensus-Spieler (kuratiert, ohne Karteileichen)
  // plus alle mit echten Saisonspielen. Baseline-only-Veteranen werden auf DIESER Skala bewertet,
  // ziehen den Pool aber nicht runter (sonst Luka-z je nach Ligen-Mix verschieden).
  const poolEntries = liveEntries.filter(([n, p]) => PROJECTIONS[n] || p.gamesPlayed > 0);
  const poolFgSum = poolEntries.reduce((s, [, p]) => s + p.fgm, 0);
  const poolFgaSum = poolEntries.reduce((s, [, p]) => s + p.fga, 0);
  const poolFtSum = poolEntries.reduce((s, [, p]) => s + p.ftm, 0);
  const poolFtaSum = poolEntries.reduce((s, [, p]) => s + p.fta, 0);
  const poolFgPct = poolFgaSum > 0 ? poolFgSum / poolFgaSum : 0;
  const poolFtPct = poolFtaSum > 0 ? poolFtSum / poolFtaSum : 0;
  liveEntries.forEach(([, p]) => {
    p._fgImpact = p.fga > 0 ? ((p.fgm / p.fga) - poolFgPct) * p.fga : 0;
    p._ftImpact = p.fta > 0 ? ((p.ftm / p.fta) - poolFtPct) * p.fta : 0;
  });
  const Z_CATS = [
    { key: 'pts' }, { key: 'reb' }, { key: 'ast' }, { key: 'stl' }, { key: 'blk' }, { key: 'tpm' },
    { key: '_fgImpact' }, { key: '_ftImpact' }, { key: 'tov', invert: true },
  ];
  const zStats = {};
  Z_CATS.forEach(cat => {
    const values = poolEntries.map(([, p]) => p[cat.key]);
    const m = mean(values);
    zStats[cat.key] = { mean: m, sd: stdDev(values, m) };
  });
  liveEntries.forEach(([, p]) => {
    let composite = 0;
    Z_CATS.forEach(cat => {
      const { mean: m, sd } = zStats[cat.key];
      let z = sd > 0 ? (p[cat.key] - m) / sd : 0;
      if (cat.invert) z = -z;
      composite += z;
    });
    p.z = composite;
    delete p._fgImpact;
    delete p._ftImpact;
  });
  console.log('Z-Scores (9-Cat) über den Live-Pool berechnet.');
}

function serialize(obj) {
  const lines = Object.entries(obj).map(([name, s]) => {
    const escaped = name.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
    const round = n => Math.round(n * 100) / 100;
    return `  "${escaped}": { min:${round(s.min)}, pts:${round(s.pts)}, reb:${round(s.reb)}, ast:${round(s.ast)}, stl:${round(s.stl)}, blk:${round(s.blk)}, tpm:${round(s.tpm)}, tov:${round(s.tov)}, fgm:${round(s.fgm)}, fga:${round(s.fga)}, ftm:${round(s.ftm)}, fta:${round(s.fta)}, fgPct:${round(s.fgPct)}, ftPct:${round(s.ftPct)}, gamesPlayed:${s.gamesPlayed}, hasBaseline:${s.hasBaseline}, z:${round(s.z)}, zFloor:${round(s.zFloor)}, zDepth:${round(s.zDepth)}, adpVal:${round(s.adpVal)} }`;
  });
  return lines.join(',\n');
}

const today = new Date().toISOString().slice(0, 10);
const out = `// ============================================================
//  LIVE PROJECTIONS
// ============================================================
//  AUTO-GENERIERT von scripts/build-live-projections.js. Nicht von
//  Hand editieren. Consensus-Projection (BBM + Hashtag) + echte Saison-
//  Stats als gedämpftes Delta je Kategorie: live = Proj + (Ist − Proj)·n/(n+k),
//  k (Spiele) MIN 4 · PTS 6 · AST 7 · REB 10 · 3PM 12 · TO 12 · BLK 23 · STL 25,
//  FG%/FT% über 300/120 Versuche${K_SCALE !== 1 ? ` · kscale ${K_SCALE}` : ''}. Formel: Script-Kopfkommentar.
//  Zuletzt gebaut: ${today} · Liga: ${leagueArg} · ${filesRead} Spieltag(e) eingerechnet
//
//  Shape: LIVE_PROJECTIONS["Spielername"] = {
//    min, pts, reb, ast, stl, blk, tpm, tov, fgm, fga, ftm, fta,  // Pro-Spiel-Werte, gedämpft gemischt
//    fgPct, ftPct,        // aus geblendeten Makes/Attempts berechnet, NICHT gemittelt
//    gamesPlayed,          // echte Spiele bisher in dieser Liga
//    hasBaseline,          // false = keine Projection (gedämpft Richtung 0)
//    z,                    // frisch ueber den kompletten Pool berechneter 9cat-Composite-Z-Score
//    zFloor, zDepth, adpVal, // Altfelder (immer 0), nur für Abwärtskompatibilität
//  }
// ============================================================

const LIVE_PROJECTIONS = {
${serialize(live)}
};
`;
fs.writeFileSync(OUT, out, 'utf8');
console.log(`${OUT} geschrieben: ${Object.keys(live).length} Spieler total.`);
