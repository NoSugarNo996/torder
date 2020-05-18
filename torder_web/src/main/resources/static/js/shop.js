if (layui.sessionData('user').user!=null){
    var a='';
    a+='<button type="button" class="layui-btn layui-btn-radius layui-btn-fluid" style="background-color: #6073f2" onclick="javascrtpt:window.location.href = \'/torder/torder_web/static/page/mywork/mywork.html\';">进入个人空间</button>';
    $("#loginAndRes").empty().append(a);
}

//人才推荐
let talents={
    "pageSize":8
}
$.ajax({
    type: "post",
    url: queryUrl + queryMethodTalents + queryListMethod,
    dataType: "json",
    data:JSON.stringify(talents),
    contentType: "application/json;charset=UTF-8",
    success: function (res) {
        var data='';
        for (var i=0;i<8;i++){
            data+='  <div class="single-member effect-5">\n' +
                '                       <div class="member-image">\n' +
                '                           <img src="'+queryUrl+'/file/'+res.data[i].others+'" alt="Member">\n' +
                '                       </div>\n' +
                '                       <div class="member-info">\n' +
                '                           <h3><a href="'+queryUrl+'/file/'+res.data[i].talentsInfo+'">'+res.data[i].talentsName+'</a></h3>\n' +
                '                           <h5>'+res.data[i].talentsMajor+'</h5>\n' +
                '                           <p>'+res.data[i].talentsResume+'</p>\n' +
                '                           <div class="social-touch icon-colored">\n' +
                // '                               <a class="fb-touch" href="#"></a>\n' +
                // '                               <a class="tweet-touch" href="#"></a>\n' +
                // '                               <a class="linkedin-touch" href="#"></a>\n' +
                '<div  id="cbtn">' +
                '<button type="button" class="layui-btn  layui-btn-radius layui-btn-warm addFav" tag="'+res.data[i].code+'"style="font-size: 15px;"><i class="layui-icon layui-icon-addition">关注</i></button>'+
                '</div>'+
                '                           </div>\n' +
                '                       </div>\n' +
                '                   </div>';
        }
        $('#talentsT').empty().append(data);
    }
});
//平台严选
let pingtai={
    "pageSize":8
}
$.ajax({
    type: "post",
    url: queryUrl + queryMethodTask + queryListMethod,
    dataType: "json",
    data:JSON.stringify(pingtai),
    contentType: "application/json;charset=UTF-8",
    success: function (res) {
        //平台严选
        var data='';
            data+=' <div class="layui-row" style="height: 100px;margin:10px;">\n' +
                '                       <div class="layui-col-md6" style="height:100%;padding: 5px;background-color: #4c5dbf">\n' +
                '                           <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[0].taskId+'"><img src="'+queryUrl+'/file/'+res.data[0].other+'" style="width: 100%;height: 100%"></a></div>\n' +
                '                       <div class="layui-col-md1">&nbsp;</div>\n' +
                '                       <div class="layui-col-md5" style="height:100%;padding: 5px;background-color: #4c5dbf"><a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[1].taskId+'"><img src="'+queryUrl+'/file/'+res.data[1].other+'" style="width: 100%;height: 100%"></a></div>\n' +
                '                   </div>\n' +
                '                    <div class="layui-row" style="height: 80px;background-color:#4c5dbf;margin:10px;"><a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[2].taskId+'"><img src="'+queryUrl+'/file/'+res.data[2].other+'" style="width: 100%;height: 100%"></a></div>\n' +
                '                    <div class="layui-row" style="height: 100px;margin:10px;">\n' +
                '                        <div class="layui-col-md5" style="height:100%;padding: 5px;background-color: #4c5dbf"><a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[3].taskId+'"><img src="'+queryUrl+'/file/'+res.data[3].other+'" style="width: 100%;height: 100%"></a></div>\n' +
                '                        <div class="layui-col-md1">&nbsp;</div>\n' +
                '                        <div class="layui-col-md6" style="height:100%;padding: 5px;background-color: #4c5dbf"><a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[4].taskId+'"><img src="'+queryUrl+'/file/'+res.data[4].other+'" style="width: 100%;height: 100%"></a></div>\n' +
                '                    </div>\n' +
                '                    <div class="layui-row" style="height: 80px;background-color: #4c5dbf;margin:10px;"><a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[5].taskId+'"><img src="'+queryUrl+'/file/'+res.data[5].other+'" style="width: 100%;height: 100%"></div>\n' +
                '                    <div class="layui-row" style="height: 100px;margin:10px;">\n' +
                '                        <div class="layui-col-md6" style="height:100%;padding: 5px;background-color: #4c5dbf"><a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[6].taskId+'"><img src="'+queryUrl+'/file/'+res.data[6].other+'" style="width: 100%;height: 100%"></a></div>\n' +
                '                        <div class="layui-col-md1">&nbsp;</div>\n' +
                '                        <div class="layui-col-md5" style="height:100%;padding: 5px;background-color: #4c5dbf"><a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[7].taskId+'"><img src="'+queryUrl+'/file/'+res.data[7].other+'" style="width: 100%;height: 100%"></a></div>\n' +
                '                    </div>';

        $('#pingtai').empty().append(data);
        //轮播图
        var lunbo='';
        lunbo+='                <div carousel-item="">\n' +
            '                    <div>\n' +
            '                       <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[8].taskId+'"><img src="'+queryUrl+'/file/'+res.data[8].other+'" style="width: 100%;height: 100%"></a>\n' +
            '                    </div>\n' +
            '                    <div>\n' +
            '                        <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[9].taskId+'"><img src="'+queryUrl+'/file/'+res.data[9].other+'" style="width: 100%;height: 100%"></a>\n' +
            '                    </div>\n' +
            '                    <div>\n' +
            '                        <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[10].taskId+'"><img src="'+queryUrl+'/file/'+res.data[10].other+'" style="width: 100%;height: 100%"></a>\n' +
            '                    </div>\n' +
            '                    <div>\n' +
            '                        <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[11].taskId+'"><img src="'+queryUrl+'/file/'+res.data[11].other+'" style="width: 100%;height: 100%"></a>\n' +
            '                    </div>\n' +
            '                </div>';
        $('#test2').empty().append(lunbo);

        //热门企业
        var hotT='';
        hotT+='<div class="layui-col-md3" style="padding: 5px;height: 200px;">\n' +
            '       <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[12].taskId+'"><img src="'+queryUrl+'/file/'+res.data[12].other+'" style="width: 100%;height: 100%"></a>\n' +
            '    </div>\n' +
            '    <div class="layui-col-md3" style="padding: 5px;height: 200px;">\n' +
            '       <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[13].taskId+'"><img src="'+queryUrl+'/file/'+res.data[13].other+'" style="width: 100%;height: 100%"></a>\n' +
            '    </div>\n' +
            '    <div class="layui-col-md3" style="padding: 5px;height: 200px;">\n' +
            '       <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[14].taskId+'"><img src="'+queryUrl+'/file/'+res.data[14].other+'" style="width: 100%;height: 100%"></a>\n' +
            '    </div>\n' +
            '    <div class="layui-col-md3" style="padding: 5px;height: 200px;">\n' +
            '       <a href="http://localhost:63342/torder/torder_web/static/page/task.html?taskId='+res.data[15].taskId+'"><img src="'+queryUrl+'/file/'+res.data[15].other+'" style="width: 100%;height: 100%"></a>\n' +
            '    </div>';
        $('#hot').empty().append(hotT);
    }
});
$('body').on('click', '.addFav', function () {
    if (layui.sessionData('user').user!=null){
        let favper={
            "userCode":layui.sessionData('user').user.code,
            "targetCode":$(this).attr("tag")
        }
        var a=this;
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodFavorites + addMethod,
            aynsc: false,
            data: JSON.stringify(favper),
            contentType: "application/json;charset=UTF-8",
            success: function (result) {
                // var b='<button type="button" class="layui-btn  layui-btn-radius layui-btn-disabled" style="font-size: 15px;"><i class="layui-icon layui-icon-heart-fill">已关注</i></button>';
                // $("#cbtn").empty().append(b)
                $(a).css("display","none");
                layer.msg("关注成功，可在好友列表中查看");
            }
        });
    }
    else {
        layer.msg("要先登入在可以关注对方哦")
    }

});
