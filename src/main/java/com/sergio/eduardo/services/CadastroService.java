package com.sergio.eduardo.services;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sergio.eduardo.entities.CadastroDoDonoDoObjeto;
import com.sergio.eduardo.repositories.CadastroRepository;


@Service
public class CadastroService {

	@Autowired
	private CadastroRepository cadastroRepository;

	public CadastroDoDonoDoObjeto save(CadastroDoDonoDoObjeto cadastro) {
		cadastroRepository.save(cadastro);
		return cadastro;
	}
	
	public CadastroDoDonoDoObjeto findCPF(String cpf) {
		
	    CadastroDoDonoDoObjeto obj = cadastroRepository.findByCpf(cpf); 
	    
	    if (obj == null) {			
			throw new EntityNotFoundException();
		}	    
	    return obj;	    
	}
	
}
