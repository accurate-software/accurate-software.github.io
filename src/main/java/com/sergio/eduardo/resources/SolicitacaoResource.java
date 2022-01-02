package com.sergio.eduardo.resources;

import java.net.URI;
import java.time.Instant;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sergio.eduardo.dto.SolicitacaoDeferidaDePropriedadeDTO;
import com.sergio.eduardo.services.SolicitacaoService;

@RestController
@RequestMapping(value = "/solicitacaoDePropriedade")
public class SolicitacaoResource {

	@Autowired
	private SolicitacaoService solicitacaoService;
	
	@PostMapping
	public ResponseEntity<SolicitacaoDeferidaDePropriedadeDTO> insert(@Valid @RequestBody SolicitacaoDeferidaDePropriedadeDTO dto){ //@Valid
		dto = solicitacaoService.insert(dto);
		
		URI uri = ServletUriComponentsBuilder
						.fromCurrentRequest()
						.path("/{id}")
						.buildAndExpand(dto.getId())
						.toUri();
		
		return ResponseEntity
				.created(uri)
				.body(dto);		
	}	
		
		@GetMapping ("/page")
		public ResponseEntity<Page<SolicitacaoDeferidaDePropriedadeDTO>> findAllPageable( //findAllPageable

				@RequestParam(value = "min", defaultValue = "") String min,
				@RequestParam(value = "max", defaultValue = "") String max,

				@RequestParam(value = "page", defaultValue = "0") Integer page,
				@RequestParam(value = "linesPerPage", defaultValue = "0") Integer linesPerPage,
				@RequestParam(value = "orderBy", defaultValue = "moment") String orderBy,
				@RequestParam(value = "direction", defaultValue = "DESC") String direction

				){

			Instant minDate = ("".equals(min)) ? null : Instant.parse(min);
			Instant maxDate = ("".equals(max)) ? null : Instant.parse(max);

			if(linesPerPage == 0) {
				linesPerPage = Integer.MAX_VALUE;			
			}

			PageRequest pageRequest = PageRequest.of(
											page
											, linesPerPage
											, Direction.valueOf(direction)
											, orderBy
											);

			Page<SolicitacaoDeferidaDePropriedadeDTO> list = solicitacaoService.findByMoments(
													minDate
													, maxDate
													, pageRequest);
			return ResponseEntity.ok().body(list);			
				}

}
