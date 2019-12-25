package com.example.torder.service;

import com.example.torder.vo.MenuVo;

import java.util.List;

/**
 * @program: torder
 * @description: 菜单
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:24
 **/
public interface MenuService {
    /**
     *获取列表
     * @param obj
     * @return List
     */
    List findList(MenuVo obj);

    /**
     *添加
     * @param obj
     * @return
     */
    int add(MenuVo obj);

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
    int update(MenuVo obj);

    /**
     * 获取详情
     * @param id
     * @return
     */
    MenuVo getById(Integer id);
}
