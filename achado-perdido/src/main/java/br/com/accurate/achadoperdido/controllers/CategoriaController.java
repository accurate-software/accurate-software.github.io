package br.com.accurate.achadoperdido.controllers;

import br.com.accurate.achadoperdido.controllers.forms.CategoriaForm;
import br.com.accurate.achadoperdido.modelo.Categoria;
import br.com.accurate.achadoperdido.services.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    public ResponseEntity index() {
        List<Categoria> categorias = this.categoriaService.listarTodas();

        return ResponseEntity.ok().body(categorias);
    }

    @PostMapping
    public ResponseEntity salvar(@RequestBody @Valid CategoriaForm categoriaForm) {
        Categoria categoria = categoriaForm.converter();
        return ResponseEntity.ok(this.categoriaService.cadastrar(categoria));
       
    }
}
