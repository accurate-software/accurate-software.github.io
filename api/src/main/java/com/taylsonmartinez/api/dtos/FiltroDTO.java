package com.taylsonmartinez.api.dtos;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class FiltroDTO {
    @NotNull
    private double latitude;
    @NotNull
    private double longitude;
    @NotNull
    private double distancia;
}
