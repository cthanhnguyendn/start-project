package com.data.core.pojo;

import javax.persistence.*;

/**
 * Created by THANHBEO on 5/19/2016.
 */
@Entity
@Table(name = "userRole")
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long userRoleId;
    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    User user;
    @ManyToOne
    @JoinColumn(name = "roleId", referencedColumnName = "roleId")
    Role role;

    public UserRole() {
    }

    public Long getUserRoleId() {
        return userRoleId;
    }

    public void setUserRoleId(Long userRoleId) {
        this.userRoleId = userRoleId;
    }


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserRole)) return false;

        UserRole userRole = (UserRole) o;

        return userRole.getUserRoleId().equals(userRole.getUserRoleId());

    }

    @Override
    public int hashCode() {
        int result = userRoleId != null ? userRoleId.hashCode() : 0;
        return result;
    }
}
