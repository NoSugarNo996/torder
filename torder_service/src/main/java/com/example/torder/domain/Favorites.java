package com.example.torder.domain;

import com.cetccity.common.base.domain.BasePo;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table favorites_info
 */
public class Favorites extends BasePo implements Serializable {
    /**
     * Database Column Remarks:
     *   关注ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column favorites_info.fav_id
     *
     * @mbg.generated
     */
    private Integer favId;

    /**
     * Database Column Remarks:
     *   关注者ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column favorites_info.user_id
     *
     * @mbg.generated
     */
    private String userCode;

    /**
     * Database Column Remarks:
     *   关注类型
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column favorites_info.fav_type
     *
     * @mbg.generated
     */
    private Integer favType;

    /**
     * Database Column Remarks:
     *   关注对象ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column favorites_info.target_id
     *
     * @mbg.generated
     */
    private String targetCode;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column favorites_info.taskCode
     *
     * @mbg.generated
     */
    private String taskCode;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column favorites_info.opr_time
     *
     * @mbg.generated
     */
    private Date oprTime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table favorites_info
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column favorites_info.fav_id
     *
     * @return the value of favorites_info.fav_id
     *
     * @mbg.generated
     */
    public Integer getFavId() {
        return favId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column favorites_info.fav_id
     *
     * @param favId the value for favorites_info.fav_id
     *
     * @mbg.generated
     */
    public void setFavId(Integer favId) {
        this.favId = favId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column favorites_info.user_id
     *
     * @return the value of favorites_info.user_id
     *
     * @mbg.generated
     */
    public String getUserCode() {
        return userCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column favorites_info.user_id
     *
     * @param userCode the value for favorites_info.user_id
     *
     * @mbg.generated
     */
    public void setUserCode(String userCode) {
        this.userCode = userCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column favorites_info.fav_type
     *
     * @return the value of favorites_info.fav_type
     *
     * @mbg.generated
     */
    public Integer getFavType() {
        return favType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column favorites_info.fav_type
     *
     * @param favType the value for favorites_info.fav_type
     *
     * @mbg.generated
     */
    public void setFavType(Integer favType) {
        this.favType = favType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column favorites_info.target_id
     *
     * @return the value of favorites_info.target_id
     *
     * @mbg.generated
     */
    public String getTargetCode() {
        return targetCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column favorites_info.target_id
     *
     * @param targetCode the value for favorites_info.target_id
     *
     * @mbg.generated
     */
    public void setTargetCode(String targetCode) {
        this.targetCode = targetCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column favorites_info.taskCode
     *
     * @return the value of favorites_info.taskCode
     *
     * @mbg.generated
     */
    public String getTaskCode() {
        return taskCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column favorites_info.taskCode
     *
     * @param taskCode the value for favorites_info.taskCode
     *
     * @mbg.generated
     */
    public void setTaskCode(String taskCode) {
        this.taskCode = taskCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column favorites_info.opr_time
     *
     * @return the value of favorites_info.opr_time
     *
     * @mbg.generated
     */
    public Date getOprTime() {
        return oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column favorites_info.opr_time
     *
     * @param oprTime the value for favorites_info.opr_time
     *
     * @mbg.generated
     */
    public void setOprTime(Date oprTime) {
        this.oprTime = oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table favorites_info
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", favId=").append(favId);
        sb.append(", userCode=").append(userCode);
        sb.append(", favType=").append(favType);
        sb.append(", targetCode=").append(targetCode);
        sb.append(", taskCode=").append(taskCode);
        sb.append(", oprTime=").append(oprTime);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}