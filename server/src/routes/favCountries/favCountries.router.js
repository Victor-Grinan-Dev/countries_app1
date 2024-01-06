const express = require("express");

const { getALLFavCountries } = require("./favCountriesController");

const favCountriesRouter = express.Router();

favCountriesRouter.get("/favcountries", getALLFavCountries);

module.exports = favCountriesRouter;
