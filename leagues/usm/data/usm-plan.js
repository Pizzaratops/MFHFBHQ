// US-Manager (basketball.de) — Trade-Plan für Kenora Hoops (Seite „Plan“ in tools/usm.js).
// Von Claude aus einer Pfad-Suche erzeugt (alle ~313 relevanten Spieler, 4 Sonntage, Gratis-Trades
// und optional gekaufte Trades, Spielplan, ESPN-Verletzungen, Gehaltsformel, Trade-Timing).
// Wird jeden Sonntag mit frischen Daten neu gerechnet; der Plan ist keine Festlegung.
// Spieler-Namen wie auf basketball.de („Nachname, Vorname“), damit die Seite den Status
// (erledigt/offen) gegen den echten Kader aus usm-live.js prüfen kann.
const USM_PLAN = {
  stand: '2026-11-22T08:30:00+01:00',
  daten: 'Boxscores bis 21.11., ESPN-Verletzungen 22.11. 05:00, Gehälter laut Formel ab 22.11. 22:00',
  ziel: 'Maximale Fantasy-Punkte. Teamwert nur als Mittel (1 Mio ≈ 150 FP Rest-Saison). Cash-Puffer ≥ 1,5 Mio für einen Notfall-Trade, keine gekauften Trades.',
  basis: { fp: 2868, rest: 16731, wert: 105.66 },
  ergebnis: { fp: 3223, rest: 18716, wert: 110.95, cash: 2.13 },
  steps: [
    {
      date: '2026-11-22', label: 'So 22.11. nach 22:00', trade: 'Gratis-Trade',
      out: 'Harper, Dylan', outSal: 8.18, in: 'Doncic, Luka', inSal: 15.39, cashAfter: 1.71,
      wirksam: 'Mo 23.11. 22:00',
      spiele: 'Doncic: Lakers Di 24.11. 04:00 und Sa 28.11. 03:30 (2 Spiele bis zum nächsten Update), kein Spiel geht durch den Montag verloren.',
      warum: 'Harper (Leiste) fällt laut ESPN bis ~13.12. aus und bringt so lange 0 FP; als Verletzter behält er seinen Wert, der Verkauf kostet nichts. Doncic ist mit ~42 FP/G der punktstärkste Spieler, den das Budget hergibt (Harper ~8,18 + Cash 8,92 ≈ 17,10).',
      alternativen: 'Jokic (C DEN, ~15,05, ~40,7 FP/G) praktisch gleichwertig und 0,34 Mio billiger, verliert aber sein Spiel Mo 01:00 @CHI; als Center verschiebt er die Positionen (G 6, C 4). Giannis (F, ~14,97) brächte Forward-Flexibilität, ~200 FP weniger über die Saison.',
      risiko: 'Gering. Lakers mit Reaves-Rückkehr (Doncic unbeeinflusst).',
    },
    {
      date: '2026-11-29', label: 'So 29.11. nach 22:00', trade: 'Gratis-Trade',
      out: 'Grimes, Quentin', outSal: 4.46, in: 'Beal, Bradley', inSal: 1.02, cashAfter: 5.15,
      wirksam: 'Mo 30.11. 22:00',
      spiele: 'Beal: Clippers ab Di 01.12.; sein Spiel Mo 30.11. 02:30 @GSW zählt noch nicht (Grimes spielt in der Nacht noch für dich, falls die Lakers spielen).',
      warum: 'Grimes ist ohne Reaves auf ~29 FP/G gesprungen, mit Reaves wieder ~11 FP/G — Verkauf zum Höchstwert, bevor sein Schnitt sinkt. Beal steht mit 0 Spielen bei 1,02 eingefroren; nach seinem 6. Spiel (Neuberechnung voraussichtlich 20.12.) liegt sein Formelwert bei ~4,36 (+3,3), und er bringt wieder ~15 FP/G. Cash steigt auf ~5,15.',
      alternativen: 'Niederhauser (C LAC, 1,32, 2 Spiele, 6. Spiel Mo 30.11. → Neuberechnung 06.12., Ziel 2,2–3,5): sicherer, aber kleiner (+1,9) und weniger Punkte (~13 FP/G). Nehmen, falls Beals Rückkehr sich verschiebt.',
      risiko: 'Mittel. Beal ist noch verletzt (ESPN: Out bis ~29.11.); nach der Rückkehr drohen Minutenlimits, die schon in die erste Neuberechnung eingehen (dann eher +2 statt +3,3). Vor dem Trade Rückkehr und erste Minuten prüfen.',
    },
    {
      date: '2026-12-06', label: 'So 06.12. nach 22:00', trade: 'Gratis-Trade',
      out: 'Shannon Jr., Terrence', outSal: 4.21, in: 'Thompson, Ausar', inSal: 7.51, cashAfter: 1.85,
      wirksam: 'Mo 07.12. 22:00',
      spiele: 'Woche 07.–13.12. ist im Spielplan dünn (NBA-Cup-K.o.-Runde, Ansetzungen noch offen) → Punkte-Effekt vor allem ab 14.12.',
      warum: 'Reines Punkte-Upgrade mit dem Cash aus dem Grimes-Verkauf: Ausar Thompson (G DET) ~24 FP/G statt Shannon ~15 FP/G (+9 FP/G). Shannons Wert ist eingependelt (~4,2), Thompson steigt leicht.',
      alternativen: 'Jeder G/F mit ~23–25 FP/G bis ~7,5 Mio; am 06.12. mit den dann aktuellen Werten neu wählen.',
      risiko: 'Gering.',
    },
    {
      date: '2026-12-13', label: 'So 13.12. nach 22:00', trade: 'Gratis-Trade',
      out: 'Beringer, Joan', outSal: 3.19, in: 'Lively, Dereck', inSal: 2.92, cashAfter: 2.12,
      wirksam: 'Mo 14.12. 22:00',
      spiele: 'Mavericks ab 15.12. (4 Spiele bis 20.12.).',
      warum: 'Lively (C DAL) steht mit 0 Spielen bei 2,92 eingefroren; nach seinem 6. Spiel (voraussichtlich Neuberechnung 20.12.) liegt sein Formelwert bei ~4,61 (+1,7), und er bringt ~16 FP/G statt Beringer ~12–13.',
      alternativen: 'Jeder Center, der kurz vor seinem 6. Spiel steht.',
      risiko: 'Mittel. Lively ESPN: Out bis ~27.11.; Rückkehr und Minuten bis 13.12. beobachten. Kauft man ihn erst, wenn er 6 Spiele hat, ist der Sprung schon weg.',
    },
  ],
  szenarien: [
    { name: 'a) Maximale Punkte', fp: 416, rest: 2145, wert: 2.71, cash: 0.05, gekauft: 2,
      trades: '22.11. Harper → Jokic + gekauft Grimes → Buzelis · 29.11. Beringer → Beal + gekauft Missi → Naz Reid · 06.12. Shannon → Lively · 13.12. Burries → Daniss Jenkins',
      urteil: 'Nur ~60 FP mehr als der Plan, kostet 3 Mio für zwei gekaufte Trades und lässt keinen Puffer.' },
    { name: 'b) Maximaler Teamwert', fp: -228, rest: -1513, wert: 7.53, cash: 28.99, gekauft: 1,
      trades: '22.11. Mitchell → Beal + gekauft Missi → Niederhauser · 29.11. Shannon → Lively · 06.12. Harper → Penda · 13.12. Beringer → Strawther',
      urteil: 'Tauscht gute Spieler gegen eingefrorene Billigspieler — viel Geld, aber deutlich weniger Punkte. Verworfen.' },
    { name: 'c) Plan (Empfehlung)', fp: 355, rest: 1985, wert: 5.29, cash: 2.13, gekauft: 0,
      trades: '22.11. Harper → Doncic · 29.11. Grimes → Beal · 06.12. Shannon → Ausar Thompson · 13.12. Beringer → Lively',
      urteil: 'Fast so viele Punkte wie a), doppelter Wertzuwachs, Puffer bleibt, keine Kaufkosten.' },
  ],
  // Erwartete Werte zu den Stichtagen (Gehalt ab So 22:00), Projection und ESPN-Status
  werte: {
    tage: ['22.11.', '29.11.', '06.12.', '13.12.', '20.12.'],
    spieler: [
      { name: 'Luka Doncic', pos: 'G', team: 'LAL', real: 41.5, proj: 42.4, val: [15.39, 15.44, 15.50, 15.50, 15.55], inj: '' },
      { name: 'Nikola Jokic', pos: 'C', team: 'DEN', real: 40.7, proj: 40.7, val: [15.05, 15.05, 15.04, 15.04, 15.04], inj: '' },
      { name: 'Dylan Harper', pos: 'G', team: 'SAS', real: 25.0, proj: 24.3, val: [8.18, 8.18, 8.18, 8.18, 8.11], inj: 'Out bis ~13.12.' },
      { name: 'Quentin Grimes', pos: 'G', team: 'LAL', real: 15.6, proj: 11.5, val: [4.46, 4.46, 4.47, 4.47, 4.47], inj: 'Proj. mit Reaves' },
      { name: 'Bradley Beal', pos: 'G', team: 'LAC', real: null, proj: 15.3, val: [1.02, 1.02, 1.02, 1.02, 4.36], inj: 'Out bis ~29.11. · 0 Spiele' },
      { name: 'Yanic Konan Niederhauser', pos: 'C', team: 'LAC', real: 9.6, proj: 13.1, val: [1.32, 1.32, 3.19, 3.19, 3.27], inj: '2 Spiele' },
      { name: 'Ausar Thompson', pos: 'G', team: 'DET', real: 23.0, proj: 24.3, val: [7.35, 7.44, 7.51, 7.51, 7.56], inj: '' },
      { name: 'Terrence Shannon Jr.', pos: 'G', team: 'MIN', real: 15.1, proj: 14.7, val: [4.25, 4.23, 4.21, 4.21, 4.19], inj: '' },
      { name: 'Dereck Lively', pos: 'C', team: 'DAL', real: null, proj: 16.0, val: [2.92, 2.92, 2.92, 2.92, 4.61], inj: 'Out bis ~27.11. · 0 Spiele' },
      { name: 'Joan Beringer', pos: 'C', team: 'MIN', real: 11.8, proj: 13.0, val: [3.06, 3.13, 3.18, 3.19, 3.23], inj: '' },
    ],
  },
  beobachten: [
    'Beal: Rückkehr (~29.11.) und Minuten in den ersten Spielen — entscheidet zwischen Beal und Niederhauser am 29.11.',
    'Reaves: zurück → Grimes ~11 FP/G; fehlt er weiter, steigt Grimes am 29.11. eher (~4,9).',
    'Lively: Rückkehr (~27.11.) und Minuten bis 13.12.',
    'Banchero (zurück ~29.11.), Haliburton (~13.12.), Edwards (~21.12.): erst kaufen, wenn die Limit-Spiele im Schnitt sind (Wert nach dem ersten Absturz).',
  ],
  regeln: [
    'Trades werden täglich um 22:00 wirksam; Gratis-Trade und neue Gehälter erst So 22:00 → ein Sonntags-Trade wirkt Mo 22:00, Spiele der Nacht So/Mo zählen noch für den alten Spieler.',
    'Gehälter gelten eine Woche (So 22:00 bis So 22:00) → innerhalb der Woche ändert der Kaufzeitpunkt nur die Punkte.',
    'Neuberechnung erst ab 6 gespielten Spielen; es zählen die Spiele bis So ~12:00 (FP-Update).',
    'Cash-Puffer ≥ 1,5 Mio halten (Notfall-Trade kaufbar).',
  ],
  next: 'Sonntagscheck 29.11. (nach dem Update 22:00): Plan mit frischen Daten neu rechnen.',
};
