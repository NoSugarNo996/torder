
var eventObj = {
    "userId": userId,
    "eventSubmissionPeople": userId
};
var draftObj;
var verifyData = location.search.substr(1).split("&");

// 获取下拉框内容
getSelectOption("select[name='eventSubmissionType']", 'SUBMISSING_TYPE');
getSelectOption("select[name='eventType']", 'EVENT_TYPE');
getSelectOption("select[name='eventLevel']", 'EVENT_LEVEL');
getSelectOption("select[name='eventArea']", 'AREA');

$(function () {
    layui.use(["form", "upload", "laydate", "jquery"], function () {
        var form = layui.form, $ = layui.jquery
            , upload = layui.upload, laydate = layui.laydate;



        // 渲染多个日期组件
        $(".input-date").each(function () {
            //日期时间选择
            laydate.render({
                elem: this, //指定元素  表示当前的元素
                type: 'datetime'
                , value: new Date()
                , format: 'yyyy-MM-dd HH:mm:ss'
                , theme: '#009688'  //主题  颜色改变

            });
            console.log("dateAddOk");
        });






        //多文件列表示例
        var demoListView = $('#demoList')
            , uploadListIns = upload.render({
                elem: '#testList'
                , url: '/upload/'
                , accept: 'file'
                , multiple: true
                , auto: false
                , bindAction: '#testListAction'
                , choose: function (obj) {
                    var files = this.files = obj.pushFile(); //将每次选择的文件追加到文件队列
                    //读取本地文件
                    obj.preview(function (index, file, result) {
                        var tr = $(['<tr id="upload-' + index + '">'
                            , '<td>' + file.name + '</td>'
                            , '<td>' + (file.size / 1014).toFixed(1) + 'kb</td>'
                            , '<td>等待上传</td>'
                            , '<td>'
                            , '<button class="layui-btn layui-btn-xs demo-reload layui-hide">重传</button>'
                            , '<button class="layui-btn layui-btn-xs layui-btn-danger demo-delete">删除</button>'
                            , '</td>'
                            , '</tr>'].join(''));

                        //单个重传
                        tr.find('.demo-reload').on('click', function () {
                            obj.upload(index, file);
                        });

                        //删除
                        tr.find('.demo-delete').on('click', function () {
                            delete files[index]; //删除对应的文件
                            tr.remove();
                            uploadListIns.config.elem.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
                        });

                        demoListView.append(tr);
                    });
                }
                , done: function (res, index, upload) {
                    if (res.code == 0) { //上传成功
                        var tr = demoListView.find('tr#upload-' + index)
                            , tds = tr.children();
                        tds.eq(2).html('<span style="color: #5FB878;">上传成功</span>');
                        tds.eq(3).html(''); //清空操作
                        return delete this.files[index]; //删除文件队列已经上传成功的文件
                    }
                    this.error(index, upload);
                }
                , error: function (index, upload) {
                    var tr = demoListView.find('tr#upload-' + index)
                        , tds = tr.children();
                    tds.eq(2).html('<span style="color: #FF5722;">上传失败</span>');
                    tds.eq(3).find('.demo-reload').removeClass('layui-hide'); //显示重传
                }
            });




        // 获取草稿
        function getDraft() {
            $.ajax({
                type: "post",
                url: url + port + "/event/getDraft?event_submission_people=" + userId,
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                success: function (res) {
                    draftObj = res;
                    console.log(res);
                    form.val("add", res);
                    console.log("draftAddOk");

                }, error: function () {
                    console.log("notDraft")
                }
            });
        }
        getDraft();

        // 保存
        // draft=1为草稿 
        function save(draft) {
            let eventId;
            eventObj = form.val("add");
            eventObj["userId"] = userId;
            eventObj["eventSubmissionPeople"] = userId;
            eventObj["draft"] = draft || 0;
            console.log("draft" + eventObj.draft);
            if (!draftObj) {
                // 如果之前没有草稿
                console.log(JSON.stringify(eventObj))
                $.ajax({
                    url: url + port + "/event/add",
                    dataType: "json",
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify(eventObj), //取得表单所有参数
                    type: "post",
                    async: false,
                    success: function (result) {
                        // result为保存的事件id
                        if (result) {
                            if (draft) {
                                console.log('保存草稿成功' + result);
                                layer.msg('保存草稿成功', {
                                    icon: 1,
                                    time: 1500 //2秒关闭（如果不配置，默认是3秒）
                                }, function () {
                                    window.parent.$('#changeIframes').attr('src', './event-list.html')
                                });
                                eventId = result;
                            } else {
                                console.log('添加成功' + result);
                                layer.msg('添加成功', {
                                    icon: 1,
                                    time: 1500 //2秒关闭（如果不配置，默认是3秒）
                                }, function () {
                                    window.parent.$('#changeIframes').attr('src', './event-list.html')
                                });
                                addFlow(eventObj);
                            }

                        }
                    },
                    error: function () {
                        console.log("addError")
                    }
                });
            } else {
                // 如果之前有草稿
                console.log("draftObj")
                eventObj["eventId"] = draftObj.eventId;
                console.log(JSON.stringify(eventObj))
                $.ajax({
                    url: url + port + "/event/update",
                    dataType: "json",
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify(eventObj), //取得表单所有参数
                    type: "post",
                    async: false,
                    success: function (result) {
                        // result为保存的事件id
                        if (result) {
                            if (draft) {
                                console.log('保存草稿成功' + result);
                                layer.msg('保存草稿成功', {
                                    icon: 1,
                                    time: 1500 //2秒关闭（如果不配置，默认是3秒）
                                }, function () {
                                    window.parent.$('#changeIframes').attr('src', './event-list.html')
                                });
                                eventId = result;
                            } else {
                                console.log('更新成功' + result);
                                layer.msg('添加成功', {
                                    icon: 1,
                                    time: 1500 //2秒关闭（如果不配置，默认是3秒）
                                }, function () {
                                    window.parent.$('#changeIframes').attr('src', './event-list.html')
                                });
                                addFlow(eventObj);

                            }

                        }
                    },
                    error: function () {
                        if (draft) {
                            console.log('保存草稿失败，请稍后再试' + result);
                            layer.msg('保存草稿失败，请稍后再试', {
                                icon: 1,
                                time: 1500 //2秒关闭（如果不配置，默认是3秒）
                            });
                            eventId = result;
                        } else {
                            console.log('更新失败，请稍后再试' + result);
                            layer.msg('添加失败，请稍后再试', {
                                icon: 1,
                                time: 1500 //2秒关闭（如果不配置，默认是3秒）
                            });

                        }
                    }
                });
            }

            return eventId;
        }
        $('#saveDraft').click(function () {

            save(1)
            // window.parent.$('#changeIframes').attr('src', './event-verify.html?{id:"' + id + '",lnglatMessage:"' + lnglatMessage +'"}' )

        });

        // 添加进流程引擎
        function addFlow(eventObj) {
            var flowObj = {
                userId: eventObj.userId,
                eventId: eventObj.eventId,
                eventTitle: eventObj.eventTitle,
                eventRemark: eventObj.eventRemark,
                eventTime: eventObj.eventTime
            }
            console.log(JSON.stringify(flowObj));
            $.ajax({
                url: url + port + "/DataAudit/start",
                dataType: "json",
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify(flowObj), //取得表单所有参数
                type: "post",
                async: false,
                success: function (result) {
                    // result为保存的事件id
                },
                error: function () {
                    console.log("addFlowError")
                }
            });
        }


        // 事件审核
        form.on('submit(verify)', function (data) {
            // 触发表单验证方法
            // 保存草稿
            eventId = save(1);
            // 跳转页面
            window.parent.$('#changeIframes').attr('src', './event-verify.html?' + eventId + '&' + eventObj.eventLongitude + '&' + eventObj.eventLatitude)
            return false;
        });

        // 表单提交
        form.on('submit(add)', function (data) {
            // 触发表单验证方法
            // 添加
            save();
            console.log("提交啦")
            // 跳转页面
            // window.parent.$('#changeIframes').attr('src', './event-verify.html?{id:"' + id + '",lnglatMessage:"' + lnglatMessage + '"}')
            // alert(id);
            return false;
        });
    });






    // --------------------事件地图---------------------
    var addressMessage = '';
    var lnglatMessage = '';

    var map = new AMap.Map('map', {
        zoom: 18,
        resizeEnable: true
    });
    map.setMapStyle('amap://styles/c9bac5d4e46f0d57b70a0745acb803e5');

    // 地图搜索
    AMapUI.loadUI(['misc/PoiPicker'], function (PoiPicker) {

        var poiPicker = new PoiPicker({
            //city:'北京',
            input: 'pickerInput'
        });

        //初始化poiPicker
        poiPickerReady(poiPicker);
    });

    function poiPickerReady(poiPicker) {

        window.poiPicker = poiPicker;

        var marker = new AMap.Marker();

        var infoWindow = new AMap.InfoWindow({
            offset: new AMap.Pixel(0, -20)
        });

        //选取了某个POI
        poiPicker.on('poiPicked', function (poiResult) {
            var source = poiResult.source,
                poi = poiResult.item
            document.getElementById('address').value = poi.district + poi.address + poi.name;
            addressMessage = document.getElementById('address').value;
            document.getElementById('lnglat').value = poi.location;
            lnglatMessage = document.getElementById('lnglat').value;
            // marker.setMap(map);
            // infoWindow.setMap(map);
            map.add(marker);

            marker.setPosition(poi.location);
            infoWindow.setPosition(poi.location);
            infoWindow.open(map, marker.getPosition());
            map.setCenter(marker.getPosition())
        });
    }

    var geocoder = new AMap.Geocoder({
        city: "010", //城市设为北京，默认：“全国”
        radius: 1000 //范围，默认：500
    });
    var marker = new AMap.Marker();

    function regeoCode() {

        var lnglat = document.getElementById('lnglat').value.split(',');
        map.add(marker);
        marker.setPosition(lnglat);

        geocoder.getAddress(lnglat, function (status, result) {
            if (status === 'complete' && result.regeocode) {
                var address = result.regeocode.formattedAddress;
                document.getElementById('address').value = address;
                addressMessage = document.getElementById('address').value;
            } else {
                log.error('根据经纬度查询地址失败')
            }
        });
    }

    map.on('click', function (e) {
        map.clearMap();
        document.getElementById('lnglat').value = e.lnglat;
        lnglatMessage = document.getElementById('lnglat').value;
        regeoCode();
    })
    document.getElementById('lnglat').onkeydown = function (e) {
        if (e.keyCode === 13) {
            regeoCode();
            return false;
        }
        return true;
    };

    $('.getAddress').click(function () {
        $('.mapBox').show()
    });

    $('.submit').click(function () {
        $('.mapBox').hide();
        $('input[name="eventLocation"]').val(addressMessage);
        lnglatMessage = lnglatMessage.split(",");
        $('input[name="eventLongitude"]').val(lnglatMessage[0]);
        $('input[name="eventLatitude"]').val(lnglatMessage[1]);
    });

    $('.cancel').click(function () {
        $('.mapBox').hide()
    });

    // --------------------事件地图结束---------------------


    // 事件核实后，按钮可以按
    if (verifyData) {
        // console.log(verifyData);
        if (verifyData[1] == 1) {
            $('.waitVerify').removeClass("layui-btn-disabled");
            $('.waitVerify').addClass("layui-btn-normal");
        }
    }

})









/* 待完善-------
1、文件上传
2、下拉框
*/