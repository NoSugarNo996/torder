package com.example.torder.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @program: torder
 * @description: 类别
 * @author: huangjiali 黄嘉丽
 * @create: 2020-03-26 14:25
 **/
@RequestMapping("/category")
public interface CategoryApi {

    @RequestMapping("/parent")
    Object findCategoryParentList();

    @RequestMapping("/children")
    Object findCategoryChildrenList(@RequestParam("cParent") String cParent);
}
