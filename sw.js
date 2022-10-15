

self.addEventListener('fetch', event => {
    //const offlineResp = new Response(`
    
    //Bienvenido a mi pagina web

   // Disculpa, pero para usarla, nevcesitas internet
    //`);

//const offlineResp = new Response(`
   // <!DOCTYPE html>
//<html lang="en">
//<head>
   // <meta charset="UTF-8">
    //<meta name="viewport" content="width=device-width, initial-scale=1.0">
    //<meta http-equiv="X-UA-Compatible" content="ie=edge">
    //<title>Mi PWA</title>

    //</head>
    //<body class="container p-3>

    //<h1>Offline Mode</h1>

    //</body>
   // </html>

//</head>
//<body class="container p-3">
    
    
    // `, {
       // headers:{
            //'Content-Type':'text/html'
       // }
     //});


     self.addEventListener('install', e => {
      const cacheProm = caches.open('cache-1').then(cache => {
          cache.addAll([
              '/index.html',
              '/css/style.css',
              '/img/main.jpg',
              'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
              '/js/app.js'
          ]);
      });
  
      e.waitUntil(cacheProm);
  });

