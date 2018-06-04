
document.getElementById('pre-terminal-1').innerHTML = convertHtmlToText(`
npm install --save-dev html-webpack-plugin
`)

document.getElementById('pre-webpack-1').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')
+ const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      newfile: './src/newfile.js'
    },
+   plugins: [
+     new HtmlWebpackPlugin({
+       title: 'HTML Webpack Plugin Title'
+     })
+   ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    }
  }
`)

document.getElementById('pre-html-1').innerHTML = convertHtmlToText(`
// dist/index.html

- <!doctype html>
- <html>
-   <head>
-     <title>Webpack</title>
-   </head>
-   <body>
-     <h1>Hello, Saya Webpack Loh :D</h1>
-   </body>
-   <script src="index.js"></script>
-   <script src="newfile.js"></script>
- </html>

+ <!DOCTYPE html>
+ <html>
+   <head>
+     <meta charset="UTF-8">
+     <title>HTML Webpack Plugin Title</title>
+   </head>
+   <body>
+   <script type="text/javascript" src="index.js"></script><script type="text/javascript" src="newfile.js"></script></body>
+ </html>
`)

document.getElementById('pre-webpack-2').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      newfile: './src/newfile.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
+       filename: 'bukanindex.html',
        title: 'HTML Webpack Plugin Title'
      })
    ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    }
  }
`)

document.getElementById('pre-html-2').innerHTML = convertHtmlToText(`
// src/contohtemplate.html

+ <!DOCTYPE html>
+ <html>
+   <head>
+     <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
+     <title><%= htmlWebpackPlugin.options.title %></title>
+   </head>
+   <body>
+     <h1>Hello, Saya Template Webpack yang Baru Loh :D</h1>
+   </body>
+ </html>
`)

document.getElementById('pre-webpack-3').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      newfile: './src/newfile.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'bukanindex.html',
+       template: './src/contohtemplate.html',
        title: 'HTML Webpack Plugin Title'
      })
    ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    }
  }
`)

document.getElementById('pre-webpack-4').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      newfile: './src/newfile.js'
    },
    plugins: [
+     new HtmlWebpackPlugin(), // membuat file index.html
      new HtmlWebpackPlugin({  // membuat file bukanindex.html
        filename: 'bukanindex.html',
        template: './src/contohtemplate.html',
        title: 'HTML Webpack Plugin Title'
      }),
+     new HtmlWebpackPlugin({  // membuat file ambil.html
+       filename: 'ambil.html',
+       title: 'Hanya Mengambil newfile.js',
+       chunks: ['newfile']
+     }),
+     new HtmlWebpackPlugin({  // membuat file buang.html
+       filename: 'buang.html',
+       title: 'Membuang newfile.js',
+       excludeChunks: ['newfile']
+     })
    ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    }
  }
`)

document.getElementById('pre-html-3').innerHTML = convertHtmlToText(`
// dist/index.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
  <script type="text/javascript" src="index.js"></script><script type="text/javascript" src="newfile.js"></script></body>
</html>
`)

document.getElementById('pre-html-4').innerHTML = convertHtmlToText(`
// dist/bukanindex.html

<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <title>HTML Webpack Plugin Title</title>
  </head>
  <body>
    <h1>Hello, Saya Template Webpack yang Baru Loh :D</h1>
  <script type="text/javascript" src="index.js"></script><script type="text/javascript" src="newfile.js"></script></body>
</html>
`)

document.getElementById('pre-html-5').innerHTML = convertHtmlToText(`
// dist/ambil.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Mengambil newfile.js</title>
  </head>
  <body>
  <script type="text/javascript" src="newfile.js"></script></body>
</html>
`)

document.getElementById('pre-html-6').innerHTML = convertHtmlToText(`
// dist/buang.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Membuang newfile.js</title>
  </head>
  <body>
  <script type="text/javascript" src="index.js"></script></body>
</html>
`)
