package com.example.torder.mapper;

import com.example.torder.domain.Talents;
import com.example.torder.vo.AdvertisingVo;
import com.example.torder.vo.TalentsVo;

import java.util.List;

public interface TalentsMapper {
    List findList(TalentsVo obj);
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table talents_info
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer talentsId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table talents_info
     *
     * @mbg.generated
     */
    int insert(Talents record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table talents_info
     *
     * @mbg.generated
     */
    int insertSelective(Talents record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table talents_info
     *
     * @mbg.generated
     */
    TalentsVo selectByPrimaryKey(Integer talentsId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table talents_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(Talents record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table talents_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(Talents record);

    long getCount(TalentsVo obj);
}