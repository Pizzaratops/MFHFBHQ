// ============================================================
//  AUCTION_PLAN — Zielliste Funkytown-Auktion 11.10.2026
// ============================================================
//  Aus der Roster-Optimierung vom 09.10.2026 (TTHQ-Consensus-Projections,
//  9-Cat H2H gegen zufällige Markt-Teams, 10 × 14, $200):
//  Ziel = P(≥ 6 Kategorien je Woche) + Ausfall-Fall (einer der 6 wichtigsten
//  fehlt) + Playoffs R1/R2 (1.–14.3., 15.–28.3.) gegen starke Gegner.
//  Struktur: 1 Elite-Star (Top 5) + 4 Mittelbau (Rang 11–40, höchstens
//  einer aus 11–20) + 9 Spieler für $1–3.
//  limit = Markt + Puffer; darüber zum nächsten Namen in der Liste.
//  Gelesen von tools/nba-auction.js (🎯-Badge, Zielliste im Guide).
// ============================================================

const AUCTION_PLAN = {
  stars: [
    { name: 'Nikola Jokić', limit: 80, note: 'beste Basis, AST/REB/FG%' },
    { name: 'Victor Wembanyama', limit: 76, note: 'BLK/3PM/REB, PO nur 13 (6·7)' },
    { name: 'Shai Gilgeous-Alexander', limit: 78, note: 'PTS/STL/FT%, geringes TO' },
    { name: 'Luka Dončić', limit: 70, note: 'PTS/3PM/AST, TO + FT% Last' },
    { name: 'Giannis Antetokounmpo', limit: 62, note: 'nur mit Rabatt: FT% kostet' },
  ],
  mids: [
    { name: 'Derrick White', limit: 21, note: '3PM/STL/BLK, in fast jeder Lösung' },
    { name: 'Karl-Anthony Towns', limit: 35, note: 'REB/3PM/FT%' },
    { name: 'Trey Murphy III', limit: 30, note: '3PM/STL, PO 15 (8·7)' },
    { name: 'Bam Adebayo', limit: 22, note: 'REB/STL/BLK, günstig' },
    { name: 'Jamal Murray', limit: 39, note: 'Rang 11–20: nur einer davon' },
    { name: 'Scottie Barnes', limit: 42, note: 'Rang 11–20, 🦄 AST+BLK' },
    { name: 'Amen Thompson', limit: 40, note: 'Rang 11–20, STL/REB' },
    { name: 'Tyrese Haliburton', limit: 31, note: 'AST/3PM, wenig TO' },
    { name: 'Josh Giddey', limit: 28, note: 'AST/REB' },
    { name: 'Trae Young', limit: 20, note: 'AST/3PM, TO-Last' },
    { name: 'Lauri Markkanen', limit: 24, note: 'PTS/3PM/FT%' },
  ],
  fills: [
    { name: 'Payton Pritchard', limit: 5 }, { name: 'Mikal Bridges', limit: 6 }, { name: 'Immanuel Quickley', limit: 5 },
    { name: 'Brandin Podziemski', limit: 5, note: 'PO 15' }, { name: 'Walker Kessler', limit: 5 }, { name: 'Donovan Clingan', limit: 5 },
    { name: 'Jabari Smith Jr.', limit: 5 }, { name: 'Cason Wallace', limit: 3, note: '🦄' }, { name: 'Toumani Camara', limit: 3 },
    { name: 'Neemias Queta', limit: 3 }, { name: 'Keegan Murray', limit: 5 }, { name: 'Ayo Dosunmu', limit: 3 },
    { name: 'Dylan Harper', limit: 4 }, { name: 'Cedric Coward', limit: 4 }, { name: 'Reed Sheppard', limit: 3 },
  ],
  model: { E: 5.7, p5: 0.82, p6: 0.57, worst6: 0.28, po5: 0.66 },
};
