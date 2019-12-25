package com.example.torder.domain;

import com.cetccity.common.base.domain.BasePo;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table company_info
 */
/**
 * @author huangjiali
 * @date 2019/12/25 1:38 下午
 */
public class Company extends BasePo implements Serializable {
    /**
     * Database Column Remarks:
     *   公司ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column company_info.company_id
     *
     * @mbg.generated
     */
    private Integer companyId;

    /**
     * Database Column Remarks:
     *   公司名称
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column company_info.company_name
     *
     * @mbg.generated
     */
    private String companyName;

    /**
     * Database Column Remarks:
     *   公司类型
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column company_info.company_type
     *
     * @mbg.generated
     */
    private Integer companyType;

    /**
     * Database Column Remarks:
     *   公司规模
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column company_info.company_size
     *
     * @mbg.generated
     */
    private Integer companySize;

    /**
     * Database Column Remarks:
     *   公司状态
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column company_info.company_status
     *
     * @mbg.generated
     */
    private Integer companyStatus;

    /**
     * Database Column Remarks:
     *   操作人
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column company_info.opr
     *
     * @mbg.generated
     */
    private Integer opr;

    /**
     * Database Column Remarks:
     *   操作时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column company_info.opr_time
     *
     * @mbg.generated
     */
    private Date oprTime;

    /**
     * Database Column Remarks:
     *   其他
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column company_info.other
     *
     * @mbg.generated
     */
    private String other;

    /**
     * Database Column Remarks:
     *   其他
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column company_info.others
     *
     * @mbg.generated
     */
    private String others;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table company_info
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column company_info.company_id
     *
     * @return the value of company_info.company_id
     *
     * @mbg.generated
     */
    public Integer getCompanyId() {
        return companyId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column company_info.company_id
     *
     * @param companyId the value for company_info.company_id
     *
     * @mbg.generated
     */
    public void setCompanyId(Integer companyId) {
        this.companyId = companyId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column company_info.company_name
     *
     * @return the value of company_info.company_name
     *
     * @mbg.generated
     */
    public String getCompanyName() {
        return companyName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column company_info.company_name
     *
     * @param companyName the value for company_info.company_name
     *
     * @mbg.generated
     */
    public void setCompanyName(String companyName) {
        this.companyName = companyName == null ? null : companyName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column company_info.company_type
     *
     * @return the value of company_info.company_type
     *
     * @mbg.generated
     */
    public Integer getCompanyType() {
        return companyType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column company_info.company_type
     *
     * @param companyType the value for company_info.company_type
     *
     * @mbg.generated
     */
    public void setCompanyType(Integer companyType) {
        this.companyType = companyType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column company_info.company_size
     *
     * @return the value of company_info.company_size
     *
     * @mbg.generated
     */
    public Integer getCompanySize() {
        return companySize;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column company_info.company_size
     *
     * @param companySize the value for company_info.company_size
     *
     * @mbg.generated
     */
    public void setCompanySize(Integer companySize) {
        this.companySize = companySize;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column company_info.company_status
     *
     * @return the value of company_info.company_status
     *
     * @mbg.generated
     */
    public Integer getCompanyStatus() {
        return companyStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column company_info.company_status
     *
     * @param companyStatus the value for company_info.company_status
     *
     * @mbg.generated
     */
    public void setCompanyStatus(Integer companyStatus) {
        this.companyStatus = companyStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column company_info.opr
     *
     * @return the value of company_info.opr
     *
     * @mbg.generated
     */
    public Integer getOpr() {
        return opr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column company_info.opr
     *
     * @param opr the value for company_info.opr
     *
     * @mbg.generated
     */
    public void setOpr(Integer opr) {
        this.opr = opr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column company_info.opr_time
     *
     * @return the value of company_info.opr_time
     *
     * @mbg.generated
     */
    public Date getOprTime() {
        return oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column company_info.opr_time
     *
     * @param oprTime the value for company_info.opr_time
     *
     * @mbg.generated
     */
    public void setOprTime(Date oprTime) {
        this.oprTime = oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column company_info.other
     *
     * @return the value of company_info.other
     *
     * @mbg.generated
     */
    public String getOther() {
        return other;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column company_info.other
     *
     * @param other the value for company_info.other
     *
     * @mbg.generated
     */
    public void setOther(String other) {
        this.other = other == null ? null : other.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column company_info.others
     *
     * @return the value of company_info.others
     *
     * @mbg.generated
     */
    public String getOthers() {
        return others;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column company_info.others
     *
     * @param others the value for company_info.others
     *
     * @mbg.generated
     */
    public void setOthers(String others) {
        this.others = others == null ? null : others.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table company_info
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", companyId=").append(companyId);
        sb.append(", companyName=").append(companyName);
        sb.append(", companyType=").append(companyType);
        sb.append(", companySize=").append(companySize);
        sb.append(", companyStatus=").append(companyStatus);
        sb.append(", opr=").append(opr);
        sb.append(", oprTime=").append(oprTime);
        sb.append(", other=").append(other);
        sb.append(", others=").append(others);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}