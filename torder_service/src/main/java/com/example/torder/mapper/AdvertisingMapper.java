package com.example.torder.mapper;

import com.example.torder.domain.Advertising;
import com.example.torder.vo.AdvertisingVo;

import java.util.List;

public interface AdvertisingMapper {
    List findList(AdvertisingVo obj);
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table advertising_info
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer adId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table advertising_info
     *
     * @mbg.generated
     */
    int insert(Advertising record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table advertising_info
     *
     * @mbg.generated
     */
    int insertSelective(Advertising record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table advertising_info
     *
     * @mbg.generated
     */
    AdvertisingVo selectByPrimaryKey(Integer adId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table advertising_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(Advertising record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table advertising_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(Advertising record);
}