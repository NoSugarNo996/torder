package com.example.torder.mapper;

import com.example.torder.domain.Company;
import com.example.torder.vo.AdvertisingVo;
import com.example.torder.vo.CompanyVo;

import java.util.List;

public interface CompanyMapper {
    long getCount(CompanyVo obj);

    List findList(CompanyVo obj);
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_info
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer companyId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_info
     *
     * @mbg.generated
     */
    int insert(Company record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_info
     *
     * @mbg.generated
     */
    int insertSelective(Company record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_info
     *
     * @mbg.generated
     */
    CompanyVo selectByPrimaryKey(Integer companyId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(Company record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(Company record);
}