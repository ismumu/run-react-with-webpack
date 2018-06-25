
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

const config = merge(common, {
    devtool: false,
    mode: 'production',
    plugins: [
        new UglifyJSPlugin(),
    ]
});

module.exports = config;