if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/15-puzzle/sw.js', { scope: '/15-puzzle/' })})}