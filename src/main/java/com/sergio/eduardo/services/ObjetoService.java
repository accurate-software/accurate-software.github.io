package com.sergio.eduardo.services;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sergio.eduardo.dto.ObjetoQueEstaSemDonoDTO;
import com.sergio.eduardo.entities.ObjetoQueEstaSemDono;
import com.sergio.eduardo.entities.StatusDoObjeto;
import com.sergio.eduardo.repositories.ObjetoRepository;
import com.sergio.eduardo.services.exceptions.DatabaseException;
import com.sergio.eduardo.services.exceptions.ResourceNotFoundException;

@Service
public class ObjetoService {
	
	@Autowired 
	private ObjetoRepository objetoRepository;

	@Transactional(readOnly = true)
	public List<ObjetoQueEstaSemDonoDTO> findByName(String name){
		List<ObjetoQueEstaSemDono> list = objetoRepository.findByDescricaoDoObjetoContainingIgnoreCase(name); 
		
		if (list.size() == 0) {
			throw new EntityNotFoundException();
	    } else {
		
		return list.stream().map(x-> new ObjetoQueEstaSemDonoDTO(x)).collect(Collectors.toList());		
	    }
	
	}
	
	@Transactional(readOnly = true)
	public List<ObjetoQueEstaSemDonoDTO> findByBairro(String bairroOndeObjetoFoiEncontrado){
		List<ObjetoQueEstaSemDono> list = objetoRepository.findByBairroOndeObjetoFoiEncontradoContainingIgnoreCase(bairroOndeObjetoFoiEncontrado); 
		
		if (list.size() == 0) {
			throw new EntityNotFoundException();
	    } else {
		
		return list.stream().map(x-> new ObjetoQueEstaSemDonoDTO(x)).collect(Collectors.toList());		
	    }
	
	}
		
	@Transactional(readOnly = true)
	public List<ObjetoQueEstaSemDonoDTO> findAll(){
		List<ObjetoQueEstaSemDono> list = objetoRepository.findOrdersWhithProducts(); 
		return list.stream().map(x-> new ObjetoQueEstaSemDonoDTO(x)).collect(Collectors.toList());		
	}
	
	@Transactional(readOnly = true)
	public List<ObjetoQueEstaSemDonoDTO> findAllNameAsc(){
		List<ObjetoQueEstaSemDono> list = objetoRepository.findAllByOrderByDescricaoDoObjetoAsc();
		return list.stream().map(x-> new ObjetoQueEstaSemDonoDTO(x)).collect(Collectors.toList());		
	}

	@Transactional
	public ObjetoQueEstaSemDonoDTO setObjetoAchado(Long id){
		ObjetoQueEstaSemDono objeto = objetoRepository.getOne(id);
		objeto.setStatusDoObjeto(StatusDoObjeto.ACHADO);
		return new ObjetoQueEstaSemDonoDTO(objeto);		
	}

	@Transactional(readOnly = true)
	 public ObjetoQueEstaSemDonoDTO findById(Long id) {
	 Optional<ObjetoQueEstaSemDono> obj = objetoRepository.findById(id);
	 ObjetoQueEstaSemDono entity = obj
	 .orElseThrow(() -> new ResourceNotFoundException("Não encontramos a entidade"));
			 return new ObjetoQueEstaSemDonoDTO(entity);
			 } 

	@Transactional(readOnly = true)
	public Page<ObjetoQueEstaSemDonoDTO> findByMoments(
								Instant minDate
								, Instant maxDate
								, PageRequest pageRequest
								) {

		return objetoRepository.findByMoments(
								minDate
								, maxDate
								, pageRequest
								).map(x -> new ObjetoQueEstaSemDonoDTO(x));
	}	


	@Transactional
	 public ObjetoQueEstaSemDonoDTO insert(ObjetoQueEstaSemDonoDTO dto) {
		 ObjetoQueEstaSemDono entity = new ObjetoQueEstaSemDono();
		 
		 entity.setDescricaoDoObjeto(dto.getDescricaoDoObjeto());
		 entity.setBairroOndeObjetoFoiEncontrado(dto.getBairroOndeObjetoFoiEncontrado());
		 entity.setMoment(Instant.now());
		 entity.setStatusDoObjeto(StatusDoObjeto.PERDIDO);
		 		 
		 entity = objetoRepository.save(entity);
		 return new ObjetoQueEstaSemDonoDTO(entity);
	 }

	@Transactional
	 public ObjetoQueEstaSemDonoDTO update(Long id, ObjetoQueEstaSemDonoDTO dto) {
		 try {
		 ObjetoQueEstaSemDono entity = objetoRepository.getOne(id);
		 
			 entity.setDescricaoDoObjeto(dto.getDescricaoDoObjeto());
			 entity.setBairroOndeObjetoFoiEncontrado(dto.getBairroOndeObjetoFoiEncontrado());
			 			 
			 entity = objetoRepository.save(entity);
			 return new ObjetoQueEstaSemDonoDTO(entity);
			}
			 catch (EntityNotFoundException e) {
			 throw new ResourceNotFoundException("Não encontramos o id " + id);
		 }
	 } 

	public void delete(Long id) {
		 try {
			 objetoRepository.deleteById(id);
		 	}
			 catch (EmptyResultDataAccessException e) {
			 throw new ResourceNotFoundException("Não encontramos o id " + id);
			}
			 catch (DataIntegrityViolationException e) {
			 throw new DatabaseException("Erro de integridade do bco de dados!");
			}
	} 

}
