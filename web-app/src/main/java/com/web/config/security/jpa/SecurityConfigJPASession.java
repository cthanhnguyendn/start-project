package com.web.config.security.jpa;

import com.data.core.logic.imp.JPASessionRepository;
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
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.session.ExpiringSession;
import org.springframework.session.SessionRepository;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;
import org.springframework.session.web.http.HttpSessionStrategy;
import org.springframework.session.web.http.SessionRepositoryFilter;

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
	public HttpSessionStrategy httpSessionStrategy() {

		return new HeaderHttpSessionStrategy();
	}
	@Bean
	public SessionRepository<ExpiringSession> sessionRepository() {

		return new JPASessionRepository(10);
	}
	@Bean
	public AuthenticationManager authenticationManager() throws Exception {
		return super.authenticationManager();
	}
	@Override
	protected void configure(AuthenticationManagerBuilder builder) throws Exception {
		builder.userDetailsService(jpaUserdetailService);
	}
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		//SessionRepositoryFilter<ExpiringSession> sessionSessionRepositoryFilter = new SessionRepositoryFilter<>(sessionRepository);
		http
				.authorizeRequests()
				.antMatchers("/api/user").permitAll()
				.antMatchers("/api/**").authenticated()
				.and().csrf().disable()
				.requestCache().and()
				//.addFilterBefore(sessionSessionRepositoryFilter, ChannelProcessingFilter.class)
				.httpBasic().authenticationEntryPoint(customeBasicAuthenticationEntryPoint);
	}

}