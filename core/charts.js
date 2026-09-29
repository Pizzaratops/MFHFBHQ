// ============================================================
//  MFHFB HQ — gemeinsame SVG-Diagramme
// ============================================================
//  bump(): Rangverlauf (Rolling Rankings, Liga-Historie) mit Hover/Auswahl.
//  radar(): Spinnennetz für 1–3 Profile auf einer 0..1-Skala je Achse
//  (Perzentile, umgerechnete Ränge …). Farben über die CVD-sichere
//  Auswahl-Palette (.sel-1/.sel-2/.sel-3 in app.css), Stil = .rd-*
//  (wie Player DNA / College Scouting).
//
//  MFHFB.charts.radar({
//    axes:   [{ label }],
//    series: [{ name, vals: [0..1 | null, …], tips: ['…', …] }],   // max. 3
//    size:   300 (optional), label: 'Aria-Label'
//  })
// ============================================================

window.MFHFB = window.MFHFB || {};

MFHFB.charts = (function () {
  const SEL = ['sel-1', 'sel-2', 'sel-3'];

  function wrapLabel(txt, co) {
    if (Math.abs(co) <= 0.5 || txt.length <= 11) return [txt];
    const cuts = [...txt.matchAll(/[\/ -]/g)].map(m => m.index);
    if (!cuts.length) return [txt];
    const cut = cuts.sort((p, q) => Math.abs(p - txt.length / 2) - Math.abs(q - txt.length / 2))[0];
    return [txt.slice(0, cut + (txt[cut] === ' ' ? 0 : 1)).trim(), txt.slice(cut + 1).trim()];
  }

  function radar({ axes, series, size = 300, label = 'Radar' }) {
    const e = MFHFB.ui.esc;
    const n = axes.length, cx = size / 2, cy = size / 2, R = size * 0.375;
    const ang = i => -Math.PI / 2 + (i * 2 * Math.PI) / n;
    const pt = (i, f) => [cx + Math.cos(ang(i)) * R * f, cy + Math.sin(ang(i)) * R * f];
    const f1 = v => v.toFixed(1);
    const rings = [0.25, 0.5, 0.75, 1].map(f => `<polygon class="rd-ring" points="${axes.map((_, i) => pt(i, f).map(f1).join(',')).join(' ')}"/>`).join('');
    const lines = axes.map((_, i) => { const [x, y] = pt(i, 1); return `<line class="rd-axis" x1="${cx}" y1="${cy}" x2="${f1(x)}" y2="${f1(y)}"/>`; }).join('');
    const labels = axes.map((ax, i) => {
      const [x, y] = pt(i, 1.2); const co = Math.cos(ang(i));
      const anchor = Math.abs(co) < 0.2 ? 'middle' : co > 0 ? 'start' : 'end';
      const parts = wrapLabel(ax.label, co);
      const y0 = y + 4 - (parts.length - 1) * 7;
      return `<text class="rd-label" x="${f1(x)}" y="${f1(y0)}" text-anchor="${anchor}">${parts.map((l, k) => `<tspan x="${f1(x)}" dy="${k ? 14 : 0}">${e(l)}</tspan>`).join('')}</text>`;
    }).join('');
    const multi = series.length > 1;
    // Erste Serie zuletzt zeichnen (liegt oben)
    const polys = series.map((s, k) => ({ s, k })).reverse().map(({ s, k }) => {
      const pts = axes.map((_, i) => pt(i, Math.max(0, Math.min(1, s.vals[i] == null ? 0 : s.vals[i]))));
      const dots = axes.map((_, i) => s.vals[i] == null ? '' :
        `<circle class="rd-pt" cx="${f1(pts[i][0])}" cy="${f1(pts[i][1])}" r="4.5"><title>${e((s.tips && s.tips[i]) || s.name)}</title></circle>`).join('');
      return `<g class="rd-series ${SEL[k]}${multi ? ' multi' : ''}"><polygon points="${pts.map(p => p.map(f1).join(',')).join(' ')}"/>${dots}</g>`;
    }).join('');
    const pad = Math.round(size * 0.22);
    return `<svg class="rd" viewBox="${-pad} -14 ${size + 2 * pad} ${size + 28}" role="img" aria-label="${e(label)}">${rings}${lines}${polys}${labels}</svg>`;
  }

  // Legende als Chips (gleiche Klassen wie Player DNA)
  function chips(names) {
    const e = MFHFB.ui.esc;
    return `<div class="dna-chips">${names.map((nm, i) => `<span class="dna-chip ${SEL[i]}"><i></i>${e(nm)}</span>`).join('')}</div>`;
  }

  // ---------- Bump-Chart (Rangverlauf) ----------
  //  bump({ cols: ['W1', …], rows: [{ id, name, emoji, ranks: [r|null …], tips: ['…' …] }],
  //         sel: [id …] (max. 3, farbig), width, maxRank, label })
  //  Lücken (null) unterbrechen die Linie. Beschriftung am ersten und
  //  letzten vorhandenen Punkt; schmal (<640px) links nur Ränge.
  function bump({ cols, rows, sel = [], width = 900, maxRank, label = 'Rangverlauf' }) {
    const e = MFHFB.ui.esc;
    const n = maxRank || Math.max(1, ...rows.flatMap(r => r.ranks.filter(x => x != null)));
    const W = cols.length;
    const narrow = width < 640;
    const rowH = narrow ? 28 : 30;
    const padL = narrow ? 34 : 232, padR = narrow ? 150 : 232, top = 30, bottom = 8;
    const height = top + n * rowH + bottom;
    const innerW = Math.max(40, width - padL - padR);
    const x = i => (W === 1 ? padL + innerW / 2 : padL + (i * innerW) / (W - 1));
    const y = r => top + (r - 1) * rowH + rowH / 2;
    const maxLen = narrow ? 13 : 21;
    const short = name => (name.length > maxLen ? name.slice(0, maxLen - 1).trimEnd() + '…' : name);
    const selIdx = id => sel.indexOf(id);
    const f1 = v => v.toFixed(1);

    const path = r => {
      let d = '', prev = null;
      r.ranks.forEach((rk, i) => {
        if (rk == null) { prev = null; return; }
        const p = [x(i), y(rk)];
        if (!prev) d += `M${f1(p[0])},${f1(p[1])}`;
        else { const mx = (prev[0] + p[0]) / 2; d += ` C${f1(mx)},${f1(prev[1])} ${f1(mx)},${f1(p[1])} ${f1(p[0])},${f1(p[1])}`; }
        prev = p;
      });
      return d;
    };
    const ordered = rows.slice().sort((a, b) => (selIdx(a.id) > -1) - (selIdx(b.id) > -1)); // Ausgewählte zuletzt = oben
    const lines = ordered.map(r => {
      const k = selIdx(r.id);
      const pts = r.ranks.map((rk, i) => rk == null ? '' : `<circle class="bump-pt" cx="${f1(x(i))}" cy="${f1(y(rk))}" r="${k > -1 ? 5 : 3.5}"/>
          <circle class="bump-hit" cx="${f1(x(i))}" cy="${f1(y(rk))}" r="12" data-team="${e(r.id)}" data-tip="${e((r.tips && r.tips[i]) || '')}"/>`).join('');
      return `<g class="bump-line${k > -1 ? ' ' + SEL[k] : ''}" data-team="${e(r.id)}"><path d="${path(r)}"/>${pts}</g>`;
    }).join('');
    const lbl = (r, side) => {
      const idxs = r.ranks.map((rk, i) => (rk == null ? -1 : i)).filter(i => i >= 0);
      if (!idxs.length) return '';
      const i = side === 'l' ? idxs[0] : idxs[idxs.length - 1];
      const rk = r.ranks[i], k = selIdx(r.id);
      // Nur an den Rändern beschriften; Linien, die mittendrin enden, bekommen ein kurzes Label am Punkt
      const edge = side === 'l' ? i === 0 : i === W - 1;
      if (!edge && side === 'l') return '';
      const tx = edge ? (side === 'l' ? padL - 14 : x(W - 1) + 14) : x(i) + 9;
      const dot = k > -1 ? `<tspan class="bump-dot ${SEL[k]}">● </tspan>` : '';
      if (!edge) return `<text class="bump-label end${k > -1 ? ' on' : ''}" x="${f1(tx)}" y="${y(rk) + 4}" text-anchor="start" data-team="${e(r.id)}">${e(r.emoji || '')}${narrow ? '' : ' ' + e(short(r.name))}</text>`;
      if (side === 'l' && narrow) return `<text class="bump-label${k > -1 ? ' on' : ''}" x="${tx}" y="${y(rk) + 4}" text-anchor="end" data-team="${e(r.id)}">${rk}</text>`;
      return `<text class="bump-label${k > -1 ? ' on' : ''}" x="${f1(tx)}" y="${y(rk) + 4}" text-anchor="${side === 'l' ? 'end' : 'start'}" data-team="${e(r.id)}">${side === 'l' ? `${rk}. ` : dot}${r.emoji ? e(r.emoji) + ' ' : ''}${e(short(r.name))}${side === 'l' && k > -1 ? ` <tspan class="bump-dot ${SEL[k]}">●</tspan>` : ''}</text>`;
    };
    const tight = W > 1 && innerW / (W - 1) < 38; // eng: Jahreszahlen kürzen (2019 → '19)
    const colLabel = c => (tight && /^\d{4}$/.test(c) ? "'" + c.slice(2) : c);
    const grid = cols.map((c, i) => `<line class="bump-grid" x1="${x(i)}" x2="${x(i)}" y1="${top - 6}" y2="${height - bottom}"/>
      <text class="bump-week" x="${x(i)}" y="${top - 12}" text-anchor="middle">${e(colLabel(c))}</text>`).join('');
    return `<svg class="bump" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${e(label)}">
      ${grid}${lines}${rows.map(r => lbl(r, 'l')).join('')}${rows.map(r => lbl(r, 'r')).join('')}</svg>`;
  }

  // Hover-Tooltip + Hervorheben + Klick (onPick(id)) für ein gezeichnetes Bump-Chart
  function bumpInteract(wrap, tip, onPick) {
    wrap.addEventListener('mouseover', ev => {
      const hit = ev.target.closest('[data-team]');
      const svg = wrap.querySelector('svg');
      if (!svg) return;
      svg.classList.toggle('hovering', !!hit);
      svg.querySelectorAll('.bump-line').forEach(g => g.classList.toggle('hot', !!hit && g.dataset.team === hit.dataset.team));
      if (hit && hit.dataset.tip && tip) {
        tip.textContent = hit.dataset.tip;
        const r = wrap.getBoundingClientRect(), p = hit.getBoundingClientRect();
        tip.style.left = Math.min(r.width - 10, Math.max(10, p.left - r.left + p.width / 2)) + 'px';
        tip.style.top = (p.top - r.top - 8) + 'px';
        tip.hidden = false;
      } else if (tip) tip.hidden = true;
    });
    wrap.addEventListener('mouseleave', () => {
      if (tip) tip.hidden = true;
      const svg = wrap.querySelector('svg');
      if (svg) { svg.classList.remove('hovering'); svg.querySelectorAll('.hot').forEach(g => g.classList.remove('hot')); }
    });
    wrap.addEventListener('click', ev => { const hit = ev.target.closest('[data-team]'); if (hit && onPick) onPick(hit.dataset.team); });
  }

  // Zeichnet in echter Containerbreite und bei Größenänderung neu
  function responsive(wrap, draw) {
    const run = () => { if (wrap.isConnected) wrap.innerHTML = draw(Math.max(320, wrap.clientWidth)); };
    run();
    let t;
    const onResize = () => { if (!wrap.isConnected) { window.removeEventListener('resize', onResize); return; } clearTimeout(t); t = setTimeout(run, 120); };
    window.addEventListener('resize', onResize);
  }

  return { radar, chips, bump, bumpInteract, responsive, SEL };
})();

// ---------- Modal (Erklär-Fenster, wie der Player-DNA-Glossar) ----------
//  MFHFB.ui.modal(id, html, { focus: 'elementId', onClick(ev, close) })
//  Schließen per ✕ ([data-close]), Klick daneben oder Escape.
MFHFB.ui = MFHFB.ui || {};
MFHFB.ui.modal = function (id, html, opts = {}) {
  let m = document.getElementById(id);
  const close = () => { m.classList.remove('open'); document.body.style.overflow = ''; };
  if (!m) {
    m = document.createElement('div');
    m.id = id; m.className = 'dna-modal';
    document.body.appendChild(m);
    m.addEventListener('click', ev => {
      if (ev.target === m || ev.target.closest('[data-close]')) { close(); return; }
      if (m._onClick) m._onClick(ev, close);
    });
    document.addEventListener('keydown', ev => { if (ev.key === 'Escape' && m.classList.contains('open')) close(); });
  }
  m._onClick = opts.onClick || null;
  m.innerHTML = html;
  m.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (opts.focus) setTimeout(() => { const el = document.getElementById(opts.focus); if (el) el.scrollIntoView({ block: 'center' }); }, 30);
  else m.scrollTop = 0;
  const x = m.querySelector('[data-close]'); if (x) x.focus({ preventScroll: true });
  return close;
};
