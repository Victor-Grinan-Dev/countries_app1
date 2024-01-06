import axios from "axios";

const API_URL = "http://localhost:3001";

export const httpGetALLFavCountries = async () => {
  const response = await axios.get(API_URL + "/favcountries");

  //   const response = await fetch(API_URL + "/favcountries");
  // return await response.json()

  return response.data;
};
