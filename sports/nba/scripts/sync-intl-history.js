#!/usr/bin/env node
// ============================================================
//  sync-intl-history.js — Statistik-Historie internationaler Ligen (für das Intl-Prospect-Modell)
// ============================================================
//  Quelle: öffentliche EuroLeague-Feeds (feeds.incrowdsports.com, gleiche Daten wie euroleaguebasketball.net)
//  für EuroLeague (E) und EuroCup (U), je Saison: traditional (Accumulated) + advanced.
//  Ausgabe: sports/cbb/scripts/model/cache/intl/<comp><jahr>_<typ>.json.gz (jahr = Startjahr der Saison).
//  Nur GitHub Actions erreicht die Quelle (Sandbox nicht). Aufruf: node sync-intl-history.js 2005-2026
// ============================================================
const fs = require('fs'), path = require('path'), zlib = require('zlib');
const OUT = path.join(__dirname, '..', '..', 'cbb', 'scripts', 'model', 'cache', 'intl');
const BASE = 'https://feeds.incrowdsports.com/provider/euroleague-feeds/v3/competitions';
const [a, b] = (process.argv[2] || '2005-2026').split('-').map(Number);
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  let ok = 0, fail = 0;
  for (let y = a; y <= (b || a); y++) {
    for (const c of ['E', 'U']) {
      for (const [typ, mode] of [['trad', 'Accumulated'], ['adv', 'Accumulated']]) {
        const kind = typ === 'trad' ? 'traditional' : 'advanced';
        const url = `${BASE}/${c}/statistics/players/${kind}?seasonMode=Single&seasonCode=${c}${y}&statisticMode=${mode}&limit=2000`;
        try {
          const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0', Accept: 'application/json' } });
          if (!r.ok) throw new Error('HTTP ' + r.status);
          const j = await r.json();
          const n = (j.players || []).length;
          if (!n) throw new Error('leer');
          fs.writeFileSync(path.join(OUT, `${c}${y}_${typ}.json.gz`), zlib.gzipSync(JSON.stringify(j)));
          console.log(`${c}${y} ${typ}: ${n}`); ok++;
        } catch (e) { console.warn(`${c}${y} ${typ}: ${e.message}`); fail++; }
        await sleep(600);
      }
    }
  }
  console.log(`fertig: ${ok} ok, ${fail} fehlgeschlagen`);
})();
