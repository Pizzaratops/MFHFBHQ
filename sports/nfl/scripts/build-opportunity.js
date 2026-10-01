#!/usr/bin/env node
// ============================================================
//  OPPORTUNITY RADAR — Usage je Spieler & Woche + Verletzungen
// ============================================================
//  Für #/<liga>/opportunity (tools/nfl-opportunity.js): freie Spieler mit
//  mehr Rolle als Punkten, steigende Rollen, und „Ausfälle“ (wohin geht
//  der Target-/Carry-Anteil, wenn ein Spieler fehlt).
//
//  Quellen (nflverse, frei, ohne Key):
//   - stats_player_week_<saison>.csv : Targets, Target Share, Air Yards
//     Share, WOPR, Carries, PPR-Punkte je Spieler und Woche
//   - snap_counts_<saison>.csv       : Offense-Snap-Anteil (= wer gespielt hat)
//   - injuries_<saison>.csv          : offizieller Injury Report der Woche
//  Saisons: laufende + Vorsaison (für „mit/ohne“-Vergleiche bei Ausfällen).
//  Nur RB/WR/TE (QB optional über ihre Läufe nicht nötig).
//
//  Output: sports/nfl/data/opportunity.js → OPPORTUNITY
//   { season, lastWeek, updatedAt,
//     teams: { [saison]: { [team]: { [woche]: [tgt, car] } } },   // Team-Summen
//     players: [ { id, n, pos, t, w: { [saison]: [[woche, team, tgt, tgtSh, aySh, car, snap%, ppr, recYd, rushYd], …] } } ],
//     injuries: [ { id, n, pos, t, st, inj, wk } ] }               // aktuelle Woche
//  Läuft im NFL-Sync (.github/workflows/nfl-sync.yml). Nicht fatal.
// ============================================================

const fs = require('fs');
const path = require('path');
const { httpsGetText, parseCsv, normTeam } = require('./lib/nflverse');

const OUT = path.join(__dirname, '..', 'data', 'opportunity.js');
const REL = 'https://github.com/nflverse/nflverse-data/releases/download';
const POS = new Set(['RB', 'WR', 'TE', 'FB']);
const num = v => (v === '' || v == null || v === 'NA' ? 0 : Number(v) || 0);
const r3 = v => Math.round(v * 1000) / 1000;
const key = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');

function currentSeason() {
  const d = new Date();
  return d.getUTCMonth() + 1 >= 8 ? d.getUTCFullYear() : d.getUTCFullYear() - 1;
}

async function csv(url) {
  try { return parseCsv(await httpsGetText(url)); } catch (e) { console.warn(`  übersprungen: ${url.split('/').pop()} (${e.message})`); return null; }
}

async function season(s, players, teams) {
  const stats = await csv(`${REL}/stats_player/stats_player_week_${s}.csv`);
  if (!stats) return 0;
  const snaps = (await csv(`${REL}/snap_counts/snap_counts_${s}.csv`)) || [];
  const T = teams[s] = {};
  const snapBy = new Map(); // key|team|week -> offense_pct
  snaps.filter(r => r.game_type === 'REG').forEach(r => {
    snapBy.set(`${key(r.player)}|${normTeam(r.team)}|${r.week}`, { pct: num(r.offense_pct), snaps: num(r.offense_snaps), pos: r.position, name: r.player, pfr: r.pfr_player_id });
  });
  const reg = stats.filter(r => r.season_type === 'REG');
  // Team-Summen (alle Positionen, damit Shares stimmen)
  reg.forEach(r => {
    const t = normTeam(r.team), w = r.week;
    T[t] = T[t] || {}; T[t][w] = T[t][w] || [0, 0];
    T[t][w][0] += num(r.targets); T[t][w][1] += num(r.carries);
  });
  let lastWeek = 0;
  const seen = new Set();
  reg.forEach(r => {
    if (!POS.has(r.position)) return;
    const t = normTeam(r.team), w = Number(r.week);
    lastWeek = Math.max(lastWeek, w);
    const k = key(r.player_display_name);
    const sn = snapBy.get(`${k}|${t}|${w}`);
    seen.add(`${k}|${t}|${w}`);
    const p = players.get(r.player_id) || { id: r.player_id, n: r.player_display_name, pos: r.position === 'FB' ? 'RB' : r.position, t, w: {} };
    p.t = t; p.n = r.player_display_name;
    (p.w[s] = p.w[s] || []).push([w, t, num(r.targets), r3(num(r.target_share)), r3(num(r.air_yards_share)), num(r.carries),
      sn ? Math.round(sn.pct * 100) : null, Math.round(num(r.fantasy_points_ppr) * 10) / 10, num(r.receiving_yards), num(r.rushing_yards)]);
    players.set(r.player_id, p);
  });
  // Spieler mit Snaps, aber ohne Statzeile (0 Targets/Carries) → trotzdem „gespielt“
  const byName = new Map([...players.values()].map(p => [key(p.n) + '|' + p.t, p]));
  snapBy.forEach((sn, k3) => {
    if (seen.has(k3) || !POS.has(sn.pos) || sn.snaps <= 0) return;
    const [k, t, w] = k3.split('|');
    let p = byName.get(k + '|' + t);
    if (!p) { p = { id: 'pfr:' + sn.pfr, n: sn.name, pos: sn.pos === 'FB' ? 'RB' : sn.pos, t, w: {} }; players.set(p.id, p); byName.set(k + '|' + t, p); }
    (p.w[s] = p.w[s] || []).push([Number(w), t, 0, 0, 0, 0, Math.round(sn.pct * 100), 0, 0, 0]);
  });
  players.forEach(p => { if (p.w[s]) p.w[s].sort((a, b) => a[0] - b[0]); });
  return lastWeek;
}

async function main() {
  const cur = currentSeason();
  const players = new Map(), teams = {};
  await season(cur - 1, players, teams);
  const lastWeek = await season(cur, players, teams);
  if (!lastWeek) { console.warn(`Noch keine Wochen-Stats für ${cur} -- Datei bleibt unverändert.`); return; }

  // Verletzungen: jüngste Woche des Injury Reports, nur RB/WR/TE
  const inj = (await csv(`${REL}/injuries/injuries_${cur}.csv`)) || [];
  const regInj = inj.filter(r => r.season_type === 'REG' || r.game_type === 'REG');
  const maxWk = Math.max(0, ...regInj.map(r => num(r.week)));
  // Früh in der Woche (Mi/Do) gibt es nur Trainingsstatus, den Spielstatus
  // (Out/Doubtful/Questionable) erst am Freitag. Dann: Training „DNP“/„Limited“
  // mit echter Verletzung als Vorstufe zeigen.
  const injuries = [];
  regInj.filter(r => num(r.week) === maxWk && POS.has(r.position)).forEach(r => {
    const prac = r.practice_status || '';
    const injury = r.report_primary_injury || r.practice_primary_injury || '';
    if (/not injury related/i.test(injury)) return;
    const st = r.report_status || (/did not participate/i.test(prac) ? 'DNP' : /limited/i.test(prac) ? 'Limited' : '');
    if (!st) return;
    injuries.push({ id: r.gsis_id, n: r.full_name, pos: r.position === 'FB' ? 'RB' : r.position, t: normTeam(r.team), st, inj: injury, wk: maxWk });
  });

  // Nur Spieler mit Daten in der laufenden oder Vorsaison behalten; Vorsaison nur, wenn er dieses Jahr auch auftaucht
  // oder für Mit/Ohne-Vergleiche relevant ist (Team-Kollegen) -- einfach: alle mit ≥1 Target/Carry.
  const list = [...players.values()].filter(p => Object.values(p.w).some(ws => ws.some(x => x[2] + x[5] > 0)));
  const out = { season: cur, lastWeek, injuryWeek: maxWk, updatedAt: new Date().toISOString(), teams, players: list, injuries };
  const body = JSON.stringify(out);
  if (fs.existsSync(OUT)) {
    try {
      const old = new Function(fs.readFileSync(OUT, 'utf8') + ';return OPPORTUNITY')();
      const strip = o => JSON.stringify({ ...o, updatedAt: null });
      if (strip(old) === strip(out)) { console.log('Opportunity: unverändert.'); return; }
    } catch (e) { /* neu schreiben */ }
  }
  fs.writeFileSync(OUT, `// AUTO-GENERIERT von sports/nfl/scripts/build-opportunity.js (NFL-Sync). Nicht von Hand editieren.\n// Spalten je Woche: [woche, team, targets, targetShare, airYardsShare, carries, snap%, pprPunkte, recYds, rushYds]\nconst OPPORTUNITY = ${body};\n`, 'utf8');
  console.log(`Opportunity: ${list.length} Spieler, Saison ${cur} bis Woche ${lastWeek}, ${injuries.length} Injury-Report-Einträge (Woche ${maxWk}).`);
}

main().then(() => process.exit(0)).catch(e => { console.warn('Opportunity-Build fehlgeschlagen (nicht kritisch):', e.message); process.exit(0); });
