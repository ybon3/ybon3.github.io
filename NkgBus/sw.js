self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('cat-store').then((cache) => cache.addAll([
      '/NkgBus/',
      '/NkgBus/index.html',
      '/NkgBus/index.js',
      '/NkgBus/icon/bus-icon.png',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});