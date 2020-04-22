function getUrlParam(name) {
    //中文转码
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;

}
let eventObj = {
    "taskStatus":1,
    "taskClassify":'',
    "taskCode":''
}
getEventData();
function getEventData() {


    $.ajax({
        type: "post",
        url: queryUrl + queryMethodTask+getInfoMethod+"?id="+getUrlParam('taskId'),
        aynsc:false,
        contentType: "application/json;charset=UTF-8",
        success: function (res) {
            var data='';
           if (res!=null){
              $("#taskMoney").text(res.taskMoney);
               $("#taskName").text(res.taskName);
               $("#taskDes").text(res.taskDes);
               eventObj.taskClassify=res.taskClassify;
               eventObj.taskCode=res.code;
               console.log(res);
               $("#mainshop").append(data);

//类似需求
               $.ajax({
                   type: "post",
                   url: queryUrl + queryMethodTask+queryListMethod,
                   aynsc:false,
                   contentType: "application/json;charset=UTF-8",
                   data:JSON.stringify(eventObj),
                   success: function (result) {
                       var data='';
                       //单个
                       for (let index = 0; index < 5; index++) {
                           data +='  <div class="layui-row" style="padding-left: 30px;padding-right: 30px;">';
                           data +='  <div class="layui-row" style="color: #ef6119">¥'+result.data[index].taskMoney+'</div>';
                           data +='  <div class="layui-row" style="color: #00a2d4">'+result.data[index].taskName+'</div>';
                           data +='  <div class="layui-row" style="text-align: right;color: #666966">2&nbsp;人投标</div>';
                           data +='  <hr class="layui-bg-gray">';
                           data +='  </div>';
                       }
                       console.log(data);
                       $("#classQ").append(data);

                   }
               });
           }


        }
    });

}


//立即投标
function startTask(){
    let WaittingObj = {
        "taskCode":eventObj.taskCode,
        "talentsCode":'19999999987',
        "waittingShortSolution":'简略方案'
    }
    $.ajax({
        type: "post",
        url: queryUrl + queryMethodTaskwaitting+addMethod,
        aynsc:false,
        contentType: "application/json;charset=UTF-8",
        data:JSON.stringify(WaittingObj),
        success: function (result) {
          if (result!=null){
              layui.msg("投标成功，雇主选标结果将会第一时间通知您！")
          }
          else{
              layui.msg("投标失败，请再次投标！")
          }
        },
        error:function (e) {
            layui.msg("投标失败，请再次投标！")
        }
    });
}

