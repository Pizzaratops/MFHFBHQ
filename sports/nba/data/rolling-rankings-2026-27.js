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
  { name: "Tyrese Maxey", rankings: { "Oct": 2 }, weeklyRanks: { "1": 2 }, eosRank: 2 },
  { name: "Jaylen Brown", rankings: { "Oct": 3 }, weeklyRanks: { "1": 3 }, eosRank: 3 },
  { name: "Joel Embiid", rankings: { "Oct": 4 }, weeklyRanks: { "1": 4 }, eosRank: 4 },
  { name: "Jalen Duren", rankings: { "Oct": 5 }, weeklyRanks: { "1": 5 }, eosRank: 5 },
  { name: "Cade Cunningham", rankings: { "Oct": 6 }, weeklyRanks: { "1": 6 }, eosRank: 6 },
  { name: "Karl-Anthony Towns", rankings: { "Oct": 7 }, weeklyRanks: { "1": 7 }, eosRank: 7 },
  { name: "Ausar Thompson", rankings: { "Oct": 8 }, weeklyRanks: { "1": 8 }, eosRank: 8 },
  { name: "Andre Drummond", rankings: { "Oct": 9 }, weeklyRanks: { "1": 9 }, eosRank: 9 },
  { name: "Derrick White", rankings: { "Oct": 10 }, weeklyRanks: { "1": 10 }, eosRank: 10 },
  { name: "Javonte Green", rankings: { "Oct": 11 }, weeklyRanks: { "1": 11 }, eosRank: 11 },
  { name: "LeBron James", rankings: { "Oct": 12 }, weeklyRanks: { "1": 12 }, eosRank: 12 },
  { name: "Josh Hart", rankings: { "Oct": 13 }, weeklyRanks: { "1": 13 }, eosRank: 13 },
  { name: "Duncan Robinson", rankings: { "Oct": 14 }, weeklyRanks: { "1": 14 }, eosRank: 14 },
  { name: "Jalen Brunson", rankings: { "Oct": 15 }, weeklyRanks: { "1": 15 }, eosRank: 15 },
  { name: "Payton Pritchard", rankings: { "Oct": 16 }, weeklyRanks: { "1": 16 }, eosRank: 16 },
  { name: "Jose Alvarado", rankings: { "Oct": 17 }, weeklyRanks: { "1": 17 }, eosRank: 17 },
  { name: "Sam Hauser", rankings: { "Oct": 18 }, weeklyRanks: { "1": 18 }, eosRank: 18 },
  { name: "Paul Reed", rankings: { "Oct": 19 }, weeklyRanks: { "1": 19 }, eosRank: 19 },
  { name: "Kentavious Caldwell-Pope", rankings: { "Oct": 20 }, weeklyRanks: { "1": 20 }, eosRank: 20 },
  { name: "Baylor Scheierman", rankings: { "Oct": 21 }, weeklyRanks: { "1": 21 }, eosRank: 21 },
  { name: "John Collins", rankings: { "Oct": 22 }, weeklyRanks: { "1": 22 }, eosRank: 22 },
  { name: "Anfernee Simons", rankings: { "Oct": 23 }, weeklyRanks: { "1": 23 }, eosRank: 23 },
  { name: "Jayson Tatum", rankings: { "Oct": 24 }, weeklyRanks: { "1": 24 }, eosRank: 24 },
  { name: "Neemias Queta", rankings: { "Oct": 25 }, weeklyRanks: { "1": 25 }, eosRank: 25 },
  { name: "OG Anunoby", rankings: { "Oct": 26 }, weeklyRanks: { "1": 26 }, eosRank: 26 },
  { name: "Jordan Walsh", rankings: { "Oct": 27 }, weeklyRanks: { "1": 27 }, eosRank: 27 },
  { name: "Isaiah Joe", rankings: { "Oct": 28 }, weeklyRanks: { "1": 28 }, eosRank: 28 },
  { name: "Mitchell Robinson", rankings: { "Oct": 29 }, weeklyRanks: { "1": 29 }, eosRank: 29 },
  { name: "VJ Edgecombe", rankings: { "Oct": 30 }, weeklyRanks: { "1": 30 }, eosRank: 30 },
  { name: "Adem Bona", rankings: { "Oct": 31 }, weeklyRanks: { "1": 31 }, eosRank: 31 },
  { name: "Daniss Jenkins", rankings: { "Oct": 32 }, weeklyRanks: { "1": 32 }, eosRank: 32 },
  { name: "Kevin Huerter", rankings: { "Oct": 33 }, weeklyRanks: { "1": 33 }, eosRank: 33 },
  { name: "Mikal Bridges", rankings: { "Oct": 34 }, weeklyRanks: { "1": 34 }, eosRank: 34 },
  { name: "Jordan Clarkson", rankings: { "Oct": 35 }, weeklyRanks: { "1": 35 }, eosRank: 35 },
  { name: "Miles McBride", rankings: { "Oct": 36 }, weeklyRanks: { "1": 36 }, eosRank: 36 },
  { name: "Ronald Holland II", rankings: { "Oct": 37 }, weeklyRanks: { "1": 37 }, eosRank: 37 },
  { name: "Hugo Gonzalez", rankings: { "Oct": 38 }, weeklyRanks: { "1": 38 }, eosRank: 38 },
  { name: "Luka Garza", rankings: { "Oct": 39 }, weeklyRanks: { "1": 39 }, eosRank: 39 },
  { name: "Jabari Walker", rankings: { "Oct": 40 }, weeklyRanks: { "1": 40 }, eosRank: 40 },
  { name: "Landry Shamet", rankings: { "Oct": 41 }, weeklyRanks: { "1": 41 }, eosRank: 41 }
];
