import axios from "axios";

const API_URL = "http://localhost:3001";

export const httpGetALLCountries = async () => {
  const response = await axios.get(API_URL + "/countries");
  return response.data;
};

export const httpGetALLFavCountries = async () => {
  const response = await axios.get(API_URL + "/favcountries");
  return response.data;
};

export const httpGetFilterCountries = async () => {
  const response = await axios.get(API_URL + "/countriesfilter");
  return response.data;
};
