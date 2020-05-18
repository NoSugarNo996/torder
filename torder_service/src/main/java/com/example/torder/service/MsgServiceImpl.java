package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Msg;
import com.example.torder.mapper.MsgMapper;
import com.example.torder.util.UUIDUtil;
import com.example.torder.vo.MsgVo;
import com.example.torder.websocket.MyWebSocket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Date;
import java.util.List;

/**
 * @program: torder
 * @description: 任务
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 17:37
 **/
@Service
public class MsgServiceImpl implements MsgService{
    @Autowired(required = false)
    MsgMapper msgMapper;
    @Override
    public List findList(MsgVo obj) {
        return msgMapper.findMsgList(obj);
    }

    @Override
    public int add(MsgVo obj) throws IOException {

        obj.setMsgCode(UUIDUtil.getUUID());
        obj.setMsgTime(new Date());
        obj.setMsgStatus("0");
       String code=obj.getMsgCode();
       int result=0;
        if (msgMapper.insertSelective(BeanUtil.copy(obj, Msg.class))==1)
            result=1;
        obj= getById(code);
        MyWebSocket webSocket = new MyWebSocket();
        webSocket.onMessage(obj);
        return result;
    }

    @Override
    public int delete(Integer id) {
        return msgMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(MsgVo obj) {
        return msgMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Msg.class));
    }

    @Override
    public MsgVo getById(String code) {
        return msgMapper.selectByPrimaryKey(code);
    }
}
