package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Company;
import com.example.torder.mapper.CompanyMapper;
import com.example.torder.vo.CompanyVo;
import org.apache.bcel.generic.F2D;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.ApplicationScope;

import java.util.List;

/**
 * @program: torder
 * @description: 公司
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 15:06
 **/
@Service
public class CompanyServiceImpl implements CompanyService{
    @Autowired(required = false)
    CompanyMapper companyMapper;
    @Override
    public List findList(CompanyVo obj) {
        return companyMapper.findList(obj);
    }

    @Override
    public int add(CompanyVo obj) {
        return companyMapper.insertSelective(BeanUtil.copy(obj, Company.class));
    }

    @Override
    public int delete(Integer id) {
        return companyMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(CompanyVo obj) {
        return companyMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Company.class));
    }

    @Override
    public CompanyVo getById(Integer id) {
        return companyMapper.selectByPrimaryKey(id);
    }

    @Override
    public long getCount(CompanyVo obj) {
        return companyMapper.getCount(obj);
    }
}
