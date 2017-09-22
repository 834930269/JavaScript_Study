'use strict'

var 
    fs=require('fs'),
    url=require('url'),
    path=require('path'),
    http=require('http');

//从命令行参数获取root目录,默认是当前目录
var root=path.resolve(process.argv[2] || '.');

console.log('Static root dir: '+root);

var server=http.createServer(function(require,response){
    //获取url的path,类似'/css/bootstrap.css':
    var pathname=url.parse(request.url).pathname;
    var filepath=path.join(root,pathname);
    //获取文件状态:
    fs.stat(filepath,function(err,stats){
        if(!err&&stats.isFile()){
            //没有出错且文件存在
        }
    });
});
