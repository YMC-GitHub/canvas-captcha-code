/* global __dirname, require, module*/

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');

let libraryName = pkg.name;

let plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
}
else if(env === 'dev'){
  outputFile = libraryName + '.js';
}

/*
let HtmlWebpackPluginOptions = {};
HtmlWebpackPluginOptions['index']={
		//源码模板位置
		template: './src/demo.html', 
		//生成存放位置：以输出目录为当前目录
		filename: '../demo/demo.html', 
		//标题内置注入：
		title:'test for title',
		meta: {viewport: 'width=device-width, initial-scale=1'},
		minify:{
			removeComments: true, 
			collapseWhitespace: true 
		}
};
plugins.push(new HtmlWebpackPlugin(HtmlWebpackPluginOptions['index']));
*/

let rules = [];
// 编译
rules.push({
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
});
// 校验
rules.push({
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
});


const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: rules
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
};

module.exports = config;
