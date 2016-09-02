var webpack = require('webpack')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var data = require('./data')
var path = require('path')
var PROD = process.env.NODE_ENV === 'production'

module.exports = {
	entry: "./src/app.js",
	output: {
		path: __dirname + '/public',
		filename: 'app.js',
		libraryTarget: 'umd'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: "babel-loader",
			exclude: /node_modules/
		}, {
			test: /\.md$/,
			loader: "raw-loader",
			exclude: /node_modules/
		}, {
      test: /\.less/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
      exclude: /node_modules/
    }]
	},
	historyApiFallback: true,
	plugins: PROD ? [
		new webpack.optimize.UglifyJsPlugin({minimize: true}),
		new StaticSiteGeneratorPlugin('app.js', data.routes, data),
    new ExtractTextPlugin('main.css')
	] : [
		new StaticSiteGeneratorPlugin('app.js', data.routes, data),
    new ExtractTextPlugin('main.css')
	]
}
