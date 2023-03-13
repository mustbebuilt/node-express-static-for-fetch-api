const { ok } = require("assert");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("./public"));

app.get("/test", (req, res) => {
  res.send("hi");
});

app.listen(PORT);

 console.log(`Server is listening on port ${PORT}`);

module.exports = app;
