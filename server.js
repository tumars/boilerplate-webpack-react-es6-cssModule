var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


var compiler =  webpack(config)
var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
});

server.listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3000/');
});