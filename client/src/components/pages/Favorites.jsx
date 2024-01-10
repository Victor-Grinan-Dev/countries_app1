// import React, { Children } from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";

// import DraggingBoard from '../UIs/DraggingBoard';
// import FavCard from "../UIs/FavCard";

import World from "../UIs/World";

function Favorites() {
  // const countries = useSelector((state) => state.countries.countries);
  const favCountries = useSelector(
    (state) => state.countries.favoriteCountries
  );

  return (
    <div
      className="page"
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h2 style={{ color: "white" }}>Favorites</h2>
      <World favListCodes={favCountries} />

      {/* {console.log("inside favorites comp:", favCountries)}
      {countries &&
        favCountries &&
        countries.map((c) => {
          favCountries.map((fc) => {
            if (c.name.common.toLowerCase() === fc.toLowerCase()) {
              // console.log(c.name.common);
              // console.log(c.cca2);
              addToFavorite(c.cca2);
            }
            return;
          });
        })} */}
    </div>
  );
}

export default Favorites;
