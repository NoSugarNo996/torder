package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.UserApi;
import com.example.torder.service.UserService;
import com.example.torder.util.text.Token;
import com.example.torder.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

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
    public UserVo getById(String code) {
        return userService.getById(code);
    }

    @Override
    public UserVo login(UserVo vo, HttpServletRequest req) {
        UserVo userVo=userService.login(vo);
        if (userVo!=null) {
            userVo.setToken(Token.getTokenString(req.getSession()));
            Token.saveTokenString(userVo.getToken(),userVo.getUserId().toString());
        }
        return userVo;
    }
    @Override
    public boolean logout(UserVo vo) {
        Token.logout(vo.getUserId().toString());
        return false;
    }
    @Override
    public long getCount(UserVo obj) {
        return userService.getCount();
    }
}
