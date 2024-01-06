const express = require("express");

const { getALLFavCountries } = require("./favCountriesController");

const planetsRouter = express.Router();

planetsRouter.get("/favcountries", getALLFavCountries);

module.exports = planetsRouter;
