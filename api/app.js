const express = require('express');
const cors = require("cors");
const path = require("path");
const logger = require("morgan");
const fileUpload = require("express-fileupload");

const usersRouter = require("./routes/users");
const wordsRouter = require("./routes/words");

const app = express();
app.use(fileUpload());

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("It works");
  console.log(res);
});

app.use("/users", usersRouter);
app.use("/words", wordsRouter);

module.exports = app;