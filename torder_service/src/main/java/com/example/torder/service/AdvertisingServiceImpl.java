package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Advertising;
import com.example.torder.mapper.AdvertisingMapper;
import com.example.torder.vo.AdvertisingVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: torder
 * @description: 广告
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 14:30
 **/
@Service
public class AdvertisingServiceImpl implements AdvertisingService{
    @Autowired(required = false)
    AdvertisingMapper advertisingMapper;
    @Override
    public List findAdvertisingList(AdvertisingVo obj) {
        return advertisingMapper.findList(obj);
    }

    @Override
    public int add(AdvertisingVo obj) {
        return advertisingMapper.insertSelective(BeanUtil.copy(obj, Advertising.class));
    }

    @Override
    public int delete(Integer id) {
        return advertisingMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(AdvertisingVo obj) {
        return advertisingMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Advertising.class));
    }

    @Override
    public AdvertisingVo getById(Integer id) {
        return null;
    }
}
