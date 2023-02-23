const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
  userID: {type: String, required: true},
  language: {type: String, required: true},
  english: {type: String, required: true},
  target: {type: String, required: true},
  past10: {type: Array, required: true},
  createdAt: {type: Date, default: Date.now}
});

const Word = mongoose.model("Word", WordSchema);

module.exports = Word;