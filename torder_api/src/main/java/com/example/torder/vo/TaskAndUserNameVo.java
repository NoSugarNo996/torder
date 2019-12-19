package com.example.torder.vo;

import com.cetccity.common.base.vo.BaseVo;

/**
 * @program: testActiviti2SpringBoot
 * @description: 返回前端流程实例的当前处理环节和当前办理人员
 * @author: THE KING
 **/
public class TaskAndUserNameVo extends BaseVo {
    private static final long serialVersionUID = 456454546465121314L;

    private boolean status;

    private String curTaskName;

    private String candidates;

    public TaskAndUserNameVo() {
    }

    public TaskAndUserNameVo(boolean status, String curTaskName, String candidates) {
        this.status = status;
        this.curTaskName = curTaskName;
        this.candidates = candidates;
    }


    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getCurTaskName() {
        return curTaskName;
    }

    public void setCurTaskName(String curTaskName) {
        this.curTaskName = curTaskName;
    }

    public String getCandidates() {
        return candidates;
    }

    public void setCandidates(String candidates) {
        this.candidates = candidates;
    }
}
