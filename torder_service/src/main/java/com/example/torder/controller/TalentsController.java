package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.TalentsApi;
import com.example.torder.service.TalentsService;
import com.example.torder.vo.TalentsVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 人才
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 22:27
 **/
@RestController
public class TalentsController extends BaseController implements TalentsApi {
    @Autowired
    TalentsService talentsService;
    @Override
    public int add(TalentsVo obj) {
        return talentsService.add(obj);
    }

    @Override
    public PageVo findList(TalentsVo obj) {
        return BeanUtil.page(talentsService.findList(obj));
    }

    @Override
    public int delete(Integer id) {
        return talentsService.delete(id);
    }

    @Override
    public int update(TalentsVo obj) {
        return talentsService.update(obj);
    }

    @Override
    public TalentsVo getById(Integer id) {
        return talentsService.getById(id);
    }

    @Override
    public long getCount() {
        return talentsService.getCount();
    }
}
