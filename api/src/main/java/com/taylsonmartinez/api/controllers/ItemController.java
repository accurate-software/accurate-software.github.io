package com.taylsonmartinez.api.controllers;

import com.taylsonmartinez.api.dtos.FiltroDTO;
import com.taylsonmartinez.api.models.Item;
import com.taylsonmartinez.api.services.ItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api")
public class ItemController {

    final ItemService service;

    public ItemController(ItemService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Item save(@RequestBody @Valid Item item ){
        return service.save(item);
    }

    @GetMapping("/itens/search")
    public List<Item> listFilter(@RequestBody @Valid FiltroDTO filtro){
        return service.findFilter(filtro);
    }

    @GetMapping("/itens")
    public List<Item> listAll(){
        return service.findAll();
    }

    @DeleteMapping("/item/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Object> delete(@PathVariable(value = "id") UUID id){
        Optional<Item> item = service.findById(id);
        if (!item.isPresent()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item não encontrado.");
        service.delete(item.get());
        return ResponseEntity.status(HttpStatus.OK).body("Item deletado com sucesso.");
    }

    }
