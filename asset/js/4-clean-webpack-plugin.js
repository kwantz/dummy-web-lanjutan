document.getElementById('pre-terminal-1').innerHTML = convertHtmlToText(`
npm install --save-dev clean-webpack-plugin
`)

document.getElementById('pre-webpack-1').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')
+ const CleanWebpackPlugin = require('clean-webpack-plugin')

  module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      newfile: './src/newfile.js'
    },
    plugins: [
+     new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'HTML Webpack Plugin Title'
      })
    ],
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
    }
  }
`)
