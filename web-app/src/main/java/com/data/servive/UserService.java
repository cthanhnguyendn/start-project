package com.data.servive;

import com.data.core.logic.UserReponsitory;
import com.data.core.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by THANHBEO on 5/5/2016.
 */
@Service
@Transactional
public class UserService {
    @Autowired
    UserReponsitory userReponsitory;

    public List<User> findAll(){

        //return userReponsitory.findAll();
    }
    Page<User> findAll(Specification<Long> spec, Pageable pageable){

    }
}
