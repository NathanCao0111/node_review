require("dotenv").config();
require("./db").connect();

const express = require("express");
const app = express();
const { API_PORT } = process.env;
const route = require("./routes");

app.use(express.json());

route(app);

app.listen(API_PORT, () =>
  console.log(`App listening at http://localhost:${API_PORT}`)
);
