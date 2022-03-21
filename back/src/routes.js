const { Router } = require("express");
const FoundController = require("./controller/FoundController");
const SearchController = require("./controller/SearchController");

const routes = Router();


//Routes
require("./swagger")
routes.get("/founds", FoundController.index);

routes.get("/founds/:_id", FoundController.index);

routes.post("/founds", FoundController.store);

/**
 * @swagger
 * /founds:
 *  put:
 *    tags: 
 *      - Founds
 *    description: Use para retornar um post especifico.
 *    content:
 *     application/json:
 *       schema:
 *        type: object
 *        properties:
 *          _id:
 *            type: integer
 *            description: Id da aplicação

 * 
 *    parameters:
 *      - in: path
 *        name: _id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id do post
 *        example: 123123
 *        value: 123123
 * 
 *      - in: path
 *        name: my_name
 *        schema:
 *          type: string
 *        required: false
 *        description: Nome do autor
 *        example: Smeagol
 *        value: Smeagol
 * 
 *      - in: path
 *        name: item_name
 *        schema:
 *          type: string
 *        required: false
 *        description: Titulo do post
 *        example: Cachorro desaparecido
 *        value: Cachorro desaparecido
 *
 *      - in: path
 *        name: cel
 *        schema:
 *          type: string
 *        required: false
 *        description: Número do celular
 *        example: (11) 98547-5489
 *        value: (11) 98547-5489
 
 *      - in: path
 *        name: description
 *        schema:
 *          type: string
 *        required: false
 *        description: Campo TEXT para descrever o post
 *        example: Perdi meu cachorro e gostaria de encontrar
 *        value: Perdi meu cachorro e gostaria de encontrar
 
 *      - in: path
 *        name: categories
 *        schema:
 *          type: string
 *        required: false
 *        description: Campo que serve para editar as categorias (Deve ser passado uma string)
 *        example: Animais, Casa, Pets
 *        value: Animais, Casa, Pets
 
 *      - in: path
 *        name: street
 *        schema:
 *          type: string
 *        required: false
 *        description: Nome da rua
 *        example: Rua Maria Paula
 *        value: Rua Maria Paula
 
 *      - in: path
 *        name: city
 *        schema:
 *          type: string
 *        required: false
 *        description: Nome da Cidade
 *        example: São Paulo
 *        value: São Paulo
 
 *      - in: path
 *        name: zipcode
 *        schema:
 *          type: string
 *        required: false
 *        description: Campo CEP (Esse campo no front, possui um botão de consulta de endereço usando a API do google)
 *        example: 01319001
 *        value: 01319001
 
 *      - in: path
 *        name: latitude
 *        schema:
 *          type: string
 *        required: false
 *        description: Campo necessário para busca em geolocalizao do mongoDB, fazendo consultas de posts semelhantes  em um raio de distancia passado
 *        example: '-21.5521808'
 *        value: '-21.5521808'
 
 *      - in: path
 *        name: longitude
 *        schema:
 *          type: string
 *        required: false
 *        description: Campo necessário para busca em geolocalizao do mongoDB, fazendo consultas em um raio de distancia passado
 *        example: '-42.6403861'
 *        value: '-42.6403861'
 
 *      - in: path
 *        name: status
 *        schema:
 *          type: integer
 *        required: false
 *        description: Altera o status do post (0 = perdido, 1 = encontrado)
 *        example: "0"
 *        value: "0"
 
 * 
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.put("/founds", FoundController.update);

/**
 * @swagger
 * /founds:
 *  delete:
 *    tags: 
 *      - Founds
 *    description: Use para retornar um post especifico.
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.delete("/founds/:_id", FoundController.destroy);

/**
 * @swagger
 * /search:
 *  get:
 *    tags: 
 *      - Search
 *    description: Use para retornar um post especifico.
 *    responses:
 *      '200':
 *        description: A successful response
 */
routes.get("/search", SearchController.index);

module.exports = routes;
