package com.example.torder.vo;

import com.cetccity.common.base.vo.BaseVo;

/**
 * @program: testActiviti2SpringBoot
 * @description: 返回给前端的信息（操作结果）
 * @author: THE KING
 **/
public class CompleteTaskVo extends BaseVo {

    private static final long serialVersionUID = 4564566545122312L;

    private boolean status = false;

    private String curTaskName;

    public CompleteTaskVo() {
    }

    public CompleteTaskVo(boolean status, String curTaskName) {
        this.status = status;
        this.curTaskName = curTaskName;
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
}