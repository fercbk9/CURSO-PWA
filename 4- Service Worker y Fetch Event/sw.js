/*self.addEventListener("fetch", (event) => {
  if (event.request.url.includes(".jpg")) {
    console.log(event.request.url);
    let fotoReq = fetch(event.request.url);
    event.respondWith(fotoReq);
  }
});*/
/*self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("style.css")) {
    let respuesta = new Response(
      `
      body{
        background-color: red !important;
        color: pink;
      }
    `,
      {
        headers: {
          "Content-Type": "text/css",
        },
      }
    );
    event.respondWith(respuesta);
  }
});
self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("main.jpg")) {
    event.respondWith(fetch("/img/main-patas-arriba.jpg"));
  }
});
*/
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).then((resp) => {
      console.log(resp);
      if (!resp.ok) return fetch("img/main.jpg");
      else return resp;
    })
  );
});
