package br.com.accurate.achadoperdido.controllers.forms;

import br.com.accurate.achadoperdido.modelo.Categoria;
import br.com.accurate.achadoperdido.modelo.Item;
import br.com.accurate.achadoperdido.modelo.Situacao;
import br.com.accurate.achadoperdido.repository.CategoriaRepository;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Optional;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AtualizaItemForm {
    private String nome;
    private String descricaoItem;
    private Long categoria;
    private Situacao situacao;

    @Override
    public String toString() {
        return "AtualizaItemForm{" +
                "nome='" + nome + '\'' +
                ", descricaoItem='" + descricaoItem + '\'' +
                ", categoria=" + categoria +
                ", situacao=" + situacao +
                '}';
    }

    public Item atualizar(CategoriaRepository categoriaRepository, Item item) {


        if (this.categoria != null) {
            Optional<Categoria> categoria = categoriaRepository.findById(this.categoria);
            categoria.ifPresent(item::setCategoria);
        }
        if (this.nome != null) {
            item.setNome(this.nome);
        }
        if (this.descricaoItem != null) {
            item.setDescricao(this.descricaoItem);
        }
        if (this.situacao != null) {
            item.setSituacao(this.situacao);
        }

        return item;
    }
}
