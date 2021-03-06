var numEvent = 1; //当前页
let tableLength; // 分页长度
let editId;
let status;
let eventObj = {
    "orderName":'',
    "pageSize": 10,
    "pageNum": numEvent,
    "orderStatus":0
}
getSelectOption("select[name='orderStatus']", 'STATE');
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
            , format: 'yyyy-MM-dd HH:mm:ss'
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
            url: queryUrl + queryMethodOrder + queryListMethod,
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
                        '<div>' + res.data[index].orderPartyAName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderPartyBName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderStatusName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].orderId + '">查看详情</button>\n' +
                        '<button type="button" class="audEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].orderId + '">审核通过</button>\n' +
                        '<button type="button" class="unAudEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].orderId + '">审核未通过</button>\n' +
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
        eventObj.orderName = $('.searchName input').val();
        getEventData();
    });


    //监听审核通过
    form.on('submit(verify1)', function (data) {
        let eventObj = data.field;
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodOrder + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "orderId":eventObj.orderId,
                "orderStatus":1
                "other1":$("#other1").text()
            }),
            success: function (res) {
                if (res==1){
                    layer.msg('审核成功');
                    getEventData();
                }
                else
                    layer.msg("审核失败");

            }
        });
        setTimeout(() => {
            // $('#updateForm').css("display","none");
        }, 1000);
        return false;
    });


    //监听审核未通过
    form.on('submit(verify2)', function (data) {
        let eventObj = data.field;
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodOrder + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "orderId":eventObj.orderId,
                "orderStatus":2,
                "other1":$("#audDes").text()
            }),
            success: function (res) {
                if (res==1){
                    layer.msg('审核成功');
                    getEventData();
                }
                else
                    layer.msg("审核失败");

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
            url: queryUrl + queryMethodOrder + getInfoMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: {
                "id": $(this).attr('value')
            },
            success: function (res) {
                form.val('update', {
                    "orderId":res.orderId,
                    "orderPartyAName": res.orderPartyAName,
                    "orderPartyBName": res.orderPartyBName,
                    "orderStatus": res.orderStatusName,
                    "orderMoney": res.orderMoney,
                    "taskId": res.taskId,
                    "orderStart": res.orderStart,
                    "orderEnd": res.orderEnd,
                    "other1":res.other1

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

//审核未通过
    $('body').on('click', '.unAudEvent', function () {
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodOrder + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "orderId": $(this).attr('value'),
                "orderStatus":2,
                "other1":$("#other1").text()
            }),
            success: function (res) {
                if (res==1){
                    layer.msg('审核成功');
                    getEventData();
                }
                else
                    layer.msg("审核失败");

            }
        });
    });
    //审核通过
    $('body').on('click', '.audEvent', function () {
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodOrder + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "orderId": $(this).attr('value'),
                "orderStatus":1
            }),
            success: function (res) {
                if (res==1){
                    layer.msg('审核成功');
                    "other1":$("#other1").text()
                    getEventData();
                }
                else
                    layer.msg("审核失败");

            }
        });
    });

});

// 获取下拉框内容

// getSelectOption("select[name='eventType']", 'EVENT_TYPE');
// getSelectOption("select[name='eventLevel']", 'EVENT_LEVEL');
// getSelectOption("select[name='eventArea']", 'AREA');