# Achados&Perdidos

## _Documentação da aplicação_

Achados&Perdidos é uma aplicação para publicação de posts de itens perdidos e encontrados,
um usuário pode publicar um item que encontrou ou perdeu com seus dados para facilitar o contato com
outros usuário da plataforma.

> Note: Ao encontrar um item perdido ou entregar um item achado ao seu dono, pode excluir a publicação.

---

## Tecnologias

##### _Back-end_

- node.js v16.14.0
- express v4.7.1
- mongoose v6
- swagger-ui-express v4.3.0
- GIT

##### _Front-end_

- Vue.js v2.6.14
- bootstrap v4.5.3
- vue-multiselect v2.1.6
- axios v0.21.4
- Google API
- GIT

## Instalação

Primeiro crie uma pasta em um diretorio desejado, e usar o comando abaixo

#

```sh
git clone https://github.com/LyndonMarques/accurate-software.github.io.git
```

##### _Back-end_

#

```sh
cd accurate-software.github.io/back
npm install
npm run dev
```

##### _Front-end_

#

```sh
cd accurate-software.github.io/front
npm install
yarn serve
```

---

## Usabilidade

##### _Back-end_

#

> Note: `Aplicação possui documentação a parte, criada no Swagger:` [Swagger Achados&Perdidos](http://localhost:3333/api-docs/)

O proprio swagger consegue fazer as requisições, mas caso queira utilizar uma ferramenta diferente para visualizar os dados, sugiro o Insomina ou Postman.

##### _Front-end_

#

- Pagina inical com listagem completa de todas as postagens feitas.
- [Botão Nova Publicação] - Publique um post com os dados requeridos no cadastro.
- [Tela de cadastro] - Insira os dados requeridos e filtre os campos referente ao local da perda do item no input 'Endereço' inserindo um nome de rua válido que será buscado na API do Google Maps, escolha algumas categorias referente a sua publicação e click em Salvar.
- [Botão Editar] - O formulário de edição possui o mesmo componente do formulário de incluir.
- [Botão Busca Avançada] - A busca avaçanda permite o usuário filtrar publicações utilizando os mesmos campos do form de Incluir/Editar, com apenas uma peculiaridade, no modal de busca, o usuário consegue filtrar os posts em uma área especifica de até 10.000Km, posts semelhantes ao que foi buscado em uma area de 10.000Km serão exibidos ao final da requisição.
- Delete sua postagem

> Note: `Na Busca Avançada, para que haja uma precisão na busca, é necessário preencher os campos latitude e longitude com precisão, por isso é necessário utilizar a busca do nome da rua com a API do Google Maps, que irá retornar os dados precisos para a requisição.`

---

##### Nota do autor

_Se posso fazer um, o que me impede de fazer todos?!_

###### By: Lyndon Marques

###### 19/03/2022

#

#

#

#
