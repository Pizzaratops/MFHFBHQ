#!/usr/bin/env node
// ============================================================
//  ESPN-Kader der 156 Pool-Schulen (Dizzle CBB), seit 16.10.2026
// ============================================================
//  site.api.espn.com/.../mens-college-basketball/teams/<id>/roster → je Spieler
//  ESPN-ID, Name, Position, Größe, Gewicht, Klasse (Freshman … Senior/Graduate).
//  Grundlage für Projections (Minuten-/Rollenverteilung je Kader) und Dynasty
//  (Restjahre). Schreibt sports/cbb/data/espn-rosters.js (CBB_ESPN_ROSTERS).
//  Läuft wöchentlich in cbb-sync.yml (Montag 07 Uhr) bzw. manuell.
// ============================================================

const fs = require('fs');
const path = require('path');

const DATA = path.join(__dirname, '..', 'data');
const SCHOOLS = new Function(`${fs.readFileSync(path.join(DATA, 'schools.js'), 'utf8')}\n;return CBB_SCHOOLS;`)();
const URL = id => `https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams/${id}/roster`;
const inch = h => { const m = String(h || '').match(/(\d+)'\s*(\d+)/); return m ? Number(m[1]) * 12 + Number(m[2]) : null; };

async function main() {
  const out = {}, coach = {}, prev = {};
  const season = Number(process.env.CBB_SEASON || (new Date().getUTCMonth() >= 7 ? new Date().getUTCFullYear() + 1 : new Date().getUTCFullYear()));
  let fail = 0, n = 0, firstErr = '';
  for (const s of SCHOOLS) {
    try {
      const res = await fetch(URL(s.espn)); // ohne eigenen User-Agent (ESPN blockt „bot“)
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const j = await res.json();
      const list = (j.athletes || []).flatMap(a => (a.items ? a.items : [a]));
      const c = Array.isArray(j.coach) ? j.coach[0] : j.coach;
      if (c) coach[s.short] = [`${c.firstName || ''} ${c.lastName || ''}`.trim(), c.experience ?? null];
      out[s.short] = list.map(a => [String(a.id), a.fullName || a.displayName, (a.position && a.position.abbreviation) || '',
        inch(a.displayHeight) || (a.height ? Math.round(a.height) : null), a.weight ? Math.round(a.weight) : null,
        (a.experience && (a.experience.abbreviation || a.experience.displayValue)) || '', a.experience ? a.experience.years ?? null : null]);
      n += out[s.short].length;
      // Coach der Vorsaison (Trainerwechsel → Team-Stil weniger stabil)
      try {
        const pj = await (await fetch(URL(s.espn) + '?season=' + (season - 1))).json();
        const pc = Array.isArray(pj.coach) ? pj.coach[0] : pj.coach;
        if (pc) prev[s.short] = `${pc.firstName || ''} ${pc.lastName || ''}`.trim();
      } catch (e) { /* egal */ }
    } catch (e) { fail++; if (!firstErr) firstErr = `${s.name}: ${e.message}`; console.warn(`  ! ${s.name}: ${e.message}`); }
  }
  if (n < 500) throw new Error(`nur ${n} Spieler, ${fail} Fehler (erster: ${firstErr}) — Datei bleibt`);
  fs.writeFileSync(path.join(DATA, 'espn-rosters.js'), `// ============================================================
//  CBB_ESPN_ROSTERS — ESPN-Kader der Pool-Schulen, AUTO-GENERIERT (sync-espn-rosters.js)
//  Stand: ${new Date().toISOString()} · Zeile: [espnId, Name, Pos, Größe (Zoll), Gewicht (lbs), Klasse, Jahre]
// ============================================================

const CBB_ESPN_ROSTERS = {
${Object.entries(out).map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)}`).join(',\n')}
};

// Head Coach je Schule [Name, Jahre an der Schule] — Stil-Faktoren hängen am Coach
const CBB_ESPN_COACHES = ${JSON.stringify(coach)};

// Head Coach der Vorsaison (${season - 1}) laut ESPN — Vergleich zeigt Trainerwechsel
const CBB_ESPN_COACHES_PREV = ${JSON.stringify(prev)};
`, 'utf8');
  console.log(`espn-rosters.js: ${Object.keys(out).length} Schulen, ${n} Spieler, ${fail} Fehler.`);
}
main().catch(e => { console.error('ESPN-Kader fehlgeschlagen:', e.message); console.log(`::error title=ESPN-Kader::${e.message}`); process.exitCode = 1; });
