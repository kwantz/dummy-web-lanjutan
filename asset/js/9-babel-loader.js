document.getElementById('pre-terminal-1').innerHTML = convertHtmlToText(`
  npm install babel-loader babel-core babel-preset-env --save-dev
`)

document.getElementById('pre-webpack-1').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'index.js'
    },
+   module: {
+     rules: [
+       {
+         test: /\\.js$/,
+         exclude: /(node_modules|bower_components)/,
+         use: {
+           loader: 'babel-loader',
+           options: {
+             presets: ['env']
+           }
+         }
+       }
+     ]
+   }
  }
`)

document.getElementById('pre-webpack-2').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
-             presets: ['env']
+             presets: ['env'],
+             cacheDirectory: true,
+             plugins: [ require('babel-plugin-transform-object-rest-spread') ]
            }
          }
        }
      ]
    }
  }
`)

document.getElementById('pre-html-1').innerHTML = convertHtmlToText(`
  <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.min.js" />
`)

document.getElementById('pre-terminal-2').innerHTML = convertHtmlToText(`
  npm install babel-polyfill --save-dev
`)

document.getElementById('pre-js-1').innerHTML = convertHtmlToText(`
  require('babel-polyfill')
`)

document.getElementById('pre-webpack-3').innerHTML = convertHtmlToText(`
// webpack.config.js

  const path = require('path')

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'index.js'
    },
    module: {
      rules: [
        {
          test: /\\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
-             presets: ['env']
+             presets: ['env'],
+             plugins: ['transform-runtime']
            }
          }
        }
      ]
    }
  }
`)

document.getElementById('pre-js-2').innerHTML = convertHtmlToText(`
  module.exports = require('babel-loader').custom(babel => {
    function myPlugin() {
      return {
        visitor: {}
      }
    }

    return {
      customOptions({ opt1, opt2, ...loader }) {
        return {
+         custom: { opt1, opt2 },     // ambil custom options yang akan digunakan
+         loader                      // kembalikan loader tanpa custom options
        }
      },

      config(cfg) {
        if (cfg.hasFilesystemConfig()) {
          return cfg.options;
        }

        return {
          ...cfg.options,
          plugins: [
            ...(cfg.options.plugins || []),
+           myPlugin          // Masukkan custom plugin
          ]
        }
      },

      result(result) {
        return {
          ...result,
          code: result.code + "\n// Digenerate oleh custom loader"
        }
      }
    }
  })
`)
