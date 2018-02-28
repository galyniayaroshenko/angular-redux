const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig({ env: 'development'}), {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
