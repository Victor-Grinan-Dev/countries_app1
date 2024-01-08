const express = require("express");

const { getALLCountries } = require("./countries.controller");

const countriesRouter = express.Router();

countriesRouter.get("/allCountries", getALLCountries);

module.exports = countriesRouter;
