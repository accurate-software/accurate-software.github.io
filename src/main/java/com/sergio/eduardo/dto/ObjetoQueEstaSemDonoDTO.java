package com.sergio.eduardo.dto;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.sergio.eduardo.entities.StatusDoObjeto;
import com.sergio.eduardo.entities.ObjetoQueEstaSemDono;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ObjetoQueEstaSemDonoDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String descricaoDoObjeto;	
	private String bairroOndeObjetoFoiEncontrado;
	private	Instant	moment;	
	@Enumerated	(EnumType.STRING)
	private StatusDoObjeto	status;
	
	public ObjetoQueEstaSemDonoDTO() {

	}

	public ObjetoQueEstaSemDonoDTO(Long id, String descricaoDoObjeto, String bairroOndeObjetoFoiEncontrado, Instant	moment, StatusDoObjeto	status) {

		this.id = id;
		this.descricaoDoObjeto = descricaoDoObjeto;		
		this.bairroOndeObjetoFoiEncontrado = bairroOndeObjetoFoiEncontrado;
		this.moment = moment;
		this.status = status;		
	}

	public ObjetoQueEstaSemDonoDTO(ObjetoQueEstaSemDono entity) {

		id = entity.getId();
		descricaoDoObjeto = entity.getDescricaoDoObjeto();
		bairroOndeObjetoFoiEncontrado = entity.getBairroOndeObjetoFoiEncontrado();
		moment = entity.getMoment();
		status = entity.getStatusDoObjeto();		
	}

}
