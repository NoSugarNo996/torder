package com.example.torder.vo;

import com.cetccity.common.base.vo.BaseVo;

import java.util.Date;

/**
 * @program: testActiviti2SpringBoot
 * @description:
 * @author: THE KING
 **/
public class InstanceHistoryVo extends BaseVo {

    private static final long serialVersionUID = 4564545464488421314L;

    private String taskName;
    private String assignee;
    private Date startTime;
    private Date endTime;
    private String comment;

    public InstanceHistoryVo() {
    }

    public InstanceHistoryVo(String taskName, String assignee, Date startTime, Date endTime, String comment) {
        this.taskName = taskName;
        this.assignee = assignee;
        this.startTime = startTime;
        this.endTime = endTime;
        this.comment = comment;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getAssignee() {
        return assignee;
    }

    public void setAssignee(String assignee) {
        this.assignee = assignee;
    }

    public Date getStartTime() {
        return this.startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}