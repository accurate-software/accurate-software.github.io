const { index } = require("../models/utils/PointSchema");
const axios = require("axios");
const Found = require("../models/Found");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    const { item_name, city, status, latitude, longitude, categories } = req.query;

    const categoriesArray = parseStringAsArray(categories);

    const founds = await Found.find({
      item_name,
      status,
      categories: {
        $in: categoriesArray,
      },
      location: {
        $near: {
          $geometry: {
            city: city,
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({ founds });
  },
};
