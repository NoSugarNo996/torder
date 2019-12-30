package com.example.torder.service;

import com.example.torder.vo.OrderVo;

import java.util.List;

/**
 * @program: torder
 * @description: 交易
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:27
 **/
public interface OrderService {
    /**
     *获取列表
     * @param obj
     * @return List
     */
    List findList(OrderVo obj);

    /**
     *添加
     * @param obj
     * @return
     */
    int add(OrderVo obj);

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
    int update(OrderVo obj);

    /**
     * 获取详情
     * @param id
     * @return
     */
    OrderVo getById(Integer id);

    long getCount(OrderVo obj);
}
