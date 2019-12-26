// let eventObj = {
//     "id": '',
//     "name": '',
//     "sex": '',
//     "age": '',
//     "birthday": '',
//     "roots": '',
//     "volk": '',
//     "code": '',
//     "id_card": '',
//     "political": '',
//     "address": '',
//     "tel": '',
//     "email": '',
//     "parent_tel": '',
//     "parent_name1": '',
//     "parent_name2": '',
//     "school": '',
//     "major": '',
//     "grade": '',
//     "clazz": '',
//     "content": '',
//     "profession": '',
//     "pageSize": 10,
//     "pageNum": numEvent
//   }

$(function () {
    // 时分option渲染 
    for (var i = 0; i < 24; i++) {
        $("select[name^='hour']").append("<option value=" + i + ">" + i + "</option>");
    }
    for (var i = 0; i < 60; i++) {
        $("select[name^='minute']").append("<option value=" + i + ">" + i + "</option>");
    }

    // 勾选全天选项
    $('#allDay').change(function () {
        if ($(this).is(':checked')) {
            $("select[name^='hour'],select[name^='minute']").attr('disabled', 'disabled').css("color", "#626262");
            $("select[name='hour1'],select[name='minute1']").val(0);
            $("select[name='hour2']").val(23);
            $("select[name='minute2']").val(59);

        } else {
            $("select[name^='hour'],select[name^='minute']").removeAttr("disabled").css("color", "#216DCE");
        }
    });
    // 群组隐藏
    $('#owner').change(function () {
        if ($(this).val() === 'group') {
            $('.groupContent').removeClass('hide');
        } else {
            $('.groupContent').addClass('hide');
        }
    })


});

// 时间转换
function formDate(dateForm) {
    if (dateForm === "") {  //解决deteForm为空传1970-01-01 00:00:00
        return "";
    } else {
        var dateee = new Date(dateForm).toJSON();
        var date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
        date = date.substr(0, date.lastIndexOf(':'));
        return date;
    }
}
// console.log(formDate("Mon Nov 11 2019 08:00:00 GMT+0800 (中国标准时间)"))//2019-11-11 08:00



layui.use(['form', 'layedit', 'laydate'], function () {
    // 定义到全局 变量
    form = layui.form
        , layer = layui.layer
        , layedit = layui.layedit
        , laydate = layui.laydate;

        
});


document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid'],
        locale: 'zh-cn',
        height : window.innerHeight-20,  
        windowResize: function(view) {  
            $('#calendar').fullCalendar('option', 'height', window.innerHeight-20);  
        } , 
        events: [
            {
                id: 1,
                title: '早会',
                start: '2019-11-11 08:15:00',
                end: '2019-11-14 09:00:00',
                color: 'red'

            },
            {
                id: 2,
                title: '出差',
                start: '2019-11-14',
                end: '2019-11-16',
                allDay: true,
                color: 'blue'

            },
            {
                id: 3,
                title: '提交报告',
                start: '2019-11-11 08:00:00',
                end: '2019-11-11 08:10:00',
                color: 'red'

            },
            {
                id: 4,
                title: 'My Event',
                start: '2019-11-14',
                end: '2019-11-14',
                allDay: true,
                color: 'gray'

            },
            {
                id: 5,
                title: 'My Event',
                start: '2019-11-14 09:00',
                end: '2019-11-15 09:00',
                color: 'gray'

            },
            {
                id: 6,
                title: 'My Event',
                start: '2019-11-14 09:00',
                end: '2019-11-15 09:00',
                color: 'gray'

            }
        ],
        eventClick: function (info) {
            //  对显示时间进行处理
            //  全天 allDay:true 日历显示全天  ，start、end删掉时间，如果只有一天，不写end
            var start = formDate(info.event.start);
            var end = info.event.end == null ? "" : formDate(info.event.end);
            if (info.event.allDay) {
                start = start.substr(0, start.lastIndexOf(" "));
                end = end.substr(0, end.lastIndexOf(" "));
            }
            var time = start + ((start === end || end == '') ? "" : "  -  " + end);

            // 回显时间和标题
            $(".scheduleInfo .time").text(time);
            $(".scheduleInfo .title").text(info.event.title);

            // 打开弹出层
            layer.open({
                title: '我的日程'
                , type: 1
                , offset: [info.jsEvent.pageY - document.documentElement.scrollTop, info.jsEvent.pageX]
                , content: $('.scheduleInfo') 
                , btn: ['确定', '删除']
                , shade: 0
                , success: function (layero, index) {
                    form.render();    // 表单渲染
                    form.on('submit(bind)', function (data) {     // 打印data就可以看到form表单提交的数据
                        
                        // 只需传需要删除的事件id
                        alert(info.event.id);
                        //return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
                    });
                },
                btn2: function (index, layero) {
                    layero.find('.delBtn').click();    // 这一句就是点击确认按钮触发form的隐藏提交
                }
            });
        },
        dateClick: function (info) {
            // alert('Clicked on: ' + info.dateStr);
            $('.addSchedule #date1').val(info.dateStr);
            $('.addSchedule #date2').val(info.dateStr);
            layer.open({
                title: '日程'
                , type: 1
                , area: '450px'
                , content: $('.addSchedule') //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
                , btn: '保存'
                , success: function (layero, index) {
                    layui.laydate.render({
                        elem: '#date1'//指定元素
                    });
                    layui.laydate.render({
                        elem: '#date2'//指定元素
                    });
                    form.on('submit(bind)', function (data) {
                        // 传值
                        layer.msg(JSON.stringify(data.field));
                         return false;
                        
                    });
                },
                yes: function (index, layero) {
                    layero.find('.addBtn').click();    // 这一句就是点击确认按钮触发form的隐藏提交
                }
            });
            // change the day's background color just for fun
            // info.dayEl.style.backgroundColor = 'red';
        }
    });
    calendar.render();

});

// 搜索框实时响应
$('.searchName :input').on('input propertychange', function () {
    eventObj.name = $('.searchName input').val();
    getEventData();
  });

// 获取事件数据
// function getEventData(first) {
//   $.ajax({
//     type: "post",
//     url: url + "/event/queryEvent",
//     dataType: "json",
//     contentType: "application/json;charset=UTF-8",
//     data: JSON.stringify(eventObj),
//     success: function (res) {
//       tableLength = res.total
//       if (!first) {
//         changePage(pagetion);
//       }
//       var data = '';
//       for (let index = 0; index < res.data.length; index++) {
//         data += '<tr>\n' +
//           '<td>\n' +
//           '<div>' + ((index + 1) + (eventObj.pageNum - 1) * 10) + '</div>\n' +
//           '</td>\n' +
//           '<td>\n' +
//           '<div>' + res.data[index].name + '</div>\n' +
//           '</td>\n' +
//           '<td>\n' +
//           '<div>' + res.data[index].sex + '</div>\n' +
//           '</td>\n' +
//           '<td>\n' +
//           '<div>' + res.data[index].profession + '</div>\n' +
//           '</td>\n' +
//           '<td>\n' +
//           '<div>' + res.data[index].major + '</div>\n' +
//           '</td>\n' +
//           '<td>\n' +
//           '<div>' + res.data[index].grade + '级' + '</div>\n' +
//           '</td>\n' +
//           '<td>\n' +
//           '<div>' + res.data[index].clazz + '</div>\n' +
//           '</td>\n' +
//           '<td>\n' +
//           '<div class="operate">\n' +
//           '<span class="checkDetail" value="' + res.data[index].id + '">查看详情</span>\n' +
//           '<span class="editEvent" value="' + res.data[index].id + '">编辑</span>\n' +
//           '<span class="deleteEvent" value="' + res.data[index].id + '">删除</span>\n' +
//           '</div>\n' +
//           '</td>\n' +
//           '</tr>\n'
//       }
//       $('#eventTable').empty().append(data);
//     }
//   });
// }



// 获取本日历开始时间和结束时间

// $('#calendar').fullCalendar('getDate').startOf('month').format("YYYY-MM-DD")+" 00:00~" + $('#calendar').fullCalendar('getDate').endOf('month').format("YYYY-MM-DD")+" 23:59",
            