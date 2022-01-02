package com.sergio.eduardo.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AccessLevel;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@Table(name = "tb_cadastro")
public class CadastroDoDonoDoObjeto implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@EqualsAndHashCode.Include
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nome;		
	@Column(unique = true, length = 50)
	private String email;		
	@Column(unique = true)
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

	@JsonIgnore
	@Setter(AccessLevel.NONE)
	@OneToMany(mappedBy = "cadastroDoDonoDoObjeto")
	private List<SolicitacaoDeferidaDePropriedade> solicitacao = new ArrayList<>();

	public CadastroDoDonoDoObjeto() {
	}

	public CadastroDoDonoDoObjeto(String logradouro, Long numero, String complemento, String bairro, String localidade, String uf,
			String cep, String nome, String email, Date dataDeNascimento, String cpf) {
		this.logradouro = logradouro;
		this.numero = numero;
		this.complemento = complemento;
		this.bairro = bairro;
		this.localidade = localidade;
		this.uf = uf;
		this.cep = cep;
		this.nome = nome;
		this.email = email;
		this.dataDeNascimento = dataDeNascimento;
		this.cpf = cpf;
	}

}
