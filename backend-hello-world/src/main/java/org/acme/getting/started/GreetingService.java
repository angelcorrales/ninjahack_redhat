package org.acme.getting.started;

import javax.enterprise.context.ApplicationScoped;

import org.acme.getting.started.dto.GreetingsDTO;

@ApplicationScoped
public class GreetingService {

    public GreetingsDTO greeting(String name) {
        GreetingsDTO greeting = new GreetingsDTO();
        greeting.setName(name);
        greeting.setLastName("El que me da la gana");
        return greeting;
    }

}
