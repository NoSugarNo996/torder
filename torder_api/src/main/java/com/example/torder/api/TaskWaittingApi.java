package com.example.torder.api;

import com.cetccity.common.base.vo.PageVo;
import com.example.torder.vo.TaskWaittingVo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @program: torder
 * @description: 候选
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:16
 **/
@RequestMapping("/taskwaitting")
public interface TaskWaittingApi {
    /**
     * 添加
     * @param obj
     * @return
     */
    @RequestMapping("/add")
    int add(@RequestBody TaskWaittingVo obj);

    /**
     * 或得列表
     * @param obj
     * @return
     */
    @RequestMapping("/queryList")
    PageVo findList(@RequestBody TaskWaittingVo obj);

    /**
     * 删除信息
     * @param id
     * @return
     */
    @RequestMapping("/delete")
    int delete(@RequestParam("taskCode") String id);

    /**
     * 更新信息
     * @param obj
     * @return
     */
    @RequestMapping("/update")
    int update(@RequestBody TaskWaittingVo obj);

    /**
     * 获得详情
     * @param id
     * @return
     */
    @RequestMapping("/getInfo")
    TaskWaittingVo getById(@RequestParam("id") Integer id);
}
