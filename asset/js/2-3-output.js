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

document.getElementById('pre-webpack-2').innerHTML = convertHtmlToText(`
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

document.getElementById('pre-folder-2').innerHTML = convertHtmlToText(`
  webpack-project
  | - dist
    | - index.html
+   | - index.js
+   | - newfile.js
`)

document.getElementById('pre-webpack-3').innerHTML = convertHtmlToText(`
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
+     filename: '[id].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
`)

document.getElementById('pre-folder-3').innerHTML = convertHtmlToText(`
  webpack-project
  | - dist
    | - index.html
+   | - index.bundle.js
+   | - newfile.bundle.js
`)

document.getElementById('pre-webpack-4').innerHTML = convertHtmlToText(`
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
+     filename: '[name].[hash].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
`)

document.getElementById('pre-folder-4').innerHTML = convertHtmlToText(`
  webpack-project
  | - dist
    | - index.html
+   | - index.0dbdd1b1c8b1a82c6ae3.bundle.js
+   | - newfile.0dbdd1b1c8b1a82c6ae3.bundle.js
`)

document.getElementById('pre-webpack-5').innerHTML = convertHtmlToText(`
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
+     filename: '[chunkhash].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
`)

document.getElementById('pre-folder-5').innerHTML = convertHtmlToText(`
  webpack-project
  | - dist
    | - index.html
+   | - 8146dc548ae4297edd8a.bundle.js
+   | - df811715174ac14d4c70.bundle.js
`)
