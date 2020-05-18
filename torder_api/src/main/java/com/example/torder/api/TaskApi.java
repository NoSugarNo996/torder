package com.example.torder.api;

import com.cetccity.common.base.vo.PageVo;
import com.example.torder.vo.TaskVo;
import com.example.torder.vo.UserVo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @program: torder
 * @description: 任务
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:16
 **/
@RequestMapping("/task")
public interface TaskApi {
    /**
     * 添加
     * @param obj
     * @return
     */
    @RequestMapping("/add")
    int add(@RequestBody TaskVo obj);

    /**
     * 或得列表
     * @param obj
     * @return
     */
    @RequestMapping("/queryList")
    PageVo findList(@RequestBody TaskVo obj);

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
    int update(@RequestBody TaskVo obj);

    /**
     * 获得详情
     * @param id
     * @return
     */
    @RequestMapping("/getInfo")
    TaskVo getById(@RequestParam("id") Integer id);

/**
 * @Description:
 * @Param:
 * @return:
 * @Author: huangjiali 黄嘉丽
 * @Date: 2020/5/12
 */
    @RequestMapping("/getCount")
    long getCount(@RequestBody TaskVo obj);
    
}
