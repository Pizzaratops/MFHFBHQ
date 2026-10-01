// ============================================================
//  Tools (NBA, Dynasty/Keeper): Labs & Scouting
// ============================================================
//  #/<liga>/prospects[/2027]   Prospect DB 2026 / 2027
//  #/<liga>/bigboard           MFHFBs Big Board (Stat Sheet, editierbar)
//  #/<liga>/lottery            2026 Draft Lottery (Pre-Lottery Odds)
//  #/<liga>/powerscore[/<id>]  Fantasy Bootleg Power Score
//
//  Port aus Taco-Tuesday-HQ:
//   - js/draft2026.js / js/draft2027.js (renderDraft26/27, Scout-Modal)
//     Daten: sport:draft2026 (DRAFT_2026, TIER_ORDER, TIER_STYLE_*),
//     sport:draft2027 (DRAFT_2027). Neu: Draft-Ergebnis aus
//     POSTDRAFT_BOARD (sport:postdraft-board) + Fantasy-Besitzer.
//   - js/big-board.js — State-Logik (Tiers, HM, Drag & Drop, Notes)
//     unverändert. Speicher: mfhfb:<liga>:bigboard; ein vorhandenes
//     Board der alten Seite (localStorage mfhfbs_bigBoard_v3, gleiche
//     Origin) wird beim ersten Öffnen übernommen (nur lesend).
//     Weggelassen: Spalte „Liga“ + „Top Disagreements“ (hingen am
//     deaktivierten Draft Duel). Neu: ▲/▼-Buttons im Edit-Mode, weil
//     Drag & Drop auf Touch-Geräten nicht funktioniert.
//   - js/analytics.js LOTTERY_DATA + renderLottery/openLotteryModal
//     (Daten 1:1 per Script aus der alten Datei übernommen).
//   - js/fantasy-power-score.js (war in TTHQ verwaist: keine Seite, kein
//     Menüeintrag) — Daten: FANTASY_POWER_SCORE (fantasy-power-score).
//  Draft Duel und Live-Projections-Labs sind bewusst nicht portiert.
// ============================================================

(function () {
  const N = () => MFHFB.nba;
  const A = { sport: ['nba'], keepers: [true] };

  // ---------- gemeinsam ----------
  const TIER_ORDER_FALLBACK = ['Tier 1', 'Tier 1.5', 'Tier 2', 'Tier 3', 'Tier 4', 'Tier 5', 'Tier 6', 'Mystery'];
  // Tier-Farbe (TIER_STYLE_DARK/LIGHT aus data/draft2026.js) als --tc/--tcl (→ .mp-tc)
  function tierStyle(data, tier) {
    const d = (data.TIER_STYLE_DARK || {}), l = (data.TIER_STYLE_LIGHT || {});
    const sd = d[tier] || d['Tier 6'], sl = l[tier] || l['Tier 6'];
    return sd && sl ? `--tc:${sd.dot};--tcl:${sl.dot}` : '';
  }
  const posPill = (e, pos) => { const p = String(pos || '').split('/')[0].trim(); return `<span class="pos nba-pos pos-${e(p || 'x')}">${e(pos || '?')}</span>`; };

  // Scout-Modal (openScoutModal / openScoutModal27 / bbShowScout)
  function scoutModal(ctx, p, o) {
    const e = ctx.ui.esc;
    const hasStats = p.stats && p.stats !== '—';
    const html = `<div class="dna-modal-box lab-scout mp-tc" style="${tierStyle(ctx.data, p.tier)}">
      <div class="dna-modal-head"><div>
          <div class="lab-kicker">${e(o.head)}</div>
          <h2 class="lab-sname display">${e(p.name)}</h2>
          <div class="lab-pmeta">${posPill(e, p.pos)}${p.school ? `<span class="lab-chip">${e(p.school)}</span>` : ''}${p.tier ? `<span class="lab-chip lab-tchip">${e(p.tier)}</span>` : ''}${o.extra || ''}</div>
        </div><button type="button" class="dna-modal-x" data-close aria-label="Schließen">✕</button></div>
      ${p.measurements ? `<div class="lab-meas">📐 ${e(p.measurements)}</div>` : ''}
      ${hasStats ? `<div class="lab-box"><div class="lab-boxlbl">📊 ${e(o.statsLabel)}</div><div class="lab-boxtxt">${e(p.stats)}</div></div>` : ''}
      ${p.fantasy ? `<div class="lab-box lab-fbox"><div class="lab-boxlbl">🏆 Fantasy 9cat Profil</div><div class="lab-boxtxt">${e(p.fantasy)}</div></div>` : ''}
      <div class="lab-boxlbl">🔍 ${e(o.scoutLabel)}</div>
      <div class="lab-scouttxt">${e(p.scouting || 'Kein Scouting Report verfügbar.')}</div>
      ${p.link ? `<a class="lab-extlink" href="${e(p.link)}" target="_blank" rel="noopener">🎬 Volle Scouting-Reports &amp; Tape auf Grinding Tape →</a>` : ''}
    </div>`;
    MFHFB.ui.modal('labScoutModal', html);
  }

  // data/draft2026.js ist eine Kopie des alten UI-Scripts und hängt beim
  // Laden einen keydown-Listener an, der #scoutModal erwartet (Escape →
  // TypeError). Bis die Datei auf reine Daten reduziert ist: leeres,
  // unsichtbares Element bereitstellen (nur Absturz-Schutz).
  function guardLegacyScoutModal() {
    if (!document.getElementById('scoutModal')) {
      const s = document.createElement('div');
      s.id = 'scoutModal'; s.hidden = true; s.setAttribute('aria-hidden', 'true');
      document.body.appendChild(s);
    }
  }

  // ============================================================
  //  Prospect DB 2026 / 2027
  // ============================================================
  function prospectSet(ctx) {
    const d = ctx.data;
    const y2027 = ctx.params[0] === '2027' && Array.isArray(d.DRAFT_2027);
    return y2027 ? { year: 2027, list: d.DRAFT_2027 } : { year: 2026, list: d.DRAFT_2026 || [] };
  }

  function prospectExtras(ctx) {
    const nba = N(), d = ctx.data;
    const owner = nba.ownerIndex(d);
    const pd = new Map((d.POSTDRAFT_BOARD || []).map(p => [nba.key(p.name), p]));
    return { owner, pd };
  }

  function draftedTag(e, x) {
    if (!x) return '';
    return x.drafted ? `<span class="lab-chip lab-drafted" title="NBA Draft 2026">#${e(x.draftPick)} ${e(x.nbaTeam || '')}</span>` : '<span class="lab-chip muted">Undrafted</span>';
  }

  function prospectCard(ctx, p, idx, year, X) {
    const e = ctx.ui.esc, nba = N();
    const fp = p.fantasy ? p.fantasy.split(' · ')[0] : '';
    const o = X.owner(p.name);
    const own = o ? `<a class="nba-tlink mp-tc" style="${nba.tcStyle(o)}" href="${ctx.href('teams', o.id)}"><span class="nba-tdot"></span>${e(o.name)}</a>` : '';
    const num = year === 2027 && p.nbaRank != null
      ? `<span class="lab-pnum">${e(p.pick)}<small title="NBA-Draft-Konsens (Tankathon)">Kons. #${e(p.nbaRank)}</small></span>`
      : `<span class="lab-pnum">${e(p.pick)}</span>`;
    return `<article class="card lab-pcard mp-tc" style="${tierStyle(ctx.data, p.tier)}">
      <button type="button" class="lab-pmain" data-scout="${idx}" aria-label="${e(p.name)}: Scouting Report öffnen">
        ${num}
        <span class="lab-pinfo">
          <span class="lab-pname">${e(p.name)}</span>
          <span class="lab-pmeta">${posPill(e, p.pos)}${p.school ? `<span class="lab-pschool">${e(p.school)}</span>` : ''}${year === 2026 ? draftedTag(e, X.pd.get(nba.key(p.name))) : ''}</span>
          ${p.stats && p.stats !== '—' ? `<span class="lab-pline muted">${e(p.stats)}</span>` : ''}
          ${fp ? `<span class="lab-pline lab-pfp">${e(fp)}</span>` : ''}
        </span>
        <span class="lab-popen" aria-hidden="true">🔍</span>
      </button>
      ${own ? `<div class="lab-pown">Fantasy: ${own}</div>` : ''}
      ${p.scouting || p.fantasy ? `<details class="lab-intel"><summary>🔍 Scout Intel</summary><div class="lab-intel-body">
        ${p.fantasy ? `<div class="lab-box lab-fbox"><div class="lab-boxlbl">🏆 Fantasy 9cat</div><div class="lab-boxtxt">${e(p.fantasy)}</div></div>` : ''}
        ${p.scouting ? `<div class="lab-boxlbl">Scouting Report${year === 2027 ? ' (MFHFBs)' : ''}</div><div class="lab-intel-txt">${e(p.scouting)}</div>` : ''}
        ${p.link ? `<a class="lab-extlink" href="${e(p.link)}" target="_blank" rel="noopener">🎬 Volle Scouting-Reports &amp; Tape auf Grinding Tape →</a>` : ''}
      </div></details>` : ''}
    </article>`;
  }

  // renderDraft26/27: ohne Suche nach TIER_ORDER gruppiert, mit Suche flach
  function prospectGrid(ctx, set, q, X) {
    const e = ctx.ui.esc;
    const all = set.list;
    const ql = q.toLowerCase().trim();
    // = filterDraft26/27 (Name, Position, School)
    const data = ql ? all.filter(p => p.name.toLowerCase().includes(ql) || p.pos.toLowerCase().includes(ql) || (p.school || '').toLowerCase().includes(ql)) : all;
    if (!data.length) return ctx.ui.empty('Keine Prospects gefunden', 'Suche anpassen (Name, Position, School).', '🔎');
    const card = p => prospectCard(ctx, p, all.indexOf(p), set.year, X);
    if (ql) return `<div class="lab-pgrid">${data.map(card).join('')}</div>`;
    const order = ctx.data.TIER_ORDER || TIER_ORDER_FALLBACK;
    return order.map(tier => {
      const picks = data.filter(p => p.tier === tier);
      if (!picks.length) return '';
      return `<h2 class="lab-tier mp-tc" style="${tierStyle(ctx.data, tier)}"><i></i>${e(tier)} <small>${picks.length}</small></h2><div class="lab-pgrid">${picks.map(card).join('')}</div>`;
    }).join('');
  }

  function prospectsPage(ctx) {
    const { data, ui, href } = ctx, e = ui.esc;
    N().init(data);
    const set = prospectSet(ctx);
    const tabs = Array.isArray(data.DRAFT_2027) ? `<div class="seg" role="tablist">${[[2026, href('prospects')], [2027, href('prospects', '2027')]].map(([y, h]) => `<a class="seg-btn${set.year === y ? ' active' : ''}" href="${h}" role="tab" aria-selected="${set.year === y}">${y} Draft</a>`).join('')}</div>` : '';
    const head = set.year === 2027
      ? `<div class="page-head"><h1 class="page-title display">📋 MFHFBs Big Board · 2027</h1>
          <div class="page-sub"><span class="explain">Fantasy-gewichtetes Top-${set.list.length} Board, sortiert nach Dynasty-9-Cat-Wert, NICHT nach NBA-Draft-Slot (abgeglichen mit Dizzle Dynasty, Game Theory Rankings, Ben Pfeifers Archetyp-Board u.a.).</span> Volle Reports &amp; Tape bei <a href="https://grindingtape.com/board" target="_blank" rel="noopener">Grinding Tape</a>.</div></div>
        <div class="lab-legend explain"><span><b>Tier</b> = Fantasy-Archetyp-Qualität (MFHFBs Einschätzung)</span><span><b>Große Zahl</b> = Fantasy-Skillset-Rang (MFHFBs)</span><span><b>Kons.</b> = Aggregat-/Konsens-Rang (Tankathon u.a.)</span></div>`
      : `<div class="page-head"><h1 class="page-title display">🔎 Prospect Database · 2026</h1>
          <div class="page-sub"><span class="explain">Scouting Reports &amp; Fantasy-Insights · Tier-Struktur fest · Karte antippen für den vollen Report.</span> Eigene Rangliste → <a href="${href('bigboard')}">🗂️ Big Board</a>${data.POSTDRAFT_BOARD ? ' · Badge = tatsächlicher NBA-Draft-Pick' : ''}.</div></div>`;
    return `${head}
      <div class="controls">${tabs}<input type="search" class="search" placeholder="Prospect, School oder Position …" data-pq aria-label="Prospects durchsuchen"><span class="muted lab-count">${set.list.length} Prospects</span></div>
      <div data-pgrid>${set.list.length ? prospectGrid(ctx, set, '', prospectExtras(ctx)) : ui.empty('Keine Prospect-Daten', `DRAFT_${set.year} fehlt.`, '🔎')}</div>`;
  }

  function prospectsMount(root, ctx) {
    guardLegacyScoutModal();
    const set = prospectSet(ctx), X = prospectExtras(ctx), e = ctx.ui.esc;
    const grid = root.querySelector('[data-pgrid]');
    const q = root.querySelector('[data-pq]');
    if (q) q.addEventListener('input', () => { grid.innerHTML = prospectGrid(ctx, set, q.value, X); });
    grid.addEventListener('click', ev => {
      const b = ev.target.closest('[data-scout]');
      if (!b) return;
      const p = set.list[Number(b.dataset.scout)];
      if (!p) return;
      const x = set.year === 2026 ? X.pd.get(N().key(p.name)) : null;
      scoutModal(ctx, p, set.year === 2027
        ? { head: `#${p.pick} MFHFBs Big Board · ${p.tier}`, statsLabel: 'Per-36 Statistiken', scoutLabel: 'Scouting Report (MFHFBs)', extra: p.nbaRank != null ? `<span class="lab-chip">Konsens #${e(p.nbaRank)}</span>` : '' }
        : { head: `Pick #${p.pick} · ${p.tier}`, statsLabel: 'Statistiken (Per-36 / Col.)', scoutLabel: 'Scouting Report', extra: draftedTag(e, x) });
    });
  }

  // ============================================================
  //  Big Board (big-board.js)
  // ============================================================
  const BB_KEY = 'bigboard';
  const BB_LEGACY_KEY = 'mfhfbs_bigBoard_v3';
  const BB_MAX_TOP = 30;
  const BB_MAX_TIERS = 7;
  const BB_TIER_COLORS = ['#E84A27', '#f5b942', '#4caf81', '#29b6f6', '#a89bff', '#ff6584', '#7bdcb5'];
  let bbEditing = false;   // View-Mode default (wie BB_EDITING)
  let bbState = null;      // zuletzt gerenderter State
  let bbDrag = null;

  const bbFind = (ctx, name) => (ctx.data.DRAFT_2026 || []).find(p => p.name === name) || null;
  const bbDefaultNote = (ctx, name) => { const x = bbFind(ctx, name); return x && x.fantasy ? x.fantasy : ''; };

  function bbDefaultState(ctx) {
    const items = (ctx.data.DRAFT_2026 || []).map(p => ({ name: p.name, pos: p.pos || '', school: p.school || '', notes: '' }));
    return {
      title: 'THE 2026 BIG BOARD',
      classified: '▪ Internal Scouting Document · Eyes Only',
      subtitle: 'MFHFBs Front-Office · Top-30 Prospects · Round One Projection',
      author: 'The Commish',
      revision: '04',
      top: items.slice(0, BB_MAX_TOP),
      hm: items.slice(BB_MAX_TOP),
      tiers: [{ after: 2, label: 'T2' }, { after: 6, label: 'T3' }, { after: 13, label: 'T4' }, { after: 21, label: 'T5' }],
      tierNames: ['Generational', 'Cornerstone', 'Starter Lock', 'High-Upside', 'Rotation'],
    };
  }

  // = bbLoad(); zusätzlich einmalige Übernahme des Boards der alten Seite
  function bbLoad(ctx) {
    const D = ctx.data.DRAFT_2026 || [];
    let obj = null, raw = ctx.store.get(BB_KEY);
    if (raw == null) { try { raw = localStorage.getItem(BB_LEGACY_KEY); } catch (e) { raw = null; } }
    if (!raw) return bbDefaultState(ctx);
    try { obj = JSON.parse(raw); } catch (e) { console.error('[Big Board] Speicher defekt, nutze Default:', e); return bbDefaultState(ctx); }
    if (!obj || typeof obj !== 'object') return bbDefaultState(ctx);
    const got = (obj.top || []).length + (obj.hm || []).length;
    if (Math.abs(D.length - got) > 3) { console.warn('[Big Board] DRAFT_2026 hat sich geändert — lade Default.'); return bbDefaultState(ctx); }
    if (!Array.isArray(obj.top)) obj.top = [];
    if (!Array.isArray(obj.hm)) obj.hm = [];
    if (!Array.isArray(obj.tiers)) obj.tiers = [];
    if (!Array.isArray(obj.tierNames)) obj.tierNames = ['Tier 1'];
    const expectedLen = obj.tiers.length + 1;
    while (obj.tierNames.length < expectedLen) obj.tierNames.push(`Tier ${obj.tierNames.length + 1}`);
    while (obj.tierNames.length > expectedLen) obj.tierNames.pop();
    return obj;
  }
  const bbSave = ctx => ctx.store.setJSON(BB_KEY, bbState);

  function bbTierIndexAt(idx) { let t = 0; for (const tier of bbState.tiers || []) if (idx > tier.after) t++; return t; }
  const bbTierColor = idx => BB_TIER_COLORS[bbTierIndexAt(idx) % BB_TIER_COLORS.length];
  const bbTierLabel = idx => `T${bbTierIndexAt(idx) + 1}`;

  function bbLegend(e) {
    const S = bbState, ranges = [];
    let prevAfter = -1;
    (S.tiers || []).forEach(t => { ranges.push({ start: prevAfter + 1, end: t.after, label: t.label }); prevAfter = t.after; });
    ranges.push({ start: prevAfter + 1, end: S.top.length - 1, label: `T${ranges.length + 1}` });
    if (ranges.length > 0) ranges[0].label = 'T1';
    return ranges.map((r, i) => {
      const color = BB_TIER_COLORS[i % BB_TIER_COLORS.length];
      const count = Math.max(0, r.end - r.start + 1);
      const name = (S.tierNames || [])[i] || `Tier ${i + 1}`;
      return `<div class="lab-sh-legend-item" style="--c:${color}"><span class="lab-sh-pill">${e(r.label)}</span>
        <span class="lab-sh-legend-name"${bbEditing ? ` contenteditable="true" data-tiername="${i}"` : ''}>${e(name)}</span>
        <span class="lab-sh-legend-count">${count} prospect${count === 1 ? '' : 's'}</span></div>`;
    }).join('');
  }

  function bbRows(ctx, e) {
    const S = bbState, byAfter = {};
    (S.tiers || []).forEach((t, i) => { byAfter[t.after] = { ...t, idx: i }; });
    const ed = f => (bbEditing ? ` contenteditable="true" data-edit="${f}"` : '');
    return S.top.map((item, idx) => {
      const color = bbTierColor(idx);
      const displayNotes = item.notes || bbDefaultNote(ctx, item.name);
      const isDefault = !item.notes && displayNotes;
      const scout = !bbEditing && bbFind(ctx, item.name);
      let html = `<tr class="lab-sh-row${scout ? ' clickable' : ''}"${bbEditing ? ` draggable="true" data-dnd="top:${idx}"` : ''}${scout ? ` data-bbscout="${e(item.name)}" tabindex="0"` : ''}>
        ${bbEditing ? '<td class="lab-sh-handle" aria-hidden="true">⋮⋮</td>' : ''}
        <td class="lab-sh-pick">${String(idx + 1).padStart(2, '0')}</td>
        <td><span class="lab-sh-pill" style="--c:${color}">${bbTierLabel(idx)}</span></td>
        <td class="lab-sh-name"${ed(`top:${idx}:name`)}>${e(item.name)}</td>
        <td class="lab-sh-pos"${ed(`top:${idx}:pos`)}>${e(item.pos)}</td>
        <td class="lab-sh-school"${ed(`top:${idx}:school`)}>${e(item.school)}</td>
        <td class="lab-sh-notes-cell"><div class="lab-sh-notes${isDefault ? ' is-default' : ''}"${ed(`top:${idx}:notes`)}>${e(displayNotes)}</div></td>
        ${bbEditing ? `<td class="lab-sh-actions">
          <button type="button" class="lab-mini" data-move="${idx}:-1" title="Einen Platz nach oben" aria-label="Nach oben"${idx === 0 ? ' disabled' : ''}>▲</button>
          <button type="button" class="lab-mini" data-move="${idx}:1" title="Einen Platz nach unten" aria-label="Nach unten"${idx === S.top.length - 1 ? ' disabled' : ''}>▼</button>
          <button type="button" class="lab-mini" data-addtier="${idx}" title="Tier-Break nach diesem Pick">+T</button>
          <button type="button" class="lab-mini" data-demote="${idx}" title="Zu Honorable Mentions">↓HM</button></td>` : ''}
      </tr>`;
      if (byAfter[idx]) {
        const tier = byAfter[idx];
        const tierIdx = bbTierIndexAt(idx);
        const next = BB_TIER_COLORS[(tierIdx + 1) % BB_TIER_COLORS.length];
        const nextName = (S.tierNames || [])[tierIdx + 1] || `Tier ${tierIdx + 2}`;
        html += `<tr class="lab-sh-tierrow"><td colspan="${bbEditing ? 8 : 6}" style="--c:${next}"><div class="lab-sh-break">
          <span class="lab-sh-pill">${e(tier.label)}</span><span class="lab-sh-break-name">${e(nextName)}</span><span class="lab-sh-break-line"></span>
          ${bbEditing ? `<button type="button" class="lab-mini lab-sh-rm" data-rmtier="${idx}" title="Tier-Break entfernen" aria-label="Tier-Break entfernen">×</button>` : ''}</div></td></tr>`;
      }
      return html;
    }).join('');
  }

  function bbHM(ctx, e) {
    return bbState.hm.map((p, idx) => {
      const meta = `${e(p.pos)}${p.pos && p.school ? ' · ' : ''}${e(p.school)}`;
      if (!bbEditing) {
        const has = !!bbFind(ctx, p.name);
        return has ? `<button type="button" class="lab-sh-hm-item clickable" data-bbscout="${e(p.name)}"><span class="lab-sh-hm-name">${e(p.name)}</span><span class="lab-sh-hm-meta">${meta}</span></button>`
          : `<div class="lab-sh-hm-item"><span class="lab-sh-hm-name">${e(p.name)}</span><span class="lab-sh-hm-meta">${meta}</span></div>`;
      }
      return `<div class="lab-sh-hm-item" draggable="true" data-dnd="hm:${idx}"><span class="lab-sh-hm-handle" aria-hidden="true">⋮</span>
        <span class="lab-sh-hm-name">${e(p.name)}</span><span class="lab-sh-hm-meta">${meta}</span>
        <button type="button" class="lab-mini" data-promote="${idx}" title="In Top-${BB_MAX_TOP} hochstufen" aria-label="In Top-${BB_MAX_TOP} hochstufen">↑</button></div>`;
    }).join('');
  }

  function bigBoardPage(ctx) {
    const { data, ui } = ctx, e = ui.esc;
    if (!Array.isArray(data.DRAFT_2026) || !data.DRAFT_2026.length) return ui.empty('DRAFT_2026 nicht geladen', 'Die Prospect-Daten (draft2026.js) fehlen.', '⚠️');
    bbState = bbLoad(ctx);
    const S = bbState;
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const f = k => (bbEditing ? ` contenteditable="true" data-field="${k}"` : '');
    return `
      <div class="page-head"><h1 class="page-title display">🗂️ Big Board · Stat Sheet</h1>
        <div class="page-sub">${bbEditing ? 'Edit-Mode · per Drag &amp; Drop oder ▲/▼ sortieren · Felder antippen zum Bearbeiten' : 'View-Mode · Spieler antippen für den Scouting Report'} · gespeichert nur in diesem Browser</div></div>
      <div class="controls lab-bb-tools">
        <div class="seg" role="group" aria-label="Modus"><button type="button" class="seg-btn${bbEditing ? '' : ' active'}" data-bbmode="view" aria-pressed="${!bbEditing}">👁️ Ansicht</button><button type="button" class="seg-btn${bbEditing ? ' active' : ''}" data-bbmode="edit" aria-pressed="${bbEditing}">✏️ Bearbeiten</button></div>
        <button type="button" class="lab-btn" data-bbreset title="Zurück zum Default aus draft2026.js">🔄 Reset</button>
        <button type="button" class="lab-btn" data-bbjson title="Aktuelles Board als JSON kopieren">💾 JSON</button>
        <button type="button" class="lab-btn primary" data-bbprint title="Druckdialog öffnen (Querformat wählen) — dort als PDF speichern">🖨️ Drucken</button>
      </div>
      <div class="lab-sheet${bbEditing ? ' is-edit' : ''}">
        <div class="lab-sh-header">
          <div class="lab-sh-titleblock">
            <div class="lab-sh-classified"${f('classified')}>${e(S.classified)}</div>
            <h2 class="lab-sh-title"${f('title')}>${e(S.title)}</h2>
            <div class="lab-sh-sub"${f('subtitle')}>${e(S.subtitle)}</div>
          </div>
          <div class="lab-sh-stampblock"><div class="lab-sh-stamp">COMMISH<br>APPROVED</div>
            <div class="lab-sh-stamp-sub">REV. <span${f('revision')}>${e(S.revision)}</span> · ${e(today.toUpperCase())}</div></div>
        </div>
        <div class="lab-sh-meta">
          <span>Author: <strong${f('author')}>${e(S.author)}</strong></span><span>Date: <strong>${e(today)}</strong></span>
          <span>Rev: <strong>${e(S.revision)}</strong></span><span>Tiers: <strong>${(S.tiers || []).length + 1}</strong></span>
          <span>Prospects: <strong>${S.top.length} + ${S.hm.length} HM</strong></span>
        </div>
        <div class="lab-sh-legend">${bbLegend(e)}</div>
        <div class="lab-sh-tablewrap"><table class="lab-sh-table">
          <thead><tr>${bbEditing ? '<th></th>' : ''}<th>Pick</th><th>Tier</th><th>Name</th><th>Pos</th><th>School / Origin</th><th>Field Notes</th>${bbEditing ? '<th></th>' : ''}</tr></thead>
          <tbody>${bbRows(ctx, e)}</tbody></table></div>
        ${S.hm && S.hm.length ? `<div class="lab-sh-hm"><div class="lab-sh-hm-head"><span class="lab-sh-hm-label">▪ Honorable Mentions</span><span class="lab-sh-hm-sub">Watch list · Not yet ranked</span></div>
          <div class="lab-sh-hm-grid">${bbHM(ctx, e)}</div></div>` : ''}
        <div class="lab-sh-footer"><span>▪ MFHFBs PRESS · Internal</span><span>Page 1 of 1 · Top-${S.top.length}${S.hm.length ? ` + ${S.hm.length} HM` : ''}</span><span>${e(ctx.league.short)} · MFHFB HQ</span></div>
      </div>`;
  }

  // ---- Aktionen (Logik 1:1 aus big-board.js) ----
  function bbAddTierAfter(ctx, idx) {
    const S = bbState;
    if (!S.tiers) S.tiers = [];
    if (S.tiers.length >= BB_MAX_TIERS - 1) { alert(`Maximum ${BB_MAX_TIERS} Tiers erreicht.`); return; }
    if (S.tiers.some(t => t.after === idx)) { alert('Nach diesem Spieler ist bereits ein Tier-Break.'); return; }
    const nextNum = S.tiers.length + 2;
    const name = prompt(`Name des neuen Tiers (T${nextNum}):`, `Tier ${nextNum}`);
    if (!name) return;
    S.tiers.push({ after: idx, label: `T${nextNum}` });
    S.tiers.sort((a, b) => a.after - b.after);
    S.tiers.forEach((t, i) => { t.label = `T${i + 2}`; });
    const breakPos = S.tiers.findIndex(t => t.after === idx);
    if (!S.tierNames) S.tierNames = ['Tier 1'];
    S.tierNames.splice(breakPos + 1, 0, name.trim());
    bbSave(ctx); ctx.refresh();
  }
  function bbRemoveTier(ctx, afterIdx) {
    const S = bbState;
    const breakPos = (S.tiers || []).findIndex(t => t.after === afterIdx);
    if (breakPos === -1) return;
    S.tiers.splice(breakPos, 1);
    S.tiers.forEach((t, i) => { t.label = `T${i + 2}`; });
    if (S.tierNames) S.tierNames.splice(breakPos + 1, 1);
    bbSave(ctx); ctx.refresh();
  }
  function bbDemoteToHM(ctx, idx) {
    const S = bbState;
    if (S.top.length <= 1) return;
    const [item] = S.top.splice(idx, 1);
    if (!S.hm) S.hm = [];
    S.hm.unshift(item);
    S.tiers = (S.tiers || []).map(t => (t.after >= idx ? { ...t, after: t.after - 1 } : t)).filter(t => t.after >= 0 && t.after < S.top.length - 1);
    bbSave(ctx); ctx.refresh();
  }
  function bbPromoteFromHM(ctx, idx) {
    const S = bbState;
    if (S.top.length >= BB_MAX_TOP) { alert(`Top-Liste voll (${BB_MAX_TOP}). Verschiebe erst einen Spieler in HM.`); return; }
    const [item] = S.hm.splice(idx, 1);
    S.top.push(item);
    bbSave(ctx); ctx.refresh();
  }
  // = bbDrop(): Quelle entfernen, am Ziel einfügen (Tier-Breaks bleiben an ihren Indizes)
  function bbMove(ctx, srcList, srcIdx, list, idx) {
    const S = bbState;
    if (srcList === list && srcIdx === idx) return;
    const srcArr = srcList === 'top' ? S.top : S.hm;
    const dstArr = list === 'top' ? S.top : S.hm;
    if (list === 'top' && srcList === 'hm' && S.top.length >= BB_MAX_TOP) { alert(`Top-Liste voll (${BB_MAX_TOP}). Verschiebe erst einen Spieler in HM.`); return; }
    const [item] = srcArr.splice(srcIdx, 1);
    let insertAt = idx;
    if (srcList === list && idx > srcIdx) insertAt = idx - 1;
    dstArr.splice(insertAt, 0, item);
    if (srcList === 'top' || list === 'top') S.tiers = (S.tiers || []).filter(t => t.after >= 0 && t.after < S.top.length - 1);
    bbSave(ctx); ctx.refresh();
  }
  function bbShowScout(ctx, name) {
    const p = bbFind(ctx, name);
    if (!p) return;
    scoutModal(ctx, p, { head: '▪ Scouting Report · MFHFBs Internal', statsLabel: 'Statistiken (Per-36 / Col.)', scoutLabel: 'Scouting Report' });
  }
  function bbExportJSON(ctx) {
    const json = JSON.stringify(bbState, null, 2);
    const show = () => MFHFB.ui.modal('labJsonModal', `<div class="dna-modal-box lab-scout"><div class="dna-modal-head"><h2 class="lab-sname display">Big Board JSON</h2><button type="button" class="dna-modal-x" data-close aria-label="Schließen">✕</button></div><pre class="lab-json">${ctx.ui.esc(json)}</pre></div>`);
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(json).then(() => alert('Big-Board-JSON in die Zwischenablage kopiert.')).catch(show);
    else show();
  }
  function bbPrint(ctx) {
    const wasEditing = bbEditing;
    const done = () => { document.documentElement.classList.remove('lab-printing'); window.removeEventListener('afterprint', done); if (wasEditing) { bbEditing = true; ctx.refresh(); } };
    if (wasEditing) { bbEditing = false; ctx.refresh(); }
    setTimeout(() => {
      document.documentElement.classList.add('lab-printing');
      window.addEventListener('afterprint', done);
      window.print();
      setTimeout(done, 1000); // Browser ohne afterprint
    }, 200);
  }

  function bigBoardMount(root, ctx) {
    guardLegacyScoutModal();
    if (!bbState) return;
    const on = (sel, fn) => root.querySelectorAll(sel).forEach(el => el.addEventListener('click', ev => { ev.stopPropagation(); fn(el, ev); }));
    on('[data-bbmode]', b => { const want = b.dataset.bbmode === 'edit'; if (want !== bbEditing) { bbEditing = want; ctx.refresh(); } });
    on('[data-bbreset]', () => {
      if (!confirm('Big Board auf Default aus draft2026.js zurücksetzen?\nAlle lokalen Änderungen (Reihenfolge, Notes, Tier-Breaks) gehen verloren.')) return;
      bbState = bbDefaultState(ctx); bbSave(ctx); ctx.refresh();
    });
    on('[data-bbjson]', () => bbExportJSON(ctx));
    on('[data-bbprint]', () => bbPrint(ctx));
    on('[data-addtier]', b => bbAddTierAfter(ctx, Number(b.dataset.addtier)));
    on('[data-rmtier]', b => bbRemoveTier(ctx, Number(b.dataset.rmtier)));
    on('[data-demote]', b => bbDemoteToHM(ctx, Number(b.dataset.demote)));
    on('[data-promote]', b => bbPromoteFromHM(ctx, Number(b.dataset.promote)));
    on('[data-move]', b => { const [i, d] = b.dataset.move.split(':').map(Number); const j = i + d; if (j < 0 || j >= bbState.top.length) return; bbMove(ctx, 'top', i, 'top', d > 0 ? j + 1 : j); });
    root.querySelectorAll('[data-bbscout]').forEach(el => {
      el.addEventListener('click', () => bbShowScout(ctx, el.dataset.bbscout));
      if (el.tagName === 'TR') el.addEventListener('keydown', ev => { if (ev.key === 'Enter') bbShowScout(ctx, el.dataset.bbscout); });
    });
    if (!bbEditing) return;
    // Felder (bbField / bbUpdateField / bbUpdateTierName) — speichern ohne Neuzeichnen
    root.querySelectorAll('[data-field]').forEach(el => el.addEventListener('blur', () => { bbState[el.dataset.field] = String(el.innerText || '').trim(); bbSave(ctx); }));
    root.querySelectorAll('[data-edit]').forEach(el => el.addEventListener('blur', () => {
      const [list, i, field] = el.dataset.edit.split(':');
      const arr = list === 'top' ? bbState.top : bbState.hm;
      const it = arr[Number(i)];
      if (!it) return;
      const v = String(el.innerText || '').trim();
      if (field === 'notes' && v === bbDefaultNote(ctx, it.name)) it.notes = ''; else it[field] = v;
      bbSave(ctx);
    }));
    root.querySelectorAll('[data-tiername]').forEach(el => el.addEventListener('blur', () => {
      if (!bbState.tierNames) bbState.tierNames = [];
      const v = String(el.innerText || '').trim();
      if (v === bbState.tierNames[Number(el.dataset.tiername)]) return;
      bbState.tierNames[Number(el.dataset.tiername)] = v;
      bbSave(ctx); ctx.refresh();
    }));
    // Drag & Drop (bbDragStart/Over/Drop/End)
    root.querySelectorAll('[data-dnd]').forEach(el => {
      const [list, i] = el.dataset.dnd.split(':');
      el.addEventListener('dragstart', ev => {
        if (ev.target.closest && ev.target.closest('[contenteditable="true"]') && ev.target !== el) return;
        bbDrag = { list, idx: Number(i) };
        ev.dataTransfer.effectAllowed = 'move';
        try { ev.dataTransfer.setData('text/plain', `${list}:${i}`); } catch (_) { /* ignore */ }
        el.classList.add('is-dragging');
      });
      el.addEventListener('dragover', ev => { if (!bbDrag) return; ev.preventDefault(); ev.dataTransfer.dropEffect = 'move'; el.classList.add('is-over'); });
      el.addEventListener('dragleave', () => el.classList.remove('is-over'));
      el.addEventListener('drop', ev => {
        if (!bbDrag) return;
        ev.preventDefault();
        el.classList.remove('is-over');
        const src = bbDrag; bbDrag = null;
        bbMove(ctx, src.list, src.idx, list, Number(i));
      });
      el.addEventListener('dragend', () => { root.querySelectorAll('.is-dragging, .is-over').forEach(x => x.classList.remove('is-dragging', 'is-over')); bbDrag = null; });
    });
  }

  // ============================================================
  //  Lottery 2026 (analytics.js)
  // ============================================================
  // Daten 1:1 aus Taco-Tuesday-HQ js/analytics.js (per Script übernommen)
  const LOTTERY_DATA = [
    { tt: 1,  nba: 'Washington Wizards',  ttTeam: 'Fighting Illini via Double Dribble Trouble', nonPlayoff: true,
      odds: [14, 13.4, 12.7, 12, 47.9, null, null, null, null, null, null], avg: 3.7 },
    { tt: 2,  nba: 'Indiana Pacers',       ttTeam: 'Vancouver Curry-Wurst',                      nonPlayoff: true,
      odds: [14, 13.4, 12.7, 12, 27.8, 20.1, null, null, null, null, null], avg: 3.9 },
    { tt: 3,  nba: 'Brooklyn Nets',        ttTeam: 'Fighting Illini via S-Town Grizzlies',       nonPlayoff: true,
      odds: [14, 13.4, 12.7, 12, 14.8, 26, 7, null, null, null, null], avg: 4.1 },
    { tt: 4,  nba: 'Utah Jazz',            ttTeam: 'Fighting Illini via Cooking Show',           nonPlayoff: true,
      odds: [11.5, 11.4, 11.2, 11, 7.5, 27.1, 17.9, 2.4, null, null, null], avg: 4.6 },
    { tt: 5,  nba: 'Sacramento Kings',     ttTeam: 'Kawhi So Serious',                           nonPlayoff: false,
      odds: [11.5, 11.4, 11.2, 11, 2, 18.2, 25.5, 8.5, 0.6, null, null], avg: 4.8 },
    { tt: 6,  nba: 'Memphis Grizzlies',    ttTeam: 'Fighting Illini via Always Money In The Bananastand', nonPlayoff: false,
      odds: [9, 9.2, 9.4, 9.6, null, 8.6, 29.7, 20.6, 3.7, 0.2, null], avg: 5.5 },
    { tt: 7,  nba: 'New Orleans Pelicans', ttTeam: 'Anadolu Ballers',                            nonPlayoff: false,
      odds: [6.8, 7.1, 7.5, 7.9, null, null, 19.8, 35.6, 13.8, 1.4, 0.1], avg: 6.4 },
    { tt: 8,  nba: 'Dallas Mavericks',     ttTeam: 'Fighting Illini via 3-Point Mafia',          nonPlayoff: false,
      odds: [6.7, 7, 7.4, 7.8, null, null, null, 32.9, 31.1, 6.6, 0.4], avg: 6.9 },
    { tt: 9,  nba: 'Chicago Bulls',        ttTeam: 'Fighting Illini via Leaveland Cavaliers',    nonPlayoff: false,
      odds: [4.5, 4.8, 5.2, 5.7, null, null, null, null, 50.8, 25.9, 3], avg: 8 },
    { tt: 10, nba: 'Milwaukee Bucks',      ttTeam: 'Fighting Illini via Neukölln Hustlers',      nonPlayoff: false,
      odds: [3, 3.3, 3.6, 4, null, null, null, null, null, 65.9, 19], avg: 9.2 },
    { tt: 11, nba: 'GSW',                  ttTeam: 'Seagulls',                                   nonPlayoff: false,
      odds: [2, 2.2, 2.4, 2.8, null, null, null, null, null, null, 77.6], avg: 10.3 },
    { tt: 12, nba: '—',                    ttTeam: 'Fighting Illini',                            champion: true,
      odds: [null, null, null, null, null, null, null, null, null, null, null], avg: 12 },
  ];

  // lotteryHeatColor / lotteryHeatColorLight → Stufen, Farben in CSS (.lab-h0…h5)
  function heatClass(val) {
    if (val === null) return 'lab-hn';
    if (val >= 40) return 'lab-h5';
    if (val >= 20) return 'lab-h4';
    if (val >= 10) return 'lab-h3';
    if (val >= 5) return 'lab-h2';
    if (val >= 1) return 'lab-h1';
    return 'lab-h0';
  }

  function lotteryPage(ctx) {
    const { ui, href } = ctx, e = ui.esc;
    const cols = LOTTERY_DATA[0].odds.map((_, i) => i + 1);
    const rows = LOTTERY_DATA.map((row, ri) => {
      const tag = row.champion ? '<span class="lab-ltag champ">🏆 Champ</span>' : row.nonPlayoff ? '<span class="lab-ltag np">Non-PO</span>' : '';
      const cells = row.odds.map(val => `<td class="lab-lcell ${heatClass(val)}">${val === null ? '' : val < 1 ? '>0' : val.toLocaleString('de-DE')}</td>`).join('');
      return `<tr${row.champion ? '' : ` class="clickable" data-lrow="${ri}" tabindex="0"`}>
        <td class="lab-lsticky lab-lnbacol"><span class="lab-lnba">${e(row.nba)}</span></td>
        <td class="lab-ltt"><small class="lab-lnba-sm">${e(row.nba)}</small>${e(row.ttTeam)}${tag}</td>
        ${cells}
        <td class="num lab-lavg${row.champion ? ' muted' : ''}">${row.champion ? '#12' : e(row.avg)}</td></tr>`;
    }).join('');
    return `
      <div class="page-head"><h1 class="page-title display">🎲 2026 Draft Lottery</h1>
        <div class="page-sub">Pre-Lottery Odds · NBA Lottery: <strong>10. Mai 2026</strong> · Archiv — die tatsächliche Reihenfolge steht in der <a href="${href('picks')}">Pick-Übersicht</a>.</div></div>
      <div class="lab-lrules">
        <div><span aria-hidden="true">🏆</span><div><b>Champion = Pick #12</b><small>Fighting Illini (Vorjahressieger) bekommen automatisch den letzten Pick</small></div></div>
        <div><span aria-hidden="true">🚫</span><div><b>Non-Playoff → max. Pick #6</b><small>Vancouver, Double Dribble, S-Town &amp; Cooking Show können nicht später als #6 landen</small></div></div>
        <div><span aria-hidden="true">🔗</span><div><b>NBA → TT Mapping</b><small>Jedem TT-Team ist ein NBA-Team zugeordnet — dessen Lottery-Ergebnis wird zum TT-Pick</small></div></div>
      </div>
      <div class="lab-llegend"><span class="lab-h5">hohe Chance</span><span class="lab-h3">mittel</span><span class="lab-h1">niedrig</span><span class="muted">Werte in %</span></div>
      <div class="table-wrap"><table class="table compact lab-ltable"><thead><tr><th class="lab-lsticky lab-lnbacol">NBA-Team</th><th class="lab-ltt">TT-Team</th>${cols.map(c => `<th class="num">#${c}</th>`).join('')}<th class="num">Ø Pick</th></tr></thead>
        <tbody>${rows}</tbody></table></div>
      <p class="muted lab-foot explain">Zeile antippen für die detaillierte Odds-Ansicht.</p>`;
  }

  function lotteryModal(ctx, idx) {
    const row = LOTTERY_DATA[idx], e = ctx.ui.esc;
    if (!row || row.champion) return;
    const maxVal = Math.max(...row.odds.filter(v => v !== null));
    const bars = row.odds.map((val, i) => {
      if (val === null) return '';
      const pct = Math.round((val / maxVal) * 100);
      const cls = val >= 20 ? 'hi' : val >= 10 ? 'mid' : 'lo';
      const display = val < 1 ? '>0,0%' : val.toLocaleString('de-DE') + '%';
      return `<div class="lab-lbar"><span>#${i + 1}</span><div><i class="${cls}" style="width:${pct}%"></i></div><b>${display}</b></div>`;
    }).join('');
    MFHFB.ui.modal('labLotteryModal', `<div class="dna-modal-box lab-scout lab-lmodal">
      <div class="dna-modal-head"><div><div class="lab-kicker">${e(row.nba)}</div><h2 class="lab-sname display">${e(row.ttTeam)}</h2>
        ${row.nonPlayoff ? '<span class="lab-ltag np">Non-Playoff · max. #6</span>' : ''}<div class="muted lab-lavgline">Ø Pick: <strong>${e(row.avg)}</strong></div></div>
        <button type="button" class="dna-modal-x" data-close aria-label="Schließen">✕</button></div>
      <div class="lab-lbars">${bars}</div></div>`);
  }

  function lotteryMount(root, ctx) {
    root.querySelectorAll('[data-lrow]').forEach(tr => {
      tr.addEventListener('click', () => lotteryModal(ctx, Number(tr.dataset.lrow)));
      tr.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); lotteryModal(ctx, Number(tr.dataset.lrow)); } });
    });
  }

  // ============================================================
  //  Fantasy Bootleg Power Score (fantasy-power-score.js)
  // ============================================================
  const SHORT = { pts: 'PTS', reb: 'REB', ast: 'AST', stl: 'STL', blk: 'BLK', tpm: '3PM', fgPct: 'FG%', ftPct: 'FT%', to: 'TO' };
  const fpsFlip = (rank, n) => (rank == null ? null : (n + 1) - rank);
  // _fpsTeamRadarValues: (N+1)-Rang / N → Rang 1 außen
  const fpsVals = (t, n, cats) => (!t || !t.rank ? cats.map(() => 0) : cats.map(c => { const f = fpsFlip(t.rank[c.key], n); return f == null ? 0 : f / n; }));
  const fpsFmt = (key, v) => (v == null ? '–' : key === 'fgPct' || key === 'ftPct' ? v.toFixed(1) + '%' : v);
  const fpsOrd = n => (n == null ? '–' : `${n}.`);
  const fpsAvg = (t, n, cats) => (t.rank ? cats.reduce((s, c) => s + (t.rank[c.key] || n), 0) / cats.length : n);

  function fpsRadar(t, n, cats, size) {
    return MFHFB.charts.radar({
      axes: cats.map(c => ({ label: SHORT[c.key] || c.label })),
      series: [{ name: t.name, vals: fpsVals(t, n, cats), tips: cats.map(c => `${t.name} · ${c.label}: ${fpsFmt(c.key, t.values ? t.values[c.key] : null)} (${fpsOrd(t.rank ? t.rank[c.key] : null)})`) }],
      size, label: `Power Score ${t.name}`,
    });
  }

  function powerScorePage(ctx) {
    const { data, ui, href, league } = ctx, e = ui.esc, nba = N();
    const F = data.FANTASY_POWER_SCORE;
    const teams = (F && F.teams) || [], cats = (F && F.categories) || [];
    const head = `<div class="page-head"><h1 class="page-title display">🕸️ Fantasy Power Score</h1>
      <div class="page-sub"><span class="explain">9-Cat-Spinnennetz je Fantasy-Team · Rang 1 = außen</span>${F && F.generatedAt ? ` · Stand ${new Date(F.generatedAt).toLocaleDateString('de-DE')}` : ''}</div></div>`;
    if (!teams.length || !cats.length) return head + ui.empty('Noch keine Daten', 'fantasy-power-score.js ist leer — scripts/build-fantasy-power-score.js einmal laufen lassen.', '🕸️');
    const n = teams.length;
    const byId = {}; nba.leagueTeams(data, true).forEach(t => { byId[t.id] = t; });
    const style = t => nba.tcStyle(byId[t.id] || null);

    const id = ctx.params[0];
    if (id != null) {
      const t = teams.find(x => String(x.id) === String(id));
      if (!t) return head + ui.empty('Team nicht gefunden', 'Zurück zur Übersicht.', '🕸️');
      const boxes = t.values ? cats.map(c => `<div class="lab-fps-box"><span class="lab-fps-lbl">${e(c.label)}${c.lowerIsBetter ? ' <small>(weniger = besser)</small>' : ''}</span>
          <b>${e(fpsFmt(c.key, t.values[c.key]))}</b><small>${fpsOrd(t.rank[c.key])} in ${e(league.short)}</small></div>`).join('')
        : ui.empty('Keine Daten', 'Zu wenige gematchte Spieler.', '🕸️');
      return `<a class="back" href="${href('powerscore')}">← Alle Teams</a>
        <div class="nba-thead" style="${style(t)}"><span class="nba-avatar big">${e(nba.initials(t.name))}</span>
          <div><h1 class="page-title display">${e(t.name)}</h1><div class="page-sub">${e(t.owner || '')} · ${e(t.includedCount)} Spieler im Kader berücksichtigt · Ø-Rang ${fpsAvg(t, n, cats).toFixed(1)}</div></div></div>
        <div class="chip-row" aria-label="Team wechseln">${teams.slice().sort((a, b) => a.name.localeCompare(b.name)).map(x => `<a class="chip-link${x.id === t.id ? ' active' : ''}" href="${href('powerscore', x.id)}" title="${e(x.name)}" style="${style(x)}"><span class="nba-chipav">${e(nba.initials(x.name))}</span></a>`).join('')}</div>
        <div class="card lab-fps-detail mp-tc" style="${style(t)}"><div class="lab-fps-radar">${fpsRadar(t, n, cats, 300)}</div><div class="lab-fps-grid">${boxes}</div></div>
        ${t.skippedCount ? `<div class="note explain">${e(t.skippedCount)} Spieler ohne 2025/26-Saisonstatzeile ausgeschlossen (Rookie oder saisonlange Verletzung): ${e((t.skippedPlayers || []).join(', '))}</div>` : ''}
        ${F.sourceSeason ? `<p class="muted lab-foot explain">Quelle: ${e(F.sourceSeason)}</p>` : ''}`;
    }

    const sort = ctx.store.get('fpssort') === 'avg' ? 'avg' : 'name';
    const list = teams.slice().sort(sort === 'avg' ? (a, b) => fpsAvg(a, n, cats) - fpsAvg(b, n, cats) || a.name.localeCompare(b.name) : (a, b) => a.name.localeCompare(b.name));
    return `${head}
      <div class="controls"><div class="seg" role="group" aria-label="Sortierung">${[['name', 'Nach Name'], ['avg', 'Nach Ø-Rang']].map(([k, l]) => `<button type="button" class="seg-btn${sort === k ? ' active' : ''}" data-fpssort="${k}" aria-pressed="${sort === k}">${l}</button>`).join('')}</div></div>
      <div class="page-sub lab-fps-note explain">Basis: aktueller Kader × echte Saison-2025/26-Boxscores (Summe je Kategorie, FG%/FT% spielegewichtet) · Ø = mittlerer Kategorie-Rang (1 = bester) · Team antippen für Details</div>
      <div class="nba-an-grid">${list.map(t => `<a class="card nba-an-card mp-tc lab-fps-card" style="${style(t)}" href="${href('powerscore', t.id)}">
        <div class="nba-an-head"><span><strong>${e(t.name)}</strong><small>${e(t.owner || '')}</small></span><span class="nba-an-avgv">Ø${fpsAvg(t, n, cats).toFixed(1)}</span></div>
        ${fpsRadar(t, n, cats, 240)}</a>`).join('')}</div>`;
  }

  function powerScoreMount(root, ctx) {
    root.querySelectorAll('[data-fpssort]').forEach(b => b.addEventListener('click', () => { ctx.store.set('fpssort', b.dataset.fpssort); ctx.refresh(); }));
  }

  // ============================================================
  //  Registrierung
  // ============================================================
  MFHFB.pages.register({
    id: 'prospects', section: 'draft', label: 'Prospect DB', icon: '🔎', applies: A,
    data: ['teams', '?rosters-live', '?sport:aliases', 'sport:draft2026', '?sport:draft2027', '?sport:postdraft-board'],
    title: ctx => (ctx.params[0] === '2027' ? 'Big Board 2027' : 'Prospect DB 2026'),
    render: prospectsPage, mount: prospectsMount,
  });
  MFHFB.pages.register({
    id: 'bigboard', section: 'draft', label: 'Big Board', icon: '🗂️', applies: A,
    data: ['sport:draft2026'],
    render: bigBoardPage, mount: bigBoardMount,
  });
  MFHFB.pages.register({
    id: 'lottery', section: 'draft', label: 'Lottery 2026', icon: '🎲', applies: A,
    data: [], render: lotteryPage, mount: lotteryMount,
  });
  MFHFB.pages.register({
    id: 'powerscore', section: 'teams', label: 'Fantasy Power Score', icon: '🕸️', applies: A,
    data: ['teams', '?rosters-live', '?fantasy-power-score'],
    title: ({ data, params }) => { const t = ((data.FANTASY_POWER_SCORE || {}).teams || []).find(x => String(x.id) === String(params[0])); return t ? `Power Score · ${t.name}` : 'Fantasy Power Score'; },
    render: powerScorePage, mount: powerScoreMount,
  });
})();
