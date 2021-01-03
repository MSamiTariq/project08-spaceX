let version = "v1";

//Cache Files
let cacheFiles = [
  '/',
  '/static/js/2.25230c5d.chunk.js',
  '/static/js/main.70c88f5a.chunk.js',
  '/static/media/spacex.ce94a25b.jpg',
  '/manifest.json',
  '/icon.jpg',
  '/images/icons-512.png',
  '/worker.js',
  "/index.html",
];

// Install Service Woker
self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(version).then((cache) => {
      return staticCache.addAll(cacheFiles);
    })
  );
});

// Activate Service Worker
self.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activate");
});

const options = {
  ignoreSearch: true,
  ignoreMethod: true,
  ignoreVary: true,
};
// Fetch Service Worker
self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request, options)
        .then((response) => {
          if (response) {
            return response || fetch.response;
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
    );
  }
});


