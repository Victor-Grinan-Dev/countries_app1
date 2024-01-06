// import React, { Children } from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../../features/countries/countriesSlice";
import { setFavorites } from "../../features/countries/countriesSlice";
import { httpGetALLFavCountries } from "../../hooks/requests";
// import DraggingBoard from '../UIs/DraggingBoard';
// import FavCard from "../UIs/FavCard";

import World from "../UIs/World";
import { useEffect } from "react";
function Favorites() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const favCountries = useSelector(
    (state) => state.countries.favoriteCountries
  );
  useEffect(() => {
    httpGetALLFavCountries().then((fetched) => {
      console.log(fetched);
      dispatch(setFavorites(fetched));
    });
  }, []);

  return (
    <div
      className="page"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h2 style={{ color: "white" }}>Favorites</h2>
      {/* <World favListCodes={favCountries} /> */}

      {console.log("inside favorites comp:", favCountries)}
      {countries &&
        favCountries &&
        countries.map((c) => {
          favCountries.map((fc) => {
            if (c.name.common.toLowerCase() === fc.toLowerCase()) {
              // console.log(c.name.common);
              console.log(c.cca2);
              addToFavorite(c.cca2);
            }
          });
        })}
    </div>
  );
}

export default Favorites;
