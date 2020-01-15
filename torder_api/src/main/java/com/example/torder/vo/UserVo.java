package com.example.torder.vo;

import com.cetccity.common.base.vo.BaseVo;

import java.io.Serializable;
import java.util.Date;

/**
 * @program: torder
 * @description: 用户
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 14:20
 **/
public class UserVo extends BaseVo implements Serializable {
    /**
     * Database Column Remarks:
     *   用户ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.user_id
     *
     * @mbg.generated
     */
    private Integer userId;
    private String code;

    /**
     * Database Column Remarks:
     *   用户昵称
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.user_nickname
     *
     * @mbg.generated
     */
    private String userNickname;

    /**
     * Database Column Remarks:
     *   用户名
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.user_name
     *
     * @mbg.generated
     */
    private String userName;

    /**
     * Database Column Remarks:
     *   用户性别
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.user_sex
     *
     * @mbg.generated
     */
    private Integer userSex;

    /**
     * Database Column Remarks:
     *   用户状态
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.user_status
     *
     * @mbg.generated
     */
    private Integer userStatus;

    /**
     * Database Column Remarks:
     *   用户类别
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.user_type
     *
     * @mbg.generated
     */
    private Integer userType;

    /**
     * Database Column Remarks:
     *   用户密码
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.user_pwd
     *
     * @mbg.generated
     */
    private String userPwd;

    /**
     * Database Column Remarks:
     *   用户联系方式
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.user_phone
     *
     * @mbg.generated
     */
    private String userPhone;

    /**
     * Database Column Remarks:
     *   所属公司
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.user_company_id
     *
     * @mbg.generated
     */
    private Integer userCompanyId;

    /**
     * Database Column Remarks:
     *   操作人
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.opr
     *
     * @mbg.generated
     */
    private Integer opr;

    /**
     * Database Column Remarks:
     *   操作时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.opr_time
     *
     * @mbg.generated
     */
    private Date oprTime;

    /**
     * Database Column Remarks:
     *   用户角色
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.user_role
     *
     * @mbg.generated
     */
    private Integer userRole;

    /**
     * Database Column Remarks:
     *   备用
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.otherother
     *
     * @mbg.generated
     */
    private String otherother;

    /**
     * Database Column Remarks:
     *   备用
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column user_info.otherother2
     *
     * @mbg.generated
     */
    private String otherother2;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table user_info
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.user_id
     *
     * @return the value of user_info.user_id
     *
     * @mbg.generated
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.user_id
     *
     * @param userId the value for user_info.user_id
     *
     * @mbg.generated
     */
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.user_nickname
     *
     * @return the value of user_info.user_nickname
     *
     * @mbg.generated
     */
    public String getUserNickname() {
        return userNickname;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.user_nickname
     *
     * @param userNickname the value for user_info.user_nickname
     *
     * @mbg.generated
     */
    public void setUserNickname(String userNickname) {
        this.userNickname = userNickname == null ? null : userNickname.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.user_name
     *
     * @return the value of user_info.user_name
     *
     * @mbg.generated
     */
    public String getUserName() {
        return userName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.user_name
     *
     * @param userName the value for user_info.user_name
     *
     * @mbg.generated
     */
    public void setUserName(String userName) {
        this.userName = userName == null ? null : userName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.user_sex
     *
     * @return the value of user_info.user_sex
     *
     * @mbg.generated
     */
    public Integer getUserSex() {
        return userSex;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.user_sex
     *
     * @param userSex the value for user_info.user_sex
     *
     * @mbg.generated
     */
    public void setUserSex(Integer userSex) {
        this.userSex = userSex;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.user_status
     *
     * @return the value of user_info.user_status
     *
     * @mbg.generated
     */
    public Integer getUserStatus() {
        return userStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.user_status
     *
     * @param userStatus the value for user_info.user_status
     *
     * @mbg.generated
     */
    public void setUserStatus(Integer userStatus) {
        this.userStatus = userStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.user_type
     *
     * @return the value of user_info.user_type
     *
     * @mbg.generated
     */
    public Integer getUserType() {
        return userType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.user_type
     *
     * @param userType the value for user_info.user_type
     *
     * @mbg.generated
     */
    public void setUserType(Integer userType) {
        this.userType = userType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.user_pwd
     *
     * @return the value of user_info.user_pwd
     *
     * @mbg.generated
     */
    public String getUserPwd() {
        return userPwd;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.user_pwd
     *
     * @param userPwd the value for user_info.user_pwd
     *
     * @mbg.generated
     */
    public void setUserPwd(String userPwd) {
        this.userPwd = userPwd == null ? null : userPwd.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.user_phone
     *
     * @return the value of user_info.user_phone
     *
     * @mbg.generated
     */
    public String getUserPhone() {
        return userPhone;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.user_phone
     *
     * @param userPhone the value for user_info.user_phone
     *
     * @mbg.generated
     */
    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone == null ? null : userPhone.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.user_company_id
     *
     * @return the value of user_info.user_company_id
     *
     * @mbg.generated
     */
    public Integer getUserCompanyId() {
        return userCompanyId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.user_company_id
     *
     * @param userCompanyId the value for user_info.user_company_id
     *
     * @mbg.generated
     */
    public void setUserCompanyId(Integer userCompanyId) {
        this.userCompanyId = userCompanyId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.opr
     *
     * @return the value of user_info.opr
     *
     * @mbg.generated
     */
    public Integer getOpr() {
        return opr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.opr
     *
     * @param opr the value for user_info.opr
     *
     * @mbg.generated
     */
    public void setOpr(Integer opr) {
        this.opr = opr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.opr_time
     *
     * @return the value of user_info.opr_time
     *
     * @mbg.generated
     */
    public Date getOprTime() {
        return oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.opr_time
     *
     * @param oprTime the value for user_info.opr_time
     *
     * @mbg.generated
     */
    public void setOprTime(Date oprTime) {
        this.oprTime = oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.user_role
     *
     * @return the value of user_info.user_role
     *
     * @mbg.generated
     */
    public Integer getUserRole() {
        return userRole;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.user_role
     *
     * @param userRole the value for user_info.user_role
     *
     * @mbg.generated
     */
    public void setUserRole(Integer userRole) {
        this.userRole = userRole;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.otherother
     *
     * @return the value of user_info.otherother
     *
     * @mbg.generated
     */
    public String getOtherother() {
        return otherother;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.otherother
     *
     * @param otherother the value for user_info.otherother
     *
     * @mbg.generated
     */
    public void setOtherother(String otherother) {
        this.otherother = otherother == null ? null : otherother.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column user_info.otherother2
     *
     * @return the value of user_info.otherother2
     *
     * @mbg.generated
     */
    public String getOtherother2() {
        return otherother2;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column user_info.otherother2
     *
     * @param otherother2 the value for user_info.otherother2
     *
     * @mbg.generated
     */
    public void setOtherother2(String otherother2) {
        this.otherother2 = otherother2 == null ? null : otherother2.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table user_info
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", userId=").append(userId);
        sb.append(", userNickname=").append(userNickname);
        sb.append(", userName=").append(userName);
        sb.append(", userSex=").append(userSex);
        sb.append(", userStatus=").append(userStatus);
        sb.append(", userType=").append(userType);
        sb.append(", userPwd=").append(userPwd);
        sb.append(", userPhone=").append(userPhone);
        sb.append(", userCompanyId=").append(userCompanyId);
        sb.append(", opr=").append(opr);
        sb.append(", oprTime=").append(oprTime);
        sb.append(", userRole=").append(userRole);
        sb.append(", otherother=").append(otherother);
        sb.append(", otherother2=").append(otherother2);
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
