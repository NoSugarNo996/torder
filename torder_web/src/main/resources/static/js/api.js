
// 拦截非login页面
// if (location.href.lastIndexOf('/login') == -1) {
//     if (!layui.data('user').user) {
//         location.href = '../html/login.html';
//     }
//     var userId = layui.data('user').user.personnelId;
// }

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