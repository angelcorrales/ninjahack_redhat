package org.acme.getting.started.dto;

public class GreetingsDTO {

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