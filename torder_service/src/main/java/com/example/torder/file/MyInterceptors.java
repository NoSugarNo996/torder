package com.example.torder.file;

import org.springframework.boot.SpringBootConfiguration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurationSupport;

/**
 * @program: cea-emergency-en
 * @description: 配置类
 * @author: huangjiali 黄嘉丽
 * @create: 2020-01-08 14:27
 **/
@SpringBootConfiguration
public class MyInterceptors extends WebMvcConfigurationSupport {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new LoginInterceptor())
                .excludePathPatterns("/error")
                .excludePathPatterns("/file/**")
                .excludePathPatterns("/user/**")
                .excludePathPatterns("/talents/**")
                .addPathPatterns("/**")
        ;
        super.addInterceptors(registry);
    }

    @Override
    protected void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/file/**").addResourceLocations("file:/Users/huangjiali/IdeaProjects/torder/file/");
        super.addResourceHandlers(registry);
    }


}

