package org.acme.getting.started.dto;

import java.io.Serializable;

public class GreetingsDTO implements Serializable {

    private static final long serialVersionUID = -6562406563103063223L;
    
	private String name;
    private String lastName;

    public GreetingsDTO() {
        super();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName(String name) {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}