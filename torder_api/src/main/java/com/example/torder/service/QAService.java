package com.example.torder.service;

import com.cetccity.common.base.vo.PageVo;
import com.example.torder.vo.OrderVo;
import com.example.torder.vo.QAVo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/**
 * @program: torder
 * @description: hjl
 * @author: huangjiali 黄嘉丽
 * @create: 2020-05-18 23:20
 **/
public interface QAService {
    List findList(@RequestBody QAVo obj);

    QAVo getById(@RequestParam("id") Integer id);
}
