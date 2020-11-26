package org.acme.backend.user;

import javax.enterprise.context.ApplicationScoped;

import java.util.ArrayList;
import java.util.List;
import javax.inject.Inject;

import org.acme.backend.dao.dto.*;
import org.acme.backend.user.dto.*;

import org.acme.backend.dao.ServiceDao;

@ApplicationScoped
public class UserService {

    @Inject
    ServiceDao dao;

    public UserDTO getUser() {

        //UserDTO user = addUser("turpin","perez",555.0,"avatar.jpg");
        
        Users userdao = dao.findUserById(new Long(1));

        UserDTO user = addUser(userdao.getName(), userdao.getLastname(), userdao.getTotalMoney(), userdao.getAvatar());

        return user;
    }


    private UserDTO addUser(String name, String lastname, Double totalMoney, String avatar) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId("1");
        userDTO.setName(name);
        userDTO.setLastname(lastname);
        userDTO.setTotalMoney(new Amount(totalMoney, "€"));
        userDTO.setAvatar(avatar);
        return userDTO;
    }



    public List<MissionDto> getUserMissions() {
        List<MissionDto> missions = new ArrayList<>();
        missions.add(addMission("Hacer la cama cada día", "bed.jpg", 5.0, "€","ACTIVE"));
        missions.add(addMission("Jugar a la play el tiempo asignado", "play.jpg", 25.0, "€","ACTIVE"));
        missions.add(addMission("No pelear con tus hermanos", "study.jpg", 30.0, "€","INACTIVE"));
        return missions;
    }

    private MissionDto addMission(String description, String image, Double amount, String currency, String state) {
        MissionDto missionDto = new MissionDto();
        missionDto.setDescription(description);
        missionDto.setImage(image);
        missionDto.setAmount(new Amount(amount, currency));
        missionDto.setState(state);
        return missionDto;
    }

}
