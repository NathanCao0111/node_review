require("dotenv").config();
require("./db").connect();

const express = require("express");
const app = express();
const { API_PORT } = process.env;

app.use(express.json());

app.listen(API_PORT, () =>
  console.log(`App listening at http://localhost:${API_PORT}`)
);
