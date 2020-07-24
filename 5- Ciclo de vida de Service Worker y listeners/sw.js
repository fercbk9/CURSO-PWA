// Ciclo de vida del SW
self.addEventListener("install", (event) => {
  console.log("Instalando service Worker");
  const instalacion = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Instalaciones Terminadas");
    }, 1);
    self.skipWaiting();
    resolve();
  });
  event.waitUntil(instalacion);
});

//Activate
self.addEventListener("activate", (event) => {
  console.log("Service worker activo");
});

//Fetch Manejo de peticiones HTTP
self.addEventListener("fetch", (event) => {
  //console.log("SW:", event.request.url);
  /*if (event.request.url.includes("reqres.in")) {
    const resp = new Response(`{ok: false, mensaje: 'jajaja'}`);
    event.respondWith(resp);
  }*/
});

//SYNC: recuperamos la conexion a internet
self.addEventListener("sync", (event) => {
  console.log("Tenemos conexion");
  console.log(event);
  console.log(event.tag);
});

//PUSH: manejar las push notifications
self.addEventListener("push", (event) => {
  console.log("Notificacion recibida");
});
