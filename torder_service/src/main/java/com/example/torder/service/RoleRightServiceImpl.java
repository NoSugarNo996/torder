package com.example.torder.service;
import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.RoleRight;
import com.example.torder.mapper.RoleRightMapper;
import com.example.torder.vo.RoleRightVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleRightServiceImpl implements RoleRightService{
    @Autowired(required = false)
    RoleRightMapper roleRightMapper;
    @Override
    public List findRRList(RoleRightVo obj) {
        return roleRightMapper.findRRList(obj);
    }

    @Override
    public int add(RoleRightVo obj) {
        return roleRightMapper.insert(BeanUtil.copy(obj, RoleRight.class));
    }

    @Override
    public int delete(Integer id) {
        return roleRightMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(RoleRightVo obj) {
        return roleRightMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,RoleRight.class));
    }

    @Override
    public RoleRightVo getById(Integer id) {
        return roleRightMapper.selectByPrimaryKey(id);
    }
}
