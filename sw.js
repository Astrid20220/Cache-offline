  // 3 - Network with cache fallback
    //4 - Cache with network update
    // Rendimiento es critico
    // Siempre estarn a un paso atras

    if (e.request.url.includes('bootstrap')) {
      return e.respondWith(caches.match(e.request));
  }

  const respuesta = fetch(e.request).then(res => {
      if (!res) return caches.match(e.request);
      console.log('Fetch', res);
      caches.open(CACHE_DYNAMIC_NAME)
          .then(cache => {
              cache.put(e.request, res);
              limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT);
          });
  const respuesta = caches.open(CACHE_STATIC_NAME).then(cache => {
      fetch(e.request).then(newRes =>
          cache.put(e.request, newRes));

      return res.clone();
  }).catch(err => {
      return caches.match(e.request);
      return cache.match(e.request);
  });

  e.respondWith(respuesta);




  //5 - Cache & Network Race

  const respuesta = new Promise((resolve, reject) => {

   let rechazada = false;
   const falloUnaVez = () => {
       if (rechazada) {
           if (/\.(png|jpg)$/i.test(e.request.url)) {
               resolve(caches.match('/img/no-image.jpg'));
           } else {
               reject('No se encontro respuesta');
           }
       } else {
           rechazada = true;
       }
   };

   fetch(e.request).then(res => {
       res.ok ? resolve(res) : falloUnaVez();
   }).catch(falloUnaVez);

   caches.match(e.request).then(res => {
       res ? resolve(res) : falloUnaVez();
   }).catch(falloUnaVez);

});


e.respondWith(respuesta);



//4 - Cache with network update
// Rendimiento es critico
// Siempre estarn a un paso atras

if (e.request.url.includes('bootstrap')) {
   return e.respondWith(caches.match(e.request));
}
// if (e.request.url.includes('bootstrap')) {
//     return e.respondWith(caches.match(e.request));
// }

const respuesta = caches.open(CACHE_STATIC_NAME).then(cache => {
   fetch(e.request).then(newRes =>
       cache.put(e.request, newRes));
// const respuesta = caches.open(CACHE_STATIC_NAME).then(cache => {
//     fetch(e.request).then(newRes =>
//         cache.put(e.request, newRes));

   return cache.match(e.request);
});
//     return cache.match(e.request);
// });

e.respondWith(respuesta);
// e.respondWith(respuesta);


