const helpers = require('./helpers');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader']
      },

      {
        test: /\.html$/,
        loader: 'html-loader'
      },

      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      },

      {
        test: /\.scss$/,
        loader: ['raw-loader', 'sass-loader'],
        exclude: [helpers.root('src/app/style/main.scss')]
      },

      {
        test: /\.scss$/,
        loader: 'null-loader',
        include: [helpers.root('src/app/style/main.scss')]
      },

      {
        test: /\.ts$/,
        enforce: 'post',
        loader: 'istanbul-instrumenter-loader',
        exclude: [/\.spec\.ts$/, /node_modules/]
      }
    ]
  }
}
