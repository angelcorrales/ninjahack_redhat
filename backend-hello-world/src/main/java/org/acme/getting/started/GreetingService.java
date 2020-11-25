package org.acme.getting.started;

import java.util.ArrayList;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import org.acme.getting.started.dto.Amount;
import org.acme.getting.started.dto.GreetingsDTO;

@ApplicationScoped
public class GreetingService {

    public List<GreetingsDTO> greeting() {
        List<GreetingsDTO> elements = new ArrayList<>();
        elements.add(addGreetings("Playstation 5", 35.0, "€"));
        elements.add(addGreetings("Xbox Serie X", 5.0, "$"));
        return elements;
    }

	private GreetingsDTO addGreetings(String description, Double amount, String currency) {
        GreetingsDTO greeting = new GreetingsDTO();
        greeting.setDescription(description);
        greeting.setAmount(new Amount(amount, currency));
        return greeting;
	}

}
