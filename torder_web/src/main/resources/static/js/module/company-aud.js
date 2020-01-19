var numEvent = 1; //当前页
let tableLength; // 分页长度
let editId;
let status;
let eventObj = {
    "companyName":'',
    "pageSize": 10,
    "pageNum": numEvent,
    "aud":1
}
getSelectOption("select[name='companyStatus']", 'STATE');
getSelectOption("select[name='companyType']", 'CTYPE');
getSelectOption("select[name='companySize']", 'CSIZE');
//表单初始化
layui.use(['form', 'layedit', "laydate",'laydate'], function () {
    var form = layui.form,
        layer = layui.layer,laydate = layui.laydate;
    $(".input-date").each(function () {
        //日期时间选择
        laydate.render({
            elem: this, //指定元素  表示当前的元素
            type: 'datetime'
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
            url: queryUrl + queryMethodCompany + queryListMethod,
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
                        '<div>' + res.data[index].companyName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].companyTypeName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].companyStatusName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].companySizeName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].companyId + '">查看详情</button>\n' +
                        '<button type="button" class="audEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].companyId + '">审核通过</button>\n' +
                        '<button type="button" class="unAudEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].companyId + '">审核未通过</button>\n' +
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
        eventObj.companyName = $('.searchName input').val();
        getEventData();
    });

//点击添加提示框
    $('#add').on("click",function(){
        layer.open({
            type: 1
            , content: $('#addForm')
            , btnAlign: 'c' //按钮居中
            , shade: 0 //不显示遮罩
        });
    })


    //监听审核通过
    form.on('submit(verify1)', function (data) {
        let eventObj = data.field;
        eventObj.companySex = $('#companySex').attr('value');
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodCompany + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "companyId":eventObj.companyId,
                "companyStatus":1
            }),
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

//监听审核未通过
    form.on('submit(verify2)', function (data) {
        let eventObj = data.field;
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodCompany + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "companyId":eventObj.companyId,
                "companyStatus":2
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

    // $('#layerDemo .layui-btn').on('click', function () {
    //   var othis = $(this), method = othis.data('method');
    //   active[method] ? active[method].call(this, othis) : '';
    // });

//更新弹窗初始化
    $('body').on('click', '.checkDetail', function () {
        $.ajax({
            type: "get",
            url: queryUrl + queryMethodCompany + getInfoMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: {
                "id": $(this).attr('value')
            },
            success: function (res) {
                form.val('update', {
                    "companyId":res.companyId,
                    "companyName": res.companyName,
                    "companyType": res.companyTypeName,
                    "companySize": res.companySizeName,
                    "companyStatus": res.companyStatusName
                });
            }
        });
        layer.open({
            type: 1
            , content: $('#updateForm')
            , btnAlign: 'c' //按钮居中
            , shade: 0 //不显示遮罩
        });
    });

    //审核未通过
    $('body').on('click', '.unAudEvent', function () {
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodCompany+ updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "companyId": $(this).attr('value'),
                "companyStatus":2
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
            url: queryUrl + queryMethodCompany + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "companyId": $(this).attr('value'),
                "companyStatus":1
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

});