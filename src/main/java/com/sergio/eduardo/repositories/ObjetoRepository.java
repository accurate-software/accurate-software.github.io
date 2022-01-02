package com.sergio.eduardo.repositories;

import java.time.Instant;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sergio.eduardo.entities.ObjetoQueEstaSemDono;

@Repository
public interface ObjetoRepository extends JpaRepository<ObjetoQueEstaSemDono, Long> {
	
	List<ObjetoQueEstaSemDono> findByDescricaoDoObjetoContainingIgnoreCase(String name);
	
	List<ObjetoQueEstaSemDono> findByBairroOndeObjetoFoiEncontradoContainingIgnoreCase(String bairroOndeObjetoFoiEncontrado);
	
	List<ObjetoQueEstaSemDono> findAllByOrderByDescricaoDoObjetoAsc();

	@Query("SELECT DISTINCT obj FROM ObjetoQueEstaSemDono obj "
			+ "WHERE obj.statusDoObjeto = 'PERDIDO' ORDER BY obj.descricaoDoObjeto ASC")
	List<ObjetoQueEstaSemDono> findOrdersWhithProducts();
	
	@Query("SELECT obj FROM ObjetoQueEstaSemDono obj WHERE "					
			+ "(coalesce(:min, null) IS NULL OR obj.moment >= :min) "					
			+ "AND "
			+ "(coalesce(:max, null) IS NULL OR obj.moment <= :max)")													
		Page<ObjetoQueEstaSemDono> findByMoments(Instant min, Instant max, Pageable pageable);
		
}
