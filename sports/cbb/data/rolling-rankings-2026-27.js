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

const RR2026_MONTHS = ["Nov"];
const RR2026_WEEKS = [1,2];
const RR2026_WEEK_ORDER = {"2026-10-26":1,"2026-11-02":2};
const ROLLING_RANKINGS_2026 = [
  { name: "Joey Chammaa", rankings: { "Nov": 1 }, weeklyRanks: { "2": 1 }, eosRank: 1 },
  { name: "Mekhi Mason", rankings: { "Nov": 2 }, weeklyRanks: { "2": 2 }, eosRank: 2 },
  { name: "Brady Koehler", rankings: { "Nov": 3 }, weeklyRanks: { "1": 1, "2": 3 }, eosRank: 3 },
  { name: "Roman Domon", rankings: { "Nov": 4 }, weeklyRanks: { "2": 4 }, eosRank: 4 },
  { name: "Braeden Smith", rankings: { "Nov": 5 }, weeklyRanks: { "1": 3, "2": 5 }, eosRank: 5 },
  { name: "Shey Eberwein", rankings: { "Nov": 6 }, weeklyRanks: { "2": 6 }, eosRank: 6 },
  { name: "Robert Vaihola", rankings: { "Nov": 7 }, weeklyRanks: { "2": 7 }, eosRank: 7 },
  { name: "Elijah Crawford", rankings: { "Nov": 8 }, weeklyRanks: { "1": 4, "2": 8 }, eosRank: 8 },
  { name: "Tyler Perkins", rankings: { "Nov": 9 }, weeklyRanks: { "1": 2, "2": 9 }, eosRank: 9 },
  { name: "Youssouf Traore", rankings: { "Nov": 10 }, weeklyRanks: { "2": 10 }, eosRank: 10 },
  { name: "KJ Tenner", rankings: { "Nov": 11 }, weeklyRanks: { "2": 11 }, eosRank: 11 },
  { name: "KJ Martin Jr.", rankings: { "Nov": 12 }, weeklyRanks: { "2": 12 }, eosRank: 12 },
  { name: "Talis Soulhac", rankings: { "Nov": 13 }, weeklyRanks: { "2": 13 }, eosRank: 13 },
  { name: "Braeden Shrewsberry", rankings: { "Nov": 14 }, weeklyRanks: { "1": 5, "2": 14 }, eosRank: 14 },
  { name: "Jake Fiegen", rankings: { "Nov": 15 }, weeklyRanks: { "1": 6, "2": 15 }, eosRank: 15 },
  { name: "Brayden Shorter", rankings: { "Nov": 16 }, weeklyRanks: { "2": 16 }, eosRank: 16 },
  { name: "Augusto Cassia", rankings: { "Nov": 17 }, weeklyRanks: { "2": 17 }, eosRank: 17 },
  { name: "Kwame Evans Jr.", rankings: { "Nov": 18 }, weeklyRanks: { "1": 8, "2": 18 }, eosRank: 18 },
  { name: "Kaden Magwood", rankings: { "Nov": 19 }, weeklyRanks: { "2": 19 }, eosRank: 19 },
  { name: "Brigham Rogers", rankings: { "Nov": 20 }, weeklyRanks: { "2": 20 }, eosRank: 20 },
  { name: "Jace Whiting", rankings: { "Nov": 21 }, weeklyRanks: { "2": 21 }, eosRank: 21 },
  { name: "Leif Moeller", rankings: { "Nov": 22 }, weeklyRanks: { "2": 22 }, eosRank: 22 },
  { name: "Josiah LeGree", rankings: { "Nov": 23 }, weeklyRanks: { "2": 23 }, eosRank: 23 },
  { name: "Preston Turner", rankings: { "Nov": 24 }, weeklyRanks: { "2": 24 }, eosRank: 24 },
  { name: "Luigi Suigo", rankings: { "Nov": 25 }, weeklyRanks: { "1": 9, "2": 25 }, eosRank: 25 },
  { name: "Logan Duncomb", rankings: { "Nov": 26 }, weeklyRanks: { "1": 7, "2": 26 }, eosRank: 26 },
  { name: "JaVaughn Hannah", rankings: { "Nov": 27 }, weeklyRanks: { "2": 27 }, eosRank: 27 },
  { name: "Isaiah Coleman", rankings: { "Nov": 28 }, weeklyRanks: { "2": 28 }, eosRank: 28 },
  { name: "Mookie Cook", rankings: { "Nov": 29 }, weeklyRanks: { "2": 29 }, eosRank: 29 },
  { name: "Cam McDaniels", rankings: { "Nov": 30 }, weeklyRanks: { "2": 30 }, eosRank: 30 },
  { name: "Ethan Roberts", rankings: { "Nov": 31 }, weeklyRanks: { "1": 10, "2": 31 }, eosRank: 31 },
  { name: "Donovan Criss", rankings: { "Nov": 32 }, weeklyRanks: { "2": 32 }, eosRank: 32 },
  { name: "Devin Royal", rankings: { "Nov": 33 }, weeklyRanks: { "1": 11, "2": 33 }, eosRank: 33 },
  { name: "Zine Eddine Bedri", rankings: { "Nov": 34 }, weeklyRanks: { "2": 34 }, eosRank: 34 },
  { name: "Tommy Ahneman", rankings: { "Nov": 35 }, weeklyRanks: { "1": 12, "2": 35 }, eosRank: 35 },
  { name: "Ben Shtolzberg", rankings: { "Nov": 36 }, weeklyRanks: { "2": 36 }, eosRank: 36 },
  { name: "Lachlan Crate", rankings: { "Nov": 37 }, weeklyRanks: { "2": 37 }, eosRank: 37 },
  { name: "Oliver Kullamae", rankings: { "Nov": 38 }, weeklyRanks: { "2": 38 }, eosRank: 38 },
  { name: "Isaiah Watts", rankings: { "Nov": 39 }, weeklyRanks: { "2": 39 }, eosRank: 39 },
  { name: "Jayson Peterson", rankings: { "Nov": 40 }, weeklyRanks: { "2": 40 }, eosRank: 40 },
  { name: "Darryl Simmons II", rankings: { "Nov": 41 }, weeklyRanks: { "1": 13, "2": 41 }, eosRank: 41 },
  { name: "Mike Broxton Jr.", rankings: { "Nov": 42 }, weeklyRanks: { "2": 42 }, eosRank: 42 },
  { name: "Logan Imes", rankings: { "Nov": 43 }, weeklyRanks: { "1": 15, "2": 43 }, eosRank: 43 },
  { name: "Christian Jones", rankings: { "Nov": 44 }, weeklyRanks: { "2": 44 }, eosRank: 44 },
  { name: "Jonathan Sanderson", rankings: { "Nov": 45 }, weeklyRanks: { "1": 14, "2": 45 }, eosRank: 45 },
  { name: "Isaiah Ward", rankings: { "Nov": 46 }, weeklyRanks: { "2": 46 }, eosRank: 46 },
  { name: "Mathis Courbon", rankings: { "Nov": 47 }, weeklyRanks: { "2": 47 }, eosRank: 47 },
  { name: "Reese Miller", rankings: { "Nov": 48 }, weeklyRanks: { "2": 48 }, eosRank: 48 },
  { name: "JJ Kelly", rankings: { "Nov": 49 }, weeklyRanks: { "2": 49 }, eosRank: 49 },
  { name: "Demari Williams", rankings: { "Nov": 50 }, weeklyRanks: { "2": 50 }, eosRank: 50 }
];
