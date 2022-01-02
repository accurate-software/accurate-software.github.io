package com.sergio.eduardo.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sergio.eduardo.dto.ObjetoQueEstaSemDonoDTO;
import com.sergio.eduardo.dto.SolicitacaoDeferidaDePropriedadeDTO;
import com.sergio.eduardo.entities.CadastroDoDonoDoObjeto;
import com.sergio.eduardo.entities.ObjetoQueEstaSemDono;
import com.sergio.eduardo.entities.SolicitacaoDeferidaDePropriedade;
import com.sergio.eduardo.repositories.CadastroRepository;
import com.sergio.eduardo.repositories.ObjetoRepository;
import com.sergio.eduardo.repositories.SolicitacaoRepository;

@Service
public class SolicitacaoService {
	
	@Autowired 
	private SolicitacaoRepository solicitacaoRepository;
	
	@Autowired
	private ObjetoRepository objetoRepository;
			
	@Autowired
	private CadastroRepository cadastroRepository;
	
	@Transactional
	public SolicitacaoDeferidaDePropriedadeDTO insert(SolicitacaoDeferidaDePropriedadeDTO dto){
				
		SolicitacaoDeferidaDePropriedade solicitacao = new SolicitacaoDeferidaDePropriedade();
				
		solicitacao.setMoment(Instant.now());
														
		CadastroDoDonoDoObjeto cadastro = cadastroRepository.getOne(dto.getCadastroDoDonoDoObjetoId());
		solicitacao.setCadastroDoDonoDoObjeto(cadastro);
				
		for(ObjetoQueEstaSemDonoDTO p : dto.getObjetos()) {
			ObjetoQueEstaSemDono objeto = objetoRepository.getOne(p.getId());
			solicitacao.getObjetos().add(objeto);
		}
		
		solicitacao = solicitacaoRepository.save(solicitacao);
		return new SolicitacaoDeferidaDePropriedadeDTO(solicitacao);
	}

		@Transactional(readOnly = true)
		public Page<SolicitacaoDeferidaDePropriedadeDTO> findByMoments(
									Instant minDate
									, Instant maxDate
									, PageRequest pageRequest
									) {

			return solicitacaoRepository.findByMoments(
									minDate
									, maxDate
									, pageRequest
									).map(x -> new SolicitacaoDeferidaDePropriedadeDTO(x));
		}	

}
