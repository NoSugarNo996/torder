package com.example.torder.service;


import com.example.torder.mapper.DicsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiceServiceImpl implements DicsService{
    @Autowired(required = false)
    DicsMapper dicsMapper;
    @Override
    public Object findDicsList(String dicsCode) {
        return dicsMapper.findDicsList(dicsCode);
    }
}
