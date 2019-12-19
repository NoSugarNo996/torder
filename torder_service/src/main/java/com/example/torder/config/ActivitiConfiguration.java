package com.example.torder.config;

import org.activiti.engine.ProcessEngine;
import org.activiti.engine.ProcessEngineConfiguration;
import org.activiti.engine.impl.cfg.StandaloneProcessEngineConfiguration;
import org.activiti.spring.ProcessEngineFactoryBean;
import org.activiti.spring.SpringProcessEngineConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;


/**
* @description 配置activiti引擎
* @return
* @time 2019/5/13 9:10
* @version 1.0
*/
@Configuration
public class ActivitiConfiguration {

    @Autowired
    private DataSource dataSource;

//    extends WebSecurityConfigurerAdapter
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable().authorizeRequests().anyRequest().permitAll();
//    }

    /**
     * 初始化配置，将创建17张表,取消历史记录
     * @return StandaloneProcessEngineConfiguration
     */
    @Bean
    public StandaloneProcessEngineConfiguration processEngineConfiguration() {
        StandaloneProcessEngineConfiguration configuration =
                new StandaloneProcessEngineConfiguration();
        configuration.setDataSource(dataSource);
        configuration.setDatabaseSchemaUpdate(ProcessEngineConfiguration.DB_SCHEMA_UPDATE_TRUE);
        configuration.setAsyncExecutorActivate(false);
        return configuration;
    }

    /**
     * 创建引擎
     * @return ProcessEngine
     */

//    @Bean
//      public ProcessEngine processEngine() { return
//	  processEngineConfiguration().buildProcessEngine(); }



//   @Bean("springProcessEngineConfiguration")
//    public SpringProcessEngineConfiguration getConf() {
//        SpringProcessEngineConfiguration spec = new SpringProcessEngineConfiguration();
//        spec.setJdbcDriver("com.mysql.jdbc.Driver");
//        spec.setJdbcUrl("jdbc:mysql://172.16.10.111:3306/qzemer?useUnicode=true&characterEncoding=utf-8&allowMultiQueries=true");
//        spec.setJdbcUsername("qzemer");
//        spec.setJdbcPassword("QzEmer@123");
//        return spec;
//    }
//
//    @Bean("processEngine1")
//    public ProcessEngineFactoryBean getEng() {
//        ProcessEngineFactoryBean pefb = new ProcessEngineFactoryBean();
//        pefb.setProcessEngineConfiguration(this.getConf());
//        return pefb;
//    }

}
