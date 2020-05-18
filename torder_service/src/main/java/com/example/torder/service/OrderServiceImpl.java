package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Order;
import com.example.torder.domain.User;
import com.example.torder.mapper.OrderMapper;
import com.example.torder.mapper.UserMapper;
import com.example.torder.util.UUIDUtil;
import com.example.torder.vo.OrderVo;
import com.example.torder.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: torder
 * @description: 交易
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:39
 **/
@Service
public class OrderServiceImpl implements OrderService{
    @Autowired(required = false)
    OrderMapper orderMapper;
    @Autowired(required = false)
    UserMapper userMapper;
    @Override
    public List findList(OrderVo obj) {
        return orderMapper.findList(obj);
    }

    @Override
    public int add(OrderVo obj) {
        obj.setCode(UUIDUtil.getUUID());
        return orderMapper.insertSelective(BeanUtil.copy(obj, Order.class));
    }

    @Override
    public int delete(Integer id) {
        return orderMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(OrderVo obj) {

        if (obj.getOrderStatus()==1)
        {
            OrderVo order=getById(obj.getOrderId());
            //甲方-
            UserVo userVo=userMapper.selectByPrimaryKey(order.getOrderPartyA());
            userVo.setMoney(userVo.getMoney()-order.getOrderMoney());
            userMapper.updateByPrimaryKeySelective(BeanUtil.copy(userVo, User.class));
            //乙方+
            UserVo userVo2=userMapper.selectByPrimaryKey(order.getOrderPartyB());
            userVo2.setMoney(userVo2.getMoney()+order.getOrderMoney());
            userMapper.updateByPrimaryKeySelective(BeanUtil.copy(userVo2, User.class));
        }
        return orderMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Order.class));
    }

    @Override
    public OrderVo getById(Integer id) {
        return orderMapper.selectByPrimaryKey(id);
    }

    @Override
    public long getCount(OrderVo obj) {
        return orderMapper.getCount(obj);
    }
}
