package com.example.torder.service;

import com.example.torder.vo.TaskWaittingVo;

import java.util.List;

/**
 * @program: torder
 * @description: 候选
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:25
 **/
public interface TaskWaittingService {
    /**
     *获取列表
     * @param obj
     * @return List
     */
    List findList(TaskWaittingVo obj);

    /**
     *添加
     * @param obj
     * @return
     */
    int add(TaskWaittingVo obj);

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
    int update(TaskWaittingVo obj);

    /**
     * 获取详情
     * @param id
     * @return
     */
    TaskWaittingVo getById(Integer id);
}
