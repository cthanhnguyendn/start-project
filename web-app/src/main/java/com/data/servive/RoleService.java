package com.data.servive;

import com.data.core.logic.RoleRepository;
import com.data.core.logic.UserReponsitory;
import com.data.core.pojo.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by THANHBEO on 5/19/2016.
 */
@Service
@Transactional
public class RoleService {
    @Autowired
    RoleRepository roleRepository;
    public List<Role> findAll(){
        return roleRepository.findAll();
    }
}
