package com.sergio.eduardo.repositories;

import java.time.Instant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sergio.eduardo.entities.SolicitacaoDeferidaDePropriedade;

@Repository
public interface SolicitacaoRepository extends JpaRepository<SolicitacaoDeferidaDePropriedade, Long> {

			@Query("SELECT obj FROM SolicitacaoDeferidaDePropriedade obj WHERE "					
													+ "(coalesce(:min, null) IS NULL OR obj.moment >= :min) "					
													+ "AND "
													+ "(coalesce(:max, null) IS NULL OR obj.moment <= :max)")													
			Page<SolicitacaoDeferidaDePropriedade> findByMoments(Instant min, Instant max, Pageable pageable);
		
}
