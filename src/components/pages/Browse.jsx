import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import {
  initializeCountries,
  search,
} from '../../features/countries/countriesSlice'

import BSCard from '../UIs/BSCard';

const countriesApi = "https://restcountries.com/v3.1/all";

function Browse() {

  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);
  //https://youtu.be/GuA0_Z1llYU
  const countriesFilter = countries;
  /*
  .filter((res) => {
    res.name.common = res.name.common;
    return res.name.common.toLowerCase().includes(searchInput);
  });
  */

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div className="browse">
      
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
                //  console.log(country)
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
              data={country}
              />

              ))} 
              
        </div>

    </div>
  );
};

export default Browse;
