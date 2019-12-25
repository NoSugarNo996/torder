package com.example.torder.domain;

import com.cetccity.common.base.com.cetccity.torder.domain.BasePo;
import java.io.Serializable;
import java.util.Date;

/**
 *
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table dics_info
 */
public class Dics extends BasePo implements Serializable {
    /**
     * Database Column Remarks:
     *   主键编号
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dics_info.dics_id
     *
     * @mbg.generated
     */
    private Integer dicsId;

    /**
     * Database Column Remarks:
     *   字典编码
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dics_info.dics_code
     *
     * @mbg.generated
     */
    private String dicsCode;

    /**
     * Database Column Remarks:
     *   字典名称
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dics_info.dics_name
     *
     * @mbg.generated
     */
    private String dicsName;

    /**
     * Database Column Remarks:
     *   字典描述
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dics_info.key_name
     *
     * @mbg.generated
     */
    private String keyName;

    /**
     * Database Column Remarks:
     *   字典值
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dics_info.key_value
     *
     * @mbg.generated
     */
    private String keyValue;

    /**
     * Database Column Remarks:
     *   描述
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dics_info.remark
     *
     * @mbg.generated
     */
    private String remark;

    /**
     * Database Column Remarks:
     *   操作时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column dics_info.opr_date
     *
     * @mbg.generated
     */
    private Date oprDate;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table dics_info
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dics_info.dics_id
     *
     * @return the value of dics_info.dics_id
     *
     * @mbg.generated
     */
    public Integer getDicsId() {
        return dicsId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dics_info.dics_id
     *
     * @param dicsId the value for dics_info.dics_id
     *
     * @mbg.generated
     */
    public void setDicsId(Integer dicsId) {
        this.dicsId = dicsId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dics_info.dics_code
     *
     * @return the value of dics_info.dics_code
     *
     * @mbg.generated
     */
    public String getDicsCode() {
        return dicsCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dics_info.dics_code
     *
     * @param dicsCode the value for dics_info.dics_code
     *
     * @mbg.generated
     */
    public void setDicsCode(String dicsCode) {
        this.dicsCode = dicsCode == null ? null : dicsCode.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dics_info.dics_name
     *
     * @return the value of dics_info.dics_name
     *
     * @mbg.generated
     */
    public String getDicsName() {
        return dicsName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dics_info.dics_name
     *
     * @param dicsName the value for dics_info.dics_name
     *
     * @mbg.generated
     */
    public void setDicsName(String dicsName) {
        this.dicsName = dicsName == null ? null : dicsName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dics_info.key_name
     *
     * @return the value of dics_info.key_name
     *
     * @mbg.generated
     */
    public String getKeyName() {
        return keyName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dics_info.key_name
     *
     * @param keyName the value for dics_info.key_name
     *
     * @mbg.generated
     */
    public void setKeyName(String keyName) {
        this.keyName = keyName == null ? null : keyName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dics_info.key_value
     *
     * @return the value of dics_info.key_value
     *
     * @mbg.generated
     */
    public String getKeyValue() {
        return keyValue;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dics_info.key_value
     *
     * @param keyValue the value for dics_info.key_value
     *
     * @mbg.generated
     */
    public void setKeyValue(String keyValue) {
        this.keyValue = keyValue == null ? null : keyValue.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dics_info.remark
     *
     * @return the value of dics_info.remark
     *
     * @mbg.generated
     */
    public String getRemark() {
        return remark;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dics_info.remark
     *
     * @param remark the value for dics_info.remark
     *
     * @mbg.generated
     */
    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column dics_info.opr_date
     *
     * @return the value of dics_info.opr_date
     *
     * @mbg.generated
     */
    public Date getOprDate() {
        return oprDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column dics_info.opr_date
     *
     * @param oprDate the value for dics_info.opr_date
     *
     * @mbg.generated
     */
    public void setOprDate(Date oprDate) {
        this.oprDate = oprDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table dics_info
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", dicsId=").append(dicsId);
        sb.append(", dicsCode=").append(dicsCode);
        sb.append(", dicsName=").append(dicsName);
        sb.append(", keyName=").append(keyName);
        sb.append(", keyValue=").append(keyValue);
        sb.append(", remark=").append(remark);
        sb.append(", oprDate=").append(oprDate);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}