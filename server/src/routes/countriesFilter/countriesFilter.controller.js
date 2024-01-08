const { filteredCountries } = require("../../models/countriesFilter.model");

const filterCountries = (req, res) => {
  res.json(filteredCountries);
};

module.exports = { filterCountries };
