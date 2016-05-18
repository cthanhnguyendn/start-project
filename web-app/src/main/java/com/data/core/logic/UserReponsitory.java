package com.data.core.logic;

import com.data.core.pojo.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by THANHBEO on 5/5/2016.
 */
public interface UserReponsitory extends CrudRepository<User,Long>,UserReponsitoryCustom,JpaSpecificationExecutor<User> {
    public User findByUserName(String userName);

    User findByUserId(Long id);
}
