package org.acme.getting.started.dto;

import java.io.Serializable;

public class Amount implements Serializable {
    
    private static final long serialVersionUID = -7452286843928596149L;
    
    private Double amount;
    private String currency;

    public Amount(Double amount, String currency) {
        super();
        this.amount = amount;
        this.currency = currency;
    }

	public Double getAmount() {
		return amount;
    }
    
	public String getCurrency() {
		return currency;
    }
}