package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.TaskWaitting;
import com.example.torder.mapper.TaskWaittingMapper;
import com.example.torder.util.UUIDUtil;
import com.example.torder.vo.TaskWaittingVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: torder
 * @description: 候选
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:37
 **/

@Service
public class TaskWaittingServiceImpl implements TaskWaittingService{
    @Autowired(required = false)
    TaskWaittingMapper taskWaittingMapper;
    @Override
    public List findList(TaskWaittingVo obj) {
        return taskWaittingMapper.findList(obj);
    }

    @Override
    public int add(TaskWaittingVo obj) {
        obj.setCode(UUIDUtil.getUUID());
        return taskWaittingMapper.insertSelective(BeanUtil.copy(obj, TaskWaitting.class));
    }

    @Override
    public int delete(String id) {
        return taskWaittingMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(TaskWaittingVo obj) {
        return taskWaittingMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,TaskWaitting.class));
    }

    @Override
    public TaskWaittingVo getById(Integer id) {
        return taskWaittingMapper.selectByPrimaryKey(id);
    }
}
