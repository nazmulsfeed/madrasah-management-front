const CACHE_NAME = 'annur-academy-cache-v20'; // Guaranteed fresh navigation & no stale HTML caching
const urlsToCache = [
  '/manifest.json?v=3',
  '/favicon.png?v=3',
  '/icon-192.png?v=3',
  '/icon-512.png?v=3'
];

self.addEventListener('install', (event) => {
  // Force the waiting service worker to become the active service worker immediately
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', (event) => {
  // Delete all older caches when a new version of the service worker is activated
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Purging outdated cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Tell the active service worker to take control of all open pages immediately
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Do not intercept API requests or non-GET requests
  if (event.request.method !== 'GET' || event.request.url.includes('/api/')) {
    return;
  }

  // Navigation requests (HTML documents):
  // ALWAYS fetch fresh from network so Vite chunk hashes match current deployment.
  // Never serve stale cached HTML on page loads or route refreshes.
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        // Only if network is completely offline, attempt fallback
        return caches.match('/index.html') || caches.match('/');
      })
    );
    return;
  }

  // Static assets (hashed JS, CSS, images):
  // Network first with cache fallback
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Cache valid static responses
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
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
