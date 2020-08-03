const CACHE_NAME_STATIC = "static-v2";
const CACHE_NAME_DYNAMIC = "dynamic-v1";
const CACHE_NAME_INMUTABLE = "inmutable-v1";

function LimpiarCache(cacheName, numeroItems) {
  caches.open(cacheName).then((cache) => {
    return cache.keys().then((keys) => {
      if (keys.length > numeroItems)
        cache.delete(keys[0]).then(LimpiarCache(cacheName, numeroItems));
    });
  });
}

self.addEventListener("install", (event) => {
  const cacheProm = caches.open(CACHE_NAME_STATIC).then((cache) => {
    return cache.addAll([
      "/",
      "/index.html",
      "/css/style.css",
      "/img/main.jpg",
      "/js/app.js",
    ]);
  });

  const cacheInmutable = caches.open(CACHE_NAME_INMUTABLE).then((cache) => {
    return cache.add(
      "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    );
  });

  event.waitUntil(Promise.all([cacheProm, cacheInmutable]));
});

self.addEventListener("fetch", (event) => {
  //1-. Cache Only
  //event.respondWith(caches.match(event.request));

  //2-. Cache with network fallback.
  const respCache = caches.match(event.request).then((resp) => {
    if (resp) return resp;
    console.log("No existe", event.request.url);
    return fetch(event.request).then((newresp) => {
      caches.open(CACHE_NAME_DYNAMIC).then((cache) => {
        cache.put(event.request, newresp);
        LimpiarCache(CACHE_NAME_DYNAMIC, 2);
      });
      return newresp.clone();
    });
  });
  event.respondWith(respCache);
});
