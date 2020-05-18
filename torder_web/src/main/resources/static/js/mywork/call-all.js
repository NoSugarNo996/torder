
lan();
layui.use('flow', function(){
    var flow = layui.flow;

        flow.load({
            elem: '#LAY_demo1' //流加载容器
            ,scrollElem: '#LAY_demo1' //滚动条所在元素，一般不用填，此处只是演示需要。
            ,done: function(page, next){ //执行下一页的回调
                //ajax请求
                let eventObj3 = {
                    "pageSize": 20,
                    "pageNum": page,
                    "userCode":layui.sessionData('user').user.code,
                    "favType":1
                    // "taskPublisher":layui.sessionData('user').user.code,
                    // "taskStatus":2
                }
                $.ajax({
                    type: "post",
                    url: queryUrl + queryMethodFavorites + queryListMethod,
                    dataType: "json",
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify(eventObj3),
                    success: function (res) {
                        var lis = [];
                        for (var a=0;a<4;a++){
                            lis.push('  <div class="layui-row" style="padding: 10px;">');
                            for (var b=0;b<4;b++){
                                if ( (a*4+b)<res.size){
                                    lis.push('<div class="layui-col-md3" style="padding: 5px;">\n' +
                                        '                <div style="border: 1px solid #c0c6c0;height: 170px;">\n' +
                                        '                    <div class="layui-row" style="padding: 10px;">\n' +
                                        '                        <div class="layui-col-md4" style="height: 100px;"><img src="../../images/case-logo004.png" style="width: 100%;height: 100%"></div>\n' +
                                        '                        <div class="layui-col-md7" style="padding: 15px;">\n' +
                                        '                            <div class="layui-row" style="font-size: 18px;margin-bottom: 10px;">'+res.data[(a*4+b)].targetName+'</div>\n' );
                                    if(allUsers.indexOf (res.data[(a*4+b)].targetCode)){
                                        lis.push( '                            <div class="layui-row check"  data-method="notice" style="color: #2e6636" tag="'+res.data[(a*4+b)].targetCode+'"><div   style="font-size:15px;border: 0px solid #818581;border-radius: 20%;width: 100px;height: 30px;" ><i class="layui-icon layui-icon-dialogue" style="font-size: 20px; "></i>  立即联系</div></div>\n' );

                                    }
                                    else {
                                        lis.push( '                            <div class="layui-row"><div style="font-size:15px;color:#6f726f;border: 0px solid #818581;border-radius: 20%;width: 100px;height: 30px;"><i class="layui-icon layui-icon-dialogue" style="font-size: 20px; color: #6f726f;"></i>  未上线</div></div>\n' );
                                    }
                                    lis.push(  '                        </div>\n' +
                                        '                        <div class="layui-col-md1" style="text-align: right"><i class="layui-icon layui-icon-close-fill" style="font-size: 20px; color: #af1714;"></i></div>\n' +
                                        '                    </div>\n' +
                                        '                    <div class="layui-row" style="padding: 5px;height: 30px;">简介：'+res.data[(a*4+b)].audDes+'</div>\n' +
                                        '                </div>\n' +
                                        '\n' +
                                        '            </div>');
                                }

                            }
                            lis.push(' </div>');
                        }
                        // lis.push('<li>'+ ( (page-1)*res.pageSize + i + 1 ) +'</li>')


                        //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                        //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                        next(lis.join(''), page < res.pages); //假设总页数为 10
                    }
                });
                //模拟数据插入
                setTimeout(function(){

                }, 500);
            }
        });
});

let addObj={
    "msgTitle":'',
    "msgPublisher":layui.sessionData('user').user.code,
    "msgAccepter":''
};
$('body').on('click', '.check', function () {
    //获取消息详情
    addObj.msgPublisher=layui.sessionData('user').user.code;
    addObj.msgAccepter=$(this).attr('tag');
    console.log('xxxxx');
    let a=this;
    var othis = $(this), method = othis.data('method');
    active[method] ? active[method].call(a, othis) : '';
});

//弹窗
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
            ,btn: ['发送', '退出']
            ,btnAlign: 'c'
            ,moveType: 1 //拖拽模式，0或者1
            ,content:
                '<div class="layui-row" style="line-height: 30px;padding: 10px;">&nbsp;&nbsp;&nbsp;TO：发送内容：</div>'+
                '<div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">' +
                '<div class="layui-row" > ' +
                '      <textarea id="waittingShortSolution"  placeholder="请输入内容" class="layui-textarea" style="color: black;width: 100%;height: 100%"></textarea>\n' +
                ' </div></div>'
            ,yes: function(index, layero){
                //插入新消息

                addObj.msgTitle=$("#waittingShortSolution").val();
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
