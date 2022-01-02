package com.sergio.eduardo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sergio.eduardo.entities.CadastroDoDonoDoObjeto;

@Repository
public interface CadastroRepository extends JpaRepository<CadastroDoDonoDoObjeto, Long> {
	
	CadastroDoDonoDoObjeto findByCpf(String cpf); 

} 
