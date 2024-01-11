const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const countriesRouter = require("./routes/countries/countries.router");
const favCountriesRouter = require("./routes/favCountries/favCountries.router");
const filterCountriesRouter = require("./routes/countriesFilter/countriesfilter.router");

const app = express();

/*** middlewear***/
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));

app.use(express.static(path.join(__dirname, "..", "public")));

//routes
app.use(countriesRouter);
app.use(favCountriesRouter);
app.use(filterCountriesRouter);

module.exports = app;
