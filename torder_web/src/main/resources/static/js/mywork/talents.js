let editId;
let status;
let eventObj = {
    "talentsName":'',
    "userId":layui.sessionData('user').user.userId
}
getSelectOption("select[name='talentsNation']", 'NATION');
getSelectOption("select[name='talentsStatue']", 'STATE');
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

    $.ajax({
        type: "post",
        url: queryUrl + queryMethodTalents + getInfoMethod,
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify(eventObj),
        success: function (res) {
            form.val('update', {
                "talentsId":res.talentsId,
                "talentsName": res.talentsName,
                "userId": res.userId,
                "talentsSex": res.talentsSex,
                "talentsPhone": res.talentsPhone,
                "talentsNation": res.talentsNation,
                "talentsPoliticeStatus": res.talentsPoliticeStatus,
                "talentsDate": res.talentsDate,
                "talentsEducation": res.talentsEducation,
                "talentsGraduate": res.talentsGraduate,
                "talentsMajor": res.talentsMajor,
                "talentsExperience": res.talentsExperience,
                "talentsEmail": res.talentsEmail,
                "talentsResume": res.talentsResume,
                "talentsInfo": res.talentsInfo,
                "talentsStatue": res.talentsStatue,
                "talentsIdentity": res.talentsIdentity,
                "talentsAlipay": res.talentsAlipay

            });
        }
    });
    //监听更新
       form.on('submit(verify1)', function (data) {
        let eventObj = data.field;
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTalents + updateMethod,
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

});
