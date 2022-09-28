import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteCountriesSelector, setFavorites } from '../../features/countries/countriesSlice';

const image = "http://source.unsplash.com/IoQioGLrz3Y";

function Home() {

  const dispatch = useDispatch();
  const favorites = useSelector(favoriteCountriesSelector);

  useEffect(()=>{
    const tempArray = localStorage.getItem('favoriteCountries').split(',');
    dispatch(setFavorites(tempArray));
    console.log(tempArray);
  },[]);

  return (
    <div className= "homeBox" >
      <p className="refText" > Victor Griñán's </p>
          
      {favorites.map((item, i) => {
        <p key={i} className="refText" >{item}</p>
      })}

      <h1 className="refText title">Countries App</h1>

    <div className='refs'>
          <div>
          <p className="refText" > "https://restcountries.com/" </p>
          </div>
          <div>
          <p className="refText" >Photo by Nataliya Vaitkevich: https://www.pexels.com/photo/passport-and-polaroid-pictures-7235902/</p>
          </div>
          
    </div>
      
        
    </div>
  )
}

export default Home;
