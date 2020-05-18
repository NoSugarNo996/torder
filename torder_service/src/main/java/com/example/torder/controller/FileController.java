package com.example.torder.controller;


import com.example.torder.api.FileApi;
import com.example.torder.vo.ResponseVo;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Calendar;

/**
 * @program: cea-emergency-en
 * @description: 文件上传
 * @author: huangjiali 黄嘉丽
 * @create: 2020-01-13 16:50
 **/
@RestController
public class FileController implements FileApi {
    private String path = "/Users/huangjiali/IdeaProjects/torder/file/";

    @Override
    public ResponseVo<String> uploadFile(MultipartFile file) {
        ResponseVo<String> result = new ResponseVo<String>();

        if (file.isEmpty()) {
            result.setResult("ERROR");
            result.setMsg("上传文件为空");
            result.setStatus(400);
            return result;
        }
        String oriName = file.getOriginalFilename();
        String date=new SimpleDateFormat("yyyyMMddHHmmssSSS").format(Calendar.getInstance().getTime());
        String filename = null;
        String extendName = oriName.substring(oriName.lastIndexOf('.')+1, oriName.length());
        String upname=oriName.substring(0, oriName.lastIndexOf('.'));
        filename = upname+"_"+date+"."+extendName;
        File filepath = new File(path, filename);
        // 判断路径是否存在，不存在则新创建一个
        if (!filepath.getParentFile().exists()) {
            filepath.getParentFile().mkdirs();
        }
        try {
            file.transferTo(new File(path + filename));
            System.out.println(path + filename);
          //  result.setData("/file/"+filename);
            result.setData(filename);
            result.setResult("SUCCESS");
            result.setMsg("上传成功");
            result.setStatus(200);
            return result;
        } catch (Exception e) {
            result.setResult("ERROR");
            result.setMsg("上传文件失败");
            result.setStatus(400);
            return result;
        }
    }

}
