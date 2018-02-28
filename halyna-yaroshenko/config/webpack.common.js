const helpers = require('./helpers');
const webpack = require('webpack');

const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngcWebpack = require('ngc-webpack');

module.exports = function (options) {
  const isProd = options.env === 'production';

  const entry = {
    polyfills: './src/polyfills.ts',
    main: './src/main.ts'
  };

  return {
    entry: entry,

    resolve: {
      extensions: ['.ts', '.js']
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: {
            emitErrors: true,
            failOnHint: true
          },
          exclude: [/(node_modules)/, /\.ngfactory.ts$/]
        },
        {
          test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
          use: '@ngtools/webpack'
        },
        {
          test: /\.html$/,
          loaders: [
            {
              loader: 'html-loader',
              options: { minimize: false }
            },
            {
              loader: 'html-minify-loader',
              options: {
                empty: true,
                quotes: true,
                loose: false,
                spare: true,
                dom: {
                  lowerCaseAttributeNames: false,
                  lowerCaseTags: false
                }
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file-loader?name=assets/[name].[hash].[ext]'
        },
        {
          test: /\.scss$/,
          loader: ['css-to-string-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
          exclude: helpers.root('src/styles')
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'postcss-loader', 'sass-loader']
          }),
          include: helpers.root('src/styles')
        },
        {
          test: /\.(css)$/,
          loader: ['css-to-string-loader', 'css-loader'],
          include: [/(node_modules)/]
        }
      ]
    },

    plugins: [
      new ngcWebpack.NgcWebpackPlugin({
        skipCodeGeneration: !isProd,
        tsConfigPath: 'tsconfig.json',
        mainPath: entry.main
      }),

      new webpack.DefinePlugin({
        'ENV': JSON.stringify(options.env)
      }),

      new CommonsChunkPlugin({
        name: 'polyfills',
        chunks: ['polyfills']
      }),

      new CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['main'],
        minChunks: module => /node_modules/.test(module.resource)
      }),

      new CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
      }),

      new HtmlWebpackPlugin({
        template: 'src/index.html'
      }),

      new ExtractTextPlugin({
        filename: '[name].[hash].css',
        allChunks: true
      })
    ]
  };
}
