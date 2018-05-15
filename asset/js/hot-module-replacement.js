document.getElementById('pre-struktur-folder').innerHTML = convertHtmlToText(`
webpack-demo
| - package.json
| - webpack.config.js
| - dist
  | - index.html
| - src
  | - index.js
`)

document.getElementById('pre-package.json').innerHTML = convertHtmlToText(`
// package.json

  {
    "name": "belajar-webpack",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
-     "build": "webpack",
+     "start:dev": "webpack-dev-server"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "css-loader": "^0.28.11",
      "style-loader": "^0.21.0",
      "webpack": "^4.6.0",
      "webpack-cli": "^2.0.15"
    },
    "dependencies": {
      "webpack-dev-server": "^3.1.3"
    }
  }
`)

document.getElementById('pre-webpack.config.js-1').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')
+ const webpack = require('webpack')

  module.exports = {
    mode: 'development',

    entry: {
      app: './src/index.js'
    },

+   devServer: {
+     contentBase: './dist',
+     hot: true
+   },

+   plugins: [
+     new webpack.NamedModulesPlugin(),
+     new webpack.HotModuleReplacementPlugin()
+   ],

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
`)

document.getElementById('pre-index.html').innerHTML = convertHtmlToText(`
// dist/index.html

<!doctype html>
<html>
  <head>
    <title>Webpack - Hot Module Replacement<\/title>
  </head>
  <body>
    <script src="bundle.js"><\/script>
  </body>
</html>
`)

document.getElementById('pre-index.js-1').innerHTML = convertHtmlToText(`
// src/index.js

function component() {
  var element = document.createElement('div')

  element.innerHTML = 'Hello webpack'

  return element
}

document.body.appendChild(component())
`)

document.getElementById('pre-start-dev-1').innerHTML = convertHtmlToText(`
npm run start:dev

> belajar-webpack@1.0.0 start:dev /var/www/mikroweb/web/belajar-webpack
> webpack-dev-server

ℹ ｢wds｣: Project is running at http://localhost:8080/
ℹ ｢wds｣: webpack output is served from /
ℹ ｢wds｣: Content not from webpack is served from ./dist
ℹ ｢wdm｣: Hash: 28610e5bffd43145ef8b
Version: webpack 4.6.0
Time: 904ms
Built at: 2018-05-03 09:17:44
    Asset     Size  Chunks             Chunk Names
bundle.js  366 KiB     app  [emitted]  app
Entrypoint app = bundle.js
[./node_modules/events/events.js] 8.13 KiB {app} [built]
[./node_modules/loglevel/lib/loglevel.js] 7.68 KiB {app} [built]
[./node_modules/url/url.js] 22.8 KiB {app} [built]
[./node_modules/webpack/hot/log-apply-result.js] (webpack)/hot/log-apply-result.js 1.31 KiB {app} [built]
[0] multi (webpack)-dev-server/client?http://localhost:8080 webpack/hot/dev-server ./src/index.js 52 bytes {app} [built]
[./node_modules/url/util.js] 314 bytes {app} [built]
[./node_modules/webpack-dev-server/client/index.js?http://localhost:8080] (webpack)-dev-server/client?http://localhost:8080 7.75 KiB {app} [built]
[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.58 KiB {app} [built]
[./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.05 KiB {app} [built]
[./node_modules/webpack-dev-server/node_modules/strip-ansi/index.js] (webpack)-dev-server/node_modules/strip-ansi/index.js 161 bytes {app} [built]
[./node_modules/webpack/hot sync ^\.\/log$] (webpack)/hot sync nonrecursive ^\.\/log$ 170 bytes {app} [built]
[./node_modules/webpack/hot/dev-server.js] (webpack)/hot/dev-server.js 1.66 KiB {app} [built]
[./node_modules/webpack/hot/emitter.js] (webpack)/hot/emitter.js 77 bytes {app} [built]
[./node_modules/webpack/hot/log.js] (webpack)/hot/log.js 1.03 KiB {app} [built]
[./src/index.js] 168 bytes {app} [built]
    + 13 hidden modules
ℹ ｢wdm｣: Compiled successfully.
`)

document.getElementById('pre-index.js-2').innerHTML = convertHtmlToText(`
// src/index.js

  function component() {
    var element = document.createElement('div')

-   element.innerHTML = 'Hello webpack'
+   element.innerHTML = 'Hello webpack, my name is Erick'

    return element
  }

  document.body.appendChild(component())
`)

document.getElementById('pre-start-dev-2').innerHTML = convertHtmlToText(`
ℹ ｢wdm｣: Compiling...
ℹ ｢wdm｣: Hash: 08c018c75358d9652196
Version: webpack 4.6.0
Time: 47ms
Built at: 2018-05-03 09:23:39
                                 Asset       Size  Chunks             Chunk Names
                             bundle.js    366 KiB     app  [emitted]  app
app.28610e5bffd43145ef8b.hot-update.js  462 bytes     app  [emitted]  app
  28610e5bffd43145ef8b.hot-update.json   45 bytes          [emitted]
Entrypoint app = bundle.js app.28610e5bffd43145ef8b.hot-update.js
[./src/index.js] 186 bytes {app} [built]
    + 27 hidden modules
ℹ ｢wdm｣: Compiled successfully.
`)

document.getElementById('pre-webpack.config.js-2').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')
  const webpack = require('webpack')

  module.exports = {
    mode: 'development',

    entry: {
      app: './src/index.js'
    },

    devServer: {
      contentBase: './dist',
      hot: true
    },

+   module: {
+     rules: [
+       {
+         test: /\\.css$/,
+         use: ['style-loader', 'css-loader']
+       }
+     ]
+   },

    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
`)

document.getElementById('pre-index.js-3').innerHTML = convertHtmlToText(`
// src/index.js

+ import './index.css'

  function component() {
    var element = document.createElement('div')

    element.innerHTML = 'Hello webpack, my name is Erick'

    return element
  }

  document.body.appendChild(component())
`)

document.getElementById('pre-index.css-1').innerHTML = convertHtmlToText(`
// src/index.css

  body {
    background: cyan;
    font-weight: bold;
  }
`)

document.getElementById('pre-index.css-2').innerHTML = convertHtmlToText(`
// src/index.css

  body {
-   background: cyan;
+   background: yellow;
    font-weight: bold;
  }
`)
