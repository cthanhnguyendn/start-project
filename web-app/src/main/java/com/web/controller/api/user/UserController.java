package com.web.controller.api.user;

import com.data.core.pojo.User;
import com.data.servive.UserService;
import com.web.command.UserCommand;
import com.web.reponse.UserResponse;
import com.web.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.BindingResult;
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
    @Autowired
    UserValidator userValidator;

    @RequestMapping("/api/users/list")
    public ResponseEntity<Page<User>> authorized(@RequestBody UserCommand userCommand) {
        Page<User> pageResult = userService.findAll(new ArrayList<>(),userCommand.getPageable());
        return new ResponseEntity<Page<User>>(pageResult, HttpStatus.OK);
    }
    @RequestMapping("/api/users/edit")
    public ResponseEntity<UserResponse> editUser(@RequestBody UserCommand userCommand, BindingResult result) {
        UserResponse response = new UserResponse();

        if (userCommand.getUserId()!=null){
            User userresult = userService.findById(userCommand.getUserId());
            response.setPojo(userresult);
        }
        if (userCommand.getCrudAction()!= null){
            String crudAction = userCommand.getCrudAction();
            if(crudAction.equals("insert-update")){
                userValidator.validate(userCommand,result);
                if(!result.hasErrors()){
                    User user = userService.saveOrUpdate(userCommand.getPojo());
                    response.setPojo(user);
                }else{
                    response.parseValidateErrors(result, "Create User Fail");
                    return new ResponseEntity<UserResponse>(response,HttpStatus.BAD_REQUEST);
                }
            }
        }
        return new ResponseEntity<UserResponse>(response,HttpStatus.OK);
    }
    @RequestMapping("/api/user")
    public ResponseEntity<Object> getUser(Authentication authentication) {
        if(authentication==null){
            return new ResponseEntity<Object>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<Object>(authentication.getPrincipal(), HttpStatus.OK);
    }
    @RequestMapping("/api/register")
    public ResponseEntity<UserResponse> register(@RequestBody UserCommand userCommand, BindingResult result) {
        UserResponse response = new UserResponse();
        userValidator.validate(userCommand,result);
        if(!result.hasErrors()){
            User user = userService.registerUser(userCommand.getPojo());
            response.setPojo(user);
        }else{
            response.parseValidateErrors(result, "Create User Fail");
            return new ResponseEntity<UserResponse>(response,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<UserResponse>(response,HttpStatus.OK);
    }
}
