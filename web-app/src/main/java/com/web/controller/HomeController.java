package com.web.controller;

import com.data.core.logic.UserReponsitory;
import com.data.core.pojo.User;
import com.data.servive.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;


/**
 * Created by vincent on 4/20/2016.
 */
@Controller
public class HomeController {
    @Autowired
    UserService userService;
    @RequestMapping({
            "/","/users"})
    String index(){
        return "index";
    }
}
