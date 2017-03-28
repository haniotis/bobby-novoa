var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      './source/scripts/main.js'
    ],
    vendor: [
      'jquery'
    ]
  },

  resolve: {
    root: __dirname + '/source/scripts'
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'scripts/[name].js'
  },

  module: {
    loaders: [
      {
        test: /source\/scripts\/.*\.js$/,
        exclude: /node_modules|\.tmp|vendor/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },

  plugins: [
    new Clean(['.tmp']),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin(
      'vendor', 'scripts/vendor.js'
    )
  ]
};