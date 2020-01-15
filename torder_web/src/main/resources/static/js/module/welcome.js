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
//订单统计
getOrderCount = function() {
    orderObj["orderStatus"] = 1;
    var Url = queryUrl + queryMethodOrder + getCount;
    console.log(Url);
    $.ajax({
        url : Url,
        type : 'post',
         data : JSON.stringify(orderObj),
        dataType : "JSON",
        contentType: "application/json;charset=UTF-8",
        success : function(result) {
            $("#orderCount").text(result);
        },
        error : function(e) {
            console.log(e);
        }
    });
}
//待审人才统计
getAudTalentsCount = function() {
    talentsObj["talentsStatus"] = 0;
    var Url = queryUrl + queryMethodTalents + getCount;
    console.log(Url);
    $.ajax({
        url : Url,
        type : 'post',
        data : JSON.stringify(talentsObj),
        dataType : "JSON",
        contentType: "application/json;charset=UTF-8",
        success : function(result) {
            $("#audTalentCount").text(result);
        },
        error : function(e) {
            console.log(e);
        }
    });
}
//待审公司统计
getAudCompanyCount = function() {
    companyObj["companyStatus"] = 0;
    var Url = queryUrl + queryMethodCompany + getCount;
    console.log(Url);
    $.ajax({
        url : Url,
        type : 'post',
        data : JSON.stringify(companyObj),
        dataType : "JSON",
        contentType: "application/json;charset=UTF-8",
        success : function(result) {
            $("#audCompanyCount").text(result);
        },
        error : function(e) {
            console.log(e);
        }
    });
}
//待审交易统计
getAudOrderCount = function() {
    orderObj["orderStatus"] = 0;
    var Url = queryUrl + queryMethodOrder + getCount;
    console.log(Url);
    $.ajax({
        url : Url,
        type : 'post',
        data : JSON.stringify(orderObj),
        dataType : "JSON",
        contentType: "application/json;charset=UTF-8",
        success : function(result) {
            $("#audOrderCount").text(result);
        },
        error : function(e) {
            console.log(e);
        }
    });
}
//待审广告统计
getAudAdCount = function() {
    adObj["adStatus"] = 0;
    var Url = queryUrl + queryMethodAdvertising + getCount;
    console.log(Url);
    $.ajax({
        url : Url,
        type : 'post',
        data : JSON.stringify(adObj),
        dataType : "JSON",
        contentType: "application/json;charset=UTF-8",
        success : function(result) {
            $("#audAdCount").text(result);
        },
        error : function(e) {
            console.log(e);
        }
    });
}