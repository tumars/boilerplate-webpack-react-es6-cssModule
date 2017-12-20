var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeModulesPath = path.join(__dirname, '/node_modules/');

module.exports = {
    devtool: false,
    entry: {
        bundle: './src/app.js'
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name]-[hash:5].min.js',
        chunkFilename: '[name]-[hash:5].chunk.js',
        publicPath: './'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.tpl.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('[name]-[hash:5].min.css'),
        new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify("production") 
           }
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/vendor-manifest.json')
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src'),
        }, {
            test: /\.less$/,
            exclude: [/node_modules/],
            loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]!resolve-url!postcss!less')
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            include: path.join(__dirname, 'src'),
            loaders: [
                'url?limit=10000&name=img/[hash:8].[name].[ext]', // 图片小于8k就转化为 base64, 或者单独作为文件
                'image-webpack' // 图片压缩
            ]
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: ['node_modules', './src/module'],
        alias: {
            'co': path.join(__dirname, './src/util/co')
        }
    },
    postcss: [
        require('autoprefixer')
    ]
};