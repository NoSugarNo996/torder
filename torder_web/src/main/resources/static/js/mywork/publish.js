lan();
function getCategoryParentSelectOption(obj) {
    // 获取下拉框
    $.ajax({
        type: "post",
        url: queryUrl +'/category/parent',
        aynsc:false,
        success: function (res) {
            var data = '';
            data += '<option value="">请选着一个大类</option>\n'
            for (let index = 0; index < res.length; index++) {
                data += '<option value="' + res[index].cCode + '">' + res[index].cName + '</option>\n'
            }
            $(obj).append(data);
        }
    });
};

function func(){
  //  $("#children")[0].options.length=0;
    console.log(1);
    $.ajax({
        type: "post",
        url: queryUrl + "/category/children?cParent=" + $("#parent").val(),
        aynsc:false,
        success: function (res) {
            var data = '';
            data += '<option value="">请选择具体类别</option>\n'
            console.log(2);
            for (let index = 0; index < res.length; index++) {
                data += '<option value="' + res[index].cCode + '">' + res[index].cName + '</option>\n'
            }
            console.log(3);
            $("#children").append(data);
            console.log(4);
          //  $(select[name='children']).append(data);
             //  $("#children").innerHTML=data;
        }
    });
};

getCategoryParentSelectOption("select[name='parent']");
let eventObj = {
    "taskName":'',
    "taskType":0,
    "taskStatus":1,
    "taskPublisher":layui.sessionData('user').user.code,
    "taskClassify":'',
    "taskMoney":'',
    "taskStart":'',
    "taskEnd":'',
    "others":'',
    "other":''
}
$("#btnNext").click(function () {

    $("#info-name").text(layui.sessionData('talents').talents.talentsName);
    $("#info-title").text($("#taskName").val());
    $("#info-money").text($("#taskMoney").val());
    $("#info-des").text($("#taskDes").val());
    $("#info-start").text($("#taskStart").val());
    $("#info-end").text($("#taskEnd").val());

});
$("#btnok").click(function () {

    console.log(3333)
    eventObj.taskName=$("#taskName").val();
    eventObj.taskClassify=$("#children").val();
    eventObj.taskDes=$("#taskDes").val();
    eventObj.taskMoney=$("#taskMoney").val();
    eventObj.taskStart=$("#taskStart").val();
    eventObj.taskEnd=$("#taskEnd").val();
    $.ajax({
        url: queryUrl+ "/DataAudit/start",
        dataType: "json",
        type: "post",
        async: false,
        success: function (result) {
            // result为保存的事件id
            eventObj.others=result.instanceId;
            $.ajax({
                type: "post",
                url: queryUrl + queryMethodTask+addMethod,
                aynsc:false,
                contentType: "application/json;charset=UTF-8",
                data:JSON.stringify(eventObj),
                success: function (res) {
                    if (res==1){
                        layer.msg("提交成功，请等待审核")
                        window.location.href = '/torder/torder_web/static/page/mywork/myhome.html';
                    }
                    else {
                        layer.msg("提交失败")
                    }
                }
            });
        },
        error: function () {
            console.log("addFlowError")
        }
    });

});




layui.use('upload', function() {
    var $ = layui.jquery
        , upload = layui.upload;

    //普通图片上传
        var uploadInst = upload.render({
            elem: '#test1'
            ,url: queryUrl + '/fileload/file' //改成您自己的上传接口
            ,before: function(obj){
                //预读本地文件示例，不支持ie8
                obj.preview(function(index, file, result){
                    $('#demo1').attr('src', result); //图片链接（base64）
                });
            }
        ,done: function(res){

            //上传成功
            if (res.result == "SUCCESS") { //上传成功
              eventObj.other=res.data;
            }
            else {
                return layer.msg('上传失败');
            }
        }
        ,error: function(){
            //演示失败状态，并实现重传
            var demoText = $('#demoText');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function(){
                uploadInst.upload();
            });
        }
    });
});