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
  { name: "Shai Gilgeous-Alexander", rankings: { "Oct": 2 }, weeklyRanks: { "1": 2 }, eosRank: 2 },
  { name: "Tyrese Maxey", rankings: { "Oct": 3 }, weeklyRanks: { "1": 3 }, eosRank: 3 },
  { name: "Cade Cunningham", rankings: { "Oct": 4 }, weeklyRanks: { "1": 4 }, eosRank: 4 },
  { name: "Jaylen Brown", rankings: { "Oct": 5 }, weeklyRanks: { "1": 5 }, eosRank: 5 },
  { name: "Jalen Duren", rankings: { "Oct": 6 }, weeklyRanks: { "1": 6 }, eosRank: 6 },
  { name: "Jared McCain", rankings: { "Oct": 7 }, weeklyRanks: { "1": 7 }, eosRank: 7 },
  { name: "Joel Embiid", rankings: { "Oct": 8 }, weeklyRanks: { "1": 8 }, eosRank: 8 },
  { name: "Chet Holmgren", rankings: { "Oct": 9 }, weeklyRanks: { "1": 9 }, eosRank: 9 },
  { name: "Ausar Thompson", rankings: { "Oct": 10 }, weeklyRanks: { "1": 10 }, eosRank: 10 },
  { name: "Karl-Anthony Towns", rankings: { "Oct": 11 }, weeklyRanks: { "1": 11 }, eosRank: 11 },
  { name: "Derrick White", rankings: { "Oct": 12 }, weeklyRanks: { "1": 12 }, eosRank: 12 },
  { name: "De'Aaron Fox", rankings: { "Oct": 13 }, weeklyRanks: { "1": 13 }, eosRank: 13 },
  { name: "Victor Wembanyama", rankings: { "Oct": 14 }, weeklyRanks: { "1": 14 }, eosRank: 14 },
  { name: "Javonte Green", rankings: { "Oct": 15 }, weeklyRanks: { "1": 15 }, eosRank: 15 },
  { name: "Stephon Castle", rankings: { "Oct": 16 }, weeklyRanks: { "1": 16 }, eosRank: 16 },
  { name: "Andre Drummond", rankings: { "Oct": 17 }, weeklyRanks: { "1": 17 }, eosRank: 17 },
  { name: "LeBron James", rankings: { "Oct": 18 }, weeklyRanks: { "1": 18 }, eosRank: 18 },
  { name: "Josh Hart", rankings: { "Oct": 19 }, weeklyRanks: { "1": 19 }, eosRank: 19 },
  { name: "Dylan Harper", rankings: { "Oct": 20 }, weeklyRanks: { "1": 20 }, eosRank: 20 },
  { name: "Julian Champagnie", rankings: { "Oct": 21 }, weeklyRanks: { "1": 21 }, eosRank: 21 },
  { name: "Duncan Robinson", rankings: { "Oct": 22 }, weeklyRanks: { "1": 22 }, eosRank: 22 },
  { name: "Jalen Brunson", rankings: { "Oct": 23 }, weeklyRanks: { "1": 23 }, eosRank: 23 },
  { name: "Jose Alvarado", rankings: { "Oct": 24 }, weeklyRanks: { "1": 24 }, eosRank: 24 },
  { name: "Payton Pritchard", rankings: { "Oct": 25 }, weeklyRanks: { "1": 25 }, eosRank: 25 },
  { name: "Keldon Johnson", rankings: { "Oct": 26 }, weeklyRanks: { "1": 26 }, eosRank: 26 },
  { name: "Alex Caruso", rankings: { "Oct": 27 }, weeklyRanks: { "1": 27 }, eosRank: 27 },
  { name: "Sam Hauser", rankings: { "Oct": 28 }, weeklyRanks: { "1": 28 }, eosRank: 28 },
  { name: "Paul Reed", rankings: { "Oct": 29 }, weeklyRanks: { "1": 29 }, eosRank: 29 },
  { name: "Kentavious Caldwell-Pope", rankings: { "Oct": 30 }, weeklyRanks: { "1": 30 }, eosRank: 30 },
  { name: "Jayson Tatum", rankings: { "Oct": 31 }, weeklyRanks: { "1": 31 }, eosRank: 31 },
  { name: "Baylor Scheierman", rankings: { "Oct": 32 }, weeklyRanks: { "1": 32 }, eosRank: 32 },
  { name: "John Collins", rankings: { "Oct": 33 }, weeklyRanks: { "1": 33 }, eosRank: 33 },
  { name: "Jalen Williams", rankings: { "Oct": 34 }, weeklyRanks: { "1": 34 }, eosRank: 34 },
  { name: "Anfernee Simons", rankings: { "Oct": 35 }, weeklyRanks: { "1": 35 }, eosRank: 35 },
  { name: "Isaiah Hartenstein", rankings: { "Oct": 36 }, weeklyRanks: { "1": 36 }, eosRank: 36 },
  { name: "OG Anunoby", rankings: { "Oct": 37 }, weeklyRanks: { "1": 37 }, eosRank: 37 },
  { name: "Ajay Mitchell", rankings: { "Oct": 38 }, weeklyRanks: { "1": 38 }, eosRank: 38 },
  { name: "Neemias Queta", rankings: { "Oct": 39 }, weeklyRanks: { "1": 39 }, eosRank: 39 },
  { name: "Jordan Walsh", rankings: { "Oct": 40 }, weeklyRanks: { "1": 40 }, eosRank: 40 },
  { name: "Cason Wallace", rankings: { "Oct": 41 }, weeklyRanks: { "1": 41 }, eosRank: 41 },
  { name: "Isaiah Joe", rankings: { "Oct": 42 }, weeklyRanks: { "1": 42 }, eosRank: 42 },
  { name: "Aday Mara", rankings: { "Oct": 43 }, weeklyRanks: { "1": 43 }, eosRank: 43 },
  { name: "Daniss Jenkins", rankings: { "Oct": 44 }, weeklyRanks: { "1": 44 }, eosRank: 44 },
  { name: "Luke Kornet", rankings: { "Oct": 45 }, weeklyRanks: { "1": 45 }, eosRank: 45 },
  { name: "VJ Edgecombe", rankings: { "Oct": 46 }, weeklyRanks: { "1": 46 }, eosRank: 46 },
  { name: "Devin Vassell", rankings: { "Oct": 47 }, weeklyRanks: { "1": 47 }, eosRank: 47 },
  { name: "Kevin Huerter", rankings: { "Oct": 48 }, weeklyRanks: { "1": 48 }, eosRank: 48 },
  { name: "Mitchell Robinson", rankings: { "Oct": 49 }, weeklyRanks: { "1": 49 }, eosRank: 49 },
  { name: "Adem Bona", rankings: { "Oct": 50 }, weeklyRanks: { "1": 50 }, eosRank: 50 },
  { name: "Jaylin Williams", rankings: { "Oct": 51 }, weeklyRanks: { "1": 51 }, eosRank: 51 },
  { name: "Harrison Barnes", rankings: { "Oct": 52 }, weeklyRanks: { "1": 52 }, eosRank: 52 },
  { name: "Kenrich Williams", rankings: { "Oct": 53 }, weeklyRanks: { "1": 53 }, eosRank: 53 },
  { name: "Mikal Bridges", rankings: { "Oct": 54 }, weeklyRanks: { "1": 54 }, eosRank: 54 },
  { name: "Jordan Clarkson", rankings: { "Oct": 55 }, weeklyRanks: { "1": 55 }, eosRank: 55 },
  { name: "Miles McBride", rankings: { "Oct": 56 }, weeklyRanks: { "1": 56 }, eosRank: 56 },
  { name: "Ronald Holland II", rankings: { "Oct": 57 }, weeklyRanks: { "1": 57 }, eosRank: 57 },
  { name: "Hugo Gonzalez", rankings: { "Oct": 58 }, weeklyRanks: { "1": 58 }, eosRank: 58 },
  { name: "David Jones Garcia", rankings: { "Oct": 59 }, weeklyRanks: { "1": 59 }, eosRank: 59 },
  { name: "Luka Garza", rankings: { "Oct": 60 }, weeklyRanks: { "1": 60 }, eosRank: 60 },
  { name: "Jabari Walker", rankings: { "Oct": 61 }, weeklyRanks: { "1": 61 }, eosRank: 61 },
  { name: "Maliq Brown", rankings: { "Oct": 62 }, weeklyRanks: { "1": 62 }, eosRank: 62 },
  { name: "Ja'Kobi Gillespie", rankings: { "Oct": 63 }, weeklyRanks: { "1": 63 }, eosRank: 63 },
  { name: "Brooks Barnhizer", rankings: { "Oct": 64 }, weeklyRanks: { "1": 64 }, eosRank: 64 },
  { name: "Bennett Stirtz", rankings: { "Oct": 65 }, weeklyRanks: { "1": 65 }, eosRank: 65 },
  { name: "Tarris Reed Jr.", rankings: { "Oct": 66 }, weeklyRanks: { "1": 66 }, eosRank: 66 },
  { name: "Landry Shamet", rankings: { "Oct": 67 }, weeklyRanks: { "1": 67 }, eosRank: 67 },
  { name: "Carter Bryant", rankings: { "Oct": 68 }, weeklyRanks: { "1": 68 }, eosRank: 68 }
];
