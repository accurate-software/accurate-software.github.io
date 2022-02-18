package com.taylsonmartinez.api.models;

import com.taylsonmartinez.api.enums.Categoria;
import com.taylsonmartinez.api.enums.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table( name = "item" )
public class Item implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID id;

    @Column(nullable = false, length = 70)
    private String nome;

    @Column(name = "categoria")
    @Enumerated(value = EnumType.STRING)
    private Categoria categoria;

    @Column(name = "status")
    @Enumerated(value = EnumType.STRING)
    private Status status;

    @Column(nullable = true, length = 150)
    private String responsavel;

    @Column(nullable = false)
    private double latitude;

    @Column(nullable = false)
    private double longitude;
}
