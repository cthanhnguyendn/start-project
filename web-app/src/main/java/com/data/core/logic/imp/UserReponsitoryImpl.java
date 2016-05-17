package com.data.core.logic.imp;

import com.data.core.logic.UserReponsitoryCustom;
import com.data.core.pojo.User;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

/**
 * Created by THANHBEO on 5/5/2016.
 */
@Repository
public class UserReponsitoryImpl extends AbstractRepository<User,Long> implements UserReponsitoryCustom {

    @Override
    public Boolean checkDuplicatedByField(String field, String value) {
        Integer count = Integer.valueOf(entityManager
                .createQuery("select count(id) from User where "+field+" =:value")
                .setParameter("value",value).getSingleResult().toString());
        return count>0;
    }
}
