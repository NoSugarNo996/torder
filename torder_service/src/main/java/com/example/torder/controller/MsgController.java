package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.MsgApi;
import com.example.torder.service.MsgService;
import com.example.torder.vo.MsgVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

/**
 * @program: torder
 * @description: 任务
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 22:31
 **/
@RestController
public class MsgController extends BaseController implements MsgApi {
    @Autowired
    MsgService taskService;
    @Override
    public int add(MsgVo obj) throws IOException {
        return taskService.add(obj);
    }

    @Override
    public PageVo findList(MsgVo obj) {
        return BeanUtil.page(taskService.findList(obj));
    }

    @Override
    public int delete(Integer id) {
        return taskService.delete(id);
    }

    @Override
    public int update(MsgVo obj) {
        return taskService.update(obj);
    }

    @Override
    public MsgVo getById(String code) {
        return taskService.getById(code);
    }
}
