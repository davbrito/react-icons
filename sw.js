if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,a,n)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+c.slice(1)};return Promise.all(a.map(c=>{switch(c){case"exports":return s;case"module":return i;default:return e(c)}})).then(e=>{const c=n(...e);return s.default||(s.default=c),s})}))}}define("./sw.js",["./workbox-d8fc897c"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"gOZkidBXGXDwW5x_31mc1"},{url:"/_next/static/chunks/13.430e3d39a762f90e38cd.js",revision:"6a3551c338abfda28be2e9399e892965"},{url:"/_next/static/chunks/14.9f0cbc68f387832ac18d.js",revision:"1b7eca1f35b793e6c2b1a38bdd58a5ad"},{url:"/_next/static/chunks/15.4ab70624c6d3d90d2c7d.js",revision:"b9aca229a6d1905602fbe12f0f48fc85"},{url:"/_next/static/chunks/16.9a7c1336969bdfb594c3.js",revision:"c5d9ef28e472fab313b7eaf6ae24c474"},{url:"/_next/static/chunks/17.f756ee24e398b8b1c6f2.js",revision:"81b6910e3f447be37e5eb9d20e231de9"},{url:"/_next/static/chunks/18.30151f4a1b9719cd6def.js",revision:"b8d0dcfe8b2285db8698f0cd67853b82"},{url:"/_next/static/chunks/19.a548b6ddfeb5101bfaa3.js",revision:"768e5cbb01b08bab6f02b350dd0492df"},{url:"/_next/static/chunks/1d7de3dbcee8cc0ba1441789490f57b5dbab48f4.4b70b204bcf6fcae5ab7.js",revision:"8400a4815b4feb84a739564c9f71992c"},{url:"/_next/static/chunks/20.646780a75e6797184c20.js",revision:"a2f70945df101db4d341aec64039098c"},{url:"/_next/static/chunks/22.45334a6718ffeef8b2d3.js",revision:"cd9d4cef8691c22b353aa745f3fd4adb"},{url:"/_next/static/chunks/23.516c2f386db7660dd622.js",revision:"c866bc3df71df1de248321800d96c507"},{url:"/_next/static/chunks/24.efaaa7eb00a5cf72af9f.js",revision:"8cd9cb6dd7b2a043a28c39587cd37b54"},{url:"/_next/static/chunks/25.8a8b6090e2cc3026af98.js",revision:"0d937e6f206f45e1e3605c6af690b0b2"},{url:"/_next/static/chunks/26.0bb29948d1bc9b7580b8.js",revision:"1d8519f3f6000aa93d04728a5df398d0"},{url:"/_next/static/chunks/27.a3d776d67bd086fd74ad.js",revision:"cece369b676a1b5e5a80507bf02ce730"},{url:"/_next/static/chunks/28.4fa666201c97ecd5f286.js",revision:"68aacddfcaf38ce4f9857df4d3e54d50"},{url:"/_next/static/chunks/29.508cfa8a82ad299570f3.js",revision:"47b827f5fa62d0b74f35a5fc92439596"},{url:"/_next/static/chunks/31.7c3a0a154c97d03f5fee.js",revision:"8ed7803c922ec7c51c740dce82db64b9"},{url:"/_next/static/chunks/32.f04046cf30300e2c632e.js",revision:"69a9dc8ec0409a4a19b365c7f6f68c79"},{url:"/_next/static/chunks/33.b74b3a51e0edab96dfbc.js",revision:"98735d069cf142dfb7eee85242fe5c69"},{url:"/_next/static/chunks/69d7065190913d5751c571ac51064f7fff884c89.2f3b834fcecdc28986c3.js",revision:"2cd722cf87546110189f1615970ae235"},{url:"/_next/static/chunks/6e718a903d2b2e8e5adbb27243021d89c3092835.fd6b45b413f9c2e52e39.js",revision:"4c2cb3be26ada66dbf866f1a1fe96a54"},{url:"/_next/static/chunks/aa7211ef10ddeeb2b5b69fd333f2710cede69d3c.3cb14bfc30eb2a1c4e53.js",revision:"0e686842f1e4b09c8c8b0d009f7f30d3"},{url:"/_next/static/chunks/framework.cd0bada2e78bd80de574.js",revision:"01280601953dd03ceb505456ad964e7a"},{url:"/_next/static/chunks/main-6796417efdafacfa0c8f.js",revision:"18919948144cb12367c0fbeb6851caef"},{url:"/_next/static/chunks/pages/_app-cc6dc914f8549b1f5aad.js",revision:"ed409a0850a70739ed5c84b49df3d4f4"},{url:"/_next/static/chunks/pages/_error-9f9ba3ddda95c9822910.js",revision:"d62f1f1bf39bb3067d60a608278e8849"},{url:"/_next/static/chunks/pages/icons-0baf8133349b9d4de7d5.js",revision:"b4acb74d1f8a3f46c11653d50b3cf34c"},{url:"/_next/static/chunks/pages/index-bf7d6bed115e2e9c69ec.js",revision:"18a340e51edb62b0660c089e7cbc5cf1"},{url:"/_next/static/chunks/pages/search-c88c09a2e92a87397558.js",revision:"5e67d55d59348642754d59982a14f422"},{url:"/_next/static/chunks/polyfills-8767c02c7b67810a8144.js",revision:"94efb455366e067bdbf17c784da05738"},{url:"/_next/static/chunks/webpack-545c1f8e0aed53a2199d.js",revision:"2b2a1433864dba11e09beb7a31556114"},{url:"/_next/static/css/4e6a9d743d01556b21d1.css",revision:"5035d7b3caf390c1103e3308e0093cf5"},{url:"/_next/static/gOZkidBXGXDwW5x_31mc1/_buildManifest.js",revision:"5a03182ac65a2095626d17794c4aeffc"},{url:"/_next/static/gOZkidBXGXDwW5x_31mc1/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/brand-icon.svg",revision:"33455d33822cd86a7b2e7c12be2688f6"},{url:"/favicon.png",revision:"217bba9d985038b5db0f675aadef1058"},{url:"/icons/icon-128x128.png",revision:"61141052122e82b0e4c106b6478053f7"},{url:"/icons/icon-144x144.png",revision:"d7041f383ef13f304ce0c8222c768687"},{url:"/icons/icon-152x152.png",revision:"e892614a0964881052f52449818355d2"},{url:"/icons/icon-192x192.png",revision:"09b80496ac709b0fceef80e2c89a5558"},{url:"/icons/icon-384x384.png",revision:"065ce43c918fae1157d9fa6757bc7685"},{url:"/icons/icon-512x512.png",revision:"c4642057e4afcfa6776064b99ae43a13"},{url:"/icons/icon-72x72.png",revision:"5fedad82387f7b30c250134c5a394688"},{url:"/icons/icon-96x96.png",revision:"2c3ea4bbe99ae01388b3dcd30b5d053d"},{url:"/manifest.json",revision:"95cea107ce25d574dcfc372c8d72408e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
