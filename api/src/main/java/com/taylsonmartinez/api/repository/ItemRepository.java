package com.taylsonmartinez.api.repository;

import com.taylsonmartinez.api.enums.Categoria;
import com.taylsonmartinez.api.models.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface ItemRepository extends JpaRepository<Item, UUID> {

    String HAVERSINE_PART = "(6371 * acos(cos(radians(:latitude)) * cos(radians(s.latitude)) *" +
            " cos(radians(s.longitude) - radians(:longitude)) + sin(radians(:latitude)) * sin(radians(s.latitude))))";

    @Query(value = "SELECT * FROM Item s WHERE " + HAVERSINE_PART + " < :distancia ORDER BY "+ HAVERSINE_PART + " DESC",nativeQuery = true)
    List<Item> findItemWithInDistance(@Param("latitude") double latitude, @Param("longitude") double longitude, @Param("distancia") double distanceWithInKM );

    @Query(value = "SELECT * FROM Item s WHERE " + HAVERSINE_PART + " < :distancia and s.categoria = :categoria ORDER BY "+ HAVERSINE_PART + " DESC",nativeQuery = true)
    List<Item> findItemWithInDistanceAndCategory(@Param("latitude") double latitude, @Param("longitude") double longitude, @Param("distancia") double distanceWithInKM,  @Param("categoria") String categoria );

    @Query(value = "SELECT * FROM Item s WHERE s.categoria = :categoria",nativeQuery = true)
    List<Item> findItemWithCategory(@Param("categoria") String categoria );

}
