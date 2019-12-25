package com.example.torder.service;

import com.example.torder.vo.RightVo;

import java.util.List;

/**
 * @program: torder
 * @description: 权限
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:26
 **/
public interface RightService {
    /**
     *获取列表
     * @param obj
     * @return List
     */
    List findList(RightVo obj);

    /**
     *添加
     * @param obj
     * @return
     */
    int add(RightVo obj);

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
    int update(RightVo obj);

    /**
     * 获取详情
     * @param id
     * @return
     */
    RightVo getById(Integer id);
}
