package com.web.config.security.redis;

import com.data.core.logic.UserReponsitory;
import com.web.config.security.CustomeBasicAuthenticationEntryPoint;
import com.web.config.security.JPAUserdetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.savedrequest.NullRequestCache;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;
import org.springframework.session.web.http.HttpSessionStrategy;

//@Configuration
//@EnableWebSecurity
//@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
	JPAUserdetailService jpaUserdetailService;
	@Autowired
	CustomeBasicAuthenticationEntryPoint customeBasicAuthenticationEntryPoint;

	@Override
	protected void configure(AuthenticationManagerBuilder builder) throws Exception {
		builder.userDetailsService(jpaUserdetailService);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
				.authorizeRequests()
				.antMatchers("/api/user").permitAll()
				.antMatchers("/api/**").authenticated()
				.and().csrf().disable()
				.requestCache()
				.requestCache(new NullRequestCache())
				.and()
				.httpBasic().authenticationEntryPoint(customeBasicAuthenticationEntryPoint);
	}

	@Bean
	public HttpSessionStrategy httpSessionStrategy() {
		return new HeaderHttpSessionStrategy();
	}
}