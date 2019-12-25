package com.example.torder.service;

import com.example.torder.vo.RoleVo;

import java.util.List;

/**
 * @program: torder
 * @description: 角色
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:25
 **/
public interface RoleService {
    /**
     *获取列表
     * @param obj
     * @return List
     */
    List findList(RoleVo obj);

    /**
     *添加
     * @param obj
     * @return
     */
    int add(RoleVo obj);

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
    int update(RoleVo obj);

    /**
     * 获取详情
     * @param id
     * @return
     */
    RoleVo getById(Integer id);
}
