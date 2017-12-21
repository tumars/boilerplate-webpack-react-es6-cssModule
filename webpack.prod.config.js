var path = require('path');
const { resolve } = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: false,
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name]-[hash:5].min.js',
        chunkFilename: '[name]-[hash:5].chunk.js',
        publicPath: './'
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
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
                minifyURLs: true
            },
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            'Promise':'es6-promise',
            'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')  
            }
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            include: resolve(__dirname, 'src'),
            use: ['babel-loader']
        }, {
            test: /\.less$/,
            exclude: [/node_modules/],
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:5]"!postcss-loader!less-loader'
            }),
        }, {
            test:/\.(png|jpg|gif)$/,
            exclude: [/node_modules/],
            use: 'url-loader?limit=8192&name=build/[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: ['node_modules', './src/module', './src/action', './src/util/'],
        alias: {
            'my-util': resolve(__dirname, './src/libs/my-util'),
            'action': resolve(__dirname, './src/action/index.js'),
            'stroe': resolve(__dirname, './src/store/index.js'),
            'layout': resolve(__dirname, './src/layout'),
            'reducers': resolve(__dirname, './src/reducers')
        }
    }
};