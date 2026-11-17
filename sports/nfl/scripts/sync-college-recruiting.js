#!/usr/bin/env node
// ============================================================
//  COLLEGE RECRUITING SYNC — HS-Jahrgang + Recruiting-Rating
// ============================================================
//  Holt die Recruiting-Klassen von CollegeFootballData.com
//  (/recruiting/players, HighSchool + JUCO) für die Skill-Positionen und
//  schreibt sports/nfl/data/college-recruiting.js -> COLLEGE_RECRUITING.
//
//  Wofür (17.11.2026):
//   1. Draft-Berechtigung: NFL-Regel = 3 Jahre nach dem High-School-
//      Abschluss. Recruiting-Jahrgang Y (HighSchool) -> berechtigt ab Draft
//      Y + 3. Vorher wurde das College-Jahr aus der ersten FBS-Saison mit
//      Mindest-Volumen geschätzt -> Spieler mit wenig Einsatz als Freshman
//      (z. B. Charlie Becker) galten fälschlich als nicht berechtigt.
//   2. Modell-Feature: Recruiting-Rating (Stars/Rating) als Talent-Prior für
//      das Draft-Range-Modell (build-prospect-draft-model.py).
//
//  Cache: abgeschlossene Jahrgänge werden aus der bestehenden Datei
//  übernommen; neu geholt werden fehlende Jahrgänge und die zwei jüngsten.
//  ~2 Calls je Jahrgang. Braucht CFBD_API_KEY (Repo-Secret).
//
//  Ausgabe: COLLEGE_RECRUITING = { meta, byId: { athleteId: rec }, noId: [rec] }
//    rec = { n: Name, y: Jahrgang, t: 'HS'|'JUCO', p: Position, s: Stars,
//            r: Rating (0–1), k: nationaler Rang, c: College (committedTo) }
//  Spieler ohne athleteId (ältere Jahrgänge) landen in noId und werden über
//  Name + College zugeordnet.
// ============================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const https = require('https');

const OUT = path.join(__dirname, '..', 'data', 'college-recruiting.js');
const API_KEY = (process.env.CFBD_API_KEY || '').trim();
const FIRST_CLASS = 2009; // Jahrgang 2009 = Spieler, die ab 2013 noch im College stehen können
const POS = new Set(['WR', 'RB', 'TE', 'QB', 'PRO', 'DUAL', 'ATH', 'APB', 'FB']);
const sleep = ms => new Promise(r => setTimeout(r, ms));

function currentSeason() {
  const now = new Date();
  return now.getUTCMonth() + 1 >= 7 ? now.getUTCFullYear() : now.getUTCFullYear() - 1;
}

function cfbdGet(pathAndQuery, attempt = 0) {
  return new Promise((resolve, reject) => {
    https.get({
      hostname: 'api.collegefootballdata.com', path: pathAndQuery,
      headers: { Authorization: `Bearer ${API_KEY}`, Accept: 'application/json', 'User-Agent': 'mfhfb-hq-bot' },
    }, res => {
      if (res.statusCode === 429 && attempt < 5) {
        res.resume();
        const wait = Math.min(2000 * 2 ** attempt, 20000);
        sleep(wait).then(() => resolve(cfbdGet(pathAndQuery, attempt + 1)));
        return;
      }
      let data = '';
      res.on('data', c => { data += c; });
      res.on('end', () => {
        if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} ${pathAndQuery}: ${data.slice(0, 200)}`));
        try { resolve(JSON.parse(data)); } catch (e) { reject(new Error(`JSON ${pathAndQuery}: ${e.message}`)); }
      });
    }).on('error', reject);
  });
}

function loadCache() {
  if (!fs.existsSync(OUT)) return null;
  try {
    const sb = {}; vm.createContext(sb);
    vm.runInContext(fs.readFileSync(OUT, 'utf8') + '\nthis.D = COLLEGE_RECRUITING;', sb);
    return sb.D || null;
  } catch (e) { return null; }
}

const r3 = x => (x == null ? null : Math.round(x * 1e4) / 1e4);
function compact(x, type) {
  return { n: x.name, y: x.year, t: type, p: x.position, s: x.stars ?? null, r: r3(x.rating), k: x.ranking ?? null, c: x.committedTo || null };
}

async function main() {
  if (!API_KEY) { console.error('FEHLER: CFBD_API_KEY ist nicht gesetzt.'); process.exit(1); }
  const cur = currentSeason();
  const cache = loadCache();
  const done = new Set(cache && cache.meta && cache.meta.classes || []);
  const byId = {}, noId = [];
  // Alt-Daten übernehmen (nur Jahrgänge, die nicht neu geholt werden)
  const refetch = y => !done.has(y) || y >= cur - 1;
  if (cache) {
    Object.entries(cache.byId || {}).forEach(([id, rec]) => { if (!refetch(rec.y)) byId[id] = rec; });
    (cache.noId || []).forEach(rec => { if (!refetch(rec.y)) noId.push(rec); });
  }
  const classes = [];
  for (let y = FIRST_CLASS; y <= cur + 1; y++) {
    classes.push(y);
    if (!refetch(y)) continue;
    for (const [cls, type] of [['HighSchool', 'HS'], ['JUCO', 'JUCO']]) {
      try {
        const list = await cfbdGet(`/recruiting/players?year=${y}&classification=${cls}`);
        let n = 0;
        list.forEach(x => {
          if (!POS.has(x.position)) return;
          const rec = compact(x, type); n++;
          if (x.athleteId != null && x.athleteId !== '') {
            const id = String(x.athleteId);
            // HS-Eintrag hat Vorrang (bestimmt die Draft-Berechtigung)
            if (!byId[id] || (byId[id].t === 'JUCO' && type === 'HS')) byId[id] = rec;
          } else noId.push(rec);
        });
        console.log(`${y} ${cls}: ${list.length} Recruits, ${n} Skill-Positionen`);
      } catch (e) {
        console.log(`${y} ${cls}: FEHLER ${e.message}`);
        if (type === 'HS') classes.pop();
        break;
      }
      await sleep(400);
    }
  }
  const out = {
    meta: { lastSync: new Date().toISOString(), classes, source: 'CollegeFootballData.com /recruiting/players (HighSchool + JUCO)' },
    byId, noId,
  };
  const body = `// ============================================================
//  COLLEGE_RECRUITING — Recruiting-Jahrgang + Rating (Skill-Positionen)
// ============================================================
//  AUTO-GENERIERT von sports/nfl/scripts/sync-college-recruiting.js.
//  Nicht von Hand editieren. Verwendung: Draft-Berechtigung (HS-Jahrgang
//  + 3) und Talent-Prior im Draft-Range-Modell.
//  rec = { n Name, y Jahrgang, t HS|JUCO, p Position, s Stars, r Rating,
//          k nationaler Rang, c College }
// ============================================================

const COLLEGE_RECRUITING = ${JSON.stringify(out)};
`;
  fs.writeFileSync(OUT, body, 'utf8');
  console.log(`\n✅ ${OUT}: ${Object.keys(byId).length} mit athleteId, ${noId.length} ohne (${Math.round(body.length / 1024)} KB)`);
}

main().catch(e => { console.error('❌', e.message); process.exit(1); });
