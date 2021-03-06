var path = require('path');
var webpack = require('webpack');
var jeet = require('jeet');
var nib = require('nib');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '../web-app/src/main/resources/static/dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("css/bundle.css", {
      allChunks: true
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.styl$/,
      loaders: ['style-loader', 'css-loader', 'stylus-loader']
    },{
      test: /\.json/,
      loaders: ['json-loader']
    },{
      test: /\.css/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }
    ],stylus: {
      use: [jeet(), nib()]
    }
  }
};
