package com.taylsonmartinez.api.services;

import com.taylsonmartinez.api.dtos.FiltroDTO;
import com.taylsonmartinez.api.exception.RegraNegocioException;
import com.taylsonmartinez.api.models.Item;
import com.taylsonmartinez.api.repository.ItemRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ObjectUtils;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ItemService {

    final ItemRepository repository;

    public ItemService(ItemRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Item save(Item item) {
        return repository.save(item);
    }

    public List<Item> findAll() {
        return repository.findAll();
    }

    public Optional<Item> findById(UUID id) {
        return Optional.ofNullable(repository.findById(id).orElseThrow(() -> new RegraNegocioException("Código de Item inválido.")
        ));
    }

    @Transactional
    public void delete(Item item) {
        repository.delete(item);
    }

    @Transactional
    public List<Item> findFilter(FiltroDTO filtro){
        if (ObjectUtils.isEmpty(filtro.getCategoria()))
            return repository.findItemWithInDistance(filtro.getLatitude(), filtro.getLongitude(), filtro.getDistancia());
        return repository.findItemWithInDistanceAndCategory(filtro.getLatitude(), filtro.getLongitude(), filtro.getDistancia(), filtro.getCategoria().toString());
    }

}
