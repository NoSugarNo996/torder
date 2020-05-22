


// var allUsers='' //定义一数组

// 拦截非login页面
function  lan() {

    if (layui.sessionData('talents').talents.talentsStatue!=2) {
        console.log("尚未开放权限，请先通过人才认证")
            //利用对话框返回的值 （true 或者 false）
            if (confirm("尚未开放权限，请先通过人才认证")) {
                window.location.href = '/torder/torder_web/static/page/mywork/talents.html';
            }
         else {
                window.location.href = '/torder/torder_web/static/page/mywork/myhome.html';
            }
    }


};

function getSelectOption(obj, type) {
    // 获取下拉框
    $.ajax({
        type: "get",
        url: queryUrl +queryMethodDics+ queryListMethod + "?dicsCode=" + type,
        aynsc:false,
        success: function (res) {
            var data = '';
            data += '<option value="">请选择</option>\n'
            for (let index = 0; index < res.length; index++) {
                data += '<option value="' + res[index].keyValue + '">' + res[index].keyName + '</option>\n'
            }
            $(obj).append(data);
        }
    });
}

function getCategoryParentSelectOption(obj) {
    // 获取下拉框
    $.ajax({
        type: "get",
        url: queryUrl +'/category/parent',
        aynsc:false,
        success: function (res) {
            var data = '';
            data += '<option value="">请选择</option>\n'
            for (let index = 0; index < res.length; index++) {
                data += '<option value="' + res[index].keyValue + '">' + res[index].keyName + '</option>\n'
            }
            $(obj).append(data);
        }
    });
}
function getCategoryChildrenSelectOption(obj, type) {
    // 获取下拉框
    $.ajax({
        type: "get",
        url: queryUrl + "/category/children?cParent=" + type,
        aynsc:false,
        success: function (res) {
            var data = '';
            data += '<option value="">请选择</option>\n'
            for (let index = 0; index < res.length; index++) {
                data += '<option value="' + res[index].keyValue + '">' + res[index].keyName + '</option>\n'
            }
            $(obj).append(data);
        }
    });
}

// 给所有ajax请求加头部。
$(document).ajaxSend(function (event, xhr) {
    xhr.setRequestHeader('token', layui.sessionData('user').user.token);
    xhr.setRequestHeader('userId', layui.sessionData('user').user.userId);
});

function getToJson(params) {
    var paramArr = params.split('&');
    var res = {};
    for (var i = 0; i < paramArr.length; i++) {
        var str = paramArr[i].split('=');
        res[str[0]] = decodeURI(str[1]);
        // decodeURI(param) 将ASCII码转为中文
    }
    return res;
}

layui.use(['layer'], function () {
    var layer = layui.layer;


    // 设置状态码错误提示
    $(document).ajaxError(function (event, xhr, options, exc) {
        switch (xhr.status) {
            case (500):
                layer.msg("服务器繁忙，请稍后再试");
                break;
            case (401):
                layer.msg('登录超时，请重新登录', {
                    time: 20000, //20s后自动关闭
                    btn: ['确定'],
                    yes: function () {

                        window.location.href = '/torder/torder_web/static/page/login.html';

                    }
                });
                setTimeout(() => {

                    window.location.href = '/torder/torder_web/static/page/login.html';
            
        }, 20000);
        break;
        //case(403):
        //    layer.msg("无权限执行此操作");
        //     break;
        // case (408):
        //     layer.msg("请求超时");
        //     break;
    }
    });
});