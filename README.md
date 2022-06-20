# Teste backend - API Rest Achados/Perdidos


- Implementado com NodeJS e Sql Server
- Tem a função de busca/listagem de achados perdidos e inclusão de um novo achado/perdido
- Na busca, é possível filtrar por query string por categoria ou nome, os parametros são opcionais. Caso nao informado ele exibe todos sem filtro.
- Contém um arquivo banco.sql com os códigos de criação das tabelas e alguns insert de exemplos de dado
- Apresenta tratamento de excessão
- Executar npm install para instalar as dependencias de pacote do nodejs. Nao foi incluido a pasta node_modules para ficar mais leve, pois a mesma é criada com a execução do comando npm install.
- O código da aplicação está no arquivo index.js

## Para consumo da api


### Busca de achados perdidos:

- Método: GET
- URL sem filtros: http://localhost:3000/buscar
- URL com filtros: http://localhost:3000/buscar?nome=azul&categoria=2
- retorno: dados do achado/perdido
- Observação: no filtro de categoria deve ser informado id categoria (1 documento, 2 celulares, 3 outros, 4 chave)


### Inserção de um novo achado perdidos:

- Método: POST
- URL: http://localhost:3000/cadastrarAchadoPerdido
- Body exemplo:  {
        "nome": "Celular Samsung Roxo  ",
        "descricao": "Celular Samsung Roxo do modelo S20 ",
        "categoria": 2,
        "devolvido": 0
}
- Retorno: ID gerado do novo achado/perdido