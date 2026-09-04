const CACHE_NAME = 'annur-academy-cache-v6'; // Bumped to bust stale cache and update new logo
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json?v=2',
  '/favicon.png?v=2',
  '/icon-192.png?v=2',
  '/icon-512.png?v=2'
];

self.addEventListener('install', (event) => {
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', (event) => {
  // Delete old caches when a new version of the service worker is activated
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Tell the active service worker to take control of the page immediately
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Do not intercept API requests or non-GET requests
  if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
    return;
  }

  // Network-first strategy for all requests
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If we got a valid response, return it
        return response;
      })
      .catch(() => {
        // If the network fails (e.g. offline), fallback to cache
        return caches.match(event.request).then((cachedResponse) => {
          return cachedResponse || caches.match('/index.html');
        });
      })
  );
});

// ── পুশ নোটিফিকেশন রিসিভার ──
self.addEventListener('push', function (event) {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: 'নতুন আপডেট', body: event.data ? event.data.text() : '' };
  }

  const title = data.title || 'নতুন আপডেট';
  const options = {
    body: data.body || 'মাদ্রাসা থেকে একটি নতুন আপডেট এসেছে।',
    icon: data.icon || '/icon-192x192.png',
    badge: data.badge || '/icon-192x192.png',
    data: { url: data.url || '/' },
    vibrate: [100, 50, 100],
    requireInteraction: false,
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// নোটিফিকেশনে ক্লিক করলে ওয়েবসাইট খুলে যাবে
self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  const url = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
