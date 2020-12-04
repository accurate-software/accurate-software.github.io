package com.desafio.achadoseperdidos.services;

import com.desafio.achadoseperdidos.dto.ItemDTO;
import com.desafio.achadoseperdidos.entities.Item;
import com.desafio.achadoseperdidos.repositories.ItemRepository;
import exceptions.NoContentException;
import exceptions.NotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class ItemServiceImplTest {
    @Mock
    private ItemRepository itemRepository;
    @InjectMocks
    private ItemService itemService = new ItemServiceImpl();

    private List<Item> itemList;

    @BeforeEach
    void setUp() {
        this.itemList = new LinkedList<>();
        itemList.add(new Item("item1", "belo item1", "category1", "campina grande", "PB", false));
        itemList.add(new Item("item2", "belo item2", "category2", "joão pessoa", "PE", true));
    }

    @Test
    void shouldSaveAItem() {
        Item item = new Item("validName", "validDescription", "validCategory", "campina grande", "PB", false);
        when(itemRepository.save(any(Item.class))).thenReturn(item);

        Item currentItem = itemService.createItem(new Item("something", "test@test.com", "testCategory", "campina grande", "PB", true));

        assertEquals(item.getId(), currentItem.getId());
        assertEquals(item.getCategory(), currentItem.getCategory());
        assertEquals(item.getDescription(), currentItem.getDescription());
        assertEquals(item.getLost(), currentItem.getLost());
    }

    @Test
    void shouldReturnsAllItemsWithoutFilters() {
        when(itemRepository.findAll()).thenReturn(itemList);

        List<Item> currentItemsList = itemService.getAllItems(new HashMap<>());

        assertEquals(currentItemsList, itemList);
    }

    @Test
    void shouldReturnsAllItemsWithFilterByName() {
        when(itemRepository.findAll()).thenReturn(itemList);

        Map<String, String> mapToFilter = new HashMap<>();
        mapToFilter.put("name", "item1");
        List<Item> currentItemsList = itemService.getAllItems(mapToFilter);

        assertEquals(1, currentItemsList.size());
        assertEquals(false, currentItemsList.get(0).getLost());
    }

    @Test
    void shouldReturnsAllItemsWithFilterByCategory() {
        when(itemRepository.findAll()).thenReturn(itemList);

        Map<String, String> mapToFilter = new HashMap<>();
        mapToFilter.put("category", "category2");
        List<Item> currentItemsList = itemService.getAllItems(mapToFilter);

        assertEquals(1, currentItemsList.size());
        assertEquals(true, currentItemsList.get(0).getLost());
    }

    @Test
    void shouldReturnsAllItemsWithFilterByCity() {
        when(itemRepository.findAll()).thenReturn(itemList);

        Map<String, String> mapToFilter = new HashMap<>();
        mapToFilter.put("city", "campina grande");
        List<Item> currentItemsList = itemService.getAllItems(mapToFilter);

        assertEquals(1, currentItemsList.size());
        assertEquals(false, currentItemsList.get(0).getLost());
    }

    @Test
    void shouldReturnsAllItemsWithFilterByState() {
        when(itemRepository.findAll()).thenReturn(itemList);

        Map<String, String> mapToFilter = new HashMap<>();
        mapToFilter.put("state", "PE");
        List<Item> currentItemsList = itemService.getAllItems(mapToFilter);

        assertEquals(1, currentItemsList.size());
        assertEquals(true, currentItemsList.get(0).getLost());
    }

    @Test
    void shouldReturnsAllItemsWithFilterByLost() {
        List<Item> lostItems = new ArrayList<>();
        lostItems.add(new Item("item1", "belo item1", "category1", "campina grande", "PB", false));

        when(itemRepository.findAll()).thenReturn(itemList);

        Map<String, String> mapToFilter = new HashMap<>();
        mapToFilter.put("lost", "false");
        List<Item> currentItemsList = itemService.getAllItems(mapToFilter);

        assertEquals(1, currentItemsList.size());
        assertEquals(false, currentItemsList.get(0).getLost());
        assertEquals(lostItems, currentItemsList);
    }

    @Test
    void shouldThrowAnErrorWhenCallingWithInvalidFilter() {
        when(itemRepository.findAll()).thenReturn(itemList);

        Map<String, String> mapToFilter = new HashMap<>();
        mapToFilter.put("description", "belo item1");
        assertThrows(NoContentException.class, () -> {
            List<Item> currentItemsList = itemService.getAllItems(mapToFilter);
        });
    }

    @Test
    void shouldUpdateAnItemThatExists() {
        Item item = new Item("item1", "belo item1", "category1", "campina grande", "PB", false);
        when(itemRepository.findById(1L)).thenReturn(Optional.of(item));

        ItemDTO itemDTO = new ItemDTO("itemModified", "item top", "category", "campina grande", "PB", true);
        Item currentItem = itemService.updateItem(1L, itemDTO);

        assertEquals("itemModified", currentItem.getName());
        assertEquals("item top", currentItem.getDescription());
        assertEquals("category", currentItem.getCategory());
        assertEquals(true, currentItem.getLost());
    }

    @Test
    void shouldThrowAnErrorWhenAnItemDoesNotExists() {
        when(itemRepository.findById(1L)).thenReturn(Optional.empty());

        ItemDTO itemDTO = new ItemDTO("itemModified", "item top", "category", "campina grande", "PB", true);
        assertThrows(NotFoundException.class, () -> {
            itemService.updateItem(1L, itemDTO);
        });
    }
}