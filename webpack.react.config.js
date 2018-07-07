const path = require('path');
const webpack = require('webpack');
const es3ifyPlugin = require('es3ify-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        production: path.resolve(__dirname, './views/production/app.jsx'),
    },
    output: {
        path: path.resolve(__dirname, 'devtmp'),
        filename: 'js/[name].js',
        publicPath: '/',
        chunkFilename: 'js/[name].js',
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
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
                        plugins: ['transform-runtime','transform-decorators-legacy'],
                    },
                },
                include: [path.resolve(__dirname, 'views')],
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, 'views')],
                use: ['style-loader', 'css-loade'],
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
    mode: 'development',
    plugins: [
        new es3ifyPlugin(),
        new HtmlWebpackPlugin({
            filename: 'production.html',
            template: path.resolve(__dirname, './views/production/index.ejs'),
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
