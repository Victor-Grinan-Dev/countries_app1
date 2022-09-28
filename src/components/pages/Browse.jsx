import React from 'react';
import { useEffect } from 'react';
import { populationReader } from '../functions/populationReader';

import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  initializeCountries,
  search,
  favoriteCountriesSelector,
} from '../../features/countries/countriesSlice'

import BSCard from '../UIs/BSCard';

function Browse() {

  const dispatch = useDispatch();

  const countries = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);

  const favoriteList = useSelector(favoriteCountriesSelector);
  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

  //TODO: take idea from https://youtu.be/GuA0_Z1llYU

  useEffect(()=>{
    localStorage.setItem('favoriteCountries', favoriteList);
  },[favoriteList]);

  const  countriesFilter = countries.filter((res) => {
    return res.name.common.toLowerCase().includes(searchInput.toLowerCase());
  });

  const checkIsFavorite = (country) => {
    let result = false;
    for(let item in favoriteList){
      if (favoriteList[item].name.common === country.name.common){
        console.log('yes', favoriteList[item].name.common)
        return true;
      }
    }
    return result;
  }

  const handleFavorite = (item) => {
    dispatch(addToFavorite(item))
  }

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
              action={()=>handleFavorite(country)}
              isFavorite={()=>checkIsFavorite(country)}
              data={country}
              />
              ))} 
              
        </div>

    </div>
  );
};

export default Browse;
