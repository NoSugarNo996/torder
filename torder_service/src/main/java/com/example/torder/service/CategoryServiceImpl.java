package com.example.torder.service;

import com.example.torder.mapper.CategoryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @program: torder
 * @description: 类别
 * @author: huangjiali 黄嘉丽
 * @create: 2020-03-26 14:34
 **/
@Service
public class CategoryServiceImpl implements CategoryService{
    @Autowired(required = false)
    CategoryMapper categoryMapper;
    @Override
    public Object findCategoryParentList() {
        return categoryMapper.findCategoryParentList();
    }

    @Override
    public Object findCategoryChildrenList(String cParent) {
        return categoryMapper.findCategoryChildrenList(cParent);
    }
}
