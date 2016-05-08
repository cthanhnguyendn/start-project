package com.data.core.logic;

import com.data.core.pojo.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by THANHBEO on 5/5/2016.
 */
public interface UserReponsitory extends CrudRepository<User,Long>,UserReponsitoryAdvance {
    public List<User> findAll();
    public User findByName(String name);
}
