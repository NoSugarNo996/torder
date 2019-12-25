package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.RoleApi;
import com.example.torder.service.RoleService;
import com.example.torder.vo.RoleVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 角色
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 22:21
 **/
@RestController
public class RoleController extends BaseController implements RoleApi {
    @Autowired
    RoleService roleService;
    @Override
    public int add(RoleVo obj) {
        return roleService.add(obj);
    }

    @Override
    public PageVo findList(RoleVo obj) {
        return BeanUtil.page(roleService.findList(obj));
    }

    @Override
    public int delete(Integer id) {
        return roleService.delete(id);
    }

    @Override
    public int update(RoleVo obj) {
        return roleService.update(obj);
    }

    @Override
    public RoleVo getById(Integer id) {
        return roleService.getById(id);
    }
}
