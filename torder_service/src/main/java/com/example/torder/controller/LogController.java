package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.LogApi;
import com.example.torder.service.LogService;
import com.example.torder.vo.LogVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 日志
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 22:07
 **/
@RestController
public class LogController extends BaseController implements LogApi {
    @Autowired
    LogService logService;
    @Override
    public int add(LogVo obj) {
        return logService.add(obj);
    }

    @Override
    public PageVo findList(LogVo obj) {
        return BeanUtil.page(logService.findList(obj));
    }

    @Override
    public int delete(Integer id) {
        return logService.delete(id);
    }

    @Override
    public int update(LogVo obj) {
        return logService.update(obj);
    }

    @Override
    public LogVo getById(Integer id) {
        return logService.getById(id);
    }
}
