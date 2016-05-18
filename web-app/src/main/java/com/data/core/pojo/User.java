package com.data.core.pojo;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Created by THANHBEO on 5/5/2016.
 */
@Entity
@Table(name = "users")
public class User implements Serializable{
    public static String PASSWORD_ENCODER="cocacola_app";
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long userId;
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private Timestamp createdDate;
    private Timestamp modifiedDate;
    private String token;
    private boolean authenticated;

    protected User() {}

    public User(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public User(String userName, String token, boolean isAuthen) {
        this.userName = userName;
        this.token = token;
        this.authenticated = isAuthen;
    }

    @Override
    public String toString() {
        return String.format(
                "Customer[id=%d, firstName='%s', lastName='%s']",
                userId, firstName, lastName);
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public String[] getRoles() {
        return new String[]{"USER"};
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Timestamp getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Timestamp modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }
}
