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




  // 3 - Network with cache fallback

  // const respuesta = fetch(e.request).then(res => {
  //     if (!res) return caches.match(e.request);
  //     console.log('Fetch', res);
  //     caches.open(CACHE_DYNAMIC_NAME)
  //         .then(cache => {
  //             cache.put(e.request, res);
  //             limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT);
  //         });

  //     return res.clone();
  // }).catch(err => {
  //     return caches.match(e.request);
  // });

  // e.respondWith(respuesta);


  // 2 - Cache With Network Fallback
  // const respuesta = caches.match(e.request).then(res => {
  //     if (res) return res;