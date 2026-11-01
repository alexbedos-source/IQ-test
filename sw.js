/* Offline support.
   - Script and style URLs carry ?v=<version> (set in index.html), so an update can never mix old and new files.
   - Network first: when online, always load the latest files and refresh the cache; fall back to the cache offline.
   Bump V here and the ?v= numbers in index.html together on every change (window.IQ_V there must match). */
const V = '13';
const CACHE = 'iq-v' + V;
const FILES = ['iq-bank.js', 'physics.js', 'interview.js', 'drill.js', 'learn.js', 'tools.js', 'alevel.js', 'videos.js', 'mistakes.js', 'backup.js', 'practicals.js', 'scratch.js'];
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'].concat(FILES.map(f => f + '?v=' + V));

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const res = await fetch(req, { cache: 'no-cache' });
      if (res.ok) cache.put(req, res.clone());
      return res;
    } catch (err) {
      const hit = await cache.match(req) || (req.mode === 'navigate' ? await cache.match('index.html') : null);
      if (hit) return hit;
      throw err;
    }
  })());
});
