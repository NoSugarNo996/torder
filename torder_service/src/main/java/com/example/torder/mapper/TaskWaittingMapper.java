package com.example.torder.mapper;

import com.example.torder.domain.TaskWaitting;
import com.example.torder.vo.AdvertisingVo;
import com.example.torder.vo.TaskWaittingVo;

import java.util.List;

public interface TaskWaittingMapper {
    List findList(TaskWaittingVo obj);
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_waitting_info
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(String taskId);

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
    TaskWaittingVo selectByPrimaryKey(Integer waittingId);

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