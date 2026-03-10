const CACHE_NAME = 'yadro-kesh-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// O'rnatish bosqichi
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Tarmoq so'rovlarini ushlab qolish (Offline ishlash uchun)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Keshda topilsa qaytaradi, bo'lmasa tarmoqdan yuklaydi
        return response || fetch(event.request);
      })
  );
});
