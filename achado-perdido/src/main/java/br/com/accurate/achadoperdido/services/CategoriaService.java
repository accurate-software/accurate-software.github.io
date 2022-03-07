package br.com.accurate.achadoperdido.services;

import br.com.accurate.achadoperdido.modelo.Categoria;
import br.com.accurate.achadoperdido.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository repository;

    @Transactional
    public Categoria cadastrar(Categoria categoria) {
        return this.repository.save(categoria);
    }

    public List<Categoria> listarTodas() {
        return this.repository.findAll();
    }

    @Transactional
    public Categoria atualizar(Categoria categoria) {
        Objects.requireNonNull(categoria.getId());
        return this.repository.save(categoria);
    }

    @Transactional
    public void apagar(Categoria categoria) {
        this.repository.delete(categoria);
    }
}
