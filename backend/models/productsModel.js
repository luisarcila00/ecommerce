const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StatesSchema = new Schema({
  description: {type:String, required:true},
  username:{type:String},
  password:{type:String},
  sales_message:{type:String},
  profiles:{type:String},
  code: {type:String,unique:true, required:true},
  price: {type:Number, required:true},
  images: [String],
  category: Array,
  created_at: {type:Date, required:true, default:Date.now}
});

module.exports = mongoose.model("Products", StatesSchema);