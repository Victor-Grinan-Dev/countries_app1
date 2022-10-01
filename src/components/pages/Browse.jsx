import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  search,
} from '../../features/countries/countriesSlice'

import BSCard from '../UIs/BSCard';

function Browse() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);

  const  countriesFilter = countries.filter((res) => {
    return res.name.common.toLowerCase().includes(searchInput.toLowerCase());
  });

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }
  
  return (
    <div className="browse page">
      
      <div className="search" >
        <input type="text" className="searchImput" placeholder="🔍" onChange={(e) => dispatch(search(e.target.value))} />
      </div>

      <div className="showCards" 
      style={{
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row"
      }}
      >
          {countriesFilter.map((country, index) => (
              
              <BSCard 
              key={index}
              commonName={country.name.common} 
              officialName={country.name.official}
              population={country.population}
              flag={country.flags.png}
              capital={country.capital}
              currencies={country.currencies}
              languages={country.languages}
              url={`${country.name.common}`}
              action={()=>dispatch(addToFavorite(country))}
              //isFavorite={isFavorite}
              data={country}
              />
          ))}  
        </div>

    </div>
  );
};

export default Browse;
