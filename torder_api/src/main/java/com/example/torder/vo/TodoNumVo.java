package com.example.torder.vo;

/**
 * @program: testActiviti2SpringBoot
 * @description:
 * @author: THE KING
 **/
public class TodoNumVo {
    private static final long serialVersionUID = 456454546465121564L;

    private boolean status;

    private Integer todoNum;

    public TodoNumVo() {
    }

    public TodoNumVo(boolean status, Integer todoNum) {
        this.status = status;
        this.todoNum = todoNum;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Integer getTodoNum() {
        return todoNum;
    }

    public void setTodoNum(Integer todoNum) {
        this.todoNum = todoNum;
    }
}
