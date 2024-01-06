import axios from "axios";

const API_URL = "http://localhost:3001";

export const httpGetALLFavCountries = async () => {
  const response = await axios.get(API_URL + "/favcountries");

  return response.data;
};
export const httpGetALLCountries = async () => {
  const response = await axios.get(API_URL + "/countries");

  return response.data;
};
