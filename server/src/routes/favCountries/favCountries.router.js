const express = require("express");

const { getALLFavCountries } = require("./favCountries.controller");

const favCountriesRouter = express.Router();

favCountriesRouter.get("/favcountries", getALLFavCountries);

module.exports = favCountriesRouter;
