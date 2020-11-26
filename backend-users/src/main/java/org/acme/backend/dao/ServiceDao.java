package org.acme.backend.dao;


import org.acme.backend.dao.dto.*;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.List;

import static javax.transaction.Transactional.TxType.REQUIRED;
import static javax.transaction.Transactional.TxType.SUPPORTS;

@ApplicationScoped
@Transactional(REQUIRED)
public class ServiceDao {

    @Transactional(SUPPORTS)
    public List<Users> findAllUsers() {
        return Users.listAll();
    }

    @Transactional(SUPPORTS)
    public Users findUserById(Long id) {
        //List<Users> allPersons = Users.listAll();
        //return allPersons.get(0);
        return Users.findById(id);
    }


/*
    @Transactional(SUPPORTS)
    public UserDaoDTO findRandomUser() {
        UserDaoDTO randomHero = null;
        while (randomHero == null) {
            randomHero = UserDaoDTO.findRandom();
        }
        return randomHero;
    }*/
/*
    public UserDaoDTO persistUser(@Valid UserDaoDTO hero) {
        UserDaoDTO.persist(hero);
        return hero;
    }*/
/*
    public UserDaoDTO updateHero(@Valid UserDaoDTO hero) {
        UserDaoDTO entity = UserDaoDTO.findById(hero.id);
        entity.name = hero.name;
        entity.last = hero.name;
        entity.name = hero.name;
        entity.name = hero.name;
        entity.name = hero.name;
        return entity;
    }*/
/*
    public void deleteHero(Long id) {
        Hero hero = Hero.findById(id);
        hero.delete();
    }*/
}