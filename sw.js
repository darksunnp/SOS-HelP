const CACHE = "morse-v2";

const FILES = [
    "./",
    "index.html",
    "app.js",
    "morse.js",
    "style.css",
    "manifest.webmanifest"
]

async function saveFiles() {
  const cache = await caches.open(CACHE);
  await cache.addAll(FILES);
}

async function deleteOldCaches() {
  const names = await caches.keys();
  for (const name of names) {
    if (name !== CACHE){
        await caches.delete(name)
    }
  }
}

async function cacheFirst(request) {
    const cached = await caches.match(request);
    if (cached !== undefined){
        return cached
    }
    else{
        return fetch(request)
    }    
}

self.addEventListener("install", function (event) {
  event.waitUntil(saveFiles());
});

self.addEventListener("activate", function (event) {
  event.waitUntil(deleteOldCaches());
});

self.addEventListener("fetch", function (event) {
  event.respondWith(cacheFirst(event.request));
});