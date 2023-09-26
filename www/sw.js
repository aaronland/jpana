const cache_name = 'jpana-v0.0.3';

const app_files = [
    // HTML
    "./index.html",
    
    // CSS
    "./css/bootstrap.min.css",
    "./css/aaronland.jpana.css",
    
    // Javascript

    "./javascript/aaronland.jpana.chart.js",
    "./javascript/aaronland.jpana.init.js",
    "./javascript/aaronland.jpana.tables.js",
    "./javascript/aaronland.jpana.offline.js",    

    // Javascript service workers
    "./sw.js"    
];

self.addEventListener("install", (e) => {

    console.log("SW installed", cache_name);

    e.waitUntil((async () => {
	const cache = await caches.open(cache_name);
	// console.log('[Service Worker] Caching all: app shell and content');
	await cache.addAll(app_files);
    })());
});

addEventListener("activate", (event) => {
    console.log("SW activate", cache_name);
});

addEventListener("message", (event) => {
    // event is a MessageEvent object
    console.log(`The service worker sent me a message: ${event.data}`);
  });


self.addEventListener('fetch', (e) => {

    // https://developer.mozilla.org/en-US/docs/Web/API/Cache
    
    e.respondWith((async () => {

	console.log("fetch", cache_name, e.request.url);
	
	const cache = await caches.open(cache_name);
	const r = await cache.match(e.request);
	
	console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
	
	if (r) {
	    console.log("return cache", e.request.url);
	    return r;
	}
	
	const response = await fetch(e.request);
	
	console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
	cache.put(e.request, response.clone());
	
	return response;
    })());
    
});
