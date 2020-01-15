package com.example.torder.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * @author huangjiali
 * @date 2019/12/20 2:58 下午
 */
@RequestMapping("/dics")
public interface DicsApi {
    /**
     * 数据字典
     * @param dicsCode
     * @return
     */
    @RequestMapping("/queryList")
    Object findDicsList(@RequestParam("dicsCode") String dicsCode);

}
