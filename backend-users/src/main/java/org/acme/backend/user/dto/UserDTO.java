package org.acme.backend.user.dto;

import java.io.Serializable;

public class UserDTO implements Serializable {

    private static final long serialVersionUID = -6562406563103063223L;
    
    private String name;

    private String totalMoney;

    public UserDTO() {
        super();
    }

    public String getName() {
        return name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    
    
}