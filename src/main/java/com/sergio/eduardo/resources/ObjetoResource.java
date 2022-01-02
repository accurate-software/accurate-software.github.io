package com.sergio.eduardo.resources;

import java.net.URI;
import java.time.Instant;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.sergio.eduardo.dto.ObjetoQueEstaSemDonoDTO;
import com.sergio.eduardo.services.ObjetoService;

@RestController
@RequestMapping(value = "/objetos")
public class ObjetoResource { 

	@Autowired
	private ObjetoService objetoService;
	
	@GetMapping(value = "/{name}/nameIgnoreCase")
	public ResponseEntity<List<ObjetoQueEstaSemDonoDTO>> findByPartesDoNome(@PathVariable String name) {
		List<ObjetoQueEstaSemDonoDTO> list = objetoService.findByName(name);
		return ResponseEntity.ok().body(list);
	}	
	
	@GetMapping(value = "/{bairroOndeObjetoFoiEncontrado}/bairroOndeObjetoFoiEncontrado")
	public ResponseEntity<List<ObjetoQueEstaSemDonoDTO>> findByBairro(@PathVariable String bairroOndeObjetoFoiEncontrado) {
		List<ObjetoQueEstaSemDonoDTO> list = objetoService.findByBairro(bairroOndeObjetoFoiEncontrado);
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping("/somenteObjetosPerdidosnameAsc")
	public ResponseEntity<List<ObjetoQueEstaSemDonoDTO>> findAll() {
		List<ObjetoQueEstaSemDonoDTO> list = objetoService.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping("/nomeDoObjetoAsc")
	public ResponseEntity<List<ObjetoQueEstaSemDonoDTO>> findAllNameAsc() {
		List<ObjetoQueEstaSemDonoDTO> list = objetoService.findAllNameAsc();
		return ResponseEntity.ok().body(list);
	}

	@PutMapping("/{id}/objetoAchado")
	public ResponseEntity<ObjetoQueEstaSemDonoDTO> setObjetoAchado(@PathVariable Long id){
		ObjetoQueEstaSemDonoDTO dto = objetoService.setObjetoAchado(id);
		return ResponseEntity.ok().body(dto);
	}

	@GetMapping(value = "/{id}")
	 public ResponseEntity<ObjetoQueEstaSemDonoDTO> findById(@PathVariable Long id) {
	 ObjetoQueEstaSemDonoDTO dto = objetoService.findById(id);
	 return ResponseEntity.ok().body(dto);
	 } 

	@GetMapping("/paginacaoComSeisParametros")
	public ResponseEntity<Page<ObjetoQueEstaSemDonoDTO>> findAllPageable(

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

		Page<ObjetoQueEstaSemDonoDTO> list = objetoService.findByMoments(
												minDate
												, maxDate
												, pageRequest);
		return ResponseEntity.ok().body(list);			
			}

	
	@PostMapping
	 public ResponseEntity<ObjetoQueEstaSemDonoDTO> insert(@RequestBody ObjetoQueEstaSemDonoDTO dto) {
		 dto = objetoService.insert(dto);
			 URI uri = ServletUriComponentsBuilder
			 .fromCurrentRequest()
			 .path("/{id}")
			 .buildAndExpand(dto.getId())
			 .toUri();
		 return ResponseEntity.created(uri).body(dto);
	 } 

	@PutMapping(value = "/{id}")
	 public ResponseEntity<ObjetoQueEstaSemDonoDTO> update(@PathVariable Long id, @RequestBody ObjetoQueEstaSemDonoDTO dto) {
		 
			dto = objetoService.update(id, dto);
		 return ResponseEntity.ok().body(dto);
	 } 

	
	@DeleteMapping(value = "/{id}")
	 public ResponseEntity<Void> delete(@PathVariable Long id) {
	 objetoService.delete(id);
	 return ResponseEntity.noContent().build();
	 } 
	
}
