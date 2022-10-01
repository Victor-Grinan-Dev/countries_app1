import React from 'react';
import { useSelector } from 'react-redux';
import { favoriteCountriesSelector } from '../../features/countries/countriesSlice';
import FavCard from '../UIs/FavCard';

function Favorites() {
  const countries = useSelector(favoriteCountriesSelector);

  console.log(countries)
  return (
    <div className='page' style={{ display:"flex", alignItems:"center", flexDirection:"column"}}>
      <h2>Favorites</h2>
      <ol className='ordered-list'>
        {
          countries.map((c, i) => (
            <li  key={i}>
              <FavCard name={c}/>
            </li>
          ))
        }
      </ol>
    </div>

  )
}

export default Favorites