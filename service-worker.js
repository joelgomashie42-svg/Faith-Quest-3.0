const CACHE = 'faith-quest-v1';
const ASSETS = [
  'index.html','home.html','categories.html','books.html','levels.html','quiz.html','results.html','about.html',
  'css/style.css',
  'js/nav.js','js/splash.js','js/quiz.js','js/questions.js',
  'manifest.json',
  'images/icon-192.png','images/icon-512.png','images/faith-quest-icon.png'
];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e=> e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});
