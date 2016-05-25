package com.web.command;

import com.data.core.pojo.UserProfile;

/**
 * Created by THANHBEO on 5/24/2016.
 */
public class UserProfileCommand extends AbstractCommand<UserProfile>{
    Long userId;

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
