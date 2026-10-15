#!/usr/bin/env node
// ============================================================
//  FANTASY BOOTLEG POWER SCORE — Spinnennetz für die 12 TTHQ-
//  Fantasy-Teams, analog zum "Fantasy Bootleg Power Score"-Feature
//  auf Bear Witch Project HQ (NFL-Version) — dort punktbasiert
//  (Points by QB/RB/WR/TE), hier aber bewusst NICHT 1:1 übernommen:
//  TTHQ ist eine 9-Cat-H2H-Liga ohne "Punkte" als Währung.
//  User-Entscheidung: alle 9 Standard-Cat-Kategorien als Achsen
//  (PTS/REB/AST/STL/BLK/3PM/FG%/FT%/TO), kein Kürzen auf 6.
//
//  WICHTIGE DESIGN-ENTSCHEIDUNG — Datenquelle "aktueller Kader ×
//  echte Saison-Boxscores" (User-Entscheidung, zwei Optionen zur
//  Auswahl gestellt):
//    Diese Sandbox hat keinen Zugriff auf lm-api-reads.fantasy.espn.com
//    (bestätigt bei Items 1+2). Echte ESPN-Matchup-Kategoriewerte
//    (view=mScoreboard, cumulativeScore.scoreByStat) würden eine
//    numerische ESPN-Stat-ID-Zuordnung aus der Erinnerung erfordern,
//    die HIER NICHT gegen echte Daten verifizierbar wäre -- ein
//    stilles Risiko (z.B. vertauschte Kategorien), das bei Items 1+2
//    bewusst vermieden wurde, indem alles live gegen echte Daten
//    getestet wurde. Stattdessen: der aktuelle Kader (ROSTERS_LIVE)
//    kombiniert mit den bereits im Repo vorhandenen, echten
//    Saison-2025/26-Boxscore-Daten (LAST_SEASON_STATS_2025_26, BBM-
//    Export). Das ist dieselbe Quelle, die data/stats.js (SEASON_STATS)
//    und js/matchup-planner.js bereits fürs Preseason-/Offseason-
//    Fenster nutzen -- etabliertes Repo-Muster, keine neue Quelle.
//
//    Ergebnis zeigt "Kaderstärke, wenn diese 12 Spieler die ganze
//    Saison 2025/26 gespielt hätten" -- NICHT die offiziellen
//    ESPN-Matchup-Ergebnisse (die zählen nur Starter + echte
//    Trade-Historie über die Saison). Für einen Radar zur relativen
//    Kaderstärke im Dynasty-Kontext ist das die richtige Kennzahl;
//    für eine Nachstellung der echten H2H-Resultate wäre es das nicht.
//
//  Braucht KEINEN Netzwerkzugriff -- reine Aggregation zweier bereits
//  im Repo vorhandener, committeter Dateien. Läuft deshalb NICHT nach
//  demselben "ESPN evtl. noch nicht erreichbar"-Muster wie Items 1+2,
//  sondern kann bei jedem Lauf sofort echte Daten liefern (sobald
//  ROSTERS_LIVE nach einem Trade/Waiver-Move aktualisiert wurde).
//
//  Team-Kategorie-Wert = Summe der Pro-Spiel-Schnitte 2025/26 aller
//  aktuell rosterten Spieler (dieselbe Konvention wie data/stats.js
//  SEASON_STATS: "Team-Cat-Wert" = Summe über den ganzen Kader, nicht
//  Durchschnitt) -- für PTS/REB/AST/STL/BLK/3PM/TO. FG%/FT% sind
//  spielegewichtete Durchschnitte über den Kader (keine FGA/FTA-
//  Rohdaten in LAST_SEASON_STATS_2025_26 vorhanden, daher Spiele als
//  bestverfügbarer Gewichtungs-Proxy -- im Kommentar unten offen benannt).
//
//  Spieler ohne 2025/26-Statzeile (z.B. Rookies der 2026er Klasse,
//  oder Spieler mit einer saisonlangen/schwerwiegenden Verletzung wie
//  Kyrie Irving, Damian Lillard, Tyrese Haliburton, Fred VanVleet --
//  alle vier fehlen bewusst im 582-Spieler-BBM-Export) werden aus der
//  Team-Summe ausgeschlossen und pro Team gezählt/geloggt, exakt wie
//  scripts/build-team-analytics.js das für Spieler ohne Projection tut.
//
//  UPDATE 16.10.2026: Hauptquelle sind jetzt die sportweiten Live
//  Projections (sports/nba/data/live-projections.js = Preseason-Projection
//  geblendet mit den echten Saison-Boxscores, täglich neu). Damit zählen
//  Rookies mit, und ab Saisonstart wandert die Saison-Form automatisch
//  ein. FG%/FT% jetzt korrekt über Σ Treffer / Σ Versuche. Wer dort fehlt,
//  bekommt weiter die Vorjahres-Zeile (LAST_SEASON_STATS_2025_26).
//  Läuft in jedem tthq-sync.
//
//  Usage: node scripts/build-fantasy-power-score.js
//  Output: data/fantasy-power-score.js — FANTASY_POWER_SCORE
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'data', 'fantasy-power-score.js');

function loadConst(file, constName) {
  const code = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`${code}\nthis.__OUT__ = ${constName};`, sandbox);
  return sandbox.__OUT__;
}

const TEAMS = loadConst('data/teams-rosters.js', 'TEAMS');
const ROSTERS_LIVE = loadConst('data/rosters-live.js', 'ROSTERS_LIVE');
const LAST_SEASON_STATS_2025_26 = loadConst('../../sports/nba/data/last-season-stats-2025-26.js', 'LAST_SEASON_STATS_2025_26');
const LIVE_PROJECTIONS = (() => {
  try { return loadConst('../../sports/nba/data/live-projections.js', 'LIVE_PROJECTIONS') || {}; } catch (e) { return {}; }
})();
// Live Projections in dieselbe Zeilenform wie LAST_SEASON_STATS bringen (pro Spiel)
const PROJ_ROWS = Object.entries(LIVE_PROJECTIONS).filter(([, p]) => p && (p.pts || p.reb || p.ast)).map(([name, p]) => ({
  name, team: p.team || null, src: 'proj', gamesPlayed: p.gamesPlayed || 0,
  pts: p.pts || 0, reb: p.reb || 0, ast: p.ast || 0, stl: p.stl || 0, blk: p.blk || 0, tpm: p.tpm || 0, to: p.tov || 0,
  fgm: p.fgm || 0, fga: p.fga || 0, ftm: p.ftm || 0, fta: p.fta || 0, fgPct: p.fgPct, ftPct: p.ftPct,
}));

// ------------------------------------------------------------
// Name-Matching: ROSTERS_LIVE (ESPN-Schreibweise) gegen
// LAST_SEASON_STATS_2025_26 (BBM-Schreibweise) -- beide Quellen
// schreiben denselben Spieler teils unterschiedlich (Punkte bei
// Initialen, Jr./II/III-Suffixe, Kurzformen wie "Cam" vs "Cameron").
// Live gegen die echten Kader geprüft (2026-09-05): 358 rosterte
// Spieler, davon 336 exaktes Match, 347 nach Normalisierung + den
// unten hart hinterlegten Spitznamen-Aliases -- die verbleibenden 11
// sind alle Rookies oder Spieler mit fehlender/keiner 2025/26-Saison
// (siehe Skip-Report am Ende des Laufs).
// ------------------------------------------------------------
function normalizeName(n) {
  return n
    .toLowerCase()
    .replace(/\./g, '')
    .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Spitznamen/Kurzformen, die durch reine Suffix-/Punkt-Normalisierung
// nicht aufgelöst werden (live gefunden, 2026-09-05).
// WICHTIG: Keys sind die Form NACH normalizeName() (Suffixe wie "II"
// sind zu diesem Zeitpunkt schon entfernt) -- "ronald holland ii" wird
// zu "ronald holland", nicht "ronald holland ii".
const NAME_ALIASES = {
  'ronald holland': 'ron holland',
  'alex sarr': 'alexandre sarr',
  'cameron johnson': 'cam johnson',
  'herbert jones': 'herb jones',
  'nic claxton': 'nicolas claxton',
};

const stripAccents = n => String(n || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
function indexRows(rows) {
  const exact = new Map(rows.map(p => [p.name, p]));
  const norm = new Map();
  rows.forEach(p => {
    const k = normalizeName(stripAccents(p.name));
    if (!norm.has(k)) norm.set(k, []);
    norm.get(k).push(p);
  });
  return { exact, norm };
}
const IDX_PROJ = indexRows(PROJ_ROWS);
const IDX_LAST = indexRows(LAST_SEASON_STATS_2025_26);

function lookup(idx, rosterPlayer) {
  if (idx.exact.has(rosterPlayer.name)) return idx.exact.get(rosterPlayer.name);
  let norm = normalizeName(stripAccents(rosterPlayer.name));
  norm = NAME_ALIASES[norm] || norm;
  const candidates = idx.norm.get(norm) || [];
  if (!candidates.length) return null;
  if (candidates.length === 1) return candidates[0];
  // Mehrdeutig (z.B. mehrere "Cam Johnson") -- über NBA-Team disambiguieren.
  return candidates.find(c => c.team === rosterPlayer.team) || candidates[0];
}
// Live Projection zuerst, sonst Vorjahr
const findPlayerStats = rosterPlayer => lookup(IDX_PROJ, rosterPlayer) || lookup(IDX_LAST, rosterPlayer);

// ------------------------------------------------------------
// Kategorien -- alle 9 Standard-Cats, kein Kürzen (User-Entscheidung).
// asc=true: niedriger ist besser (nur Turnovers).
// ------------------------------------------------------------
const CATEGORIES = [
  { key: 'pts', label: 'Points', asc: false, kind: 'sum' },
  { key: 'reb', label: 'Rebounds', asc: false, kind: 'sum' },
  { key: 'ast', label: 'Assists', asc: false, kind: 'sum' },
  { key: 'stl', label: 'Steals', asc: false, kind: 'sum' },
  { key: 'blk', label: 'Blocks', asc: false, kind: 'sum' },
  { key: 'tpm', label: '3-Pointers', asc: false, kind: 'sum' },
  { key: 'fgPct', label: 'FG%', asc: false, kind: 'weighted-avg' },
  { key: 'ftPct', label: 'FT%', asc: false, kind: 'weighted-avg' },
  { key: 'to', label: 'Turnovers', asc: true, kind: 'sum' },
];

function rankBy(teamIds, valueFn, opts = {}) {
  const asc = !!opts.asc;
  const sorted = [...teamIds]
    .filter(t => valueFn(t) != null)
    .sort((x, y) => asc ? valueFn(x) - valueFn(y) : valueFn(y) - valueFn(x));
  const ranks = {};
  sorted.forEach((t, i) => { ranks[t] = i + 1; });
  return ranks;
}

function buildTeamAggregate(teamId) {
  const roster = ROSTERS_LIVE[teamId] || [];
  const included = [];
  const skipped = [];
  roster.forEach(p => {
    const stats = findPlayerStats(p);
    if (stats) included.push(stats);
    else skipped.push(p.name);
  });

  if (!included.length) {
    return { values: null, includedCount: 0, skippedCount: skipped.length, skippedPlayers: skipped };
  }

  const sumOf = key => included.reduce((s, p) => s + (p[key] || 0), 0);
  // FG%/FT%: Projection-Zeilen bringen Treffer/Versuche mit (Σ Treffer / Σ Versuche);
  // Vorjahres-Zeilen nur Prozent → Versuche aus dem Prozentwert nicht rekonstruierbar,
  // daher dort 10 FGA / 3 FTA als neutrales Gewicht.
  const att = (p, a) => (p.src === 'proj' ? (p[a] || 0) : (a === 'fga' ? 10 : 3));
  const made = (p, m, a, pct) => (p.src === 'proj' ? (p[m] || 0) : att(p, a) * (p[pct] || 0) / 100);
  const weightedPct = (m, a, pct) => {
    const A = included.reduce((s, p) => s + att(p, a), 0);
    return A > 0 ? 100 * included.reduce((s, p) => s + made(p, m, a, pct), 0) / A : null;
  };

  const values = {
    pts: +sumOf('pts').toFixed(1),
    reb: +sumOf('reb').toFixed(1),
    ast: +sumOf('ast').toFixed(1),
    stl: +sumOf('stl').toFixed(2),
    blk: +sumOf('blk').toFixed(2),
    tpm: +sumOf('tpm').toFixed(1),
    to: +sumOf('to').toFixed(1),
    fgPct: weightedPct('fgm', 'fga', 'fgPct') != null ? +weightedPct('fgm', 'fga', 'fgPct').toFixed(1) : null,
    ftPct: weightedPct('ftm', 'fta', 'ftPct') != null ? +weightedPct('ftm', 'fta', 'ftPct').toFixed(1) : null,
  };

  return { values, includedCount: included.length, projCount: included.filter(p => p.src === 'proj').length, skippedCount: skipped.length, skippedPlayers: skipped };
}

function main() {
  const teamIds = TEAMS.map(t => t.id);
  const aggregates = {};
  teamIds.forEach(id => { aggregates[id] = buildTeamAggregate(id); });

  const ranks = {};
  CATEGORIES.forEach(cat => {
    ranks[cat.key] = rankBy(teamIds, id => aggregates[id].values ? aggregates[id].values[cat.key] : null, { asc: cat.asc });
  });

  const teams = TEAMS.map(t => {
    const agg = aggregates[t.id];
    const rank = {};
    if (agg.values) CATEGORIES.forEach(cat => { rank[cat.key] = ranks[cat.key][t.id] || null; });
    return {
      id: t.id,
      name: t.name,
      owner: t.owner,
      values: agg.values,
      rank: agg.values ? rank : null,
      includedCount: agg.includedCount,
      projCount: agg.projCount || 0,
      skippedCount: agg.skippedCount,
      skippedPlayers: agg.skippedPlayers,
    };
  });

  console.log('Fantasy Bootleg Power Score — Skip-Report (Spieler ohne Projection und ohne 2025/26-Zeile):');
  teams.forEach(t => {
    if (t.skippedCount) console.log(`  ${t.name}: ${t.skippedCount} übersprungen — ${t.skippedPlayers.join(', ')}`);
  });

  const payload = {
    generatedAt: new Date().toISOString(),
    sourceSeason: PROJ_ROWS.length
      ? `Live Projections 2026/27 (Projection + bisherige Saison${PROJ_ROWS.some(p => p.gamesPlayed > 0) ? `, bis zu ${Math.max(...PROJ_ROWS.map(p => p.gamesPlayed))} Spiele` : ', noch ohne Saisonspiele'}) je aktuellem Kader, pro Spiel; fehlende Spieler mit Vorjahreswerten 2025/26`
      : '2025-26 (letzte abgeschlossene Saison, BBM-Export — siehe data/last-season-stats-2025-26.js)',
    categories: CATEGORIES.map(c => ({ key: c.key, label: c.label, lowerIsBetter: c.asc })),
    teams,
  };

  const out = `// ============================================================
//  FANTASY BOOTLEG POWER SCORE — automatisch generiert von
//  scripts/build-fantasy-power-score.js. NICHT MANUELL EDITIEREN.
//
//  9-Kategorien-Spinnennetz für die 12 TTHQ-Fantasy-Teams. Basis:
//  aktueller Kader (ROSTERS_LIVE) × Live Projections (Projection +
//  bisherige Saison, Fallback Vorjahr 2025/26) -- siehe Sync-Script.
//  FANTASY_POWER_SCORE.teams[i].values = Kader-Summe (PTS/REB/AST/
//  STL/BLK/3PM/TO) bzw. spielegewichteter Durchschnitt (FG%/FT%).
//  .rank = Liga-Rang (1-12) je Kategorie. Frontend berechnet daraus
//  den Radar-Plot-Wert per (N+1)-Rang-Trick.
// ============================================================
const FANTASY_POWER_SCORE = ${JSON.stringify(payload, null, 2)};
`;
  fs.writeFileSync(OUT, out);
  console.log(`\nGeschrieben: ${path.relative(ROOT, OUT)} (${teams.length} Teams).`);
}

main();
