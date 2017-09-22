'use strict';

//导入http模块
var http=require('http');

//创建http Server 冰川如回调函数
var server=http.createServer(function(request,response){
    //回调函数接受request和response对象
    //获得http请求的method和url:
    console.log(request.method+': '+request.url);
    //将http相应200写入response,同时设置Content-type:text/html
    response.writeHead(200,{'Content-Type':'text/html'});
    //将HTTP响应的HTML写入response
    response.end('<h1>Hello World!</h1>');
});

server.listen(8080);//让服务器监听8080端口

console.log('Server is running at http://127.0.0.1:8080/');