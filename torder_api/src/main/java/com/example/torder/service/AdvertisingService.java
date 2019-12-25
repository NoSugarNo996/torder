package com.example.torder.service;

import com.example.torder.vo.AdvertisingVo;

import java.util.List;

/**
 * @program: torder
 * @description: 广告
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 14:24
 **/
public interface AdvertisingService {
    /**
     *获取广告列表
     * @param obj
     * @return List
     */
    List findAdvertisingList(AdvertisingVo obj);

    /**
     *添加广告
     * @param obj
     * @return
     */
    int add(AdvertisingVo obj);

    /**
     * 删除广告
     * @param id
     * @return
     */
    int delete(Integer id);

    /**
     * 更新广告
     * @param obj
     * @return
     */
    int update(AdvertisingVo obj);

    /**
     * 获取广告详情
     * @param id
     * @return
     */
    AdvertisingVo getById(Integer id);
}
