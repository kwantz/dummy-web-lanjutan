document.getElementById('pre-command-1').innerHTML = convertHtmlToText(`
mkdir webpack-project && cd webpack-project
npm init -f
`)

document.getElementById('pre-command-2').innerHTML = convertHtmlToText(`
npm install --save-dev webpack
npm install --save-dev webpack-cli
`)

document.getElementById('pre-folder-1').innerHTML = convertHtmlToText(`
  webpack-project
  | - package.json
+ | - webpack.config.js
+ | - dist
+   | - index.html
`)

document.getElementById('pre-webpack-1').innerHTML = convertHtmlToText(`
// webpack.config.js

+ module.exports = {
+   mode: 'development'
+ }
`)

document.getElementById('pre-index-html-1').innerHTML = convertHtmlToText(`
// dist/index.html

+ <!doctype html>
+ <html>
+   <head>
+     <title>Webpack</title>
+   </head>
+   <body>
+     <h1>Hello, Saya Webpack Loh :D</h1>
+   </body>
+ </html>
`)

document.getElementById('pre-folder-2').innerHTML = convertHtmlToText(`
  webpack-project
  | - package.json
  | - webpack.config.js
  | - dist
    | - index.html
+   | - index.js
`)

document.getElementById('pre-index-js-1').innerHTML = convertHtmlToText(`
// dist/index.js

+ const body = document.getElementsByTagName('body')[0];
+ body.innerHTML += '<br><h3>Saya ini berjalan melalui javascript looh.</h3>'
`)

document.getElementById('pre-index-html-2').innerHTML = convertHtmlToText(`
// dist/index.html

  <!doctype html>
  <html>
    <head>
      <title>Webpack</title>
    </head>
    <body>
      <h1>Hello, Saya Webpack Loh :D</h1>
    </body>
+   <script src="index.js"></script>
  </html>
`)

document.getElementById('pre-package-json').innerHTML = convertHtmlToText(`
  {
    "name": "webpack-project",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
-     "test": "echo \"Error: no test specified\" && exit 1"
+     "test": "echo \"Error: no test specified\" && exit 1",
+     "build": "webpack"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.8.3",
      "webpack-cli": "^2.1.3"
    }
  }
`)

document.getElementById('pre-folder-3').innerHTML = convertHtmlToText(`
  webpack-project
  | - package.json
  | - webpack.config.js
  | - dist
    | - index.html
-   | - index.js
+ | - src
+   | - index.js
`)

document.getElementById('pre-webpack-2').innerHTML = convertHtmlToText(`
// webpack.config.js

  module.exports = {
    mode: 'development',
+   entry: './src/index.js'
  }
`)

document.getElementById('pre-terminal-1').innerHTML = convertHtmlToText(`
npm run build

> webpack-project@1.0.0 build /var/www/mikroweb/web/webpack-project
> webpack

Hash: 4bbf3712141b1b582dd5
Version: webpack 4.8.3
Time: 119ms
Built at: 2018-05-15 15:54:15
  Asset      Size  Chunks             Chunk Names
main.js  2.94 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/index.js] 131 bytes {main} [built]
`)

document.getElementById('pre-webpack-3').innerHTML = convertHtmlToText(`
// webpack.config.js

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
+   output: {
+     filename: 'index.js',
+   }
  }
`)

document.getElementById('pre-terminal-2').innerHTML = convertHtmlToText(`
npm run build

> webpack-project@1.0.0 build /var/www/mikroweb/web/webpack-project
> webpack

Hash: dc17bc0aab78b3aad4f5
Version: webpack 4.8.3
Time: 94ms
Built at: 2018-05-15 16:07:55
   Asset      Size  Chunks             Chunk Names
index.js  2.94 KiB    main  [emitted]  main
Entrypoint main = index.js
[./src/index.js] 131 bytes {main} [built]
`)

document.getElementById('pre-index-js-2').innerHTML = convertHtmlToText(`
// dist/index.js (development)

/******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId]) {
  /******/ 			return installedModules[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			i: moduleId,
  /******/ 			l: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.l = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
  /******/ 		if(!__webpack_require__.o(exports, name)) {
  /******/ 			Object.defineProperty(exports, name, {
  /******/ 				configurable: false,
  /******/ 				enumerable: true,
  /******/ 				get: getter
  /******/ 			});
  /******/ 		}
  /******/ 	};
  /******/
  /******/ 	// define __esModule on exports
  /******/ 	__webpack_require__.r = function(exports) {
  /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
  /******/ 		var getter = module && module.__esModule ?
  /******/ 			function getDefault() { return module['default']; } :
  /******/ 			function getModuleExports() { return module; };
  /******/ 		__webpack_require__.d(getter, 'a', getter);
  /******/ 		return getter;
  /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
  /******/ })
  /************************************************************************/
  /******/ ({

  /***/ "./src/index.js":
  /*!**********************!*\\
    !*** ./src/index.js ***!
    \\**********************/
  /*! no static exports found */
  /***/ (function(module, exports) {

  eval("const body = document.getElementsByTagName('body')[0];\\nbody.innerHTML += '<br><h3>Saya ini berjalan melalui javascript looh.</h3>'\\n\\n\\n//# sourceURL=webpack:///./src/index.js?");

  /***/ })

  /******/ });
`)

document.getElementById('pre-index-js-3').innerHTML = convertHtmlToText(`
// dist/index.js (none)

/******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId]) {
  /******/ 			return installedModules[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			i: moduleId,
  /******/ 			l: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.l = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
  /******/ 		if(!__webpack_require__.o(exports, name)) {
  /******/ 			Object.defineProperty(exports, name, {
  /******/ 				configurable: false,
  /******/ 				enumerable: true,
  /******/ 				get: getter
  /******/ 			});
  /******/ 		}
  /******/ 	};
  /******/
  /******/ 	// define __esModule on exports
  /******/ 	__webpack_require__.r = function(exports) {
  /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
  /******/ 		var getter = module && module.__esModule ?
  /******/ 			function getDefault() { return module['default']; } :
  /******/ 			function getModuleExports() { return module; };
  /******/ 		__webpack_require__.d(getter, 'a', getter);
  /******/ 		return getter;
  /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = 0);
  /******/ })
  /************************************************************************/
  /******/ ([
  /* 0 */
  /***/ (function(module, exports) {

  const body = document.getElementsByTagName('body')[0];
  body.innerHTML += '<br><h3>Saya ini berjalan melalui javascript looh.</h3>'


  /***/ })
  /******/ ]);
`)

document.getElementById('pre-index-js-4').innerHTML = convertHtmlToText(`
// dist/index.js (production)

!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(e,n){document.getElementsByTagName("body")[0].innerHTML+="<br><h3>Saya ini berjalan melalui javascript looh.</h3>"}]);
`)
