package com.example.torder.service;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @program: torder
 * @description: 类别
 * @author: huangjiali 黄嘉丽
 * @create: 2020-03-26 14:31
 **/
public interface CategoryService {

    Object findCategoryParentList();

    Object findCategoryChildrenList(String cParent);
}
