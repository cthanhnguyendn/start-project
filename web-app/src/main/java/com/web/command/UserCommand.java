package com.web.command;

import com.data.core.pojo.User;

/**
 * Created by THANHBEO on 5/10/2016.
 */
public class UserCommand extends AbstractCommand<User>{
    Long userId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
