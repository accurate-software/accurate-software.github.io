const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema({
  city: {
    type: 'string',
    require: true,
  },
  type: {
    type: String,
    enum: ["Point"],
    require: true,
  },
  coordinates: {
    type: [Number],
    require: true,
  },
});

module.exports = PointSchema;
