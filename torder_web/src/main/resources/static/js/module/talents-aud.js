var numEvent = 1; //当前页
let tableLength; // 分页长度
let editId;
let status;
let eventObj = {
    "talentsName":'',
    "pageSize": 10,
    "pageNum": numEvent,
    "aud":2
}
getSelectOption("select[name='talentsNation']", 'NATION');
getSelectOption("select[name='talentsStatue']", 'TAlENTSSTATE');
getSelectOption("select[name='talentsEducation']", 'EDUCATION');
getSelectOption("select[name='talentsExperience']", 'EXPERIENCE');
getSelectOption("select[name='talentsPoliticeStatus']", 'POLITICE');
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
            url: queryUrl + queryMethodTalents + queryListMethod,
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
                        '<div>' + res.data[index].talentsName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].userId + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].talentsStatueName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].talentsPhone + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].talentsIdentity + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].talentsAlipay + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div class="operate">\n' +
                        '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].talentsId + '">查看详情</button>\n' +
                        '<button type="button" class="audEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].talentsId + '">审核通过</button>\n' +
                        '<button type="button" class="unAudEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].talentsId + '">审核未通过</button>\n' +
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
        eventObj.talentsName = $('.searchName input').val();
        getEventData();
    });


    //监听审核通过
    form.on('submit(verify1)', function (data) {
        let eventObj = data.field;
        //eventObj.talentsSex = $('#talentsSex').attr('value');
        console.log(eventObj);
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTalents + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "talentsId":eventObj.talentsId,
                "talentsStatue":2,
                "audDes":eventObj.audDes
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
        //eventObj.talentsSex = $('#talentsSex').attr('value');
        console.log(eventObj);
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTalents + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "talentsId":eventObj.talentsId,
                "talentsStatue":0,
                "audDes":eventObj.audDes
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
        let obj={
            "talentsId": $(this).attr('value')
        }
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTalents + getInfoMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(obj),
            success: function (res) {
                $("#talentsInfo").empty().append('<a style="font-size: 15px;color: #00a2d4;text-align: center;line-height: 40px" href="' + queryUrl + '/file/'+res.talentsInfo + '" download="' + res.talentsInfo.split('/')[2] + '" target="_blank">下载</a>'),
                    form.val('update', {
                    "talentsId":res.talentsId,
                    "talentsName": res.talentsName,
                    "userId": res.userId,
                    "talentsSex": res.talentsSex,
                    "talentsPhone": res.talentsPhone,
                    "talentsNation": res.talentsNationName,
                    "talentsPoliticeStatus": res.talentsPoliticeStatusName,
                    "talentsDate": res.talentsDate,
                    "talentsEducation": res.talentsEducationName,
                    "talentsGraduate": res.talentsGraduate,
                    "talentsMajor": res.talentsMajor,
                    "talentsExperience": res.talentsExperienceName,
                    "talentsEmail": res.talentsEmail,
                    "talentsResume": res.talentsResume,
                    "talentsStatue": res.talentsStatueName,
                    "talentsIdentity": res.talentsIdentity,
                    "talentsAlipay": res.talentsAlipay,
                    "audDes":res.audDes

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
            url: queryUrl + queryMethodTalents + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "talentsId": $(this).attr('value'),
                "talentsStatue":0
            }),
            success: function (res) {
                if (res==1){
                    layer.msg('审核成功');
                    getEventData();
                }
                else
                    layer.msg("审核失败");
                getEventData();

            }
        });
    });
    //审核通过
    $('body').on('click', '.audEvent', function () {
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTalents + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify({
                "talentsId": $(this).attr('value'),
                "talentsStatue":2
            }),
            success: function (res) {
                if (res==1){
                    layer.msg('审核成功');
                    getEventData();
                }
                else
                    layer.msg("审核失败");
                getEventData();

            }
        });
    });

});

// 获取下拉框内容

// getSelectOption("select[name='eventType']", 'EVENT_TYPE');
// getSelectOption("select[name='eventLevel']", 'EVENT_LEVEL');
// getSelectOption("select[name='eventArea']", 'AREA');