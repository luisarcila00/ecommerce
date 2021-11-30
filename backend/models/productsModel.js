const {Schema, model} = require("mongoose");
const productSchema = new Schema({
  sku: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  description: {type: String, required: true},
  sales_message: {type: String},
  price: {type: Number, required: true, default: 0},
  stock: {type: Number, required: true, default: 0},
  discount: {type: Number, default: 0},
  poster: {type: String},
  gallery: {type: String},
  category: Array,
  created_at: {type: Date, default: Date.now}
});

module.exports = model("Products", productSchema);