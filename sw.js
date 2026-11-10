const V='kfm-v8-liquidglass-search-20261110';
const FILES=['./','index.html','admin.html','manifest.webmanifest','favicon.png','icon-v3-48.png','icon-v3-96.png','icon-v3-180.png','icon-v3-192.png','icon-v3-512.png','icon-v3-maskable-192.png','icon-v3-maskable-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>c.addAll(FILES).catch(()=>{})))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
 const r=e.request;
 if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 // Pages: network first so updates (and subscription changes) apply immediately; cache when offline.
 if(r.mode==='navigate'){
  e.respondWith(fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res}).catch(()=>caches.match(r).then(h=>h||caches.match('index.html'))));
  return;
 }
 e.respondWith(caches.match(r).then(hit=>{const net=fetch(r).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res}).catch(()=>hit);return hit||net}));
});
