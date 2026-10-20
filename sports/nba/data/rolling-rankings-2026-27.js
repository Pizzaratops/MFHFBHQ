// ============================================================
//  ROLLING RANKINGS — Saison 2026/27 (permanentes Archiv)
// ============================================================
//  AUTO-GENERIERT von scripts/build-rolling-archive.js über die
//  "Daily 9cat Live Scores" GitHub Action. Nicht von Hand editieren
//  — Änderungen werden beim nächsten Lauf überschrieben.
//
//  Anders als data/livescores-aggregate.js (dort werden alte Stichtage
//  gekappt) wird diese Datei NIE gekürzt — jede Kalenderwoche/jeder
//  Kalendermonat bekommt genau einen dauerhaften Eintrag, sobald der
//  Zeitraum vorbei ist, wird er nie wieder verändert.
//
//  composite wird mit fester Kategorie-Gewichtung berechnet:
//  PTS 0.9 · REB 1 · AST 1 · STL 0.75 · BLK 0.75 · 3PM 0.75 ·
//  FG% 1 · FT% 0.85 · TO 0.25 (Games-Played fließt bewusst nicht ein).
//
//  Gleiches Shape wie data/rolling-rankings.js (Saison 2025/26), damit
//  js/rolling-rankings.js beide Saisons identisch behandeln kann:
//  { name, rankings:{Monat:Rang}, weeklyRanks:{Woche:Rang}, eosRank }
//
//  RR2026_WEEK_ORDER (ISO-Wochenstart -> Wochen-Nummer) wird nur intern
//  von diesem Script benutzt, um die Wochen-Nummerierung über mehrere
//  Läufe hinweg stabil zu halten — das Frontend braucht nur
//  RR2026_MONTHS / RR2026_WEEKS / ROLLING_RANKINGS_2026.
// ============================================================

const RR2026_MONTHS = ["Oct"];
const RR2026_WEEKS = [1];
const RR2026_WEEK_ORDER = {"2026-10-19":1};
const ROLLING_RANKINGS_2026 = [
  { name: "Paul George", rankings: { "Oct": 1 }, weeklyRanks: { "1": 1 }, eosRank: 1 },
  { name: "Jalen Duren", rankings: { "Oct": 2 }, weeklyRanks: { "1": 2 }, eosRank: 2 },
  { name: "Cade Cunningham", rankings: { "Oct": 3 }, weeklyRanks: { "1": 3 }, eosRank: 3 },
  { name: "Ausar Thompson", rankings: { "Oct": 4 }, weeklyRanks: { "1": 4 }, eosRank: 4 },
  { name: "Javonte Green", rankings: { "Oct": 5 }, weeklyRanks: { "1": 5 }, eosRank: 5 },
  { name: "Derrick White", rankings: { "Oct": 6 }, weeklyRanks: { "1": 6 }, eosRank: 6 },
  { name: "Paul Reed", rankings: { "Oct": 7 }, weeklyRanks: { "1": 7 }, eosRank: 7 },
  { name: "Payton Pritchard", rankings: { "Oct": 8 }, weeklyRanks: { "1": 8 }, eosRank: 8 },
  { name: "Duncan Robinson", rankings: { "Oct": 9 }, weeklyRanks: { "1": 9 }, eosRank: 9 },
  { name: "Sam Hauser", rankings: { "Oct": 10 }, weeklyRanks: { "1": 10 }, eosRank: 10 },
  { name: "John Collins", rankings: { "Oct": 11 }, weeklyRanks: { "1": 11 }, eosRank: 11 },
  { name: "Baylor Scheierman", rankings: { "Oct": 12 }, weeklyRanks: { "1": 12 }, eosRank: 12 },
  { name: "Neemias Queta", rankings: { "Oct": 13 }, weeklyRanks: { "1": 13 }, eosRank: 13 },
  { name: "Jordan Walsh", rankings: { "Oct": 14 }, weeklyRanks: { "1": 14 }, eosRank: 14 },
  { name: "Jayson Tatum", rankings: { "Oct": 15 }, weeklyRanks: { "1": 15 }, eosRank: 15 },
  { name: "Mitchell Robinson", rankings: { "Oct": 16 }, weeklyRanks: { "1": 16 }, eosRank: 16 },
  { name: "Isaiah Joe", rankings: { "Oct": 17 }, weeklyRanks: { "1": 17 }, eosRank: 17 },
  { name: "Daniss Jenkins", rankings: { "Oct": 18 }, weeklyRanks: { "1": 18 }, eosRank: 18 },
  { name: "Kevin Huerter", rankings: { "Oct": 19 }, weeklyRanks: { "1": 19 }, eosRank: 19 },
  { name: "Ronald Holland II", rankings: { "Oct": 20 }, weeklyRanks: { "1": 20 }, eosRank: 20 },
  { name: "Hugo Gonzalez", rankings: { "Oct": 21 }, weeklyRanks: { "1": 21 }, eosRank: 21 },
  { name: "Luka Garza", rankings: { "Oct": 22 }, weeklyRanks: { "1": 22 }, eosRank: 22 }
];
