import React from 'react';
import { useEffect } from 'react';
import { populationReader } from '../functions/populationReader';

import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  initializeCountries,
  search,
  favoriteCountriesSelector,
  setFavorites,
} from '../../features/countries/countriesSlice'

import BSCard from '../UIs/BSCard';

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

  useEffect(()=>{ 
    const local = localStorage.getItem('favoriteCountries');
    if (local){
      let temp;
      if (local.length > 1){
        temp = (local.split(','))
      }else{
        temp = new Array(1).fill(local);
      }
      dispatch(setFavorites(temp));
    } 
    console.log('local: ', local, 'favorites:', favoriteList);
  },[]);

  const checkIsFavorite = (commonName) => {
    let result = false;
    for(let item in favoriteList){
      if(item === commonName){
        console.log(commonName, 'is in list');
        result = true;
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
              isFavorite={checkIsFavorite(country.name.common)}
              data={country}
              />
              ))} 
              
        </div>

    </div>
  );
};

export default Browse;
