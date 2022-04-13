# Achados e Perdidos Accurate


## Api REST Swagger

**https://localhost:7146/swagger/index.html**
- Api REST para ser implemntada em sistema de achados e perdidos. 
## Como utilizar
>>>>>> ###       Schema - Cadastro

O Schema Cadastro tem como objetivo realizar um cadastro novo, visualizar com filtros ou não e editar sempre que precisar. 
Abaixo se encontra o manual para melhor experiência!  

> ### **`[POST]/api/Cadstro`** - Criar cadastro de cliente
Exemplo do json de cadastro abaixo:
```json
[
  {
    "id": 0,
    "nomePessoa": "string",
    "documentoPessoa": 0,
    "descricaoObjeto": "string",
    "telefone": 0,
    "categoria": {
      "categoriaId": 0,
      "nome": "string"
    }
  }
]
```

### Observação dos campos da entidade Cliente `[POST]`

- `id:` Não requerido pois, é um campo Indentity.
- `categoriaId:` Não requerido pois, é um campo Indentity.

 - **Os demais campos são obrigatórios**

> ### **`[GET]/api/Cadastro`** - Consulta de clientes

Para que você consiga consultar os clientes criamos duas formas para você. Exemplo 1 e 2:

1. *`/api/Cadastro`*
 - Basta execultar/enviar request e será exibido todos os clientes cadastrados.

2. *`/api/Cadastro/{id}`*
 - Informe o `id` e será exibido o cliente cadastrado com base no `id` do parâmetro.

 > ### **`[PUT]/api/Cadastro/{id}`** - Atualização cadastro clientes

 - Informe o `id` do cliente cadastrado como parâmetros e no corpo do request o json com as alterações. Exemplo abaixo: 

 ```json
{
  "id": 0,
  "nomePessoa": "string",
  "documentoPessoa": 0,
  "descricaoObjeto": "string",
  "telefone": 0,
  "categoria": {
    "categoriaId": 0,
    "nome": "string"
  }
}

OBS: Obrigatório passar id no corpo do json. Exemplo: "id": 0
 ```

>>>>>> ###       Schema - Categoria

O schema Categoria tem por finalidade consultar as cotegorias existentes e editar as mesma quando necessário. Abaixo se encontra o manual para melhor experiência!

> ### **`[POST]/api/Categoria`** - Criar categoria
Exemplo abaixo de como pode ser feito o json:
```json
{
  "categoriaId": 0,
  "nome": "string"
}
```
### Observação dos campos da entidade Categoria `[POST]`

- `categoriaId:` Não requerido pois, é um campo Indentity.

 - **Os demais campos são obrigatórios**

>### **`[GET]/api/Categoria`** - Consulta de clientes

Para que você consiga consultar as Categoria criadas duas formas para você. Exemplo 1 e 2:

1. *`/api/Categoria`*
 - Basta execultar/enviar request e será exibido todos as categoria cadastrados.

2. *`/api/Categoria/{id}`*
 - Informe o `id` e será exibido a categoria cadastrado com base no `id` do parâmetro.

 >>>>>> ###       Schema - Historico
O Schema Historico tem suas particularidades e funções diversas.

1. Visualizar informações do cliente cadastrado como: Dados de cadastro, Status do objeto/item perdido, data do cadastro e cordenadas de onde perdeu o objeto/item com base no local aproximado(cordenadas).

>### **`1.[GET]/api/Historico`** - Consultar Historico
Visualize todos os historicos cadastrados fazendo uso do > `[GET]/api/Historico` sem preencher os parâmetros, apenas enviar a requisição `sem preenchimento`.

>### **`2.[GET]/api/Historico`** - Consultar Historico
Para visualizar todos os clientes cadastrados com filtro, levando em consideração o raio em km e localização aproximada(latitude e logitude) você irá precisar utilizar os paramentros abaixo: 

Parâmetros de request
```
curl -X 'GET' \
  'https://localhost:7146/api/Historico?categoriaPayload.Nome=Vestuario1&Raio=10&Latitude=-23.5666084&Longitude=-46.762992' \
  -H 'accept: text/plain'

```
- Parâmetros: `Categoria: `*Vestuario1* | `Raio: `*10** | `Latitude: `*-23.5666084* | `Longitude: `*-46.762992*


> ### **`[GET]/api/Historico/{id}`** - Consultar Historico por fitro

- Informe o `id` e será exibido o Historico filtrado. Exemplo abaixo:

Parâmetros de request
```
curl -X 'GET' \
  'https://localhost:7146/api/Historico/{4}' \
  -H 'accept: text/plain'
```
- Parâmetros: `{4}`

> ### **`[PUT]/api/Historico/{id}`** - Atualização do Historico 

 - Informe o `id` do Historico cadastrado como parâmetro e no corpo do request o json com as alterações. Exemplo abaixo: 

 ```json
{
  "historicoId": 0,
  "produtoHistorico": {
    "id": 0,
    "nomePessoa": "string",
    "documentoPessoa": 0,
    "descricaoObjeto": "string",
    "telefone": 0,
    "categoria": {
      "categoriaId": 0,
      "nome": "string"
    }
  },
  "statusProdutoHistorico": {
    "statusProdutoId": 0,
    "descricaoTipo": "string"
  },
  "dataRecebimento": "2022-04-11T03:31:19.543Z",
  "latitude": 0,
  "longitude": 0
}
 ```

>>>>>> ###       Schema - StatusProduto
O Schema StatusProduto será muito útil para você criar, visualizar e editar os status.
> ### **`[POST]/api/StatusProduto/{id}`** - Criar StatusProduto
Exemplo abaixo de como pode ser feito o json:

```json
{
  "statusProdutoId": 0,
  "descricaoTipo": "string"
}
```
### Observação dos campos da entidade StatusProduto `[POST]`

- `statusProdutoId:` Não requerido pois, é um campo Indentity.

 - **Os demais campos são obrigatórios**

> ### **`[GET]/api/StatusProduto`** - Consulta StatusProduto

Para que você consiga consultar os StatusProduto criados criamos duas formas para você. Exemplo 1 e 2:

1. `/api/StatusProduto`
 - Basta execultar/enviar request e será exibido todos os StatusProduto cadastrados.

2. `/api/StatusProduto/{id}`
 - Informe o `id` e será exibido o StatusProduto cadastrados.

> ### **`[PUT]/api/StatusProduto/{id}`** - Atualização do StatusProduto 

- Informe o `id` do status cadastrado como parâmetro e no corpo do request o json com as alterações. Exemplo abaixo: 

```json
{
  "statusProdutoId": 0,
  "descricaoTipo": "string"
}
```


 






