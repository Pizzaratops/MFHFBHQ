// ============================================================
//  Tool: Player DNA (NFL) — Perzentil-Radar für QB/RB/WR/TE
// ============================================================
//  #/<liga>/playerdna                         → letzte Auswahl
//  #/<liga>/playerdna/<pos>/<saison>/<id>     → Spieler direkt (teilbar)
//
//  Neu gebaut nach Bear-Witch-Project-HQ/js/player-dna.js (v2, inkl.
//  "Early Signal" — die DOPE-Version hatte das noch nicht). Rechenlogik
//  unverändert: 6 Kern-Achsen (DNA Ø) + 2 Stil-Achsen, Skala Perzentil
//  oder Z-Score, optionale Stichproben-Korrektur (ps/zs/vs), DNA-Match =
//  100 − Ø Abstand über alle Achsen (Top 3 aktuell + historisch).
//
//  Sportweite Daten (für alle NFL-Ligen gleich, einmal geladen):
//  sport:player-dna, sport:air-yards, sport:player-style. Glossar:
//  sports/nfl/player-dna-glossary.js (DNA_GLOSSARY).
// ============================================================

(function () {
  const POS = ['QB', 'RB', 'WR', 'TE'];
  const SEL = ['sel-1', 'sel-2', 'sel-3'];
  const normKey = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b\.?/g, '').replace(/[^a-z0-9]/g, '');

  const defaults = { pos: 'WR', season: null, scale: 'p', stab: true, rostered: true, sameYear: false, q: '', sel: null, early: null, compare: [], compareFor: null };
  const getState = ctx => ({ ...defaults, ...ctx.store.getJSON('dna', {}) });

  function api(ctx, st) {
    const D = ctx.data.PLAYER_DNA;
    const useStab = p => st.stab && !!p.ps;
    const vals = p => (st.scale === 'z' ? (useStab(p) ? p.zs : p.z) : (useStab(p) ? p.ps : p.p)) || p.p;
    const raw = p => (useStab(p) ? p.vs : p.v);
    const cats = pos => D.categories[pos];
    const coreIdx = pos => cats(pos).map((c, i) => (c.type === 'style' ? -1 : i)).filter(i => i >= 0);
    const avg = (p, pos) => { const v = vals(p); const a = coreIdx(pos).map(i => v[i]).filter(x => x != null); return a.length ? a.reduce((s, x) => s + x, 0) / a.length : 0; };
    const players = (season, pos) => ((D.seasons[season] || {}).players || {})[pos] || [];
    const early = (season, pos) => ((D.seasons[season] || {}).early || {})[pos] || [];
    const find = (season, pos, id) => players(season, pos).find(p => p.id === id) || null;
    const dist = (a, b) => {
      const va = vals(a), vb = vals(b); let s = 0, n = 0;
      va.forEach((v, i) => { if (v != null && vb[i] != null) { s += Math.abs(v - vb[i]); n++; } });
      return n >= Math.min(6, va.length - 1) ? s / n : null;
    };
    const matches = (season, pos, me, historic) => {
      const out = [];
      Object.keys(D.seasons).forEach(y => {
        if (historic ? String(y) === String(season) : String(y) !== String(season)) return;
        players(y, pos).forEach(o => {
          if (o.id === me.id && String(y) === String(season)) return;
          if (historic && o.id === me.id) return;
          if (historic && st.sameYear && me.e != null && o.e !== me.e) return;
          const d = dist(me, o);
          if (d != null) out.push({ season: y, p: o, score: Math.round(100 - d) });
        });
      });
      return out.sort((a, b) => b.score - a.score).slice(0, 3);
    };
    return { D, useStab, vals, raw, cats, avg, players, early, find, matches };
  }

  function ownerIndex(data) {
    const teams = {}; (data.LEAGUE_TEAMS || []).forEach(t => { teams[t.id] = t; });
    const m = new Map();
    Object.entries(data.ROSTERS_LIVE || {}).forEach(([id, l]) => (l || []).forEach(p => m.set(normKey(p.name), teams[id] || { id, name: id })));
    return name => m.get(normKey(name)) || null;
  }

  const gloss = (pos, k) => (typeof DNA_GLOSSARY !== 'undefined' && DNA_GLOSSARY.stats[pos] && DNA_GLOSSARY.stats[pos][k]) || null;
  const attr = s => String(s || '').replace(/<[^>]+>/g, '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const fmt = v => { if (v == null) return '—'; const a = Math.abs(v); return (a >= 100 ? v.toFixed(0) : a >= 10 ? v.toFixed(1) : v.toFixed(2)).replace('.', ','); };
  const cellVal = (x, st) => { if (x == null) return '—'; if (st.scale === 'z') { const z = (x - 50) / 20; return (z >= 0 ? '+' : '') + z.toFixed(1).replace('.', ','); } return String(x); };
  // Farbe für Perzentil (Text-/Balken-Ton, sequenziell über die Liga-Akzentfarbe)
  const pctClass = p => (p == null ? '' : p >= 80 ? 'q5' : p >= 60 ? 'q4' : p >= 40 ? 'q3' : p >= 20 ? 'q2' : 'q1');

  // ---------- Radar (SVG) ----------
  function radar(entries, cats, st, a) {
    const n = cats.length, size = 340, cx = size / 2, cy = size / 2, R = 132;
    const ang = i => -Math.PI / 2 + (i * 2 * Math.PI) / n;
    const pt = (i, f) => [cx + Math.cos(ang(i)) * R * f, cy + Math.sin(ang(i)) * R * f];
    const rings = [0.25, 0.5, 0.75, 1].map(f => `<polygon class="rd-ring" points="${cats.map((_, i) => pt(i, f).map(v => v.toFixed(1)).join(',')).join(' ')}"/>`).join('');
    const axes = cats.map((_, i) => { const [x, y] = pt(i, 1); return `<line class="rd-axis" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`; }).join('');
    const labels = cats.map((c, i) => {
      const [x, y] = pt(i, 1.2); const co = Math.cos(ang(i));
      const anchor = Math.abs(co) < 0.2 ? 'middle' : co > 0 ? 'start' : 'end';
      const txt = (c.type === 'style' ? '◇ ' : '') + c.label;
      // Lange Labels an den Seiten auf zwei Zeilen umbrechen (an "/" oder Leerzeichen nahe der Mitte)
      let lines = [txt];
      if (Math.abs(co) > 0.5 && txt.length > 11) {
        const cuts = [...txt.matchAll(/[\/ -]/g)].map(m => m.index);
        if (cuts.length) {
          const cut = cuts.sort((p, q) => Math.abs(p - txt.length / 2) - Math.abs(q - txt.length / 2))[0];
          lines = [txt.slice(0, cut + (txt[cut] === ' ' ? 0 : 1)).trim(), txt.slice(cut + 1).trim()];
        }
      }
      const y0 = y + 4 - (lines.length - 1) * 7;
      return `<text class="rd-label${c.type === 'style' ? ' style' : ''}" x="${x.toFixed(1)}" y="${y0.toFixed(1)}" text-anchor="${anchor}">${lines.map((l, k) => `<tspan x="${x.toFixed(1)}" dy="${k ? 14 : 0}">${MFHFB.ui.esc(l)}</tspan>`).join('')}</text>`;
    }).join('');
    const polys = entries.map((en, k) => {
      const v = a.vals(en.p);
      const pts = cats.map((c, i) => pt(i, Math.max(0, Math.min(100, v[i] == null ? 0 : v[i])) / 100));
      const dots = cats.map((c, i) => {
        if (v[i] == null) return '';
        const [x, y] = pts[i];
        const tip = `${en.p.n} ${en.season} · ${c.label}: ${st.scale === 'z' ? 'z ' + cellVal(v[i], st) : v[i] + '. Perzentil'} (${fmt(a.raw(en.p)[i])} ${c.unit})`;
        return c.type === 'style'
          ? `<rect class="rd-pt style" x="${(x - 4).toFixed(1)}" y="${(y - 4).toFixed(1)}" width="8" height="8" transform="rotate(45 ${x.toFixed(1)} ${y.toFixed(1)})"><title>${MFHFB.ui.esc(tip)}</title></rect>`
          : `<circle class="rd-pt" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.5"><title>${MFHFB.ui.esc(tip)}</title></circle>`;
      }).join('');
      return `<g class="rd-series ${SEL[k]}${entries.length > 1 ? ' multi' : ''}"><polygon points="${pts.map(p => p.map(q => q.toFixed(1)).join(',')).join(' ')}"/>${dots}</g>`;
    }).join('');
    return `<svg class="rd" viewBox="-62 -12 ${size + 124} ${size + 24}" role="img" aria-label="Player-DNA-Radar">${rings}${axes}${polys}${labels}</svg>`;
  }

  // ---------- Glossar-Dialog ----------
  function glossaryHtml(pos, focus) {
    if (typeof DNA_GLOSSARY === 'undefined') return '';
    const e = MFHFB.ui.esc;
    const G = DNA_GLOSSARY;
    return `<div class="dna-modal-box" role="dialog" aria-modal="true" aria-label="Player DNA erklärt">
      <div class="dna-modal-head">
        <div><div class="page-title display" style="font-size:28px">📖 Player DNA – einfach erklärt</div><div class="page-sub">Für alle – auch ohne Football-Wissen.</div></div>
        <button type="button" class="dna-modal-x" data-close aria-label="Schließen">✕</button>
      </div>
      <div class="dna-help-basics">${G.basics.map((b, i) => `<details${i === 1 && !focus ? ' open' : ''}><summary>${b.title}</summary><div>${b.body}</div></details>`).join('')}</div>
      <div class="seg" role="group" style="margin:16px 0 10px">${POS.map(p => `<button type="button" class="seg-btn${p === pos ? ' active' : ''}" data-gpos="${p}">${p}</button>`).join('')}</div>
      <div class="dna-help-title">Die Stats beim ${{ QB: 'Quarterback', RB: 'Running Back', WR: 'Wide Receiver', TE: 'Tight End' }[pos]}</div>
      <div class="dna-help-grid" data-gcats></div>
      <div class="dna-help-title">🚫 Warum nicht …? <span>Bekannte Stats, die bewusst weggelassen wurden</span></div>
      <div class="dna-help-grid">${(G.notChosen[pos] || []).map(n => `<div class="dna-help-card dna-help-no">
        <div class="dna-help-card-head"><b>${n.name}</b><span>Stabilität r = ${e(n.r)}</span></div><p>${n.why}</p>${n.ex && n.ex !== '–' ? `<p class="dna-help-ex"><b>Beispiel:</b> ${n.ex}</p>` : ''}</div>`).join('')}</div>
    </div>`;
  }

  function openGlossary(root, D, pos, focus) {
    let m = document.getElementById('dnaGlossary');
    if (!m) {
      m = document.createElement('div');
      m.id = 'dnaGlossary'; m.className = 'dna-modal';
      document.body.appendChild(m);
      m.addEventListener('click', ev => {
        if (ev.target === m || ev.target.closest('[data-close]')) close();
        const g = ev.target.closest('[data-gpos]');
        if (g) openGlossary(root, D, g.dataset.gpos);
      });
      document.addEventListener('keydown', ev => { if (ev.key === 'Escape' && m.classList.contains('open')) close(); });
    }
    function close() { m.classList.remove('open'); document.body.style.overflow = ''; }
    m.innerHTML = glossaryHtml(pos, focus);
    const cats = (D && D.categories[pos]) || [];
    m.querySelector('[data-gcats]').innerHTML = cats.map(c => {
      const g = gloss(pos, c.k) || {};
      return `<div class="dna-help-card${c.k === focus ? ' focus' : ''}" id="dnaHelp-${c.k}">
        <div class="dna-help-card-head"><b>${c.type === 'style' ? '◇ ' : '● '}${c.label}</b><span>${c.type === 'style' ? 'Stil' : 'Rolle & Produktion'} · Stabilität r = ${String(c.stab).replace('.', ',')}</span></div>
        ${g.what ? `<p><b>Was ist das?</b> ${g.what}</p>` : ''}${g.why ? `<p><b>Warum ist es drin?</b> ${g.why}</p>` : ''}${g.ex ? `<p class="dna-help-ex"><b>Beispiel:</b> ${g.ex}</p>` : ''}
      </div>`;
    }).join('');
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (focus) setTimeout(() => { const el = document.getElementById('dnaHelp-' + focus); if (el) el.scrollIntoView({ block: 'center' }); }, 30);
    else m.scrollTop = 0;
    const x = m.querySelector('[data-close]'); if (x) x.focus();
  }

  // ---------- Seite ----------
  function resolve(ctx) {
    const st = getState(ctx);
    const D = ctx.data.PLAYER_DNA;
    const [pPos, pSeason, pId] = ctx.params;
    if (POS.includes(pPos)) st.pos = pPos;
    const seasons = Object.keys(D.seasons).sort((a, b) => b - a);
    st.season = pSeason && D.seasons[pSeason] ? String(pSeason) : (st.season && D.seasons[st.season] ? st.season : String(D.current));
    if (pId) { st.sel = pId; st.early = null; }
    return { st, seasons };
  }

  function listHtml(ctx, a, st, owner) {
    const e = ctx.ui.esc;
    const q = normKey(st.q);
    const list = a.players(st.season, st.pos)
      .map(p => ({ p, o: owner(p.n), avg: a.avg(p, st.pos) }))
      .filter(x => (!st.rostered || x.o || q) && (!q || normKey(x.p.n).includes(q)))
      .sort((x, y) => y.avg - x.avg);
    const early = a.early(st.season, st.pos).filter(p => (!st.rostered || owner(p.n) || q) && (!q || normKey(p.n).includes(q)));
    return (list.length ? list.map((x, i) => `<a class="dna-row${x.p.id === st.sel && !st.early ? ' active' : ''}" href="${ctx.href('playerdna', st.pos, st.season, x.p.id)}">
        <span class="dna-idx">${i + 1}</span>
        <span class="dna-nm">${e(x.p.n)} <small>${e(x.p.t)} · ${x.o ? e(x.o.emoji || '') : 'FA'}</small></span>
        <span class="dna-avg ${pctClass(x.avg)}">${st.scale === 'z' ? cellVal(Math.round(x.avg), st) : Math.round(x.avg)}</span></a>`).join('')
      : '<div class="muted" style="padding:12px">Keine Treffer.</div>')
      + (early.length ? `<div class="dna-early-head">🌱 Early Signal <span>unter Mindest-Volumen</span></div>${early.map(p => `<button type="button" class="dna-row${p.id === st.early ? ' active' : ''}" data-early="${e(p.id)}"><span class="dna-idx">🌱</span><span class="dna-nm">${e(p.n)} <small>${e(p.t)} · ${owner(p.n) ? e(owner(p.n).emoji || '') : 'FA'}</small></span><span></span></button>`).join('')}` : '');
  }

  function earlyCard(ctx, a, st, p, owner) {
    const e = ctx.ui.esc;
    const cats = a.cats(st.pos).filter(c => c.type === 'style');
    const o = owner(p.n);
    const opp = st.pos === 'QB' ? 'Pass-Versuche' : st.pos === 'RB' ? 'Touches (Carries+Targets)' : 'Targets';
    return `<div class="dna-head"><div><h2 class="dna-title display">${e(p.n)}</h2>
      <div class="page-sub">${st.pos} · ${e(p.t)} · ${p.g} Spiele${p.e ? ' · ' + (p.e === 1 ? 'Rookie' : 'NFL-Jahr ' + p.e) : ''} · ${o ? e(o.emoji || '') + ' ' + e(o.name) : 'Free Agent'}</div></div>
      <div class="dna-badge early"><b>🌱</b><small>Early Signal</small></div></div>
      <div class="note">Noch unter dem Mindest-Volumen (${p.opp} ${opp} bisher) für den vollen ${st.pos}-Perzentil-Vergleich. Gezeigt werden nur Rate-Stats, die auch bei kleiner Stichprobe aussagekräftig sind – <b>kein Ranking</b> gegen den Rest der Liga.</div>
      <div class="table-wrap"><table class="table dna-table"><thead><tr><th>Kategorie</th><th class="num">Wert</th></tr></thead><tbody>
      ${cats.map((c, i) => `<tr><td><span class="dna-tip" tabindex="0" data-tip="${attr((gloss(st.pos, c.k) || {}).short)}"><b>◇ ${e(c.label)}</b></span> <button type="button" class="dna-info" data-help="${c.k}" aria-label="${e(c.label)} erklärt">ⓘ</button><small class="muted"> ${e(c.unit)}</small></td><td class="num">${fmt(p.stab[i])}</td></tr>`).join('')}
      </tbody></table></div>
      <div class="page-sub">Sobald genug Volumen da ist, taucht ${e(p.n)} automatisch mit vollem DNA-Profil im ${st.pos}-Pool auf.</div>`;
  }

  function mainHtml(ctx, a, st, owner) {
    const { ui, href, data } = ctx;
    const e = ui.esc;
    if (st.early) {
      const p = a.early(st.season, st.pos).find(x => x.id === st.early);
      if (p) return earlyCard(ctx, a, st, p, owner);
    }
    const me = st.sel ? a.find(st.season, st.pos, st.sel) : null;
    if (!me) return ui.empty('Kein Spieler gewählt', 'Links einen Spieler auswählen.', '🧬');
    const cats = a.cats(st.pos);
    const cmp = st.compareFor === `${st.season}|${me.id}` ? st.compare : [];
    const entries = [{ season: st.season, p: me }].concat(cmp.map(c => ({ season: c.season, p: a.find(c.season, st.pos, c.id) })).filter(x => x.p));
    const o = owner(me.n);
    const avg = Math.round(a.avg(me, st.pos));
    const v = a.vals(me), raw = a.raw(me), stab = a.useStab(me);
    const core = cats.map((c, i) => ({ c, v: v[i] })).filter(x => x.c.type !== 'style' && x.v != null).sort((x, y) => y.v - x.v);
    const cur = a.matches(st.season, st.pos, me, false), hist = a.matches(st.season, st.pos, me, true);

    const row = (c, i) => {
      const x = v[i], style = c.type === 'style';
      const bar = st.scale === 'z' && x != null
        ? `<span class="dna-fill ${style ? 'q0' : pctClass(x)}" style="left:${Math.min(50, x)}%;width:${Math.max(1, Math.abs(x - 50))}%"></span><span class="dna-mid"></span>`
        : `<span class="dna-fill ${style ? 'q0' : pctClass(x)}" style="width:${x == null ? 0 : Math.max(2, Math.min(100, x))}%"></span>`;
      return `<tr${style ? ' class="dna-style-row"' : ''}>
        <td><span class="dna-tip" tabindex="0" data-tip="${attr((gloss(st.pos, c.k) || {}).short)}"><b>${style ? '◇ ' : ''}${e(c.label)}</b></span> <button type="button" class="dna-info" data-help="${c.k}" aria-label="${e(c.label)} erklärt">ⓘ</button>
          <small class="muted">${e(c.unit)} · r=${String(c.stab).replace('.', ',')}</small></td>
        <td class="num">${fmt(me.v[i])}${stab && raw[i] != null && me.v[i] != null ? `<small class="muted">stab. ${fmt(raw[i])}</small>` : ''}</td>
        <td class="dna-barcell"><span class="dna-bar">${bar}</span><span class="dna-bv">${cellVal(x, st)}</span></td>
      </tr>`;
    };
    const matchBox = (title, list, showSeason, extra) => `<div class="card dna-mbox"><div class="card-head"><h2>${title}</h2>${extra || ''}</div>
      ${list.length ? list.map(m => { const mo = owner(m.p.n); return `<button type="button" class="dna-match" data-cmp="${e(m.season)}|${e(m.p.id)}" title="Zum Vergleich ins Radar">
        <span class="dna-mscore">${m.score}%</span><span class="dna-nm">${e(m.p.n)} <small>${showSeason ? e(m.season) + ' · ' : ''}${m.p.e ? 'J' + m.p.e + ' · ' : ''}${e(m.p.t)}${mo ? ' · ' + e(mo.emoji || '') : ''}</small></span><span class="dna-plus">＋</span></button>`; }).join('')
        : '<div class="muted" style="padding:10px 14px">Kein vergleichbares Profil.</div>'}</div>`;

    const ay = MFHFB.nfl && MFHFB.nfl.airYardsCard ? MFHFB.nfl.airYardsCard(data.AIR_YARDS, me.id, st.pos, st.season, me.n) : '';
    const ps = MFHFB.nfl && MFHFB.nfl.playerStyleCard ? MFHFB.nfl.playerStyleCard(data.PLAYER_STYLE, me.id, st.pos, st.season, me.n) : '';

    return `
      <div class="dna-head">
        <div><h2 class="dna-title display">${e(me.n)}</h2>
          <div class="page-sub">${st.pos} · ${e(me.t)} · ${e(st.season)} · ${me.g} Spiele${me.e ? ' · ' + (me.e === 1 ? 'Rookie' : 'NFL-Jahr ' + me.e) : ''} · ${o ? `<a href="${href('teams', o.id)}">${e(o.emoji || '')} ${e(o.name)}</a>` : 'Free Agent'}</div></div>
        <div class="dna-badge ${pctClass(avg)}" title="Ø der Kern-Achsen"><b>${st.scale === 'z' ? cellVal(avg, st) : avg}</b><small>DNA Ø</small></div>
      </div>
      ${core.length ? `<div class="dna-tags">Stärken: <b>${e(core[0].c.label)}</b>${core[1] ? ` & <b>${e(core[1].c.label)}</b>` : ''} · Schwäche: <b>${e(core[core.length - 1].c.label)}</b>${stab ? ' · <span class="dna-stabtag">Stichproben-korrigiert</span>' : ''}</div>` : ''}
      <div class="dna-grid">
        <div class="card dna-radar-card">
          ${radar(entries, cats, st, a)}
          <div class="dna-legend">● Rolle & Produktion · ◇ Stil (kein besser/schlechter)</div>
          ${entries.length > 1 ? `<div class="dna-chips">${entries.map((en, i) => `<span class="dna-chip ${SEL[i]}"><i></i>${e(en.p.n)} ${e(en.season)}${i ? ` <button type="button" data-uncmp="${i - 1}" aria-label="Entfernen">✕</button>` : ''}</span>`).join('')}</div>` : ''}
        </div>
        <div class="table-wrap"><table class="table dna-table">
          <thead><tr><th>Kategorie</th><th class="num">Wert</th><th>${st.scale === 'z' ? 'Z-Score' : 'Perzentil'}</th></tr></thead>
          <tbody>${cats.map((c, i) => (c.type !== 'style' ? row(c, i) : '')).join('')}
            <tr class="dna-sep"><td colspan="3">◇ Stil</td></tr>
            ${cats.map((c, i) => (c.type === 'style' ? row(c, i) : '')).join('')}</tbody>
        </table></div>
      </div>
      ${ay}${ps}
      <div class="dna-matches">
        ${matchBox(`🧬 DNA-Match ${e(st.season)}`, cur, false)}
        ${matchBox('🏛️ Historisches Match', hist, true, me.e ? `<label class="dna-check"><input type="checkbox" data-sameyear ${st.sameYear ? 'checked' : ''}> nur ${me.e === 1 ? 'Rookie-Jahre' : 'NFL-Jahr ' + me.e}</label>` : '')}
      </div>
      <div class="page-sub" style="margin-top:10px;font-size:12px">Klick auf ein Match legt es zum Vergleich ins Radar (max. 3 Profile). Match-Score = 100 − Ø Abstand über alle Achsen. Stabilität r = gemessene Jahr-zu-Jahr-Korrelation 2016–2025. Quellen: nflverse, ffverse.</div>`;
  }

  MFHFB.pages.register({
    id: 'playerdna',
    section: 'players',
    label: 'Player DNA',
    icon: '🧬',
    applies: { sport: ['nfl'] },
    data: ['teams', 'rosters-live', 'sport:player-dna', '?sport:air-yards', '?sport:player-style'],
    title: ({ data, params }) => {
      const D = data.PLAYER_DNA; if (!params[2] || !D) return 'Player DNA';
      const p = (((D.seasons[params[1]] || {}).players || {})[params[0]] || []).find(x => x.id === params[2]);
      return p ? `${p.n} · Player DNA` : 'Player DNA';
    },
    render(ctx) {
      const { ui, data } = ctx;
      const e = ui.esc;
      if (!data.PLAYER_DNA) return ui.empty('Keine Player-DNA-Daten', 'Die Datei wird vom Player-DNA-Sync erzeugt.', '🧬');
      const { st, seasons } = resolve(ctx);
      const a = api(ctx, st);
      const owner = ownerIndex(data);
      const all = a.players(st.season, st.pos);
      if (!st.early && (!st.sel || !all.some(p => p.id === st.sel))) {
        const firstOwned = all.slice().sort((x, y) => a.avg(y, st.pos) - a.avg(x, st.pos)).find(p => owner(p.n));
        st.sel = (firstOwned || all[0] || {}).id || null;
      }
      ctx._dna = { st, a, owner };
      const D = a.D;
      return `
        <div class="page-head">
          <h1 class="page-title display">🧬 Player DNA</h1>
          <div class="page-sub">Perzentil-Profil gegen die ganze NFL · Pool ${e(st.season)}: ${all.length} ${st.pos}s mit Mindest-Volumen (${D.seasons[st.season].weeks} Wochen)</div>
        </div>
        <div class="controls">
          <div class="seg" role="group">${POS.map(p => `<a class="seg-btn${p === st.pos ? ' active' : ''}" href="${ctx.href('playerdna', p, st.season)}">${p}</a>`).join('')}</div>
          <select class="tr-select dna-season" data-season aria-label="Saison">${seasons.map(y => `<option value="${y}"${y === st.season ? ' selected' : ''}>${y}${String(y) === String(D.current) ? ` (bis W${D.seasons[y].weeks})` : ''}</option>`).join('')}</select>
          <div class="seg" role="group" title="Perzentil = Rang im Pool. Z-Score = Abstand zum Schnitt (gedeckelt auf ±${D.zCap || 2.5}).">
            <button type="button" class="seg-btn${st.scale === 'p' ? ' active' : ''}" data-set="scale" data-val="p">Perzentil</button>
            <button type="button" class="seg-btn${st.scale === 'z' ? ' active' : ''}" data-set="scale" data-val="z">Z-Score</button>
          </div>
          ${all.some(p => p.ps) ? `<label class="dna-check" title="Frühe Saison: Werte werden zum Vorjahr bzw. Positions-Schnitt gezogen – je instabiler die Kennzahl, desto stärker."><input type="checkbox" data-stab ${st.stab ? 'checked' : ''}> Stichproben-Korrektur</label>` : ''}
          <label class="dna-check"><input type="checkbox" data-rostered ${st.rostered ? 'checked' : ''}> nur Liga-Kader</label>
          <button type="button" class="seg-btn dna-helpbtn" data-help="">📖 Stats erklärt</button>
        </div>
        <div class="dna-layout">
          <aside class="card dna-side">
            <input type="search" class="search" placeholder="Spieler suchen …" value="${e(st.q)}" data-q aria-label="Spieler suchen">
            <div class="dna-list-head"><span>Spieler</span><span title="Ø über die Kern-Achsen">DNA Ø</span></div>
            <div class="dna-list" data-list>${listHtml(ctx, a, st, owner)}</div>
          </aside>
          <div class="dna-main" data-main>${mainHtml(ctx, a, st, owner)}</div>
        </div>`;
    },
    mount(root, ctx) {
      const { st } = ctx._dna || resolve(ctx);
      // Auswahl aus der URL merken
      ctx.store.setJSON('dna', st);
      const save = patch => { ctx.store.setJSON('dna', { ...getState(ctx), ...patch }); ctx.refresh(); };
      root.querySelectorAll('[data-set]').forEach(b => b.addEventListener('click', () => save({ [b.dataset.set]: b.dataset.val })));
      const on = (sel, fn) => { const el = root.querySelector(sel); if (el) el.addEventListener('change', () => fn(el)); };
      on('[data-stab]', el => save({ stab: el.checked }));
      on('[data-rostered]', el => save({ rostered: el.checked }));
      on('[data-sameyear]', el => save({ sameYear: el.checked }));
      on('[data-season]', el => {
        const cur = getState(ctx);
        const keep = cur.sel && (((ctx.data.PLAYER_DNA.seasons[el.value] || {}).players || {})[cur.pos] || []).some(p => p.id === cur.sel);
        ctx.store.setJSON('dna', { ...cur, season: el.value, sel: keep ? cur.sel : null, early: null, compare: [] });
        location.hash = ctx.href('playerdna', cur.pos, el.value, ...(keep ? [cur.sel] : []));
      });
      root.addEventListener('click', ev => {
        const help = ev.target.closest('[data-help]');
        if (help) { openGlossary(root, ctx.data.PLAYER_DNA, getState(ctx).pos, help.dataset.help || null); return; }
        const early = ev.target.closest('[data-early]');
        if (early) {
          // Early-Signal-Spieler haben keine eigene URL → Auswahl merken, URL ohne ID
          const s = getState(ctx);
          ctx.store.setJSON('dna', { ...s, early: early.dataset.early, sel: null });
          const target = ctx.href('playerdna', s.pos, s.season);
          if (location.hash === target) ctx.refresh(); else location.hash = target;
          return;
        }
        const cmp = ev.target.closest('[data-cmp]');
        if (cmp) {
          const s = getState(ctx); const [season, id] = cmp.dataset.cmp.split('|');
          const key = `${s.season}|${s.sel}`;
          let list = s.compareFor === key ? s.compare : [];
          if (!list.some(c => c.season === season && c.id === id)) list = list.concat([{ season, id }]).slice(-2);
          save({ compare: list, compareFor: key }); return;
        }
        const un = ev.target.closest('[data-uncmp]');
        if (un) { const s = getState(ctx); const list = s.compare.slice(); list.splice(Number(un.dataset.uncmp), 1); save({ compare: list }); }
      });
      const q = root.querySelector('[data-q]');
      if (q) q.addEventListener('input', () => {
        const s = { ...getState(ctx), q: q.value };
        ctx.store.setJSON('dna', s);
        root.querySelector('[data-list]').innerHTML = listHtml(ctx, api(ctx, s), s, ownerIndex(ctx.data));
      });
      // Mobil: nach Auswahl zum Profil scrollen
      if (ctx.params[2] && window.innerWidth <= 900) { const m = root.querySelector('[data-main]'); if (m) m.scrollIntoView({ block: 'start' }); }
    },
  });
})();
