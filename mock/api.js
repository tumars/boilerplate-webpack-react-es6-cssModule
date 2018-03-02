// import { SetActiveRecordForAPP, GetActiveCollection } from './config'

var db = require('./db')
var http = require('http'),
    url = require('url');

var { list } = db;

function mytimeout(t) {
    return new Promise(resolve =>{
        setTimeout(resolve, t)
    })
}

// 创建http server，并传入回调函数:
var server = http.createServer(async function (request, response) {
    await mytimeout(2000)

    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ': ' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
    var pathname = url.parse(request.url).pathname;

    response.end(JSON.stringify(list[pathname.slice(1)]));    
});

// 让服务器监听3003端口:
server.listen(3003);

console.log('Server is running at http://127.0.0.1:3003/');