//表单初始化
layui.use(['form', 'layedit', "laydate",'laydate'], function () {
    var form = layui.form,
        layer = layui.layer,laydate = layui.laydate;

    // 渲染多个日期组件
    $(".input-date").each(function () {
        //日期时间选择
        laydate.render({
            elem: this, //指定元素  表示当前的元素
            type: 'date'
            , value: new Date()
            , format: 'yyyy-MM-dd'
            , theme: '#009688'  //主题  颜色改变

        });
        console.log("dateAddOk");
    });



//全部项目

var numEvent1 = 1; //当前页
let tableLength1; // 分页长度
let eventObj1 = {
    "taskName":'',
    "pageSize": 10,
    "pageNum": numEvent1,
    "taskPublisher":"策划师助理"
}

//加载任务详情
    $('body').on('click', '.checkDetail', function () {
        $.ajax({
            type: "get",
            url: queryUrl + queryMethodTask + getInfoMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: {
                "id": $(this).attr('value')
            },
            success: function (res) {

                $("#taskName").text(res.taskName);
                $("#taskStatus").text(res.taskStatus);
                $("#taskPublisher").text(res.taskPublisher);
                $("#taskAccepter").text(res.taskAccepter);
                $("#taskDes").text(res.taskDes);
                $("#taskFile").text(res.taskFile);
                $("#taskStart").text(res.taskStart);
                $("#taskEnd").text(res.taskEnd);
                $("#taskMoney").text(res.taskMoney);

            }
        });
        layer.open({
            type: 1
            , content: $('#info')
            , btnAlign: 'c' //按钮居中
            ,area: 'auto'
            ,anim: 0
            ,maxWidth:800
            , shade: 0 //不显示遮罩
        });
    });


//催促管理员审核申请
    $('body').on('click', '.msgaudapply', function () {
        //加入未读消息
        // $.ajax({
        //     type: "get",
        //     url: queryUrl + queryMethodTask + getInfoMethod,
        //     dataType: "json",
        //     contentType: "application/json;charset=UTF-8",
        //     data: {
        //         "id": $(this).attr('value')
        //     },
        //     success: function (res) {
        //
        //         $("#taskName").text(res.taskName);
        //         $("#taskStatus").text(res.taskStatus);
        //         $("#taskPublisher").text(res.taskPublisher);
        //         $("#taskAccepter").text(res.taskAccepter);
        //         $("#taskDes").text(res.taskDes);
        //         $("#taskFile").text(res.taskFile);
        //         $("#taskStart").text(res.taskStart);
        //         $("#taskEnd").text(res.taskEnd);
        //         $("#taskMoney").text(res.taskMoney);
        //
        //     }
        // });
        // layer.open({
        //     type: 1
        //     , content: $('#info')
        //     , btnAlign: 'c' //按钮居中
        //     ,area: 'auto'
        //     ,anim: 0
        //     ,maxWidth:800
        //     , shade: 0 //不显示遮罩
        // });
    });


//催促管理员审核交易

    $('body').on('click', '.msgaudorder', function () {
        //加入未读消息
        // $.ajax({
        //     type: "get",
        //     url: queryUrl + queryMethodTask + getInfoMethod,
        //     dataType: "json",
        //     contentType: "application/json;charset=UTF-8",
        //     data: {
        //         "id": $(this).attr('value')
        //     },
        //     success: function (res) {
        //
        //         $("#taskName").text(res.taskName);
        //         $("#taskStatus").text(res.taskStatus);
        //         $("#taskPublisher").text(res.taskPublisher);
        //         $("#taskAccepter").text(res.taskAccepter);
        //         $("#taskDes").text(res.taskDes);
        //         $("#taskFile").text(res.taskFile);
        //         $("#taskStart").text(res.taskStart);
        //         $("#taskEnd").text(res.taskEnd);
        //         $("#taskMoney").text(res.taskMoney);
        //
        //     }
        // });
        // layer.open({
        //     type: 1
        //     , content: $('#info')
        //     , btnAlign: 'c' //按钮居中
        //     ,area: 'auto'
        //     ,anim: 0
        //     ,maxWidth:800
        //     , shade: 0 //不显示遮罩
        // });
    });



//选取人才
    $('body').on('click', '.selecttalents', function () {
        var numEvent10 = 1; //当前页
        let tableLength10; // 分页长度
        let eventObj10 = {
            "pageSize": 4,
            "pageNum": numEvent10,
            "taskCode": $(this).attr('value')
        }
        update.code=$(this).attr('value');

        getEventData10();
        function getEventData10(first) {


            $.ajax({
                type: "post",
                url: queryUrl + queryMethodTaskwaitting + queryListMethod,
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify(eventObj10),
                success: function (res) {

                    tableLength10 = res.count;
                    if (!first) {
                        changePage10($('#pagetion10'));
                    }
                    var data = '';
                   for (let i = 0; i < (res.data.length/2); i++){
                        data += '  <div class="layui-row">';
                       for (let j = 0; j < 2; j++){
                           data +='   <div class="layui-col-md6 selectTalents" style="padding: 5px;" onclick="selectTalent('+'\''+res.data[i*2+j].talentsCode+'\'' +')">';
                           data += '   <div style="border: 1px solid #c0c6c0;height: 200px;" >\n';
                           data += '   <div class="layui-row" style="padding: 10px;">\n';
                           data += '    <div class="layui-col-md4" style="height: 100px;"><img src="../../images/case-logo004.png" style="width: 100%;height: 100%"></div>\n';
                           data += '    <div class="layui-col-md7" style="padding: 15px;">\n';
                           data += '    <div class="layui-row" style="font-size: 18px;margin-bottom: 10px;">'+res.data[i*2+j].talentsName+'</div>\n';
                           data +='    <div class="layui-row"><div style="font-size:15px;color:#818581;border: 0px solid #818581;border-radius: 20%;width: 100px;height: 30px;"><i class="layui-icon layui-icon-ok" style="font-size: 20px; color: #818581;"></i>  已关注</div></div>\n';
                           data += '    </div>\n';
                           data += '    <div class="layui-col-md1" style="text-align: right"><i class="layui-icon layui-icon-close-fill" style="font-size: 20px; color: #af1714;"></i></div>\n';
                           data += '    </div>\n';
                           data += '    <div class="layui-row" style="padding: 5px;height: 60px;">简略方案：<span>'+res.data[i*2+j].waittingShortSolution+'</span></div>\n';
                           data += '    </div>\n';
                           data += '    </div>\n';
                       }
                       data += '  </div>';
                   }
                   console.log(data);
                    $('#eventTable10').empty().append(data);
                }
            });
        }




        // 改变分页函数
        function changePage10(el) {
            layui.use(['laypage', 'layer'], function () {
                var laypage = layui.laypage,
                    layer = layui.layer;
                laypage.render({
                    elem: el,
                    count: tableLength10,
                    limit: eventObj10.pageSize,
                    first: '首页',
                    last: '尾页',
                    prev: '<em>←</em>',
                    next: '<em>→</em>',
                    jump: function (obj, first) {
                        eventObj10.pageNum = obj.curr;
                        if (!first) {
                            getEventData10(1);
                        }
                    }
                })
            });
        }

        layer.open({
            type: 1
            , content: $('#selecttalents')
            , btnAlign: 'c' //按钮居中
            ,area: 'auto'
            ,anim: 0
            ,maxWidth:800
            , shade: 0 //不显示遮罩
        });
    });



//任务完成
    $('body').on('click', '.finishtask', function () {
        $.ajax({
            type: "get",
            url: queryUrl + queryMethodTask + getInfoMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: {
                "id": $(this).attr('value')
            },
            success: function (res) {

                $("#taskName").text(res.taskName);
                $("#taskStatus").text(res.taskStatus);
                $("#taskPublisher").text(res.taskPublisher);
                $("#taskAccepter").text(res.taskAccepter);
                $("#taskDes").text(res.taskDes);
                $("#taskFile").text(res.taskFile);
                $("#taskStart").text(res.taskStart);
                $("#taskEnd").text(res.taskEnd);
                $("#taskMoney").text(res.taskMoney);

            }
        });
        layer.open({
            type: 1
            , content: $('#info')
            , btnAlign: 'c' //按钮居中
            ,area: 'auto'
            ,anim: 0
            ,maxWidth:800
            , shade: 0 //不显示遮罩
        });
    });

// 进入页面获取表格
    getEventData1();

// 获取列表
    function getEventData1(first) {

        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTask + queryListMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj1),
            success: function (res) {
                tableLength1 = res.count;
                if (!first) {
                    changePage1($('#pagetion1'));
                }
                var data = '';
                for (let index = 0; index < res.data.length; index++) {
                    data += '<tr>\n' +
                        '<td>\n' +
                        '<div>' + ((index + 1) + (eventObj1.pageNum - 1) * 10) + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStart + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskAccepter + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatus + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n'
                        if(res.data[index].taskStatus==1){
                            data+=  '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].code + '">催促</button>\n'
                        }
                        else if (res.data[index].taskStatus==2){
                            data+=  '<button type="button" class="selecttalents layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].code + '">选取人才</button>\n'
                        }
                        else if (res.data[index].taskStatus==4){
                            data+=  '<button type="button" class="finishEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].code + '">任务完成</button>\n'
                        }
                        else if (res.data[index].taskStatus==5){
                            data+=  '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].code + '">催促</button>\n'
                        }

                    data+='</div>\n' +
                        '</td>\n' +
                        '</tr>\n'
                }
                $('#eventTable1').empty().append(data);
            }
        });
    }

// 改变分页函数
    function changePage1(el) {
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage,
                layer = layui.layer;
            laypage.render({
                elem: el,
                count: tableLength1,
                limit: eventObj1.pageSize,
                first: '首页',
                last: '尾页',
                prev: '<em>←</em>',
                next: '<em>→</em>',
                jump: function (obj, first) {
                    eventObj1.pageNum = obj.curr;
                    if (!first) {
                        getEventData1(1);
                    }
                }
            })
        });
    }




//完成任务
    $('body').on('click', '.finishEvent', function () {
        update.taskAccepter='';
        update.taskStatus=5;
        update.code=$(this).attr('value');
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTask+updateMethod,
            aynsc:false,
            contentType: "application/json;charset=UTF-8",
            data:JSON.stringify(update),
            success: function (res) {
                if (res==1){
                    layui.msg("任务完成成功，请等待审核");
                }
                else {
                   layui.msg("提交失败");
                }
            }
        });

    });


//提交待审核

    var numEvent2 = 1; //当前页
    let tableLength2; // 分页长度
    let eventObj2 = {
        "taskName":'',
        "pageSize": 10,
        "pageNum": numEvent2,
        "taskPublisher":"策划师助理",
        "taskStatus":1
    }



// 进入页面获取表格
    getEventData2();

// 获取列表
    function getEventData2(first) {

        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTask + queryListMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj2),
            success: function (res) {
                tableLength2 = res.count;
                if (!first) {
                    changePage2($('#pagetion2'));
                }
                var data = '';
                for (let index = 0; index < res.data.length; index++) {
                    data += '<tr>\n' +
                        '<td>\n' +
                        '<div>' + ((index + 1) + (eventObj2.pageNum - 1) * 10) + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStart + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskAccepter + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatus + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n' +
                        '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].taskId + '">办理</button>\n' +
                        '</div>\n' +
                        '</td>\n' +
                        '</tr>\n'
                }
                $('#eventTable2').empty().append(data);
            }
        });
    }

// 改变分页函数
    function changePage2(el) {
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage,
                layer = layui.layer;
            laypage.render({
                elem: el,
                count: tableLength2,
                limit: eventObj2.pageSize,
                first: '首页',
                last: '尾页',
                prev: '<em>←</em>',
                next: '<em>→</em>',
                jump: function (obj, first) {
                    eventObj2.pageNum = obj.curr;
                    if (!first) {
                        getEventData2(1);
                    }
                }
            })
        });
    }


//招标中

    var numEvent3 = 1; //当前页
    let tableLength3; // 分页长度
    let eventObj3 = {
        "taskName":'',
        "pageSize": 10,
        "pageNum": numEvent3,
        "taskPublisher":"策划师助理",
        "taskStatus":2
    }



// 进入页面获取表格
    getEventData3();

// 获取列表
    function getEventData3(first) {

        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTask + queryListMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj3),
            success: function (res) {
                tableLength3 = res.count;
                if (!first) {
                    changePage3($('#pagetion3'));
                }
                var data = '';
                for (let index = 0; index < res.data.length; index++) {
                    data += '<tr>\n' +
                        '<td>\n' +
                        '<div>' + ((index + 1) + (eventObj3.pageNum - 1) * 10) + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStart + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskAccepter + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatus + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n' +
                        '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].taskId + '">办理</button>\n' +
                        '</div>\n' +
                        '</td>\n' +
                        '</tr>\n'
                }
                $('#eventTable3').empty().append(data);
            }
        });
    }

// 改变分页函数
    function changePage3(el) {
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage,
                layer = layui.layer;
            laypage.render({
                elem: el,
                count: tableLength3,
                limit: eventObj3.pageSize,
                first: '首页',
                last: '尾页',
                prev: '<em>←</em>',
                next: '<em>→</em>',
                jump: function (obj, first) {
                    eventObj3.pageNum = obj.curr;
                    if (!first) {
                        getEventData3(1);
                    }
                }
            })
        });
    }


//项目交付中

    var numEvent4 = 1; //当前页
    let tableLength4; // 分页长度
    let eventObj4 = {
        "taskName":'',
        "pageSize": 10,
        "pageNum": numEvent4,
        "taskPublisher":"策划师助理",
        "taskStatus":4
    }



// 进入页面获取表格
    getEventData4();

// 获取列表
    function getEventData4(first) {

        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTask + queryListMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj4),
            success: function (res) {
                tableLength4 = res.count;
                if (!first) {
                    changePage4($('#pagetion4'));
                }
                var data = '';
                for (let index = 0; index < res.data.length; index++) {
                    data += '<tr>\n' +
                        '<td>\n' +
                        '<div>' + ((index + 1) + (eventObj4.pageNum - 1) * 10) + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStart + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskAccepter + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatus + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n' +
                        '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].taskId + '">办理</button>\n' +
                        '</div>\n' +
                        '</td>\n' +
                        '</tr>\n'
                }
                $('#eventTable4').empty().append(data);
            }
        });
    }

// 改变分页函数
    function changePage4(el) {
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage,
                layer = layui.layer;
            laypage.render({
                elem: el,
                count: tableLength4,
                limit: eventObj4.pageSize,
                first: '首页',
                last: '尾页',
                prev: '<em>←</em>',
                next: '<em>→</em>',
                jump: function (obj, first) {
                    eventObj4.pageNum = obj.curr;
                    if (!first) {
                        getEventData4(1);
                    }
                }
            })
        });
    }


//交易待审核

    var numEvent5 = 1; //当前页
    let tableLength5; // 分页长度
    let eventObj5 = {
        "taskName":'',
        "pageSize": 10,
        "pageNum": numEvent5,
        "taskPublisher":"策划师助理",
        "taskStatus":6
    }



// 进入页面获取表格
    getEventData5();

// 获取列表
    function getEventData5(first) {

        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTask + queryListMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj5),
            success: function (res) {
                tableLength5 = res.count;
                if (!first) {
                    changePage5($('#pagetion5'));
                }
                var data = '';
                for (let index = 0; index < res.data.length; index++) {
                    data += '<tr>\n' +
                        '<td>\n' +
                        '<div>' + ((index + 1) + (eventObj5.pageNum - 1) * 10) + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStart + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskAccepter + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatus + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n' +
                        '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].taskId + '">办理</button>\n' +
                        '</div>\n' +
                        '</td>\n' +
                        '</tr>\n'
                }
                $('#eventTable5').empty().append(data);
            }
        });
    }

// 改变分页函数
    function changePage5(el) {
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage,
                layer = layui.layer;
            laypage.render({
                elem: el,
                count: tableLength5,
                limit: eventObj5.pageSize,
                first: '首页',
                last: '尾页',
                prev: '<em>←</em>',
                next: '<em>→</em>',
                jump: function (obj, first) {
                    eventObj5.pageNum = obj.curr;
                    if (!first) {
                        getEventData5(1);
                    }
                }
            })
        });
    }



});

//确定人才
let update = {
    "code": '',
    "taskAccepter":'',
    "taskStatus":4
}

function selectTalent(taskAccepter) {
    //修改任务表
    update.taskAccepter=taskAccepter;
    $.ajax({
        type: "post",
        url: queryUrl + queryMethodTask+updateMethod,
        aynsc:false,
        contentType: "application/json;charset=UTF-8",
        data:JSON.stringify(update),
        success: function (res) {
            if (res==1){
                layui.msg("提交成功，请等待审核");
            }
            else {
                layui.msg("提交失败");
            }
        }
    });

    //清除候选人员
    //发送通知

}
