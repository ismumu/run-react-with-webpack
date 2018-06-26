const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装的插件
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: './src/app.js',
    output: {
        filename: 'bundle-[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]-[hash:base64:5]',
                        }
              
                    },
                    {
                        loader: 'less-loader',
                    }
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(['./dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};


module.exports = config;