const express = require("express");

const { filterCountries } = require("./countriesFilter.controller");

const filterCountriesRouter = express.Router();

filterCountriesRouter.get("/countriesfilter", filterCountries);

module.exports = filterCountriesRouter;
