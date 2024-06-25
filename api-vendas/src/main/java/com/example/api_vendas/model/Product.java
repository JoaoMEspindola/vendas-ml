package com.example.api_vendas.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "produtos")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "nome", nullable = false)
    private String name;

    @Column(name = "referencia", nullable = false)
    private String reference;

    @Column(name = "quantidade", nullable = false)
    private Number amount;

    @Column(name = "marca", nullable = false)
    private String brand;

    @Column(name = "imagem", nullable = false)
    private String image;

}
