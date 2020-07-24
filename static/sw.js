importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.630e87a.js",
    "revision": "861e61e1c1bb2b2cb19fef7fa9a3ea37"
  },
  {
    "url": "/_nuxt/app.e0122b0.css",
    "revision": "2d299cb461e73c676f970adcccd2cda8"
  },
  {
    "url": "/_nuxt/commons/app.e1b1911.js",
    "revision": "665e52fbd95d0451929d0b138faf1810"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.d190d21.js",
    "revision": "5a50547a618ced83e865e03ec8e6f116"
  },
  {
    "url": "/_nuxt/pages/categories.a8f9d54.js",
    "revision": "4c079ce9d9e5aa5cf898ce0cf24b4568"
  },
  {
    "url": "/_nuxt/pages/categories.fc6cde2.css",
    "revision": "570a46bcac73e9592d39654829f3ca8a"
  },
  {
    "url": "/_nuxt/pages/category/_slug.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/category/_slug.d58a1e1.js",
    "revision": "cfdc9cb8b6ba0d72cb34851c39d230d3"
  },
  {
    "url": "/_nuxt/pages/index.464d25b.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/pages/index.d7abdf8.js",
    "revision": "28b0ad1cb32d4d99d0d9151a0bac6071"
  },
  {
    "url": "/_nuxt/pages/page/_slug.a45134d.js",
    "revision": "4eb7da990eaa08a8c43e61edbe1f21c5"
  },
  {
    "url": "/_nuxt/runtime.4382be0.js",
    "revision": "237848c91cb80ccd41c43a27c677a337"
  },
  {
    "url": "/_nuxt/vendors~app.673206f.css",
    "revision": "3e3569ee1fdeca689c8b42a2f26636bd"
  },
  {
    "url": "/_nuxt/vendors~app.b32158b.js",
    "revision": "c950dbddad5b5c1d7c39d97bc009655c"
  }
], {
  "cacheId": "bael-cms-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
