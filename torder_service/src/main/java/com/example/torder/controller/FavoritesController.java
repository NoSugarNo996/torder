package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.FavoritesApi;
import com.example.torder.service.FavoritesService;
import com.example.torder.vo.FavoritesVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 喜爱
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:31
 **/
@RestController
public class FavoritesController extends BaseController implements FavoritesApi {
    @Autowired
    FavoritesService favoritesService;
    @Override
    public int add(FavoritesVo obj) {
        return favoritesService.add(obj);
    }

    @Override
    public PageVo findList(FavoritesVo obj) {
        return BeanUtil.page(favoritesService.findList(obj));
    }

    @Override
    public int delete(Integer id) {
        return favoritesService.delete(id);
    }

    @Override
    public int update(FavoritesVo obj) {
        return favoritesService.update(obj);
    }

    @Override
    public FavoritesVo getById(Integer id) {
        return favoritesService.getById(id);
    }
}
