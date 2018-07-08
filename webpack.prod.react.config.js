const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const theme = require('./theme');

module.exports = {
    devtool: 'source-map',
    entry: {
        production: path.resolve(__dirname, './new/app.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        publicPath: '/',
        chunkFilename: 'js/[name].js',
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {
            'components': path.join(__dirname, "./new/components"),
            'views': path.join(__dirname, "./views"),
        },
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    ie8: true,
                },
                sourceMap: true,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                'env',
                                {
                                    targets: {
                                        browsers: ['last 2 versions', 'ie >= 7'],
                                    },
                                    modules: 'commonjs',
                                    useBuiltIns: true,
                                    debug: false,
                                },
                            ],
                            'react',
                            'stage-2',
                        ],
                        plugins: [['antd', {
                            style: true,  // if true, use less
                        }],'transform-runtime','transform-decorators-legacy'],
                    },
                },
                exclude: /(node_modules)/
            },
            {
                test: /\.(less|css)$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader?importLoaders=1',
                    // options: {
                    //     minimize: true //css压缩
                    // }
                }, {loader: 'less-loader', options: {
                        javascriptEnabled: true, sourceMap: true, modifyVars: theme()
                    }}]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100,
                            name: 'asset/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    mode: 'production',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            filename: 'production.html',
            template: path.resolve(__dirname, './views/index.ejs'),
            inject: 'body',
            hase: false,
            minify: {
                // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: false, // 删除空白符与换行符
            },
            chunks: ['production'],
        }),
    ],
};
