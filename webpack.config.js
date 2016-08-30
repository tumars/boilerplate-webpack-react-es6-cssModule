var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');



module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/app'
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.less$/,
            exclude: [/node_modules/, path.resolve(__dirname, 'src/styles')],
            loader: 'style!css?modules&localIdentName=[name]-[local]-[hash:base64:5]!less?sourceMap=true'
        }, {
            test: /\.less$/,
            include: path.resolve(__dirname, 'src/styles'),
            loader: 'style!css!less?sourceMap=true'
        }, {
            test: /\.css$/,
            exclude: [/node_modules/, path.resolve(__dirname, 'src/styles')],
            loader: 'style!css?modules&localIdentName=[name]-[local]-[hash:base64:5]'
        }, {
            test: /\.css$/,
            include: path.resolve(__dirname, 'src/styles'),
            loader: 'style!css'
        }, {
            test:/\.(png|jpg)$/,
            exclude: [/node_modules/],
            loader: 'url-loader?limit=8192&name=build/[name].[ext]'
        }]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    eslint: { failOnWarning: true },  
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};