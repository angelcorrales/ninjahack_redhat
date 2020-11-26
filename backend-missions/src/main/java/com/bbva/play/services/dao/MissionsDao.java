package com.bbva.play.services.dao;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;

import com.bbva.play.services.dao.entity.MissionsEntity;
import com.bbva.play.services.dao.mapper.Mapper;
import com.bbva.play.services.dto.MissionsDto;

@ApplicationScoped
public class MissionsDao {

    public List<MissionsDto> getMissons() {
        List<MissionsEntity> missions = MissionsEntity.listAll();
        return Mapper.listMissionsDaoDtoToListMissionsDto(missions);
    }
}