var websocket = null;
//判断当前浏览器是否支持WebSocket

if ('WebSocket' in window) {
    // ws://121.40.165.18:8800
    var webUrl = queryUrl.substr(queryUrl.lastIndexOf("/") - 1);
    // var webUrl = '//192.168.43.247:12035'
    websocket = new WebSocket("ws:" + webUrl  + "/websocket/" + layui.sessionData('user').user.userId);
}
else {
    alert('当前浏览器 Not support websocket')
}

//连接发生错误的回调方法
websocket.onerror = function (e) {
    console.log("WebSocket连接发生错误");
    console.log(e);

};

//连接成功建立的回调方法
websocket.onopen = function () {
    console.log("WebSocket连接成功" + new Date());

}

//接收到消息的回调方法
websocket.onmessage = function (event) {
   
    console.log("来自后台的信息：");
        console.log(event);
          getNotice();
        // var data = "{"flowStateName":"已批示",
        // "flowEvent":87,"flowSupervision":1,
        // "flowState":3,"flowTime":1577759086000,
        // "flowUsers":"1","instanceId":"b61ce8f9-2b74-11ea-96fc-def9fdaed4ae",
        // "flowEventTitle":"大规模游行","flowDepartment":0,
        // "flowEventTime":1577720346000,"flowId":92,
        // "flowDes":"请重视","flowEventDes":"大规模在街上游行"}"
        var data =JSON.parse(event.data);
    
    layui.use("layer", function () {
        var layer = layui.layer;
        var index = layer.open({
            type: 1
            ,title: ["您有新消息需要查看" , 'font-size:15px;']
            , offset: "auto" //具体配置参考：http://www.layui.com/doc/modules/layer.html#offset
            , content: '<div style="text-align:center;"><table style="margin:10px  auto 0px"><tr><td>事件标题:</td><td>' + data["flowEventTitle"] +
                '</td></tr>'+
                '<tr><td>事件描述:</td><td>' + data["flowEventDes"] + '</td></tr></table>'+
                '<span style="font-size:12px;color:#ccc;">可在未读消息中查看</span>' + '</div>'
            , btn: '查看详情'
            , btnAlign: 'c' //按钮居中
            , shade: 0 //不显示遮罩
            , yes: function () {
                layer.close(index);
                openDetail(data["flowEvent"],data["flowId"]);
            }
        });
    })
    getNotice();
}

//连接关闭的回调方法
websocket.onclose = function (e) {
    console.log("WebSocket连接关闭" + new Date());
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
function send(type, tarUser, text) {
    message = {
        "type": type || '1',//类型 1为单个发  2为通知全体
        "tarUser": tarUser || '1',//目标用户 ，分隔
        "text": text || '没事我就测测'//具体内容
    };
    websocket.send(JSON.stringify(message));

}