package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Task;
import com.example.torder.mapper.TaskMapper;
import com.example.torder.vo.TaskVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: torder
 * @description: 任务
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:37
 **/
@Service
public class TaskServiceImpl implements TaskService{
    @Autowired(required = false)
    TaskMapper taskMapper;
    @Override
    public List findList(TaskVo obj) {
        return taskMapper.findList(obj);
    }

    @Override
    public int add(TaskVo obj) {
        return taskMapper.insertSelective(BeanUtil.copy(obj, Task.class));
    }

    @Override
    public int delete(Integer id) {
        return taskMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(TaskVo obj) {
        return taskMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Task.class));
    }

    @Override
    public TaskVo getById(Integer id) {
        return taskMapper.selectByPrimaryKey(id);
    }
}
