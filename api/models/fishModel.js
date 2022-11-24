const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fishSchema = new Schema({
  name: {
    type: String,
    required: "Enter product name",
  },
  scientific_name: {
    type: String,
  },
  size_range: {
    type: String,
  },
  biology: {
    type: String,
  },
  environment: {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Fish", fishSchema);
