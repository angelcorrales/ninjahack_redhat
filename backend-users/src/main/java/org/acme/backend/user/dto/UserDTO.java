package org.acme.backend.user.dto;

import java.io.Serializable;

public class UserDTO implements Serializable {

    private static final long serialVersionUID = -6562406563103063223L;
    
    private String name;

    private String lastname;

    private Amount totalMoney;

    private String avatar;

    public UserDTO() {
        super();
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(final String lastname) {
        this.lastname = lastname;
    }

    public Amount getTotalMoney() {
        return totalMoney;
    }

    public void setTotalMoney(final Amount totalMoney) {
        this.totalMoney = totalMoney;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(final String avatar) {
        this.avatar = avatar;
    }
    
}