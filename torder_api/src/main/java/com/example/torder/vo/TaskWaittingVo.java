package com.example.torder.vo;

import com.cetccity.common.base.vo.BaseVo;

import java.io.Serializable;
import java.util.Date;

/**
 * @program: torder
 * @description: 候选
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 14:19
 **/
public class TaskWaittingVo extends BaseVo implements Serializable {
    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getTalentsName() {
        return talentsName;
    }

    public void setTalentsName(String talentsName) {
        this.talentsName = talentsName;
    }

    private  String taskName;
    private  String talentsName;
    private String code;
    /**
     * Database Column Remarks:
     *   候选ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_waitting_info.waitting_id
     *
     * @mbg.generated
     */
    private Integer waittingId;

    /**
     * Database Column Remarks:
     *   任务ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_waitting_info.task_id
     *
     * @mbg.generated
     */
    private String taskCode;

    /**
     * Database Column Remarks:
     *   人才ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_waitting_info.talents_id
     *
     * @mbg.generated
     */
    private String talentsCode;

    /**
     * Database Column Remarks:
     *   简略解决方案
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_waitting_info.waitting_short_solution
     *
     * @mbg.generated
     */
    private String waittingShortSolution;

    /**
     * Database Column Remarks:
     *   操作人
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_waitting_info.opr
     *
     * @mbg.generated
     */
    private Integer opr;

    /**
     * Database Column Remarks:
     *   操作时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_waitting_info.opr_time
     *
     * @mbg.generated
     */
    private Date oprTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_waitting_info.other
     *
     * @mbg.generated
     */
    private String other;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_waitting_info.others
     *
     * @mbg.generated
     */
    private String others;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table task_waitting_info
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_waitting_info.waitting_id
     *
     * @return the value of task_waitting_info.waitting_id
     *
     * @mbg.generated
     */
    public Integer getWaittingId() {
        return waittingId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_waitting_info.waitting_id
     *
     * @param waittingId the value for task_waitting_info.waitting_id
     *
     * @mbg.generated
     */
    public void setWaittingId(Integer waittingId) {
        this.waittingId = waittingId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_waitting_info.task_id
     *
     * @return the value of task_waitting_info.task_id
     *
     * @mbg.generated
     */
    public String getTaskCode() {
        return taskCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_waitting_info.task_id
     *
     * @param taskCode the value for task_waitting_info.task_id
     *
     * @mbg.generated
     */
    public void setTaskCode(String taskCode) {
        this.taskCode = taskCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_waitting_info.talents_id
     *
     * @return the value of task_waitting_info.talents_id
     *
     * @mbg.generated
     */
    public String getTalentsCode() {
        return talentsCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_waitting_info.talents_id
     *
     * @param talentsCode the value for task_waitting_info.talents_id
     *
     * @mbg.generated
     */
    public void setTalentsCode(String talentsCode) {
        this.talentsCode = talentsCode;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_waitting_info.waitting_short_solution
     *
     * @return the value of task_waitting_info.waitting_short_solution
     *
     * @mbg.generated
     */
    public String getWaittingShortSolution() {
        return waittingShortSolution;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_waitting_info.waitting_short_solution
     *
     * @param waittingShortSolution the value for task_waitting_info.waitting_short_solution
     *
     * @mbg.generated
     */
    public void setWaittingShortSolution(String waittingShortSolution) {
        this.waittingShortSolution = waittingShortSolution == null ? null : waittingShortSolution.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_waitting_info.opr
     *
     * @return the value of task_waitting_info.opr
     *
     * @mbg.generated
     */
    public Integer getOpr() {
        return opr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_waitting_info.opr
     *
     * @param opr the value for task_waitting_info.opr
     *
     * @mbg.generated
     */
    public void setOpr(Integer opr) {
        this.opr = opr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_waitting_info.opr_time
     *
     * @return the value of task_waitting_info.opr_time
     *
     * @mbg.generated
     */
    public Date getOprTime() {
        return oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_waitting_info.opr_time
     *
     * @param oprTime the value for task_waitting_info.opr_time
     *
     * @mbg.generated
     */
    public void setOprTime(Date oprTime) {
        this.oprTime = oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_waitting_info.other
     *
     * @return the value of task_waitting_info.other
     *
     * @mbg.generated
     */
    public String getOther() {
        return other;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_waitting_info.other
     *
     * @param other the value for task_waitting_info.other
     *
     * @mbg.generated
     */
    public void setOther(String other) {
        this.other = other == null ? null : other.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_waitting_info.others
     *
     * @return the value of task_waitting_info.others
     *
     * @mbg.generated
     */
    public String getOthers() {
        return others;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_waitting_info.others
     *
     * @param others the value for task_waitting_info.others
     *
     * @mbg.generated
     */
    public void setOthers(String others) {
        this.others = others == null ? null : others.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_waitting_info
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", waittingId=").append(waittingId);
        sb.append(", taskCode=").append(taskCode);
        sb.append(", talentsCode=").append(talentsCode);
        sb.append(", waittingShortSolution=").append(waittingShortSolution);
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
