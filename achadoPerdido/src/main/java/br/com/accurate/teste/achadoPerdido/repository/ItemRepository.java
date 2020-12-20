package br.com.accurate.teste.achadoPerdido.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.accurate.teste.achadoPerdido.models.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long>{

	@Query("SELECT i FROM Item i WHERE i.categoria LIKE %?1%")
	List<Item> findItemByCategoria(String categoria);
	
	@Query("SELECT i FROM Item i WHERE i.categoria LIKE %?1% AND i.localizacao LIKE %?2%")
	List<Item> findItemByCategoriaAndLocalzacao(String categoria, String localizacao);
	
}
