package com.example.torder.service;

import com.example.torder.vo.TalentsVo;

import java.util.List;

/**
 * @program: torder
 * @description: 人才
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:24
 **/
public interface TalentsService {
    /**
     *获取列表
     * @param obj
     * @return List
     */
    List findList(TalentsVo obj);

    /**
     *添加
     * @param obj
     * @return
     */
    int add(TalentsVo obj);

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
    int update(TalentsVo obj);

    /**
     * 获取详情
     * @param id
     * @return
     */
    TalentsVo getById(TalentsVo obj);

    long getCount(TalentsVo obj);
}
