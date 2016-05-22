package com.web.intercepter;

import com.fasterxml.jackson.databind.cfg.HandlerInstantiator;
import org.apache.log4j.Logger;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

/**
 * Created by THANHBEO on 5/21/2016.
 */
public class ContentDowloadInterceptor extends HandlerInterceptorAdapter{
    static Logger logger = Logger.getLogger(ContentDowloadInterceptor.class);
    
}
