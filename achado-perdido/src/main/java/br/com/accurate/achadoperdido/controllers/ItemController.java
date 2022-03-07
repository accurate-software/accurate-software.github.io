package br.com.accurate.achadoperdido.controllers;

import br.com.accurate.achadoperdido.controllers.dto.ItemDTO;
import br.com.accurate.achadoperdido.controllers.forms.AtualizaItemForm;
import br.com.accurate.achadoperdido.controllers.forms.ItemForm;
import br.com.accurate.achadoperdido.modelo.Item;
import br.com.accurate.achadoperdido.repository.CategoriaRepository;
import br.com.accurate.achadoperdido.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/v1/itens")
public class ItemController {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Autowired
    private ItemService itemService;

    @GetMapping
    public ResponseEntity<Page<ItemDTO>> index(@RequestParam(required = false) Long categoria_id, Pageable paginacao) {

        Page<Item> itens;
        if (categoria_id != null) {
            itens = this.itemService.listarTodos(paginacao);
        } else {
            itens = this.itemService.listarPorCategoria(categoria_id, paginacao);
        }
        Page<ItemDTO> itensDTO = itens.map(ItemDTO::new);

        return ResponseEntity.ok(itensDTO);
    }

    @GetMapping("/procurar")
    public ResponseEntity<Page<ItemDTO>> procurar(@RequestParam Long categoria_id,
                                                  @RequestParam Double raio,
                                                  @RequestParam Double latitude,
                                                  @RequestParam Double longitude, Pageable paginacao) {


        Page<Item> itens = this.itemService.obterItemPorLocalidadeCategoriaERaio(categoria_id, raio, latitude, longitude, paginacao);

        Page<ItemDTO> itensDTO = itens.map(ItemDTO::new);

        return ResponseEntity.ok(itensDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ItemDTO> detalhes(@PathVariable Long id) {
        Item item = itemService.buscarPorId(id);

        return ResponseEntity.ok(new ItemDTO(item));
    }

    @PostMapping
    public ResponseEntity<ItemDTO> salvar(@RequestBody @Valid ItemForm itemForm) {
        Item item = itemForm.converter(categoriaRepository);

        return ResponseEntity.ok(new ItemDTO(this.itemService.cadastrar(item)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ItemDTO> atualizar(@PathVariable Long id, @RequestBody AtualizaItemForm itemForm) {

        Item item = itemForm.atualizar(this.categoriaRepository, this.itemService.buscarPorId(id));

        this.itemService.atualizar(id, item);

        return ResponseEntity.ok(new ItemDTO(item));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable Long id) {
        this.itemService.apagar(id);

        return ResponseEntity.ok().build();
    }


}
