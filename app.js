const { ok } = require("assert");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

app.listen(3000);

console.log("Express on 3000");

module.exports = app;
