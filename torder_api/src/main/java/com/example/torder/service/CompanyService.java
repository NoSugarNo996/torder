package com.example.torder.service;

import com.example.torder.vo.CompanyVo;

import java.util.List;

/**
 * @program: torder
 * @description: 公司
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 15:05
 **/
public interface CompanyService {
    /**
     *获取列表
     * @param obj
     * @return List
     */
    List findList(CompanyVo obj);

    /**
     *添加
     * @param obj
     * @return
     */
    int add(CompanyVo obj);

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
    int update(CompanyVo obj);

    /**
     * 获取详情
     * @param id
     * @return
     */
    CompanyVo getById(Integer id);

    long getCount(CompanyVo obj);
}
