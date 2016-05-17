package com.data.core.logic;

import com.data.core.pojo.User;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

/**
 * Created by THANHBEO on 5/5/2016.
 */

public interface UserReponsitoryCustom extends GenericRepository<User,Long>{
    Boolean checkDuplicatedByField(String field, String value);
}
