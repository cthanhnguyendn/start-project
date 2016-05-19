package com.web.reponse;

import com.data.core.pojo.Role;
import com.data.core.pojo.User;

import java.util.List;

/**
 * Created by THANHBEO on 5/16/2016.
 */
public class UserResponse extends AbstractResponse<User>{

    private List<Role> listRole;

    public void setListRole(List<Role> listRole) {
        this.listRole = listRole;
    }

    public List<Role> getListRole() {
        return listRole;
    }
}
