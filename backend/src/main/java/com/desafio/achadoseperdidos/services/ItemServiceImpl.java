package com.desafio.achadoseperdidos.services;

import com.desafio.achadoseperdidos.constants.Messages;
import com.desafio.achadoseperdidos.dto.ItemDTO;
import com.desafio.achadoseperdidos.entities.Item;
import com.desafio.achadoseperdidos.repositories.ItemRepository;
import exceptions.BadRequestException;
import exceptions.NoContentException;
import exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class ItemServiceImpl implements ItemService{
    @Autowired
    private ItemRepository itemRepository;

    @Override
    public Item createItem(Item item) {
        return itemRepository.save(item);
    }

    @Override
    public List<Item> getAllItems(Map<String, String> mapWithKeyToFilterItems) {
        List<Item> itemList = itemRepository.findAll();
        validateEmptyList(itemList);

        boolean hasFilter = mapWithKeyToFilterItems.size() != 0;
        if(hasFilter) {
            itemList = getFilteredItems(mapWithKeyToFilterItems, itemList);
        }

        return itemList;
    }

    private void validateEmptyList(List<Item> itemList) {
        if(itemList.isEmpty()) {
            throw new NoContentException();
        }
    }

    private List<Item> getFilteredItems(Map<String, String> mapWithKeyToFilterItems, List<Item> itemList) {
        validateFilds(mapWithKeyToFilterItems);
        itemList = itemList.stream()
                   .filter(item -> itemHasEqualValue(item, mapWithKeyToFilterItems))
                   .collect(Collectors.toList());
        validateEmptyList(itemList);
        return itemList;
    }

    private boolean itemHasEqualValue(Item item, Map<String, String> mapWithKeyToFilterItems) {
        Set<String> fields = new HashSet<>(Arrays.asList("name", "category", "city", "state", "lost"));

        checkIfIsValidField(fields, mapWithKeyToFilterItems);

        for (String field : fields) {
            if(hasField(field, mapWithKeyToFilterItems)) {
                return equalsValue(item, field, mapWithKeyToFilterItems);
            }
        }

        return false;
    }

    private void checkIfIsValidField(Set<String> fields, Map<String, String> mapWithKeyToFilterItems) {
        boolean isValidField = false;
        for (String field : fields) {
            boolean fieldExists = mapWithKeyToFilterItems.keySet().contains(field);
            if(fieldExists) {
                isValidField = true;
            }
        }

        if(!isValidField) {
            throw new NoContentException();
        }
    }

    private boolean equalsValue(Item item, String field, Map<String, String> fildToFilter) {
        boolean equalsValue;
        switch (field) {
            case "name":
                equalsValue = fildToFilter.get(field).equals(item.getName());
                break;
            case "category":
                equalsValue = fildToFilter.get(field).equals(item.getCategory());
                break;
            case "city":
                equalsValue = fildToFilter.get(field).equals(item.getCity());
                break;
            case "state":
                equalsValue = fildToFilter.get(field).equals(item.getState());
                break;
            case "lost":
                Boolean lost = Boolean.parseBoolean(fildToFilter.get(field));
                equalsValue = lost.equals(item.getLost());
                break;
            default:
                equalsValue = false;
        }

        return equalsValue;
    }

    private boolean hasField(String field, Map<String, String> map) {
        return map.get(field) != null;
    }

    private void validateFilds(Map<String, String> fildToFilter) {
        boolean hasTwoOrMoreFildsToFilter = fildToFilter.size() > 1;
        if(hasTwoOrMoreFildsToFilter) {
            throw new BadRequestException(Messages.Exception.THERE_ARE_MORE_THAN_ONE_FILTER);
        }
    }

    @Override
    public Item updateItem(Long itemId, ItemDTO itemDTO) {
        Item currentItem = getItemById(itemId);
        currentItem = updateAllInfoItem(itemDTO, currentItem);

        itemRepository.save(currentItem);
        return currentItem;
    }

    private Item updateAllInfoItem(ItemDTO item, Item currentItem) {
        currentItem.setName(item.getName());
        currentItem.setCategory(item.getCategory());
        currentItem.setDescription(item.getDescription());
        currentItem.setCity(item.getCity());
        currentItem.setState(item.getState());

        return currentItem;
    }

    private Item getItemById(Long itemId) {
        Optional<Item> optionalItem = itemRepository.findById(itemId);

        checkIfItemExists(itemId, optionalItem);

        Item item = optionalItem.get();
        return item;
    }

    private void checkIfItemExists(Long itemId, Optional<Item> optionalItem) {
        boolean itemExists = optionalItem.isPresent();
        if(!itemExists) {
            throw new NotFoundException(String.format(Messages.Exception.ITEM_NOT_FOUND_D, itemId));
        }
    }
}
