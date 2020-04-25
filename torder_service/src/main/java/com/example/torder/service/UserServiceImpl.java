package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.User;
import com.example.torder.mapper.UserMapper;
import com.example.torder.util.UUIDUtil;
import com.example.torder.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: torder
 * @description: 用户
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:36
 **/
@Service
public class UserServiceImpl implements UserService{
    @Autowired(required = false)
    UserMapper userMapper;
    @Override
    public List findList(UserVo obj) {
        return userMapper.findList(obj);
    }

    @Override
    public int add(UserVo obj) {
        obj.setCode(UUIDUtil.getUUID());
        return userMapper.insertSelective(BeanUtil.copy(obj, User.class));
    }

    @Override
    public int delete(Integer id) {
        return userMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(UserVo obj) {
        return userMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,User.class));
    }

    @Override
    public UserVo getById(Integer id) {
        return userMapper.selectByPrimaryKey(id);
    }

    @Override
    public UserVo login(UserVo obj) {
        return userMapper.login(BeanUtil.copy(obj, User.class));
    }

    @Override
    public long getCount() {
        return userMapper.getCount();
    }
}
