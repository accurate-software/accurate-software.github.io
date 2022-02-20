package com.taylsonmartinez.api.controllers;

import com.taylsonmartinez.api.dtos.FiltroDTO;
import com.taylsonmartinez.api.models.Item;
import com.taylsonmartinez.api.services.ItemService;
import io.swagger.annotations.ApiOperation;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/items")
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

    @GetMapping("/search")
    @ApiOperation(value="Relatório de cruzamento com filtro avançado. (Categoria e/ou um Raio de Kms")
    public List<Item> listFilter(@RequestBody @Valid FiltroDTO filtro){
        return service.findFilter(filtro);
    }

    @GetMapping
    @ApiOperation(value="Lista todos os itens")
    public List<Item> listAll(){
        return service.findAll();

    }

    @DeleteMapping("/{id}")
    @ApiOperation(value="Deleta o item")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity<Object> delete(@PathVariable(value = "id") UUID id){
        Optional<Item> item = service.findById(id);
        if (!item.isPresent()) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Item não encontrado.");
        service.delete(item.get());
        return ResponseEntity.status(HttpStatus.OK).body("Item deletado com sucesso.");
    }

    @PutMapping("/{id}")
    @ApiOperation(value="Faz o update do Item")
    public ResponseEntity<Item> update(@PathVariable(value="id") UUID id,
                                                   @RequestBody @Valid Item item) {
        Optional<Item> item0 = service.findById(id);
        if(!item0.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            item.setId(item0.get().getId());
            return new ResponseEntity<Item>(service.save(item), HttpStatus.OK);
        }
    }

    @GetMapping("/{id}")
    @ApiOperation(value="Retorna um item unico")
    public ResponseEntity<Item> getOneItem(@PathVariable(value="id") UUID id){
        Optional<Item> item = service.findById(id);
        if(!item.isPresent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            return new ResponseEntity<Item>(item.get(), HttpStatus.OK);
        }
    }

    }
