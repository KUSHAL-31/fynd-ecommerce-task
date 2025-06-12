const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  brand: String,
});

module.exports = mongoose.model("Product", ProductSchema);
