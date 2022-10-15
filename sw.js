
const CACHE_NAME = 'cache-1';

// const CACHE_NAME = 'cache-1';
const CACHE_STATIC_NAME = 'static-v1';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';




self.addEventListener('install', e => {
   const cacheProm = caches.open('cache-1').then(cache => {
      const cacheProm = caches.open('CACHE_NAME').then(cache => {
       cache.addAll([

           '/',
           '/index.html',
          
self.addEventListener('install', e => {
   });

   e.waitUntil(cacheProm);
   const cacheInmutable = caches.open(CACHE_INMUTABLE_NAME).then(cache => cache.add('https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'));

   e.waitUntil(Promise.all([cacheProm, cacheInmutable]));
});




e.respondWith(respuesta);


self.addEventListener('fetch', e => {






   // 1 - Cache Only
   e.respondWith(caches.match(e.request));

});
