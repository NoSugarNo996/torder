package com.example.torder.service;

import com.cetccity.common.base.vo.PageVo;
import com.example.torder.mapper.QAMapper;
import com.example.torder.vo.QAVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: torder
 * @description: hjl
 * @author: huangjiali 黄嘉丽
 * @create: 2020-05-18 23:23
 **/
@Service
public class QAServiceImpl implements QAService{
    @Autowired(required = false)
    QAMapper qaMapper;
    @Override
    public List findList(QAVo obj) {
        return qaMapper.findList(obj);
    }

    @Override
    public QAVo getById(Integer id) {
        return qaMapper.selectByPrimaryKey(id);
    }
}
