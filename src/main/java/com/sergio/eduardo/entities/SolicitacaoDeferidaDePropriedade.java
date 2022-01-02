package com.sergio.eduardo.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@Table(name = "tb_solicitacao")
public class SolicitacaoDeferidaDePropriedade implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@EqualsAndHashCode.Include
	@GeneratedValue(strategy = GenerationType.IDENTITY)	
	private Long id;	
	private Instant moment;	
	
	@ManyToMany
	@Setter(AccessLevel.NONE)
	@JoinTable(name = "tb_solicitacao_objeto",
			joinColumns = @JoinColumn(name = "solicitacao_id"),
			inverseJoinColumns = @JoinColumn(name = "objeto_id")) 
	private Set<ObjetoQueEstaSemDono> objetos = new HashSet<>();

	public SolicitacaoDeferidaDePropriedade() {

	}

	@ManyToOne
	@JoinColumn(name = "cadastroDoDonoDoObjeto_id")
	private CadastroDoDonoDoObjeto cadastroDoDonoDoObjeto;
		
	public SolicitacaoDeferidaDePropriedade(Long id, Instant moment, CadastroDoDonoDoObjeto cadastroDoDonoDoObjeto) {

		this.id = id;		
		this.moment = moment;
		this.cadastroDoDonoDoObjeto = cadastroDoDonoDoObjeto;
	}
		
}
