package com.web.config.security;

import com.data.core.logic.UserReponsitory;
import com.data.core.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;

/**
 * Created by THANHBEO on 5/8/2016.
 */
@Service
public class JPAUserdetailService implements UserDetailsService {
    @Autowired
    UserReponsitory userReponsitory;
    @Override
    public UserDetails loadUserByUsername(String name) throws UsernameNotFoundException {
        User user =  userReponsitory.findByUserName(name);
        if(user==null){
            throw new UsernameNotFoundException("User not found");
        }
        return new CustomeUserDetail(user);
    }
}
