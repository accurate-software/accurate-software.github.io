package br.com.accurate.achadoperdido.helpers;

import lombok.Getter;
import lombok.NoArgsConstructor;

import static java.lang.Math.*;

@NoArgsConstructor
@Getter
public class CalculaDistancia {
    private final Long KM_RAIO_TERRA = 6371L;
    public Double distancia;

    public CalculaDistancia(Double lat1, Double long1, Double lat2, Double long2) {
        this.distancia = this.calcular(lat1, long1, lat2, long2);
    }

    public Double calcular(Double lat1, Double long1, Double lat2, Double long2) {
        double firstLatToRad = toRadians(lat1);
        double secondLatToRad = toRadians(lat2);
        double deltaLongitudeInRad = toRadians(long2 - long1);

        return acos(
                cos(firstLatToRad) * cos(secondLatToRad)
                        * cos(deltaLongitudeInRad) + sin(firstLatToRad)
                        * sin(secondLatToRad)
        )
                * KM_RAIO_TERRA;

    }
}
