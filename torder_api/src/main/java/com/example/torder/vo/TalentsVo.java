package com.example.torder.vo;

import com.cetccity.common.base.vo.BaseVo;

import java.io.Serializable;
import java.util.Date;

/**
 * @program: torder
 * @description: 人才
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 14:16
 **/
public class TalentsVo extends BaseVo implements Serializable {
    private String code;
    /**
     * Database Column Remarks:
     *   人才ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_id
     *
     * @mbg.generated
     */
    private Integer talentsId;

    /**
     * Database Column Remarks:
     *   人才真实姓名
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_name
     *
     * @mbg.generated
     */
    private String talentsName;

    /**
     * Database Column Remarks:
     *   人才用户ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.user_id
     *
     * @mbg.generated
     */
    private Integer userId;

    /**
     * Database Column Remarks:
     *   人才性别
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_sex
     *
     * @mbg.generated
     */
    private Integer talentsSex;

    /**
     * Database Column Remarks:
     *   人才民族
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_nation
     *
     * @mbg.generated
     */
    private Integer talentsNation;

    /**
     * Database Column Remarks:
     *   人才政治面貌
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_politice_status
     *
     * @mbg.generated
     */
    private String talentsPoliticeStatus;

    /**
     * Database Column Remarks:
     *   人才出生年月
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_date
     *
     * @mbg.generated
     */
    private Date talentsDate;

    /**
     * Database Column Remarks:
     *   人才最高学历
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_education
     *
     * @mbg.generated
     */
    private Integer talentsEducation;

    /**
     * Database Column Remarks:
     *   人才毕业院校
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_graduate
     *
     * @mbg.generated
     */
    private String talentsGraduate;

    /**
     * Database Column Remarks:
     *   人才专业
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_major
     *
     * @mbg.generated
     */
    private String talentsMajor;

    /**
     * Database Column Remarks:
     *   人才工作经验
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_experience
     *
     * @mbg.generated
     */
    private Integer talentsExperience;

    /**
     * Database Column Remarks:
     *   人才联系方式
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_phone
     *
     * @mbg.generated
     */
    private String talentsPhone;

    /**
     * Database Column Remarks:
     *   人才邮箱
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_email
     *
     * @mbg.generated
     */
    private String talentsEmail;

    /**
     * Database Column Remarks:
     *   人才简介
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_resume
     *
     * @mbg.generated
     */
    private String talentsResume;

    /**
     * Database Column Remarks:
     *   人才简历
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_info
     *
     * @mbg.generated
     */
    private String talentsInfo;

    /**
     * Database Column Remarks:
     *   人才状态
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_statue
     *
     * @mbg.generated
     */
    private Integer talentsStatue;

    /**
     * Database Column Remarks:
     *   人才身份证
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_identity
     *
     * @mbg.generated
     */
    private String talentsIdentity;

    /**
     * Database Column Remarks:
     *   人才支付宝
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.talents_alipay
     *
     * @mbg.generated
     */
    private String talentsAlipay;

    /**
     * Database Column Remarks:
     *   操作人
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.opr
     *
     * @mbg.generated
     */
    private String opr;

    /**
     * Database Column Remarks:
     *   操作时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.opr_time
     *
     * @mbg.generated
     */
    private Date oprTime;

    /**
     * Database Column Remarks:
     *   其他
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.other
     *
     * @mbg.generated
     */
    private String other;

    /**
     * Database Column Remarks:
     *   其他
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column talents_info.others
     *
     * @mbg.generated
     */
    private String others;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table talents_info
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_id
     *
     * @return the value of talents_info.talents_id
     *
     * @mbg.generated
     */
    public Integer getTalentsId() {
        return talentsId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_id
     *
     * @param talentsId the value for talents_info.talents_id
     *
     * @mbg.generated
     */
    public void setTalentsId(Integer talentsId) {
        this.talentsId = talentsId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_name
     *
     * @return the value of talents_info.talents_name
     *
     * @mbg.generated
     */
    public String getTalentsName() {
        return talentsName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_name
     *
     * @param talentsName the value for talents_info.talents_name
     *
     * @mbg.generated
     */
    public void setTalentsName(String talentsName) {
        this.talentsName = talentsName == null ? null : talentsName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.user_id
     *
     * @return the value of talents_info.user_id
     *
     * @mbg.generated
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.user_id
     *
     * @param userId the value for talents_info.user_id
     *
     * @mbg.generated
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_sex
     *
     * @return the value of talents_info.talents_sex
     *
     * @mbg.generated
     */
    public Integer getTalentsSex() {
        return talentsSex;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_sex
     *
     * @param talentsSex the value for talents_info.talents_sex
     *
     * @mbg.generated
     */
    public void setTalentsSex(Integer talentsSex) {
        this.talentsSex = talentsSex;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_nation
     *
     * @return the value of talents_info.talents_nation
     *
     * @mbg.generated
     */
    public Integer getTalentsNation() {
        return talentsNation;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_nation
     *
     * @param talentsNation the value for talents_info.talents_nation
     *
     * @mbg.generated
     */
    public void setTalentsNation(Integer talentsNation) {
        this.talentsNation = talentsNation;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_politice_status
     *
     * @return the value of talents_info.talents_politice_status
     *
     * @mbg.generated
     */
    public String getTalentsPoliticeStatus() {
        return talentsPoliticeStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_politice_status
     *
     * @param talentsPoliticeStatus the value for talents_info.talents_politice_status
     *
     * @mbg.generated
     */
    public void setTalentsPoliticeStatus(String talentsPoliticeStatus) {
        this.talentsPoliticeStatus = talentsPoliticeStatus == null ? null : talentsPoliticeStatus.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_date
     *
     * @return the value of talents_info.talents_date
     *
     * @mbg.generated
     */
    public Date getTalentsDate() {
        return talentsDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_date
     *
     * @param talentsDate the value for talents_info.talents_date
     *
     * @mbg.generated
     */
    public void setTalentsDate(Date talentsDate) {
        this.talentsDate = talentsDate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_education
     *
     * @return the value of talents_info.talents_education
     *
     * @mbg.generated
     */
    public Integer getTalentsEducation() {
        return talentsEducation;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_education
     *
     * @param talentsEducation the value for talents_info.talents_education
     *
     * @mbg.generated
     */
    public void setTalentsEducation(Integer talentsEducation) {
        this.talentsEducation = talentsEducation;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_graduate
     *
     * @return the value of talents_info.talents_graduate
     *
     * @mbg.generated
     */
    public String getTalentsGraduate() {
        return talentsGraduate;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_graduate
     *
     * @param talentsGraduate the value for talents_info.talents_graduate
     *
     * @mbg.generated
     */
    public void setTalentsGraduate(String talentsGraduate) {
        this.talentsGraduate = talentsGraduate == null ? null : talentsGraduate.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_major
     *
     * @return the value of talents_info.talents_major
     *
     * @mbg.generated
     */
    public String getTalentsMajor() {
        return talentsMajor;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_major
     *
     * @param talentsMajor the value for talents_info.talents_major
     *
     * @mbg.generated
     */
    public void setTalentsMajor(String talentsMajor) {
        this.talentsMajor = talentsMajor == null ? null : talentsMajor.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_experience
     *
     * @return the value of talents_info.talents_experience
     *
     * @mbg.generated
     */
    public Integer getTalentsExperience() {
        return talentsExperience;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_experience
     *
     * @param talentsExperience the value for talents_info.talents_experience
     *
     * @mbg.generated
     */
    public void setTalentsExperience(Integer talentsExperience) {
        this.talentsExperience = talentsExperience;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_phone
     *
     * @return the value of talents_info.talents_phone
     *
     * @mbg.generated
     */
    public String getTalentsPhone() {
        return talentsPhone;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_phone
     *
     * @param talentsPhone the value for talents_info.talents_phone
     *
     * @mbg.generated
     */
    public void setTalentsPhone(String talentsPhone) {
        this.talentsPhone = talentsPhone == null ? null : talentsPhone.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_email
     *
     * @return the value of talents_info.talents_email
     *
     * @mbg.generated
     */
    public String getTalentsEmail() {
        return talentsEmail;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_email
     *
     * @param talentsEmail the value for talents_info.talents_email
     *
     * @mbg.generated
     */
    public void setTalentsEmail(String talentsEmail) {
        this.talentsEmail = talentsEmail == null ? null : talentsEmail.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_resume
     *
     * @return the value of talents_info.talents_resume
     *
     * @mbg.generated
     */
    public String getTalentsResume() {
        return talentsResume;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_resume
     *
     * @param talentsResume the value for talents_info.talents_resume
     *
     * @mbg.generated
     */
    public void setTalentsResume(String talentsResume) {
        this.talentsResume = talentsResume == null ? null : talentsResume.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_info
     *
     * @return the value of talents_info.talents_info
     *
     * @mbg.generated
     */
    public String getTalentsInfo() {
        return talentsInfo;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_info
     *
     * @param talentsInfo the value for talents_info.talents_info
     *
     * @mbg.generated
     */
    public void setTalentsInfo(String talentsInfo) {
        this.talentsInfo = talentsInfo == null ? null : talentsInfo.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_statue
     *
     * @return the value of talents_info.talents_statue
     *
     * @mbg.generated
     */
    public Integer getTalentsStatue() {
        return talentsStatue;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_statue
     *
     * @param talentsStatue the value for talents_info.talents_statue
     *
     * @mbg.generated
     */
    public void setTalentsStatue(Integer talentsStatue) {
        this.talentsStatue = talentsStatue;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_identity
     *
     * @return the value of talents_info.talents_identity
     *
     * @mbg.generated
     */
    public String getTalentsIdentity() {
        return talentsIdentity;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_identity
     *
     * @param talentsIdentity the value for talents_info.talents_identity
     *
     * @mbg.generated
     */
    public void setTalentsIdentity(String talentsIdentity) {
        this.talentsIdentity = talentsIdentity == null ? null : talentsIdentity.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.talents_alipay
     *
     * @return the value of talents_info.talents_alipay
     *
     * @mbg.generated
     */
    public String getTalentsAlipay() {
        return talentsAlipay;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.talents_alipay
     *
     * @param talentsAlipay the value for talents_info.talents_alipay
     *
     * @mbg.generated
     */
    public void setTalentsAlipay(String talentsAlipay) {
        this.talentsAlipay = talentsAlipay == null ? null : talentsAlipay.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.opr
     *
     * @return the value of talents_info.opr
     *
     * @mbg.generated
     */
    public String getOpr() {
        return opr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.opr
     *
     * @param opr the value for talents_info.opr
     *
     * @mbg.generated
     */
    public void setOpr(String opr) {
        this.opr = opr == null ? null : opr.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.opr_time
     *
     * @return the value of talents_info.opr_time
     *
     * @mbg.generated
     */
    public Date getOprTime() {
        return oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.opr_time
     *
     * @param oprTime the value for talents_info.opr_time
     *
     * @mbg.generated
     */
    public void setOprTime(Date oprTime) {
        this.oprTime = oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.other
     *
     * @return the value of talents_info.other
     *
     * @mbg.generated
     */
    public String getOther() {
        return other;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.other
     *
     * @param other the value for talents_info.other
     *
     * @mbg.generated
     */
    public void setOther(String other) {
        this.other = other == null ? null : other.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column talents_info.others
     *
     * @return the value of talents_info.others
     *
     * @mbg.generated
     */
    public String getOthers() {
        return others;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column talents_info.others
     *
     * @param others the value for talents_info.others
     *
     * @mbg.generated
     */
    public void setOthers(String others) {
        this.others = others == null ? null : others.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table talents_info
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", talentsId=").append(talentsId);
        sb.append(", talentsName=").append(talentsName);
        sb.append(", userId=").append(userId);
        sb.append(", talentsSex=").append(talentsSex);
        sb.append(", talentsNation=").append(talentsNation);
        sb.append(", talentsPoliticeStatus=").append(talentsPoliticeStatus);
        sb.append(", talentsDate=").append(talentsDate);
        sb.append(", talentsEducation=").append(talentsEducation);
        sb.append(", talentsGraduate=").append(talentsGraduate);
        sb.append(", talentsMajor=").append(talentsMajor);
        sb.append(", talentsExperience=").append(talentsExperience);
        sb.append(", talentsPhone=").append(talentsPhone);
        sb.append(", talentsEmail=").append(talentsEmail);
        sb.append(", talentsResume=").append(talentsResume);
        sb.append(", talentsInfo=").append(talentsInfo);
        sb.append(", talentsStatue=").append(talentsStatue);
        sb.append(", talentsIdentity=").append(talentsIdentity);
        sb.append(", talentsAlipay=").append(talentsAlipay);
        sb.append(", opr=").append(opr);
        sb.append(", oprTime=").append(oprTime);
        sb.append(", other=").append(other);
        sb.append(", others=").append(others);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }
}
