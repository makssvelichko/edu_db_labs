/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ef5ceadfc7910c272983c623c3e79fd4"
  },
  {
    "url": "assets/css/0.styles.1e5a53e3.css",
    "revision": "e1675fee86bc6d1e693787c4d261d0d3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cd4dfba0.js",
    "revision": "0d368b7d3251d92579f9f6a2271b09be"
  },
  {
    "url": "assets/js/10.1eb4bd32.js",
    "revision": "6f71b89832e19a0b648018bc2464ab2f"
  },
  {
    "url": "assets/js/13.7fa8c35d.js",
    "revision": "1e148eb3fcde0d48161a314c7c1452b9"
  },
  {
    "url": "assets/js/14.7f224a01.js",
    "revision": "f9d56c86561d2e8fdf88352d2a7f3820"
  },
  {
    "url": "assets/js/15.2b524aee.js",
    "revision": "4f50f323c76bed4f79dfe64fcf2c8a12"
  },
  {
    "url": "assets/js/16.37786e2d.js",
    "revision": "00d57736e7d628048f87405e4d8b4acb"
  },
  {
    "url": "assets/js/17.33e59074.js",
    "revision": "e9083a83e4174ca4ad37c821b20a80f0"
  },
  {
    "url": "assets/js/18.5c5e592f.js",
    "revision": "85b0a3f5fb556bd48a61716f70e8d7f8"
  },
  {
    "url": "assets/js/19.c3da0a1a.js",
    "revision": "21347915480a3072286bce143d4828f5"
  },
  {
    "url": "assets/js/2.8c6916a2.js",
    "revision": "ecc38aa103999fddbd6ebd2817fb0fad"
  },
  {
    "url": "assets/js/20.90331c42.js",
    "revision": "ce9372ca436931fb87ce5995d963ee6c"
  },
  {
    "url": "assets/js/21.13d1edbf.js",
    "revision": "f300679cc31158b5c477fde857de625e"
  },
  {
    "url": "assets/js/22.46dd4ed9.js",
    "revision": "d6219d7b3301c9df060c8ab41d9bed0e"
  },
  {
    "url": "assets/js/23.acc57584.js",
    "revision": "9adbcd5aa72f38ebd081d8cf996a1026"
  },
  {
    "url": "assets/js/24.7452c26a.js",
    "revision": "682159da9f8a91d0c39ca457130f0352"
  },
  {
    "url": "assets/js/25.47dbc9cd.js",
    "revision": "928df16678f128dcac1959fd35f95f8a"
  },
  {
    "url": "assets/js/26.8d0c0409.js",
    "revision": "8aba158efd992fae43d8941e482a7c7b"
  },
  {
    "url": "assets/js/27.492ac5b5.js",
    "revision": "3710afa40927f27377744b063737866f"
  },
  {
    "url": "assets/js/28.14bf4c45.js",
    "revision": "c477959701e33f1d612a0b70c73390be"
  },
  {
    "url": "assets/js/29.1db68035.js",
    "revision": "cd80ec4e383e48862fba0b203f20b699"
  },
  {
    "url": "assets/js/3.b26e186f.js",
    "revision": "73a49ac9dedd9e2ac7fa767177778094"
  },
  {
    "url": "assets/js/30.ecadbffd.js",
    "revision": "3bd6a5b6e2ba02dc40a34104403c1d19"
  },
  {
    "url": "assets/js/31.967c7867.js",
    "revision": "1714ce3353b2806b1b003378a954d178"
  },
  {
    "url": "assets/js/32.a0555449.js",
    "revision": "04e78256aa23fb2710f7826ffce6bbb4"
  },
  {
    "url": "assets/js/33.af1f12d2.js",
    "revision": "24b74dfb1a4998caf3eeda402b48deec"
  },
  {
    "url": "assets/js/34.bd74ccb2.js",
    "revision": "cf7b06daf9d1fb154149bc858a9f1e26"
  },
  {
    "url": "assets/js/35.1f6f3ece.js",
    "revision": "c3c9e32376258950a53e1b13d48495bf"
  },
  {
    "url": "assets/js/36.c81eff7d.js",
    "revision": "2ee874f2e8b84ae2bae46d9e314684a7"
  },
  {
    "url": "assets/js/37.dc7611b4.js",
    "revision": "2926f7fb0defc6b51cd914d2ec8c6957"
  },
  {
    "url": "assets/js/38.dd0142a1.js",
    "revision": "a60cdf4dd068ce7c0ff215420d5f843c"
  },
  {
    "url": "assets/js/39.7846baff.js",
    "revision": "983f45b22388550b31414b1e340a3288"
  },
  {
    "url": "assets/js/4.326bdc2c.js",
    "revision": "6e6b516856a4fc4519bab98b40b6b887"
  },
  {
    "url": "assets/js/41.c8373cb3.js",
    "revision": "e6b8762a479b414a19fb700261ac7ddc"
  },
  {
    "url": "assets/js/5.8a959ef4.js",
    "revision": "e8f5ae212ea06423cff67a7295655674"
  },
  {
    "url": "assets/js/6.a8552c6f.js",
    "revision": "1122bf03b4c3af8127472ac34403204f"
  },
  {
    "url": "assets/js/7.51faa1d7.js",
    "revision": "7ca74a854ee88f54067b61872fc984e3"
  },
  {
    "url": "assets/js/8.8ec552ec.js",
    "revision": "cc27719725a2b9c1c0ba0a1100a56e1d"
  },
  {
    "url": "assets/js/9.e91c43ed.js",
    "revision": "781f11a8e1de42c858e1806db31cb0fd"
  },
  {
    "url": "assets/js/app.9d75754b.js",
    "revision": "5408d15734bed3937d189747ecd31d5e"
  },
  {
    "url": "assets/js/vendors~docsearch.7eb60035.js",
    "revision": "1e191a90655d0d6b862e60709158e047"
  },
  {
    "url": "conclusion/index.html",
    "revision": "dba073911e3c43805f00d3032209769c"
  },
  {
    "url": "design/index.html",
    "revision": "9b3ef0b78be52c11953d8ac3c3f1b5c6"
  },
  {
    "url": "index.html",
    "revision": "dd98a22eecba2a444d77b378ec6f5ef4"
  },
  {
    "url": "intro/index.html",
    "revision": "cf65512468d171c4588c14bd627621f0"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "b77d2e5d86ec53bfe11e280a0caec0d3"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "14ee64584d8880773045ea268a5258cf"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "1bfa1021dd169e38b2fc3dcd8360bf09"
  },
  {
    "url": "software/index.html",
    "revision": "5eb88f8be52ea7d4b79b48822d9a26cc"
  },
  {
    "url": "test/index.html",
    "revision": "963a1fb2af47e9c77f8941c32ec5d4a8"
  },
  {
    "url": "use cases/index.html",
    "revision": "04c6dd8296b049b7b8053de5cc25bd07"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
