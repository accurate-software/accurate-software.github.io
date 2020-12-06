package com.desafio.achadoseperdidos.services;

import com.desafio.achadoseperdidos.dto.ItemDTO;
import com.desafio.achadoseperdidos.dto.PersonDTO;
import com.desafio.achadoseperdidos.entities.Item;
import com.desafio.achadoseperdidos.entities.Person;
import com.desafio.achadoseperdidos.repositories.PersonRepository;
import com.desafio.achadoseperdidos.services.interfaces.ItemService;
import com.desafio.achadoseperdidos.services.interfaces.PersonService;
import exceptions.BadRequestException;
import exceptions.NotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class PersonServiceImplTest {
    @Mock
    private PersonRepository personRepository;
    @Mock
    private ItemService itemService;

    @InjectMocks
    private PersonService personService = new PersonServiceImpl();

    private static final String UUID_STRING = "5c166647-b030-43bb-9f27-cf295bf1f151";
    private UUID uuid;

    private Person person;
    private Item item;

    @BeforeEach
    void setUp() {
        this.uuid = UUID.fromString(UUID_STRING);
        this.person = new Person("validName", "validEmail@mail.com", "(83) 9 1234-5678");
        this.item = new Item("validName", "validDescription", "validCategory", "campina grande", "PB", false);
    }

    @Test
    void shouldThrowErrorCallingGetPersonByIdWhenIdNotExists() {
        when(personRepository.findById(eq(uuid))).thenReturn(Optional.empty());
        assertThrows(NotFoundException.class, () -> {
            personService.getPersonById(uuid);
        });
    }

    @Test
    void shouldReturnsPersonSuccessFullyWithGetPersonById() {
        when(personRepository.findById(eq(uuid))).thenReturn(Optional.of(person));

        Person currentPerson = personService.getPersonById(uuid);

        assertEquals("validName", currentPerson.getName());
        assertEquals("validEmail@mail.com", currentPerson.getEmail());
        assertEquals("(83) 9 1234-5678", currentPerson.getTelephone());
        assertEquals(new HashSet<>(), currentPerson.getFoundItems());
        assertEquals(new HashSet<>(), currentPerson.getLostItems());
    }

    @Test
    void shouldThrowErrorCallingSavePersonWhenEmailAlredyExists() {
        when(personRepository.findByEmail("validEmail@mail.com")).thenReturn(Optional.of(person));
        assertThrows(BadRequestException.class, () -> {
            personService.savePerson(new PersonDTO("otherName", "validEmail@mail.com", "(83) 9 3214-2512"));
        });
    }

    @Test
    void shouldReturnsAPersonWhenCallingSavePerson() {
        when(personRepository.findByEmail("validEmail@mail.com")).thenReturn(Optional.empty());
        when(personRepository.save(any(Person.class))).thenReturn(person);

        PersonDTO personDTO = new PersonDTO("validName", "validEmail@mail.com", "(83) 9 1234-5678");
        Person currentPerson = personService.savePerson(personDTO);

        assertEquals("validName", person.getName());
        assertEquals("validEmail@mail.com", person.getEmail());
        assertEquals("(83) 9 1234-5678", person.getTelephone());
        assertEquals(new HashSet<>(), person.getFoundItems());
        assertEquals(new HashSet<>(), person.getLostItems());
    }

    @Test
    void addLostItemToPersonTest() {
        when(personRepository.findById(eq(uuid))).thenReturn(Optional.of(person));
        when(itemService.createItem(any(Item.class))).thenReturn(item);

        ItemDTO itemDTO = new ItemDTO("validName", "validDescription", "validCategory", "campina grande", "PB");
        Person currentPerson = personService.addLostItemToPerson(uuid, itemDTO);

        Set<Item> itemSet = new HashSet<>();
        itemSet.add(item);

        assertEquals("validName", currentPerson.getName());
        assertEquals("validEmail@mail.com", currentPerson.getEmail());
        assertEquals("(83) 9 1234-5678", currentPerson.getTelephone());
        assertEquals(itemSet, currentPerson.getLostItems());
        assertEquals(new HashSet<>(), currentPerson.getFoundItems());
    }

    @Test
    void addFoundItemToPersonTest() {
        when(personRepository.findById(eq(uuid))).thenReturn(Optional.of(person));
        when(itemService.createItem(any(Item.class))).thenReturn(item);

        ItemDTO itemDTO = new ItemDTO("validName", "validDescription", "validCategory", "campina grande", "PB");
        Person currentPerson = personService.addFoundItemToPerson(uuid, itemDTO);

        Set<Item> itemSet = new HashSet<>();
        itemSet.add(item);

        assertEquals("validName", currentPerson.getName());
        assertEquals("validEmail@mail.com", currentPerson.getEmail());
        assertEquals("(83) 9 1234-5678", currentPerson.getTelephone());
        assertEquals(itemSet, currentPerson.getFoundItems());
        assertEquals(new HashSet<>(), currentPerson.getLostItems());
    }
}