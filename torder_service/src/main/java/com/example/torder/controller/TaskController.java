package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.TaskApi;
import com.example.torder.service.TaskService;
import com.example.torder.vo.TaskVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 任务
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 22:31
 **/
@RestController
public class TaskController extends BaseController implements TaskApi {
    @Autowired
    TaskService taskService;
    @Override
    public int add(TaskVo obj) {
        return taskService.add(obj);
    }

    @Override
    public PageVo findList(TaskVo obj) {
        return BeanUtil.page(taskService.findList(obj));
    }

    @Override
    public int delete(Integer id) {
        return taskService.delete(id);
    }

    @Override
    public int update(TaskVo obj) {
        return taskService.update(obj);
    }

    @Override
    public TaskVo getById(Integer id) {
        return taskService.getById(id);
    }
}
