const { allCountries } = require("../../models/countries.models");

const getALLCountries = (req, res) => {
  res.status(200).json(allCountries);
};

module.exports = { getALLCountries };
