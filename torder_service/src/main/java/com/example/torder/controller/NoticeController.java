package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.NoticeApi;
import com.example.torder.service.NoticeService;
import com.example.torder.vo.NoticeVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 关注
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 22:14
 **/
@RestController
public class NoticeController extends BaseController implements NoticeApi {
    @Autowired
    NoticeService noticeService;
    @Override
    public int add(NoticeVo obj) {
        return noticeService.add(obj);
    }

    @Override
    public PageVo findList(NoticeVo obj) {
        return BeanUtil.page(noticeService.findList(obj));
    }

    @Override
    public int delete(Integer id) {
        return noticeService.delete(id);
    }

    @Override
    public int update(NoticeVo obj) {
        return noticeService.update(obj);
    }

    @Override
    public NoticeVo getById(Integer id) {
        return noticeService.getById(id);
    }
}
