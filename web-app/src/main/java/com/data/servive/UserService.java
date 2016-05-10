package com.data.servive;

import com.data.core.logic.UserReponsitory;
import com.data.core.logic.specification.SearchCriteria;
import com.data.core.logic.specification.UserSpecificationsBuilder;
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

    public Page<User> findAll(List<SearchCriteria> searchCriterias, Pageable pageable) {
        UserSpecificationsBuilder<User> specificationsBuilder = new UserSpecificationsBuilder<>(searchCriterias);
        Specification<User> spec = specificationsBuilder.build();
        Page<User> pageUser = userReponsitory.findAll(spec, pageable);
        return pageUser;
    }

    public User findByName(String name) {
        return userReponsitory.findByName(name);
    }

}
