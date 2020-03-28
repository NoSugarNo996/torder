package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.UserApi;
import com.example.torder.service.UserService;
import com.example.torder.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 用户
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 22:34
 **/
@RestController
public class UserController extends BaseController implements UserApi {

    @Autowired
    UserService userService;

    @Override
    public int add(UserVo obj) {
        return userService.add(obj);
    }

    @Override
    public PageVo findList(UserVo obj) {
        return BeanUtil.page(userService.findList(obj));
    }

    @Override
    public int delete(Integer id) {
        return userService.delete(id);
    }

    @Override
    public int update(UserVo obj) {
        return userService.update(obj);
    }

    @Override
    public UserVo getById(Integer id) {
        return userService.getById(id);
    }

    @Override
    public UserVo login(UserVo obj) {
        return userService.login(obj);
    }

    @Override
    public long getCount(UserVo obj) {
        return userService.getCount();
    }
}
