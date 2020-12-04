package com.desafio.achadoseperdidos.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@Entity
public class Person {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
    private String telephone;
    @OneToMany
    private Set<Item> lostItems;
    @OneToMany
    private Set<Item> foundItems;

    public Person() {}


    public Person(Long id, String name, String email, String telephone) {
        this(name, email, telephone);
        this.id = id;
    }

    public Person(String name, String email, String telephone) {
        this.name = name;
        this.email = email;
        this.telephone = telephone;
        this.lostItems = new HashSet<>();
        this.foundItems = new HashSet<>();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return Objects.equals(id, person.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
