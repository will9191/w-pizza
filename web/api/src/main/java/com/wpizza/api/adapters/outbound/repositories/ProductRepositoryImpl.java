package com.wpizza.api.adapters.outbound.repositories;

import com.wpizza.api.adapters.outbound.entities.JpaProductEntity;
import com.wpizza.api.domain.product.Product;
import com.wpizza.api.domain.product.ProductRepository;
import com.wpizza.api.utils.mappers.ProductMapper;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;


public class ProductRepositoryImpl implements ProductRepository {
    private final JpaProductRepository jpaProductRepository;
    private final ProductMapper productMapper;

    public ProductRepositoryImpl(JpaProductRepository jpaProductRepository, ProductMapper productMapper) {
        this.jpaProductRepository = jpaProductRepository;
        this.productMapper = productMapper;
    }

    @Override
    public Product save(Product product) {
        JpaProductEntity jpaProductEntity = new JpaProductEntity(product);
        this.jpaProductRepository.save(jpaProductEntity);
        return this.productMapper.jpaToEntity(jpaProductEntity);
    }

    @Override
    public Optional<Product> findById(UUID id) {
        return Optional.empty();
    }

    @Override
    public List<Product> findAll() {
        return null;
    }

    @Override
    public void deleteById(UUID id) {

    }
}
