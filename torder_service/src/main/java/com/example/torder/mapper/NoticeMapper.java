package com.example.torder.mapper;

import com.example.torder.domain.Notice;
import com.example.torder.vo.AdvertisingVo;
import com.example.torder.vo.NoticeVo;

import java.util.List;

public interface NoticeMapper {
    List findList(NoticeVo obj);
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table notice_info
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer noticeId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table notice_info
     *
     * @mbg.generated
     */
    int insert(Notice record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table notice_info
     *
     * @mbg.generated
     */
    int insertSelective(Notice record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table notice_info
     *
     * @mbg.generated
     */
    NoticeVo selectByPrimaryKey(Integer noticeId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table notice_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(Notice record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table notice_info
     *
     * @mbg.generated
     */
    int updateByPrimaryKey(Notice record);
}