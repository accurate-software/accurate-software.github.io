package com.desafio.achadoseperdidos.services;

import com.desafio.achadoseperdidos.dto.ItemDTO;
import com.desafio.achadoseperdidos.dto.PersonDTO;
import com.desafio.achadoseperdidos.entities.Person;

public interface PersonService {
    Person getPersonById(Long id);

    Person savePerson(PersonDTO personDTO);

    Person addLostItemToPerson(Long personId, ItemDTO itemDTO);

    Person addFoundItemToPerson(Long personId, ItemDTO itemDTO);
}
