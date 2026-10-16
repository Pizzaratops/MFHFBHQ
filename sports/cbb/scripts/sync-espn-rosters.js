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
  const out = {}, coach = {}, prev = {}, sched = {};
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
  // Spielplan: erst Varianten an einer Schule testen (Notice im Actions-Log), dann die beste nehmen
  const BASE = 'https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball';
  const et = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' });
  const ymd = d => d.toISOString().slice(0, 10).replace(/-/g, '');
  const getJ = async u => { const r = await fetch(u); if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); };
  const evDates = j => (j.events || []).map(ev => et.format(new Date(ev.date)));
  const probeId = (SCHOOLS.find(x => x.short === 'Ill') || SCHOOLS[0]).espn;
  const variants = {
    team: id => `${BASE}/teams/${id}/schedule?season=${season}`,
    teamType: id => `${BASE}/teams/${id}/schedule?season=${season}&seasontype=2`,
    teamPlain: id => `${BASE}/teams/${id}/schedule`,
  };
  let use = null; const probe = [];
  for (const [k, f] of Object.entries(variants)) {
    try { const d = evDates(await getJ(f(probeId))).filter(x => x >= `${season - 1}-10-01`); probe.push(`${k} ${d.length}${d.length ? ' ab ' + d[0] : ''}`); if (!use && d.length >= 10) use = k; }
    catch (e) { probe.push(`${k} ${e.message}`); }
  }
  let sbDay = 0;
  try { sbDay = (await getJ(`${BASE}/scoreboard?dates=${season - 1}1110&groups=50&limit=500`)).events?.length || 0; } catch (e) { /* egal */ }
  probe.push(`scoreboard(10.11.) ${sbDay}`);
  console.log(`::notice title=ESPN-Spielplan-Test::${probe.join(' · ')} → ${use || (sbDay ? 'scoreboard' : 'nichts')}`);
  const byEspn = {}; SCHOOLS.forEach(x => { byEspn[String(x.espn)] = x.short; sched[x.short] = []; });
  let games = 0;
  if (use) {
    for (const x of SCHOOLS) {
      try { sched[x.short] = Array.from(new Set(evDates(await getJ(variants[use](x.espn))).filter(d => d >= `${season - 1}-10-01`))).sort(); games += sched[x.short].length; }
      catch (e) { console.warn(`  ! Spielplan ${x.name}: ${e.message}`); }
    }
  } else if (sbDay) {
    // Tag für Tag übers Scoreboard (1. Nov – 15. März)
    for (let d = new Date(Date.UTC(season - 1, 10, 1)); d <= new Date(Date.UTC(season, 2, 15)); d = new Date(d.getTime() + 864e5)) {
      try {
        const j = await getJ(`${BASE}/scoreboard?dates=${ymd(d)}&groups=50&limit=500`);
        (j.events || []).forEach(ev => {
          const day = et.format(new Date(ev.date)); games++;
          (((ev.competitions || [])[0] || {}).competitors || []).forEach(c => { const sh = byEspn[String(c.id || (c.team && c.team.id))]; if (sh && !sched[sh].includes(day)) sched[sh].push(day); });
        });
      } catch (e) { console.warn(`  ! Scoreboard ${ymd(d)}: ${e.message}`); }
    }
    Object.values(sched).forEach(v => v.sort());
  }
  const withG = Object.values(sched).filter(v => v.length).length;
  console.log(`::notice title=ESPN-Spielplan::${games} Spiel-Termine, ${withG} Schulen mit Terminen`);
  if (!withG) console.log('::warning title=ESPN-Spielplan::keine Termine gefunden');
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

// Spieltage je Schule (US-Ostküsten-Datum), reguläre Saison laut ESPN-Spielplan
const CBB_GAME_DATES = ${JSON.stringify(sched)};

// Head Coach der Vorsaison (${season - 1}) laut ESPN — Vergleich zeigt Trainerwechsel
const CBB_ESPN_COACHES_PREV = ${JSON.stringify(prev)};
`, 'utf8');
  console.log(`espn-rosters.js: ${Object.keys(out).length} Schulen, ${n} Spieler, ${fail} Fehler.`);
}
main().catch(e => { console.error('ESPN-Kader fehlgeschlagen:', e.message); console.log(`::error title=ESPN-Kader::${e.message}`); process.exitCode = 1; });
