package com.example.torder.api;

import com.cetccity.common.base.vo.PageVo;
import com.example.torder.vo.MsgVo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @program: torder
 * @description: 任务
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:16
 **/
@RequestMapping("/msg")
public interface MsgApi {
    /**
     * 添加
     * @param obj
     * @return
     */
    @RequestMapping("/add")
    int add(@RequestBody MsgVo obj);

    /**
     * 或得列表
     * @param obj
     * @return
     */
    @RequestMapping("/queryList")
    PageVo findList(@RequestBody MsgVo obj);

    /**
     * 删除信息
     * @param id
     * @return
     */
    @RequestMapping("/delete")
    int delete(@RequestParam("id") Integer id);

    /**
     * 更新信息
     * @param obj
     * @return
     */
    @RequestMapping("/update")
    int update(@RequestBody MsgVo obj);

    /**
     * 获得详情
     * @param code
     * @return
     */
    @RequestMapping("/getInfo")
    MsgVo getById(@RequestParam("msgCode") String code);
    
}
