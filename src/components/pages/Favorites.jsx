import React from 'react';
import { useSelector } from 'react-redux'; 
import { favoriteCountriesSelector } from '../../features/countries/countriesSlice';
import { populationReader } from '../functions/populationReader';
import BSCard from '../UIs/BSCard';


function Favorites() {
    const favoriteCountries = useSelector(favoriteCountriesSelector);
  return (
    <div className='page'>

        {favoriteCountries.map((country, index) => (   
              <BSCard 
              key={index}
              commonName={country} 
              url={`${country}`}
              />

              ))
        }
    </div>
  )
}

export default Favorites;
/*
              officialName={country.name.official}
              population={populationReader(country.population)}
              flag={country.flags.png}
              capital={country.capital}
              currencies={country.currencies}
              languages={country.languages}
              
              action={null}
              isFavorite={true}
              data={country}
*/