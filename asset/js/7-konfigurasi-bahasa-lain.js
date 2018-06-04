document.getElementById('pre-typescript-1').innerHTML = convertHtmlToText(`
// webpack.config.ts

import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  entry: './foo.js',
  output: {
    path: path.resolve(__dirname, 'dist')
    filename: 'foo.bundle.js'
  }
};

export default config;
`)

document.getElementById('pre-coffee-1').innerHTML = convertHtmlToText(`
// webpack.config.coffee

path = require('path')
webpack = require('webpack')

config =
  mode: 'development',
  entry: './foo.js',
  output:
    path: path.resolve(__dirname, 'dist')
    filename: 'foo.bundle.js'

module.exports = config
`)

document.getElementById('pre-babel-1').innerHTML = convertHtmlToText(`
// webpack.config.jsx

import jsxobj from 'jsxobj';

// contoh peng-import-an plugin
const CustomPlugin = config => ({
  ...config,
  name: 'custom-plugin'
});

export default (
  <webpack target="web" watch-mode="development">
    <entry path="./foo.js" />
    <resolve>
      <alias {...{
        'react': 'preact-compat',
        'react-dom': 'preact-compat'
      }} />
    </resolve>
    <plugins>
      <uglify-fs opts={{
        compression: true,
        mangle: false
      }} />
      <CustomPlugin foo="bar" />
    </plugins>
  </webpack>
);
`)
