package com.desafio.achadoseperdidos.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
public class PersonDTO {

    @NotNull @NotBlank @NotEmpty
    private String name;

    @NotNull @NotBlank @NotEmpty
    private String email;

    @NotNull @NotBlank @NotEmpty
    private String telephone;

    public PersonDTO(String name, String email, String telephone) {
        this.name = name;
        this.email = email;
        this.telephone = telephone;
    }
}
