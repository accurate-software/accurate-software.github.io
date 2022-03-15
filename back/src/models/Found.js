const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const FoundSchema = new mongoose.Schema({
  my_name: String,
  item_name: String,
  cel: String,
  description: String,
  status: Boolean,
  categories: [String],
  street: String,
  city: String,
  postalCode: String,
  location: {        
    type: PointSchema,
    index: "2dsphere",
  },
});

module.exports = mongoose.model("Found", FoundSchema);
