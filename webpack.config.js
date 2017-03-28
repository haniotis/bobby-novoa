var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      './source/scripts/main.js'
    ],
    'projects': [
      'babel-polyfill',
      './source/scripts/pages/projects.js'
    ],
    home: [
      'babel-polyfill',
      './source/scripts/pages/home.js'
    ],
    about: [
      'babel-polyfill',
      './source/scripts/pages/about.js'
    ],
    utils: [
      'babel-polyfill',
      './source/scripts/utils.js'
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