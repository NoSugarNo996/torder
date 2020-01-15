package com.example.torder.controller;

import com.example.torder.api.DicsApi;
import com.example.torder.service.DicsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author huangjiali
 * @date 2019/12/23 10:06 上午
 */
@RestController
public class DicsController extends BaseController implements DicsApi {
    @Autowired
    DicsService dicsService;
    @Override
    public Object findDicsList(String dicsCode) {
        return dicsService.findDicsList(dicsCode);
    }
}
