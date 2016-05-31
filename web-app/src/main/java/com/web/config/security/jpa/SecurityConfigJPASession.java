package com.web.config.security.jpa;

import com.web.config.security.CustomeBasicAuthenticationEntryPoint;
import com.web.config.security.JPAUserdetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;


@Configuration
@EnableWebSecurity
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class SecurityConfigJPASession extends WebSecurityConfigurerAdapter {
    @Autowired
    JPAUserdetailService jpaUserdetailService;
    @Autowired
    CustomeBasicAuthenticationEntryPoint customeBasicAuthenticationEntryPoint;

    //	@Autowired
//	SessionRepository<ExpiringSession> sessionRepository;
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean
    public AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder builder) throws Exception {
        builder.userDetailsService(jpaUserdetailService)
        .passwordEncoder(passwordEncoder());

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //SessionRepositoryFilter<ExpiringSession> sessionSessionRepositoryFilter = new SessionRepositoryFilter<>(sessionRepository);
        http
                .authorizeRequests()
                .antMatchers("/api/user").permitAll()
                .antMatchers("/api/register").permitAll()
                .antMatchers("/api/**").authenticated()
                .and().csrf().disable()
                .requestCache().and()
                .logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/login").and()
                //.addFilterBefore(sessionSessionRepositoryFilter, ChannelProcessingFilter.class)
                .httpBasic().authenticationEntryPoint(customeBasicAuthenticationEntryPoint);
    }

}