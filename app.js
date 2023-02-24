const { ok } = require("assert");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

app.get("/test", (req, res) => {
  res.send("hi");
});

app.listen(3000);

console.log("Express on 3000");

module.exports = app;
