package br.com.accurate.achadoperdido.controllers.dto;

import br.com.accurate.achadoperdido.modelo.Categoria;
import br.com.accurate.achadoperdido.modelo.Item;
import br.com.accurate.achadoperdido.modelo.Situacao;
import lombok.Getter;

@Getter
public class ItemDTO {
    
    private Long id;
    private String nome;
    private String descricao;
    private LocalDTO local;
    private Categoria categoria;
    private Situacao situacao;

    public ItemDTO(Item item) {
        this.local = new LocalDTO(item.getLocal());
        this.nome = item.getNome();
        this.descricao = item.getDescricao();
        this.categoria = item.getCategoria();
        this.situacao = item.getSituacao();
        this.id = item.getId();

    }

}
