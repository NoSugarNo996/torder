package com.example.torder.controller;

import com.cetccity.common.base.util.BeanUtil;
import com.cetccity.common.base.vo.PageVo;
import com.example.torder.api.AdvertisingApi;
import com.example.torder.service.AdvertisingService;
import com.example.torder.vo.AdvertisingVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @program: torder
 * @description: 广告
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 14:26
 **/
@RestController
public class AdvertisingController extends BaseController implements AdvertisingApi {
    @Autowired
    AdvertisingService advertisingService;
    @Override
    public int addAdvertising(AdvertisingVo obj) {
        return advertisingService.add(obj);
    }

    @Override
    public PageVo findAdvertisingList(AdvertisingVo obj) {
        return BeanUtil.page(advertisingService.findAdvertisingList(obj));
    }

    @Override
    public int deleteAdvertising(Integer id) {
        return advertisingService.delete(id);
    }

    @Override
    public int updateAdvertising(AdvertisingVo obj) {
        return advertisingService.update(obj);
    }

    @Override
    public AdvertisingVo getById(Integer id) {
        return advertisingService.getById(id);
    }
}
