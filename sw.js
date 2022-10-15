const CACHE_STATIC_NAME = 'static-v2';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';
const CACHE_DYNAMIC_LIMIT = 50;



@@ -47,29 +48,49 @@ self.addEventListener('fetch', e => {



    // 2 - Cache With Network Fallback
    const respuesta = caches.match(e.request).then(res => {
        if (res) return res;

        // No existe el archivo 
        // tengo que ir a la web
        console.log('No existe', e.request.url);
    // 3 - Network with cache fallback

        return fetch(e.request)
            .then(newResp => {

                caches.open(CACHE_DYNAMIC_NAME).
                then(cache => {
                    cache.put(e.request, newResp);
                    limpiarCache(CACHE_DYNAMIC_NAME, 5);
                });
                return newResp.clone();
    const respuesta = fetch(e.request).then(res => {
        if (!res) return caches.match(e.request);
        console.log('Fetch', res);
        caches.open(CACHE_DYNAMIC_NAME)
            .then(cache => {
                cache.put(e.request, res);
                limpiarCache(CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT);
            });

        return res.clone();
    }).catch(err => {
        return caches.match(e.request);
    });

    e.respondWith(respuesta);


    e.respondWith(respuesta);
    // 2 - Cache With Network Fallback
    // const respuesta = caches.match(e.request).then(res => {
    //     if (res) return res;

    //     // No existe el archivo 
    //     // tengo que ir a la web
    //     console.log('No existe', e.request.url);

    //     return fetch(e.request)
    //         .then(newResp => {

    //             caches.open(CACHE_DYNAMIC_NAME).
    //             then(cache => {
    //                 cache.put(e.request, newResp);
    //                 limpiarCache(CACHE_DYNAMIC_NAME, 5);
    //             });
    //             return newResp.clone();
    //         });
    // });



    // e.respondWith(respuesta);
