package com.web.controller.api.user;

import com.data.core.pojo.User;
import com.data.servive.UserService;
import com.web.command.UserCommand;
import com.web.config.security.CustomeUserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

/**
 * Created by vincent on 5/9/2016.
 */
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping("/api/users/list")
    public ResponseEntity<Page<User>> authorized(@RequestBody UserCommand userCommand) {
        Page<User> pageResult = userService.findAll(new ArrayList<>(),userCommand.getPageable());
        return new ResponseEntity<Page<User>>(pageResult, HttpStatus.OK);
    }
    @RequestMapping("/api/user")
    public ResponseEntity<CustomeUserDetail> getUser(Authentication authentication) {
        if(authentication.getPrincipal()==null){
            return new ResponseEntity<CustomeUserDetail>(HttpStatus.UNAUTHORIZED);
        }
        CustomeUserDetail userDetails = (CustomeUserDetail) authentication.getPrincipal();
        return new ResponseEntity<CustomeUserDetail>(userDetails, HttpStatus.OK);
    }
}
