const express = require("express");

const { getALLCountries } = require("./countries.controller");

const countriesRouter = express.Router();

countriesRouter.get("/favcountries", getALLCountries);

module.exports = countriesRouter;
