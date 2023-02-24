const Word = require("../models/word");

const WordsController = {
  Create: (req, res, next) => {
    const word = new Word(req.body);
    word.save((err) => {
      if (err) {
        res.status(401).json({ message: "Bad request" });
      } else {
        res.status(201).json({ word: word });
      }
    });
  },
  List: (req, res, next) => {
    Word.find({}, (err, words) => {
      if (err) {
        res.status(500).json({ message: "connection error" });
      } else {
        res.status(200).json({ words: words });
      }
    })
  },
  Delete: (req, res, next) => {
    const deletedId = req.body.deletedId
    console.log(deletedId);
    Word.deleteOne({_id: deletedId}, (err) => {
      if (err) {
        res.status(400).json({ message: "Bad request" });
      } else {
        res.status(200).json({ message: deletedId });
      }
    })
  }
}

module.exports = WordsController;