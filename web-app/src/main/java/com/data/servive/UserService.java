package com.data.servive;

import com.data.core.logic.UserReponsitory;
import com.data.core.logic.specification.SearchCriteria;
import com.data.core.logic.specification.UserSpecificationsBuilder;
import com.data.core.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.List;

/**
 * Created by THANHBEO on 5/5/2016.
 */
@Service
@Transactional
public class UserService {
    @Autowired
    UserReponsitory userReponsitory;
    @Autowired
    PasswordEncoder passwordEncoder;

    public Page<User> findAll(List<SearchCriteria> searchCriterias, Pageable pageable) {
        UserSpecificationsBuilder<User> specificationsBuilder = new UserSpecificationsBuilder<>(searchCriterias);
        Specification<User> spec = specificationsBuilder.build();
        Page<User> pageUser = userReponsitory.findAll(spec, pageable);
        return pageUser;
    }

    public User findByName(String name) {
        return userReponsitory.findByUserName(name);
    }

    public User findById(Long Id) {
        return userReponsitory.findByUserId(Id);
    }

    public boolean isDuplicated(String field, String value) {
        return userReponsitory.checkDuplicatedByField(field,value);
    }
    public User saveOrUpdate(User pojo) {
        if (pojo.getUserId()==null){
            pojo.setPassword(passwordEncoder.encode(pojo.getPassword()));
        }
        if(pojo.getUserId()!=null){
            User dbUser = userReponsitory.findByUserId(pojo.getUserId());
            pojo.setPassword(dbUser.getPassword());
            pojo.setCreatedDate(dbUser.getCreatedDate());
            pojo.setModifiedDate(new Timestamp(System.currentTimeMillis()));
        }
        return  userReponsitory.save(pojo);
    }

    public User registerUser(User pojo) {
        if (pojo.getUserId()==null){
            pojo.setPassword(passwordEncoder.encode(pojo.getPassword()));
        }
        return  userReponsitory.save(pojo);
    }
}
