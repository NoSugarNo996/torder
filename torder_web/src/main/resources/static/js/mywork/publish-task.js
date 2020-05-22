lan();
//表单初始化
layui.use(['form', 'layer','layedit', "laydate",'laydate'], function () {
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
    "taskPublisher":layui.sessionData('user').user.code
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

                $("#taskName").val(res.taskName);
                $("#taskPublisher").val(res.taskPublisherName);
                $("#taskAccepter").val(res.taskAccepterName);
                $("#taskDes").text(res.taskDes);
                $("#opr").val(res.opr);
                $("#taskStart").text(res.taskStart);
                $("#taskEnd").text(res.taskEnd);
                $("#taskMoney").val(res.taskMoney);
                $("#code").val(res.code);
                $("#taskStatusName").val(res.taskStatusName);
                if (res.taskFile!=null){
                    let fileArray= res.taskFile.split(",");
                    for (var i = 0; i < fileArray.length; i++) {
                        var tr =
                          '<div class="layui-row"><a href="' + queryUrl + '/file/'+fileArray[i] + '" download="' + fileArray[i].split('/')[2] + '" target="_blank">下载</a></div>';
                        $('#taskFile').empty().append(tr);
                    }
                }
                else  {
                    $("#taskFile").empty().text("暂无文件");
                }
                if (res.taskstatus==7){
                    $("#update").attr('disabled',true);
                }


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
        let addObj={
            "msgTitle":"请尽快审核编号为"+$(this).attr('value')+"的任务信息",
            "msgPublisher":layui.sessionData('user').user.code,
            "msgAccepter":"c56caeed7b204f9db7c935a9d00cefb2"
        }

        $.ajax({
            type: "post",
            url: queryUrl + queryMethodMsg + addMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(addObj),
            success: function (res) {
                if (res==1){
                    layer.msg("催促成功，管理员将会加快为您优先办理！");
                }
            }
        });
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
        update.others=$(this).attr('tag');
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
                           if ((i*2+j)<res.data.length){
                               data +='   <div class="layui-col-md6 selectTalents" style="padding: 5px;" onclick="selectTalent('+'\''+res.data[i*2+j].talentsCode +'\''+')">';
                               data += '   <div style="border: 1px solid #c0c6c0;height: 270px;" >\n';
                               data += '   <div class="layui-row" style="padding: 10px;">\n';
                               data += '    <div class="layui-col-md4" style="height: 100px;"><img src="'+queryUrl+'/file/'+res.data[i*2+j].talentsImg+'" style="width: 100%;height: 100%"></div>\n';
                               data += '    <div class="layui-col-md7" style="padding: 15px;">\n';
                               data += '    <div class="layui-row" style="font-size: 18px;margin-bottom: 10px;">'+res.data[i*2+j].talentsName+'</div>\n';
                               data +='    <div class="layui-row"><div style="font-size:15px;color:#818581;border: 0px solid #818581;border-radius: 20%;width: 100px;height: 30px;"><i class="layui-icon layui-icon-ok" style="font-size: 20px; color: #818581;"></i>  已关注</div></div>\n';
                               data += '    </div>\n';
                               data += '    <div class="layui-col-md1" style="text-align: right"><i class="layui-icon layui-icon-close-fill" style="font-size: 20px; color: #af1714;"></i></div>\n';
                               data += '    </div>\n';
                               data += '    <div class="layui-row" style="padding: 5px;height: 60px;">简略方案： <textarea  placeholder="请输入内容" class="layui-textarea" readonly>'+res.data[i*2+j].waittingShortSolution+'</textarea></div>\n';
                               data += '    </div>\n';
                               data += '    </div>\n';
                           }

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

                $("#taskName").val(res.taskName);
                $("#taskPublisher").val(res.taskPublisherName);
                $("#taskAccepter").val(res.taskAccepterName);
                $("#taskDes").text(res.taskDes);
                $("#opr").val(res.opr);
                $("#taskStart").text(res.taskStart);
                $("#taskEnd").text(res.taskEnd);
                $("#taskMoney").val(res.taskMoney);
                $("#code").val(res.code);


                obj.btn='任务完成';
                obj.instanceId=res.others;
                obj.nextOpr=res.taskAccepter;
                $.ajax({

                    url: queryUrl + "/DataAudit/completeTask",
                    dataType: "json",
                    type: "post",
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify(obj),
                    async: false,
                    success: function (result) {
                    }
                });

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
                        '</td>\n';

                        if(res.data[index].taskAccepterName!=null){
                           data+= '<td>\n' +
                            '<div>' + res.data[index].taskAccepterName + '</div>\n' +
                            '</td>\n';
                        }
                      else {
                            data+= '<td>\n' +
                                '<div>暂无接单者</div>\n' +
                                '</td>\n';
                        }
                       data+='<td>\n' +
                        '<div>' + res.data[index].taskStatusName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">编辑</button>\n'
                        if(res.data[index].taskStatus==1){
                            data+=  '<button type="button" class="msgaudapply layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].code + '">催促</button>\n'
                        }
                        else if (res.data[index].taskStatus==2){
                            data+=  '<button type="button" class="selecttalents layui-btn layui-btn-sm layui-btn-warm" tag="'+res.data[index].others+'"value="' + res.data[index].code + '">选取人才</button>\n'
                        }
                        else if (res.data[index].taskStatus==3){
                            data+=  '<button type="button" class="selecttalents layui-btn layui-btn-sm layui-btn-warm" tag="'+res.data[index].others+'"value="' + res.data[index].code + '">选取人才</button>\n'
                        }
                        else if (res.data[index].taskStatus==4){
                            data+=  '<button type="button" class="finishEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].code + '">任务完成</button>\n'
                        }
                        else if (res.data[index].taskStatus==6){
                            data+=  '<button type="button" class="msgaudapply layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].code + '">催促</button>\n'
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


    //监听更新
    form.on('submit(verify1)', function (data) {
        let eventObj={
            'taskStatusName':'',
            'taskMoney':'',
            'taskDes':'',
            'code':''
        }
            eventObj.taskMoney = $('#taskMoney').val();
        eventObj.taskDes = $('#taskDes').val();
        eventObj.code = $('#code').val();
        eventObj.taskStatusName = $('#taskStatusName').val();
        if (eventObj.taskStatusName=='审核未通过')
            eventObj.taskStatus=1;
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTask + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj),
            success: function (res) {
                if (res==1){
                    layer.msg('更新成功');
                }
                else
                    layer.msg("更新失败");
            }
        });
    });

//完成任务
    $('body').on('click', '.finishEvent', function () {
        update.taskStatus=6;
        update.code=$(this).attr('value');
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTask+updateMethod,
            aynsc:false,
            contentType: "application/json;charset=UTF-8",
            data:JSON.stringify(update),
            success: function (res) {
                if (res==1){
                    layer.msg("任务完成成功，请等待审核");
                    getEventData1();
                }
                else {
                    layer.msg("提交失败");
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
        "taskPublisher":layui.sessionData('user').user.code,
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
                        '<div>' + res.data[index].taskAccepterName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatusName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n' +
                        '<button type="button" class="msgaudapply layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].code + '">催促</button>\n' +
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


//雇主选标中

    var numEvent3 = 1; //当前页
    let tableLength3; // 分页长度
    let eventObj3 = {
        "taskName":'',
        "pageSize": 10,
        "pageNum": numEvent3,
        "taskPublisher":layui.sessionData('user').user.code,
        "taskStatus":3
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
                        '<div>' + res.data[index].taskAccepterName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatusName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n' +
                        '<button type="button" class="selecttalents layui-btn layui-btn-sm layui-btn-warm" tag="'+res.data[index].others+'"value="' + res.data[index].code + '">选取人才</button>\n' +
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
        "taskPublisher":layui.sessionData('user').user.code,
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
                        '<div>' + res.data[index].taskAccepterName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatusName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n' +
                        '<button type="button" class="finishEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].code + '">任务完成</button>\n' +
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
        "taskPublisher":layui.sessionData('user').user.code,
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
                        '<div>' + res.data[index].taskAccepterName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatusName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n' +
                        '<button type="button" class="msgaudapply layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].code + '">催促</button>\n' +
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
    "others":'',
    "taskStatus":4
}
let obj=
    {
        "btn":"",
        "nextOpr":"1",
        "instanceId":"",
        "talentsCode":"1,2",
        "alltalents":"1,2,3"
    }

function selectTalent(taskAccepter) {
    //修改任务表
    update.taskAccepter=taskAccepter;

    obj.btn='选取成功';
    obj.instanceId=update.others;
    obj.nextOpr=update.taskAccepter;
    $.ajax({

        url: queryUrl+ "/DataAudit/completeTask",
        dataType: "json",
        type: "post",
        contentType: "application/json;charset=UTF-8",
        data:JSON.stringify(obj),
        async: false,
        success: function (result) {

            $.ajax({
                type: "post",
                url: queryUrl + queryMethodTask+updateMethod,
                aynsc:false,
                contentType: "application/json;charset=UTF-8",
                data:JSON.stringify(update),
                success: function (res) {
                    if (res==1){
                        layer.msg("选取成功，请尽快与他联系吧");
                    }
                    else {
                        layer.msg("选取失败");
                    }
                }
            });

            $.ajax({
                type: "post",
                url: queryUrl + queryMethodTaskwaitting+deleteMethod,
                aynsc:false,
                data:{"taskCode":update.code},
                success: function (res) {
                    if (res==1){
                        layer.msg("");
                    }
                    else {
                        layer.msg("选取失败");
                    }
                }
            });

        },
        error: function () {
            console.log("addFlowError")
        }
    });


    //清除候选人员
    //发送通知

}
