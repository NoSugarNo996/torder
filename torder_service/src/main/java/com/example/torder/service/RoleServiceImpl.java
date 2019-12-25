package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Role;
import com.example.torder.mapper.RoleMapper;
import com.example.torder.vo.RoleVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: torder
 * @description: 角色
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:37
 **/
@Service
public class RoleServiceImpl implements RoleService{
    @Autowired(required = false)
    RoleMapper roleMapper;
    @Override
    public List findList(RoleVo obj) {
        return roleMapper.findList(obj);
    }

    @Override
    public int add(RoleVo obj) {
        return roleMapper.insertSelective(BeanUtil.copy(obj, Role.class));
    }

    @Override
    public int delete(Integer id) {
        return roleMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(RoleVo obj) {
        return roleMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Role.class));
    }

    @Override
    public RoleVo getById(Integer id) {
        return roleMapper.selectByPrimaryKey(id);
    }
}
