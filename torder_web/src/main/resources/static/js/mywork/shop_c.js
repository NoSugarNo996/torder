function getUrlParam(name) {
    //中文转码
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;

}
var numEvent = 1; //当前页
let tableLength; // 分页长度
let eventObj = {
    "taskType":1,
    "taskStatus":2,
    "taskClassifyName":getUrlParam('cateName'),
    "pageSize": 10,
    "pageNum": numEvent
}

getEventData();
function getEventData(first) {
    $.ajax({
        type: "post",
        url: queryUrl + queryMethodTask+queryListMethod,
        aynsc:false,
        contentType: "application/json;charset=UTF-8",
        data:JSON.stringify(eventObj),
        success: function (res) {
            tableLength = res.count;
            if (!first) {
                changePage($('#pagetion'));
            }
            var data='';
            //行
            for (let cal = 0; cal < (res.data.length/4); cal++){
                data+='  <!--        行-->';
                data+=' <div class="layui-row" style="height: 310px;margin-top: 10px;">';

                //单个
                for (let index = 0; index < 4; index++) {
                    if(cal*4+index<res.data.length){
                        data+='  <!--        单个-->';
                        data+=' <div class="layui-col-md3" style="height: 300px;padding: 10px;">';
                        data+=' <div class="layui-card">';
                        data+=' <div class="layui-card-header" style="height: 50px">';
                        data+=' <div class="layui-col-md3">';
                        data+=' <img src="../images/rctj8.jpg" style="height: 40px;width: 40px;border-radius: 50%;margin-top: 5px">';
                        data+=' </div>';
                        data+=' <div class="layui-col-md9" style="line-height: 50px;margin-top: 10px;"><a><p>'+res.data[cal*4+index].taskPublisherName+'</p></a>';
                        data+=' </div>';
                        data+=' </div>';
                        data+=' <div class="layui-card-body" onclick="urlHtml('+res.data[cal*4+index].taskId+')">';
                        data+=' <div class="layui-row">';
                        data+=' <div style="width: 90%;height: 150px;margin: 0 auto;background-color: #00a2d4">';
                        data+=' <img src="../images/ptyx4.jpg" style="height: 100%;width: 100%;align:center;">';
                        data+=' </div>';
                        data+=' </div>';
                        data+=' <div class="layui-row" style="height: 40px;line-height: 40px;">';
                        data+=' <div class="layui-col-md4" style="margin-left: 0px;">';
                        data+=' <p style="color: #ef6119;"><strong>¥'+res.data[cal*4+index].taskMoney+'</strong></p>';
                        data+=' </div>';
                        data+=' <div class="layui-col-md8">';
                        data+=' <p style="color: #919999;text-align: right"><strong>投标数量：765</strong></p>';
                        data+=' </div>';
                        data+=' </div>';
                        data+=' <div class="layui-row">';
                        data+=' <a><p style="font-size: 12px;" ><strong>'+res.data[cal*4+index].taskName+'</strong></p></a>';
                        data+=' <input type="hidden" value="'+res.data[cal*4+index].taskId+'">';
                        data+=' </div>';
                        data+=' </div>';
                        data+=' </div>';
                        data+=' </div>';
                    }

                }
                data+=' </div>';
            }
           console.log(data);
            $("#mainshop").append(data);

        }
    });

}

// 改变分页函数
function changePage(el) {
    layui.use(['laypage', 'layer'], function () {
        var laypage = layui.laypage,
            layer = layui.layer;
        laypage.render({
            elem: el,
            count: tableLength,
            limit: eventObj.pageSize,
            first: '首页',
            last: '尾页',
            prev: '<em>←</em>',
            next: '<em>→</em>',
            jump: function (obj, first) {
                eventObj.pageNum = obj.curr;
                if (!first) {
                    getEventData(1);
                }
            }
        })
    });
}

function urlHtml(id){
    var toUrl="http://localhost:63342/torder/torder_web/static/page/task.html?taskId="+id;
    window.open(toUrl);
}
