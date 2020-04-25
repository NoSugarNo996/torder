package com.example.torder.api;

import com.cetccity.common.base.vo.PageVo;
import com.example.torder.vo.UserVo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

/**
 * @program: torder
 * @description: 用户
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:16
 **/
@RequestMapping("/user")
public interface UserApi {
    /**
     * 添加
     * @param obj
     * @return
     */
    @RequestMapping("/add")
    int add(@RequestBody UserVo obj);

    /**
     * 或得列表
     * @param obj
     * @return
     */
    @RequestMapping("/queryList")
    PageVo findList(@RequestBody UserVo obj);

    /**
     * 删除信息
     * @param id
     * @return
     */
    @RequestMapping("/delete")
    int delete(@RequestParam("id") Integer id);

    /**
     * 更新信息
     * @param obj
     * @return
     */
    @RequestMapping("/update")
    int update(@RequestBody UserVo obj);

    /**
     * 获得详情
     * @param id
     * @return
     */
    @RequestMapping("/getInfo")
    UserVo getById(@RequestParam("id") Integer id);

    @RequestMapping("/login")
    UserVo login(@RequestBody UserVo vo, HttpServletRequest request);

    @RequestMapping("/logout")
    boolean logout(@RequestBody UserVo vo);

    @RequestMapping("/getCount")
    long getCount(@RequestBody UserVo obj);
}
