package com.example.torder.service;

import com.example.torder.vo.LogVo;

import java.util.List;

/**
 * @program: torder
 * @description: 日志
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:26
 **/
public interface LogService {
    /**
     *获取列表
     * @param obj
     * @return List
     */
    List findList(LogVo obj);

    /**
     *添加
     * @param obj
     * @return
     */
    int add(LogVo obj);

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
    int update(LogVo obj);

    /**
     * 获取详情
     * @param id
     * @return
     */
    LogVo getById(Integer id);
}
