package br.com.accurate.achadoperdido.services;

import br.com.accurate.achadoperdido.exceptions.ItemNaoLocalizadoException;
import br.com.accurate.achadoperdido.helpers.CalculaDistancia;
import br.com.accurate.achadoperdido.modelo.Item;
import br.com.accurate.achadoperdido.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class ItemService {

    @Autowired
    public ItemRepository repository;


    public Page<Item> listarPorCategoria(Long categoria_id, Pageable paginacao) {
        return this.repository.findByCategoriaId(categoria_id, paginacao);
    }

    public Page<Item> listarTodos(Pageable pageable) {
        return this.repository.findAll(pageable);
    }

    @Transactional
    public Item cadastrar(Item item) {
        return this.repository.save(item);
    }


    public Item buscarPorId(Long id) {
        Optional<Item> item = this.repository.findById(id);

        if (item.isEmpty()) {
            throw new ItemNaoLocalizadoException("Item id: " + id);
        }

        return item.get();
    }

    @Transactional
    public void atualizar(Long id, Item item) {
        item.setId(id);

        this.repository.save(item);
    }

    @Transactional
    public void apagar(Long id) {
        Item item = this.buscarPorId(id);
        this.repository.delete(item);
    }

    public Page<Item> obterItemPorLocalidadeCategoriaERaio(Long categoria,
                                                           Double raio,
                                                           Double latitude,
                                                           Double longitude,
                                                           Pageable paginacao) {

        CalculaDistancia calculaDistancia = new CalculaDistancia();

        Page<Item> itens = this.repository.buscarPorCategoriaLocalizacaoERaio(categoria, raio, latitude, longitude, paginacao);

        return itens;
    }
}
