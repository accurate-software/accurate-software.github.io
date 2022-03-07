package br.com.accurate.achadoperdido.repository;


import br.com.accurate.achadoperdido.modelo.Item;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ItemRepository extends JpaRepository<Item, Long> {
    static final String HAVERSINE_PART = "(6371 * acos(cos(radians(:latitude)) * cos(radians(i.local.latitude)) * cos(radians(i.local.longitude) - radians(:longitude)) + sin(radians(:latitude)) * sin(radians(i.local.latitude))))";

    public Page<Item> findByCategoriaId(Long categoria, Pageable paginacao);

    @Query("SELECT i FROM Item i WHERE i.categoria.id = :categoria AND " + HAVERSINE_PART + "<= :raio")
    public Page<Item> buscarPorCategoriaLocalizacaoERaio(@Param("categoria") Long categoria, @Param("raio") Double raio, @Param("latitude") Double latitude, @Param("longitude") Double longitude, Pageable pageable);


}


