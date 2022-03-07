package br.com.accurate.achadoperdido.config.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class InputValidationDTO {
    private String campo;
    private String erro;
}
