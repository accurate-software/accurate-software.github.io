package com.sergio.eduardo.entities;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@Table(name = "tb_objeto")
public class ObjetoQueEstaSemDono implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@EqualsAndHashCode.Include
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String descricaoDoObjeto;	
	private String bairroOndeObjetoFoiEncontrado; 	
	private	Instant	moment;	
	@Enumerated	(EnumType.STRING)
	private StatusDoObjeto	statusDoObjeto;
	@Column	(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	private	Instant updatedAt;
	
	public ObjetoQueEstaSemDono() {
		super();
	}

	public ObjetoQueEstaSemDono(Long id, String descricaoDoObjeto, String bairroOndeObjetoFoiEncontrado, Instant	moment, StatusDoObjeto	statusDoObjeto) {
		super();
		this.id = id;
		this.descricaoDoObjeto = descricaoDoObjeto;		
		this.bairroOndeObjetoFoiEncontrado = bairroOndeObjetoFoiEncontrado;
		this.moment = moment;
		this.statusDoObjeto = statusDoObjeto;		
	}
	
	@PreUpdate
	public void preUpdate() {
		updatedAt = Instant.now();
	}	

}
