// ============================================================
//  MFHFB HQ — Teilen als Bild (ersetzt die Share-Cards der alten Seiten)
// ============================================================
//  Jede Seite markiert teilbare Bereiche mit data-share="Titel". Der Hub
//  hängt nach dem Rendern einen kleinen „📸 Teilen“-Knopf an (MFHFB.share.
//  decorate). Klick → Bereich wird per html2canvas (vendor/, lokal, MIT)
//  als PNG gerendert, mit Fußzeile „MFHFB HQ · Liga · Datum“:
//  - Handy mit Web-Share-API: Teilen-Dialog (Instagram, WhatsApp …)
//  - sonst: Download als PNG
//  html2canvas kennt color-mix()/color(srgb …) nicht → die berechneten
//  Farben werden im Klon vorher per Canvas in rgb() umgerechnet.
// ============================================================

window.MFHFB = window.MFHFB || {};

MFHFB.share = (function () {
  let lib = null;
  function loadLib() {
    if (window.html2canvas) return Promise.resolve(window.html2canvas);
    if (lib) return lib;
    lib = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'vendor/html2canvas.min.js';
      s.onload = () => resolve(window.html2canvas);
      s.onerror = () => { lib = null; reject(new Error('html2canvas nicht ladbar')); };
      document.head.appendChild(s);
    });
    return lib;
  }

  // Moderne Farbangaben → rgb()/rgba(): 1-Pixel-Canvas zeichnen und zurücklesen
  //  (der fillStyle-Getter liefert in neuen Browsern wieder „color(srgb …)“).
  const cv = document.createElement('canvas'); cv.width = cv.height = 1;
  const cx = cv.getContext('2d', { willReadFrequently: true });
  const cache = new Map();
  function toRgb(v) {
    if (!v || !/color\(|color-mix|oklab|oklch|lab\(|lch\(/.test(v)) return null;
    if (cache.has(v)) return cache.get(v);
    cx.clearRect(0, 0, 1, 1); cx.fillStyle = '#000'; cx.fillStyle = v; cx.fillRect(0, 0, 1, 1);
    const [r, g, b, a] = cx.getImageData(0, 0, 1, 1).data;
    const out = a === 255 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${(a / 255).toFixed(3)})`;
    cache.set(v, out);
    return out;
  }
  function flattenColors(srcRoot, cloneRoot) {
    const src = [srcRoot, ...srcRoot.querySelectorAll('*')];
    const dst = [cloneRoot, ...cloneRoot.querySelectorAll('*')];
    src.forEach((el, i) => {
      const d = dst[i]; if (!d || !d.style) return;
      const cs = getComputedStyle(el);
      for (let k = 0; k < cs.length; k++) {
        const prop = cs[k], val = cs.getPropertyValue(prop);
        if (!/color\(|oklab|oklch|color-mix/.test(val)) continue;
        if (/shadow|image/.test(prop)) { d.style.setProperty(prop, 'none'); continue; }
        const r = toRgb(val); if (r) d.style.setProperty(prop, r);
      }
    });
  }

  async function capture(el, title, league) {
    const h2c = await loadLib();
    const bg = getComputedStyle(document.body).backgroundColor;
    const canvas = await h2c(el, {
      backgroundColor: toRgb(bg) || bg, scale: Math.min(2, window.devicePixelRatio || 1) * 1.5, useCORS: true, logging: false,
      windowWidth: Math.max(document.documentElement.clientWidth, el.scrollWidth + 40),
      onclone: (doc, clone) => {
        flattenColors(el, clone);
        clone.querySelectorAll('.share-btn, .no-share, .bump-tip').forEach(b => b.remove());
        clone.style.padding = '14px';
        const f = doc.createElement('div');
        f.textContent = `MFHFB HQ · ${league ? league.short || league.name : ''} · ${new Date().toLocaleDateString('de-DE')}`;
        f.style.cssText = 'grid-column:1/-1;margin-top:10px;font:700 12px "DM Sans",sans-serif;letter-spacing:.06em;text-transform:uppercase;opacity:.7;text-align:right';
        f.style.color = toRgb(getComputedStyle(document.body).color) || getComputedStyle(document.body).color;
        clone.appendChild(f);
      },
    });
    return new Promise(res => canvas.toBlob(b => res(b), 'image/png'));
  }

  const slug = s => String(s || 'mfhfb').toLowerCase().normalize('NFD').replace(/[^\w]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

  async function share(el, title, league) {
    const blob = await capture(el, title, league);
    const name = `${league ? league.key + '-' : ''}${slug(title)}.png`;
    const file = new File([blob], name, { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] }) && matchMedia('(pointer: coarse)').matches) {
      try { await navigator.share({ files: [file], title }); return 'shared'; } catch (e) { if (e && e.name === 'AbortError') return 'aborted'; }
    }
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    return 'downloaded';
  }

  // Ohne eigenes data-share automatisch teilbar (Titel = Seitentitel)
  const AUTO = '.bump-card, .mp-scoreboard, .card.tr-nba-result:not(.is-empty), .nba-an-compare, .cw-card, .dr-card';

  // Knöpfe an alle [data-share]-Bereiche hängen (vom Hub nach jedem Rendern aufgerufen)
  function decorate(root, league) {
    root.querySelectorAll(AUTO).forEach(el => {
      if (el.dataset.share || el.closest('[data-share]')) return;
      el.dataset.share = (document.title || '').split(' · ')[0] || 'MFHFB HQ';
    });
    root.querySelectorAll('[data-share]').forEach(el => {
      if (el.querySelector(':scope > .share-btn')) return;
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'share-btn'; b.title = 'Als Bild teilen / speichern';
      b.innerHTML = '📸<span> Teilen</span>';
      b.addEventListener('click', async ev => {
        ev.preventDefault(); ev.stopPropagation();
        b.disabled = true; const old = b.innerHTML; b.innerHTML = '⏳';
        try { const r = await share(el, el.dataset.share, league); b.innerHTML = r === 'downloaded' ? '✅' : old; }
        catch (e) { console.error(e); b.innerHTML = '⚠️'; b.title = 'Fehler: ' + e.message; }
        setTimeout(() => { b.innerHTML = old; b.disabled = false; }, 1500);
      });
      if (getComputedStyle(el).position === 'static') el.classList.add('share-host');
      el.appendChild(b);
    });
  }

  return { decorate, capture, share };
})();
