package br.com.accurate.teste.achadoPerdido.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.accurate.teste.achadoPerdido.models.Item;
import br.com.accurate.teste.achadoPerdido.repository.ItemRepository;

@RestController
@RequestMapping(value ="/api")
public class ItemController {

	@Autowired
	ItemRepository itemRepository;
	
	@GetMapping("/itens")
	public List<Item> listaItens(){
		return itemRepository.findAll();
	}
	
	@PostMapping("/itens/{categoria}")
	public List<Item> listaItenUnico(@PathVariable(value = "categoria") String categoria){
		return itemRepository.findItemByCategoria(categoria);
	}
	
	@PostMapping("/itens/{categoria}/{localizacao}")
	public List<Item> listaRelatorioCruzamentoInformacoes(@PathVariable(value = "categoria") String categoria,  @PathVariable(value = "localizacao")String localizacao){
		return itemRepository.findItemByCategoriaAndLocalzacao(categoria, localizacao);
	}
	
	@PostMapping("/itens")
	public @ResponseBody Item salvaItem(@Valid Item item) {
		return itemRepository.save(item);
	}
	
	@DeleteMapping("/itens")
	public @ResponseBody void deletaItem(@Valid Item item) {
		itemRepository.delete(item);
	}
	
	@PutMapping("/itens")
	public @ResponseBody Item atualizaProduto(@Valid Item item) {
		return itemRepository.save(item);
	}
}
