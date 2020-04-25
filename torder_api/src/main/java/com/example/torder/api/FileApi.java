package com.example.torder.api;
import com.example.torder.vo.ResponseVo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

/**
 * @program: cea-emergency-en
 * @description: 文件上传
 * @author: huangjiali 黄嘉丽
 * @create: 2020-01-03 09:18
 **/
@RequestMapping("/fileload")
public interface FileApi {
    /**
     * @Description: 
     * @Param: 
     * @return: 
     * @Author: huangjiali 黄嘉丽
     * @Date: 2020/1/3
     */
//    @RequestMapping("/file")
//    List<FileVo> fileLoad(MultipartFile[] uploadFile) throws IOException;
    /**
     * @Description: 文件上传接口
     * @Param:
     * @return:
     * @Author: huangjiali 黄嘉丽
     * @Date: 2020/1/17
     */
    @RequestMapping("/file")
    ResponseVo<String> uploadFile(@RequestBody MultipartFile file);
}
