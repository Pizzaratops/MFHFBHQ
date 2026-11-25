#!/usr/bin/env node
// ============================================================
//  sync-nba-prospect-board.js — Konsens-Big-Board NBA-Draft (Basketball)
// ============================================================
//  Gegenstück zu sports/nfl/scripts/sync-prospect-board.js (seit 24.11.2026).
//  Für die NBA gibt es kein frei abrufbares Konsens-Board wie Stick to the
//  Model, deshalb mitteln wir mehrere Boards selbst:
//
//    live (bei jedem Lauf neu geholt):
//      tk    Tankathon Big Board (tankathon.com/big_board, laufend gepflegt)
//      espn  ESPN Big Board (Jeremy Woo), über die öffentliche ABC7-Kopie;
//            neue ESPN-Ausgabe → URL unten in LIVE anpassen
//    fest (sports/nba/scripts/data/prospect-boards-static.json):
//      br    Bleacher Report (Wasserman), fs FanSided (Kline), …
//
//  Konsens = gewichteter Ø-Rang. Gewicht je Board = 0,5^(Alter in Tagen / 45)
//  (frische Boards zählen mehr; Tankathon als laufend gepflegtes Board mit
//  Alter 0). Fehlt ein Spieler auf einem Board, zählt dort Boardlänge + 10.
//  Aufgenommen wird, wer auf mindestens einem Board steht.
//
//  Ausgabe: sports/nba/data/prospect-board-nba.js (PROSPECT_BOARD_NBA),
//  nur bei geänderter Rangliste neu geschrieben (asof = Tag der Änderung),
//  mit Wochen-Bewegung (move) gegenüber der vorherigen Datei.
//  Schlägt ein Live-Abruf fehl, wird die Liste dieser Quelle aus der
//  vorherigen Datei weiterverwendet (mit ihrem alten Datum).
//
//  Aufruf:  node sync-nba-prospect-board.js            (holt live)
//           node sync-nba-prospect-board.js --from=DIR  (HTML-Dateien tankathon*.html/espn*.html aus DIR, zum Testen)
//  Läuft im Workflow „NBA Prospect Board“ (dienstags + manuell). Keine npm-Deps.
// ============================================================

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'data', 'prospect-board-nba.js');
const STATIC = path.join(__dirname, 'data', 'prospect-boards-static.json');
const HALF_LIFE = 45; // Tage
const MAX_OUT = 150;
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

const LIVE = [
  { key: 'tk', label: 'Tankathon Big Board', by: 'Tankathon', url: 'https://www.tankathon.com/big_board', parse: parseTankathon, rolling: true },
  { key: 'espn', label: 'ESPN Big Board (Woo) Top 100', by: 'Jeremy Woo, ESPN', url: 'https://abc7.com/post/2027-nba-draft-big-board-rankings-top-100-prospects/20017483/', parse: parseEspn },
];

const decode = s => String(s || '')
  .replace(/&amp;/g, '&').replace(/&#39;|&#039;|&#x27;|&apos;/g, "'").replace(/&quot;/g, '"')
  .replace(/&nbsp;/g, ' ').replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16))).replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
  .trim();
// Namens-Schlüssel: ohne Akzente, Suffixe, Satzzeichen
const nk = s => decode(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z]/g, '');
// bekannte Schreibvarianten zwischen den Boards
const ALIAS = { klarkriethauser: 'klarkreithauser', davisfogel: 'davisfogle', malachmoreno: 'malachimoreno', arfandiane: 'arafandiane', neoavdalas: 'neoklisavdalas', nikkhamenia: 'nikolaskhamenia' };
const key = s => { const k = nk(s); return ALIAS[k] || k; };

function parseTankathon(html) {
  const out = [];
  html.split('<div class="mock-row"').slice(1).forEach(b => {
    const rank = +((b.match(/mock-row-pick-number">(\d+)</) || [])[1]);
    const name = decode((b.match(/mock-row-name">([^<]+)</) || [])[1]);
    const sp = decode((b.match(/mock-row-school-position">([^<]+)</) || [])[1]);
    const age = parseFloat((b.match(/([\d.]+) yrs/) || [])[1]);
    if (!rank || !name) return;
    const [pos, school] = sp.split('|').map(x => x.trim());
    out.push({ rank, name, pos: pos || '', school: school || '', age: isNaN(age) ? null : age });
  });
  return { players: out, date: null };
}

function parseEspn(html) {
  const text = html.replace(/<(?:\/?(?:p|div|h\d|li|br|ul|ol|section|article)\b)[^>]*>/gi, '\n').replace(/<[^>]+>/g, '');
  const out = [], seen = new Set();
  decode(text).split('\n').forEach(l => {
    const m = l.trim().match(/^(\d{1,3})\.\s*(.+?),\s*([A-Z]{1,2}(?:\/[A-Z]{1,2})?),\s*(.+?)\s*(?:Age:\s*([\d.]+))?\s*$/);
    if (!m || seen.has(+m[1]) || +m[1] > 150) return;
    seen.add(+m[1]);
    out.push({ rank: +m[1], name: m[2].trim(), pos: m[3], school: m[4].replace(/\s*\|.*$/, '').trim(), age: m[5] ? +m[5] : null });
  });
  out.sort((a, b) => a.rank - b.rank);
  const d = (html.match(/"datePublished":"([^"]+)"/) || [])[1];
  return { players: out, date: d ? d.slice(0, 10) : null };
}

async function fetchText(url) {
  const r = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'text/html' } });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.text();
}

function loadPrev() {
  if (!fs.existsSync(OUT)) return null;
  try { return new Function(fs.readFileSync(OUT, 'utf8') + ';return PROSPECT_BOARD_NBA;')(); } catch (e) { return null; }
}

async function main() {
  const fromArg = (process.argv.find(a => a.startsWith('--from=')) || '').slice(7);
  const today = new Date().toISOString().slice(0, 10);
  const prev = loadPrev();
  const boards = [];

  for (const src of LIVE) {
    let res = null, err = null;
    try {
      let html;
      if (fromArg) {
        const f = fs.readdirSync(fromArg).find(x => x.startsWith(src.key === 'tk' ? 'tankathon' : 'espn'));
        if (!f) throw new Error('keine Testdatei');
        html = fs.readFileSync(path.join(fromArg, f), 'utf8');
      } else html = await fetchText(src.url);
      res = src.parse(html);
      if (res.players.length < (src.key === 'tk' ? 60 : 40)) throw new Error(`nur ${res.players.length} Einträge erkannt — Seitenstruktur geändert?`);
    } catch (e) { err = e.message; }
    if (res) {
      boards.push({ key: src.key, label: src.label, by: src.by, url: src.url, date: src.rolling ? today : (res.date || today), rolling: !!src.rolling, players: res.players.map(p => [p.rank, p.name, p.pos, p.school, p.age]) });
      console.log(`${src.key}: ${res.players.length} Einträge`);
    } else {
      const old = prev && (prev.sources || []).find(s => s.key === src.key);
      if (old && old.players) { boards.push({ ...old, stale: true }); console.warn(`${src.key}: Abruf fehlgeschlagen (${err}) → alte Liste vom ${old.date}`); }
      else console.warn(`${src.key}: Abruf fehlgeschlagen (${err}), keine alte Liste`);
    }
  }
  const S = JSON.parse(fs.readFileSync(STATIC, 'utf8'));
  S.boards.forEach(b => boards.push({ key: b.key, label: b.label, by: b.by, url: b.url, date: b.date, players: b.players.map(p => [p[0], p[1], p[2], p[3], null]) }));
  if (boards.length < 2) throw new Error('weniger als zwei Boards verfügbar — nichts geschrieben');

  // Gewichte
  const age = d => Math.max(0, (Date.parse(today) - Date.parse(d)) / 864e5);
  boards.forEach(b => { b.weight = +(b.rolling ? 1 : Math.pow(0.5, age(b.date) / HALF_LIFE)).toFixed(3); });

  // Spieler sammeln
  const P = new Map();
  boards.forEach(b => b.players.forEach(([rank, name, pos, school, ag]) => {
    const k = key(name);
    if (!P.has(k)) P.set(k, { name, pos, school, age: null, src: {} });
    const p = P.get(k);
    p.src[b.key] = rank;
    if (b.key === 'tk' || b.key === 'espn') { p.name = name; if (pos) p.pos = pos; if (school) p.school = school; }
    if (ag != null && p.age == null) p.age = ag;
  }));
  const wsum = boards.reduce((t, b) => t + b.weight, 0);
  const list = [...P.values()].map(p => {
    let s = 0;
    boards.forEach(b => { s += b.weight * (p.src[b.key] != null ? p.src[b.key] : b.players.length + 10); });
    return { ...p, score: s / wsum, n: Object.keys(p.src).length };
  }).sort((a, b) => a.score - b.score).slice(0, MAX_OUT);

  const prevRank = new Map(((prev && prev.players) || []).map(p => [key(p.name), p.rank]));
  const players = list.map((p, i) => {
    const pr = prevRank.get(key(p.name));
    return { rank: i + 1, name: p.name, pos: p.pos, school: p.school, age: p.age, score: +p.score.toFixed(1), src: p.src, move: pr ? pr - (i + 1) : null };
  });

  // nur bei Änderung schreiben (Reihenfolge + Quellenränge)
  const sig = x => JSON.stringify((x || []).map(p => [p.name, p.rank, p.src]));
  if (prev && sig(prev.players) === sig(players)) { console.log('unverändert — nichts geschrieben'); return; }
  // move gegenüber der VORHERIGEN Datei (gleicher Tag: alte move-Werte behalten)
  if (prev && prev.asof === today) { const pm = new Map(prev.players.map(p => [key(p.name), p.move])); players.forEach(p => { if (pm.has(key(p.name))) p.move = pm.get(key(p.name)); }); }

  // TTHQ-Kurve (NBA-Pick → typischer Slot im TTHQ-Draft) aus dem College Scouting mitliefern,
  // damit der Trade Analyzer Prospects je Pick-Slot zeigen kann, ohne die 1-MB-Datei zu laden
  let tthq = null;
  try { const f = path.join(ROOT, '..', 'cbb', 'data', 'college-prospects.js'); tthq = new Function(fs.readFileSync(f, 'utf8') + ';return COLLEGE_PROSPECTS.meta.tthq;')(); } catch (e) { /* optional */ }
  const data = {
    asof: today, draft: 2027, tthq,
    method: `Gewichteter Ø-Rang aus ${boards.length} Boards; Gewicht 0,5^(Alter/${HALF_LIFE} Tage), Tankathon laufend = 1; fehlt ein Spieler auf einem Board: Boardlänge + 10.`,
    sources: boards.map(b => ({ key: b.key, label: b.label, by: b.by, url: b.url, date: b.date, weight: b.weight, n: b.players.length, stale: !!b.stale, rolling: !!b.rolling, players: LIVE.some(l => l.key === b.key) ? b.players : undefined })),
    players,
  };
  const out = `// ============================================================
//  PROSPECT_BOARD_NBA — Konsens-Big-Board NBA-Draft ${data.draft}
// ============================================================
//  AUTO-GENERIERT von sports/nba/scripts/sync-nba-prospect-board.js
//  (Workflow „NBA Prospect Board“). Nicht von Hand ändern — feste Boards
//  stehen in sports/nba/scripts/data/prospect-boards-static.json.
//  Nur Anzeige im College Scouting / Trade Analyzer, fließt nicht ins Modell.
// ============================================================
const PROSPECT_BOARD_NBA = ${JSON.stringify(data)};
`;
  fs.writeFileSync(OUT, out, 'utf8');
  console.log(`${path.relative(process.cwd(), OUT)}: ${players.length} Prospects, ${boards.length} Boards (${boards.map(b => b.key + ' ' + b.weight).join(', ')})`);
}

main().catch(e => { console.error('NBA Prospect Board:', e.message); process.exit(1); });
