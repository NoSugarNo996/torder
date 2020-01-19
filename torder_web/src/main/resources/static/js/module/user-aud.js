var numEvent = 1; //当前页
let tableLength; // 分页长度
let editId;
let status;
let eventObj = {
  "userName":'',
  "pageSize": 10,
  "pageNum": numEvent
}

//表单初始化
layui.use(['form', 'layedit', 'laydate'], function () {
  var form = layui.form,
      layer = layui.layer



// 进入页面获取表格
getEventData();

// 获取列表
function getEventData(first) {

  $.ajax({
    type: "post",
    url: queryUrl + queryMethodUser + queryListMethod,
    dataType: "json",
    contentType: "application/json;charset=UTF-8",
    data: JSON.stringify(eventObj),
    success: function (res) {
      tableLength = res.count;
      if (!first) {
        changePage($('#pagetion'));
      }
      var data = '';
      for (let index = 0; index < res.data.length; index++) {
        data += '<tr>\n' +
          '<td>\n' +
          '<div>' + ((index + 1) + (eventObj.pageNum - 1) * 10) + '</div>\n' +
          '</td>\n' +
          '<td>\n' +
          '<div>' + res.data[index].userNickname + '</div>\n' +
          '</td>\n' +
          '<td>\n' +
          '<div>' + res.data[index].userName + '</div>\n' +
          '</td>\n' +
          '<td>\n' +
          '<div>' + res.data[index].userPhone + '</div>\n' +
          '</td>\n' +
          '<td>\n' +
          '<div>' + res.data[index].userStatus + '</div>\n' +
          '</td>\n' +
          '<td>\n' +
          '<div class="operate">\n' +
          '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].userId + '">编辑</button>\n' +
          '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" value="' + res.data[index].userId + '">禁用</button>\n' +
          '</div>\n' +
          '</td>\n' +
          '</tr>\n'
      }
      $('#eventTable').empty().append(data);
    }
  });
}

// 改变分页函数
function changePage(el) {
  layui.use(['laypage', 'layer'], function () {
    var laypage = layui.laypage,
      layer = layui.layer;
    laypage.render({
      elem: el,
      count: tableLength,
      limit: eventObj.pageSize,
      first: '首页',
      last: '尾页',
      prev: '<em>←</em>',
      next: '<em>→</em>',
      jump: function (obj, first) {
        eventObj.pageNum = obj.curr;
        if (!first) {
          getEventData(1);
        }
      }
    })
  });
}

// 搜索框实时响应
$('.searchName :input').on('input propertychange', function () {
  eventObj.userName = $('.searchName input').val();
  getEventData();
});

//点击添加提示框
$('#add').on("click",function(){
  layer.open({
    type: 1
    , content: $('#addForm')
    , btnAlign: 'c' //按钮居中
    , shade: 0 //不显示遮罩
  });
})

  //监听提交
  form.on('submit(verify)', function (data) {
    let eventObj = data.field;
    eventObj.userSex = $('#userSex').attr('value');
    $.ajax({
      type: "post",
      url: queryUrl + queryMethodUser + addMethod,
      dataType: "json",
      contentType: "application/json;charset=UTF-8",
      data: JSON.stringify(eventObj),
      success: function (res) {
        if (res==1){
          layer.msg('添加成功');
          getEventData();
        }
        else {
          layer.msg("添加失败");
        }
      }
    });
    setTimeout(() => {
      //$('#addForm').css("display","none");
    }, 1000);
    return false;
  });
  //监听更新
  form.on('submit(verify1)', function (data) {
    let eventObj = data.field;
    eventObj.userSex = $('#userSex').attr('value');
    $.ajax({
      type: "post",
      url: queryUrl + queryMethodUser + updateMethod,
      dataType: "json",
      contentType: "application/json;charset=UTF-8",
      data: JSON.stringify(eventObj),
      success: function (res) {
        if (res==1){
          layer.msg('更新成功');
          getEventData();
        }
        else
          layer.msg("更新失败");

      }
    });
    setTimeout(() => {
     // $('#updateForm').css("display","none");
    }, 1000);
    return false;
  });



  // $('#layerDemo .layui-btn').on('click', function () {
  //   var othis = $(this), method = othis.data('method');
  //   active[method] ? active[method].call(this, othis) : '';
  // });

//更新弹窗初始化
  $('body').on('click', '.checkDetail', function () {
    $.ajax({
      type: "get",
      url: queryUrl + queryMethodUser + getInfoMethod,
      dataType: "json",
      contentType: "application/json;charset=UTF-8",
      data: {
        "id": $(this).attr('value')
      },
      success: function (res) {
        form.val('update', {
          "userId":res.userId,
          "userName": res.userName,
          "userNickname": res.userNickname,
          "userPwd": res.userPwd,
          "userPhone": res.userPhone
        });
      }
    });
    layer.open({
      type: 1
      , content: $('#updateForm')
      , btnAlign: 'c' //按钮居中
      , shade: 0 //不显示遮罩
    });
  });

//删除
  $('body').on('click', '.endorseEvent', function () {
    $.ajax({
      type: "get",
      url: queryUrl + queryMethodUser + deleteMethod,
      data: {
        "id": $(this).attr('value')
      },
      success: function (res) {
        layui.use('layer', function () {
          var layer = layui.layer;
          layer.msg('禁用成功');
        });
        setTimeout(() => {
          getEventData();
        }, 1000);
      }
    });
  });

});