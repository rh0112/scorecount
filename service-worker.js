self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});
 
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});
 
// �T�[�r�X���[�J�[�L�����ɕK�{
self.addEventListener('fetch', function(event) {});