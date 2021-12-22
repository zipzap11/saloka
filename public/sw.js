/* eslint-disable no-restricted-globals */
// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (e) => {
  // console.log("[service worker] installing service worker = ", e);
});

self.addEventListener("activate", (e) => {
  // console.log("[service worker] activating service worker = ", e);
});

self.addEventListener("fetch", (e) => {
  // console.log("[service worker] fetching", e);
  e.respondWith(fetch(e.request));
});
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/sw.js")
//     .then(() => {
//       console.log("serviceWorker registered");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
