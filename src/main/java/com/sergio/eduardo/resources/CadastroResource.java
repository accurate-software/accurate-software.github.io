package com.sergio.eduardo.resources;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.sergio.eduardo.dto.CadastroDoDonoDoObjetoDTO;
import com.sergio.eduardo.entities.CadastroDoDonoDoObjeto;
import com.sergio.eduardo.services.CadastroService;

@RestController
@RequestMapping(value = "/cadastros")
public class CadastroResource {

	@Autowired
	private ViaCepOpenFeignResource viaCepService;

	@Autowired
	private CadastroService cadastroService;

	@PostMapping
	public ResponseEntity<CadastroDoDonoDoObjeto> postViaCepFeign(@Valid @RequestBody CadastroDoDonoDoObjetoDTO dto)
			throws JsonProcessingException {


		CadastroDoDonoDoObjeto cadastro = viaCepService.obterCep(dto.getCep());

		cadastro.setComplemento(dto.getComplemento());
		cadastro.setNumero(dto.getNumero());
		cadastro.setNome(dto.getNome());
		cadastro.setEmail(dto.getEmail());
		cadastro.setDataDeNascimento(dto.getDataDeNascimento());
		cadastro.setCpf(dto.getCpf());

		cadastroService.save(cadastro);

		return ResponseEntity.ok(cadastro);
	}

	@GetMapping(value = "/{cpf}")
	public ResponseEntity<CadastroDoDonoDoObjeto> buscar(@PathVariable String cpf) {
		CadastroDoDonoDoObjeto obj = cadastroService.findCPF(cpf);
	    return ResponseEntity.ok().body(obj);
	}
	
}
