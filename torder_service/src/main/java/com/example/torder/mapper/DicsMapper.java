package com.example.torder.mapper;


import com.example.torder.domain.Dics;

import java.util.List;

public interface DicsMapper {
    /**
     * 获取列表
     * @param dicsCode
     * @return
     */
    List findDicsList(String dicsCode);
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dics_info
     *
     * @mbg.generated
     */
    /**
     * 删除
     * @param dicsId
     * @return
     */
    int deleteByPrimaryKey(Integer dicsId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dics_info
     *
     * @mbg.generated
     */
    int insert(Dics record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dics_info
     *
     * @mbg.generated
     */
    /**
     * 选择插入
     * @param record
     * @return
     */
    int insertSelective(Dics record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dics_info
     *
     * @mbg.generated
     */
    /**
     * 查询
     * @param dicsId
     * @return
     */
    Dics selectByPrimaryKey(Integer dicsId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dics_info
     *
     * @mbg.generated
     */
    /**
     * 选择更新
     * @param record
     * @return
     */
    int updateByPrimaryKeySelective(Dics record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dics_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(Dics record);
}