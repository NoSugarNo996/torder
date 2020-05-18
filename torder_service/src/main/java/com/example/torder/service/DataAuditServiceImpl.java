package com.example.torder.service;
import com.cetccity.common.base.vo.BaseVo;
import com.example.torder.vo.*;
import com.example.torder.websocket.MyWebSocket;
import org.activiti.engine.ProcessEngine;
import org.activiti.engine.ProcessEngines;
import org.activiti.engine.history.HistoricProcessInstance;
import org.activiti.engine.history.HistoricTaskInstance;
import org.activiti.engine.history.HistoricVariableInstance;
import org.activiti.engine.repository.Deployment;
import org.activiti.engine.runtime.ProcessInstance;
import org.activiti.engine.task.Task;
import org.activiti.spring.SpringProcessEngineConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.*;

@Service
public class DataAuditServiceImpl implements DataAuditService {


    // 引擎配置
    @Autowired
    SpringProcessEngineConfiguration springProcessEngineConfiguration;
    // 获取流程引擎对象
    @Autowired
    ProcessEngine processEngine;
    @Autowired(required = false)
   // FlowMapper flowMapper;
   // Flow flow = new Flow();
String userCode="1";
    @Override
    public ResultVo deployResource() {
        Deployment deployment = (Deployment) processEngine.getRepositoryService() //与流程定义相关的service
                .createDeployment() //创建一个部署对象
                .name("审批")
                .addClasspathResource("processes/dataAudit.bpmn")//从chasspath的资源中加载，一次只加载一个文件
                .addClasspathResource("processes/dataAudit.png")
                .deploy();//完成部署
        ResultVo resultVo = new ResultVo();
        resultVo.setSuccess(true);
        resultVo.setMsg("完成部署");
        resultVo.setObj(deployment);
        System.out.println(deployment.getId());
        System.out.println(deployment.getName());
        return resultVo;
    }

    /**
     * 启动
     *
     * @param
     * @return
     */
    @Override
    //需要参数：当日值班人员编号userId  eventId eventTitle eventRemark eventTime
    public StartProcessVo start() {
        String processDefintionKey = "dataAudit";
//        41e7abb7-891d-11ea-acce-acde48001122
//        String processDefintionKey = "fd8c5ea8-251f-11ea-a090-962d54f4cc3d";
        Map<String, Object> variables = new HashMap<String, Object>();
        variables.put("nextOpr",userCode);
        ProcessInstance processInstance = processEngine.getRuntimeService()
                .startProcessInstanceByKey(processDefintionKey, variables);
        System.out.println("流程实例ID：" + processInstance.getId());
        System.out.println("流程定义ID：" + processInstance.getProcessDefinitionId());
        StartProcessVo startProcessVo = new StartProcessVo();
        startProcessVo.setInstanceId(processInstance.getId());
        startProcessVo.setStatus(true);
        Task task = processEngine.getTaskService()
                .createTaskQuery()
                .processInstanceId(processInstance.getId())
                .orderByTaskCreateTime()
                .asc()
                .singleResult();
        startProcessVo.setCurTaskName(task.getName());

        return startProcessVo;
    }

    /**
     * 完成
     *
     * @param map
     * @return
     */
    @Override
    //需要参数：instanceId   btn nextOpr talentsCode alltalents
    public CompleteTaskVo completeTask(Map<String, Object> map) throws IOException {
        MsgVo msgVo = new MsgVo();
        msgVo.setMsgPublisher("1");
        String btn = map.get("btn").toString();//获取界面操作
        String nextOpr = map.get("nextOpr").toString();//获取指定操作人
        // int flowId = Integer.parseInt(map.get("flowId").toString());
        CompleteTaskVo completeTaskVo = new CompleteTaskVo();
        msgVo.setMsgAccepter(nextOpr);
        //获取当前任务
        Task task = processEngine.getTaskService()
                .createTaskQuery()
                .processInstanceId(map.get("instanceId").toString())
                .singleResult();

//        claim(task.getId(), map.get("talentsCode").toString());

        //设置流程变量，使用流程变量用来指定完成后走哪个连线
        Map<String, Object> variables = new HashMap<String, Object>();
        switch (task.getName()) {
            case "管理员审核发布":
                if (btn.equals("通过")) {
                    // flow.setFlowId(flowId);
                    //  flow.setFlowState(1);//状态设为"已上报"
                    //  flowMapper.updateByPrimaryKeySelective(flow);
                    variables.put("toWhere", "通过");
                    variables.put("eventState", 1);
                } else if (btn.equals("批转")) {
                    //   flow.setFlowId(Integer.parseInt(map.get("flowId").toString()));
                    //   flow.setFlowState(2);//状态设为"已批转"
                    //   flowMapper.updateByPrimaryKeySelective(flow);
                    variables.put("toWhere", "未通过");
                    variables.put("eventState", 2);
                }
                variables.put("nextOpr", nextOpr);
                // processEngine.getTaskService().setVariables(task.getId(),variables);
                processEngine.getTaskService().complete(task.getId(), variables, true);
                completeTaskVo.setStatus(true);
                msgVo.setMsgTitle("您发布的任务管理员已审核,请前往查看");
                break;
            case "招标完成":

                variables.put("nextOpr", nextOpr);
                // processEngine.getTaskService().setVariables(task.getId(),variables);
                processEngine.getTaskService().complete(task.getId(), variables, true);
                completeTaskVo.setStatus(true);
                msgVo.setMsgTitle("您发布的任务招标已结束,请前往选取人才");
                break;
            case "选标完成":
                if (btn.equals("选标成功")) {
                    // flow.setFlowId(Integer.parseInt(map.get("flowId").toString()));
                    // flow.setFlowState(3);//状态设为"已批示"
                    // flowMapper.updateByPrimaryKeySelective(flow);
                    //设置批示
                    variables.put("toWhere", "选标成功");
                    variables.put("eventState", 3);
                } else if (btn.equals("流标")) {
                    //flow.setFlowId(Integer.parseInt(map.get("flowId").toString()));
                    // flow.setFlowState(2);//状态设为"已批转"
                    //flowMapper.updateByPrimaryKeySelective(flow);
                    variables.put("toWhere", "流标");
                    variables.put("eventState", 6);
                }
                msgVo.setMsgTitle("恭喜您中标成功,快与雇主联系吧");
                variables.put("nextOpr", nextOpr);
//               processEngine.getRuntimeService().removeVariable(task.getProcessInstanceId(), "to");
//               processEngine.getRuntimeService().setVariables(task.getProcessInstanceId(),variables);
                //  processEngine.getTaskService().setVariables(task.getId(),variables);
                processEngine.getTaskService().complete(task.getId(), variables, true);
                completeTaskVo.setStatus(true);
                break;
            case "任务完成":
//                flow.setFlowId(Integer.parseInt(map.get("flowId").toString()));
//                flow.setFlowState(3);//状态设为"已批示"
//                flowMapper.updateByPrimaryKeySelective(flow);
                if (btn.equals("任务完成")) {
                    // flow.setFlowId(Integer.parseInt(map.get("flowId").toString()));
                    // flow.setFlowState(3);//状态设为"已批示"
                    // flowMapper.updateByPrimaryKeySelective(flow);
                    //设置批示
                    variables.put("toWhere", "任务完成");
                    variables.put("eventState", 3);
                } else if (btn.equals("未完成")) {
                    //flow.setFlowId(Integer.parseInt(map.get("flowId").toString()));
                    // flow.setFlowState(2);//状态设为"已批转"
                    //flowMapper.updateByPrimaryKeySelective(flow);
                    variables.put("toWhere", "未完成");
                    variables.put("eventState", 6);
                }
                variables.put("nextOpr", nextOpr);
                variables.put("eventState", 3);
                //processEngine.getTaskService().setVariables(task.getId(),variables);
                msgVo.setMsgTitle("有新任务完成,请审核");
                processEngine.getTaskService().complete(task.getId(), variables, true);
                completeTaskVo.setStatus(true);
                break;
            case "管理员审核交易":
//                flow.setFlowId(Integer.parseInt(map.get("flowId").toString()));
//                flow.setFlowState(3);//状态设为"已批示"
//                flowMapper.updateByPrimaryKeySelective(flow);
                variables.put("nextOpr", nextOpr);
                variables.put("eventState", 6);
                //processEngine.getTaskService().setVariables(task.getId(),variables);
                processEngine.getTaskService().complete(task.getId(), variables, true);
                completeTaskVo.setStatus(true);
                msgVo.setMsgTitle("交易成功啦！快看看收益！");
                break;
            default:
                completeTaskVo.setStatus(false);
        }
        sendAndSaveText(msgVo);
        return completeTaskVo;
    }

    @Override
    public ResultVo addComment(Map<String, String> map) {
        return null;
    }

    /**
     * 查询数量
     *
     * @param instanceId
     * @return
     */
    @Override
    public TodoNumVo queryTodoNumByInstanceId(String instanceId) {
        long count = processEngine.getTaskService()
                .createTaskQuery()
                .processInstanceId(instanceId)
                .orderByTaskCreateTime()
                .count();
        TodoNumVo todoNumVo = new TodoNumVo();
        todoNumVo.setTodoNum((int) count);
        todoNumVo.setStatus(true);
        return todoNumVo;
    }

    /**
     * 当前任务与执行人
     *
     * @param instanceId
     * @return
     */
    @Override
    public TaskAndUserNameVo getTaskAndUserName(String instanceId) {
        Task task = processEngine.getTaskService()
                .createTaskQuery()
                .processInstanceId(instanceId)
                .orderByTaskCreateTime()
                .asc()
                .singleResult();

        TaskAndUserNameVo taskAndUserNameVo = new TaskAndUserNameVo();
        taskAndUserNameVo.setCurTaskName(task.getName());
        taskAndUserNameVo.setCandidates(task.getCategory());
        taskAndUserNameVo.setStatus(true);
        return taskAndUserNameVo;
    }

    /**
     * 查询个人当前待办任务
     *
     * @param userId
     * @return
     */
    @Override
    public Object getUesrTodoList(String userId) {
        List<Task> list = processEngine.getTaskService()//
                .createTaskQuery()
                .taskAssignee(userId)//个人任务的查询
                .list();

        return list;
    }


    /**
     * 查询组任务
     */
    public List<Task> findGroupTaskList(String userId) {
        List<Task> list = processEngine.getTaskService()
                .createTaskQuery()
                .taskCandidateUser(userId)//参与者，组任务查询
                .list();
        return list;
    }


    /**
     * 历史任务列表
     *
     * @param
     * @return
     */
    @Override
    public List<InstanceHistoryVo> getInstanceHistory(StartProcessVo startProcessVo) {

        List<HistoricTaskInstance> historicTaskInstanceList = ProcessEngines.getDefaultProcessEngine()
                .getHistoryService()
                .createHistoricTaskInstanceQuery()
                .processInstanceId(startProcessVo.getInstanceId())
                .orderByTaskCreateTime().asc().list();
        List<InstanceHistoryVo> instanceHistoryVoList = new ArrayList<InstanceHistoryVo>();
        for (HistoricTaskInstance historicTaskInstance : historicTaskInstanceList) {
            InstanceHistoryVo instanceHistoryVo = new InstanceHistoryVo();
            instanceHistoryVo.setAssignee(historicTaskInstance.getAssignee());
            // instanceHistoryVo.setComment(historicTaskInstance.get);
            instanceHistoryVo.setStartTime(historicTaskInstance.getStartTime());
            instanceHistoryVo.setEndTime(historicTaskInstance.getEndTime());
            instanceHistoryVo.setTaskName(historicTaskInstance.getName());
            instanceHistoryVoList.add(instanceHistoryVo);
        }
        return instanceHistoryVoList;
    }


    //所有历史流程列表
    @Override
    public List<InstanceVo> getAllHistory(BaseVo baseVo) {

        List<HistoricProcessInstance> historicProcessInstanceList = ProcessEngines.getDefaultProcessEngine()
                .getHistoryService()
                .createHistoricProcessInstanceQuery()
                .processDefinitionKey("dataAudit")
                .orderByProcessInstanceEndTime().asc()
                .listPage((baseVo.getPageNum()-1)*baseVo.getPageSize(),baseVo.getPageSize());



        List<InstanceVo> instanceList = new ArrayList<InstanceVo>();
        // 遍历查看结果
        for (HistoricProcessInstance historicProcessInstance : historicProcessInstanceList) {
            InstanceVo instanceVo = new InstanceVo();
            List<HistoricVariableInstance> list = processEngine.getHistoryService()
                    .createHistoricVariableInstanceQuery()
                    .processInstanceId(historicProcessInstance.getId())
                    .list();
            for (HistoricVariableInstance hti : list) {
                switch (hti.getVariableName()) {
                    case "eventId":
                        instanceVo.setEventId(Integer.parseInt(hti.getValue().toString()));
                        break;
                    case "eventTitle":
                        instanceVo.setEventTitle(hti.getValue().toString());
                        break;
                    case "eventRemark":
                        instanceVo.setEventRemark(hti.getValue().toString());
                        break;
                    case "eventState":
                        instanceVo.setEventState(Integer.parseInt(hti.getValue().toString()));
                        break;
                    case "eventTime":
                        instanceVo.setEventTime(hti.getValue().toString());
                        break;
                    case "eventComment":
                        instanceVo.setComment(hti.getValue().toString());
                        break;
                    default:
                        break;
                }
            }
            instanceVo.setEndTime(historicProcessInstance.getEndTime());
            instanceVo.setStartTime(historicProcessInstance.getStartTime());

//           Map<String,Object> variables=historicProcessInstance.getProcessVariables();
//           if (variables.size()!=0){
//               instanceVo.setComment(variables.get("comment").toString());
//               instanceVo.setEndTime(historicProcessInstance.getEndTime());
//               instanceVo.setEventId(Integer.parseInt(variables.get("eventId").toString()));
//               instanceVo.setEventRemark(variables.get("eventRemark").toString());
//               instanceVo.setEventTime(variables.get("eventTime").toString());
//               instanceVo.setEventTitle(variables.get("eventTitle").toString());
//               instanceVo.setStartTime(historicProcessInstance.getStartTime());
//               instanceVo.setEventState(Integer.parseInt(variables.get("eventState").toString()));
//           }
            instanceList.add(instanceVo);
        }
        return instanceList;
    }

    @Override
    public List<InstanceVo> getUserHistory(String userId) {
        List<HistoricProcessInstance> historicProcessInstanceList = ProcessEngines.getDefaultProcessEngine()
                .getHistoryService()
                .createHistoricProcessInstanceQuery()
                .processDefinitionKey("dataAudit")
                .orderByProcessInstanceEndTime()
                .finished()
                .asc().list();


        List<Task> taskList = findGroupTaskList(userId);

        List<InstanceVo> instanceList = new ArrayList<InstanceVo>();
        for (Task task : taskList) {
            InstanceVo instanceVo = new InstanceVo();
            List<HistoricVariableInstance> list = processEngine.getHistoryService()
                    .createHistoricVariableInstanceQuery()
                    .processInstanceId(task.getProcessInstanceId())
                    .list();
            for (HistoricVariableInstance hti : list) {
                switch (hti.getVariableName()) {
                    case "eventId":
                        instanceVo.setEventId(Integer.parseInt(hti.getValue().toString()));
                        break;
                    case "eventTitle":
                        instanceVo.setEventTitle(hti.getValue().toString());
                        break;
                    case "eventRemark":
                        instanceVo.setEventRemark(hti.getValue().toString());
                        break;
                    case "eventState":
                        instanceVo.setEventState(Integer.parseInt(hti.getValue().toString()));
                        break;
                    case "eventTime":
                        instanceVo.setEventTime(hti.getValue().toString());
                        break;
                    case "eventComment":
                        instanceVo.setComment(hti.getValue().toString());
                        break;
                    default:
                        break;
                }
            }
            instanceList.add(instanceVo);
        }
        // 遍历查看结果
        for (HistoricProcessInstance historicProcessInstance : historicProcessInstanceList) {
            InstanceVo instanceVo = new InstanceVo();
            List<HistoricVariableInstance> list = processEngine.getHistoryService()
                    .createHistoricVariableInstanceQuery()
                    .processInstanceId(historicProcessInstance.getId())
                    .list();
            for (HistoricVariableInstance hti : list) {
                switch (hti.getVariableName()) {
                    case "eventId":
                        instanceVo.setEventId(Integer.parseInt(hti.getValue().toString()));
                        break;
                    case "eventTitle":
                        instanceVo.setEventTitle(hti.getValue().toString());
                        break;
                    case "eventRemark":
                        instanceVo.setEventRemark(hti.getValue().toString());
                        break;
                    case "eventState":
                        instanceVo.setEventState(Integer.parseInt(hti.getValue().toString()));
                        break;
                    case "eventTime":
                        instanceVo.setEventTime(hti.getValue().toString());
                        break;
                    case "eventComment":
                        instanceVo.setComment(hti.getValue().toString());
                        break;
                    default:
                        break;
                }
            }
            instanceVo.setEndTime(historicProcessInstance.getEndTime());
            instanceVo.setStartTime(historicProcessInstance.getStartTime());

//           Map<String,Object> variables=historicProcessInstance.getProcessVariables();
//           if (variables.size()!=0){
//               instanceVo.setComment(variables.get("comment").toString());
//               instanceVo.setEndTime(historicProcessInstance.getEndTime());
//               instanceVo.setEventId(Integer.parseInt(variables.get("eventId").toString()));
//               instanceVo.setEventRemark(variables.get("eventRemark").toString());
//               instanceVo.setEventTime(variables.get("eventTime").toString());
//               instanceVo.setEventTitle(variables.get("eventTitle").toString());
//               instanceVo.setStartTime(historicProcessInstance.getStartTime());
//               instanceVo.setEventState(Integer.parseInt(variables.get("eventState").toString()));
//           }
            instanceList.add(instanceVo);
        }
        return instanceList;
    }

    /**
     * 将组任务指定个人任务(拾取任务)
     */
    public void claim(String taskId, String userId) {
        processEngine.getTaskService()//
                .claim(taskId, userId);
    }

    /**
     * 将个人任务再回退到组任务（前提：之前这个任务是组任务）
     */
    public void setAssignee(String taskId) {
        processEngine.getTaskService()//
                .setAssignee(taskId, null);
    }

    /**
     * 向组任务中添加成员
     */
    public void addGroupUser(String taskId, String userId) {
        //新增组任务的成员
        processEngine.getTaskService()//
                .addCandidateUser(taskId, userId);
    }

    /**
     * 向组任务中删除成员
     */
    public void deleteGroupUser(String taskId, String userId) {
        //新增组任务的成员
        processEngine.getTaskService()//
                .deleteCandidateUser(taskId, userId);
    }


    //发送实时消息
    public void sendAndSaveText(MsgVo msgVo) throws IOException {
        MyWebSocket webSocket = new MyWebSocket();
        webSocket.onMessage(msgVo);
    }
}
