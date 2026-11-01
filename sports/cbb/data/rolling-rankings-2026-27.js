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
const RR2026_WEEKS = [1];
const RR2026_WEEK_ORDER = {"2026-10-26":1};
const ROLLING_RANKINGS_2026 = [
  { name: "Brady Koehler", rankings: { "Nov": 1 }, weeklyRanks: { "1": 1 }, eosRank: 1 },
  { name: "Tyler Perkins", rankings: { "Nov": 2 }, weeklyRanks: { "1": 2 }, eosRank: 2 },
  { name: "Braeden Smith", rankings: { "Nov": 3 }, weeklyRanks: { "1": 3 }, eosRank: 3 },
  { name: "Elijah Crawford", rankings: { "Nov": 4 }, weeklyRanks: { "1": 4 }, eosRank: 4 },
  { name: "Braeden Shrewsberry", rankings: { "Nov": 5 }, weeklyRanks: { "1": 5 }, eosRank: 5 },
  { name: "Jake Fiegen", rankings: { "Nov": 6 }, weeklyRanks: { "1": 6 }, eosRank: 6 },
  { name: "Logan Duncomb", rankings: { "Nov": 7 }, weeklyRanks: { "1": 7 }, eosRank: 7 },
  { name: "Kwame Evans Jr.", rankings: { "Nov": 8 }, weeklyRanks: { "1": 8 }, eosRank: 8 },
  { name: "Luigi Suigo", rankings: { "Nov": 9 }, weeklyRanks: { "1": 9 }, eosRank: 9 },
  { name: "Ethan Roberts", rankings: { "Nov": 10 }, weeklyRanks: { "1": 10 }, eosRank: 10 },
  { name: "Devin Royal", rankings: { "Nov": 11 }, weeklyRanks: { "1": 11 }, eosRank: 11 },
  { name: "Tommy Ahneman", rankings: { "Nov": 12 }, weeklyRanks: { "1": 12 }, eosRank: 12 },
  { name: "Darryl Simmons II", rankings: { "Nov": 13 }, weeklyRanks: { "1": 13 }, eosRank: 13 },
  { name: "Jonathan Sanderson", rankings: { "Nov": 14 }, weeklyRanks: { "1": 14 }, eosRank: 14 },
  { name: "Logan Imes", rankings: { "Nov": 15 }, weeklyRanks: { "1": 15 }, eosRank: 15 }
];
