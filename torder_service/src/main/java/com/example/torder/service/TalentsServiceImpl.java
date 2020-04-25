package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Talents;
import com.example.torder.mapper.TalentsMapper;
import com.example.torder.util.UUIDUtil;
import com.example.torder.vo.TalentsVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: torder
 * @description: 人才
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:40
 **/
@Service
public class TalentsServiceImpl implements TalentsService{

    @Autowired(required = false)
    TalentsMapper talentsMapper;
    @Override
    public List findList(TalentsVo obj) {
        return talentsMapper.findList(obj);
    }

    @Override
    public int add(TalentsVo obj) {
       obj.setCode(UUIDUtil.getUUID());
       return talentsMapper.insertSelective(BeanUtil.copy(obj, Talents.class));
    }

    @Override
    public int delete(Integer id) {
        return talentsMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(TalentsVo obj) {
        return talentsMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Talents.class));
    }

    @Override
    public TalentsVo getById(TalentsVo obj) {
        return talentsMapper.selectByPrimaryKey(obj);
    }

    @Override
    public long getCount(TalentsVo obj) {
        return talentsMapper.getCount(obj);
    }
}
