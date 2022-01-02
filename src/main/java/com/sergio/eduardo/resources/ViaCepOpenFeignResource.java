package com.sergio.eduardo.resources;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.sergio.eduardo.entities.CadastroDoDonoDoObjeto;

@FeignClient(name = "viacep", url = "https://viacep.com.br/ws")
public interface ViaCepOpenFeignResource {

	@GetMapping("/{cep}/json")
	CadastroDoDonoDoObjeto obterCep(@PathVariable("cep") String cep);
} 
