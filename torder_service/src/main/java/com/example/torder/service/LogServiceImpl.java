package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Log;
import com.example.torder.mapper.LogMapper;
import com.example.torder.vo.LogVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: torder
 * @description: 日志
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:36
 **/
@Service
public class LogServiceImpl implements LogService{
    @Autowired(required = false)
    LogMapper logMapper;
    @Override
    public List findList(LogVo obj) {
        return logMapper.findList(obj);
    }

    @Override
    public int add(LogVo obj) {
        return logMapper.insertSelective(BeanUtil.copy(obj, Log.class));
    }

    @Override
    public int delete(Integer id) {
        return logMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(LogVo obj) {
        return logMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Log.class));
    }

    @Override
    public LogVo getById(Integer id) {
        return logMapper.selectByPrimaryKey(id);
    }
}
