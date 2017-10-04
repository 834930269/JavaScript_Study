//导入WebSocket模块
const WebSocket=require('ws');

//引用Server类:
const WebSocketServer=WebSocket.Server;

//实例化:
const wss=new WebSocketServer({
    port:3000
});

//接下来，如果有WebSocket请求接入，wss对象可以响应connection事件来处理这个WebSocket：
wss.on('connection',function(ws){
    console.log(`[SERVER] connection()`);
    ws.on('message',function (message){
        console.log(`[SERVER] Received: ${message}`);
        ws.send(`ECHO: ${message}`,(err)=>{
            if(err){
                console.log(`[SERVER] error: ${err}`);
            }
        });
    })
});
//必须在http中才能以ws连接,否则会变成wss
/*
以下在浏览器中输入
// 打开一个WebSocket:
var ws = new WebSocket('ws://localhost:3000/test');
// 响应onmessage事件:
ws.onmessage = function(msg) { console.log(msg); };
// 给服务器发送一个字符串:
ws.send('Hello!');
*/