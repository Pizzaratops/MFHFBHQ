// US-Manager (basketball.de) — Trade-Historie von Kenora Hoops, von Hand nachgetragen.
// Neue Trades erkennt der tägliche Sync (leagues/usm/scripts/sync-usm.js) selbst und
// legt sie in USM_HISTORY[].moves ab; die Seite „Mein Team & Trades“ zeigt beides.
// date = Tag, an dem der Trade wirksam wurde (22:00); Gehälter = Kauf-/Verkaufspreis.
const USM_TRADES = [
  { date: '2026-11-16', out: 'Wilson, Caleb', outSal: 6.79, in: 'Randle, Julius', inSal: 6.93, note: 'Start-Trade 1 · Wilson Handbruch (OP 12.11.)' },
  { date: '2026-11-18', out: 'Maluach, Khaman', outSal: 3.74, in: 'Missi, Yves', inSal: 3.52, note: 'Start-Trade 2 · Missi vor dem 6. Spiel (Wertsprung)' },
  { date: '2026-11-20', out: 'Young, Trae', outSal: 8.78, in: 'Grimes, Quentin', inSal: 2.66, note: 'Start-Trade 3 · Young fällt, Grimes +1,8 (1. Versuch 19.11. scheiterte am System)' },
];
