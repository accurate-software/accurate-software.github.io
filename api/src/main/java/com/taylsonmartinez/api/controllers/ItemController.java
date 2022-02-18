package com.taylsonmartinez.api.controllers;

import com.taylsonmartinez.api.dtos.FiltroDTO;
import com.taylsonmartinez.api.models.Item;
import com.taylsonmartinez.api.repository.ItemRepository;
import javax.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api")
public class ItemController {

    private ItemRepository repository;

    public ItemController(ItemRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Item save(@RequestBody @Valid Item item ){
        return repository.save(item);
    }

    @PostMapping("/itens/distancia")
    public List<Item> listFilter(@RequestBody @Valid FiltroDTO filtro){
        return repository.findItemWithInDistance(filtro.getLatitude(), filtro.getLongitude(), filtro.getDistancia());
    }

    @GetMapping("/itens")
    public List<Item> listAll(){
        return repository.findAll();
    }
}
