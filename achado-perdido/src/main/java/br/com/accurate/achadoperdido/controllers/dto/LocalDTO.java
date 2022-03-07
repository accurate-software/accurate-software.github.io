package br.com.accurate.achadoperdido.controllers.dto;

import br.com.accurate.achadoperdido.modelo.Local;
import lombok.Getter;

@Getter
public class LocalDTO {
    private Double latitude;
    private Double longitude;

    public LocalDTO(Local local) {
        this.latitude = local.getLatitude();
        this.longitude = local.getLongitude();
    }
}
