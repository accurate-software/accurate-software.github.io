package com.desafio.achadoseperdidos.entities;

import com.desafio.achadoseperdidos.dto.ItemDTO;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Objects;

@Getter
@Setter
@Entity
public class Item {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private String category;
    private String city;
    private String state;
    private Boolean lost;

    public Item() {}

    public Item(Long id, String name, String description, String category, String city, String state, Boolean lost) {
        this(name, description, category, city, state, lost);
        this.id = id;
    }

    public Item(String name, String description, String category, String city, String state, Boolean lost) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.city = city;
        this.state = state;
        this.lost = lost;
    }

    public Item(ItemDTO itemDTO) {
        this.name = itemDTO.getName();
        this.description = itemDTO.getDescription();
        this.category = itemDTO.getCategory();
        this.city = itemDTO.getCity();
        this.state = itemDTO.getState();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Item item = (Item) o;
        return Objects.equals(id, item.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
