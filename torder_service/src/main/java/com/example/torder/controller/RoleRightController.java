package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.RoleRightApi;
import com.example.torder.service.RoleRightService;
import com.example.torder.vo.RoleRightVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author huangjiali
 * @date 2019/12/23 10:07 上午
 */
@RestController
public class RoleRightController extends BaseController implements RoleRightApi {
    @Autowired
    RoleRightService roleRightService;
    @Override
    public int addRoleRight(RoleRightVo obj) {
        return roleRightService.add(obj);
    }

    @Override
    public PageVo findRRList(RoleRightVo obj) {
        return BeanUtil.page(roleRightService.findRRList(obj));
    }

    @Override
    public int deleteRoleRight(Integer id) {
        return roleRightService.delete(id);
    }

    @Override
    public int updateRoleRight(RoleRightVo obj) {
        return roleRightService.update(obj);
    }

    @Override
    public RoleRightVo getById(Integer id) {
        return roleRightService.getById(id);
    }
}
