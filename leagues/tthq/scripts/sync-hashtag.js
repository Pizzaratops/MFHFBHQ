#!/usr/bin/env node
// ============================================================
//  HASHTAG SYNC — Hashtag-Basketball-Dynasty-Rankings → data/hashtag.js
// ============================================================
//  Holt https://hashtagbasketball.com/fantasy-basketball-dynasty-rankings
//  (Karten-Layout seit 2026: .dyn-rank / .dyn-name / .dyn-meta-Badges) und
//  ersetzt HASHTAG_RANKINGS in data/hashtag.js. MATT_RANKS bleibt unberührt.
//  Format wie bisher: [rank, name, team, "POS,POS"]; Draft-Platzhalter
//  („2027 Draft (Pick 1)“) mit team "DRA".
//
//  Schutz: weniger als 200 Spieler oder Ränge nicht lückenlos → Abbruch
//  ohne Schreiben. Seite liefert „Updated: <Datum>“ → steht im Dateikopf.
//
//  Usage: node leagues/tthq/scripts/sync-hashtag.js   (HASHTAG_HTML=datei = lokaler Test)
//  Workflow: .github/workflows/tthq-hashtag.yml (wöchentlich + manuell)
// ============================================================

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'data', 'hashtag.js');
const URL = 'https://hashtagbasketball.com/fantasy-basketball-dynasty-rankings';
const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

const unescape = s => String(s)
  .replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));

function parse(html) {
  const rows = [];
  const re = /<div class="dyn-rank">(\d+)<[\s\S]*?<div class="dyn-name">([\s\S]*?)<span[\s\S]*?<div class="dyn-meta">([\s\S]*?)<\/div>/g;
  let m;
  while ((m = re.exec(html))) {
    const rank = Number(m[1]), name = unescape(m[2].trim());
    const badges = [...m[3].matchAll(/<span class="badge[^"]*">([\s\S]*?)<\/span>/g)].map(b => unescape(b[1]).trim()).filter(b => !/yo$/.test(b));
    if (/Draft/.test(name)) { rows.push([rank, name, 'DRA', '']); continue; }
    rows.push([rank, name, badges[badges.length - 1] || '', badges.slice(0, -1).join(',')]);
  }
  const updated = ((html.replace(/<[^>]+>/g, ' ').match(/Updated:\s*([0-9]{1,2}\s+\w+\s+\d{4})/) || [])[1] || '').trim();
  return { rows, updated };
}

(async () => {
  let html;
  if (process.env.HASHTAG_HTML) html = fs.readFileSync(process.env.HASHTAG_HTML, 'utf8');
  else {
    for (let i = 1; i <= 3; i++) {
      try { const r = await fetch(URL, { headers: { 'user-agent': UA } }); if (!r.ok) throw new Error('HTTP ' + r.status); html = await r.text(); break; }
      catch (e) { if (i === 3) throw e; console.warn(`… ${e.message}, neuer Versuch`); await new Promise(r => setTimeout(r, 4000 * i)); }
    }
  }
  const { rows, updated } = parse(html);
  if (rows.length < 200 || rows.some((r, i) => r[0] !== i + 1)) {
    console.error(`Abbruch: ${rows.length} Zeilen bzw. Ränge nicht lückenlos — hashtag.js bleibt unverändert.`);
    process.exit(1);
  }
  const src = fs.readFileSync(OUT, 'utf8');
  const a = src.indexOf('const HASHTAG_RANKINGS = ['), b = src.indexOf('\n];', a);
  if (a < 0 || b < 0) throw new Error('HASHTAG_RANKINGS-Block in hashtag.js nicht gefunden');
  const head = `// ============================================================
//  HASHTAG_RANKINGS — Hashtag Basketball Dynasty Rankings (9-Cat)
//  AUTO-GENERIERT von leagues/tthq/scripts/sync-hashtag.js
//  Stand Hashtag: ${updated || 'unbekannt'} · ${rows.length} Einträge · geholt ${new Date().toISOString().slice(0, 10)}
//  MATT_RANKS weiter unten: Matt Lawson, über blend-dynasty-with-external.js
// ============================================================
`;
  const block = 'const HASHTAG_RANKINGS = [\n' + rows.map(r => '  ' + JSON.stringify(r)).join(',\n') + '\n];';
  const rest = src.slice(b + 3);
  fs.writeFileSync(OUT, head + block + rest, 'utf8');
  console.log(`Geschrieben: ${rows.length} Hashtag-Einträge (Stand ${updated}).`);
})().catch(e => { console.error(e); process.exit(1); });
