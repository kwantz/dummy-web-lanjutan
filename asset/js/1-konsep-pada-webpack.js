document.getElementById('pre-entry').innerHTML = convertHtmlToText(`
+ module.exports = {
+   entry: './testing/my_entry.js'
+ }
`)

document.getElementById('pre-output').innerHTML = convertHtmlToText(`
+ const path = require('path')

  module.exports = {
    entry: './testing/my_entry.js',
+   output: {
+     filename: 'first_bundle.js',
+     path: path.resolve(__dirname, 'dist')
+   }
  }
`)

document.getElementById('pre-loader').innerHTML = convertHtmlToText(`
  const path = require('path')

  module.exports = {
    entry: './testing/my_entry.js',
    output: {
      filename: 'first_bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
+   module: {
+     rules: [
+       { test: /\.css$/, use: 'css-loader' }
+     ]
+   }
  }
`)

document.getElementById('pre-plugin').innerHTML = convertHtmlToText(`
  const path = require('path')
+ const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
    entry: './testing/my_entry.js',
    output: {
      filename: 'first_bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        { test: /\.css$/, use: 'css-loader' }
      ]
    },
+   plugins: [
+     new HtmlWebpackPlugin
+   ]
  }
`)


document.getElementById('pre-mode').innerHTML = convertHtmlToText(`
  const path = require('path')
  const HtmlWebpackPlugin = require('html-webpack-plugin')

  module.exports = {
+   mode: 'development',
    entry: './testing/my_entry.js',
    output: {
      filename: 'first_bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        { test: /\\.css$/, use: 'css-loader' }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin
    ]
  }
`)
