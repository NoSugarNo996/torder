package com.example.torder.mapper;

import com.example.torder.domain.Task;

public interface TaskMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_info
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer taskId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_info
     *
     * @mbg.generated
     */
    int insert(Task record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_info
     *
     * @mbg.generated
     */
    int insertSelective(Task record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_info
     *
     * @mbg.generated
     */
    Task selectByPrimaryKey(Integer taskId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(Task record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(Task record);
}