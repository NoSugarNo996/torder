package com.example.torder.api;

import com.cetccity.common.base.vo.PageVo;
import com.example.torder.vo.OrderVo;
import com.example.torder.vo.QAVo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @program: torder
 * @description: hjl
 * @author: huangjiali 黄嘉丽
 * @create: 2020-05-18 23:17
 **/
@RequestMapping("/qa")
public interface QAApi {

    /**
     * 或得列表
     * @param obj
     * @return
     */
    @RequestMapping("/queryList")
    PageVo findList(@RequestBody QAVo obj);

    /**
     * 获得详情
     * @param id
     * @return
     */
    @RequestMapping("/getInfo")
    QAVo getById(@RequestParam("id") Integer id);

}
