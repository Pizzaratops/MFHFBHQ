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
  { name: "Brady Koehler", rankings: { "Nov": 1 }, weeklyRanks: { "1": 1, "2": 1 }, eosRank: 1 },
  { name: "Roman Domon", rankings: { "Nov": 2 }, weeklyRanks: { "2": 2 }, eosRank: 2 },
  { name: "Elijah Crawford", rankings: { "Nov": 3 }, weeklyRanks: { "1": 4, "2": 3 }, eosRank: 3 },
  { name: "Tyler Perkins", rankings: { "Nov": 4 }, weeklyRanks: { "1": 2, "2": 4 }, eosRank: 4 },
  { name: "Braeden Smith", rankings: { "Nov": 5 }, weeklyRanks: { "1": 3, "2": 5 }, eosRank: 5 },
  { name: "Talis Soulhac", rankings: { "Nov": 6 }, weeklyRanks: { "2": 6 }, eosRank: 6 },
  { name: "Braeden Shrewsberry", rankings: { "Nov": 7 }, weeklyRanks: { "1": 5, "2": 7 }, eosRank: 7 },
  { name: "Brayden Shorter", rankings: { "Nov": 8 }, weeklyRanks: { "2": 8 }, eosRank: 8 },
  { name: "Jake Fiegen", rankings: { "Nov": 9 }, weeklyRanks: { "1": 6, "2": 9 }, eosRank: 9 },
  { name: "Kaden Magwood", rankings: { "Nov": 10 }, weeklyRanks: { "2": 10 }, eosRank: 10 },
  { name: "Brigham Rogers", rankings: { "Nov": 11 }, weeklyRanks: { "2": 11 }, eosRank: 11 },
  { name: "Logan Duncomb", rankings: { "Nov": 12 }, weeklyRanks: { "1": 7, "2": 12 }, eosRank: 12 },
  { name: "Kwame Evans Jr.", rankings: { "Nov": 13 }, weeklyRanks: { "1": 8, "2": 13 }, eosRank: 13 },
  { name: "Luigi Suigo", rankings: { "Nov": 14 }, weeklyRanks: { "1": 9, "2": 14 }, eosRank: 14 },
  { name: "Ethan Roberts", rankings: { "Nov": 15 }, weeklyRanks: { "1": 10, "2": 15 }, eosRank: 15 },
  { name: "Devin Royal", rankings: { "Nov": 16 }, weeklyRanks: { "1": 11, "2": 16 }, eosRank: 16 },
  { name: "Ben Shtolzberg", rankings: { "Nov": 17 }, weeklyRanks: { "2": 17 }, eosRank: 17 },
  { name: "Tommy Ahneman", rankings: { "Nov": 18 }, weeklyRanks: { "1": 12, "2": 18 }, eosRank: 18 },
  { name: "Lachlan Crate", rankings: { "Nov": 19 }, weeklyRanks: { "2": 19 }, eosRank: 19 },
  { name: "Darryl Simmons II", rankings: { "Nov": 20 }, weeklyRanks: { "1": 13, "2": 20 }, eosRank: 20 },
  { name: "Logan Imes", rankings: { "Nov": 21 }, weeklyRanks: { "1": 15, "2": 21 }, eosRank: 21 },
  { name: "Christian Jones", rankings: { "Nov": 22 }, weeklyRanks: { "2": 22 }, eosRank: 22 },
  { name: "Jonathan Sanderson", rankings: { "Nov": 23 }, weeklyRanks: { "1": 14, "2": 23 }, eosRank: 23 },
  { name: "Mathis Courbon", rankings: { "Nov": 24 }, weeklyRanks: { "2": 24 }, eosRank: 24 }
];
