// sw.vorlage.js — Vorlage für den Service Worker (bau.sh schreibt sie mit der Version nach sw.js).
// Versionierte Welt-Dateien (welt/, bild/) cache-first; HTML, Unterseiten, Rechtstexte und Stil network-first mit
// Rückfall auf den Zwischenspeicher. Neue Version = neuer Cache-Name: alte Caches werden beim Aktivieren gelöscht,
// die Seite verweist per ?v= auf die neuen Welt-Dateien. Kein Tracking, nichts verlässt das Gerät.
const VERSION = '202611250952-4c905c1';
const CACHE = 'freq-welt-' + VERSION;
// Beim Einrichten nur das Kleine, das jede Ansicht braucht (Stil, Zeichen). Das Welt-Bündel, die Standbilder und die Modelle
// kommen von selbst in den Zwischenspeicher, sobald die Seite sie lädt (cache-first unten, „merken“ nach dem Laden) –
// bis zum 24.11.2026 holte schon das Einrichten das Bündel und das große Logo (zusammen über 500 KB), auch im Datensparmodus.
const KERN = ['welt/welt.css?v=' + VERSION, 'bild/freq-mark.webp'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(KERN).catch(() => {})).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// Die Seite meldet nach dem Laden alle Welt-Dateien, die sie gebraucht hat (main.js): beim ersten Besuch lief der Service
// Worker noch nicht mit, so landen sie trotzdem im Zwischenspeicher – der zweite Besuch kommt ohne Leitung aus.
// Jede Adresse trägt ?v=<Version>; eine neue Version bekommt einen neuen Cache, der alte wird beim Aktivieren gelöscht.
self.addEventListener('message', (e) => {
  const urls = e.data && Array.isArray(e.data.merken) ? e.data.merken : null;
  if (!urls) return;
  e.waitUntil(caches.open(CACHE).then((c) => Promise.all(urls.map((u) => {
    let url; try { url = new URL(u, self.location.href); } catch (x) { return null; }
    if (url.origin !== self.location.origin || !/\/(welt|bild)\//.test(url.pathname)) return null;
    return c.match(url.href).then((hit) => hit || fetch(url.href).then((res) => (res && res.ok ? c.put(url.href, res) : null))).catch(() => null);
  }))));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const fest = /\/(welt|bild)\//.test(url.pathname) && !/\.html$/.test(url.pathname);
  if (fest) {
    // Welt-Dateien: aus dem Zwischenspeicher, sonst laden und merken (beim zweiten Besuch sofort da)
    // Streikt der Zwischenspeicher (voller Speicher, privates Fenster), geht die Anfrage einfach ans Netz – der Service
    // Worker darf nie der Grund sein, dass etwas nicht lädt.
    e.respondWith((async () => {
      let c = null;
      try { c = await caches.open(CACHE); const hit = await c.match(req); if (hit) return hit; } catch (x) { c = null; }
      const res = await fetch(req);
      if (c && res && res.ok) { try { c.put(req, res.clone()).catch(() => {}); } catch (x) { /* dann ohne Merken */ } }
      return res;
    })());
    return;
  }
  // HTML, Unterseiten, Rechtstexte, stil.css: erst das Netz (nie veraltet), bei Ausfall der Zwischenspeicher
  e.respondWith(fetch(req).then((res) => {
    if (res && res.ok) { const kopie = res.clone(); caches.open(CACHE).then((c) => c.put(req, kopie)).catch(() => {}); }   // gleich kopieren: später ist der Inhalt schon gelesen
    return res;
  }).catch(() => caches.match(req).then((hit) => hit || Response.error())));
});
