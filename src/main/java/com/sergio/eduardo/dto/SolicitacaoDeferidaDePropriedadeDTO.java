package com.sergio.eduardo.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.validation.constraints.Positive;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sergio.eduardo.entities.SolicitacaoDeferidaDePropriedade;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SolicitacaoDeferidaDePropriedadeDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	
	private Long id;				
	private Instant moment;	
			
	@Positive
	private Long cadastroDoDonoDoObjetoId;		
	private String nome;
	private String cpf;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	private Date dataDeNascimento;
	private String logradouro;
	private Long numero;
	private String complemento;
	private String bairro;
	private String localidade;
	private String uf;
	private String cep;
	
	@Setter(AccessLevel.NONE)
	private List<ObjetoQueEstaSemDonoDTO> objetos = new ArrayList<>();

	public SolicitacaoDeferidaDePropriedadeDTO() {
	}

	public SolicitacaoDeferidaDePropriedadeDTO(Long id, Instant moment, Long cadastroDoDonoDoObjetoId) {
		this.id = id;		
		this.moment = moment;
		this.cadastroDoDonoDoObjetoId = cadastroDoDonoDoObjetoId;
	}

	public SolicitacaoDeferidaDePropriedadeDTO(SolicitacaoDeferidaDePropriedade entity) {
		id = entity.getId();		
		moment =entity.getMoment();
		cadastroDoDonoDoObjetoId = entity.getCadastroDoDonoDoObjeto().getId();		
		nome = entity.getCadastroDoDonoDoObjeto().getNome();
		cpf = entity.getCadastroDoDonoDoObjeto().getCpf();
		dataDeNascimento = entity.getCadastroDoDonoDoObjeto().getDataDeNascimento();
		logradouro = entity.getCadastroDoDonoDoObjeto().getLogradouro();
		numero = entity.getCadastroDoDonoDoObjeto().getNumero();
		complemento = entity.getCadastroDoDonoDoObjeto().getComplemento();
		bairro = entity.getCadastroDoDonoDoObjeto().getBairro();
		localidade = entity.getCadastroDoDonoDoObjeto().getLocalidade();
		uf = entity.getCadastroDoDonoDoObjeto().getUf();
		cep = entity.getCadastroDoDonoDoObjeto().getCep();
			
		objetos = entity
						.getObjetos()
						.stream()
						.map(x -> new ObjetoQueEstaSemDonoDTO(x))
						.collect(Collectors.toList());		
	}

}
