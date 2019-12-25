package com.example.torder.service;

import com.example.torder.vo.TaskVo;

import java.util.List;

/**
 * @program: torder
 * @description: 任务
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:25
 **/
public interface TaskService {
    /**
     *获取列表
     * @param obj
     * @return List
     */
    List findList(TaskVo obj);

    /**
     *添加
     * @param obj
     * @return
     */
    int add(TaskVo obj);

    /**
     * 删除
     * @param id
     * @return
     */
    int delete(Integer id);

    /**
     * 更新
     * @param obj
     * @return
     */
    int update(TaskVo obj);

    /**
     * 获取详情
     * @param id
     * @return
     */
    TaskVo getById(Integer id);
}
