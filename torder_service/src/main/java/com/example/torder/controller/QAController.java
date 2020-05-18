package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.QAApi;
import com.example.torder.service.QAService;
import com.example.torder.vo.QAVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: hjl
 * @author: huangjiali 黄嘉丽
 * @create: 2020-05-18 23:21
 **/
@RestController
public class QAController extends BaseController implements QAApi {
    @Autowired
    QAService qaService;
    @Override
    public PageVo findList(QAVo obj) {
        return BeanUtil.page(qaService.findList(obj));
    }

    @Override
    public QAVo getById(Integer id) {
        return qaService.getById(id);
    }
}
