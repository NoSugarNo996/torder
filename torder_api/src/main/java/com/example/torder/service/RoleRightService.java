package com.example.torder.service;

import com.example.torder.vo.RoleRightVo;

import java.util.List;

/**
 * @author huangjiali
 * @date 2019/12/20 3:08 下午
 */

public interface RoleRightService {

    /**
     *获取角色权限列表
     * @param obj
     * @return List
     */
    List findRRList(RoleRightVo obj);

    /**
     *添加角色权限
     * @param obj
     * @return
     */
    int add(RoleRightVo obj);

    /**
     * 删除角色权限
     * @param id
     * @return
     */
    int delete(Integer id);

    /**
     * 更新角色权限
     * @param obj
     * @return
     */
    int update(RoleRightVo obj);

    /**
     * 获取角色权限详情
     * @param id
     * @return
     */
    RoleRightVo getById(Integer id);
}
