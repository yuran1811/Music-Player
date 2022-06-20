self.addEventListener('install', (e) => {
	e.waitUntil(
		caches
			.open('m9r-s12k-PWA-ver1')
			.then((cache) =>
				cache.addAll([
					'/Music-Player/',
					'/Music-Player/index.html',
					'/Music-Player/src/css/index.css',
					'/Music-Player/src/img/Logo.png',
					'/Music-Player/src/js/render.js',
					'/Music-Player/src/js/script.js',
				])
			)
	);
});

self.addEventListener('fetch', (e) => {
	e.respondWith(
		caches
			.match(e.request)
			.then((response) => response || fetch(e.request))
			.catch(console.log)
	);
});
