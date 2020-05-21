var numEvent = 1; //当前页
let tableLength; // 分页长度
let editId;
let status;
let eventObj = {
    "taskName":'',
    "pageSize": 10,
    "pageNum": numEvent
}

//表单初始化
layui.use(['form', 'layedit', "laydate",'upload'], function () {
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
                            '<div class="layui-row"><a href="' +queryUrl +'/file/'+fileArray2[i] + '" download="' + fileArray2[i].split('/')[2] + '" target="_blank">'+fileArray2[i]+'&nbsp;&nbsp;下载</a></div>';
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
// 进入页面获取表格
    getEventData();

// 获取列表
    function getEventData(first) {

        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTask + queryListMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj),
            success: function (res) {
                tableLength = res.count;
                if (!first) {
                    changePage($('#pagetion'));
                }
                var data = '';
                for (let index = 0; index < res.data.length; index++) {
                    data += '<tr>\n' +
                        '<td>\n' +
                        '<div>' + ((index + 1) + (eventObj.pageNum - 1) * 10) + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskPublisherName + '</div>\n' +
                        '</td>\n';
                        if(res.data[index].taskAccepterName!=null){
                          data+=  '<td>\n' +
                            '<div>' + res.data[index].taskAccepterName + '</div>\n' +
                            '</td>\n' ;
                        }
                        else {
                            data+=  '<td>\n' +
                            '<div>尚未接单者</div>\n' +
                            '</td>\n' ;
                        }

                    data+= '<td>\n' +
                        '<div>' + res.data[index].taskStart + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">查看详情</button>\n' +
                        '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].taskId + '">禁用</button>\n' +
                        '</div>\n' +
                        '</td>\n' +
                        '</tr>\n'
                }
                $('#eventTable').empty().append(data);
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

// 搜索框实时响应
    $('.searchName :input').on('input propertychange', function () {
        eventObj.taskName = $('.searchName input').val();
        getEventData();
    });








//删除
    $('body').on('click', '.endorseEvent', function () {
        $.ajax({
            type: "get",
            url: queryUrl + queryMethodTask + deleteMethod,
            data: {
                "id": $(this).attr('value')
            },
            success: function (res) {
                layui.use('layer', function () {
                    var layer = layui.layer;
                    layer.msg('禁用成功');
                });
                setTimeout(() => {
                    getEventData();
                }, 1000);
            }
        });
    });

});



// 获取下拉框内容

// getSelectOption("select[name='eventType']", 'EVENT_TYPE');
// getSelectOption("select[name='eventLevel']", 'EVENT_LEVEL');
// getSelectOption("select[name='eventArea']", 'AREA');