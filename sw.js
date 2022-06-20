const cacheName = 'm9r-s12k-PWA-ver1';
const appShellFiles = ['/Music-Player/index.html', '/Music-Player/src/js/script.js', '/Music-Player/src/js/render.js', '/Music-Player/src/css/index.css', '/Music-Player/src/img/Logo.png'];

self.addEventListener('install', (e) => {
	console.log('[Service Worker] Install');
	e.waitUntil(
		(async () => {
			const cache = await caches.open(cacheName);
			await cache.addAll(appShellFiles);
		})()
	);
});

self.addEventListener('fetch', (e) => {
	e.respondWith(
		(async () => {
			const r = await caches.match(e.request);
			if (r) return r;

			const response = await fetch(e.request);
			const cache = await caches.open(cacheName);

			console.log(`[Service Worker] : Fetching and caching new resource - ${e.request.url}`);

			cache.put(e.request, response.clone()).catch(console.log);

			return response;
		})()
	);
});
