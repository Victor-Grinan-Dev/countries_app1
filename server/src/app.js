const express = require("express");
const cors = require("cors");
const favCountriesRouter = require("./routes/favCountries/favCountries.router");

const app = express();

/*** middlewear***/
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(favCountriesRouter);

module.exports = app;
