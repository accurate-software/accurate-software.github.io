const { index } = require("../models/utils/PointSchema");
const axios = require("axios");
const Found = require("../models/Found");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const { my_name, cel, item_name, street, city, postalCode, status, latitude, longitude, maxDistance, categories } = req.query;

    let objFind = {};

    if (typeof my_name !== 'undefined') {      
      if (my_name.length > 0 || my_name != "") {
        objFind['my_name'] = my_name;
      }
    }

    if (typeof cel !== 'undefined') {     
      if (cel.length > 0 || cel != "") {
        objFind['cel'] = cel;
      }
    }

    if (typeof item_name !== 'undefined') {     
      if (item_name.length > 0 || item_name != "") {
         objFind['item_name'] = item_name;
      } 
    }

    if (typeof street !== 'undefined') {
      if (street.length > 0 || street != "") {
        objFind['street'] = street;
      } 
    }

    if (typeof city !== 'undefined') {
      if (city.length > 0 || city != "") {
        objFind['city'] = city;
      }      
    }

    if (typeof postalCode !== 'undefined') {      
      if (postalCode.length > 0 || postalCode != "") {
        objFind['postalCode'] = postalCode;
      } 
    }

    if (typeof status !== 'undefined') {
      if (status.length > 0 || status != "") {
        objFind['status'] = status;
      }       
    } 

    if (typeof latitude !== 'undefined' && typeof longitude !== 'undefined') {

      if (latitude.length > 0 || latitude != "" && longitude.length > 0 || longitude != "") {
          let local = {
            $near: {
                $geometry: {         
                  type: "Point",
                  coordinates: [longitude, latitude],
                },
                $maxDistance: (maxDistance * 1000) // maxDistance é calculado em metros
              },
          };
          objFind['location'] = local
      }      
    }

    if (typeof categories !== 'undefined') {
      if (categories.length > 0  || categories != "") {
        const categoriesArray = parseStringAsArray(categories);

        objFind['categories'] = categoriesArray;
      }       
    } 

    const founds = await Found.find(
      objFind
    ).catch((err) => {
      return res.status(404).json({
              msg: "Ocorreu um erro.",
              error: err
          });
    });
    

    return res.json({ founds });
  },
};
