package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.CompanyApi;
import com.example.torder.service.CompanyService;
import com.example.torder.vo.CompanyVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 公司
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:07
 **/
@RestController
public class CompanyController extends BaseController implements CompanyApi {
    @Autowired
    CompanyService companyService;
    @Override
    public int add(CompanyVo obj) {
        return companyService.add(obj);
    }

    @Override
    public PageVo findList(CompanyVo obj) {
        return BeanUtil.page(companyService.findList(obj));
    }

    @Override
    public int delete(Integer id) {
        return companyService.delete(id);
    }

    @Override
    public int update(CompanyVo obj) {
        return companyService.update(obj);
    }

    @Override
    public CompanyVo getById(Integer id) {
        return companyService.getById(id);
    }
}
