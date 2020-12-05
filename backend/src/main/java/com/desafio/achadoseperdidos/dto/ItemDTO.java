package com.desafio.achadoseperdidos.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class ItemDTO {
    @NotNull @NotEmpty @NotBlank
    private String name;

    @NotNull @NotEmpty @NotBlank
    private String description;

    @NotNull @NotEmpty @NotBlank
    private String category;

    @NotNull @NotEmpty @NotBlank
    private String city;

    @NotNull @NotEmpty @NotBlank
    private String state;

    public ItemDTO(String name, String description, String category, String city, String state) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.city = city;
        this.state = state;
    }
}
