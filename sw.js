
self.addEventListener('install', e => {
   const cacheProm = caches.open('cache-1').then(cache => {
       cache.addAll([
           '/',
           '/index.html',
           '/css/style.css',
           '/img/main.jpg',
self.addEventListener('install', e => {
   });

   e.waitUntil(cacheProm);
});




self.addEventListener('fetch', e => {






   // 1 - Cache Only
   e.respondWith(caches.match(e.request));

});
