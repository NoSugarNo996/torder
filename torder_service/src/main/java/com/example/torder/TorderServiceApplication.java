package com.example.torder;

import com.fasterxml.jackson.databind.Module;
import com.fasterxml.jackson.databind.deser.std.DateDeserializers;
import com.fasterxml.jackson.databind.module.SimpleModule;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ImportResource;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

import java.util.Date;

@SpringBootApplication // 启动类
@MapperScan(basePackages = "com/example/torder/mapper") // Dao
@ImportResource(locations = {"classpath:config/applicationContext-transaction.xml"}) // 事务AOP
@EnableTransactionManagement // 可选：事务Annotation（等同于xml配置方式的 <tx:annotation-driven />）
@EnableEurekaClient// Eureka客户端（服务提供者）（也可以使用@EnableDiscoveryClient）
@EnableFeignClients// Feign客户端（服务消费者）
public class TorderServiceApplication extends WebSecurityConfigurerAdapter implements CommandLineRunner {

    @Override
    public void run(String... args) throws Exception {

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable().authorizeRequests().anyRequest().permitAll();
    }

    public static void main(String[] args) {
        SpringApplication.run(TorderServiceApplication.class, args);
    }

    @Bean
    public Module dateDeserializerModule() {
        SimpleModule module = new SimpleModule();
        module.addDeserializer(Date.class, new DateDeserializers.DateDeserializer());
        return module;
    }

    @Bean
    public ServerEndpointExporter serverEndpointExporter(){
        return new ServerEndpointExporter();
    }
}
