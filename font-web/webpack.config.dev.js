var path = require('path');
var webpack = require('webpack');
var jeet = require('jeet');
var nib = require('nib');

module.exports = {
    // or devtool: 'eval' to debug issues with compiled output:
    devtool: 'cheap-module-eval-source-map',
    entry: [
        // necessary for hot reloading with IE:
        'eventsource-polyfill',
        // listen to code updates emitted by hot middleware:
        'webpack-hot-middleware/client',
        // your code:
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify('development')
            }
        }),
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
        },
        ],stylus: {
            use: [jeet(), nib()]
        }
    }
};
