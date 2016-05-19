package com.data.core.logic;

import com.data.core.pojo.Role;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by THANHBEO on 5/19/2016.
 */
public interface RoleRepository extends CrudRepository<Role,Long> {
    List<Role> findAll();
}
