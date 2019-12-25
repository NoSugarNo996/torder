package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.RightApi;
import com.example.torder.domain.Right;
import com.example.torder.service.RightService;
import com.example.torder.vo.RightVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 权利
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 22:19
 **/
@RestController
public class RightController extends BaseController implements RightApi {
    @Autowired
    RightService rightService;
    @Override
    public int add(RightVo obj) {
        return rightService.add(obj);
    }

    @Override
    public PageVo findList(RightVo obj) {
        return BeanUtil.page(rightService.findList(obj));
    }

    @Override
    public int delete(Integer id) {
        return rightService.delete(id);
    }

    @Override
    public int update(RightVo obj) {
        return rightService.update(obj);
    }

    @Override
    public RightVo getById(Integer id) {
        return rightService.getById(id);
    }
}
