#!/usr/bin/env node
// ============================================================
//  sync-prospect-board.js — Konsens-Big-Board (Stick to the Model)
// ============================================================
//  Holt https://sticktothemodel.com/draft/prospect-overview/big-board
//  (öffentlich, Konsens-Rang + eigener Modell-Score der Seite, laut Seite
//  wöchentlich aktualisiert) und schreibt die Skill-Positionen
//  (QB/RB/WR/TE) nach sports/nfl/data/prospect-board.js.
//
//  Zuordnung: Headshot-ID im Board = ESPN-Athleten-ID = CFBD-ID = rawId in
//  COLLEGE_SCOUTING. Fallback: Name + Position.
//  Die Datei wird nur neu geschrieben, wenn sich die Rangliste geändert
//  hat (dann ist "asof" = Tag der Änderung).
//
//  Läuft im Workflow „NFL College Scouting Sync“ (täglich). Keine
//  npm-Abhängigkeiten.
// ============================================================

const fs = require('fs');
const path = require('path');

const URL = 'https://sticktothemodel.com/draft/prospect-overview/big-board';
const ROOT = path.join(__dirname, '..', 'data');
const OUT = path.join(ROOT, 'prospect-board.js');
const POS = ['QB', 'RB', 'WR', 'TE'];

const decode = s => String(s || '')
  .replace(/&amp;/g, '&').replace(/&#39;|&#039;|&apos;/g, "'").replace(/&quot;/g, '"')
  .replace(/&middot;/g, '·').replace(/&nbsp;/g, ' ').replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16))).replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
  .trim();
const norm = s => decode(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
  .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z]/g, '');

function parse(html) {
  const rows = html.split('<tr data-rank="').slice(1).map(r => r.slice(0, r.indexOf('</tr>')));
  const out = [];
  for (const r of rows) {
    const attr = k => { const m = r.match(new RegExp(`data-${k}="([^"]*)"`)); return m ? m[1] : null; };
    const rank = parseInt(r, 10);
    const pos = attr('pos');
    if (!rank || !POS.includes(pos)) continue;
    // Zellen nach Klasse: <td class="X">…</td>
    const cell = cls => { const m = r.match(new RegExp(`<td class="[^"]*\\b${cls}\\b[^"]*">([\\s\\S]*?)</td>`)); return m ? m[1] : ''; };
    const text = h => decode(String(h).replace(/<small[\s\S]*?<\/small>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' '));
    const nm = cell('nm');
    const id = (nm.match(/players\/full\/(\d+)\.png/) || r.match(/players\/full\/(\d+)\.png/) || [])[1] || null;
    const slug = (nm.match(/href="\/player\/([^"#]+)"/) || [])[1] || null;
    const name = decode((nm.match(/data-name="([^"]+)"/) || nm.match(/<a href="\/player\/[^"]+">([^<]+)<\/a>/) || [])[1]
      || ((nm.match(/alt="([^",]+),/) || [])[1]) || '');
    const school = text(cell('sch'));
    const tier = text(cell('col-tier'));
    const comp = (cell('col-comp').match(/<a[^>]*>([^<]+)<\/a>/) || [])[1];
    const num = k => { const v = parseFloat(attr(k)); return Number.isFinite(v) ? v : null; };
    out.push({ rank, id, slug, name, pos, school, model: num('model'), tier: tier || null,
      move: num('move'), start: num('start'), comp: comp || null });
  }
  return out;
}

async function main() {
  const res = await fetch(URL, { headers: { 'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36' } });
  if (!res.ok) throw new Error(`Board nicht ladbar: HTTP ${res.status}`);
  const html = await res.text();
  const total = (html.match(/<tr data-rank="/g) || []).length;
  const list = parse(html);
  if (total < 200 || list.length < 80) throw new Error(`Board-Struktur unerwartet (${total} Zeilen, ${list.length} Skill-Spieler) -- Seite geändert? Nichts geschrieben.`);

  // Zuordnung zu COLLEGE_SCOUTING
  let scouting = null;
  try { scouting = new Function(fs.readFileSync(path.join(ROOT, 'college-scouting.js'), 'utf8') + ';return COLLEGE_SCOUTING')(); } catch (e) { console.warn('college-scouting.js nicht lesbar:', e.message); }
  const ids = new Set(), byName = new Map();
  if (scouting) for (const p of Object.keys(scouting.recent || {})) for (const r of scouting.recent[p]) {
    ids.add(String(r.rawId));
    const k = p + '|' + norm(r.name); if (!byName.has(k)) byName.set(k, new Set()); byName.get(k).add(String(r.rawId));
  }
  const players = {}, posCount = {};
  let byId = 0, viaName = 0, unmatched = [];
  for (const p of list) {
    posCount[p.pos] = (posCount[p.pos] || 0) + 1;
    let key = null;
    if (p.id && ids.has(p.id)) { key = p.id; byId++; }
    else { const c = byName.get(p.pos + '|' + norm(p.name)); if (c && c.size === 1) { key = [...c][0]; viaName++; } }
    if (!key) { unmatched.push(`${p.rank} ${p.name}`); key = p.id || 'x-' + p.slug; }
    players[key] = { rank: p.rank, posRank: posCount[p.pos], name: p.name, pos: p.pos, school: p.school,
      model: p.model, tier: p.tier, move: p.move, start: p.start, comp: p.comp, slug: p.slug };
  }

  // Nur schreiben, wenn sich inhaltlich etwas geändert hat
  let old = null;
  try { old = new Function(fs.readFileSync(OUT, 'utf8') + ';return PROSPECT_BOARD')(); } catch (_) { /* erste Ausführung */ }
  const sig = JSON.stringify(players);
  if (old && JSON.stringify(old.players) === sig) { console.log(`Board unverändert (${list.length} Skill-Spieler) -- nichts geschrieben.`); return; }

  const today = new Date().toISOString().slice(0, 10);
  const data = { source: 'Stick to the Model — Konsens-Big-Board', url: URL, asof: today, total, players };
  const txt = `// ============================================================
//  PROSPECT_BOARD — Konsens-Big-Board (Stick to the Model)
// ============================================================
//  AUTO-GENERIERT von sports/nfl/scripts/sync-prospect-board.js
//  (Workflow „NFL College Scouting Sync“). Nicht von Hand editieren.
//  Schlüssel = rawId aus COLLEGE_SCOUTING. rank = Konsens-Rang gesamt,
//  posRank = Rang innerhalb der Position, model = Modell-Score der Seite
//  (0–100), tier = Draft-Projektion der Seite, move = Veränderung zur
//  Vorwoche, start = Chance auf 3+ Jahre NFL-Starter (%), comp = Pro-Comp.
//  asof = Tag, an dem sich das Board zuletzt geändert hat.
// ============================================================

const PROSPECT_BOARD = ${JSON.stringify(data, null, 1)};
`;
  fs.writeFileSync(OUT, txt);
  console.log(`prospect-board.js geschrieben: ${list.length} Skill-Spieler von ${total} (per ID ${byId}, per Name ${viaName}, ohne Zuordnung ${unmatched.length}).`);
  if (unmatched.length) console.log('Ohne Zuordnung (erste 25):', unmatched.slice(0, 25).join('; '));
}

main().catch(err => { console.error(err.message); process.exit(1); });
