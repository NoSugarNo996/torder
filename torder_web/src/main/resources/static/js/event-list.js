var numEvent = 1; //当前页
let tableLength; // 分页长度
let editId;
let status;
let eventObj = {
  "eventTitle": '',
  "pageSize": 5,
  "pageNum": numEvent
}


// 进入页面获取表格
getEventData();

// 获取事件状态下拉框
$.ajax({
  type: "get",
  url: url + port + "/dics/queryList?dicsCode=APPROVAL_STATE",
  async: false,
  success: function (res) {
    var data = '';
    status = res;
    data += '<div value="">事件状态</div>\n'
    for (let index = 0; index < res.length; index++) {
      data += '<div value="' + res[index].keyValue + '">' + res[index].keyName + '</div>\n'
    }
    $('.statusType').append(data);
  }
});

// 使用FlowApi获取列表
function getEventData(first) {

  $.ajax({
    type: "post",
    url: url + port + "/flow/queryList",
    dataType: "json",
    contentType: "application/json;charset=UTF-8",
    data: JSON.stringify(eventObj),
    success: function (res) {
      tableLength = res.total;
      if (!first) {
        changePage($('#pagetion'));
      }
      var data = '';
      for (let index = 0; index < res.data.length; index++) {
        // for (let i = 0; i < status.length; i++)
        //   if (res.data[index].eventState == status[i].keyValue) {
        //     res.data[index].eventState = status[i].keyName;
        //   }
        data += '<tr>\n' +
          '<td>\n' +
          '<div>' + ((index + 1) + (eventObj.pageNum - 1) * 10) + '</div>\n' +
          '</td>\n' +
          '<td>\n' +
          '<div>' + res.data[index].flowEventTime + '</div>\n' +
          '</td>\n' +
          '<td>\n' +
          '<div>' + res.data[index].flowEventTitle + '</div>\n' +
          '</td>\n' +
          '<td>\n' +
          '<div>' + res.data[index].flowEventDes + '</div>\n' +
          '</td>\n' +
          '<td>\n' +
          '<div>' + res.data[index].flowStateName + '</div>\n' +
          '</td>\n' +
          '<td>\n' +
          '<div class="operate">\n' +
          '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].flowId + '">查看详情</button>\n' +
          '<button type="button" class="submitEvent layui-btn layui-btn-sm layui-btn-normal" onclick="submitOrEndorseEvent(\'' + res.data[index].instanceId + '\',\'上报\',' + res.data[index].flowId + ')"  >上报</button>\n' +
          '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" onclick="submitOrEndorseEvent(\'' + res.data[index].instanceId + '\',\'批转\',' + res.data[index].flowId + ')" >批转</button>\n' +
          '</div>\n' +
          '</td>\n' +
          '</tr>\n'
      }
      $('#eventTable').empty().append(data);
    }
  });
}

// 使用DataAuditApi获取列表
// function getEventData(first) {

//   $.ajax({
//     type: "post",
//     url: url + port + "/DataAudit/getAllHistory",
//     dataType: "json",
//     contentType: "application/json;charset=UTF-8",
//     data: JSON.stringify(eventObj),
//     success: function (res) {
//       tableLength = res.total
//       console.log(res)
//       if (!first) {
//         changePage($('#pagetion'));
//       }
//       var data = '';
//       for (let index = 0; index < res.data.length; index++) {
//         for (let i = 0; i < status.length; i++)
//           if (res.data[index].eventState == status[i].keyValue) {
//             res.data[index].eventState = status[i].keyName;
//           }
//         data += '<tr>\n' +
//           '<td>\n' +
//           '<div>' + ((index + 1) + (eventObj.pageNum - 1) * 10) + '</div>\n' +
//           '</td>\n' +
//           '<td>\n' +
//           '<div>' + res.data[index].eventTime + '</div>\n' +
//           '</td>\n' +
//           '<td>\n' +
//           '<div>' + res.data[index].eventTitle + '</div>\n' +
//           '</td>\n' +
//           '<td>\n' +
//           '<div>' + res.data[index].eventRemark + '</div>\n' +
//           '</td>\n' +
//           '<td>\n' +
//           '<div>' + res.data[index].eventState + '</div>\n' +
//           '</td>\n' +
//           '<td>\n' +
//           '<div class="operate">\n' +
//           '<button type="button" class="checkDetail layui-btn layui-btn-sm layui-btn-primary" value="' + res.data[index].eventId + '">查看详情</button>\n' +
//           '<button type="button" class="submitEvent layui-btn layui-btn-sm layui-btn-normal" onclick="submitOrEndorseEvent(\'' + res.data[index].instanceId + '\',\'上报\')"  >上报</button>\n' +
//           '<button type="button" class="endorseEvent layui-btn layui-btn-sm layui-btn-warm" onclick="submitOrEndorseEvent(\'' + res.data[index].instanceId + '\',\'批转\')" >批转</button>\n' +
//           '</div>\n' +
//           '</td>\n' +
//           '</tr>\n'
//       }
//       $('#eventTable').empty().append(data);
//     }
//   });
// }


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


// 下拉框函数
$(document).on('click', '.f-push>p', function () {
  event.stopPropagation();
  if ($(this).parent().hasClass('marker')) {
    return false;
  }
  $(this).siblings('div').toggle();
  $(this).parent().addClass('marker');
}).on('click', '.f-push>div>div', function () {
  event.stopPropagation();
  $(this).parent().siblings('p').attr('value', $(this).attr('value')).html($(this).text());
  $(this).parent().hide();
  $(this).parent().parent().removeClass('marker');
}).click(function (event) {
  var _con = $('.f-push');
  if (!_con.is(event.target) && _con.has(event.target).length === 0) {
    $('.f-push>div').hide();
    $('.f-push').removeClass('marker');
  }
});





// 搜索框实时响应
$('.searchName :input').on('input propertychange', function () {
  eventObj.eventTitle = $('.searchName input').val();
  getEventData();
});

// 下拉框实时响应
$('#statusTypeName').bind("DOMNodeInserted", function (e) {
  eventObj.flowState = $('#statusTypeName').attr("value");
  getEventData();
})

layui.use('laydate', function () {
  var laydate = layui.laydate;
  //日期范围选择
  laydate.render({
    elem: '#date'
    , range: true //或 range: '~' 来自定义分割字符
    , done: function (value, date) {
      // 触发时间搜索框
      var date = value.split(" - ");
      if (date[0]) {
        eventObj.startTime = date[0] + " 00:00:00";
        eventObj.endTime = date[1] + " 23:59:59";
      }else{
        eventObj.startTime ="";
        eventObj.endTime ="";
      }
      getEventData();
    }
  });
});


$('.addEvent').click(function () {
  window.parent.$('#changeIframes').attr('src', './event-add.html?')
})



// 选择上报弹出层
layui.extend({
  dtree: '../layui/layui_ext/dtree/dtree'   // {/}的意思即代表采用自有路径，即不跟随 base 路径
}).use(['dtree', 'layer', 'jquery'], function () {
  dtree = layui.dtree, layer = layui.layer, $ = layui.jquery;
});

// 点击上报或批转
function submitOrEndorseEvent(instanceId, btn, flowId) {
  var data = [];
  var submitToIds = [];
  // var submitToNames = [];
  var personnelData = getData("personnel");
  var departmentData = getData("department");
  var institutionData = getData("institution");
  data = data.concat(personnelData).concat(departmentData).concat(institutionData);
  console.log(data);
  // 获取通讯录数据
  function getData(dataName) {
    let result = [];
    $.ajax({
      type: "post",
      url: url + port + "/" + dataName + "/queryList",
      dataType: "json",
      contentType: "application/json;charset=UTF-8",
      data: JSON.stringify({}), //取得表单所有参数
      async: false,
      success: function (res) {
        res.data.forEach(function (item) {
          let obj = {};
          obj.title = item[dataName + "Name"];
          obj.checkArr = "0";
          switch (dataName) {
            case "personnel": {
              obj.parentId = (Array(3).join('0') + item.personnelDepartmentId).slice(-3) || "0";
              obj.id = (Array(5).join(0) + item[dataName + "Id"]).slice(-5);//5位数补0
              break;
            }
            case "department": {
              obj.parentId = (Array(2).join(0) + item.departmentInstitutionId).slice(-2) || "0";
              obj.id = (Array(3).join(0) + item[dataName + "Id"]).slice(-3);
              break;
            }
            case "institution": {
              obj.id = (Array(2).join(0) + item[dataName + "Id"]).slice(-2);
              obj.parentId = "0";
              break;
            }
          }
          result.push(obj);
        });
      }
    });
    return result;
  }
  var submitObj = {
    userId: userId,
    btn: btn,
    comment: "",
    flowId: flowId,
    instanceId: instanceId
  };
  var DTree = null;
  layer.open({
    type: 1, //type:0 也行
    title: "请选择需要" + btn + "的人员",
    area: ["400px", "80%"],
    content: '<ul id="contactsTree" class="dtree" data-id="0"></ul>',
    btn: ['确认选择'],
    success: function (layero, index) {

      DTree = dtree.render({
        obj: $(layero).find("#contactsTree"),
        data: data, // 使用data加载
        //   url: "../json/case/demoJson.json" // 使用url加载（可与data加载同时存在）
        dataFormat: "list",  //配置data的风格为list
        skin: "laySimple",  // laySimple主题风格
        checkbar: true, //开启复选框
        checkbarType: "no-all" // 默认就是all，其他的值为： no-all  p-casc单项级联   self  only
      });
    },
    yes: function (index, layero) {
      var params = dtree.getCheckbarNodesParam("contactsTree"); // 获取选中值
      if (params.length == 0) {
        layer.msg("请至少选择一个节点", { icon: 2 });
      } else {
        //询问框
        layer.confirm('确认' + btn + '?', {
          btn: ['确认', '取消'] //按钮
        }, function () {
          submitToIds = [];
          var paramJsonArr = DTree.getCheckbarJsonArrParam();
          paramJsonArr["nodeId"].forEach(function (item) {
            if (item.length == 5) {
              submitToIds.push(parseInt(item));
            }
          })
          console.log("submitToIds");
          console.log(submitToIds);
          submitObj.nextOpr = submitToIds.join(",");
          console.log(JSON.stringify(submitObj));
          // 
          $.ajax({
            type: "post",
            url: url + port + "/DataAudit/CompleteTask",
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(submitObj),
            success: function (res) {
              console.log("btnOprSuccess");
              layer.msg(btn + '成功', { icon: 1 });
              flag = true;
              layer.close(index);
              callParent('1', submitObj.nextOpr, "I'm son" + userId);
            },
            error: function () {
              console.log("btnOprError");
              layer.msg(btn + '失败，请稍后再试', { icon: 2 });
            }
          });

        }, function (index) {
          layer.close(index);
        });
      }
    },
    end: function () {
      location.reload();//弹出层结束后，刷新主页面
    }
  });
}

// 使用父页面
function callParent(type, nextOpr, msg) {
  parent.window.send(type, nextOpr, msg);
  console.log("子节点发送成功");
}