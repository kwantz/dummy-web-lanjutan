
document.getElementById('pre-folder-1').innerHTML = convertHtmlToText(`
webpack-project
| - package.json
| - webpack.config.js
| - dist
  | - index.html
+   | - index.js
`)

document.getElementById('pre-js-1').innerHTML = convertHtmlToText(`
// dist/index.js

+ const body = document.getElementsByTagName('body')[0];
+ body.innerHTML += '<br><h3>Saya ini berjalan melalui javascript looh.</h3>'
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

document.getElementById('pre-folder-2').innerHTML = convertHtmlToText(`
webpack-project
| - package.json
| - webpack.config.js
| - dist
  | - index.html
-   | - index.js
+ | - src
+   | - index.js
`)

document.getElementById('pre-webpack-1').innerHTML = convertHtmlToText(`
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

document.getElementById('pre-webpack-2').innerHTML = convertHtmlToText(`
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
