
function getUrlParam(name) {
    //中文转码
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;

}
let eventObj = {
    // "taskStatus":2,
    "taskClassify":'',
    "taskPublisherName":''
}
let favor={
    "userCode":layui.sessionData('user').user.code,
    "taskCode":'',
}
let favper={
    "userCode":layui.sessionData('user').user.code,
    "targetCode":""
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
               // eventObj.taskCode=res.code;
               favor.taskCode=res.code;
               favper.targetCode=res.taskPublisher;
               eventObj.taskPublisherName=res.taskPublisherName;
               console.log(res);
               $("#mainshop").append(data);

               let  a={
                   "taskCode":eventObj.taskCode
               }
               //竞标数量
               $.ajax({
                   type: "post",
                   url: queryUrl + queryMethodTaskwaitting + queryListMethod,
                   aynsc: false,
                   data:JSON.stringify(a),
                   contentType: "application/json;charset=UTF-8",
                   success: function (res) {
                       $("#count").text(res.data.length)
                       if(res.data.length>0){
                           var  data='';
                           //所有方案
                           for(var index=0;index<res.data.length;index++){
                               data+='  <div class="layui-row">\n' +
                                   '\n' +
                                   '                            <div class="layui-row">\n' +
                                   '                                <div class="layui-col-md1">\n' +
                                   '                                    <img src="'+queryUrl+'/file/'+res.data[index].talentsImg+'" style="width: 100%;height: 100%">\n' +
                                   '                                </div>\n' +
                                   '                                <div class="layui-col-md3" style="margin-left: 20px">\n' +
                                   '                                    <div class="layui-row" style="font-size: 18px;">'+res.data[index].talentsName+'</div><br>\n' +
                                   '                                    <div class="layui-row" style="color: #d11b18;font-size: 14px;">方案:</div>\n' +
                                   '                                </div>\n' +
                                   '                            </div>\n' +
                                   '                            <div class="layui-row" style="margin-left: 50px;">\n' +
                                   '                                <br>\n' +
                                   '                                <img src="../images/bm.jpg" style="width: 100%;height: 100%">\n' +
                                   '                                <br>\n' +
                                   '                            </div>\n' +
                                   '\n' +
                                   '\n' +
                                   '                        </div>\n' +
                                   '                        <hr class="layui-bg-gray">';

                           }
                           $("#all").empty().append(data);
                           //最新方案
                           data='  <div class="layui-row">\n' +
                               '\n' +
                               '                            <div class="layui-row">\n' +
                               '                                <div class="layui-col-md1">\n' +
                               '                                    <img src="'+queryUrl+'/file/'+res.data[0].talentsImg+'" style="width: 100%;height: 100%">\n' +
                               '                                </div>\n' +
                               '                                <div class="layui-col-md3" style="margin-left: 20px">\n' +
                               '                                    <div class="layui-row" style="font-size: 18px;">'+res.data[0].talentsName+'</div><br>\n' +
                               '                                    <div class="layui-row" style="color: #d11b18;font-size: 14px;">方案:</div>\n' +
                               '                                </div>\n' +
                               '                            </div>\n' +
                               '                            <div class="layui-row" style="margin-left: 50px;">\n' +
                               '                                <br>\n' +
                               '                                <img src="../images/bm.jpg" style="width: 100%;height: 100%">\n' +
                               '                                <br>\n' +
                               '                            </div>\n' +
                               '\n' +
                               '\n' +
                               '                        </div>\n' +
                               '                        <hr class="layui-bg-gray">';

                           $("#new").empty().append(data);
                       }


                   }
               });
               if (layui.sessionData('talents').talents.talentsStatue==2){

                   //收藏
                   $.ajax({
                       type: "post",
                       url: queryUrl + queryMethodFavorites + queryListMethod,
                       aynsc: false,
                       contentType: "application/json;charset=UTF-8",
                       data:JSON.stringify(favor),
                       success: function (res2) {
                           var data='';
                            if (res2.data.length!=0){
                                //已经收藏
                                data+='<i class="layui-icon layui-icon-star-fill" onclick="del('+res2.data[0].favId+')" style="font-size: 20px; color:#ef6119;"></i>&nbsp;已收藏';
                            }
                            else {
                                //未收藏
                                data+='<i class="layui-icon layui-icon-star" onclick="add()" style="font-size: 20px; color:#ef6119;"></i>&nbsp;收藏';
                            }
                           $("#fav").empty().append(data);
                       }
                   });
               }

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
                           if (index<result.size){
                               data+='<div class="change" onclick="urlHtml('+result.data[index].taskId+')">'
                               data +='  <div class="layui-row" style="padding-left: 30px;padding-right: 30px;">';
                               data +='  <div class="layui-row" style="color: #ef6119">¥'+result.data[index].taskMoney+'</div>';
                               data +='  <div class="layui-row" style="color: #00a2d4">'+result.data[index].taskName+'</div>';
                               data +='  <div class="layui-row" style="text-align: right;color: #666966">&nbsp;查看了解</div>';
                               data +='  <hr class="layui-bg-gray">';
                               data +='  </div>';
                               data +='  </div>';
                           }

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

    $('#layerDemo .sub').on('click', function(){
        lan();
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';
    });



    //立即联系
    $('#layerDemo .chat').on('click', function(){
        lan();
        var active2 = {
            notice: function(){
                //示范一个公告层
                layer.open({
                    type: 1
                    ,title: false //不显示标题栏
                    ,closeBtn: false
                    ,area: '300px;'
                    ,shade: 0.8
                    ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
                    ,btn: ['发送', '退出']
                    ,btnAlign: 'c'
                    ,moveType: 1 //拖拽模式，0或者1
                    ,content:
                        '<div style="padding: 10px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300; ">' +
                        '<div class="layui-row" style="line-height: 30px;padding: 10px;">&nbsp;&nbsp;&nbsp;发布者：'+eventObj.taskPublisherName+'</div>'+
                        '<div id="cbtn">&nbsp;&nbsp;&nbsp;<button type="button" class="layui-btn  layui-btn-radius layui-btn-warm addFav" style="font-size: 15px;"><i class="layui-icon layui-icon-add-1"></i>关注</button></div><br>' +
                        '<div class="layui-row" style="font-size: 12px;color: #6f726f">&nbsp;&nbsp;&nbsp;&nbsp;关注发布者，可第一时间获得最新消息哦</div><br>'+
                        '<div class="layui-row" >内容：</div>' +
                        '<div class="layui-row" > ' +
                        '      <textarea id="chattext"  placeholder="请输入内容" class="layui-textarea" style="color: black;width: 100%;height: 100%"></textarea>\n' +
                        ' </div></div>'
                    ,yes: function(index, layero){
                        //插入新消息

                        let addObj={
                            "msgTitle":$("#chattext").val(),
                            "msgPublisher":layui.sessionData('user').user.code,
                            "msgAccepter":favper.targetCode
                        }
                        $.ajax({
                            type: "post",
                            url: queryUrl + queryMethodMsg + addMethod,
                            dataType: "json",
                            contentType: "application/json;charset=UTF-8",
                            data: JSON.stringify(addObj),
                            success: function (res) {
                                if (res==1){
                                    layer.msg("发送成功！");
                                }
                            }
                        });

                        layer.closeAll();
                    }
                });
            }

        };
        let a = this;
        var othis = $(this), method = othis.data('method');
        active2[method] ? active2[method].call(a, othis) : '';
    });
    $('body').on('click', '.addFav', function () {
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodFavorites + addMethod,
            aynsc: false,
            data: JSON.stringify(favper),
            contentType: "application/json;charset=UTF-8",
            success: function (result) {
                var b='&nbsp;&nbsp;&nbsp;<button type="button" class="layui-btn  layui-btn-radius layui-btn-disabled" style="font-size: 15px;"><i class="layui-icon layui-icon-ok"></i>已关注</button>';
                $("#cbtn").empty().append(b)
            }
        });
    });

});

//立即投标
function startTask(){


    let WaittingObj = {
        "taskCode":favor.taskCode,
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

function urlHtml(id){
    var toUrl="http://localhost:63342/torder/torder_web/static/page/task.html?taskId="+id;
    window.open(toUrl);
}


function add() {
    $.ajax({
        type: "post",
        url: queryUrl + queryMethodFavorites + addMethod,
        aynsc: false,
        data: JSON.stringify(favor),
        contentType: "application/json;charset=UTF-8",
        success: function (result) {
            window.location.reload();
        }
    });
}
function del(favId) {
    $.ajax({
        type: "post",
        url: queryUrl + queryMethodFavorites + deleteMethod + "?id=" + favId,
        aynsc: false,
        contentType: "application/json;charset=UTF-8",
        success: function (result) {
            window.location.reload();
        }
    });
}


