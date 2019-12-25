package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.OrderApi;
import com.example.torder.service.OrderService;
import com.example.torder.vo.OrderVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 交易
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 22:12
 **/
@RestController
public class OrderController extends BaseController implements OrderApi {
    @Autowired
    OrderService orderService;
    @Override
    public int add(OrderVo obj) {
        return orderService.add(obj);
    }

    @Override
    public PageVo findList(OrderVo obj) {
        return BeanUtil.page(orderService.findList(obj));
    }

    @Override
    public int delete(Integer id) {
        return orderService.delete(id);
    }

    @Override
    public int update(OrderVo obj) {
        return orderService.update(obj);
    }

    @Override
    public OrderVo getById(Integer id) {
        return orderService.getById(id);
    }
}
