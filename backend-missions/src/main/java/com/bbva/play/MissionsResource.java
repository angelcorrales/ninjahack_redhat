package com.bbva.play;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.inject.Inject;
import java.util.List;

import com.bbva.play.services.MissionsService;
import com.bbva.play.services.dto.MissionDto;

@Path("/missions")
public class MissionsResource {

    @Inject
    MissionsService service;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<MissionDto> getMissions() {
        return service.getMissions();
    }
}