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
    "taskEnd":''
}
$("#btnok").click(function () {
    console.log(3333)
    eventObj.taskName=$("#taskName").val();
    eventObj.taskClassify=$("#children").val();
    eventObj.taskDes=$("#taskDes").val();
    eventObj.taskMoney=$("#taskMoney").val();
    eventObj.taskStart=$("#taskStart").val();
    eventObj.taskEnd=$("#taskEnd").val();
    $.ajax({
        type: "post",
        url: queryUrl + queryMethodTask+addMethod,
        aynsc:false,
        contentType: "application/json;charset=UTF-8",
        data:JSON.stringify(eventObj),
        success: function (res) {
            if (res==1){
                layer.msg("提交成功，请等待审核")
            }
            else {
                layer.msg("提交失败")
            }
        }
    });
});

