const express = require("express");
const cors = require("cors");
const favCountriesRouter = require("./routes/favCountries/favCountries.router");
const filterCountriesRouter = require("./routes/countriesFilter/countriesFilter.router");

const app = express();

/*** middlewear***/
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(favCountriesRouter);
app.use(filterCountriesRouter);

module.exports = app;
