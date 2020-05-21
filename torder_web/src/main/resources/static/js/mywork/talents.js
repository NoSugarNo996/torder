
let editId;
let status;
let others;
let eventObj = {
    "talentsId":"",
    "talentsName":"",
    "talentsSex": "",
    "talentsPhone":"",
    "talentsNation": "",
    "talentsPoliticeStatus":"",
    "talentsDate": "",
    "talentsEducation":"",
    "talentsGraduate": "",
    "talentsMajor":"",
    "talentsExperience": "",
    "talentsEmail": "",
    "talentsResume": "",
    "talentsInfo": "",
    "talentsStatue": "",
    "talentsIdentity":"",
    "talentsAlipay": "",
    "userId":layui.sessionData('user').user.code,
    "others":''
}
getSelectOption("select[name='talentsNation']", 'NATION');
getSelectOption("select[name='talentsStatue']", 'TAlENTSSTATE');
getSelectOption("select[name='talentsEducation']", 'EDUCATION');
getSelectOption("select[name='talentsExperience']", 'EXPERIENCE');
getSelectOption("select[name='talentsPoliticeStatus']", 'POLITICE');
//表单初始化
layui.use(['form', 'layedit', "laydate",'laydate','upload'], function () {
    var form = layui.form,
        layer = layui.layer,laydate = layui.laydate;
    var upload = layui.upload;
    // 渲染多个日期组件
    $(".input-date").each(function () {
        //日期时间选择
        laydate.render({
            elem: this, //指定元素  表示当前的元素
            type: 'date'
            , value: new Date()
            , format: 'yyyy-MM-dd'
            , theme: '#009688'  //主题  颜色改变

        });
        console.log("dateAddOk");
    });

    //头像上传
    //普通图片上传
    var uploadInst = upload.render({
        elem: '#test1'
        ,url: queryUrl + '/fileload/file' //改成您自己的上传接口
        ,before: function(obj){
            //预读本地文件示例，不支持ie8
            obj.preview(function(index, file, result){
                $('#demo1').attr('src', result); //图片链接（base64）
            });
        }
        ,done: function(res){

            //上传成功
            if (res.result == "SUCCESS") { //上传成功
              others=res.data;
            }
            else {
                return layer.msg('上传失败');
            }
        }
        ,error: function(){
            //演示失败状态，并实现重传
            var demoText = $('#demoText');
            demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
            demoText.find('.demo-reload').on('click', function(){
                uploadInst.upload();
            });
        }
    });

    var fileArray = [];
//多文件列表上传
    var demoListView = $('#demoList')
        , uploadListIns = upload.render({
        elem: '#testList'
        , url: queryUrl + '/fileload/file'
        , accept: 'file' //允许接收的文件格式
        , multiple: false // 支持多文件
        , auto: false //选完文件后是否自动上传
        , field: 'file' //设置字段名
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
            if (res.result == "SUCCESS") { //上传成功
                //存要提交的taskFile列表
                $('input[name="talentsInfo"]').val(res.data);
                eventObj.talentsInfo=res.data.toString();
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


    $.ajax({
        type: "post",
        url: queryUrl + queryMethodTalents + getInfoMethod,
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify(eventObj),
        success: function (res) {
            form.val('update', {
                "talentsId":res.talentsId,
                "talentsName": res.talentsName,
                "userId": res.userId,
                "talentsSex": res.talentsSex,
                "talentsPhone": res.talentsPhone,
                "talentsNation": res.talentsNation,
                "talentsPoliticeStatus": res.talentsPoliticeStatus,
                "talentsDate": res.talentsDate,
                "talentsEducation": res.talentsEducation,
                "talentsGraduate": res.talentsGraduate,
                "talentsMajor": res.talentsMajor,
                "talentsExperience": res.talentsExperience,
                "talentsEmail": res.talentsEmail,
                "talentsResume": res.talentsResume,
                "talentsInfo": res.talentsInfo,
                "talentsStatue": res.talentsStatue,
                "talentsIdentity": res.talentsIdentity,
                "talentsAlipay": res.talentsAlipay,
                "audDes":res.audDes

            });
            if (res.others!=null){
                // var a='<img src="/Users/huangjiali/IdeaProjects/torder/file/'+res.others+'">';
                var a='<img style="width: 200px;height: 300px;" src="'+queryUrl+'/file/'+res.others+'">';
                $('#head').empty().append(a);
                eventObj.others=res.others;
                console.log(a);
            }
            $('#uploaded').show();
            if (res.talentsInfo!=null){
                    var tr = '<tr>'
                        + '<td>' + res.talentsInfo + '</td>'
                        + '<td><a href="' + queryUrl + '/file/'+res.talentsInfo + '" download="' + res.talentsInfo.split('/')[2] + '" target="_blank">下载</a></td>'
                        + '</tr>';
                    $('#uploadedList').append(tr);
            }

        }
    });
    //监听更新
       form.on('submit(verify1)', function (data) {
         eventObj = data.field;
         eventObj.talentsStatue=1;
         eventObj.others=others;
         eventObj.audDes='';
        $.ajax({
            type: "post",
            url: queryUrl + queryMethodTalents + updateMethod,
            dataType: "json",
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(eventObj),
            success: function (res) {
                if (res==1){
                    layer.msg('更新成功');
                }
                else
                    layer.msg("更新失败");
            }
        });
    });

});
