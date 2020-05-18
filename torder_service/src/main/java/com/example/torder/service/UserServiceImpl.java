package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Talents;
import com.example.torder.domain.User;
import com.example.torder.mapper.TalentsMapper;
import com.example.torder.mapper.UserMapper;
import com.example.torder.util.KEMD5Utils;
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
    @Autowired(required = false)
    TalentsMapper talentsMapper;
    @Override
    public List findList(UserVo obj) {
        return userMapper.findList(obj);
    }

    @Override
    public int add(UserVo obj) {
        obj.setCode(UUIDUtil.getUUID());
        obj.setUserPwd(KEMD5Utils.MD5(obj.getUserPwd()));
        Talents talents=new Talents();
        talents.setUserId(obj.getCode());
        talents.setCode(obj.getCode());
        talentsMapper.insertSelective(talents);
        return userMapper.insertSelective(BeanUtil.copy(obj, User.class));
    }

    @Override
    public int delete(Integer id) {
        return userMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(UserVo obj) {
        if(obj.getUserPwd()!=null&&!("".equals(obj.getUserPwd())))
            obj.setUserPwd(KEMD5Utils.MD5(obj.getUserPwd()));
        return userMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,User.class));
    }

    @Override
    public UserVo getById(String code) {
        return userMapper.selectByPrimaryKey(code);
    }

    @Override
    public UserVo login(UserVo obj) {
        obj.setUserPwd(KEMD5Utils.MD5(obj.getUserPwd()));
        return userMapper.login(BeanUtil.copy(obj, User.class));
    }

    @Override
    public long getCount() {
        return userMapper.getCount();
    }
}
