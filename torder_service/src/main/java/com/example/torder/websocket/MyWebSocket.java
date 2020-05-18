package com.example.torder.websocket;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.example.torder.util.StringUtils;
import com.example.torder.vo.MsgVo;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@ServerEndpoint(value = "/websocket/{userId}")
@Component
public class MyWebSocket {
    /**
     * 静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
     */
    private static int onlineCount = 0;

    /**
     * concurrent包的线程安全Set，用来存放每个客户端对应的MyWebSocket对象。
     */

    private static Map<String, Session> sessionMap = new ConcurrentHashMap<>();
    /**
     * 与某个客户端的连接会话，需要通过它来给客户端发送数据
     */
    private Session session;

    private String userId;


    /**
     * 连接建立成功调用的方法*/
    @OnOpen
    public void onOpen(Session session,@PathParam("userId") String userId) throws IOException {
        sessionMap.put(userId,session);
        addOnlineCount();           //在线数加1
        System.out.println("有新连接加入！当前在线人数为" + getOnlineCount());
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose(Session session,@PathParam("userId") String userId) {
        sessionMap.remove(userId) ;
        subOnlineCount();           //在线数减1
        System.out.println("有一连接关闭！当前在线人数为" + getOnlineCount());
    }

    /**
     * 收到客户端消息后调用的方法
     *
     * @param message 客户端发送过来的消息*/
    @OnMessage
    public void onMessage(String message, Session session) throws IOException {
        MsgVo msgVo=new MsgVo();
        System.out.println("来自客户端的消息:" + message);
        HashMap<String, Object> hashMap= JSON.parseObject(message, HashMap.class);
       //类型 1为单个发  2为通知全体
        String type = hashMap.get("type").toString();
        //目标用户 ，分隔
        String tarUser =hashMap.get("tarUser").toString();
        //具体内容
        String text =hashMap.get("text").toString();
        //自身code
        String userCode = hashMap.get("userCode").toString();
        String[] tarUsers=tarUser.split(",");
        msgVo.setMsgTime(new Date());
        msgVo.setMsgPublisher(userCode);
        msgVo.setMsgTitle(text);
        if ("1".equals(type)) {
            Session tarSession;
            for (String ter : tarUsers) {
                tarSession = sessionMap.get(ter);
                if (tarSession != null) {
                    msgVo.setMsgStatus("1");
                    msgVo.setMsgAccepter(ter);
                    tarSession.getBasicRemote().sendText(JSONArray.toJSON(msgVo).toString());
                }
            }
            session.getBasicRemote().sendText("发送个体消息成功");
        }
        if ("2".equals(type)){
            sendInfo(text);
            session.getBasicRemote().sendText("发送群通知成功");
        }
        if ("3".equals(type)){
            msgVo.setMsgStatus("3");
            String a=sessionMap.keySet().toString();
            String b= StringUtils.strip(a,"[]");
            msgVo.setMsgTitle(b);
            session.getBasicRemote().sendText(JSONArray.toJSON(msgVo).toString());

        }

    }


    //发生错误时调用
    @OnError
    public void onError(Session session, Throwable error) {
        System.out.println("发生错误");
        error.printStackTrace();
    }

    /**
     * 群发自定义消息
     * */
    public void sendInfo(String message) throws IOException {
        for (Map.Entry<String, Session> entry : sessionMap.entrySet()) {
            //自己就不用再发送消息了
            if (entry.getValue() != session) {
                entry.getValue().getBasicRemote().sendText(new ObjectMapper().writeValueAsString(message));
            }
        }
    }



    public static synchronized int getOnlineCount() {
        return onlineCount;
    }

    public static synchronized void addOnlineCount() {
        MyWebSocket.onlineCount++;
    }

    public static synchronized void subOnlineCount() {
        MyWebSocket.onlineCount--;
    }


    public void onMessage(MsgVo msgVo) throws IOException {
        msgVo.setMsgStatus("1");
        String tarUser =msgVo.getMsgAccepter();
        //具体内容
        String[] tarUsers=tarUser.split(",");
        Session tarSession;
        if(tarUsers!=null) {
            for (String ter : tarUsers) {
                tarSession = sessionMap.get(ter);
                if (tarSession != null) {
                    tarSession.getBasicRemote().sendText(JSONArray.toJSON(msgVo).toString());
                    System.out.println(msgVo);
                }
            }
        }
    }
}
