package org.acme.backend.user;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.acme.backend.user.dto.UserDTO;

@Path("/user")
public class UserResource {

    @Inject
    UserService service;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/")
    public UserDTO getUser() {
        return service.getUser();
    }

}