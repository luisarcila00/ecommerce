const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const StatesSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  }
});

module.exports = mongoose.model("Categories", StatesSchema);