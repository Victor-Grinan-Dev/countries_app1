const { allCountries } = require("../../models/countries.models");

const getALLCountries = (req, res) => {
  console.log("from controller", allCountries.length);
  res.status(200).json(allCountries);
};

module.exports = { getALLCountries };
