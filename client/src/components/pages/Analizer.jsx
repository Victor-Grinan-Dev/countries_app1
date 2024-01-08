import React from "react";
import { httpGetFilterCountries } from "../../services/requests";

const Analizer = () => {
  const data = httpGetFilterCountries();
  return (
    <div>
      {/* routes to /filterCountries that doesnt exist !!!*/}
      <form action="/filterCountries" method="get">
        <button>get</button>
      </form>
    </div>
  );
};

export default Analizer;
