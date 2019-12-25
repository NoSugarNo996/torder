package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Right;
import com.example.torder.mapper.RightMapper;
import com.example.torder.vo.RightVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: torder
 * @description: 权限
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:38
 **/
@Service
public class RightServiceImpl implements RightService{
    @Autowired
    RightMapper rightMapper;
    @Override
    public List findList(RightVo obj) {
        return rightMapper.findList(obj);
    }

    @Override
    public int add(RightVo obj) {
        return rightMapper.insertSelective(BeanUtil.copy(obj, Right.class));
    }

    @Override
    public int delete(Integer id) {
        return rightMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(RightVo obj) {
        return rightMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Right.class));
    }

    @Override
    public RightVo getById(Integer id) {
        return rightMapper.selectByPrimaryKey(id);
    }
}
