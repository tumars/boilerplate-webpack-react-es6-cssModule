var path = require('path');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var nodeModulesPath = path.join(__dirname, '/node_modules/');

module.exports = {
    devtool: 'eval',
    entry: {
        bundle: './src/main.js',
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name]-[hash:5].min.js',
        publicPath: './'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('[name]-[hash:5].min.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
        
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        // })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src'),
        }, {
            test: /\.less$/,
            exclude: [/node_modules/, path.resolve(__dirname, 'src/styles')],
            loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!less!postcss')
        }, {
            test: /\.css$/,
            exclude: [/node_modules/, path.resolve(__dirname, 'src/styles')],
            loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss')
        },{
            test: [/\.less$/],
            include: path.resolve(__dirname, 'src/styles'),
            loader: ExtractTextPlugin.extract('style', 'css!less!postcss')
        },{
            test: [/\.css$/],
            include: path.resolve(__dirname, 'src/styles'),
            loader: ExtractTextPlugin.extract('style', 'css!less!postcss')
        }, {
            test:/\.(png|jpg)$/,
            exclude: [/node_modules/],
            loader: 'url-loader?limit=8192&name=build/[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        alias: {
            'react': path.join(nodeModulesPath,'react/dist/react.min'),
            'react-dom': path.join(nodeModulesPath,'react-dom/dist/react-dom.min'),
            'redux': path.join(nodeModulesPath,'redux/dist/redux.min'),
            'react-redux': path.join(nodeModulesPath,'react-redux/dist/react-redux.min')
        }
    },
    postcss: [
        require('autoprefixer')
    ]
};