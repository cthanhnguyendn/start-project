package com.data.core.logic;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.io.Serializable;

/**
 * Created by THANHBEO on 5/5/2016.
 */
@NoRepositoryBean
public interface GenericRepository <T,I extends Serializable>{

}
