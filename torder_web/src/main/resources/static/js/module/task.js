var numEvent = 1; //当前页
let tableLength; // 分页长度
let editId;
let status;
let eventObj = {
    "taskName":'',
    "pageSize": 10,
    "pageNum": numEvent
}
getSelectOption("select[name='taskNation']", 'NATION');
getSelectOption("select[name='taskStatus']", 'STATE');
getSelectOption("select[name='taskEducation']", 'EDUCATION');
getSelectOption("select[name='taskExperience']", 'EXPERIENCE');
getSelectOption("select[name='taskPoliticeStatus']", 'POLITICE');
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
                        '<div>' + res.data[index].taskPublisher + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskAccepter + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskStatue + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].taskType + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].taskId + '">编辑</button>\n' +
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


    //监听更新
    form.on('submit(verify1)', function (data) {
        let eventObj = data.field;
        eventObj.taskSex = $('#taskSex').attr('value');
        console.log(eventObj);
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTask + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj),
            success: function (res) {
                if (res==1){
                    layer.msg('更新成功');
                    getEventData();
                }
                else
                    layer.msg("更新失败");

            }
        });
        setTimeout(() => {
            // $('#updateForm').css("display","none");
        }, 1000);
        return false;
    });



//更新弹窗初始化
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
                form.val('update', {
                    "taskId":res.taskId,
                    "taskName": res.taskName,
                    "userId": res.userId,
                    "taskSex": res.taskSex,
                    "taskPhone": res.taskPhone,
                    "taskNation": res.taskNation,
                    "taskPoliticeStatus": res.taskPoliticeStatus,
                    "taskDate": res.taskDate,
                    "taskEducation": res.taskEducation,
                    "taskGraduate": res.taskGraduate,
                    "taskMajor": res.taskMajor,
                    "taskExperience": res.taskExperience,
                    "taskEmail": res.taskEmail,
                    "taskResume": res.taskResume,
                    "taskInfo": res.taskInfo,
                    "taskStatue": res.taskStatue,
                    "taskIdentity": res.taskIdentity,
                    "taskAlipay": res.taskAlipay

                });
            }
        });
        layer.open({
            type: 1
            , content: $('#updateForm')
            , btnAlign: 'c' //按钮居中
            ,area: 'auto'
            ,anim: 0
            ,maxWidth:800
            , shade: 0 //不显示遮罩
        });
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