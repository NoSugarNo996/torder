package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.MenuApi;
import com.example.torder.service.MenuService;
import com.example.torder.vo.MenuVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 菜单
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 22:10
 **/
@RestController
public class MenuController extends BaseController implements MenuApi {
    @Autowired
    MenuService menuService;
    @Override
    public int add(MenuVo obj) {
        return menuService.add(obj);
    }

    @Override
    public PageVo findList(MenuVo obj) {
        return BeanUtil.page(menuService.findList(obj));
    }

    @Override
    public int delete(Integer id) {
        return menuService.delete(id);
    }

    @Override
    public int update(MenuVo obj) {
        return menuService.update(obj);
    }

    @Override
    public MenuVo getById(Integer id) {
        return menuService.getById(id);
    }
}
