package com.desafio.achadoseperdidos.controllers;

import com.desafio.achadoseperdidos.dto.ItemDTO;
import com.desafio.achadoseperdidos.entities.Item;
import com.desafio.achadoseperdidos.services.interfaces.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@RestController
public class ItemController {
    @Autowired
    private ItemService itemService;

    @GetMapping("/items")
    public ResponseEntity<List<Item>> getAllItems(@RequestParam(required = false) Map<String, String> allRequestsParams) {
        return new ResponseEntity<>(itemService.getAllItems(allRequestsParams), HttpStatus.OK);
    }

    @PutMapping("/item/{itemId}")
    public ResponseEntity<Item> updateItem(@PathVariable UUID itemId, @Valid @RequestBody ItemDTO itemDTO) {
        return new ResponseEntity<>(itemService.updateItem(itemId, itemDTO), HttpStatus.OK);
    }
}
