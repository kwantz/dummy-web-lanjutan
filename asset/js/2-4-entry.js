
document.getElementById('pre-js-1').innerHTML = convertHtmlToText(`
// src/newfile.js

+ const body = document.getElementsByTagName('body')[0];
+ body.innerHTML += '<br><h6>Wah, tulisan saya yang paling kecil dari kedua kalimat diatas</h6>'
`)

document.getElementById('pre-webpack-1').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')

  module.exports = {
    mode: 'development',
-   entry: './src/index.js',
+   entry: {
+     index: './src/index.js',
+     newfile: './src/newfile.js'
+   },
    output: {
-     filename: 'index.js',
+     filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    }
  }
`)

document.getElementById('pre-terminal-1').innerHTML = convertHtmlToText(`
npm run build

> webpack-project@1.0.0 build /var/www/mikroweb/web/webpack-project
> webpack

Hash: 1a1151c3ca397326115c
Version: webpack 4.8.3
Time: 111ms
Built at: 2018-05-17 14:19:13
     Asset      Size   Chunks             Chunk Names
  index.js  2.94 KiB    index  [emitted]  index
newfile.js  2.97 KiB  newfile  [emitted]  newfile
Entrypoint index = index.js
Entrypoint newfile = newfile.js
[./src/index.js] 131 bytes {index} [built]
[./src/newfile.js] 150 bytes {newfile} [built]
`)

document.getElementById('pre-folder-1').innerHTML = convertHtmlToText(`
  webpack-project
  | - package.json
  | - webpack.config.js
  | - dist
    | - index.html
+   | - index.js     // hasil dari webpack
+   | - newfile.js   // hasil dari webpack
  | - src
    | - index.js
+   | - newfile.js
`)

document.getElementById('pre-html-1').innerHTML = convertHtmlToText(`
// dist/index.html

  <!doctype html>
  <html>
    <head>
      <title>Webpack</title>
    </head>
    <body>
      <h1>Hello, Saya Webpack Loh :D</h1>
    </body>
    <script src="index.js"></script>
+   <script src="newfile.js"></script>
  </html>
`)
