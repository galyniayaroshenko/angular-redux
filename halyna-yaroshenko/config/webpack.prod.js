const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig({ env: 'production' }), {
  devtool: false,

  output: {
    path: helpers.root('dist'),
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true
      }
    })
  ]
});
