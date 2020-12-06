package com.desafio.achadoseperdidos.controllers;

import com.desafio.achadoseperdidos.dto.ItemDTO;
import com.desafio.achadoseperdidos.entities.Item;
import com.desafio.achadoseperdidos.services.interfaces.ItemService;
import com.fasterxml.jackson.databind.ObjectMapper;
import exceptions.NoContentException;
import exceptions.NotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static java.nio.charset.StandardCharsets.ISO_8859_1;
import static java.nio.charset.StandardCharsets.UTF_8;
import static org.mockito.Mockito.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

@WebMvcTest(controllers = ItemController.class)
class ItemControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper = new ObjectMapper();

    @MockBean
    private ItemService itemService;

    private List<Item> itemList;

    private Item item;

    @BeforeEach
    void setUp() {
        this.itemList = new LinkedList<>();
        itemList.add(new Item("boneco", "boneco perdido na praça", "brinquedo", "campina grande", "paraiba", true));
        itemList.add(new Item("bola", "bola achada na praia", "futebol", "joão pessoa", "paraiba", false));
        itemList.add(new Item("celular", "celular perdido na praça", "eletronico", "campina grande", "paraiba", true));

        this.item = new Item(UUID.fromString("5c166647-b030-43bb-9f27-cf295bf1f151"), "tablet", "tablet perdido na praça", "eletronico", "campina grande", "paraiba", true);
    }

    @Test
    void shouldFetchAllItemsWithOutFilter() throws Exception {
        when(itemService.getAllItems(anyMap())).thenReturn(itemList);

        MvcResult mvcResult = this.mockMvc.perform(get("/items"))
                                    .andExpect(status().isOk())
                                    .andReturn();

        String jsonResponse = mvcResult.getResponse().getContentAsString();
        jsonResponse = toUTF_8(jsonResponse);
        String jsonRequest = objectMapper.writeValueAsString(itemList);

        assertEquals(jsonRequest, jsonResponse);
    }

    @Test
    void shouldReturnsAllItemsFilteredWithValidFilter() throws Exception {
        List<Item> filteredList = new LinkedList<>();
        filteredList.add(new Item("boneco", "boneco perdido na praça", "brinquedo", "campina grande", "paraiba", true));
        filteredList.add(new Item("celular", "celular perdido na praça", "eletronico", "campina grande", "paraiba", true));

        Map<String, String> filterToCity = new HashMap<>();
        filterToCity.put("city", "campina grande");
        when(itemService.getAllItems(eq(filterToCity))).thenReturn(filteredList);

        MvcResult mvcResult = this.mockMvc.perform(get("/items").queryParam("city", "campina grande"))
                .andExpect(status().isOk())
                .andReturn();

        String jsonResponse = mvcResult.getResponse().getContentAsString();
        jsonResponse = toUTF_8(jsonResponse);
        String jsonRequest = objectMapper.writeValueAsString(filteredList);

        assertEquals(jsonRequest, jsonResponse);
    }

    @Test
    void shouldReturns204WhenCallingWithInvalidParam() throws Exception {
        Map<String, String> invalidParam = new HashMap<>();
        invalidParam.put("invalid", "invalid");
        when(itemService.getAllItems(eq(invalidParam))).thenThrow(new NoContentException());

        MvcResult mvcResult = this.mockMvc.perform(get("/items")
                .param("invalid", "invalid"))
                .andExpect(status().isNoContent())
                .andReturn();
    }
    
    @Test
    void shouldReturns404WhenIdDoesNotExists() throws Exception {
        when(itemService.updateItem(eq(UUID.fromString("2db18d4f-2d41-4640-9caa-3f9899e4c4c2")), any(ItemDTO.class))).thenThrow(new NotFoundException(""));

        ItemDTO itemDTO = new ItemDTO("celular", "celular achado", "eletronico", "campina grande", "paraiba");
        mockMvc.perform(put("/item/2db18d4f-2d41-4640-9caa-3f9899e4c4c2")
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(objectMapper.writeValueAsString(itemDTO)))
                .andExpect(status().isNotFound());
    }

    @Test
    void shouldUpdateItem() throws Exception {
        when(itemService.createItem(eq(item))).thenReturn(item);

        Item currentItem = itemService.createItem(item);

        ItemDTO itemDTO = new ItemDTO("celular", "celular achado", "eletronico", "campina grande", "paraiba");
        mockMvc.perform(put("/item/" + currentItem.getUuid())
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(objectMapper.writeValueAsString(itemDTO)))
                .andExpect(status().isOk());
    }

    @Test
    void shouldReturn400WhenIsMissingField() throws Exception {
        when(itemService.createItem(eq(item))).thenReturn(item);

        Item currentItem = itemService.createItem(item);

        ItemDTO itemDTO = new ItemDTO("", null, "eletronico", "campina grande", "paraiba");
        mockMvc.perform(put("/item/" + currentItem.getUuid())
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(objectMapper.writeValueAsString(itemDTO)))
                .andExpect(status().isBadRequest());
    }

    private String toUTF_8(String string) {
        byte[] stringBytes = string.getBytes(ISO_8859_1);
        String stringResult = new String(stringBytes, UTF_8);

        return stringResult;
    }
}