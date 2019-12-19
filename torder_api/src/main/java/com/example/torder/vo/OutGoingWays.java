package com.example.torder.vo;

import java.io.Serializable;

/**
 * @program: testActiviti2SpringBoot
 * @description:
 * @author: THE KING
 **/
public class OutGoingWays implements Serializable {
    private static final long serialVersionUID = 45645665L;


    private String name;


    public OutGoingWays() {
    }

    public OutGoingWays(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
