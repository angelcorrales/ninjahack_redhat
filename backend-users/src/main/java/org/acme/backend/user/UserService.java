package org.acme.backend.user;

import javax.enterprise.context.ApplicationScoped;

import org.acme.backend.user.dto.UserDTO;

@ApplicationScoped
public class UserService {

    public UserDTO getUser() {

    	org.acme.backend.user.dto.UserDTO user = new UserDTO();
    	
    	user.setName("turpin");
    	
        return user;
    }

}
