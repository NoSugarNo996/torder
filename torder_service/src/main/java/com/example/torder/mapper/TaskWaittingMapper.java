package com.example.torder.mapper;

import com.example.torder.domain.TaskWaitting;

public interface TaskWaittingMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_waitting_info
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer waittingId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_waitting_info
     *
     * @mbg.generated
     */
    int insert(TaskWaitting record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_waitting_info
     *
     * @mbg.generated
     */
    int insertSelective(TaskWaitting record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_waitting_info
     *
     * @mbg.generated
     */
    TaskWaitting selectByPrimaryKey(Integer waittingId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_waitting_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(TaskWaitting record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_waitting_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(TaskWaitting record);
}