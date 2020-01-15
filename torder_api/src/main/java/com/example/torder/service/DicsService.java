package com.example.torder.service;

/**
 * @author huangjiali
 * @date 2019/12/20 3:04 下午
 */
public interface DicsService {
    /**
     * 数据字典查询
     * @param dicsCode
     * @return
     */
    Object findDicsList(String dicsCode);
}
