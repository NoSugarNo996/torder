
var data = location.search.substr(1).split("&");
if (data.length > 1) {
  var eventId = data[0];
  var center = [data[1], data[2]];//[118.611955, 24.89197]
} else {
  center = [118.611955, 24.89197]
}
var map = new AMap.Map("map", {
  center: center,
  zoom: 18
});
//   map.setMapStyle('amap://styles/182092420e0eed64faf8cb8aac5c9eaa');
map.setMapStyle('amap://styles/c9bac5d4e46f0d57b70a0745acb803e5');


var circle = new AMap.Circle({
  center: center,
  radius: 1000, //半径
  borderWeight: 1,
  strokeColor: "#FF0000",
  strokeStyle: "solid",
  strokeOpacity: 1,
  strokeWeight: 5,
  strokeOpacity: 0.2,
  fillOpacity: 0,
  zIndex: 50,
})

circle.setMap(map)
// 缩放地图到合适的视野级别 (markers , 是否动画 ，与四个边之间的像素距离)
map.setFitView([circle], [5, 5, 5, 5]);

// var myLngLat = new AMap.LngLat(center[0], center[1])
var markers = [];

// 获取点
function getPointData(positionType, center) {
  let obj = {};
  obj[positionType + "Longitude"] = center[0];
  obj[positionType + "Latitude"] = center[1];
  console.log(JSON.stringify(obj));
  let data;
  $.ajax({
    url: url + port + "/" + positionType + "/queryList",
    dataType: "json",
    contentType: "application/json;charset=UTF-8",
    data: JSON.stringify(obj), //取得表单所有参数
    type: "post",
    async:false,
    success: function (res) {
      data =  res.data;
    }
  });
  return data;
}


// 制作一个icon
function makeIcon(img) {
  return new AMap.Icon({
    // 图标尺寸
    size: new AMap.Size(35, 35),
    // 图标的取图地址
    image: img,
    // 图标所用图片大小
    imageSize: new AMap.Size(35, 35),
  });
}

// 将在圈圈里的点，转换为Marker
function getMarkerList(type,icon, pointData) {
  var markerList = [];
  position = pointData[i]
  for (var i = 0, marker; i < pointData.length; i++) {
    // 如果包含在圈圈里头，才显示
    position = [pointData[i][type+"Longitude"] ,pointData[i][type+"Latitude"]];
    console.log(position)
    if (circle.contains(position) == true) {
      marker = new AMap.Marker({
        icon: icon,
        position: position
      });
      // 添加点击事件
      AMap.event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker.getPosition());
      });
      markerList.push(marker);
    }
  }
  return markerList;
}
var cameraData =getPointData("camera", center);
var sensorData =getPointData("sensor", center);

var cameraList = getMarkerList("camera",makeIcon('../images/camera.png'),cameraData);
var sensorList = getMarkerList("sensor",makeIcon('../images/sensor.png'),sensorData);

map.add(cameraList);
 map.add(sensorList);
// 显示与隐藏标记
$('.markerType li span').click(function () {
  $(this).toggleClass("active");

  if ($(this).hasClass("camera")) {
    if ($(this).hasClass("active"))
      map.add(cameraList);
    else
      map.remove(cameraList);
    return;
  }
  if ($(this).hasClass("sensor")) {
    console.log("sensor")
    if ($(this).hasClass("active"))
      map.add(sensorList);
    else
      map.remove(sensorList);
    return;
  }
});


// function makeAInfoWindow() {
  //实例化信息窗体
  var title = +'<a href="#"><span style="font-size:11px;color:#F00;">查看监控</span></a>',
    content = [];
  content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>地址：北京市朝阳区阜通东大街6号院3号楼东北8.3公里");
  content.push("电话：010-64733333");
  content.push("<a href='https://ditu.amap.com/detail/B000A8URXB?citycode=110105'>详细信息</a>");
  var infoWindow = new AMap.InfoWindow({
    isCustom: true,  //使用自定义窗体
    content: createInfoWindow(title, content.join("<br/>")),
    offset: 0,//new AMap.Pixel(16, -45)
  });
// }
//构建自定义信息窗体
function createInfoWindow(title, content) {
  var info = document.createElement("div");
  info.className = "custom-info input-card content-window-card";

  //可以通过下面的方式修改自定义窗体的宽高
  //info.style.width = "400px";
  // 定义顶部标题
  var top = document.createElement("div");
  var titleD = document.createElement("div");
  var closeX = document.createElement("img");
  top.className = "info-top";
  titleD.innerHTML = title;
  closeX.src = "../images/close.gif";
  closeX.onclick = closeInfoWindow;

  top.appendChild(titleD);
  top.appendChild(closeX);
  info.appendChild(top);

  // 定义中部内容
  var middle = document.createElement("div");
  middle.className = "info-middle";
  middle.style.backgroundColor = 'white';
  middle.innerHTML = content;
  info.appendChild(middle);

  // 定义底部内容
  var bottom = document.createElement("div");
  bottom.className = "info-bottom";
  bottom.style.position = 'relative';
  bottom.style.top = '0px';
  bottom.style.margin = '0 auto';
  // var sharp = document.createElement("img");
  // sharp.src = "https://webapi.amap.com/images/sharp.png";
  // bottom.appendChild(sharp);
  info.appendChild(bottom);
  return info;
}

//关闭信息窗体
function closeInfoWindow() {
  map.clearInfoWindow();
}






// 按钮跳转
$('#verified').click(function () {
  window.parent.$('#changeIframes').attr('src', './event-add.html?' + eventId + '&1');
})

$('#cancel').click(function () {
  window.parent.$('#changeIframes').attr('src', './event-add.html?' + eventId + '&0')
})
