package com.example.torder.api;

import com.cetccity.common.base.vo.BaseVo;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.vo.*;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;

/**
* @description 数据审批流程服务实现类
* @time 2019/5/10 16:07
* @version 1.0
*/

@RequestMapping("/DataAudit")
public interface DataAuditApi {

    /**
    * @description 部署数据审核流程
    * @return ResultVo
    * @time 2019/5/10 16:09
    * @version 1.0
    */
    @PostMapping("/deploy")
    public ResultVo deployResource();

    /**
    * @description 接收用户名称、流程编码和流程参数，启动流程实例
    * @return StartProcessVo
    * @time 2019/5/10 16:09
    * @version 1.0
    */
    @RequestMapping(value="/start")
//    public StartProcessVo start(@RequestParam("processKey") String processKey,
//                                @RequestBody Map<String, Object> map);
    public StartProcessVo start();

    /**
    * @description 接收用户名称、流程实例ID和流程参数，执行流程实例
    * @return CompleteTaskVo
    * @time 2019/5/10 16:09
    * @version 1.0
    */
    @RequestMapping("/completeTask")
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
    @PostMapping(value = "/addComment")
    @ResponseBody
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
    @PostMapping(value = "/queryTodoNumByInstanceId")
    @ResponseBody
    public TodoNumVo queryTodoNumByInstanceId(@RequestParam("instanceId") String instanceId);

    /**
    * @description 接收流程实例ID，获取流程实例的当前处理环节和当前办理人员
    * @return TaskAndUserNameVo
    * @time 2019/5/10 16:10
    * @version 1.0
    */
    @GetMapping(value = "/getTaskAndUserName")
    public TaskAndUserNameVo getTaskAndUserName(@RequestParam("instanceId") String instanceId);
    
    /**
    * @description 接收用户id，显示用户的待办列表
    * @return 
    * @time 2019/5/10 16:10
    * @version 1.0
    */
//    @GetMapping("/getUesrTodoList")
//    public Object getUesrTodoList(@RequestParam("userId") String userId);

    /**
    * @description 接收instanceId,获取流程的履历
    * @return 
    * @time 2019/5/10 16:10
    * @version 1.0
    */
    @RequestMapping("/getInstanceHistory")
    public PageVo getInstanceHistory(@RequestBody StartProcessVo startProcessVo);

    /**
     * @description 获取所有历史流程
     * @return
     * @time 2019/5/10 16:10
     * @version 1.0
     */
    @RequestMapping("/getAllHistory")
    @ResponseBody
    public PageVo getAllHistory(@RequestBody BaseVo baseVo);

    //个人待办列表和完成的历史流程列表
    @RequestMapping("/getUserHistory")
    public PageVo getUserHistory(@RequestParam("useriiiid") String userId);


}
