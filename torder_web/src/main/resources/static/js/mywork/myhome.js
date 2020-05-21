
$('#money').text(layui.sessionData('user').user.money);

let pingtai={
    "pageSize":8
}
$.ajax({
    type: "post",
    url: queryUrl + queryMethodTask + queryListMethod,
    dataType: "json",
    data:JSON.stringify(pingtai),
    contentType: "application/json;charset=UTF-8",
    success: function (res) {
        //最新动态
        var data='';
       for (var i=0;i<7&&i<res.data.length;i++){
           data+='  <div class="layui-row" style="padding-left: 30px;padding-right: 30px;font-size: 17px">\n' +
               '        <div class="layui-col-md1" style="color:red">¥'+res.data[i].taskMoney+'</div>\n' +
               '        <div class="layui-col-md3">'+res.data[i].taskName+'</div>\n' +
               '        <div class="layui-col-md7" style="text-align: right;margin-right: 10px;color: #818581;">'+res.data[i].taskPublisherName+'<span style="color: #ef6119">&nbsp;&nbsp;&nbsp;正在发布</span></div>\n' +
               '      <br>\n' +
               '        <hr class="layui-bg-gray">\n' +
               '    </div>';
       }
        $('#pingtai').empty().append(data);

        // //热门招标
        // var lunbo='';
        // for (var i=0;i<2;i++){
        //     lunbo+=' <div class="layui-row" style="height: 310px;">';
        //     for (var j=0;j<4;j++){
        //         lunbo+='    <div class="layui-col-md3" style="height: 300px;padding: 10px;">\n' +
        //             '            <div class="layui-card" style="border-radius: 5%">\n' +
        //             '                <div class="layui-card-header" style="height: 50px">\n' +
        //             '                    <div class="layui-col-md9" style="line-height: 50px;margin-top: 10px;"><a><p>'+res.data[i*2+j+8].taskPublisherName+'</p></a>\n' +
        //             '                    </div>\n' +
        //             '                </div>\n' +
        //             '                <div class="layui-card-body">\n' +
        //             '                    <div class="layui-row">\n' +
        //             '                        <div style="width: 90%;height: 150px;margin: 0 auto;background-color: #00a2d4">\n' +
        //             '                            <img src="'+queryUrl+'/file/'+res.data[i*2+j+8].other+'" style="width: 100%;height: 100%" style="height: 100%;width: 100%;align:center;">\n' +
        //             '                        </div>\n' +
        //             '                    </div>\n' +
        //             '                    <div class="layui-row" style="height: 40px;line-height: 40px;">\n' +
        //             '                        <div class="layui-col-md4" style="margin-left: 0px;">\n' +
        //             '                            <p style="color: #ef6119;"><strong>¥'+res.data[i*2+j+8].taskMoney+'</strong></p>\n' +
        //             '                        </div>\n' +
        //             '                        <div class="layui-col-md8">\n' +
        //             '                            <p style="color: #919999;text-align: right"> <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[i*2+j+8].taskId+'"><strong>查看详情</strong></a></p>\n' +
        //             '                        </div>\n' +
        //             '                    </div>\n' +
        //             '                    <div class="layui-row">\n' +
        //             '                       <p style="font-size: 12px;"><strong>'+res.data[i*2+j+8].taskName+'</strong></p>\n' +
        //             '                    </div>\n' +
        //             '                </div>\n' +
        //             '            </div>\n' +
        //             '        </div>';
        //     }
        //     lunbo+='</div>';
        // }
        // $('#test2').empty().append(lunbo);

        // //热门企业
        // var hotT='';
        // hotT+='<div class="layui-col-md3" style="padding: 5px;height: 200px;">\n' +
        //     '       <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[12].taskId+'"><img src="'+queryUrl+'/file/'+res.data[12].other+'" style="width: 100%;height: 100%"></a>\n' +
        //     '    </div>\n' +
        //     '    <div class="layui-col-md3" style="padding: 5px;height: 200px;">\n' +
        //     '       <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[13].taskId+'"><img src="'+queryUrl+'/file/'+res.data[13].other+'" style="width: 100%;height: 100%"></a>\n' +
        //     '    </div>\n' +
        //     '    <div class="layui-col-md3" style="padding: 5px;height: 200px;">\n' +
        //     '       <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[14].taskId+'"><img src="'+queryUrl+'/file/'+res.data[14].other+'" style="width: 100%;height: 100%"></a>\n' +
        //     '    </div>\n' +
        //     '    <div class="layui-col-md3" style="padding: 5px;height: 200px;">\n' +
        //     '       <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[15].taskId+'"><img src="'+queryUrl+'/file/'+res.data[15].other+'" style="width: 100%;height: 100%"></a>\n' +
        //     '    </div>';
        // $('#hot').empty().append(hotT);
    }
});

layui.use(['layer', 'layuimini','echarts'], function () {
    var $ = layui.jquery,
        layer = layui.layer,
        layuimini = layui.layuimini,
        echarts = layui.echarts;

    let eventObj = {
        "pageSize": 6,
        "noticeStart":new Date()
    }
    $.ajax({
        type: "post",
        url: queryUrl + queryMethodNotice + queryListMethod,
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify(eventObj),
        success: function (res) {

            var data = '';
            for (let index = 0; index < res.data.length; index++) {
                data +='  <div class="layuimini-notice">\n' +
                    '                            <div class="layuimini-notice-title">'+res.data[index].noticeTitle+'</div>\n' +
                    '                            <div class="layuimini-notice-extra">'+res.data[index].noticeStart+'</div>\n' +
                    '                            <div class="layuimini-notice-content layui-hide">\n' +
                    '                                '+res.data[index].noticeTitle+'<br>\n' +res.data[index].noticeDes+
                    '                            </div>\n' +
                    '                        </div>';
            }
            $('#notice').empty().append(data);
        }
    });
    /**
     * 查看公告信息
     **/
    $('body').on('click', '.layuimini-notice', function () {
        var title = $(this).children('.layuimini-notice-title').text(),
            noticeTime = $(this).children('.layuimini-notice-extra').text(),
            content = $(this).children('.layuimini-notice-content').html();
        var html = '<div style="padding:15px 20px; text-align:justify; line-height: 22px;border-bottom:1px solid #e2e2e2;background-color: #2f4056;color: #ffffff">\n' +
            '<div style="text-align: center;margin-bottom: 20px;font-weight: bold;border-bottom:1px solid #718fb5;padding-bottom: 5px"><h4 class="text-danger">' + title + '</h4></div>\n' +
            '<div style="font-size: 12px">' + content + '</div>\n' +
            '</div>\n';
        parent.layer.open({
            type: 1,
            title: '系统公告',
            area: '300px;',
            shade: 0.8,
            id: 'layuimini-notice',
            btn: ['取消'],
            btnAlign: 'c',
            moveType: 1,
            content:html,
            success: function (layero) {
                close();
            }
        });
    });



    // echarts 窗口缩放自适应
    window.onresize = function(){
        echartsRecords.resize();
    }

});