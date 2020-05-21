
    let orderObj={};
    let talentsObj={};
    let userObj={};
    let companyObj={};
    let adObj={};
    $().ready(function() {
        getUserCount();
        getOrderCount();
        getTalentsCount();
        getOrderingCount();
        getAudAdCount();
        getAudCompanyCount();
        getAudOrderCount();
        getAudTalentsCount();
        getNoticeText();
    })
//用户统计
    getUserCount = function() {
        var Url = queryUrl + queryMethodUser + getCount;
        console.log(Url);
        $.ajax({
            url : Url,
            type : 'post',
            data : JSON.stringify(orderObj),
            dataType : "JSON",
            contentType: "application/json;charset=UTF-8",
            success : function(result) {
                $("#userCount").text(result);
            },
            error : function(e) {
                console.log(e);
            }
        });
    }
//交易统计
    getOrderingCount = function() {
        orderObj["orderStatus"] = 2;
        var Url = queryUrl + queryMethodOrder + getCount;
        console.log(Url);
        $.ajax({
            url : Url,
            type : 'post',
            data : JSON.stringify(orderObj),
            dataType : "JSON",
            contentType: "application/json;charset=UTF-8",
            success : function(result) {
                $("#orderingCount").text(result);
            },
            error : function(e) {
                console.log(e);
            }
        });
    }
//人才统计
    getTalentsCount = function() {
        talentsObj["talentsStatus"] = 1;
        var Url = queryUrl + queryMethodTalents + getCount;
        console.log(Url);
        $.ajax({
            url : Url,
            type : 'post',
            data : JSON.stringify(talentsObj),
            dataType : "JSON",
            contentType: "application/json;charset=UTF-8",
            success : function(result) {
                $("#talentCount").text(result);
            },
            error : function(e) {
                console.log(e);
            }
        });
    }
//任务统计
    getOrderCount = function() {
        orderObj["orderStatus"] = 1;
        var Url = queryUrl + queryMethodTask + getCount;
        console.log(Url);
        $.ajax({
            url : Url,
            type : 'post',
            data : JSON.stringify(orderObj),
            dataType : "JSON",
            contentType: "application/json;charset=UTF-8",
            success : function(result) {
                $("#taskCount").text(result);
            },
            error : function(e) {
                console.log(e);
            }
        });
    }
//待审人才统计
    getAudTalentsCount = function() {
        talentsObj["talentsStatue"] = 1;
        var Url = queryUrl + queryMethodTalents + queryListMethod;
        console.log(Url);
        $.ajax({
            url : Url,
            type : 'post',
            data : JSON.stringify(talentsObj),
            dataType : "JSON",
            contentType: "application/json;charset=UTF-8",
            success : function(result) {
                $("#audTalentCount").text(result.size);
            },
            error : function(e) {
                console.log(e);
            }
        });
    }
//待审任务发布统计
    getAudCompanyCount = function() {
        companyObj["taskStatus"] = 1;
        var Url = queryUrl + queryMethodTask + queryListMethod;
        console.log(Url);
        $.ajax({
            url : Url,
            type : 'post',
            data : JSON.stringify(companyObj),
            dataType : "JSON",
            contentType: "application/json;charset=UTF-8",
            success : function(result) {
                $("#audCompanyCount").text(result.size);
            },
            error : function(e) {
                console.log(e);
            }
        });
    }
//待审交易统计
    getAudOrderCount = function() {
        orderObj["taskStatus"] = 5;
        var Url = queryUrl +  queryMethodTask + queryListMethod;
        console.log(Url);
        $.ajax({
            url : Url,
            type : 'post',
            data : JSON.stringify(orderObj),
            dataType : "JSON",
            contentType: "application/json;charset=UTF-8",
            success : function(result) {
                $("#audOrderCount").text(result.size);
            },
            error : function(e) {
                console.log(e);
            }
        });
    }
//未处理消息统计
    getAudAdCount = function() {
        adObj["msgStatus"] = 0;
        adObj["msgAccepter"] =layui.sessionData('user').user.code;
        var Url = queryUrl + queryMethodMsg + queryListMethod;
        console.log(Url);
        $.ajax({
            url : Url,
            type : 'post',
            data : JSON.stringify(adObj),
            dataType : "JSON",
            contentType: "application/json;charset=UTF-8",
            success : function(result) {
                $("#audAdCount").text(result.size);
            },
            error : function(e) {
                console.log(e);
            }
        });
    }
//系统公告读取

    getNoticeText=function () {
        let eventObj = {
            "pageSize": 6,
            "noticeStart":new Date()
        }
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodNotice + queryListMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj),
            success: function (res) {

                var data = '';
                for (let index = 0; index < res.data.length; index++) {
                    data +='  <div class="layuimini-notice">\n' +
                        '                            <div class="layuimini-notice-title">'+res.data[index].noticeTitle+'</div>\n' +
                        '                            <div class="layuimini-notice-extra">'+res.data[index].noticeStart+'</div>\n' +
                        '                            <div class="layuimini-notice-content layui-hide">\n' +
                        '                                '+res.data[index].noticeTitle+'<br>\n' +res.data[index].noticeDes+
                        '                            </div>\n' +
                        '                        </div>';
                }
                $('#notice').empty().append(data);
            }
        });

    }

