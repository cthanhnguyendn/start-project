package com.web.reponse;

import org.springframework.data.domain.Page;
import org.springframework.validation.Errors;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by THANHBEO on 5/16/2016.
 */
public class AbstractResponse<T> {
    T pojo;
    Page<T> page;
    List<Map<String,String>> errorsFields;

    public T getPojo() {
        return pojo;
    }

    public void setPojo(T pojo) {
        this.pojo = pojo;
    }

    public Page<T> getPage() {
        return page;
    }

    public void setPage(Page<T> page) {
        this.page = page;
    }

    public List<Map<String, String>> getErrorsFields() {
        return errorsFields;
    }

    public void setErrorsFields(List<Map<String, String>> errorsFields) {
        this.errorsFields = errorsFields;
    }

    public void parseValidateErrors(Errors errors, String message){
        errorsFields = new ArrayList<>();
        errors.getAllErrors().stream().forEach((item)->{
            Map<String,String> error= new HashMap<>();
            error.put(item.getCode(),item.getDefaultMessage());
            errorsFields.add(error);
        });
    }
}
