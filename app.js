// server

const path = require('path');
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "." });
});

app.use(express.static(__dirname + '/public/'));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

// const dictstring = JSON.stringify(dict);

// const fs = require('fs');
// fs.writeFile('file.json', dictstring);

