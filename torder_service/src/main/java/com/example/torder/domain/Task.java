package com.example.torder.domain;

import com.cetccity.common.base.domain.BasePo;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * This class was generated by MyBatis Generator.
 * This class corresponds to the database table task_info
 */
public class Task extends BasePo implements Serializable {
    public String getTaskClassifyName() {
        return taskClassifyName;
    }

    public void setTaskClassifyName(String taskClassifyName) {
        this.taskClassifyName = taskClassifyName;
    }

    private String taskClassifyName;
    private String code;
    /**
     * Database Column Remarks:
     *   任务ID
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.task_id
     *
     * @mbg.generated
     */
    private Integer taskId;

    /**
     * Database Column Remarks:
     *   任务名称
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.task_name
     *
     * @mbg.generated
     */
    private String taskName;

    /**
     * Database Column Remarks:
     *   任务类型
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.task_type
     *
     * @mbg.generated
     */
    private String taskType;

    /**
     * Database Column Remarks:
     *   任务状态
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.task_status
     *
     * @mbg.generated
     */
    private String taskStatus;

    /**
     * Database Column Remarks:
     *   任务发布者
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.task_publisher
     *
     * @mbg.generated
     */
    private String taskPublisher;

    /**
     * Database Column Remarks:
     *   任务分类
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.task_classify
     *
     * @mbg.generated
     */
    private String taskClassify;

    /**
     * Database Column Remarks:
     *   任务接收者
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.task_accepter
     *
     * @mbg.generated
     */
    private String taskAccepter;

    /**
     * Database Column Remarks:
     *   任务描述
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.task_des
     *
     * @mbg.generated
     */
    private String taskDes;

    /**
     * Database Column Remarks:
     *   任务成果
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.task_file
     *
     * @mbg.generated
     */
    private String taskFile;

    /**
     * Database Column Remarks:
     *   任务发布时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.task_start
     *
     * @mbg.generated
     */
    private String taskStart;

    /**
     * Database Column Remarks:
     *   任务发布结束时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.task_end
     *
     * @mbg.generated
     */
    private String taskEnd;

    /**
     * Database Column Remarks:
     *   任务金额范围
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.task_money
     *
     * @mbg.generated
     */
    private String taskMoney;

    /**
     * Database Column Remarks:
     *   操作人
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.opr
     *
     * @mbg.generated
     */
    private String opr;

    /**
     * Database Column Remarks:
     *   操作时间
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.opr_time
     *
     * @mbg.generated
     */
    private Date oprTime;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.other
     *
     * @mbg.generated
     */
    private String other;

    /**
     *
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column task_info.others
     *
     * @mbg.generated
     */
    private String others;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table task_info
     *
     * @mbg.generated
     */
    private static final long serialVersionUID = 1L;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.task_id
     *
     * @return the value of task_info.task_id
     *
     * @mbg.generated
     */
    public Integer getTaskId() {
        return taskId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.task_id
     *
     * @param taskId the value for task_info.task_id
     *
     * @mbg.generated
     */
    public void setTaskId(Integer taskId) {
        this.taskId = taskId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.task_name
     *
     * @return the value of task_info.task_name
     *
     * @mbg.generated
     */
    public String getTaskName() {
        return taskName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.task_name
     *
     * @param taskName the value for task_info.task_name
     *
     * @mbg.generated
     */
    public void setTaskName(String taskName) {
        this.taskName = taskName == null ? null : taskName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.task_type
     *
     * @return the value of task_info.task_type
     *
     * @mbg.generated
     */
    public String getTaskType() {
        return taskType;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.task_type
     *
     * @param taskType the value for task_info.task_type
     *
     * @mbg.generated
     */
    public void setTaskType(String taskType) {
        this.taskType = taskType == null ? null : taskType.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.task_status
     *
     * @return the value of task_info.task_status
     *
     * @mbg.generated
     */
    public String getTaskStatus() {
        return taskStatus;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.task_status
     *
     * @param taskStatus the value for task_info.task_status
     *
     * @mbg.generated
     */
    public void setTaskStatus(String taskStatus) {
        this.taskStatus = taskStatus == null ? null : taskStatus.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.task_publisher
     *
     * @return the value of task_info.task_publisher
     *
     * @mbg.generated
     */
    public String getTaskPublisher() {
        return taskPublisher;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.task_publisher
     *
     * @param taskPublisher the value for task_info.task_publisher
     *
     * @mbg.generated
     */
    public void setTaskPublisher(String taskPublisher) {
        this.taskPublisher = taskPublisher == null ? null : taskPublisher.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.task_classify
     *
     * @return the value of task_info.task_classify
     *
     * @mbg.generated
     */
    public String getTaskClassify() {
        return taskClassify;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.task_classify
     *
     * @param taskClassify the value for task_info.task_classify
     *
     * @mbg.generated
     */
    public void setTaskClassify(String taskClassify) {
        this.taskClassify = taskClassify == null ? null : taskClassify.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.task_accepter
     *
     * @return the value of task_info.task_accepter
     *
     * @mbg.generated
     */
    public String getTaskAccepter() {
        return taskAccepter;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.task_accepter
     *
     * @param taskAccepter the value for task_info.task_accepter
     *
     * @mbg.generated
     */
    public void setTaskAccepter(String taskAccepter) {
        this.taskAccepter = taskAccepter == null ? null : taskAccepter.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.task_des
     *
     * @return the value of task_info.task_des
     *
     * @mbg.generated
     */
    public String getTaskDes() {
        return taskDes;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.task_des
     *
     * @param taskDes the value for task_info.task_des
     *
     * @mbg.generated
     */
    public void setTaskDes(String taskDes) {
        this.taskDes = taskDes == null ? null : taskDes.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.task_file
     *
     * @return the value of task_info.task_file
     *
     * @mbg.generated
     */
    public String getTaskFile() {
        return taskFile;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.task_file
     *
     * @param taskFile the value for task_info.task_file
     *
     * @mbg.generated
     */
    public void setTaskFile(String taskFile) {
        this.taskFile = taskFile == null ? null : taskFile.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.task_start
     *
     * @return the value of task_info.task_start
     *
     * @mbg.generated
     */
    public String getTaskStart() {
        return taskStart;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.task_start
     *
     * @param taskStart the value for task_info.task_start
     *
     * @mbg.generated
     */
    public void setTaskStart(String taskStart) {
        this.taskStart = taskStart == null ? null : taskStart.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.task_end
     *
     * @return the value of task_info.task_end
     *
     * @mbg.generated
     */
    public String getTaskEnd() {
        return taskEnd;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.task_end
     *
     * @param taskEnd the value for task_info.task_end
     *
     * @mbg.generated
     */
    public void setTaskEnd(String taskEnd) {
        this.taskEnd = taskEnd == null ? null : taskEnd.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.task_money
     *
     * @return the value of task_info.task_money
     *
     * @mbg.generated
     */
    public String getTaskMoney() {
        return taskMoney;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.task_money
     *
     * @param taskMoney the value for task_info.task_money
     *
     * @mbg.generated
     */
    public void setTaskMoney(String taskMoney) {
        this.taskMoney = taskMoney == null ? null : taskMoney.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.opr
     *
     * @return the value of task_info.opr
     *
     * @mbg.generated
     */
    public String getOpr() {
        return opr;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.opr
     *
     * @param opr the value for task_info.opr
     *
     * @mbg.generated
     */
    public void setOpr(String opr) {
        this.opr = opr == null ? null : opr.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.opr_time
     *
     * @return the value of task_info.opr_time
     *
     * @mbg.generated
     */
    public Date getOprTime() {
        return oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.opr_time
     *
     * @param oprTime the value for task_info.opr_time
     *
     * @mbg.generated
     */
    public void setOprTime(Date oprTime) {
        this.oprTime = oprTime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.other
     *
     * @return the value of task_info.other
     *
     * @mbg.generated
     */
    public String getOther() {
        return other;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.other
     *
     * @param other the value for task_info.other
     *
     * @mbg.generated
     */
    public void setOther(String other) {
        this.other = other == null ? null : other.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column task_info.others
     *
     * @return the value of task_info.others
     *
     * @mbg.generated
     */
    public String getOthers() {
        return others;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column task_info.others
     *
     * @param others the value for task_info.others
     *
     * @mbg.generated
     */
    public void setOthers(String others) {
        this.others = others == null ? null : others.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table task_info
     *
     * @mbg.generated
     */
    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", taskId=").append(taskId);
        sb.append(", taskName=").append(taskName);
        sb.append(", taskType=").append(taskType);
        sb.append(", taskStatus=").append(taskStatus);
        sb.append(", taskPublisher=").append(taskPublisher);
        sb.append(", taskClassify=").append(taskClassify);
        sb.append(", taskAccepter=").append(taskAccepter);
        sb.append(", taskDes=").append(taskDes);
        sb.append(", taskFile=").append(taskFile);
        sb.append(", taskStart=").append(taskStart);
        sb.append(", taskEnd=").append(taskEnd);
        sb.append(", taskMoney=").append(taskMoney);
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