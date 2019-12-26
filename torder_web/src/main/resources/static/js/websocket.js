var websocket = null;
//判断当前浏览器是否支持WebSocket

if ('WebSocket' in window) {
    websocket = new WebSocket("ws:" + url + port + "/websocket/"+userId);
}
else {
    alert('当前浏览器 Not support websocket')
}

//连接发生错误的回调方法
websocket.onerror = function () {
    console.log("WebSocket连接发生错误");
};

//连接成功建立的回调方法
websocket.onopen = function () {
    console.log("WebSocket连接成功");
    
}

//接收到消息的回调方法
websocket.onmessage = function (event) {
    console.log("来自后台的信息：");
    console.log(event.data);
    // setMessageInnerHTML(event.data);
}

//连接关闭的回调方法
websocket.onclose = function (e) {
    console.log("WebSocket连接关闭");
    console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean)
    console.log(e)
}

//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
window.onbeforeunload = function () {
    console.log("windowsClose");
    closeWebSocket();
}


//关闭WebSocket连接
function closeWebSocket() {
    websocket.close();
}

//发送消息
function send(type,tarUser,text) {
    message={
        "type" :type || '1',//类型 1为单个发  2为通知全体
        "tarUser":tarUser || '1',//目标用户 ，分隔
        "text":text || '没事我就测测'//具体内容
    };
    websocket.send(JSON.stringify(message));
    
}


// var lockReconnect = false;  //避免ws重复连接
// var ws = null;          // 判断当前浏览器是否支持WebSocket
// var wsUrl = "ws:" + url + port + "/websocket";
// createWebSocket(wsUrl);   //连接ws

// function createWebSocket(url) {
//     try{
//         if('WebSocket' in window){
//             ws = new WebSocket(url);
//         }
//         initEventHandle();
//     }catch(e){
//         reconnect(url);
//         console.log(e);
//     }     
// }

// function initEventHandle() {
//     ws.onclose = function () {
//         reconnect(wsUrl);
//         console.log("ws连接关闭!"+new Date().toLocaleString());
//     };
//     ws.onerror = function () {
//         reconnect(wsUrl);
//         console.log("ws连接错误!");
//     };
//     ws.onopen = function () {
//         heartCheck.reset().start();      //心跳检测重置
//         console.log("ws连接成功!"+new Date().toLocaleString());
//     };
//     ws.onmessage = function (event) {    //如果获取到消息，心跳检测重置
//         heartCheck.reset().start();      //拿到任何消息都说明当前连接是正常的
//         console.log("ws收到消息啦:" +event.data);
//         if(event.data!='pong'){
//             let data = JSON.parse(event.data);
//         }
//     };
// }
// // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
// window.onbeforeunload = function() {
//     ws.close();
// }  

// function reconnect(url) {
//     if(lockReconnect) return;
//     lockReconnect = true;
//     setTimeout(function () {     //没连接上会一直重连，设置延迟避免请求过多
//         createWebSocket(url);
//         lockReconnect = false;
//     }, 2000);
// }

// //心跳检测
// var heartCheck = {
//     timeout: 1000,        //1分钟发一次心跳
//     timeoutObj: null,
//     serverTimeoutObj: null,
//     reset: function(){
//         clearTimeout(this.timeoutObj);
//         clearTimeout(this.serverTimeoutObj);
//         return this;
//     },
//     start: function(){
//         var self = this;
//         this.timeoutObj = setTimeout(function(){
//             //这里发送一个心跳，后端收到后，返回一个心跳消息，
//             //onmessage拿到返回的心跳就说明连接正常
//             ws.send("ping");
//             console.log("ping!")
//             self.serverTimeoutObj = setTimeout(function(){//如果超过一定时间还没重置，说明后端主动断开了
//                 ws.close();     //如果onclose会执行reconnect，我们执行ws.close()就行了.如果直接执行reconnect 会触发onclose导致重连两次
//             }, self.timeout)
//         }, this.timeout)
//     }
// }