lan();
//表单初始化
layui.use(['form', 'layer','layedit', "laydate",'laydate'], function () {
    var form = layui.form,
        layer = layui.layer,laydate = layui.laydate;
    var upload = layui.upload;
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

//全部记录
    var numEvent1 = 1; //当前页
    let tableLength1; // 分页长度
    let eventObj1 = {
        "pageSize": 10,
        "pageNum": numEvent1,
        "my":layui.sessionData('user').user.code
    }

// 进入页面获取表格 全部记录
    getEventData1();

// 获取列表 全部记录
    function getEventData1(first) {

        $.ajax({
            type: "post",
            url: queryUrl + queryMethodOrder + queryListMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj1),
            success: function (res) {
                tableLength1 = res.count;
                if (!first) {
                    changePage1($('#pagetion1'));
                }
                var data = '';
                for (let index = 0; index < res.data.length; index++) {
                    data += '<tr>\n' +
                        '<td>\n' +
                        '<div>' + ((index + 1) + (eventObj1.pageNum - 1) * 10) + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderStart + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderEnd + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderPartyAName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderPartyBName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderStatusName + '</div>\n' +
                        '</td>\n' +
                        '</tr>\n'
                }
                $('#eventTable1').empty().append(data);
            }
        });
    }

// 改变分页函数
    function changePage1(el) {
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage,
                layer = layui.layer;
            laypage.render({
                elem: el,
                count: tableLength1,
                limit: eventObj1.pageSize,
                first: '首页',
                last: '尾页',
                prev: '<em>←</em>',
                next: '<em>→</em>',
                jump: function (obj, first) {
                    eventObj1.pageNum = obj.curr;
                    if (!first) {
                        getEventData1(1);
                    }
                }
            })
        });
    }


//充值
    var numEvent2 = 1; //当前页
    let tableLength2; // 分页长度
    let eventObj2 = {
        "pageSize": 10,
        "pageNum": numEvent2,
        "orderPartyB":'c56caeed7b204f9db7c935a9d00cefb2',
        "orderPartyA":layui.sessionData('user').user.code
    }

// 进入页面获取表格
    getEventData2();

// 获取列表
    function getEventData2(first) {

        $.ajax({
            type: "post",
            url: queryUrl + queryMethodOrder + queryListMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj2),
            success: function (res) {
                tableLength2 = res.count;
                if (!first) {
                    changePage2($('#pagetion2'));
                }
                var data = '';
                for (let index = 0; index < res.data.length; index++) {
                    data += '<tr>\n' +
                        '<td>\n' +
                        '<div>' + ((index + 1) + (eventObj1.pageNum - 1) * 10) + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderStart + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderEnd + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderPartyAName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderPartyBName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderStatusName + '</div>\n' +
                        '</td>\n' +
                        '</tr>\n'
                }
                $('#eventTable2').empty().append(data);
            }
        });
    }

// 改变分页函数
    function changePage2(el) {
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage,
                layer = layui.layer;
            laypage.render({
                elem: el,
                count: tableLength2,
                limit: eventObj2.pageSize,
                first: '首页',
                last: '尾页',
                prev: '<em>←</em>',
                next: '<em>→</em>',
                jump: function (obj, first) {
                    eventObj2.pageNum = obj.curr;
                    if (!first) {
                        getEventData2(1);
                    }
                }
            })
        });
    }


//收入
    var numEvent3 = 1; //当前页
    let tableLength3; // 分页长度
    let eventObj3 = {
        "pageSize": 10,
        "pageNum": numEvent3,
        "orderPartyB":layui.sessionData('user').user.code
    }
// 进入页面获取表格
    getEventData3();
// 获取列表
    function getEventData3(first) {

        $.ajax({
            type: "post",
            url: queryUrl + queryMethodOrder + queryListMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj3),
            success: function (res) {
                tableLength3 = res.count;
                if (!first) {
                    changePage3($('#pagetion3'));
                }
                var data = '';
                for (let index = 0; index < res.data.length; index++) {
                    data += '<tr>\n' +
                        '<td>\n' +
                        '<div>' + ((index + 1) + (eventObj1.pageNum - 1) * 10) + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderStart + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderEnd + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderPartyAName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderPartyBName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderStatusName + '</div>\n' +
                        '</td>\n' +
                        '</tr>\n'
                }
                $('#eventTable3').empty().append(data);
            }
        });
    }
// 改变分页函数
    function changePage3(el) {
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage,
                layer = layui.layer;
            laypage.render({
                elem: el,
                count: tableLength3,
                limit: eventObj3.pageSize,
                first: '首页',
                last: '尾页',
                prev: '<em>←</em>',
                next: '<em>→</em>',
                jump: function (obj, first) {
                    eventObj3.pageNum = obj.curr;
                    if (!first) {
                        getEventData3(1);
                    }
                }
            })
        });
    }


//支出
    var numEvent4 = 1; //当前页
    let tableLength4; // 分页长度
    let eventObj4 = {
        "pageSize": 10,
        "pageNum": numEvent4,
        "orderPartyA":layui.sessionData('user').user.code
    }
// 进入页面获取表格
    getEventData4();
// 获取列表
    function getEventData4(first) {

        $.ajax({
            type: "post",
            url: queryUrl + queryMethodOrder + queryListMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj4),
            success: function (res) {
                tableLength4 = res.count;
                if (!first) {
                    changePage4($('#pagetion4'));
                }
                var data = '';
                for (let index = 0; index < res.data.length; index++) {
                    data += '<tr>\n' +
                        '<td>\n' +
                        '<div>' + ((index + 1) + (eventObj1.pageNum - 1) * 10) + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderStart + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderEnd + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderPartyAName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderPartyBName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderStatusName + '</div>\n' +
                        '</td>\n' +
                        '</tr>\n'
                }
                $('#eventTable4').empty().append(data);
            }
        });
    }
// 改变分页函数
    function changePage4(el) {
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage,
                layer = layui.layer;
            laypage.render({
                elem: el,
                count: tableLength4,
                limit: eventObj4.pageSize,
                first: '首页',
                last: '尾页',
                prev: '<em>←</em>',
                next: '<em>→</em>',
                jump: function (obj, first) {
                    eventObj4.pageNum = obj.curr;
                    if (!first) {
                        getEventData4(1);
                    }
                }
            })
        });
    }


//提现
    var numEvent5 = 1; //当前页
    let tableLength5; // 分页长度
    let eventObj5 = {
        "pageSize": 10,
        "pageNum": numEvent5,
        "orderPartyA":'c56caeed7b204f9db7c935a9d00cefb2',
        "orderPartyB":layui.sessionData('user').user.code

    }
// 进入页面获取表格
    getEventData5();
// 获取列表
    function getEventData5(first) {

        $.ajax({
            type: "post",
            url: queryUrl + queryMethodOrder + queryListMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj5),
            success: function (res) {
                tableLength5 = res.count;
                if (!first) {
                    changePage5($('#pagetion5'));
                }
                var data = '';
                for (let index = 0; index < res.data.length; index++) {
                    data += '<tr>\n' +
                        '<td>\n' +
                        '<div>' + ((index + 1) + (eventObj1.pageNum - 1) * 10) + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderStart + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderEnd + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderPartyAName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderPartyBName + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderMoney + '</div>\n' +
                        '</td>\n' +
                        '<td>\n' +
                        '<div>' + res.data[index].orderStatusName + '</div>\n' +
                        '</td>\n' +
                        '</tr>\n'
                }
                $('#eventTable5').empty().append(data);
            }
        });
    }
// 改变分页函数
    function changePage5(el) {
        layui.use(['laypage', 'layer'], function () {
            var laypage = layui.laypage,
                layer = layui.layer;
            laypage.render({
                elem: el,
                count: tableLength5,
                limit: eventObj5.pageSize,
                first: '首页',
                last: '尾页',
                prev: '<em>←</em>',
                next: '<em>→</em>',
                jump: function (obj, first) {
                    eventObj5.pageNum = obj.curr;
                    if (!first) {
                        getEventData5(1);
                    }
                }
            })
        });
    }




});
