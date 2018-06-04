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
