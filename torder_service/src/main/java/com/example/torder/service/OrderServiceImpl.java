package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Order;
import com.example.torder.mapper.OrderMapper;
import com.example.torder.vo.OrderVo;
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
    @Override
    public List findList(OrderVo obj) {
        return orderMapper.findList(obj);
    }

    @Override
    public int add(OrderVo obj) {
        return orderMapper.insertSelective(BeanUtil.copy(obj, Order.class));
    }

    @Override
    public int delete(Integer id) {
        return orderMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(OrderVo obj) {
        return orderMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Order.class));
    }

    @Override
    public OrderVo getById(Integer id) {
        return orderMapper.selectByPrimaryKey(id);
    }
}
