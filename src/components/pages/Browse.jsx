import React from 'react';
import { useEffect } from 'react';
import { populationReader } from '../functions/populationReader';

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
              population={populationReader(country.population)}
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
