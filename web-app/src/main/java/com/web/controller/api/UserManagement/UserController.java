package com.web.controller.api.UserManagement;

import com.data.core.pojo.User;
import com.data.servive.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by vincent on 5/9/2016.
 */
@RestController
public class UserController {
    @Autowired
    UserService userService;
//    @RequestMapping("/api/user")
//    public List<User> searchUser(){
//
//    }
}
