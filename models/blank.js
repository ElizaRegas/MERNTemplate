const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blankSchema = new Schema({
  // title: { type: String, required: true },
  // author: { type: String, required: true },
  // synopsis: String,
  // date: { type: Date, default: Date.now }
});

const Blank = mongoose.model("Blank", blankSchema);

module.exports = Blank;