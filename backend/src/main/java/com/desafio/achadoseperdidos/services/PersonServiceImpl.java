package com.desafio.achadoseperdidos.services;

import com.desafio.achadoseperdidos.constants.Messages;
import com.desafio.achadoseperdidos.dto.ItemDTO;
import com.desafio.achadoseperdidos.dto.PersonDTO;
import com.desafio.achadoseperdidos.entities.Item;
import com.desafio.achadoseperdidos.entities.Person;
import com.desafio.achadoseperdidos.repositories.PersonRepository;
import com.desafio.achadoseperdidos.services.interfaces.ItemService;
import com.desafio.achadoseperdidos.services.interfaces.PersonService;
import exceptions.BadRequestException;
import exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;
import java.util.UUID;

@Service
public class PersonServiceImpl implements PersonService {
    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private ItemService itemService;

    @Override
    public Person getPersonById(UUID id) {
        Optional<Person> optionalPerson = personRepository.findById(id);

        checkIfPersonAlreadyExists(id, optionalPerson);

        Person person = optionalPerson.get();
        return person;
    }

    private void checkIfPersonAlreadyExists(UUID id, Optional<Person> optionalPerson) {
        boolean personExists = optionalPerson.isPresent();
        if(!personExists) {
            throw new NotFoundException(String.format(Messages.Exception.PERSON_NOT_FOUND_D, id));
        }
    }

    @Override
    public Person savePerson(PersonDTO personDTO) {
        String email = personDTO.getEmail();

        checkIfEmailAlreadyExists(email);

        Person person = new Person(personDTO.getName(), personDTO.getEmail(), personDTO.getTelephone());
        return personRepository.save(person);
    }

    private void checkIfEmailAlreadyExists(String email) {
        boolean emailAlreadyExists = personRepository.findByEmail(email).isPresent();
        if(emailAlreadyExists) {
            throw new BadRequestException(String.format(Messages.Exception.EMAIL_ALREADY_EXISTS_S, email));
        }
    }

    @Override
    public Person addLostItemToPerson(UUID personId, ItemDTO itemDTO) {
        Person person = getPersonById(personId);
        Set<Item> lostItemsSet = person.getLostItems();

        boolean lost = true;
        Item item = new Item(itemDTO);
        item.setLost(lost);

        addItemToPerson(person, item, lostItemsSet);

        return person;
    }

    @Override
    public Person addFoundItemToPerson(UUID personId, ItemDTO itemDTO) {
        Person person = getPersonById(personId);
        Set<Item> foundItemsSet = person.getFoundItems();

        boolean lost = false;
        Item item = new Item(itemDTO);
        item.setLost(lost);

        addItemToPerson(person, item, foundItemsSet);

        return person;
    }

    private void addItemToPerson(Person person, Item item, Set<Item> items) {
        Item currentItem = itemService.createItem(item);
        items.add(currentItem);
        personRepository.save(person);
    }
}
