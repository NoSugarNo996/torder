package com.example.torder.service;

import com.example.torder.vo.FavoritesVo;
import com.example.torder.vo.FavoritesVo;

import java.util.List;

/**
 * @program: torder
 * @description: 广告
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:23
 **/
public interface FavoritesService {
    /**
     *获取列表
     * @param obj
     * @return List
     */
    List findList(FavoritesVo obj);

    /**
     *添加
     * @param obj
     * @return
     */
    int add(FavoritesVo obj);

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
    int update(FavoritesVo obj);

    /**
     * 获取详情
     * @param id
     * @return
     */
    FavoritesVo getById(Integer id);
}
