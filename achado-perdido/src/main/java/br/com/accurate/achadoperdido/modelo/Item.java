package br.com.accurate.achadoperdido.modelo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "itens", schema = "achados")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String descricao;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "local_id")
    private Local local;
    @Enumerated(EnumType.STRING)
    private Situacao situacao;
    @ManyToOne
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    public Categoria getCategoria() {
        return categoria;
    }

    public Local getLocal() {
        return local;
    }

    @Override
    public String toString() {
        return "Item{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", descricao='" + descricao + '\'' +
                ", local=" + local +
                ", situacao=" + situacao +
                ", categoria=" + categoria +
                '}';
    }
}
