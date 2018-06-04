document.getElementById('pre-webpack-1').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')
+ const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
+   plugins: [
+     new HtmlWebpackPlugin({
+       title: 'Caching'
+     })
+   ],
    output: {
+     filename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist')
    }
  }
`)
