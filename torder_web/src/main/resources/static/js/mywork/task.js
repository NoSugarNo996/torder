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


layui.use('layer', function(){ //独立版的layer无需执行这一句
    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句

    //触发事件
    var active = {
        notice: function(){
            //示范一个公告层
            layer.open({
                type: 1
                ,title: false //不显示标题栏
                ,closeBtn: false
                ,area: '300px;'
                ,shade: 0.8
                ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
                ,btn: ['提交简略方案', '取消']
                ,btnAlign: 'c'
                ,moveType: 1 //拖拽模式，0或者1
                ,content: '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">' +
                    '<div class="layui-row" >请填写您的简略方案：</div>' +
                    '<div class="layui-row" > ' +
                    '      <textarea id="waittingShortSolution"  placeholder="请输入内容" class="layui-textarea" style="color: black;width: 100%;height: 100%"></textarea>\n' +
                    ' </div></div>'
                ,yes: function(index, layero){
                    startTask();

                    layer.closeAll();
                }
            });
        }

    };

    $('#layerDemo .layui-btn').on('click', function(){
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';
    });

});

//立即投标
function startTask(){


    let WaittingObj = {
        "taskCode":eventObj.taskCode,
        "talentsCode":layui.sessionData('user').user.code,
        "waittingShortSolution":$("#waittingShortSolution").val()
    }
    $.ajax({
        type: "post",
        url: queryUrl + queryMethodTaskwaitting+addMethod,
        aynsc:false,
        contentType: "application/json;charset=UTF-8",
        data:JSON.stringify(WaittingObj),
        success: function (result) {
          if (result!=null){
              layer.msg("投标成功，雇主选标结果将会第一时间通知您！")
          }
          else{
              layer.msg("投标失败，请再次投标！")
          }
        },
        error:function (e) {
            layer.msg("投标失败，请再次投标！")
        }
    });
}


