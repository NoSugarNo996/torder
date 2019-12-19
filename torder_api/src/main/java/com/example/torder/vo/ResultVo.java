package com.example.torder.vo;

import com.cetccity.common.base.vo.BaseVo;

/**
 * @program: testActiviti2SpringBoot
 * @description: 返回给前端的信息（操作结果）
 * @author: THE KING
 **/
public class ResultVo extends BaseVo {

    private static final long serialVersionUID = 4564566545122312L;

    private boolean success = false;

    private String msg = "";

    private Object obj = null;

    public ResultVo() {
    }

    public ResultVo(boolean success, String msg, Object obj) {
        this.success = success;
        this.msg = msg;
        this.obj = obj;
    }

    public boolean getStatus() {
        return this.success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Object getObj() {
        return obj;
    }

    public void setObj(Object obj) {
        this.obj = obj;
    }

}