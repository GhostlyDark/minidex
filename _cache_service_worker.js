/*
	Cache Service Worker template by mrc 2019
	mostly based in:
	https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/basic/service-worker.js
	https://github.com/chriscoyier/Simple-Offline-Site/blob/master/js/service-worker.js
	https://gist.github.com/kosamari/7c5d1e8449b2fbc97d372675f16b566e	
	
	Note for GitHub Pages:
	there can be an unexpected behaviour (cache not updating) when site is accessed from
	https://user.github.io/repo/ (without index.html) in some browsers (Firefox)
	use absolute paths if hosted in GitHub Pages in order to avoid it
	also invoke sw with an absolute path:
	navigator.serviceWorker.register('/repo/_cache_service_worker.js', {scope: '/repo/'})
*/

var PRECACHE_ID='minidex';
var PRECACHE_VERSION='v2';
var PRECACHE_URLS=[
'hub.htm',
'manifest.json',

'b2w2.htm',
'bw.htm',
'dppt.htm',
'frlg.htm',
'gsc.htm',
'hgss.htm',
'letsgo.htm',
'rby.htm',
'rse.htm',
'sm.htm',
'swsh.htm',
'usum.htm',
'xy.htm',

'core/favicon192.png',
'core/header_common.png',
'core/header_gen1.png',
'core/icons_3ds.png',
'core/icons_letsgo.png',
'core/pokemon_header.png',
'core/pokemon_top.png',
'core/sprites_v1b.png',

'core/hub.js',
'core/locale.js',
'core/minidex_v1b.js',
'core/minidex_v1b.css',

'core/roboto.woff2',
'core/roboto-bold.woff2',
'core/robotomono.woff2',
'core/robotomono-bold.woff2',

'core/banner/b2w2.jpg',
'core/banner/bw.jpg',
'core/banner/dppt.jpg',
'core/banner/frlg.jpg',
'core/banner/gsc.jpg',
'core/banner/hgss.jpg',
'core/banner/letsgo.jpg',
'core/banner/oras.jpg',
'core/banner/rby.jpg',
'core/banner/rse.jpg',
'core/banner/sm.jpg',
'core/banner/swsh.jpg',
'core/banner/usum.jpg',
'core/banner/xy.jpg',

'core/qr/gen7_qr_magearna.png',
'core/qr/gen7_qr_pikachu_cap.png',

'core/swsh/swsh_wild_area_map.png',
'core/swsh/swsh_wild_area_map_es.png',
'core/swsh/swsh_dlc1_map.png',
'core/swsh/swsh_dlc2_map.png',

'core/data/encounters_gen1_rby.js',
'core/data/encounters_gen2_gsc.js',
'core/data/encounters_gen3_frlg.js',
'core/data/encounters_gen3_rse.js',
'core/data/encounters_gen4_dppt.js',
'core/data/encounters_gen4_hgss.js',
'core/data/encounters_gen5_b2w2.js',
'core/data/encounters_gen5_bw.js',
'core/data/encounters_gen6_oras.js',
'core/data/encounters_gen6_xy.js',
'core/data/encounters_gen7_letsgo.js',
'core/data/encounters_gen7_sm.js',
'core/data/encounters_gen7_usum.js',
'core/data/encounters_gen8_swsh.js',
'core/data/game_gen1_rby.js',
'core/data/game_gen2_gsc.js',
'core/data/game_gen3_frlg.js',
'core/data/game_gen3_rse.js',
'core/data/game_gen4_dppt.js',
'core/data/game_gen4_hgss.js',
'core/data/game_gen5_b2w2.js',
'core/data/game_gen5_bw.js',
'core/data/game_gen6_oras.js',
'core/data/game_gen6_xy.js',
'core/data/game_gen7_letsgo.js',
'core/data/game_gen7_sm.js',
'core/data/game_gen7_usum.js',
'core/data/game_gen8_swsh.js',
'core/data/learnsets_gen1.js',
'core/data/learnsets_gen2.js',
'core/data/learnsets_gen3.js',
'core/data/learnsets_gen4.js',
'core/data/learnsets_gen5.js',
'core/data/learnsets_gen6.js',
'core/data/learnsets_gen7.js',
'core/data/learnsets_gen7_letsgo.js',
'core/data/learnsets_gen8.js',
'core/data/more_info_gen1.js',
'core/data/more_info_gen2.js',
'core/data/more_info_gen3.js',
'core/data/more_info_gen4.js',
'core/data/more_info_gen5.js',
'core/data/more_info_gen6.js',
'core/data/more_info_gen7.js',
'core/data/more_info_gen8.js',
'core/data/pokemon_gen1.js',
'core/data/pokemon_gen2.js',
'core/data/pokemon_gen3.js',
'core/data/pokemon_gen4.js',
'core/data/pokemon_gen5.js',
'core/data/pokemon_gen6.js',
'core/data/pokemon_gen7.js',
'core/data/pokemon_gen7_letsgo.js',
'core/data/pokemon_gen8.js',

'core/svg/back.svg',
'core/svg/lang.svg'
];



// install event (fired when sw is first installed): opens a new cache
self.addEventListener('install', evt => {
	evt.waitUntil(
		caches.open('precache-'+PRECACHE_ID+'-'+PRECACHE_VERSION)
			.then(cache => cache.addAll(PRECACHE_URLS))
			.then(self.skipWaiting())
	);
});


// activate event (fired when sw is has been successfully installed): cleans up old outdated caches
self.addEventListener('activate', evt => {
	evt.waitUntil(
		caches.keys().then(cacheNames => {
			return cacheNames.filter(cacheName => (cacheName.startsWith('precache-'+PRECACHE_ID+'-') && !cacheName.endsWith('-'+PRECACHE_VERSION)));
		}).then(cachesToDelete => {
			return Promise.all(cachesToDelete.map(cacheToDelete => {
				console.log('delete '+cacheToDelete);
				return caches.delete(cacheToDelete);
			}));
		}).then(() => self.clients.claim())
	);
});


// fetch event (fired when requesting a resource): returns cached resource when possible
self.addEventListener('fetch', evt => {
	if(evt.request.url.startsWith(self.location.origin)){ //skip cross-origin requests
		evt.respondWith(
			caches.match(evt.request).then(cachedResource => {
				if (cachedResource) {
					return cachedResource;
				}else{
					return fetch(evt.request);
				}
			})
		);
	}
});