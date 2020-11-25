package org.acme.getting.started.dto;

import java.io.Serializable;

public class GreetingsDTO implements Serializable {

    private static final long serialVersionUID = -6562406563103063223L;
    
    private String description;
    private Amount amount;

    public GreetingsDTO() {
        super();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Amount getAmount() {
        return amount;
    }

    public void setAmount(Amount amount) {
        this.amount = amount;
    }
}