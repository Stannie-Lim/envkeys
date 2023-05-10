const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();

app.use(express.json());

// static middleware
app.use("/dist", express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  // API KEY FOR BACKEND
  console.log(process.env.THIS_API_KEY_IS_FOR_YOUR_BACKEND);

  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send({ error: err });
});

module.exports = app;
