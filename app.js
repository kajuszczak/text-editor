// server

const path = require('path');
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (require, res) => {
  res.sendFile("index.html", { root: "." });
});

const fs = require(fs);

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

