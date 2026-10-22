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
  { name: "Paolo Banchero", rankings: { "Oct": 3 }, weeklyRanks: { "1": 3 }, eosRank: 3 },
  { name: "Shai Gilgeous-Alexander", rankings: { "Oct": 4 }, weeklyRanks: { "1": 4 }, eosRank: 4 },
  { name: "Anthony Davis", rankings: { "Oct": 5 }, weeklyRanks: { "1": 5 }, eosRank: 5 },
  { name: "Wendell Carter Jr.", rankings: { "Oct": 6 }, weeklyRanks: { "1": 6 }, eosRank: 6 },
  { name: "Nickeil Alexander-Walker", rankings: { "Oct": 7 }, weeklyRanks: { "1": 7 }, eosRank: 7 },
  { name: "Chet Holmgren", rankings: { "Oct": 8 }, weeklyRanks: { "1": 8 }, eosRank: 8 },
  { name: "Cade Cunningham", rankings: { "Oct": 9 }, weeklyRanks: { "1": 9 }, eosRank: 9 },
  { name: "Jaylen Brown", rankings: { "Oct": 10 }, weeklyRanks: { "1": 10 }, eosRank: 10 },
  { name: "Joel Embiid", rankings: { "Oct": 11 }, weeklyRanks: { "1": 11 }, eosRank: 11 },
  { name: "Tyler Herro", rankings: { "Oct": 12 }, weeklyRanks: { "1": 12 }, eosRank: 12 },
  { name: "Jalen Duren", rankings: { "Oct": 13 }, weeklyRanks: { "1": 13 }, eosRank: 13 },
  { name: "Jared McCain", rankings: { "Oct": 14 }, weeklyRanks: { "1": 14 }, eosRank: 14 },
  { name: "Victor Wembanyama", rankings: { "Oct": 15 }, weeklyRanks: { "1": 15 }, eosRank: 15 },
  { name: "Jalen Johnson", rankings: { "Oct": 16 }, weeklyRanks: { "1": 16 }, eosRank: 16 },
  { name: "Dyson Daniels", rankings: { "Oct": 17 }, weeklyRanks: { "1": 17 }, eosRank: 17 },
  { name: "Karl-Anthony Towns", rankings: { "Oct": 18 }, weeklyRanks: { "1": 18 }, eosRank: 18 },
  { name: "Ausar Thompson", rankings: { "Oct": 19 }, weeklyRanks: { "1": 19 }, eosRank: 19 },
  { name: "CJ McCollum", rankings: { "Oct": 20 }, weeklyRanks: { "1": 20 }, eosRank: 20 },
  { name: "Derrick White", rankings: { "Oct": 21 }, weeklyRanks: { "1": 21 }, eosRank: 21 },
  { name: "Jaime Jaquez Jr.", rankings: { "Oct": 22 }, weeklyRanks: { "1": 22 }, eosRank: 22 },
  { name: "De'Aaron Fox", rankings: { "Oct": 23 }, weeklyRanks: { "1": 23 }, eosRank: 23 },
  { name: "Bilal Coulibaly", rankings: { "Oct": 24 }, weeklyRanks: { "1": 24 }, eosRank: 24 },
  { name: "Kyshawn George", rankings: { "Oct": 25 }, weeklyRanks: { "1": 25 }, eosRank: 25 },
  { name: "Javonte Green", rankings: { "Oct": 26 }, weeklyRanks: { "1": 26 }, eosRank: 26 },
  { name: "Kasparas Jakucionis", rankings: { "Oct": 27 }, weeklyRanks: { "1": 27 }, eosRank: 27 },
  { name: "Andre Drummond", rankings: { "Oct": 28 }, weeklyRanks: { "1": 28 }, eosRank: 28 },
  { name: "Stephon Castle", rankings: { "Oct": 29 }, weeklyRanks: { "1": 29 }, eosRank: 29 },
  { name: "Aaron Wiggins", rankings: { "Oct": 30 }, weeklyRanks: { "1": 30 }, eosRank: 30 },
  { name: "Josh Hart", rankings: { "Oct": 31 }, weeklyRanks: { "1": 31 }, eosRank: 31 },
  { name: "LeBron James", rankings: { "Oct": 32 }, weeklyRanks: { "1": 32 }, eosRank: 32 },
  { name: "Julian Champagnie", rankings: { "Oct": 33 }, weeklyRanks: { "1": 33 }, eosRank: 33 },
  { name: "Dylan Harper", rankings: { "Oct": 34 }, weeklyRanks: { "1": 34 }, eosRank: 34 },
  { name: "Tristan da Silva", rankings: { "Oct": 35 }, weeklyRanks: { "1": 35 }, eosRank: 35 },
  { name: "Bub Carrington", rankings: { "Oct": 36 }, weeklyRanks: { "1": 36 }, eosRank: 36 },
  { name: "Trae Young", rankings: { "Oct": 37 }, weeklyRanks: { "1": 37 }, eosRank: 37 },
  { name: "Myles Turner", rankings: { "Oct": 38 }, weeklyRanks: { "1": 38 }, eosRank: 38 },
  { name: "Duncan Robinson", rankings: { "Oct": 39 }, weeklyRanks: { "1": 39 }, eosRank: 39 },
  { name: "Jalen Brunson", rankings: { "Oct": 40 }, weeklyRanks: { "1": 40 }, eosRank: 40 },
  { name: "Franz Wagner", rankings: { "Oct": 41 }, weeklyRanks: { "1": 41 }, eosRank: 41 },
  { name: "Desmond Bane", rankings: { "Oct": 42 }, weeklyRanks: { "1": 42 }, eosRank: 42 },
  { name: "Jock Landale", rankings: { "Oct": 43 }, weeklyRanks: { "1": 43 }, eosRank: 43 },
  { name: "Justin Champagnie", rankings: { "Oct": 44 }, weeklyRanks: { "1": 44 }, eosRank: 44 },
  { name: "Payton Pritchard", rankings: { "Oct": 45 }, weeklyRanks: { "1": 45 }, eosRank: 45 },
  { name: "Jose Alvarado", rankings: { "Oct": 46 }, weeklyRanks: { "1": 46 }, eosRank: 46 },
  { name: "Onyeka Okongwu", rankings: { "Oct": 47 }, weeklyRanks: { "1": 47 }, eosRank: 47 },
  { name: "Sam Hauser", rankings: { "Oct": 48 }, weeklyRanks: { "1": 48 }, eosRank: 48 },
  { name: "Keldon Johnson", rankings: { "Oct": 49 }, weeklyRanks: { "1": 49 }, eosRank: 49 },
  { name: "Alex Caruso", rankings: { "Oct": 50 }, weeklyRanks: { "1": 50 }, eosRank: 50 },
  { name: "Paul Reed", rankings: { "Oct": 51 }, weeklyRanks: { "1": 51 }, eosRank: 51 },
  { name: "Kentavious Caldwell-Pope", rankings: { "Oct": 52 }, weeklyRanks: { "1": 52 }, eosRank: 52 },
  { name: "Deandre Ayton", rankings: { "Oct": 53 }, weeklyRanks: { "1": 53 }, eosRank: 53 },
  { name: "Kyle Kuzma", rankings: { "Oct": 54 }, weeklyRanks: { "1": 54 }, eosRank: 54 },
  { name: "Jalen Suggs", rankings: { "Oct": 55 }, weeklyRanks: { "1": 55 }, eosRank: 55 },
  { name: "Baylor Scheierman", rankings: { "Oct": 56 }, weeklyRanks: { "1": 56 }, eosRank: 56 },
  { name: "John Collins", rankings: { "Oct": 57 }, weeklyRanks: { "1": 57 }, eosRank: 57 },
  { name: "Jayson Tatum", rankings: { "Oct": 58 }, weeklyRanks: { "1": 58 }, eosRank: 58 },
  { name: "Jalen Williams", rankings: { "Oct": 59 }, weeklyRanks: { "1": 59 }, eosRank: 59 },
  { name: "Anfernee Simons", rankings: { "Oct": 60 }, weeklyRanks: { "1": 60 }, eosRank: 60 },
  { name: "Brayden Burries", rankings: { "Oct": 61 }, weeklyRanks: { "1": 61 }, eosRank: 61 },
  { name: "Isaiah Hartenstein", rankings: { "Oct": 62 }, weeklyRanks: { "1": 62 }, eosRank: 62 },
  { name: "Jase Richardson", rankings: { "Oct": 63 }, weeklyRanks: { "1": 63 }, eosRank: 63 },
  { name: "Alex Sarr", rankings: { "Oct": 64 }, weeklyRanks: { "1": 64 }, eosRank: 64 },
  { name: "OG Anunoby", rankings: { "Oct": 65 }, weeklyRanks: { "1": 65 }, eosRank: 65 },
  { name: "Luguentz Dort", rankings: { "Oct": 66 }, weeklyRanks: { "1": 66 }, eosRank: 66 },
  { name: "Neemias Queta", rankings: { "Oct": 67 }, weeklyRanks: { "1": 67 }, eosRank: 67 },
  { name: "Jordan Walsh", rankings: { "Oct": 68 }, weeklyRanks: { "1": 68 }, eosRank: 68 },
  { name: "Ajay Mitchell", rankings: { "Oct": 69 }, weeklyRanks: { "1": 69 }, eosRank: 69 },
  { name: "Ryan Rollins", rankings: { "Oct": 70 }, weeklyRanks: { "1": 70 }, eosRank: 70 },
  { name: "Ousmane Dieng", rankings: { "Oct": 71 }, weeklyRanks: { "1": 71 }, eosRank: 71 },
  { name: "Isaiah Joe", rankings: { "Oct": 72 }, weeklyRanks: { "1": 72 }, eosRank: 72 },
  { name: "Tre Johnson", rankings: { "Oct": 73 }, weeklyRanks: { "1": 73 }, eosRank: 73 },
  { name: "Cason Wallace", rankings: { "Oct": 74 }, weeklyRanks: { "1": 74 }, eosRank: 74 },
  { name: "Goga Bitadze", rankings: { "Oct": 75 }, weeklyRanks: { "1": 75 }, eosRank: 75 },
  { name: "AJ Green", rankings: { "Oct": 76 }, weeklyRanks: { "1": 76 }, eosRank: 76 },
  { name: "Luke Kornet", rankings: { "Oct": 77 }, weeklyRanks: { "1": 77 }, eosRank: 77 },
  { name: "Aday Mara", rankings: { "Oct": 78 }, weeklyRanks: { "1": 78 }, eosRank: 78 },
  { name: "Daniss Jenkins", rankings: { "Oct": 79 }, weeklyRanks: { "1": 79 }, eosRank: 79 },
  { name: "Devin Vassell", rankings: { "Oct": 80 }, weeklyRanks: { "1": 80 }, eosRank: 80 },
  { name: "Adem Bona", rankings: { "Oct": 81 }, weeklyRanks: { "1": 81 }, eosRank: 81 },
  { name: "Kevin Huerter", rankings: { "Oct": 82 }, weeklyRanks: { "1": 82 }, eosRank: 82 },
  { name: "Jaylin Williams", rankings: { "Oct": 83 }, weeklyRanks: { "1": 83 }, eosRank: 83 },
  { name: "Harrison Barnes", rankings: { "Oct": 84 }, weeklyRanks: { "1": 84 }, eosRank: 84 },
  { name: "Mitchell Robinson", rankings: { "Oct": 85 }, weeklyRanks: { "1": 85 }, eosRank: 85 },
  { name: "VJ Edgecombe", rankings: { "Oct": 86 }, weeklyRanks: { "1": 86 }, eosRank: 86 },
  { name: "Kenrich Williams", rankings: { "Oct": 87 }, weeklyRanks: { "1": 87 }, eosRank: 87 },
  { name: "Mikal Bridges", rankings: { "Oct": 88 }, weeklyRanks: { "1": 88 }, eosRank: 88 },
  { name: "Kingston Flemings", rankings: { "Oct": 89 }, weeklyRanks: { "1": 89 }, eosRank: 89 },
  { name: "Jordan Clarkson", rankings: { "Oct": 90 }, weeklyRanks: { "1": 90 }, eosRank: 90 },
  { name: "Miles McBride", rankings: { "Oct": 91 }, weeklyRanks: { "1": 91 }, eosRank: 91 },
  { name: "Ronald Holland II", rankings: { "Oct": 92 }, weeklyRanks: { "1": 92 }, eosRank: 92 },
  { name: "Khris Middleton", rankings: { "Oct": 93 }, weeklyRanks: { "1": 93 }, eosRank: 93 },
  { name: "Nikola Vucevic", rankings: { "Oct": 94 }, weeklyRanks: { "1": 94 }, eosRank: 94 },
  { name: "Kel'el Ware", rankings: { "Oct": 95 }, weeklyRanks: { "1": 95 }, eosRank: 95 },
  { name: "Hugo Gonzalez", rankings: { "Oct": 96 }, weeklyRanks: { "1": 96 }, eosRank: 96 },
  { name: "David Jones Garcia", rankings: { "Oct": 97 }, weeklyRanks: { "1": 97 }, eosRank: 97 },
  { name: "Luka Garza", rankings: { "Oct": 98 }, weeklyRanks: { "1": 98 }, eosRank: 98 },
  { name: "Jabari Walker", rankings: { "Oct": 99 }, weeklyRanks: { "1": 99 }, eosRank: 99 },
  { name: "Maliq Brown", rankings: { "Oct": 100 }, weeklyRanks: { "1": 100 }, eosRank: 100 },
  { name: "Ja'Kobi Gillespie", rankings: { "Oct": 101 }, weeklyRanks: { "1": 101 }, eosRank: 101 },
  { name: "Brooks Barnhizer", rankings: { "Oct": 102 }, weeklyRanks: { "1": 102 }, eosRank: 102 },
  { name: "Bennett Stirtz", rankings: { "Oct": 103 }, weeklyRanks: { "1": 103 }, eosRank: 103 },
  { name: "Tarris Reed Jr.", rankings: { "Oct": 104 }, weeklyRanks: { "1": 104 }, eosRank: 104 },
  { name: "Jericho Sims", rankings: { "Oct": 105 }, weeklyRanks: { "1": 105 }, eosRank: 105 },
  { name: "Landry Shamet", rankings: { "Oct": 106 }, weeklyRanks: { "1": 106 }, eosRank: 106 },
  { name: "Carter Bryant", rankings: { "Oct": 107 }, weeklyRanks: { "1": 107 }, eosRank: 107 },
  { name: "Jamal Cain", rankings: { "Oct": 108 }, weeklyRanks: { "1": 108 }, eosRank: 108 }
];
