package com.desafio.achadoseperdidos.services;

import com.desafio.achadoseperdidos.dto.ItemDTO;
import com.desafio.achadoseperdidos.entities.Item;

import java.util.List;
import java.util.Map;

public interface ItemService {
    Item createItem(Item item);

    List<Item> getAllItems(Map<String, String> fieldToFilter);

    Item updateItem(Long itemId, ItemDTO itemDTO);
}
