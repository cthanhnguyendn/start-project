package com.web.validator;

import com.data.servive.UserService;
import com.web.command.UserCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

/**
 * Created by THANHBEO on 5/15/2016.
 */
@Component
public class UserValidator implements Validator{
    @Autowired
    UserService userService;
    @Override
    public boolean supports(Class<?> aClass) {
        return aClass.equals(UserCommand.class);
    }

    @Override
    public void validate(Object o, Errors errors) {
        UserCommand userCommand = (UserCommand)o;
        ValidationUtils.rejectIfEmpty(errors,"pojo.userName","userName","Require");
        ValidationUtils.rejectIfEmpty(errors,"pojo.password","password","Require");
        //ValidationUtils.rejectIfEmpty(errors,"pojo.email","pojo.userName","Require");
        if(userCommand.getPojo()!=null){
            if(userService.isDuplicated("userName",userCommand.getPojo().getUserName())){
                errors.reject("userName","Duplicated");
            }
        }
    }
}
