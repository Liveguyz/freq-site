// seite.js — Unterseiten (Rechtstexte, Support): Inhaltsverzeichnis aus den Überschriften, „Das Wichtigste in Kürze“
// als Karte, Knopf zurück zum Inhalt. Ändert kein Wort der Seite; ohne JavaScript bleibt sie, wie sie ist. Kein Tracking, kein Speicher.
(() => {
  const main = document.querySelector('main'); if (!main) return;
  const html = document.documentElement, en = html.lang === 'en';
  const h2 = Array.from(main.querySelectorAll('h2')).filter((h) => h.parentElement === main);   // nur die Abschnitte der Seite selbst (nicht Überschriften in Karten)
  // Anker für jede Überschrift (vorhandene id bleibt: die App und andere Seiten verlinken darauf)
  const belegt = new Set(Array.from(document.querySelectorAll('[id]')).map((e) => e.id));
  for (const h of h2) {
    if (h.id) continue;
    let id = h.textContent.trim().toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 48) || 'abschnitt';
    while (belegt.has(id)) id += '-2';
    belegt.add(id); h.id = id;
  }
  // „Das Wichtigste in Kürze“ / „In short“: die Liste direkt nach der Überschrift wird zur Karte
  for (const h of h2) {
    if (!/Wichtigste in Kürze|short version|^In short|at a glance/i.test(h.textContent)) continue;
    const l = h.nextElementSibling;
    if (l && l.tagName === 'UL') { h.classList.add('kurz'); l.classList.add('kurz'); }
  }
  // Inhaltsverzeichnis ab fünf Abschnitten
  let inhalt = null;
  if (h2.length >= 5) {
    inhalt = document.createElement('details'); inhalt.className = 'inhalt'; inhalt.id = 'inhalt';
    inhalt.open = window.matchMedia('(min-width: 900px)').matches;
    const s = document.createElement('summary');
    s.append(en ? 'Contents' : 'Inhalt');
    const n = document.createElement('span'); n.textContent = h2.length + (en ? ' sections' : ' Abschnitte'); s.append(n);
    const ol = document.createElement('ol');
    for (const h of h2) { const li = document.createElement('li'), a = document.createElement('a'); a.href = '#' + h.id; a.textContent = h.textContent.trim(); li.append(a); ol.append(li); }
    inhalt.append(s, ol);
    const nach = main.querySelector('.stand') || main.querySelector('h1');
    if (nach) nach.after(inhalt); else main.prepend(inhalt);
    // Ein Sprung aus dem Verzeichnis klappt es am Handy wieder zu (sonst steht es beim Zurück offen über dem Text)
    ol.addEventListener('click', (e) => { if (e.target.closest('a') && !window.matchMedia('(min-width: 900px)').matches) setTimeout(() => { inhalt.open = false; }, 0); });
  }
  // Knopf „Inhalt“ / „Nach oben“ auf langen Seiten
  const knopf = document.createElement('button'); knopf.type = 'button'; knopf.className = 'nach-oben';
  knopf.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5.5 11.5 12 5l6.5 6.5"/></svg>';
  knopf.append(inhalt ? (en ? 'Contents' : 'Inhalt') : (en ? 'Top' : 'Nach oben'));
  knopf.addEventListener('click', () => { if (inhalt) { inhalt.open = true; inhalt.scrollIntoView({ block: 'start' }); } else window.scrollTo(0, 0); });
  document.body.append(knopf);
  // Zustand aus zwei unsichtbaren Marken (IntersectionObserver statt Scroll-Ereignissen: nichts rechnet beim Scrollen mit)
  const marke = (top, klasse) => {
    const m = document.createElement('div'); m.setAttribute('aria-hidden', 'true');
    m.style.cssText = 'position:absolute;left:0;width:1px;height:1px;pointer-events:none;top:' + top;
    document.body.append(m);
    new IntersectionObserver(([e]) => html.classList.toggle(klasse, !e.isIntersecting && e.boundingClientRect.top < 0)).observe(m);
  };
  if (window.IntersectionObserver) { document.body.style.position = 'relative'; marke('24px', 'gerollt'); marke('200vh', 'weit'); }
})();
