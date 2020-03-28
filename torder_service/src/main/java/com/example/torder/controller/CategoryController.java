package com.example.torder.controller;

import com.example.torder.api.CategoryApi;
import com.example.torder.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 类别
 * @author: huangjiali 黄嘉丽
 * @create: 2020-03-26 14:32
 **/
@RestController
public class CategoryController extends BaseController implements CategoryApi {

    @Autowired(required = false)
    CategoryService categoryService;
    @Override
    public Object findCategoryParentList() {
        return categoryService.findCategoryParentList();
    }

    @Override
    public Object findCategoryChildrenList(String cParent) {
        return categoryService.findCategoryChildrenList(cParent);
    }
}
