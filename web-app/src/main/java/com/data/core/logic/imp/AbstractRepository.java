package com.data.core.logic.imp;


import com.data.core.logic.GenericRepository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;

/**
 * Created by THANHBEO on 5/5/2016.
 */
public abstract class AbstractRepository <T,I extends Serializable> implements GenericRepository<T,I> {
    @PersistenceContext
    private EntityManager entityManager;
}
