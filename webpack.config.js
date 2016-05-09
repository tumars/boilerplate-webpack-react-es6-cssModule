var path = require('path');
var webpack = require('webpack');


module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/main'
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            loader: 'style!css?modules&localIdentName=[name]-[local]-[hash:base64:5]!less?sourceMap'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style!css?modules&localIdentName=[name]-[local]-[hash:base64:5]'
        }, {
            test: /\.css$/,
            include: /node_modules/,
            loader: 'style!css'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};