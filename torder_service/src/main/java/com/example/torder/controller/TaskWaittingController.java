package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.TaskWaittingApi;
import com.example.torder.service.TaskWaittingService;
import com.example.torder.vo.TaskWaittingVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 候选
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 22:32
 **/
@RestController
public class TaskWaittingController extends BaseController implements TaskWaittingApi {
    @Autowired
    TaskWaittingService taskWaittingService;
    @Override
    public int add(TaskWaittingVo obj) {
        return taskWaittingService.add(obj);
    }

    @Override
    public PageVo findList(TaskWaittingVo obj) {
        return BeanUtil.page(taskWaittingService.findList(obj));
    }

    @Override
    public int delete(String id) {
        return taskWaittingService.delete(id);
    }

    @Override
    public int update(TaskWaittingVo obj) {
        return taskWaittingService.update(obj);
    }

    @Override
    public TaskWaittingVo getById(Integer id) {
        return taskWaittingService.getById(id);
    }
}
