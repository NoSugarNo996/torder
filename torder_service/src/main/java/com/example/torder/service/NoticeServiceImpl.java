package com.example.torder.service;

import com.cetccity.common.base.util.BeanUtil;
import com.example.torder.domain.Notice;
import com.example.torder.mapper.NoticeMapper;
import com.example.torder.util.UUIDUtil;
import com.example.torder.vo.NoticeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @program: torder
 * @description: 关注
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 22:16
 **/
@Service
public class NoticeServiceImpl implements NoticeService{
    @Autowired(required = false)
    NoticeMapper noticeMapper;
    @Override
    public List findList(NoticeVo obj) {
        return noticeMapper.findList(obj);
    }

    @Override
    public int add(NoticeVo obj) {
        obj.setCode(UUIDUtil.getUUID());
        return noticeMapper.insertSelective(BeanUtil.copy(obj, Notice.class));
    }

    @Override
    public int delete(Integer id) {
        return noticeMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int update(NoticeVo obj) {
        return noticeMapper.updateByPrimaryKeySelective(BeanUtil.copy(obj,Notice.class));
    }

    @Override
    public NoticeVo getById(Integer id) {
        return noticeMapper.selectByPrimaryKey(id);
    }
}
