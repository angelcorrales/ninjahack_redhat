package org.acme.user.dto;

import java.io.Serializable;

public class UserDTO implements Serializable {

    private static final long serialVersionUID = -6562406563103063223L;
    
    private String name;

    public UserDTO() {
        super();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    
}