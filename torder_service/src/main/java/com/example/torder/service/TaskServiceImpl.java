package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Order;
import com.example.torder.domain.Task;
import com.example.torder.domain.User;
import com.example.torder.mapper.OrderMapper;
import com.example.torder.mapper.TaskMapper;
import com.example.torder.mapper.UserMapper;
import com.example.torder.util.UUIDUtil;
import com.example.torder.vo.TaskVo;
import com.example.torder.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
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
    @Autowired(required = false)
    OrderMapper orderMapper;
    @Autowired(required = false)
    UserMapper userMapper;
    @Override
    public List findList(TaskVo obj) {
        return taskMapper.findList(obj);
    }

    @Override
    public int add(TaskVo obj) {
        obj.setCode(UUIDUtil.getUUID());
        return taskMapper.insertSelective(BeanUtil.copy(obj, Task.class));
    }

    @Override
    public int delete(Integer id) {
        return taskMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(TaskVo obj) {
        if (obj.getTaskStatus().equals("7")){
            taskMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Task.class));
            TaskVo task=getById(obj.getTaskId());
            Order order=new Order();
            order.setCode(UUIDUtil.getUUID());
            order.setOrderEnd(task.getTaskEnd());
            order.setOrderStart(task.getTaskStart());
            order.setOrderMoney(task.getTaskMoney());
            order.setOrderPartyA(task.getTaskPublisher());
            order.setOrderPartyB(task.getTaskAccepter());
            order.setOrderStatus(1);
            order.setTaskId(task.getTaskId());
            orderMapper.insertSelective(order);
            //甲方-
            UserVo userVo=userMapper.selectByPrimaryKey(order.getOrderPartyA());
            userVo.setMoney(userVo.getMoney()-order.getOrderMoney());
            userMapper.updateByPrimaryKeySelective(BeanUtil.copy(userVo, User.class));
            //乙方+
            UserVo userVo2=userMapper.selectByPrimaryKey(order.getOrderPartyB());
            userVo2.setMoney(userVo2.getMoney()+order.getOrderMoney());
            int result= userMapper.updateByPrimaryKeySelective(BeanUtil.copy(userVo2, User.class));

            return result;
        }
        else
            return  taskMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Task.class));

    }

    @Override
    public TaskVo getById(Integer id) {
        return taskMapper.selectByPrimaryKey(id);
    }

    @Override
    public long getCount(TaskVo obj) {
        return taskMapper.getCount();
    }
}
