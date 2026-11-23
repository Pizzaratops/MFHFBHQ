#!/usr/bin/env node
// ============================================================
//  DRAFT-ONLY-SYNC — Beyaz' FBI-Draft-Only-Ligen auf Fantrax (seit 23.11.2026)
// ============================================================
//  Draft-Only = nur draften, danach keine Moves. Der Hub zeigt davon nur eine
//  Übersicht: in welcher Liga Beyaz' Team gerade auf welchem Platz steht
//  (World Cup → Seite „Draft Only“, tools/wc-league.js).
//
//  Holt je Liga über Fantrax' öffentliche fxea-API (kein Login):
//    getStandings   → Rang, Bilanz (H2H: Kategorien W-L-T) bzw. Punkte (Roto)
//    getLeagueInfo  → nur H2H: Anzahl Playoff-Teams (falls Fantrax sie liefert)
//  Beyaz' Team wird über den Namen erkannt (MY_NAMES, Teilstring, ohne Groß/klein).
//  Schreibt leagues/worldcup/data/draft-only.js (WC_DRAFT_ONLY).
//  Nicht fatal: Ligen mit Fehler behalten ihren letzten Stand.
//
//  Usage: node leagues/worldcup/scripts/sync-draft-only.js
// ============================================================

const fs = require('fs');
const path = require('path');

const BASE = 'https://www.fantrax.com/fxea/general';
const OUT = path.join(__dirname, '..', 'data', 'draft-only.js');
const MY_NAMES = ['hawkward', 'pizzaratops', 'steakosaurus', 'mfhfb'];

// Liste von Beyaz (23.11.2026). Neue Liga: Zeile ergänzen, Rest passiert automatisch.
// Optional dritter Eintrag = Kurzname (sonst „FBI Draft Only “ vom Namen abgeschnitten).
const LEAGUES = [
  ['kzsdzgcrmrtq3iro', 'FBI Draft Only H2H 21'],
  ['hfw2srjjmrtq935q', 'FBI Draft Only H2H 23'],
  ['kedazw7ems00gyg5', 'FBI Draft Only H2H 27'],
  ['yfdi4zc8ms00mlr5', 'FBI Draft Only H2H 29'],
  ['41yiazntms3rsd0p', 'FBI Draft Only H2H 30'],
  ['nzorb453ms3s0muc', 'FBI Draft Only H2H 31'],
  ['78e6978qms3s49aw', 'FBI Draft Only H2H 32'],
  ['kjoaaaohmsb1r60z', 'FBI Draft Only H2H 34'],
  ['6tq3m2b1msb1trn0', 'FBI Draft Only H2H 35'],
  ['z5m3tx1cmsd9u4ux', 'FBI Draft Only H2H 38'],
  ['tw4cwsbjmsmppmmr', 'FBI Draft Only H2H 42'],
  ['sus8zcbdmsmpsd5b', 'FBI Draft Only H2H 43'],
  ['16x1go6gmsmpvpou', 'FBI Draft Only H2H 44'],
  ['3igozgbhmsmpyzis', 'FBI Draft Only H2H 45'],
  ['gm5sa9z3msq27wua', 'FBI Draft Only H2H 49'],
  ['sz2gds61msq2g4l4', 'FBI Draft Only H2H 51'],
  ['5ldlhzt8mt45ivfy', 'FBI Draft Only H2H 59'],
  ['ppgc2gzgmt45lt40', 'FBI Draft Only H2H 60'],
  ['sizm7yskmt45oqll', 'FBI Draft Only H2H 61'],
  ['i6dpw5q7mt45rnxf', 'FBI Draft Only H2H 62'],
  ['4z8tb2bmmt45umiy', 'FBI Draft Only H2H 63'],
  ['hb4xr8odmt4wzqmg', 'FBI Draft Only H2H 65'],
  ['rq4hj0aamt4x2o9u', 'FBI Draft Only H2H 66'],
  ['gi98nhekmt4x5lk3', 'FBI Draft Only H2H 67'],
  ['19gl8sramt4x8iip', 'FBI Draft Only H2H 68'],
  ['c43tnewfmto6znxg', 'FBI Draft Only H2H 70'],
  ['tz5w0kvomto78h7s', 'FBI Draft Only H2H 73'],
  ['knlxgmdwmu8xbbvi', 'FBI Draft Only H2H 74'],
  ['tgph70evmu91b7sy', 'FBI Draft Only H2H 75'],
  ['63i93bhomu91fnhd', 'FBI Draft Only H2H 76'],
  ['8vqmzkdtmu9wb45h', 'FBI Draft Only H2H 77'],
  ['6mmteu0emuhsn4k3', 'FBI Draft Only H2H 82'],
  ['uiva4m9tmsb1gvpo', 'FBI Draft Only ROTO 16'],
  ['vbca3qmbmse3a33c', 'FBI Draft Only ROTO 18'],
  ['yrzj7kt5mu9aa779', 'FBI Draft Only ROTO 24'],
  ['9jfdu5bsmu9aib2e', 'FBI Draft Only ROTO 25'],
  ['xql4g25rmu9auoud', 'FBI Draft Only ROTO 26'],
  // 23.11.2026 nachgereicht
  ['94et3fq8mui6h13c', 'FBI Draft Only H2H - 10 CATS', 'H2H 10 Cats'],
  ['wfpkk2bomsfwg5qj', '2026-27 NBAFBG CA$H | H2H DOC | Berlin', 'CA$H Berlin'],
];

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function getJson(url) {
  for (let i = 0; i < 3; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'mfhfb-hq-bot', Accept: 'application/json' } });
      if (res.ok) return await res.json();
      if (res.status < 500 && res.status !== 429) throw new Error(`HTTP ${res.status}`);
    } catch (e) { if (i === 2) throw e; }
    await sleep(2000 * (i + 1));
  }
  throw new Error('keine Antwort');
}
const isMine = n => { const s = String(n || '').toLowerCase(); return MY_NAMES.some(m => s.includes(m)); };
const r1 = x => Math.round(x * 10) / 10;

function loadOld() {
  try {
    const src = fs.readFileSync(OUT, 'utf8');
    const m = src.match(/const WC_DRAFT_ONLY = (\{[\s\S]*\});/);
    return m ? JSON.parse(m[1]) : null;
  } catch (e) { return null; }
}

const shortOf = (name, short) => short || name.replace(/^FBI Draft Only /, '');
async function syncLeague(id, name, short) {
  const st = await getJson(`${BASE}/getStandings?leagueId=${id}`);
  if (!Array.isArray(st) || !st.length) throw new Error('leere Tabelle');
  const h2h = st.some(s => /^\d+(\.\d+)?-\d+(\.\d+)?(-\d+(\.\d+)?)?$/.test(String(s.points)));
  const rows = st.map(s => {
    const o = { rank: s.rank, name: s.teamName, fx: s.teamId };
    if (h2h) {
      const [w, l, t] = String(s.points).split('-').map(Number);
      Object.assign(o, { w: w || 0, l: l || 0, t: t || 0, pct: s.winPercentage || 0, gb: s.gamesBack || 0 });
    } else o.pts = Number(s.points) || 0;
    return o;
  }).sort((a, b) => a.rank - b.rank);
  let playoffTeams = null;
  if (h2h) {
    try { const info = await getJson(`${BASE}/getLeagueInfo?leagueId=${id}`); playoffTeams = ((info || {}).playoffs || {}).numPlayoffTeams || null; } catch (e) { /* optional */ }
  }
  const mine = rows.filter(r => isMine(r.name));
  const me = mine[0] || null;
  const L = { id, name, short: shortOf(name, short), type: h2h ? 'h2h' : 'roto', teams: rows.length, playoffTeams };
  if (mine.length > 1) L.note = `mehrere Treffer: ${mine.map(r => r.name).join(', ')}`;
  if (me) {
    const lead = rows[0], idx = rows.indexOf(me);
    Object.assign(L, { team: me.name, rank: me.rank, tied: rows.filter(r => r.rank === me.rank).length > 1, leader: lead === me ? null : lead.name });
    if (h2h) {
      Object.assign(L, { record: `${me.w}-${me.l}-${me.t}`, pct: me.pct, behind: me.gb });
      if (playoffTeams && rows.length > playoffTeams) {
        const cut = rows[playoffTeams - 1], next = rows[playoffTeams];
        // in den Playoffs: Vorsprung auf den ersten Nicht-Playoff-Platz; sonst Rückstand auf den letzten Playoff-Platz
        L.poGap = me.rank <= playoffTeams ? r1(next.gb - me.gb) : r1(me.gb - cut.gb);
      }
    } else {
      const above = rows[idx - 1], below = rows[idx + 1];
      Object.assign(L, { points: me.pts, behind: r1(lead.pts - me.pts), toNext: above ? r1(above.pts - me.pts) : null, overNext: below ? r1(me.pts - below.pts) : null });
    }
  } else L.teamsSeen = rows.map(r => r.name);
  return L;
}

async function main() {
  const old = loadOld();
  const oldById = new Map(((old && old.leagues) || []).map(l => [l.id, l]));
  const out = [];
  let ok = 0;
  for (const [id, name, short] of LEAGUES) {
    try {
      const L = await syncLeague(id, name, short);
      out.push(L); ok++;
      console.log(`  ✓ ${L.short.padEnd(8)} ${L.rank ? `${L.rank}./${L.teams} ${L.team}` : `kein eigenes Team gefunden (${(L.teamsSeen || []).join(', ')})`}`);
    } catch (e) {
      const prev = oldById.get(id);
      console.log(`  ✗ ${name}: ${e.message}${prev ? ' → alter Stand bleibt' : ''}`);
      out.push(prev ? { ...prev, stale: true } : { id, name, short: shortOf(name, short), error: e.message });
    }
    await sleep(300);
  }
  if (!ok) throw new Error('keine einzige Liga geladen — Datei bleibt unverändert');
  const data = { updated: new Date().toISOString(), leagues: out };
  fs.writeFileSync(OUT, `// ============================================================
//  WC_DRAFT_ONLY — Beyaz' Platz in seinen FBI-Draft-Only-Ligen (Fantrax),
//  AUTO-GENERIERT von leagues/worldcup/scripts/sync-draft-only.js
//  Stand: ${data.updated}
// ============================================================

const WC_DRAFT_ONLY = ${JSON.stringify(data)};
`, 'utf8');
  console.log(`${ok}/${LEAGUES.length} Ligen geladen → ${path.relative(process.cwd(), OUT)}`);
}

main().catch(e => { console.error('Draft-Only-Sync fehlgeschlagen:', e.message); process.exit(0); });
