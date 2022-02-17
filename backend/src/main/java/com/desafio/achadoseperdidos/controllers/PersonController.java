package com.desafio.achadoseperdidos.controllers;

import com.desafio.achadoseperdidos.dto.ItemDTO;
import com.desafio.achadoseperdidos.dto.PersonDTO;
import com.desafio.achadoseperdidos.entities.Person;
import com.desafio.achadoseperdidos.services.interfaces.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping("/person")
public class PersonController {
    @Autowired
    private PersonService personService;

    @GetMapping
    public ResponseEntity<Person> getPerson(@RequestParam UUID id) {
        return new ResponseEntity<>(personService.getPersonById(id), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Person> createPerson(@Valid @RequestBody PersonDTO personDTO) {
        return new ResponseEntity<>(personService.savePerson(personDTO), HttpStatus.CREATED);
    }

    @PatchMapping("/{personId}/lost-item")
    public ResponseEntity<Person> addLostItemToPerson(@PathVariable UUID personId, @Valid @RequestBody ItemDTO itemDTO){
        return new ResponseEntity<>(personService.addLostItemToPerson(personId, itemDTO), HttpStatus.OK);
    }

    @PatchMapping("/{personId}/found-item")
    public ResponseEntity<Person> addFoundItemToPerson(@PathVariable UUID personId, @Valid @RequestBody ItemDTO itemDTO){
        return new ResponseEntity<>(personService.addFoundItemToPerson(personId, itemDTO), HttpStatus.OK);
    }
}
