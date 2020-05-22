lan();
//表单初始化
layui.use(['form', 'layer','layedit', "laydate",'laydate','upload'], function () {
    var form = layui.form,
        layer = layui.layer,laydate = layui.laydate;
    var upload = layui.upload;
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
    let update = {
        "code": '',
     "taskFile":''
    }
    var fileArray = [];
//多文件列表上传
    var demoListView = $('#demoList')
        , uploadListIns = upload.render({
        elem: '#testList'
        , url: queryUrl + '/fileload/file'
        , accept: 'file' //允许接收的文件格式
        , multiple: true // 支持多文件
        , auto: false //选完文件后是否自动上传
        , field: 'file' //设置字段名
        , bindAction: '#testListAction'
        , choose: function (obj) {
            var files = this.files = obj.pushFile(); //将每次选择的文件追加到文件队列
            //读取本地文件
            obj.preview(function (index, file, result) {
                var tr = $(['<tr id="upload-' + index + '">'
                    , '<td>' + file.name + '</td>'
                    , '<td>' + (file.size / 1014).toFixed(1) + 'kb</td>'
                    , '<td>等待上传</td>'
                    , '<td>'
                    , '<button class="layui-btn layui-btn-xs demo-reload layui-hide">重传</button>'
                    , '<button class="layui-btn layui-btn-xs layui-btn-danger demo-delete">删除</button>'
                    , '</td>'
                    , '</tr>'].join(''));

                //单个重传
                tr.find('.demo-reload').on('click', function () {
                    obj.upload(index, file);
                });

                //删除
                tr.find('.demo-delete').on('click', function () {
                    delete files[index]; //删除对应的文件
                    tr.remove();
                    uploadListIns.config.elem.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
                });

                demoListView.append(tr);
            });
        }
        , done: function (res, index, upload) {
            if (res.result == "SUCCESS") { //上传成功
                //存要提交的taskFile列表
                fileArray.push(res.data);
                $('input[name="taskFile"]').val(fileArray);
                 update.taskFile=fileArray.toString();
                var tr = demoListView.find('tr#upload-' + index)
                    , tds = tr.children();
                tds.eq(2).html('<span style="color: #5FB878;">上传成功</span>');
                tds.eq(3).html(''); //清空操作
                return delete this.files[index]; //删除文件队列已经上传成功的文件

            }
            this.error(index, upload);
        }
        , error: function (index, upload) {
            var tr = demoListView.find('tr#upload-' + index)
                , tds = tr.children();
            tds.eq(2).html('<span style="color: #FF5722;">上传失败</span>');
            tds.eq(3).find('.demo-reload').removeClass('layui-hide'); //显示重传
        }
    });


//全部项目

var numEvent1 = 1; //当前页
let tableLength1; // 分页长度
let eventObj1 = {
    "taskName":'',
    "pageSize": 10,
    "pageNum": numEvent1,
    "taskAccepter":layui.sessionData('user').user.code
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
                $("#taskStatus").val(res.taskStatusName);
                $("#taskPublisher").val(res.taskPublisherName);
                $("#taskAccepter").val(res.taskAccepterName);
                $("#taskDes").text(res.taskDes);
                $("#taskStart").text(res.taskStart);
                $("#taskEnd").text(res.taskEnd);
                $("#taskMoney").val(res.taskMoney);
                $("#other1").val(res.other1);
                if (res.taskFile!=null){
                    let fileArray2= res.taskFile.split(",");
                    for (var i = 0; i < fileArray2.length; i++) {
                        var tr =
                            '<div class="layui-row"><a href="' +queryUrl +'/file/'+fileArray2[i] + '" download="' + fileArray2[i].split('/')[2] + '" target="_blank">下载</a></div>';
                        $('#taskFile').empty().append(tr);
                    }
                }
                else  {
                    $("#taskFile").empty().text("暂无文件");
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



//查看详情
    $('body').on('click', '.selecttalents', function () {

        $.ajax({
            type: "get",
            url: queryUrl + queryMethodTask + getInfoMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: {
                "id": $(this).attr('value')
            },
            success: function (res) {
                update.code=res.code;
                update.taskFile=res.taskFile;
                $('#uploaded').show();
                if (res.taskFile!=null){
                    fileArray = res.taskFile.split(",");
                    for (var i = 0; i < fileArray.length; i++) {
                        var tr = '<tr>'
                            + '<td>' + fileArray[i] + '</td>'
                            + '<td><a href="' + queryUrl +'/file/'+ fileArray[i] + '" download="' + fileArray[i].split('/')[2] + '" target="_blank">下载</a></td>'
                            + '</tr>';
                        $('#uploadedList').append(tr);
                    }
                }



            }
        });

//提交
        layer.open({
            type: 1
            , content: $('#selecttalents')
            ,btn: ['提交', '取消']
            ,yes: function(index, layero){
                $.ajax({
                    type: "post",
                    url: queryUrl + queryMethodTask+updateMethod,
                    aynsc:false,
                    contentType: "application/json;charset=UTF-8",
                    data:JSON.stringify(update),
                    success: function (res) {
                        if (res==1){
                            layer.msg("提交成功，请等待雇主审核");

                        }
                        else {
                            layer.msg("提交失败");
                        }
                        layer.closeAll();
                    }

                });

            }
             ,btn2: function(index, layero){
                layer.closeAll();
            }
            , btnAlign: 'c' //按钮居中
            ,area: 'auto'
            ,anim: 0
            ,maxWidth:800
            , shade: 0 //不显示遮罩
        });
    });



//任务完成
//     $('body').on('click', '.finishtask', function () {
//         $.ajax({
//             type: "get",
//             url: queryUrl + queryMethodTask + getInfoMethod,
//             dataType: "json",
//             contentType: "application/json;charset=UTF-8",
//             data: {
//                 "id": $(this).attr('value')
//             },
//             success: function (res) {
//
//                 $("#taskName").text(res.taskName);
//                 $("#taskStatus").text(res.taskStatus);
//                 $("#taskPublisher").text(res.taskPublisherName);
//                 $("#taskAccepter").text(res.taskAccepterName);
//                 $("#taskDes").text(res.taskDes);
//                 $("#taskFile").text(res.taskFile);
//                 $("#taskStart").text(res.taskStart);
//                 $("#taskEnd").text(res.taskEnd);
//                 $("#taskMoney").text(res.taskMoney);
//
//             }
//         });
//         layer.open({
//             type: 1
//             , content: $('#info')
//             , btnAlign: 'c' //按钮居中
//             ,area: 'auto'
//             ,anim: 0
//
//             ,maxWidth:800
//             , shade: 0 //不显示遮罩
//         });
//     });

// 进入页面获取表格 全部记录
    getEventData1();

// 获取列表 全部记录
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
                        '<div>' + res.data[index].taskPublisherName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatusName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n'
                        // if(res.data[index].taskStatus==1){
                        //     data+=  '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].code + '">催促</button>\n'
                        // }
                         if (res.data[index].taskStatus==4){
                            data+=  '<button type="button" class="selecttalents layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].taskId + '">提交详细方案</button>\n'
                        }
                        // else if (res.data[index].taskStatus==6){
                        //     data+=  '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].code + '">催促</button>\n'
                        // }

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
//     $('body').on('click', '.finishEvent', function () {
//         update.taskAccepter='';
//         update.taskStatus=5;
//         update.code=$(this).attr('value');
//         $.ajax({
//             type: "post",
//             url: queryUrl + queryMethodTask+updateMethod,
//             aynsc:false,
//             contentType: "application/json;charset=UTF-8",
//             data:JSON.stringify(update),
//             success: function (res) {
//                 if (res==1){
//                     layer.msg("任务完成成功，请等待审核");
//                     getEventData1();
//                 }
//                 else {
//                     layer.msg("提交失败");
//                 }
//             }
//         });
//
//     });


//已投标

    var numEvent2 = 1; //当前页
    let tableLength2; // 分页长度
    let eventObj2 = {
        "taskName":'',
        "pageSize": 10,
        "pageNum": numEvent2,
        "taskAccepter":layui.sessionData('user').user.code,
        "taskStatus":4
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
                        '<div>' + res.data[index].taskPublisherName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatusName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n' +
                        // '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].taskId + '">催促</button>\n' +
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


// //招标中
//
//     var numEvent3 = 1; //当前页
//     let tableLength3; // 分页长度
//     let eventObj3 = {
//         "taskName":'',
//         "pageSize": 10,
//         "pageNum": numEvent3,
//         "taskPublisher":layui.sessionData('user').user.code,
//         "taskStatus":2
//     }
//
//
//
// // 进入页面获取表格
//     getEventData3();
//
// // 获取列表
//     function getEventData3(first) {
//
//         $.ajax({
//             type: "post",
//             url: queryUrl + queryMethodTask + queryListMethod,
//             dataType: "json",
//             contentType: "application/json;charset=UTF-8",
//             data: JSON.stringify(eventObj3),
//             success: function (res) {
//                 tableLength3 = res.count;
//                 if (!first) {
//                     changePage3($('#pagetion3'));
//                 }
//                 var data = '';
//                 for (let index = 0; index < res.data.length; index++) {
//                     data += '<tr>\n' +
//                         '<td>\n' +
//                         '<div>' + ((index + 1) + (eventObj3.pageNum - 1) * 10) + '</div>\n' +
//                         '</td>\n' +
//                         '<td>\n' +
//                         '<div>' + res.data[index].taskStart + '</div>\n' +
//                         '</td>\n' +
//                         '<td>\n' +
//                         '<div>' + res.data[index].taskName + '</div>\n' +
//                         '</td>\n' +
//                         '<td>\n' +
//                         '<div>' + res.data[index].taskMoney + '</div>\n' +
//                         '</td>\n' +
//                         '<td>\n' +
//                         '<div>' + res.data[index].taskPublisherName + '</div>\n' +
//                         '</td>\n' +
//                         '<td>\n' +
//                         '<div>' + res.data[index].taskStatusName + '</div>\n' +
//                         '</td>\n' +
//                         '<td>\n' +
//                         '<div class="operate">\n' +
//                         '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n' +
//                         '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].taskId + '">办理</button>\n' +
//                         '</div>\n' +
//                         '</td>\n' +
//                         '</tr>\n'
//                 }
//                 $('#eventTable3').empty().append(data);
//             }
//         });
//     }
//
// // 改变分页函数
//     function changePage3(el) {
//         layui.use(['laypage', 'layer'], function () {
//             var laypage = layui.laypage,
//                 layer = layui.layer;
//             laypage.render({
//                 elem: el,
//                 count: tableLength3,
//                 limit: eventObj3.pageSize,
//                 first: '首页',
//                 last: '尾页',
//                 prev: '<em>←</em>',
//                 next: '<em>→</em>',
//                 jump: function (obj, first) {
//                     eventObj3.pageNum = obj.curr;
//                     if (!first) {
//                         getEventData3(1);
//                     }
//                 }
//             })
//         });
//     }
//

//项目交付中

    var numEvent4 = 1; //当前页
    let tableLength4; // 分页长度
    let eventObj4 = {
        "taskName":'',
        "pageSize": 10,
        "pageNum": numEvent4,
        "taskAccepter":layui.sessionData('user').user.code,
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
                        '<div>' + res.data[index].taskPublisherName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatusName + '</div>\n' +
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
        "taskAccepter":layui.sessionData('user').user.code,
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
                        '<div>' + res.data[index].taskPublisherName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatusName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n' +
                        // '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].taskId + '">办理</button>\n' +
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



