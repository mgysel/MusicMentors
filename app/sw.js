// Cache versions I don't want to delete
var staticCacheName = 'mm-v1';

// Add Install event listener to the service worker
this.addEventListener('install', function(event) {
	// Make sure service worker doesn't install until cache is created successfully
	event.waitUntil(
		// Create new cache called the value of staticCacheName
		caches.open(staticCacheName).then(function(cache) {
			// urls of resources to cache
			return cache.addAll([
				'/',
				'../views/index.html',
				'../views/searchartists.html',
				'../views/hyroglifics.html',
				'../scripts/controllers/index.js',
				'../scripts/controllers/searchartists.js',
				'../scripts/controllers/hyroglifics.js',
				'../data/music-artists.json',
				'../images/index.jpg',
				'../images/search-artists.jpg',
				'../images/hyroglifics.jpg',
				'../images/sonder.jpg',
				'../images/shlohmo.jpg',
				'../styles/index.css',
				'../styles/search-results.css',
				'../styles/artist1.css'
			]);
		})
	);
});

// Respond to requests, by first hijacking the request.
this.addEventListener('fetch', function(event) {
	// respond to hijacked requests
	event.respondWith(
		// respond with the cached resource that matches the request.
		caches.match(event.request).then(function(response) {
			// return the response if found, or request from network if not.
			return response || fetch(event.request);
		})
	);
});