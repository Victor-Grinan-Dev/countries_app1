const { filteredCountries } = require("../../models/countriesFilter.model");

const filterCountries = (req, res) => {
  res.status(200).json(filteredCountries);
};

module.exports = { filterCountries };
