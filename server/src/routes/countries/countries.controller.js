const { countries } = require("../../models/countries.models");

const getALLCountries = (req, res) => {
  res.status(200).json(countries);
};

module.exports = { getALLCountries };
