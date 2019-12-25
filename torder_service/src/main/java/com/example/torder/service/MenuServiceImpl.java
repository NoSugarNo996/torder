package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Menu;
import com.example.torder.mapper.MenuMapper;
import com.example.torder.vo.MenuVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.util.List;

/**
 * @program: torder
 * @description: 菜单
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:39
 **/
@Service
public class MenuServiceImpl implements MenuService{
    @Autowired(required = false)
    MenuMapper menuMapper;
    @Override
    public List findList(MenuVo obj) {
        return menuMapper.findList(obj);
    }

    @Override
    public int add(MenuVo obj) {
        return menuMapper.insertSelective(BeanUtil.copy(obj, Menu.class));
    }

    @Override
    public int delete(Integer id) {
        return menuMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(MenuVo obj) {
        return menuMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Menu.class));
    }

    @Override
    public MenuVo getById(Integer id) {
        return menuMapper.selectByPrimaryKey(id);
    }
}
