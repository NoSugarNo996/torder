package com.example.torder.service;

import com.example.torder.vo.UserVo;

import java.util.List;

/**
 * @program: torder
 * @description: 用户
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:24
 **/
public interface UserService {
    /**
     *获取列表
     * @param obj
     * @return List
     */
    List findList(UserVo obj);

    /**
     *添加
     * @param obj
     * @return
     */
    int add(UserVo obj);

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
    int update(UserVo obj);

    /**
     * 获取详情
     * @param id
     * @return
     */
    UserVo getById(Integer id);
}
