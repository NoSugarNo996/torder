package com.example.torder.vo;

import com.cetccity.common.base.vo.BaseVo;

import java.io.Serializable;

/**
 * @program: testActiviti2SpringBoot
 * @description: 启动流程后返回给前端的信息
 * @author: THE KING
 **/
public class StartProcessVo extends BaseVo implements Serializable {
    private static final long serialVersionUID = 4564545464654287L;

    private boolean status;

    private String instanceId;

    private String curTaskName;

    public StartProcessVo() {
    }

    public StartProcessVo(boolean status, String instanceId, String curTaskName) {
        this.status = status;
        this.instanceId = instanceId;
        this.curTaskName = curTaskName;
    }

    public String getCurTaskName() {
        return curTaskName;
    }

    public void setCurTaskName(String curTaskName) {
        this.curTaskName = curTaskName;
    }


    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public String getInstanceId() {
        return instanceId;
    }

    public void setInstanceId(String instanceId) {
        this.instanceId = instanceId;
    }
}
