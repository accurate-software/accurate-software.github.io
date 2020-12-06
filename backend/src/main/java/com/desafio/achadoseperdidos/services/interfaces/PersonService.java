package com.desafio.achadoseperdidos.services.interfaces;

import com.desafio.achadoseperdidos.dto.ItemDTO;
import com.desafio.achadoseperdidos.dto.PersonDTO;
import com.desafio.achadoseperdidos.entities.Person;

import java.util.UUID;

public interface PersonService {
    Person getPersonById(UUID id);

    Person savePerson(PersonDTO personDTO);

    Person addLostItemToPerson(UUID personId, ItemDTO itemDTO);

    Person addFoundItemToPerson(UUID personId, ItemDTO itemDTO);
}
