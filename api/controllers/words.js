const Word = require("../models/word");

const WordsController = {
  Create: (req, res, next) => {
    const word = new Word(req.body);
    word.save((err) => {
      if (err) {
        res.status(401).json({ message: "Bad request" });
      } else {
        res.status(201).json({ message: "OK" });
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
  }
}

module.exports = WordsController;