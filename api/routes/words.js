const express = require("express");
const router = express.Router();

const WordsController = require("../controllers/words");

router.post("/", WordsController.Create);
router.get("/", WordsController.List);
router.delete("/", WordsController.Delete);

module.exports = router;