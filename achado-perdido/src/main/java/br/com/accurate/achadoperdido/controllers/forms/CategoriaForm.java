package br.com.accurate.achadoperdido.controllers.forms;

import br.com.accurate.achadoperdido.modelo.Categoria;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
public class CategoriaForm {
    @NotEmpty
    @NotNull
    private String nome;

    public Categoria converter() {
        return new Categoria(this.nome);
    }
}
