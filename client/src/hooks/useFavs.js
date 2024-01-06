import { useCallback, useEffect, useState } from "react";
import { httpGetALLFavCountries } from "./requests";

function useFavs() {
  const [favCountries, saveFavCountries] = useState([]);

  const getFavCountries = useCallback(async () => {
    const fetchedCoutries = await httpGetALLFavCountries();
    saveFavCountries(fetchedCoutries);
  });

  useEffect(() => {
    getFavCountries();
  }, []);

  return favCountries;
}

export default useFavs;
