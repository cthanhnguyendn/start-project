package com.web.config;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * Created by vincent on 4/20/2016.
 */
@Configuration
@EnableWebMvc
@EnableAutoConfiguration
@EnableJpaRepositories("com.data.core.logic")
@EntityScan("com.data.core.pojo")
@ComponentScan("com.data")
public class ServerConfiguration extends WebMvcAutoConfiguration {

}
