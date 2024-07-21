const staticDevFamily = "dev-family-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/imagenes/foto1.jpg",
  "/imagenes/foto2.jpg",
  "/imagenes/foto3.jpg",
  "/imagenes/foto4.jpg",
  "/imagenes/foto5.jpg",
  "/imagenes/foto6.jpg",
  "/imagenes/foto7.jpg",
  "/imagenes/foto8.jpg",
  "/imagenes/foto9.jpg",
  "/imagenes/foto10.jpg",
  "/imagenes/foto11.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevFamily).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })