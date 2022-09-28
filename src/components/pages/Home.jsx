import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteCountriesSelector, setFavorites } from '../../features/countries/countriesSlice';

const image = "http://source.unsplash.com/IoQioGLrz3Y";

function Home() {

  const dispatch = useDispatch();
  const favorites = useSelector(favoriteCountriesSelector);

  useEffect(()=>{ 
    const local = localStorage.getItem('favoriteCountries');
    if (local){
      console.log(local, 'length > 1', local.length > 1)
      let temp;
      if (local.length > 1){
        
        temp = (local.split(','))
      }else{
        temp = new Array(1).fill(local);
      }
      dispatch(setFavorites(temp));
    } 
    console.log('local: ', local, 'favorites:', favorites);
  },[]);

  console.log('favorites:', favorites);

  return (
    <div className= "homeBox" >
      <p className="refText" > Victor Griñán's </p>

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
