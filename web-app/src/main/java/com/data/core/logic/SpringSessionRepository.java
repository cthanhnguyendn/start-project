package com.data.core.logic;


import com.data.core.pojo.SessionEntity;
import org.springframework.data.repository.CrudRepository;

public interface SpringSessionRepository extends CrudRepository<SessionEntity, String> {
}
