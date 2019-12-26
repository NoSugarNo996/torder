var url = "//172.16.20.111:";
var port = "7011";


var userId = "1";

//序列化表单字段为json对象
$.fn.serializeFormToJson = function () {
    var arr = $(this).serializeArray();//form表单数据 name：value
    var param = {};
    param['userId'] = userId;
    $.each(arr, function (i, obj) { //将form表单数据封装成json对象
        param[obj.name] = obj.value;
    })

    return param;

}
// var formData = $("#zq_form").serializeFormToJson();
// console.debug(formData);

function getSelectOption(obj,type) {
    // 获取下拉框
    $.ajax({
        type: "get",
        url: url + port + "/dics/queryList?dicsCode=" + type,
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

