
self.addEventListener('install', e => {
   const cacheProm = caches.open('cache-1').then(cache => {
      const cacheProm = caches.open('CACHE_NAME').then(cache => {
       cache.addAll([

           '/',
           '/index.html',
          
self.addEventListener('install', e => {
   });

   e.waitUntil(cacheProm);
});

 // 2 - Cache With Network Fallback
 const respuesta = caches.match(e.request).then(res => {
   if (res) return res;

   // No existe el archivo 
   // tengo que ir a la web
   console.log('No existe', e.request.url);

   return fetch(e.request)
       .then(newResp => {

           caches.open(CACHE_NAME).
           then(cache => {
               cache.put(e.request, newResp);
           });
           return newResp.clone();
       });
});



e.respondWith(respuesta);


self.addEventListener('fetch', e => {






   // 1 - Cache Only
   e.respondWith(caches.match(e.request));

});
