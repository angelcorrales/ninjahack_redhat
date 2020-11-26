package com.bbva.play.services;

import java.util.ArrayList;
import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import com.bbva.play.services.dto.Amount;
import com.bbva.play.services.dto.MissionsDto;

@ApplicationScoped
public class MissionsService {

    public List<MissionsDto> getMissions() {
        List<MissionsDto> missions = new ArrayList<>();
        missions.add(addMission("Hacer la cama cada día", "bed.jpg", 5.0, "€"));
        missions.add(addMission("Jugar a la play el tiempo asignado", "play.jpg", 25.0, "€"));
        missions.add(addMission("No pelear con tus hermanos", "brothers.jpg", 30.0, "€"));
        return missions;
    }

    private MissionsDto addMission(String description, String image, Double amount, String currency) {
        MissionsDto missionDto = new MissionsDto();
        missionDto.setDescription(description);
        missionDto.setImage(image);
        missionDto.setAmount(new Amount(amount, currency));
        return missionDto;
    }
}