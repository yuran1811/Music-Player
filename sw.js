const cacheName = 's12kPWA-ver1';
const appShellFiles = ['/index.html', '/src/js/script.js', '/src/js/render.js', '/src/css/index.css', '/src/img/Logo.png'];

self.addEventListener('install', (e) => {
	console.log('[Service Worker] Install');
	e.waitUntil(
		(async () => {
			const cache = await caches.open(cacheName);

			console.log('[Service Worker] Caching all: app shell and content');

			await cache.addAll(appShellFiles);
		})()
	);
});

self.addEventListener('fetch', (e) => {
	e.respondWith(
		(async () => {
			const r = await caches.match(e.request);

			console.log(`[Service Worker] Fetching resource: ${e.request.url}`);

			if (r) return r;

			const response = await fetch(e.request);
			const cache = await caches.open(cacheName);

			console.log(`[Service Worker] Caching new resource: ${e.request.url}`);

			cache.put(e.request, response.clone());
			return response;
		})()
	);
});

let deferredPrompt;

addEventListener('beforeinstallprompt', (e) => {
	e.preventDefault();

	deferredPrompt = e;

	const btnAdd = document.querySelector('.add-to-homescreen');
	btnAdd.style.display = 'block';

	btnAdd.addEventListener('click', (e) => {
		deferredPrompt.prompt();
		deferredPrompt.userChoice.then((result) => {
			if (result.outcome === 'accepted') console.log('User accept prompt');

			deferredPrompt = null;
		});
	});
});

addEventListener('appinstalled', (e) => {
	console.log('Installed');
});
