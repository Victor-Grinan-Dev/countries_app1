const { favCountries } = require("../../models/favCountries.models");

const getALLFavCountries = (req, res) => {
  res.status(200).json(favCountries);
};

module.exports = { getALLFavCountries };
