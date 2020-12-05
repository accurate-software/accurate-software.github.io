# Lost and Found

Essa aplicação fornece uma interface REST para cadastro de itens (achados ou perdidos), por uma pessoa.

## Como usar

Antes de tudo, é necessário ter algumas dependências instaladas.

### Dependências

- Java (>= 8)
- Maven
</br>

### Executando a api

```bash
$ cd backend
$ mvn spring-boot:run
```

### Executando os testes
```bash
$ cd backend
$ mvn test
```

### Endpoints

Há dois principais recursos na API: `person` e `item`. Esses são, respectivamente, uma pessoa cadastrada no sistema e seu(s) iten(s) achado(s) ou perdido(s).</br>

Endpoints para `person`: </br>

| Method | Endpoint                     | Descrição                                          |
|--------|------------------------------|----------------------------------------------------|
| GET    | /person?id=                  | Obtém uma pessoa pelo seu referente id.            |
| POST   | /person                      | Cria uma pessoa                                    |
| PATCH  | /person/`{id}`/lost-item     | Adiciona um novo item (perdido) por uma pessoa.    |
| PATCH  | /person`{id}`/found-item     | Adiciona um novo item (encontrado) por uma pessoa. |

</br>

### Requests </br>

POST /person

```json
  {
    "name": "Wellisson Gomes",
    "email": "wellisson@mail.com",
    "telephone": "83 9 8765-4321"
  }
```

PATCH /person/`{id}`/lost-item

```json
  {
    "name": "celular",
    "description": "Celular dourado, tem um trinco na tela",
    "category": "eletrônico",
    "city": "Campina Grande",
    "state": "paraiba"
  }
```

PATCH /person/`{id}`/found-item

De forma análoga a anterior.

Endpoints para `item`:

| Method | Endpoint                     | Descrição                                          |
|--------|------------------------------|----------------------------------------------------|
| GET    | /items?`filter`=             | Obtém todos os items presentes. Caso queira, é possível passar um filtro como parametro, mas é opcional. Os filtros possíveis são: `name`, `category`, `city`, `state` e `lost`. Um exemplo: /items?`category`= `eletrônico`. Retorna todos os items que são da categoria eletrônico|
| PUT   | /item/`{id}`                  | Edita as informações de um item existente.         |

</br>

### Requests </br>

PUT /item/`{id}`

```json
  {
    "name": "celular",
    "description": "Celular dourado, bloqueio de tela um cachorro",
    "category": "eletrônico",
    "city": "Campina Grande",
    "state": "paraiba"
  }
```