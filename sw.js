self.addEventListener('install', (e) => {
    console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
    // A simple pass-through to satisfy Chrome's PWA install requirement
    e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
