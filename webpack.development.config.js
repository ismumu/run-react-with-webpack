const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');

const common = require('./webpack.common.config.js');


const config = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        // index: path.resolve(__dirname, 'dist'),
        port: 9000,
        open: true, // 自动打开浏览器
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;