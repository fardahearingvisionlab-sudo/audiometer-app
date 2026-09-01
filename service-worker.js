const CACHE_NAME = 'audiometry-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
  // Tambahkan nama file CSS atau gambar statis lainnya di sini jika ada
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});