'use strict';

var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var src = path.resolve(__dirname, 'src'),
    output = path.join(__dirname, 'app', 'public');

module.exports = {
    devtool: 'eval',
    debug: true,
    entry: {
      module: path.join(src, 'module.js'),
      common: ['react', 'react-router']
    },
    resolve: {
      root: src,
      extensions: ['', '.js', '.jsx'],
      modulesDirectories: ['node_modules', 'src']
    },
    output: {
      path: output,
      publicPath: './',
      filename: '[name].js',
      pathInfo: true
    },
    module: {
        preLoaders: [
            { test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules|bower_components/ }
        ],
        loaders: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules|bower_components/ },
            { test: /\.less$/, loader: 'style!css!less' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],
    devServer: {
        contentBase: output,
        historyApiFallback: true
    }
};
