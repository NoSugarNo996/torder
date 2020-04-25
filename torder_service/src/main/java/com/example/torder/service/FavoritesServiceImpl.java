package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Favorites;
import com.example.torder.mapper.FavoritesMapper;
import com.example.torder.util.UUIDUtil;
import com.example.torder.vo.FavoritesVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: torder
 * @description: 喜好
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:36
 **/
@Service
public class FavoritesServiceImpl implements FavoritesService{
@Autowired(required = false)
    FavoritesMapper favoritesMapper;
    @Override
    public List findList(FavoritesVo obj) {
        return favoritesMapper.findList(obj);
    }

    @Override
    public int add(FavoritesVo obj) {
        obj.setCode(UUIDUtil.getUUID());
        return favoritesMapper.insertSelective(BeanUtil.copy(obj, Favorites.class));
    }

    @Override
    public int delete(Integer id) {
        return favoritesMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(FavoritesVo obj) {
        return favoritesMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Favorites.class));
    }

    @Override
    public FavoritesVo getById(Integer id) {
        return favoritesMapper.selectByPrimaryKey(id);
    }
}
