/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-afac4cd2'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "pwa-maskable-512x512.png",
    "revision": "272203d374fbf98e4cd9719b77eb4808"
  }, {
    "url": "pwa-512x512.png",
    "revision": "b888f203c6ac7d384313f08e92570b9e"
  }, {
    "url": "pwa-192x192.png",
    "revision": "d708df8bd842dc62bde9f15d2af31987"
  }, {
    "url": "index.html",
    "revision": "b94cc4b55d8fb520fec32280c3a0f795"
  }, {
    "url": "icon.svg",
    "revision": "9dd06203b375f3ad0b0f7c9beae685d5"
  }, {
    "url": "favicon.png",
    "revision": "707861fdda03c000092768d6bbab07ea"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "97d2024fed05cab6d36abbc5533da5b5"
  }, {
    "url": "assets/workbox-window.prod.es5-Bd17z0YL.js",
    "revision": null
  }, {
    "url": "assets/index-m7al1nGt.css",
    "revision": null
  }, {
    "url": "assets/index-DE7-MbOX.js",
    "revision": null
  }, {
    "url": "apple-touch-icon.png",
    "revision": "97d2024fed05cab6d36abbc5533da5b5"
  }, {
    "url": "favicon.png",
    "revision": "707861fdda03c000092768d6bbab07ea"
  }, {
    "url": "icon.svg",
    "revision": "9dd06203b375f3ad0b0f7c9beae685d5"
  }, {
    "url": "manifest.json",
    "revision": "98c51915498b50d6be3736c9884a71af"
  }, {
    "url": "manifest.webmanifest",
    "revision": "98c51915498b50d6be3736c9884a71af"
  }, {
    "url": "pwa-192x192.png",
    "revision": "d708df8bd842dc62bde9f15d2af31987"
  }, {
    "url": "pwa-512x512.png",
    "revision": "b888f203c6ac7d384313f08e92570b9e"
  }, {
    "url": "pwa-maskable-512x512.png",
    "revision": "272203d374fbf98e4cd9719b77eb4808"
  }, {
    "url": "manifest.webmanifest",
    "revision": "9efe70a9edeb1e1a669f2f65d77ea85d"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html")));
  workbox.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "google-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');
  workbox.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i, new workbox.CacheFirst({
    "cacheName": "gstatic-fonts-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 10,
      maxAgeSeconds: 31536000
    }), new workbox.CacheableResponsePlugin({
      statuses: [0, 200]
    })]
  }), 'GET');

}));
