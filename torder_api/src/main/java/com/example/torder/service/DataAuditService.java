package com.example.torder.service;

import com.cetccity.common.base.vo.BaseVo;
import com.example.torder.vo.*;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
 * @program: common-workflow
 * @description:
 * @author: THE KING
 **/
public interface DataAuditService {
    /**
     * @description 部署数据审核流程
     * @return ResultVo
     * @time 2019/5/10 16:09
     * @version 1.0
     */
    public ResultVo deployResource();

    /**
     * @description 接收用户名称、流程编码和流程参数，启动流程实例
     * @return StartProcessVo
     * @time 2019/5/10 16:09
     * @version 1.0
     */
//    public StartProcessVo start(@RequestParam("processKey") String processKey,
//                                @RequestBody Map<String, Object> map);
    public StartProcessVo start();

    /**
     * @description 接收用户名称、流程实例ID和流程参数，执行流程实例
     * @return CompleteTaskVo
     * @time 2019/5/10 16:09
     * @version 1.0
     */
//    public CompleteTaskVo completeTask(@RequestParam("instanceId") String instanceId,
//                                       @RequestBody Map<String, Object> map);
    public CompleteTaskVo completeTask(@RequestBody Map<String, Object> map) throws IOException;



    /**
     * @return String TaskAndUserNameVo
     * @description 接收流程实例ID，用户id，为用户添加comment
     * @author THE KING
     * @time 2019/5/5 16:11
     * @version 1.0
     */
//    public ResultVo addComment(@RequestParam("instanceId") String instanceId,
//                               @RequestBody Map<String, String> map);
    public ResultVo addComment(@RequestBody Map<String, String> map);


    /**
     * @return String TaskAndUserNameVo
     * @description 接收流程实例ID，查询代办数目
     * @author THE KING
     * @time 2019/5/5 16:11
     * @version 1.0
     */
    public TodoNumVo queryTodoNumByInstanceId(@RequestParam("instanceId") String instanceId);



    /**
     * @description 接收流程实例ID，获取流程实例的当前处理环节和当前办理人员
     * @return TaskAndUserNameVo
     * @time 2019/5/10 16:10
     * @version 1.0
     */
    public TaskAndUserNameVo getTaskAndUserName(@RequestParam("instanceId") String instanceId);

    /**
     * @description 接收用户id，显示用户的待办列表
     * @return
     * @time 2019/5/10 16:10
     * @version 1.0
     */

    public Object getUesrTodoList(String userId);

    /**
     * @description 接收instanceId,获取流程的履历
     * @return
     * @time 2019/5/10 16:10
     * @version 1.0
     */
    public List<InstanceHistoryVo> getInstanceHistory(StartProcessVo startProcessVo);

    public List<InstanceVo> getAllHistory(BaseVo baseVo);

    public List<InstanceVo> getUserHistory(String userId);

}
