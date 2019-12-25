package com.example.torder.api;

import com.cetccity.common.base.vo.PageVo;
import com.example.torder.vo.NoticeVo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @program: torder
 * @description: 关注
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:13
 **/
@RequestMapping("/notice")
public interface NoticeApi {
    /**
     * 添加
     * @param obj
     * @return
     */
    @RequestMapping("/add")
    int add(@RequestBody NoticeVo obj);

    /**
     * 或得列表
     * @param obj
     * @return
     */
    @RequestMapping("/queryList")
    PageVo findList(@RequestBody NoticeVo obj);

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
    int update(@RequestBody NoticeVo obj);

    /**
     * 获得详情
     * @param id
     * @return
     */
    @RequestMapping("/getInfo")
    NoticeVo getById(@RequestParam("id") Integer id);
}
