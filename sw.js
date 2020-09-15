// /*self.addEventListener('install', function() {
//   console.log('Install!');
// });
// self.addEventListener("activate", event => {
//   console.log('Activate!');
// });
// self.addEventListener('fetch', function(event) {
//   console.log('Fetch!', event.request);
// });*/
// self.addEventListener('fetch', function(event) {});
// var CACHE_VERSION = 1;

// // Shorthand identifier mapped to specific versioned cache.
// var CURRENT_CACHES = {
//   font: 'font-cache-v' + CACHE_VERSION
// };

// self.addEventListener('activate', function(event) {
//   var expectedCacheNames = Object.values(CURRENT_CACHES);

//   // Active worker won't be treated as activated until promise
//   // resolves successfully.
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.map(function(cacheName) {
//           if (!expectedCacheNames.includes(cacheName)) {
//             console.log('Deleting out of date cache:', cacheName);
            
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   console.log('Handling fetch event for', event.request.url);

//   event.respondWith(
    
//     // Opens Cache objects that start with 'font'.
//     caches.open(CURRENT_CACHES['font']).then(function(cache) {
//       return cache.match(event.request).then(function(response) {
//         if (response) {
//           console.log('Found response in cache:', response);

//           return response;
//         }

//         console.log('Fetching request from the network');

//         return fetch(event.request).then(function(networkResponse) {
//           cache.put(event.request, networkResponse.clone());

//           return networkResponse;
//         });
//       }).catch(function(error) {
        
//         // Handles exceptions that arise from match() or fetch().
//         console.error('Error in fetch handler:', error);

//         throw error;
//       });
//     })
//   );
// });

// self.addEventListener('activate', (event) => {
//   var cacheKeeplist = ['v2'];

//   event.waitUntil(
//     caches.keys().then((keyList) => {
//       return Promise.all(keyList.map((key) => {
//         if (cacheKeeplist.indexOf(key) === -1) {
//           return caches.delete(key);
//           console.log('Fetching request from the network bsba');
//         }
//       }));
//     })
//   );
//});