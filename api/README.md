# api-achados-e-perdidos

> REST API with Swagger UI.

Overview
---
Desafio de realizar um desenvolvimento de uma API Rest para um site de achados e perfidos. Sua API deve conter as seguintes funcionalidades:

- Cadastro de um “Achado”/”Perdido”
- Atualização de histórico de um “Achado”/”Perdido”
- Busca com opção de filtros, como por exemplo: Categoria
- Relatório de cruzamento de informações “Achados”/”Perdidos”, dado um categoria e um raio.

## Desenvolvimento

Para fazer o calculo do raio do item foi utlizado a Fórmula de haversine:

![Haversine](https://wikimedia.org/api/rest_v1/media/math/render/svg/b0b263967261d2ef7ee26b85d6b454db17f9fe27)

No qual o usuario vai enviar pra API a longitude e latitude da sua posição atual e o número de Kms que ele quer efetuar a busca.

Para executar os testes foram utilizadas as coordenadas de:

- Jales -> Latitude: -20.2682, Longitude: -50.5489
- Votuporanga -> Latitude: -20.4203, Longitude: -49.9783
- SJRP -> Latitude: -20.8202, Longitude: -49.3797


> Note: Deve existir a possibilidade de utlizar alguma API do google maps que facilita o resultado.


Stacks
---
A seguir estão as principais tecnologias usadas no projeto:

- Spring Boot
- Java 11
- Apache Tomcat ( http server for the Spring boot app)
- Springfox
- Spring Data JPA
- Mysql Database
- Spring boot framework
- Swagger UI
- Build tool – maven



Executando o Projeto
---

1. Compile o projeto com o seguinte comando:
```
mvn clean install
```
2. Configure o mysql no application.properties.

3. O projeto é um Spring Boot Application, então você pode executar dentro do seu ide ou do terminal com o seguinte comando:

```
mvn spring-boot:run
```


> Note: não há interface do usuário para este aplicativo; ele só expõe endpoints REST

## Postman

* [API](https://www.getpostman.com/collections/13e894fa8f3be025a8c6)

Swagger
---
Para visualizar a documentação da interface do usuário do Swagger gerada, acesse: http://localhost:8080/swagger-ui.html

![Swagger](https://github.com/taylsonmartinez/accurate-software.github.io/blob/main/api/api-docs.png)



API Endpoints
---
![Controller](https://github.com/taylsonmartinez/accurate-software.github.io/blob/main/api/doc_swagger.png)
![Models](https://github.com/taylsonmartinez/accurate-software.github.io/blob/main/api/modelos.png)

![forthebadge](https://forthebadge.com/images/badges/made-with-java.svg)

