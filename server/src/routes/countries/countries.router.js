const express = require("express");

const { getALLCountries } = require("./countries.controller");

const countriesRouter = express.Router();

countriesRouter.get("/allcountries", getALLCountries);

module.exports = countriesRouter;
