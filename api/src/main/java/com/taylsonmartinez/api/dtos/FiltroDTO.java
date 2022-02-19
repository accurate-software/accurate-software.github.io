package com.taylsonmartinez.api.dtos;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class FiltroDTO {
    @NotNull(message = "{campo.latitude.obrigatorio}")
    private double latitude;
    @NotNull(message = "{campo.longitude.obrigatorio}")
    private double longitude;
    @NotNull(message = "{campo.distancia.obrigatorio}")
    private double distancia;
}
