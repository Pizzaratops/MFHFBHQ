// ============================================================
//  Tools (College Basketball, Dizzle CBB): Projections, Schulen & Kontext,
//  Dynasty Rankings, Trade Analyzer/Finder, Matchup-Planer  (seit 16.10.2026)
// ============================================================
//  #/cbb/cbbproj                 Projections 26/27 mit Rolle, Typ, Minuten, Usage, Herkunft
//  #/cbb/cbbschulen[/<Schule>]   Team-Kontext: Tempo, Stil, Coach, Rotation
//  #/cbb/cbbdyn                  Dynasty-Rang (Projektion × Restjahre × NBA-Draft-Risiko)
//  #/cbb/cbbtrade[/finder]       Trade Analyzer + Trade Finder (Dynasty- oder Jetzt-Wert)
//  #/cbb/cbbplaner[/<Woche>]     Matchup-Planer: beide Gegner der Woche, Kategorien, Aufstellungs-Tipps
//  #/cbb/cbbdna[/<Name|Schule>]   NBA-DNA: Chance auf NBA-Rotation/Fantasy-Top-150, NBA-Kategorie-Profil, historische Vergleiche
//  #/cbb/cbbradar                Fantasy Radar: 9-Cat-Perzentile + College-Kontext, Vorsaison, Vergleich, Profil-Zwillinge
//
//  Daten:
//   sports/cbb/data/projections-cbb.js  CBB_PROJECTIONS   (build-projections.py)
//   sports/cbb/data/team-context.js     CBB_TEAM_CONTEXT
//   sports/cbb/data/espn-rosters.js     CBB_GAME_DATES (Spieltage je Schule)
//   leagues/cbb/data/rankings.js        DYNASTY_PLAYERS [rank, name, school, pos, null, Kl., dyn, z, Jahre, Draft-Risiko]
//   leagues/cbb/data (Fantrax):         TEAMS, ROSTERS_LIVE, CBB_SCHEDULE
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const A = { sport: ['cbb'] };
  const MY_OWNER = 'MFHFB';
  const CLS = { 1: 'Fr', 2: 'So', 3: 'Jr', 4: 'Sr', 5: 'Gr' };
  const CATS = [
    { k: 'pts', l: 'PTS', z: 'pts', cv: 0.35 },
    { k: 'reb', l: 'REB', z: 'reb', cv: 0.42 },
    { k: 'ast', l: 'AST', z: 'ast', cv: 0.45 },
    { k: 'stl', l: 'STL', z: 'stl', cv: 0.75 },
    { k: 'blk', l: 'BLK', z: 'blk', cv: 0.85 },
    { k: 'tpm', l: '3PM', z: 'tpm', cv: 0.6 },
    { k: 'tov', l: 'TO', z: 'to', cv: 0.55, inv: true },
    { k: 'fgPct', l: 'FG%', z: 'fgImpact', pct: true, sd: 2.4 },
    { k: 'ftPct', l: 'FT%', z: 'ftImpact', pct: true, sd: 4.5 },
  ];
  const STYLE = [
    ['stl', 'STL', 'Steals'], ['blk', 'BLK', 'Blocks'], ['ast', 'AST', 'Assist-Quote'], ['tpa', '3PA', '3er-Anteil'],
    ['orb', 'OREB', 'Off.-Rebounds'], ['fta', 'FTA', 'Freiwurf-Rate'], ['tov', 'TO', 'Ballverluste'],
  ];
  const r1 = v => (v == null ? '—' : Number(v).toFixed(1));
  const sgn = v => (v >= 0 ? '+' : '') + v.toFixed(1);
  const pct = f => `${f >= 1 ? '+' : ''}${Math.round((f - 1) * 100)} %`;
  const today = () => new Date().toISOString().slice(0, 10);
  const myTeam = data => (data.TEAMS || []).find(t => t.owner === MY_OWNER) || null;
  const teamById = data => { const m = {}; (data.TEAMS || []).forEach(t => { m[t.id] = t; }); return m; };
  const tLink = (ctx, t) => (t ? `<a class="nba-tlink mp-tc" style="${N().tcStyle(t)}" href="${ctx.href('teams', t.id)}"><span class="nba-tdot"></span>${ctx.ui.esc(t.name)}</a>` : '<span class="nba-tag fa">frei</span>');
  const schoolLink = (ctx, s) => `<a href="${ctx.href('cbbschulen', s)}">${ctx.ui.esc(s || '')}</a>`;

  // ---------- Indizes (pro Daten-Objekt zwischengespeichert) ----------
  const cache = new WeakMap();
  function idx(data) {
    if (cache.has(data)) return cache.get(data);
    const nba = N(), byKey = new Map(), byKT = new Map();
    // Live: Projektion gemischt mit echten Spielen (build-live-projections.js), sonst Preseason
    const L = (data.CBB_PROJ_LIVE && data.CBB_PROJ_LIVE.p) || {};
    const list = (data.CBB_PROJECTIONS || []).map(p => {
      const l = L[p.name + '|' + p.team];
      return l ? { ...p, ...l, pre: { z: p.z, min: p.min, pts: p.pts } } : p;
    });
    Object.entries(L).forEach(([id, l]) => {
      if (!l.name) return;
      const role = l.min >= 25 ? 'Starter' : l.min >= 15 ? 'Rotation' : 'Bank';
      list.push({ ...l, pos: '', cls: null, src: 'Neu', role, arche: [], conf: 0, usg: null, dyn: 0, yrs: null, fx: true });
    });
    list.forEach(p => {
      const k = nba.key(p.name);
      byKT.set(k + '|' + p.team, p);
      if (!byKey.has(k)) byKey.set(k, p);
    });
    const proj = (name, school) => byKT.get(nba.key(name) + '|' + school) || byKey.get(nba.key(name)) || null;
    // Ersatzniveau „jetzt“: z des 280. besten Spielers im Fantrax-Pool (14 Teams × 20 aktiv)
    const zs = list.filter(p => p.fx).map(p => p.z).sort((a, b) => b - a);
    const repl = zs[Math.min(279, zs.length - 1)] || 0;
    const dyn = new Map((data.DYNASTY_PLAYERS || []).map(r => [nba.key(r[1]) + '|' + r[2], r]));
    const out = { proj, repl, dyn, list, live: data.CBB_PROJ_LIVE || null, owner: nba.ownerIndex(data) };
    cache.set(data, out);
    return out;
  }
  const nowVal = (p, I) => (p ? Math.max(0, p.z - I.repl) : 0);
  const dynVal = p => (p ? p.dyn || 0 : 0);
  const confDots = c => { const n = c >= 0.6 ? 3 : c >= 0.3 ? 2 : 1; return `<span class="cbbm-conf" title="Datensicherheit ${Math.round(c * 100)} % (Minuten-Historie)">${'●'.repeat(n)}${'○'.repeat(3 - n)}</span>`; };
  const srcBadge = (ctx, p) => {
    const e = ctx.ui.esc;
    if (p.src === 'Transfer') return `<span class="cbbm-src tr" title="Transfer${p.from ? ' von ' + e(p.from) : ''}">TR</span>`;
    if (p.src === 'Freshman') return '<span class="cbbm-src fr" title="Freshman — Projektion aus Rekrutierung/NIL-Wert">FR</span>';
    if (p.src === 'Neu') return '<span class="cbbm-src nw" title="Neu im Kader, keine College-Daten">NEU</span>';
    return '';
  };

  // ============================================================
  //  1 — Projections
  // ============================================================
  const PDEF = { own: 'all', pos: 'all', src: 'all', school: '', q: '', sort: 'z' };
  const pState = ctx => ({ ...PDEF, ...ctx.store.getJSON('cbbproj', {}) });
  function projRows(ctx, st) {
    const { data, ui } = ctx, e = ui.esc, I = idx(data);
    const q = st.q.toLowerCase().trim();
    let list = I.list.filter(p => {
      const o = I.owner(p.name);
      if (st.own === 'free' && (o || !p.fx)) return false;
      if (st.own === 'owned' && !o) return false;
      if (st.pos !== 'all' && (st.pos === 'G' ? p.pos !== 'G' : p.pos === 'G')) return false;
      if (st.src !== 'all' && p.src !== st.src) return false;
      if (st.school && p.team !== st.school) return false;
      return !q || [p.name, p.team, p.from, o && o.name, (p.arche || []).join(' ')].some(x => String(x || '').toLowerCase().includes(q));
    });
    const sorter = { z: p => p.z, dyn: p => p.dyn || 0, min: p => p.min, usg: p => p.usg || 0 }[st.sort] || (p => p.z);
    list = list.sort((a, b) => sorter(b) - sorter(a)).slice(0, 400);
    if (!list.length) return `<tr><td colspan="20">${ui.empty('Keine Treffer', 'Filter anpassen.', '🔎')}</td></tr>`;
    return list.map((p, i) => {
      const o = I.owner(p.name);
      return `<tr>
        <td class="num">${i + 1}</td>
        <td class="strong nba-sticky">${e(p.name)} ${p.cls ? `<span class="nba-age" title="Klasse">${CLS[p.cls] || ''}</span>` : ''}${srcBadge(ctx, p)}</td>
        <td>${schoolLink(ctx, p.team)} <small class="muted">${e(p.pos)}</small></td>
        <td><span class="cbbm-role ${p.role === 'Starter' ? 'st' : p.role === 'Rotation' ? 'ro' : ''}">${e(p.role)}</span></td>
        <td class="small">${e((p.arche || []).join(' · '))}</td>
        <td class="num strong">${r1(p.min)}</td><td class="num">${r1(p.usg)}</td>
        ${CATS.map(c => `<td class="num" style="${N().heat((p.zc || {})[c.z])}">${c.pct ? r1(p[c.k]) : Number(p[c.k] || 0).toFixed(c.k === 'pts' || c.k === 'reb' || c.k === 'ast' ? 1 : 2)}</td>`).join('')}
        <td class="num"><b class="${p.z >= 0 ? 'up' : 'down'}"${p.pre ? ` title="Preseason ${sgn(p.pre.z)} · ${p.g} Spiele (Projektion zählt wie ${p.w} Spiele)"` : ''}>${sgn(p.z)}</b>${p.pre && Math.abs(p.z - p.pre.z) >= 1 ? ` <small class="${p.z > p.pre.z ? 'up' : 'down'}">${p.z > p.pre.z ? '▲' : '▼'}</small>` : ''}</td>
        <td class="num">${p.g ? p.g : '<span class="muted">0</span>'}</td>
        <td class="num">${p.dyn ? p.dyn.toFixed(1) : '<span class="muted">0</span>'}</td>
        <td>${confDots(p.conf)}</td>
        <td>${p.fx ? tLink(ctx, o) : '<span class="muted small" title="nicht im Fantrax-Pool">—</span>'}</td>
      </tr>`;
    }).join('');
  }
  function projPage(ctx) {
    const { data, ui } = ctx, e = ui.esc;
    if (!data.CBB_PROJECTIONS) return ui.empty('Keine Projections', 'projections-cbb.js fehlt.', '🔮');
    const st = pState(ctx);
    const I = idx(data), LV = I.live;
    const schools = Array.from(new Set(I.list.map(p => p.team))).sort();
    const seg = (key, opts) => `<div class="seg" role="group">${opts.map(([k, l]) => `<button type="button" class="seg-btn${st[key] === k ? ' active' : ''}" data-set="${key}" data-val="${k}">${l}</button>`).join('')}</div>`;
    return `<div class="page-head"><h1 class="page-title display">🔮 Projections 2026/27</h1>
        <div class="page-sub">${I.list.length} Spieler · pro Spiel · ${LV && LV.players ? `<b>live</b>: Projektion gemischt mit ${LV.players} Spielern aus echten Spielen (bis ${e((LV.last || '').split('-').reverse().join('.'))})` : 'Preseason: Spieler-Profil + Team-Kontext + Minuten/Usage im neuen Kader'}</div></div>
      <div class="note">College-Kader drehen sich jedes Jahr stark. Deshalb rechnet das Modell nicht nur mit alten Werten, sondern in drei Schichten: <b>1.</b> Spieler-Profil (Per-40 der letzten 3 Jahre, Klassen-Entwicklung, Transfer-Niveau) · <b>2.</b> <a href="${ctx.href('cbbschulen')}">Team-Kontext</a> (Tempo und Stil der Schule, z. B. Illinois holt wenig Steals) · <b>3.</b> Minuten und Usage im neuen Kader (wer konkurriert auf der Position?). Test an der Vorsaison: Punkte r = 0,62 (Rückkehrer 0,77, naiv nur 0,49), 9-Cat r = 0,63.</div>
      <div class="controls">
        ${seg('own', [['all', 'Alle'], ['free', 'Frei'], ['owned', 'Gerostert']])}
        ${seg('pos', [['all', 'Alle Pos'], ['G', 'G'], ['FC', 'F/C']])}
        ${seg('src', [['all', 'Alle'], ['Rückkehrer', 'Rückkehrer'], ['Transfer', 'Transfers'], ['Freshman', 'Freshmen']])}
        ${seg('sort', [['z', '9-Cat'], ['dyn', 'Dynasty'], ['min', 'Minuten'], ['usg', 'Usage']])}
        <select class="tr-select" data-school aria-label="Schule"><option value="">Alle Schulen</option>${schools.map(s => `<option value="${e(s)}"${st.school === s ? ' selected' : ''}>${e(((data.CBB_TEAM_CONTEXT || {})[s] || {}).name || s)}</option>`).join('')}</select>
        <input type="search" class="search" placeholder="Spieler, Schule, Typ, Fantasy-Team …" value="${e(st.q)}" data-q aria-label="Suchen"></div>
      <div class="table-wrap"><table class="table compact cbbm-proj"><thead><tr><th class="num">#</th><th class="nba-sticky">Spieler</th><th>Schule</th><th>Rolle</th><th>Typ</th>
        <th class="num" title="erwartete Minuten pro Spiel">Min</th><th class="num" title="Usage-%: Anteil an den Ballbesitzen des Teams, solange er auf dem Feld steht">Usg</th>
        ${CATS.map(c => `<th class="num">${c.l}</th>`).join('')}<th class="num" title="9-Cat-z-Summe pro Spiel (Pool ab 10 Min.); ▲/▼ = deutlich anders als die Preseason-Projektion">z</th><th class="num" title="Spiele in dieser Saison">Sp.</th><th class="num" title="Dynasty-Wert (Restjahre × Draft-Risiko)">Dyn</th><th title="Datensicherheit">Sicher</th><th>Fantasy-Team</th></tr></thead>
        <tbody data-body>${projRows(ctx, st)}</tbody></table></div>
      <p class="small muted">TR = Transfer (Herkunft im Tooltip), FR = Freshman, NEU = ohne College-Daten. Rolle: Top 5 nach Minuten = Starter, ab 15 Min. Rotation, ab 8 Min. Bank. Farben je Kategorie = Beitrag zum 9-Cat-Wert. Ab Saisonstart werden die Werte täglich mit den echten Spielen gemischt (Rückkehrer-Projektion zählt wie 3–4 Spiele, Freshmen-Projektion wie 1 Spiel).</p>`;
  }
  function projMount(root, ctx) {
    const save = (patch, full = true) => { ctx.store.setJSON('cbbproj', { ...pState(ctx), ...patch }); if (full) ctx.refresh(); };
    root.querySelectorAll('[data-set]').forEach(b => b.addEventListener('click', () => save({ [b.dataset.set]: b.dataset.val })));
    const s = root.querySelector('[data-school]'); if (s) s.addEventListener('change', () => save({ school: s.value }));
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('input', () => { save({ q: q.value }, false); root.querySelector('[data-body]').innerHTML = projRows(ctx, pState(ctx)); });
  }

  // ============================================================
  //  2 — Schulen & Kontext
  // ============================================================
  function styleNotes(c) {
    const out = [];
    if (c.newCoach) out.push(`🆕 <b>Neuer Coach</b> (vorher ${c.coachPrev || '?'}): Der Stil der Vorjahre zählt nur noch zu 40 % — Werte unsicherer.`);
    if (c.paceRel >= 1.04) out.push(`⚡ <b>Hohes Tempo</b> (${pct(c.paceRel)} Ballbesitze): mehr Zählstatistiken für alle.`);
    if (c.paceRel <= 0.96) out.push(`🐢 <b>Langsames Tempo</b> (${pct(c.paceRel)} Ballbesitze): weniger Zählstatistiken für alle.`);
    const s = c.style || {};
    if (s.stl <= 0.85) out.push(`🧤 <b>Wenig Steals</b> (${pct(s.stl)}): diszipliniert, wenig Risiko — STL-Werte der Spieler hier gedämpft.`);
    if (s.stl >= 1.15) out.push(`🧤 <b>Viele Steals</b> (${pct(s.stl)}): aggressive Verteidigung — gut für STL.`);
    if (s.blk <= 0.85) out.push(`🚫 <b>Wenig Blocks</b> (${pct(s.blk)}).`);
    if (s.blk >= 1.15) out.push(`🚫 <b>Viele Blocks</b> (${pct(s.blk)}): Rim Protection im System.`);
    if (s.tpa >= 1.15) out.push(`🎯 <b>3er-lastig</b> (${pct(s.tpa)} Dreier-Anteil): gut für 3PM.`);
    if (s.tpa <= 0.85) out.push(`🎯 <b>Wenig Dreier</b> (${pct(s.tpa)}).`);
    if (s.orb >= 1.12) out.push(`💪 <b>Crash the Boards</b> (${pct(s.orb)} Off.-Rebounds): gut für REB der Bigs.`);
    if (s.ast >= 1.1) out.push(`🤝 <b>Viel Ballbewegung</b> (${pct(s.ast)} Assist-Quote).`);
    if (s.tov <= 0.88) out.push(`🧠 <b>Wenig Ballverluste</b> (${pct(s.tov)}): gut für TO.`);
    if (c.ret != null && c.ret < 0.45) out.push(`🔄 <b>Großer Umbruch</b>: nur ${Math.round(c.ret * 100)} % der Minuten für Rückkehrer — Rollen noch offen, Projektionen wackeliger.`);
    if (c.ret != null && c.ret >= 0.7) out.push(`🧱 <b>Eingespielt</b>: ${Math.round(c.ret * 100)} % der Minuten für Rückkehrer — Rollen ziemlich klar.`);
    return out;
  }
  const styleCell = f => { const d = Math.round((f - 1) * 100); return `<td class="num" style="${N().heat(d / 10)}">${d > 0 ? '+' : ''}${d}</td>`; };
  function schoolList(ctx) {
    const { data, ui } = ctx, e = ui.esc, I = idx(data);
    const C = data.CBB_TEAM_CONTEXT || {};
    const rostered = {};
    I.list.forEach(p => { if (I.owner(p.name)) rostered[p.team] = (rostered[p.team] || 0) + 1; });
    const rows = Object.entries(C).sort((a, b) => (b[1].srs || 0) - (a[1].srs || 0));
    return `<div class="page-head"><h1 class="page-title display">🏫 Schulen & Kontext</h1>
        <div class="page-sub">${rows.length} Pool-Schulen · Tempo und Stil gegenüber dem D-I-Schnitt (in %) · Coach · Rückkehrer-Minuten</div></div>
      <div class="note">Stil hält sich von Jahr zu Jahr zu gut 50 % (gemessen 2022–26), auch wenn der Kader wechselt — er hängt am Coach. Darum fließt er in jede Projektion ein: Ein Big bei einer Schule mit wenig Blocks bekommt weniger BLK als derselbe Spieler bei einer Block-Schule. Bei neuem Coach zählt der alte Stil nur noch zu 40 %.</div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th>Schule</th><th>Coach</th><th class="num" title="Ballbesitze pro Spiel (erwartet)">Pace</th>
        ${STYLE.map(([, l, t]) => `<th class="num" title="${t} gegenüber D-I-Schnitt (%)">${l}</th>`).join('')}<th class="num" title="Anteil der Minuten für Rückkehrer">Rückk.</th><th class="num" title="Spieler dieser Schule in Fantasy-Kadern">Fantasy</th><th>Top-Spieler</th></tr></thead><tbody>
      ${rows.map(([s, c], i) => `<tr><td class="num">${i + 1}</td><td class="strong"><a href="${ctx.href('cbbschulen', s)}">${e(c.name)}</a></td>
        <td class="small">${e(c.coach || '')}${c.newCoach ? ` <span class="cbbm-src nw" title="Neu, vorher ${e(c.coachPrev || '?')}">NEU</span>` : ''}</td>
        <td class="num" style="${N().heat((c.paceRel - 1) * 25)}">${r1(c.pace)}</td>
        ${STYLE.map(([k]) => styleCell(c.style[k] || 1)).join('')}
        <td class="num">${c.ret != null ? Math.round(c.ret * 100) + ' %' : '—'}</td><td class="num">${rostered[s] || '<span class="muted">0</span>'}</td>
        <td class="small">${c.rot && c.rot[0] ? e(c.rot.slice().sort((a, b) => b[6] - a[6])[0][0]) : ''}</td></tr>`).join('')}
      </tbody></table></div>
      <p class="small muted">Grün = mehr als der Schnitt, rot = weniger (bei TO heißt grün: mehr Ballverluste). Coach laut ESPN.</p>`;
  }
  function schoolPage(ctx) {
    const { data, ui, params } = ctx, e = ui.esc, I = idx(data);
    const C = data.CBB_TEAM_CONTEXT || {};
    if (!params[0]) return schoolList(ctx);
    const s = params[0], c = C[s];
    if (!c) return ui.empty('Schule nicht gefunden', '', '🏫');
    const notes = styleNotes(c);
    const players = I.list.filter(p => p.team === s).sort((a, b) => b.min - a.min);
    const bar = (label, f, title) => { const w = Math.max(-50, Math.min(50, (f - 1) * 100)); return `<div class="cbbm-bar" title="${e(title)}"><span>${label}</span><div class="cbbm-track"><i class="${w >= 0 ? 'pos' : 'neg'}" style="${w >= 0 ? 'left:50%' : `left:${50 + w}%`};width:${Math.abs(w)}%"></i></div><b>${pct(f)}</b></div>`; };
    return `<a class="back" href="${ctx.href('cbbschulen')}">← Alle Schulen</a>
      <div class="page-head"><h1 class="page-title display">🏫 ${e(c.name)}</h1>
        <div class="page-sub">Coach ${e(c.coach || '?')}${c.newCoach ? ` (neu, vorher ${e(c.coachPrev || '?')})` : ''} · Pace ${r1(c.pace)} · Team-Stärke (SRS) ${r1(c.srs)} · ${c.ret != null ? Math.round(c.ret * 100) + ' % Rückkehrer-Minuten' : ''}</div></div>
      <div class="cbbm-ctx"><div class="card"><div class="card-head"><h2>Stil gegenüber D-I</h2></div><div class="cbbm-bars">
        ${bar('Tempo', c.paceRel, 'Ballbesitze pro Spiel')}${STYLE.map(([k, l, t]) => bar(l, c.style[k] || 1, t)).join('')}</div></div>
        <div class="card"><div class="card-head"><h2>Was heißt das für Fantasy?</h2></div><ul class="cbbm-notes">${notes.length ? notes.map(n => `<li>${n}</li>`).join('') : '<li class="muted">Unauffälliger Stil — nah am D-I-Schnitt.</li>'}</ul></div></div>
      <div class="card"><div class="card-head"><h2>Erwartete Rotation 2026/27</h2><span class="muted small">Minuten-Modell: Vorjahresminuten, Qualität, Konkurrenz auf der Position, Klasse, Transfer, NIL</span></div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th>Spieler</th><th>Pos</th><th>Herkunft</th><th>Typ</th><th class="num">Min</th><th class="num">Usg</th><th class="num">PTS</th><th class="num">REB</th><th class="num">AST</th><th class="num">STL</th><th class="num">BLK</th><th class="num">z</th><th>Sicher</th><th>Fantasy-Team</th></tr></thead><tbody>
      ${players.map(p => `<tr><td class="strong">${e(p.name)} ${p.cls ? `<span class="nba-age">${CLS[p.cls] || ''}</span>` : ''}</td><td>${e(p.pos)}${p.h ? ` <small class="muted">${Math.floor(p.h / 12)}'${p.h % 12}"</small>` : ''}</td>
        <td class="small">${e(p.src)}${p.from ? ` <span class="muted">von ${e(p.from)}</span>` : ''}</td><td class="small">${e((p.arche || []).join(' · '))}</td>
        <td class="num strong">${r1(p.min)}</td><td class="num">${r1(p.usg)}</td><td class="num">${r1(p.pts)}</td><td class="num">${r1(p.reb)}</td><td class="num">${r1(p.ast)}</td><td class="num">${Number(p.stl).toFixed(1)}</td><td class="num">${Number(p.blk).toFixed(1)}</td>
        <td class="num"><b class="${p.z >= 0 ? 'up' : 'down'}">${sgn(p.z)}</b></td><td>${confDots(p.conf)}</td><td>${p.fx ? tLink(ctx, I.owner(p.name)) : '<span class="muted small">—</span>'}</td></tr>`).join('')}
      </tbody></table></div></div>`;
  }

  // ============================================================
  //  3 — Dynasty Rankings
  // ============================================================
  const DDEF = { own: 'all', pos: 'all', q: '' };
  const dState = ctx => ({ ...DDEF, ...ctx.store.getJSON('cbbdyn', {}) });
  function dynRows(ctx, st) {
    const { data, ui } = ctx, e = ui.esc, I = idx(data), nba = N();
    const q = st.q.toLowerCase().trim();
    const list = (data.DYNASTY_PLAYERS || []).filter(r => {
      const o = I.owner(r[1]);
      if (st.own === 'free' && o) return false;
      if (st.own === 'owned' && !o) return false;
      if (st.pos !== 'all' && (st.pos === 'G' ? r[3] !== 'G' : r[3] === 'G')) return false;
      return !q || [r[1], r[2], o && o.name].some(x => String(x || '').toLowerCase().includes(q));
    }).slice(0, 500);
    if (!list.length) return `<tr><td colspan="10">${ui.empty('Keine Treffer', '', '🔎')}</td></tr>`;
    return list.map(r => {
      const o = I.owner(r[1]), p = I.proj(r[1], r[2]);
      const lv = r[9] || 0;
      return `<tr><td class="num">${nba.rankBadge(r[0])}</td><td class="strong nba-sticky">${e(r[1])}${p ? srcBadge(ctx, p) : ''}</td><td>${schoolLink(ctx, r[2])}</td><td class="muted">${e(r[3])}</td>
        <td class="num">${e(r[5] || '—')}</td><td class="num" title="College-Jahre inkl. 2026/27">${r[8]}</td>
        <td class="num">${lv ? `<span class="cbbm-risk${lv >= 0.7 ? ' hi' : ''}" title="Wahrscheinlichkeit, nach der Saison in den NBA-Draft zu gehen">${Math.round(lv * 100)} %</span>` : '<span class="muted">—</span>'}</td>
        <td class="num">${r[7] != null ? `<span class="${r[7] >= 0 ? 'up' : 'down'}">${sgn(r[7])}</span>` : '—'}</td><td class="num strong">${(r[6] || 0).toFixed(1)}</td><td>${tLink(ctx, o)}</td></tr>`;
    }).join('');
  }
  function dynPage(ctx) {
    const { data, ui } = ctx, e = ui.esc;
    if (!data.DYNASTY_PLAYERS) return ui.empty('Keine Dynasty-Rangliste', 'rankings.js fehlt.', '🏆');
    const st = dState(ctx);
    const seg = (key, opts) => `<div class="seg" role="group">${opts.map(([k, l]) => `<button type="button" class="seg-btn${st[key] === k ? ' active' : ''}" data-set="${key}" data-val="${k}">${l}</button>`).join('')}</div>`;
    return `<div class="page-head"><h1 class="page-title display">🏆 Dynasty Rankings</h1>
        <div class="page-sub">${data.DYNASTY_PLAYERS.length} Spieler im Fantrax-Pool · Wert über die restlichen College-Jahre</div></div>
      <div class="note">Im College zählt nicht nur, wie gut einer ist, sondern <b>wie lange er noch bleibt</b>. Dynasty-Wert = Summe über die Restjahre (jedes weitere Jahr × 0,8) von „z über Ersatzniveau“, mit erwartetem Sprung je Klasse (Freshman → Sophomore am größten). Wer wahrscheinlich in den NBA-Draft geht (MFHFB-Big-Board 2027, Draft-Prospect-Markierung aus der NIL-Auktion, starke Upperclassmen), verliert die späteren Jahre anteilig.</div>
      <div class="controls">${seg('own', [['all', 'Alle'], ['free', 'Frei'], ['owned', 'Gerostert']])}${seg('pos', [['all', 'Alle Pos'], ['G', 'G'], ['FC', 'F/C']])}
        <input type="search" class="search" placeholder="Spieler, Schule, Fantasy-Team …" value="${e(st.q)}" data-q aria-label="Suchen"></div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">Rang</th><th class="nba-sticky">Spieler</th><th>Schule</th><th>Pos</th><th class="num">Kl.</th><th class="num" title="College-Jahre inkl. 2026/27">Jahre</th><th class="num" title="NBA-Draft nach der Saison">Draft</th><th class="num" title="Projektion 2026/27 (9-Cat-z pro Spiel)">z 26/27</th><th class="num">Wert</th><th>Fantasy-Team</th></tr></thead>
        <tbody data-body>${dynRows(ctx, st)}</tbody></table></div>`;
  }
  function dynMount(root, ctx) {
    const save = (patch, full = true) => { ctx.store.setJSON('cbbdyn', { ...dState(ctx), ...patch }); if (full) ctx.refresh(); };
    root.querySelectorAll('[data-set]').forEach(b => b.addEventListener('click', () => save({ [b.dataset.set]: b.dataset.val })));
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('input', () => { save({ q: q.value }, false); root.querySelector('[data-body]').innerHTML = dynRows(ctx, dState(ctx)); });
  }

  // ============================================================
  //  4 — Trade Analyzer + Finder
  // ============================================================
  const tState = ctx => ({ a: null, b: null, give: [], get: [], mode: 'jetzt', ...ctx.store.getJSON('cbbtrade', {}) });
  function teamPlayers(data, tid) {
    const I = idx(data);
    return N().roster(data, tid).map(r => ({ r, p: I.proj(r.name, r.team) }));
  }
  // Kategorie-Profil eines Kaders: Summe der Kategorie-z der besten 20 (nach z)
  function catProfile(list) {
    const top = list.filter(x => x.p).sort((a, b) => b.p.z - a.p.z).slice(0, 20);
    const out = {}; CATS.forEach(c => { out[c.z] = top.reduce((s, x) => s + ((x.p.zc || {})[c.z] || 0), 0); });
    return out;
  }
  function tradeSums(I, list) {
    return { dyn: list.reduce((s, x) => s + dynVal(x.p), 0), now: list.reduce((s, x) => s + nowVal(x.p, I), 0) };
  }
  function analyzer(ctx, st, teams) {
    const { data, ui } = ctx, e = ui.esc, I = idx(data);
    const A_ = teams.find(t => t.id === st.a), B_ = teams.find(t => t.id === st.b);
    const LA = teamPlayers(data, A_.id), LB = teamPlayers(data, B_.id);
    const give = LA.filter(x => st.give.includes(x.r.name)), get = LB.filter(x => st.get.includes(x.r.name));
    const sg = tradeSums(I, give), sr = tradeSums(I, get);
    const before = catProfile(LA), after = catProfile(LA.filter(x => !st.give.includes(x.r.name)).concat(get));
    const col = (t, L, sel, key) => `<div class="card"><div class="card-head"><h2>${tLink(ctx, t)} gibt</h2></div><div class="cbbm-pick">
      ${L.slice().sort((a, b) => (st.mode === 'jetzt' ? nowVal(b.p, I) - nowVal(a.p, I) : dynVal(b.p) - dynVal(a.p))).map(x => `<label class="cbbm-prow${sel.includes(x.r.name) ? ' on' : ''}"><input type="checkbox" data-${key}="${e(x.r.name)}"${sel.includes(x.r.name) ? ' checked' : ''}>
        <span class="strong">${e(x.r.name)}</span> <small class="muted">${e(x.r.team || '')} ${x.p && x.p.cls ? CLS[x.p.cls] : ''}</small>
        <span class="cbbm-v" title="Jetzt-Wert (z über Ersatzniveau) / Dynasty-Wert">${x.p ? `${nowVal(x.p, I).toFixed(1)} / ${dynVal(x.p).toFixed(1)}` : '—'}</span></label>`).join('')}</div></div>`;
    let verdict = '';
    if (give.length || get.length) {
      const key = st.mode === 'jetzt' ? 'now' : 'dyn';
      const d = sr[key] - sg[key], base = Math.max(1, sg[key], sr[key]);
      const rel = d / base;
      verdict = rel > 0.1 ? `✅ Gut für ${e(A_.name)} (${st.mode === 'jetzt' ? 'Jetzt' : 'Dynasty'}-Wert ${sgn(d)})` : rel < -0.1 ? `⚠️ Gut für ${e(B_.name)} (${st.mode === 'jetzt' ? 'Jetzt' : 'Dynasty'}-Wert ${sgn(d)})` : `⚖️ Ziemlich fair (${sgn(d)})`;
    }
    return `<div class="cbbm-trade">${col(A_, LA, st.give, 'give')}${col(B_, LB, st.get, 'get')}</div>
      ${give.length || get.length ? `<div class="card"><div class="card-head"><h2>${verdict}</h2></div>
        <div class="table-wrap"><table class="table compact"><thead><tr><th></th><th class="num">Jetzt-Wert</th><th class="num">Dynasty-Wert</th></tr></thead><tbody>
          <tr><td>${e(A_.name)} gibt</td><td class="num">${sg.now.toFixed(1)}</td><td class="num">${sg.dyn.toFixed(1)}</td></tr>
          <tr><td>${e(A_.name)} bekommt</td><td class="num">${sr.now.toFixed(1)}</td><td class="num">${sr.dyn.toFixed(1)}</td></tr>
          <tr class="strong"><td>Differenz für ${e(A_.name)}</td><td class="num ${sr.now - sg.now >= 0 ? 'up' : 'down'}">${sgn(sr.now - sg.now)}</td><td class="num ${sr.dyn - sg.dyn >= 0 ? 'up' : 'down'}">${sgn(sr.dyn - sg.dyn)}</td></tr></tbody></table></div>
        <div class="card-head"><h2 class="small">Kategorien von ${e(A_.name)} (Top 20 nach z, Summe Kategorie-z)</h2></div>
        <div class="table-wrap"><table class="table compact"><thead><tr><th></th>${CATS.map(c => `<th class="num">${c.l}</th>`).join('')}</tr></thead><tbody>
          <tr><td>vorher</td>${CATS.map(c => `<td class="num">${before[c.z].toFixed(1)}</td>`).join('')}</tr>
          <tr><td>nachher</td>${CATS.map(c => `<td class="num">${after[c.z].toFixed(1)}</td>`).join('')}</tr>
          <tr class="strong"><td>Δ</td>${CATS.map(c => { const d = after[c.z] - before[c.z]; return `<td class="num ${d > 0.05 ? 'up' : d < -0.05 ? 'down' : 'muted'}">${sgn(d)}</td>`; }).join('')}</tr></tbody></table></div></div>` : '<p class="muted small">Spieler auf beiden Seiten anklicken.</p>'}`;
  }
  function finder(ctx, st, teams) {
    const { data, ui } = ctx, e = ui.esc, I = idx(data);
    const me = teams.find(t => t.id === st.a);
    const mine = teamPlayers(data, me.id).filter(x => x.p);
    const prof = catProfile(mine);
    const weak = CATS.slice().sort((a, b) => prof[a.z] - prof[b.z]).slice(0, 3);
    const mode = st.mode;
    // meine Sicht / Partner-Sicht
    const myV = mode === 'jetzt' ? x => nowVal(x.p, I) : mode === 'aufbau' ? x => dynVal(x.p) : x => weak.reduce((s, c) => s + ((x.p.zc || {})[c.z] || 0), 0);
    const paV = mode === 'jetzt' ? x => dynVal(x.p) : mode === 'aufbau' ? x => nowVal(x.p, I) : x => dynVal(x.p);
    const top = (L, f) => L.slice().sort((a, b) => f(b) - f(a)).slice(0, 14);
    const res = [];
    teams.filter(t => t.id !== me.id).forEach(t => {
      const theirs = teamPlayers(data, t.id).filter(x => x.p);
      const G = top(mine, x => dynVal(x.p) + nowVal(x.p, I)), R = top(theirs, x => dynVal(x.p) + nowVal(x.p, I));
      const sets = (L) => { const o = L.map(x => [x]); for (let i = 0; i < L.length; i++) for (let j = i + 1; j < L.length; j++) o.push([L[i], L[j]]); return o; };
      const SG = sets(G), SR = sets(R);
      SG.forEach(g => SR.forEach(r => {
        if (g.length === 2 && r.length === 2) return;
        const sum = (L, f) => L.reduce((s, x) => s + f(x), 0);
        const myGain = sum(r, myV) - sum(g, myV);
        const paGain = sum(g, paV) - sum(r, paV);
        if (mode === 'fair') {
          const dg = sum(g, x => dynVal(x.p)), dr = sum(r, x => dynVal(x.p));
          if (Math.abs(dg - dr) > Math.max(1.5, 0.12 * Math.max(dg, dr)) || myGain <= 0.5) return;
          res.push({ t, g, r, myGain, paGain: dg - dr, score: myGain });
        } else {
          if (myGain <= 0.5 || paGain < 0) return;
          res.push({ t, g, r, myGain, paGain, score: Math.min(myGain, paGain) + 0.25 * (myGain + paGain) });
        }
      }));
    });
    res.sort((a, b) => b.score - a.score);
    // pro Partner höchstens 3 Vorschläge
    const per = {}, out = res.filter(x => { per[x.t.id] = (per[x.t.id] || 0) + 1; return per[x.t.id] <= 3; }).slice(0, 30);
    lastFinder = out;
    const names = L => L.map(x => `<b>${e(x.r.name)}</b> <small class="muted">${e(x.r.team || '')}${x.p.cls ? ' ' + CLS[x.p.cls] : ''}</small>`).join(' + ');
    const lbl = { jetzt: ['Jetzt-Wert für Dich', 'Dynasty-Wert für Partner'], aufbau: ['Dynasty-Wert für Dich', 'Jetzt-Wert für Partner'], fair: [`Plus in ${weak.map(c => c.l).join('/')}`, 'Dynasty-Differenz'] }[mode];
    return `<div class="note">${mode === 'jetzt' ? 'Du willst <b>jetzt gewinnen</b>: Du gibst Zukunft (junge Spieler mit vielen Restjahren), der Partner gibt Gegenwart (starke Upperclassmen). Beide Seiten gewinnen in ihrem Maßstab.' : mode === 'aufbau' ? 'Du <b>baust auf</b>: Du gibst Gegenwart, bekommst Spieler mit mehr Restjahren. Für Teams, die oben mitspielen wollen.' : `<b>Fair nach Dynasty-Wert</b> (±12 %), aber besser in Deinen schwächsten Kategorien: ${weak.map(c => c.l).join(', ')}.`}</div>
      ${out.length ? `<div class="table-wrap"><table class="table compact"><thead><tr><th>Partner</th><th>Du gibst</th><th>Du bekommst</th><th class="num">${lbl[0]}</th><th class="num">${lbl[1]}</th><th></th></tr></thead><tbody>
      ${out.map((x, i) => `<tr><td>${tLink(ctx, x.t)}</td><td>${names(x.g)}</td><td>${names(x.r)}</td><td class="num up">${sgn(x.myGain)}</td><td class="num ${x.paGain >= 0 ? 'up' : 'down'}">${sgn(x.paGain)}</td>
        <td><button type="button" class="seg-btn mp-btn" data-load="${i}">Prüfen →</button></td></tr>`).join('')}</tbody></table></div>`
        : ui.empty('Keine Vorschläge', 'Mit diesen Kadern findet der Finder keinen Tausch, bei dem beide gewinnen.', '🔍')}`;
  }
  let lastFinder = [];
  function tradePage(ctx) {
    const { data, ui, params } = ctx, e = ui.esc, nba = N().init(data);
    const teams = nba.leagueTeams(data, true);
    if (!teams.length || !data.CBB_PROJECTIONS) return ui.empty('Keine Daten', '', '⚖️');
    const st = tState(ctx);
    const me = myTeam(data) || teams[0];
    if (!teams.some(t => t.id === st.a)) st.a = me.id;
    if (!teams.some(t => t.id === st.b) || st.b === st.a) st.b = teams.find(t => t.id !== st.a).id;
    const view = params[0] === 'finder' ? 'finder' : 'analyzer';
    const sel = (key, val, excl) => `<select class="tr-select" data-team="${key}">${teams.filter(t => t.id !== excl).map(t => `<option value="${t.id}"${t.id === val ? ' selected' : ''}>${e(t.name)}</option>`).join('')}</select>`;
    const modes = view === 'finder' ? [['jetzt', '🔥 Jetzt gewinnen'], ['aufbau', '🌱 Aufbauen'], ['fair', '⚖️ Fair + Kategorien']] : [['jetzt', '🔥 Jetzt-Wert'], ['dyn', '🏆 Dynasty-Wert']];
    const mode = modes.some(m => m[0] === st.mode) ? st.mode : modes[0][0];
    st.mode = mode;
    let body = '';
    if (view === 'finder') { body = finder(ctx, st, teams); } else body = analyzer(ctx, st, teams);
    return `<div class="page-head"><h1 class="page-title display">${view === 'finder' ? '🔍 Trade Finder' : '⚖️ Trade Analyzer'}</h1>
        <div class="page-sub">Jetzt-Wert = Projektion 2026/27 über Ersatzniveau (z des 280. Spielers) · Dynasty-Wert = über alle Restjahre, mit NBA-Draft-Risiko · keine Picks (Liga ohne Rookie-Draft)</div></div>
      <div class="controls"><div class="seg">${[['analyzer', '⚖️ Analyzer'], ['finder', '🔍 Finder']].map(([k, l]) => `<a class="seg-btn${view === k ? ' active' : ''}" href="${ctx.href('cbbtrade', ...(k === 'finder' ? ['finder'] : []))}">${l}</a>`).join('')}</div>
        <div class="seg">${modes.map(([k, l]) => `<button type="button" class="seg-btn${mode === k ? ' active' : ''}" data-mode="${k}">${l}</button>`).join('')}</div>
        ${sel('a', st.a)}${view === 'analyzer' ? `<span class="muted">⇄</span>${sel('b', st.b, st.a)}` : ''}
        ${view === 'analyzer' && (st.give.length || st.get.length) ? '<button type="button" class="seg-btn mp-btn" data-clear>✕ Leeren</button>' : ''}</div>
      ${body}`;
  }
  function tradeMount(root, ctx) {
    const save = patch => { ctx.store.setJSON('cbbtrade', { ...tState(ctx), ...patch }); ctx.refresh(); };
    root.querySelectorAll('[data-mode]').forEach(b => b.addEventListener('click', () => save({ mode: b.dataset.mode })));
    root.querySelectorAll('[data-team]').forEach(s => s.addEventListener('change', () => save({ [s.dataset.team]: Number(s.value), give: s.dataset.team === 'a' ? [] : tState(ctx).give, get: [] })));
    const clr = root.querySelector('[data-clear]'); if (clr) clr.addEventListener('click', () => save({ give: [], get: [] }));
    const tog = (key, n) => { const st = tState(ctx); const L = st[key].includes(n) ? st[key].filter(x => x !== n) : st[key].concat(n); save({ [key]: L }); };
    root.querySelectorAll('[data-give]').forEach(c => c.addEventListener('change', () => tog('give', c.dataset.give)));
    root.querySelectorAll('[data-get]').forEach(c => c.addEventListener('change', () => tog('get', c.dataset.get)));
    root.querySelectorAll('[data-load]').forEach(b => b.addEventListener('click', () => {
      const st = tState(ctx);
      const x = lastFinder[Number(b.dataset.load)]; if (!x) return;
      ctx.store.setJSON('cbbtrade', { ...st, b: x.t.id, give: x.g.map(p => p.r.name), get: x.r.map(p => p.r.name), mode: st.mode === 'aufbau' || st.mode === 'fair' ? 'dyn' : 'jetzt' });
      location.hash = ctx.href('cbbtrade').replace(/^.*#/, '#');
    }));
  }

  // ============================================================
  //  5 — Matchup-Planer
  // ============================================================
  function windows(data) {
    const P = (data.CBB_SCHEDULE && data.CBB_SCHEDULE.periods) || [];
    return P.map((p, i) => ({ ...p, to: P[i + 1] ? P[i + 1].start : null })); // Spieltage: start ≤ d < nächster Start (letzte: ≤ end)
  }
  const inWin = (w, d) => d >= w.start && (w.to ? d < w.to : d <= w.end);
  function normCdf(x) {
    const s = x < 0 ? -1 : 1, z = Math.abs(x) / Math.SQRT2, t = 1 / (1 + 0.3275911 * z);
    const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-z * z);
    return 0.5 * (1 + s * y);
  }
  function weekTeam(data, tid, w, opt) {
    const I = idx(data), GD = data.CBB_GAME_DATES || {};
    const hasDates = Object.values(GD).some(v => v && v.length);
    const days = Math.max(1, Math.round((new Date(w.to || w.end) - new Date(w.start)) / 864e5) + (w.to ? 0 : 1));
    const players = N().roster(data, tid).map(r => {
      const p = I.proj(r.name, r.team);
      const games = hasDates ? (GD[r.team] || []).filter(d => inWin(w, d)).length : Math.round(days / 7 * 2);
      return { r, p, games, val: p ? games * p.z : -99 };
    });
    let act;
    if (opt) {
      // beste Aufstellung: je Spieler nach Wochenwert, G max 8, F/C max 8, Flx max 4 (Fantrax-Regeln)
      const cap = { G: 8, 'F/C': 8, Flx: 4 }, n = { G: 0, 'F/C': 0, Flx: 0 };
      act = [];
      players.filter(x => x.p && x.r.status !== 'IR').sort((a, b) => b.val - a.val).forEach(x => {
        const el = String(x.r.elig || 'Flx').split(',');
        const slot = ['G', 'F/C', 'Flx'].find(k => (el.includes(k) || k === 'Flx') && n[k] < cap[k]);
        if (slot) { n[slot]++; x.slot = slot; act.push(x); }
      });
    } else act = players.filter(x => x.r.status === 'A');
    act.forEach(x => { x.on = true; });
    const tot = {}, sd = {};
    CATS.filter(c => !c.pct).forEach(c => {
      let s = 0, v = 0;
      act.forEach(x => { if (!x.p || !x.games) return; const per = x.p[c.k] || 0; s += per * x.games; v += x.games * (c.cv * per) ** 2; });
      tot[c.k] = s; sd[c.k] = Math.sqrt(v);
    });
    const sum = k => act.reduce((s, x) => s + (x.p ? (x.p[k] || 0) * x.games : 0), 0);
    tot.fgPct = sum('fga') ? 100 * sum('fgm') / sum('fga') : 0; tot.ftPct = sum('fta') ? 100 * sum('ftm') / sum('fta') : 0;
    sd.fgPct = CATS.find(c => c.k === 'fgPct').sd; sd.ftPct = CATS.find(c => c.k === 'ftPct').sd;
    return { tid, players, act, tot, sd, hasDates, games: act.reduce((s, x) => s + x.games, 0) };
  }
  function cmp(a, b) {
    const rows = CATS.map(c => {
      const s = Math.sqrt(a.sd[c.k] ** 2 + b.sd[c.k] ** 2);
      let d = a.tot[c.k] - b.tot[c.k]; if (c.inv) d = -d;
      return { c, va: a.tot[c.k], vb: b.tot[c.k], prob: s > 0 ? normCdf(d / s) : (d > 0 ? 1 : d < 0 ? 0 : 0.5) };
    });
    return { rows, exp: rows.reduce((s, r) => s + r.prob, 0) };
  }
  // Aufstellungs-Tipps: Reserve mit mehr Wochenwert als ein Aktiver, dessen Slot er spielen darf
  function swapTips(T) {
    const tips = [], used = new Set();
    const res = T.players.filter(x => x.r.status === 'R' && x.p).sort((a, b) => b.val - a.val);
    res.forEach(x => {
      const elig = String(x.r.elig || '').split(',');
      const cand = T.act.filter(a => !used.has(a.r.name) && elig.includes(a.r.slot)).sort((a, b) => a.val - b.val)[0];
      if (cand && x.val > cand.val + 2) { tips.push({ inP: x, outP: cand }); used.add(cand.r.name); }
    });
    return tips.slice(0, 5);
  }
  function plannerPage(ctx) {
    const { data, ui, params } = ctx, e = ui.esc, nba = N().init(data);
    const W = windows(data);
    if (!W.length || !data.CBB_PROJECTIONS) return ui.empty('Kein Spielplan', 'Fantrax-Sync oder Projections fehlen.', '⚔️');
    const teams = nba.leagueTeams(data, true), byId = teamById(data);
    const st = { team: null, lineup: 'opt', ...ctx.store.getJSON('cbbplaner', {}) };
    const me = myTeam(data) || teams[0];
    const tid = teams.some(t => t.id === st.team) ? st.team : me.id;
    const t = byId[tid];
    const td = today();
    const cur = W.find(w => inWin(w, td)) || W.find(w => w.start > td) || W[W.length - 1];
    const w = W.find(x => x.n === Number(params[0])) || cur;
    const opt = st.lineup !== 'fantrax';
    const T = weekTeam(data, tid, w, opt);
    const opps = w.matchups.filter(m => m.includes(tid)).map(m => (m[0] === tid ? m[1] : m[0]));
    const fmtD = s => (s ? s.slice(8, 10) + '.' + s.slice(5, 7) + '.' : '');
    const lastDay = w.to ? new Date(new Date(w.to + 'T12:00:00Z').getTime() - 864e5).toISOString().slice(0, 10) : w.end;
    const fmtV = (c, v) => (c.pct ? v.toFixed(1) : c.k === 'pts' || c.k === 'reb' || c.k === 'ast' ? Math.round(v) : v.toFixed(1));
    const oppCard = oid => {
      const O = weekTeam(data, oid, w, opt), R = cmp(T, O);
      const win = R.exp >= 4.5;
      return `<div class="card"><div class="card-head"><h2>vs ${tLink(ctx, byId[oid])}</h2><span class="cbbm-exp ${win ? 'up' : 'down'}">≈ ${R.exp.toFixed(1)} : ${(9 - R.exp).toFixed(1)}</span></div>
        <div class="table-wrap"><table class="table compact"><thead><tr><th>Kat.</th><th class="num">${e(nba.initials(t.name))}</th><th class="num">${e(nba.initials(byId[oid].name))}</th><th>Chance</th></tr></thead><tbody>
        ${R.rows.map(x => `<tr><td class="strong">${x.c.l}</td><td class="num">${fmtV(x.c, x.va)}</td><td class="num">${fmtV(x.c, x.vb)}</td>
          <td><div class="cbbm-prob"><i style="width:${Math.round(x.prob * 100)}%;background:${x.prob >= 0.6 ? '#2e9d62' : x.prob <= 0.4 ? '#d9534f' : '#c9a227'}"></i><span>${Math.round(x.prob * 100)} %</span></div></td></tr>`).join('')}
        </tbody></table></div><div class="small muted" style="padding:4px 14px 10px">${Math.round(O.games)} Spiele der Aktiven (Du: ${Math.round(T.games)})</div></div>`;
    };
    const tips = opt ? [] : swapTips(T);
    const nAct = N().roster(data, tid).filter(r => r.status === 'A').length;
    const prow = x => `<tr class="${x.on ? '' : 'muted'}"><td><span class="pos nba-pos">${e(x.on ? (opt ? x.slot : x.r.slot) : x.r.status === 'IR' ? 'IR' : 'Bank')}</span>${opt && x.on !== (x.r.status === 'A') ? ` <small class="${x.on ? 'up' : 'down'}" title="${x.on ? 'In Fantrax auf Reserve — aufstellen' : 'In Fantrax aktiv — diese Woche besser auf die Bank'}">${x.on ? '▲' : '▼'}</small>` : ''}</td>
      <td class="strong">${e(x.r.name)}${nba.injury(x.r.inj)}</td><td>${schoolLink(ctx, x.r.team)}</td><td class="num strong">${x.games}</td>
      <td class="num">${x.p ? `<span class="${x.p.z >= 0 ? 'up' : 'down'}">${sgn(x.p.z)}</span>` : '—'}</td><td class="num">${x.p ? sgn(x.val) : '—'}</td>
      <td class="num">${x.p ? r1(x.p.min) : '—'}</td></tr>`;
    const sorted = T.players.slice().sort((a, b) => (a.on ? 0 : 1) - (b.on ? 0 : 1) || b.val - a.val);
    return `<div class="page-head"><h1 class="page-title display">⚔️ Matchup-Planer</h1>
        <div class="page-sub">Woche ${w.n}${w.playoff ? ' · Playoffs' : ''} · ${fmtD(w.start)}–${fmtD(lastDay)} · zwei Gegner pro Woche · 20 Aktive zählen</div></div>
      <div class="controls"><select class="tr-select" data-team>${teams.map(x => `<option value="${x.id}"${x.id === tid ? ' selected' : ''}>${e(x.name)}</option>`).join('')}</select>
        <div class="seg">${[['opt', '✨ Beste Aufstellung'], ['fantrax', '📋 Wie in Fantrax']].map(([k, l]) => `<button type="button" class="seg-btn${(opt ? 'opt' : 'fantrax') === k ? ' active' : ''}" data-lineup="${k}">${l}</button>`).join('')}</div>
        <select class="tr-select" data-week>${W.map(x => `<option value="${x.n}"${x.n === w.n ? ' selected' : ''}>Woche ${x.n} · ${fmtD(x.start)}${x.n === cur.n ? ' (aktuell)' : ''}</option>`).join('')}</select></div>
      ${!opt && nAct < 20 ? `<div class="note">⚠️ In Fantrax sind nur ${nAct} von 20 Spielern aktiv — ${20 - nAct} Slots bleiben leer.</div>` : ''}
      ${!T.hasDates ? '<div class="note">📅 Der ESPN-Spielplan ist noch nicht geladen — bis dahin rechnet der Planer mit 2 Spielen pro Woche und Spieler.</div>' : ''}
      <div class="note">Erwartete Kategorien = Projektion pro Spiel × Spiele der Schule in dieser Woche, für die 20 Aktiven (${opt ? 'beste Aufstellung nach Wochenwert, bei allen Teams — ▲/▼ = anders als in Fantrax' : 'so wie in Fantrax eingetragen'}). Chance je Kategorie aus der typischen Wochen-Streuung. Ab Saisonstart werden die Projektionen mit echten Spielen nachgeschärft.</div>
      <div class="cbbm-opps">${opps.map(oppCard).join('') || '<p class="muted">Kein Matchup in dieser Woche.</p>'}</div>
      ${tips.length ? `<div class="card"><div class="card-head"><h2>💡 Aufstellungs-Tipps</h2><span class="muted small">Wochenwert = Spiele × z pro Spiel</span></div><ul class="cbbm-notes">
        ${tips.map(x => `<li><b>${e(x.inP.r.name)}</b> (${x.inP.games} Spiele, ${sgn(x.inP.val)}) statt <b>${e(x.outP.r.name)}</b> (${x.outP.games} Spiele, ${sgn(x.outP.val)}) im Slot ${e(x.outP.r.slot)}</li>`).join('')}</ul></div>` : ''}
      <div class="card"><div class="card-head"><h2>Kader von ${tLink(ctx, t)} in Woche ${w.n}</h2></div>
        <div class="table-wrap"><table class="table compact"><thead><tr><th>Slot</th><th>Spieler</th><th>Schule</th><th class="num">Spiele</th><th class="num">z/Spiel</th><th class="num">Woche</th><th class="num">Min</th></tr></thead>
        <tbody>${sorted.map(prow).join('')}</tbody></table></div></div>`;
  }
  function plannerMount(root, ctx) {
    root.querySelectorAll('[data-lineup]').forEach(b => b.addEventListener('click', () => { ctx.store.setJSON('cbbplaner', { ...ctx.store.getJSON('cbbplaner', {}), lineup: b.dataset.lineup }); ctx.refresh(); }));
    const t = root.querySelector('[data-team]');
    if (t) t.addEventListener('change', () => { ctx.store.setJSON('cbbplaner', { ...ctx.store.getJSON('cbbplaner', {}), team: Number(t.value) }); ctx.refresh(); });
    const w = root.querySelector('[data-week]');
    if (w) w.addEventListener('change', () => { location.hash = ctx.href('cbbplaner', w.value).replace(/^.*#/, '#'); });
  }


  // ============================================================
  //  6 — Fantasy Radar (9-Cat-Perzentile + College-Kontext, Vergleich, Profil-Zwillinge)
  // ============================================================
  const RCATS = [['pts', 'PTS'], ['tpm', '3PM'], ['reb', 'REB'], ['ast', 'AST'], ['stl', 'STL'], ['blk', 'BLK'], ['to', 'TO CTRL'], ['fgImpact', 'FG%'], ['ftImpact', 'FT%']];
  const RCTX = [
    ['min', 'Minuten', p => p.min], ['usg', 'Usage', p => p.usg], ['conf', 'Sicherheit', p => p.conf],
    ['pace', 'Team-Tempo', (p, C) => (C[p.team] || {}).paceRel], ['srs', 'Team-Stärke', (p, C) => (C[p.team] || {}).srs],
    ['yrs', 'Restjahre', p => (p.yrs || 0) * (1 - (p.leave || 0) * 0.5)], ['dyn', 'Dynasty', p => p.dyn || 0],
  ];
  const rcache = new WeakMap();
  const pctl = (sorted, v) => { if (v == null || !sorted.length) return null; let lo = 0, hi = sorted.length; while (lo < hi) { const m = (lo + hi) >> 1; if (sorted[m] < v) lo = m + 1; else hi = m; } let lo2 = lo; hi = sorted.length; while (lo2 < hi) { const m = (lo2 + hi) >> 1; if (sorted[m] <= v) lo2 = m + 1; else hi = m; } return 100 * (lo + 0.5 * (lo2 - lo)) / sorted.length; };
  function radarEnv(data) {
    if (rcache.has(data)) return rcache.get(data);
    const I = idx(data), C = data.CBB_TEAM_CONTEXT || {};
    const pool = I.list.filter(p => p.min >= 10 && p.zc);
    const S = {}, SX = {}, SL = {};
    RCATS.forEach(([k]) => { S[k] = pool.map(p => p.zc[k] || 0).sort((a, b) => a - b); });
    RCTX.forEach(([k, , f]) => { SX[k] = pool.map(p => f(p, C)).filter(v => v != null && (k !== 'dyn' || v > 0)).sort((a, b) => a - b); });
    const LS = ((data.LAST_SEASON_RANKINGS || {}).players || []).filter(p => p.min >= 10 && p.zScores);
    RCATS.forEach(([k]) => { SL[k] = LS.map(p => p.zScores[k] || 0).sort((a, b) => a - b); });
    const lastBy = new Map(); LS.forEach(p => lastBy.set(N().key(p.name), p));
    const prof = p => RCATS.map(([k]) => pctl(S[k], (p.zc || {})[k] || 0));
    const env = { I, C, pool, S, SX, SL, lastBy, prof, profs: new Map(pool.map(p => [p, prof(p)])) };
    rcache.set(data, env);
    return env;
  }
  const pid = p => p.name + '|' + p.team;
  function radarPage(ctx) {
    const { data, ui } = ctx, e = ui.esc, nba = N().init(data);
    if (!data.CBB_PROJECTIONS) return ui.empty('Keine Projections', '', '🕸️');
    const E = radarEnv(data), I = E.I;
    const byId = new Map(I.list.map(p => [pid(p), p]));
    const st = { sel: [], last: true, ...ctx.store.getJSON('cbbradar', {}) };
    let sel = st.sel.map(id => byId.get(id)).filter(Boolean).slice(0, 3);
    if (!sel.length) {
      const me = myTeam(data);
      const mine = me ? nba.roster(data, me.id).map(r => I.proj(r.name, r.team)).filter(Boolean).sort((a, b) => b.z - a.z) : [];
      sel = [mine[0] || I.list.slice().sort((a, b) => b.z - a.z)[0]];
    }
    const main = sel[0];
    const last = st.last && sel.length === 1 ? E.lastBy.get(nba.key(main.name)) : null;
    const series = sel.map(p => { const v = E.prof(p); return { name: p.name, vals: v.map(x => x / 100), tips: RCATS.map(([k, l], i) => `${p.name} · ${l}: ${Math.round(v[i])}. Perzentil (Projektion 26/27)`) }; });
    if (last) {
      const v = RCATS.map(([k]) => pctl(E.SL[k], last.zScores[k] || 0));
      series.push({ name: main.name + ' (Vorsaison)', vals: v.map(x => x / 100), tips: RCATS.map(([, l], i) => `${main.name} 25/26 (${last.team}): ${l} ${Math.round(v[i])}. Perzentil`) });
    }
    const radar1 = MFHFB.charts.radar({ axes: RCATS.map(([, l], i) => ({ label: sel.length === 1 ? `${l} ${Math.round(E.prof(main)[i])}` : l })), series, size: 300, label: 'Fantasy Radar ' + main.name });
    const ctxVals = p => RCTX.map(([k, , f]) => pctl(E.SX[k], f(p, E.C)));
    const radar2 = MFHFB.charts.radar({ axes: RCTX.map(([, l], i) => ({ label: sel.length === 1 ? `${l} ${Math.round(ctxVals(main)[i] || 0)}` : l })),
      series: sel.map(p => { const v = ctxVals(p); return { name: p.name, vals: v.map(x => (x == null ? null : x / 100)), tips: RCTX.map(([, l], i) => `${p.name} · ${l}: ${v[i] == null ? '—' : Math.round(v[i]) + '. Perzentil'}`) }; }), size: 300, label: 'College-Kontext' });
    const chipNames = sel.map(p => p.name).concat(last ? [main.name + ' 25/26'] : []);
    // Profil-Zwillinge: kleinster mittlerer Perzentil-Abstand, frei bevorzugt
    const mp = E.prof(main);
    const twins = E.pool.filter(p => p !== main && p.min >= 15).map(p => { const v = E.profs.get(p); return { p, d: 100 - v.reduce((s, x, i) => s + Math.abs(x - mp[i]), 0) / v.length, o: I.owner(p.name) }; })
      .sort((a, b) => b.d - a.d);
    const freeTw = twins.filter(x => !x.o && x.p.fx).slice(0, 5), anyTw = twins.slice(0, 5);
    const twRow = x => `<tr><td class="strong">${e(x.p.name)}${srcBadge(ctx, x.p)}</td><td>${schoolLink(ctx, x.p.team)}</td><td class="num">${Math.round(x.d)}</td><td class="num"><span class="${x.p.z >= 0 ? 'up' : 'down'}">${sgn(x.p.z)}</span></td><td>${tLink(ctx, x.o)}</td>
      <td><button type="button" class="seg-btn mp-btn" data-add="${e(pid(x.p))}">+ Vergleich</button> <button type="button" class="seg-btn mp-btn" data-open="${e(pid(x.p))}">Öffnen</button></td></tr>`;
    const row = (l, f) => `<tr><td class="strong">${l}</td>${sel.map(p => `<td class="num">${f(p)}</td>`).join('')}</tr>`;
    const c = E.C[main.team] || {};
    return `<div class="page-head"><h1 class="page-title display">🕸️ Fantasy Radar</h1>
        <div class="page-sub">Perzentil je Kategorie gegen alle College-Spieler ab 10 Min. (Projektion 26/27${I.live && I.live.players ? ' + echte Spiele' : ''}) · bis zu 3 Spieler vergleichen</div></div>
      <div class="controls"><input class="search" list="cbbr-list" placeholder="Spieler hinzufügen …" data-pick aria-label="Spieler suchen">
        <datalist id="cbbr-list">${I.list.filter(p => p.min >= 5).map(p => `<option value="${e(p.name)} · ${e(p.team)}">`).join('')}</datalist>
        ${sel.map((p, k) => `<span class="dna-chip ${MFHFB.charts.SEL[k]}"><i></i>${e(p.name)} <button type="button" class="linklike" data-del="${e(pid(p))}" aria-label="entfernen">✕</button></span>`).join('')}
        ${sel.length === 1 ? `<label class="small"><input type="checkbox" data-last${st.last ? ' checked' : ''}> Vorsaison einblenden</label>` : ''}</div>
      <div class="cbbm-ctx"><div class="card cw-radar"><div class="card-head"><h2>9 Kategorien</h2></div>${MFHFB.charts.chips(chipNames)}${radar1}
          ${last ? `<p class="small muted" style="padding:0 14px 10px">Vorsaison 25/26 bei ${e(last.team)}: ${last.games} Spiele, ${last.min} Min., Rang #${last.rank}. Unterschied zur Projektion = neue Rolle, Schule, Entwicklung.</p>` : sel.length === 1 && st.last ? '<p class="small muted" style="padding:0 14px 10px">Keine Vorsaison-Daten (Freshman oder neu).</p>' : ''}</div>
        <div class="card cw-radar"><div class="card-head"><h2>College-Kontext</h2></div>${MFHFB.charts.chips(sel.map(p => p.name))}${radar2}
          <p class="small muted" style="padding:0 14px 10px">Minuten, Usage, Datensicherheit, Tempo und Stärke der Schule, Restjahre (mit Draft-Risiko), Dynasty-Wert — jeweils als Perzentil.</p></div></div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th></th>${sel.map((p, k) => `<th class="num"><span class="dna-chip ${MFHFB.charts.SEL[k]} cw-dot"><i></i></span>${e(p.name.split(' ').slice(-1)[0])}</th>`).join('')}</tr></thead><tbody>
        ${row('Schule', p => schoolLink(ctx, p.team) + ` <small class="muted">${e(p.pos || '')}${p.cls ? ' ' + CLS[p.cls] : ''}</small>`)}
        ${row('Rolle', p => `${e(p.role || '—')}<br><small class="muted">${e((p.arche || []).join(' · '))}</small>`)}
        ${row('Min / Usg', p => `${r1(p.min)} / ${r1(p.usg)}`)}
        ${RCATS.map(([k, l], i) => row(l, p => { const v = E.prof(p)[i]; const raw = { pts: p.pts, tpm: p.tpm, reb: p.reb, ast: p.ast, stl: p.stl, blk: p.blk, to: p.tov, fgImpact: p.fgPct, ftImpact: p.ftPct }[k]; return `<span style="${nba.heat((v - 50) / 20)}"><b>${Math.round(v)}</b></span> <small class="muted">${raw == null ? '' : Number(raw).toFixed(k === 'fgImpact' || k === 'ftImpact' || k === 'pts' || k === 'reb' || k === 'ast' ? 1 : 2)}</small>`; })).join('')}
        ${row('9-Cat z', p => `<b class="${p.z >= 0 ? 'up' : 'down'}">${sgn(p.z)}</b>`)}
        ${row('Dynasty', p => `${(p.dyn || 0).toFixed(1)}${p.leave ? ` <small class="muted">Draft ${Math.round(p.leave * 100)} %</small>` : ''}`)}
        ${row('Fantasy-Team', p => (p.fx ? tLink(ctx, I.owner(p.name)) : '—'))}
      </tbody></table></div>
      ${sel.length === 1 && data.CBB_NBA_DNA && data.CBB_NBA_DNA.p[pid(main)] ? (() => { const d = data.CBB_NBA_DNA.p[pid(main)]; const t = dnaTags(d.nz); return `<div class="note">🧬 <b>NBA-DNA:</b> ${pctS(d.rot)} NBA-Rotation, ${pctS(d.fan)} Fantasy-Top-150${t.plus.length ? ` · nimmt mit: ${t.plus.join(', ')}` : ''} · ähnlich: ${e(d.comps[0][0])} (${e(compOut(d.comps[0]))}). <a href="${ctx.href('cbbdna', pid(main))}">Details →</a></div>`; })() : ''}
      ${sel.length === 1 ? `<div class="note">🏫 ${e(c.name || main.team)}: ${styleNotes(c).slice(0, 3).join(' ') || 'Stil nah am D-I-Schnitt.'}</div>` : ''}
      <div class="cbbm-trade"><div class="card"><div class="card-head"><h2>👯 Profil-Zwillinge (frei)</h2><span class="muted small">ähnliches Kategorie-Profil wie ${e(main.name)}</span></div>
          <div class="table-wrap"><table class="table compact"><thead><tr><th>Spieler</th><th>Schule</th><th class="num" title="100 = identisches Profil">Match</th><th class="num">z</th><th></th><th></th></tr></thead><tbody>${freeTw.map(twRow).join('') || '<tr><td colspan="6" class="muted">—</td></tr>'}</tbody></table></div></div>
        <div class="card"><div class="card-head"><h2>👯 Profil-Zwillinge (alle)</h2></div>
          <div class="table-wrap"><table class="table compact"><thead><tr><th>Spieler</th><th>Schule</th><th class="num">Match</th><th class="num">z</th><th></th><th></th></tr></thead><tbody>${anyTw.map(twRow).join('')}</tbody></table></div></div></div>
      <p class="small muted">Perzentil 90 = besser als 90 % aller College-Spieler ab 10 Min. TO CTRL: hoch = wenig Ballverluste. FG%/FT% nach Einfluss (Quote × Volumen). Match = 100 − mittlerer Perzentil-Abstand über 9 Kategorien.</p>`;
  }
  function radarMount(root, ctx) {
    const get = () => ({ sel: [], last: true, ...ctx.store.getJSON('cbbradar', {}) });
    const E = radarEnv(ctx.data);
    const cur = () => { const st = get(); if (st.sel.length) return st.sel; const h = root.querySelector('[data-del]'); return h ? [h.dataset.del] : []; };
    const save = patch => { ctx.store.setJSON('cbbradar', { ...get(), ...patch }); ctx.refresh(); };
    const pick = root.querySelector('[data-pick]');
    if (pick) pick.addEventListener('change', () => {
      const [n, t] = pick.value.split(' · ');
      const p = E.I.list.find(x => x.name === n && x.team === t);
      if (p) save({ sel: cur().filter(x => x !== pid(p)).concat(pid(p)).slice(-3) });
    });
    root.querySelectorAll('[data-del]').forEach(b => b.addEventListener('click', () => save({ sel: cur().filter(x => x !== b.dataset.del) })));
    root.querySelectorAll('[data-add]').forEach(b => b.addEventListener('click', () => save({ sel: cur().filter(x => x !== b.dataset.add).concat(b.dataset.add).slice(-3) })));
    root.querySelectorAll('[data-open]').forEach(b => b.addEventListener('click', () => save({ sel: [b.dataset.open] })));
    const l = root.querySelector('[data-last]'); if (l) l.addEventListener('change', () => save({ last: l.checked }));
  }


  // ============================================================
  //  7 — NBA-DNA: Setzt er sich in der NBA durch, welche Kategorien nimmt er mit?
  // ============================================================
  const DCATS = [['pts', 'PTS'], ['tpm', '3PM'], ['reb', 'REB'], ['ast', 'AST'], ['stl', 'STL'], ['blk', 'BLK'], ['fgImpact', 'FG%'], ['ftImpact', 'FT%'], ['to', 'TO CTRL']];
  const DDEF2 = { own: 'all', q: '', sort: 'fan' };
  const pctS = v => `${Math.round(v * 100)} %`;
  const chanceCls = v => (v >= 0.5 ? 'up' : v >= 0.2 ? '' : 'muted');
  const dnaTags = (nz, n = 2) => { const e = DCATS.map(([k, l]) => [l, nz[k]]).sort((a, b) => b[1] - a[1]); return { plus: e.slice(0, n).filter(x => x[1] > 0.15).map(x => x[0]), minus: e.slice(-n).filter(x => x[1] < -0.15).map(x => x[0]) }; };
  const compOut = c => (c[3].startsWith('Top') ? `beste NBA-Saison #${c[3].slice(4)}` : c[3]);
  function dnaRows(ctx, st) {
    const { data, ui } = ctx, e = ui.esc, I = idx(data), DN = (data.CBB_NBA_DNA || {}).p || {};
    const q = st.q.toLowerCase().trim();
    let L = I.list.filter(p => DN[pid(p)]).map(p => ({ p, d: DN[pid(p)], o: I.owner(p.name) })).filter(x => {
      if (st.own === 'free' && (x.o || !x.p.fx)) return false;
      if (st.own === 'owned' && !x.o) return false;
      return !q || [x.p.name, x.p.team, x.o && x.o.name].some(v => String(v || '').toLowerCase().includes(q));
    });
    L.sort((a, b) => (st.sort === 'rot' ? b.d.rot - a.d.rot : st.sort === 'z' ? b.p.z - a.p.z : b.d.fan - a.d.fan));
    L = L.slice(0, 300);
    if (!L.length) return `<tr><td colspan="9">${ui.empty('Keine Treffer', '', '🔎')}</td></tr>`;
    return L.map((x, i) => { const t = dnaTags(x.d.nz), c = x.d.comps[0];
      return `<tr><td class="num">${i + 1}</td><td class="strong nba-sticky"><a href="${ctx.href('cbbdna', pid(x.p))}">${e(x.p.name)}</a> ${x.p.cls ? `<span class="nba-age">${CLS[x.p.cls] || ''}</span>` : ''}</td>
        <td>${schoolLink(ctx, x.p.team)} <small class="muted">${e(x.p.pos || '')}</small></td>
        <td class="num"><b class="${chanceCls(x.d.rot)}">${pctS(x.d.rot)}</b></td><td class="num"><b class="${chanceCls(x.d.fan * 1.6)}">${pctS(x.d.fan)}</b></td>
        <td class="small">${t.plus.map(l => `<span class="up strong">${l}</span>`).join(' ')}${t.minus.length ? ' · ' + t.minus.map(l => `<span class="down">${l}</span>`).join(' ') : ''}</td>
        <td class="small">${c ? `${e(c[0])} <span class="muted">(${e(compOut(c))})</span>` : ''}</td>
        <td class="num"><span class="${x.p.z >= 0 ? 'up' : 'down'}">${sgn(x.p.z)}</span></td><td>${x.p.fx ? tLink(ctx, x.o) : '—'}</td></tr>`; }).join('');
  }
  function dnaPage(ctx) {
    const { data, ui, params } = ctx, e = ui.esc;
    const DD = data.CBB_NBA_DNA;
    if (!DD) return ui.empty('Keine NBA-DNA', 'nba-dna.js fehlt.', '🧬');
    const M = DD.meta, I = idx(data);
    if (params[0]) {
      const p = I.list.find(x => pid(x) === params[0]), d = DD.p[params[0]];
      if (!p || !d) return ui.empty('Spieler nicht gefunden', 'Für Spieler ohne College-Daten (ab 250 Min.) gibt es noch keine DNA.', '🧬');
      const t = dnaTags(d.nz, 3);
      const bar = ([k, l]) => { const v = d.nz[k], w = Math.max(-50, Math.min(50, v * 33)); return `<div class="cbbm-bar" title="erwartetes NBA-z ${l}: ${sgn(v)} (0 = durchschnittlicher NBA-Rotationsspieler) · Translation r = ${M.catR[k]}"><span>${l}</span><div class="cbbm-track"><i class="${w >= 0 ? 'pos' : 'neg'}" style="${w >= 0 ? 'left:50%' : `left:${50 + w}%`};width:${Math.abs(w)}%"></i></div><b>${sgn(v)}</b></div>`; };
      const lastSeason = `${d.season - 1}/${String(d.season).slice(2)}`;
      return `<a class="back" href="${ctx.href('cbbdna')}">← NBA-DNA</a>
        <div class="page-head"><h1 class="page-title display">🧬 ${e(p.name)}</h1>
          <div class="page-sub">${e(((data.CBB_TEAM_CONTEXT || {})[p.team] || {}).name || p.team)} · ${e(p.pos || '')}${p.cls ? ' · ' + CLS[p.cls] : ''} · Basis: College-Saison ${lastSeason} (${d.yr}. College-Jahr, ${d.min} Min.) — „wenn er danach in die NBA ginge“</div></div>
        <div class="cbbm-dnahead">
          <div class="dna-badge ${d.rot >= 0.5 ? 'p-hi' : ''}"><b>${pctS(d.rot)}</b><small>NBA-Rotation</small></div>
          <div class="dna-badge"><b>${pctS(d.fan)}</b><small>Fantasy-Top-150</small></div>
          <div class="small muted" style="max-width:520px">Chance, in den ersten 4 NBA-Jahren eine Saison mit 40+ Spielen und 18+ Min. zu haben bzw. eine Top-150-Saison (9-Cat). Zum Vergleich: im Schnitt schaffen das ${pctS(M.base.rot)} bzw. ${pctS(M.base.fan)} aller College-Spieler mit 300+ Min.</div></div>
        <div class="cbbm-ctx"><div class="card"><div class="card-head"><h2>NBA-Profil, wenn er es schafft</h2><span class="muted small">erwartetes 9-Cat-z, 0 = Ø NBA-Rotationsspieler</span></div>
            <div class="cbbm-bars">${DCATS.map(bar).join('')}</div>
            <p class="small muted" style="padding:0 14px 10px">${t.plus.length ? `Nimmt mit: <b>${t.plus.join(', ')}</b>. ` : ''}${t.minus.length ? `Schwach in der NBA: <b>${t.minus.join(', ')}</b>.` : ''}</p></div>
          <div class="card"><div class="card-head"><h2>👯 Historische Vergleiche</h2><span class="muted small">ähnlichstes College-Profil, mit NBA-Karriere</span></div>
            <div class="table-wrap"><table class="table compact"><thead><tr><th>Spieler</th><th class="num">College bis</th><th class="num">Match</th><th>NBA</th><th class="num" title="bester BBM-Wert pro Spiel in den ersten 4 Jahren">BBM</th></tr></thead><tbody>
            ${d.comps.map(c => `<tr><td class="strong">${e(c[0])}</td><td class="num">${c[1]}</td><td class="num">${c[2]}</td><td class="small">${e(compOut(c))}</td><td class="num">${c[4] == null ? '—' : sgn(c[4])}</td></tr>`).join('')}</tbody></table></div>
            <p class="small muted" style="padding:0 14px 10px">Vergleich nur unter Spielern, die es in die NBA geschafft haben — zeigt den Spielertyp, nicht die Chance.</p></div></div>
        <div class="note">So übersetzt sich College → NBA (Test an 2017–22, r = Zusammenhang College-Profil → NBA-Kategorie): ${DCATS.map(([k, l]) => `<b>${l}</b> ${M.catR[k].toFixed(2)}`).join(' · ')}. Blocks, Rebounds und Assists nehmen Spieler am verlässlichsten mit, Punkte am wenigsten — College-Scorer werden in der NBA oft Rollenspieler.</div>
        <p class="small"><a href="${ctx.href('cbbradar')}">→ Fantasy Radar</a> · <a href="${ctx.href('cbbproj')}">→ Projections</a></p>`;
    }
    const st = { ...DDEF2, ...ctx.store.getJSON('cbbdna', {}) };
    const seg = (key, opts) => `<div class="seg" role="group">${opts.map(([k, l]) => `<button type="button" class="seg-btn${st[key] === k ? ' active' : ''}" data-set="${key}" data-val="${k}">${l}</button>`).join('')}</div>`;
    const catBars = DCATS.slice().sort((a, b) => M.catR[b[0]] - M.catR[a[0]]).map(([k, l]) => `<div class="cbbm-bar"><span>${l}</span><div class="cbbm-track"><i class="pos" style="left:0;width:${Math.round(M.catR[k] * 100)}%"></i></div><b>${M.catR[k].toFixed(2)}</b></div>`).join('');
    return `<div class="page-head"><h1 class="page-title display">🧬 NBA-DNA</h1>
        <div class="page-sub">Setzt er sich in der NBA durch — und welche Fantasy-Kategorien nimmt er mit? Gelernt aus ${M.n.toLocaleString('de-DE')} College-Abschlusssaisons ${M.years[0]}–${M.years[1]} und deren ersten 4 NBA-Jahren.</div></div>
      <div class="cbbm-ctx"><div class="card"><div class="card-head"><h2>Was übersetzt sich?</h2><span class="muted small">r: College-Profil → NBA-Kategorie (Test 2017–22)</span></div><div class="cbbm-bars cbbm-bars-r">${catBars}</div></div>
        <div class="card"><div class="card-head"><h2>Wie gut trifft das Modell?</h2></div><ul class="cbbm-notes">
          <li>Trennschärfe (AUC) im Test 2017–22: <b>${M.auc.rot.toFixed(2)}</b> für NBA-Rotation, <b>${M.auc.fan.toFixed(2)}</b> für Fantasy-Top-150.</li>
          <li>${M.nRot} Rotationsspieler und ${M.nFan} Fantasy-Top-150-Spieler in den Daten.</li>
          <li>Stärkste Signale: Niveau der Schule, Minuten, <b>Steals + Blocks</b> (Athletik), junges Alter (frühes College-Jahr), Punkte, Zweier-Quote, Dreier-Volumen.</li>
          <li>Kalibrierung im Test: Unter 40 % stimmen die Chancen gut, bei 40–80 % sind sie etwas zu optimistisch (real eher 30–55 %), über 80 % trafen 80–85 %.</li>
          <li>Ohne Körpermaße, Alter in Jahren und Scouting — echte Draft-Modelle wissen mehr. Basis ist die letzte College-Saison, nicht die laufende.</li></ul></div></div>
      <div class="controls">${seg('own', [['all', 'Alle'], ['free', 'Frei'], ['owned', 'Gerostert']])}${seg('sort', [['fan', 'Fantasy-Chance'], ['rot', 'NBA-Chance'], ['z', 'College 26/27']])}
        <input type="search" class="search" placeholder="Spieler, Schule, Fantasy-Team …" value="${e(st.q)}" data-q aria-label="Suchen"></div>
      <div class="table-wrap"><table class="table compact"><thead><tr><th class="num">#</th><th class="nba-sticky">Spieler</th><th>Schule</th><th class="num" title="Saison mit 40+ Spielen und 18+ Min. in den ersten 4 NBA-Jahren">NBA</th><th class="num" title="Top-150-Saison (9-Cat) in den ersten 4 NBA-Jahren">Fantasy</th><th>NBA-Stärken · Schwächen</th><th>Ähnlichster Ex-College-Spieler</th><th class="num" title="Projektion College 26/27">z 26/27</th><th>Fantasy-Team</th></tr></thead>
        <tbody data-body>${dnaRows(ctx, st)}</tbody></table></div>
      <p class="small muted">Nur Spieler mit mind. 250 College-Minuten in einer Saison (Freshmen 26/27 folgen nach der Saison). Für Dynasty heißt eine hohe NBA-Chance auch: Er bleibt womöglich nicht lange im College.</p>`;
  }
  function dnaMount(root, ctx) {
    const get = () => ({ ...DDEF2, ...ctx.store.getJSON('cbbdna', {}) });
    const save = (patch, full = true) => { ctx.store.setJSON('cbbdna', { ...get(), ...patch }); if (full) ctx.refresh(); };
    root.querySelectorAll('[data-set]').forEach(b => b.addEventListener('click', () => save({ [b.dataset.set]: b.dataset.val })));
    const q = root.querySelector('[data-q]');
    if (q) q.addEventListener('input', () => { save({ q: q.value }, false); root.querySelector('[data-body]').innerHTML = dnaRows(ctx, get()); });
  }

  const D = ['teams', '?rosters-live', 'sport:projections-cbb', '?sport:live-projections-cbb'];
  MFHFB.pages.register({ id: 'cbbproj', section: 'players', label: 'Projections', icon: '🔮', applies: A, data: D.concat(['?sport:team-context']), title: () => 'Projections 2026/27', render: projPage, mount: projMount });
  MFHFB.pages.register({ id: 'cbbradar', section: 'players', label: 'Fantasy Radar', icon: '🕸️', applies: A, data: D.concat(['?sport:team-context', '?sport:last-season-rankings', '?sport:nba-dna']), title: () => 'Fantasy Radar', render: radarPage, mount: radarMount });
  MFHFB.pages.register({ id: 'cbbdna', section: 'players', label: 'NBA-DNA', icon: '🧬', applies: A, data: D.concat(['sport:nba-dna', '?sport:team-context']), title: ({ data, params }) => (params[0] ? params[0].split('|')[0] + ' · NBA-DNA' : 'NBA-DNA'), render: dnaPage, mount: dnaMount });
  MFHFB.pages.register({ id: 'cbbschulen', section: 'teams', label: 'Schulen & Kontext', icon: '🏫', applies: A, data: D.concat(['sport:team-context']), title: ({ data, params }) => (params[0] && ((data.CBB_TEAM_CONTEXT || {})[params[0]] || {}).name) || 'Schulen & Kontext', render: schoolPage });
  MFHFB.pages.register({ id: 'cbbdyn', section: 'dynasty', label: 'Dynasty Rankings', icon: '🏆', applies: A, data: D.concat(['rankings']), title: () => 'Dynasty Rankings', render: dynPage, mount: dynMount });
  MFHFB.pages.register({ id: 'cbbtrade', section: 'trade', label: 'Trade Analyzer', icon: '⚖️', applies: A, data: D, title: ({ params }) => (params[0] === 'finder' ? 'Trade Finder' : 'Trade Analyzer'), render: tradePage, mount: tradeMount });
  MFHFB.pages.register({ id: 'cbbplaner', section: 'matchups', label: 'Matchup-Planer', icon: '⚔️', applies: A, data: D.concat(['fantasy-schedule', '?sport:espn-rosters']), title: () => 'Matchup-Planer', render: plannerPage, mount: plannerMount });
})();
