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
    "pageSize": 12,
    "pageNum": numEvent,
    "taskName":''
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
            for (let a = 0; a < (res.data.length/4); a++){
                data+='  <!--        行-->';
                data+=' <div class="layui-row" style="height: 310px;margin-top: 10px;">';

                //单个
                for (let b = 0; b < 4; b++) {
                    if(a*4+b<res.data.length){
                        data+='  <!--        单个-->';
                        data+=' <div class="layui-col-md3" style="height: 370px;padding: 10px;">';
                        data+=' <div class="layui-card">';
                        data+=' <div class="layui-card-header" style="height: 50px">';
                        data+=' <div class="layui-col-md7">';
                        data+=' <a><p style="line-height: 50px">'+res.data[a*4+b].taskPublisherName+'</p></a>';
                        data+=' </div>';
                        data+=' <div class="layui-col-md5" style="text-align: right;"><button type="button" style="width: 60%;height:50%;" class="layui-btn  layui-btn-radius layui-btn-warm addFav" tag="'+res.data[(a*4+b)].taskPublisher+'"><i class="layui-icon layui-icon-addition" style="font-size: 14px">关注</i></button>';
                        data+=' </div>';
                        data+=' </div>';
                        data+=' <div class="layui-card-body" onclick="urlHtml('+res.data[a*4+b].taskId+')">';
                        data+=' <div class="layui-row">';
                        data+=' <div style="width: 90%;height: 150px;margin: 0 auto;background-color: #00a2d4">';
                        data+=' <img src="'+queryUrl+'/file/'+res.data[a*4+b].other+'" style="height: 100%;width: 100%;align:center;">';
                        data+=' </div>';
                        data+=' </div><br>';
                        data+=' <div class="layui-row" style="height: 40px;line-height: 40px;">';
                        data+=' <div class="layui-col-md4" style="margin-left: 0px;">';
                        data+=' <p style="color: #ef6119;"><strong>¥'+res.data[a*4+b].taskMoney+'</strong></p>';
                        data+=' </div>';
                        data+=' <div class="layui-col-md8">';
                        data+=' <p style="color: #919999;text-align: right"><a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[(a*4+b)].taskId+'"><strong>查看详情</strong></a></p>';
                        data+=' </div>';
                        data+=' </div>';
                        data+=' <div class="layui-row" style="height: 60px">';
                        data+=' <a><p style="font-size: 12px;" ><strong>'+res.data[a*4+b].taskName+'</strong></p></a>';
                        data+=' <input type="hidden" value="'+res.data[a*4+b].taskId+'">';
                        data+=' </div>';
                        data+=' </div>';
                        data+=' </div>';
                        data+=' </div>';
                    }

                }
                data+=' </div>';
            }
           console.log(data);
            $("#mainshop").empty().append(data);

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

$('body').on('click', '.addFav', function () {
    if (layui.sessionData('user').user!=null){
        let favper={
            "userCode":layui.sessionData('user').user.code,
            "targetCode":$(this).attr("tag")
        }
        var a=this;
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodFavorites + addMethod,
            aynsc: false,
            data: JSON.stringify(favper),
            contentType: "application/json;charset=UTF-8",
            success: function (result) {
                // var b='<button type="button" class="layui-btn  layui-btn-radius layui-btn-disabled" style="font-size: 15px;"><i class="layui-icon layui-icon-heart-fill">已关注</i></button>';
                // $("#cbtn").empty().append(b)
                layer.msg("关注成功，可在好友列表中查看");
                $(a).css("display","none");
            }
        });
    }
    else {
        layer.msg("要先登入在可以关注对方哦")
    }

});

function urlHtml(id){
    var toUrl="http://localhost:63342/torder/torder_web/static/page/task.html?taskId="+id;
    window.open(toUrl);
}
