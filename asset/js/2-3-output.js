document.getElementById('pre-webpack-1').innerHTML = convertHtmlToText(`
// webpack.config.js

+ const path = require('path')

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'index.js',
+     path: path.resolve(__dirname, 'newFolder')
    }
  }
`)

document.getElementById('pre-folder-1').innerHTML = convertHtmlToText(`
  webpack-project
  | - package.json
  | - webpack.config.js
  | - dist
    | - index.html
  | - src
    | - index.js
+ | - newFolder
+   | - index.js
`)
