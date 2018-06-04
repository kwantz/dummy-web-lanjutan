document.getElementById('pre-webpack-1').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Loader'
      })
    ],
    output: {
      filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    },
+   module: {
+     rules: [{
+       test: /\\.css$/,
+       use: [
+         { loader: 'style-loader' },
+         {
+           loader: 'css-loader',
+           options: {
+             modules: true
+           }
+         }
+       ]
+     }]
+   }
  }
`)

document.getElementById('pre-javascript-1').innerHTML = convertHtmlToText(`
// src/index.js

+ import Styles from 'style-loader!css-loader?modules!./styles.css'

  const body = document.getElementsByTagName('body')[0];
  body.innerHTML += '<br><h3>Saya ini berjalan melalui javascript looh.</h3>'
`)

document.getElementById('pre-javascript-2').innerHTML = convertHtmlToText(`
// src/index.js

- import Styles from 'style-loader!css-loader?modules!./styles.css'
+ import Styles from 'style-loader!css-loader?{"modules":true}!./styles.css'

  const body = document.getElementsByTagName('body')[0];
  body.innerHTML += '<br><h3>Saya ini berjalan melalui javascript looh.</h3>'
`)

document.getElementById('pre-packagejson-1').innerHTML = convertHtmlToText(`
// package.json

  {
    "name": "webpack-project",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "build": "webpack",
+     "build-loader": "webpack --module-bind 'css=style-loader!css-loader'"
    },
    .
    .
  }
`)

document.getElementById('pre-terminal-1').innerHTML = convertHtmlToText(`
  npm run build-loader
`)
