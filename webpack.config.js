const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let nodeModules = {};

const buildDir = path.join(__dirname, 'build');

fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = 'commonjs ' + mod);

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: buildDir,
    libraryTarget: 'commonjs',
    filename: `index.js`
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: ['json-loader']
      }
    ]
  },
  externals: [
    'aws-sdk'
  ],
  plugins: [
    new UglifyJSPlugin(),
  ]
};


