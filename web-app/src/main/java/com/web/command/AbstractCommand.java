package com.web.command;

import com.data.core.logic.specification.SearchCriteria;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Created by THANHBEO on 5/10/2016.
 */
public class AbstractCommand<T> {

    Page<T> resultPage;
    Pageable pageable;
    T pojo;
    List<SearchCriteria> searchParram;
    String crudAction;

    public Page<T> getResultPage() {
        return resultPage;
    }

    public void setResultPage(Page<T> resultPage) {
        this.resultPage = resultPage;
    }

    public Pageable getPageable() {
        return pageable;
    }

    public void setPageable(Pageable pageable) {
        this.pageable = pageable;
    }

    public List<SearchCriteria> getSearchParram() {
        return searchParram;
    }

    public void setSearchParram(List<SearchCriteria> searchParram) {
        this.searchParram = searchParram;
    }

    public T getPojo() {
        return pojo;
    }

    public void setPojo(T pojo) {
        this.pojo = pojo;
    }

    public String getCrudAction() {
        return crudAction;
    }

    public void setCrudAction(String crudAction) {
        this.crudAction = crudAction;
    }
}
