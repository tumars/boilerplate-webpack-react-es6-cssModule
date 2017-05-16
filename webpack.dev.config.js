const { resolve } = require('path');
var webpack = require('webpack');

process.noDeprecation = true

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        'babel-polyfill',
        './src/app'
    ],
    output: {
        path: resolve(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        hot: true,
        publicPath: '/',
        historyApiFallback: true,
        stats: "errors-only"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), 
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
            fetch: 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')  
            }
        })
    ],
    module: {
        rules: [ {
            test: /\.js$/,
            include:  /src/,
            use: [
                "babel-loader",
                "eslint-loader"
            ]
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        modules: true,
                        localIdentName: '[name]-[local]-[hash:base64:5]',
                        importLoaders: 2
                    }
                },
                'postcss-loader',
                'less-loader'
            ],
        }, {
            test: /\.(jpe?g|png|gif)$/i,
            include:  /src/,
            use: [
                'url-loader?limit=10000&name=img/[hash:8].[name].[ext]' // 图片小于8k就转化为 base64, 或者单独作为文件
            ]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: ['node_modules', './src/module', './src/action', './src/util/'],
        alias: {
            'co': resolve(__dirname, './src/util/co'),
            'action': resolve(__dirname, './src/action/index.js'),
            'stroe': resolve(__dirname, './src/store/index.js'),
        }
    }
};