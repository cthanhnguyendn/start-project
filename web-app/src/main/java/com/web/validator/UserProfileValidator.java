package com.web.validator;

import com.web.command.UserProfileCommand;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

/**
 * Created by THANHBEO on 5/24/2016.
 */
@Component
public class UserProfileValidator implements Validator{
    @Override
    public boolean supports(Class<?> aClass) {
        return aClass.equals(UserProfileCommand.class);
    }

    @Override
    public void validate(Object o, Errors errors) {

    }
}
