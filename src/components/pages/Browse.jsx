import React from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  initializeCountries,
  search,
  favoriteCountriesSelector,
  setFavorites,
} from '../../features/countries/countriesSlice'

import BSCard from '../UIs/BSCard';
import { useState } from 'react';

function Browse() {

  const dispatch = useDispatch();
  const favoriteList = useSelector((state) =>state.countries.favoriteList);
  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);
  
  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

  //TODO: take idea from https://youtu.be/GuA0_Z1llYU

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
              action={()=>dispatch(addToFavorite(country.name.common))}
              //isFavorite={isFavorite}
              data={country}
              />
          ))}  
        </div>

    </div>
  );
};

export default Browse;
