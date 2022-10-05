

self.addEventListener('fetch', event => {
    const offlineResp = new Response(`
    
    Bienvenido a mi pagina web

    Disculpa, pero para usarla, nevcesitas internet
    `);


    const resp = fetch(event.request)
                     .catch( () => offlineResp);

    event.respondWith(resp);
});


