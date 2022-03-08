const axios = require("axios");
const Found = require("../models/Found");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {

  /*
  * Método de listagem de achados/perdidos
  */
  async index(req, res) {
    const founds = await Found.find(); //Retorna todos os achados/perdidos

    return res.json(founds);
  },

  /*
  * Método de inclusão de achados/perdidos
  */
  async store(req, res) {
    const { my_name, item_name, cel, description, categories, city, latitude, longitude } = req.body;

    const categoriesArray = parseStringAsArray(categories);

    const location = {
      city: city,
      type: "Point",
      coordinates: [longitude, latitude],
    };

    let found = await Found.create({
      my_name,
      item_name,
      cel,
      description,
      status: 0,
      categories: categoriesArray,
      location,
    });

    return res.json(found);
  },
 
  /*
  * Método para alterar um achados/perdidos
  */
  async update(req, res) {

    const { _id, my_name, item_name, cel, description, categories, city, latitude, longitude } = req.body; //Obtem objetos do payload
    
    await Found.findOne({ _id }) //Verifica se o id do usuario existe
     .catch((err) => {
        return res.status(404).json({
                msg: "Objeto não encontrado",
                error: err
            });
     })
        
    const categoriesArray = parseStringAsArray(categories); //Faz a tratativa da string de categories para objeto do mongoose

    const filter = { _id }; //Variavel para filtrar o id do achado/perdido

    const location = { //Tratativa para as coordenadas
      city: city,
      type: "Point",
      coordinates: [longitude, latitude]
    };
    
    const update = { //Objetos a serem alterados
      my_name,
      item_name,
      cel,
      description,
      categories: categoriesArray,
      location
    };

    let found = await Found.findOneAndUpdate(filter, update, { //Procura pelo achado/perdido e faz o update na linha
      new: true,
      upsert: true
    });

    return res.json(found);
  },
  
  /*
  * Método para remover um achados/perdidos
  */
  async destroy(req, res) {

    const { _id } = req.params

    //Verifica se o id do usuario existe
    let founds = await Found.findOne({ _id })
     .catch((err) => {
        return res.status(404).json({
                msg: "Objeto não encontrado",
                error: err
            });
     })
    
    if (founds) {

      await Found.deleteOne({ _id })
      .then((data) => {
        const msg = {
          msg: `O item foi deletado com sucesso!`
        };

        return res.json(msg)
      }); 

    } else {

      return res.status(404).json({
                msg: "Objeto não encontrado"
            });
    }       
  }
};
