package com.bbva.play.services.dto;

import java.io.Serializable;

public class MissionDto implements Serializable {
    
    private static final long serialVersionUID = 934200381965823305L;

    private String description;
    
    private String image;

    private Amount amount;

    public MissionDto() {
        super();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Amount getAmount() {
        return amount;
    }

    public void setAmount(Amount amount) {
        this.amount = amount;
    }
}