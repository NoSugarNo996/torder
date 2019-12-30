package com.example.torder.api;

import com.cetccity.common.base.vo.PageVo;
import com.example.torder.vo.AdvertisingVo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

/**
 * @program: torder
 * @description: 广告
 * @author: huangjiali 黄嘉丽
 * @create: 2019-12-25 14:20
 **/
@RequestMapping("/advertising")
public interface AdvertisingApi {
    /**
     * 添加广告
     * @param obj
     * @return
     */
    @RequestMapping("/add")
    int addAdvertising(@RequestBody AdvertisingVo obj);

    /**
     * 或得广告列表
     * @param obj
     * @return
     */
    @RequestMapping("/queryList")
    PageVo findAdvertisingList(@RequestBody AdvertisingVo obj);

    /**
     * 删除广告信息
     * @param id
     * @return
     */
    @RequestMapping("/delete")
    int deleteAdvertising(@RequestParam("id") Integer id);

    /**
     * 更新广告信息
     * @param obj
     * @return
     */
    @RequestMapping("/update")
    int updateAdvertising(@RequestBody AdvertisingVo obj);

    /**
     * 获得广告详情
     * @param id
     * @return
     */
    @RequestMapping("/getInfo")
    AdvertisingVo getById(@RequestParam("id") Integer id);

    @RequestMapping("/getCount")
    long getCount(@RequestBody AdvertisingVo obj);


}
