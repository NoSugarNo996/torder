package com.example.torder.controller;
import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.BaseVo;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.DataAuditApi;
import com.example.torder.service.DataAuditService;
import com.example.torder.vo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * @program: common-workflow
 * @description:
 * @author: THE KING
 **/
@RestController
public class DataAuditController implements DataAuditApi {
    @Autowired(required = false)
    DataAuditService dataAuditService;

    @Override
    public ResultVo deployResource()
    {
        ResultVo resultVo = dataAuditService.deployResource();
        return resultVo;
    }


    @Override
    public StartProcessVo start() {
        StartProcessVo startProcessVo = dataAuditService.start();
        return startProcessVo;
    }

    @Override
    public CompleteTaskVo completeTask(@RequestBody Map<String, Object> map) throws IOException {
        CompleteTaskVo completeTaskVo = dataAuditService.completeTask(map);
        return completeTaskVo;
    }

    @Override
    public ResultVo addComment(@RequestBody Map<String, String> map) {
        ResultVo resultVo = dataAuditService.addComment(map);
        return resultVo;
    }

    @Override
    public TodoNumVo queryTodoNumByInstanceId(String instanceId) {
        TodoNumVo todoNumVo = dataAuditService.queryTodoNumByInstanceId(instanceId);
        return todoNumVo;
    }

    @Override
    public TaskAndUserNameVo getTaskAndUserName(String instanceId) {
        TaskAndUserNameVo taskAndUserNameVo = dataAuditService.getTaskAndUserName(instanceId);
        return taskAndUserNameVo;
    }

    @Override
    public PageVo getInstanceHistory(StartProcessVo startProcessVo) {
        List<InstanceHistoryVo> historyVoList = dataAuditService.getInstanceHistory(startProcessVo);
        return BeanUtil.page(historyVoList);
    }

    @Override
    public PageVo getAllHistory(BaseVo baseVo) {
        return BeanUtil.page(dataAuditService.getAllHistory(baseVo));
    }

    @Override
    public PageVo getUserHistory(String userId) {
        return BeanUtil.page(dataAuditService.getUserHistory(userId));
    }
}
