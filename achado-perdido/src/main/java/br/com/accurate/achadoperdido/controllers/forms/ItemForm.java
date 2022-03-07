package br.com.accurate.achadoperdido.controllers.forms;

import br.com.accurate.achadoperdido.modelo.Categoria;
import br.com.accurate.achadoperdido.modelo.Item;
import br.com.accurate.achadoperdido.modelo.Local;
import br.com.accurate.achadoperdido.modelo.Situacao;
import br.com.accurate.achadoperdido.repository.CategoriaRepository;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Optional;

@Data
public class ItemForm {
    @NotEmpty
    @NotNull
    private String nome;
    @NotEmpty
    @NotNull
    private String descricaoItem;
    private String descricaoLugar;

    @NotNull
    private Double latitude;

    @NotNull
    private Double longitude;

    @NotNull
    private Long categoria;
    private Situacao situacao;

    @Override
    public String toString() {
        return "ItemForm{" +
                "nome='" + nome + '\'' +
                ", descricaoItem='" + descricaoItem + '\'' +
                ", descricaoLugar='" + descricaoLugar + '\'' +
                ", latitude='" + latitude + '\'' +
                ", longitude='" + longitude + '\'' +
                '}';
    }

    public Item converter(CategoriaRepository catRepo) {
        Item item = new Item();

        Local local = new Local();
        local.setDescricao(this.descricaoLugar);
        local.setLatitude(this.latitude);
        local.setLongitude(this.longitude);
        item.setLocal(local);


        Optional<Categoria> categoria = catRepo.findById(this.categoria);
        categoria.ifPresent(item::setCategoria);

        item.setNome(this.nome);
        item.setDescricao(this.descricaoItem);
        item.setSituacao(this.situacao);
        
        return item;
    }


}
