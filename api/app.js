const express = require('express');
const path = require("path");
const logger = require("morgan");
const fileUpload = require("express-fileupload");

const app = express();
app.use(fileUpload());

app.use(express.json());

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("It works");
  console.log(res);
});

module.exports = app;