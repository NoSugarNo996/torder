package com.example.torder.service;

import com.example.torder.vo.NoticeVo;

import java.util.List;

/**
 * @program: torder
 * @description: 关注
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:27
 **/
public interface NoticeService {
    /**
     *获取列表
     * @param obj
     * @return List
     */
    List findList(NoticeVo obj);

    /**
     *添加
     * @param obj
     * @return
     */
    int add(NoticeVo obj);

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
    int update(NoticeVo obj);

    /**
     * 获取详情
     * @param id
     * @return
     */
    NoticeVo getById(Integer id);
}
